---
sidebar_position: 8
---

# Standards Implementation

This guide provides practical approaches for implementing MVMD alongside existing industry standards and specifications.

:::info Content Reorganization
As part of our documentation restructuring, detailed standard-specific implementation information has been moved to dedicated namespace pages:
- [glTF Namespace](/docs/namespaces/gltf) - For all glTF-specific implementation details and schema
- [USD Namespace](/docs/namespaces/usd) - For all USD-specific implementation details and schema

This page now focuses on general implementation patterns and approaches to integrating with various standards.
:::

## Interoperability Approaches

### Complementary Standards Integration

MVMD is designed to complement existing standards rather than replace them. Here are approaches for integrating with popular standards:

#### glTF Integration

When working with glTF 3D models, MVMD can provide rich semantic context:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://registry.khronos.org/glTF/"
  },
  "@type": "3DModel",
  "name": "Detailed Character Model",
  "description": "High-quality character model with rigging and animations",
  "contentUrl": "https://assets.example.com/character.glb",
  "encodingFormat": "model/gltf-binary",
  "gltf:asset": {
    "version": "2.0",
    "generator": "ExampleStudio Exporter 2.0"
  },
  "gltf:materials": [
    {
      "name": "Skin",
      "technique": "PBR"
    },
    {
      "name": "Clothing",
      "technique": "PBR"
    }
  ],
  "gltf:animations": [
    "Idle",
    "Walk",
    "Run"
  ]
}
```

#### USD Integration

For Universal Scene Description (USD) assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usd": "https://openusd.org/schemas/"
  },
  "@type": "3DModel",
  "name": "Architectural Scene",
  "description": "Detailed architectural visualization with materials and lighting",
  "contentUrl": "https://assets.example.com/building.usdz",
  "encodingFormat": "model/vnd.usd+zip",
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 0.01
  },
  "usd:layers": [
    "Geometry",
    "Materials",
    "Lighting"
  ]
}
```

### Bridging Standards

#### WebXR + MVMD

Enhancing WebXR experiences with MVMD metadata:

```html
<html>
<head>
  <title>WebXR Experience</title>
  <script type="application/ld+json">
  {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "WebApplication",
    "name": "Interactive Museum Tour",
    "description": "Virtual tour of historical artifacts with educational content",
    "applicationCategory": "WebXR",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "contentRating": "General",
    "interactionMode": ["VR", "AR", "Desktop"],
    "systemRequirements": "WebXR compatible browser"
  }
  </script>
</head>
<body>
  <!-- WebXR content here -->
</body>
</html>
```

#### NFT Standards + MVMD

Enhancing ERC-721 NFT metadata with MVMD:

```json
{
  "name": "Cosmic Voyager #42",
  "description": "A unique spacecraft design from the Cosmic Voyagers collection",
  "image": "https://ipfs.io/ipfs/QmXAXB...",
  "attributes": [
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    }
  ],
  "mvmd": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "3DModel",
    "contentUrl": "https://ipfs.io/ipfs/QmZXYZ...",
    "encodingFormat": "model/gltf-binary",
    "creator": {
      "@type": "Person",
      "name": "Digital Artisan",
      "url": "https://artist.example.com"
    },
    "interactivityType": "Fully Interactive",
    "spatialDimensions": "3D"
  }
}
```

## Implementation Patterns

### Embedded vs. Referenced Metadata

#### Embedded Approach

Embedding MVMD directly within asset files:

```javascript
// Example: JavaScript code to embed metadata in a Three.js scene export
const scene = new THREE.Scene();
// ... create scene content ...

// Add metadata to the exported glTF
const metadataExtension = {
  mvmd: {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "3DModel",
    "name": "Interactive Scene",
    "description": "Scene with interactive elements",
    "creator": {
      "@type": "Organization",
      "name": "Example Studio"
    }
  }
};

// Add extension when exporting
const gltfExporter = new GLTFExporter();
gltfExporter.parse(scene, function(gltf) {
  gltf.asset.extras = metadataExtension;
  // ... save or upload the glTF ...
});
```

#### Referenced Approach

Using external metadata linked to assets:

```json
// metadata.json - Separate file referenced by assets
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Interactive Scene",
  "description": "Scene with interactive elements",
  "contentUrl": "https://assets.example.com/scene.glb",
  "metadataUrl": "https://assets.example.com/scene-metadata.json"
}

// In application code:
async function loadAssetWithMetadata(assetUrl, metadataUrl) {
  const [asset, metadata] = await Promise.all([
    loadAsset(assetUrl),
    fetch(metadataUrl).then(res => res.json())
  ]);
  
  // Apply metadata to the loaded asset
  asset.mvmdMetadata = metadata;
  return asset;
}
```

### Progressive Enhancement

Adding MVMD metadata to existing systems without breaking them:

```javascript
// Example: Adding MVMD to an existing asset pipeline
function enhanceAssetWithMVMD(existingAsset) {
  // Preserve all existing metadata
  const enhancedAsset = { ...existingAsset };
  
  // Add MVMD metadata
  enhancedAsset.mvmd = {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": determineAssetType(existingAsset),
    "name": existingAsset.name || "Unnamed Asset",
    "description": existingAsset.description || "",
    "contentUrl": existingAsset.url || "",
    "encodingFormat": determineFormat(existingAsset)
  };
  
  return enhancedAsset;
}

// Process existing assets without breaking current systems
function processAssets(assets) {
  return assets.map(asset => {
    const enhancedAsset = enhanceAssetWithMVMD(asset);
    return enhancedAsset;
    // Existing systems can ignore the new mvmd property
    // MVMD-aware systems can utilize the enhanced metadata
  });
}
```

## Implementation Best Practices

### Standard Compatibility

- **Respect Native Formats**: Follow the conventions of each standard
- **Use Extension Mechanisms**: Leverage extension points in existing standards
- **Preserve Original Metadata**: Don't replace existing metadata
- **Document Integration Points**: Clearly explain how standards interact

### Performance Considerations

- **Optimize Metadata Size**: Keep metadata concise and relevant
- **Use Lazy Loading**: Load detailed metadata only when needed
- **Consider Caching**: Cache frequently accessed metadata
- **Progressive Detail**: Provide basic metadata first, with options to request more

### Validation & Testing

- **Test Across Platforms**: Verify compatibility with different systems
- **Validate Against Schemas**: Use MVMD validation tools
- **Ensure Graceful Degradation**: Systems without MVMD support should still function
- **Monitor Integration Points**: Check for breaking changes in related standards

## Related Resources

- [Integration Profiles](../integration-profiles/overview.md): Platform-specific integration guides
- [Linking vs Embedding](../concepts/linking-vs-embedding.md): Strategies for metadata references
- [Types of Assets](../concepts/types-of-assets.md): Different asset types and their requirements 

## Related Namespaces

- [Schema.org](../namespaces/schema-org.md): Core vocabulary for standards integration
- [3D Standards](../namespaces/3d-standards.md): Implementation patterns for 3D standards
- [Geospatial Standards](../namespaces/geospatial-standards.md): Location data standards
- [Trust & Provenance](../namespaces/trust-provenance.md): Authentication and verification standards
- [OpenXR Standards](../namespaces/openxr.md): XR-specific standards integration 