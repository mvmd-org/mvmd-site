---
sidebar_position: 2
---

# 3D Model Profile

The 3D Model Profile extends the Basic Profile with properties specific to 3D models and objects. This profile combines Schema.org metadata with technical properties from glTF and related standards to define reusable 3D assets.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Detailed Chair",
  "description": "High-quality office chair with articulated parts",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "furniture-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  },
  
  "contentUrl": "https://example.com/models/chair.glb",
  "encodingFormat": "model/gltf-binary",
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "MetaverseBuilder 2.1"
  }
}
```

## Required Properties

### Basic Information (from Basic Profile)
- `@context`
- `@type`: Must be "3DModel"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Technical Properties
- `gltf:asset`: Basic glTF information
- `gltf:transform`: Object placement data
- `gltf:materials`: At least one material definition

## Technical Metadata

### Transform Properties
```json
{
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0.45, 0]
  },
  "gltf:unit": "meter"
}
```

### Material Properties
```json
{
  "gltf:materials": [
    {
      "name": "Fabric",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.2, 0.2, 0.8, 1.0],
        "metallicFactor": 0.0,
        "roughnessFactor": 0.8
      }
    }
  ]
}
```

### Mesh Properties
```json
{
  "gltf:meshes": [
    {
      "name": "chair_base",
      "primitives": [
        {
          "material": "Fabric",
          "attributes": {
            "POSITION": true,
            "NORMAL": true,
            "TEXCOORD_0": true
          }
        }
      ]
    }
  ]
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Ergonomic Office Chair",
  "description": "Professional office chair with adjustable height, tilt mechanism, and lumbar support. Features high-quality fabric upholstery and polished metal base.",
  
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
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/models/ergonomic-chair.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnails/ergonomic-chair.jpg",
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "MetaverseBuilder 2.1",
    "copyright": "© 2024 Virtual Furnishings Inc."
  },
  
  "gltf:scene": {
    "nodes": ["chair_base", "seat", "back"],
    "defaultScene": true
  },
  
  "gltf:nodes": [
    {
      "name": "chair_base",
      "transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0, 0]
      },
      "mesh": "base_mesh"
    },
    {
      "name": "seat",
      "transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0.45, 0]
      },
      "mesh": "seat_mesh"
    },
    {
      "name": "back",
      "transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [-0.1, 0, 0, 0.99],
        "translation": [0, 0.8, -0.1]
      },
      "mesh": "back_mesh"
    }
  ],
  
  "gltf:materials": [
    {
      "name": "Fabric",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.2, 0.2, 0.8, 1.0],
        "metallicFactor": 0.0,
        "roughnessFactor": 0.8
      }
    },
    {
      "name": "Metal",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.8, 0.8, 0.8, 1.0],
        "metallicFactor": 1.0,
        "roughnessFactor": 0.2
      }
    }
  ],
  
  "gltf:animations": [
    {
      "name": "HeightAdjust",
      "type": "translation",
      "duration": 1.0,
      "channels": ["seat"],
      "interpolation": "LINEAR"
    },
    {
      "name": "BackTilt",
      "type": "rotation",
      "duration": 0.5,
      "channels": ["back"],
      "interpolation": "LINEAR"
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "polyCount",
      "value": "15000"
    },
    {
      "@type": "PropertyValue",
      "name": "textureResolution",
      "value": "2048"
    },
    {
      "@type": "PropertyValue",
      "name": "interactiveElements",
      "value": ["height", "tilt", "armrests"]
    },
    {
      "@type": "PropertyValue",
      "name": "physicalProperties",
      "value": {
        "mass": 12.5,
        "boundingBox": {
          "min": [-0.3, 0, -0.3],
          "max": [0.3, 1.2, 0.3]
        },
        "collisionShape": "convexHull"
      }
    }
  ]
}
```

## Validation Rules

### Transform Validation
- Scale values must be positive numbers
- Rotation must be valid quaternion
- Translation in meters
- Consistent units

### Material Validation
- Required PBR properties
- Valid color values
- Valid material types
- Proper texturing

### Mesh Validation
- Required attributes present
- Valid material references
- Proper primitive types
- Efficient topology

## Best Practices

1. **Organization**
    - Group related properties
    - Use clear node names
    - Document relationships
    - Maintain hierarchy
    - Optimize structure

2. **Material Definition**
    - Use PBR materials
    - Provide complete properties
    - Document special materials
    - Optimize textures
    - Consider performance

3. **Animation Structure**
    - Clear animation names
    - Proper targeting
    - Documented triggers
    - Efficient keyframes
    - Smooth transitions

4. **Additional Properties**
    - Document custom properties
    - Use consistent units
    - Clear property names
    - Include physics data
    - Define interactions

## Next Steps

- Review [Environment Profile](./environment-profile.md) for spatial context
- Check [Avatar Profile](./avatar-profile.md) for character-specific properties
- See [Validation Tools](../tools/validation.md) for testing
