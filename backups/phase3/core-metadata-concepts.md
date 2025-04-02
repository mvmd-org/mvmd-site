# Metadata Fundamentals

Metadata is structured information that describes, explains, or locates virtual assets and experiences in the Metaverse. Well-structured metadata enables interoperability, discoverability, and management of digital assets across different platforms and environments.

At its core, MVMD builds upon Schema.org's vocabulary and JSON-LD's syntax to create a standardized way to describe Metaverse assets.

## Core Technologies

### Schema.org Foundation

Please review the official docs at [schema.org](https://schema.org/).

Schema.org is a collaborative, community-driven effort to create and maintain a shared vocabulary for structured data.
It provides:

- A standardized vocabulary for describing digital content
- Well-defined types and properties
- Regular updates and improvements
- Broad industry adoption

MVMD uses Schema.org as its foundation because:

- It's widely supported across platforms
- It has a rich vocabulary for digital assets
- It's extensible for specialized needs
- It integrates well with search engines and data systems

### JSON-LD

Please review the official docs at [json-ld.org](https://json-ld.org/).

JSON-LD (JavaScript Object Notation for Linked Data) is our chosen format because it:

- Is easy to read and write
- Supports namespacing and context
- Enables linked data connections
- Supports complex references to avoid repeating data
- Maintains compatibility with regular JSON

Basic JSON-LD structure:

```json
{
  "@context": "https://schema.org/",
  "@type": "Thing",
  "name": "Example Object"
}
```

## Required Metadata Elements

Every MVMD metadata object MUST include two core elements within the `@context` object, plus a `@type` declaration:

### 1. Context (@context)

The `@context` object defines the vocabularies and rules for interpreting the metadata. It **must** include:

-   `"@vocab": "https://schema.org/"`: Sets Schema.org as the default vocabulary for terms without a prefix.
-   `"mvmd": "https://mvmd.org/v1/"`: Indicates compliance with MVMD standards and enables version-specific features.

You can add **additional contexts** (namespaces) to include terms from other standards like glTF or USD when needed for embedding data or using standard-specific properties.

```json
{
  "@context": {
    "@vocab": "https://schema.org/", // Required Schema.org vocabulary
    "mvmd": "https://mvmd.org/v1/",  // Required MVMD version indicator
    // Optional additional namespaces:
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  }
  // ... @type and properties follow
}
```

### 2. Type (@type)

The `@type` property specifies the primary Schema.org type for the object being described. This determines the core set of properties available. Choose the most specific relevant type.

-   **CreativeWork**: Most versatile base type, supports rich relationships (`hasPart`, `associatedMedia`), ideal for complex virtual assets, can be specialized using `additionalType`.
-   **MediaObject** subtypes (e.g., `3DModel`, `AudioObject`, `ImageObject`, `VideoObject`): For specific media formats.
-   **Place**: For digital twins or representations of locations.
-   **SoftwareApplication**: For interactive experiences.
-   **DigitalDocument**: For documentation.
-   **LearningResource**: For educational content.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork", // Specifies the type of the main object
  "name": "My Asset"
  // ... other properties
}
```

_(We cover root object types in detail in the [Types of Things](./types-of-things.md) page.)_

## Property Value Handling

MVMD follows specific patterns for handling different types of values:

### Simple Values

For basic properties defined by Schema.org, use direct JSON values (strings, numbers, booleans):

```json
{
  "@context": { "@vocab": "https://schema.org/", "mvmd": "https://mvmd.org/v1/" },
  "@type": "CreativeWork",
  "name": "Simple Asset", // Simple string value
  "description": "Basic asset example", // Simple string value
  "version": 1 // Simple number value
}
```

### Structured Values (Additional Properties)

When adding custom properties not defined in Schema.org or providing more detail about a value, use the `additionalProperty` property with nested `PropertyValue` objects:

```json
{
  "@context": { "@vocab": "https://schema.org/", "mvmd": "https://mvmd.org/v1/" },
  "@type": "CreativeWork",
  "name": "Complex Asset",
  "additionalProperty": [ // Use an array for multiple PropertyValues
    {
      "@type": "PropertyValue",
      "propertyID": "capacity",    // A machine-readable identifier for the property
      "name": "Maximum Capacity", // A human-readable name (optional)
      "value": 100               // The actual value
    },
    {
      "@type": "PropertyValue",
      "propertyID": "renderQuality",
      "name": "Render Quality",
      "value": "high"
    }
    // Add more PropertyValue objects here if needed
  ]
}
```
*   **`propertyID`**: A unique identifier for the custom property (e.g., camelCase, snake_case).
*   **`name`**: Optional human-readable label.
*   **`value`**: The property's value (can be string, number, boolean, or even another structured object).

### Multiple Values

Use arrays for multiple values, ensuring each object has proper type declarations:

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "CreativeWork",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "field1",
      "value": "value1"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "field2",
      "value": "value2"
    }
  ]
}
```

### Embedding Data with Namespaces

To embed data structures from other standards (like glTF, USD, CityJSON, etc.) or use properties defined outside Schema.org, use **namespaces** defined in the `@context`.

**Simple Namespace Usage:** Prefix the property name with the namespace defined in the `@context`. This is suitable for occasional namespaced properties.

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "gltf": "https://www.khronos.org/gltf/" // Define glTF namespace
  },
  "@type": "CreativeWork",
  "name": "Asset with glTF Material Info",
  // Prefixed property from the glTF namespace:
  "gltf:materials": [
    {
      // Note: types within embedded data often don't need explicit @type
      // IF the structure is defined by the external standard itself.
      // Check specific standard's embedding guidelines.
      "name": "Metal",
      "pbrMetallicRoughness": {
        "metallicFactor": 1.0,
        "roughnessFactor": 0.5
      }
    }
  ]
}
```
_(For detailed examples of embedding data from specific standards, see the [Embedding](/embedding/overview.md) section.)_

**Advanced Namespace Handling (Inheritance Pattern):**

When embedding larger blocks of data from another standard, prefixing every property becomes verbose. A cleaner approach uses a "namespace inheritance" pattern:

1.  **Declare Namespace:** Define the namespace (e.g., `"ns1": "..."`) in the main `@context`.
2.  **Create Root Namespaced Property:** Create a single root-level property using the prefix (e.g., `"ns1:metadataBlock"`).
3.  **Declare `@type` within Block:** Inside the namespaced object, include an `@type` that *also* uses the prefix (e.g., `"@type": "ns1:MetadataType"`). The type name (`MetadataType`) should correspond to a relevant class within that namespace's specification.
4.  **Inherited Namespace:** Properties *within* this block (like `version`, `tags`) now implicitly belong to `ns1` and don't need the prefix.

**Example:**

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/",
    "ns1": "https://standard1.org/v1/",
    "ns2": "https://standard2.org/v1/"
  },
  "@type": "Product",
  "name": "Multi-standard Complex Asset",
  "description": "This is a schema.org property",
  "identifier": "PROD-12345",

  // Group ns1 properties under a namespaced object with its own ns1:@type
  "ns1:metadata": {
    "@type": "ns1:Metadata", // Type declaration using the ns1 prefix
    // Properties below inherit the "ns1" namespace implicitly
    "version": "1.0.3",
    "tags": ["stable", "verified", "production"],
    "nestedObject": {
      // Nested properties also inherit ns1
      "setting1": "enabled",
      "setting2": 42
    }
  },

  // Group ns2 properties similarly
  "ns2:technicalDetails": {
    "@type": "ns2:TechnicalSpec", // Type declaration using the ns2 prefix
    // Properties below inherit the "ns2" namespace implicitly
    "compatibility": ["Windows", "MacOS", "Linux"],
    "requirements": {
      "memory": "8GB",
      "processor": "2.4GHz"
    }
  }
}
```

**Benefits:** Reduced verbosity, clear boundaries, scalability, improved readability.

## Relationship Properties

Schema.org provides several properties to define relationships between the described entity and other resources or concepts. Understanding these is key to linking assets.

_(For a detailed guide on the strategy of linking vs. embedding and how to use these properties effectively, see the [Embedding and Reference](./embedding-and-reference.md) page - **Note: Link target will be renamed later**)_

Here's a brief overview of common relationship properties:

### hasPart
Indicates components or pieces that make up the whole (e.g., a car `hasPart` wheels, engine).

```json
// ... assumes "@context" includes "gltf": "..."
  "hasPart": [
    {
      "@type": "3DModel",
      "name": "Main Component",
      "contentUrl": "https://example.com/main.glb",
      // Can include namespaced data related to the part
      "gltf:transform": {
        "@type": "gltf:Transform",
        "scale": [1.0, 1.0, 1.0]
        // ... other transform properties
      }
    }
    // ... more parts
  ]
```

### associatedMedia
References related media content that is not strictly a 'part' (e.g., a product `associatedMedia` includes tutorial videos, texture files).

```json
  "associatedMedia": [
    {
      "@type": "VideoObject",
      "name": "Asset Preview",
      "contentUrl": "https://example.com/preview.mp4"
    }
  ]
```

### encodesCreativeWork
References creative works that are encoded *within* the described entity (e.g., a 3D model of a kiosk `encodesCreativeWork` representing the image displayed on its screen).

```json
  "encodesCreativeWork": [
    {
      "@type": "ImageObject",
      "name": "Concept Art",
      "contentUrl": "https://example.com/concept.png"
    }
  ]
```

### mainEntity
Indicates the primary subject *described by* this metadata (e.g., an `ImageObject` showing a preview might have `mainEntity` pointing to the actual `3DModel`).

```json
  "mainEntity": {
    "@type": "Person",
    "name": "Character Name"
    // ... properties of the character
  }
```

*(Other relationship properties like `subjectOf`, `sameAs`, `image`, `thumbnail`, `url` are covered in the Embedding and Reference page.)*

## Location Types

### Virtual-Only Locations
For purely virtual spaces without a direct real-world counterpart, use `CreativeWork` and add `"additionalType": "VirtualLocation"`:

```json
{
  "@context": { "@vocab": "https://schema.org/", "mvmd": "https://mvmd.org/v1/" },
  "@type": "CreativeWork",
  "additionalType": "VirtualLocation",
  "name": "Fantasy Arena",
  "description": "Floating combat arena"
  // ... other properties like capacity using additionalProperty
}
```

### Digital Twins
For digital representations of real-world places, use the Schema.org `Place` type and its properties (like `geo` for coordinates):

```json
{
  "@context": { "@vocab": "https://schema.org/", "mvmd": "https://mvmd.org/v1/" },
  "@type": "Place",
  "name": "Digital Museum",
  "description": "Digital twin of physical museum",
  "maximumAttendeeCapacity": 500,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5009,
    "longitude": -0.1774
  }
}
```

## Extension Points

MVMD provides several standard ways to extend metadata:

### Additional Properties

Use for custom data that doesn't fit standard properties:

```json
{
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "propertyID": "customMetric",
      "name": "Custom Metric",
      "value": 42
    }
  ]
}
```

## Complete Example

This comprehensive example shows many concepts working together (Note: Some properties like `contentSize`, `width`, `height`, `url` are specific to the chosen `@type`, in this case `ImageObject` representing the gallery preview image, which also acts as a `VirtualLocation`).

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/", // Remember required MVMD context
    "gltf": "https://www.khronos.org/gltf/",
    "usd": "https://openusd.org/ns/"
  },
  "@type": "ImageObject", // Primary type is the preview image
  "additionalType": "VirtualLocation", // Also represents a virtual location
  "name": "Virtual Gallery Experience",
  "description": "Interactive virtual art gallery with multiple components",
  "encodingFormat": "image/png",
  "contentSize": "3.216 MB",
  "width": 4000,
  "height": 4000,
  "url": "https://path/to/image_thumbnail.png", // URL of the image itself

  // Custom properties describing the location aspect
  "additionalProperty": [
    { "@type": "PropertyValue", "propertyID": "capacity", "name": "Maximum Attendee Capacity", "value": 100 },
    { "@type": "PropertyValue", "propertyID": "lighting", "name": "Lighting System", "value": "dynamic" },
    { "@type": "PropertyValue", "propertyID": "physics", "name": "Physics System", "value": "custom" },
    { "@type": "PropertyValue", "propertyID": "interactivity", "name": "Interactivity Level", "value": "full" }
  ],

  // Embedded data using namespace inheritance pattern
  "usd:environment": {
    "@type": "usd:Environment", // Using a hypothetical USD type
    "lighting": { "type": "dynamic", "shadows": true, "quality": "high" },
    "physics": { "type": "custom", "gravity": -9.81, "collisions": true },
    "interactivity": { "mode": "full", "gestures": ["grab", "point", "wave"] }
  },

  // Components of the gallery using hasPart
  "hasPart": [
    {
      "@type": "3DModel", "name": "Main Gallery Hall", "contentUrl": "https://example.com/hall.glb",
      "gltf:transform": { "@type": "gltf:Transform", "scale": [2.0, 1.0, 2.0], "rotation": [0, 0, 0, 1], "translation": [0, 0, 0] }
    },
    {
      "@type": "3DModel", "name": "Exhibition Wing A", "contentUrl": "https://example.com/wing_a.glb",
      "gltf:transform": { "@type": "gltf:Transform", "scale": [1.0, 1.0, 1.0], "rotation": [0, 0.707, 0, 0.707], "translation": [20, 0, 0] }
    },
    {
      "@type": "3DModel", "name": "Exhibition Wing B", "contentUrl": "https://example.com/wing_b.glb",
      "gltf:transform": { "@type": "gltf:Transform", "scale": [1.0, 1.0, 1.0], "rotation": [0, -0.707, 0, 0.707], "translation": [-20, 0, 0] }
    }
  ],

  // Associated media
  "associatedMedia": [
    { "@type": "VideoObject", "name": "Gallery Walkthrough", "contentUrl": "https://example.com/walkthrough.mp4" }
  ],

  // Encoded works (part of the gallery experience)
  "encodesCreativeWork": [
    { "@type": "ImageObject", "name": "Gallery Floor Plan", "contentUrl": "https://example.com/floorplan.png" },
    { "@type": "TextObject", "name": "Visitor Guide", "contentUrl": "https://example.com/guide.md" }
  ],

  // Main entity described by the preview image
  "mainEntity": {
    "@type": "Place",
    "name": "Virtual Modern Art Gallery",
    "description": "A contemporary art space in the metaverse",
    "additionalProperty": [
      { "@type": "PropertyValue", "propertyID": "curator", "name": "Gallery Curator", "value": "Virtual Arts Foundation" },
      { "@type": "PropertyValue", "propertyID": "exhibitions", "name": "Current Exhibitions", "value": ["Digital Realism", "NFT Showcase", "Interactive Installations"] }
    ]
  }
}
```

## Best Practices Summary

*   **Foundation:** Always include `@context` (with `@vocab` and `mvmd`) and `@type`.
*   **Types:** Choose the most appropriate Schema.org type. Use `additionalType` for specialization (like `VirtualLocation`).
*   **Values:** Use direct values for standard properties. Use `additionalProperty` + `PropertyValue` for custom data.
*   **Embedding:** Use namespaces for external standard properties or data blocks. Prefer the inheritance pattern for larger blocks.
*   **Relationships:** Use properties like `hasPart`, `associatedMedia`, `mainEntity` etc. correctly to link resources (See Embedding and Reference page).
*   **Validation:** Regularly validate your metadata against Schema.org and any relevant standards.

## Next Steps

With these fundamentals, you can explore:
-   [Types of Things](./types-of-things.md): Deep dive into specific Schema.org types.
-   [Linking vs Embedding Strategy](./linking-vs-embedding.md): Detailed guide on connecting assets and data.
-   [File Organization](./file-organization.md): How to structure your metadata files.
-   [Embedding](/embedding/overview.md): Practical examples for specific embedding use cases.
