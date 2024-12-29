---
sidebar_position: 5
---


# References
Types can reference each other in several ways, each serving a different purpose in describing relationships between assets:

## Direct References
Simple references to other objects using their URLs:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "image": "https://example.com/preview.jpg",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "contentUrl": "https://example.com/model.glb"
}
```

## Structured References
Full object references that include complete metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "image": {
    "@type": "ImageObject",
    "name": "Character Preview",
    "contentUrl": "https://example.com/preview.jpg",
    "encodingFormat": "image/jpeg",
    "width": "1024",
    "height": "1024"
  }
}
```

## Primary Entity References
Using `mainEntity` to indicate the primary subject of a metadata object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Character Preview Image",
  "contentUrl": "https://example.com/preview.jpg",
  "mainEntity": {
    "@type": "3DModel",
    "name": "Character Model",
    "contentUrl": "https://example.com/model.glb",
    "encodingFormat": "model/gltf-binary"
  }
}
```

## Alternative Version References
Using `sameAs` to link to the same asset in different locations or formats:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/model.glb",
  "sameAs": [
    "https://other-platform.com/assets/character-123",
    "ipfs://QmXaXa1XaX...",
    "ar://asset/character-123"
  ]
}
```

## Media References
Using `associatedMedia` to link to related media assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "contentUrl": "https://example.com/model.glb",
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Texture Map",
      "contentUrl": "https://example.com/texture.jpg",
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "VideoObject",
      "name": "Animation Preview",
      "contentUrl": "https://example.com/preview.mp4",
      "encodingFormat": "video/mp4"
    }
  ]
}
```

## Embedded Content References
Using `encodesCreativeWork` to indicate embedded or encoded content:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Kiosk",
  "contentUrl": "https://example.com/kiosk.glb",
  "encodesCreativeWork": [
    {
      "@type": "ImageObject",
      "name": "Display Content",
      "contentUrl": "https://example.com/display.jpg"
    },
    {
      "@type": "TextObject",
      "name": "Information Text",
      "contentUrl": "https://example.com/info.txt"
    }
  ]
}
```

## Reference Best Practices

1. **Choose the Right Reference Type**
    - Use `image` for primary visual representations
    - Use `mainEntity` to indicate the primary subject
    - Use `sameAs` for alternative versions
    - Use `associatedMedia` for related content
    - Use `encodesCreativeWork` for embedded content

2. **Structured vs. Direct References**
    - Use structured references when additional metadata is needed
    - Use direct URL references for simple links
    - Be consistent within your implementation
    - Document your reference strategy

3. **Reference Maintenance**
    - Keep URLs up to date
    - Validate references regularly
    - Document reference relationships
    - Handle missing references gracefully
