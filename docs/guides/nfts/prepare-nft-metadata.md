---
sidebar_position: 1
---

# Preparing NFT Metadata

This guide explains how to structure and prepare metadata for NFTs using the MVMD standard, ensuring compatibility with major NFT marketplaces and platforms while maintaining rich metaverse functionality.

## NFT Metadata Essentials

NFT metadata needs to balance marketplace compatibility with rich metaverse descriptors. Here are the essential properties your NFT metadata should include:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Celestial Guardian #042",
  "description": "A legendary guardian from the Astral Realm, featuring custom armor with reactive light effects and an intelligent companion drone.",
  "image": "https://example.com/images/celestial-guardian-042.png",
  "contentUrl": "https://example.com/models/celestial-guardian-042.glb",
  "encodingFormat": "model/gltf-binary",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "TokenID",
    "value": "42"
  },
  "creator": {
    "@type": "Person",
    "name": "Stellar Designs",
    "url": "https://stellardesigns.art"
  },
  "dateCreated": "2023-11-15T08:30:00Z"
}
```

## Marketplace Compatibility Layer

Major NFT marketplaces expect specific fields. Include these to ensure your NFT displays correctly:

```json
{
  // ... existing context and metadata
  
  "image": "https://example.com/images/celestial-guardian-042.png",
  "external_url": "https://mymetaverseproject.com/nfts/celestial-guardian-042",
  "animation_url": "https://example.com/models/celestial-guardian-042.glb",
  "attributes": [
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    },
    {
      "trait_type": "Class",
      "value": "Guardian"
    },
    {
      "trait_type": "Element",
      "value": "Celestial"
    },
    {
      "display_type": "boost_percentage",
      "trait_type": "Protection",
      "value": 85
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ]
}
```

## Extended Metaverse Properties

Enhance your NFT with metaverse-specific properties for richer experiences:

```json
{
  // ... existing context and metadata
  
  "mvmd:category": "avatar",
  "mvmd:avatarType": "humanoid",
  "mvmd:compatibility": [
    {
      "platform": "Decentraland",
      "specification": "v2.0"
    },
    {
      "platform": "The Sandbox",
      "specification": "v1.3"
    }
  ],
  "mvmd:features": [
    "animatable",
    "customizable",
    "interactive"
  ],
  "mvmd:dimensions": {
    "height": 1.85,
    "width": 0.65,
    "depth": 0.35,
    "unit": "meters"
  },
  "mvmd:materials": [
    {
      "name": "Astral Armor",
      "type": "metal",
      "properties": {
        "reflectivity": 0.8,
        "emissive": true,
        "emissiveColor": "#2a6cd4"
      }
    },
    {
      "name": "Energy Core",
      "type": "emissive",
      "properties": {
        "color": "#47f3fd",
        "intensity": 2.5,
        "pulsating": true
      }
    }
  ]
}
```

## Technical Specifications

Include technical details to ensure proper rendering and functionality:

```json
{
  // ... existing context and metadata
  
  "mvmd:technical": {
    "polyCount": 42000,
    "textureResolution": "2K",
    "fileSize": 8.5,
    "fileSizeUnit": "MB",
    "animations": [
      {
        "name": "idle",
        "duration": 3.2
      },
      {
        "name": "walk",
        "duration": 1.2
      },
      {
        "name": "attack",
        "duration": 1.8
      },
      {
        "name": "special",
        "duration": 4.5
      }
    ],
    "lod": [
      {
        "level": 0,
        "polyCount": 42000
      },
      {
        "level": 1,
        "polyCount": 25000
      },
      {
        "level": 2, 
        "polyCount": 12000
      }
    ]
  }
}
```

## Rights Management

Define ownership, licensing, and royalties:

```json
{
  // ... existing context and metadata
  
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "copyrightHolder": {
    "@type": "Person",
    "name": "Stellar Designs",
    "url": "https://stellardesigns.art"
  },
  "copyrightYear": 2023,
  "copyrightNotice": "© 2023 Stellar Designs. All rights reserved.",
  "mvmd:royalty": {
    "percentage": 5.0,
    "addresses": [
      {
        "address": "0x1234567890123456789012345678901234567890",
        "blockchain": "Ethereum",
        "split": 100
      }
    ]
  },
  "mvmd:permissions": {
    "commercial": false,
    "modification": false,
    "display": true,
    "reproduction": true
  }
}
```

## Blockchain-Specific Information

Include relevant blockchain details:

```json
{
  // ... existing context and metadata
  
  "mvmd:blockchain": {
    "network": "Ethereum",
    "contract": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    "tokenId": "42",
    "standard": "ERC-721",
    "minted": "2023-11-20T14:35:22Z",
    "owner": "0x9876543210987654321098765432109876543210"
  }
}
```

## Complete NFT Metadata Example

Here's a comprehensive example bringing all sections together:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Celestial Guardian #042",
  "description": "A legendary guardian from the Astral Realm, featuring custom armor with reactive light effects and an intelligent companion drone. This NFT grants access to exclusive quests in the Cosmic Frontiers metaverse.",
  "image": "https://example.com/images/celestial-guardian-042.png",
  "contentUrl": "https://example.com/models/celestial-guardian-042.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/celestial-guardian-042.jpg",
    "width": 800,
    "height": 800
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "AR Preview",
      "value": "https://example.com/ar/celestial-guardian-042.usdz"
    }
  ],
  
  "external_url": "https://mymetaverseproject.com/nfts/celestial-guardian-042",
  "animation_url": "https://example.com/models/celestial-guardian-042.glb",
  "attributes": [
    {
      "trait_type": "Rarity",
      "value": "Legendary"
    },
    {
      "trait_type": "Class",
      "value": "Guardian"
    },
    {
      "trait_type": "Element",
      "value": "Celestial"
    },
    {
      "display_type": "boost_percentage",
      "trait_type": "Protection",
      "value": 85
    },
    {
      "display_type": "number",
      "trait_type": "Generation",
      "value": 2
    }
  ],
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "TokenID",
    "value": "42"
  },
  "creator": {
    "@type": "Person",
    "name": "Stellar Designs",
    "url": "https://stellardesigns.art"
  },
  "dateCreated": "2023-11-15T08:30:00Z",
  
  "mvmd:category": "avatar",
  "mvmd:avatarType": "humanoid",
  "mvmd:compatibility": [
    {
      "platform": "Decentraland",
      "specification": "v2.0"
    },
    {
      "platform": "The Sandbox",
      "specification": "v1.3"
    },
    {
      "platform": "Cosmic Frontiers",
      "specification": "v3.1",
      "features": ["quests", "combat", "social"]
    }
  ],
  "mvmd:features": [
    "animatable",
    "customizable",
    "interactive"
  ],
  "mvmd:dimensions": {
    "height": 1.85,
    "width": 0.65,
    "depth": 0.35,
    "unit": "meters"
  },
  "mvmd:materials": [
    {
      "name": "Astral Armor",
      "type": "metal",
      "properties": {
        "reflectivity": 0.8,
        "emissive": true,
        "emissiveColor": "#2a6cd4"
      }
    },
    {
      "name": "Energy Core",
      "type": "emissive",
      "properties": {
        "color": "#47f3fd",
        "intensity": 2.5,
        "pulsating": true
      }
    }
  ],
  
  "mvmd:technical": {
    "polyCount": 42000,
    "textureResolution": "2K",
    "fileSize": 8.5,
    "fileSizeUnit": "MB",
    "animations": [
      {
        "name": "idle",
        "duration": 3.2
      },
      {
        "name": "walk",
        "duration": 1.2
      },
      {
        "name": "attack",
        "duration": 1.8
      },
      {
        "name": "special",
        "duration": 4.5
      }
    ],
    "lod": [
      {
        "level": 0,
        "polyCount": 42000
      },
      {
        "level": 1,
        "polyCount": 25000
      },
      {
        "level": 2, 
        "polyCount": 12000
      }
    ]
  },
  
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "copyrightHolder": {
    "@type": "Person",
    "name": "Stellar Designs",
    "url": "https://stellardesigns.art"
  },
  "copyrightYear": 2023,
  "copyrightNotice": "© 2023 Stellar Designs. All rights reserved.",
  "mvmd:royalty": {
    "percentage": 5.0,
    "addresses": [
      {
        "address": "0x1234567890123456789012345678901234567890",
        "blockchain": "Ethereum",
        "split": 100
      }
    ]
  },
  "mvmd:permissions": {
    "commercial": false,
    "modification": false,
    "display": true,
    "reproduction": true
  },
  
  "mvmd:blockchain": {
    "network": "Ethereum",
    "contract": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    "tokenId": "42",
    "standard": "ERC-721",
    "minted": "2023-11-20T14:35:22Z",
    "owner": "0x9876543210987654321098765432109876543210"
  },
  
  "mvmd:utility": {
    "accessControl": [
      {
        "type": "area",
        "name": "VIP Celestial Lounge",
        "world": "Cosmic Frontiers"
      },
      {
        "type": "event",
        "name": "Guardian Council Meetings",
        "frequency": "monthly"
      }
    ],
    "gameplay": [
      {
        "type": "quest",
        "name": "Astral Defense Line",
        "rewards": ["experience", "currency", "items"]
      }
    ],
    "benefits": [
      {
        "type": "discount",
        "description": "20% off all Cosmic Frontiers marketplace purchases",
        "conditions": "While equipped in-game"
      }
    ]
  },
  
  "mvmd:history": [
    {
      "event": "created",
      "date": "2023-11-15T08:30:00Z",
      "agent": "Stellar Designs"
    },
    {
      "event": "minted",
      "date": "2023-11-20T14:35:22Z",
      "blockchain": "Ethereum",
      "transaction": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
    }
  ]
}
```

## Best Practices for NFT Metadata

1. **Ensure Marketplace Compatibility**: Always include the basic fields expected by marketplaces (name, description, image, attributes) to ensure proper display.

2. **Use Permanent Storage**: Store your metadata and assets on permanent, decentralized storage solutions like IPFS or Arweave to prevent broken links.

3. **Include Rich Media**: Provide multiple media representations (2D image, 3D model, AR version) to maximize usability across platforms.

4. **Be Comprehensive**: The more detailed your metadata, the more valuable and functional your NFT will be across metaverse environments.

5. **Validate Your Metadata**: Always validate your metadata against the MVMD schema before publishing to ensure it's correctly formatted.

6. **Mind File Sizes**: Optimize 3D models and textures for web delivery without compromising quality.

7. **Document Utility**: Clearly describe any utility, access rights, or special features provided by the NFT.

8. **Consider Platform Requirements**: Different metaverse platforms may have specific requirements for assets—document compatibility carefully.

## Next Steps

- [Add Royalty Information](add-royalty-information.md) - Learn how to properly implement royalty structures for your NFTs
- [Create Composable NFTs](composable-nfts.md) - Explore how to create NFTs that can be combined or have modular components
- [Validate Your Metadata](../basic/validate-metadata.md) - Ensure your NFT metadata is correctly structured

