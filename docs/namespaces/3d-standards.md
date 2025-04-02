---
sidebar_position: 3
---

# 3D Standards Namespaces

This page covers how to integrate 3D standards into your metadata through namespaces.

## Supported 3D Standards

### glTF

[glTF](https://www.khronos.org/gltf/) (GL Transmission Format) is a royalty-free specification for efficient transmission and loading of 3D scenes and models. It's widely adopted as the standard format for 3D assets on the web.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  }
}
```

#### Linking Example

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

#### Embedding Example

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

### USD

[USD](https://openusd.org/) (Universal Scene Description) is an extensible framework for describing, composing, and collaborating within 3D worlds. Developed by Pixar and now open source, USD is gaining adoption for complex scenes and environments.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usd": "https://openusd.org/ns/"
  }
}
```

#### Linking Example

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

#### Embedding Example

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

### VRM

[VRM](https://vrm.dev/en/) is a file format for handling humanoid 3D avatar data. It extends glTF to add specialized components for avatars, including facial expressions, look-at controls, and humanoid rig definitions.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "vrm": "https://vrm.dev/ns/"
  }
}
```

#### Linking Example

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

#### Embedding Example

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

## Implementation Considerations

- **Standard Selection**: Choose the appropriate 3D standard for your use case
- **Embedding Scope**: Only embed essential metadata, not the entire 3D structure
- **Mixed Approach**: Use linking for large assets and embedding for critical configuration
- **Path Management**: Keep file paths consistent and valid across platforms

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 