---
sidebar_position: 2
---

# Schema.org Namespace

This page covers how to use Schema.org and JSON-LD as the foundation for your metadata.

## About Schema.org

Schema.org provides a robust, extensible vocabulary for describing digital assets and experiences. As an open-source collaborative project, Schema.org continuously evolves to meet emerging needs across industries and use cases.

## JSON-LD Integration

JSON-LD (JavaScript Object Notation for Linked Data) is the recommended format for implementing Schema.org. It enables seamless integration of structured data into web applications and supports namespacing.

## Core Schema.org Types for Metaverse Assets

- **CreativeWork**: Most versatile base type for digital assets
- **MediaObject** and subtypes: For specific media formats
- **Place**: For locations and environments
- **Person/Organization**: For creators and owners
- **Action**: For interactive behaviors

## Implementing the Schema.org Namespace

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Example Asset"
}
```

### Linking Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Detailed Chair",
  "contentUrl": "https://example.com/models/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  }
}
```

### Embedding Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Asset with Properties",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "renderQuality",
      "name": "Render Quality",
      "value": "high"
    }
  ]
}
```

## Implementation Considerations

- Always include the Schema.org context (`"@vocab": "https://schema.org/"`)
- Choose the most specific type for your asset
- Use PropertyValue for custom properties
- Keep the structure clean and organized

## Related Concepts

- [Core Metadata Concepts](../concepts/core-metadata-concepts.md)
- [Types of Things](../concepts/types-of-things.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 