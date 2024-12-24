---
sidebar_position: 3
---

# Query Builder

The MVMD Query Builder helps you construct metadata queries using a visual interface or programmatic APIs.

## Interactive Query Builder

The interactive query builder provides a visual interface for:
- Constructing complex queries
- Testing query results
- Generating query code

## Query Types

### Basic Search
Simple text-based search across all metadata fields.

```graphql
{
  search(query: "avatar", type: "3DModel") {
    results {
      name
      description
      contentUrl
    }
  }
}
```

### Advanced Filters

#### Property Filters
Filter by specific metadata properties.

```graphql
{
  search(
    filter: {
      type: "3DModel"
      properties: [
        { key: "format", value: "glTF" }
        { key: "license", value: "CC-BY" }
      ]
    }
  ) {
    results {
      name
      contentUrl
    }
  }
}
```

#### Spatial Queries
Search based on spatial relationships.

```graphql
{
  nearby(
    location: {
      lat: 37.7749
      lon: -122.4194
    }
    radius: "10km"
  ) {
    results {
      name
      distance
    }
  }
}
```

## Supported Query Operations

### 1. Text Search
- Full-text search across metadata fields
- Field-specific text search
- Fuzzy matching support

### 2. Comparison Operations
- Equals (`eq`)
- Not equals (`ne`)
- Greater than (`gt`)
- Less than (`lt`)
- Contains (`contains`)
- Starts with (`startsWith`)

### 3. Logical Operations
- AND
- OR
- NOT

### 4. Range Queries
```graphql
{
  search(
    filter: {
      dateCreated: {
        gte: "2024-01-01"
        lte: "2024-12-31"
      }
    }
  ) {
    results {
      name
      dateCreated
    }
  }
}
```

### 5. Aggregations
```graphql
{
  aggregate(
    groupBy: "creator"
    metrics: ["count", "avgRating"]
  ) {
    results {
      key
      count
      avgRating
    }
  }
}
```

## Query Examples

### Find Assets by Creator
```graphql
{
  search(
    filter: {
      creator: "studio-name"
      type: "Environment"
    }
    sort: { field: "dateCreated", order: DESC }
    limit: 10
  ) {
    results {
      name
      description
      dateCreated
    }
  }
}
```

### Complex Property Search
```graphql
{
  search(
    filter: {
      AND: [
        { type: "3DModel" },
        { format: "glTF" },
        {
          OR: [
            { license: "CC-BY" },
            { license: "CC-BY-SA" }
          ]
        }
      ]
    }
  ) {
    results {
      name
      contentUrl
      license
    }
  }
}
```

### Spatial Search with Properties
```graphql
{
  nearby(
    location: { lat: 37.7749, lon: -122.4194 }
    radius: "10km"
    filter: {
      type: "Environment"
      properties: [
        { key: "capacity", value: { gt: 100 } }
      ]
    }
  ) {
    results {
      name
      distance
      capacity
    }
  }
}
```

## Using Query Results

### Pagination
All queries support pagination using `limit` and `offset`:

```graphql
{
  search(
    query: "avatar"
    limit: 20
    offset: 40
  ) {
    results {
      name
    }
    pageInfo {
      totalResults
      hasNextPage
      nextOffset
    }
  }
}
```

### Result Formatting
Control the output format using field selection:

```graphql
{
  search(query: "avatar") {
    results {
      # Basic fields
      name
      description
      
      # Nested metadata
      metadata {
        dimensions
        materials
      }
      
      # Related assets
      related {
        name
        type
      }
    }
  }
}
```

## Best Practices

1. **Query Optimization**
    - Use specific field queries instead of full-text search when possible
    - Limit result fields to those needed
    - Use pagination for large result sets

2. **Error Handling**
    - Always check for error responses
    - Implement retry logic for failed queries
    - Handle pagination properly

3. **Caching**
    - Cache frequently used queries
    - Implement cache invalidation strategies
    - Use ETags for response caching

4. **Rate Limiting**
    - Stay within API rate limits
    - Implement request throttling
    - Monitor API usage
