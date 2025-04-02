import schemaDefinitionsData from './schemaDefinitions.json';

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

export function performValidation(jsonString: string): ValidationResult {
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
        const validateNode = (node: any, currentPath: string, currentSchemaDef?: SchemaTypeDefinition) => {
            if (typeof node !== 'object' || node === null) return;

            Object.entries(node).forEach(([key, value]) => {
                const propertyPath = buildPath(currentPath, key);
                const propertyDef = schemaDefinitions.properties[key];

                // Check if property is recognized by Schema.org
                // Ignore context (@...) itself, keys *within* @context, and namespaced (ns:...) properties
                if (currentPath !== '@context' && !propertyDef && !key.startsWith('@') && !key.includes(':')) {
                    const message = `Property "${key}" is not a recognized schema.org property.`;
                    // Flag as an error, not a warning
                    result.errors.push(message);
                    result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: message, severity: 'error', parentPath: currentPath });
                    result.isValid = false; // Mark schema as invalid
                }

                // Validate property value type based on rangeIncludes
                if (propertyDef && propertyDef.rangeIncludes.length > 0) {
                    const expectedTypes = propertyDef.rangeIncludes;
                    let valueTypeValid = false;
                    const actualValueType = typeof value;

                    if (expectedTypes.includes('Text') && actualValueType === 'string') valueTypeValid = true;
                    if (expectedTypes.includes('URL') && actualValueType === 'string') {
                        if (typeof value === 'string') {
                            try { new URL(value); valueTypeValid = true; } catch {}
                        }
                    }
                    if (expectedTypes.includes('Number') && actualValueType === 'number') valueTypeValid = true;
                    if (expectedTypes.includes('Integer') && Number.isInteger(value)) valueTypeValid = true;
                    if (expectedTypes.includes('Boolean') && actualValueType === 'boolean') valueTypeValid = true;
                    // TODO: Add more sophisticated type checks (Date, DateTime, Object types etc.)

                    if (!valueTypeValid && actualValueType !== 'object') {
                        const message = `Invalid value type for "${key}". Expected ${expectedTypes.join(' or ')}, but received ${actualValueType}.`;
                        result.errors.push(message);
                        result.errorLocations.push({ startLineNumber: 1, endLineNumber: 1, message: message, severity: 'error', parentPath: currentPath });
                        result.isValid = false;
                    }
                }

                // Recursively validate nested objects/arrays
                if (typeof value === 'object' && value !== null) {
                    if (Array.isArray(value)) {
                        value.forEach((item, index) => {
                            validateNode(item, `${propertyPath}[${index}]`, currentSchemaDef);
                        });
                    } else {
                        const nestedSchemaType = value['@type'];
                        const nestedSchemaDef = nestedSchemaType ? schemaDefinitions.types[nestedSchemaType] : undefined;
                        validateNode(value, propertyPath, nestedSchemaDef || currentSchemaDef);
                    }
                }
            });
        };

        // Start validation from the root node
        validateNode(parsedJson, '', schemaDefinition);

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
} 