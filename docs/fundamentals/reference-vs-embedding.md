---
sidebar_position: 6
---

# URIs vs Embedding

When working with metadata for metaverse assets, there are two primary approaches to handling content: referencing external files via URIs and embedding data directly in the metadata. This guide explains the fundamental differences and use cases for each approach.

## When to Use Each

### Use URLs When:
- Content is large
- Content needs to be cached
- Content is shared across assets
- Content updates independently
- Progressive loading is needed

### Use Embedding When:
- Data is small
- Data is specific to the asset
- Quick access is required
- Offline support is needed
- Data consistency is critical


## Basic Concepts

### URL References
URLs point to external files that contain the actual content. This is the simplest approach:

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


## Reference Types

Here are all the ways to reference external files in MVMD:

### Direct URL
Simple string URL:
```json
{
  "@type": "ImageObject",
  "contentUrl": "https://example.com/image.jpg"
}
```

### Thumbnail
Simple thumbnail with just URL:
```json
{
  "@type": "3DModel",
  "thumbnail": "https://example.com/thumbnail.jpg"
}
```
Detailed thumbnail data:
```json
{
  "@type": "3DModel",
   "thumbnail": {
      "contentUrl": "https://example.com/preview-thumb.jpg",
      "encodingFormat": "image/jpeg",
      "width": "256",
      "height": "256"
   }
}
```


### URL Array
Multiple alternative URLs:
```json
{
  "@type": "3DModel",
  "sameAs": [
    "https://example.com/model.glb",
    "ipfs://QmXaXa1XaX..."
  ]
}
```

### URL Object
URL with additional metadata:
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

### Associated Media URL
Related media references:
```json
{
  "@type": "3DModel",
  "associatedMedia": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/texture.jpg"
  }
}
```

### Encoded Content URL
Content encoded or embedded in the asset:
```json
{
  "@type": "3DModel",
  "encodesCreativeWork": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/display.jpg"
  }
}
```


## Embedded Content
Data is included directly within the metadata structure using appropriate namespaces:

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
_For detailed examples of embedding different types of data, see the [Embedding section](/embedding/overview.md)._



## Best Practices

1. **URL Management**
    - Use absolute URLs
    - Include fallback URLs
    - Consider CDN usage
    - Plan for URL changes
    - Handle failed loads

2. **Embedding Management**
    - Limit embedded data size
    - Use appropriate namespaces
    - Validate embedded data
    - Consider parsing impact
    - Document data structures

3. **Mixed Approach**
    - Combine when appropriate
    - Keep references organized
    - Document relationships
    - Consider load order
    - Plan update strategies

