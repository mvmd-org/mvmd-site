---
sidebar_position: 5
---

# VRM Namespace

This page covers how to integrate VRM into your metadata through namespaces.

## About VRM

[VRM](https://vrm.dev/en/) is an open file format for standardized 3D humanoid avatars, primarily designed for VR/AR applications and the metaverse. It builds upon the glTF format, adding specific extensions to support humanoid avatars with facial expressions, look-at controls, and standardized rigging.

VRM enables consistent avatar representation across different platforms and applications, making it ideal for cross-platform metaverse experiences where user identity and appearance need to remain consistent.

## Core VRM Concepts

Key concepts in VRM that are relevant to metadata integration:

- **Humanoid Bones**: Standardized skeleton structure for consistent animation
- **Blend Shapes**: Facial expressions and mouth shapes for speech and emotions
- **Look At**: Eye movement controls
- **Spring Bones**: Physics simulation for hair, clothing, and accessories
- **Materials**: Specialized materials for avatar rendering
- **First-Person Settings**: Configuration for first-person view (avoiding head rendering)
- **Meta Information**: Creator, license, and usage permissions

## Implementing the VRM Namespace

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "vrm": "https://vrm.dev/schemas/"
  }
}
```

### Linking Example

When referencing external VRM assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Custom Avatar",
  "contentUrl": "https://example.com/avatars/custom-avatar.vrm",
  "encodingFormat": "model/vrm"
}
```

For avatars with version information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Custom Avatar",
  "contentUrl": "https://example.com/avatars/custom-avatar.vrm",
  "encodingFormat": "model/vrm",
  "version": "0.91",
  "contentSize": "3.7 MB"
}
```

### Embedding Example

When embedding VRM metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/schemas/"
  },
  "@type": "3DModel",
  "name": "Custom Avatar",
  "vrm:version": "0.91",
  "vrm:meta": {
    "title": "Custom Avatar",
    "author": "Avatar Creator",
    "contactInformation": "creator@example.com",
    "reference": "https://example.com/avatar-reference",
    "allowedUserName": "OnlyAuthor",
    "violentUssage": "Disallow",
    "sexualUssage": "Disallow",
    "commercialUssage": "Disallow",
    "license": "CC_BY_NC_ND"
  },
  "vrm:humanoid": {
    "humanBones": [
      {"bone": "hips", "node": 1},
      {"bone": "spine", "node": 2},
      {"bone": "chest", "node": 3},
      {"bone": "neck", "node": 4},
      {"bone": "head", "node": 5}
    ]
  }
}
```

## Common Use Cases

VRM is used in a variety of metaverse and avatar applications:

- Cross-platform virtual avatars
- VR/AR social applications
- Virtual influencers and digital humans
- Virtual meetings and collaboration spaces
- Gaming and interactive entertainment
- Virtual performance and motion capture

## Implementation Examples

### Basic Example

A simple VRM avatar reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Basic Avatar",
  "description": "A simple humanoid avatar for virtual interactions",
  "contentUrl": "https://example.com/avatars/basic-avatar.vrm",
  "encodingFormat": "model/vrm",
  "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
}
```

### Complete Example

For a complete avatar with detailed metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "vrm": "https://vrm.dev/schemas/"
  },
  "@type": "3DModel",
  "name": "Advanced Avatar",
  "description": "Detailed avatar with expressions and physics",
  "contentUrl": "https://example.com/avatars/advanced-avatar.vrm",
  "encodingFormat": "model/vrm",
  "creator": {
    "@type": "Person",
    "name": "Avatar Designer",
    "url": "https://avatardesigner.example.com"
  },
  "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  "vrm:version": "0.91",
  "vrm:meta": {
    "title": "Advanced Avatar",
    "author": "Avatar Designer",
    "contactInformation": "designer@example.com",
    "reference": "https://avatardesigner.example.com/portfolio",
    "allowedUserName": "Everyone",
    "violentUssage": "Disallow",
    "sexualUssage": "Disallow",
    "commercialUssage": "Allow",
    "license": "CC_BY_NC_ND"
  },
  "vrm:humanoid": {
    "armStretch": 0.85,
    "legStretch": 0.85,
    "upperArmTwist": 0.5,
    "lowerArmTwist": 0.5,
    "upperLegTwist": 0.5,
    "lowerLegTwist": 0.5,
    "feetSpacing": 0.2,
    "hasTranslationDoF": false
  },
  "vrm:blendShapes": [
    {"name": "blink", "presetName": "blink", "binds": [{"index": 6, "weight": 1.0}]},
    {"name": "smile", "presetName": "joy", "binds": [{"index": 7, "weight": 1.0}]},
    {"name": "angry", "presetName": "angry", "binds": [{"index": 8, "weight": 1.0}]}
  ],
  "vrm:lookAt": {
    "offsetFromHeadBone": [0, 0.06, 0],
    "lookAtHorizontalInner": {"curve": [0, 0, 0, 1, 1, 1], "xRange": 90, "yRange": 10},
    "lookAtHorizontalOuter": {"curve": [0, 0, 0, 1, 1, 1], "xRange": 90, "yRange": 10},
    "lookAtVerticalDown": {"curve": [0, 0, 0, 1, 1, 1], "xRange": 90, "yRange": 10},
    "lookAtVerticalUp": {"curve": [0, 0, 0, 1, 1, 1], "xRange": 90, "yRange": 10}
  }
}
```

### Integration with Avatar Profile

Combining VRM with the MVMD Avatar Integration Profile:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "vrm": "https://vrm.dev/schemas/"
  },
  "@type": "3DModel",
  "name": "Custom Avatar",
  "description": "Personalized avatar for metaverse interactions",
  "contentUrl": "https://example.com/avatars/custom-avatar.vrm",
  "encodingFormat": "model/vrm",
  "creator": {
    "@type": "Person",
    "name": "User123",
    "url": "https://social.example.com/User123"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "avatarProperties",
      "name": "Avatar Properties",
      "value": {
        "type": "humanoid",
        "style": "stylized",
        "skeleton": "vrm-standard",
        "measurements": {
          "height": 1.75,
          "proportions": "neutral"
        },
        "compatibility": ["platform-a", "platform-b", "platform-c"],
        "expressiveness": "full"
      }
    }
  ],
  "vrm:version": "0.91",
  "vrm:meta": {
    "title": "User123 Avatar",
    "author": "User123",
    "allowedUserName": "OnlyAuthor",
    "violentUssage": "Disallow",
    "sexualUssage": "Disallow",
    "commercialUssage": "Disallow"
  }
}
```

## JSON Schema Validation

For validating VRM namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "VRM Namespace Schema",
  "type": "object",
  "properties": {
    "vrm:version": {
      "type": "string",
      "description": "VRM specification version"
    },
    "vrm:meta": {
      "type": "object",
      "description": "VRM meta information",
      "properties": {
        "title": { "type": "string" },
        "author": { "type": "string" },
        "contactInformation": { "type": "string" },
        "reference": { "type": "string" },
        "allowedUserName": { 
          "type": "string", 
          "enum": ["OnlyAuthor", "ExplicitlyLicensedPerson", "Everyone"] 
        },
        "violentUssage": { 
          "type": "string", 
          "enum": ["Allow", "Disallow"] 
        },
        "sexualUssage": { 
          "type": "string", 
          "enum": ["Allow", "Disallow"] 
        },
        "commercialUssage": { 
          "type": "string", 
          "enum": ["Allow", "Disallow"] 
        },
        "license": { "type": "string" }
      }
    },
    "vrm:humanoid": {
      "type": "object",
      "description": "VRM humanoid configuration"
    },
    "vrm:blendShapes": {
      "type": "array",
      "description": "VRM blend shape (facial expression) configurations"
    },
    "vrm:lookAt": {
      "type": "object",
      "description": "VRM eye movement configuration"
    }
  }
}
```

## JSON-LD Context

The VRM namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "vrm": "https://vrm.dev/schemas/",
    "vrm:version": { "@id": "vrm:version" },
    "vrm:meta": { "@id": "vrm:meta" },
    "vrm:humanoid": { "@id": "vrm:humanoid" },
    "vrm:blendShapes": { "@id": "vrm:blendShapes" },
    "vrm:lookAt": { "@id": "vrm:lookAt" }
  }
}
```

## Implementation Considerations

When implementing the VRM namespace, keep these considerations in mind:

- **Version Compatibility**: Specify the VRM version (0.x vs 1.x) as they have different structures
- **License Requirements**: Always include the vrm:meta section with license information
- **Platform Support**: Verify target platform support for specific VRM features
- **Performance**: Consider polygon count and texture sizes for cross-platform compatibility
- **Privacy**: Be mindful of personal avatar data and usage restrictions

## Related Documentation

- [Avatar Integration Profile](../integration-profiles/avatar.md)
- [Identity Integration Profile](../integration-profiles/identity.md)
- [glTF Namespace](./gltf.md)
- [Cross-Platform Asset Implementation](../implementation/cross-platform-assets.md) 