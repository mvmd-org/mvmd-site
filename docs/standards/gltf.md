---
sidebar_position: 3
---

# glTF Standard

This page covers how to integrate glTF into your metadata through namespaces.

## About glTF

[glTF](https://www.khronos.org/gltf/) (GL Transmission Format) is a royalty-free specification for efficient transmission and loading of 3D scenes and models. It's widely adopted as the standard format for 3D assets on the web, developed by the Khronos Group.

glTF is designed to be a compact file format that minimizes both the size of 3D assets and the runtime processing needed to unpack and render those assets. It's often referred to as the "JPEG of 3D" due to its widespread adoption and efficiency.

## Core glTF Concepts

Key concepts in glTF that are relevant to metadata integration:

- **Binary Format**: glTF primarily uses `.glb` binary format for efficient file size and loading
- **Scenes and Nodes**: Hierarchical structure of 3D content
- **Meshes**: Geometry data including vertices, normals, and other attributes
- **Materials**: PBR (Physically Based Rendering) materials that define surface appearance
- **Textures**: Image data used by materials
- **Animations**: Time-based transformations of nodes
- **Skins**: Skeletal animation data
- **Cameras**: View definitions
- **Extensions**: Modular way to add new features to the format

## Implementing the glTF Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  }
}
```

### Linking Example

When referencing external glTF assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/character.glb",
  "encodingFormat": "model/gltf-binary"
}
```

For versioning or variant support:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/character.glb",
  "encodingFormat": "model/gltf-binary",
  "version": "1.2.0",
  "contentSize": "5.2 MB"
}
```

### Embedding Example

When embedding glTF metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "gltf:asset": {
    "version": "2.0",
    "generator": "MetaverseBuilder 2.1"
  },
  "gltf:materials": [
    {
      "name": "Skin",
      "pbrMetallicRoughness": {
        "baseColorFactor": [1.0, 0.8, 0.7, 1.0],
        "metallicFactor": 0.0,
        "roughnessFactor": 0.5
      }
    }
  ]
}
```

## Common Use Cases

glTF is used in a variety of metaverse and 3D applications:

- Web-based 3D viewers and applications
- AR/VR experiences
- E-commerce product visualization
- Games and interactive media
- Digital twins and virtual representations

## Implementation Examples

### Basic Example

A simple glTF model reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Basic Cube",
  "description": "A simple cube for testing",
  "contentUrl": "https://example.com/cube.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Complete Example

For a complete model with textures and animations:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Animated Character",
  "description": "Player character with walking and running animations",
  "contentUrl": "https://example.com/character.glb",
  "encodingFormat": "model/gltf-binary",
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2023 Studio Example"
  },
  "gltf:animations": [
    {"name": "walk", "duration": 1.2},
    {"name": "run", "duration": 0.8}
  ],
  "gltf:requirements": {
    "minVersion": "2.0",
    "extensions": ["KHR_materials_unlit", "KHR_texture_transform"]
  }
}
```

### Integration with Schema.org

Combining glTF with Schema.org for enhanced discoverability:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://registry.khronos.org/glTF/"
  },
  "@type": "3DModel",
  "name": "Detailed Character Model",
  "description": "High-quality character model with rigging and animations",
  "contentUrl": "https://assets.example.com/character.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Organization",
    "name": "Example Studio",
    "url": "https://example-studio.com"
  },
  "dateCreated": "2023-03-15",
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "gltf:asset": {
    "version": "2.0",
    "generator": "ExampleStudio Exporter 2.0"
  },
  "gltf:materials": [
    {
      "name": "Skin",
      "technique": "PBR"
    },
    {
      "name": "Clothing",
      "technique": "PBR"
    }
  ],
  "gltf:animations": [
    "Idle",
    "Walk",
    "Run"
  ]
}
```

## JSON Schema Validation

Below is the JSON Schema for validating glTF namespace references in MVMD:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "MVMD glTF Namespace Schema",
  "description": "Schema for validating glTF namespace usage in MVMD metadata",
  "type": "object",
  "properties": {
    "@context": {
      "type": "object",
      "properties": {
        "gltf": {
          "type": "string",
          "format": "uri",
          "description": "The glTF namespace URI"
        }
      }
    },
    "gltf:asset": {
      "type": "object",
      "properties": {
        "version": {
          "type": "string",
          "description": "The glTF version",
          "enum": ["2.0"]
        },
        "generator": {
          "type": "string",
          "description": "The tool that generated the glTF content"
        },
        "copyright": {
          "type": "string",
          "description": "Copyright information"
        }
      },
      "required": ["version"]
    },
    "gltf:materials": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Material name"
          },
          "technique": {
            "type": "string",
            "description": "Rendering technique"
          },
          "pbrMetallicRoughness": {
            "type": "object",
            "properties": {
              "baseColorFactor": {
                "type": "array",
                "items": {
                  "type": "number"
                },
                "minItems": 4,
                "maxItems": 4
              },
              "metallicFactor": {
                "type": "number",
                "minimum": 0,
                "maximum": 1
              },
              "roughnessFactor": {
                "type": "number",
                "minimum": 0,
                "maximum": 1
              }
            }
          }
        },
        "required": ["name"]
      }
    },
    "gltf:animations": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "duration": {
                "type": "number",
                "minimum": 0
              }
            },
            "required": ["name"]
          }
        }
      ]
    },
    "gltf:requirements": {
      "type": "object",
      "properties": {
        "minVersion": {
          "type": "string",
          "description": "Minimum glTF version required"
        },
        "extensions": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Required glTF extensions"
        }
      }
    }
  }
}
```

## JSON-LD Context

The JSON-LD context for the glTF namespace:

```json
{
  "@context": {
    "gltf": "https://www.khronos.org/gltf/",
    "asset": {
      "@id": "gltf:asset",
      "@type": "@json"
    },
    "materials": {
      "@id": "gltf:materials",
      "@type": "@json"
    },
    "animations": {
      "@id": "gltf:animations",
      "@type": "@json"
    },
    "requirements": {
      "@id": "gltf:requirements",
      "@type": "@json"
    },
    "extensions": {
      "@id": "gltf:extensions",
      "@type": "@json"
    }
  }
}
```

## Implementation Considerations

- Use `.glb` (binary) format for efficient file size and loading
- Include only essential metadata in the embedding pattern
- Compress textures appropriately for your target platform
- Specify accurate MIME types (`model/gltf-binary` for .glb, `model/gltf+json` for .gltf)
- Consider including fallback URLs for different levels of detail
- When using extensions, document them clearly in the metadata
- For animated models, provide information about available animations
- Test your glTF assets across multiple platforms to ensure compatibility
- Consider adding accessibility metadata for better inclusion

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md)
- [3D Model Implementation](../implementation/assets.md) 