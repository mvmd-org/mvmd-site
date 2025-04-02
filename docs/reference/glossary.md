---
sidebar_position: 4
---

# Glossary

This glossary provides definitions for key terms used throughout the MVMD documentation.

## Core Concepts

### Metadata
Structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use, or manage digital assets.

### JSON-LD
JavaScript Object Notation for Linked Data (JSON-LD) is a method of encoding linked data using JSON. It provides a way to express Schema.org metadata using JSON syntax.

### Namespace
A container for a set of identifiers or properties that helps prevent naming conflicts. In MVMD, different standards (like Schema.org, glTF, etc.) have their own namespaces.

### Schema.org
A collaborative community project that creates, maintains, and promotes schemas for structured data on the internet, serving as the foundation for MVMD metadata.

### Embedding
Directly including metadata within a file or data structure, as opposed to linking to external metadata.

### Linking
Connecting to metadata stored in separate files through references, rather than embedding it directly.

## Metaverse Asset Types

### 3D Model
A digital representation of a three-dimensional object that can be rendered and viewed from different angles.

### Avatar
A digital representation of a user or character in a virtual environment, typically customizable and animated.

### Scene
A virtual environment or space that contains multiple assets and defines their relationships.

### Wearable
Digital items that can be worn by avatars, such as clothing, accessories, or equipment.

### Digital Twin
A virtual representation of a physical object, environment, or system that mirrors the real-world counterpart.

### Composable Asset
An asset that consists of multiple components that can be assembled, reconfigured, or customized.

## Technical Terms

### @context
In JSON-LD, the `@context` property defines the vocabulary and rules for interpreting the metadata.

### @type
In JSON-LD, the `@type` property specifies the type of the object being described, which determines available properties.

### additionalProperty
A Schema.org property used in MVMD to add custom or extended properties that aren't defined in the core Schema.org vocabulary.

### PropertyValue
A Schema.org type used to represent name-value pairs, commonly used with `additionalProperty` in MVMD.

### Integration Profile
A standardized metadata template for specific asset types or use cases that ensures interoperability.

### Validation
The process of checking metadata against schema definitions and rules to ensure its correctness and completeness.

## Metadata Properties

### contentUrl
A URL pointing to the content file or resource being described.

### encodingFormat
The MIME type or format of the content, such as "model/gltf-binary" for glTF files.

### license
The license under which the content is released, defining how it can be used, modified, or distributed.

### creator
The person or organization that created the content.

### identifier
A unique identifier for the asset, typically structured as a PropertyValue with propertyID and value.

## Standards and Formats

### glTF (GL Transmission Format)
An open standard file format for 3D scenes and models developed by the Khronos Group.

### USD (Universal Scene Description)
A framework for interchange of 3D computer graphics data developed by Pixar.

### VRM
An extension to glTF for 3D humanoid avatars, supporting facial expressions and other avatar-specific features.

### C2PA (Coalition for Content Provenance and Authenticity)
A technical standard for certifying the source and history of media content.

### MIME Type
A standard that indicates the nature and format of a file or data (e.g., "model/gltf-binary").

## Implementation Concepts

### Cross-Platform
The ability for an asset to function across different metaverse platforms, environments, or applications.

### Interoperability
The ability of different systems to work together and exchange information seamlessly.

### Portability
The ability to move assets between different environments or platforms without losing functionality.

### Discoverability
The ease with which assets can be found through search, browsing, or recommendation systems.

### Validator
A tool that checks metadata against schema definitions to ensure correctness and completeness.

## Related Resources

- [Schema Definitions](./schemas.md): Technical schema definitions
- [Schema.org Namespace](../namespaces/schema-org.md): Core vocabulary details
- [Types of Assets](../concepts/types-of-assets.md): Asset classification 