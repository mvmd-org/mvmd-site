---
sidebar_position: 1
---

# Basic Metadata Profile

The Basic Profile defines essential metadata properties that should be included with all Metaverse assets. This profile serves as the foundation for more specific asset profiles.

## Core Properties

### Required Properties

```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  
  "name": "Asset Name",
  "description": "Detailed description of the asset",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "asset-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Creator Name",
    "url": "https://example.com/creator"
  },
  
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/assets/file.ext",
  "encodingFormat": "application/octet-stream"
}
```

### Optional Properties

```json
{
  "@context": "https://schema.org/",
  "@type": "CreativeWork",
  
  // Required properties as above...
  
  "version": "1.0.0",
  "dateModified": "2024-03-15T10:30:00Z",
  
  "thumbnailUrl": "https://example.com/thumbnails/asset.jpg",
  
  "contributor": [{
    "@type": "Person",
    "name": "Contributor Name",
    "role": "Designer"
  }],
  
  "keywords": ["metaverse", "asset", "category"],
  
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Rights Holder"
  },
  
  "maintainer": {
    "@type": "Organization",
    "name": "Maintenance Team"
  },
  
  "fileSize": "1048576"
}
```

## Type-Specific Properties

### 3D Model Base
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  
  // Required properties as above...
  
  "encodingFormat": "model/gltf-binary",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "polyCount",
      "value": "10000"
    },
    {
      "@type": "PropertyValue",
      "name": "textureResolution",
      "value": "2048"
    }
  ]
}
```

### Virtual Space Base
```json
{
  "@context": "https://schema.org/",
  "@type": "Place",
  
  // Required properties as above...
  
  "maximumAttendeeCapacity": 100,
  
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "spawnPoint",
      "value": true
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "worldSize",
      "value": "1000x1000"
    }
  ]
}
```

## Validation Rules

### Required Fields
- `@context`: Must include Schema.org
- `@type`: Must be a valid type
- `name`: Non-empty string, max 100 characters
- `description`: Non-empty string, max 1000 characters
- `identifier`: Must include propertyID and value
- `creator`: Must include name
- `dateCreated`: ISO 8601 format
- `license`: Valid URL
- `contentUrl`: Valid URL
- `encodingFormat`: Valid MIME type

### Optional Fields
- `version`: Semantic version recommended
- `dateModified`: ISO 8601 format
- `thumbnailUrl`: Valid URL
- `contributor`: Must include name
- `keywords`: Array of strings
- `fileSize`: Number in bytes

## Complete Example

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  
  "name": "Modern Office Chair",
  "description": "Ergonomic office chair with adjustable height and tilt mechanisms. Suitable for professional office environments.",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "furniture-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://example.com/virtual-furnishings"
  },
  
  "dateCreated": "2024-03-15",
  "dateModified": "2024-03-15T10:30:00Z",
  "version": "1.0.0",
  
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  },
  
  "contentUrl": "https://example.com/models/office-chair.glb",
  "encodingFormat": "model/gltf-binary",
  "fileSize": 1048576,
  
  "thumbnailUrl": "https://example.com/thumbnails/office-chair.jpg",
  
  "keywords": ["furniture", "office", "chair", "ergonomic"],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "polyCount",
      "value": "12500"
    },
    {
      "@type": "PropertyValue",
      "name": "textureResolution",
      "value": "2048"
    },
    {
      "@type": "PropertyValue",
      "name": "renderPipeline",
      "value": "PBR"
    }
  ],
  
  "maintainer": {
    "@type": "Organization",
    "name": "Virtual Furnishings Support",
    "email": "support@example.com"
  }
}
```

## Usage Guidelines

1. **Start with Required Properties**
    - Include all required fields
    - Use appropriate types
    - Follow format specifications

2. **Add Optional Properties**
    - Include relevant optional fields
    - Maintain consistent structure
    - Follow property guidelines

3. **Add Type-Specific Properties**
    - Use appropriate type base
    - Include relevant additional properties
    - Follow type-specific patterns

4. **Validate Metadata**
    - Check required fields
    - Verify formats
    - Validate URLs

## Next Steps

- Review [3D Object Profile](./3d-object-profile.md) for 3D-specific metadata
- Check [Avatar Profile](./avatar-profile.md) for character metadata
- See [Environment Profile](./environment-profile.md) for space metadata
