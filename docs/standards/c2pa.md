---
sidebar_position: 12
---

# C2PA Standard

This page covers how to integrate C2PA (Coalition for Content Provenance and Authenticity) into your metadata through namespaces.

## About C2PA

[C2PA](https://c2pa.org/) is an open technical standard that provides a way to cryptographically bind provenance metadata to content, enabling attribution, verification, and traceability for digital media. Developed by the Coalition for Content Provenance and Authenticity (which includes Adobe, Microsoft, Intel, and others), C2PA creates a secure chain of custody for digital content.

C2PA is particularly valuable in the metaverse context for establishing trust, verifying authenticity, and providing provenance information for digital assets. It helps combat misinformation and deepfakes while providing a framework for content creators to maintain attribution as their work is shared across different platforms and environments.

## Core C2PA Concepts

Key concepts in C2PA that are relevant to metadata integration:

- **Manifest**: Container for claims and signatures that travels with the content
- **Claims**: Assertions about the content, its creation, and edits
- **Assertions**: Data elements within claims providing specific information
- **Hard Bindings**: Cryptographically binding manifests to content
- **Soft Bindings**: Alternative binding approaches for live streams or other scenarios
- **Signatures**: Cryptographic signatures validating the source of the manifest
- **Trust Model**: Framework for determining which signatures to trust
- **Ingredients**: References to assets used in creating the content

## Implementing the C2PA Standard

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/v1/schemas/"
  }
}
```

### Linking Example

When referencing external C2PA manifests:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "DigitalDocument",
  "name": "Asset with Provenance",
  "contentUrl": "https://example.com/assets/verified-model.glb",
  "contentSize": "2.3 MB",
  "encodingFormat": "model/gltf-binary",
  "description": "3D model with C2PA provenance information",
  "isBasedOn": {
    "@type": "CreativeWork",
    "url": "https://example.com/assets/verified-model.c2pa",
    "encodingFormat": "application/c2pa+json"
  }
}
```

With summary information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Authenticated 3D Character",
  "contentUrl": "https://example.com/models/verified-character.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "creator": {
    "@type": "Person",
    "name": "Digital Artist",
    "url": "https://artist.example.com"
  },
  "dateCreated": "2023-04-18",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "c2paInformation",
      "name": "C2PA Provenance",
      "value": {
        "manifestUrl": "https://example.com/models/verified-character.c2pa",
        "claimGenerators": ["Model Creation Suite 5.2"],
        "signatureStatus": "valid",
        "signers": ["Digital Artist (verified)", "Studio Certificate"],
        "productionTools": ["Model Creation Suite 5.2", "Texture Designer Pro 2023"],
        "editHistory": 3,
        "verificationService": "https://verify.example.com/check?manifest=hash"
      }
    }
  ]
}
```

### Embedding Example

When embedding C2PA metadata directly:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/v1/schemas/"
  },
  "@type": "3DModel",
  "name": "Authenticated 3D Character",
  "contentUrl": "https://example.com/models/verified-character.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Person",
    "name": "Digital Artist",
    "url": "https://artist.example.com"
  },
  "c2pa:manifest": {
    "version": "1.0",
    "claim_generator": "Model Creation Suite 5.2",
    "signature_info": {
      "issuer": "CN=Content Verification Certificate, O=Artist Studio Inc.",
      "certificate_thumbprint": "d0d78d2e9d6145a635bc9f837de1112e4774504f",
      "validation_status": "valid"
    },
    "claims": [
      {
        "claim_id": "c2pa.creation",
        "timestamp": "2023-04-18T14:32:25Z",
        "assertions": [
          {
            "label": "c2pa.creator",
            "data": {
              "name": "Digital Artist",
              "identifier": "https://artist.example.com"
            }
          },
          {
            "label": "c2pa.actions",
            "data": [
              {
                "action": "created",
                "parameters": {
                  "software": {
                    "name": "Model Creation Suite",
                    "version": "5.2"
                  }
                }
              }
            ]
          }
        ]
      }
    ],
    "ingredients": [
      {
        "title": "Base Mesh",
        "format": "model/gltf-binary",
        "thumbnail": "https://example.com/thumbnails/base-mesh.jpg",
        "document_id": "xmp:did:8f868d4e-78b3-42b1-b9a4-1a8d45461762",
        "claim_status": "valid"
      },
      {
        "title": "Skin Texture",
        "format": "image/jpeg",
        "thumbnail": "https://example.com/thumbnails/skin-texture.jpg",
        "document_id": "xmp:did:a2c6f2cd-9bcd-4c84-a5f7-db887457361d",
        "claim_status": "valid"
      }
    ]
  }
}
```

## Common Use Cases

C2PA is used in a variety of trust and provenance scenarios:

- Digital content authentication
- NFT provenance tracking
- Verifiable digital asset creation history
- Content attribution and rights management
- Deepfake detection and misinformation prevention
- Creative work citation and attribution
- Audit trails for regulated industries
- Professional certification of digital twins
- Proof of data integrity for scientific/medical models
- Authentication for AR/VR content

## Implementation Examples

### Basic Example

A simple C2PA reference:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Verified Architectural Model",
  "description": "Architecturally accurate model with verified provenance",
  "contentUrl": "https://example.com/models/building.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isBasedOn": {
    "@type": "CreativeWork",
    "url": "https://example.com/models/building.c2pa",
    "encodingFormat": "application/c2pa+json"
  }
}
```

### Complete Example

For a complete asset with detailed C2PA metadata:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/v1/schemas/"
  },
  "@type": "3DModel",
  "name": "Official Brand Avatar",
  "description": "Verified and authenticated brand mascot for use in official communications",
  "contentUrl": "https://brand.example.com/assets/mascot.glb",
  "encodingFormat": "model/gltf-binary",
  "license": "https://brand.example.com/license/official-assets",
  "creator": {
    "@type": "Organization",
    "name": "Brand Creative Department",
    "url": "https://brand.example.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Example Brand Inc.",
    "url": "https://example.com"
  },
  "dateCreated": "2023-06-12",
  "dateModified": "2023-07-28",
  "version": "2.1",
  "c2pa:manifest": {
    "version": "1.0",
    "claim_generator": "Brand Asset Management System 3.4",
    "signature_info": {
      "issuer": "CN=Brand Content Certificate, O=Example Brand Inc.",
      "certificate_thumbprint": "e5a8f96c2b3a4d7e8c9b1a0d2e4f6a8c0b2d4e6f8",
      "validation_status": "valid",
      "time_of_signing": "2023-07-28T16:42:11Z"
    },
    "claims": [
      {
        "claim_id": "c2pa.creation",
        "timestamp": "2023-06-12T10:15:22Z",
        "assertions": [
          {
            "label": "c2pa.creator",
            "data": {
              "name": "Brand Creative Department",
              "identifier": "https://brand.example.com"
            }
          },
          {
            "label": "c2pa.actions",
            "data": [
              {
                "action": "created",
                "parameters": {
                  "software": {
                    "name": "Character Designer Pro",
                    "version": "8.5.2"
                  }
                }
              }
            ]
          },
          {
            "label": "c2pa.metadata",
            "data": {
              "title": "Official Brand Mascot - Initial Creation",
              "project_id": "BRAND-M-2023-062",
              "asset_type": "3D Character Model",
              "approval_status": "approved",
              "approval_date": "2023-06-25T14:30:00Z",
              "approval_authority": "Brand Director"
            }
          }
        ]
      },
      {
        "claim_id": "c2pa.edit",
        "timestamp": "2023-07-28T15:20:45Z",
        "assertions": [
          {
            "label": "c2pa.editor",
            "data": {
              "name": "Brand Creative Department",
              "identifier": "https://brand.example.com"
            }
          },
          {
            "label": "c2pa.actions",
            "data": [
              {
                "action": "modified",
                "parameters": {
                  "software": {
                    "name": "Character Designer Pro",
                    "version": "8.5.4"
                  },
                  "changes": [
                    "Updated animation rig for improved performance",
                    "Optimized geometry for mobile platforms",
                    "Added alternative color scheme"
                  ]
                }
              }
            ]
          },
          {
            "label": "c2pa.metadata",
            "data": {
              "title": "Official Brand Mascot - Mobile Optimization",
              "version": "2.1",
              "change_request": "CR-2023-142",
              "approval_status": "approved",
              "approval_date": "2023-07-28T16:30:00Z",
              "approval_authority": "Brand Director"
            }
          }
        ]
      }
    ],
    "ingredients": [
      {
        "title": "Character Concept Art",
        "format": "image/jpeg",
        "thumbnail": "https://brand.example.com/thumbnails/mascot-concept.jpg",
        "document_id": "xmp:did:f5c7d2a1-3b6c-42e5-9d8f-1a2b3c4d5e6f",
        "claim_status": "valid"
      },
      {
        "title": "Base Mesh Template",
        "format": "model/gltf-binary",
        "document_id": "xmp:did:9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
        "claim_status": "valid",
        "relationship": "baseTemplate"
      },
      {
        "title": "Brand Color Palette",
        "format": "application/json",
        "document_id": "xmp:did:3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
        "claim_status": "valid",
        "relationship": "colorReference"
      }
    ],
    "rights": {
      "license": "https://brand.example.com/license/official-assets",
      "copyright": "© 2023 Example Brand Inc. All Rights Reserved.",
      "rights_owner": {
        "name": "Example Brand Inc.",
        "identifier": "https://example.com"
      },
      "usage_terms": [
        "Only for official brand communications",
        "Must not be modified without authorization",
        "Must maintain embedded attribution and provenance information"
      ]
    }
  },
  "c2pa:verificationInformation": {
    "verification_service": "https://verify.brand.example.com/check",
    "public_verification_url": "https://verify.brand.example.com/public?asset=mascot&version=2.1",
    "verification_qr": "https://verify.brand.example.com/qr/mascot-v2.1.png"
  }
}
```

### NFT Example

Example for NFT with C2PA provenance:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/v1/schemas/"
  },
  "@type": "3DModel",
  "name": "Genesis Artifact #042",
  "description": "Limited edition collectible with verified provenance and authenticity",
  "contentUrl": "https://nft.example.org/assets/genesis-042.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Person",
    "name": "Renowned Digital Artist",
    "url": "https://artist.example.com/renowned"
  },
  "dateCreated": "2023-03-15",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "blockchain",
    "name": "NFT Token ID",
    "value": "ethereum:0x2953399124f0cbb46d2cbacd8a89cf0599974963:42"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "nftMetadata",
      "name": "NFT Information",
      "value": {
        "blockchain": "Ethereum",
        "contractAddress": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
        "tokenId": "42",
        "tokenStandard": "ERC-1155",
        "mintDate": "2023-04-01T18:30:00Z",
        "edition": "4 of 10",
        "marketplaceUrl": "https://marketplace.example.com/collection/genesis/42"
      }
    }
  ],
  "c2pa:manifest": {
    "version": "1.0",
    "claim_generator": "Artist Studio - Creation Pipeline",
    "signature_info": {
      "issuer": "CN=Artist Verification Certificate, O=Renowned Digital Artist",
      "certificate_thumbprint": "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
      "validation_status": "valid"
    },
    "claims": [
      {
        "claim_id": "c2pa.creation",
        "timestamp": "2023-03-15T09:27:34Z",
        "assertions": [
          {
            "label": "c2pa.creator",
            "data": {
              "name": "Renowned Digital Artist",
              "identifier": "https://artist.example.com/renowned"
            }
          },
          {
            "label": "c2pa.actions",
            "data": [
              {
                "action": "created",
                "parameters": {
                  "software": {
                    "name": "Digital Sculpture Suite",
                    "version": "7.2.3"
                  },
                  "environment": "Custom artist workstation",
                  "duration": "42 hours total creation time"
                }
              }
            ]
          }
        ]
      },
      {
        "claim_id": "c2pa.nft_minting",
        "timestamp": "2023-04-01T18:30:00Z",
        "assertions": [
          {
            "label": "c2pa.minter",
            "data": {
              "name": "Renowned Digital Artist",
              "wallet": "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t"
            }
          },
          {
            "label": "c2pa.contract_info",
            "data": {
              "blockchain": "Ethereum",
              "contract_address": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
              "token_id": "42",
              "token_standard": "ERC-1155",
              "transaction_hash": "0xf1e2d3c4b5a6978695a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2",
              "edition": "4 of 10"
            }
          }
        ]
      }
    ],
    "ingredients": [
      {
        "title": "Original Concept Sketch",
        "format": "image/jpeg",
        "thumbnail": "https://nft.example.org/thumbnails/genesis-042-concept.jpg",
        "document_id": "xmp:did:a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        "claim_status": "valid"
      }
    ],
    "rights": {
      "license": "https://nft.example.org/licenses/genesis-collection",
      "copyright": "© 2023 Renowned Digital Artist",
      "rights_owner": {
        "name": "Renowned Digital Artist",
        "identifier": "https://artist.example.com/renowned"
      },
      "usage_terms": [
        "Non-commercial display rights granted to token holder",
        "Creator retains copyright and commercial rights",
        "Limited license to display in virtual galleries and personal spaces"
      ]
    }
  },
  "c2pa:verificationInformation": {
    "verification_service": "https://verify.nft.example.org/check",
    "on_chain_verification": "https://verify.nft.example.org/on-chain/0x2953399124f0cbb46d2cbacd8a89cf0599974963/42",
    "verification_qr": "https://verify.nft.example.org/qr/genesis-042.png"
  }
}
```

## JSON Schema Validation

For validating C2PA namespace references in MVMD, the following schema properties are defined:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "C2PA Namespace Schema",
  "type": "object",
  "properties": {
    "c2pa:manifest": {
      "type": "object",
      "description": "C2PA manifest containing claims and provenance information",
      "properties": {
        "version": { "type": "string" },
        "claim_generator": { "type": "string" },
        "signature_info": {
          "type": "object",
          "properties": {
            "issuer": { "type": "string" },
            "certificate_thumbprint": { "type": "string" },
            "validation_status": { 
              "type": "string",
              "enum": ["valid", "invalid", "unknown"]
            },
            "time_of_signing": { 
              "type": "string",
              "format": "date-time"
            }
          }
        },
        "claims": {
          "type": "array",
          "description": "Array of claim objects",
          "items": {
            "type": "object",
            "properties": {
              "claim_id": { "type": "string" },
              "timestamp": { 
                "type": "string",
                "format": "date-time"
              },
              "assertions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "label": { "type": "string" },
                    "data": { "type": "object" }
                  },
                  "required": ["label", "data"]
                }
              }
            },
            "required": ["claim_id", "timestamp"]
          }
        },
        "ingredients": {
          "type": "array",
          "description": "Source materials used in creating the content",
          "items": {
            "type": "object",
            "properties": {
              "title": { "type": "string" },
              "format": { "type": "string" },
              "thumbnail": { "type": "string" },
              "document_id": { "type": "string" },
              "claim_status": { 
                "type": "string",
                "enum": ["valid", "invalid", "unknown"]
              },
              "relationship": { "type": "string" }
            },
            "required": ["title", "document_id"]
          }
        },
        "rights": {
          "type": "object",
          "description": "Rights information for the content",
          "properties": {
            "license": { "type": "string" },
            "copyright": { "type": "string" },
            "rights_owner": { "type": "object" },
            "usage_terms": { 
              "type": "array",
              "items": { "type": "string" }
            }
          }
        }
      },
      "required": ["version", "claims"]
    },
    "c2pa:verificationInformation": {
      "type": "object",
      "description": "Information for verifying the C2PA manifest",
      "properties": {
        "verification_service": { 
          "type": "string",
          "format": "uri"
        },
        "public_verification_url": { 
          "type": "string",
          "format": "uri"
        },
        "verification_qr": { 
          "type": "string",
          "format": "uri"
        },
        "on_chain_verification": { 
          "type": "string",
          "format": "uri"
        }
      }
    }
  }
}
```

## JSON-LD Context

The C2PA namespace can be mapped to JSON-LD context for semantic interoperability:

```json
{
  "@context": {
    "c2pa": "https://c2pa.org/v1/schemas/",
    "c2pa:manifest": { "@id": "c2pa:manifest" },
    "c2pa:verificationInformation": { "@id": "c2pa:verificationInformation" }
  }
}
```

## Implementation Considerations

When implementing the C2PA namespace, keep these considerations in mind:

- **Verification Infrastructure**: Ensure availability of verification services to validate C2PA manifests
- **Key Management**: Implement secure key management for signing manifests
- **Embedding Strategy**: Determine whether the C2PA data will be embedded in the asset or referenced externally
- **Manifest Size**: Consider manifest size, especially for assets with complex provenance or many ingredients
- **User Experience**: Design user-friendly ways to display provenance information to end users
- **Cross-Platform Compatibility**: Ensure C2PA data remains intact when content moves between platforms
- **Privacy Considerations**: Balance provenance details with privacy requirements
- **Trust Chain**: Establish a clear trust chain for signature verification
- **Update Handling**: Define how provenance is managed when assets are updated or modified

## Related Documentation

- [Trust & Provenance Overview](../implementation/standards-implementation.md)
- [NFT Implementation](../implementation/nfts.md)
- [Royalty Integration Profile](../integration-profiles/royalty.md)
- [Digital Twin Integration Profile](../integration-profiles/digital-twin.md) 