---
sidebar_position: 10
---

# CityJSON Namespace

This page covers how to integrate CityJSON into your metadata through namespaces.

## About CityJSON

[CityJSON](https://www.cityjson.org/) is a JSON-based encoding for storing 3D city models, particularly semantic city objects like buildings, roads, vegetation, water bodies, and city furniture. It is a compact and developer-friendly alternative to CityGML that offers an easy-to-use API.

CityJSON implements a subset of the CityGML data model, making it ideal for web and mobile applications focused on urban environments and digital twins. Its JSON structure makes it easier to process and visualize urban data compared to the XML structure of CityGML.

## Core CityJSON Concepts

Key concepts in CityJSON that are relevant to metadata integration:

- **City Objects**: Buildings, roads, vegetation, water bodies, bridges, etc.
- **Semantic Surfaces**: Walls, roofs, ground surfaces, etc. with semantic properties
- **Geometry Templates**: Reusable geometry definitions
- **Attributes**: Standard and custom attributes for objects
- **Extensions**: Mechanism to extend the core data model
- **Levels of Detail**: Multi-resolution representations (LoD)
- **Metadata**: Information about the dataset including coordinate reference system
- **Appearances**: Material and texture information for visualization

## Implementing the CityJSON Namespace

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "cityjson": "https://www.cityjson.org/schemas/"
  }
}
```

### Linking Example

When referencing external CityJSON assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "name": "Downtown District Model",
  "contentUrl": "https://example.com/urban/downtown.json",
  "encodingFormat": "application/cityjson"
}
```

With version and boundary information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "name": "Downtown District Model",
  "contentUrl": "https://example.com/urban/downtown.json",
  "encodingFormat": "application/cityjson",
  "version": "1.1",
  "spatialCoverage": {
    "@type": "GeoShape",
    "box": "40.730610,-73.935242 40.753182,-73.981903"
  }
}
```

### Embedding Example

When embedding CityJSON metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityjson": "https://www.cityjson.org/schemas/"
  },
  "@type": "Dataset",
  "name": "Downtown District Model",
  "cityjson:version": "1.1",
  "cityjson:metadata": {
    "referenceSystem": "https://www.opengis.net/def/crs/EPSG/0/4326",
    "geographicalExtent": [
      -73.981903, 40.730610, 0,
      -73.935242, 40.753182, 200
    ],
    "datasetTitle": "NYC Downtown District",
    "datasetDate": "2023-08-15",
    "datasetReferenceDate": "2023-08-15"
  },
  "cityjson:transform": {
    "scale": [0.001, 0.001, 0.1],
    "translate": [635577.79, 5639315.24, 0]
  },
  "cityjson:cityObjects": {
    "summary": {
      "Building": 1250,
      "Road": 215,
      "Vegetation": 430,
      "WaterBody": 12,
      "CityFurniture": 328
    },
    "lodSummary": {
      "lod1": 2235,
      "lod2": 1250,
      "lod3": 42
    }
  }
}
```

## Common Use Cases

CityJSON is used in a variety of urban modeling applications:

- Smart city initiatives
- Urban planning and simulation
- Environmental analysis
- Navigation and mobility services
- Digital twins of cities
- Energy modeling and simulation
- Noise and pollution mapping
- Flood risk assessment
- Architectural context visualization
- Historic preservation and documentation

## Implementation Examples

### Basic Example

A simple CityJSON dataset reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "name": "Central Park Area Model",
  "description": "3D city model covering the Central Park area in New York City",
  "contentUrl": "https://example.com/nyc/central-park.json",
  "encodingFormat": "application/cityjson",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "dateCreated": "2023-05-22"
}
```

### Complete Example

For a complete urban dataset with detailed metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "cityjson": "https://www.cityjson.org/schemas/"
  },
  "@type": "Dataset",
  "name": "Amsterdam Canal District",
  "description": "Detailed 3D city model of Amsterdam's historic canal district including buildings, bridges, and urban vegetation",
  "contentUrl": "https://example.com/amsterdam/canal-district.json",
  "encodingFormat": "application/cityjson",
  "creator": {
    "@type": "Organization",
    "name": "Urban Digital Twin Initiative",
    "url": "https://urbantwin.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "dateCreated": "2023-04-10",
  "dateModified": "2023-08-15",
  "spatialCoverage": {
    "@type": "GeoShape",
    "box": "52.3650,4.8850 52.3750,4.9050"
  },
  "contentSize": "256 MB",
  "cityjson:version": "1.1",
  "cityjson:metadata": {
    "referenceSystem": "https://www.opengis.net/def/crs/EPSG/0/7415",
    "geographicalExtent": [
      4.8850, 52.3650, -2, 
      4.9050, 52.3750, 30
    ],
    "datasetTitle": "Amsterdam Canal District 3D City Model",
    "datasetDate": "2023-04-10",
    "datasetReferenceDate": "2023-03-15",
    "datasetLanguage": "en",
    "datasetTopicCategory": "imageryBaseMapsEarthCover",
    "datasetPointOfContact": {
      "contactName": "Urban Digital Twin Initiative",
      "contactType": "organization",
      "contactEmail": "info@urbantwin.example.org"
    },
    "datasetRights": "CC BY-NC 4.0",
    "datasetAccessRights": "Public",
    "lineage": "Created from aerial LiDAR survey and cadastral data"
  },
  "cityjson:transform": {
    "scale": [0.001, 0.001, 0.1],
    "translate": [121084.05, 487036.53, 0]
  },
  "cityjson:cityObjects": {
    "summary": {
      "Building": 3245,
      "Bridge": 62,
      "Road": 315,
      "WaterBody": 28,
      "Vegetation": 512,
      "CityFurniture": 624
    },
    "lodSummary": {
      "lod1": 4786,
      "lod2": 3245,
      "lod3": 142
    },
    "semantics": {
      "usesSurfaceTypes": ["GroundSurface", "WallSurface", "RoofSurface", "Door", "Window"],
      "usesAttributes": ["yearOfConstruction", "measuredHeight", "function", "roofType"]
    }
  },
  "cityjson:appearances": {
    "materials": 124,
    "textures": 286,
    "themes": ["default", "summer", "winter", "historical"]
  },
  "cityjson:extensions": [
    "Noise",
    "Energy",
    "UtilityNetwork"
  ]
}
```

### Urban Planning Example

Example for urban planning and simulation with additional properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "cityjson": "https://www.cityjson.org/schemas/"
  },
  "@type": "Dataset",
  "name": "Urban Redevelopment Zone",
  "description": "3D model of urban redevelopment zone with current buildings and proposed development scenarios",
  "contentUrl": "https://planning.example.org/models/redevelopment-zone.json",
  "encodingFormat": "application/cityjson",
  "creator": {
    "@type": "Organization",
    "name": "City Planning Department",
    "url": "https://planning.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "dateCreated": "2023-06-18",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "planningMetadata",
      "name": "Planning Metadata",
      "value": {
        "projectName": "Downtown Revitalization",
        "projectPhase": "Preliminary Assessment",
        "projectTimeline": "2023-2027",
        "scenarioCount": 3,
        "zoningInformation": "Mixed-use commercial/residential with height limits",
        "targetDensity": "Medium-high density",
        "sustainabilityGoals": ["Net zero carbon", "40% green space", "50% reduction in water usage"],
        "publicTransportAccess": "High - within 300m of metro station",
        "stakeholderFeedback": "https://planning.example.org/feedback/downtown"
      }
    }
  ],
  "cityjson:version": "1.1",
  "cityjson:metadata": {
    "referenceSystem": "https://www.opengis.net/def/crs/EPSG/0/3857",
    "geographicalExtent": [
      -122.3320, 47.6062, 0,
      -122.3220, 47.6162, 120
    ],
    "datasetTitle": "Downtown Revitalization Project Area",
    "datasetDate": "2023-06-18"
  },
  "cityjson:extensions": [
    "Scenario",
    "Planning",
    "Energy",
    "SolarPotential",
    "Traffic"
  ],
  "cityjson:scenarios": [
    {
      "id": "current",
      "name": "Current State",
      "description": "Existing buildings and infrastructure"
    },
    {
      "id": "option-a",
      "name": "Development Option A",
      "description": "High-density residential with commercial ground floor"
    },
    {
      "id": "option-b",
      "name": "Development Option B",
      "description": "Mid-density mixed use with central park"
    }
  ]
}
```

## JSON Schema Validation

For validating CityJSON namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CityJSON Namespace Schema",
  "type": "object",
  "properties": {
    "cityjson:version": {
      "type": "string",
      "description": "CityJSON specification version"
    },
    "cityjson:metadata": {
      "type": "object",
      "description": "Metadata about the CityJSON dataset",
      "properties": {
        "referenceSystem": {
          "type": "string",
          "description": "Coordinate reference system as a URI"
        },
        "geographicalExtent": {
          "type": "array",
          "description": "Bounding box as [minx, miny, minz, maxx, maxy, maxz]",
          "items": { "type": "number" },
          "minItems": 6,
          "maxItems": 6
        },
        "datasetTitle": { "type": "string" },
        "datasetDate": { "type": "string" },
        "datasetReferenceDate": { "type": "string" },
        "datasetLanguage": { "type": "string" },
        "datasetTopicCategory": { "type": "string" },
        "datasetPointOfContact": { "type": "object" },
        "datasetRights": { "type": "string" },
        "datasetAccessRights": { "type": "string" },
        "lineage": { "type": "string" }
      }
    },
    "cityjson:transform": {
      "type": "object",
      "description": "Transformation to decompress coordinates",
      "properties": {
        "scale": {
          "type": "array",
          "items": { "type": "number" },
          "minItems": 3,
          "maxItems": 3
        },
        "translate": {
          "type": "array",
          "items": { "type": "number" },
          "minItems": 3,
          "maxItems": 3
        }
      }
    },
    "cityjson:cityObjects": {
      "type": "object",
      "description": "Summary of city objects in the dataset"
    },
    "cityjson:appearances": {
      "type": "object",
      "description": "Summary of appearance information"
    },
    "cityjson:extensions": {
      "type": "array",
      "description": "Extensions used in the CityJSON file",
      "items": { "type": "string" }
    },
    "cityjson:scenarios": {
      "type": "array",
      "description": "Different scenarios included in the dataset",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "description": { "type": "string" }
        },
        "required": ["id", "name"]
      }
    }
  }
}
```

## JSON-LD Context

The CityJSON namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "cityjson": "https://www.cityjson.org/schemas/",
    "cityjson:version": { "@id": "cityjson:version" },
    "cityjson:metadata": { "@id": "cityjson:metadata" },
    "cityjson:transform": { "@id": "cityjson:transform" },
    "cityjson:cityObjects": { "@id": "cityjson:cityObjects" },
    "cityjson:appearances": { "@id": "cityjson:appearances" },
    "cityjson:extensions": { "@id": "cityjson:extensions" },
    "cityjson:scenarios": { "@id": "cityjson:scenarios" }
  }
}
```

## Implementation Considerations

When implementing the CityJSON namespace, keep these considerations in mind:

- **Dataset Size**: CityJSON files can be large, consider strategies for handling large datasets
- **Level of Detail**: Choose appropriate LOD based on application needs and performance requirements
- **Extensions**: Document any extensions used for proper interoperability
- **Coordinate Reference System**: Clearly specify the CRS for proper geospatial alignment
- **Web Optimization**: Consider using tiling strategies for web-based visualization
- **Schema Validation**: Validate against official CityJSON schema for compatibility
- **Semantic Properties**: Leverage semantic properties for rich metadata integration
- **Identifiers**: Maintain consistent identifiers for city objects across datasets

## Related Documentation

- [3D Tiles Namespace](./3d-tiles.md)
- [Digital Twin Integration Profile](../integration-profiles/digital-twin.md)
- [Cross-Platform Asset Implementation](../implementation/cross-platform-assets.md)
- [Discovery and Search Optimization](../implementation/discovery-optimization.md) 