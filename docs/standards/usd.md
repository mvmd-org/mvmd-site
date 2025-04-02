---
sidebar_position: 4
---

# USD (Universal Scene Description)

## Overview

Universal Scene Description (USD) is an extensible framework for describing, composing, simulating, and collaborating on 3D scenes and assets. Developed by Pixar, USD has become an industry standard for high-fidelity 3D content creation and exchange across various platforms and applications.

USD provides a rich, flexible schema for representing 3D content and a powerful composition engine that allows multiple contributors to collaborate on complex scenes. The format supports layering, referencing, instancing, and other advanced features that make it particularly suitable for complex scene composition and rendering.

## Core Concepts

For metaverse asset metadata integration, key USD concepts include:

- **Stage**: The root container for all USD elements, representing an entire scene
- **Prim**: The fundamental compositional unit in USD (similar to objects or nodes)
- **Properties**: Attributes and relationships that define prims
- **Layers**: Allow non-destructive scene composition through overrides
- **References**: Link to external assets or reuse content within a scene
- **Schemas**: Define the types of prims and their expected properties
- **Variants**: Allow for alternate representations of the same content

## Implementation

### Namespace Declaration

To reference the USD namespace in MVMD metadata:

```json
{
  "@context": {
    "usd": "https://mvmd.io/standards/usd/"
  }
}
```

### External Reference Pattern

When referencing a USD file:

```json
{
  "@context": {
    "usd": "https://mvmd.io/standards/usd/"
  },
  "usd:asset": {
    "uri": "https://example.com/assets/scene.usd",
    "format": "USD",
    "version": "22.11"
  },
  "usd:stage": {
    "defaultPrim": "World",
    "upAxis": "Y"
  }
}
```

### Embedding Pattern

When including USD-specific metadata:

```json
{
  "@context": {
    "usd": "https://mvmd.io/standards/usd/"
  },
  "usd:asset": {
    "format": "USD",
    "version": "22.11"
  },
  "usd:stage": {
    "defaultPrim": "World",
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  "usd:prims": [
    {
      "path": "/World/Room",
      "type": "Xform"
    },
    {
      "path": "/World/Room/Furniture",
      "type": "Xform"
    }
  ],
  "usd:variants": [
    {
      "name": "Furniture_Style",
      "selections": ["Modern"]
    }
  ]
}
```

## Common Use Cases

USD is commonly used in:

- Film and animation production pipelines
- Architectural visualization and virtual production
- AR/VR content creation
- Game development with high-fidelity assets
- Digital twins and industrial metaverse applications
- Multi-user collaborative environments
- Real-time rendering systems

## Implementation Examples

### Basic Example

```json
{
  "@context": {
    "mvmd": "https://mvmd.io/",
    "usd": "https://mvmd.io/standards/usd/"
  },
  "mvmd:id": "urn:mvmd:asset:scene:123",
  "mvmd:name": "Office Environment",
  "mvmd:description": "A detailed office space for virtual meetings",
  "usd:asset": {
    "uri": "https://example.com/assets/office_scene.usd",
    "format": "USD",
    "version": "22.11"
  },
  "usd:stage": {
    "defaultPrim": "Office",
    "upAxis": "Y"
  }
}
```

### Complete Example

```json
{
  "@context": {
    "mvmd": "https://mvmd.io/",
    "usd": "https://mvmd.io/standards/usd/"
  },
  "mvmd:id": "urn:mvmd:asset:scene:456",
  "mvmd:name": "Interactive City Block",
  "mvmd:description": "A detailed city block with interactive elements",
  "mvmd:creator": "Metaverse Studios",
  "usd:asset": {
    "uri": "https://example.com/assets/city_block.usd",
    "format": "USD",
    "version": "22.11"
  },
  "usd:stage": {
    "defaultPrim": "CityBlock",
    "upAxis": "Y",
    "metersPerUnit": 1.0,
    "timeCodesPerSecond": 24
  },
  "usd:prims": [
    {
      "path": "/CityBlock/Buildings",
      "type": "Xform"
    },
    {
      "path": "/CityBlock/Streets",
      "type": "Xform"
    },
    {
      "path": "/CityBlock/Props",
      "type": "Xform"
    }
  ],
  "usd:variants": [
    {
      "name": "TimeOfDay",
      "selections": ["Day"]
    },
    {
      "name": "Weather",
      "selections": ["Clear"]
    }
  ],
  "usd:layers": [
    {
      "name": "base",
      "path": "city_block.usd"
    },
    {
      "name": "lighting",
      "path": "city_block.lighting.usd"
    }
  ],
  "usd:payloadPolicy": "onDemand"
}
```

## JSON Schema Validation

For validating USD namespace references in MVMD, the following schema properties are defined:

```json
{
  "usd:asset": {
    "type": "object",
    "properties": {
      "uri": { "type": "string", "format": "uri" },
      "format": { "type": "string", "enum": ["USD", "USDA", "USDC", "USDZ"] },
      "version": { "type": "string" }
    },
    "required": ["format"]
  },
  "usd:stage": {
    "type": "object",
    "properties": {
      "defaultPrim": { "type": "string" },
      "upAxis": { "type": "string", "enum": ["Y", "Z"] },
      "metersPerUnit": { "type": "number", "minimum": 0 },
      "timeCodesPerSecond": { "type": "number", "minimum": 0 }
    }
  },
  "usd:prims": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "path": { "type": "string" },
        "type": { "type": "string" }
      },
      "required": ["path", "type"]
    }
  },
  "usd:variants": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "selections": { 
          "type": "array",
          "items": { "type": "string" }
        }
      },
      "required": ["name", "selections"]
    }
  },
  "usd:layers": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "path": { "type": "string" }
      },
      "required": ["name", "path"]
    }
  }
}
```

## JSON-LD Context

The JSON-LD context for the USD namespace:

```json
{
  "@context": {
    "usd": "https://mvmd.io/standards/usd/",
    "asset": {
      "@id": "usd:asset",
      "@type": "@json"
    },
    "stage": {
      "@id": "usd:stage",
      "@type": "@json"
    },
    "prims": {
      "@id": "usd:prims",
      "@type": "@json",
      "@container": "@list"
    },
    "variants": {
      "@id": "usd:variants",
      "@type": "@json",
      "@container": "@list"
    },
    "layers": {
      "@id": "usd:layers",
      "@type": "@json",
      "@container": "@list"
    }
  }
}
```

## Implementation Considerations

When integrating USD with MVMD metadata:

- Choose the appropriate USD format (USD, USDA, USDC, USDZ) based on your use case
- Consider performance implications of large USD files in real-time contexts
- Use variants to support multiple configurations with minimal duplication
- Leverage USD layers for non-destructive editing and composition
- Be mindful of payload policies to optimize loading strategies

## Related Concepts

- [3D Standards Overview](/docs/standards/overview)
- [glTF Standard](/docs/standards/gltf)
- [3D Asset Profiles](/docs/profiles/3d-asset) 