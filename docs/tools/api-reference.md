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

### API Key Management
```bash
# List active keys
curl -H "Authorization: Bearer your-api-key" \
     https://api.mvmd.org/v1/keys

# Create new key
curl -X POST \
     -H "Authorization: Bearer your-api-key" \
     -H "Content-Type: application/json" \
     -d '{"name": "Production Key", "expires": "2025-12-31"}' \
     https://api.mvmd.org/v1/keys

# Revoke key
curl -X DELETE \
     -H "Authorization: Bearer your-api-key" \
     https://api.mvmd.org/v1/keys/{key-id}
```

## Core Endpoints

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

#### Batch Validation
`POST /v1/validate/batch`

Validates multiple metadata objects in a single request.

**Request:**
```json
{
  "items": [
    {
      "profile": "3DObject",
      "metadata": {
        "@context": "https://schema.org/",
        "@type": "3DModel",
        "name": "Asset 1"
      }
    },
    {
      "profile": "Environment",
      "metadata": {
        "@context": "https://schema.org/",
        "@type": "Place",
        "name": "Environment 1"
      }
    }
  ]
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
- `limit`: Results per page (default: 20, max: 100)
- `offset`: Pagination offset
- `sort`: Sort field and direction
- `filter`: Advanced filtering criteria

```bash
curl "https://api.mvmd.org/v1/search?q=chair&type=3DModel&limit=10"
```

#### Advanced Search
`POST /v1/search`

Performs complex metadata searches.

**Request:**
```json
{
  "query": {
    "type": "3DModel",
    "filter": {
      "AND": [
        {"creator.name": "Virtual Studios"},
        {"encodingFormat": "model/gltf-binary"},
        {"dateCreated": {"gte": "2024-01-01"}}
      ]
    }
  },
  "fields": ["name", "description", "contentUrl"],
  "sort": [{"field": "dateCreated", "order": "desc"}],
  "limit": 20,
  "offset": 0
}
```

### Profile API

#### List Profiles
`GET /v1/profiles`

Lists available metadata profiles.

```bash
curl https://api.mvmd.org/v1/profiles
```

#### Get Profile Schema
`GET /v1/profiles/{profile-name}/schema`

Retrieves JSON Schema for a specific profile.

```bash
curl https://api.mvmd.org/v1/profiles/3DObject/schema
```

## Response Formats

### Success Response
```json
{
  "status": "success",
  "data": {
    // Response data
  },
  "meta": {
    "timestamp": "2024-03-15T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

### Error Response
```json
{
  "status": "error",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid metadata format",
    "details": [
      {
        "field": "name",
        "message": "Required field missing"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-03-15T10:30:00Z",
    "requestId": "req_abc123"
  }
}
```

## Rate Limits

| Tier | Requests/Day | Burst Rate |
|------|-------------|------------|
| Free | 1,000 | 10/second |
| Pro | 10,000 | 50/second |
| Enterprise | Custom | Custom |

Rate limit headers included in responses:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
X-RateLimit-Reset: 1621814400
```

## Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Invalid metadata format or content |
| `AUTHENTICATION_ERROR` | Invalid or missing API key |
| `AUTHORIZATION_ERROR` | Insufficient permissions |
| `RATE_LIMIT_ERROR` | Rate limit exceeded |
| `PROFILE_ERROR` | Invalid or unsupported profile |
| `QUERY_ERROR` | Invalid search query |
| `SERVER_ERROR` | Internal server error |

## Best Practices

### 1. Authentication
- Store API keys securely
- Rotate keys regularly
- Use separate keys for different environments
- Monitor key usage

### 2. Request Optimization
- Use batch operations when possible
- Implement proper pagination
- Include only required fields
- Cache frequent queries

### 3. Error Handling
- Implement proper error handling
- Monitor rate limits
- Use exponential backoff
- Log API responses

### 4. Security
- Use HTTPS only
- Validate response data
- Implement request signing
- Monitor for suspicious activity

## Code Examples

### Node.js
```javascript
const mvmdApi = require('mvmd-api');

const client = new mvmdApi({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Validate metadata
async function validateMetadata(metadata) {
  try {
    const result = await client.validate({
      profile: '3DObject',
      metadata: metadata
    });
    return result.valid;
  } catch (error) {
    console.error('Validation failed:', error);
    return false;
  }
}
```

### Python
```python
from mvmd_api import MvmdClient

client = MvmdClient(api_key='your-api-key')

# Search metadata
def search_assets(query):
    try:
        results = client.search(
            query=query,
            limit=10,
            type='3DModel'
        )
        return results.data
    except Exception as e:
        print(f"Search failed: {e}")
        return None
```

## Next Steps

- Review [Query Builder](./query-builder.md) for building complex queries
- See [Validation](./validation.md) for metadata validation
- Check [Best Practices](/implementation/best-practices.md) for implementation guidance
