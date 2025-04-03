---
sidebar_position: 2
---

# Metadata Structure

Proper organization of metadata ensures clear relationships, efficient loading, and consistent naming patterns. This guide covers key principles for structuring your metadata.

## Namespace and Type Declarations

Every object in your metadata should have clear type declarations:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview"
}
```

### Type Requirements

- **Main Objects**: Every top-level object needs an `@type`
- **Nested Objects**: All nested objects should have appropriate types
- **Arrays**: Each object in an array should declare its type
- **Namespaced Objects**: Use proper namespaced types where applicable

## Hierarchical Organization

### Entry Point Pattern

Use an ImageObject as the main entry point, especially for preview-focused metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Asset Preview",
  "contentUrl": "https://example.com/preview.jpg",
  "mainEntity": {
    "@type": "3DModel",
    "name": "3D Asset",
    "contentUrl": "https://example.com/model.glb"
  }
}
```

### Component Organization

For complex, multi-part assets, organize components clearly with `hasPart`:

```json
{
  "@type": "CreativeWork",
  "name": "Modular Asset",
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Main Body",
      "contentUrl": "https://example.com/body.glb"
    },
    {
      "@type": "3DModel",
      "name": "Accessories",
      "contentUrl": "https://example.com/accessories.glb"
    }
  ]
}
```

## Property Naming Conventions

### Schema.org Properties

Use standard Schema.org properties whenever possible:
- `name` for titles
- `description` for descriptions
- `contentUrl` for direct URLs
- `encodingFormat` for MIME types

### Custom Properties

For custom data, follow these patterns:
- Use `camelCase` for property IDs
- Be consistent with naming patterns
- Group related properties together
- Document custom property meanings

```json
{
  "@type": "CreativeWork",
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

## Multi-Standard Integration

When combining multiple standards, maintain clear organization:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/",
    "vrm": "https://vrm.dev/specifications/"
  },
  "@type": "3DModel",
  "name": "Avatar Model",
  
  // Core Schema.org properties
  "contentUrl": "https://example.com/avatar.glb",
  "encodingFormat": "model/gltf-binary",
  
  // Namespaced properties for specific standards
  "gltf:materials": [
    {
      "name": "Skin",
      "pbrMetallicRoughness": {
        "baseColorFactor": [0.8, 0.7, 0.6, 1.0]
      }
    }
  ],
  
  "vrm:humanoid": {
    "humanBones": {
      "hips": { "node": 1 },
      "spine": { "node": 2 }
    }
  }
}
```

## File Storage Considerations

### Effective Organization

- **Related Files**: Keep related files in the same directory
- **Logical Naming**: Use consistent, meaningful file names
- **Versioning**: Include version information when appropriate
- **Paths**: Use relative paths where possible for portability

### File Format Recommendations

- **Metadata**: Use .json for metadata files
- **Documentation**: Use .md or .html for documentation
- **Assets**: Use standard formats for 3D, image, and other content

## Optimization Strategies

### Performance Considerations

- Balance between embedding and linking
- Use progressive loading for large assets
- Optimize file organization for caching
- Consider platform-specific implementations

### Maintainability Practices

- Document relationships between components
- Use consistent naming and organization
- Create clear hierarchies of components
- Label versions appropriately

## Related Concepts

- [Fundamentals](./fundamentals.md): Core principles of metadata structure
- [Types of Assets](../types-of-assets.md): Schema.org types for different assets
- [Linking vs Embedding](../linking-vs-embedding.md): Strategies for referencing content 