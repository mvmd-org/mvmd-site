---
sidebar_position: 1
---

# Create Basic Metadata

This guide walks you through creating basic metadata for your metaverse assets using MVMD. By following these steps, you'll create valid, interoperable metadata that can be used across multiple platforms.

## Prerequisites

- Basic understanding of JSON
- Your digital asset ready for description
- Text editor or development environment

## Step 1: Set Up Your JSON-LD Structure

Start by creating a basic JSON-LD structure with the essential context declaration:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "My First MVMD Asset",
  "description": "A detailed description of your asset"
}
```

This establishes that you're using Schema.org vocabulary and that your asset is a 3D model.

## Step 2: Add Basic Descriptive Information

Enhance your metadata with essential descriptive properties:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "My First MVMD Asset",
  "description": "A detailed description of your asset",
  "identifier": "asset-2024-001",
  "creator": {
    "@type": "Person",
    "name": "Your Name"
  },
  "dateCreated": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

## Step 3: Include Asset Location Information

Add references to your actual asset files:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "My First MVMD Asset",
  "description": "A detailed description of your asset",
  "identifier": "asset-2024-001",
  "creator": {
    "@type": "Person",
    "name": "Your Name"
  },
  "dateCreated": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/assets/my-model.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "2.4MB"
}
```

## Step 4: Add Thumbnail and Preview Information

Make your asset more discoverable with thumbnail and preview images:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "My First MVMD Asset",
  "description": "A detailed description of your asset",
  "identifier": "asset-2024-001",
  "creator": {
    "@type": "Person",
    "name": "Your Name"
  },
  "dateCreated": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/assets/my-model.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "2.4MB",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/assets/thumbnails/my-model.jpg",
    "width": 300,
    "height": 300
  },
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/assets/previews/my-model-front.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/assets/previews/my-model-side.jpg",
      "caption": "Side view"
    }
  ]
}
```

## Step 5: Add Category and Keyword Information

Improve discoverability with categories and keywords:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "My First MVMD Asset",
  "description": "A detailed description of your asset",
  "identifier": "asset-2024-001",
  "creator": {
    "@type": "Person",
    "name": "Your Name"
  },
  "dateCreated": "2024-04-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "contentUrl": "https://example.com/assets/my-model.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "2.4MB",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/assets/thumbnails/my-model.jpg",
    "width": 300,
    "height": 300
  },
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/assets/previews/my-model-front.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/assets/previews/my-model-side.jpg",
      "caption": "Side view"
    }
  ],
  "category": "Furniture",
  "keywords": ["chair", "office", "furniture", "metaverse", "3d model"]
}
```

## Step 6: Save Your Metadata

Save your metadata to a file with a `.json` extension. This is now ready to be:
- Embedded in your asset
- Stored alongside your asset
- Published to a metadata registry
- Used in marketplaces or platforms

## Common Extensions

Depending on your needs, you might want to extend your basic metadata with:

### Technical Specifications

```json
"additionalProperty": [
  {
    "@type": "PropertyValue",
    "name": "polyCount",
    "value": "5420"
  },
  {
    "@type": "PropertyValue",
    "name": "textureResolution",
    "value": "2048x2048"
  }
]
```

### Version Information

```json
"version": "1.0.3",
"dateModified": "2024-04-15"
```

### Platform Compatibility

```json
"operatingSystem": ["Windows", "macOS", "Android", "iOS"],
"applicationCategory": "Virtual World"
```

## Next Steps

After creating your basic metadata, consider:
1. [Validating your metadata](validate-metadata.md) to ensure it's correct
2. [Organizing your files](organize-files.md) for better asset management
3. Exploring more advanced metadata features like composition and relationships

Congratulations! You've created your first MVMD-compatible metadata. This foundation can be extended for more specific use cases and integration profiles. 