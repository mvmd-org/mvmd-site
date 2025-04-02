# Composable


This guide covers practical implementation patterns for composable assets in the Metaverse, building on the concepts covered in previous sections.

## Basic Composition Pattern

The simplest form of composable assets uses transformation matrices to define how components relate to each other in space. This approach is powerful and flexible while requiring minimal complexity.

### 3D Component Example
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Simple Composable Character",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Head",
      "contentUrl": "head.glb",
      "gltf:transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 1.7, 0]
      }
    },
    {
      "@type": "3DModel",
      "name": "Body",
      "contentUrl": "body.glb",
      "gltf:transform": {
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1.0],
        "translation": [0, 0, 0]
      }
    }
  ]
}
```

### 2D Layer Example
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Layered Character",
  "hasPart": [
    {
      "@type": "ImageObject",
      "name": "Background",
      "contentUrl": "background.png",
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Transformation",
        "value": {
          "scale": [1, 1],
          "rotation": 0,
          "translation": [0, 0],
          "layer": 0
        }
      }
    },
    {
      "@type": "ImageObject",
      "name": "Character",
      "contentUrl": "character.png",
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Transformation",
        "value": {
          "scale": [1, 1],
          "rotation": 0,
          "translation": [100, 50],
          "layer": 1
        }
      }
    }
  ]
}
```

## Key Benefits

### Interchangeability
- Parts can be swapped without complex attachment logic
- Transformations maintain spatial relationships
- Components remain independent
- Simple to validate and process

### Platform Compatibility
- Works across different rendering engines
- Easy to implement
- Standard mathematical transforms
- Minimal processing required

## Advanced Assembly Patterns

For more complex use cases, additional assembly patterns can be implemented:


### Linear Assembly
For assets that require specific assembly sequences:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Linear Assembly Example",
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
    }
  ]
}
```

### Socket-Based Assembly
For modular components with defined connection points:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "attachmentSystem",
    "value": {
      "sockets": [
        {
          "id": "socket-1",
          "type": "universal",
          "position": [0, 0, 0],
          "accepts": ["type-a", "type-b"]
        }
      ]
    }
  }
}
```

### Constraint-Based Assembly
For systems with specific combination rules:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "constraints",
    "value": {
      "physical": {
        "maxWeight": 100,
        "maxSize": [10, 10, 10]
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
}
```

## Implementation Examples

### Vehicle Assembly System
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modular Vehicle",
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "#chassis",
      "name": "Base Chassis",
      "contentUrl": "chassis.glb",
      "additionalProperty": {
        "@type": "PropertyValue",
        "propertyID": "mountPoints",
        "value": ["engine", "wheels", "body"]
      }
    }
  ],
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "assembly",
    "value": {
      "required": ["chassis", "wheels"],
      "optional": ["accessories"],
      "constraints": {
        "maxAccessories": 5
      }
    }
  }
}
```

### Character Equipment System
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Equipment",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "equipmentSlots",
    "value": {
      "head": {
        "type": "helmet",
        "position": [0, 1.8, 0],
        "restrictions": ["size-m"]
      },
      "hands": {
        "type": "weapon",
        "position": [0.5, 1.0, 0],
        "restrictions": ["weight-5"]
      }
    }
  }
}
```

## Validation Requirements

### Physical Validation
- Component connections alignment
- Weight and size limits
- Balance verification
- Collision detection

### Logical Validation
- Required component presence
- Configuration validity
- Compatibility rules
- Version matching

## Best Practices

### Component Design
- Use clear interface definitions
- Implement version control
- Define explicit constraints
- Document dependencies

### Assembly Implementation
- Validate connections
- Handle errors gracefully
- Support undo/redo
- Cache common configurations

### Performance
- Optimize loading sequences
- Implement efficient validation
- Use appropriate LODs
- Manage memory usage

For detailed examples and additional patterns, refer to the Examples section of the documentation.
