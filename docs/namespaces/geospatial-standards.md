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

[CityJSON](https://cityjson.org/) is a format for encoding 3D city models with a JSON encoding of the CityGML data model. It's designed for web-based applications and services.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "cityJson": "https://cityjson.org/ns/"
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
  "name": "Downtown District Model",
  "contentUrl": "https://example.com/downtown.json",
  "encodingFormat": "application/cityjson"
}
```

#### Embedding Example

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

## Implementation Considerations

- **Spatial References**: Always include spatial reference systems for accurate positioning
- **Bounding Volumes**: Define clear boundaries for geospatial content
- **Level of Detail**: Consider progressive loading for large datasets
- **Coordinate Precision**: Balance precision with data size for performance

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 