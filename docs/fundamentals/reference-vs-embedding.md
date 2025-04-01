---
sidebar_position: 6
---

# Reference vs Embedding

When working with metadata for metaverse assets, there are two primary approaches to handling content: referencing external files via URIs and embedding data directly in the metadata. This guide explains the fundamental differences and use cases for each approach.

## When to Use Each Approach

### Use References (URLs) When:
- Content is large (3D models, textures, etc.)
- Content needs to be cached independently
- Content is shared across multiple assets
- Content updates independently of metadata
- Progressive loading is needed
- Bandwidth optimization is important

### Use Embedding When:
- Data is small (simple properties, transforms, etc.)
- Data is specific to the asset and not reused
- Quick access without additional requests is required
- Offline support is needed
- Data consistency is critical

## Reference Approaches

References use URLs to point to external files that contain the actual content. Here are the main ways to reference external resources:

### Direct URL Reference

The simplest approach uses a direct URL string:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "contentUrl": "https://example.com/model.glb"
}
```

### Thumbnail Reference

For preview images:

```json
{
  "@type": "3DModel",
  "thumbnail": "https://example.com/thumbnail.jpg"
}
```

Or with more detailed information:

```json
{
  "@type": "3DModel",
   "thumbnail": {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/preview-thumb.jpg",
      "encodingFormat": "image/jpeg",
      "width": 256,
      "height": 256
   }
}
```

### Multiple Alternative URLs

For providing multiple access options:

```json
{
  "@type": "3DModel",
  "sameAs": [
    "https://example.com/model.glb",
    "ipfs://QmXaXa1XaX..."
  ]
}
```

### URL with Additional Metadata

When additional information about the URL is needed:

```json
{
  "@type": "3DModel",
  "url": {
    "@type": "URL",
    "url": "https://example.com/model.glb",
    "fileFormat": "model/gltf-binary"
  }
}
```

### Associated Media References

For related media files:

```json
{
  "@type": "3DModel",
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/texture.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "VideoObject",
      "contentUrl": "https://example.com/preview.mp4",
      "encodingFormat": "video/mp4"
    }
  ]
}
```

## Embedding Approaches

Embedding includes data directly within the metadata structure, typically using appropriate namespaces:

### Simple Property Embedding

For basic properties:

```json
{
  "@type": "3DModel",
  "name": "Simple Cube",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 1200
    }
  ]
}
```

### Namespaced Structured Data

For more complex data structures using namespaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Detailed Model",
  "gltf:asset": {
    "version": "2.0",
    "generator": "Example Studio 1.0"
  },
  "gltf:transform": {
    "translation": [0, 1, 0],
    "rotation": [0, 0, 0, 1],
    "scale": [1, 1, 1]
  }
}
```

### Complete Embedded Content

In some cases, the entire content can be embedded:

```json
{
   "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/",
      "gltf": "https://www.khronos.org/gltf/"
   },
   "@type": "3DModel",
   "name": "Simple Cube Model",
   "encodingFormat": "model/gltf+json",
   "gltf": {
      "@type": "gltf:Asset",
      "version": "2.0",
      "scenes": [{
         "@type": "gltf:Scene",
         "name": "SimpleScene",
         "nodes": [0]
      }],
      "nodes": [{
         "@type": "gltf:Node",
         "name": "Cube",
         "mesh": 0
      }],
      "meshes": [{
         "@type": "gltf:Mesh",
         "name": "SimpleCube",
         "primitives": [{
            "@type": "gltf:MeshPrimitive",
            "attributes": {
               "@type": "gltf:Attributes",
               "POSITION": 0
            },
            "indices": 1,
            "material": 0
         }]
      }]
   }
}
```

## Hybrid Approach

Most real-world metadata will use a combination of references and embedding:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/character.glb",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "gltf:transform": {
    "translation": [0, 0, 0],
    "rotation": [0, 0, 0, 1],
    "scale": [1, 1, 1]
  },
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Atlas",
      "contentUrl": "https://example.com/textures.jpg"
    }
  ]
}
```

## Best Practices

### For References

1. **Use Absolute URLs**: Ensure URLs are fully qualified
2. **Include Fallback URLs**: Provide alternative sources when possible
3. **Consider CDN Usage**: Use content delivery networks for frequently accessed resources
4. **Plan for URL Changes**: Include permanent identifiers when available
5. **Handle Failed Loads**: Provide fallback mechanisms for unavailable resources

### For Embedding

1. **Limit Embedded Data Size**: Only embed small to medium data structures
2. **Use Appropriate Namespaces**: Clearly separate embedded data by standard
3. **Validate Embedded Data**: Ensure embedded content follows the appropriate schemas
4. **Consider Parsing Impact**: Be mindful of the performance impact of complex embedded data
5. **Document Data Structures**: Provide clear documentation for custom embedded formats

### For Mixed Approaches

1. **Choose Wisely**: Reference large files, embed small data
2. **Keep References Organized**: Group related references logically
3. **Document Relationships**: Clearly indicate how references and embedded data relate
4. **Consider Load Order**: Plan the sequence in which resources will be loaded
5. **Plan Update Strategies**: Determine how updates will affect both references and embedded data

## Next Steps

- Learn how to [create basic metadata](../guides/basic/create-metadata.md) following these principles
- Explore [structure and composition](./structure-and-composition.md) for more complex relationships
- Understand how to [combine multiple standards](./standards-compatibility.md) in your metadata

