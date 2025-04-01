---
sidebar_position: 1
---

# Basic Asset Example

This example demonstrates a complete implementation of metadata for a basic 3D asset. It follows the Basic Profile and includes all essential properties for interoperability.

## Complete Metadata Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "gltf": "https://www.khronos.org/gltf/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "@id": "https://example.com/assets/simple-chair",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "AssetID",
    "value": "asset-2024-001"
  },
  "name": "Modern Office Chair",
  "description": "A sleek, ergonomic office chair with adjustable height and armrests. This mid-century inspired design features a mesh back for breathability and comfortable padding on the seat.",
  "creator": {
    "@type": "Person",
    "name": "Designer Name",
    "url": "https://example.com/designers/name"
  },
  "dateCreated": "2024-03-15",
  "dateModified": "2024-03-20",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  
  "contentUrl": "https://example.com/assets/chair.glb",
  "encodingFormat": "model/gltf-binary",
  "contentSize": "3.2MB",
  
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/chair.jpg",
    "width": 400,
    "height": 400
  },
  
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/chair-angle1.jpg",
      "caption": "Front view"
    },
    {
      "@type": "ImageObject",
      "contentUrl": "https://example.com/images/chair-angle2.jpg",
      "caption": "Side view"
    }
  ],
  
  "keywords": ["chair", "furniture", "office", "modern", "ergonomic"],
  "category": "Furniture",
  
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "polyCount",
      "name": "Polygon Count",
      "value": 8500
    },
    {
      "@type": "PropertyValue",
      "propertyID": "dimensions",
      "name": "Dimensions",
      "value": "60cm x 65cm x 95cm"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "materials",
      "name": "Materials",
      "value": ["Mesh", "Metal", "Fabric"]
    }
  ],
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "Modeling Software 4.0"
  },
  
  "mvmd:compatibility": {
    "platforms": ["platform-a", "platform-b", "platform-c"],
    "minVersion": "1.0"
  }
}
```

## Explanation By Section

### Core Identity Properties

```json
"@context": {
  "@vocab": "https://schema.org/",
  "gltf": "https://www.khronos.org/gltf/",
  "mvmd": "https://mvmd.org/v1/"
},
"@type": "3DModel",
"@id": "https://example.com/assets/simple-chair",
"identifier": {
  "@type": "PropertyValue",
  "propertyID": "AssetID",
  "value": "asset-2024-001"
},
"name": "Modern Office Chair",
"description": "A sleek, ergonomic office chair with adjustable height and armrests. This mid-century inspired design features a mesh back for breathability and comfortable padding on the seat."
```

This section establishes:
- **Context**: Sets Schema.org as the default vocabulary and adds gltf and mvmd namespaces
- **Type**: Defines this as a 3D model
- **Identifier**: Provides a unique, persistent identifier for the asset
- **Name and Description**: Gives a clear, descriptive title and detailed description

### Creator and Rights Information

```json
"creator": {
  "@type": "Person",
  "name": "Designer Name",
  "url": "https://example.com/designers/name"
},
"dateCreated": "2024-03-15",
"dateModified": "2024-03-20",
"license": "https://creativecommons.org/licenses/by/4.0/"
```

This section provides:
- **Creator**: Information about who created the asset
- **Dates**: When the asset was created and last modified
- **License**: Clear rights information using a standard license URL

### Content References

```json
"contentUrl": "https://example.com/assets/chair.glb",
"encodingFormat": "model/gltf-binary",
"contentSize": "3.2MB",

"thumbnail": {
  "@type": "ImageObject",
  "contentUrl": "https://example.com/thumbnails/chair.jpg",
  "width": 400,
  "height": 400
},

"image": [
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/chair-angle1.jpg",
    "caption": "Front view"
  },
  {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/images/chair-angle2.jpg",
    "caption": "Side view"
  }
]
```

This section includes:
- **Primary Content**: Link to the 3D model file with format and size
- **Thumbnail**: Small preview image optimized for quick loading
- **Additional Images**: Multiple views of the asset with captions

### Classification Information

```json
"keywords": ["chair", "furniture", "office", "modern", "ergonomic"],
"category": "Furniture"
```

This section provides:
- **Keywords**: Specific search terms to improve discoverability
- **Category**: Broader classification for the asset

### Technical Details

```json
"additionalProperty": [
  {
    "@type": "PropertyValue",
    "propertyID": "polyCount",
    "name": "Polygon Count",
    "value": 8500
  },
  {
    "@type": "PropertyValue",
    "propertyID": "dimensions",
    "name": "Dimensions",
    "value": "60cm x 65cm x 95cm"
  },
  {
    "@type": "PropertyValue",
    "propertyID": "materials",
    "name": "Materials",
    "value": ["Mesh", "Metal", "Fabric"]
  }
]
```

This section includes:
- **Technical Specifications**: Important details about the asset's complexity and features
- **Physical Properties**: Real-world dimensions and materials

### Standard-Specific Properties

```json
"gltf:asset": {
  "version": "2.0",
  "generator": "Modeling Software 4.0"
},

"mvmd:compatibility": {
  "platforms": ["platform-a", "platform-b", "platform-c"],
  "minVersion": "1.0"
}
```

This section provides:
- **glTF-Specific Information**: Details required by the glTF standard
- **MVMD Compatibility**: Information about platform compatibility

## Implementation Notes

### Storage Options

This metadata can be:

1. **Stored as a separate file** alongside the 3D model:
   ```
   assets/
   ├── chair.glb
   └── chair.json
   ```

2. **Embedded within the asset** (if the format supports it)

3. **Hosted on a metadata registry** or asset management system

### Validation

Before publishing, validate your metadata using:

- MVMD Validator
- JSON-LD Playground (https://json-ld.org/playground/)
- Schema.org Validator

### Extension Points

This basic example can be extended by:

- Adding `hasPart` relationships for component models
- Including `associatedMedia` for textures and materials
- Adding `potentialAction` for interactive behaviors
- Incorporating domain-specific properties using additional namespaces

## Next Steps

After implementing this basic asset metadata:

- Ensure your asset is discoverable by properly exposing the metadata
- Consider publishing to registries or marketplaces that support MVMD
- Implement more advanced features as needed for your specific use case

For more complex examples, see:
- [Avatar Profile Example](./avatar-profile.md)
- [Virtual Environment Example](./virtual-environment.md)
- [NFT Asset Example](./nft-asset.md)