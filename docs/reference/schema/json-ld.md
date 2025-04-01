---
sidebar_position: 1
---

# JSON-LD Reference

JSON-LD (JavaScript Object Notation for Linked Data) is a method of encoding linked data using JSON. It's a core technology for the MVMD standard, enabling rich, interoperable metadata for metaverse assets.

## What is JSON-LD?

JSON-LD is a lightweight Linked Data format that:

- Is easy for humans to read and write
- Is easy for machines to parse and generate
- Is based on the widely used JSON format
- Provides a way to add semantics to JSON documents
- Enables data to be linked across different sources on the web

JSON-LD extends JSON by introducing concepts from the Resource Description Framework (RDF), but does so in a way that allows existing JSON-based systems to adopt gradually.

## Key Concepts in JSON-LD

### Context (`@context`)

The context maps terms used in a JSON document to IRIs (Internationalized Resource Identifiers). It essentially provides the vocabulary for interpreting the JSON data:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

In this example:
- `@vocab` sets the default vocabulary to Schema.org
- `mvmd` creates a prefix for the MVMD namespace

### Types (`@type`)

The `@type` keyword is used to categorize a JSON-LD object:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Explorer Ship"
}
```

Here, the object is typed as a "DigitalDocument" from the Schema.org vocabulary.

### IDs (`@id`)

The `@id` property uniquely identifies a resource with an IRI:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@id": "https://example.com/assets/space-explorer-01",
  "@type": "DigitalDocument",
  "name": "Space Explorer Ship"
}
```

### Nested Objects and References

JSON-LD supports complex nested structures and references between objects:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Explorer Ship",
  "creator": {
    "@type": "Person",
    "name": "Jane Designer",
    "url": "https://janedesigner.com"
  },
  "license": {
    "@id": "https://creativecommons.org/licenses/by/4.0/"
  }
}
```

## Why MVMD Uses JSON-LD

MVMD uses JSON-LD for several critical reasons:

1. **Semantic Clarity**: JSON-LD provides clear, consistent semantics for metadata properties
2. **Namespace Management**: Multiple vocabularies can coexist without conflicts
3. **Extensibility**: New properties and schemas can be added while maintaining compatibility
4. **Linked Data**: Metadata can reference other resources across the web
5. **Discoverability**: Schema.org compatibility ensures search engines understand MVMD data
6. **Validation**: JSON-LD has well-established validation mechanisms
7. **Interoperability**: Systems can exchange metadata meaningfully, even when they use different internal schemas

## JSON-LD in MVMD Documents

Every MVMD document begins with a context declaration that includes both Schema.org and MVMD-specific terms:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  }
}
```

MVMD uses:

- **Schema.org properties** for general metadata (name, description, creator, etc.)
- **MVMD-specific properties** for metaverse-specific metadata (3D properties, world coordinates, interactive features, etc.)

## Handling MVMD-Specific Properties

MVMD-specific properties are prefixed with `mvmd:` in the JSON-LD document:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Futuristic Helmet",
  "description": "A high-tech helmet with AR display",
  "mvmd:category": "wearable",
  "mvmd:wearableType": "helmet",
  "mvmd:attachmentPoint": "head"
}
```

## Linking to Other Resources

JSON-LD makes it easy to link to other resources:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Collectible Card",
  "contentUrl": "https://example.com/models/card.glb",
  "mvmd:partOf": {
    "@id": "https://example.com/collections/trading-cards",
    "@type": "Collection",
    "name": "Virtual Trading Card Series 1"
  },
  "mvmd:relatedAssets": [
    {"@id": "https://example.com/assets/card-holder"},
    {"@id": "https://example.com/assets/display-case"}
  ]
}
```

## MVMD and Compact vs. Expanded JSON-LD

MVMD typically uses the compact form of JSON-LD for readability, but systems processing MVMD can expand it for more precise semantic interpretation:

### Compact Form (Used in MVMD Documentation)

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Space Explorer Ship",
  "mvmd:polyCount": 24500
}
```

### Expanded Form (Used by Some Processing Systems)

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": ["https://schema.org/DigitalDocument"],
  "https://schema.org/name": [{"@value": "Space Explorer Ship"}],
  "https://mvmd.org/v1/polyCount": [{"@value": 24500}]
}
```

## JSON-LD Validation and Processing

To validate and process MVMD JSON-LD:

1. **JSON Schema Validation**: Ensure the document structure is correct
2. **JSON-LD Processing**: Use JSON-LD libraries to expand, compact, or frame the document
3. **RDF Conversion**: Convert to other RDF formats if needed (Turtle, N-Triples, etc.)

### Common JSON-LD Processing Libraries

- JavaScript: [jsonld.js](https://github.com/digitalbazaar/jsonld.js)
- Python: [PyLD](https://github.com/digitalbazaar/pyld)
- Java: [jsonld-java](https://github.com/jsonld-java/jsonld-java)
- Go: [go-jsonld](https://github.com/piprate/json-gold)

## Example: Complete MVMD Document

Here's an example of a complete MVMD document using JSON-LD:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "DigitalDocument",
  "name": "Galactic Explorer Ship",
  "description": "A detailed 3D model of an interstellar exploration vessel with detailed interior and functioning parts.",
  "creator": {
    "@type": "Person",
    "name": "Astral Designs",
    "url": "https://astraldesigns.space"
  },
  "dateCreated": "2023-06-15",
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "contentUrl": "https://example.com/models/galactic-explorer.glb",
  "encodingFormat": "model/gltf-binary",
  "thumbnail": {
    "@type": "ImageObject",
    "contentUrl": "https://example.com/thumbnails/galactic-explorer.jpg",
    "width": 1024,
    "height": 1024
  },
  
  "mvmd:category": "vehicle",
  "mvmd:vehicleType": "spacecraft",
  "mvmd:polyCount": 185000,
  "mvmd:textureResolution": "4K",
  "mvmd:dimensions": {
    "length": 120,
    "width": 45,
    "height": 28,
    "unit": "meters"
  },
  "mvmd:features": [
    "animated",
    "interactive",
    "physics"
  ],
  "mvmd:interactiveElements": [
    {
      "name": "Cockpit Controls",
      "type": "control-panel",
      "position": [0, 10, 35],
      "interactions": ["touch", "hover"]
    },
    {
      "name": "Engine Room",
      "type": "mechanical",
      "position": [0, 5, -40],
      "interactions": ["repair", "upgrade"]
    }
  ],
  "mvmd:compatibility": [
    {
      "platform": "Universe Explorer",
      "version": "3.5+"
    },
    {
      "platform": "Cosmic Voyager",
      "version": "2.0+"
    }
  ]
}
```

## Best Practices for JSON-LD in MVMD

1. **Always Include a Complete Context**: Include both Schema.org and MVMD namespaces
2. **Use Appropriate Schema.org Types**: Start with established Schema.org types before adding MVMD extensions
3. **Namespace Prefixing**: Always use the `mvmd:` prefix for MVMD-specific properties
4. **Maintain Compatibility**: Follow Schema.org patterns where applicable
5. **Link Don't Duplicate**: Use references to link to external resources instead of duplicating data
6. **Validate Your JSON-LD**: Use JSON-LD validators to ensure your document is well-formed
7. **Consider Consumers**: Remember both humans and machines need to process your JSON-LD
8. **Be Consistent**: Follow the patterns established in the MVMD examples

## Additional Resources

- [JSON-LD Official Website](https://json-ld.org/)
- [JSON-LD Playground](https://json-ld.org/playground/)
- [Schema.org Documentation](https://schema.org/docs/full.html)
- [W3C JSON-LD 1.1 Specification](https://www.w3.org/TR/json-ld11/)
- [Linked Data Principles](https://www.w3.org/DesignIssues/LinkedData.html)

