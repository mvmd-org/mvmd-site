# Documentation Standards and Templates

This document defines the standards, formats, and templates for each content type in the MVMD documentation. Following these standards ensures consistency, clarity, and proper separation of concerns across the documentation.

## Content Type Standards

### Fundamentals (Conceptual Documentation)

**Purpose**: Provide conceptual understanding and background knowledge.

**Format Requirements**:
- Begin with a clear, concise introduction of the concept
- Use plain language with minimal technical jargon
- Include diagrams or illustrations for complex concepts
- Avoid implementation details and code examples
- Link to relevant guides and reference material
- End with a summary and next steps

**Standard Structure**:
```md
# Concept Title

Brief introduction explaining what this concept is and why it matters.

## Core Principles

Explanation of foundational principles.

### Sub-principle 1

Detailed explanation with conceptual examples.

### Sub-principle 2

Detailed explanation with conceptual examples.

## Related Concepts

Explanation of how this concept relates to others.

## Summary

Brief recap of key points.

## Next Steps

Links to related guides where this concept is implemented.
```

### How-To Guides (Task-Oriented Documentation)

**Purpose**: Provide step-by-step instructions for specific tasks.

**Format Requirements**:
- Begin with a clear goal statement
- Use numbered steps for sequential procedures
- Include code snippets that can be copied
- Focus on practical outcomes rather than conceptual explanations
- Include troubleshooting tips for common issues
- End with next steps or related guides

**Standard Structure**:
```md
# How to [Accomplish Task]

Brief introduction stating what this guide helps accomplish.

## Prerequisites

- Required knowledge
- Required tools/software
- Links to prerequisite guides

## Step 1: [First Task]

Explanation of step with code example:

```json
{
  "example": "code snippet"
}
```

## Step 2: [Second Task]

Explanation of step with code example.

## Common Issues

Solutions to common problems encountered during this process.

## Next Steps

Suggestions for what to do after completing this guide.
```

### Reference Material (Information-Oriented Documentation)

**Purpose**: Provide comprehensive technical details and specifications.

**Format Requirements**:
- Begin with a clear description of what's being documented
- Use tables for property/parameter listings
- Include type information and constraints
- Document all options, parameters, or properties
- Use consistent formatting for similar elements
- Link to related guides and examples

**Standard Structure**:
```md
# [Technical Component] Reference

Brief description of this technical component.

## Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| property1 | string | Yes | Description of property1 |
| property2 | number | No | Description of property2 |

## Usage

Brief explanation of general usage patterns.

## Related Resources

Links to related guides and examples.
```

### Examples (Code Samples with Explanations)

**Purpose**: Demonstrate practical implementation through code examples.

**Format Requirements**:
- Begin with a clear description of what the example demonstrates
- Include complete, working code that can be copied
- Provide explanations for significant code sections
- Highlight best practices within the code
- End with variations or extensions of the example
- Link to related reference documentation

**Standard Structure**:
```md
# Example: [Implementing Feature]

Brief description of what this example demonstrates.

## Basic Implementation

```json
{
  "complete": "working example"
}
```

### Code Explanation

Explanation of key parts of the example.

## Variations

Alternative approaches or extensions:

```json
{
  "variation": "example"
}
```

## Related Documentation

Links to related reference material and guides.
```

### Integration Profiles (Formal Specifications)

**Purpose**: Define authoritative templates for how standards should be implemented together.

**Format Requirements**:
- Begin with a formal definition of the profile's purpose
- Include a comprehensive overview of components and relationships
- Provide clear requirements (MUST, SHOULD, MAY per RFC 2119)
- Include validation rules and constraints
- Document property requirements in detail
- Separate normative (required) from non-normative (informative) content
- End with conformance criteria

**Standard Structure**:
```md
# [Asset Type] Integration Profile

## 1. Overview

Formal definition of this profile's purpose and scope.

## 2. Normative Requirements

### 2.1 Core Components

Specification of required components.

### 2.2 Properties

| Property | Type | Requirement | Description |
|----------|------|-------------|-------------|
| property1 | string | REQUIRED | Description |
| property2 | number | OPTIONAL | Description |

### 2.3 Validation Rules

Formal validation requirements.

## 3. Implementation Guidance (Non-normative)

Implementation suggestions and best practices.

## 4. Conformance Criteria

Criteria that must be satisfied for conformance to this profile.

## 5. References

Related standards and documentation.
```

## Cross-linking Standards

1. **Link from concepts to guides**: Fundamentals should link to relevant how-to guides
2. **Link from guides to reference**: Guides should link to detailed reference material
3. **Link from reference to examples**: Reference material should link to example implementations
4. **Link from examples to profiles**: Examples should link to related integration profiles
5. **Link from profiles to reference**: Integration profiles should link to relevant reference material

## Document Metadata

All documents should include appropriate front matter:

```md
---
sidebar_position: [number]
title: [Document Title]
description: [Brief description for SEO]
---
```

## File Naming Conventions

- Use kebab-case for all filenames (e.g., `file-naming.md` not `fileNaming.md`)
- Use descriptive names that indicate content (e.g., `avatar-implementation.md` not `implementation1.md`)
- Maintain consistent naming within sections (e.g., all profile documents follow the same pattern)

## Quality Checklist

Before contributing new documentation, ensure it meets these requirements:

- [ ] Follows the appropriate template for its content type
- [ ] Uses clear, concise language
- [ ] Includes all required sections
- [ ] Contains appropriate cross-links to related content
- [ ] Follows file naming conventions
- [ ] Includes proper front matter
- [ ] Code examples are complete and functional
- [ ] Technical accuracy has been verified 