---
sidebar_position: 1
---

# C2PA Standard

The Coalition for Content Provenance and Authenticity (C2PA) standard provides a framework for verifying the authenticity and origin of Metaverse assets. This documentation covers how to implement C2PA claims and provenance tracking in your metadata.

## Core Properties

### Basic Claim Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "3DModel",
  "name": "Verified Asset",
  
  "c2pa:claim": {
    "title": "Asset Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Studios Inc.",
      "identifier": "did:example:creator123"
    },
    "signature": {
      "type": "Ed25519Signature2020",
      "created": "2024-03-15T10:30:00Z",
      "verificationMethod": "did:example:creator123#key1",
      "proofPurpose": "assertionMethod"
    }
  }
}
```

### Chain of Custody

```json
{
  "c2pa:provenance": {
    "history": [
      {
        "action": "created",
        "timestamp": "2024-03-15T10:30:00Z",
        "actor": {
          "name": "Virtual Studios Inc.",
          "identifier": "did:example:creator123"
        }
      },
      {
        "action": "modified",
        "timestamp": "2024-03-15T14:45:00Z",
        "actor": {
          "name": "Animation Team",
          "identifier": "did:example:team456"
        },
        "description": "Added character animations"
      }
    ]
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "3DModel",
  "name": "Verified Character Model",
  "description": "Authenticated character model with full provenance tracking",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "character-2024-001"
  },
  
  "creator": {
    "@type": "Organization",
    "name": "Virtual Studios Inc.",
    "url": "https://example.com/virtual-studios"
  },
  
  "c2pa:claim": {
    "title": "Character Asset Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Studios Inc.",
      "identifier": "did:example:creator123",
      "roles": ["creator", "publisher"]
    },
    "signature": {
      "type": "Ed25519Signature2020",
      "created": "2024-03-15T10:30:00Z",
      "verificationMethod": "did:example:creator123#key1",
      "proofPurpose": "assertionMethod"
    },
    "softwareAgent": {
      "name": "MetaverseBuilder",
      "version": "2.1.0"
    }
  },
  
  "c2pa:provenance": {
    "history": [
      {
        "action": "created",
        "timestamp": "2024-03-15T10:30:00Z",
        "actor": {
          "name": "Virtual Studios Inc.",
          "identifier": "did:example:creator123"
        },
        "softwareAgent": "MetaverseBuilder 2.1.0"
      },
      {
        "action": "modified",
        "timestamp": "2024-03-15T14:45:00Z",
        "actor": {
          "name": "Animation Team",
          "identifier": "did:example:team456"
        },
        "description": "Added character animations",
        "softwareAgent": "AnimationPro 3.0"
      },
      {
        "action": "reviewed",
        "timestamp": "2024-03-15T16:20:00Z",
        "actor": {
          "name": "Quality Assurance",
          "identifier": "did:example:qa789"
        },
        "description": "Verified animations and asset quality"
      }
    ],
    "derivedFrom": {
      "identifier": "character-base-2024-001",
      "relation": "template",
      "source": "https://example.com/base-models/humanoid-v1"
    }
  },
  
  "c2pa:integrity": {
    "hashAlgorithm": "sha256",
    "hashValue": "7d5a99f5f95199b986b87537f97d12255d6b44124840406f974d2c1c9a",
    "size": 2457600
  },
  
  "c2pa:rights": {
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "copyright": "© 2024 Virtual Studios Inc.",
    "usageTerms": "Attribution required. Commercial use allowed."
  }
}
```

## Property Guidelines

### Claim Properties
- Use clear claim titles
- Include timestamp information
- Specify producer details
- Add proper signatures
- Document software agents

### Provenance Properties
- Track all modifications
- Include actor information
- Describe changes clearly
- Maintain chronological order
- Reference source assets

### Rights Properties
- Specify clear licenses
- Include copyright information
- Define usage terms
- Document restrictions
- Include attribution requirements

## Best Practices

1. **Claim Structure**
    - Use descriptive claim titles
    - Include all relevant parties
    - Document software tools
    - Add clear timestamps

2. **Provenance Tracking**
    - Record all modifications
    - Include actor details
    - Document tools used
    - Maintain clear history

3. **Integrity Management**
    - Use strong hash algorithms
    - Include file sizes
    - Verify asset integrity
    - Track all versions

4. **Rights Management**
    - Clear license terms
    - Proper attribution
    - Usage restrictions
    - Distribution rights

## Validation Rules

### Required Properties
- Valid C2PA claim
- Producer information
- Creation timestamp
- Digital signature
- Integrity data

### Optional Properties
- Modification history
- Software agents
- Derived content
- Rights information

## Integration Examples

### With glTF Assets
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/statements/",
    "gltf": "https://www.khronos.org/gltf/"
  },
  "@type": "3DModel",
  "name": "Verified Model",
  
  "gltf:asset": {
    "version": "2.0",
    "generator": "MetaverseBuilder 2.1"
  },
  
  "c2pa:claim": {
    "title": "Asset Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Studios Inc.",
      "identifier": "did:example:creator123"
    }
  }
}
```

### With Environment Assets
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "c2pa": "https://c2pa.org/statements/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "Place",
  "name": "Verified Environment",
  
  "usd:stage": {
    "upAxis": "Y",
    "metersPerUnit": 1.0
  },
  
  "c2pa:claim": {
    "title": "Environment Creation",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Virtual Studios Inc.",
      "identifier": "did:example:creator123"
    }
  }
}
```

## Next Steps

- Review [Basic Profile](/implementation/metadata-profiles/basic-profile.md) for core metadata
- See [Validation Tools](../tools/validation.md) for verification
- Check [API Reference](../tools/api-reference.md) for programmatic access
