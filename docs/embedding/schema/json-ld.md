---
sidebar_position: 2
---

# JSON-LD Standard

JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight, JSON-based format designed to serialize Linked Data. It enables the seamless integration of structured data into web applications, making it easier for developers to create interoperable web services and store Linked Data in JSON-based storage engines. JSON-LD is a World Wide Web Consortium (W3C) Recommendation, ensuring its status as a stable and widely accepted standard.
Wikipedia

For detailed information, you can refer to the official JSON-LD website: [JSON-LD](https://json-ld.org/)

## Core Concepts

### Context
The `@context` defines vocabularies and rules for interpreting metadata.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Sample Asset"
}
```

### Identifiers
Use `@id` to create globally unique identifiers for assets.

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "@id": "urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "asset-2024-001"
  },
  "name": "Identified Asset"
}
```

### Types
Use `@type` to specify the nature of resources.

```json
{
  "@context": "https://schema.org/",
  "@type": ["3DModel", "CreativeWork"],
  "name": "Multi-typed Asset",
  "description": "Asset with multiple type declarations"
}
```

## Linking Patterns

### Cross-Platform References
Link to the same asset across different platforms.

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "@id": "https://example.com/assets/model-123",
  "name": "Shared Asset",
  "sameAs": [
    "https://other-platform.com/models/model-123",
    "ipfs://QmXaXa1XaX...",
    "ar://asset/model-123"
  ]
}
```

### Related Resources
Connect assets with their related resources.

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Complex Asset",
  "isPartOf": {
    "@id": "https://example.com/collections/office-set",
    "@type": "CreativeWork",
    "name": "Office Furniture Collection"
  },
  "associatedMedia": {
    "@type": "ImageObject",
    "@id": "https://example.com/images/asset-preview",
    "name": "Asset Preview",
    "contentUrl": "https://example.com/images/preview.jpg"
  }
}
```

## Multi-Standard Integration

### Combining Standards
Use multiple vocabularies in a single document.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "citygml": "http://www.opengis.net/citygml/2.0"
  },
  "@type": "3DModel",
  "@id": "https://example.com/buildings/tower-01",
  "name": "Office Tower",
  
  "gltf:asset": {
    "@id": "#gltf-metadata",
    "version": "2.0",
    "copyright": "© 2024 Example Corp"
  },
  
  "citygml:building": {
    "@id": "#building-metadata",
    "function": "office",
    "height": 45.5,
    "storeysAboveGround": 15
  }
}
```

### Namespace Management
Organize properties from different standards clearly.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": {
      "@id": "https://www.khronos.org/gltf/",
      "@prefix": true
    },
    "mvmd": {
      "@id": "https://mvmd.org/v1/",
      "@prefix": true
    }
  },
  "@type": "3DModel",
  "name": "Namespaced Asset",
  
  "mvmd:renderProperties": {
    "quality": "high",
    "platform": "universal"
  },
  
  "gltf:materials": [{
    "name": "Metal",
    "pbrMetallicRoughness": {
      "metallicFactor": 1.0,
      "roughnessFactor": 0.5
    }
  }]
}
```

## Advanced Patterns

### Graph References
Link between different parts of your metadata.

```json
{
  "@context": "https://schema.org/",
  "@graph": [
    {
      "@id": "#scene",
      "@type": "Place",
      "name": "Virtual Office",
      "hasPart": [
        {"@id": "#desk"},
        {"@id": "#chair"}
      ]
    },
    {
      "@id": "#desk",
      "@type": "3DModel",
      "name": "Office Desk",
      "contentUrl": "https://example.com/models/desk.glb"
    },
    {
      "@id": "#chair",
      "@type": "3DModel",
      "name": "Office Chair",
      "contentUrl": "https://example.com/models/chair.glb"
    }
  ]
}
```

### Nested Contexts
Handle complex metadata hierarchies.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "asset": {
      "@id": "https://mvmd.org/v1/asset/",
      "@context": {
        "quality": "https://mvmd.org/v1/quality",
        "platform": "https://mvmd.org/v1/platform"
      }
    }
  },
  "@type": "3DModel",
  "name": "Complex Asset",
  "asset:metadata": {
    "quality": "high",
    "platform": "universal"
  }
}
```

### Issue: Namespace Conflicts
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "model": "https://mvmd.org/v1/model/",
    "asset": "https://mvmd.org/v1/asset/"
  },
  "@type": "3DModel",
  "name": "Conflict Example",
  "model:type": "furniture",
  "asset:type": "static"
}
```

### Issue: Deep Nesting
```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Nested Example",
  "subComponent": {
    "@id": "#sub1",
    "name": "Sub Component",
    "partOf": {"@id": "#main"}
  }
}
```

## Next Steps

- Review [Schema.org Standard](./schema-org.md) for core vocabulary
- See [Combining Standards](/combining-standards.md) for practical integration examples
- Check [Best Practices](..//implementation/best-practices.md) for implementation guidance