# Using Schema.org hasPart

The Schema.org `hasPart` property provides a powerful foundation for defining relationships between components in composable assets. This guide explains how to effectively implement component relationships while maintaining Schema.org compatibility.

## Basic Component Relationships

The `hasPart` property enables you to define clear relationships between assets and their components. Here's how to implement basic component references:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Simple Component Assembly",
  "hasPart": {
    "@type": "3DModel",
    "name": "Sub Component",
    "contentUrl": "https://example.com/component.glb"
  }
}
```

When working with multiple components, use an array of parts:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Multi-Component Assembly",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Component A",
      "contentUrl": "https://example.com/component-a.glb"
    },
    {
      "@type": "3DModel",
      "name": "Component B",
      "contentUrl": "https://example.com/component-b.glb"
    }
  ]
}
```

## Component Hierarchies

Complex assets often require nested component structures. Use `hasPart` recursively to create hierarchical relationships:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Nested Component Structure",
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

## Component References

Use `@id` to create referenceable components that can be linked to from other parts of your metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Referenced Components",
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

## Complete Implementation Example

Here's a comprehensive example showing how to implement a complex modular asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
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
      "additionalProperty": {
        "@type": "PropertyValue",
        "propertyID": "required",
        "value": true,
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
      }
    },
    {
      "@type": "3DModel",
      "@id": "#body",
      "name": "Vehicle Body",
      "contentUrl": "https://example.com/parts/body.glb",
      "additionalProperty": {
        "@type": "PropertyValue",
        "propertyID": "configuration",
        "value": {
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
        }
      }
    }
  ],
  
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "assemblyRules",
    "value": {
      "required": ["chassis", "body"],
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
}
```

## Validation Requirements

For proper Schema.org compliance and functionality, ensure:

### Component Properties
- Each component has a valid @type
- Required identifiers are present
- URLs are properly formatted
- References are valid

### Relationship Properties
- Proper nesting structure
- Valid reference links
- Complete dependency chains
- Proper constraint definitions

## Best Practices

1. **Component Organization**
   - Create clear hierarchies
   - Use meaningful identifiers
   - Group related components
   - Define explicit relationships

2. **Reference Management**
   - Use consistent ID patterns
   - Document dependencies clearly
   - Validate references
   - Handle missing references gracefully

3. **Implementation Details**
   - Follow Schema.org patterns
   - Use proper property types
   - Include complete metadata
   - Document constraints clearly

## Next Steps

- Review Assembly Patterns documentation for implementation examples
- Explore Composable Concepts for theoretical background
- Use Validation Tools to verify your metadata structure
