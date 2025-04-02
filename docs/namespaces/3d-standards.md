---
sidebar_position: 3
---

# 3D Standards Namespaces

This page covers how to integrate 3D standards into your metadata through namespaces.

## Supported 3D Standards

## glTF

### Overview and Use Cases

[glTF](https://www.khronos.org/gltf/) (GL Transmission Format) is a royalty-free specification for efficient transmission and loading of 3D scenes and models. It's widely adopted as the standard format for 3D assets on the web.

Common use cases include:
- Web-based 3D viewers and applications
- AR/VR experiences
- E-commerce product visualization
- Games and interactive media
- Digital twins and virtual representations

### Core Properties and Extensions

glTF supports a variety of properties and extensions that can be referenced in metadata:

- **Core Properties**: scenes, nodes, meshes, materials, textures, animations
- **Common Extensions**: 
  - KHR_materials_unlit: For non-PBR rendering
  - KHR_draco_mesh_compression: For mesh compression
  - KHR_mesh_quantization: For more efficient geometry
  - KHR_texture_transform: For UV transformations
  - KHR_materials_clearcoat: For automotive-style paint

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

### External Reference Patterns

When linking to glTF assets, use standard formats:

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

### Embedding Patterns

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

### Implementation Examples

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

### Best Practices

- Use `.glb` (binary) format for efficient file size and loading
- Include only essential metadata in the embedding pattern
- Compress textures appropriately for your target platform
- Specify accurate MIME types (`model/gltf-binary` for .glb, `model/gltf+json` for .gltf)
- Consider including fallback URLs for different levels of detail

## USD (Universal Scene Description)

### Overview and Use Cases

[USD](https://openusd.org/) (Universal Scene Description) is an extensible framework for describing, composing, and collaborating within 3D worlds. Developed by Pixar and now open source, USD is gaining adoption for complex scenes and environments.

Common use cases include:
- Film and animation production
- Complex scene composition
- Architecture and design visualization
- Multi-user collaborative environments
- High-fidelity digital twins

### Core Properties and Extensions

USD offers rich functionality through its core features:

- **Core Components**: Stages, Layers, Prims, Properties, References
- **Key Concepts**: Composition arcs, Variants, Value resolution
- **Common Schemas**:
  - UsdGeom: Geometric primitives
  - UsdShade: Materials and shaders
  - UsdPhysics: Physical properties
  - UsdLux: Lighting elements

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usd": "https://openusd.org/ns/"
  }
}
```

### External Reference Patterns

When linking to USD assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Environment Scene",
  "contentUrl": "https://example.com/environment.usd",
  "encodingFormat": "model/vnd.usd"
}
```

For variant sets or specific compositions:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Environment Scene",
  "contentUrl": "https://example.com/environment.usd",
  "encodingFormat": "model/vnd.usd",
  "usd:variantSet": "winter_setup",
  "usd:stage": "/Root/MainScene"
}
```

### Embedding Patterns

When embedding USD metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Environment Scene",
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  "usd:layers": [
    {
      "name": "base",
      "path": "/Environment/Base"
    },
    {
      "name": "details",
      "path": "/Environment/Details"
    }
  ]
}
```

### Implementation Examples

Complete example with variants and references:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "3DModel",
  "name": "City Environment",
  "contentUrl": "https://example.com/city.usd",
  "encodingFormat": "model/vnd.usd",
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0,
    "startTimeCode": 0,
    "endTimeCode": 100
  },
  "usd:variantSets": [
    {
      "name": "timeOfDay",
      "variants": ["day", "night", "dusk"],
      "default": "day"
    },
    {
      "name": "weather",
      "variants": ["clear", "rain", "snow"],
      "default": "clear"
    }
  ],
  "usd:sublayers": [
    "city_base.usd",
    "city_buildings.usd",
    "city_details.usd"
  ]
}
```

### Best Practices

- Optimize USD assets with instancing for repeated elements
- Use USD's composition capabilities instead of duplicating geometry
- Consider file size and loading performance in web contexts
- Include fallbacks for platforms with limited USD support
- Use well-structured paths and naming conventions

## VRM

### Overview and Use Cases

[VRM](https://vrm.dev/en/) is a file format for handling humanoid 3D avatar data. It extends glTF to add specialized components for avatars, including facial expressions, look-at controls, and humanoid rig definitions.

Common use cases include:
- VR/AR avatars
- Virtual influencers and personalities
- Virtual production and performance capture
- Social VR applications
- Game characters with standardized rigging

### Core Properties and Extensions

VRM extends glTF with avatar-specific features:

- **Humanoid**: Standardized skeletal structure
- **BlendShape**: Facial expressions and visemes
- **FirstPerson**: VR-specific rendering settings
- **LookAt**: Eye and head tracking controls
- **SpringBone**: Secondary animation for hair, clothing, etc.

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "vrm": "https://vrm.dev/ns/"
  }
}
```

### External Reference Patterns

When linking to VRM assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Humanoid Avatar",
  "contentUrl": "https://example.com/character.vrm",
  "encodingFormat": "model/vrm"
}
```

### Embedding Patterns

When embedding VRM metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/ns/"
  },
  "@type": "3DModel",
  "name": "Humanoid Avatar",
  "vrm:humanoid": {
    "version": "1.0",
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 },
      "head": { "node": 5 }
    }
  },
  "vrm:expressions": {
    "happy": {
      "morphTargetBinds": [
        { "index": 0, "weight": 1.0 }
      ]
    },
    "sad": {
      "morphTargetBinds": [
        { "index": 1, "weight": 1.0 }
      ]
    }
  }
}
```

### Implementation Examples

Complete avatar with expressions and physics:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/ns/"
  },
  "@type": "3DModel",
  "name": "Social VR Avatar",
  "contentUrl": "https://example.com/social_avatar.vrm",
  "encodingFormat": "model/vrm",
  "vrm:meta": {
    "title": "Social VR Avatar",
    "version": "1.0",
    "author": "Studio Example",
    "allowedUserName": "Everyone",
    "violentUsage": "Disallow",
    "sexualUsage": "Disallow",
    "commercialUsage": "Allow",
    "licenseType": "CC_BY_4.0"
  },
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 },
      "chest": { "node": 3 },
      "head": { "node": 5 }
    }
  },
  "vrm:expressions": {
    "preset": {
      "happy": { "node": 10 },
      "angry": { "node": 11 },
      "sad": { "node": 12 },
      "relaxed": { "node": 13 }
    },
    "custom": {
      "wink": { "node": 15 },
      "victory": { "node": 16 }
    }
  },
  "vrm:physics": {
    "springBones": [
      {
        "name": "hair",
        "stiffness": 0.8,
        "gravityPower": 0.2
      },
      {
        "name": "skirt",
        "stiffness": 0.5,
        "gravityPower": 0.5
      }
    ]
  }
}
```

### Best Practices

- Follow VRM licensing and usage guidelines for avatars
- Optimize bone weights and blend shapes for performance
- Test avatars in target VR/AR environments
- Include all standard expressions for maximum compatibility
- Use appropriate physics settings for different platforms

## FBX

### Overview and Use Cases

FBX (Filmbox) is a proprietary file format developed by Autodesk for interchange of 3D assets between different software platforms.

Common use cases include:
- Cross-software 3D asset exchange
- Animation transfer
- Game development asset pipelines
- Archiving complex 3D scenes with animation
- Professional 3D content creation workflows

### Core Properties and Extensions

While FBX is proprietary, common elements include:

- **Geometry**: Meshes, nurbs, patches
- **Rigging**: Skeletons, joints, skinning
- **Animation**: Keyframes, curves, takes
- **Materials**: Textures, shaders, UV mapping
- **Scene**: Hierarchy, transforms, metadata

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

### External Reference Patterns

When linking to FBX assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Character Rig",
  "contentUrl": "https://example.com/character.fbx",
  "encodingFormat": "model/fbx"
}
```

### Embedding Patterns

When embedding FBX metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "fbx": "https://schema.autodesk.com/fbx/"
  },
  "@type": "3DModel",
  "name": "Character Rig",
  "fbx:version": "7.5",
  "fbx:units": {
    "scaleFactor": 1.0,
    "system": "centimeters"
  },
  "fbx:animations": [
    {"name": "Walk_Cycle", "frameStart": 1, "frameEnd": 30},
    {"name": "Run_Cycle", "frameStart": 31, "frameEnd": 50}
  ]
}
```

### Implementation Examples

Character with animation and material specification:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "fbx": "https://schema.autodesk.com/fbx/"
  },
  "@type": "3DModel",
  "name": "Game Character",
  "contentUrl": "https://example.com/game_character.fbx",
  "encodingFormat": "model/fbx",
  "fbx:version": "7.5",
  "fbx:creator": "Autodesk Maya 2023",
  "fbx:units": {
    "scaleFactor": 1.0,
    "system": "centimeters"
  },
  "fbx:upAxis": "Y",
  "fbx:animations": [
    {"name": "Idle", "frameStart": 1, "frameEnd": 60, "fps": 30},
    {"name": "Walk", "frameStart": 61, "frameEnd": 90, "fps": 30},
    {"name": "Run", "frameStart": 91, "frameEnd": 120, "fps": 30}
  ],
  "fbx:materials": [
    {"name": "Body", "shader": "Phong", "diffuseMap": "body_diffuse.png"},
    {"name": "Head", "shader": "Phong", "diffuseMap": "head_diffuse.png"}
  ],
  "fbx:geometry": {
    "vertices": 5426,
    "polygons": 5128,
    "uvSets": 2
  }
}
```

### Best Practices

- Consider converting FBX to more web-friendly formats for final delivery
- Specify FBX version for compatibility
- Document animation takes and ranges
- Include material references
- Consider licensing implications of proprietary format

## Collada

### Overview and Use Cases

[Collada](https://www.khronos.org/collada/) (COLLAborative Design Activity) is an XML-based interchange file format for interactive 3D applications.

Common use cases include:
- 3D asset interchange
- Game development
- Scientific visualization
- Digital content creation
- Legacy 3D content migration

### Core Properties and Extensions

Collada's XML-based format includes:

- **Geometry**: Meshes, curves, surfaces
- **Effects**: Materials, textures, shaders
- **Kinematics**: Joints, animations
- **Physics**: Constraints, rigid bodies
- **Scene**: Cameras, lights, hierarchies

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "collada": "https://www.khronos.org/collada/"
  }
}
```

### External Reference Patterns

When linking to Collada assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Architectural Model",
  "contentUrl": "https://example.com/building.dae",
  "encodingFormat": "model/vnd.collada+xml"
}
```

### Embedding Patterns

When embedding Collada metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "collada": "https://www.khronos.org/collada/"
  },
  "@type": "3DModel",
  "name": "Architectural Model",
  "collada:version": "1.5.0",
  "collada:units": {
    "meter": 1.0,
    "name": "meter"
  },
  "collada:upAxis": "Y_UP"
}
```

### Implementation Examples

Building model with lighting setup:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "collada": "https://www.khronos.org/collada/"
  },
  "@type": "3DModel",
  "name": "Office Building",
  "contentUrl": "https://example.com/office.dae",
  "encodingFormat": "model/vnd.collada+xml",
  "collada:version": "1.5.0",
  "collada:author": "Architecture Studio",
  "collada:units": {
    "meter": 1.0,
    "name": "meter"
  },
  "collada:upAxis": "Y_UP",
  "collada:scene": "MainScene",
  "collada:assets": {
    "geometries": 128,
    "materials": 45,
    "lights": 18,
    "cameras": 4
  },
  "collada:libraries": [
    "materials.lib.dae",
    "furniture.lib.dae"
  ]
}
```

### Best Practices

- Consider converting to more modern formats for web distribution
- Maintain COLLADA's XML validity
- Document external references
- Keep file sizes manageable
- Include proper unit definitions for scale consistency

## X3D

### Overview and Use Cases

[X3D](https://www.web3d.org/x3d/what-x3d) (Extensible 3D) is an open ISO standard for representing 3D computer graphics. It's the successor to VRML and is designed for the web.

Common use cases include:
- Web-based 3D visualization
- Educational and scientific visualization
- CAD/CAM data representation
- Medical and geospatial visualization
- Long-term 3D data archiving

### Core Properties and Extensions

X3D's features include:

- **Geometry**: Primitives, meshes, NURBS
- **Appearance**: Materials, textures, rendering
- **Animation**: Interpolators, timers
- **Interactivity**: Sensors, scripts
- **Components**: Modular functionality groups

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "x3d": "https://www.web3d.org/x3d/"
  }
}
```

### External Reference Patterns

When linking to X3D assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Scientific Visualization",
  "contentUrl": "https://example.com/visualization.x3d",
  "encodingFormat": "model/x3d+xml"
}
```

### Embedding Patterns

When embedding X3D metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/x3d/"
  },
  "@type": "3DModel",
  "name": "Scientific Visualization",
  "x3d:version": "4.0",
  "x3d:profile": "Immersive",
  "x3d:components": [
    {"name": "Geometry3D", "level": 2},
    {"name": "Rendering", "level": 3},
    {"name": "Scripting", "level": 1}
  ]
}
```

### Implementation Examples

Complete X3D visualization with interactive elements:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/x3d/"
  },
  "@type": "3DModel",
  "name": "Data Visualization",
  "contentUrl": "https://example.com/data_viz.x3d",
  "encodingFormat": "model/x3d+xml",
  "x3d:version": "4.0",
  "x3d:profile": "Interactive",
  "x3d:components": [
    {"name": "Geometry3D", "level": 3},
    {"name": "Rendering", "level": 4},
    {"name": "Scripting", "level": 2},
    {"name": "Navigation", "level": 2},
    {"name": "EnvironmentalSensor", "level": 1}
  ],
  "x3d:scene": {
    "title": "Scientific Data Visualization",
    "viewpoints": [
      {"name": "Overview", "position": [0, 5, 10]},
      {"name": "Detail", "position": [0, 2, 3]}
    ],
    "interactions": [
      {"name": "DataSelect", "type": "TouchSensor"},
      {"name": "ViewControl", "type": "NavigationInfo"}
    ]
  },
  "x3d:encoding": {
    "primary": "XML",
    "alternatives": ["ClassicVRML", "JSON"]
  }
}
```

### Best Practices

- Use appropriate X3D profiles for your use case
- Consider browser compatibility with X3D viewers
- Include fallback content for non-supporting browsers
- Document required components
- Use standard encoding formats

## Implementation Considerations

- **Standard Selection**: Choose the appropriate 3D standard for your use case
- **Embedding Scope**: Only embed essential metadata, not the entire 3D structure
- **Mixed Approach**: Use linking for large assets and embedding for critical configuration
- **Path Management**: Keep file paths consistent and valid across platforms
- **Cross-Standard Compatibility**: Consider how different 3D standards might interact
- **Performance Implications**: Balance between rich metadata and loading efficiency

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 