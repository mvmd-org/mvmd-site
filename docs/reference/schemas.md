---
sidebar_position: 2
---

# Schema Definitions

This page provides technical schema definitions for MVMD metadata structures, serving as a reference for developers implementing MVMD-compliant systems.

## JSON Schema Definitions

MVMD provides JSON Schema definitions that can be used to validate metadata against our specifications:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://mvmd.org/schemas/v1/core",
  "title": "MVMD Core Schema",
  "description": "Schema for validating MVMD core metadata",
  "type": "object",
  "required": ["@context", "@type"],
  "properties": {
    "@context": {
      "type": ["object", "string", "array"],
      "description": "The JSON-LD context defining the vocabulary"
    },
    "@type": {
      "type": ["string", "array"],
      "description": "The primary type of the described resource"
    },
    "name": {
      "type": "string",
      "description": "The name of the asset",
      "maxLength": 100
    },
    "description": {
      "type": "string",
      "description": "A description of the asset",
      "maxLength": 1000
    }
  }
}
```

## Core Schema.org Types

MVMD builds on these primary Schema.org types:

| Type | Description | Required Properties | Common Properties |
|------|-------------|---------------------|-------------------|
| [CreativeWork](https://schema.org/CreativeWork) | Generic creative assets | name, description | creator, dateCreated, license |
| [3DModel](https://schema.org/3DModel) | 3D object metadata | name, contentUrl, encodingFormat | creator, dateCreated, license |
| [ImageObject](https://schema.org/ImageObject) | Image or texture metadata | name, contentUrl, encodingFormat | width, height, creator |
| [Place](https://schema.org/Place) | Locations and scenes | name, description | geo, maximumAttendeeCapacity |
| [VirtualLocation](https://schema.org/VirtualLocation) | Digital-only locations | name | additionalType |

## Validation Requirements

MVMD requires specific validation rules for different metadata profiles:

### Basic Profile Validation

- `@context`: Must include Schema.org vocabulary
- `@type`: Must be a valid Schema.org type
- `name`: Required, max 100 characters
- `description`: Required, max 1000 characters
- `identifier`: Required, must include propertyID and value
- `creator`: Required, must include name
- `dateCreated`: Required, ISO 8601 format
- `license`: Required, valid URL
- `contentUrl`: Required for media objects, valid URL
- `encodingFormat`: Required for media objects, valid MIME type

### Advanced Validation

MVMD provides additional validation for:

- Cross-references between files
- Namespace-specific properties
- Integration profile compliance
- Property value constraints
- Relationship integrity

## Custom Property Validation

For `additionalProperty` objects, MVMD has these validation rules:

```json
{
  "additionalProperty": {
    "type": "array",
    "items": {
      "type": "object",
      "required": ["@type", "propertyID", "name", "value"],
      "properties": {
        "@type": {
          "type": "string",
          "enum": ["PropertyValue"]
        },
        "propertyID": {
          "type": "string",
          "description": "Unique identifier for the property",
          "pattern": "^[a-zA-Z][a-zA-Z0-9]*$"
        },
        "name": {
          "type": "string",
          "description": "Human-readable property name"
        },
        "value": {
          "description": "Property value, can be any JSON type"
        }
      }
    }
  }
}
```

## Implementation Notes

- MVMD validation is extensible through custom schemas
- Validators support Schema.org vocabulary and MVMD extensions
- Custom validation rules can be implemented for specific profiles
- Schema definitions are versioned with the MVMD specification

## Using the Schemas

To use MVMD's JSON Schema definitions in your projects:

1. Reference the schemas in your validation tools
2. Include the appropriate schema version
3. Extend with domain-specific validation as needed
4. Consider both Schema.org compliance and MVMD extensions

## Related Resources

- [Validator](./validator.md): Interactive validation tool
- [Basic Profile](../integration-profiles/basic.md): Standard implementation profile
- [Schema.org Standard](../standards/schema-org.md): Core vocabulary details 