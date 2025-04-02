---
sidebar_position: 4
---

# Geospatial Standards Namespaces

This page covers how to integrate geospatial standards into your metadata through namespaces.

## Supported Geospatial Standards

### 3D Tiles

[3D Tiles](https://www.ogc.org/standards/3dtiles) is an OGC standard for streaming massive 3D geospatial datasets. It enables efficient visualization of large-scale 3D content such as photogrammetry, 3D buildings, BIM/CAD, point clouds, and vector data.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
  }
}
```

#### Linking Example

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

#### Embedding Example

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

### CityJSON

[CityJSON](https://www.cityjson.org/) is a JSON-based encoding for storing 3D city models. It is a compact and developer-friendly format that implements the CityGML data model, making it ideal for web and mobile applications.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "cityjson": "https://www.cityjson.org/ns/"
  }
}
```

#### Linking Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Map",
  "name": "Urban District",
  "contentUrl": "https://example.com/downtown.json",
  "encodingFormat": "application/cityjson"
}
```

#### Embedding Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "cityjson": "https://www.cityjson.org/ns/"
  },
  "@type": "Map",
  "name": "Urban District",
  "cityjson:version": "1.0",
  "cityjson:metadata": {
    "referenceSystem": "https://www.opengis.net/def/crs/EPSG/0/4326"
  },
  "cityjson:CityObjects": {
    "building_1": {
      "type": "Building",
      "attributes": {
        "function": "residential",
        "yearBuilt": 2010,
        "height": 12.5
      }
    }
  }
}
```

## Implementation Considerations

- **Spatial References**: Always include spatial reference systems for accurate positioning
- **Bounding Volumes**: Define clear boundaries for geospatial content
- **Level of Detail**: Consider progressive loading for large datasets
- **Coordinate Precision**: Balance precision with data size for performance

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 