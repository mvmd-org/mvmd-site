---
sidebar_position: 4
---

# NFT Implementation

This guide covers implementation patterns for NFTs using MVMD-compliant metadata structures across different blockchain ecosystems.

## Core NFT Implementation Patterns

### Basic NFT Metadata

A comprehensive NFT implementation includes blockchain details, asset references, and creator information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Cosmic Voyager #42",
  "description": "A unique spacecraft design from the Cosmic Voyagers collection",
  "creator": {
    "@type": "Person",
    "name": "Digital Artisan",
    "url": "https://artist.example.com"
  },
  "image": "https://ipfs.io/ipfs/QmXAXB...",
  "contentUrl": "https://ipfs.io/ipfs/QmZXYZ...",
  "encodingFormat": "model/gltf-binary",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "blockchain",
    "name": "Token ID",
    "value": "42"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "blockchain",
      "name": "Blockchain Details",
      "value": {
        "network": "ethereum",
        "contract": "0x1234567890abcdef1234567890abcdef12345678",
        "standard": "ERC-721",
        "tokenId": "42"
      }
    }
  ]
}
```

### Cross-Chain NFTs

For NFTs that exist on multiple chains or have been bridged:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Cosmic Voyager #42",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "blockchain",
      "name": "Blockchain Details",
      "value": {
        "primaryNetwork": "ethereum",
        "primaryContract": "0x1234567890abcdef1234567890abcdef12345678",
        "primaryTokenId": "42",
        "bridgedInstances": [
          {
            "network": "polygon",
            "contract": "0xabcdef1234567890abcdef1234567890abcdef12",
            "tokenId": "42",
            "bridgeContract": "0x0987654321fedcba0987654321fedcba09876543",
            "bridgedDate": "2023-11-15T14:30:00Z"
          }
        ]
      }
    }
  ]
}
```

### NFT Collections

Representing collection metadata for related NFTs:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "Collection",
  "name": "Cosmic Voyagers",
  "description": "A collection of 1,000 unique spacecraft designs",
  "creator": {
    "@type": "Person",
    "name": "Digital Artisan",
    "url": "https://artist.example.com"
  },
  "image": "https://ipfs.io/ipfs/QmCOLLECTION...",
  "url": "https://cosmicvoyagers.io",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "blockchain",
      "name": "Collection Details",
      "value": {
        "network": "ethereum",
        "contract": "0x1234567890abcdef1234567890abcdef12345678",
        "standard": "ERC-721",
        "size": 1000,
        "mintDate": "2023-10-01T00:00:00Z"
      }
    }
  ]
}
```

## Extended NFT Properties

### On-Chain History

Track provenance and transaction history:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Cosmic Voyager #42",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "provenance",
      "name": "Provenance",
      "value": {
        "mintDate": "2023-10-01T12:34:56Z",
        "mintTransaction": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        "originalOwner": "0x0987654321fedcba0987654321fedcba09876543",
        "transfers": [
          {
            "date": "2023-11-15T08:21:43Z",
            "transaction": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "from": "0x0987654321fedcba0987654321fedcba09876543",
            "to": "0xfedcba0987654321fedcba0987654321fedcba09"
          }
        ]
      }
    }
  ]
}
```

### Utility & Access Rights

Define what ownership of the NFT enables:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Cosmic Voyager #42",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "utility",
      "name": "Utility & Rights",
      "value": {
        "access": {
          "platforms": ["world-a", "world-b"],
          "events": ["annual-gala", "creator-meetups"],
          "services": ["premium-support", "early-access"]
        },
        "restrictions": {
          "commercial": "limited",
          "transfer": "unrestricted",
          "derivativeWorks": "allowed"
        },
        "expiration": "none"
      }
    }
  ]
}
```

### Royalty Information

Specify creator royalties:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Cosmic Voyager #42",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "royalties",
      "name": "Royalty Information",
      "value": {
        "standard": "EIP-2981",
        "percentage": 5.0,
        "recipients": [
          {
            "address": "0x0987654321fedcba0987654321fedcba09876543",
            "share": 80
          },
          {
            "address": "0xfedcba0987654321fedcba0987654321fedcba09",
            "share": 20
          }
        ]
      }
    }
  ]
}
```

## Implementation Best Practices

### Metadata Security
- Store immutable metadata using content-addressed systems
- Include cryptographic signatures for authenticity verification
- Consider using both on-chain and off-chain metadata with consistent references
- Implement metadata update mechanisms if needed

### Interoperability
- Support multiple metadata standards (e.g., ERC-721 Metadata, OpenSea)
- Include backward compatibility with existing systems
- Document any extensions or custom fields
- Provide clear mapping between standards

### Governance & Updates
- Document who can modify metadata and under what conditions
- Specify update validation processes
- Consider decentralized governance for collection-wide changes
- Keep complete version history for transparency

## Related Concepts

- [Types of Assets](../concepts/types-of-assets.md): Schema.org types for different asset types
- [Integration Profiles](../integration-profiles/overview.md): Predefined asset profiles
- [NFT Concepts](./nft/concepts.md): Core concepts for NFT implementation
- [NFT Examples](./nft/examples.md): Reference implementations and patterns

## Related Namespaces

- [Schema.org](../standards/schema-org.md): Core vocabulary for NFT metadata
- [Trust & Provenance](../standards/overview.md): Authentication and verification for NFTs
- [3D Standards](../standards/overview.md): Implementation patterns for 3D NFT assets
