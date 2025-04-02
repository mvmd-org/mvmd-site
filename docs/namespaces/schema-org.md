---
sidebar_position: 2
---

# Schema.org Namespace

This page covers how to use Schema.org and JSON-LD as the foundation for your metadata.

## About Schema.org

[Schema.org](https://schema.org/) is a collaborative project that creates, maintains, and promotes structured data schemas for the internet. It provides a comprehensive vocabulary for describing digital assets and experiences.

Schema.org is used as the core vocabulary in MVMD because:
- It's widely adopted and recognized
- It provides flexible, extensible types and properties
- It works seamlessly with JSON-LD
- It has strong search engine and discovery support

## Core Schema.org Types

For metaverse assets, the most important Schema.org types are:

- **CreativeWork**: Base type for most assets
- **MediaObject/3DModel**: For media content
- **Place/VirtualLocation**: For locations
- **Event**: For timed experiences
- **Person/Organization**: For creators and owners

For detailed information on these types, see [Types of Assets](../concepts/types-of-assets.md).

## Implementing the Schema.org Namespace

### Namespace Declaration

Schema.org is set as the default vocabulary using `@vocab`:

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

Basic Schema.org implementation with external resource links:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Virtual Chair",
  "contentUrl": "https://example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  }
}
```

### Embedding Example

Using Schema.org's structured data capabilities:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Configurable Asset",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "renderQuality",
      "name": "Render Quality",
      "value": "high"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "interactivity",
      "name": "Interactivity Level",
      "value": "full"
    }
  ]
}
```

## Implementation Considerations

- **Required Properties**: Always include `@context` with Schema.org vocabulary and `@type`
- **Type Selection**: Choose the most specific appropriate type for your asset
- **Custom Properties**: Use PropertyValue objects for custom data
- **Structured Data**: Use nested objects with proper type declarations

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 