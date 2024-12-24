<!-- Path: /docs/tools/validation.md -->
---
sidebar_position: 1
---

# Validation Guide

This guide covers how to validate Metaverse metadata against MVMD standards and profiles.

## Core Validation Rules

### Context Validation

✅ Valid Context:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel"
}
```

❌ Invalid Context:
```json
{
  "@context": "schema.org",
  "@type": "3DModel"
}
```

### Type Validation

✅ Valid Type:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Asset Name"
}
```

❌ Invalid Type:
```json
{
  "@context": "https://schema.org/",
  "@type": "Model",  // Unknown type
  "name": "Asset Name"
}
```

### Required Properties

✅ Valid Required Properties:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Asset Name",
  "description": "Asset description",
  "creator": {
    "@type": "Organization",
    "name": "Creator Name"
  },
  "contentUrl": "https://example.com/asset.glb"
}
```

❌ Invalid Required Properties:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Asset Name"
  // Missing required description, creator, contentUrl
}
```

## Property Type Validation

### String Properties

✅ Valid String:
```json
{
  "name": "Asset Name",
  "description": "Detailed description of the asset"
}
```

❌ Invalid String:
```json
{
  "name": ["Asset", "Name"],  // Should be string, not array
  "description": 12345  // Should be string, not number
}
```

### Number Properties

✅ Valid Numbers:
```json
{
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "translation": [0, 0.45, 0]
  }
}
```

❌ Invalid Numbers:
```json
{
  "gltf:transform": {
    "scale": ["1", "1", "1"],  // Should be numbers, not strings
    "translation": "0,0.45,0"  // Should be array of numbers
  }
}
```

### URL Properties

✅ Valid URLs:
```json
{
  "contentUrl": "https://example.com/asset.glb",
  "thumbnailUrl": "https://example.com/thumb.jpg",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

❌ Invalid URLs:
```json
{
  "contentUrl": "/asset.glb",  // Must be absolute URL
  "thumbnailUrl": "thumb.jpg", // Must be absolute URL
  "license": "CC-BY"  // Must be URL
}
```

## Standard-Specific Validation

### glTF Properties

✅ Valid glTF:
```json
{
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0.45, 0]
  },
  "gltf:materials": [{
    "name": "Material",
    "pbrMetallicRoughness": {
      "baseColorFactor": [1.0, 1.0, 1.0, 1.0],
      "metallicFactor": 0.5,
      "roughnessFactor": 0.5
    }
  }]
}
```

❌ Invalid glTF:
```json
{
  "gltf:transform": {
    "scale": [1.0],  // Must be 3 values
    "rotation": [0, 0, 0],  // Must be 4 values (quaternion)
    "translation": "0,0,0"  // Must be array
  }
}
```

### Spatial Properties

✅ Valid Spatial:
```json
{
  "spatialCoverage": {
    "@type": "GeoShape",
    "box": "0,0,100,100",
    "elevation": 0
  },
  "maximumAttendeeCapacity": 500
}
```

❌ Invalid Spatial:
```json
{
  "spatialCoverage": {
    "box": [-1, -1, 100, 100],  // Must be string, non-negative
    "elevation": "ground"  // Must be number
  },
  "maximumAttendeeCapacity": -10  // Must be positive
}
```

## Profile Validation

### Basic Profile

✅ Valid Basic Profile:
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Asset Name",
  "description": "Asset description",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "asset-2024-001"
  },
  "creator": {
    "@type": "Organization",
    "name": "Creator Name"
  },
  "contentUrl": "https://example.com/asset.glb",
  "encodingFormat": "model/gltf-binary"
}
```

### 3D Object Profile

✅ Valid 3D Object Profile:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  // Basic profile properties...
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0, 0]
  }
}
```

### Environment Profile

✅ Valid Environment Profile:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",
  // Basic profile properties...
  "maximumAttendeeCapacity": 100,
  "spatialCoverage": {
    "@type": "GeoShape",
    "box": "0,0,100,100"
  }
}
```

## Common Validation Issues

1. **Missing Required Properties**
    - Always include all required properties
    - Check profile-specific requirements
    - Validate nested required properties

2. **Invalid Property Types**
    - Use correct data types
    - Check array lengths
    - Validate number ranges

3. **URL Issues**
    - Use absolute URLs
    - Include proper protocols
    - Verify URL format

4. **Namespace Problems**
    - Define all used namespaces
    - Use proper namespace prefixes
    - Avoid mixing namespaces

## Using the Validator

### Basic Validation
```bash
curl -X POST https://validator.mvmd.org/validate \
  -H "Content-Type: application/json" \
  -d '{
    "profile": "3DObject",
    "metadata": {
      "@context": "https://schema.org/",
      "@type": "3DModel"
      // ...
    }
  }'
```

### Response Format
```json
{
  "valid": false,
  "errors": [
    {
      "property": "name",
      "message": "Required property missing",
      "severity": "error"
    }
  ],
  "warnings": [
    {
      "property": "thumbnailUrl",
      "message": "Recommended property missing",
      "severity": "warning"
    }
  ]
}
```

## Next Steps

- Review [Profile Documentation](/metadata-profiles/basic-profile.md) for requirements
- See [Best Practices](/implementation/best-practices.md) for guidance
- Check [API Reference](./api-reference.md) for validation API details
