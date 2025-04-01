# Wearables

This recipe defines the metadata structure for wearable items in the metaverse, ensuring interoperability across different platforms and standards compliance.

## Overview

Wearable metadata must:
- Use ImageObject as the root type to represent the wearable's preview/thumbnail
- Include proper Schema.org context and type declarations
- Specify attachment points and compatibility information
- Include technical specifications for 3D models
- Follow Schema.org validation requirements

## Basic Example

Here's a minimal valid wearable metadata example:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Simple Digital Hat",
  "description": "A basic digital hat wearable",
  "contentUrl": "https://example.com/preview/simple_hat.jpg",
  "encodingFormat": "image/jpeg",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "wearable-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Digital Fashion Studio",
    "url": "https://example.com/studio"
  },

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "category",
      "name": "Wearable Category",
      "value": "headwear"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "attachmentPoint",
      "name": "Attachment Point",
      "value": "head"
    }
  ],

  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Hat 3D Model",
      "contentUrl": "https://example.com/models/hat.glb",
      "encodingFormat": "model/gltf-binary"
    }
  ]
}
```

## Standard Example with Technical Properties

This example adds more technical details while maintaining Schema.org validation:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Digital Fashion Hat",
  "description": "Interactive digital hat with customizable features",
  "contentUrl": "https://example.com/preview/fashion_hat.jpg",
  "encodingFormat": "image/jpeg",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "wearable-2024-002"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Digital Fashion Studio",
    "url": "https://example.com/studio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/studio/logo.png"
    }
  },

  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "category",
      "name": "Wearable Category",
      "value": "headwear"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "attachmentPoint",
      "name": "Attachment Point",
      "value": "head"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "compatibility",
      "name": "Avatar Compatibility",
      "value": "humanoid"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "technicalRequirements",
      "name": "Technical Requirements",
      "value": "polyCount:15000;textureSize:2048;materials:2"
    }
  ],

  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Hat 3D Model",
      "contentUrl": "https://example.com/models/fashion_hat.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "quality",
          "name": "Quality Level",
          "value": "high"
        }
      ]
    },
    {
      "@type": "ImageObject",
      "name": "Normal Map",
      "contentUrl": "https://example.com/textures/hat_normal.jpg",
      "encodingFormat": "image/jpeg",
      "width": 2048,
      "height": 2048
    }
  ]
}
```

## Complete Example

Here's a comprehensive example showing all features while maintaining Schema.org compatibility:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Magical Crown",
  "description": "Interactive royal crown with dynamic effects and animations",
  "contentUrl": "https://example.com/preview/crown.jpg",
  "encodingFormat": "image/jpeg",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/preview/crown_thumb.jpg",
    "encodingFormat": "image/jpeg",
    "width": 256,
    "height": 256
  },

  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "wearable-2024-003"
  },

  "creator": {
    "@type": "Organization",
    "name": "Digital Fashion Studio",
    "url": "https://example.com/studio",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/studio/logo.png"
    }
  },

  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "acquireLicensePage": "https://example.com/license/crown",

  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "category",
      "name": "Wearable Category",
      "value": "headwear"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "attachmentPoint",
      "name": "Attachment Point",
      "value": "head"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "compatibility",
      "name": "Avatar Compatibility",
      "value": "humanoid"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "minRequirements",
      "name": "Minimum Requirements",
      "value": "polyCount:8000;textureSize:1024;materials:2"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "recommendedRequirements",
      "name": "Recommended Requirements",
      "value": "polyCount:25000;textureSize:4096;materials:4"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "physicsProperties",
      "name": "Physics Properties",
      "value": "mass:0.3;collisionEnabled:true;restitution:0.3;friction:0.5"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "renderingProperties",
      "name": "Rendering Properties",
      "value": "castShadows:true;receiveShadows:true;reflective:true"
    }
  ],

  "gltf:asset": {
    "@type": "gltf:Asset",
    "version": "2.0",
    "generator": "Digital Fashion Studio Creator v1.0",
    "copyright": "© 2024 Digital Fashion Studio"
  },

  "gltf:transform": {
    "@type": "gltf:Transform",
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0.15, 0]
  },

  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "High Quality Model",
      "contentUrl": "https://example.com/models/crown_high.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "quality",
          "name": "Quality Level",
          "value": "high"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "polyCount",
          "name": "Polygon Count",
          "value": "25000"
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Low Quality Model",
      "contentUrl": "https://example.com/models/crown_low.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "quality",
          "name": "Quality Level",
          "value": "low"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "polyCount",
          "name": "Polygon Count",
          "value": "8000"
        }
      ]
    },
    {
      "@type": "ImageObject",
      "name": "Base Color Map",
      "contentUrl": "https://example.com/textures/crown_basecolor.jpg",
      "encodingFormat": "image/jpeg",
      "width": 2048,
      "height": 2048
    },
    {
      "@type": "ImageObject",
      "name": "Normal Map",
      "contentUrl": "https://example.com/textures/crown_normal.jpg",
      "encodingFormat": "image/jpeg",
      "width": 2048,
      "height": 2048
    },
    {
      "@type": "ImageObject",
      "name": "Metallic-Roughness Map",
      "contentUrl": "https://example.com/textures/crown_mer.jpg",
      "encodingFormat": "image/jpeg",
      "width": 2048,
      "height": 2048
    }
  ]
}
```

## Required Properties

### Core Properties
- `@context`: Context definition including Schema.org
- `@type`: "ImageObject" for root object
- `name`: Wearable name
- `description`: Detailed description
- `contentUrl`: URL to preview image
- `encodingFormat`: MIME type of preview
- `identifier`: Unique identifier structure
- `creator`: Creator information

### Wearable-Specific Properties
Must be included in additionalProperty array:
- Category
- Attachment point(s)
- Avatar compatibility
- Technical requirements

### Associated Media
Must include at least one 3D model:
- High quality version
- Optional low quality version
- Required textures and maps

## Best Practices

### Property Organization
- Group related properties together
- Use consistent property naming
- Include complete type declarations
- Validate all examples

### Technical Requirements
- Specify both minimum and recommended specs
- Include detailed material information
- Define physics properties when applicable
- List supported features and capabilities

### Media Management
- Provide multiple quality levels
- Include all required textures
- Specify exact dimensions
- Use appropriate formats

## Implementation Notes

1. **Avatar Compatibility**
    - Define clear attachment points
    - Specify scaling rules
    - Include fit adjustments
    - Handle different avatar types

2. **Technical Requirements**
    - Specify polygon count limits
    - Define texture resolution ranges
    - List required materials
    - Include physics properties

3. **Platform Support**
    - Define required features
    - List supported platforms
    - Specify rendering requirements
    - Include fallback options

## Common Issues and Solutions

1. **Schema Validation**
    - Use only valid Schema.org types
    - Include all required properties
    - Properly structure nested objects
    - Validate complex properties

2. **3D Asset Integration**
    - Provide appropriate LOD models
    - Include all required textures
    - Define clear material properties
    - Specify technical requirements

3. **Compatibility**
    - Define clear attachment methods
    - Specify avatar requirements
    - Include platform constraints
    - List supported features

## Next Steps

1. Validate metadata using Schema.org validator
2. Test with target platforms
3. Verify all required properties
4. Check media accessibility
5. Confirm technical requirements
