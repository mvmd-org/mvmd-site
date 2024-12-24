---
sidebar_position: 2
---

# API Reference

## Authentication

### Getting API Keys
1. Register at the MVMD Developer Portal
2. Create a new API key
3. Use the key in your API requests

```bash
curl -H "Authorization: Bearer your-api-key" https://api.mvmd.org/v1/validate
```

## Endpoints

### Validation API

#### Validate Metadata
`POST /v1/validate`

Validates metadata against specified profiles.

**Request:**
```json
{
  "profile": "3DObject",
  "metadata": {
    "@context": "https://schema.org/",
    "@type": "3DModel",
    "name": "Test Asset"
  }
}
```

**Response:**
```json
{
  "valid": true,
  "warnings": [],
  "errors": []
}
```

### Query API

#### Search Metadata
`GET /v1/search`

Searches metadata based on criteria.

**Parameters:**
- `q`: Search query
- `type`: Asset type
- `profile`: Metadata profile
- `limit`: Results per page
- `offset`: Pagination offset

```bash
curl "https://api.mvmd.org/v1/search?q=avatar&type=3DModel&limit=10"
```

## Rate Limits

- Free tier: 1000 requests/day
- Pro tier: 10000 requests/day
- Enterprise tier: Custom limits

## Error Codes

- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `429`: Too Many Requests
- `500`: Internal Server Error
