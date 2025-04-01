# NFTs

NFTs can leverage Schema.org metadata to enhance their functionality while maintaining compatibility with existing blockchain standards. This guide shows how to extend standard NFT metadata formats with rich Schema.org descriptions.

## Modern NFT Capabilities

Modern NFTs can support:
- Multiple file formats per token
- Different quality levels of assets
- Supporting materials and documentation
- Platform-specific implementations
- Interactive behaviors
- Dynamic properties
- Cross-platform compatibility

## ERC-721 Metadata Standard

The [ERC-721 standard](https://eips.ethereum.org/EIPS/eip-721) defines a basic metadata structure that most NFT platforms expect:

```json
{
  "name": "Asset Name",
  "description": "Asset Description",
  "image": "https://example.com/image.jpg",
  "attributes": [
    {
      "trait_type": "Property Name",
      "value": "Property Value"
    }
  ]
}
```

Required fields:
- `name`: Token name
- `description`: Token description
- `image`: URL to token image
- `attributes`: Array of trait objects (optional but common)

This basic structure is widely supported but limited in its ability to describe complex digital assets.

## Integration Approaches

### 1. Root Data Attribute
This approach preserves the original ERC-721 structure while adding Schema.org metadata:

```json
{
  "name": "Example NFT",
  "description": "Platform-compatible NFT description",
  "image": "https://example.com/preview.jpg",
  "attributes": [
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    }
  ],
  "data": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "ImageObject",
    "contentUrl": "https://example.com/preview.jpg",
    "encodingFormat": "image/jpeg",
    "associatedMedia": [
      {
        "@type": "3DModel",
        "contentUrl": "https://example.com/model.glb",
        "encodingFormat": "model/gltf-binary"
      }
    ]
  }
}
```

### 2. Direct Integration
This approach merges Schema.org properties with the NFT metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "ImageObject",
  "name": "Example NFT",
  "description": "Enhanced NFT description",
  "contentUrl": "https://example.com/preview.jpg",
  "encodingFormat": "image/jpeg",
  "attributes": [
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    }
  ],
  "associatedMedia": [
    {
      "@type": "3DModel",
      "contentUrl": "https://example.com/model.glb",
      "encodingFormat": "model/gltf-binary"
    }
  ]
}
```

## When to Use Each Approach

### Use Root Data Attribute
- Working with established NFT marketplaces
- Maximum compatibility is required
- Existing metadata processing must be maintained
- Platform may not understand Schema.org

### Use Direct Integration
- Building new platforms or marketplaces
- Full control over metadata processing
- Schema.org compatibility is primary concern
- Metadata redundancy should be minimized

## Best Practices


### Compatibility
- Maintain required ERC-721 fields
- Ensure valid URLs
- Test with target platforms
- Handle missing data gracefully

### Schema.org Implementation
- Use proper context declarations
- Choose appropriate types
- Maintain consistent naming
- Document custom properties

### Data Quality
- Avoid duplicate information
- Use appropriate data types
- Include required properties
- Validate all URLs

### Note to Platform/App Developers
When implementing NFT metadata support in your platform or application, ensure you can handle both integration approaches (root data attribute and direct integration) to maintain compatibility and future-proofing. Your platform should:

- Check for Schema.org properties at both the root level and in the data attribute
- Process whichever format is present without breaking standard ERC-721 compatibility
- Document which approach your platform prefers while supporting both
- Gracefully handle cases where metadata exists in both locations

Supporting both approaches ensures your platform works with current NFT standards while being ready for enhanced metadata capabilities.



_Note: For detailed examples of NFT metadata implementation, including complex scenarios with multiple assets, character metadata, and interactive elements, please refer to the Examples section of the documentation. (Coming soon)_
