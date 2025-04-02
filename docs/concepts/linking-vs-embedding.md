---
sidebar_position: 4
---

# Linking vs Embedding

A core decision in metadata design is whether to embed data directly or link to external resources. This guide explains when to use each approach.

## Strategic Overview

### When to Use Links/References

- **Large Content**: Media files, 3D models, textures
- **Cacheable Content**: Frequently reused resources
- **Shared Components**: Assets used across multiple objects
- **Independent Updates**: Resources that change separately
- **Progressive Loading**: Content that doesn't need immediate loading

### When to Use Embedding

- **Small Data**: Configuration, parameters, metadata
- **Asset-Specific Data**: Information unique to this asset
- **Critical Information**: Data needed for immediate display/use
- **Offline Support**: Content that must work without network
- **Data Consistency**: Information that must stay synchronized

## Reference Types

### Direct URL (contentUrl)

The primary way to reference the main content:

```json
{
  "@type": "3DModel",
  "contentUrl": "https://example.com/model.glb"
}
```

### Thumbnails and Images

```json
{
  "@type": "3DModel",
  "thumbnail": "https://example.com/thumb.jpg"
}
```

Or with detailed metadata:

```json
{
  "@type": "3DModel",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumb.jpg",
    "width": "256",
    "height": "256"
  }
}
```

### Alternative URLs (sameAs)

Multiple locations for the same content:

```json
{
  "@type": "3DModel",
  "contentUrl": "https://example.com/model.glb",
  "sameAs": [
    "https://other-cdn.com/model.glb",
    "ipfs://QmXaXa1XaX..."
  ]
}
```

## Relationship Properties

### Component Parts (hasPart)

For describing composite assets with direct components:

```json
{
  "@type": "CreativeWork",
  "name": "Vehicle Asset",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Chassis", 
      "contentUrl": "https://example.com/chassis.glb"
    },
    {
      "@type": "3DModel",
      "name": "Wheels",
      "contentUrl": "https://example.com/wheels.glb"
    }
  ]
}
```

### Associated Media (associatedMedia)

For related but not structural content:

```json
{
  "@type": "CreativeWork",
  "name": "Product",
  "associatedMedia": [
    {
      "@type": "VideoObject",
      "name": "Tutorial",
      "contentUrl": "https://example.com/tutorial.mp4"
    },
    {
      "@type": "ImageObject",
      "name": "Gallery Image 1",
      "contentUrl": "https://example.com/gallery1.jpg"
    }
  ]
}
```

### Main Subject (mainEntity)

For the primary subject described by the metadata:

```json
{
  "@type": "ImageObject",
  "name": "Character Preview Image",
  "contentUrl": "https://example.com/preview.jpg",
  "mainEntity": {
    "@type": "Person",
    "name": "Character Name"
  }
}
```

## Direct Embedding

### Using Namespaces

Embedding data from other standards using namespaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Model with Materials",
  "gltf:materials": [
    {
      "name": "Metal",
      "pbrMetallicRoughness": {
        "metallicFactor": 1.0,
        "roughnessFactor": 0.5
      }
    }
  ]
}
```

### Custom Properties

Embedding custom data with PropertyValue:

```json
{
  "@type": "CreativeWork",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "renderSettings",
      "name": "Render Settings",
      "value": {
        "quality": "high",
        "shadows": true,
        "antialiasing": true
      }
    }
  ]
}
```

## Implementation Patterns

### Combined Approach Example

A complete example showing both linking and embedding:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "CreativeWork",
  "name": "Avatar Asset",
  
  // Linked components
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Base Mesh",
      "contentUrl": "https://example.com/base.glb"
    },
    {
      "@type": "3DModel",
      "name": "Clothing",
      "contentUrl": "https://example.com/clothing.glb"
    }
  ],
  
  // Associated media
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Preview Image",
      "contentUrl": "https://example.com/preview.jpg"
    }
  ],
  
  // Embedded data
  "gltf:animations": [
    {
      "name": "Walk",
      "duration": 1.2
    },
    {
      "name": "Run",
      "duration": 0.8
    }
  ],
  
  // Custom properties
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "avatarType",
      "value": "humanoid"
    }
  ]
}
```

## Best Practices

1. **Balance Performance**: Link large assets, embed small critical data
2. **Consider Caching**: Link shared resources for efficient caching
3. **Maintain Clarity**: Use appropriate relationship properties
4. **Plan for Updates**: Link content that changes independently
5. **Document Dependencies**: Clearly document all external references

## Related Concepts

- [Metadata Fundamentals](./metadata-fundamentals.md): Core principles of metadata
- [Types of Assets](./types-of-assets.md): Schema.org types for different assets
- [Structural Organization](./structural-organization.md): Organization patterns
