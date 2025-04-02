---
sidebar_position: 6
---

> **PROPOSED STATE**: This integration profile is currently in a proposed state and is under community review. The specification may change based on feedback and implementation experience.

# Royalty Integration Profile

The Royalty Integration Profile defines metadata for tracking, distributing, and managing royalties and revenue sharing for digital assets. This profile enables creators to specify compensation terms, usage rights, and distribution rules for their assets across platforms.

## Core Structure

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "LicenseDocument",
  
  "name": "Asset Revenue Model",
  "description": "Royalty and revenue sharing configuration for digital asset",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "royalty-2024-001"
  },
  
  "contentUrl": "https://example.com/royalties/asset-001.json",
  "encodingFormat": "application/json",
  
  "about": {
    "@type": "CreativeWork",
    "identifier": "asset-2024-001"
  }
}
```

## Required Properties

### Basic Information
- `@context`
- `@type`: Typically "LicenseDocument"
- `name`
- `description`
- `identifier`
- `about`: The asset this royalty configuration applies to

### Royalty Properties
- Revenue distribution
- Usage rights
- Payment methods
- Tracking configuration
- Verification mechanisms

## Technical Specifications

### Revenue Distribution
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "revenueDistribution": {
    "splits": [
      {
        "recipient": {
          "@type": "Person",
          "name": "Primary Creator",
          "identifier": "creator-123",
          "paymentAddress": "payment:example:address123"
        },
        "percentage": 70,
        "role": "creator",
        "notes": "Original asset creator"
      },
      {
        "recipient": {
          "@type": "Organization",
          "name": "Studio",
          "identifier": "org-456",
          "paymentAddress": "payment:example:address456"
        },
        "percentage": 20,
        "role": "publisher",
        "notes": "Publishing and distribution"
      },
      {
        "recipient": {
          "@type": "Organization",
          "name": "Foundation",
          "identifier": "org-789",
          "paymentAddress": "payment:example:address789"
        },
        "percentage": 10,
        "role": "contributor",
        "notes": "Platform fee"
      }
    ],
    "totalPercentage": 100,
    "minimumPayment": {
      "amount": 0.01,
      "currency": "USD"
    }
  }
}
```

### Usage Terms
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "usageTerms": {
    "commercialUse": {
      "allowed": true,
      "restrictions": [
        "No resale of unmodified asset",
        "No sublicensing without approval"
      ],
      "royaltyRate": {
        "percentage": 5,
        "minimumAmount": {
          "amount": 1.00,
          "currency": "USD"
        }
      }
    },
    "derivativeWorks": {
      "allowed": true,
      "restrictions": [
        "Attribution required",
        "Derivatives must include royalty terms"
      ],
      "royaltyRate": {
        "percentage": 3,
        "minimumAmount": {
          "amount": 0.50,
          "currency": "USD"
        }
      }
    }
  }
}
```

## Complete Example

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "c2pa": "https://c2pa.org/statements/"
  },
  "@type": "LicenseDocument",
  
  "name": "Digital Asset Royalty Configuration",
  "description": "Comprehensive royalty and revenue sharing model for virtual asset with usage tracking and payment distribution",
  
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "MVMD-ID",
    "value": "royalty-2024-001"
  },
  
  "contentUrl": "https://example.com/royalties/asset-001.json",
  "encodingFormat": "application/json",
  "dateCreated": "2024-03-15",
  "dateModified": "2024-03-15",
  
  "about": {
    "@type": "CreativeWork",
    "identifier": "asset-2024-001",
    "name": "Premium Virtual Asset",
    "url": "https://example.com/assets/premium-asset"
  },
  
  "author": {
    "@type": "Organization",
    "name": "Digital Asset Studio",
    "url": "https://example.com/studio",
    "email": "rights@example.com"
  },
  
  "revenueDistribution": {
    "splits": [
      {
        "recipient": {
          "@type": "Person",
          "name": "Primary Creator",
          "identifier": "creator-123",
          "paymentAddress": "payment:example:address123",
          "url": "https://example.com/creators/primary"
        },
        "percentage": 70,
        "role": "creator",
        "notes": "Original asset creator"
      },
      {
        "recipient": {
          "@type": "Organization",
          "name": "Studio",
          "identifier": "org-456",
          "paymentAddress": "payment:example:address456",
          "url": "https://example.com/studio"
        },
        "percentage": 20,
        "role": "publisher",
        "notes": "Publishing and distribution"
      },
      {
        "recipient": {
          "@type": "Organization",
          "name": "Platform Foundation",
          "identifier": "org-789",
          "paymentAddress": "payment:example:address789",
          "url": "https://example.com/foundation"
        },
        "percentage": 10,
        "role": "platform",
        "notes": "Platform fee"
      }
    ],
    "totalPercentage": 100,
    "minimumPayment": {
      "amount": 0.01,
      "currency": "USD"
    },
    "paymentFrequency": "monthly",
    "paymentMethods": ["crypto", "fiat", "credit"],
    "defaultCurrency": "USD"
  },
  
  "usageTerms": {
    "commercialUse": {
      "allowed": true,
      "restrictions": [
        "No resale of unmodified asset",
        "No sublicensing without approval",
        "Attribution required for commercial use"
      ],
      "royaltyRate": {
        "percentage": 5,
        "minimumAmount": {
          "amount": 1.00,
          "currency": "USD"
        },
        "maximumAmount": {
          "amount": 10000.00,
          "currency": "USD"
        }
      }
    },
    "derivativeWorks": {
      "allowed": true,
      "restrictions": [
        "Attribution required",
        "Derivatives must include royalty terms",
        "Notification required for major derivatives"
      ],
      "royaltyRate": {
        "percentage": 3,
        "minimumAmount": {
          "amount": 0.50,
          "currency": "USD"
        }
      }
    },
    "educationalUse": {
      "allowed": true,
      "restrictions": [
        "Attribution required",
        "Non-commercial educational contexts only"
      ],
      "royaltyRate": {
        "percentage": 0,
        "notes": "No royalty for educational use"
      }
    },
    "territorialRestrictions": [
      {
        "territory": "global",
        "notes": "Available worldwide with standard terms"
      }
    ],
    "timeRestrictions": {
      "effectiveDate": "2024-03-15",
      "expirationDate": null,
      "notes": "Perpetual license subject to terms"
    }
  },
  
  "trackingConfiguration": {
    "method": "blockchain",
    "provider": "OpenRegistry",
    "trackingId": "track-2024-001",
    "verification": {
      "type": "signature",
      "algorithm": "Ed25519",
      "publicKey": "key:example:verification123"
    },
    "reportEndpoint": "https://royalty.example.com/api/report",
    "apiKey": {
      "generation": "dynamic",
      "endpoint": "https://royalty.example.com/api/keys"
    },
    "eventTracking": [
      {
        "event": "sale",
        "required": true,
        "parameters": ["price", "buyer", "seller", "timestamp"]
      },
      {
        "event": "license",
        "required": true,
        "parameters": ["licenseType", "licensee", "duration", "timestamp"]
      },
      {
        "event": "usage",
        "required": false,
        "parameters": ["context", "platform", "duration", "timestamp"]
      }
    ]
  },
  
  "paymentConfiguration": {
    "providers": [
      {
        "name": "CryptoPayments",
        "type": "cryptocurrency",
        "currencies": ["ETH", "USDC", "BTC"],
        "apiEndpoint": "https://payments.example.com/api/crypto"
      },
      {
        "name": "FiatGateway",
        "type": "fiat",
        "currencies": ["USD", "EUR", "JPY"],
        "apiEndpoint": "https://payments.example.com/api/fiat"
      }
    ],
    "invoicing": {
      "automatic": true,
      "frequency": "monthly",
      "method": "email",
      "template": "https://example.com/templates/invoice.html"
    },
    "escrow": {
      "enabled": true,
      "period": "7d",
      "dispute": {
        "mechanism": "arbitration",
        "provider": "DisputeResolution.example.com"
      }
    }
  },
  
  "reportingConfiguration": {
    "frequency": "monthly",
    "format": "json",
    "delivery": ["email", "dashboard"],
    "details": ["transactions", "revenue", "usage", "analytics"],
    "endpoint": "https://reporting.example.com/api/reports"
  },
  
  "additionalTerms": [
    "Full legal terms available at https://example.com/terms/asset-001",
    "Disputes resolved through arbitration per terms",
    "Terms subject to change with 30 days notice"
  ],
  
  "c2pa:claim": {
    "title": "Royalty Configuration Authentication",
    "dateCreated": "2024-03-15T10:30:00Z",
    "producer": {
      "name": "Digital Asset Studio",
      "identifier": "did:example:studio123"
    },
    "signature": {
      "type": "Ed25519Signature2020",
      "created": "2024-03-15T10:30:00Z",
      "verificationMethod": "did:example:studio123#key-1"
    }
  }
}
```

## Validation Rules

### Required Properties
- Valid revenue distribution
- Complete recipient information
- Proper percentage allocation
- Usage terms definition
- Tracking configuration

### Technical Properties
- Valid payment addresses
- Proper percentage totals
- Complete usage terms
- Valid tracking methods
- Payment configuration

## Best Practices

1. **Revenue Distribution**
    - Ensure percentages total 100%
    - Include all contributors
    - Provide clear role definitions
    - Document minimum payments
    - Plan for currency conversion

2. **Usage Terms**
    - Define clear commercial terms
    - Document derivative rights
    - Specify attribution requirements
    - Include territorial considerations
    - Plan for term changes

3. **Payment Systems**
    - Support multiple payment methods
    - Plan for cross-border payments
    - Document tax implications
    - Include dispute resolution
    - Implement proper verification

4. **Tracking Implementation**
    - Choose appropriate tracking method
    - Implement secure verification
    - Plan for offline usage
    - Document reporting requirements
    - Protect sensitive information

## Common Issues

1. **Attribution Enforcement**
    - Cross-platform tracking
    - Attribution verification
    - Credit display standards
    - Derivative tracking
    - Enforcement mechanisms

2. **Payment Processing**
    - Cross-border regulations
    - Currency conversion
    - Fee management
    - Payment thresholds
    - Tax implications

## Next Steps

- Review [Basic Profile](./basic.md) for core metadata integration
- See [C2PA Standard](../standards/overview.md) for authentication and verification
- Check [Validation Tools](../reference/validator.md) for testing 