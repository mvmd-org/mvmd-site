---
sidebar_position: 8
---

# COLLADA Standard

This page covers how to integrate COLLADA into your metadata through namespaces.

## About COLLADA

[COLLADA](https://www.khronos.org/collada/) (COLLAborative Design Activity) is an open standard digital asset exchange schema for interactive 3D applications, managed by the Khronos Group. It defines an XML-based schema to make it easy to transport 3D assets between applications without loss of information, enabling diverse 3D authoring and processing tools to be combined into a content production pipeline.

COLLADA serves as an interchange format rather than a delivery format, making it valuable in asset creation workflows before conversion to runtime formats like glTF or FBX.

## Core COLLADA Concepts

Key concepts in COLLADA that are relevant to metadata integration:

- **XML Schema**: XML-based format with a standardized schema
- **Asset Information**: Metadata about the asset including contributor information
- **Visual Scenes**: Hierarchical arrangement of nodes
- **Geometries**: Mesh data with vertices, normals, and textures
- **Materials and Effects**: Material properties and rendering information
- **Animation**: Keyframe-based animation data for transformations
- **Physics**: Physical properties and collision information
- **Kinematics**: Joint hierarchies and constraints for character animation

## Implementing the COLLADA Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "collada": "https://www.khronos.org/collada/schemas/"
  }
}
```

### Linking Example

When referencing external COLLADA assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Architectural Model",
  "contentUrl": "https://example.com/models/building.dae",
  "encodingFormat": "model/vnd.collada+xml"
}
```

With version information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Architectural Model",
  "contentUrl": "https://example.com/models/building.dae",
  "encodingFormat": "model/vnd.collada+xml",
  "version": "1.5.0",
  "contentSize": "4.3 MB"
}
```

### Embedding Example

When embedding COLLADA metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "collada": "https://www.khronos.org/collada/schemas/"
  },
  "@type": "3DModel",
  "name": "Architectural Model",
  "collada:version": "1.5.0",
  "collada:asset": {
    "created": "2023-08-22T14:32:25Z",
    "modified": "2023-09-15T10:45:12Z",
    "upAxis": "Y_UP",
    "unitName": "meters",
    "unitMeter": 1.0
  },
  "collada:contributors": [
    {
      "author": "Architecture Studio",
      "authoringTool": "3D Modeling Suite 2023",
      "comments": "Final version for client approval"
    }
  ],
  "collada:scenes": {
    "instanceVisualScene": "MainScene",
    "nodeCount": 156
  },
  "collada:geometries": [
    {
      "id": "Building_Exterior",
      "primitiveCount": 2450,
      "vertexCount": 4280
    },
    {
      "id": "Interior_Details",
      "primitiveCount": 3200,
      "vertexCount": 5600
    },
    {
      "id": "Landscape",
      "primitiveCount": 1200,
      "vertexCount": 2400
    }
  ]
}
```

## Common Use Cases

COLLADA is used in a variety of applications:

- Digital content creation workflows
- 3D asset exchange between software packages
- Architectural visualization
- Game development assets
- Film and animation production
- Cultural heritage preservation
- CAD/CAM model exchange

## Implementation Examples

### Basic Example

A simple COLLADA model reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Historical Building",
  "description": "Detailed model of a historical building with architectural features",
  "contentUrl": "https://example.com/models/historical-building.dae",
  "encodingFormat": "model/vnd.collada+xml",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Complete Example

For a complete model with detailed metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "collada": "https://www.khronos.org/collada/schemas/"
  },
  "@type": "3DModel",
  "name": "Historic City Center",
  "description": "Detailed architectural model of a historic city center with multiple buildings and landscape elements",
  "contentUrl": "https://example.com/models/historic-city.dae",
  "encodingFormat": "model/vnd.collada+xml",
  "creator": {
    "@type": "Organization",
    "name": "Digital Heritage Foundation",
    "url": "https://dhf.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "dateCreated": "2023-06-28",
  "collada:version": "1.5.0",
  "collada:asset": {
    "created": "2023-06-28T09:15:42Z",
    "modified": "2023-07-15T14:22:36Z",
    "upAxis": "Y_UP",
    "unitName": "meters",
    "unitMeter": 1.0,
    "title": "Historic City Center Reconstruction",
    "subject": "Architectural heritage, Urban planning, 17th century"
  },
  "collada:contributors": [
    {
      "author": "Historical Research Team",
      "authoringTool": "Architectural Modeling Suite 4.5",
      "comments": "Based on historical documents and archaeological surveys"
    },
    {
      "author": "Texture Artists Group",
      "authoringTool": "Texture Creation Suite 2023",
      "comments": "Period-accurate textures with weathering effects"
    }
  ],
  "collada:library": {
    "visualScenes": ["MainScene", "AerialView", "StreetLevel"],
    "lights": ["Sunlight", "AmbientLight", "StreetLamps"],
    "cameras": ["MainCamera", "TourCamera", "DetailCamera"],
    "effects": 24,
    "materials": 36,
    "geometries": 85,
    "images": 42
  },
  "collada:extraInfo": {
    "accuracy": "High - based on archaeological evidence",
    "restorationNotes": "Missing elements were reconstructed based on similar structures from the same period",
    "historyBrief": "This area was constructed between 1650-1680 and represents the baroque style of the region",
    "references": ["City Archives Document #A-456-78", "Historical Society Publication Vol.23"]
  }
}
```

### Cultural Heritage Example

Example for cultural heritage documentation:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "collada": "https://www.khronos.org/collada/schemas/"
  },
  "@type": "3DModel",
  "name": "Ancient Temple Reconstruction",
  "description": "Digital reconstruction of the Temple of Apollo based on archaeological evidence",
  "contentUrl": "https://heritage.example.org/models/apollo-temple.dae",
  "encodingFormat": "model/vnd.collada+xml",
  "creator": {
    "@type": "Organization",
    "name": "Archaeological Digital Preservation Institute",
    "url": "https://adpi.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "dateCreated": "2023-04-12",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "heritageMetadata",
      "name": "Heritage Metadata",
      "value": {
        "historicalPeriod": "Classical Greek",
        "approximateDate": "447-438 BCE",
        "location": {
          "name": "Athens, Greece",
          "coordinates": [37.9715, 23.7268]
        },
        "preservationStatus": "Partially preserved",
        "excavationReferences": [
          "Athens Archaeological Survey 1982",
          "Classical Architecture Database ID: GR-AT-438"
        ],
        "uncertainty": {
          "architectural": "Low - based on extensive remains",
          "decorative": "Medium - based on fragments and comparable sites",
          "colorScheme": "High - speculative based on traces and contemporary accounts"
        }
      }
    }
  ],
  "collada:version": "1.5.0",
  "collada:asset": {
    "upAxis": "Y_UP",
    "unitName": "meters",
    "unitMeter": 1.0
  },
  "collada:library": {
    "visualScenes": ["CompleteView", "ExteriorOnly", "InteriorOnly", "StructuralElements"],
    "geometries": 146,
    "materials": 28
  }
}
```

## JSON Schema Validation

For validating COLLADA namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "COLLADA Namespace Schema",
  "type": "object",
  "properties": {
    "collada:version": {
      "type": "string",
      "description": "COLLADA schema version"
    },
    "collada:asset": {
      "type": "object",
      "description": "Core asset information",
      "properties": {
        "created": {
          "type": "string",
          "format": "date-time",
          "description": "Creation date of the asset"
        },
        "modified": {
          "type": "string",
          "format": "date-time",
          "description": "Last modification date"
        },
        "upAxis": {
          "type": "string",
          "enum": ["X_UP", "Y_UP", "Z_UP"],
          "description": "Up-axis of the coordinate system"
        },
        "unitName": {
          "type": "string",
          "description": "Name of the length unit"
        },
        "unitMeter": {
          "type": "number",
          "description": "Conversion factor to meters"
        },
        "title": {
          "type": "string",
          "description": "Title of the asset"
        },
        "subject": {
          "type": "string",
          "description": "Subject or keywords"
        }
      }
    },
    "collada:contributors": {
      "type": "array",
      "description": "Information about the contributors",
      "items": {
        "type": "object",
        "properties": {
          "author": { "type": "string" },
          "authoringTool": { "type": "string" },
          "comments": { "type": "string" }
        }
      }
    },
    "collada:scenes": {
      "type": "object",
      "description": "Scene information"
    },
    "collada:geometries": {
      "type": "array",
      "description": "Geometry information",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "primitiveCount": { "type": "integer" },
          "vertexCount": { "type": "integer" }
        }
      }
    },
    "collada:library": {
      "type": "object",
      "description": "Information about the COLLADA libraries used"
    },
    "collada:extraInfo": {
      "type": "object",
      "description": "Additional custom information"
    }
  }
}
```

## JSON-LD Context

The COLLADA namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "collada": "https://www.khronos.org/collada/schemas/",
    "collada:version": { "@id": "collada:version" },
    "collada:asset": { "@id": "collada:asset" },
    "collada:contributors": { "@id": "collada:contributors" },
    "collada:scenes": { "@id": "collada:scenes" },
    "collada:geometries": { "@id": "collada:geometries" },
    "collada:library": { "@id": "collada:library" },
    "collada:extraInfo": { "@id": "collada:extraInfo" }
  }
}
```

## Implementation Considerations

When implementing the COLLADA namespace, keep these considerations in mind:

- **Interchange Format**: COLLADA is primarily an interchange format, not an optimized runtime format
- **Version Compatibility**: Be explicit about which COLLADA version you're using (1.4.1, 1.5.0)
- **File Size**: COLLADA files can be large due to the XML structure, consider compression
- **Validation**: Validate against the official schema to ensure compatibility
- **Conversion Pipeline**: Often used in pipelines that ultimately convert to more optimized formats
- **External References**: Properly handle external references to textures and other resources
- **Complex Features**: Some advanced features like physics may not translate to all target platforms

## Related Documentation

- [Cross-Platform Asset Implementation](../implementation/cross-platform-assets.md)
- [glTF Standard](./gltf.md)
- [FBX Namespace](./fbx.md)
- [Asset Implementation](../implementation/assets.md) 