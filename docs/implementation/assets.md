---
sidebar_position: 3
---

# Basic Asset Implementation

This guide covers fundamental implementation patterns for digital assets, focusing on proper metadata structure and integration approaches.

## Core Implementation Patterns

### Complete Asset Metadata

A complete asset implementation includes essential information plus platform-specific details:

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

### Storage Strategy Options

Include information about how your asset is stored and accessed:

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

### Cross-Platform Compatibility

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

## Extended Properties

### Access Control

Define access restrictions and requirements:

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

### Content Updates

Include information about updates and versioning:

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

### Discovery Enhancement

Add properties to improve discoverability:

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

## Implementation Best Practices

### Storage & Delivery
- Use CDNs for fast global delivery
- Implement content-addressed storage for integrity
- Consider both centralized and decentralized options
- Plan for appropriate caching strategies

### Cross-Platform Support
- Document platform-specific requirements clearly
- Provide optimized assets for different performance tiers
- Include fallback options for unsupported features
- Test thoroughly across target platforms

### Metadata Maintenance
- Keep metadata up-to-date with asset changes
- Maintain version history for tracking
- Use consistent property naming conventions
- Validate metadata regularly

## Related Concepts

- [Types of Assets](../concepts/types-of-assets.md): Schema.org types for different asset types
- [Linking vs Embedding](../concepts/linking-vs-embedding.md): Strategies for references
- [Integration Profiles](../integration-profiles/overview.md): Predefined asset profiles
