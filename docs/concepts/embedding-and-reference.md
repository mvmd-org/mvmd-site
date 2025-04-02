---
sidebar_position: 3
---

# Linking vs Embedding Strategy

This guide covers strategies for embedding content directly in metadata versus referencing external resources, with a focus on optimizing asset delivery and management in Metaverse environments.

## When to Use Each

### Use Links/References When:
- Content is large
- Content needs to be cached
- Content is shared across assets
- Content updates independently
- Progressive loading is needed

### Use Embedding When:
- Data is small
- Data is specific to the asset
- Quick access is required
- Offline support is needed
- Data consistency is critical

## Core Concepts

### Direct Embedding
Embedding includes content directly within the metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "configurationSettings",
      "name": "Configuration Settings",
      "value": "high"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "configFormat",
      "name": "Configuration Format",
      "value": "progressive"
    }
  ],
  // Embedded data using a namespace
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

### External References
Referencing links to external resources:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Detailed Model",
      "contentUrl": "https://example.com/model.glb",
      "encodingFormat": "model/gltf-binary"
    }
  ]
}
```

## Reference Types

Schema.org provides several properties to define relationships between assets. Here are all the common ways to reference external files in MVMD:

### Direct URL (contentUrl)
Simple string URL for the primary content:
```json
{
  "@type": "ImageObject",
  "contentUrl": "https://example.com/image.jpg"
}
```

### Image & Thumbnail
Simple image reference:
```json
{
  "@type": "3DModel",
  "image": "https://example.com/preview.jpg"
}
```

Simple thumbnail with just URL:
```json
{
  "@type": "3DModel",
  "thumbnail": "https://example.com/thumbnail.jpg"
}
```

Detailed thumbnail with metadata:
```json
{
  "@type": "3DModel",
   "thumbnail": {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/preview-thumb.jpg",
      "encodingFormat": "image/jpeg",
      "width": "256",
      "height": "256"
   }
}
```

### Alternative Versions (sameAs)
Multiple alternative URLs for the same content:
```json
{
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/model.glb",
  "sameAs": [
    "https://other-platform.com/assets/character-123",
    "ipfs://QmXaXa1XaX...",
    "ar://asset/character-123"
  ]
}
```

### URL Object (url)
URL with additional metadata:
```json
{
  "@type": "3DModel",
  "url": {
    "@type": "URL",
    "url": "https://example.com/model.glb",
    "fileFormat": "model/gltf-binary"
  }
}
```

### Primary Entity (mainEntity)
Using `mainEntity` to indicate the primary subject of a metadata object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Character Preview Image",
  "contentUrl": "https://example.com/preview.jpg",
  "mainEntity": {
    "@type": "3DModel",
    "name": "Character Model",
    "contentUrl": "https://example.com/model.glb",
    "encodingFormat": "model/gltf-binary"
  }
}
```

### Component Parts (hasPart)
The `hasPart` property defines direct components or pieces that make up a larger asset. This is crucial for describing modular or composite assets.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Modular Vehicle",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Chassis",
      "contentUrl": "https://example.com/chassis.glb",
      "position": "base"
    },
    {
      "@type": "3DModel",
      "name": "Body",
      "contentUrl": "https://example.com/body.glb",
      "position": "attachment"
    }
  ]
}
```

### Associated Media (associatedMedia)
The `associatedMedia` property links to related media assets that support or enhance the main asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Display",
  "contentUrl": "https://example.com/display.glb",
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Atlas",
      "contentUrl": "https://example.com/textures.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "VideoObject",
      "name": "Usage Tutorial",
      "contentUrl": "https://example.com/tutorial.mp4",
      "encodingFormat": "video/mp4"
    },
    {
      "@type": "AudioObject",
      "name": "Sound Effects",
      "contentUrl": "https://example.com/sounds.mp3",
      "encodingFormat": "audio/mpeg"
    }
  ]
}
```

### Embedded Content (encodesCreativeWork)
The `encodesCreativeWork` property indicates content that is embedded within or encoded by the main asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Information Kiosk",
  "contentUrl": "https://example.com/kiosk.glb",
  "encodesCreativeWork": [
    {
      "@type": "ImageObject",
      "name": "Screen Content",
      "contentUrl": "https://example.com/screen.jpg"
    },
    {
      "@type": "TextObject",
      "name": "Display Text",
      "contentUrl": "https://example.com/text.txt"
    }
  ]
}
```

### Related Documentation (subjectOf)
The `subjectOf` property links to documentation, descriptions, or other content about the asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Complex Machinery",
  "contentUrl": "https://example.com/machine.glb",
  "subjectOf": [
    {
      "@type": "DigitalDocument",
      "name": "Technical Documentation",
      "url": "https://example.com/docs/technical.pdf",
      "encodingFormat": "application/pdf"
    },
    {
      "@type": "VideoObject",
      "name": "Assembly Guide",
      "contentUrl": "https://example.com/guides/assembly.mp4",
      "encodingFormat": "video/mp4"
    }
  ]
}
```

## Embedding Patterns

### Direct Content Embedding

Example of embedded configuration using valid Schema.org properties and structured values:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Interactive Object Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "interactionTrigger",
      "name": "Interaction Trigger",
      "value": "proximity"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactionDistance",
      "name": "Interaction Distance",
      "value": "2.0"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactionResponse",
      "name": "Interaction Response",
      "value": "highlight"
    }
  ]
}
```

### Embedded Data with Namespaces

Data from other standards can be included directly within the metadata structure using appropriate namespaces:

```json
{
   "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/",
      "gltf": "https://www.khronos.org/gltf/"
   },
   "@type": "3DModel",
   "name": "Simple Cube Model",
   "encodingFormat": "model/gltf+json",
   "gltf:asset": {
      "version": "2.0",
      "scenes": [{
         "name": "SimpleScene",
         "nodes": [0]
      }],
      "nodes": [{
         "name": "Cube",
         "mesh": 0
      }],
      "meshes": [{
         "name": "SimpleCube",
         "primitives": [{
            "attributes": {
               "POSITION": 0
            },
            "indices": 1,
            "material": 0
         }]
      }]
   }
}
```
_For detailed examples of embedding different types of data, see the [Embedding](/embedding/overview.md) section._

## Complete Example

Here's a comprehensive example showing various embedding and reference patterns working together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Virtual Vehicle Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "thumbnail":  "https://example.com/preview-thumb.jpg",
  "mainEntity": {
    "@type": "CreativeWork",
    "name": "Modular Vehicle",
    "hasPart": [
      {
        "@type": "3DModel",
        "name": "Chassis Base",
        "contentUrl": "https://example.com/chassis.glb",
        "associatedMedia": [
          {
            "@type": "ImageObject",
            "name": "Metal Texture",
            "contentUrl": "https://example.com/metal.jpg"
          }
        ]
      },
      {
        "@type": "3DModel",
        "name": "Interactive Dashboard",
        "contentUrl": "https://example.com/dashboard.glb",
        "encodesCreativeWork": [
          {
            "@type": "ImageObject",
            "name": "Display Graphics",
            "contentUrl": "https://example.com/display.jpg"
          }
        ]
      }
    ],
    "subjectOf": [
      {
        "@type": "DigitalDocument",
        "name": "User Manual",
        "url": "https://example.com/manual.pdf"
      }
    ],
    // Embedded data using namespace and structured values
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "physicsSetting",
        "name": "Physics Setting",
        "value": "enabled"
      }
    ],
    "gltf:transform": {
      "scale": [1.0, 1.0, 1.0],
      "rotation": [0, 0, 0, 1],
      "translation": [0, 0, 0]
    }
  }
}
```

## Loading Strategies

### Progressive Loading
Providing multiple quality variants with priority hints:

```json
{
  "@type": "ImageObject",
  "name": "Progressive Asset",
  "contentUrl": "https://example.com/preview.jpg",
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Low Detail",
      "contentUrl": "https://example.com/model-low.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "loadPriority",
          "name": "Load Priority",
          "value": "immediate"
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "High Detail",
      "contentUrl": "https://example.com/model-high.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "loadPriority",
          "name": "Load Priority",
          "value": "deferred"
        }
      ]
    }
  ]
}
```

### Conditional Loading
Platform-specific content variants:

```json
{
  "@type": "ImageObject",
  "name": "Platform-Specific Asset",
  "contentUrl": "https://example.com/preview.jpg",
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Mobile Version",
      "contentUrl": "https://example.com/model-mobile.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "platform",
          "name": "Platform",
          "value": "mobile"
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Desktop Version",
      "contentUrl": "https://example.com/model-desktop.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "platform",
          "name": "Platform",
          "value": "desktop"
        }
      ]
    }
  ]
}
```

## Best Practices

### 1. Choosing the Right Reference Type
- Use `image` for primary visual representations
- Use `mainEntity` to indicate the primary subject
- Use `sameAs` for alternative versions
- Use `associatedMedia` for related content
- Use `encodesCreativeWork` for embedded content
- Use `hasPart` for component pieces
- Use `subjectOf` for documentation

### 2. Resource References
- Use absolute URLs
- Include fallback options
- Consider CDN usage
- Implement caching strategy
- Handle URL changes
- Document relationships

### 3. Content Embedding
- Limit embedded data size
- Use appropriate namespaces
- Validate embedded data
- Consider parsing impact
- Document data structures

### 4. Mixed Approach
- Combine when appropriate
- Keep references organized
- Document relationships
- Consider load order
- Plan update strategies

### 5. Clear Hierarchy
- Use `mainEntity` for the primary subject
- Keep component hierarchies logical
- Group related media appropriately
- Document relationships clearly
- Avoid circular references

## Next Steps

- Review [File Organization](./file-organization.md) for structure guidance
- See [Core Metadata Concepts](./metadata-fundamentals.md) for fundamental concepts
- Check [Types of Things](./types-of-things.md) for specific Schema.org types
- Explore [Embedding](/embedding/overview.md) for detailed examples
