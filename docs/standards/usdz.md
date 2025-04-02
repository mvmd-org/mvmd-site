---
sidebar_position: 6
---

# USDZ Standard

This page covers how to integrate USDZ into your metadata through namespaces.

## About USDZ

USDZ is a zero-compression, unencrypted zip archive format for the USD file format, optimized for delivering 3D content for AR experiences. It was developed through a collaboration between Pixar and Apple and is natively supported on iOS and macOS devices.

USDZ packages all USD files and their dependencies into a single file for easy distribution, making it particularly valuable for augmented reality experiences and web-based 3D content delivery.

## Core USDZ Concepts

Key concepts in USDZ that are relevant to metadata integration:

- **Package Format**: A single-file container that includes all USD files and referenced assets
- **AR Optimization**: Specific features optimized for augmented reality experiences
- **iOS/macOS Integration**: Native support in Apple ecosystems
- **Web Integration**: Support via Apple's AR Quick Look in Safari
- **Material Compatibility**: PBR materials optimized for real-time rendering
- **Animation Support**: Timeline-based animations for interactive experiences
- **Embedded Audio**: Support for spatial audio in AR experiences

## Implementing the USDZ Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "usdz": "https://developer.apple.com/augmented-reality/quick-look/schemas/"
  }
}
```

### Linking Example

When referencing external USDZ assets:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "AR Product Model",
  "contentUrl": "https://example.com/product.usdz",
  "encodingFormat": "model/vnd.usdz+zip"
}
```

For AR-specific metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "AR Product Model",
  "contentUrl": "https://example.com/product.usdz",
  "encodingFormat": "model/vnd.usdz+zip",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "arExperience",
      "name": "AR Experience",
      "value": {
        "recommendedPlacement": "floor",
        "scale": "actual-size",
        "allowsScaling": true
      }
    }
  ]
}
```

### Embedding Example

When embedding USDZ metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usdz": "https://developer.apple.com/augmented-reality/quick-look/schemas/"
  },
  "@type": "3DModel",
  "name": "AR Product Model",
  "usdz:version": "0.1.0",
  "usdz:quickLook": {
    "canonicalWebPageURL": "https://example.com/product",
    "appStoreURL": "https://apps.apple.com/app/example-ar-viewer/id123456789"
  },
  "usdz:arExperience": {
    "audioEnabled": true,
    "environmentalHDR": true,
    "materialProperties": {
      "metallicRoughness": true,
      "clearcoat": true,
      "transmission": false
    }
  }
}
```

## Common Use Cases

USDZ is used in a variety of AR and metaverse applications:

- iOS/macOS AR experiences
- Web-based AR product visualization
- E-commerce product previews
- Educational and instructional AR content
- Interactive marketing experiences
- Virtual exhibitions and showcases
- Architecture and design visualization

## Implementation Examples

### Basic Example

A simple USDZ model reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "AR Furniture Model",
  "description": "View this furniture in your space using AR",
  "contentUrl": "https://example.com/furniture.usdz",
  "encodingFormat": "model/vnd.usdz+zip",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

### Complete Example

For a complete product with AR features:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usdz": "https://developer.apple.com/augmented-reality/quick-look/schemas/"
  },
  "@type": "3DModel",
  "name": "Modern Office Chair - AR Preview",
  "description": "Visualize this ergonomic office chair in your workspace using AR",
  "contentUrl": "https://example.com/products/chair.usdz",
  "encodingFormat": "model/vnd.usdz+zip",
  "creator": {
    "@type": "Organization",
    "name": "Modern Furniture Inc.",
    "url": "https://modernfurniture.example.com"
  },
  "license": "https://example.com/ar-preview-license",
  "usdz:quickLook": {
    "canonicalWebPageURL": "https://modernfurniture.example.com/products/office-chair",
    "allowsContentScaling": true,
    "displayTitle": "Modern Office Chair",
    "displaySubtitle": "Ergonomic Design",
    "callToAction": {
      "text": "Buy Now",
      "url": "https://modernfurniture.example.com/checkout/office-chair"
    }
  },
  "usdz:arExperience": {
    "audioEnabled": true,
    "allowedGestures": ["tap", "rotate", "scale"],
    "recommendedPlacement": "floor",
    "animationAutoPlays": true,
    "animationLoops": true
  },
  "usdz:sceneMetadata": {
    "dimensions": [0.65, 1.2, 0.65],
    "centerPoint": [0, 0.6, 0],
    "naturalScale": 1.0,
    "boundingBoxScale": 1.0
  }
}
```

### E-Commerce Integration Example

Combining USDZ with product metadata for e-commerce:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "usdz": "https://developer.apple.com/augmented-reality/quick-look/schemas/"
  },
  "@type": "Product",
  "name": "Modern Office Chair",
  "description": "Ergonomic office chair with adjustable height and lumbar support",
  "brand": {
    "@type": "Brand",
    "name": "Modern Furniture"
  },
  "offers": {
    "@type": "Offer",
    "price": 299.99,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "image": "https://example.com/images/chair.jpg",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "color",
      "value": "Black"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "material",
      "value": "Mesh and Aluminum"
    }
  ],
  "model": {
    "@type": "3DModel",
    "contentUrl": "https://example.com/models/chair.usdz",
    "encodingFormat": "model/vnd.usdz+zip",
    "usdz:quickLook": {
      "allowsContentScaling": true,
      "displayTitle": "Modern Office Chair",
      "displaySubtitle": "$299.99",
      "callToAction": {
        "text": "Add to Cart",
        "url": "https://example.com/cart/add/chair"
      }
    },
    "usdz:arExperience": {
      "recommendedPlacement": "floor",
      "allowedGestures": ["tap", "rotate", "scale"],
      "animationAutoPlays": true
    }
  }
}
```

## JSON Schema Validation

For validating USDZ namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "USDZ Namespace Schema",
  "type": "object",
  "properties": {
    "usdz:version": {
      "type": "string",
      "description": "USDZ format version"
    },
    "usdz:quickLook": {
      "type": "object",
      "description": "Apple AR Quick Look specific properties",
      "properties": {
        "canonicalWebPageURL": {
          "type": "string",
          "format": "uri",
          "description": "URL to the canonical web page for this item"
        },
        "appStoreURL": {
          "type": "string",
          "format": "uri",
          "description": "Link to a related app in the App Store"
        },
        "allowsContentScaling": {
          "type": "boolean",
          "description": "Whether the user can scale the 3D content"
        },
        "displayTitle": {
          "type": "string",
          "description": "Primary title displayed in AR Quick Look"
        },
        "displaySubtitle": {
          "type": "string",
          "description": "Secondary text displayed in AR Quick Look"
        },
        "callToAction": {
          "type": "object",
          "description": "Call-to-action button configuration",
          "properties": {
            "text": {
              "type": "string",
              "description": "Button text"
            },
            "url": {
              "type": "string",
              "format": "uri",
              "description": "URL to navigate to when the button is tapped"
            }
          }
        }
      }
    },
    "usdz:arExperience": {
      "type": "object",
      "description": "AR experience configuration",
      "properties": {
        "audioEnabled": {
          "type": "boolean",
          "description": "Whether spatial audio is enabled"
        },
        "environmentalHDR": {
          "type": "boolean",
          "description": "Whether environmental HDR is used"
        },
        "allowedGestures": {
          "type": "array",
          "description": "Supported interaction gestures",
          "items": {
            "type": "string",
            "enum": ["tap", "rotate", "scale", "pan"]
          }
        },
        "recommendedPlacement": {
          "type": "string",
          "enum": ["floor", "table", "wall", "ceiling", "any"],
          "description": "Recommended placement surface for the AR object"
        },
        "animationAutoPlays": {
          "type": "boolean",
          "description": "Whether animations play automatically"
        },
        "animationLoops": {
          "type": "boolean",
          "description": "Whether animations loop continuously"
        }
      }
    },
    "usdz:sceneMetadata": {
      "type": "object",
      "description": "Technical details about the 3D scene",
      "properties": {
        "dimensions": {
          "type": "array",
          "description": "Width, height, depth in meters",
          "items": {
            "type": "number"
          },
          "minItems": 3,
          "maxItems": 3
        },
        "centerPoint": {
          "type": "array",
          "description": "X, Y, Z coordinates of the center point",
          "items": {
            "type": "number"
          },
          "minItems": 3,
          "maxItems": 3
        },
        "naturalScale": {
          "type": "number",
          "description": "The natural scale factor for the model"
        },
        "boundingBoxScale": {
          "type": "number",
          "description": "Scale factor for the bounding box"
        }
      }
    }
  }
}
```

## JSON-LD Context

The USDZ namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "usdz": "https://developer.apple.com/augmented-reality/quick-look/schemas/",
    "usdz:version": { "@id": "usdz:version" },
    "usdz:quickLook": { "@id": "usdz:quickLook" },
    "usdz:arExperience": { "@id": "usdz:arExperience" },
    "usdz:sceneMetadata": { "@id": "usdz:sceneMetadata" }
  }
}
```

## Implementation Considerations

When implementing the USDZ namespace, keep these considerations in mind:

- **Platform Compatibility**: USDZ is primarily supported on Apple platforms, so consider providing alternative formats for other platforms
- **File Size Optimization**: Optimize textures and geometry for mobile AR experiences
- **E-Commerce Integration**: Leverage USDZ's quick-look commerce features when used in retail contexts
- **AR Placement**: Specify appropriate placement recommendations based on the type of object
- **Animation Control**: Consider user expectations around automatic animation playback
- **Audio Usage**: Use spatial audio judiciously to enhance the AR experience without being distracting

## Related Documentation

- [USD Standard](./usd.md)
- [Cross-Platform Asset Implementation](../implementation/cross-platform-assets.md)
- [E-Commerce Integration](../implementation/cross-platform-assets.md#e-commerce-integration) 