---
sidebar_position: 1
---

# 3D Model Example

This example demonstrates how to create metadata for a standard 3D model using MVMD. The example follows best practices for a glTF 3D model with textures and thumbnails.

## Basic 3D Model Metadata

Here's a complete example of metadata for a 3D model:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "@id": "https://example.com/models/office-chair",
  "name": "Ergonomic Office Chair",
  "description": "High-quality 3D model of an ergonomic office chair with adjustable features. Includes high-resolution textures and PBR materials.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "SKU",
    "value": "MOD-CHAIR-001"
  },
  "creator": {
    "@type": "Person",
    "name": "Maya Johnson",
    "url": "https://example.com/artists/maya-johnson"
  },
  "dateCreated": "2024-03-15",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/models/office-chair.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "5.2MB",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/office-chair.jpg",
    "width": 512,
    "height": 512
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/previews/office-chair-front.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/previews/office-chair-side.jpg",
      "caption": "Side view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/previews/office-chair-back.jpg",
      "caption": "Back view"
    }
  ],
  
  "category": "Furniture",
  "keywords": ["chair", "office", "furniture", "ergonomic", "adjustable"],
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "polyCount",
      "value": "12450"
    },
    {
      "@type": "PropertyValue",
      "name": "materialCount",
      "value": "5"
    },
    {
      "@type": "PropertyValue",
      "name": "textureResolution",
      "value": "2048x2048"
    },
    {
      "@type": "PropertyValue",
      "name": "animated",
      "value": false
    }
  ],
  
  "potentialAction": {
    "@type": "ViewAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/viewer?model=office-chair"
    }
  },
  
  "gltf:asset": {
    "version": "2.0",
    "copyright": "© 2024 Example Studio",
    "generator": "Blender 3.6.0"
  }
}
```

## Key Features

### Basic Information
- **Type Declaration**: Uses `3DModel` as the Schema.org type
- **Unique Identifier**: Includes both URI (`@id`) and product identifier
- **Creator Information**: Credits the creator with link to portfolio
- **License**: Clear licensing information

### Asset References
- **Content URL**: Direct link to the GLB file
- **Format Specification**: Uses proper MIME type for glTF Binary
- **Size Information**: Includes file size for client-side optimization

### Visual References
- **Thumbnail**: Compact preview image
- **Multiple Images**: Various angles for better visualization
- **Captions**: Descriptive text for each image

### Technical Details
- **Polygon Count**: Model complexity for performance planning
- **Material Count**: Number of distinct materials
- **Texture Resolution**: Size of texture maps
- **Animation Flag**: Indicates whether the model is animated

### glTF-Specific Information
- **Version**: glTF specification version
- **Copyright**: Rights information
- **Generator**: Software used to create the model

## Variations

### For Multi-Part Models

For models with distinct components:

```json
"hasPart": [
  {
    "@type": "3DModel",
    "name": "Chair Base",
    "contentUrl": "https://example.com/models/office-chair-base.glb"
  },
  {
    "@type": "3DModel",
    "name": "Chair Seat",
    "contentUrl": "https://example.com/models/office-chair-seat.glb"
  },
  {
    "@type": "3DModel",
    "name": "Chair Back",
    "contentUrl": "https://example.com/models/office-chair-back.glb"
  }
]
```

### For Collection Membership

If the model belongs to a collection:

```json
"isPartOf": {
  "@type": "CreativeWork",
  "name": "Office Furniture Collection",
  "url": "https://example.com/collections/office-furniture"
}
```

### For Animated Models

For models with animations:

```json
"additionalProperty": [
  {
    "@type": "PropertyValue",
    "name": "animated",
    "value": true
  },
  {
    "@type": "PropertyValue",
    "name": "animationCount",
    "value": "3"
  },
  {
    "@type": "PropertyValue",
    "name": "animations",
    "value": ["idle", "adjust_height", "swivel"]
  }
]
```

### For USD Models

For USD format instead of glTF:

```json
"contentUrl": "https://example.com/models/office-chair.usd",
"encodingFormat": "model/vnd.usd",
"additionalProperty": [
  {
    "@type": "PropertyValue",
    "name": "usdVersion",
    "value": "21.11"
  }
]
```

## Best Practices

1. **Include all essential information**: name, description, creator, license
2. **Provide proper visual references**: thumbnail and preview images
3. **Document technical specifications**: poly count, textures, materials
4. **Use appropriate type declarations**: 3DModel for 3D assets
5. **Include format-specific details**: glTF version, USD version
6. **Document relationships**: parts, collections, dependencies
7. **Validate your metadata**: Ensure compliance with Schema.org and MVMD

## Next Steps

Now that you've seen a complete 3D model example, you can:

1. Adapt this template for your own 3D models
2. Explore more specific examples for other asset types
3. Learn how to implement advanced features like composition and references

For more information, refer to the [Create Basic Metadata](/guides/basic/create-metadata) guide. 