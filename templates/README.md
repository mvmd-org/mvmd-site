# Documentation Templates

This directory contains standardized templates for different types of documentation pages in the MVMD project. These templates ensure consistent structure and formatting across the documentation.

## Available Templates

- **namespace-template.md**: For documenting standards and their namespaces
- **concept-template.md**: For explaining core concepts and principles
- **implementation-template.md**: For practical implementation patterns
- **profile-template.md**: For integration profiles

## How to Use These Templates

1. Copy the appropriate template to your working directory
2. Replace placeholder text (in `[BRACKETS]`) with actual content
3. Update the `sidebar_position` value to the appropriate number
4. Fill in all sections, removing any that are not applicable
5. Ensure all example JSON is valid and follows best practices
6. Update links to point to actual files in the documentation

## Template Sections

Every template includes:

- Front matter with sidebar position
- Consistent heading structure
- Placeholders for examples
- Cross-reference section
- Related concepts section

## Guidelines for Each Document Type

### Namespace Pages

- Include both linking and embedding examples
- Describe the namespace URL and prefix
- Explain standard-specific properties
- Include implementation considerations

### Concept Pages

- Focus on explaining one concept clearly
- Include only one clear example
- Explain how the concept relates to other concepts
- Include common mistakes and best practices

### Implementation Pattern Pages

- Use task-oriented headings
- Provide step-by-step instructions
- Include troubleshooting guidance
- Show complete working examples

### Integration Profile Pages

- Clearly list required and optional properties
- Explain how standards are combined
- Include validation requirements
- Provide one comprehensive example

## Documentation Standards

- Use clear, concise language
- Explain why, not just how
- Include only one example per concept
- Keep code examples minimal but complete
- Use consistent formatting throughout 