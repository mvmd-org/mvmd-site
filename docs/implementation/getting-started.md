---
sidebar_position: 2
---

# Getting Started

This guide provides practical steps for implementing your first MVMD-compliant metadata.

## Implementation Workflow

### 1. Choose Your Asset Type

Select the appropriate Schema.org type for your asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Office Chair"
}
```

Different assets require different types:
- **3DModel**: For individual 3D objects
- **CreativeWork**: For collections or complex assets
- **Place/VirtualLocation**: For environments and spaces
- **MediaObject subtypes**: For specific media formats

### 2. Add Essential Properties

Include the required properties for your asset type:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Office Chair",
  "description": "Ergonomic office chair with adjustable height",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc."
  },
  "contentUrl": "https://example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### 3. Add Standard-Specific Properties

Include properties from relevant standards using namespaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Office Chair",
  "contentUrl": "https://example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
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

### 4. Define Relationships

Establish clear relationships between components:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "name": "Office Furniture Set",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Office Chair",
      "contentUrl": "https://example.com/chair.glb"
    },
    {
      "@type": "3DModel",
      "name": "Office Desk",
      "contentUrl": "https://example.com/desk.glb"
    }
  ]
}
```

### 5. Validate Your Metadata

Once you've created your metadata:
1. Use the [MVMD Validator](../tools/validator.md)
2. Check Schema.org property usage
3. Verify standard-specific properties
4. Test integration with target platforms

## Common Implementation Patterns

### Multiple Asset Formats

Provide multiple file formats for the same asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Office Chair",
  "encoding": [
    {
      "@type": "MediaObject",
      "encodingFormat": "model/gltf-binary",
      "contentUrl": "https://example.com/chair.glb"
    },
    {
      "@type": "MediaObject",
      "encodingFormat": "model/usd",
      "contentUrl": "https://example.com/chair.usd"
    }
  ]
}
```

### Asset Variations

Define different versions of the same asset:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Office Chair",
  "workExample": [
    {
      "@type": "3DModel",
      "name": "Office Chair - Blue",
      "contentUrl": "https://example.com/chair-blue.glb"
    },
    {
      "@type": "3DModel",
      "name": "Office Chair - Red",
      "contentUrl": "https://example.com/chair-red.glb"
    }
  ]
}
```

## Next Steps

After implementing your first metadata:

1. Explore the [Integration Profiles](../integration-profiles/overview.md) for your specific asset type
2. Review [Implementation Best Practices](./best-practices.md) for optimization tips
3. Learn about [Standards](../standards/overview.md) for integrating specialized standards
4. Consider [Composable Assets](./composable.md) for complex, multi-component objects

## Related Namespaces

- [Schema.org](../standards/schema-org.md): Core vocabulary for getting started
- [3D Standards](../standards/overview.md): Implementation patterns for 3D assets
- [Geospatial Standards](../standards/overview.md): Location data patterns
- [Trust & Provenance](../standards/overview.md): Authentication and verification
- [OpenXR Standards](../standards/openxr.md): XR-specific implementation patterns
