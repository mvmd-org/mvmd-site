---
sidebar_position: 3
---

# Basic Asset Implementation

This guide covers fundamental implementation patterns for digital assets in the metaverse.

## Use Cases

Basic asset implementation provides a foundation for all types of metaverse assets:

- 3D assets that need consistent representation across platforms
- Digital items with rich metadata for discoverability
- Assets requiring proper attribution and licensing information
- Content that needs technical specifications for compatibility
- Interoperable assets for cross-platform experiences

## Prerequisites

Before implementing basic asset metadata, ensure you have:

- A clear understanding of your asset's purpose and properties
- Appropriate Schema.org types for your content (3DModel, ImageObject, etc.)
- Knowledge of any platform-specific requirements
- Access to any external resources your asset references

## Implementation Steps

### 1. Create Core Asset Metadata

Start with basic Schema.org properties that all assets should have:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "description": "Modern office chair with adjustable height and lumbar support",
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://virtualfurnishings.example.com"
  },
  "contentUrl": "https://assets.example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "image": "https://assets.example.com/chair-preview.jpg",
  "dateCreated": "2024-03-15",
  "version": "1.2.0"
}
```

### 2. Add Storage and Delivery Information

Include details about how your asset is stored and accessed:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "contentUrl": "https://assets.example.com/chair.glb",
  "sameAs": [
    "ipfs://QmXaXa1XaX...",
    "ar://asset/chair123"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "storagePolicy",
      "name": "Storage Policy",
      "value": {
        "redundancy": "multi-regional",
        "persistence": "permanent",
        "cacheTTL": 86400
      }
    }
  ]
}
```

### 3. Specify Platform Compatibility

Define how your asset works across different platforms:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "platformCompatibility",
      "name": "Platform Compatibility",
      "value": {
        "supported": ["platform-a", "platform-b", "platform-c"],
        "requirements": {
          "minVersion": "2.0",
          "features": ["advanced-materials", "physics"]
        },
        "optimization": {
          "polycount": 12500,
          "textureSize": 2048,
          "animations": 5
        }
      }
    }
  ]
}
```

## Complete Example

A complete asset implementation with all essential components:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "description": "Modern office chair with adjustable height and lumbar support",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "assetId",
    "value": "asset-2024-001"
  },
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://virtualfurnishings.example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://virtualfurnishings.example.com/logo.png"
    }
  },
  "contentUrl": "https://assets.example.com/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "image": "https://assets.example.com/chair-preview.jpg",
  "dateCreated": "2024-03-15",
  "version": "1.2.0",
  "sameAs": [
    "ipfs://QmXaXa1XaX...",
    "ar://asset/chair123"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "storagePolicy",
      "name": "Storage Policy",
      "value": {
        "redundancy": "multi-regional",
        "persistence": "permanent",
        "cacheTTL": 86400
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "platformCompatibility",
      "name": "Platform Compatibility",
      "value": {
        "supported": ["platform-a", "platform-b", "platform-c"],
        "requirements": {
          "minVersion": "2.0",
          "features": ["advanced-materials", "physics"]
        },
        "optimization": {
          "polycount": 12500,
          "textureSize": 2048,
          "animations": 5
        }
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "accessControl",
      "name": "Access Control",
      "value": {
        "permissions": ["premium-tier"],
        "regions": ["US", "EU"],
        "minimumAge": 13,
        "platformRequirements": ["physics-v2"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "searchMetadata",
      "name": "Search Metadata",
      "value": {
        "tags": ["furniture", "office", "ergonomic", "chair"],
        "category": "Furniture/Office",
        "featuredIn": ["virtual-office-demo", "productivity-space"]
      }
    }
  ],
  "gltf:asset": {
    "version": "2.0",
    "generator": "Studio Modeler 2024",
    "copyright": "© 2024 Virtual Furnishings Inc."
  }
}
```

## Variations

### Access Control Variation

For assets with access restrictions:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Premium Asset",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "accessControl",
      "name": "Access Control",
      "value": {
        "permissions": ["premium-tier"],
        "regions": ["US", "EU"],
        "minimumAge": 13,
        "platformRequirements": ["physics-v2"]
      }
    }
  ]
}
```

### Content Updates Variation

For assets with update management:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "version": "2.1.0",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "updateControl",
      "name": "Update Control",
      "value": {
        "compatibility": "^2.0.0",
        "updateUrl": "https://updates.example.com/asset/{version}",
        "rollbackSupported": true,
        "releaseNotes": "https://docs.example.com/chair/changelog"
      }
    }
  ]
}
```

### Discovery Enhancement Variation

For optimizing asset discoverability:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Ergonomic Office Chair",
  "keywords": ["furniture", "modern", "interactive", "office"],
  "category": "Home/Office/Furniture",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "searchMetadata",
      "name": "Search Metadata",
      "value": {
        "tags": ["seating", "ergonomic", "adjustable"],
        "relatedAssets": ["desk-modern", "office-set"],
        "featuredIn": ["virtual-office-demo", "productivity-space"]
      }
    }
  ]
}
```

## Troubleshooting

### Missing Required Properties

**Issue**: Schema validation fails due to missing required properties.

**Solution**: Ensure that all required Schema.org properties for your chosen type are included. For 3DModel type, always include at minimum: name, contentUrl, and encodingFormat.

### Incompatible Type Declarations

**Issue**: Properties don't align with the declared @type.

**Solution**: Verify that all properties are appropriate for the Schema.org type you've selected. Use additionalProperty for platform-specific or custom properties that aren't part of the standard Schema.org vocabulary.

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs. Embedding](../concepts/linking-vs-embedding.md)

## Next Steps

- [Standards Implementation](./standards-implementation.md)
- [NFT Implementation](./nfts.md)
- [Composable Assets](./composable.md)
