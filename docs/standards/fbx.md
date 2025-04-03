---
sidebar_position: 7
---

# FBX

This page covers how to integrate FBX into your metadata through namespaces.

## About FBX

[FBX](https://www.autodesk.com/products/fbx/overview) (Filmbox) is a proprietary file format owned by Autodesk, widely used in game development, film, and animation industries for transferring 3D assets between applications. FBX supports complex animations, rigging, textures, and lighting, making it a versatile format for high-quality 3D content exchange.

While FBX is proprietary, its widespread adoption across major 3D creation tools makes it an important format for metaverse asset workflows, particularly for preserving complex animation data.

## Core FBX Concepts

Key concepts in FBX that are relevant to metadata integration:

- **Node Hierarchy**: Organized scene graph structure
- **Mesh Geometry**: Detailed 3D geometry with polygons, normals, and UVs
- **Skeletal Animation**: Bone hierarchies and keyframe animations
- **Blend Shapes**: Morph targets for facial expressions and shape deformation
- **Advanced Materials**: Support for various material types and texture mapping
- **Cameras and Lighting**: Scene setup with view and lighting information
- **Custom Properties**: Ability to store additional metadata within the file

## Implementing the FBX Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "fbx": "https://schema.autodesk.com/fbx/"
  }
}
```

### Linking Example

When referencing external FBX assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Animated Character",
  "contentUrl": "https://example.com/models/character.fbx",
  "encodingFormat": "model/fbx"
}
```

With version information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Animated Character",
  "contentUrl": "https://example.com/models/character.fbx",
  "encodingFormat": "model/fbx",
  "version": "FBX 2020",
  "contentSize": "15.2 MB"
}
```

### Embedding Example

When embedding FBX metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "fbx": "https://schema.autodesk.com/fbx/"
  },
  "@type": "3DModel",
  "name": "Animated Character",
  "fbx:version": "FBX 2020",
  "fbx:upAxis": "Y",
  "fbx:units": {
    "scaleFactor": 1.0,
    "type": "centimeters"
  },
  "fbx:animations": [
    {
      "name": "Idle",
      "frameCount": 120,
      "frameRate": 30
    },
    {
      "name": "Walk",
      "frameCount": 60,
      "frameRate": 30
    },
    {
      "name": "Run",
      "frameCount": 40,
      "frameRate": 30
    }
  ],
  "fbx:geometry": {
    "meshCount": 15,
    "totalVertices": 25840,
    "totalPolygons": 32672
  }
}
```

## Common Use Cases

FBX is used in a variety of metaverse and gaming applications:

- Game asset creation and import
- Character animation and rigging
- Film and VFX asset production
- Architectural visualization
- Product design and visualization
- VR/AR content creation
- Motion capture data transfer

## Implementation Examples

### Basic Example

A simple FBX model reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "description": "Rigged humanoid character for game development",
  "contentUrl": "https://example.com/models/character.fbx",
  "encodingFormat": "model/fbx",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Complete Example

For a complete model with detailed metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "fbx": "https://schema.autodesk.com/fbx/"
  },
  "@type": "3DModel",
  "name": "Advanced Character Model",
  "description": "Fully rigged and animated character with PBR materials",
  "contentUrl": "https://example.com/models/advanced-character.fbx",
  "encodingFormat": "model/fbx",
  "creator": {
    "@type": "Person",
    "name": "3D Character Artist",
    "url": "https://artist.example.com"
  },
  "license": "https://example.com/commercial-license",
  "dateCreated": "2023-06-15",
  "fileFormat": "FBX Binary",
  "fbx:version": "FBX 2020",
  "fbx:upAxis": "Y",
  "fbx:units": {
    "scaleFactor": 1.0,
    "type": "centimeters"
  },
  "fbx:animations": [
    {
      "name": "Idle",
      "frameCount": 120,
      "frameRate": 30,
      "looping": true
    },
    {
      "name": "Walk",
      "frameCount": 60,
      "frameRate": 30,
      "looping": true
    },
    {
      "name": "Run",
      "frameCount": 40,
      "frameRate": 30,
      "looping": true
    },
    {
      "name": "Jump",
      "frameCount": 35,
      "frameRate": 30,
      "looping": false
    }
  ],
  "fbx:skeleton": {
    "boneCount": 86,
    "ikChains": 4,
    "customProperties": true
  },
  "fbx:materials": [
    {
      "name": "Skin",
      "type": "PBR",
      "textureMaps": ["diffuse", "normal", "roughness", "specular", "subsurface"]
    },
    {
      "name": "Clothing",
      "type": "PBR",
      "textureMaps": ["diffuse", "normal", "roughness", "metallic", "ao"]
    },
    {
      "name": "Hair",
      "type": "Specialized",
      "textureMaps": ["diffuse", "normal", "alpha", "flow"]
    }
  ],
  "fbx:geometry": {
    "meshCount": 15,
    "totalVertices": 25840,
    "totalPolygons": 32672,
    "uvSets": 2,
    "vertexColors": false,
    "weightedNormals": true
  }
}
```

### Integration with Game Engine

Example for game engine integration with compatibility metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "fbx": "https://schema.autodesk.com/fbx/"
  },
  "@type": "3DModel",
  "name": "Game-Ready Character",
  "description": "Optimized character for real-time game engines",
  "contentUrl": "https://example.com/models/game-character.fbx",
  "encodingFormat": "model/fbx",
  "creator": {
    "@type": "Organization",
    "name": "Game Assets Studio",
    "url": "https://gameassets.example.com"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "engineCompatibility",
      "name": "Engine Compatibility",
      "value": {
        "engines": [
          {
            "name": "Unreal Engine",
            "minVersion": "5.0",
            "importSettings": {
              "scale": 1.0,
              "importMaterials": true,
              "importAnimations": true
            }
          },
          {
            "name": "Unity",
            "minVersion": "2022.1",
            "importSettings": {
              "scale": 0.01,
              "modelImporterNormals": "import",
              "importBlendShapes": true,
              "importVisibility": true
            }
          }
        ]
      }
    }
  ],
  "fbx:version": "FBX 2020",
  "fbx:upAxis": "Y",
  "fbx:animations": [
    {"name": "Idle", "frameCount": 120, "frameRate": 30},
    {"name": "Walk", "frameCount": 60, "frameRate": 30}
  ],
  "fbx:geometry": {
    "totalVertices": 15240,
    "totalPolygons": 12500,
    "lodLevels": [
      {"level": 0, "polygons": 12500},
      {"level": 1, "polygons": 6000},
      {"level": 2, "polygons": 2000}
    ]
  }
}
```

## JSON Schema Validation

For validating FBX namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "FBX Namespace Schema",
  "type": "object",
  "properties": {
    "fbx:version": {
      "type": "string",
      "description": "FBX format version"
    },
    "fbx:upAxis": {
      "type": "string",
      "enum": ["X", "Y", "Z"],
      "description": "The up-axis used in the FBX file"
    },
    "fbx:units": {
      "type": "object",
      "description": "Unit scale information",
      "properties": {
        "scaleFactor": { "type": "number" },
        "type": { "type": "string" }
      }
    },
    "fbx:animations": {
      "type": "array",
      "description": "Animation clips contained in the FBX file",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "frameCount": { "type": "integer" },
          "frameRate": { "type": "number" },
          "looping": { "type": "boolean" }
        },
        "required": ["name"]
      }
    },
    "fbx:skeleton": {
      "type": "object",
      "description": "Skeletal rig information"
    },
    "fbx:materials": {
      "type": "array",
      "description": "Material definitions",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "type": { "type": "string" },
          "textureMaps": { 
            "type": "array",
            "items": { "type": "string" }
          }
        },
        "required": ["name"]
      }
    },
    "fbx:geometry": {
      "type": "object",
      "description": "Geometric mesh information"
    }
  }
}
```

## JSON-LD Context

The FBX namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "fbx": "https://schema.autodesk.com/fbx/",
    "fbx:version": { "@id": "fbx:version" },
    "fbx:upAxis": { "@id": "fbx:upAxis" },
    "fbx:units": { "@id": "fbx:units" },
    "fbx:animations": { "@id": "fbx:animations" },
    "fbx:skeleton": { "@id": "fbx:skeleton" },
    "fbx:materials": { "@id": "fbx:materials" },
    "fbx:geometry": { "@id": "fbx:geometry" }
  }
}
```

## Implementation Considerations

When implementing the FBX namespace, keep these considerations in mind:

- **Proprietary Format**: FBX is proprietary, so documentation may not be as open as other formats
- **Version Compatibility**: Specify FBX version for compatibility (2013, 2014, 2018, 2020, etc.)
- **Binary vs ASCII**: FBX can be saved in Binary (more common) or ASCII format
- **Third-Party Tools**: Leverage FBX SDK or conversion tools for programmatic access
- **Animation Compatibility**: Animation features have varying support across software
- **Material Conversion**: Materials may need conversion when used across different platforms
- **Scale Standardization**: Maintain consistent scale factors between applications

## Related Documentation

- [Animation Implementation](../implementation/interactive-assets.md)
- [Cross-Platform Asset Implementation](../implementation/cross-platform-assets.md)
- [glTF Standard](./gltf.md)
- [COLLADA Namespace](./collada.md) 