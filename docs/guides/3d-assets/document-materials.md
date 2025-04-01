---
sidebar_position: 3
---

# Document Materials

This guide explains how to properly document materials for 3D models in your MVMD metadata, ensuring accurate rendering and material properties across different platforms.

## Why Document Materials?

Detailed material documentation helps:
- Ensure consistent appearance across platforms
- Support accurate PBR (Physically-Based Rendering) workflows
- Enable efficient material optimization
- Provide clear attribution for material creators
- Support material replacement or customization

## Basic Material Structure

For simple material documentation, you can use the MVMD materials structure:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Example Model",
  // ... other properties ...
  
  "mvmd:materials": [
    {
      "name": "Polished Metal",
      "type": "PBR",
      "baseColor": "#CCCCCC",
      "metallicFactor": 1.0,
      "roughnessFactor": 0.2
    },
    {
      "name": "Red Plastic",
      "type": "PBR",
      "baseColor": "#CC3030",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.7
    }
  ]
}
```

## Material Types and Properties

### Basic PBR Properties

```json
"mvmd:materials": [
  {
    "name": "Brushed Brass",
    "type": "PBR",
    "baseColor": "#D4B764",
    "metallicFactor": 1.0,
    "roughnessFactor": 0.6,
    "normalScale": 1.0,
    "emissiveFactor": [0, 0, 0],
    "alphaCutoff": 0.5,
    "alphaMode": "OPAQUE"
  }
]
```

### Material with Textures

```json
"mvmd:materials": [
  {
    "name": "Worn Leather",
    "type": "PBR",
    "baseColor": "#703A22",
    "metallicFactor": 0.0,
    "roughnessFactor": 0.9,
    "textureMap": {
      "baseColorTexture": {
        "url": "https://example.com/textures/leather_basecolor.jpg",
        "scale": [1, 1],
        "rotation": 0
      },
      "metallicRoughnessTexture": {
        "url": "https://example.com/textures/leather_metalrough.jpg"
      },
      "normalTexture": {
        "url": "https://example.com/textures/leather_normal.jpg",
        "scale": 1.0
      },
      "occlusionTexture": {
        "url": "https://example.com/textures/leather_occlusion.jpg",
        "strength": 0.8
      },
      "emissiveTexture": {
        "url": "https://example.com/textures/leather_emissive.jpg"
      }
    }
  }
]
```

### Specific Material Types

#### Metal Material

```json
{
  "name": "Stainless Steel",
  "type": "PBR",
  "baseColor": "#E8E8E8",
  "metallicFactor": 1.0,
  "roughnessFactor": 0.4,
  "anisotropyStrength": 0.5,
  "anisotropyRotation": 0,
  "reflectance": 0.75
}
```

#### Glass Material

```json
{
  "name": "Clear Glass",
  "type": "PBR",
  "baseColor": "#FFFFFF",
  "metallicFactor": 0.0,
  "roughnessFactor": 0.05,
  "transmission": 0.95,
  "ior": 1.52,
  "alphaMode": "BLEND",
  "alphaCutoff": 0.5
}
```

#### Cloth Material

```json
{
  "name": "Cotton Fabric",
  "type": "PBR",
  "baseColor": "#E0E0FF",
  "metallicFactor": 0.0,
  "roughnessFactor": 0.9,
  "sheen": 0.8,
  "sheenColor": "#FFFFFF",
  "sheenRoughness": 0.3
}
```

## Material Extensions

For more complex material documentation, you can use format-specific extensions.

### glTF Materials Extension

```json
"gltf:materials": [
  {
    "name": "Gold",
    "pbrMetallicRoughness": {
      "baseColorFactor": [1.0, 0.85, 0.57, 1.0],
      "metallicFactor": 1.0,
      "roughnessFactor": 0.3
    },
    "normalTexture": {
      "index": 1,
      "scale": 1.0
    },
    "extensions": {
      "KHR_materials_specular": {
        "specularFactor": 1.0,
        "specularColorFactor": [1.0, 0.85, 0.57]
      },
      "KHR_materials_ior": {
        "ior": 2.4
      }
    }
  }
]
```

### USDZ Material Extension

```json
"usdz:materials": [
  {
    "name": "Ceramic",
    "preview:surface": {
      "diffuseColor": [0.9, 0.9, 0.9],
      "roughness": 0.3,
      "metallic": 0.0,
      "clearcoat": 0.8,
      "clearcoatRoughness": 0.2
    },
    "primvars:displayColor": [[0.9, 0.9, 0.9]]
  }
]
```

## Complete Example

Here's a comprehensive example showing multiple materials with detailed properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Modern Desk Lamp",
  "description": "A detailed 3D model of a modern desk lamp with articulated arm and customizable materials.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AssetID",
    "value": "lamp-2024-003"
  },
  "contentUrl": "https://example.com/models/desk-lamp.glb",
  "encodingFormat": "model/gltf-binary",
  
  "mvmd:materials": [
    {
      "name": "Lamp Base - Brushed Aluminum",
      "type": "PBR",
      "baseColor": "#E8E8E8",
      "metallicFactor": 1.0,
      "roughnessFactor": 0.5,
      "textureMap": {
        "baseColorTexture": {
          "url": "https://example.com/textures/brushed_aluminum_basecolor.jpg"
        },
        "normalTexture": {
          "url": "https://example.com/textures/brushed_aluminum_normal.jpg",
          "scale": 1.0
        },
        "metallicRoughnessTexture": {
          "url": "https://example.com/textures/brushed_aluminum_metalrough.jpg"
        }
      },
      "additionalProperty": {
        "@type": "PropertyValue",
        "propertyID": "anisotropy",
        "value": "0.6"
      }
    },
    {
      "name": "Lamp Shade - Fabric",
      "type": "PBR",
      "baseColor": "#FFFFEE",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.8,
      "textureMap": {
        "baseColorTexture": {
          "url": "https://example.com/textures/fabric_basecolor.jpg"
        },
        "normalTexture": {
          "url": "https://example.com/textures/fabric_normal.jpg"
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "sheen",
          "value": "0.3"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "subsurface",
          "value": "0.2"
        }
      ]
    },
    {
      "name": "Light Bulb - Glass",
      "type": "PBR",
      "baseColor": "#FFFFFF",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.1,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "ior",
          "value": "1.5"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "transmission",
          "value": "0.95"
        }
      ]
    },
    {
      "name": "Light Bulb - Emissive",
      "type": "PBR",
      "baseColor": "#FFFFFF",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.0,
      "emissiveFactor": [1.0, 0.9, 0.7],
      "emissiveIntensity": 10.0
    },
    {
      "name": "Cord - Rubber",
      "type": "PBR",
      "baseColor": "#202020",
      "metallicFactor": 0.0,
      "roughnessFactor": 0.9
    }
  ],
  
  "gltf:materials": [
    {
      "name": "Lamp Base - Brushed Aluminum",
      "pbrMetallicRoughness": {
        "baseColorTexture": {
          "index": 0,
          "texCoord": 0
        },
        "metallicRoughnessTexture": {
          "index": 1,
          "texCoord": 0
        },
        "baseColorFactor": [0.9, 0.9, 0.9, 1.0],
        "metallicFactor": 1.0,
        "roughnessFactor": 0.5
      },
      "normalTexture": {
        "index": 2,
        "scale": 1.0
      },
      "extensions": {
        "KHR_materials_anisotropy": {
          "anisotropyStrength": 0.6,
          "anisotropyRotation": 0
        }
      }
    },
    {
      "name": "Light Bulb - Emissive",
      "pbrMetallicRoughness": {
        "baseColorFactor": [1.0, 1.0, 1.0, 1.0],
        "metallicFactor": 0.0,
        "roughnessFactor": 0.0
      },
      "emissiveFactor": [1.0, 0.9, 0.7],
      "extensions": {
        "KHR_materials_emissive_strength": {
          "emissiveStrength": 10.0
        }
      }
    }
  ]
}
```

## Material Documentation Best Practices

### 1. Document All Materials

Always document every material in your model, even simple ones. This ensures complete representation.

### 2. Use Standard PBR Parameters

Stick to standard PBR parameters:
- baseColor (diffuse color)
- metallicFactor (0-1)
- roughnessFactor (0-1)
- normalScale (usually 1.0)
- emissiveFactor (RGB values)

### 3. Provide Texture Information

For each texture, include:
- URL to the texture file
- Texture type (baseColor, normal, etc.)
- Texture coordinates information if relevant
- Scale/rotation where applicable

### 4. Include Format-Specific Extensions

Use format-specific extensions (glTF, USDZ) when needed to ensure proper rendering in those formats.

### 5. Include Attribution

If using third-party materials, include:
```json
"material": {
  "name": "Marble",
  "creator": {
    "@type": "Person",
    "name": "Material Creator",
    "url": "https://example.com/creator"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### 6. Organize Complex Materials

For complex materials with many properties, organize them into logical groups:

```json
"material": {
  "name": "Complex Material",
  "baseProperties": {
    "baseColor": "#FFFFFF",
    "metallicFactor": 0.5,
    "roughnessFactor": 0.3
  },
  "textures": {
    // texture information
  },
  "advancedProperties": {
    // advanced properties
  }
}
```

## Next Steps

- [Add Thumbnails & Previews](add-thumbnails.md) - Learn how to create effective visual representations
- [Describe 3D Models](describe-3d-models.md) - Return to the main 3D model description guide
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your metadata is correctly structured

