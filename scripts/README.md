# Documentation Validation Scripts

This directory contains scripts for validating and maintaining the MVMD documentation quality.

## Available Scripts

### Link Checker (`check-links.js`)

Validates all internal links across the Markdown documentation files, ensuring no broken references exist.

```bash
# Run the link checker
node scripts/check-links.js
```

### Format Checker (`check-formatting.js`)

Validates Markdown formatting consistency, checking for:
- Proper frontmatter with sidebar positions
- Consistent header hierarchy 
- Valid JSON in code blocks
- Common style issues

```bash
# Run the formatting checker
node scripts/check-formatting.js
```

## Adding to Continuous Integration

These scripts can be added to your CI pipeline to ensure documentation quality remains high. Here's an example workflow step:

```yaml
- name: Check documentation
  run: |
    node scripts/check-links.js
    node scripts/check-formatting.js
```

## Adding New Validation Scripts

When adding new validation scripts:

1. Create your script in the `scripts/` directory
2. Make it executable with `chmod +x scripts/your-script.js`
3. Add documentation to this README
4. Consider adding it to the CI pipeline

## Best Practices

- Run these scripts before committing documentation changes
- Fix any reported issues before submitting pull requests
- Keep scripts updated as documentation conventions evolve 