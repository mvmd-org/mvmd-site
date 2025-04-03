# Validator

Validating your metadata is crucial for ensuring your assets work reliably across different platforms, are easily discoverable, and integrate correctly with MVMD standards. Proper validation helps prevent errors and maintains consistency.

## Why Validate?

* **Interoperability**: Ensures your metadata works correctly across different platforms and tools.
* **Error Prevention**: Catches mistakes before they cause problems in production.
* **Discoverability**: Helps search engines and platforms correctly index your assets.
* **Consistency**: Maintains a uniform standard across all your assets.

## How to Validate

There are two main ways to validate your MVMD metadata:

### 1. Using the Online Validator Tool

This is the simplest way to quickly check your metadata.

* **MVMD Validator**: Paste your JSON-LD metadata directly into the [MVMD Schema Validator Tool](/validator). It checks against Schema.org definitions and MVMD profiles, providing real-time feedback and error messages.
* **Official Schema.org Validator**: You can also use the official [Schema.org Validator](https://validator.schema.org/) for general Schema.org compliance checks. Select JSON-LD and paste your code.

**Using the Tool:**
1.  Go to the validator tool link.
2.  Paste your complete JSON-LD metadata.
3.  Run the validation.
4.  Review the results for errors or warnings.

### 2. Using Schema Files (for Developers)

For automated checks or integration into your workflow, you can use MVMD's provided JSON Schema files.

* **What they do**: These files define the required structure and properties for different [Integration Profiles](../integration-profiles/overview.md).
* **Where to find them**: Schema files for profiles like Basic, Avatar, and Attachable are available in the `/schemas/` directory.
* **How to use**: You can use standard JSON Schema validation libraries in your code (like Ajv for JavaScript or jsonschema for Python) to check your metadata against these schemas during development or in CI/CD pipelines.

**Example (Conceptual JavaScript):**
```javascript
// Simplified concept: Load schema, load metadata, validate
const Ajv = require('ajv');
// Function to load the correct schema file (e.g., basic.schema.json)
const schema = loadSchemaForProfile('basic'); 
const metadata = yourAssetMetadata; // Your JSON-LD object

const ajv = new Ajv();
const validate = ajv.compile(schema);
const isValid = validate(metadata);

if (!isValid) {
  console.log("Validation Errors:", validate.errors);
} else {
  console.log("Metadata is valid!");
}

For detailed code examples, refer to specific library documentation.

## Common Validation Issues

Watch out for these common mistakes:

* **Missing Required Properties**: Ensure all properties required by the Schema.org type and the specific MVMD profile are present (e.g., name, description, contentUrl).

* **Incorrect Types**: Property values must match the expected data type (e.g., providing a number where a string URL is expected for contentUrl).

* **Invalid Formatting**: Ensure values like dates (ISO 8601) or URLs are correctly formatted.

* **Missing @context or @type**: These fundamental JSON-LD properties must always be present.

* **Incorrect Enum Values**: If a property has predefined allowed values (like encodingFormat), make sure you use one of them.

* **Invalid JSON-LD Syntax**: Ensure your JSON structure is valid (correct commas, brackets, braces).

## Validation Workflow Recommendation

* Validate metadata during development.

* Run full validation checks before deploying assets.

* Periodically re-validate existing assets against the latest schemas.

This consolidated page provides the essential information needed to understand and perform validation without getting lost in excessive technical details, aligning with the "less is more" approach.