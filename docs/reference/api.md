---
sidebar_position: 3
---

# API Reference

This page documents the MVMD API for programmatic access to validation, conversion, and metadata utilities.

## API Overview

The MVMD API allows developers to:

- Validate metadata against MVMD schemas
- Convert between different metadata formats
- Query metadata information
- Generate schema-compliant templates

## Authentication

API access requires an API key. To obtain a key:

1. Register on the [MVMD Developer Portal](https://mvmd.org/developers)
2. Create a new API key in your account dashboard
3. Use the key in all API requests via the `X-MVMD-API-Key` header

Example:
```bash
curl -H "X-MVMD-API-Key: your-api-key" https://api.mvmd.org/v1/validate
```

## Validation API

The validation endpoint checks metadata against MVMD schemas.

### Endpoint

`POST https://api.mvmd.org/v1/validate`

### Request Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `metadata` | JSON | The metadata to validate |
| `profile` | String | (Optional) The integration profile to validate against (e.g., "basic", "avatar") |
| `strict` | Boolean | (Optional) Whether to enforce strict validation |

### Example Request

```bash
curl -X POST -H "Content-Type: application/json" -H "X-MVMD-API-Key: your-api-key" \
  -d '{
    "metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "3DModel",
      "name": "Example Asset"
    },
    "profile": "basic",
    "strict": true
  }' \
  https://api.mvmd.org/v1/validate
```

### Response

```json
{
  "valid": false,
  "errors": [
    {
      "property": "description",
      "message": "Required property 'description' is missing",
      "severity": "error"
    },
    {
      "property": "contentUrl",
      "message": "Required property 'contentUrl' is missing",
      "severity": "error"
    }
  ],
  "warnings": [
    {
      "property": "license",
      "message": "Recommended property 'license' is missing",
      "severity": "warning"
    }
  ],
  "profile": "basic",
  "validatedAgainst": "MVMD v1.0 Basic Profile"
}
```

## Template Generation API

Generate metadata templates based on integration profiles.

### Endpoint

`GET https://api.mvmd.org/v1/templates/{profile}`

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `profile` | String | The integration profile to generate a template for |

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `assetType` | String | (Optional) Specific asset type (e.g., "3DModel", "ImageObject") |
| `minimal` | Boolean | (Optional) Generate minimal template with only required fields |

### Example Request

```bash
curl -H "X-MVMD-API-Key: your-api-key" \
  https://api.mvmd.org/v1/templates/avatar?assetType=VirtualCharacter&minimal=false
```

### Response

```json
{
  "template": {
    "@context": {
      "@vocab": "https://schema.org/",
      "mvmd": "https://mvmd.org/v1/"
    },
    "@type": "VirtualCharacter",
    "name": "",
    "description": "",
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "",
      "value": ""
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "propertyID": "avatarProperties",
        "name": "Avatar Properties",
        "value": {
          "type": "",
          "style": "",
          "skeleton": ""
        }
      }
    ]
  },
  "profile": "avatar",
  "requiredProperties": ["name", "description", "identifier", "avatarProperties"]
}
```

## Conversion API

Convert metadata between different formats.

### Endpoint

`POST https://api.mvmd.org/v1/convert`

### Request Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `metadata` | JSON | The metadata to convert |
| `sourceFormat` | String | Source format (default: "jsonld") |
| `targetFormat` | String | Target format ("jsonld", "rdf", "microdata") |

### Example Request

```bash
curl -X POST -H "Content-Type: application/json" -H "X-MVMD-API-Key: your-api-key" \
  -d '{
    "metadata": {
      "@context": {
        "@vocab": "https://schema.org/",
        "mvmd": "https://mvmd.org/v1/"
      },
      "@type": "3DModel",
      "name": "Example Asset"
    },
    "sourceFormat": "jsonld",
    "targetFormat": "microdata"
  }' \
  https://api.mvmd.org/v1/convert
```

### Response

```json
{
  "converted": "<div itemscope itemtype=\"https://schema.org/3DModel\">\n  <meta itemprop=\"name\" content=\"Example Asset\">\n</div>",
  "sourceFormat": "jsonld",
  "targetFormat": "microdata"
}
```

## Batch Validation API

Validate multiple metadata objects in a single request.

### Endpoint

`POST https://api.mvmd.org/v1/validate/batch`

### Request Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `items` | Array | Array of metadata objects to validate |
| `profile` | String | (Optional) The integration profile to validate against |

### Example Request

```bash
curl -X POST -H "Content-Type: application/json" -H "X-MVMD-API-Key: your-api-key" \
  -d '{
    "items": [
      {
        "id": "asset-1",
        "metadata": {
          "@context": {"@vocab": "https://schema.org/"},
          "@type": "3DModel",
          "name": "Asset 1"
        }
      },
      {
        "id": "asset-2",
        "metadata": {
          "@context": {"@vocab": "https://schema.org/"},
          "@type": "ImageObject",
          "name": "Asset 2"
        }
      }
    ],
    "profile": "basic"
  }' \
  https://api.mvmd.org/v1/validate/batch
```

### Response

```json
{
  "results": [
    {
      "id": "asset-1",
      "valid": false,
      "errors": [
        {
          "property": "contentUrl",
          "message": "Required property 'contentUrl' is missing",
          "severity": "error"
        }
      ]
    },
    {
      "id": "asset-2",
      "valid": false,
      "errors": [
        {
          "property": "contentUrl",
          "message": "Required property 'contentUrl' is missing",
          "severity": "error"
        }
      ]
    }
  ],
  "summary": {
    "total": 2,
    "valid": 0,
    "invalid": 2
  }
}
```

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid request format |
| 401 | Unauthorized - Invalid or missing API key |
| 403 | Forbidden - API key does not have access |
| 404 | Not Found - Endpoint not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

## Rate Limits

- Free tier: 100 requests per day
- Developer tier: 1,000 requests per day
- Enterprise tier: Custom limits

Rates are applied per API key and reset at 00:00 UTC.

## SDK Availability

MVMD provides official SDKs for:

- JavaScript/TypeScript
- Python
- Java
- C#

Visit the [MVMD Developer Portal](https://mvmd.org/developers) for SDK documentation.

## Implementation Notes

- All API requests must use HTTPS
- Response format is JSON by default
- Timestamps use ISO 8601 format
- Errors include a human-readable message

## Related Resources

- [Validator](./validator.md): Interactive validation tool
- [Schema Definitions](./schemas.md): Technical schema details
- [Developer Portal](https://mvmd.org/developers): Additional developer resources 