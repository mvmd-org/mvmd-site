---
sidebar_position: 13
---

> **PROPOSED STATE**: This integration profile is currently in a proposed state and is under community review. The specification may change based on feedback and implementation experience.

# Wearable Integration Profile

Digital wearable items that can be attached to avatars across different metaverse platforms with consistent behavior and appearance.

## Purpose and Use Cases

Wearable metadata ensures consistent representation and behavior of digital fashion and accessory items across platforms.

- Avatar customization with digital fashion items
- Cross-platform inventory compatibility
- Virtual fashion marketplaces and e-commerce
- Digital identity expression through fashion
- Brand extension into the digital realm

## Profile Overview

The wearable profile defines metadata for digital items that can be worn by avatars. It covers attachment points, compatibility specifications, technical requirements, and visual representation. This profile follows Schema.org patterns while adding metaverse-specific properties.

## Required Properties

The following properties are **required** for all assets using this profile:

| Property | Type | Description |
|----------|------|-------------|
| `@type` | String | Must be "ImageObject" to represent the wearable's preview |
| `name` | String | Name of the wearable item |
| `contentUrl` | URL | URL to the preview image of the wearable |
| `encodingFormat` | String | MIME type of the preview image |
| `additionalProperty` | Array | Must include at least one property with propertyID "attachmentPoint" |
| `associatedMedia` | Array | Must include at least one 3DModel object with the actual 3D asset |

## Optional Properties

The following properties are **optional** but recommended for this profile:

| Property | Type | Description |
|----------|------|-------------|
| `identifier` | PropertyValue | Unique ID for the wearable |
| `description` | String | Detailed description of the wearable |
| `creator` | Person/Organization | Creator information |
| `license` | URL | License information for usage rights |
| `thumbnail` | ImageObject | Smaller preview image |
| `additionalProperty` with "category" | PropertyValue | Type of wearable (headwear, footwear, etc.) |
| `additionalProperty` with "compatibility" | PropertyValue | Avatar type compatibility |
| `additionalProperty` with "technicalRequirements" | PropertyValue | Technical specifications |

## Standards Integration

This profile combines the following standards:

- **Schema.org**: Core vocabulary and structure following ImageObject type
- **glTF**: 3D model format for the wearable asset
- **JSON-LD**: Linked data format for semantic metadata
- **Avatar Standards**: References to attachment points and compatibility

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
      "value": ["humanoid", "stylized"]
    },
    {
      "@type": "PropertyValue",
      "propertyID": "technicalRequirements",
      "name": "Technical Requirements",
      "value": {
        "polyCount": 22500,
        "textureSize": 2048,
        "materials": 3,
        "animations": 2
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "effects",
      "name": "Special Effects",
      "value": ["glow", "particles", "sound"]
    },
    {
      "@type": "PropertyValue",
      "propertyID": "rarity",
      "name": "Rarity",
      "value": "legendary"
    }
  ],

  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Crown 3D Model - High Quality",
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
          "propertyID": "lod",
          "name": "Level of Detail",
          "value": 0
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Crown 3D Model - Medium Quality",
      "contentUrl": "https://example.com/models/crown_medium.glb",
      "encodingFormat": "model/gltf-binary",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "quality",
          "name": "Quality Level",
          "value": "medium"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "lod",
          "name": "Level of Detail",
          "value": 1
        }
      ]
    },
    {
      "@type": "ImageObject",
      "name": "Normal Map",
      "contentUrl": "https://example.com/textures/crown_normal.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "ImageObject",
      "name": "Environment Map",
      "contentUrl": "https://example.com/textures/crown_env.hdr",
      "encodingFormat": "image/vnd.radiance"
    },
    {
      "@type": "AudioObject",
      "name": "Crown Effect Sound",
      "contentUrl": "https://example.com/audio/crown_magic.mp3",
      "encodingFormat": "audio/mpeg"
    }
  ]
}
```

## Implementation Considerations

- Use ImageObject as the root type to represent the wearable's preview/thumbnail
- Include proper Schema.org context and type declarations
- Specify attachment points clearly to ensure proper positioning
- Use additionalProperty for metaverse-specific attributes
- Provide multiple quality levels for different platform requirements
- Include technical specifications about polygon count, textures, etc.
- Consider animation requirements for interactive wearables

## Validation Requirements

To validate this profile, ensure:

- The root @type is "ImageObject"
- At least one attachmentPoint is specified in additionalProperty
- At least one 3DModel is included in associatedMedia
- All required properties are present
- All JSON is valid and follows Schema.org patterns
- The 3D model is accessible at the specified contentUrl
- Technical requirements are appropriate for target platforms

## Related Profiles

- [Avatar Profile](./avatar.md): For creating compatible avatars
- [Equipable Profile](./equipable.md): For items that provide functional benefits
- [Composable 3D NFT Profile](./composable-3d-nft.md): For tokenized wearables

## Related Standards

- [glTF Standard](../standards/gltf.md): 3D format standard
- [3D Standards Overview](../standards/overview.md): Additional 3D standards
