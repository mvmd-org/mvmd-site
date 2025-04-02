---
sidebar_position: 9
---

# X3D Standard

This page covers how to integrate X3D into your metadata through namespaces.

## About X3D

[X3D](https://www.web3d.org/x3d/what-x3d) (Extensible 3D) is an ISO-standard, royalty-free file format and runtime architecture for representing and communicating 3D scenes and objects on the web. It is the successor to VRML (Virtual Reality Modeling Language) and is maintained by the Web3D Consortium.

X3D is designed specifically for web integration, providing a set of componentized features that can be tailored for various use cases from simple visualization to complex interactive environments. It supports multiple encodings, including XML, Classic VRML, and JSON, making it flexible for different implementation contexts.

## Core X3D Concepts

Key concepts in X3D that are relevant to metadata integration:

- **Scene Graph**: Hierarchical structure of nodes that define the 3D world
- **Components**: Modular feature sets (e.g., Geometry, Animation, Scripting)
- **Profiles**: Predefined collections of components for specific use cases
- **Routes**: Event connections between nodes for interaction and animation
- **Multiple Encodings**: XML, Classic VRML, and JSON representations
- **Prototypes**: Reusable node definitions for custom objects
- **Metadata Integration**: Built-in support for metadata within the scene
- **Web Integration**: Native support for HTML/DOM integration

## Implementing the X3D Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/"
  }
}
```

### Linking Example

When referencing external X3D assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Interactive Web Visualization",
  "contentUrl": "https://example.com/models/visualization.x3d",
  "encodingFormat": "model/x3d+xml"
}
```

For X3D with specific encoding:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Interactive Web Visualization",
  "contentUrl": "https://example.com/models/visualization.x3d",
  "encodingFormat": "model/x3d+xml",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "x3dEncoding",
      "value": "XML"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "x3dProfile",
      "value": "Interactive"
    }
  ]
}
```

### Embedding Example

When embedding X3D metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/"
  },
  "@type": "3DModel",
  "name": "Interactive Web Visualization",
  "x3d:version": "4.0",
  "x3d:profile": "Interactive",
  "x3d:components": [
    {"name": "Core", "level": 2},
    {"name": "Navigation", "level": 3},
    {"name": "Rendering", "level": 3},
    {"name": "Geometry3D", "level": 4},
    {"name": "CADGeometry", "level": 2},
    {"name": "EnvironmentalEffects", "level": 3},
    {"name": "Scripting", "level": 1}
  ],
  "x3d:metadata": {
    "title": "Detailed Product Visualization",
    "creator": "Web3D Design Team",
    "description": "Interactive product visualization with exploded view animations",
    "created": "2023-05-15T10:25:00Z",
    "modified": "2023-08-22T15:40:00Z",
    "copyright": "© 2023 Example Corporation",
    "keywords": "product visualization, interactive 3D, web3d, exploded view"
  },
  "x3d:scene": {
    "nodes": 156,
    "polygons": 24850,
    "textures": 12,
    "animations": 5,
    "interactiveElements": 8
  }
}
```

## Common Use Cases

X3D is used in a variety of web and visualization applications:

- Interactive web-based 3D visualizations
- Educational and training simulations
- Scientific and medical visualization
- Web-based product configurators
- Cultural heritage digital representations
- Engineering and CAD visualization
- Geographic information systems (GIS)
- AR/VR content for web browsers

## Implementation Examples

### Basic Example

A simple X3D model reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Anatomical Heart Model",
  "description": "Interactive 3D visualization of human heart anatomy",
  "contentUrl": "https://example.com/models/heart.x3d",
  "encodingFormat": "model/x3d+xml",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Complete Example

For a complete model with detailed metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/"
  },
  "@type": "3DModel",
  "name": "Interactive Mechanical Assembly",
  "description": "Detailed mechanical assembly with interactive animation and exploded view",
  "contentUrl": "https://example.com/models/mechanical-assembly.x3d",
  "encodingFormat": "model/x3d+xml",
  "creator": {
    "@type": "Organization",
    "name": "Engineering Visualization Labs",
    "url": "https://evl.example.org"
  },
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "dateCreated": "2023-04-18",
  "x3d:version": "4.0",
  "x3d:profile": "Full",
  "x3d:components": [
    {"name": "Core", "level": 2},
    {"name": "Navigation", "level": 3},
    {"name": "Rendering", "level": 4},
    {"name": "Geometry3D", "level": 4},
    {"name": "CADGeometry", "level": 2},
    {"name": "Scripting", "level": 2},
    {"name": "Animation", "level": 3}
  ],
  "x3d:metadata": {
    "title": "Hydraulic Pump Assembly - Interactive Model",
    "creator": "CAD Conversion Team",
    "description": "Converted from native CAD format with interactive features added",
    "created": "2023-04-18T09:20:15Z",
    "modified": "2023-06-22T14:35:42Z",
    "copyright": "© 2023 Engineering Visualization Labs",
    "keywords": "hydraulic pump, engineering, mechanical, interactive, assembly, exploded view"
  },
  "x3d:scene": {
    "nodes": 342,
    "polygons": 156500,
    "textures": 24,
    "animations": 12,
    "interactiveElements": 15,
    "viewpoints": [
      {"name": "Overview", "description": "General view of the assembly"},
      {"name": "Intake", "description": "Focus on intake components"},
      {"name": "Pump Mechanism", "description": "Detailed view of pump mechanism"},
      {"name": "Exploded", "description": "Exploded view of all components"}
    ]
  },
  "x3d:interactivity": {
    "features": [
      {
        "name": "AssemblyAnimation",
        "type": "TimeSensor",
        "description": "Animation showing assembly process"
      },
      {
        "name": "OperationSimulation",
        "type": "Script",
        "description": "Interactive simulation of pump operation"
      },
      {
        "name": "ComponentHighlight",
        "type": "TouchSensor",
        "description": "Highlight components on mouse over"
      },
      {
        "name": "ExplodedViewControl",
        "type": "Script",
        "description": "Control for exploded view state"
      }
    ]
  },
  "x3d:rendering": {
    "lighting": "ThreePointSetup",
    "shadows": true,
    "materials": [
      {"name": "Metal", "type": "PhysicalMaterial"},
      {"name": "Rubber", "type": "PhysicalMaterial"},
      {"name": "Plastic", "type": "PhysicalMaterial"},
      {"name": "Glass", "type": "PhysicalMaterial"}
    ],
    "textures": [
      {"name": "MetalNormal", "type": "NormalMap"},
      {"name": "MetalRoughness", "type": "RoughnessMap"},
      {"name": "Labels", "type": "DiffuseMap"}
    ]
  }
}
```

### Web Integration Example

Example for embedding in HTML/WebXR environments:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/"
  },
  "@type": "3DModel",
  "name": "Web-Based Product Configurator",
  "description": "Interactive 3D product configurator for customizing features",
  "contentUrl": "https://example.com/configurator/product.x3d",
  "encodingFormat": "model/x3d+xml",
  "creator": {
    "@type": "Organization",
    "name": "Web3D Solutions",
    "url": "https://web3dsolutions.example.com"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "webIntegration",
      "name": "Web Integration",
      "value": {
        "framework": "X3DOM",
        "minVersion": "1.8.0",
        "webxrSupport": true,
        "htmlTemplate": "https://example.com/configurator/template.html",
        "fallbackRenderer": "WebGL",
        "accessibility": {
          "ariaLabels": true,
          "keyboardNavigation": true,
          "highContrastMode": true
        }
      }
    }
  ],
  "x3d:version": "4.0",
  "x3d:profile": "Interactive",
  "x3d:components": [
    {"name": "Core", "level": 2},
    {"name": "Navigation", "level": 2},
    {"name": "Rendering", "level": 3},
    {"name": "Geometry3D", "level": 3},
    {"name": "Scripting", "level": 1},
    {"name": "EventUtilities", "level": 1}
  ],
  "x3d:scene": {
    "nodes": 120,
    "polygons": 18500,
    "interactiveElements": 18
  },
  "x3d:interactivity": {
    "features": [
      {
        "name": "ColorSelector",
        "type": "Script",
        "description": "Change product color"
      },
      {
        "name": "FeatureToggle",
        "type": "Script",
        "description": "Toggle optional features"
      },
      {
        "name": "AnimatedPreview",
        "type": "TimeSensor",
        "description": "Animated product preview"
      }
    ]
  }
}
```

## JSON Schema Validation

For validating X3D namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "X3D Namespace Schema",
  "type": "object",
  "properties": {
    "x3d:version": {
      "type": "string",
      "description": "X3D specification version"
    },
    "x3d:profile": {
      "type": "string",
      "enum": ["Core", "Interchange", "Interactive", "Immersive", "Full", "MPEG4Interactive", "CADInterchange"],
      "description": "X3D profile that defines the feature set"
    },
    "x3d:components": {
      "type": "array",
      "description": "X3D components used in the model",
      "items": {
        "type": "object",
        "properties": {
          "name": { 
            "type": "string",
            "description": "Component name"
          },
          "level": { 
            "type": "integer",
            "description": "Component support level",
            "minimum": 1
          }
        },
        "required": ["name", "level"]
      }
    },
    "x3d:metadata": {
      "type": "object",
      "description": "Metadata information about the X3D scene",
      "properties": {
        "title": { "type": "string" },
        "creator": { "type": "string" },
        "description": { "type": "string" },
        "created": { 
          "type": "string",
          "format": "date-time"
        },
        "modified": { 
          "type": "string",
          "format": "date-time"
        },
        "copyright": { "type": "string" },
        "keywords": { "type": "string" }
      }
    },
    "x3d:scene": {
      "type": "object",
      "description": "Information about the X3D scene structure",
      "properties": {
        "nodes": { "type": "integer" },
        "polygons": { "type": "integer" },
        "textures": { "type": "integer" },
        "animations": { "type": "integer" },
        "interactiveElements": { "type": "integer" },
        "viewpoints": { 
          "type": "array",
          "items": { 
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "description": { "type": "string" }
            }
          }
        }
      }
    },
    "x3d:interactivity": {
      "type": "object",
      "description": "Interactive features in the X3D scene"
    },
    "x3d:rendering": {
      "type": "object",
      "description": "Rendering information for the X3D scene"
    }
  }
}
```

## JSON-LD Context

The X3D namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "x3d": "https://www.web3d.org/specifications/x3d-4.0/",
    "x3d:version": { "@id": "x3d:version" },
    "x3d:profile": { "@id": "x3d:profile" },
    "x3d:components": { "@id": "x3d:components" },
    "x3d:metadata": { "@id": "x3d:metadata" },
    "x3d:scene": { "@id": "x3d:scene" },
    "x3d:interactivity": { "@id": "x3d:interactivity" },
    "x3d:rendering": { "@id": "x3d:rendering" }
  }
}
```

## Implementation Considerations

When implementing the X3D namespace, keep these considerations in mind:

- **Browser Support**: Different browsers have varying support for X3D, consider using X3DOM or X_ITE frameworks
- **Profile Selection**: Choose the appropriate X3D profile based on feature needs (Core, Interactive, Full)
- **Rendering Performance**: Optimize polygon count and scene complexity for web performance
- **Progressive Loading**: Consider implementing progressive loading for large models
- **DOM Integration**: Leverage X3D's ability to integrate with HTML/DOM for interactive web experiences
- **Accessibility**: Implement proper accessibility features including ARIA attributes
- **Encoding Choice**: Select the most appropriate encoding (XML, JSON, Binary) based on use case
- **WebXR Integration**: For immersive experiences, leverage X3D's WebXR support

## Related Documentation

- [Interactive Asset Implementation](../implementation/interactive-assets.md)
- [Web-Based Implementation](../implementation/cross-platform-assets.md)
- [OpenXR Namespace](./openxr.md)
- [Cross-Platform Asset Implementation](../implementation/cross-platform-assets.md) 