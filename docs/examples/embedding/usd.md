---
sidebar_position: 2
---

# Open USD Standard

Universal Scene Description (USD) is an open-source framework developed by Pixar Animation Studios for the interchange of 3D computer graphics data. It facilitates collaboration, non-destructive editing, and supports multiple views and opinions about graphics data, making it a versatile choice for complex scene management.
Wikipedia

For detailed information, you can refer to the official USD documentation: [Introduction to USD](https://openusd.org/release/intro.html)

## Core Properties

### Stage Configuration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/24.08/spec.html"
  },
  "@type": "Place",
  "name": "Virtual Environment",
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0,
    "timeCodesPerSecond": 24
  }
}
```

### Layer Structure

```json
{
  "usd:layers": [
    {
      "name": "base",
      "path": "/Environment/Base",
      "defaultPrim": "World"
    },
    {
      "name": "architecture",
      "path": "/Environment/Architecture",
      "reference": "base"
    },
    {
      "name": "furniture",
      "path": "/Environment/Furniture",
      "reference": "architecture"
    }
  ]
}
```

### Variant Sets

```json
{
  "usd:variants": {
    "lighting": {
      "name": "lighting",
      "variants": ["day", "night", "evening"],
      "default": "day"
    },
    "season": {
      "name": "season",
      "variants": ["summer", "winter", "autumn", "spring"],
      "default": "summer"
    }
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/24.08/spec.html"
  },
  "@type": "Place",
  "name": "Virtual Plaza",
  "description": "Interactive public plaza with dynamic lighting and seasonal variations",
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0,
    "timeCodesPerSecond": 24,
    "startTimeCode": 0,
    "endTimeCode": 240
  },
  
  "usd:layers": [
    {
      "name": "base",
      "path": "/Plaza/Base",
      "defaultPrim": "Plaza",
      "kind": "component"
    },
    {
      "name": "terrain",
      "path": "/Plaza/Terrain",
      "reference": "base",
      "kind": "component"
    },
    {
      "name": "architecture",
      "path": "/Plaza/Architecture",
      "reference": "terrain",
      "kind": "assembly"
    },
    {
      "name": "vegetation",
      "path": "/Plaza/Vegetation",
      "reference": "architecture",
      "kind": "component"
    },
    {
      "name": "furniture",
      "path": "/Plaza/Furniture",
      "reference": "architecture",
      "kind": "component"
    },
    {
      "name": "lighting",
      "path": "/Plaza/Lighting",
      "reference": "architecture",
      "kind": "component"
    }
  ],
  
  "usd:variants": {
    "lighting": {
      "name": "lighting",
      "variants": ["day", "night", "evening"],
      "default": "day",
      "properties": {
        "intensity": "float",
        "color": "color3f",
        "direction": "vector3f"
      }
    },
    "season": {
      "name": "season",
      "variants": ["summer", "winter", "autumn", "spring"],
      "default": "summer",
      "affectedLayers": ["vegetation", "lighting"]
    },
    "events": {
      "name": "events",
      "variants": ["normal", "celebration", "concert"],
      "default": "normal",
      "affectedLayers": ["lighting", "furniture"]
    }
  },
  
  "usd:composition": {
    "defaultPrim": "Plaza",
    "primChildren": [
      {
        "name": "Ground",
        "type": "Xform",
        "variants": ["season"]
      },
      {
        "name": "Buildings",
        "type": "Xform",
        "variants": ["lighting"]
      },
      {
        "name": "Trees",
        "type": "Xform",
        "variants": ["season"]
      },
      {
        "name": "Installations",
        "type": "Xform",
        "variants": ["events"]
      }
    ]
  },
  
  "usd:references": [
    {
      "name": "StandardFurniture",
      "path": "/Plaza/Furniture/Standard",
      "assetPath": "furniture/standard.usd"
    },
    {
      "name": "EventFurniture",
      "path": "/Plaza/Furniture/Event",
      "assetPath": "furniture/event.usd"
    }
  ],
  
  "usd:properties": {
    "visibility": "inherited",
    "purpose": "default",
    "kind": "assembly"
  }
}
```

## Property Guidelines

### Stage Properties
- Use proper up axis ("Y" or "Z")
- Define correct scale (metersPerUnit)
- Specify time codes if animated
- Include frame rate information

### Layer Properties
- Use descriptive layer names
- Define clear layer hierarchy
- Specify reference relationships
- Include layer purposes

### Variant Properties
- Use meaningful variant names
- Define default variants
- Specify affected properties
- Document variant relationships

## Composition Rules

### Layer Organization
1. Base layers first
2. Referenced layers follow
3. Specializations last
4. Clear dependency chain

### Variant Management
1. Group related variants
2. Define fallback options
3. Document dependencies
4. Specify affect scope

## Best Practices

1. **Layer Structure**
    - Organize layers logically
    - Use clear naming conventions
    - Document layer purposes
    - Maintain clear hierarchy

2. **Variant Sets**
    - Group related variations
    - Provide default options
    - Consider performance
    - Document combinations

3. **Reference Management**
    - Use clear asset paths
    - Document dependencies
    - Consider load order
    - Manage asset versions

4. **Property Inheritance**
    - Define inheritance clearly
    - Document overrides
    - Consider performance
    - Maintain consistency

## Common Issues

1. **Layer Conflicts**
   ```json
   {
     "usd:layers": [
       {
         "name": "override",
         "reference": "missing_layer"  // Invalid reference
       }
     ]
   }
   ```

2. **Invalid Variants**
   ```json
   {
     "usd:variants": {
       "lighting": {
         "variants": [],  // Empty variants array
         "default": "missing"  // Non-existent default
       }
     }
   }
   ```

## Next Steps

- Review [Environment Profile](/integration-profiles/scene.md)
- See [Combining Standards](/combining-standards.md)
- Check [Validation](../../reference/validator.md)
