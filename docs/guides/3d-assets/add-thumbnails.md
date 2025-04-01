---
sidebar_position: 2
---

# Add Thumbnails & Previews

This guide explains how to create and reference effective thumbnail and preview images for your 3D models in MVMD metadata.

## Why Thumbnails & Previews Matter

Thumbnail and preview images are critical for:
- Quick visual identification in asset libraries
- Showcasing your model from optimal angles
- Helping users evaluate your model before download
- Providing visual context in search results

## Basic Thumbnail Structure

Every 3D model should include at least one thumbnail:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Example Model",
  // ... other properties ...
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/model-thumb.jpg",
    "width": 512,
    "height": 512,
    "encodingFormat": "image/jpeg"
  }
}
```

## Multiple Preview Images

Adding multiple preview images from different angles provides better context:

```json
"image": [
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-front.jpg",
    "caption": "Front view",
    "width": 1920,
    "height": 1080,
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-side.jpg",
    "caption": "Side view",
    "width": 1920,
    "height": 1080,
    "encodingFormat": "image/jpeg"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-perspective.jpg",
    "caption": "Perspective view",
    "width": 1920,
    "height": 1080,
    "encodingFormat": "image/jpeg"
  }
]
```

## Thumbnail Best Practices

### Optimal Image Sizes

| Purpose | Recommended Size | Format |
|---------|-----------------|--------|
| Thumbnail | 512×512 pixels | JPG or PNG |
| Preview | 1920×1080 pixels | JPG or PNG |
| Detail view | 2560×1440 pixels | JPG or PNG |

### Optimal Image Types

```json
"image": [
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-beauty-shot.jpg",
    "caption": "Beauty shot with lighting",
    "additionalProperty": {
      "@type": "PropertyValue",
      "propertyID": "imageType",
      "value": "beautyShot"
    }
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-wireframe.png",
    "caption": "Wireframe view",
    "additionalProperty": {
      "@type": "PropertyValue",
      "propertyID": "imageType",
      "value": "wireframe"
    }
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/model-texture-map.jpg",
    "caption": "Texture UV layout",
    "additionalProperty": {
      "@type": "PropertyValue",
      "propertyID": "imageType",
      "value": "textureMap"
    }
  }
]
```

## Advanced Preview Options

### Turntable Video Previews

```json
"associatedMedia": [
  {
    "@type": "VideoObject",
    "contentUrl": "https://example.com/videos/model-turntable.mp4",
    "caption": "360° turntable view",
    "thumbnailUrl": "https://example.com/thumbnails/turntable-thumb.jpg",
    "uploadDate": "2024-03-15",
    "duration": "PT15S",
    "encodingFormat": "video/mp4"
  }
]
```

### Interactive 3D Previews

```json
"potentialAction": {
  "@type": "ViewAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://example.com/3d-viewer?model={contentUrl}",
    "description": "Interactive 3D viewer"
  },
  "name": "View in 3D"
}
```

## Combining with Other Metadata

Here's an example showing how thumbnail and preview information integrates with other metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Fantasy Character - Warrior",
  "description": "A high-quality 3D character model of a fantasy warrior with detailed armor and weapons. Includes textures, materials, and animations.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AssetID",
    "value": "character-2024-002"
  },
  "creator": {
    "@type": "Person",
    "name": "3D Character Artist",
    "url": "https://example.com/artist"
  },
  "dateCreated": "2024-02-20",
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "contentUrl": "https://example.com/models/warrior.glb",
  "encodingFormat": "model/gltf-binary",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/warrior-thumb.jpg",
    "width": 512,
    "height": 512,
    "encodingFormat": "image/jpeg"
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/warrior-front.jpg",
      "caption": "Front view",
      "width": 1920,
      "height": 1080,
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/warrior-side.jpg",
      "caption": "Side view",
      "width": 1920,
      "height": 1080,
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/warrior-back.jpg",
      "caption": "Back view",
      "width": 1920,
      "height": 1080,
      "encodingFormat": "image/jpeg"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/warrior-wire.png",
      "caption": "Wireframe view",
      "width": 1920,
      "height": 1080,
      "encodingFormat": "image/png",
      "additionalProperty": {
        "@type": "PropertyValue",
        "propertyID": "imageType",
        "value": "wireframe"
      }
    }
  ],
  
  "associatedMedia": [
    {
      "@type": "VideoObject",
      "contentUrl": "https://example.com/videos/warrior-turntable.mp4",
      "caption": "360° turntable view",
      "thumbnailUrl": "https://example.com/thumbnails/turntable-thumb.jpg",
      "uploadDate": "2024-02-21",
      "duration": "PT12S",
      "encodingFormat": "video/mp4"
    },
    {
      "@type": "VideoObject",
      "contentUrl": "https://example.com/videos/warrior-animation.mp4",
      "caption": "Animation showcase",
      "thumbnailUrl": "https://example.com/thumbnails/animation-thumb.jpg",
      "uploadDate": "2024-02-21",
      "duration": "PT25S",
      "encodingFormat": "video/mp4"
    }
  ],
  
  "potentialAction": {
    "@type": "ViewAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/3d-viewer?model=warrior.glb",
      "description": "Interactive 3D viewer"
    },
    "name": "View in 3D"
  }
}
```

## Creating Effective Thumbnails & Previews

### Thumbnail Tips

1. **Use a neutral background** - Keep the focus on your model
2. **Show the most representative angle** - Highlight key features
3. **Maintain consistent lighting** - Use 3-point lighting for clear visibility
4. **Use high contrast** - Ensure the model is clearly visible at small sizes
5. **Keep consistent aspect ratios** - Square thumbnails (1:1) work best

### Preview Image Tips

1. **Include multiple angles** - Front, side, back, and perspective views
2. **Show the model in context** - For scale reference
3. **Include wireframe views** - To demonstrate topology
4. **Document texture layouts** - To show UV mapping
5. **Include detail shots** - To highlight fine details

## Next Steps

- [Document Materials](document-materials.md) - Learn how to describe materials in your model
- [Describe 3D Models](describe-3d-models.md) - Return to the main 3D model description guide
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your metadata is correctly structured

