---
sidebar_position: 2
---

# Wearables Profile

The Wearables Profile extends the Basic Profile with properties specific to wearable virtual items. This profile defines metadata for items that can be worn by avatars, including clothing, accessories, and equipment.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Virtual Jacket",
  "description": "Customizable jacket with physical cloth simulation",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "wearable-2024-001"
  },
  
  "category": "clothing",
  "wearableType": "jacket"
}
```

## Required Properties

### Basic Information (from Basic Profile)
- `@context`
- `@type`: Must be "3DModel"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Wearable Properties
- `category`: Type of wearable (clothing, accessory, equipment)
- `wearableType`: Specific type within category
- `attachmentPoints`: Where/how item attaches to avatar
- `size`: Size information
- `customization`: Available customization options

## Technical Properties

### Attachment Configuration
```json
{
  "attachmentPoints": [
    {
      "name": "torso",
      "type": "primary",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1]
    },
    {
      "name": "arms",
      "type": "secondary",
      "bones": ["left_arm", "right_arm"]
    }
  ],
  
  "physicalProperties": {
    "simulation": "cloth",
    "collisionMesh": "jacket_collision",
    "weight": 1.5
  }
}
```

### Customization Options
```json
{
  "customization": {
    "materials": [
      {
        "name": "fabric",
        "type": "texture",
        "options": [
          {
            "name": "denim",
            "diffuse": "textures/denim.jpg",
            "normal": "textures/denim_normal.jpg"
          },
          {
            "name": "leather",
            "diffuse": "textures/leather.jpg",
            "normal": "textures/leather_normal.jpg"
          }
        ]
      }
    ],
    "colors": [
      {
        "name": "primary",
        "type": "color",
        "default": "#000000",
        "options": ["#000000", "#0000FF", "#FF0000"]
      }
    ],
    "toggles": [
      {
        "name": "hood",
        "type": "visibility",
        "default": true
      }
    ]
  }
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
  
  "name": "Cyberpunk Jacket",
  "description": "Interactive cyberpunk-style jacket with LED effects and cloth physics",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "wearable-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Fashion Inc.",
    "url": "https://example.com/virtual-fashion"
  },
  
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/wearables/cyberpunk-jacket.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnailUrl": "https://example.com/thumbnails/cyberpunk-jacket.jpg",
  
  "category": "clothing",
  "wearableType": "jacket",
  
  "attachmentPoints": [
    {
      "name": "torso",
      "type": "primary",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1]
    },
    {
      "name": "arms",
      "type": "secondary",
      "bones": ["left_arm", "right_arm"],
      "weightMaps": ["left_arm_weights", "right_arm_weights"]
    }
  ],
  
  "physicalProperties": {
    "simulation": "cloth",
    "collisionMesh": "jacket_collision",
    "weight": 1.5,
    "physics": {
      "stiffness": 0.8,
      "damping": 0.2,
      "friction": 0.3
    }
  },
  
  "customization": {
    "materials": [
      {
        "name": "fabric",
        "type": "texture",
        "options": [
          {
            "name": "neon_fabric",
            "diffuse": "textures/neon_fabric.jpg",
            "normal": "textures/neon_fabric_normal.jpg",
            "emissive": "textures/neon_fabric_emissive.jpg"
          },
          {
            "name": "holographic",
            "diffuse": "textures/holographic.jpg",
            "normal": "textures/holographic_normal.jpg",
            "emissive": "textures/holographic_emissive.jpg"
          }
        ]
      }
    ],
    
    "colors": [
      {
        "name": "primary",
        "type": "color",
        "default": "#00FF00",
        "options": ["#00FF00", "#FF00FF", "#00FFFF"]
      },
      {
        "name": "accent",
        "type": "color",
        "default": "#FF00FF",
        "options": ["#FF00FF", "#00FFFF", "#FFFF00"]
      }
    ],
    
    "toggles": [
      {
        "name": "hood",
        "type": "visibility",
        "default": true
      },
      {
        "name": "led_effects",
        "type": "animation",
        "default": true,
        "options": ["pulse", "wave", "static"]
      }
    ]
  },
  
  "compatibility": {
    "avatarTypes": ["humanoid"],
    "platforms": ["platform-a", "platform-b"],
    "minimumVersion": "2.0"
  },
  
  "gltf:animations": [
    {
      "name": "led_pulse",
      "type": "emissive",
      "duration": 2.0
    },
    {
      "name": "led_wave",
      "type": "emissive",
      "duration": 3.0
    }
  ]
}
```

## Validation Rules

### Wearable Properties
- Valid category values
- Proper attachment points
- Complete size information
- Valid customization options
- Supported physics properties

### Technical Properties
- Valid attachment configurations
- Proper bone references
- Compatible physics settings
- Supported animation types
- Valid material options

### Customization Properties
- Valid color formats
- Proper texture references
- Supported toggle options
- Valid animation references
- Complete option sets

## Best Practices

1. **Attachment Design**
    - Use standard attachment points
    - Include weight painting
    - Define clear hierarchies
    - Support animation systems
    - Handle scaling properly

2. **Customization Implementation**
    - Group related options
    - Provide defaults
    - Support common variations
    - Consider performance
    - Document limitations

3. **Physics Configuration**
    - Use appropriate simulation types
    - Define collision properly
    - Balance performance
    - Test interactions
    - Consider platforms

4. **Platform Compatibility**
    - Document requirements
    - Test across platforms
    - Provide fallbacks
    - Consider limitations
    - Maintain updates

## Next Steps

- Review [Avatar Profile](./avatar-profile.md) for character integration
- See [Basic Profile](./basic-profile.md) for core properties
- Check [Validation Tools](/tools/validation.md) for testing
