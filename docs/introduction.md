---
sidebar_position: 1
---

# Introduction

The Metaverse Metadata Directory (MVMD) is an integration framework that connects existing metadata standards to create interoperable, rich descriptions of digital assets for the metaverse.

## What is MVMD?

MVMD is a bridge between standards, not a new competing standard. It provides a cohesive way to implement multiple standards together while maintaining compatibility and discoverability across platforms.

## Why MVMD Is Needed

Today's metaverse assets often require capabilities from multiple standards:
- A virtual character might need **glTF** for the model, **VRM** for avatar functionality, and **C2PA** for authentication
- A virtual environment might combine **USD** for scene composition with **CityJSON** for urban features
- Both need **Schema.org** compatibility for basic discoverability

Without a unified approach, developers face namespace conflicts, inconsistent implementation patterns, and complex validation requirements.

## What MVMD Provides

- **Core Concepts**: Fundamental patterns for metadata organization
- **Namespaces**: Clear guidance on integrating different standards
- **Implementation Patterns**: Practical implementation steps
- **Integration Profiles**: Ready-to-use templates for common asset types
- **Validation Tools**: Utilities to ensure proper implementation

## Core Approach

MVMD uses Schema.org and JSON-LD as its foundation because:
- It's widely adopted and understood
- It provides a flexible structure
- It supports namespacing and extensions
- It's compatible with search engines and discovery tools

## Getting Started Based on Your Role

### For Content Creators
1. Start with [Core Concepts](./concepts/overview.md) to understand the basics
2. Use [Integration Profiles](./integration-profiles/basic.md) for your first implementation
3. Validate your metadata using our [tools](./reference/validator.md)

### For Developers
1. Begin with [Core Concepts](./concepts/overview.md) for fundamentals
2. Explore [Namespaces]../standards/overview.md) for standard integration
3. Study [Implementation Patterns](./implementation/overview.md) for practical guidance
4. Reference [Integration Profiles](./integration-profiles/overview.md) for standard templates

### For Platform Owners
1. Review [Implementation](./implementation/overview.md) guidance
2. Implement [Best Practices](./implementation/best-practices.md)
3. Adopt [Integration Profiles](./integration-profiles/overview.md) for your platform

### For Standards Organizations
1. Read [For Standards Organizations](./for-standards-organizations.md) for specific guidance
2. Explore how your standard can be integrated in the [Namespaces]../standards/overview.md) section

## Documentation Structure

Our documentation is organized to help you find information quickly:

- **[Core Concepts](./concepts/overview.md)**: Fundamental principles and patterns
- **[Namespaces]../standards/overview.md)**: Standards integration and embedding 
- **[Implementation](./implementation/overview.md)**: Practical implementation guidance
- **[Integration Profiles](./integration-profiles/overview.md)**: Ready-to-use templates
- **[Reference](./reference/validator.md)**: Technical details and tools

## Next Steps

Choose the path that matches your needs:

1. **Understanding the Basics**: Start with [Core Concepts](./concepts/overview.md)
2. **Implementing Quickly**: Jump to [Integration Profiles](./integration-profiles/overview.md)
3. **Integrating Standards**: Explore [Namespaces]../standards/overview.md)
4. **Validating Metadata**: Use our [Validator](./reference/validator.md)

