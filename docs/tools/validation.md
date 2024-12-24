---
sidebar_position: 1
---

# Validation Tools

## Online Validator

The MVMD Validation Tool helps ensure your metadata complies with the defined standards and profiles.

### Using the Validator

1. Choose your metadata profile
2. Paste your metadata JSON
3. Click "Validate"
4. Review the validation results

### Example Usage

```javascript
const validateMetadata = async (metadata) => {
  const response = await fetch('https://validator.mvmd.org/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(metadata),
  });
  return response.json();
};
```

## Common Validation Issues

### 1. Missing Required Fields
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  // Missing required 'name' field
  "description": "A 3D model"
}
```

### 2. Invalid Data Types
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Asset",
  "scale": "invalid" // Should be an array of numbers
}
```

### 3. Schema Violations
```json
{
  "@context": "https://schema.org/",
  "@type": "Unknown", // Invalid type
  "name": "Asset"
}
```

## Validation API

### Endpoint
`POST https://validator.mvmd.org/validate`

### Request Format
```json
{
  "profile": "3DObject",
  "metadata": {
    "@context": "https://schema.org/",
    "@type": "3DModel",
    "name": "Test Asset"
  }
}
```

### Response Format
```json
{
  "valid": false,
  "errors": [
    {
      "field": "contentUrl",
      "message": "Required field missing"
    }
  ]
}
