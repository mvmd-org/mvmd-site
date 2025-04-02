---
sidebar_position: 4
---

# Linking vs. Embedding

## Overview

MVMD supports two approaches for including metadata with digital assets:

1. **Linking**: References external resources with URIs
2. **Embedding**: Includes metadata directly within the asset or metadata file

Each approach has distinct advantages for different use cases.

## Linking Pattern

Linking uses URIs to reference external resources:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Organization",
    "name": "Design Studio",
    "url": "https://example.com/studio"
  }
}
```

### When to Use Linking

- Large assets that would be inefficient to embed
- Resources that need to be independently updated
- Assets used across multiple contexts
- Resources managed by different systems
- Public or widely shared content

### Advantages of Linking

- Reduced file size for the metadata document
- Independent update cycles for linked resources
- Shared resources can be referenced from multiple places
- Clear separation of concerns between systems

## Embedding Pattern

Embedding includes metadata directly within the asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "encodingFormat": "model/gltf-binary",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "modelProperties",
      "name": "Model Properties",
      "value": {
        "polyCount": 12500,
        "materialCount": 5,
        "animationCount": 3
      }
    }
  ]
}
```

### When to Use Embedding

- Critical metadata that must stay with the asset
- Self-contained assets that need to work offline
- Properties that rarely change
- Data that is small in size
- Core configuration details

### Advantages of Embedding

- Self-contained resources that work offline
- No dependency on external resource availability
- Simplified asset distribution and management
- Guaranteed data consistency with the asset

## Mixed Approach

Many implementations use both patterns:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Organization",
    "name": "Design Studio",
    "url": "https://example.com/studio"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "renderSettings",
      "name": "Render Settings",
      "value": {
        "preferredRenderer": "PBR",
        "lightingModel": "standard",
        "shadowQuality": "high"
      }
    }
  ]
}
```

## Decision Criteria

When deciding between linking and embedding, consider:

1. **File size**: Large data should be linked, small data can be embedded
2. **Update frequency**: Frequently changing data should be linked
3. **Distribution model**: Widely distributed assets benefit from embedding essential data
4. **Offline requirements**: Assets that need to work offline should embed critical metadata
5. **Dependency management**: Independent resources should be linked

## Implementation in Namespaces

Each [namespace](../standards/overview.md) supports both linking and embedding patterns:

- [Schema.org](../standards/schema-org.md): Core vocabulary for both patterns
- [3D Standards](../standards/overview.md): 3D-specific implementation
- [Geospatial Standards](../standards/overview.md): Location data patterns
- [Trust & Provenance](../standards/overview.md): Authentication information
