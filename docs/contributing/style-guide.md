---
sidebar_position: 3
---

# Documentation Style Guide

This style guide establishes standards for all MVMD documentation to ensure consistency, clarity, and maintainability. All documentation contributions should adhere to these guidelines.

## Document Naming Conventions

### File Naming

- Use `kebab-case-with-hyphens.md` for all documentation files
- Keep filenames concise but descriptive
- Don't include version numbers or dates in filenames
- Don't use spaces or special characters

**Examples:**
- ✅ `avatar-profile.md`
- ✅ `cross-platform-assets.md`
- ❌ `avatar_profile.md` (uses underscores)
- ❌ `Avatar Profile.md` (uses spaces and capital letters)

### Page Titles

- Use title case for page titles (e.g., "Integration Profiles Overview")
- Keep titles concise and descriptive
- Titles should match the concept being documented
- Don't include "MVMD" in titles unless necessary for disambiguation

## Document Structure

### Front Matter

All documentation files must include appropriate front matter:

```md
---
sidebar_position: [position]
---
```

### Headings Structure

- Use a single H1 (`#`) that matches the page title
- Use H2 (`##`) for main sections
- Use H3 (`###`) for subsections
- Use H4 (`####`) for sub-subsections
- Don't skip heading levels (e.g., H2 to H4)
- Keep headings concise and descriptive

### Standard Sections

Documentation should include these standard sections as appropriate:

#### Concept Documents
1. Introduction/Overview
2. Key Concepts
3. Examples
4. Best Practices
5. Related Resources

#### Standard Documents
1. Introduction/Purpose
2. Namespace Declaration
3. Key Properties
4. Integration Examples
5. Validation
6. Best Practices
7. Related Resources

#### Profile Documents
1. Purpose and Use Cases
2. Profile Overview
3. Required Properties
4. Optional Properties
5. Standards Integration
6. Examples
7. Validation
8. Implementation Considerations
9. Common Issues
10. Related Profiles

#### Implementation Guides
1. Purpose and Use Cases
2. Prerequisites
3. Implementation Steps
4. Complete Example
5. Variations
6. Implementation Considerations
7. Common Issues
8. Related Documentation
9. Next Steps

## Writing Style

### Voice and Tone

- Use direct, clear language
- Write in present tense
- Use active voice instead of passive voice
- Address the reader directly using "you"
- Use a neutral, instructional tone

**Examples:**
- ✅ "Add the property to your metadata."
- ❌ "The property should be added to the metadata."

### Terminology Consistency

Use consistent terminology throughout the documentation:

| Preferred Term | Avoid Using |
|----------------|-------------|
| standard | namespace (when referring to technical standards) |
| profile | recipe, pattern, template |
| Schema.org | schema.org, [Schema.org](https://schema.org) |
| JSON-LD | JSON-LD format, JSON+LD |
| implementation | integration (when referring to code) |
| glTF | GLTF, gltf, GLB |
| 3D | 3d, 3-D |
| metadata | meta-data, meta data |

### Abbreviations and Acronyms

- Define abbreviations and acronyms on first use
- Don't assume familiarity with technical acronyms
- Create a glossary entry for important terms

**Example:**
"Universal Scene Description (USD) is a framework for exchanging 3D data."

## Code Examples

### JSON-LD Examples

- Format all JSON-LD with proper indentation (2 spaces)
- Include complete valid examples that can be copied and used
- Include the `@context` in all examples
- Add comments for complex or non-obvious properties

**Example:**
```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "mvmd": "https://mvmd.org/v1/"
  },
  "@type": "3DModel",
  "name": "Example Model",
  "description": "This is an example 3D model"
}
```

### Example Structure

For extensive examples, use this progressive structure:

1. **Basic Example**: Minimal valid implementation
2. **Standard Example**: Common implementation with typical properties
3. **Complete Example**: Comprehensive implementation showing all features

### Code Blocks

- Use triple backticks with language identifier for code blocks
- Use single backticks for inline code references
- Include proper language identifier for syntax highlighting:
  - `json` for JSON and JSON-LD
  - `html` for HTML
  - `javascript` for JavaScript
  - `python` for Python

## References and Links

### Internal Links

- Use relative paths for links within the documentation
- Links should be descriptive of the destination
- Check links regularly to ensure they're not broken

**Examples:**
- ✅ `[Avatar Profile](../integration-profiles/avatar.md)`
- ❌ `[click here](../integration-profiles/avatar.md)`

### External Links

- Provide complete URLs for external links
- Include descriptive link text
- Indicate if links go to third-party sites
- Consider link stability and longevity

## Visual Elements

### Tables

- Use tables for structured information
- Include headers for all columns
- Keep tables concise and readable
- Align content appropriately

**Example:**
```md
| Property | Type | Description |
|----------|------|-------------|
| name | String | Name of the asset |
| description | String | Detailed description |
```

### Lists

- Use bulleted lists for unordered items
- Use numbered lists for sequential steps or prioritized items
- Be consistent with capitalization and punctuation
- Keep list items parallel in structure

**Example:**
```md
1. Define your asset type
2. Add required properties
3. Include optional properties as needed
```

## Document Validation

Before submitting documentation, verify:

1. All links work correctly
2. Examples are valid and well-formatted
3. Terminology is consistent with this style guide
4. Front matter is present and correct
5. Headings are properly structured
6. No spelling or grammar errors
7. Code examples are properly formatted

## SEO Optimization

- Include key terms in headings and introductions
- Use descriptive, concise page titles
- Add appropriate cross-references
- Ensure examples demonstrate common use cases

## Accessibility

- Use proper heading structure for screen readers
- Provide alt text for all images
- Don't rely on color alone to convey information
- Ensure sufficient contrast for readability

## Version Management

- Document version-specific features clearly
- Use notes or callouts for version differences
- Don't include version numbers in file names
- Use footnotes for version-specific details 