---
sidebar_position: 2
---

# Using Schema.org hasPart

This guide covers implementing the Schema.org hasPart property for composable assets in the Metaverse.

## Basic Implementation

### Simple Part Reference
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Compound Object",
  "hasPart": {
    "@type": "3DModel",
    "name": "Component",
    "contentUrl": "https://example.com/component.glb"
  }
}
```

### Multiple Parts
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Complex Object",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Part A",
      "contentUrl": "https://example.com/part-a.glb"
    },
    {
      "@type": "3DModel",
      "name": "Part B",
      "contentUrl": "https://example.com/part-b.glb"
    }
  ]
}
```

## Advanced Usage

### Nested Components
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Nested Assembly",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Main Assembly",
      "hasPart": [
        {
          "@type": "3DModel",
          "name": "Sub Component A",
          "contentUrl": "https://example.com/sub-a.glb"
        }
      ]
    }
  ]
}
```

### Component Relations
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Related Components",
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "#component-a",
      "name": "Component A",
      "requires": ["#component-b"]
    },
    {
      "@type": "3DModel",
      "@id": "#component-b",
      "name": "Component B"
    }
  ]
}
```

## Complete Example

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Modular Vehicle",
  "description": "Customizable vehicle with interchangeable parts",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "vehicle-2024-001"
  },
  
  "hasPart": [
    {
      "@type": "3DModel",
      "@id": "#chassis",
      "name": "Vehicle Chassis",
      "contentUrl": "https://example.com/parts/chassis.glb",
      "required": true,
      "attachmentPoints": [
        {
          "id": "front_wheels",
          "type": "wheel",
          "count": 2
        },
        {
          "id": "rear_wheels",
          "type": "wheel",
          "count": 2
        },
        {
          "id": "body",
          "type": "body",
          "count": 1
        }
      ]
    },
    {
      "@type": "3DModel",
      "@id": "#body",
      "name": "Vehicle Body",
      "contentUrl": "https://example.com/parts/body.glb",
      "required": true,
      "attachesTo": "chassis",
      "variants": [
        {
          "id": "sport",
          "name": "Sport Body",
          "contentUrl": "https://example.com/parts/body-sport.glb"
        },
        {
          "id": "utility",
          "name": "Utility Body",
          "contentUrl": "https://example.com/parts/body-utility.glb"
        }
      ]
    },
    {
      "@type": "3DModel",
      "@id": "#wheels",
      "name": "Wheel Set",
      "contentUrl": "https://example.com/parts/wheels.glb",
      "required": true,
      "count": 4,
      "attachesTo": ["front_wheels", "rear_wheels"],
      "variants": [
        {
          "id": "street",
          "name": "Street Wheels",
          "contentUrl": "https://example.com/parts/wheels-street.glb"
        },
        {
          "id": "offroad",
          "name": "Off-road Wheels",
          "contentUrl": "https://example.com/parts/wheels-offroad.glb"
        }
      ]
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "assemblyRules",
      "value": {
        "required": ["chassis", "body", "wheels"],
        "optional": ["accessories"],
        "constraints": {
          "maxAccessories": 5,
          "compatibilityRules": [
            {
              "if": "body.sport",
              "then": "wheels.street"
            },
            {
              "if": "body.utility",
              "then": "wheels.offroad"
            }
          ]
        }
      }
    }
  ]
}
```

## Best Practices

1. **Structure Design**
    - Clear hierarchy
    - Logical grouping
    - Proper references
    - Complete definitions
    - Version control

2. **Relationship Management**
    - Clear dependencies
    - Proper constraints
    - Versioning support
    - Update handling
    - Conflict resolution

3. **Implementation Details**
    - Efficient loading
    - Resource management
    - Error handling
    - State tracking
    - Performance optimization

4. **Documentation**
    - Clear component roles
    - Assembly instructions
    - Constraint documentation
    - Update procedures
    - Troubleshooting guides

## Common Issues

### Version Conflicts
```json
{
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Component",
      "version": "2.0",
      "requires": {
        "otherComponent": ">=1.5"
      }
    }
  ]
}
```

### Missing Dependencies
```json
{
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Component",
      "requires": ["#missing-component"]
    }
  ]
}
```

## Next Steps

- Review [Assembly Patterns](./assembly-patterns.md) for implementation examples
- See [Composable Concepts](./concepts.md) for theoretical background
- Check [Validation Tools](/tools/validation.md) for testing
