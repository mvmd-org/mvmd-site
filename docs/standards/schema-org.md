---
sidebar_position: 2
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

For detailed information on these types, see [Types of Assets](../concepts/types-of-assets.md).

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

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 

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
      "propertyID": "renderEngine",
      "name": "Render Engine",
      "value": "Unreal Engine 5"
    }
  ]
}
```

### Step 5: Establishing Relationships

Connect related assets:

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
  "isPartOf": {
    "@type": "CreativeWork",
    "name": "Asset Collection",
    "@id": "https://example.com/collections/main"
  },
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Component 1",
      "contentUrl": "https://example.com/component1.glb"
    }
  ],
  "sameAs": [
    "ipfs://QmXaXa1XaX...",
    "ar://asset/123"
  ]
}
```

### Step 6: Adding Metadata for Discovery

Enhance discoverability with additional properties:

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
  "isPartOf": {
    "@type": "CreativeWork",
    "name": "Asset Collection",
    "@id": "https://example.com/collections/main"
  },
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Component 1",
      "contentUrl": "https://example.com/component1.glb"
    }
  ],
  "sameAs": [
    "ipfs://QmXaXa1XaX...",
    "ar://asset/123"
  ],
  "keywords": ["3D", "furniture", "modern", "interactive"],
  "category": "Furniture",
  "audience": {
    "@type": "Audience",
    "audienceType": "Designers"
  },
  "inLanguage": "en",
  "version": "1.0.0"
}
```

### Best Practices

1. **Type Selection**:
   - Always use the most specific type available
   - Consider the primary purpose of your asset
   - Check Schema.org documentation for type hierarchies

2. **Property Usage**:
   - Include all required properties for your type
   - Use consistent property names
   - Validate property values match expected types
   - Keep descriptions concise but informative

3. **Structured Data**:
   - Use nested objects for complex properties
   - Include proper type declarations for nested objects
   - Maintain consistent indentation and formatting
   - Use arrays for multiple values of the same type

4. **Identifiers**:
   - Use unique, persistent identifiers
   - Include multiple identifier systems when available
   - Use proper identifier properties (@id, identifier, sameAs)

5. **Validation**:
   - Test your JSON-LD syntax
   - Validate against Schema.org specifications
   - Check property value formats
   - Verify all URLs are accessible

### Common Patterns

1. **Basic Asset**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "CreativeWork",
  "name": "Asset Name",
  "description": "Asset description",
  "creator": {
    "@type": "Person",
    "name": "Creator Name"
  }
}
```

2. **Media Asset**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "MediaObject",
  "name": "Media Name",
  "contentUrl": "https://example.com/media.file",
  "encodingFormat": "media/type",
  "contentSize": "1.5 MB"
}
```

3. **Collection**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Collection",
  "name": "Collection Name",
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "Item 1"
    },
    {
      "@type": "CreativeWork",
      "name": "Item 2"
    }
  ]
}
```

### Troubleshooting

Common issues and solutions:

1. **Invalid Type**:
   - Check Schema.org documentation for correct type names
   - Ensure proper capitalization
   - Verify type exists in Schema.org vocabulary

2. **Property Errors**:
   - Verify property names match Schema.org specifications
   - Check expected value types
   - Use PropertyValue for custom properties

3. **Context Issues**:
   - Include complete @context declaration
   - Verify namespace URLs
   - Check for conflicting vocabulary terms

4. **Validation Failures**:
   - Use JSON-LD validators
   - Check Schema.org validation tools
   - Verify required properties are present 