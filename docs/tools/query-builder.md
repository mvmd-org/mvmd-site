---
sidebar_position: 3
---

# Query Builder

The MVMD Query Builder helps you construct metadata queries using a visual interface or programmatic APIs. This tool supports complex queries across all metadata profiles and standards.

## Query Types

### Basic Search
Simple text-based search across all metadata fields.

```graphql
{
  search(query: "office chair", type: "3DModel") {
    results {
      name
      description
      contentUrl
      creator {
        name
      }
    }
  }
}
```

### Property Filters
Filter by specific metadata properties:

```graphql
{
  search(
    filter: {
      type: "3DModel"
      properties: [
        { key: "encodingFormat", value: "model/gltf-binary" }
        { key: "gltf:materials.name", value: "Metal" }
      ]
    }
  ) {
    results {
      name
      contentUrl
      gltf:materials {
        name
        pbrMetallicRoughness {
          baseColorFactor
        }
      }
    }
  }
}
```

## Query Operations

### Comparison Operators
- `eq`: Equals
- `ne`: Not equals
- `gt`: Greater than
- `lt`: Less than
- `gte`: Greater than or equal
- `lte`: Less than or equal
- `contains`: Contains substring
- `startsWith`: Starts with
- `in`: Value in array
- `regex`: Regular expression match

Example:
```graphql
{
  search(
    filter: {
      dateCreated: { gte: "2024-01-01" }
      maximumAttendeeCapacity: { gt: 100 }
    }
  ) {
    results {
      name
      dateCreated
      maximumAttendeeCapacity
    }
  }
}
```

### Logical Operators
- `AND`: All conditions must match
- `OR`: Any condition must match
- `NOT`: Condition must not match

Example:
```graphql
{
  search(
    filter: {
      AND: [
        { type: "3DModel" },
        { 
          OR: [
            { "gltf:materials.name": "Metal" },
            { "gltf:materials.name": "Glass" }
          ]
        }
      ]
    }
  ) {
    results {
      name
      gltf:materials {
        name
      }
    }
  }
}
```

## Advanced Features

### Pagination
Control result size and position:

```graphql
{
  search(
    query: "chair"
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

### Field Selection
Control which fields to return:

```graphql
{
  search(query: "conference room") {
    results {
      # Basic fields
      name
      description
      
      # Technical details
      gltf:materials {
        name
        pbrMetallicRoughness
      }
      
      # Spatial properties
      spatialCoverage {
        box
        height
      }
      
      # Capacity info
      maximumAttendeeCapacity
    }
  }
}
```

### Aggregations
Perform calculations on query results:

```graphql
{
  aggregate(
    groupBy: "creator.name"
    metrics: [
      { type: "count", name: "totalAssets" },
      { type: "avg", field: "maximumAttendeeCapacity", name: "avgCapacity" }
    ]
  ) {
    results {
      key
      totalAssets
      avgCapacity
    }
  }
}
```

## Best Practices

### 1. Query Optimization
- Use specific field queries instead of full-text search
- Request only needed fields
- Use pagination for large result sets
- Apply appropriate filters early

### 2. Performance Considerations
- Limit result size appropriately
- Use indexed fields when possible
- Avoid deep nested queries
- Consider caching frequent queries

### 3. Error Handling
```graphql
{
  search(query: "chair") {
    results {
      name
    }
    errors {
      field
      message
      code
    }
  }
}
```

## Common Query Patterns

### Find Assets by Creator
```graphql
{
  search(
    filter: {
      creator: { name: "Virtual Furnishings Inc." }
      type: "3DModel"
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

### Search Environment Features
```graphql
{
  search(
    filter: {
      type: "Place"
      amenityFeature: {
        name: "presentationScreen"
        value: true
      }
    }
  ) {
    results {
      name
      maximumAttendeeCapacity
      amenityFeature {
        name
        value
      }
    }
  }
}
```

### Find Compatible Assets
```graphql
{
  search(
    filter: {
      AND: [
        { type: "3DModel" },
        { encodingFormat: "model/gltf-binary" },
        { 
          OR: [
            { license: "https://creativecommons.org/licenses/by/4.0/" },
            { license: "https://creativecommons.org/licenses/by-sa/4.0/" }
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

## Using Query Results

### Result Format
```json
{
  "data": {
    "search": {
      "results": [
        {
          "name": "Office Chair",
          "contentUrl": "https://example.com/models/chair.glb"
        }
      ],
      "pageInfo": {
        "totalResults": 42,
        "hasNextPage": true,
        "nextOffset": 20
      }
    }
  }
}
```

### Error Format
```json
{
  "data": {
    "search": {
      "results": [],
      "errors": [
        {
          "field": "filter.dateCreated",
          "message": "Invalid date format",
          "code": "INVALID_FORMAT"
        }
      ]
    }
  }
}
```

## Next Steps

- Review [API Reference](./api-reference.md) for programmatic access
- See [Validation](./validation.md) for ensuring metadata quality
- Check [Basic Profile](/implementation/metadata-profiles/basic-profile.md) for core metadata fields
