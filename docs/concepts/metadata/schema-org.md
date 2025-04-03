---
sidebar_position: 3
---

# Schema.org

This page covers how to use Schema.org and JSON-LD as the foundation for your metadata.

## About Schema.org

[Schema.org](https://schema.org/) is a collaborative project that creates, maintains, and promotes structured data schemas for the internet. It provides a comprehensive vocabulary for describing digital assets and experiences.

Schema.org is used as the core vocabulary in MVMD because:
- It's widely adopted and recognized
- It provides flexible, extensible types and properties
- It works seamlessly with JSON-LD
- It has strong search engine and discovery support

## Core Schema.org Types

For metaverse assets, the most important Schema.org types are:

- **CreativeWork**: Base type for most assets
- **MediaObject/3DModel**: For media content
- **Place/VirtualLocation**: For locations
- **Event**: For timed experiences
- **Person/Organization**: For creators and owners

For detailed information on these types, see [Types of Assets](../types-of-assets.md).

## Implementing the Schema.org Standard

### Namespace Declaration

Schema.org is set as the default vocabulary using `@vocab`:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Example Asset"
}
```

### Linking Example

Basic Schema.org implementation with external resource links:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Virtual Chair",
  "contentUrl": "https://example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  }
}
```

### Embedding Example

Using Schema.org's structured data capabilities:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Configurable Asset",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "renderQuality",
      "name": "Render Quality",
      "value": "high"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactivity",
      "name": "Interactivity Level",
      "value": "full"
    }
  ]
}
```

## Implementation Considerations

- **Required Properties**: Always include `@context` with Schema.org vocabulary and `@type`
- **Type Selection**: Choose the most specific appropriate type for your asset
- **Custom Properties**: Use PropertyValue objects for custom data
- **Structured Data**: Use nested objects with proper type declarations

## Related Concepts

- [Fundamentals](./fundamentals.md)
- [Types of Assets](../types-of-assets.md)
- [Linking vs Embedding](../linking-vs-embedding.md) 

## Practical Implementation Guide

### Step 1: Setting Up Your Schema

1. Start with the basic context:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

2. Choose your primary type:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "My First Asset"
}
```

### Step 2: Adding Core Properties

Add essential properties based on your type:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "My First Asset",
  "description": "A detailed description of the asset",
  "dateCreated": "2024-04-02",
  "creator": {
    "@type": "Person",
    "name": "Asset Creator",
    "url": "https://creator.example.com"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Step 3: Handling Media and Files

Add file references and format information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "My First Asset",
  "description": "A detailed description of the asset",
  "dateCreated": "2024-04-02",
  "creator": {
    "@type": "Person",
    "name": "Asset Creator",
    "url": "https://creator.example.com"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/asset.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnail.jpg",
    "encodingFormat": "image/jpeg"
  },
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/preview1.jpg",
      "encodingFormat": "image/jpeg",
      "caption": "Front view"
    },
    {
      "@type": "VideoObject",
      "contentUrl": "https://example.com/demo.mp4",
      "encodingFormat": "video/mp4",
      "description": "Product demonstration"
    }
  ]
}
```

### Step 4: Adding Custom Properties

Use PropertyValue for custom data:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "My First Asset",
  "description": "A detailed description of the asset",
  "dateCreated": "2024-04-02",
  "creator": {
    "@type": "Person",
    "name": "Asset Creator",
    "url": "https://creator.example.com"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/asset.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnail.jpg",
    "encodingFormat": "image/jpeg"
  },
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/preview1.jpg",
      "encodingFormat": "image/jpeg",
      "caption": "Front view"
    },
    {
      "@type": "VideoObject",
      "contentUrl": "https://example.com/demo.mp4",
      "encodingFormat": "video/mp4",
      "description": "Product demonstration"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 12500
    },
    {
      "@type": "PropertyValue",
      "propertyID": "textureResolution",
      "name": "Texture Resolution",
      "value": "2048x2048"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animationCount",
      "name": "Number of Animations",
      "value": 3
    }
  ]
}
```

### Step 5: Integration with Other Standards

When integrating with other standards, maintain schema.org as the foundation:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "My First Asset",
  "description": "A detailed description of the asset",
  "contentUrl": "https://example.com/asset.glb",
  "encodingFormat": "model/gltf-binary",
  "gltf:asset": {
    "version": "2.0",
    "generator": "ExampleStudio 2.0"
  }
}
```

## Schema.org Implementation Checklist

- [ ] Appropriate `@type` selected
- [ ] All required properties included
- [ ] Properly nested objects with types
- [ ] Accurate media information
- [ ] Custom properties properly structured
- [ ] Clean, valid JSON-LD syntax 