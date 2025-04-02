---
sidebar_position: 5
---

# Trust & Provenance Namespaces

This page covers how to integrate trust and provenance standards into your metadata through namespaces.

## Supported Trust & Provenance Standards

## C2PA

### Overview and Use Cases

[C2PA](https://c2pa.org/) (Coalition for Content Provenance and Authenticity) is a technical standard for certifying source and history of media content. C2PA provides key capabilities for establishing trust and authenticity of digital assets.

Common use cases include:
- Provenance verification for digital assets
- Combating digital forgeries and misinformation
- Creator attribution and rights management
- Tracking edit history and modification chains
- Content authenticity verification for NFTs and digital collectibles

### Core Properties and Extensions

C2PA offers a comprehensive framework for content authenticity:

- **Core Components**: Claims, Assertions, Signatures
- **Key Structures**: 
  - Claim: The primary container for authenticity information
  - Assertions: Specific statements about the content
  - Ingredients: References to source assets used to create the content
  - Signature: Cryptographic proof of the claim's integrity

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/schema/"
  }
}
```

### External Reference Patterns

When linking to C2PA manifest files:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Verified 3D Asset",
  "contentUrl": "https://example.com/model.glb",
  "encoding": "model/gltf-binary",
  "contentAuthenticityCredential": "https://verify.example.com/model.glb.c2pa"
}
```

For referencing verification services:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Verified 3D Asset",
  "contentUrl": "https://example.com/model.glb",
  "encoding": "model/gltf-binary",
  "contentAuthenticityCredential": "https://verify.example.com/model.glb.c2pa",
  "verificationService": "https://verify.contentauthenticity.org/verify?url=https://example.com/model.glb"
}
```

### Embedding Patterns

When embedding C2PA claim data:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/schema/"
  },
  "@type": "3DModel",
  "name": "Verified 3D Asset",
  "c2pa:claim": {
    "assertionVersion": "1.0",
    "assertionType": "Digital Provenance",
    "claimGenerator": "CreationSuite 1.0",
    "digitalSignature": {
      "signatureType": "ed25519",
      "signature": "...",
      "certificate": "..."
    }
  }
}
```

### Implementation Examples

Complete 3D asset with creation history and provenance:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/schema/"
  },
  "@type": "3DModel",
  "name": "Authenticated Character Model",
  "contentUrl": "https://example.com/character.glb",
  "encodingFormat": "model/gltf-binary",
  "c2pa:claim": {
    "assertionVersion": "1.0",
    "claimGenerator": "3D Studio Pro 2023",
    "timestamp": "2023-06-12T09:23:15Z",
    "digitalSignature": {
      "signatureType": "ed25519",
      "signature": "RGFtbWl0IEJvYiwgSSdtIGEgZG9jdG9yLCBub3QgYSBjcnlwdG9ncmFwaGVyIQ==",
      "certificate": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JS...truncated..."
    },
    "assertions": [
      {
        "label": "c2pa.creator",
        "data": {
          "name": "Jane Designer",
          "identifier": "did:example:jane123"
        }
      },
      {
        "label": "c2pa.actions",
        "data": [
          {
            "action": "created",
            "softwareAgent": "Blender 3.5",
            "timestamp": "2023-06-10T15:30:45Z"
          },
          {
            "action": "modified",
            "softwareAgent": "Substance Painter 2023",
            "timestamp": "2023-06-11T08:22:18Z"
          },
          {
            "action": "exported",
            "softwareAgent": "3D Studio Pro 2023",
            "timestamp": "2023-06-12T09:20:05Z"
          }
        ]
      }
    ],
    "ingredients": [
      {
        "title": "Base Model",
        "format": "model/gltf-binary",
        "hash": "sha256:a1b2c3d4e5f6...",
        "relationship": "parentOf"
      },
      {
        "title": "Texture Maps",
        "format": "image/png",
        "hash": "sha256:f6e5d4c3b2a1...",
        "relationship": "componentOf"
      }
    ]
  },
  "c2pa:verificationStatus": {
    "verified": true,
    "verifiedBy": "Content Authenticity Initiative Verifier",
    "verificationTimestamp": "2023-06-12T10:15:30Z"
  }
}
```

### Best Practices

- Ensure complete signature chains for full provenance history
- Include all relevant editing and creation steps in the assertions
- Reference source files as ingredients when applicable
- Provide accessible verification services for end users
- Use standardized action labels for consistency
- Keep manifest files accessible alongside content

## Decentralized Identifiers (DIDs)

### Overview and Use Cases

[Decentralized Identifiers (DIDs)](https://www.w3.org/TR/did-core/) are a type of identifier that enables verifiable, decentralized digital identity. DIDs are crucial for establishing trusted identities in metadata contexts.

Common use cases include:
- Creator attribution and identity verification
- Organizational attribution for content
- Cross-platform identity verification
- Content rights management
- Verifiable credential issuance and verification

### Core Properties and Extensions

DIDs provide a foundation for decentralized identity:

- **Core Components**: DID method, DID document, verification methods
- **Key Structures**:
  - DID URI: Format `did:method:specific-id`
  - DID Document: JSON document containing verification keys and services
  - Verification Methods: Public keys used to verify signatures
  - Services: Endpoints associated with the DID

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "did": "https://www.w3.org/ns/did#"
  }
}
```

### External Reference Patterns

When referencing a DID for creator attribution:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "identifier": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
  }
}
```

### Embedding Patterns

When embedding DID information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "did": "https://www.w3.org/ns/did#"
  },
  "@type": "3DModel",
  "name": "Character Model",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "did:id": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
    "did:controller": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
    "did:verificationMethod": [
      {
        "id": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK#keys-1",
        "type": "Ed25519VerificationKey2020",
        "publicKeyMultibase": "z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
      }
    ]
  }
}
```

### Implementation Examples

Complete asset with creator and organization DIDs:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "did": "https://www.w3.org/ns/did#",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Official Character Model",
  "description": "Verified character model from GameStudio Inc.",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "identifier": "did:ion:EiA-GtHEaP9WipPyQCiJ3aEKcAhxpm5JDkHqc7R1C3xW3A",
    "url": "https://janedoe.portfolio.io",
    "did:document": {
      "id": "did:ion:EiA-GtHEaP9WipPyQCiJ3aEKcAhxpm5JDkHqc7R1C3xW3A",
      "verificationMethod": [
        {
          "id": "#key-1",
          "type": "EcdsaSecp256k1VerificationKey2019",
          "controller": "did:ion:EiA-GtHEaP9WipPyQCiJ3aEKcAhxpm5JDkHqc7R1C3xW3A",
          "publicKeyJwk": {
            "kty": "EC",
            "crv": "secp256k1",
            "x": "dWg16sHUq5_8Z_Y0-XSEJ7dOhCbVH_fSsTjMG76INCU",
            "y": "QJU4d0avvTzaRobIid8YWnIKtNO9CUMrtyVL0YnKlnA"
          }
        }
      ],
      "service": [
        {
          "id": "#portfolio",
          "type": "LinkedDomains",
          "serviceEndpoint": "https://janedoe.portfolio.io"
        }
      ]
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "GameStudio Inc.",
    "identifier": "did:web:gamestudio.io",
    "url": "https://gamestudio.io",
    "did:document": {
      "id": "did:web:gamestudio.io",
      "verificationMethod": [
        {
          "id": "#key-1",
          "type": "JsonWebKey2020",
          "controller": "did:web:gamestudio.io",
          "publicKeyJwk": {
            "kty": "RSA",
            "e": "AQAB",
            "n": "vzBMDnVUd9U4yPuoMYP..."
          }
        }
      ],
      "service": [
        {
          "id": "#website",
          "type": "LinkedDomains",
          "serviceEndpoint": "https://gamestudio.io"
        },
        {
          "id": "#verification",
          "type": "VerificationService",
          "serviceEndpoint": "https://verify.gamestudio.io"
        }
      ]
    }
  },
  "mvmd:authenticity": {
    "verificationMethod": "did",
    "signedBy": "did:web:gamestudio.io#key-1",
    "timestamp": "2023-06-15T14:30:22Z"
  }
}
```

### Best Practices

- Use established DID methods appropriate for your use case (did:web for organizations, did:key for simple cases)
- Include verification methods to enable signature verification
- Reference relevant services for additional verification
- Consider the governance and longevity of the DID method chosen
- Provide sufficient context for verification (controller information, valid references)

## Digital Signatures

### Overview and Use Cases

Digital signatures provide cryptographic verification of content authenticity and integrity, ensuring that assets haven't been tampered with since creation.

Common use cases include:
- Content integrity verification
- Creator authentication
- Non-repudiation for contracts and agreements
- Version control verification
- Secure metadata attestation

### Core Properties and Extensions

Digital signatures offer cryptographic guarantees:

- **Core Components**: Signature algorithm, signature value, public key or certificate
- **Common Standards**:
  - RSA signatures (RSASSA-PKCS1-v1_5, RSASSA-PSS)
  - ECDSA signatures (secp256k1, P-256)
  - EdDSA signatures (Ed25519)
  - JSON Web Signatures (JWS)

### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "sec": "https://w3id.org/security#"
  }
}
```

### External Reference Patterns

When linking to signature information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "DigitalDocument",
  "name": "Signed Document",
  "contentUrl": "https://example.com/signed.pdf",
  "encodingFormat": "application/pdf",
  "contentDigest": "sha256-892hs8dh82hsd9h29sd2329s9h"
}
```

### Embedding Patterns

When embedding signature information:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "sec": "https://w3id.org/security#"
  },
  "@type": "DigitalDocument",
  "name": "Signed Document",
  "sec:signature": {
    "type": "RsaSignature2018",
    "created": "2024-03-15T14:23:10Z",
    "creator": "did:example:signer123#key1",
    "signatureValue": "eyJhbGciOiJSUzI1..."
  }
}
```

### Implementation Examples

Complete document with linked data signature and verification:

```json
{
  "@context": [
    "https://schema.org/",
    "https://w3id.org/security/v2"
  ],
  "@type": "DigitalDocument",
  "name": "Metaverse Asset License Agreement",
  "description": "License terms for the commercial use of the included 3D assets",
  "dateCreated": "2023-04-22T10:15:30Z",
  "author": {
    "@type": "Person",
    "name": "Legal Department",
    "identifier": "did:example:corp:legal123"
  },
  "contentUrl": "https://example.com/license-v2.pdf",
  "encodingFormat": "application/pdf",
  "contentSize": "245KB",
  "sha256": "7b5c9dc689461e6512d0d35a225d46be95ef8e463ddcd0b4f7c7d9bc0e1d531a",
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2023-04-22T10:30:15Z",
    "verificationMethod": "did:example:corp:legal123#key-1",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..YtqjEYnFENT7fNW-COD0HAACxeuQxPKAmp4nIl8jYJ9Yf2foSTAuIdhBuZMVmtSPkxfzjTSLg-cNmIbYQ5Bzk3c",
    "proofValue": "z58DAdFfa9SkqZMVPxAQpic6gPFzVZ4eHgtoAX4Rh2mXTX7zAHd7wZdZYisT9j5kNzfXsWs1BY5xNJJnr3xRuG4"
  },
  "additionalVerification": {
    "timestampService": "https://timestamp.digicert.com",
    "timestampToken": "MIIGBzCCBO...[truncated]",
    "notarization": {
      "notaryName": "Digital Notary Service",
      "notarizationDate": "2023-04-22T12:00:05Z",
      "notarySignature": "MIIEvg...[truncated]",
      "notaryPublicKey": "https://notary.example.com/keys/public123.pem"
    }
  }
}
```

### Best Practices

- Use appropriate signature algorithms for your security requirements
- Include timestamp information to prevent replay attacks
- Reference the signing key or certificate for verification
- Consider signature expiration and key rotation policies
- Include content digests (hash values) for integrity verification
- Use established signature formats like JWS for interoperability

## Verifiable Credentials

### Overview and Use Cases

[Verifiable Credentials (VCs)](https://www.w3.org/TR/vc-data-model/) are a W3C standard for expressing credentials on the web in a way that is cryptographically secure, privacy respecting, and machine-verifiable.

Common use cases include:
- Content creator verification
- Rights management for digital assets
- Ownership attestation for virtual goods
- Certification of asset quality or compliance
- Access control for premium content

### Core Properties and Extensions

Verifiable Credentials provide a framework for attestations:

- **Core Components**: Issuer, Subject, Claims, Proof
- **Key Structures**:
  - Credential: The container for claims about a subject
  - Presentation: A derived form of credentials to be shared
  - Proof: Cryptographic proof of the credential's authenticity
  - Schema: Definition of the credential structure

### Namespace Declaration

```json
{
  "@context": [
    "https://schema.org/",
    "https://www.w3.org/2018/credentials/v1"
  ],
  "mvmd": "https://mvmd.org/v1/",
  "vc": "https://www.w3.org/2018/credentials#"
}
```

### External Reference Patterns

When linking to a verifiable credential:

```json
{
  "@context": "https://schema.org/",
  "@type": "3DModel",
  "name": "Certified Model",
  "contentUrl": "https://example.com/model.glb",
  "encoding": "model/gltf-binary",
  "certification": "https://cert.example.org/credentials/123"
}
```

### Embedding Patterns

When embedding verifiable credential information:

```json
{
  "@context": [
    "https://schema.org/",
    "https://www.w3.org/2018/credentials/v1"
  ],
  "@type": "3DModel",
  "name": "Certified Model",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://example.org/metaverse/credentials/v1"
    ],
    "id": "https://cert.example.org/credentials/123",
    "type": ["VerifiableCredential", "QualityAssuranceCredential"],
    "issuer": "did:example:certifier345",
    "issuanceDate": "2023-05-10T12:00:00Z",
    "credentialSubject": {
      "id": "https://example.com/model.glb",
      "qualityLevel": "Premium",
      "verifiedDate": "2023-05-09T15:30:00Z"
    },
    "proof": {
      "type": "Ed25519Signature2020",
      "created": "2023-05-10T12:00:00Z",
      "verificationMethod": "did:example:certifier345#key1",
      "proofPurpose": "assertionMethod",
      "proofValue": "zQeVbY4oey5q2M3XKaxup3tmzN..."
    }
  }
}
```

### Implementation Examples

Complete asset with multiple verifiable credentials:

```json
{
  "@context": [
    "https://schema.org/",
    "https://www.w3.org/2018/credentials/v1"
  ],
  "@type": "3DModel",
  "name": "Professional Architecture Model",
  "description": "Verified and certified architectural model for commercial use",
  "contentUrl": "https://example.com/building-model.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Person",
    "name": "Architecture Studio X",
    "identifier": "did:web:archstudiox.com"
  },
  "verifiableCredentials": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://credentials.example.org/architecture/v1"
      ],
      "id": "https://cert.example.org/credentials/arch-123",
      "type": ["VerifiableCredential", "ArchitecturalAccuracyCredential"],
      "issuer": {
        "id": "did:web:architecture-institute.org",
        "name": "Architecture Institute"
      },
      "issuanceDate": "2023-05-15T09:20:30Z",
      "expirationDate": "2024-05-15T09:20:30Z",
      "credentialSubject": {
        "id": "https://example.com/building-model.glb",
        "accuracyLevel": "Professional",
        "scaleAccuracy": "High",
        "measurementStandard": "ISO 19650",
        "verificationMethod": "Expert Review Panel"
      },
      "proof": {
        "type": "Ed25519Signature2020",
        "created": "2023-05-15T09:20:30Z",
        "verificationMethod": "did:web:architecture-institute.org#key-1",
        "proofPurpose": "assertionMethod",
        "proofValue": "z3JUEDMrXYrStuad7QpQZwAoUhPkCvYqWAJN..."
      }
    },
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://credentials.example.org/rendering/v1"
      ],
      "id": "https://cert.example.org/credentials/render-456",
      "type": ["VerifiableCredential", "RenderingQualityCredential"],
      "issuer": {
        "id": "did:web:3d-quality-assurance.org",
        "name": "3D Quality Assurance Consortium"
      },
      "issuanceDate": "2023-05-16T14:15:22Z",
      "credentialSubject": {
        "id": "https://example.com/building-model.glb",
        "renderingQuality": "AAA",
        "textureResolution": "4K",
        "optimizationLevel": "Professional",
        "performanceRating": "Excellent"
      },
      "proof": {
        "type": "JsonWebSignature2020",
        "created": "2023-05-16T14:15:22Z",
        "verificationMethod": "did:web:3d-quality-assurance.org#key-2",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..."
      }
    }
  ],
  "verificationService": "https://verify.example.org/check?asset=https://example.com/building-model.glb"
}
```

### Best Practices

- Use established credential types for interoperability
- Include expiration dates for credentials that may become outdated
- Reference the credential schema for validation
- Ensure issuer information is complete and verifiable
- Include mechanisms for credential status checking (revocation)
- Consider selective disclosure for privacy-sensitive credentials
- Provide a verification service for credential validation

## Implementation Considerations

- **Complete Attribution**: Include creator and timestamp information
- **Verification Chain**: Maintain unbroken verification links
- **Key Security**: Follow best practices for signing key management
- **Transparency**: Make verification methods accessible
- **Standard Selection**: Choose appropriate standards based on use case requirements
- **Credential Expiration**: Consider the lifecycle of trust claims and credentials
- **Multiple Standards**: Implement layered trust mechanisms for comprehensive security

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md)

## Practical Implementation Guide

### Step 1: Basic Trust Setup

1. **Choose Authentication Method**:
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/schema/",
    "did": "https://www.w3.org/ns/did#"
  },
  "@type": "3DModel",
  "name": "Trusted Asset",
  "description": "A verified and authenticated 3D model"
}
```

2. **Add Creator Identity**:
```json
{
  // ... basic properties ...
  "creator": {
    "@type": "Person",
    "name": "Jane Creator",
    "identifier": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
    "url": "https://creator.example.com"
  }
}
```

### Step 2: Content Authentication

1. **C2PA Implementation**:
```json
{
  // ... previous properties ...
  "c2pa:claim": {
    "assertionVersion": "1.0",
    "claimGenerator": "Creation Tool 1.0",
    "timestamp": "2024-04-02T10:15:30Z",
    "digitalSignature": {
      "signatureType": "ed25519",
      "signature": "base64-encoded-signature-data",
      "certificate": "base64-encoded-certificate-data"
    },
    "assertions": [
      {
        "label": "c2pa.creator",
        "data": {
          "name": "Jane Creator",
          "identifier": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
        }
      }
    ]
  }
}
```

2. **Digital Signature Implementation**:
```json
{
  // ... previous properties ...
  "sec:signature": {
    "type": "Ed25519Signature2020",
    "created": "2024-04-02T10:15:30Z",
    "verificationMethod": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK#key1",
    "proofValue": "z58DAdFfa9SkqZMVPxAQpic6gPFzVZ4eHgtoAX4Rh2mXTX7..."
  }
}
```

### Step 3: Provenance Tracking

1. **Creation History**:
```json
{
  // ... previous properties ...
  "c2pa:history": {
    "actions": [
      {
        "action": "created",
        "timestamp": "2024-04-01T14:30:00Z",
        "softwareAgent": "3D Creator Pro 2024",
        "actor": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
      },
      {
        "action": "modified",
        "timestamp": "2024-04-02T09:45:00Z",
        "softwareAgent": "Texture Studio 2024",
        "actor": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
      }
    ]
  }
}
```

2. **Source Attribution**:
```json
{
  // ... previous properties ...
  "c2pa:ingredients": [
    {
      "title": "Base Mesh",
      "format": "model/gltf-binary",
      "hash": "sha256:a1b2c3d4e5f6...",
      "creator": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
      "license": "https://creativecommons.org/licenses/by/4.0/"
    }
  ]
}
```

### Step 4: Verifiable Credentials

1. **Basic Credential**:
```json
{
  // ... previous properties ...
  "verifiableCredential": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://example.org/metaverse/credentials/v1"
    ],
    "type": ["VerifiableCredential", "AssetQualityCredential"],
    "issuer": "did:web:certifier.example.com",
    "issuanceDate": "2024-04-02T11:00:00Z",
    "credentialSubject": {
      "id": "https://example.com/model.glb",
      "qualityLevel": "Professional",
      "verifiedDate": "2024-04-02T10:45:00Z"
    }
  }
}
```

2. **Multiple Credentials**:
```json
{
  // ... previous properties ...
  "verifiableCredentials": [
    {
      "type": ["VerifiableCredential", "AssetQualityCredential"],
      "issuer": "did:web:certifier.example.com",
      "credentialSubject": {
        "qualityLevel": "Professional"
      }
    },
    {
      "type": ["VerifiableCredential", "CreatorCredential"],
      "issuer": "did:web:creators-guild.example.com",
      "credentialSubject": {
        "membershipLevel": "Verified Creator"
      }
    }
  ]
}
```

### Step 5: Complete Trust Implementation

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/schema/",
    "did": "https://www.w3.org/ns/did#"
  },
  "@type": "3DModel",
  "name": "Fully Verified Asset",
  "contentUrl": "https://example.com/model.glb",
  "encodingFormat": "model/gltf-binary",
  "creator": {
    "@type": "Person",
    "name": "Jane Creator",
    "identifier": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
  },
  "c2pa:claim": {
    "assertionVersion": "1.0",
    "timestamp": "2024-04-02T11:30:00Z",
    "assertions": [
      {
        "label": "c2pa.creator",
        "data": {
          "name": "Jane Creator",
          "identifier": "did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
        }
      }
    ],
    "digitalSignature": {
      "signatureType": "ed25519",
      "signature": "base64-encoded-signature",
      "certificate": "base64-encoded-certificate"
    }
  },
  "verifiableCredential": {
    "type": ["VerifiableCredential", "AssetQualityCredential"],
    "issuer": "did:web:certifier.example.com",
    "credentialSubject": {
      "id": "https://example.com/model.glb",
      "qualityLevel": "Professional"
    },
    "proof": {
      "type": "Ed25519Signature2020",
      "created": "2024-04-02T11:30:00Z",
      "verificationMethod": "did:web:certifier.example.com#key1",
      "proofValue": "z58DAdFfa9SkqZMVPxAQpic6gPFzVZ4..."
    }
  }
}
```

### Best Practices for Implementation

1. **Identity Management**:
   - Use DIDs for persistent identifiers
   - Include verification methods
   - Link to public profiles
   - Maintain key security

2. **Content Authentication**:
   - Sign all important content
   - Include timestamps
   - Maintain signature chains
   - Verify before trusting

3. **Provenance Tracking**:
   - Document all modifications
   - Include software tools used
   - Reference source materials
   - Maintain audit trails

4. **Credential Management**:
   - Use appropriate credential types
   - Include expiration dates
   - Verify issuer authority
   - Keep proofs accessible

### Troubleshooting Common Issues

1. **Signature Verification**:
   - Check key validity
   - Verify signature format
   - Validate certificate chain
   - Check timestamp validity

2. **DID Resolution**:
   - Ensure DID is resolvable
   - Check method support
   - Verify key ownership
   - Handle method rotation

3. **Credential Validation**:
   - Check credential status
   - Verify issuer identity
   - Validate proof chain
   - Check revocation status

4. **Integration Problems**:
   - Verify namespace usage
   - Check context declarations
   - Validate JSON-LD syntax
   - Test verification flow 