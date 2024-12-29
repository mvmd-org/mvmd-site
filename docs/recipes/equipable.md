---
sidebar_position: 6
---

# Equipable Profile

The Equipable Profile extends the Basic Profile with properties specific to items that can be equipped and used by avatars, such as tools, weapons, and interactive objects.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  
  "name": "Magic Staff",
  "description": "Interactive staff with particle effects and animations",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "equipable-2024-001"
  },
  
  "category": "tool",
  "equipableType": "staff",
  "handedness": "both"
}
```

## Required Properties

### Basic Information
- `@context`
- `@type`: Must be "3DModel"
- `name`
- `description`
- `identifier`
- `creator`
- `contentUrl`
- `encodingFormat`

### Equipable Properties
- `category`: Type of equipable item
- `equipableType`: Specific type within category
- `handedness`: How item is held/used
- `attachmentPoints`: Where item attaches
- `interactions`: Available interactions

## Technical Specifications

### Attachment Configuration
```json
{
  "attachmentPoints": {
    "primary": {
      "name": "right_hand",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1]
    },
    "secondary": {
      "name": "left_hand",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1]
    }
  },
  
  "physics": {
    "weight": 2.0,
    "centerOfMass": [0, 0.3, 0],
    "collisionMesh": "staff_collision"
  }
}
```

### Interaction System
```json
{
  "interactions": {
    "primary": {
      "name": "cast",
      "type": "trigger",
      "animation": "cast_spell",
      "effects": ["magic_particles", "glow"],
      "cooldown": 2.0
    },
    "secondary": {
      "name": "block",
      "type": "hold",
      "animation": "staff_block",
      "effects": ["shield_particles"]
    }
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
  
  "name": "Arcane Staff",
  "description": "Powerful magical staff with multiple spell effects",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "equipable-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Artifacts Inc.",
    "url": "https://example.com/virtual-artifacts"
  },
  
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/equipables/arcane-staff.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": "https://example.com/thumbnails/arcane-staff.jpg",
  
  "category": "tool",
  "equipableType": "staff",
  "handedness": "both",
  
  "attachmentPoints": {
    "primary": {
      "name": "right_hand",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1],
      "boneMapping": "right_hand_grip"
    },
    "secondary": {
      "name": "left_hand",
      "position": [0, 0.4, 0],
      "rotation": [0, 0, 0, 1],
      "scale": [1, 1, 1],
      "boneMapping": "left_hand_grip"
    }
  },
  
  "physics": {
    "weight": 2.0,
    "centerOfMass": [0, 0.3, 0],
    "collisionMesh": "staff_collision",
    "properties": {
      "rigid": true,
      "material": "wood",
      "friction": 0.5
    }
  },
  
  "interactions": {
    "primary": {
      "name": "fireball",
      "type": "trigger",
      "animation": "cast_fireball",
      "effects": [
        {
          "name": "fire_particles",
          "type": "particle",
          "duration": 2.0,
          "color": [1.0, 0.5, 0.0]
        },
        {
          "name": "glow",
          "type": "emission",
          "color": [1.0, 0.5, 0.0],
          "intensity": 2.0
        }
      ],
      "cooldown": 2.0
    },
    "secondary": {
      "name": "shield",
      "type": "hold",
      "animation": "cast_shield",
      "effects": [
        {
          "name": "shield_particles",
          "type": "particle",
          "duration": "hold",
          "color": [0.0, 0.5, 1.0]
        }
      ],
      "energy": {
        "cost": 10,
        "per": "second"
      }
    }
  },
  
  "customization": {
    "materials": [
      {
        "name": "staff_wood",
        "type": "texture",
        "options": [
          {
            "name": "oak",
            "diffuse": "textures/oak_wood.jpg",
            "normal": "textures/oak_wood_normal.jpg"
          },
          {
            "name": "ebony",
            "diffuse": "textures/ebony_wood.jpg",
            "normal": "textures/ebony_wood_normal.jpg"
          }
        ]
      },
      {
        "name": "crystal",
        "type": "material",
        "options": [
          {
            "name": "ruby",
            "color": [1.0, 0.0, 0.0],
            "emission": [1.0, 0.0, 0.0]
          },
          {
            "name": "sapphire",
            "color": [0.0, 0.0, 1.0],
            "emission": [0.0, 0.0, 1.0]
          }
        ]
      }
    ],
    
    "effects": [
      {
        "name": "spell_color",
        "type": "particle_color",
        "options": [
          {
            "name": "fire",
            "color": [1.0, 0.5, 0.0]
          },
          {
            "name": "ice",
            "color": [0.0, 0.5, 1.0]
          }
        ]
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
      "name": "cast_fireball",
      "type": "oneshot",
      "duration": 1.0
    },
    {
      "name": "cast_shield",
      "type": "loop",
      "duration": 2.0
    }
  ],
  
  "compatibility": {
    "avatarTypes": ["humanoid"],
    "platforms": ["platform-a", "platform-b"],
    "minimumVersion": "2.0"
  }
}
```

## Validation Rules

### Equipable Properties
- Valid category values
- Proper attachment points
- Complete interaction definitions
- Valid physics properties
- Supported animations

### Technical Properties
- Valid attachment configurations
- Proper bone mappings
- Compatible physics settings
- Supported effect types
- Valid animation references

### Interaction Properties
- Valid interaction types
- Complete effect definitions
- Proper cooldown values
- Vali
