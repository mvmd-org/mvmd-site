---
sidebar_position: 1
---

# CityJSON Integration

CityJSON is a JSON-based encoding of the CityGML data model for 3D city models. This reference explains how to integrate MVMD metadata with CityJSON for metaverse applications involving digital twins and virtual cities.

## What is CityJSON?

[CityJSON](https://www.cityjson.org/) is a JSON-based encoding of the CityGML data model (version 2.0). CityJSON was designed to be compact, developer-friendly, and easy to use with web technologies. It represents 3D city models with semantics including buildings, bridges, tunnels, vegetation, water bodies, and more.

Key characteristics of CityJSON include:

- **Compact format**: More efficient than CityGML XML
- **Web-friendly**: Native JSON structure for easy web integration
- **Semantic 3D city models**: Contains both geometry and semantic information
- **Multiple levels of detail**: Supports LoD0 to LoD4
- **Extensions support**: Can be extended for specific applications
- **Geometrically precise**: Maintains accuracy for geospatial applications

## CityJSON Core Concepts

Understanding these core concepts is essential when integrating MVMD with CityJSON:

- **City objects**: Buildings, roads, vegetation, etc.
- **Geometry**: Multi-surfaces, solids, etc.
- **Semantics**: Building parts, wall surfaces, etc.
- **Attributes**: Properties like year of construction, usage, etc.
- **Metadata**: Information about the dataset
- **Extensions**: Custom properties and objects

## MVMD Integration with CityJSON

MVMD metadata can be integrated with CityJSON in several ways:

### 1. CityJSON Metadata Extension

The most standard approach is to extend the CityJSON metadata object to include MVMD properties:

```json
{
  "type": "CityJSON",
  "version": "1.1",
  "metadata": {
    "referenceSystem": "urn:ogc:def:crs:EPSG::7415",
    "geographicalExtent": [-73.985, 40.748, 0, -73.984, 40.749, 100],
    "datasetTitle": "Manhattan Buildings",
    "datasetAbstract": "3D model of buildings in Manhattan, New York",
    "datasetCreationDate": "2023-07-15",
    "MVMD_metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/",
        "city": "https://cityjson.org/vocab#"
      },
      "@type": "DigitalDocument",
      "name": "Manhattan Buildings Dataset",
      "description": "Detailed 3D model of midtown Manhattan buildings",
      "creator": {
        "@type": "Organization",
        "name": "NYC Department of City Planning"
      },
      "mvmd:category": "geospatial",
      "mvmd:subcategory": "citymodel",
      "mvmd:buildingCount": 1285,
      "mvmd:primaryLOD": "2",
      "mvmd:availableLODs": ["1", "2", "3"],
      "mvmd:dataSource": "LiDAR and photogrammetry",
      "mvmd:acquisitionDate": "2023-03-21",
      "mvmd:coordinateSystem": "EPSG:7415",
      "mvmd:textureSources": "Oblique aerial photography"
    }
  },
  "CityObjects": {
    // City objects definitions...
  }
}
```

### 2. City Object Properties

MVMD metadata can be added to individual city objects:

```json
{
  "type": "CityJSON",
  "version": "1.1",
  "CityObjects": {
    "building_1": {
      "type": "Building",
      "attributes": {
        "yearOfConstruction": 1968,
        "measuredHeight": 102.5,
        "function": "office"
      },
      "geometry": [
        // Geometry definition...
      ],
      "MVMD_metadata": {
        "@context": {
          "@vocab": "https://schema.org/",
          "mvmd": "https://mvmd.org/v1/"
        },
        "@type": "Building",
        "name": "Empire State Building",
        "description": "Iconic Art Deco skyscraper",
        "mvmd:architecturalStyle": "Art Deco",
        "mvmd:architect": "Shreve, Lamb & Harmon",
        "mvmd:yearCompleted": 1931,
        "mvmd:numberOfFloors": 102,
        "mvmd:interactable": true,
        "mvmd:interiorModeled": false,
        "mvmd:textureResolution": "2048x2048",
        "mvmd:polyCount": 42380,
        "mvmd:entryPoints": [
          {"position": [587493.8, 4140265.6, 12.5], "type": "main"},
          {"position": [587488.2, 4140260.1, 12.5], "type": "side"}
        ]
      }
    },
    "building_2": {
      // Another building definition...
    }
  }
}
```

### 3. Extension Objects

For complex metadata, a formal CityJSON Extension can be defined:

```json
{
  "type": "CityJSON",
  "version": "1.1",
  "extensions": {
    "MVMD": {
      "url": "https://mvmd.org/extensions/cityjson/mvmd.json",
      "version": "1.0"
    }
  },
  "CityObjects": {
    "building_1": {
      "type": "Building",
      "geometry": [
        // Geometry definition...
      ],
      "attributes": {
        "yearOfConstruction": 1962
      },
      "+MVMD": {
        "metaverseProperties": {
          "@context": {
            "@vocab": "https://schema.org/",
            "mvmd": "https://mvmd.org/v1/"
          },
          "@type": "Building",
          "name": "Chrysler Building",
          "mvmd:interactable": true,
          "mvmd:interactionType": ["enter", "viewInfo"],
          "mvmd:interiorComplexity": "medium",
          "mvmd:soundscape": "urban",
          "mvmd:ambientSounds": ["traffic", "pedestrians", "wind"]
        }
      }
    }
  }
}
```

## Mapping CityJSON to MVMD

This table shows common mappings between CityJSON and MVMD properties:

| CityJSON Property | MVMD Property | Notes |
|-------------------|---------------|-------|
| `type` (e.g., "Building") | `@type` | Maps to corresponding Schema.org types |
| `attributes.yearOfConstruction` | `mvmd:yearCompleted` | Direct mapping |
| `attributes.measuredHeight` | `mvmd:height` | Convert to appropriate units |
| `attributes.function` | `mvmd:buildingFunction` | Standardize vocabulary |
| `attributes.roofType` | `mvmd:roofType` | Standardize vocabulary |
| `geometry[].lod` | `mvmd:geometryLOD` | Indicates detail level |
| `address` | `address` | Use Schema.org address format |
| `children` | `hasPart` | For hierarchical components |
| `parents` | `isPartOf` | For parent references |

## CityJSON Specific MVMD Properties

MVMD includes specific properties for CityJSON integration:

| MVMD Property | Description | Example Value |
|--------------|-------------|---------------|
| `mvmd:cityModelType` | CityJSON variant | `"CityJSON 1.1"` |
| `mvmd:cityModelLOD` | Primary level of detail | `"2"` |
| `mvmd:availableLODs` | All available LODs | `["1", "2"]` |
| `mvmd:cityObjectTypes` | Types included | `["Building", "Road", "Vegetation"]` |
| `mvmd:semanticSurfaces` | Surface types | `["WallSurface", "RoofSurface"]` |
| `mvmd:textured` | Whether objects are textured | `true` |
| `mvmd:semanticLevel` | Level of semantic detail | `"high"` |

## Working with CityJSON Levels of Detail

MVMD metadata can describe different LODs within a CityJSON model:

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "name": "Rotterdam City Model",
    "mvmd:category": "geospatial",
    "mvmd:lodDetails": {
      "1": {
        "mvmd:polyCount": 124860,
        "mvmd:textureResolution": "low",
        "mvmd:semanticsIncluded": false,
        "mvmd:fileSize": 8.5
      },
      "2": {
        "mvmd:polyCount": 967420,
        "mvmd:textureResolution": "medium",
        "mvmd:semanticsIncluded": true,
        "mvmd:fileSize": 42.8
      },
      "3": {
        "mvmd:polyCount": 3428640,
        "mvmd:textureResolution": "high",
        "mvmd:semanticsIncluded": true,
        "mvmd:fileSize": 158.2
      }
    }
  }
}
```

## MVMD for Specific CityJSON Use Cases

### Digital Twins

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Amsterdam Digital Twin",
    "mvmd:category": "geospatial",
    "mvmd:subcategory": "digitaltwin",
    "mvmd:updateFrequency": "monthly",
    "mvmd:lastSynchronized": "2023-08-05",
    "mvmd:realTimeDataSources": [
      "traffic sensors", "weather stations", "public transport"
    ],
    "mvmd:dataLayersAvailable": [
      "buildings", "terrain", "vegetation", "water", "infrastructure"
    ],
    "mvmd:twinAccuracy": "±15cm",
    "mvmd:dataIntegrations": [
      "BIM models", "IoT sensors", "Municipal databases"
    ]
  }
}
```

### Urban Planning

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Oslo Development Zone",
    "mvmd:category": "geospatial",
    "mvmd:subcategory": "urbanplanning",
    "mvmd:planningPeriod": "2024-2030",
    "mvmd:planningScenarios": [
      {
        "name": "High Density Residential",
        "description": "Mixed-use development with high-rise residential",
        "uri": "scenarios/high-density.json"
      },
      {
        "name": "Commercial District",
        "description": "Office and retail focused development",
        "uri": "scenarios/commercial.json"
      }
    ],
    "mvmd:simulationCapabilities": [
      "traffic flow", "solar exposure", "wind corridors", "flood risk"
    ],
    "mvmd:zoning": {
      "current": "industrial",
      "proposed": "mixed-use"
    }
  }
}
```

### Historical Reconstruction

```json
{
  "MVMD_metadata": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "DigitalDocument",
    "name": "Rome 100 CE",
    "mvmd:category": "geospatial",
    "mvmd:subcategory": "historical",
    "mvmd:historicalPeriod": "Ancient Rome",
    "mvmd:temporalCoverage": "100 CE",
    "mvmd:historicalSources": [
      "archaeological records", "ancient texts", "university research"
    ],
    "mvmd:confidenceLevel": "medium",
    "mvmd:uncertainAreas": [
      "minor streets layout", "building heights in southern district"
    ],
    "mvmd:historicalAccuracy": "verified by Historical Institute",
    "mvmd:timeVariantFeatures": true
  }
}
```

## Tools for Working with CityJSON and MVMD

Tools that support CityJSON and MVMD integration:

- **[CityJSON Web Viewer](https://viewer.cityjson.org/)**: Visualize CityJSON files
- **[cjio](https://github.com/cityjson/cjio)**: Python CLI tool for processing CityJSON
- **[azul](https://github.com/tudelft3d/azul)**: Web-based CityJSON viewer
- **[citygml-tools](https://github.com/citygml4j/citygml-tools)**: Convert between CityGML and CityJSON
- **[MVMD CityJSON Tools](https://mvmd.org/tools/cityjson)**: Tools for MVMD metadata in CityJSON

## Sample Code

### Adding MVMD Metadata to CityJSON

```javascript
const fs = require('fs');

function addMVMDMetadataToCityJSON(cityJSONPath, outputPath, mvmdMetadata) {
  // Read the CityJSON file
  const cityJSON = JSON.parse(fs.readFileSync(cityJSONPath, 'utf8'));
  
  // Initialize metadata if it doesn't exist
  cityJSON.metadata = cityJSON.metadata || {};
  
  // Add MVMD metadata
  cityJSON.metadata.MVMD_metadata = mvmdMetadata;
  
  // Save the updated CityJSON
  fs.writeFileSync(outputPath, JSON.stringify(cityJSON, null, 2));
  console.log(`Added MVMD metadata to CityJSON at ${outputPath}`);
}

// Example usage
const mvmdMetadata = {
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Helsinki City Center",
  "description": "3D model of Helsinki city center with buildings, roads and vegetation",
  "creator": {
    "@type": "Organization",
    "name": "Helsinki City Planning Department"
  },
  "mvmd:category": "geospatial",
  "mvmd:subcategory": "citymodel",
  "mvmd:cityModelType": "CityJSON",
  "mvmd:cityModelLOD": "2",
  "mvmd:availableLODs": ["1", "2"],
  "mvmd:buildingCount": 3254,
  "mvmd:textured": true,
  "mvmd:coordinateSystem": "EPSG:3879",
  "mvmd:acquisitionDate": "2023-05-10"
};

addMVMDMetadataToCityJSON('helsinki.json', 'helsinki-with-mvmd.json', mvmdMetadata);
```

### Adding MVMD Metadata to Specific City Objects

```javascript
const fs = require('fs');

function addMVMDMetadataToCityObject(cityJSONPath, objectID, mvmdMetadata, outputPath) {
  // Read the CityJSON file
  const cityJSON = JSON.parse(fs.readFileSync(cityJSONPath, 'utf8'));
  
  // Check if the city object exists
  if (!cityJSON.CityObjects[objectID]) {
    console.error(`City object ${objectID} not found!`);
    return;
  }
  
  // Add MVMD metadata to the city object
  cityJSON.CityObjects[objectID].MVMD_metadata = mvmdMetadata;
  
  // Save the updated CityJSON
  fs.writeFileSync(outputPath, JSON.stringify(cityJSON, null, 2));
  console.log(`Added MVMD metadata to city object ${objectID} at ${outputPath}`);
}

// Example usage
const buildingMetadata = {
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Building",
  "name": "City Hall",
  "description": "Historical city hall building with clock tower",
  "mvmd:architecturalStyle": "Neo-Gothic",
  "mvmd:yearCompleted": 1897,
  "mvmd:interactable": true,
  "mvmd:interactionType": ["enter", "viewInfo", "climbTower"],
  "mvmd:interiorModeled": true,
  "mvmd:textureResolution": "4096x4096",
  "mvmd:soundscape": "urban"
};

addMVMDMetadataToCityObject('helsinki.json', 'building_742', buildingMetadata, 'helsinki-updated.json');
```

## Converting CityJSON with MVMD to glTF for Metaverse

```javascript
const fs = require('fs');
const cityjson2gltf = require('cityjson2gltf'); // Example library

async function convertCityJSONtoGLTF(cityJSONPath, gltfOutputPath) {
  // Read the CityJSON file
  const cityJSON = JSON.parse(fs.readFileSync(cityJSONPath, 'utf8'));
  
  // Extract MVMD metadata
  let mvmdMetadata = null;
  if (cityJSON.metadata && cityJSON.metadata.MVMD_metadata) {
    mvmdMetadata = cityJSON.metadata.MVMD_metadata;
  }
  
  // Convert CityJSON to glTF
  const gltf = await cityjson2gltf.convert(cityJSON);
  
  // If MVMD metadata exists, add it to the glTF file
  if (mvmdMetadata) {
    gltf.extensions = gltf.extensions || {};
    gltf.extensionsUsed = gltf.extensionsUsed || [];
    
    if (!gltf.extensionsUsed.includes('MVMD_metadata')) {
      gltf.extensionsUsed.push('MVMD_metadata');
    }
    
    gltf.extensions.MVMD_metadata = mvmdMetadata;
  }
  
  // Add city object metadata to nodes
  Object.keys(cityJSON.CityObjects).forEach(objectID => {
    const cityObject = cityJSON.CityObjects[objectID];
    
    // Find corresponding node in glTF (implementation depends on cityjson2gltf library)
    const nodeIndex = gltf.nodes.findIndex(node => node.name === objectID);
    
    if (nodeIndex >= 0 && cityObject.MVMD_metadata) {
      gltf.nodes[nodeIndex].extensions = gltf.nodes[nodeIndex].extensions || {};
      gltf.nodes[nodeIndex].extensions.MVMD_metadata = cityObject.MVMD_metadata;
    }
  });
  
  // Save the glTF file
  fs.writeFileSync(gltfOutputPath, JSON.stringify(gltf, null, 2));
  console.log(`Converted CityJSON to glTF with MVMD metadata at ${gltfOutputPath}`);
}

convertCityJSONtoGLTF('helsinki.json', 'helsinki.gltf');
```

## Best Practices for CityJSON with MVMD

1. **Keep consistent with OGC standards**: Align MVMD properties with CityGML/CityJSON semantic model.
2. **Use the proper integration level**: Add global metadata at the cityJSON level and object-specific metadata at the object level.
3. **Link to external resources**: For large metadata collections, use references to external files.
4. **Maintain semantics**: Preserve semantic information when converting between formats.
5. **Document extensions**: If creating a formal CityJSON extension for MVMD, document the schema.
6. **Standardize IDs**: Use consistent identifiers across different formats and LODs.
7. **Include coordinate transformation info**: Document how to transform coordinates for metaverse environments.
8. **Add interaction metadata**: Include information about how users can interact with city objects.
9. **Consider versioning**: Add version information for both CityJSON and MVMD metadata.

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Large file sizes | Use LOD and tiling strategies for metaverse applications |
| Coordinate system conversion | Document transformations in MVMD metadata |
| Missing semantics | Ensure semantic information is preserved and documented |
| Version compatibility | Document which CityJSON version is used |
| Duplicated metadata | Use references to avoid redundant information |

## Future Directions

The integration of MVMD with CityJSON is evolving with:

- Formal CityJSON Extension for MVMD
- Improved conversion tools between CityJSON and glTF/USD
- Better handling of time-variant properties
- Enhanced integration with real-time sensor data
- Standardized metaverse interaction metadata

## Related Resources

- [CityJSON Documentation](https://www.cityjson.org/specifications/)
- [CityJSON GitHub](https://github.com/cityjson/cityjson)
- [3D Geoinformation research group at TU Delft](https://3d.bk.tudelft.nl/)
- [OGC CityGML Standard](https://www.ogc.org/standards/citygml)

## Related Documentation

- [3D Tiles Integration](3d-tiles.md): How MVMD integrates with 3D Tiles
- [glTF Format Integration](../3d-formats/gltf.md): How MVMD integrates with glTF
- [USD Format Integration](../3d-formats/usd.md): How MVMD integrates with USD

