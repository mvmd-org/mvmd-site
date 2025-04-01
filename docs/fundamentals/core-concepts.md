---
sidebar_position: 2
---

# Fundamentals

This guide covers the essential concepts needed to understand and implement metadata for Metaverse assets.
At its core, MVMD builds upon Schema.org's vocabulary and JSON-LD's syntax to create a standardized way to describe
Metaverse assets.

We will be building on top of these fundamentals throughout the documentation, so you will see it often.

## Schema.org Foundation

Please review the official docs at [schema.org](https://schema.org/).

Schema.org is a collaborative, community-driven effort to create and maintain a shared vocabulary for structured data.
It provides:

- A standardized vocabulary for describing digital content
- Well-defined types and properties
- Regular updates and improvements
- Broad industry adoption

MVMD uses Schema.org as its foundation because:

- It's widely supported across platforms
- It has a rich vocabulary for digital assets
- It's extensible for specialized needs
- It integrates well with search engines and data systems

## JSON-LD

Please review the official docs at [json-ld.org](https://json-ld.org/).

JSON-LD (JavaScript Object Notation for Linked Data) is our chosen format because it:

- Is easy to read and write
- Supports namespacing and context
- Enables linked data connections
- Supports complex references to avoid repeating data
- Maintains compatibility with regular JSON

Basic JSON-LD structure:

```json
{
  "@context": "https://schema.org/",
  "@type": "Thing",
  "name": "Example Object"
}
```

## Required Context Elements

Every MVMD metadata object must include two core contexts:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

### 1. Schema.org (@vocab)

The base vocabulary for all metadata properties, providing the foundation for describing digital assets and their
relationships.

### 2. MVMD Version (mvmd)

Indicates compliance with MVMD standards and enables version-specific features:

- Required in all MVMD metadata
- Enables validation of version-specific features
- Supports backwards compatibility

## Additional Contexts

When working with specific types of assets or standards, you can add specialized contexts to your metadata.
These additional contexts allow you to:

- Include standard-specific properties and types
- Maintain semantic clarity in your metadata
- Enable validation for specific standards
- Support specialized features and capabilities
- Embed data directly in the metadata instead of referencing external files. 

For example, when working with 3D models, you might include contexts for glTF and/or USD:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  }
}
```
_Please see the [Embedding](/embedding/overview.md) section for details._


### Namespaces

Use for standard-specific properties, use namespaces, which use the context's name as a prefix:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "CreativeWork",
  "gltf:materials": [
    {
      "@type": "gltf:Material",
      "name": "Metal",
      "pbrMetallicRoughness": {
        "metallicFactor": 1.0,
        "roughnessFactor": 0.5
      }
    }
  ]
}
```
_Please see the [Embedding](/embedding/overview.md) section for details._

## Proper Value Handling

MVMD follows specific patterns for handling different types of values:

### Simple Values

Use direct values for basic properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Asset Name",
  "description": "Asset description"
}
```

### Structured Values

Use `PropertyValue` for complex or custom properties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "additionalProperty": {
    "@type": "PropertyValue",
    "propertyID": "customField",
    "name": "Custom Field Name",
    "value": "custom value"
  }
}
```

### Multiple Values

Use arrays for multiple values, ensuring each object has proper type declarations:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "field1",
      "value": "value1"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "field2",
      "value": "value2"
    }
  ]
}
```

## Type of Thing

The choice of root object type (the type of thing) affects what properties and relationships are available.
The CreativeWork is used as the primary entry point for most assets becase Schema.org allows for most object types with the CreativeWork.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Asset Name"
}
```

_We cover the root object types in detail in the [Types of Things](/concepts/types-of-things.md) page and demonstrate
their use further in the [Recipes](/recipes/overview) section._

## Extension Points

MVMD provides several standard ways to extend metadata:

### Additional Properties

Use for custom data that doesn't fit standard properties:

```json
{
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "customMetric",
      "name": "Custom Metric",
      "value": 42
    }
  ]
}
```

## What's Next

These fundamentals provide the foundation for implementing Metaverse metadata. From here, you can:

- Learn about specific types in [Types of Things](./types-of-things.md)
- Understand asset relationships in [Asset Types](./composition.md)
- Explore content strategies in [URLs vs Embedding](./uris-vs-embedding.md)

Remember: The concepts covered here are universal to all MVMD implementations. More specific patterns and
implementations are covered in other sections of the documentation.
