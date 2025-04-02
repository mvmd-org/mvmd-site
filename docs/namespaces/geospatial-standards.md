---
sidebar_position: 4
---

# Geospatial Standards Namespaces

This page covers how to integrate geospatial standards into your metadata through namespaces.

## Supported Geospatial Standards

## CityJSON

### Overview and Use Cases

[CityJSON](https://cityjson.org/) is a format for encoding 3D city models with a JSON encoding of the CityGML data model. It's designed for web-based applications and services.

Common use cases include:
- Urban planning and development visualization
- Smart city applications
- Environmental simulations
- City asset management
- Cultural heritage preservation and tourism

### Core Properties and Extensions

CityJSON provides a structured approach to city modeling:

- **Core Properties**: cityObjects, vertices, appearance, metadata
- **City Objects**: Buildings, bridges, roads, vegetation, water bodies
- **Common Extensions**:
  - Noise: For noise simulation data
  - Energy: For energy simulation data
  - Transportation: For advanced transportation features
  - Utilities: For utility network data

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "cityJson": "https://cityjson.org/ns/"
  }
}
```

### External Reference Patterns

When linking to CityJSON assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Map",
  "name": "Downtown District Model",
  "contentUrl": "https://example.com/downtown.json",
  "encodingFormat": "application/cityjson"
}
```

For version-specific references:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Map",
  "name": "Downtown District Model",
  "contentUrl": "https://example.com/downtown.json",
  "encodingFormat": "application/cityjson",
  "version": "1.1",
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "box": "13.3365 52.5143 13.3374 52.5162"
    }
  }
}
```

### Embedding Patterns

When embedding CityJSON metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityJson": "https://cityjson.org/ns/"
  },
  "@type": "Map",
  "name": "Downtown District Model",
  "cityJson:metadata": {
    "geographicalExtent": [
      13.3365, 52.5143, 0,
      13.3374, 52.5162, 30
    ],
    "referenceSystem": "urn:ogc:def:crs:EPSG::4326"
  },
  "cityJson:cityObjects": {
    "type": "summary",
    "buildings": 42,
    "roads": 17,
    "vegetation": 8
  }
}
```

### Implementation Examples

Complete urban district with semantic information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityJson": "https://cityjson.org/ns/"
  },
  "@type": "Map",
  "name": "Smart City District",
  "description": "Digital twin of the innovation district",
  "contentUrl": "https://example.com/district.json",
  "encodingFormat": "application/cityjson",
  "cityJson:version": "1.1",
  "cityJson:metadata": {
    "title": "Innovation District Digital Twin",
    "referenceSystem": "urn:ogc:def:crs:EPSG::4326",
    "geographicalExtent": [
      13.3365, 52.5143, 0,
      13.3374, 52.5162, 30
    ],
    "datasetPointOfContact": {
      "contactName": "City Planning Department",
      "contactType": "organization",
      "email": "planning@example.gov"
    }
  },
  "cityJson:cityObjects": {
    "buildings": {
      "count": 42,
      "attributes": ["usage", "yearOfConstruction", "height", "storeysAboveGround"],
      "lod": [2, 3]
    },
    "roads": {
      "count": 17,
      "attributes": ["width", "surfaceMaterial"],
      "lod": [1, 2]
    },
    "vegetation": {
      "count": 8,
      "attributes": ["species", "height"],
      "lod": [1, 2]
    }
  },
  "cityJson:extensions": [
    "Energy-ADE",
    "Noise-ADE"
  ],
  "cityJson:transformations": {
    "scale": [0.001, 0.001, 0.001],
    "translate": [4424166.8, 5482355.5, 310.0]
  }
}
```

### Best Practices

- Use compression techniques for large CityJSON files
- Implement proper LOD (Level of Detail) structure for efficient visualization
- Follow the CityGML semantic model for maximum interoperability
- Include proper metadata for coordinate reference systems
- Consider splitting very large city models into tiles for performance

## 3D Tiles

### Overview and Use Cases

[3D Tiles](https://www.ogc.org/standards/3dtiles) is an OGC standard for streaming massive 3D geospatial datasets. It enables efficient visualization of large-scale 3D content such as photogrammetry, 3D buildings, BIM/CAD, point clouds, and vector data.

Common use cases include:
- Streaming massive urban models
- Visualizing high-resolution terrain and imagery
- BIM/CAD visualization in geographic context
- Point cloud visualization from LiDAR or photogrammetry
- Mixed reality experiences with geospatial context

### Core Properties and Extensions

3D Tiles offers a tiling approach to large datasets:

- **Core Components**: Tileset, Tile, Content, Bounding Volume
- **Tile Formats**: b3dm (Batched 3D Model), i3dm (Instanced 3D Model), pnts (Points), cmpt (Composite)
- **Common Extensions**:
  - 3DTILES_implicit_tiling: For efficient spatial subdivision
  - 3DTILES_metadata: For associating metadata with tiles
  - 3DTILES_content_gltf: For using glTF directly as tile content

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  }
}
```

### External Reference Patterns

When linking to 3D Tiles assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Map",
  "name": "City Model",
  "contentUrl": "https://example.com/city/tileset.json",
  "encodingFormat": "application/json"
}
```

For more specific references with style information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  },
  "@type": "Map",
  "name": "City Model",
  "contentUrl": "https://example.com/city/tileset.json",
  "encodingFormat": "application/json",
  "3dtiles:style": "https://example.com/city/style.json",
  "3dtiles:version": "1.0",
  "3dtiles:initialViewpoint": {
    "longitude": -122.4194,
    "latitude": 37.7749,
    "height": 200,
    "heading": 45,
    "pitch": -30
  }
}
```

### Embedding Patterns

When embedding 3D Tiles metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  },
  "@type": "Map",
  "name": "City Model",
  "3dtiles:tileset": {
    "version": "1.0",
    "geometricError": 70,
    "root": {
      "boundingVolume": {
        "region": [-122.4194, 37.7749, -122.4193, 37.7750, 0, 100]
      },
      "content": {
        "url": "root.b3dm"
      },
      "geometricError": 0
    }
  }
}
```

### Implementation Examples

Complete city model with styling and asset information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  },
  "@type": "Map",
  "name": "San Francisco 3D City Model",
  "description": "Detailed 3D model of San Francisco with buildings, terrain, and infrastructure",
  "contentUrl": "https://example.com/sanfrancisco/tileset.json",
  "encodingFormat": "application/json",
  "3dtiles:version": "1.1",
  "3dtiles:asset": {
    "version": "1.1",
    "tilesetVersion": "2023.06.10",
    "gltfUpAxis": "Z"
  },
  "3dtiles:geometricError": 500,
  "3dtiles:root": {
    "boundingVolume": {
      "region": [
        -122.5, 37.7, 
        -122.3, 37.8, 
        0, 300
      ]
    },
    "refine": "REPLACE",
    "geometricError": 100,
    "children": [
      {"summary": "Downtown district tile", "geometricError": 50},
      {"summary": "Mission district tile", "geometricError": 50},
      {"summary": "Marina district tile", "geometricError": 50},
      {"summary": "Richmond district tile", "geometricError": 50}
    ]
  },
  "3dtiles:style": {
    "color": {
      "conditions": [
        ["${height} > 100", "rgba(45, 0, 75, 0.9)"],
        ["${height} > 50", "rgba(102, 71, 151, 0.9)"],
        ["${height} > 25", "rgba(159, 89, 165, 0.9)"],
        ["true", "rgba(212, 106, 126, 0.9)"]
      ]
    },
    "pointSize": 5
  },
  "3dtiles:extensions": [
    "3DTILES_implicit_tiling",
    "3DTILES_metadata"
  ],
  "3dtiles:extras": {
    "dataSource": "City Planning Department",
    "dataDate": "2023-01-15",
    "copyright": "© Example City Government"
  }
}
```

### Best Practices

- Optimize tilesets for streaming performance using appropriate geometric error values
- Use implicit tiling for very large datasets
- Apply styling for visual differentiation of features
- Maintain proper bounding volumes for efficient culling
- Create multiple tilesets at different resolutions for varying use cases
- Consider appropriate tile formats based on content type (buildings vs point clouds)

## GeoJSON

### Overview and Use Cases

[GeoJSON](https://geojson.org/) is a format for encoding geographic data structures using JSON. It supports various geometry types and is widely used for web mapping applications.

Common use cases include:
- Web mapping applications
- POI (Points of Interest) data
- Geographic boundaries and regions
- Route and path visualization
- Data visualization with geographic context

### Core Properties and Extensions

GeoJSON offers a simple yet powerful structure:

- **Geometry Types**: Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon
- **Features**: Objects with properties and geometry
- **Feature Collections**: Sets of features
- **Common Extensions**:
  - TopoJSON: For topology preservation
  - GeoJSON-LD: For linked data context
  - Simplestyle-spec: For styling information

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "geoJson": "https://geojson.org/schema/"
  }
}
```

### External Reference Patterns

When linking to GeoJSON assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Map",
  "name": "City Parks",
  "contentUrl": "https://example.com/parks.geojson",
  "encodingFormat": "application/geo+json"
}
```

### Embedding Patterns

When embedding GeoJSON metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "geoJson": "https://geojson.org/schema/"
  },
  "@type": "Map",
  "name": "City Parks",
  "geoJson:type": "FeatureCollection",
  "geoJson:features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Central Park",
        "category": "urban park",
        "area": 341
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-73.9747, 40.7911],
            [-73.9494, 40.7911],
            [-73.9494, 40.7682],
            [-73.9747, 40.7682],
            [-73.9747, 40.7911]
          ]
        ]
      }
    }
  ]
}
```

### Implementation Examples

Points of interest collection with styling:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "geoJson": "https://geojson.org/schema/"
  },
  "@type": "Map",
  "name": "Tourist Attractions",
  "description": "Major tourist attractions in the city center",
  "contentUrl": "https://example.com/attractions.geojson",
  "encodingFormat": "application/geo+json",
  "geoJson:type": "FeatureCollection",
  "geoJson:features": [
    {
      "type": "Feature",
      "id": "att-001",
      "properties": {
        "name": "Art Museum",
        "category": "cultural",
        "rating": 4.8,
        "hours": "9am-5pm",
        "admission": "$15",
        "marker-color": "#3498db",
        "marker-size": "medium",
        "marker-symbol": "art-gallery"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.9632, 40.7829]
      }
    },
    {
      "type": "Feature",
      "id": "att-002",
      "properties": {
        "name": "Observation Deck",
        "category": "landmark",
        "rating": 4.9,
        "hours": "8am-10pm",
        "admission": "$30",
        "marker-color": "#e74c3c",
        "marker-size": "large",
        "marker-symbol": "monument"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-73.9857, 40.7484]
      }
    }
  ],
  "geoJson:bbox": [
    -74.0060, 40.7000,
    -73.9400, 40.8000
  ],
  "geoJson:metadata": {
    "generated": "2023-06-30",
    "dataSource": "City Tourism Board",
    "contactEmail": "tourism@example.com"
  },
  "geoJson:style": {
    "fill": "#7ccc63",
    "fill-opacity": 0.4,
    "stroke": "#41a337",
    "stroke-width": 2,
    "stroke-opacity": 0.8
  }
}
```

### Best Practices

- Keep GeoJSON files small for better performance
- Use appropriate precision for coordinates (5-6 decimal places is usually sufficient)
- Include clear property names and descriptions
- Consider TopoJSON for complex boundary datasets
- Implement proper styling metadata for better visualization
- Include bounding box information for faster spatial filtering

## Implementation Considerations

- **Spatial References**: Always include spatial reference systems for accurate positioning
- **Bounding Volumes**: Define clear boundaries for geospatial content
- **Level of Detail**: Consider progressive loading for large datasets
- **Coordinate Precision**: Balance precision with data size for performance
- **Integration with Non-Spatial Data**: Consider how geospatial content connects to other metadata
- **Client Capabilities**: Be aware of implementation support for different geospatial formats

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 