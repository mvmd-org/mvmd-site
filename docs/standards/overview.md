<!-- Path: /docs/standards/overview.md -->
---
sidebar_position: 1
---

# Standards Registry Overview

The MVMD Standards Registry catalogs metadata standards essential for describing and managing Metaverse assets. Each standard serves specific purposes while maintaining interoperability through JSON-LD.

## Core Metadata Standards

### Schema.org
**Purpose**: Provides foundational vocabulary for describing digital assets.

**Key Uses**:
- Basic asset description
- Creator attribution
- Licensing information
- Content categorization

**Example**:
```json
{
   "@context": "https://schema.org/",
   "@type": "3DModel",
   "name": "Modern Building",
   "description": "High-rise office building with detailed interior",
   "creator": {
      "@type": "Organization",
      "name": "Virtual Architects Inc."
   },
   "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### JSON-LD
**Purpose**: Enables linking of data across different standards and platforms.

**Key Uses**:
- Standard integration
- Cross-platform references
- Semantic relationships

**Example**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "@base": "https://example.com/assets/"
  },
  "@id": "building-123",
  "@type": "3DModel",
  "name": "Modern Building",
  "sameAs": [
    "https://other-platform.com/assets/building-123",
    "ipfs://QmXaXa1XaX..."
  ]
}
```

## 3D Asset Standards

### glTF (GL Transmission Format)
**Purpose**: Efficient delivery and rendering of 3D models.

**Key Features**:
- 3D model structure
- Material definitions
- Animation data
- Scene hierarchy

**Example**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Detailed Chair",
  "gltf:transform": {
    "scale": [1.0, 1.0, 1.0],
    "rotation": [0, 0, 0, 1],
    "translation": [0, 0.5, 0]
  },
  "gltf:materials": [{
    "name": "Fabric",
    "pbrMetallicRoughness": {
      "baseColorFactor": [0.2, 0.2, 0.8, 1.0],
      "metallicFactor": 0.0,
      "roughnessFactor": 0.8
    }
  }]
}
```

### USD (Universal Scene Description)
**Purpose**: Complex scene composition and management.

**Key Features**:
- Scene composition
- Asset variations
- Layering system
- Animation blending

**Example**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "3DModel",
  "name": "Office Scene",
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  "usd:composition": {
    "defaultPrim": "Office",
    "layers": [
      {
        "name": "base",
        "path": "/Office/Base"
      },
      {
        "name": "furniture",
        "path": "/Office/Furniture"
      }
    ]
  }
}
```

## Geospatial Standards

### CityGML
**Purpose**: Urban environment and architectural modeling.

**Key Features**:
- Building information
- Urban relationships
- Semantic structure
- Multiple LODs (Levels of Detail)

**Example**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "citygml": "http://www.opengis.net/citygml/2.0"
  },
  "@type": "Place",
  "name": "Downtown Office",
  "citygml:building": {
    "function": "office",
    "height": 45.5,
    "storeysAboveGround": 15,
    "lod": 2,
    "footprint": {
      "coordinates": [[
        [-122.4194, 37.7749],
        [-122.4194, 37.7750],
        [-122.4193, 37.7750],
        [-122.4193, 37.7749]
      ]]
    }
  }
}
```

### 3D Tiles
**Purpose**: Streaming large-scale 3D geospatial datasets.

**Key Features**:
- Spatial hierarchy
- Level of detail management
- Efficient streaming
- Spatial indexing

**Example**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "3dtiles": "https://www.ogc.org/standards/3dtiles/"
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

## Authentication Standards

### C2PA (Coalition for Content Provenance and Authenticity)
**Purpose**: Content authenticity and provenance tracking.

**Key Features**:
- Digital signatures
- Creation history
- Edit tracking
- Rights management

**Example**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "3DModel",
  "name": "Verified Asset",
  "c2pa:claim": {
    "title": "Asset Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Architects Inc.",
      "identifier": "did:example:creator123"
    },
    "signature": {
      "type": "Ed25519Signature2020",
      "created": "2024-03-15T10:30:00Z"
    }
  }
}
```

## Standards Selection

When choosing standards for your implementation:

1. **Start with Schema.org**
   - Provides basic discoverability
   - Ensures broad compatibility
   - Supports general metadata needs

2. **Add Domain Standards**
   - 3D assets: Add glTF or USD
   - Environments: Include CityGML or 3D Tiles
   - Authentication: Incorporate C2PA

3. **Consider Scale**
   - Small assets: Basic Schema.org may suffice
   - Complex scenes: Add USD
   - Large environments: Include 3D Tiles

## Next Steps

- Review detailed documentation for each standard in the following sections
- See [Combining Standards](/combining-standards.md) for integration patterns
- Check [Implementation Guide](/implementation/getting-started.md) for practical guidance
