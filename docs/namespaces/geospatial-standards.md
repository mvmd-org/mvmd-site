---
sidebar_position: 4
---

# Geospatial Standards Namespaces

This page covers how to integrate geospatial standards into your metadata through namespaces.

## Supported Geospatial Standards

### 3D Tiles

[3D Tiles](https://www.ogc.org/standards/3dtiles) is an OGC standard for streaming massive 3D geospatial datasets.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
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

[CityJSON](https://www.cityjson.org/) is a JSON-based encoding for storing 3D city models.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
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
  "contentUrl": "https://example.com/districts/downtown.json",
  "encodingFormat": "application/cityjson"
}
```

#### Embedding Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
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

- Include spatial reference systems for accurate positioning
- Use standard-specific bounding volumes for better interoperability
- Consider level of detail requirements for your application
- Use linking for large datasets and embedding for essential metadata

## Related Concepts

- [Core Metadata Concepts](../concepts/core-metadata-concepts.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md)
- [Implementation Best Practices](../implementation/best-practices.md) 