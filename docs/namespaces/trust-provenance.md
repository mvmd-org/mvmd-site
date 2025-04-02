---
sidebar_position: 5
---

# Trust & Provenance Namespaces

This page covers how to integrate trust and provenance standards into your metadata through namespaces.

## Supported Trust & Provenance Standards

### C2PA

[C2PA](https://c2pa.org/) (Coalition for Content Provenance and Authenticity) is a technical standard for certifying source and history of media content. C2PA provides key capabilities for establishing trust and authenticity of digital assets.

#### Namespace Declaration

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/schema/"
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
  "name": "Verified 3D Asset",
  "contentUrl": "https://example.com/model.glb",
  "encoding": "model/gltf-binary",
  "contentAuthenticityCredential": "https://verify.example.com/model.glb.c2pa"
}
```

#### Embedding Example

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