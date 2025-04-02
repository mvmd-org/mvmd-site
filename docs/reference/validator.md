---
sidebar_position: 1
---

# Validator

MVMD provides two ways to validate your metadata:

1. **MVMD Schema Validator** - Our integrated validator that provides a user-friendly interface for validating your metadata directly on the MVMD site.
2. **Schema.org Validator** - The official Schema.org validator for comprehensive validation against the Schema.org specification.

## Using the MVMD Schema Validator

The MVMD Schema Validator is the recommended way to validate your metadata. It provides:

- A clean, user-friendly interface
- Real-time validation feedback
- Detailed error and warning messages
- Support for all Schema.org types and properties

### How to Use

1. Visit the [MVMD Schema Validator](/validator)
2. Paste your JSON-LD metadata into the input field
3. Click "Validate Schema"
4. Review the validation results

The validator will show:
- ✅ Success message if your schema is valid
- ❌ Error messages with specific issues if validation fails
- ⚠️ Warnings for potential improvements

## Using the Schema.org Validator

The Schema.org Validator ([https://validator.schema.org/](https://validator.schema.org/)) is the official validation tool. This guide explains how to use it effectively with MVMD metadata.

Note: In the future, MVMD will provide dedicated validation tools that handle namespaced properties, file attachments, and cross-references between files. This guide will be updated when those tools become available.

## Using the Schema.org Validator

### Step 1: Prepare Your Metadata

Before validation, ensure your metadata:
- Has a properly defined `@context`
- Uses valid Schema.org types
- Includes all required properties
- Uses proper JSON-LD formatting

Example of properly formatted metadata:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "description": "Preview image of 3D asset",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg"
}
```

You can validate this example using either:
- The [MVMD Schema Validator](/validator) - Click "Validate Schema" to check against Schema.org standards
- The [Schema.org Validator](https://validator.schema.org/) - Click "Validate" to use the official validator

### Step 2: Choose Your Validator

#### Option 1: MVMD Schema Validator
1. Go to the [MVMD Schema Validator](/validator)
2. Paste your metadata into the input field
3. Click "Validate Schema"
4. Review the results

#### Option 2: Schema.org Validator
1. Go to [https://validator.schema.org/](https://validator.schema.org/)
2. Choose the "Validate" tab
3. Select JSON-LD as the format
4. Paste your metadata
5. Click "Validate"
6. Review the results

## Common Validation Issues

### 1. Missing Required Properties

Error:
```json
{
  "@context": "https://schema.org/",
  "@type": "ImageObject"
}
```

Fix:
```json
{
  "@context": "https://schema.org/",
  "@type": "ImageObject",
  "name": "Asset Name",
  "contentUrl": "https://example.com/image.jpg"
}
```

### 2. Invalid Type Values

Error:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DAsset",
  "name": "Example Asset"
}
```

Fix:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Example Asset"
}
```

### 3. Incorrect Property Types

Error:
```json
{
  "@context": "https://schema.org/",
  "@type": "ImageObject",
  "name": "Asset Name",
  "contentUrl": 12345
}
```

Fix:
```json
{
  "@context": "https://schema.org/",
  "@type": "ImageObject",
  "name": "Asset Name",
  "contentUrl": "https://example.com/image.jpg"
}
```

## Handling Namespaced Properties

The Schema.org validator will ignore properties from other namespaces. For example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Example Model",
  "gltf:asset": {
    "version": "2.0"
  }
}
```

The `gltf:asset` property will be ignored during validation. This is expected behavior until MVMD's dedicated validation tools are available.

## Best Practices

1. **Validate Core Properties First**
   - Start with basic Schema.org properties
   - Ensure all required fields are present
   - Use correct property types
   - Fix any validation errors

2. **Document Namespaced Properties**
   - Keep track of non-Schema.org properties
   - Document their requirements
   - Plan for future validation
   - Follow standard specifications

3. **Regular Validation**
   - Validate during development
   - Check after updates
   - Monitor for changes
   - Keep documentation current

## Future MVMD Validation

The upcoming MVMD validation tools will provide:

1. **Complete Validation**
   - Schema.org compliance
   - Namespace validation
   - File attachment verification
   - Cross-reference checking

2. **Extended Features**
   - Profile-specific validation
   - Custom rule sets
   - Batch validation
   - Automated testing

3. **Integration Support**
   - API access
   - CI/CD integration
   - Development tools
   - Validation reports

## Next Steps

1. Review [Metadata Fundamentals](/implementation/metadata-fundamentals.md)
2. Check [Best Practices](/implementation/best-practices.md)
3. Explore [Profile Requirements](/implementation/metadata-profiles/basic-profile.md)
