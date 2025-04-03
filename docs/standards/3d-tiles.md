---
sidebar_position: 11
---

# 3D Tiles

This page covers how to integrate 3D Tiles into your metadata through namespaces.

## About 3D Tiles

[3D Tiles](https://www.ogc.org/standards/3DTiles) is an open standard for streaming massive heterogeneous 3D geospatial datasets. Developed by Cesium and adopted as an Open Geospatial Consortium (OGC) Community Standard, 3D Tiles defines a spatial data structure and a set of tile formats designed to efficiently stream and render massive 3D geospatial content such as terrain, buildings, photogrammetry, and point clouds.

3D Tiles enables streaming and rendering of large-scale 3D geospatial data across devices and platforms by implementing a hierarchical level of detail structure that allows clients to request only the necessary data based on the current view position, orientation, and zoom level.

## Core 3D Tiles Concepts

Key concepts in 3D Tiles that are relevant to metadata integration:

- **Tileset**: Hierarchical structure of tiles with level-of-detail capability
- **Tile Formats**: Specific formats for different content types (b3dm, i3dm, pnts, cmpt)
- **Bounding Volumes**: Spatial boundaries for efficient culling and selection
- **Refinement**: Replacement or additive strategies for level of detail
- **Metadata**: Asset, feature, and content property information
- **Styling**: Runtime styling capabilities based on feature properties
- **Batched Content**: Multiple objects grouped together for efficient rendering
- **Instanced Content**: Repeated elements like trees, furniture, etc.

## Implementing the 3D Tiles Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "3dtiles": "https://www.ogc.org/standards/3DTiles/schemas/"
  }
}
```

### Linking Example

When referencing external 3D Tiles assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "name": "City Buildings Tileset",
  "contentUrl": "https://example.com/tilesets/city/tileset.json",
  "encodingFormat": "application/json;type=3dtiles"
}
```

With version and detailed information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "name": "City Buildings Tileset",
  "contentUrl": "https://example.com/tilesets/city/tileset.json",
  "encodingFormat": "application/json;type=3dtiles",
  "version": "1.1",
  "spatialCoverage": {
    "@type": "GeoShape",
    "box": "40.730610,-73.935242 40.753182,-73.981903"
  },
  "contentSize": "2.5 GB",
  "dateCreated": "2023-05-15"
}
```

### Embedding Example

When embedding 3D Tiles metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://www.ogc.org/standards/3DTiles/schemas/"
  },
  "@type": "Dataset",
  "name": "City Buildings Tileset",
  "3dtiles:version": "1.1",
  "3dtiles:asset": {
    "version": "1.1",
    "tilesetVersion": "2.0",
    "gltfUpAxis": "Z"
  },
  "3dtiles:geometricError": 500,
  "3dtiles:root": {
    "boundingVolume": {
      "region": [
        -1.3197209591796106,
        0.6988424910858092,
        -1.3196390408203893,
        0.6989055089141921,
        0,
        500
      ]
    },
    "geometricError": 100,
    "refine": "ADD",
    "children": 8
  },
  "3dtiles:properties": {
    "maximum": {
      "height": 300,
      "area": 15000,
      "buildingYear": 2023
    },
    "minimum": {
      "height": 1,
      "area": 10,
      "buildingYear": 1850
    }
  },
  "3dtiles:contentTypes": ["b3dm", "pnts", "i3dm"],
  "3dtiles:statistics": {
    "tileCount": 5428,
    "pointCount": 50000000,
    "featureCount": 25000,
    "maxDepth": 20
  }
}
```

## Common Use Cases

3D Tiles is used in a variety of geospatial applications:

- Smart city visualization
- Urban planning and analysis
- Digital twin creation for cities and infrastructure
- Real estate development visualization
- Infrastructure asset management
- Environmental monitoring and analysis
- Cultural heritage preservation
- Disaster response planning
- Transportation planning and simulation
- Augmented reality for geospatial contexts

## Implementation Examples

### Basic Example

A simple 3D Tiles tileset reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "name": "Downtown Buildings 3D Model",
  "description": "3D Tiles dataset of downtown buildings with height and construction year attributes",
  "contentUrl": "https://example.com/tilesets/downtown/tileset.json",
  "encodingFormat": "application/json;type=3dtiles",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "dateCreated": "2023-03-12"
}
```

### Complete Example

For a complete 3D Tiles dataset with detailed metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://www.ogc.org/standards/3DTiles/schemas/"
  },
  "@type": "Dataset",
  "name": "Metropolitan Area Digital Twin",
  "description": "Comprehensive 3D tileset of the metropolitan area including buildings, terrain, vegetation, and infrastructure",
  "contentUrl": "https://example.com/tilesets/metro-area/tileset.json",
  "encodingFormat": "application/json;type=3dtiles",
  "creator": {
    "@type": "Organization",
    "name": "Geospatial Digital Twin Consortium",
    "url": "https://geospatial-dtc.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "dateCreated": "2023-02-18",
  "dateModified": "2023-08-05",
  "spatialCoverage": {
    "@type": "GeoShape",
    "box": "34.0522,-118.2437 34.1522,-118.1437"
  },
  "contentSize": "4.8 GB",
  "3dtiles:version": "1.1",
  "3dtiles:asset": {
    "version": "1.1",
    "tilesetVersion": "2.3",
    "gltfUpAxis": "Z"
  },
  "3dtiles:schema": {
    "classes": {
      "building": {
        "properties": {
          "height": {"type": "FLOAT64"},
          "area": {"type": "FLOAT64"},
          "buildingType": {"type": "STRING"},
          "constructionYear": {"type": "INT32"},
          "energyRating": {"type": "STRING"},
          "occupancy": {"type": "STRING"},
          "hasUnderground": {"type": "BOOLEAN"}
        }
      },
      "vegetation": {
        "properties": {
          "height": {"type": "FLOAT32"},
          "species": {"type": "STRING"},
          "crownDiameter": {"type": "FLOAT32"},
          "age": {"type": "INT16"}
        }
      },
      "road": {
        "properties": {
          "type": {"type": "STRING"},
          "width": {"type": "FLOAT32"},
          "material": {"type": "STRING"},
          "lanes": {"type": "INT8"}
        }
      }
    }
  },
  "3dtiles:metadata": {
    "tilesetSource": "Combined photogrammetry, LiDAR, and GIS data",
    "captureDate": "2022-11-15 to 2023-01-20",
    "processingSoftware": "Geospatial Processing Suite 4.5",
    "coordinateSystem": "EPSG:4326",
    "verticalDatum": "NAVD88",
    "positionalAccuracy": "0.15m horizontal, 0.25m vertical",
    "tilesetContact": "support@geospatial-dtc.example.org"
  },
  "3dtiles:layers": [
    {
      "name": "buildings",
      "description": "3D buildings with attributes",
      "contentType": "b3dm",
      "featureCount": 25430,
      "attributes": ["height", "buildingType", "constructionYear"]
    },
    {
      "name": "terrain",
      "description": "Detailed terrain mesh",
      "contentType": "cmpt",
      "resolution": "0.5m"
    },
    {
      "name": "vegetation",
      "description": "Trees and other vegetation",
      "contentType": "i3dm",
      "featureCount": 156280,
      "attributes": ["height", "species"]
    },
    {
      "name": "pointclouds",
      "description": "LiDAR point clouds for select areas",
      "contentType": "pnts",
      "pointCount": 78500000,
      "pointSpacing": "0.1m"
    }
  ],
  "3dtiles:extensions": [
    "3DTILES_implicit_tiling",
    "3DTILES_metadata",
    "3DTILES_content_gltf"
  ],
  "3dtiles:statistics": {
    "tileCount": 18254,
    "maxDepth": 22,
    "totalByteSize": 4.8e9,
    "maximumTriangleCount": 12000000,
    "maximumPointCount": 78500000
  },
  "3dtiles:optimizationFeatures": {
    "preloadAncestors": true,
    "unloadSkippedLevels": true,
    "skipLevelOfDetail": true,
    "maximumScreenSpaceError": 16
  }
}
```

### Smart City Example

Example for smart city application with analytics properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "3dtiles": "https://www.ogc.org/standards/3DTiles/schemas/"
  },
  "@type": "Dataset",
  "name": "Smart City Dashboard 3D Assets",
  "description": "Interactive 3D representation of city assets with real-time sensor data integration",
  "contentUrl": "https://smartcity.example.org/tilesets/dashboard/tileset.json",
  "encodingFormat": "application/json;type=3dtiles",
  "creator": {
    "@type": "Organization",
    "name": "Smart City Initiative",
    "url": "https://smartcity.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "dateCreated": "2023-05-28",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "analyticsIntegration",
      "name": "Analytics Integration",
      "value": {
        "dataIntegrationAPI": "https://smartcity.example.org/api/v2/",
        "realTimeDataSources": [
          {
            "name": "trafficSensors",
            "updateFrequency": "30s",
            "coverage": "major roads and intersections",
            "visualizationType": "color coding and flow lines"
          },
          {
            "name": "airQualitySensors",
            "updateFrequency": "5min",
            "coverage": "citywide grid at 500m intervals",
            "visualizationType": "heat map overlay"
          },
          {
            "name": "energyConsumption",
            "updateFrequency": "15min",
            "coverage": "all municipal buildings and 60% of commercial buildings",
            "visualizationType": "building color and glow effects"
          },
          {
            "name": "pedestrianActivity",
            "updateFrequency": "5min",
            "coverage": "downtown and commercial districts",
            "visualizationType": "dynamic dot density"
          }
        ],
        "historicalDataAccess": "https://smartcity.example.org/api/v2/historical/",
        "predictionModels": [
          "traffic flow prediction",
          "energy demand forecasting",
          "air quality prediction"
        ]
      }
    }
  ],
  "3dtiles:version": "1.1",
  "3dtiles:asset": {
    "version": "1.1",
    "tilesetVersion": "3.2",
    "gltfUpAxis": "Z"
  },
  "3dtiles:extensions": [
    "3DTILES_metadata",
    "3DTILES_implicit_tiling",
    "3DTILES_time_dynamic_points"
  ],
  "3dtiles:styling": {
    "styles": [
      {
        "name": "default",
        "description": "Standard city visualization"
      },
      {
        "name": "trafficAnalysis",
        "description": "Road network colored by traffic volume"
      },
      {
        "name": "energyEfficiency",
        "description": "Buildings colored by energy consumption"
      },
      {
        "name": "airQuality",
        "description": "Air quality overlay on city model"
      },
      {
        "name": "solarPotential",
        "description": "Building rooftops colored by solar energy potential"
      }
    ]
  }
}
```

## JSON Schema Validation

For validating 3D Tiles namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "3D Tiles Namespace Schema",
  "type": "object",
  "properties": {
    "3dtiles:version": {
      "type": "string",
      "description": "3D Tiles specification version"
    },
    "3dtiles:asset": {
      "type": "object",
      "description": "Asset information about the tileset",
      "properties": {
        "version": { "type": "string" },
        "tilesetVersion": { "type": "string" },
        "gltfUpAxis": { 
          "type": "string",
          "enum": ["X", "Y", "Z"]
        }
      }
    },
    "3dtiles:geometricError": {
      "type": "number",
      "description": "The error, in meters, introduced if this tileset is not rendered"
    },
    "3dtiles:root": {
      "type": "object",
      "description": "Information about the root tile"
    },
    "3dtiles:properties": {
      "type": "object",
      "description": "Object containing property values for the tileset"
    },
    "3dtiles:contentTypes": {
      "type": "array",
      "description": "Tile content types used in the tileset",
      "items": { 
        "type": "string",
        "enum": ["b3dm", "i3dm", "pnts", "cmpt", "gltf", "glb"]
      }
    },
    "3dtiles:schema": {
      "type": "object",
      "description": "Schema for feature metadata in the tileset"
    },
    "3dtiles:metadata": {
      "type": "object",
      "description": "Additional metadata about the tileset"
    },
    "3dtiles:layers": {
      "type": "array",
      "description": "Layers or feature types in the tileset",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "description": { "type": "string" },
          "contentType": { "type": "string" }
        },
        "required": ["name"]
      }
    },
    "3dtiles:extensions": {
      "type": "array",
      "description": "3D Tiles extensions used in the tileset",
      "items": { "type": "string" }
    },
    "3dtiles:statistics": {
      "type": "object",
      "description": "Statistical information about the tileset"
    },
    "3dtiles:optimizationFeatures": {
      "type": "object",
      "description": "Optional features for client-side optimization"
    },
    "3dtiles:styling": {
      "type": "object",
      "description": "Styling options for the tileset"
    }
  }
}
```

## JSON-LD Context

The 3D Tiles namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "3dtiles": "https://www.ogc.org/standards/3DTiles/schemas/",
    "3dtiles:version": { "@id": "3dtiles:version" },
    "3dtiles:asset": { "@id": "3dtiles:asset" },
    "3dtiles:geometricError": { "@id": "3dtiles:geometricError" },
    "3dtiles:root": { "@id": "3dtiles:root" },
    "3dtiles:properties": { "@id": "3dtiles:properties" },
    "3dtiles:contentTypes": { "@id": "3dtiles:contentTypes" },
    "3dtiles:schema": { "@id": "3dtiles:schema" },
    "3dtiles:metadata": { "@id": "3dtiles:metadata" },
    "3dtiles:layers": { "@id": "3dtiles:layers" },
    "3dtiles:extensions": { "@id": "3dtiles:extensions" },
    "3dtiles:statistics": { "@id": "3dtiles:statistics" },
    "3dtiles:optimizationFeatures": { "@id": "3dtiles:optimizationFeatures" },
    "3dtiles:styling": { "@id": "3dtiles:styling" }
  }
}
```

## Implementation Considerations

When implementing the 3D Tiles namespace, keep these considerations in mind:

- **Client Support**: Ensure target client applications support the 3D Tiles version used
- **Streaming Performance**: Balance tile size and detail for optimal streaming performance
- **Level of Detail**: Configure appropriate geometric error values for view-dependent LOD
- **Feature Metadata**: Design a clear schema for searchable and filterable feature attributes
- **Extensions**: Document any extensions used to ensure client compatibility
- **Styling**: Consider runtime styling needs when structuring the tileset
- **Coordinate Systems**: Be explicit about the coordinate system and vertical datum
- **Data Size**: Implement appropriate optimizations for large datasets
- **Integration**: Plan for integration with other data sources like real-time sensors

## Related Documentation

- [CityJSON Namespace](./cityjson.md)
- [Digital Twin Integration Profile](../integration-profiles/digital-twin.md)
- [Scene Integration Profile](../integration-profiles/scene.md)
- [Discovery and Search Optimization](../implementation/discovery-optimization.md) 