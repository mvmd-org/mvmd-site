# Assembly Patterns and Examples

Assembly patterns define how composable assets can be structured, combined, and managed in virtual environments. This guide covers fundamental patterns and implementation approaches for creating flexible, maintainable asset systems.

## Core Assembly Patterns

### Linear Assembly
Linear assembly represents a sequential construction pattern where components must be assembled in a specific order. This pattern ensures that each component builds upon previous components in a controlled, predictable way. Linear assembly is particularly valuable when:
- Components have clear dependencies on previous elements
- Assembly must follow a specific construction sequence
- Users need guided, step-by-step assembly instructions
- Component relationships form a clear chain of dependencies

The sequence is enforced through explicit step numbering and component references, ensuring that each part is placed in its correct order and position.

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
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
Hierarchical assembly enables the creation of complex nested structures where components can contain other components, forming a tree-like organization. This pattern is fundamental for creating sophisticated assets with multiple levels of detail and organization. The hierarchical approach provides:

- Clear parent-child relationships that define component ownership and inheritance
- Logical grouping of related components for easier management
- Natural organization that mirrors real-world object structures
- Support for complex assemblies with multiple levels of nesting
- Efficient management of component transforms and properties through inheritance

This pattern is particularly powerful when dealing with complex assets where components need to maintain specific relationships with their parent and child elements.

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
          "name": "Sub Assembly 1"
        }
      ]
    }
  ]
}
```

### Socket-Based Assembly
Socket-based assembly provides a robust system for connecting components through well-defined attachment points. This pattern ensures precise positioning and compatibility between components through explicitly defined connection interfaces. The system includes:

- Clearly defined attachment points with specific positions and orientations
- Type-based validation to ensure only compatible components can connect
- Precise positional and rotational alignment through defined transforms
- Support for multiple connection types through typed sockets and plugs
- Automatic validation of connections based on socket/plug compatibility

This approach is essential for creating modular systems where components must connect in specific ways and positions, such as character equipment slots or modular building systems.

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "attachmentSystem",
    "name": "Attachment System Configuration",
    "value": {
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
Constraint-based assembly defines explicit rules and limitations that govern how components can be combined and used together. This pattern ensures that assemblies remain physically viable and logically consistent by enforcing both physical and logical constraints. The system manages:

- Physical limitations such as weight, size, and balance requirements
- Logical restrictions that define valid component combinations
- Performance boundaries to ensure system efficiency
- Compatibility rules between different component types and versions

This pattern is crucial for maintaining the integrity and functionality of complex assemblies while preventing invalid combinations that could break the system or create unrealistic results.

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "constraints",
    "name": "Assembly Constraints",
    "value": {
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

## Implementation Examples

### Modular Building System
The modular building system implementation demonstrates how to create a structured construction environment using a grid-based approach. This system combines aspects of socket-based and constraint-based assembly to create a coherent building framework. It provides:

- A regular grid system that ensures consistent spacing and alignment
- Defined snap points that guide component placement
- Rotation constraints that maintain proper orientation
- Building rules that ensure structural integrity

This implementation is particularly useful for construction-focused applications where components need to align precisely and follow specific building rules:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "buildingSystem",
    "name": "Building System Configuration",
    "value": {
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
The vehicle assembly implementation showcases a specialized application of component-based assembly that must consider physics, balance, and functional requirements. This system demonstrates how to handle complex assemblies where component placement affects overall functionality. Key aspects include:

- Core chassis requirements that form the foundation
- Strategic mount points for critical components
- Automatic weight distribution calculations
- Center of mass management for stability

This implementation exemplifies how to handle complex assemblies where component placement and balance are critical:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "vehicleSystem",
    "name": "Vehicle System Configuration",
    "value": {
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

## Validation Requirements

### Physical Validation
- Component connections must be properly aligned
- Weight limits must be respected
- Size constraints must be maintained
- Balance must be verified
- Collisions must be detected and prevented

### Logical Validation
- Required components must be present
- Configurations must be valid
- Compatibility rules must be followed
- Dependencies must be satisfied
- Versions must be compatible

## Best Practices

### Assembly Design
- Create clear connection points
- Define logical constraints
- Document assembly sequences
- Provide visual feedback
- Implement error prevention

### Component Management
- Implement version control
- Track dependencies
- Handle updates gracefully
- Manage resource caching
- Optimize performance

### User Experience
- Provide clear instructions
- Include visual guides
- Handle errors gracefully
- Support undo/redo
- Save progress

### Performance Optimization
- Implement efficient loading
- Manage resources effectively
- Optimize physics calculations
- Control memory usage
- Consider network efficiency

## Common Implementation Patterns

### Simple Connection
Basic point-to-point component connection:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "connection": {
    "@type": "PropertyValue",
    "propertyID": "connection",
    "name": "Connection Type",
    "value": "snap",
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
Multi-stage assembly with required and optional components:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "assembly",
    "name": "Assembly Configuration",
    "value": {
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

- Review Schema Parts documentation for basic implementation details
- Explore Composable Concepts for theoretical foundation
- Use Validation Tools to test your assembly patterns
