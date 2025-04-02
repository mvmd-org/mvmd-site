---
sidebar_position: 2
---

# Basic Profile

## Purpose and Use Cases

The Basic Profile defines essential metadata properties that should be included with all metaverse assets, regardless of their specific type or application. This profile serves as the foundation for all other integration profiles and ensures a minimum level of interoperability across platforms.

**Key Use Cases:**
- Asset discovery and search functionality
- Basic asset management and organization
- Attribution and rights management
- Cross-platform asset sharing

## Required Properties

The following properties must be included in all metaverse assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
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

| Property | Description | Type | Notes |
|----------|-------------|------|-------|
| `@context` | Vocabulary declaration | Object | Must include Schema.org |
| `@type` | Asset type | String | Must be a valid Schema.org type |
| `name` | Asset name | String | Max 100 characters |
| `description` | Detailed description | String | Max 1000 characters |
| `identifier` | Unique identifier | Object | Must include propertyID and value |
| `creator` | Asset creator | Object | Must include name |
| `dateCreated` | Creation date | String | ISO 8601 format |
| `license` | Usage license | String | Valid URL |
| `contentUrl` | Asset location | String | Valid URL |
| `encodingFormat` | File format | String | Valid MIME type |

## Optional Properties

The following properties enhance asset functionality and can be included as needed:

```json
{
  // Required properties as above...
  
  "version": "1.0.0",
  "dateModified": "2024-03-15T10:30:00Z",
  
  "thumbnail": "https://example.com/thumbnails/asset.jpg",
  
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

| Property | Description | Type | Notes |
|----------|-------------|------|-------|
| `version` | Asset version | String | Semantic versioning recommended |
| `dateModified` | Modification date | String | ISO 8601 format |
| `thumbnail` | Preview image | String | Valid URL |
| `contributor` | Additional contributors | Array | List of persons or organizations |
| `keywords` | Search terms | Array | List of relevant terms |
| `copyrightHolder` | Rights owner | Object | Person or Organization |
| `maintainer` | Maintenance entity | Object | Person or Organization |
| `fileSize` | File size in bytes | Number | Integer value |

## Type-Specific Properties

The Basic Profile can be extended with type-specific properties based on the asset's `@type` value:

### 3D Model Properties

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  
  // Required properties as above...
  
  "encodingFormat": "model/gltf-binary",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "geometryProperties",
      "name": "Geometry Properties",
      "value": {
        "polyCount": 10000,
        "textureResolution": 2048,
        "materialCount": 5
      }
    }
  ]
}
```

### Virtual Space Properties

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Place",
  
  // Required properties as above...
  
  "maximumAttendeeCapacity": 100,
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "spaceProperties",
      "name": "Space Properties",
      "value": {
        "worldSize": "1000x1000",
        "spawnPoints": 2,
        "environmentType": "indoor"
      }
    }
  ]
}
```

## Validation Rules

### Required Fields Validation
- `@context`: Must include Schema.org
- `@type`: Must be a valid Schema.org type
- `name`: Non-empty string, max 100 characters
- `description`: Non-empty string, max 1000 characters
- `identifier`: Must include propertyID and value
- `creator`: Must include name
- `dateCreated`: ISO 8601 format
- `license`: Valid URL
- `contentUrl`: Valid URL
- `encodingFormat`: Valid MIME type

### Optional Fields Validation
- `version`: String, recommended semantic versioning
- `dateModified`: ISO 8601 format
- `thumbnail`: Valid URL
- `contributor`: Must include name
- `keywords`: Array of strings
- `fileSize`: Positive integer

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
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
  
  "thumbnail": "https://example.com/thumbnails/office-chair.jpg",
  
  "keywords": ["furniture", "office", "chair", "ergonomic"],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "geometryProperties",
      "name": "Geometry Properties",
      "value": {
        "polyCount": 12500,
        "textureResolution": 2048,
        "materialCount": 3,
        "animationCount": 0
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "physicalProperties",
      "name": "Physical Properties",
      "value": {
        "dimensions": {
          "width": 0.65,
          "height": 1.2,
          "depth": 0.65,
          "unit": "meters"
        },
        "weight": {
          "value": 15,
          "unit": "kg"
        }
      }
    }
  ]
}
```

## Implementation Considerations

### Cross-Platform Compatibility
- Use standard Schema.org types and properties wherever possible
- Provide fallback values for platform-specific properties
- Test across multiple platforms to ensure consistent rendering

### Performance Optimization
- Include appropriate file sizes for different target platforms
- Consider providing multiple levels of detail (LOD)
- Optimize thumbnail images for quick loading

### Rights Management
- Ensure license field accurately reflects usage rights
- Include attribution requirements in the description if needed
- Document any platform-specific rights limitations

## Related Resources

- [Types of Assets](../concepts/types-of-assets.md): Different asset types supported by MVMD
- [Metadata Fundamentals](../concepts/metadata-fundamentals.md): Core metadata principles
- [Schema.org Namespace](../namespaces/schema-org.md): Detailed information on Schema.org properties
