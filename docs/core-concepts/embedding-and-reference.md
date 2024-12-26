---
sidebar_position: 3
---

# Embedding and Reference Patterns

This guide covers strategies for embedding content directly in metadata versus referencing external resources, with a focus on optimizing asset delivery and management in Metaverse environments.

## Core Concepts

### Direct Embedding
Embedding includes content directly within the metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
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
  ]
}
```

### External References
Referencing links to external resources:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
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

## Implementation Patterns

### Direct Content Embedding

Example of embedded configuration using valid Schema.org properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
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

### External Resource References

Example with multiple quality variants:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Character Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "High-Detail Model",
      "contentUrl": "https://example.com/model-high.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "qualityLevel",
          "name": "Quality Level",
          "value": "high"
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Low-Detail Model",
      "contentUrl": "https://example.com/model-low.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "qualityLevel",
          "name": "Quality Level",
          "value": "low"
        }
      ]
    }
  ]
}
```

## Complete Example

Here's a comprehensive example showing various embedding and reference patterns:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Interactive Scene Preview",
  "contentUrl": "https://example.com/scene-preview.jpg",
  "encodingFormat": "image/jpeg",
  "description": "Interactive virtual scene with multiple components and configurations",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "lightingType",
      "name": "Lighting Type",
      "value": "dynamic"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "lightingIntensity",
      "name": "Lighting Intensity",
      "value": "1.0"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "physicsSetting",
      "name": "Physics Setting",
      "value": "enabled"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "gravityValue",
      "name": "Gravity Value",
      "value": "-9.81"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "collisionLayers",
      "name": "Collision Layers",
      "value": "ground,objects,characters"
    }
  ],
  
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Environment Base",
      "contentUrl": "https://example.com/environment.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "transform",
          "name": "Transform Data",
          "value": "scale:1,1,1;rotation:0,0,0,1;translation:0,0,0"
        }
      ]
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Interactive Objects",
      "contentUrl": "https://example.com/objects.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "interactionType",
          "name": "Interaction Type",
          "value": "click"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "interactionResponse",
          "name": "Interaction Response",
          "value": "animate"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Background Video",
      "contentUrl": "https://example.com/background.mp4",
      "encodingFormat": "video/mp4",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "playbackLoop",
          "name": "Playback Loop",
          "value": "true"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "playbackVolume",
          "name": "Playback Volume",
          "value": "0.5"
        }
      ]
    }
  ],
  
  "encodesCreativeWork": [
    {
      "@type": "DigitalDocument",
      "name": "Interaction Guide",
      "url": "https://example.com/guide.md",
      "encodingFormat": "text/markdown"
    }
  ]
}
```

## Best Practices

### 1. Content Organization
- Group related content logically
- Maintain clear hierarchy
- Use appropriate relationships
- Consider load order

### 2. Resource References
- Use absolute URLs
- Include fallback options
- Consider CDN usage
- Implement caching strategy

### 3. Performance Optimization
- Minimize embedded data size
- Use appropriate compression
- Implement lazy loading
- Consider bandwidth usage

### 4. Content Management
- Version external resources
- Track dependencies
- Handle missing resources
- Implement updates efficiently

## Loading Strategies

### Progressive Loading
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

## Next Steps

- Review [File Organization](./file-organization.md) for structure guidance
- See [Best Practices](/implementation/best-practices.md) for implementation tips
- Check [Validation Tools](../tools/validation.md) for metadata validation
