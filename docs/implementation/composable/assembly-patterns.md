---
sidebar_position: 3
---

# Assembly Patterns and Examples

This guide provides practical patterns and examples for implementing composable asset assembly systems.

## Basic Patterns

### Linear Assembly
Components assembled in sequence:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Linear Assembly",
  "assemblySequence": [
    {
      "step": 1,
      "component": "#base",
      "description": "Place base component"
    },
    {
      "step": 2,
      "component": "#middle",
      "description": "Attach middle section"
    },
    {
      "step": 3,
      "component": "#top",
      "description": "Add top component"
    }
  ]
}
```

### Hierarchical Assembly
Nested component structure:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Hierarchical Assembly",
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "#main",
      "name": "Main Assembly",
      "hasPart": [
        {
          "@type": "3DModel",
          "@id": "#sub-1",
          "name": "Sub Assembly 1",
          "hasPart": [
            {
              "@type": "3DModel",
              "@id": "#component-1",
              "name": "Component 1"
            }
          ]
        }
      ]
    }
  ]
}
```

## Complete Example

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Modular Furniture Set",
  "description": "Customizable furniture set with multiple configurations",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "furniture-2024-001"
  },
  
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "#base",
      "name": "Base Unit",
      "contentUrl": "https://example.com/furniture/base.glb",
      "required": true,
      "attachmentPoints": [
        {
          "id": "left",
          "type": "extension",
          "position": [-1, 0, 0]
        },
        {
          "id": "right",
          "type": "extension",
          "position": [1, 0, 0]
        }
      ]
    },
    {
      "@type": "3DModel",
      "@id": "#extension",
      "name": "Extension Unit",
      "contentUrl": "https://example.com/furniture/extension.glb",
      "optional": true,
      "maxCount": 2,
      "attachesTo": ["left", "right"]
    },
    {
      "@type": "3DModel",
      "@id": "#top",
      "name": "Top Unit",
      "contentUrl": "https://example.com/furniture/top.glb",
      "required": true,
      "attachesTo": ["base", "extension"],
      "variants": [
        {
          "id": "flat",
          "name": "Flat Top",
          "contentUrl": "https://example.com/furniture/top-flat.glb"
        },
        {
          "id": "curved",
          "name": "Curved Top",
          "contentUrl": "https://example.com/furniture/top-curved.glb"
        }
      ]
    }
  ],
  
  "assemblyRules": {
    "required": ["base", "top"],
    "optional": ["extension"],
    "constraints": {
      "maxWidth": 3,
      "maxExtensions": 2,
      "compatibilityRules": [
        {
          "if": "extension.count >= 2",
          "then": "top.flat"
        }
      ]
    }
  },
  
  "configurations": [
    {
      "name": "Basic",
      "parts": ["base", "top.flat"]
    },
    {
      "name": "Extended",
      "parts": ["base", "extension", "top.curved"]
    },
    {
      "name": "Full",
      "parts": ["base", "extension", "extension", "top.flat"]
    }
  ]
}
```

## Assembly Patterns

### Socket-Based Assembly
```json
{
  "attachmentSystem": {
    "sockets": [
      {
        "id": "socket-1",
        "type": "universal",
        "position": [0, 0, 0],
        "rotation": [0, 0, 0, 1],
        "accepts": ["type-a", "type-b"]
      }
    ],
    "plugs": [
      {
        "id": "plug-1",
        "type": "type-a",
        "position": [0, 0, 0],
        "rotation": [0, 0, 0, 1]
      }
    ]
  }
}
```

### Constraint-Based Assembly
```json
{
  "constraints": {
    "physical": {
      "maxWeight": 100,
      "maxSize": [10, 10, 10],
      "centerOfMass": [0, 0, 0]
    },
    "logical": {
      "requiredTypes": ["base", "top"],
      "incompatiblePairs": [
        ["heavy", "small_base"],
        ["tall", "unstable"]
      ]
    }
  }
}
```

## Best Practices

1. **Assembly Design**
    - Clear connection points
    - Logical constraints
    - Intuitive sequences
    - Error prevention
    - Visual feedback

2. **Component Management**
    - Version control
    - Dependency tracking
    - Update handling
    - Cache management
    - Resource optimization

3. **User Experience**
    - Clear instructions
    - Visual guides
    - Error handling
    - Undo/redo support
    - Progress saving

4. **Performance**
    - Efficient loading
    - Resource management
    - Physics optimization
    - Memory usage
    - Network efficiency

## Common Patterns

### Modular Building System
```json
{
  "buildingSystem": {
    "grid": {
      "size": 1.0,
      "snapPoints": ["center", "edge", "corner"],
      "rotation": 90
    },
    "rules": {
      "support": "required",
      "overlap": "forbidden",
      "gravity": "enabled"
    }
  }
}
```

### Vehicle Assembly
```json
{
  "vehicleSystem": {
    "core": {
      "chassis": "required",
      "mountPoints": [
        "engine",
        "wheels",
        "body"
      ]
    },
    "balance": {
      "weightDistribution": "automatic",
      "centerOfMass": "calculated"
    }
  }
}
```

## Validation Rules

### Physical Validation
- Proper connections
- Weight limits
- Size constraints
- Balance checks
- Collision detection

### Logical Validation
- Required components
- Valid configurations
- Compatibility rules
- Dependency checks
- Version compatibility

## Implementation Examples

### Simple Connection
```json
{
  "connection": {
    "type": "snap",
    "points": [
      {
        "id": "source",
        "position": [0, 0, 0]
      },
      {
        "id": "target",
        "position": [1, 0, 0]
      }
    ]
  }
}
```

### Complex Assembly
```json
{
  "assembly": {
    "stages": [
      {
        "name": "foundation",
        "required": true,
        "components": ["base", "supports"]
      },
      {
        "name": "structure",
        "required": true,
        "components": ["walls", "roof"]
      },
      {
        "name": "details",
        "optional": true,
        "components": ["windows", "doors"]
      }
    ]
  }
}
```

## Next Steps

- Review [Schema Parts](./schema-parts.md) for basic implementation
- See [Composable Concepts](./concepts.md) for theoretical foundation
- Check [Validation Tools](/tools/validation.md) for testing patterns
