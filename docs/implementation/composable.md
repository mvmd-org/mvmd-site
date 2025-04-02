---
sidebar_position: 5
---

# Composable Asset Implementation

This guide provides implementation patterns for creating and managing composable assets using MVMD-compliant metadata structures.

## Core Composable Implementation Patterns

### Basic Composable Asset

A foundational composable asset that references its components:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Modular Spacecraft",
  "description": "A customizable spacecraft with interchangeable components",
  "creator": {
    "@type": "Organization",
    "name": "Space Assets Ltd",
    "url": "https://spaceassets.example.com"
  },
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Spacecraft Hull",
      "contentUrl": "https://assets.example.com/hull.glb"
    },
    {
      "@type": "3DModel",
      "name": "Engine Module",
      "contentUrl": "https://assets.example.com/engine.glb"
    },
    {
      "@type": "3DModel", 
      "name": "Navigation System",
      "contentUrl": "https://assets.example.com/nav.glb"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "assembly",
      "name": "Assembly Instructions",
      "value": {
        "version": "1.0",
        "parentTransform": "identity",
        "componentAssembly": [
          {
            "id": "hull",
            "componentRef": 0,
            "position": [0, 0, 0],
            "rotation": [0, 0, 0, 1],
            "scale": [1, 1, 1]
          },
          {
            "id": "engine",
            "componentRef": 1,
            "position": [0, -2, 0],
            "rotation": [0, 0, 0, 1],
            "scale": [1, 1, 1]
          },
          {
            "id": "nav",
            "componentRef": 2,
            "position": [0, 1, 0],
            "rotation": [0, 0, 0, 1],
            "scale": [0.5, 0.5, 0.5]
          }
        ]
      }
    }
  ]
}
```

### Component Templates

Define a reusable component template with customization options:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Engine Module Template",
  "description": "Customizable engine module for spacecraft",
  "contentUrl": "https://assets.example.com/engine-template.glb",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "customization",
      "name": "Customization Options",
      "value": {
        "parameters": [
          {
            "name": "engineColor",
            "type": "color",
            "default": "#3366FF",
            "options": ["#3366FF", "#FF3366", "#66FF33"]
          },
          {
            "name": "engineSize",
            "type": "vector3",
            "default": [1, 1, 1],
            "range": {
              "min": [0.5, 0.5, 0.5],
              "max": [2, 2, 2]
            }
          },
          {
            "name": "engineEfficiency",
            "type": "number",
            "default": 80,
            "range": {
              "min": 50,
              "max": 100
            }
          }
        ]
      }
    }
  ]
}
```

### Nested Composables

Create complex hierarchical structures with nested components:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Space Station Complex",
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "Habitat Module",
      "hasPart": [
        {
          "@type": "3DModel",
          "name": "Habitat Shell",
          "contentUrl": "https://assets.example.com/habitat-shell.glb"
        },
        {
          "@type": "3DModel",
          "name": "Living Quarters",
          "contentUrl": "https://assets.example.com/quarters.glb"
        }
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "propertyID": "assembly",
          "name": "Assembly Instructions",
          "value": {
            "componentAssembly": [
              {
                "id": "shell",
                "componentRef": 0,
                "position": [0, 0, 0],
                "rotation": [0, 0, 0, 1]
              },
              {
                "id": "quarters",
                "componentRef": 1,
                "position": [0, 0, 0],
                "rotation": [0, 0, 0, 1]
              }
            ]
          }
        }
      ]
    },
    {
      "@type": "CreativeWork",
      "name": "Power Module",
      "hasPart": [
        {
          "@type": "3DModel",
          "name": "Solar Panels",
          "contentUrl": "https://assets.example.com/solar.glb"
        },
        {
          "@type": "3DModel",
          "name": "Power Distribution",
          "contentUrl": "https://assets.example.com/power-dist.glb"
        }
      ]
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "assembly",
      "name": "Assembly Instructions",
      "value": {
        "componentAssembly": [
          {
            "id": "habitat",
            "componentRef": 0,
            "position": [0, 0, 0],
            "rotation": [0, 0, 0, 1]
          },
          {
            "id": "power",
            "componentRef": 1,
            "position": [20, 0, 0],
            "rotation": [0, 0, 0, 1]
          }
        ]
      }
    }
  ]
}
```

## Extended Composable Properties

### Runtime Behaviors

Define interactive behaviors for composable assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Interactive Spacecraft",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "behaviors",
      "name": "Interactive Behaviors",
      "value": {
        "interactions": [
          {
            "id": "engine-start",
            "type": "animation",
            "target": "engine",
            "animation": "start-sequence",
            "triggers": ["proximity", "click"],
            "parameters": {
              "sound": "engine-start.mp3",
              "particleEffect": "engine-particles"
            }
          },
          {
            "id": "cockpit-open",
            "type": "state-change",
            "target": "cockpit",
            "states": ["open", "closed"],
            "defaultState": "closed",
            "triggers": ["click"],
            "transitionTime": 1.5
          }
        ]
      }
    }
  ]
}
```

### Component Dependencies

Specify dependencies between components:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Advanced Spacecraft System",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "dependencies",
      "name": "Component Dependencies",
      "value": {
        "requirements": [
          {
            "component": "engine",
            "requires": ["power-supply", "cooling-system"],
            "compatibility": {
              "powerSupply": {
                "minPower": 1000,
                "type": ["fusion", "antimatter"]
              }
            }
          },
          {
            "component": "weapons-system",
            "requires": ["power-supply", "targeting-computer"],
            "incompatible": ["stealth-module"]
          }
        ]
      }
    }
  ]
}
```

## Implementation Best Practices

### Assembly Management
- Define clear parent-child relationships
- Use consistent coordinate systems
- Document attachment points and interfaces
- Include fallback behaviors for missing components
- Establish component version compatibility rules

### Performance Optimization
- Implement progressive loading for complex compositions
- Use level-of-detail variations for different distances
- Optimize component reuse with instancing
- Consider memory implications for deeply nested structures
- Document performance characteristics for large assemblies

### Validation & Compatibility
- Verify all component references are valid
- Ensure transform values are within expected ranges
- Test assembly with all possible component combinations
- Provide graceful degradation for unsupported features
- Maintain backward compatibility when updating components

## Related Concepts

- [Assembly Patterns](./composable/assembly-patterns.md): Detailed assembly strategies
- [Schema Parts](./composable/schema-parts.md): Component schema definitions
- [Composable Concepts](./composable/concepts.md): Fundamental composable principles
- [Linking vs Embedding](../concepts/linking-vs-embedding.md): Reference management approaches

## Related Namespaces

- [Schema.org](../standards/schema-org.md): Core vocabulary for composable assets
- [3D Standards](../standards/overview.md): Implementation patterns for 3D components
- [OpenXR Standards](../standards/openxr.md): XR-specific implementation for composable assets
