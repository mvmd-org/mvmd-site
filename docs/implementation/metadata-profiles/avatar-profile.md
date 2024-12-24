<!-- Path: /docs/implementation/metadata-profiles/avatar-profile.md -->
---
sidebar_position: 3
---

# Avatar Profile

The Avatar Profile extends the Basic Profile with properties specific to virtual characters and avatars. This profile combines properties from multiple standards to describe customizable, interactive characters.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "VirtualCharacter",
  
  "name": "Default Avatar",
  "description": "Customizable humanoid character with standard animations",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "avatar-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Characters Inc."
  }
}
```

## Required Properties

### Basic Information (from Basic Profile)
- `@context`
- `@type`: Must be "VirtualCharacter"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Avatar Properties
- Character type
- Base measurements
- Animation support
- Customization options
- Interaction capabilities

## Avatar Specifications

### Character Properties
```json
{
  "avatarProperties": {
    "type": "humanoid",
    "gender": "neutral",
    "age": "adult",
    "style": "realistic",
    "measurements": {
      "height": 1.75,
      "proportions": "standard",
      "unit": "meters"
    }
  }
}
```

### Animation Support
```json
{
  "gltf:animations": [
    {
      "name": "idle",
      "type": "loop",
      "duration": 3.0
    },
    {
      "name": "walk",
      "type": "loop",
      "duration": 1.2
    },
    {
      "name": "run",
      "type": "loop",
      "duration": 0.8
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
  "@type": "VirtualCharacter",
  
  "name": "Customizable Avatar",
  "description": "Highly customizable humanoid character with extensive animation support",
  
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
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/avatars/customizable.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnailUrl": "https://example.com/thumbnails/avatar.jpg",
  
  "avatarProperties": {
    "type": "humanoid",
    "gender": "neutral",
    "age": "adult",
    "style": "realistic",
    "measurements": {
      "height": 1.75,
      "proportions": "standard",
      "unit": "meters"
    }
  },
  
  "customization": {
    "features": [
      {
        "category": "face",
        "options": [
          "eyes",
          "nose",
          "mouth",
          "ears",
          "jawline"
        ],
        "blendshapes": true
      },
      {
        "category": "hair",
        "options": [
          "style",
          "color",
          "length"
        ]
      },
      {
        "category": "body",
        "options": [
          "build",
          "height",
          "proportions"
        ]
      }
    ],
    "textures": [
      {
        "category": "skin",
        "resolution": "2048x2048",
        "customizable": true
      },
      {
        "category": "clothing",
        "resolution": "2048x2048",
        "customizable": true
      }
    ]
  },
  
  "gltf:animations": [
    {
      "name": "idle",
      "type": "loop",
      "duration": 3.0
    },
    {
      "name": "walk",
      "type": "loop",
      "duration": 1.2
    },
    {
      "name": "run",
      "type": "loop",
      "duration": 0.8
    },
    {
      "name": "jump",
      "type": "oneshot",
      "duration": 1.0
    },
    {
      "name": "emote_wave",
      "type": "oneshot",
      "duration": 2.0
    }
  ],
  
  "gltf:rig": {
    "type": "humanoid",
    "joints": 65,
    "skeleton": "mixamo-compatible"
  },
  
  "interaction": {
    "expressions": [
      {
        "name": "smile",
        "blendshapes": ["smile_left", "smile_right"],
        "intensity": "variable"
      },
      {
        "name": "frown",
        "blendshapes": ["frown_left", "frown_right"],
        "intensity": "variable"
      }
    ],
    "gestures": [
      {
        "name": "wave",
        "animation": "emote_wave",
        "duration": 2.0
      }
    ],
    "physics": {
      "collider": "capsule",
      "mass": 70,
      "height": 1.75
    }
  },
  
  "performance": {
    "polycount": {
      "high": 50000,
      "medium": 25000,
      "low": 10000
    },
    "textureResolution": {
      "high": "2048x2048",
      "medium": "1024x1024",
      "low": "512x512"
    },
    "boneCount": 65,
    "blendshapeCount": 52
  }
}
```

## Validation Rules

### Character Properties
- Valid character type
- Proper measurements
- Standard proportions
- Supported styles
- Age categories

### Animation Properties
- Required animations
- Proper durations
- Valid types
- Clear names
- Proper format

### Customization Properties
- Valid feature sets
- Proper textures
- Clear categories
- Supported options
- Format specifications

## Best Practices

1. **Character Design**
    - Universal proportions
    - Standard measurements
    - Clear customization
    - Consistent style
    - Proper scaling

2. **Animation Management**
    - Essential movements
    - Smooth transitions
    - Proper timing
    - Clear naming
    - Efficient organization

3. **Customization System**
    - Logical categories
    - Clear options
    - Efficient textures
    - Proper blendshapes
    - Resource management

4. **Performance Optimization**
    - LOD support
    - Efficient textures
    - Optimized meshes
    - Proper compression
    - Resource loading

## Integration Examples

### With Virtual Environments
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "VirtualCharacter",
  "name": "Environment Avatar",
  
  "avatarProperties": {
    "type": "humanoid",
    "style": "realistic"
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  }
}
```

### With Interactive Systems
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/"
  },
  "@type": "VirtualCharacter",
  "name": "Interactive Avatar",
  
  "gltf:animations": [
    {
      "name": "wave",
      "type": "oneshot"
    }
  ],
  
  "x3d:interaction": {
    "sensors": [
      {
        "type": "TouchSensor",
        "name": "avatar_interact"
      }
    ]
  }
}
```

## Common Issues

1. **Animation Compatibility**
    - Format compatibility
    - Transition handling
    - Timing issues
    - Blend conflicts
    - Performance impact

2. **Customization Limits**
    - Resource constraints
    - Texture memory
    - Blend shape limits
    - Option combinations
    - Update handling

## Next Steps

- Review [Environment Profile](./environment-profile.md) for spatial integration
- See [glTF Standard](../standards/gltf.md) for technical details
- Check [Validation Tools](../tools/validation.md) for testing
