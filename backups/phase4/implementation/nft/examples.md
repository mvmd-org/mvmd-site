# NFT Metadata Examples

# NFT Metadata Examples

## Evolution of NFT Capabilities

NFTs have evolved far beyond simple images with basic metadata. Modern NFTs can represent complex digital assets with multiple components, formats, and use cases. Here are the key ways NFTs can be structured:

### Multi-Asset NFTs
- Single NFT can reference multiple file formats (images, 3D models, videos)
- Different quality levels of the same asset (high/low resolution versions)
- Supporting materials (documentation, concept art, promotional content)
- Alternative formats for different platforms or use cases

### Composable NFTs
- NFTs made up of multiple interchangeable components
- Assets that can be combined, upgraded, or modified
- Parts that can be shared across multiple NFTs
- Dynamic assemblies based on user preferences or platform requirements

### Interactive NFTs
- Assets with programmable behaviors
- NFTs that respond to user interactions
- Tokens that can evolve or change over time
- Properties that can be modified based on external data

### Cross-Platform NFTs
- Assets usable across different metaverse platforms
- NFTs with platform-specific implementations
- Tokens with universal identification and ownership
- Metadata that maintains consistency across ecosystems

### Rich Metadata Integration
- Detailed asset descriptions and properties
- Clear ownership and attribution information
- Technical specifications and requirements
- Usage rights and licensing details


## Basic NFT with Simple Schema.org Integration

This example shows direct Schema.org integration without additional namespaces:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "ImageObject",
  "name": "Mystic Sword #123",
  "description": "A legendary sword forged in digital flames",
  "contentUrl": "https://example.com/sword123.png",
  "encodingFormat": "image/png",
  "attributes": [
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    },
    {
      "trait_type": "Element",
      "value": "Fire"
    }
  ]
}
```

## NFT Using Root Data Attribute with File References

This example shows how to use the `data` attribute while referencing external files:

```json
{
  "name": "Cyber Knight #007",
  "description": "Elite digital warrior with advanced combat capabilities",
  "image": "https://example.com/knight007/preview.png",
  "attributes": [
    {
      "trait_type": "Class",
      "value": "Warrior"
    },
    {
      "trait_type": "Rank",
      "value": "Elite"
    }
  ],
  "data": {
    "@context": {
      "@vocab": "https://schema.org/"
    },
    "@type": "ImageObject",
    "contentUrl": "https://example.com/knight007/preview.png",
    "encodingFormat": "image/png",
    "associatedMedia": [
      {
        "@type": "3DModel",
        "name": "Full Character Model",
        "contentUrl": "https://example.com/knight007/model.glb",
        "encodingFormat": "model/gltf-binary"
      },
      {
        "@type": "ImageObject",
        "name": "Character Portrait",
        "contentUrl": "https://example.com/knight007/portrait.jpg",
        "encodingFormat": "image/jpeg"
      }
    ],
    "encodesCreativeWork": [
      {
        "@type": "ImageObject",
        "name": "Concept Art",
        "contentUrl": "https://example.com/knight007/concept.png",
        "encodingFormat": "image/png"
      }
    ]
  }
}
```

## Complex NFT with Multiple Asset Types

This example demonstrates a more complex NFT with multiple associated files and media types:

```json
{
  "name": "Digital Realm #42",
  "description": "An interactive virtual space with dynamic elements",
  "image": "https://example.com/realm42/thumbnail.png",
  "attributes": [
    {
      "trait_type": "Environment",
      "value": "Cyber City"
    },
    {
      "trait_type": "Size",
      "value": "Large"
    },
    {
      "trait_type": "Interactive Elements",
      "value": 15
    }
  ],
  "data": {
    "@context": {
      "@vocab": "https://schema.org/"
    },
    "@type": "Place",
    "contentUrl": "https://example.com/realm42/thumbnail.png",
    "encodingFormat": "image/png",
    "associatedMedia": [
      {
        "@type": "3DModel",
        "name": "Environment Model",
        "contentUrl": "https://example.com/realm42/environment.usd",
        "encodingFormat": "model/vnd.usd"
      },
      {
        "@type": "3DModel",
        "name": "Low Resolution Model",
        "contentUrl": "https://example.com/realm42/environment_low.glb",
        "encodingFormat": "model/gltf-binary"
      }
    ],
    "encodesCreativeWork": [
      {
        "@type": "ImageObject",
        "name": "Environment Map",
        "contentUrl": "https://example.com/realm42/map.jpg",
        "encodingFormat": "image/jpeg"
      }
    ]
  }
}
```

## NFT with Character Metadata

This example shows how to structure character-based NFT metadata:

```json
{
  "name": "Hero #256",
  "description": "A legendary hero of the digital realm",
  "image": "https://example.com/hero256/card.png",
  "attributes": [
    {
      "trait_type": "Class",
      "value": "Mage"
    },
    {
      "trait_type": "Level",
      "value": 50
    },
    {
      "trait_type": "Power",
      "value": 95
    }
  ],
  "data": {
    "@context": {
      "@vocab": "https://schema.org/"
    },
    "@type": "ImageObject",
    "contentUrl": "https://example.com/hero256/card.png",
    "encodingFormat": "image/png",
    "mainEntity": {
      "@type": "Person",
      "name": "Archmage Zephyr",
      "description": "Master of elemental magic and keeper of ancient knowledge",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "faction",
          "value": "Mystic Council"
        },
        {
          "@type": "PropertyValue",
          "name": "specialization",
          "value": "Elemental Magic"
        }
      ]
    },
    "associatedMedia": [
      {
        "@type": "3DModel",
        "name": "Character Model",
        "contentUrl": "https://example.com/hero256/model.glb",
        "encodingFormat": "model/gltf-binary"
      }
    ]
  }
}
```

Each example demonstrates different aspects of NFT metadata integration:
- Proper use of Schema.org context with `@vocab`
- File references instead of embedded data
- Appropriate use of Schema.org types
- Clear organization of metadata
- Compatibility with NFT marketplace standards

These patterns can be adapted for various NFT types while maintaining compatibility with both NFT platforms and Schema.org validators.
