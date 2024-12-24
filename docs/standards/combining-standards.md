<!-- Path: /docs/standards/combining-standards.md -->
---
sidebar_position: 6
---

# Combining Metadata Standards

This guide demonstrates how to properly combine multiple metadata standards while maintaining clarity and preventing conflicts.

## Basic Principles

1. Use clear namespacing
2. Keep standard-specific properties separate
3. Avoid mixing conventions
4. Maintain proper JSON-LD context
5. Use explicit references between standards

## Examples

### Basic 3D Model with Provenance

Combining Schema.org, glTF, and C2PA:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "3DModel",
  "name": "City Building",
  "description": "Modern office building with verified materials",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Architects Inc."
  },
  "contentUrl": "https://example.com/models/building.glb",
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "MetaverseBuilder 2.1"
  },
  "gltf:materials": [
    {
      "name": "Glass",
      "type": "PBR"
    }
  ],
  
  "c2pa:claim": {
    "title": "Original Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Architects Inc.",
      "identifier": "did:example:creator123"
    }
  }
}
```

### Geospatial Scene with Multiple Standards

Combining Schema.org, USD, CityGML, and 3D Tiles:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/",
    "citygml": "http://www.opengis.net/citygml/2.0",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  },
  "@type": "Place",
  "name": "Virtual City District",
  "description": "Detailed city district with buildings and terrain",
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  "usd:layers": [
    {
      "name": "buildings",
      "path": "/District/Buildings"
    }
  ],
  
  "citygml:district": {
    "function": "mixed_use",
    "yearBuilt": 2024,
    "buildings": [
      {
        "id": "building-01",
        "function": "office",
        "height": 45.5,
        "storeysAboveGround": 15
      }
    ]
  },
  
  "3dtiles:tileset": {
    "version": "1.0",
    "geometricError": 70,
    "root": {
      "boundingVolume": {
        "region": [-122.4194, 37.7749, -122.4193, 37.7750, 0, 100]
      }
    }
  }
}
```

### Interactive Environment with Authentication

Combining Schema.org, glTF, USD, and C2PA:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "Place",
  "name": "Interactive Plaza",
  "description": "Public plaza with interactive elements",
  
  "gltf:scene": {
    "nodes": ["plaza", "kiosk", "displays"],
    "animations": ["ambient", "interact"]
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  "usd:variants": {
    "timeOfDay": ["day", "night"],
    "weather": ["clear", "rain"]
  },
  
  "c2pa:claims": [
    {
      "title": "Original Creation",
      "dateCreated": "2024-03-15T10:30:00Z",
      "assets": ["plaza", "kiosk"]
    },
    {
      "title": "Display Content",
      "dateCreated": "2024-03-16T14:20:00Z",
      "assets": ["displays"]
    }
  ]
}
```

## Best Practices

### 1. Maintain Clear Structure
- Group related properties under their standard's namespace
- Keep logical separation between different standards
- Use consistent naming conventions
- Document relationships between standards
- Follow each standard's conventions

### 2. Use Proper References
- Reference IDs should be consistent across standards
- Use explicit relationships between components
- Maintain clear parent-child relationships
- Document cross-standard dependencies
- Validate references across standards

### 3. Avoid Redundancy
- Don't duplicate information across standards
- Use references instead of copying data
- Choose the most appropriate standard for each piece of information
- Keep related data together
- Document why specific standards were chosen

### 4. Version Management
- Include version information for each standard
- Document any standard-specific constraints
- Consider compatibility requirements
- Plan for standard updates
- Maintain version history

## Common Combinations

### 3D Assets
- Schema.org + glTF: Basic 3D models
- glTF + C2PA: Authenticated 3D assets
- USD + glTF: Complex scene compositions

### Virtual Environments
- Schema.org + USD: Basic environments
- USD + CityGML: Urban environments
- CityGML + 3D Tiles: Large-scale environments

### Interactive Content
- Schema.org + X3D: Web-based interaction
- glTF + MPEG-4: Media integration
- USD + X3D: Complex interactive scenes

## Next Steps

- Review specific [Standards](/standards/overview.md) for detailed properties
- See [Validation Tools](../tools/validation.md) for testing combined metadata
- Check [Best Practices](/implementation/best-practices.md) for implementation guidance

Remember that not all standards need to be combined. Only include the standards that are necessary for your specific use case.
