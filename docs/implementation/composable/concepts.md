---
sidebar_position: 1
---

# Composable Assets Concepts

Composable assets are virtual items that can be combined, assembled, or nested to create more complex assets. This guide covers the fundamental concepts and architecture for implementing composable assets.

## Core Concepts

### Component Structure
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Modular Robot",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Robot Head",
      "contentUrl": "https://example.com/models/head.glb"
    },
    {
      "@type": "3DModel",
      "name": "Robot Body",
      "contentUrl": "https://example.com/models/body.glb"
    }
  ]
}
```

### Assembly Rules
```json
{
  "assemblyRules": {
    "required": ["head", "body", "legs"],
    "optional": ["arms", "weapons"],
    "constraints": {
      "maxWeapons": 2,
      "maxArms": 2
    }
  }
}
```

## Complete Example

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Customizable Battle Mech",
  "description": "Modular battle mech with interchangeable components",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "composable-2024-001"
  },
  
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "#core",
      "name": "Mech Core",
      "contentUrl": "https://example.com/models/core.glb",
      "required": true
    },
    {
      "@type": "3DModel",
      "@id": "#armor",
      "name": "Heavy Armor",
      "contentUrl": "https://example.com/models/armor.glb",
      "attachmentPoints": ["core_mount"],
      "optional": true
    }
  ],
  
  "assemblyRules": {
    "required": ["core"],
    "optional": ["armor", "weapons", "accessories"],
    "constraints": {
      "maxWeight": 1000,
      "maxPower": 500,
      "compatibilityRules": [
        {
          "if": "heavy_armor",
          "then": "power_core_v2"
        }
      ]
    }
  },
  
  "attachmentSystem": {
    "points": [
      {
        "id": "weapon_mount_left",
        "type": "weapon",
        "position": [-1, 0, 0]
      },
      {
        "id": "weapon_mount_right",
        "type": "weapon",
        "position": [1, 0, 0]
      }
    ],
    "sockets": [
      {
        "id": "core_mount",
        "type": "armor",
        "position": [0, 0, 0]
      }
    ]
  }
}
```

## Validation Rules

### Component Validation
- Valid part references
- Proper attachment points
- Complete constraints
- Resource limits
- Compatibility rules

### Assembly Validation
- Required components present
- Optional limits respected
- Weight constraints
- Power requirements
- Physical constraints

## Best Practices

1. **Component Design**
    - Modular architecture
    - Clear interfaces
    - Standardized connections
    - Resource management
    - Version control

2. **Assembly Logic**
    - Clear rules
    - Efficient validation
    - Error handling
    - User feedback
    - State management

3. **Performance Optimization**
    - Resource loading
    - Physics calculations
    - Memory management
    - Network efficiency
    - Visual quality

4. **User Experience**
    - Clear interfaces
    - Visual feedback
    - Error messaging
    - Assembly guidance
    - Save/load support

## Next Steps

- Review [Schema Parts](./schema-parts.md) for implementation details
- See [Assembly Patterns](./assembly-patterns.md) for practical examples
- Check [Validation Tools](/tools/validation.md) for testing
