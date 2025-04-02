---
sidebar_position: 1
---

# Namespaces Overview

Namespaces allow you to integrate different metadata standards into a single JSON-LD document. This section explains how to declare, reference, and embed standards-specific metadata.

## What Are Namespaces?

In MVMD, namespaces are identifiers that:

- Distinguish properties from different standards
- Prevent naming conflicts between standards
- Enable clear attribution of each property's source
- Allow embedding structured data from specialized standards

## How Namespaces Work

Namespaces are declared in the `@context` object and then used as prefixes for properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "gltf:materials": [
    {
      "name": "Skin",
      "pbrMetallicRoughness": {
        "baseColorFactor": [1.0, 0.8, 0.7, 1.0]
      }
    }
  ]
}
```

In this example, `gltf:` identifies properties from the glTF standard.

## Supported Standards

MVMD supports integration with multiple standards through namespaces:

- [Schema.org](./schema-org.md): Core vocabulary for general metadata
- [3D Standards](./3d-standards.md): For 3D models and scenes (glTF, USD, VRM)
- [Geospatial Standards](./geospatial-standards.md): For location and spatial data
- [Trust & Provenance](./trust-provenance.md): For authentication and verification

## When to Use Namespaces

Use namespaces when you need to:

- Embed standard-specific data directly within metadata
- Combine properties from multiple standards
- Include technical details from specialized domains
- Ensure interoperability across platforms

For guidance on when to embed versus link to external resources, see [Linking vs Embedding](../concepts/linking-vs-embedding.md).

## Best Practices

- Define all namespaces in the `@context` object
- Use consistent namespace prefixes
- Only embed essential standard-specific data
- Link to external files for large content
- Validate embedded data against standard specifications

## Getting Started

Browse the standards in this section to learn how to:
1. Properly declare each namespace
2. Link to standard-specific resources
3. Embed standard-specific data when appropriate
4. Follow best practices for each standard 