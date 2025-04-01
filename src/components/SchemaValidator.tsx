import React, { useState, useEffect, useCallback, useRef } from 'react';
import Editor from "@monaco-editor/react";
import styles from './SchemaValidator.module.css';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  properties: PropertyValidation[];
  errorLocations: ErrorLocation[];
  unspecifiedType?: boolean;
}

interface ErrorLocation {
  startLineNumber: number;
  endLineNumber: number;
  message: string;
  severity: 'error' | 'warning';
  parentPath?: string;
}

interface PropertyValidation {
  name: string;
  value: any;
  type: string;
  path: string;
  properties?: PropertyValidation[];
  errors?: string[];
  warnings?: string[];
  expectedType?: string;
  lineNumber?: number;
}

interface SchemaValidatorProps {
  initialJson?: string;
}

// Schema.org type definitions
interface SchemaType {
  properties: {
    [key: string]: {
      type: string[];
      description: string;
      required?: boolean;
    };
  };
  required?: string[];
}

const schemaTypes: { [key: string]: SchemaType } = {
  VideoObject: {
    properties: {
      '@type': {
        type: ['string'],
        description: 'The type of the item.',
        required: true
      },
      '@context': {
        type: ['string', 'object'],
        description: 'The context for the schema.',
        required: true
      },
      name: {
        type: ['string'],
        description: 'The name of the video.',
        required: true
      },
      description: {
        type: ['string'],
        description: 'A description of the video.',
        required: true
      },
      thumbnailUrl: {
        type: ['string', 'URL'],
        description: 'A thumbnail image for the video.'
      },
      uploadDate: {
        type: ['string', 'Date'],
        description: 'The date the video was uploaded.',
        required: true
      },
      duration: {
        type: ['string', 'Duration'],
        description: 'The duration of the video.'
      },
      contentUrl: {
        type: ['string', 'URL'],
        description: 'The URL of the video content.',
        required: true
      },
      embedUrl: {
        type: ['string', 'URL'],
        description: 'The URL for embedding the video.'
      },
      interactionStatistic: {
        type: ['object'],
        description: 'Statistics about video interaction.'
      }
    },
    required: ['@type', '@context', 'name', 'description', 'uploadDate', 'contentUrl']
  },
  // Add more schema types as needed
};

const SchemaValidator: React.FC<SchemaValidatorProps> = ({ initialJson = '' }) => {
  const [jsonInput, setJsonInput] = useState(initialJson);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>('');
  const editorRef = useRef<any>(null);

  const findLineNumber = (json: string, path: string): number | undefined => {
    const lines = json.split('\n');
    
    // For root level (finding the first opening brace)
    if (!path) {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.includes('{')) {
          return i + 1;
        }
      }
      return undefined;
    }

    // Split path into parts, handling both dot notation and array indices
    const pathParts = path.split('.').reduce((parts: string[], part) => {
      // Handle array notation [n]
      if (part.includes('[')) {
        const [arrayName, ...indices] = part.split('[');
        if (arrayName) parts.push(arrayName);
        parts.push(...indices.map(idx => idx.replace(']', '')));
      } else {
        parts.push(part);
      }
      return parts;
    }, []);

    let currentDepth = 0;
    let inQuotes = false;
    let currentPathIndex = 0;
    let inArray = false;
    let arrayIndex = 0;
    let bracketStack: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        
        // Handle quotes
        if (char === '"' && (j === 0 || line[j - 1] !== '\\')) {
          inQuotes = !inQuotes;
          
          // Check if we're at the start of a property name
          if (inQuotes) {
            const restOfLine = line.slice(j + 1);
            const quoteEnd = restOfLine.indexOf('"');
            if (quoteEnd !== -1) {
              const propertyName = restOfLine.slice(0, quoteEnd);
              
              // Check if this property matches our current path part
              if (propertyName === pathParts[currentPathIndex]) {
                // If this is the last part of our path, we found our target
                if (currentPathIndex === pathParts.length - 1) {
                  return i + 1;
                }
                // Move to next path part
                currentPathIndex++;
              }
            }
          }
          continue;
        }
        
        if (!inQuotes) {
          if (char === '{') {
            bracketStack.push('{');
            currentDepth++;
          } else if (char === '[') {
            bracketStack.push('[');
            inArray = true;
            arrayIndex = 0;
          } else if (char === '}' || char === ']') {
            const lastBracket = bracketStack.pop();
            if (lastBracket === '{') {
              currentDepth--;
            } else if (lastBracket === '[') {
              inArray = false;
            }
          } else if (char === ',' && inArray) {
            arrayIndex++;
            // Check if current array index matches our path part
            if (pathParts[currentPathIndex] === arrayIndex.toString()) {
              // If this is the last part of our path, we found our target
              if (currentPathIndex === pathParts.length - 1) {
                return i + 1;
              }
              // Move to next path part
              currentPathIndex++;
            }
          }
        }
      }
    }

    return undefined;
  };

  const validateSchema = useCallback(async (input?: string) => {
    const jsonToValidate = input || jsonInput;
    setIsLoading(true);
    setValidationResult(null);

    const buildPath = (currentPath: string, key: string | number): string => {
      if (typeof key === 'number') {
        return `${currentPath}[${key}]`;
      }
      return currentPath ? `${currentPath}.${key}` : key;
    };

    try {
      const parsedJson = JSON.parse(jsonToValidate);
      const properties: PropertyValidation[] = [];
      const errorLocations: ErrorLocation[] = [];
      const result: ValidationResult = {
        isValid: true,
        errors: [],
        warnings: [],
        properties: [],
        errorLocations: [],
        unspecifiedType: false
      };

      // Get the schema type from the @type property
      const schemaType = parsedJson['@type'];
      const schemaDefinition = schemaTypes[schemaType];

      if (!schemaType) {
        result.unspecifiedType = true;
        // Find the root object's line number for highlighting
        const rootLineNumber = findLineNumber(jsonToValidate, '');
        if (rootLineNumber) {
          errorLocations.push({
            startLineNumber: rootLineNumber,
            endLineNumber: rootLineNumber,
            message: 'Schema type is unspecified',
            severity: 'warning',
            parentPath: ''
          });
        }
      } else if (!schemaDefinition) {
        result.warnings.push(`Schema type "${schemaType}" is not in our validation set`);
      }

      // Function to recursively validate and collect line numbers
      const validateWithPath = (obj: any, currentPath: string = '') => {
        if (Array.isArray(obj)) {
          obj.forEach((item, index) => {
            const path = buildPath(currentPath, index);
            if (typeof item === 'object' && item !== null) {
              validateWithPath(item, path);
            } else {
              const lineNumber = findLineNumber(jsonToValidate, path);
              const propertyValidation = validateProperty(
                `[${index}]`,
                item,
                path,
                undefined,
                lineNumber
              );
              properties.push(propertyValidation);
            }
          });
        } else {
          Object.entries(obj).forEach(([key, value]) => {
            const path = buildPath(currentPath, key);
            const lineNumber = findLineNumber(jsonToValidate, path);
            
            const propertyValidation = validateProperty(
              key,
              value,
              path,
              schemaDefinition?.properties[key],
              lineNumber
            );
            properties.push(propertyValidation);
            
            if (propertyValidation.errors?.length) {
              result.isValid = false;
              result.errors.push(...propertyValidation.errors);
              if (lineNumber) {
                propertyValidation.errors.forEach(error => {
                  errorLocations.push({
                    startLineNumber: lineNumber,
                    endLineNumber: lineNumber,
                    message: error,
                    severity: 'error'
                  });
                });
              }
            }
            
            if (propertyValidation.warnings?.length) {
              result.warnings.push(...propertyValidation.warnings);
              if (lineNumber) {
                propertyValidation.warnings.forEach(warning => {
                  errorLocations.push({
                    startLineNumber: lineNumber,
                    endLineNumber: lineNumber,
                    message: warning,
                    severity: 'warning'
                  });
                });
              }
            }

            // Recursively validate nested objects and arrays
            if (typeof value === 'object' && value !== null) {
              validateWithPath(value, path);
            }
          });
        }
      };

      validateWithPath(parsedJson);

      // Check for missing required properties
      if (schemaDefinition?.required) {
        for (const requiredProp of schemaDefinition.required) {
          if (!(requiredProp in parsedJson)) {
            result.isValid = false;
            const error = `Missing required property: ${requiredProp}`;
            result.errors.push(error);
            
            // Find the parent object's line number
            const parentLineNumber = findLineNumber(jsonToValidate, '');
            if (parentLineNumber) {
              errorLocations.push({
                startLineNumber: parentLineNumber,
                endLineNumber: parentLineNumber,
                message: error,
                severity: 'error',
                parentPath: ''
              });
            }
          }
        }
      }

      result.properties = properties;
      result.errorLocations = errorLocations;
      setValidationResult(result);

      // Update editor decorations
      if (editorRef.current) {
        const editor = editorRef.current;
        const monaco = editor.getModel();
        
        const decorations = errorLocations.map(loc => ({
          range: new monaco.Range(
            loc.startLineNumber,
            1,
            loc.endLineNumber,
            1
          ),
          options: {
            isWholeLine: true,
            className: loc.severity === 'error' ? styles.errorLine : styles.warningLine,
            glyphMarginClassName: loc.severity === 'error' ? styles.errorGlyph : styles.warningGlyph,
            hoverMessage: { value: loc.message }
          }
        }));
        
        editor.deltaDecorations([], decorations);
      }

    } catch (error) {
      // Create a single property for the invalid JSON
      const errorResult: ValidationResult = {
        isValid: false,
        errors: ['Invalid JSON syntax: ' + (error as Error).message],
        warnings: [],
        properties: [{
          name: 'root',
          value: jsonToValidate,
          type: 'invalid',
          path: 'root',
          errors: ['Invalid JSON syntax: ' + (error as Error).message],
          warnings: [],
          properties: []
        }],
        errorLocations: [{
          startLineNumber: 1,
          endLineNumber: 1,
          message: 'Invalid JSON syntax: ' + (error as Error).message,
          severity: 'error'
        }]
      };
      setValidationResult(errorResult);
    } finally {
      setIsLoading(false);
    }
  }, [jsonInput]);

  useEffect(() => {
    if (initialJson && !jsonInput) {  // Only set if we have initialJson and no current input
      setJsonInput(initialJson);
      validateSchema(initialJson);
    }
  }, [initialJson, validateSchema, jsonInput]);

  const generateShareUrl = () => {
    try {
      // Make sure the JSON is valid first
      JSON.parse(jsonInput);
      
      // Create the shareable URL
      const baseUrl = window.location.origin + window.location.pathname;
      const encodedJson = encodeURIComponent(jsonInput);
      const url = `${baseUrl}?code=${encodedJson}`;
      
      setShareUrl(url);
      
      // Copy to clipboard
      navigator.clipboard.writeText(url).then(() => {
        alert('Shareable URL copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy URL:', err);
        alert('Generated shareable URL but failed to copy to clipboard. You can copy it manually from the console.');
        console.log('Shareable URL:', url);
      });
    } catch (error) {
      alert('Please enter valid JSON before generating a shareable URL');
    }
  };

  const handleErrorClick = (location: ErrorLocation) => {
    if (editorRef.current) {
      const editor = editorRef.current;
      // Reveal the line in the editor
      editor.revealLineInCenter(location.startLineNumber);
      // Set the cursor to the line
      editor.setPosition({ lineNumber: location.startLineNumber, column: 1 });
      // Focus the editor
      editor.focus();
    }
  };

  const handlePropertyClick = (lineNumber?: number) => {
    if (lineNumber && editorRef.current) {
      const editor = editorRef.current;
      editor.revealLineInCenter(lineNumber);
      editor.setPosition({ lineNumber: lineNumber, column: 1 });
      editor.focus();
    }
  };

  const validateProperty = (
    name: string,
    value: any,
    path: string,
    propertyDef?: SchemaType['properties'][string],
    lineNumber?: number
  ): PropertyValidation => {
    const result: PropertyValidation = {
      name,
      value: value,
      type: Array.isArray(value) ? 'Array' : typeof value,
      path,
      errors: [],
      warnings: [],
      properties: [],
      expectedType: propertyDef?.type.join(' | '),
      lineNumber
    };

    // Validate against schema definition if available
    if (propertyDef) {
      const valueType = Array.isArray(value) ? 'Array' : typeof value;
      const isValidType = propertyDef.type.some(type => {
        switch (type) {
          case 'string':
            return typeof value === 'string';
          case 'URL':
            if (typeof value === 'string') {
              try {
                new URL(value);
                return true;
              } catch {
                return false;
              }
            }
            return false;
          case 'Date':
            if (typeof value === 'string') {
              const date = new Date(value);
              return !isNaN(date.getTime());
            }
            return false;
          case 'Duration':
            return typeof value === 'string' && /^PT(\d+H)?(\d+M)?(\d+S)?$/.test(value);
          case 'object':
            return typeof value === 'object' && value !== null;
          default:
            return valueType === type.toLowerCase();
        }
      });

      if (!isValidType) {
        result.errors?.push(
          `Invalid type for ${name}. Expected ${propertyDef.type.join(' or ')}, got ${valueType}`
        );
      }
    }

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        // Handle arrays
        value.forEach((item, index) => {
          const itemValidation = validateProperty(
            `[${index}]`,
            item,
            path
          );
          result.properties?.push(itemValidation);
          
          if (itemValidation.errors?.length) {
            result.errors?.push(...itemValidation.errors);
          }
          if (itemValidation.warnings?.length) {
            result.warnings?.push(...itemValidation.warnings);
          }
        });
      } else {
        // Handle objects
        Object.entries(value).forEach(([key, val]) => {
          const propValidation = validateProperty(
            key,
            val,
            path ? `${path}.${key}` : key
          );
          result.properties?.push(propValidation);
          
          if (propValidation.errors?.length) {
            result.errors?.push(...propValidation.errors);
          }
          if (propValidation.warnings?.length) {
            result.warnings?.push(...propValidation.warnings);
          }
        });
      }
    }

    return result;
  };

  const renderPropertyValue = (prop: PropertyValidation) => {
    const hasErrors = prop.errors && prop.errors.length > 0;
    const hasWarnings = prop.warnings && prop.warnings.length > 0;
    
    if (prop.type === 'object' || prop.type === 'Array') {
      return (
        <div className={styles.nestedProperties}>
          {prop.properties?.map((nestedProp, index) => (
            <div 
              key={index} 
              className={`${styles.property} ${nestedProp.errors?.length ? styles.invalidProperty : ''} ${styles.clickableProperty}`}
              onClick={() => handlePropertyClick(nestedProp.lineNumber)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handlePropertyClick(nestedProp.lineNumber);
                }
              }}
            >
              <div className={styles.propertyHeader}>
                <span className={styles.propertyName}>{nestedProp.name}</span>
                <div className={styles.typeInfo}>
                  <span className={styles.propertyType}>{nestedProp.type}</span>
                  {nestedProp.expectedType && nestedProp.errors?.length > 0 && (
                    <span className={styles.expectedType}>Expected: {nestedProp.expectedType}</span>
                  )}
                </div>
              </div>
              {renderPropertyValue(nestedProp)}
              {nestedProp.errors?.map((error, i) => (
                <div key={i} className={styles.propertyError}>
                  ⚠ {error}
                </div>
              ))}
              {nestedProp.warnings?.map((warning, i) => (
                <div key={i} className={styles.propertyWarning}>
                  ℹ {warning}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    if (prop.type === 'invalid') {
      return (
        <div 
          className={`${styles.propertyValue} ${styles.invalidValue} ${styles.clickableProperty}`}
          onClick={() => handlePropertyClick(prop.lineNumber)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handlePropertyClick(prop.lineNumber);
            }
          }}
        >
          {prop.value}
        </div>
      );
    }

    return (
      <div 
        className={`${styles.propertyValue} ${hasErrors ? styles.invalidValue : ''} ${hasWarnings ? styles.warningValue : ''} ${styles.clickableProperty}`}
        onClick={() => handlePropertyClick(prop.lineNumber)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handlePropertyClick(prop.lineNumber);
          }
        }}
      >
        {typeof prop.value === 'string' ? prop.value : JSON.stringify(prop.value)}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.splitPane}>
        <div className={styles.leftPane}>
          <div className={styles.editorHeader}>
            <h3>JSON-LD Input</h3>
            <button
              className={styles.shareButton}
              onClick={generateShareUrl}
              disabled={!jsonInput.trim()}
            >
              Share
            </button>
          </div>
          <div className={styles.editorContainer}>
            <Editor
              height="100%"
              defaultLanguage="json"
              value={jsonInput}
              onChange={(value) => setJsonInput(value || '')}
              options={{
                minimap: { enabled: false },
                lineNumbers: 'on',
                glyphMargin: true,
                folding: true,
                lineDecorationsWidth: 5,
                formatOnPaste: true,
                scrollBeyondLastLine: false
              }}
              onMount={(editor) => {
                editorRef.current = editor;
              }}
            />
          </div>
          <button
            className={styles.validateButton}
            onClick={() => validateSchema()}
            disabled={isLoading || !jsonInput.trim()}
          >
            {isLoading ? 'Validating...' : 'Validate Schema'}
          </button>
        </div>

        <div className={styles.rightPane}>
          {validationResult && (
            <>
              <div className={styles.resultHeader}>
                <h3>
                  {validationResult.unspecifiedType ? (
                    <span className={styles.unspecifiedType}>Type Unspecified</span>
                  ) : validationResult.isValid ? (
                    <span className={styles.validType}>✓ Valid Schema</span>
                  ) : (
                    <span className={styles.invalidType}>⚠ Invalid Schema</span>
                  )}
                </h3>
                <div className={styles.resultSummary}>
                  {validationResult.errors.length > 0 && (
                    <span className={styles.errorCount}>{validationResult.errors.length} ERRORS</span>
                  )}
                  {validationResult.warnings.length > 0 && (
                    <span className={styles.warningCount}>&nbsp;{validationResult.warnings.length} WARNINGS</span>
                  )}
                </div>
              </div>

              {validationResult.unspecifiedType && (
                <div className={styles.unspecifiedMessage}>
                  No schema type specified. Select a type to validate against Schema.org standards.
                </div>
              )}

              {validationResult.errors.length > 0 && (
                <div className={styles.errorList}>
                  {validationResult.errors.map((error, i) => (
                    <div
                      key={i}
                      className={styles.propertyError}
                      onClick={() => {
                        const location = validationResult.errorLocations.find(loc => loc.message === error);
                        if (location) {
                          handleErrorClick(location);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          const location = validationResult.errorLocations.find(loc => loc.message === error);
                          if (location) {
                            handleErrorClick(location);
                          }
                        }
                      }}
                    >
                      ⚠ {error}
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.propertyBreakdown}>
                {validationResult.properties.map((prop, index) => (
                  <div 
                    key={index} 
                    className={`${styles.property} ${prop.errors?.length ? styles.invalidProperty : ''} ${styles.clickableProperty}`}
                    onClick={() => handlePropertyClick(prop.lineNumber)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handlePropertyClick(prop.lineNumber);
                      }
                    }}
                  >
                    <div className={styles.propertyHeader}>
                      <span className={styles.propertyName}>{prop.name}</span>
                      <div className={styles.typeInfo}>
                        <span className={styles.propertyType}>{prop.type}</span>
                        {prop.expectedType && prop.errors?.length > 0 && (
                          <span className={styles.expectedType}>Expected: {prop.expectedType}</span>
                        )}
                      </div>
                    </div>
                    {renderPropertyValue(prop)}
                    {prop.errors?.map((error, i) => (
                      <div key={i} className={styles.propertyError}>
                        ⚠ {error}
                      </div>
                    ))}
                    {prop.warnings?.map((warning, i) => (
                      <div key={i} className={styles.propertyWarning}>
                        ℹ {warning}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchemaValidator; 