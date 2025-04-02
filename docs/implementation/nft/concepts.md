# NFT Metadata Integration

## Overview

NFT metadata standards across different blockchains provide basic structures for describing digital assets. While these standards serve their core purpose, they can be enhanced with rich metadata using Schema.org vocabularies. This integration enables better discoverability, interoperability, and richer asset descriptions while maintaining compatibility with existing NFT platforms and marketplaces.

## Integration Approaches

There are two main approaches to integrating Schema.org metadata with NFT standards:

1. **Using a Root Data Attribute**: Add Schema.org metadata in a `data` attribute at the root level of the NFT metadata
2. **Direct Integration**: Merge Schema.org properties directly into the NFT metadata root

Each approach has its own advantages and use cases, which we'll explore using the ERC-721 standard as an example.

## Implementation Methods

### 1. Using a Root Data Attribute

This approach maintains strict compatibility with existing NFT standards by adding Schema.org metadata in a dedicated `data` attribute at the root level. The original NFT metadata structure remains unchanged, making this approach safe for use with existing marketplaces and platforms.

**Original NFT Metadata:**
```json
{
  "name": "Example Token",
  "description": "A detailed description of the token.",
  "image": "https://example.com/token.png",
  "attributes": [
    {
      "trait_type": "Trait Name",
      "value": "Trait Value"
    },
    {
      "trait_type": "Level",
      "value": 5
    }
  ]
}
```

**With Added Schema.org Metadata:**
```json
{
  "name": "Example Token",
  "description": "A detailed description of the token.",
  "image": "https://example.com/token.png",
  "attributes": [
    {
      "trait_type": "Trait Name",
      "value": "Trait Value"
    },
    {
      "trait_type": "Level",
      "value": 5
    }
  ],
  "data": {
    "@context": {
      "@vocab": "https://schema.org/"
    },
    "@type": "ImageObject",
    "contentUrl": "https://example.com/token.png",
    "encodingFormat": "image/png",
    "associatedMedia": [
      {
        "@type": "3DModel",
        "name": "Full Model",
        "contentUrl": "https://example.com/model.glb",
        "encodingFormat": "model/gltf-binary"
      }
    ]
  }
}
```

### 2. Direct Integration

This approach merges Schema.org properties directly into the root of the NFT metadata. This creates a more streamlined structure but requires platforms to be aware of Schema.org properties.

**Merged Schema.org Metadata:**
```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "ImageObject",
  "name": "Example Token",
  "description": "A detailed description of the token.",
  "contentUrl": "https://example.com/token.png",
  "encodingFormat": "image/png",
  "attributes": [
    {
      "trait_type": "Trait Name",
      "value": "Trait Value"
    },
    {
      "trait_type": "Level",
      "value": 5
    }
  ],
  "associatedMedia": [
    {
      "@type": "3DModel",
      "name": "Full Model",
      "contentUrl": "https://example.com/model.glb",
      "encodingFormat": "model/gltf-binary"
    }
  ]
}
```

## When to Use Each Approach

### Use the Root Data Attribute When:
- Working with established NFT marketplaces
- Maximum compatibility is required
- You need to maintain existing metadata processing
- The platform may not understand Schema.org properties

### Use Direct Integration When:
- Building new platforms or marketplaces
- You have control over metadata processing
- Schema.org compatibility is a primary requirement
- You want to minimize metadata redundancy

## Best Practices

### 1. Maintain Compatibility
- Preserve all required fields from the original NFT standard
- Ensure all URLs are valid and accessible
- Test metadata with target marketplaces

### 2. Schema.org Implementation
- Always include proper `@context` and `@type` declarations
- Use appropriate Schema.org types for different asset categories
- Maintain consistent property naming

### 3. Data Quality
- Avoid duplicate information between NFT and Schema.org metadata
- Use appropriate data types for values
- Include all required properties for chosen Schema.org types

## Validation Rules

### Required Elements
- Original NFT metadata must remain valid
- Schema.org context must be properly declared
- All URLs must be valid and accessible
- Required properties must be present for chosen Schema.org type

### Optional Elements
- Additional Schema.org properties can be added as needed
- Custom properties can be included using appropriate namespacing
- Extended metadata can be added in the data attribute

## Next Steps

- Review [Metadata Profiles](/integration-profiles/basic.md) for specific asset types
- See [Validation Tools](../reference/validator.md) for testing metadata
- Check [Best Practices](/implementation/best-practices.md) for implementation guidance
