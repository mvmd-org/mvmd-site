---
sidebar_position: 2
---

# Schema Validation

This guide explains how to use the JSON Schema validation files to validate your metadata against MVMD profiles.

## Overview

MVMD provides JSON Schema validation files for each integration profile. These schemas allow you to:

1. Validate metadata against specific profile requirements
2. Identify missing or incorrect properties
3. Ensure your metadata is compliant with MVMD standards
4. Automate validation in your development workflow

## Available Schema Files

| Profile | Schema File | Description |
|---------|-------------|-------------|
| Attachable | [attachable.schema.json](/schemas/attachable.schema.json) | For wearable and equipable items |
| Avatar | [avatar.schema.json](/schemas/avatar.schema.json) | For avatar representations |
| Basic | [basic.schema.json](/schemas/basic.schema.json) | For general asset metadata |
| Composable | [composable.schema.json](/schemas/composable.schema.json) | For multi-component assets |
| Interactive | [interactive.schema.json](/schemas/interactive.schema.json) | For interactive assets |

## Validation Methods

You can validate your metadata using various methods:

### Online Validation

Use the [MVMD Validator Tool](https://validator.mvmd.org) to validate your metadata online:

1. Paste your JSON metadata
2. Select the profile to validate against
3. Click "Validate"
4. Review validation results

### Command Line Validation

Use the JSON Schema validation library in your preferred programming language:

#### JavaScript/Node.js

Install the required package:

```bash
npm install ajv
```

Create a validation script:

```javascript
const Ajv = require('ajv');
const fs = require('fs');

// Load schema and data
const schema = JSON.parse(fs.readFileSync('./schemas/attachable.schema.json', 'utf-8'));
const metadata = JSON.parse(fs.readFileSync('./your-metadata.json', 'utf-8'));

// Initialize validator
const ajv = new Ajv({allErrors: true});
const validate = ajv.compile(schema);

// Validate data
const valid = validate(metadata);
if (!valid) {
  console.log('Validation errors:');
  console.log(validate.errors);
} else {
  console.log('Metadata is valid!');
}
```

#### Python

Install the required package:

```bash
pip install jsonschema
```

Create a validation script:

```python
import json
from jsonschema import validate, ValidationError

# Load schema and data
with open('./schemas/attachable.schema.json', 'r') as f:
    schema = json.load(f)

with open('./your-metadata.json', 'r') as f:
    metadata = json.load(f)

# Validate data
try:
    validate(instance=metadata, schema=schema)
    print("Metadata is valid!")
except ValidationError as e:
    print(f"Validation error: {e.message}")
    print(f"At: {e.path}")
```

### Programmatic Validation

Integrate validation into your workflow:

#### Development Environment

Add schema validation to your development environment:

```javascript
// In your asset creation tool or metadata editor
function validateMetadata(metadata, profileType) {
  // Load appropriate schema based on profileType
  const schema = loadSchema(profileType);
  
  // Validate metadata against schema
  const validator = new SchemaValidator();
  const results = validator.validate(metadata, schema);
  
  return results.valid ? 
    { valid: true } : 
    { valid: false, errors: results.errors };
}
```

#### CI/CD Pipeline

Add validation to your CI/CD pipeline:

```yaml
# In your GitHub Actions workflow
validate-metadata:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install ajv
    - name: Validate Metadata
      run: node ./scripts/validate-metadata.js
```

## Common Validation Issues

| Issue | Description | Resolution |
|-------|-------------|------------|
| Missing required properties | Required fields are not present | Add the missing properties according to profile documentation |
| Incorrect property types | Property values have incorrect data types | Fix the data types according to schema requirements |
| Invalid enum values | Values don't match allowed enum options | Use only valid enum values listed in documentation |
| Pattern validation failures | String patterns don't match requirements | Ensure strings match the required formats |
| Invalid URI formats | URIs don't comply with RFC 3986 | Use properly formatted URIs for contentUrl, license, etc. |

## Extending Schemas

If you need to extend a schema for custom properties:

1. Create a copy of the original schema
2. Add your custom properties under `properties`
3. If needed, add additional validation rules

Example:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://example.com/extended-avatar.schema.json",
  "title": "Extended Avatar Profile Schema",
  "description": "Extended schema with custom properties",
  "allOf": [
    {"$ref": "https://mvmd.org/schemas/avatar.schema.json"},
    {
      "properties": {
        "additionalProperty": {
          "contains": {
            "properties": {
              "propertyID": {
                "enum": ["customProperty"]
              },
              "value": {
                "type": "object",
                "properties": {
                  "customField1": {"type": "string"},
                  "customField2": {"type": "number"}
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

## Best Practices

- Validate early and often during the development process
- Include validation in your build and deployment processes
- Update your metadata when schema requirements change
- Test across multiple validators to ensure broader compatibility
- Keep schemas up to date with the latest profile requirements

## Related Resources

- [MVMD Profile Documentation](/docs/integration-profiles/)
- [JSON Schema Documentation](https://json-schema.org/learn/)
- [Schema Validation Tools](/docs/tools) 