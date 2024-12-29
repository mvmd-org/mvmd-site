---
sidebar_position: 2
---

# File Organization

This guide explains how to structure metadata files effectively, with a focus on handling multiple formats and component-based assets in the Metaverse context.

## Overview

Proper file organization is crucial for managing complex virtual assets. The metadata structure should:
- Clearly identify the main asset through a representative image
- Define relationships between components using proper type declarations
- Handle multiple file formats consistently
- Support efficient asset discovery and loading
- Enable component reuse

## Namespace and Type Declarations

Understanding proper namespace usage and type declarations is crucial:

### Basic Structure
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject"
}
```

### Object Type Requirements
- Every object must have an @type declaration
- Arrays of objects require @type for each element
- Nested objects need appropriate @type declarations
- Namespace-specific objects use namespaced types

Example of proper type declarations:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "gltf:transform": {
    "@type": "gltf:Transform",
    "scale": [1.0, 1.0, 1.0]
  }
}
```

## Core Organization Patterns

### Root Asset Structure

The root asset metadata uses an ImageObject as the main entry point:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Complex Asset Preview",
  "contentUrl": "https://example.com/images/asset-preview.jpg",
  "encodingFormat": "image/jpeg",
  "description": "Preview of multi-component asset package",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "asset-2024-001"
  }
}
```

### Component Relationships with Standard-Specific Properties

When combining Schema.org relationships with standard-specific properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Vehicle Asset Preview",
  "contentUrl": "https://example.com/images/vehicle-preview.jpg",
  "encodingFormat": "image/jpeg",
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Vehicle Body",
      "contentUrl": "https://example.com/models/body.glb",
      "encodingFormat": "model/gltf-binary",
      "gltf:transform": {
        "@type": "gltf:Transform",
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0, 0]
      },
      "gltf:materials": [
        {
          "@type": "gltf:Material",
          "name": "VehiclePaint",
          "pbrMetallicRoughness": {
            "@type": "gltf:PBRMetallicRoughness",
            "baseColorFactor": [0.8, 0.1, 0.1, 1.0],
            "metallicFactor": 0.8,
            "roughnessFactor": 0.2
          }
        }
      ]
    }
  ]
}
```

## Complete Example

Here's a comprehensive example showing proper type declarations throughout:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "ImageObject",
  "name": "Modular Vehicle System Preview",
  "contentUrl": "https://example.com/images/vehicle-preview.jpg",
  "encodingFormat": "image/jpeg",
  "description": "Customizable vehicle with interchangeable components",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "vehicle-2024-001"
  },
  
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Vehicle Chassis",
      "contentUrl": "https://example.com/models/chassis.glb",
      "encodingFormat": "model/gltf-binary",
      "gltf:transform": {
        "@type": "gltf:Transform",
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0, 0]
      },
      "gltf:materials": [
        {
          "@type": "gltf:Material",
          "name": "ChassisMetallic",
          "pbrMetallicRoughness": {
            "@type": "gltf:PBRMetallicRoughness",
            "baseColorFactor": [0.8, 0.8, 0.8, 1.0],
            "metallicFactor": 1.0,
            "roughnessFactor": 0.2
          }
        }
      ],
      "gltf:animations": [
        {
          "@type": "gltf:Animation",
          "name": "ChassisDeform",
          "channels": ["suspension"],
          "duration": 1.0
        }
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "assemblyOrder",
          "value": "1"
        }
      ]
    },
    {
      "@type": "3DModel",
      "name": "Sport Body",
      "contentUrl": "https://example.com/models/body-sport.glb",
      "encodingFormat": "model/gltf-binary",
      "gltf:transform": {
        "@type": "gltf:Transform",
        "scale": [1.0, 1.0, 1.0],
        "rotation": [0, 0, 0, 1],
        "translation": [0, 0.5, 0]
      },
      "gltf:materials": [
        {
          "@type": "gltf:Material",
          "name": "SportPaint",
          "pbrMetallicRoughness": {
            "@type": "gltf:PBRMetallicRoughness",
            "baseColorFactor": [0.9, 0.1, 0.1, 1.0],
            "metallicFactor": 0.8,
            "roughnessFactor": 0.2
          }
        }
      ],
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "variant",
          "value": "sport"
        },
        {
          "@type": "PropertyValue",
          "name": "assemblyOrder",
          "value": "2"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Assembly Guide",
      "contentUrl": "https://example.com/videos/assembly.mp4",
      "encodingFormat": "video/mp4",
      "description": "Step-by-step assembly instructions"
    }
  ],
  
  "subjectOf": [
    {
      "@type": "TextObject",
      "name": "Technical Specifications",
      "contentUrl": "https://example.com/docs/specs.md",
      "encodingFormat": "text/markdown"
    }
  ],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "assemblyInstructions",
      "value": "1. Position chassis on assembly platform\n2. Attach selected body kit to chassis mounting points"
    },
    {
      "@type": "PropertyValue",
      "name": "validConfigurations",
      "value": ["sport", "utility"]
    }
  ]
}
```

## Best Practices

### 1. Type Declarations
- Always include @type for every object
- Use proper namespaced types for standard-specific objects
- Ensure array elements have @type declarations
- Validate type compatibility

### 2. Property Organization
- Group related properties logically
- Maintain consistent type usage
- Document type requirements
- Validate type hierarchy

### 3. Value Handling
- Use appropriate types for values
- Structure complex objects properly
- Validate type constraints
- Document type usage

## Common Issues and Solutions

### 1. Missing Type Declarations
Problem:
```json
{
  "gltf:materials": [
    {
      "name": "Material"
    }
  ]
}
```

Solution:
```json
{
  "gltf:materials": [
    {
      "@type": "gltf:Material",
      "name": "Material"
    }
  ]
}
```

### 2. Nested Object Types
Problem:
```json
{
  "gltf:material": {
    "pbrMetallicRoughness": {
      "baseColorFactor": [1.0, 1.0, 1.0, 1.0]
    }
  }
}
```

Solution:
```json
{
  "gltf:material": {
    "@type": "gltf:Material",
    "pbrMetallicRoughness": {
      "@type": "gltf:PBRMetallicRoughness",
      "baseColorFactor": [1.0, 1.0, 1.0, 1.0]
    }
  }
}
```

### 3. Array Element Types
Problem:
```json
{
  "additionalProperty": [
    {
      "name": "property",
      "value": "value"
    }
  ]
}
```

Solution:
```json
{
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "property",
      "value": "value"
    }
  ]
}
```

## Next Steps

- Review [Metadata Profiles](/metadata-profiles/basic-profile.md) for type requirements
- See [Best Practices](/implementation/best-practices.md) for implementation guidance
- Check [Validation Tools](../tools/validation.md) for type validation
