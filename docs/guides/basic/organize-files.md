---
sidebar_position: 3
---

# Organize Your Files

Proper organization of your metadata and asset files is essential for maintainability, scalability, and interoperability. This guide covers best practices for organizing your MVMD-compatible files.

## Why File Organization Matters

Good file organization provides:
- Clear structure for other developers or platforms
- Easier maintenance as your asset library grows
- Better performance with optimized resource loading
- Simplified integration with various platforms
- Clearer relationships between dependent assets

## Basic File Structure

Here's a recommended file structure for organizing your assets:

```
my-assets/
├── metadata/
│   ├── asset-001.json
│   ├── asset-002.json
│   └── collection.json
├── models/
│   ├── asset-001.glb
│   └── asset-002.glb
├── textures/
│   ├── asset-001/
│   │   ├── diffuse.jpg
│   │   └── normal.jpg
│   └── asset-002/
│       ├── diffuse.jpg
│       └── normal.jpg
└── thumbnails/
    ├── asset-001.jpg
    └── asset-002.jpg
```

## Metadata File Organization

### Single Asset Pattern

For individual assets, use a dedicated metadata file with clear naming:

```
metadata/
├── chair-office-ergonomic.json
├── table-conference.json
└── lamp-desk.json
```

### Collection Pattern

For related assets, use a collection metadata file plus individual asset files:

```
metadata/
├── office-furniture-collection.json
├── office-furniture/
│   ├── chair-001.json
│   ├── desk-001.json
│   └── bookshelf-001.json
└── home-furniture/
    ├── sofa-001.json
    ├── coffee-table-001.json
    └── lamp-001.json
```

### Profile-Based Organization

Organize by integration profile when working with different asset types:

```
metadata/
├── avatars/
│   ├── character-001.json
│   └── character-002.json
├── wearables/
│   ├── hat-001.json
│   └── glasses-001.json
└── environments/
    ├── office-space.json
    └── outdoor-plaza.json
```

## Asset File Organization

### Centralized Asset Storage

Store all assets in a central location with clear structure:

```
assets/
├── models/
│   ├── glb/
│   │   ├── chair-001.glb
│   │   └── table-001.glb
│   └── usd/
│       ├── scene-001.usd
│       └── building-001.usd
├── textures/
│   ├── chair-001/
│   │   ├── diffuse.jpg
│   │   └── normal.jpg
│   └── table-001/
│       ├── diffuse.jpg
│       └── normal.jpg
└── thumbnails/
    ├── chair-001.jpg
    └── table-001.jpg
```

### Bundled Asset Organization

For self-contained asset packages:

```
product-catalog/
├── chair-001/
│   ├── metadata.json
│   ├── model.glb
│   ├── thumbnail.jpg
│   └── textures/
│       ├── diffuse.jpg
│       └── normal.jpg
└── table-001/
    ├── metadata.json
    ├── model.glb
    ├── thumbnail.jpg
    └── textures/
        ├── diffuse.jpg
        └── normal.jpg
```

## URL Reference Practices

### Relative URLs

Use relative URLs for tight integration:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "contentUrl": "../models/chair-001.glb",
  "thumbnail": "../thumbnails/chair-001.jpg"
}
```

### Absolute URLs

Use absolute URLs for distributed assets:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "contentUrl": "https://assets.example.com/models/chair-001.glb",
  "thumbnail": "https://assets.example.com/thumbnails/chair-001.jpg"
}
```

### CDN-Optimized URLs

For production environments, consider CDN optimization:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Office Chair",
  "contentUrl": "https://cdn.example.com/models/chair-001.glb",
  "thumbnail": "https://cdn.example.com/thumbnails/chair-001.jpg"
}
```

## File Naming Conventions

### Asset Naming

- Use descriptive, kebab-case names: `office-chair-ergonomic.glb`
- Include version when needed: `office-chair-v2.glb`
- Consider namespacing for large collections: `furniture-office-chair.glb`

### Metadata Naming

- Match asset names: `office-chair-ergonomic.json`
- Use clear collection names: `office-furniture-collection.json`
- Use `metadata.json` for bundled assets

### Texture Naming

- Use standard, predictable names: `diffuse.jpg`, `normal.jpg`, `roughness.jpg`
- Include mapping information if needed: `chair-seat-diffuse.jpg`

## Version Control Considerations

### Git Structure

When using Git:

```
assets/
├── .gitattributes  # Set up LFS tracking
├── models/         # Track with Git LFS
├── textures/       # Track with Git LFS
└── metadata/       # Track with regular Git
```

Example `.gitattributes`:
```
*.glb filter=lfs diff=lfs merge=lfs -text
*.usd filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
```

### Release Pattern

For versioned releases:

```
releases/
├── v1.0/
│   ├── metadata/
│   ├── models/
│   └── textures/
└── v1.1/
    ├── metadata/
    ├── models/
    └── textures/
```

## Platform-Specific Considerations

### Marketplace Ready Structure

For NFT marketplaces:

```
marketplace-assets/
├── collection-metadata.json
├── asset-001/
│   ├── metadata.json
│   ├── image.jpg
│   └── animation.glb
└── asset-002/
    ├── metadata.json
    ├── image.jpg
    └── animation.glb
```

### Virtual World Structure

For virtual worlds:

```
world-assets/
├── world-metadata.json
├── environments/
│   ├── plaza.glb
│   └── building.glb
└── props/
    ├── bench.glb
    └── lamppost.glb
```

## Best Practices Summary

1. **Use consistent naming** across your asset library
2. **Group related files** together for easier management
3. **Separate metadata from assets** for faster loading
4. **Use proper URL references** between metadata and assets
5. **Organize by profile type** for complex asset libraries
6. **Version your assets** for tracking changes
7. **Optimize for target platforms** when distribution-ready

## Next Steps

With your files well-organized, consider:
1. Setting up automated validation for your metadata
2. Implementing advanced features like asset composition
3. Creating a deployment pipeline for your assets

Proper file organization will save you time and prevent headaches as your asset library grows and evolves. 