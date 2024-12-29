---
sidebar_position: 2
---

# 3D Tiles Standard

3D Tiles is an open specification designed for streaming and rendering massive heterogeneous 3D geospatial datasets. Developed by Cesium and adopted as an Open Geospatial Consortium (OGC) Community Standard, 3D Tiles enables efficient visualization and interaction with large-scale 3D data, including photogrammetry, 3D buildings, BIM/CAD models, and point clouds.
Open Geospatial Consortium

For detailed information, you can refer to the official 3D Tiles Specification: [3D Tiles Specification](https://docs.ogc.org/cs/22-025r4/22-025r4.html)

## Core Properties

### Tileset Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://docs.ogc.org/cs/22-025r4/22-025r4.html"
  },
  "@type": "Dataset",
  "name": "City District",
  
  "3dtiles:tileset": {
    "geometricError": 70,
    "root": {
      "boundingVolume": {
        "region": [
          -122.4194, 37.7749,
          -122.4193, 37.7750,
          0, 100
        ]
      },
      "geometricError": 50,
      "refine": "ADD"
    }
  }
}
```

### Level of Detail Structure

```json
{
  "3dtiles:levels": [
    {
      "level": 0,
      "geometricError": 70,
      "coverage": "district",
      "tileSize": 500
    },
    {
      "level": 1,
      "geometricError": 35,
      "coverage": "block",
      "tileSize": 100
    },
    {
      "level": 2,
      "geometricError": 10,
      "coverage": "building",
      "tileSize": 20
    }
  ]
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://docs.ogc.org/cs/22-025r4/22-025r4.html"
  },
  "@type": "Dataset",
  "name": "Virtual City District",
  "description": "High-detail city district with multiple LOD levels and optimized streaming",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "district-2024-001"
  },
  
  "3dtiles:tileset": {
    "asset": {
      "version": "1.0",
      "tilesetVersion": "1.2.3",
      "gltfUpAxis": "Y"
    },
    "geometricError": 70,
    "root": {
      "transform": [
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        -122.4194, 37.7749, 0.0, 1.0
      ],
      "boundingVolume": {
        "region": [
          -122.4194, 37.7749,
          -122.4193, 37.7750,
          0, 100
        ]
      },
      "geometricError": 50,
      "refine": "ADD",
      "content": {
        "uri": "district.b3dm",
        "boundingVolume": {
          "region": [
            -122.4194, 37.7749,
            -122.4193, 37.7750,
            0, 100
          ]
        }
      }
    }
  },
  
  "3dtiles:levels": [
    {
      "level": 0,
      "geometricError": 70,
      "coverage": "district",
      "tileSize": 500,
      "format": "b3dm"
    },
    {
      "level": 1,
      "geometricError": 35,
      "coverage": "block",
      "tileSize": 100,
      "format": "b3dm"
    },
    {
      "level": 2,
      "geometricError": 10,
      "coverage": "building",
      "tileSize": 20,
      "format": "b3dm"
    }
  ],
  
  "3dtiles:streaming": {
    "strategy": "view-dependent",
    "maxScreenSpaceError": 16,
    "maximumMemoryUsage": 512,
    "maximumCacheSize": 1000,
    "preloadAncestors": true,
    "preloadSiblings": false,
    "loadingDescendantLimit": 20,
    "skipLevels": 0
  },
  
  "3dtiles:properties": {
    "height": {
      "minimum": 0,
      "maximum": 100,
      "type": "FLOAT32"
    },
    "area": {
      "minimum": 100,
      "maximum": 10000,
      "type": "FLOAT32"
    }
  },
  
  "3dtiles:extensions": [
    {
      "name": "3DTILES_draco_point_compression",
      "properties": {
        "quantizePositionBits": 14,
        "quantizeNormalBits": 10,
        "quantizeColorBits": 8
      }
    }
  ],
  
  "3dtiles:metadata": {
    "dataSource": "city_planning",
    "lastUpdate": "2024-03-15",
    "accuracy": 0.5,
    "coverage": {
      "type": "urban",
      "buildings": 500,
      "area": 1000000
    }
  }
}
```

## Property Guidelines

### Tileset Properties
- Define clear geometric errors
- Set proper bounding volumes
- Configure refinement method
- Specify transformations
- Include version information

### Level Properties
- Define appropriate LODs
- Set error thresholds
- Specify tile sizes
- Configure coverage
- Choose formats

### Streaming Properties
- Set error thresholds
- Configure memory limits
- Define loading strategy
- Optimize cache usage
- Configure preloading

## Best Practices

1. **Tile Organization**
    - Logical hierarchy
    - Efficient subdivision
    - Balanced tree structure
    - Proper error metrics
    - Optimized coverage

2. **LOD Management**
    - Progressive refinement
    - Error-based switching
    - Efficient transitions
    - Memory management
    - Cache optimization

3. **Streaming Optimization**
    - View-dependent loading
    - Efficient caching
    - Memory monitoring
    - Progressive enhancement
    - Bandwidth management

4. **Performance Tuning**
    - Screen-space error
    - Memory limits
    - Cache size
    - Loading limits
    - Compression use

## Integration Examples

### With CityGML
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://docs.ogc.org/cs/22-025r4/22-025r4.html",
    "citygml": "http://www.opengis.net/citygml/2.0"
  },
  "@type": "Dataset",
  "name": "Urban Environment",
  
  "3dtiles:tileset": {
    "geometricError": 70,
    "root": {
      "boundingVolume": {
        "region": [-122.4194, 37.7749, -122.4193, 37.7750, 0, 100]
      }
    }
  },
  
  "citygml:building": {
    "function": "mixed",
    "lod": 2
  }
}
```

### With USD Environments
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://docs.ogc.org/cs/22-025r4/22-025r4.html",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Dataset",
  "name": "Large Scene",
  
  "3dtiles:tileset": {
    "geometricError": 70,
    "root": {
      "boundingVolume": {
        "region": [-122.4194, 37.7749, -122.4193, 37.7750, 0, 100]
      }
    }
  },
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  }
}
```

## Validation Rules

### Required Properties
- Valid tileset structure
- Proper geometric errors
- Bounding volumes
- Level definitions
- Streaming configuration

### Optional Properties
- Extensions
- Property definitions
- Metadata
- Cache settings
- Advanced optimizations

## Common Issues

1. **Memory Management**
    - Excessive tile loading
    - Cache overflow
    - Memory leaks
    - Loading bottlenecks
    - Resource cleanup

2. **Performance Optimization**
    - Screen-space error tuning
    - LOD transitions
    - Streaming efficiency
    - Cache utilization
    - Bandwidth usage

## Next Steps

- Review [Environment Profile](/implementation/metadata-profiles/environment-profile.md) for integration
- See [CityGML Standard](./citygml.md) for urban modeling
- Check [Validation Tools](../tools/validation.md) for testing
