---
sidebar_position: 5
---

# Trust & Provenance Namespaces

This page covers how to integrate trust and provenance standards into your metadata through namespaces.

## Supported Trust & Provenance Standards

### C2PA

[C2PA](https://c2pa.org/) (Coalition for Content Provenance and Authenticity) is a standard for content authentication and provenance tracking. It provides a framework for verifying the origin and edit history of digital content.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/statements/"
  }
}
```

#### Linking Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "3DModel",
  "name": "Authenticated Model",
  "contentUrl": "https://example.com/verified-model.glb",
  "encodingFormat": "model/gltf-binary",
  "contentAuthenticityVerification": "https://example.com/model-verification.c2pa"
}
```

#### Embedding Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "3DModel",
  "name": "Authenticated Model",
  "c2pa:claim": {
    "title": "Original Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Studios Inc.",
      "identifier": "did:example:creator123"
    },
    "signatures": [
      {
        "type": "ECDSASignature2019",
        "created": "2024-03-15T10:35:00Z",
        "verificationMethod": "did:example:creator123#key1",
        "signatureValue": "zBdL3v9...dks382D"
      }
    ]
  }
}
```

### Digital Signatures

Digital signatures provide cryptographic verification of content authenticity and integrity, ensuring that assets haven't been tampered with since creation.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "sec": "https://w3id.org/security#"
  }
}
```

#### Linking Example

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

#### Embedding Example

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

## Implementation Considerations

- **Complete Attribution**: Include creator and timestamp information
- **Verification Chain**: Maintain unbroken verification links
- **Key Security**: Follow best practices for signing key management
- **Transparency**: Make verification methods accessible

## Related Concepts

- [Metadata Fundamentals](../concepts/metadata-fundamentals.md)
- [Types of Assets](../concepts/types-of-assets.md)
- [Linking vs Embedding](../concepts/linking-vs-embedding.md) 