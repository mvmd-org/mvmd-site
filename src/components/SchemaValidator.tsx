import React, { useState } from 'react';
import styles from './SchemaValidator.module.css';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  properties: PropertyValidation[];
}

interface PropertyValidation {
  name: string;
  value: any;
  type: string;
  path: string;
  properties?: PropertyValidation[];
  errors?: string[];
  warnings?: string[];
}

const SchemaValidator: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateProperty = (name: string, value: any, path: string): PropertyValidation => {
    const result: PropertyValidation = {
      name,
      value: value,
      type: Array.isArray(value) ? 'Array' : typeof value,
      path,
      errors: [],
      warnings: [],
      properties: []
    };

    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        // Handle arrays
        value.forEach((item, index) => {
          const itemValidation = validateProperty(
            `[${index}]`,
            item,
            `${path}[${index}]`
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

    // Validate specific properties
    switch (name) {
      case '@type':
        if (typeof value !== 'string') {
          result.errors?.push('@type must be a string');
        }
        break;
      case '@context':
        if (typeof value !== 'string' && typeof value !== 'object') {
          result.errors?.push('@context must be a string or an object');
        }
        break;
      case 'url':
      case 'contentUrl':
        if (typeof value === 'string') {
          try {
            new URL(value);
          } catch {
            result.errors?.push(`${name} must be a valid URL`);
          }
        } else {
          result.errors?.push(`${name} must be a string URL`);
        }
        break;
      case 'encodingFormat':
        if (typeof value !== 'string') {
          result.errors?.push('encodingFormat must be a string');
        }
        break;
    }

    return result;
  };

  const validateSchema = async () => {
    setIsLoading(true);
    setValidationResult(null);

    try {
      const parsedJson = JSON.parse(jsonInput);
      const properties: PropertyValidation[] = [];
      const result: ValidationResult = {
        isValid: true,
        errors: [],
        warnings: [],
        properties: []
      };

      // Validate each property and build the breakdown
      Object.entries(parsedJson).forEach(([key, value]) => {
        const propertyValidation = validateProperty(key, value, key);
        properties.push(propertyValidation);
        
        if (propertyValidation.errors?.length) {
          result.isValid = false;
          result.errors.push(...propertyValidation.errors);
        }
        if (propertyValidation.warnings?.length) {
          result.warnings.push(...propertyValidation.warnings);
        }
      });

      // Check if data object contains required Schema.org properties
      const data = parsedJson.data;
      if (data) {
        if (!data['@type']) {
          result.isValid = false;
          result.errors.push('Missing required @type property in data object');
        }
        if (!data['@context']) {
          result.isValid = false;
          result.errors.push('Missing required @context property in data object');
        }
      }

      result.properties = properties;
      setValidationResult(result);
    } catch (error) {
      setValidationResult({
        isValid: false,
        errors: ['Invalid JSON syntax: ' + (error as Error).message],
        warnings: [],
        properties: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderPropertyValue = (prop: PropertyValidation) => {
    if (prop.type === 'object' || prop.type === 'Array') {
      return (
        <div className={styles.nestedProperties}>
          {prop.properties?.map((nestedProp, index) => (
            <div key={index} className={styles.property}>
              <div className={styles.propertyHeader}>
                <span className={styles.propertyName}>{nestedProp.name}</span>
                <span className={styles.propertyType}>{nestedProp.type}</span>
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
    return (
      <div className={styles.propertyValue}>
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
          </div>
          <textarea
            className={styles.jsonInput}
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Paste your JSON-LD schema here..."
            spellCheck="false"
          />
          <button
            className={styles.validateButton}
            onClick={validateSchema}
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
                  {validationResult.isValid ? (
                    <span className={styles.validType}>✓ Valid Schema</span>
                  ) : (
                    <span className={styles.invalidType}>⚠ Invalid Schema</span>
                  )}
                </h3>
                <div className={styles.resultSummary}>
                  {validationResult.errors.length} ERRORS &nbsp; 
                  {validationResult.warnings.length} WARNINGS
                </div>
              </div>

              <div className={styles.propertyBreakdown}>
                {validationResult.properties.map((prop, index) => (
                  <div key={index} className={styles.property}>
                    <div className={styles.propertyHeader}>
                      <span className={styles.propertyName}>{prop.name}</span>
                      <span className={styles.propertyType}>{prop.type}</span>
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