import React, { useState, useEffect, useCallback, useRef } from 'react';
import Editor from "@monaco-editor/react";
import styles from './SchemaValidator.module.css';
import { X } from 'lucide-react';
// Import the generated definitions
import schemaDefinitionsData from '../lib/schemaDefinitions.json';
// Import the validation function
import { performValidation } from '../lib/validationLogic';

// Define interfaces based on the structure of schemaDefinitions.json
interface SchemaPropertyDefinition {
    id: string;
    label: string;
    comment: string;
    domainIncludes: string[];
    rangeIncludes: string[];
}

interface SchemaTypeDefinition {
    id: string;
    label: string;
    comment: string;
    properties: string[]; // IDs of properties associated with this type
}

interface SchemaDefinitions {
    types: { [key: string]: SchemaTypeDefinition };
    properties: { [key: string]: SchemaPropertyDefinition };
}

// Cast the imported JSON data to our interface
const schemaDefinitions: SchemaDefinitions = schemaDefinitionsData as SchemaDefinitions;

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

const SchemaValidator: React.FC<SchemaValidatorProps> = ({ initialJson = '' }) => {
  const [jsonInput, setJsonInput] = useState(initialJson);
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<'errors' | 'warnings' | null>(null);
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

    try {
        // Call the external validation logic
        const resultFromLogic = performValidation(jsonToValidate);

        // Need to reconstruct the `properties` array for the UI breakdown,
        // as the external function might not return it in the required detail.
        // Or adjust `performValidation` to return properties if needed.
        // For now, let's parse again to build the properties breakdown.
        let propertiesForDisplay: PropertyValidation[] = [];
        try {
            const parsedJsonForDisplay = JSON.parse(jsonToValidate);
            const buildPath = (currentPath: string, key: string | number): string => {
                if (typeof key === 'number') return `${currentPath}[${key}]`;
                return currentPath ? `${currentPath}.${key}` : key;
            };
            const collectProperties = (node: any, currentPath: string) => {
                if (typeof node !== 'object' || node === null) return;
                Object.entries(node).forEach(([key, value]) => {
                    const propertyPath = buildPath(currentPath, key);
                    const lineNumber = findLineNumber(jsonToValidate, propertyPath);
                    const expectedTypeError = resultFromLogic.errorLocations.find(loc => loc.parentPath === currentPath && loc.message.includes(`Invalid value type for "${key}"`));
                    const expectedType = expectedTypeError?.message.match(/Expected (.*?),/)?.[1];

                    propertiesForDisplay.push({
                        name: key,
                        value: value,
                        type: Array.isArray(value) ? 'Array' : typeof value,
                        path: propertyPath,
                        lineNumber: lineNumber,
                        expectedType: expectedType
                        // Assign errors/warnings based on resultFromLogic if needed for display
                    });
                    if (typeof value === 'object') collectProperties(value, propertyPath);
                });
            };
            collectProperties(parsedJsonForDisplay, '');
        } catch {
            // If JSON is invalid, properties array remains empty
        }

        // Set the state with results from logic and reconstructed properties
        setValidationResult({
            ...resultFromLogic,
            properties: propertiesForDisplay, // Use reconstructed properties for UI
        });

    } catch (error) { // Catch errors during the performValidation call itself (unlikely now)
      console.error("Error during validation call:", error);
       setValidationResult({
        isValid: false,
        errors: ['Error during validation process.'],
        warnings: [],
        properties: [],
        errorLocations: [],
      });
    } finally {
      setIsLoading(false);
    }
  }, [jsonInput]);

  useEffect(() => {
    // Initialize with initialJson if provided and input is empty
    const queryParams = new URLSearchParams(window.location.search);
    const codeFromQuery = queryParams.get('code');
    const initialValue = codeFromQuery || initialJson;

    if (initialValue && !jsonInput) {
      setJsonInput(initialValue);
      // Automatically validate if there's initial value
      validateSchema(initialValue);
    } else if (initialValue && initialValue !== jsonInput) {
        // If query param changes, update and re-validate
        setJsonInput(initialValue);
        validateSchema(initialValue);
    }
  }, [initialJson, validateSchema]); // Rerun if initialJson changes

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

  const validateWithSchemaOrg = () => {
    try {
      // Make sure the JSON is valid first
      JSON.parse(jsonInput);
      
      // Create the schema.org validator URL
      const encodedJson = encodeURIComponent(jsonInput);
      const validatorUrl = `https://validator.schema.org/?code=${encodedJson}`;
      
      // Open in new tab
      window.open(validatorUrl, '_blank');
    } catch (error) {
      alert('Please enter valid JSON before validating with Schema.org');
    }
  };

  const handleErrorClick = (location: ErrorLocation) => {
    if (editorRef.current) {
      const editor = editorRef.current;
      editor.revealLineInCenter(location.startLineNumber);
      editor.setPosition({ lineNumber: location.startLineNumber, column: 1 });
      editor.focus();
      setShowErrorPopup(false);
      setPopupContent(null);
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

  const openPopup = (type: 'errors' | 'warnings') => {
    setPopupContent(type);
    setShowErrorPopup(true);
  };

  const closePopup = () => {
    setShowErrorPopup(false);
    setPopupContent(null);
  };

  return (
    <div className={styles.container}>
      {showErrorPopup && validationResult && popupContent && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.popupCloseButton} onClick={closePopup}>
              <X size={18} />
            </button>
            <h3>Detailed {popupContent === 'errors' ? 'Errors' : 'Warnings'}</h3>
            <div className={styles.popupList}>
              {(popupContent === 'errors' ? validationResult.errors : validationResult.warnings).map((item, index) => {
                const location = validationResult.errorLocations.find(loc => loc.message === item && loc.severity === popupContent.slice(0, -1));
                return (
                  <div
                    key={index}
                    className={popupContent === 'errors' ? styles.popupErrorItem : styles.popupWarningItem}
                    onClick={() => location && handleErrorClick(location)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (location && (e.key === 'Enter' || e.key === ' ')) {
                        handleErrorClick(location);
                      }
                    }}
                  >
                    <span className={styles.popupItemLocation}>
                      {location ? `Line ${location.startLineNumber}${location.parentPath ? ` (in ${location.parentPath})` : ''}` : 'Location Unknown'}:
                    </span>
                    <span className={styles.popupItemMessage}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className={styles.splitPane}>
        <div className={styles.leftPane}>
          <div className={styles.editorHeader}>
            <h3>JSON-LD Input</h3>
            <div className={styles.headerButtons}>
              <button
                className={styles.schemaOrgButton}
                onClick={validateWithSchemaOrg}
                disabled={!jsonInput.trim()}
              >
                Schema.org
              </button>
              <button
                className={styles.shareButton}
                onClick={generateShareUrl}
                disabled={!jsonInput.trim()}
              >
                Share
              </button>
            </div>
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
                    <span
                      className={`${styles.errorCount} ${styles.clickableSummary}`}
                      onClick={() => openPopup('errors')}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openPopup('errors'); }}
                    >
                      {validationResult.errors.length} ERRORS
                    </span>
                  )}
                  {validationResult.warnings.length > 0 && (
                    <span
                     className={`${styles.warningCount} ${styles.clickableSummary}`}
                     onClick={() => openPopup('warnings')}
                     role="button"
                     tabIndex={0}
                     onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openPopup('warnings'); }}
                    >
                     &nbsp;{validationResult.warnings.length} WARNINGS
                    </span>
                  )}
                </div>
              </div>

              {validationResult.unspecifiedType && (
                <div className={styles.unspecifiedMessage}>
                  No schema type specified. Select a type to validate against Schema.org standards.
                </div>
              )}

              {validationResult.errors.length > 0 && !showErrorPopup && (
                <div className={styles.errorList}>
                  <h4>Errors:</h4>
                  {validationResult.errors.map((error, i) => (
                    <div
                      key={i}
                      className={styles.propertyError}
                    >
                      ⚠ {error}
                    </div>
                  ))}
                </div>
              )}
              
              {validationResult.warnings.length > 0 && !showErrorPopup && (
                <div className={styles.warningList}>
                   <h4>Warnings:</h4>
                   {validationResult.warnings.map((warning, i) => (
                     <div
                      key={i}
                      className={styles.propertyWarning}
                     >
                      ℹ {warning}
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