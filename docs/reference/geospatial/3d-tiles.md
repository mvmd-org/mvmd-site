---
sidebar_position: 2
---

# 3D Tiles Integration

3D Tiles is an open specification for streaming massive heterogeneous 3D geospatial datasets. This reference explains how to integrate MVMD metadata with 3D Tiles for geospatially-aware metaverse assets and environments.

## What are 3D Tiles?

[3D Tiles](https://github.com/CesiumGS/3d-tiles) is an OGC (Open Geospatial Consortium) community standard designed for streaming and rendering massive 3D geospatial content such as photogrammetry, 3D buildings, BIM/CAD, point clouds, and vector data. 3D Tiles enables efficient visualization of heterogeneous datasets by defining a spatial data structure and a set of tile formats.

Key characteristics of 3D Tiles include:

- **Streaming optimized**: Designed for streaming massive datasets over the web
- **Hierarchical structure**: Uses spatial data structures for efficient loading
- **Level of detail**: Supports multiple resolutions for the same content
- **Heterogeneous content**: Accommodates different 3D data types
- **Geospatial positioning**: Maintains precise geographic coordinates
- **Extensible**: Supports extensions for additional capabilities

3D Tiles is widely used in geospatial applications, digital twins, and location-based metaverse experiences.

## 3D Tiles Core Concepts

Understanding these core concepts helps when integrating MVMD with 3D Tiles:

- **Tileset**: A JSON file describing the hierarchical structure of the tiles
- **Tile**: A container for content (geometry, attributes) and children tiles
- **Bounding Volume**: The spatial extent of a tile (typically a box, sphere, or region)
- **Geometric Error**: A measure of how much error is introduced by simplified geometry
- **Refinement**: How child tiles relate to parent tiles (ADD or REPLACE)
- **Content**: The actual 3D data, which can be in various formats (e.g., glTF, B3DM)

## MVMD Integration with 3D Tiles

MVMD metadata can be integrated with 3D Tiles in several ways:

### 1. Tileset-Level Metadata

Adding MVMD metadata at the tileset level provides information about the entire dataset:

```json
{
  "asset": {
    "version": "1.0",
    "tilesetVersion": "1.2.3"
  },
  "geometricError": 500,
  "root": {
    // Root tile definition
  },
  "extras": {
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/",
        "geo": "https://purl.org/geojson/vocab#"
      },
      "@type": "DigitalDocument",
      "name": "New York City 3D Model",
      "description": "High-resolution 3D model of Manhattan, New York City",
      "creator": {
        "@type": "Organization",
        "name": "Urban Planning Department"
      },
      "mvmd:category": "geospatial",
      "mvmd:subcategory": "citymodel",
      "geo:spatialCoverage": {
        "@type": "GeoShape",
        "box": "-74.02, 40.70, -73.98, 40.75"
      },
      "mvmd:dataSource": "Aerial LiDAR and photogrammetry",
      "mvmd:resolution": "15cm",
      "mvmd:coordinateSystem": "EPSG:4326",
      "mvmd:verticalDatum": "NAVD88",
      "mvmd:acquisitionDate": "2023-05-15"
    }
  }
}
```

### 2. Tile-Level Metadata

MVMD metadata can be added to individual tiles to provide specific information about that part of the dataset:

```json
{
  "boundingVolume": {
    "region": [
      -74.01, 40.71, -74.00, 40.72, 0, 200
    ]
  },
  "geometricError": 70,
  "content": {
    "uri": "buildings/123.b3dm"
  },
  "extras": {
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "DigitalDocument",
      "name": "Financial District Buildings",
      "mvmd:buildingCount": 42,
      "mvmd:averageBuildingHeight": 180,
      "mvmd:dataQuality": "high",
      "mvmd:lastUpdated": "2023-07-20"
    }
  },
  "children": [
    // Child tile definitions
  ]
}
```

### 3. Feature-Level Metadata

For 3D Tiles formats that support per-feature properties (like B3DM), MVMD metadata can be included at the feature level:

```json
{
  "BATCH_LENGTH": 10,
  "batchTableJson": {
    "id": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "name": ["Building A", "Building B", "Building C", ...],
    "height": [100, 120, 95, ...],
    "MVMD_metadata": [
      {
        "@context": {
          "@vocab": "https://schema.org/",
          "mvmd": "https://mvmd.org/v1/"
        },
        "@type": "Building",
        "name": "Empire State Building",
        "description": "Iconic 102-story skyscraper",
        "mvmd:buildingType": "commercial",
        "mvmd:constructionDate": "1931-05-01",
        "mvmd:architect": "Shreve, Lamb & Harmon",
        "mvmd:numberOfFloors": 102,
        "mvmd:occupiable": true
      },
      // More feature metadata...
    ]
  }
}
```

### 4. Extension-Based Integration

3D Tiles supports custom extensions, which can be used to standardize MVMD integration:

```json
{
  "extensionsUsed": [
    "MVMD_metadata"
  ],
  "extensions": {
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "DigitalDocument",
      "name": "San Francisco City Model",
      "mvmd:category": "geospatial",
      "mvmd:modelAccuracy": "30cm",
      "mvmd:lastUpdated": "2023-08-15"
    }
  },
  "root": {
    // Root tile definition
  }
}
```

## 3D Tiles Content Formats

MVMD can be integrated with various 3D Tiles content formats:

| Format | Description | MVMD Integration |
|--------|-------------|-----------------|
| glTF | Standard 3D format | Use glTF extension mechanism (see [glTF Integration](../3d-formats/gltf.md)) |
| B3DM | Batched 3D Model | Include in batch table (as shown above) |
| I3DM | Instanced 3D Model | Include in feature table or instance metadata |
| PNTS | Point Cloud | Include in batch table or point metadata |
| CMPT | Composite | Include in component metadata |

## Geospatial Properties in MVMD

MVMD includes geospatial-specific properties for 3D Tiles integration:

| MVMD Property | Description | Example Value |
|--------------|-------------|---------------|
| `mvmd:coordinateSystem` | Coordinate reference system | `"EPSG:4326"` |
| `mvmd:spatialExtent` | Geographic extent | `{"west": -74.02, "south": 40.70, "east": -73.98, "north": 40.75}` |
| `mvmd:verticalDatum` | Vertical reference system | `"NAVD88"` |
| `mvmd:resolution` | Spatial resolution | `"15cm"` |
| `mvmd:accuracy` | Positional accuracy | `"±5cm"` |
| `mvmd:dataSource` | Source of geospatial data | `"Aerial LiDAR"` |
| `mvmd:acquisitionDate` | When data was captured | `"2023-05-15"` |
| `mvmd:projectionParameters` | Custom projection settings | `{"centralMeridian": -74.0, "latitudeOfOrigin": 40.7}` |

## 3D Tiles 1.1 and MVMD

3D Tiles 1.1 introduced implicit tiling and multiple contents per tile, which affects MVMD integration:

```json
{
  "asset": {
    "version": "1.1"
  },
  "schema": {
    "classes": {
      "building": {
        "properties": {
          "height": {"componentType": "FLOAT32"},
          "material": {"componentType": "STRING"},
          "mvmd_metadata": {"componentType": "STRING"}
        }
      }
    }
  },
  "metadata": {
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "DigitalDocument",
      "name": "Chicago Downtown",
      "mvmd:category": "geospatial"
    }
  },
  "contents": [
    {
      "uri": "content/buildings.glb",
      "extras": {
        "MVMD_metadata": {
          "mvmd:contentType": "buildings",
          "mvmd:detailLevel": "high",
          "mvmd:featureCount": 1352
        }
      }
    }
  ]
}
```

## MVMD for Specific 3D Tiles Use Cases

### City Models

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Berlin City Model",
    "mvmd:category": "geospatial",
    "mvmd:subcategory": "citymodel",
    "mvmd:cityModelType": "CityGML",
    "mvmd:cityModelLOD": "2.5",
    "mvmd:buildingCount": 24895,
    "mvmd:includedFeatureTypes": [
      "buildings", "bridges", "roads", "vegetation"
    ],
    "mvmd:dataSource": "Municipal GIS Database",
    "mvmd:lastUpdated": "2023-06-20"
  }
}
```

### BIM Integration

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Hospital Building BIM Model",
    "mvmd:category": "geospatial",
    "mvmd:subcategory": "bim",
    "mvmd:bimSource": "Revit 2023",
    "mvmd:bimIFCVersion": "IFC4",
    "mvmd:bimLOD": "LOD400",
    "mvmd:includedSystems": [
      "structural", "architectural", "mechanical", "electrical", "plumbing"
    ],
    "mvmd:geoLocation": {
      "lat": 37.7749,
      "lon": -122.4194
    },
    "mvmd:buildingPhase": "as-built"
  }
}
```

### Point Clouds

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Forest Canopy LiDAR",
    "mvmd:category": "geospatial",
    "mvmd:subcategory": "pointcloud",
    "mvmd:pointCount": 42680540,
    "mvmd:pointDensity": "25 points/m²",
    "mvmd:sensorType": "Aerial LiDAR",
    "mvmd:classification": {
      "ground": 15640320,
      "vegetation": 25640180,
      "buildings": 1400040
    },
    "mvmd:attributes": [
      "intensity", "classification", "returnNumber", "rgb"
    ],
    "mvmd:acquisitionDate": "2023-04-25"
  }
}
```

## Tools for Working with 3D Tiles and MVMD

Tools that support 3D Tiles and MVMD integration:

- **[CesiumJS](https://cesium.com/cesiumjs/)**: WebGL virtual globe and map engine
- **[3D Tiles Validator](https://github.com/CesiumGS/3d-tiles-validator)**: Validates 3D Tiles against the specification
- **[3D Tiles Tools](https://github.com/CesiumGS/3d-tiles-tools)**: Utilities for working with 3D Tiles
- **[MVMD Geo Tools](https://mvmd.org/tools/geo-tools)**: Tools for MVMD geospatial metadata

## Sample Code

### Adding MVMD Metadata to a 3D Tiles Tileset

```javascript
const fs = require('fs');

function addMVMDMetadataToTileset(tilesetPath, outputPath, mvmdMetadata) {
  // Read the tileset JSON
  const tileset = JSON.parse(fs.readFileSync(tilesetPath, 'utf8'));
  
  // Add MVMD metadata to extras
  tileset.extras = tileset.extras || {};
  tileset.extras.MVMD_metadata = mvmdMetadata;
  
  // Save the updated tileset
  fs.writeFileSync(outputPath, JSON.stringify(tileset, null, 2));
  console.log(`Added MVMD metadata to tileset at ${outputPath}`);
}

// Example usage
const mvmdMetadata = {
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "geo": "https://purl.org/geojson/vocab#"
  },
  "@type": "DigitalDocument",
  "name": "Downtown Seattle",
  "description": "3D tileset of downtown Seattle including buildings and terrain",
  "creator": {
    "@type": "Organization",
    "name": "Seattle GIS Department"
  },
  "mvmd:category": "geospatial",
  "mvmd:subcategory": "citymodel",
  "geo:spatialCoverage": {
    "@type": "GeoShape",
    "box": "-122.34, 47.60, -122.32, 47.62"
  },
  "mvmd:acquisitionDate": "2023-02-10",
  "mvmd:coordinateSystem": "EPSG:4326",
  "mvmd:resolution": "20cm"
};

addMVMDMetadataToTileset('tileset.json', 'tileset-with-mvmd.json', mvmdMetadata);
```

### Reading MVMD Metadata from a 3D Tiles Tileset

```javascript
const fs = require('fs');

function readMVMDMetadataFromTileset(tilesetPath) {
  // Read the tileset JSON
  const tileset = JSON.parse(fs.readFileSync(tilesetPath, 'utf8'));
  
  // Check for MVMD metadata
  if (tileset.extras && tileset.extras.MVMD_metadata) {
    return tileset.extras.MVMD_metadata;
  } else if (tileset.extensions && tileset.extensions.MVMD_metadata) {
    return tileset.extensions.MVMD_metadata;
  } else if (tileset.metadata && tileset.metadata.MVMD_metadata) {
    return tileset.metadata.MVMD_metadata;
  }
  
  return null;
}

// Example usage
const metadata = readMVMDMetadataFromTileset('tileset.json');
if (metadata) {
  console.log('MVMD Metadata found:');
  console.log(JSON.stringify(metadata, null, 2));
} else {
  console.log('No MVMD metadata found in tileset');
}
```

## Best Practices for 3D Tiles with MVMD

1. **Include essential geospatial properties**: Always add coordinate system, spatial extent, and acquisition date.
2. **Use the appropriate integration level**: Choose tileset, tile, or feature level based on your use case.
3. **Optimize metadata size**: Keep metadata concise, especially at the feature level where it might be duplicated.
4. **Create a standardized schema**: Use consistent properties across your organization's tilesets.
5. **Include accuracy information**: Document the positional accuracy and data quality.
6. **Add provenance data**: Include information about data sources and processing methods.
7. **Reference external data**: For large metadata, consider storing details externally and referencing them.
8. **Validate both 3D Tiles and MVMD**: Ensure both formats are correctly implemented.
9. **Document custom extensions**: If creating custom 3D Tiles extensions for MVMD, document them thoroughly.

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Metadata size increases tileset significantly | Use external references or move to per-tile metadata |
| Structural metadata vs. extras | For 3D Tiles 1.1, prefer schema-based metadata for queryable properties |
| Coordinate system mismatches | Clearly document all transformations in MVMD metadata |
| Batch table size limitations | Be selective about which features receive detailed metadata |
| Tool compatibility | Check if your 3D Tiles tools preserve extras and extensions |

## Future Directions

The integration of MVMD with 3D Tiles is evolving with:

- Standard extensions for MVMD metadata in 3D Tiles
- Better support for semantic properties across formats
- Integration with OGC API - Features
- Enhanced CityGML/3D Tiles interoperability with consistent metadata
- Improved metadata for 4D tiles (time-dynamic data)

## Related Resources

- [3D Tiles Specification](https://github.com/CesiumGS/3d-tiles/tree/main/specification)
- [OGC 3D Tiles Community Standard](https://www.ogc.org/standards/3d-tiles)
- [Cesium](https://cesium.com/): Platform for creating 3D geospatial applications
- [3D Tiles Samples](https://github.com/CesiumGS/3d-tiles-samples)

## Related Documentation

- [CityJSON Integration](cityjson.md): How MVMD integrates with CityJSON
- [glTF Format Integration](../3d-formats/gltf.md): How MVMD integrates with glTF
- [Geospatial Properties](../schema/mvmd-terms.md#geospatial-properties): MVMD properties for geospatial data

