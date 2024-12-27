---
sidebar_position: 1
---

# CityJSON Standard

CityJSON is a JSON-based encoding for storing and exchanging 3D city models, offering a developer-friendly and compact alternative to the traditional GML encoding of the CityGML data model. It facilitates the representation of complex urban features such as buildings, roads, rivers, and vegetation in a structured and accessible format, promoting interoperability and ease of use in various applications, including urban planning, simulation, and analysis.
CityJSON

For detailed information, you can refer to the official CityJSON website: [CityJSON](https://www.cityjson.org/)

## Core Properties

### Building Information

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityjson": "https://www.cityjson.org/specs/2.0.1/"
  },
  "@type": "Place",
  "name": "Office Tower",
  
  "cityjson:building": {
    "function": "office",
    "yearBuilt": 2024,
    "height": 45.5,
    "storeysAboveGround": 15,
    "storeysBelowGround": 2,
    "storeyHeightsAboveGround": [3.5, 3.0, 3.0, 3.0],
    "lod": 3
  }
}
```

### Spatial Structure

```json
{
  "cityjson:spatialStructure": {
    "footprint": {
      "type": "Polygon",
      "coordinates": [[
        [0, 0],
        [0, 20],
        [30, 20],
        [30, 0],
        [0, 0]
      ]],
      "area": 600
    },
    "boundingBox": {
      "lowerCorner": [0, 0, 0],
      "upperCorner": [30, 20, 45.5]
    }
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityjson": "https://www.cityjson.org/specs/2.0.1/"
  },
  "@type": "Place",
  "name": "Corporate Headquarters",
  "description": "Modern office complex with multiple buildings and amenities",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "building-2024-001"
  },
  
  "cityjson:building": {
    "function": "office",
    "usage": "corporate",
    "yearBuilt": 2024,
    "height": 45.5,
    "storeysAboveGround": 15,
    "storeysBelowGround": 2,
    "storeyHeightsAboveGround": [4.5, 3.5, 3.0, 3.0],
    "storeyHeightsBelowGround": [3.5, 3.5],
    "lod": 3,
    "class": "highrise"
  },
  
  "cityjson:spatialStructure": {
    "footprint": {
      "type": "Polygon",
      "coordinates": [[
        [0, 0],
        [0, 40],
        [60, 40],
        [60, 0],
        [0, 0]
      ]],
      "area": 2400
    },
    "boundingBox": {
      "lowerCorner": [0, 0, -7],
      "upperCorner": [60, 40, 45.5]
    },
    "volume": 109200
  },
  
  "cityjson:components": {
    "rooms": [
      {
        "id": "lobby",
        "type": "entrance",
        "floor": 1,
        "height": 4.5,
        "area": 200,
        "access": "public"
      },
      {
        "id": "office-floor-2",
        "type": "office",
        "floor": 2,
        "height": 3.5,
        "area": 1800,
        "access": "private"
      }
    ],
    "installations": [
      {
        "id": "elevator-1",
        "type": "transportation",
        "function": "elevator",
        "serves": "all"
      },
      {
        "id": "hvac-1",
        "type": "building_services",
        "function": "climate_control"
      }
    ]
  },
  
  "cityjson:appearance": {
    "themes": ["day", "night"],
    "materials": [
      {
        "id": "facade",
        "type": "glass",
        "color": [0.7, 0.7, 0.8, 0.6],
        "reflectance": 0.3
      },
      {
        "id": "structure",
        "type": "concrete",
        "color": [0.8, 0.8, 0.8, 1.0]
      }
    ],
    "textures": [
      {
        "id": "facade-texture",
        "url": "https://example.com/textures/glass-facade.jpg",
        "resolution": "2048x2048"
      }
    ]
  },
  
  "cityjson:address": {
    "street": "Innovation Boulevard",
    "number": "100",
    "city": "Metaverse City",
    "country": "Virtual World",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  },
  
  "cityjson:metadata": {
    "source": "architectural_plans",
    "dataQuality": "high",
    "lastUpdate": "2024-03-15",
    "accuracy": 0.1,
    "references": [
      {
        "type": "plans",
        "url": "https://example.com/plans/building-2024-001"
      }
    ]
  }
}
```

## Property Guidelines

### Building Properties
- Specify clear functions
- Include accurate measurements
- Define story information
- Set appropriate LOD
- Document usage types

### Spatial Properties
- Define accurate footprints
- Include bounding boxes
- Calculate volumes
- Specify coordinates
- Document areas

### Component Properties
- List all major rooms
- Document installations
- Define access levels
- Include measurements
- Specify functions

## Best Practices

1. **Structural Organization**
    - Clear component hierarchy
    - Logical spatial layout
    - Proper measurements
    - Accurate coordinates
    - Complete definitions

2. **Level of Detail**
    - Choose appropriate LOD
    - Consistent detail level
    - Balance complexity
    - Consider performance
    - Document accuracy

3. **Component Management**
    - Organize by function
    - Define relationships
    - Include all systems
    - Document access
    - Specify connections

4. **Appearance Handling**
    - Define materials
    - Include textures
    - Support themes
    - Consider lighting
    - Document changes

## Integration Examples

### With USD Environments
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityjson": "https://www.cityjson.org/specs/2.0.1/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",
  "name": "Virtual Office",
  
  "cityjson:building": {
    "function": "office",
    "height": 45.5,
    "lod": 3
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  }
}
```

### With 3D Tiles
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityjson": "https://www.cityjson.org/specs/2.0.1/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  },
  "@type": "Place",
  "name": "City Block",
  
  "cityjson:building": {
    "function": "mixed",
    "lod": 2
  },
  
  "3dtiles:tileset": {
    "geometricError": 70,
    "root": {
      "boundingVolume": {
        "region": [-122.4194, 37.7749, -122.4193, 37.7750, 0, 100]
      }
    }
  }
}
```

## Validation Rules

### Required Properties
- Valid building function
- Accurate measurements
- Proper LOD specification
- Spatial information
- Component details

### Optional Properties
- Appearance data
- Installation details
- Address information
- Metadata references
- Quality parameters

## Common Issues

1. **Spatial Accuracy**
    - Coordinate precision
    - Measurement units
    - Volume calculations
    - Area computations
    - Height references

2. **LOD Management**
    - Detail consistency
    - Performance impact
    - Data volume
    - Update frequency
    - Loading strategies

## Next Steps

- Review [Environment Profile](/implementation/metadata-profiles/environment-profile.md) for integration
- See [3D Tiles Standard](./3d-tiles.md) for large-scale environments
- Check [Validation Tools](../tools/validation.md) for testing
