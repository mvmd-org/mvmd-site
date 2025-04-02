---
sidebar_position: 6
---

# Discovery and Search Optimization

This guide covers implementing metadata that optimizes your assets for discovery and search across metaverse platforms, marketplaces, and catalogs.

## Use Cases

Discovery optimization addresses these common scenarios:

- Making assets easily findable in metaverse marketplaces
- Improving asset ranking in search results
- Enabling precise filtering based on asset properties
- Supporting semantic search across multiple platforms
- Creating consistent categorization for related assets

## Prerequisites

Before implementing discovery optimization, ensure you have:

- A clear understanding of your target audience and search behaviors
- Knowledge of common search terms in your asset's domain
- Familiarity with basic MVMD metadata structure
- Understanding of how different platforms index and search content

## Implementation Workflow

### 1. Define Core Search Properties

Start with essential properties that impact search visibility:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modern Office Chair",
  "alternateName": "Ergonomic Desk Chair",
  "description": "A sleek, adjustable office chair with ergonomic lumbar support and breathable mesh back, perfect for professional environments.",
  "keywords": ["office chair", "ergonomic", "adjustable height", "lumbar support", "mesh back", "professional furniture"],
  "category": "Furniture/Office/Seating",
  "audience": {
    "@type": "Audience",
    "audienceType": ["office workers", "interior designers", "virtual offices"]
  }
}
```

### 2. Add Technical Metadata for Filtering

Include properties that enable precise technical filtering:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modern Office Chair",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "technicalSpecifications",
      "name": "Technical Specifications",
      "value": {
        "polyCount": 12500,
        "textureResolution": 2048,
        "animationCount": 3,
        "fileSize": 4.2,
        "fileSizeUnit": "MB",
        "materials": 5,
        "fileFormats": ["glb", "usdz", "fbx"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "compatibility",
      "name": "Platform Compatibility",
      "value": ["platform-a", "platform-b", "platform-c"]
    },
    {
      "@type": "PropertyValue",
      "propertyID": "performanceRating",
      "name": "Performance Rating",
      "value": "medium"
    }
  ]
}
```

### 3. Implement Rich Media for Visual Search

Add multiple media assets to improve visual discovery:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modern Office Chair",
  "image": "https://assets.example.com/chair/preview.jpg",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://assets.example.com/chair/thumbnail.jpg",
    "width": 256,
    "height": 256,
    "encodingFormat": "image/jpeg"
  },
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Front View",
      "contentUrl": "https://assets.example.com/chair/front.jpg",
      "encodingFormat": "image/jpeg",
      "width": 1024,
      "height": 1024
    },
    {
      "@type": "ImageObject",
      "name": "Side View",
      "contentUrl": "https://assets.example.com/chair/side.jpg",
      "encodingFormat": "image/jpeg",
      "width": 1024,
      "height": 1024
    },
    {
      "@type": "VideoObject",
      "name": "360° Rotation",
      "contentUrl": "https://assets.example.com/chair/rotation.mp4",
      "encodingFormat": "video/mp4",
      "duration": "PT10S"
    }
  ]
}
```

### 4. Add Semantic Relationships

Create connections with related assets to improve contextual search:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modern Office Chair",
  "isPartOf": {
    "@type": "CreativeWork",
    "name": "Modern Office Collection",
    "url": "https://example.com/collections/modern-office"
  },
  "isRelatedTo": [
    {
      "@type": "3DModel",
      "name": "Modern Office Desk",
      "url": "https://example.com/assets/office-desk"
    },
    {
      "@type": "3DModel",
      "name": "Office Bookshelf",
      "url": "https://example.com/assets/bookshelf"
    }
  ],
  "workExample": [
    {
      "@type": "3DModel",
      "name": "Blue Office Chair Variant",
      "image": "https://assets.example.com/chair/blue.jpg",
      "url": "https://example.com/assets/office-chair-blue"
    },
    {
      "@type": "3DModel",
      "name": "Red Office Chair Variant",
      "image": "https://assets.example.com/chair/red.jpg",
      "url": "https://example.com/assets/office-chair-red"
    }
  ]
}
```

### 5. Optimize for Marketplace Features

Include properties that enhance display in marketplaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modern Office Chair",
  "offers": {
    "@type": "Offer",
    "price": 25.00,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Virtual Furnishings Inc.",
      "url": "https://virtualfurnishings.example.com"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "marketplaceFeatures",
      "name": "Marketplace Features",
      "value": {
        "featured": true,
        "bestSeller": false,
        "newRelease": true,
        "saleEndDate": "2024-12-31",
        "customerRating": 4.8,
        "reviewCount": 156,
        "downloadCount": 2450,
        "tags": ["office", "furniture", "ergonomic", "modern", "adjustable"]
      }
    }
  ]
}
```

## Complete Example

A comprehensive implementation for discovery optimization:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Modern Ergonomic Office Chair",
  "alternateName": ["Executive Desk Chair", "Mesh Office Chair"],
  "description": "A sleek, fully adjustable office chair with ergonomic lumbar support, breathable mesh back, and modern design. Features height adjustment, 360-degree swivel, and armrest customization for optimal comfort during long work sessions.",
  "keywords": ["office chair", "ergonomic", "adjustable height", "lumbar support", "mesh back", "professional furniture", "executive chair", "computer chair", "desk chair", "swivel chair"],
  "category": "Furniture/Office/Seating",
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Furnishings Inc.",
    "url": "https://virtualfurnishings.example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://virtualfurnishings.example.com/logo.png"
    }
  },
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "productCode",
    "value": "VF-CHAIR-2024-001"
  },
  
  "contentUrl": "https://assets.example.com/chair/model.glb",
  "encodingFormat": "model/gltf-binary",
  "fileSize": "4.2 MB",
  
  "dateCreated": "2024-03-15",
  "dateModified": "2024-04-02",
  
  "image": "https://assets.example.com/chair/preview.jpg",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://assets.example.com/chair/thumbnail.jpg",
    "width": 256,
    "height": 256,
    "encodingFormat": "image/jpeg"
  },
  
  "associatedMedia": [
    {
      "@type": "ImageObject",
      "name": "Front View",
      "contentUrl": "https://assets.example.com/chair/front.jpg",
      "encodingFormat": "image/jpeg",
      "width": 1024,
      "height": 1024
    },
    {
      "@type": "ImageObject",
      "name": "Side View",
      "contentUrl": "https://assets.example.com/chair/side.jpg",
      "encodingFormat": "image/jpeg",
      "width": 1024,
      "height": 1024
    },
    {
      "@type": "VideoObject",
      "name": "360° Rotation",
      "contentUrl": "https://assets.example.com/chair/rotation.mp4",
      "encodingFormat": "video/mp4",
      "duration": "PT10S"
    },
    {
      "@type": "VideoObject",
      "name": "Feature Demonstration",
      "contentUrl": "https://assets.example.com/chair/features.mp4",
      "encodingFormat": "video/mp4",
      "duration": "PT45S",
      "description": "Demonstrates height adjustment, swivel, and armrest customization"
    }
  ],
  
  "isPartOf": {
    "@type": "CreativeWork",
    "name": "Modern Office Collection",
    "url": "https://example.com/collections/modern-office"
  },
  
  "isRelatedTo": [
    {
      "@type": "3DModel",
      "name": "Modern Office Desk",
      "url": "https://example.com/assets/office-desk"
    },
    {
      "@type": "3DModel",
      "name": "Office Bookshelf",
      "url": "https://example.com/assets/bookshelf"
    },
    {
      "@type": "3DModel",
      "name": "Desktop Computer",
      "url": "https://example.com/assets/desktop-computer"
    }
  ],
  
  "workExample": [
    {
      "@type": "3DModel",
      "name": "Blue Office Chair Variant",
      "image": "https://assets.example.com/chair/blue.jpg",
      "url": "https://example.com/assets/office-chair-blue"
    },
    {
      "@type": "3DModel",
      "name": "Red Office Chair Variant",
      "image": "https://assets.example.com/chair/red.jpg",
      "url": "https://example.com/assets/office-chair-red"
    },
    {
      "@type": "3DModel",
      "name": "Executive Model with Headrest",
      "image": "https://assets.example.com/chair/executive.jpg",
      "url": "https://example.com/assets/office-chair-executive"
    }
  ],
  
  "audience": {
    "@type": "Audience",
    "audienceType": ["office workers", "interior designers", "virtual offices", "remote workers", "3D environment creators"]
  },
  
  "offers": {
    "@type": "Offer",
    "price": 25.00,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Virtual Furnishings Inc.",
      "url": "https://virtualfurnishings.example.com"
    },
    "priceValidUntil": "2024-12-31"
  },
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "technicalSpecifications",
      "name": "Technical Specifications",
      "value": {
        "polyCount": 12500,
        "textureResolution": 2048,
        "animationCount": 3,
        "fileSize": 4.2,
        "fileSizeUnit": "MB",
        "materials": 5,
        "fileFormats": ["glb", "usdz", "fbx"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "compatibility",
      "name": "Platform Compatibility",
      "value": ["platform-a", "platform-b", "platform-c", "platform-d"]
    },
    {
      "@type": "PropertyValue",
      "propertyID": "performanceRating",
      "name": "Performance Rating",
      "value": "medium"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "marketplaceFeatures",
      "name": "Marketplace Features",
      "value": {
        "featured": true,
        "bestSeller": false,
        "newRelease": true,
        "saleEndDate": "2024-12-31",
        "customerRating": 4.8,
        "reviewCount": 156,
        "downloadCount": 2450,
        "tags": ["office", "furniture", "ergonomic", "modern", "adjustable"]
      }
    },
    {
      "@type": "PropertyValue",
      "propertyID": "searchMetadata",
      "name": "Search Metadata",
      "value": {
        "primaryCategory": "Office Furniture",
        "secondaryCategories": ["Seating", "Ergonomic Furniture", "Office Equipment"],
        "style": "Modern",
        "era": "Contemporary",
        "materials": ["Mesh", "Metal", "Plastic"],
        "colors": ["Black", "Gray"],
        "featuredIn": ["Modern Office Showcase", "Ergonomic Workspace Collection"],
        "useCases": ["Office Work", "Home Office", "Collaborative Spaces", "Virtual Meetings"]
      }
    }
  ]
}
```

## Implementation Considerations

### Platform-Specific Search Optimization

Different platforms prioritize different search signals:

- **Marketplaces**: Often prioritize titles, categories, and tags
- **Content Libraries**: Typically emphasize technical specifications and compatibility
- **Social Platforms**: Tend to weigh user engagement and visual appeal heavily
- **3D Viewers**: Focus on file format support and technical compatibility
- **Search Engines**: Prioritize structured data and semantic relationships

### SEO Best Practices

- Use descriptive, specific names that include key search terms
- Create detailed descriptions with natural language and relevant keywords
- Use consistent categorization that aligns with platform taxonomies
- Include multiple high-quality preview images and videos
- Maintain proper semantic relationships between related assets
- Update metadata regularly with fresh content and features

### Metadata Optimization Techniques

- **Keyword Research**: Identify high-value search terms in your asset domain
- **Competitor Analysis**: Study successful assets in similar categories
- **A/B Testing**: Test different titles, descriptions, and preview images
- **Analytics Integration**: Track which search terms drive discovery
- **Localization**: Provide translations for global discovery
- **Seasonal Updates**: Refresh keywords and features for seasonal relevance

### Common Issues

- **Keyword Stuffing**: Overloading metadata with repetitive terms hurts ranking
- **Inconsistent Categorization**: Using different categories across platforms confuses search algorithms
- **Missing Technical Details**: Omitting specifications prevents filtering in advanced search
- **Poor Visual Assets**: Low-quality previews reduce click-through rates
- **Broken Relationships**: Invalid links to related content hurt SEO value
- **Outdated Information**: Platforms may penalize stale or outdated metadata

## Related Documentation

- [Basic Asset Implementation](./assets.md)
- [Cross-Platform Asset Implementation](./cross-platform-assets.md)
- [Schema.org Standard](../standards/schema-org.md)
- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md) 