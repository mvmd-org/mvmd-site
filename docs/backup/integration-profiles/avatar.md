---
sidebar_position: 3
---

# Avatar Profile

## Purpose and Use Cases

The Avatar Profile extends the Basic Profile with properties specific to virtual characters and avatars. It defines metadata structures for customizable, interactive characters that can represent users or NPCs in virtual environments.

**Key Use Cases:**
- User representation in virtual worlds and social platforms
- Non-player characters (NPCs) in games and interactive experiences
- Digital identity visualization
- Cross-platform avatar portability
- Virtual influencers and digital humans

## Required Properties

The Avatar Profile inherits all required properties from the [Basic Profile](./basic.md) and adds the following avatar-specific properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "VirtualCharacter",
  
  // Basic Profile required properties...
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "avatarProperties",
      "name": "Avatar Properties",
      "value": {
        "type": "humanoid",
        "style": "stylized",
        "skeleton": "standard-humanoid",
        "measurements": {
          "height": 1.75,
          "unit": "meters"
        }
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animationSupport",
      "name": "Animation Support",
      "value": {
        "supported": ["idle", "walk", "run"]
      }
    }
  ]
}
```

| Property | Description | Type | Notes |
|----------|-------------|------|-------|
| `@type` | Asset type | String | Must be "VirtualCharacter" |
| `avatarProperties.type` | Character topology | String | E.g., "humanoid", "creature", "robot" |
| `avatarProperties.style` | Visual style | String | E.g., "realistic", "stylized", "cartoon" |
| `avatarProperties.skeleton` | Rigging system | String | Standard rig identifier |
| `avatarProperties.measurements` | Basic dimensions | Object | At minimum, include height |
| `animationSupport.supported` | Supported animations | Array | List of basic animation names |

## Optional Properties

The Avatar Profile includes the following optional properties to enhance functionality:

```json
{
  // Required properties as above...
  
  "additionalProperty": [
    // Required additional properties...
    
    {
      "@type": "PropertyValue",
      "propertyID": "customization",
      "name": "Customization Options",
      "value": {
        "features": [
          {
            "category": "face",
            "options": ["eyes", "nose", "mouth", "ears"],
            "blendshapes": true
          },
          {
            "category": "hair",
            "options": ["style", "color"]
          },
          {
            "category": "body",
            "options": ["build", "height"]
          }
        ],
        "textures": [
          {
            "category": "skin",
            "resolution": "2048x2048",
            "customizable": true
          }
        ]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "expressiveness",
      "name": "Expressiveness",
      "value": {
        "facialExpressions": true,
        "voiceSupport": false,
        "lipSync": false,
        "emotionTriggers": ["happy", "sad", "angry", "surprised"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "equipmentSupport",
      "name": "Equipment Support",
      "value": {
        "slots": ["head", "body", "hands", "feet"],
        "attachmentPoints": ["rightHand", "leftHand", "back"]
      }
    }
  ]
}
```

| Property | Description | Type | Notes |
|----------|-------------|------|-------|
| `customization.features` | Customizable features | Array | User-modifiable aspects |
| `customization.textures` | Texture customization | Array | Modifiable texture maps |
| `expressiveness` | Emotional capabilities | Object | Expression capabilities |
| `equipmentSupport` | Equipment compatibility | Object | Attachment points for items |

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "VirtualCharacter",
  
  "name": "Universal Avatar",
  "description": "Highly customizable humanoid avatar with extensive animation support and cross-platform compatibility",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "avatar-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Characters Inc.",
    "url": "https://example.com/virtual-characters"
  },
  
  "dateCreated": "2024-03-15",
  "dateModified": "2024-03-20T14:30:00Z",
  "version": "1.2.0",
  
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/avatars/universal.glb",
  "encodingFormat": "model/gltf-binary",
  "fileSize": 3145728,
  
  "thumbnail": "https://example.com/thumbnails/avatar.jpg",
  
  "keywords": ["avatar", "humanoid", "customizable", "cross-platform"],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "avatarProperties",
      "name": "Avatar Properties",
      "value": {
        "type": "humanoid",
        "style": "stylized",
        "skeleton": "standard-humanoid-v2",
        "measurements": {
          "height": 1.75,
          "proportions": "standard",
          "unit": "meters"
        }
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "animationSupport",
      "name": "Animation Support",
      "value": {
        "supported": ["idle", "walk", "run", "jump", "sit", "wave", "dance"],
        "format": "glTF animations",
        "retargetable": true
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "customization",
      "name": "Customization Options",
      "value": {
        "features": [
          {
            "category": "face",
            "options": ["eyes", "nose", "mouth", "ears", "jaw", "cheeks"],
            "blendshapes": true,
            "parameters": 24
          },
          {
            "category": "hair",
            "options": ["style", "color", "length", "texture"],
            "presets": 12
          },
          {
            "category": "body",
            "options": ["build", "height", "weight", "musculature"],
            "parameters": 18
          }
        ],
        "textures": [
          {
            "category": "skin",
            "resolution": "2048x2048",
            "maps": ["diffuse", "normal", "roughness"],
            "customizable": true
          },
          {
            "category": "clothing",
            "resolution": "2048x2048",
            "maps": ["diffuse", "normal", "roughness"],
            "customizable": true
          }
        ]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "expressiveness",
      "name": "Expressiveness",
      "value": {
        "facialExpressions": true,
        "blendshapeCount": 52,
        "voiceSupport": true,
        "lipSync": true,
        "emotionTriggers": ["happy", "sad", "angry", "surprised", "disgusted", "fearful", "neutral"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "equipmentSupport",
      "name": "Equipment Support",
      "value": {
        "slots": ["head", "upper_body", "lower_body", "hands", "feet", "accessories"],
        "attachmentPoints": ["rightHand", "leftHand", "back", "hip", "shoulder"],
        "supportedWearableFormats": ["glTF", "VRM"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "platformSupport",
      "name": "Platform Support",
      "value": {
        "vrmSupport": true,
        "readyPlayerMeCompatible": true,
        "vrChatCompatible": true,
        "testedPlatforms": ["unity", "unreal", "mozilla-hubs", "meta-horizon"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "performanceOptions",
      "name": "Performance Options",
      "value": {
        "lod": [
          {
            "level": 0,
            "triangles": 50000,
            "textureSize": 2048
          },
          {
            "level": 1,
            "triangles": 25000,
            "textureSize": 1024
          },
          {
            "level": 2,
            "triangles": 10000,
            "textureSize": 512
          }
        ]
      }
    }
  ]
}
```

## Validation Rules

### Required Fields Validation
- All required fields from Basic Profile must be present
- `@type` must be "VirtualCharacter"
- `avatarProperties` must include at minimum:
  - `type`: String value describing topology
  - `measurements.height`: Numeric value with unit
- `animationSupport.supported` must contain at least one animation name

### Optional Fields Validation
- `customization.features` must be an array if present
- `customization.textures` must be an array if present
- `expressiveness` should include appropriate boolean values
- `equipmentSupport.slots` and `equipmentSupport.attachmentPoints` should be arrays if present

## Implementation Considerations

### Cross-Platform Compatibility
- Use standard bone/joint naming conventions following major platform guidelines
- Provide VRM metadata when possible for wider compatibility
- Test across multiple platforms to ensure consistent appearance and animations
- Include LOD variants for different performance requirements

### Animation Implementation
- Ensure animations are properly retargetable
- Provide base locomotion animations at minimum (idle, walk, run)
- Test facial animations across platforms if implemented
- Document platform-specific animation limitations

### Customization Support
- Follow platform-specific guidelines for customization parameters
- Document the range and limits of each customizable feature
- Consider providing default presets for quick setup
- Test customization across different rendering engines

## Related Resources

- [Basic Profile](./basic.md): Foundation for all assets including avatars
- [Wearable Profile](./wearable.md): For items that can be equipped by avatars
- [Identity Profile](./identity.md): For connecting avatars to user identity
- [3D Standards Namespace](../standards/overview.md): Details on VRM and other avatar formats
