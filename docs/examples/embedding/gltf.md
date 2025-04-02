---
sidebar_position: 1
---

# glTF Standard

glTF (GL Transmission Format) is a royalty-free specification developed by the Khronos Group for the efficient transmission and loading of 3D models and scenes in applications. It minimizes both the size of 3D assets and the runtime processing required to unpack and utilize them, making it an ideal choice for web-based and real-time applications.
Khronos Group

For more detailed information, you can refer to the official glTF 2.0 specification: [glTF 2.0 Specification](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html)

## Core Properties

### Transform Information

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html"
  },
  "@type": "3DModel",
  "name": "Positioned Asset",
  
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
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Detailed Asset",
  
  "gltf:materials": [
    {
      "name": "MetallicPanel",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.8, 0.8, 0.8, 1.0],
        "metallicFactor": 1.0,
        "roughnessFactor": 0.2
      }
    },
    {
      "name": "WoodSurface",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.6, 0.4, 0.2, 1.0],
        "metallicFactor": 0.0,
        "roughnessFactor": 0.8
      }
    }
  ]
}
```

### Animation Data

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Animated Asset",
  
  "gltf:animations": [
    {
      "name": "Rotate",
      "type": "rotation",
      "duration": 2.0,
      "channels": ["node_1"],
      "interpolation": "LINEAR"
    },
    {
      "name": "Scale",
      "type": "scale",
      "duration": 1.5,
      "channels": ["node_1"],
      "interpolation": "STEP"
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
  "name": "Interactive Kiosk",
  "description": "Digital information kiosk with animated display panel",
  
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 Virtual Designs Inc.",
    "generator": "MetaverseBuilder 2.1"
  },
  
  "gltf:scene": {
    "nodes": ["kiosk_base", "display_panel"],
    "defaultScene": true
  },
  
  "gltf:nodes": [
    {
      "name": "kiosk_base",
      "transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0, 0]
      },
      "mesh": "kiosk_base_mesh"
    },
    {
      "name": "display_panel",
      "transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 1.5, 0]
      },
      "mesh": "panel_mesh"
    }
  ],
  
  "gltf:materials": [
    {
      "name": "KioskMetal",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.8, 0.8, 0.8, 1.0],
        "metallicFactor": 1.0,
        "roughnessFactor": 0.2
      }
    },
    {
      "name": "DisplayScreen",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.1, 0.1, 0.1, 1.0],
        "metallicFactor": 0.0,
        "roughnessFactor": 0.1
      },
      "emissiveFactor": [1.0, 1.0, 1.0]
    }
  ],
  
  "gltf:animations": [
    {
      "name": "DisplayRotate",
      "type": "rotation",
      "duration": 2.0,
      "channels": ["display_panel"],
      "interpolation": "LINEAR"
    },
    {
      "name": "DisplayActive",
      "type": "emissive",
      "duration": 1.0,
      "channels": ["DisplayScreen"],
      "interpolation": "STEP"
    }
  ],
  
  "gltf:meshes": [
    {
      "name": "kiosk_base_mesh",
      "primitives": [
        {
          "material": "KioskMetal",
          "attributes": {
            "POSITION": true,
            "NORMAL": true,
            "TEXCOORD_0": true
          }
        }
      ]
    },
    {
      "name": "panel_mesh",
      "primitives": [
        {
          "material": "DisplayScreen",
          "attributes": {
            "POSITION": true,
            "NORMAL": true,
            "TEXCOORD_0": true
          }
        }
      ]
    }
  ],
  
  "gltf:extensions": [
    {
      "name": "KHR_materials_unlit",
      "meshes": ["panel_mesh"]
    },
    {
      "name": "KHR_lights_punctual",
      "lights": ["display_glow"]
    }
  ]
}
```

## Property Guidelines

### Transform Properties
- Use right-handed coordinate system
- Rotations in quaternions [x, y, z, w]
- Scales as uniform or non-uniform [x, y, z]
- Translations in meters [x, y, z]

### Material Properties
- Use PBR (Physically Based Rendering) properties
- Specify all material factors
- Include texture references when used
- Document custom properties

### Animation Properties
- Provide clear animation names
- Specify target nodes/channels
- Include duration and interpolation
- Document animation triggers

## Validation Rules

### Required Properties
- Valid glTF version
- Proper coordinate system
- Complete material definitions
- Node references

### Optional Properties
- Animations
- Extensions
- Extra attributes
- Custom properties

## Best Practices

1. **Hierarchy Organization**
    - Use clear node naming
    - Maintain logical scene structure
    - Document parent-child relationships

2. **Material Management**
    - Use consistent material naming
    - Apply PBR principles
    - Document material properties

3. **Animation Structure**
    - Clear animation purposes
    - Logical timing
    - Proper channel targeting

4. **Extension Usage**
    - Document required extensions
    - Validate extension support
    - Provide fallbacks

## Next Steps

- Review [USD Standard](./usd.md) for scene composition
- See [3D Object Profile](/integration-profiles/basic.md) for complete profile
- Check [Validation](../reference/validator.md) for testing metadata
