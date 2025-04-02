const schemaDefinitionsData = require('./schemaDefinitions.json');

// Define interfaces (can be shared or redefined here if not importing from component)
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
    properties: string[];
}

interface SchemaDefinitions {
    types: { [key: string]: SchemaTypeDefinition };
    properties: { [key: string]: SchemaPropertyDefinition };
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  // properties field might be less useful for API, keep errorLocations
  // properties: PropertyValidation[]; 
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

// Cast the imported JSON data
const schemaDefinitions: SchemaDefinitions = schemaDefinitionsData as SchemaDefinitions;

// Helper function to find line number (simplified for API context)
// In API context, exact line numbers are less critical than just finding errors.
// You could pass the full json string here if needed, or simplify.
const findLineNumberInString = (jsonString: string, path: string): number | undefined => {
    // Implementation from SchemaValidator.tsx can be copied here if exact lines needed
    // For now, return undefined as API might not need exact line highlighting
    return undefined;
};

const buildPath = (currentPath: string, key: string | number): string => {
    if (typeof key === 'number') {
        return `${currentPath}[${key}]`;
    }
    return currentPath ? `${currentPath}.${key}` : key;
};

exports.performValidation = function(jsonString: string): ValidationResult {
    const errorLocations: ErrorLocation[] = [];
    const result: ValidationResult = {
        isValid: true,
        errors: [],
        warnings: [],
        errorLocations: [],
        unspecifiedType: false
    };

    try {
        const parsedJson = JSON.parse(jsonString);
        const schemaType = parsedJson['@type'];
        const schemaDefinition = schemaType ? schemaDefinitions.types[schemaType] : undefined;

        if (!schemaType) {
            result.unspecifiedType = true;
            const message = 'Schema type (@type) is unspecified in the JSON input.';
            result.warnings.push(message);
            // Optionally add location if findLineNumber is implemented fully
            result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: message, severity: 'warning', parentPath: '' });
            result.isValid = false; 
        } else if (!schemaDefinition) {
            const message = `Schema type "${schemaType}" is not defined in the loaded schema definitions. Validation accuracy may be limited.`;
            result.warnings.push(message);
            result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: message, severity: 'warning', parentPath: '' });
            // Continue validation for structure but not type specifics
        }

        // Recursive function to validate properties
        const validateNode = (node: any, currentPath: string, currentSchemaDef?: SchemaTypeDefinition, isInsideCustomNamespace: boolean = false) => {
            if (typeof node !== 'object' || node === null) return;

            Object.entries(node).forEach(([key, value]) => {
                const propertyPath = buildPath(currentPath, key);
                const propertyDef = schemaDefinitions.properties[key];
                const isCurrentKeyNamespaced = key.includes(':');

                // Check if property is recognized by Schema.org
                // ONLY perform this check if we are NOT inside a custom namespace
                if (!isInsideCustomNamespace && currentPath !== '@context' && !propertyDef && !key.startsWith('@') && !isCurrentKeyNamespaced) {
                    const message = `Property "${key}" is not a recognized schema.org property.`;
                    // Flag as an error, not a warning
                    result.errors.push(message);
                    result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: message, severity: 'error', parentPath: currentPath });
                    result.isValid = false; // Mark schema as invalid
                }

                // --- Value Type Validation ---
                if (propertyDef && propertyDef.rangeIncludes.length > 0) {
                    const expectedTypes = propertyDef.rangeIncludes;
                    let valueTypeValid = false;
                    const actualValueType = typeof value;
                    const providedObjectType = (actualValueType === 'object' && value !== null && value['@type']) ? value['@type'] : null;

                    // 1. Check if actual type matches expected primitive/literal types
                    if (expectedTypes.includes('Text') && actualValueType === 'string') valueTypeValid = true;
                    else if (expectedTypes.includes('URL') && actualValueType === 'string') {
                        if (typeof value === 'string') {
                           try { new URL(value); valueTypeValid = true; } catch {}
                        }
                    }
                    else if (expectedTypes.includes('Number') && actualValueType === 'number') valueTypeValid = true;
                    else if (expectedTypes.includes('Integer') && Number.isInteger(value)) valueTypeValid = true;
                    else if (expectedTypes.includes('Boolean') && actualValueType === 'boolean') valueTypeValid = true;
                    // TODO: Add Date, DateTime, Duration, etc. literal checks
                    
                    // 2. Check if actual value is an object with a matching expected @type
                    else if (providedObjectType && expectedTypes.includes(providedObjectType)) {
                         valueTypeValid = true;
                    }
                    
                    // 3. Check if an object is provided where a literal was expected (or type mismatch)
                    //    This is the core check for the structural issue.
                    else if (actualValueType === 'object' && value !== null) {
                       // Is *any* expected type potentially an object type (heuristic: check if it exists in schemaDefinitions.types)?
                       const expectsObjectType = expectedTypes.some(type => schemaDefinitions.types[type]);
                       if (!expectsObjectType) {
                         // If no expected type is an object type, getting an object is likely wrong.
                         valueTypeValid = false; 
                       } else if (providedObjectType && !expectedTypes.includes(providedObjectType)) {
                         // If it *does* expect object types, but the provided @type doesn't match any of them.
                         valueTypeValid = false;
                       } else if (!providedObjectType && expectsObjectType) {
                         // If it expects specific object types but the provided object has NO @type.
                         // Allow this for now, could be stricter later? Schema.org sometimes allows this.
                         // valueTypeValid = false; 
                       }
                       // If expectsObjectType is true and providedObjectType is null or matches, we assume valid for now
                       // or handled by rule #2. A simple object might be okay for some properties.
                    }

                    // Final error reporting: Report if not valid.
                    if (!valueTypeValid) {
                        // Determine the description for the error message
                        let receivedTypeDescriptionForMessage: string;
                        if (providedObjectType) {
                          receivedTypeDescriptionForMessage = `object with @type: ${providedObjectType}`;
                        } else if (actualValueType === 'object' && value !== null) {
                          receivedTypeDescriptionForMessage = 'generic object (without recognized @type)';
                        } else {
                          receivedTypeDescriptionForMessage = actualValueType;
                        }
                        
                        const message = `Invalid value type for "${key}". Expected ${expectedTypes.join(' or ')}, but received ${receivedTypeDescriptionForMessage}.`;
                        result.errors.push(message);
                        result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: message, severity: 'error', parentPath: currentPath });
                        result.isValid = false;
                    }
                }
                // --- End Value Type Validation ---

                // Recursively validate nested objects/arrays
                if (typeof value === 'object' && value !== null) {
                     // Determine if the next level is inside a custom namespace
                     const nextLevelInsideCustomNamespace = isInsideCustomNamespace || isCurrentKeyNamespaced;
                    if (Array.isArray(value)) {
                        value.forEach((item, index) => {
                            // Pass the flag down for arrays
                            validateNode(item, `${propertyPath}[${index}]`, currentSchemaDef, nextLevelInsideCustomNamespace);
                        });
                    } else {
                        const nestedSchemaType = value['@type'];
                        const nestedSchemaDef = nestedSchemaType ? schemaDefinitions.types[nestedSchemaType] : undefined;
                        // Pass the flag down for objects
                        validateNode(value, propertyPath, nestedSchemaDef || currentSchemaDef, nextLevelInsideCustomNamespace);
                    }
                }
            });
        };

        // Start validation from the root node (initial call is not inside custom namespace)
        validateNode(parsedJson, '', schemaDefinition, false);

        // Final result assignment
        result.errorLocations = errorLocations; // Update with collected locations

    } catch (error) {
        result.isValid = false;
        let errorMessage = 'Invalid JSON input';
        if (error instanceof Error) {
            errorMessage = `Invalid JSON: ${error.message}`;
        }
        result.errors.push(errorMessage);
        result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: errorMessage, severity: 'error', parentPath: '' });
    }

    return result;
}; 