# Cursor Workflow for Documentation Restructuring

This document provides specific instructions for implementing the MVMD documentation restructuring within the Cursor environment. It focuses on practical techniques and commands for efficient file management, editing, and version control.

## Git Operations in Cursor

### Branch Management

All work should be done on the `restructuring` branch. Verify the current branch before making changes:

```bash
git branch
```

If you need to switch branches:

```bash
git checkout restructuring
```

### Committing Changes

After making changes to files:

1. Stage changes:
   ```bash
   git add <file-or-directory>
   ```

2. Commit with descriptive message:
   ```bash
   git commit -m "Restructure: [brief description of changes]"
   ```

3. Push changes (only when instructed by user):
   ```bash
   git push origin restructuring
   ```

### Moving Files

When moving files as part of the restructuring, use Git's `mv` command to track file history:

```bash
git mv old/path/file.md new/path/file.md
```

## Directory and File Operations

### Creating New Directories

```bash
mkdir -p docs/new/directory/path
```

The `-p` flag creates parent directories as needed.

### Listing Files and Directories

To list contents of directories:

```bash
ls -la docs/directory
```

### Finding Files

To find all markdown files:

```bash
find docs -name "*.md"
```

To search for content within files:

```bash
grep -r "search term" docs/
```

## Markdown Editing in Cursor

### Frontmatter

Ensure all Markdown files have proper frontmatter:

```markdown
---
sidebar_position: 1
title: "Document Title"
description: "Brief description for SEO"
---
```

### Code Blocks

For JSON examples, use the following format:

````markdown
```json
{
  "property": "value"
}
```
````

### Cross-linking Between Documents

Use relative paths for links between documents:

```markdown
[Link text](./relative/path/to/file.md)
```

For links to sections within the same document:

```markdown
[Link text](#section-heading-in-kebab-case)
```

## File Moving Strategy

When moving and reorganizing content, follow this workflow:

1. **Create destination directories** first
2. **Move files** using `git mv`
3. **Update frontmatter** in moved files
4. **Fix internal links** that may have broken due to file moves
5. **Commit changes** after each logical group of moves

Example sequence:

```bash
# Create destination directory
mkdir -p docs/fundamentals

# Move files
git mv docs/concepts/file.md docs/fundamentals/file.md

# Edit frontmatter and fix links
# (use Cursor's editing features)

# Commit the changes
git add docs
git commit -m "Restructure: Move concept files to fundamentals directory"
```

## Editing Sidebar Navigation

The sidebar navigation is defined in `sidebars.js` or `sidebars.ts`. When updating it:

1. Maintain the established hierarchy
2. Keep labels consistent with file names
3. Ensure all files are properly referenced
4. Test navigation after changes

## Content Restructuring Workflow

When moving content between files:

1. **Open both source and destination files** side by side
2. **Copy relevant content** from source to destination
3. **Format according to DOCUMENT_STANDARDS.md**
4. **Add cross-references** between related content
5. **Remove migrated content** from source file or replace with link
6. **Save and commit** changes

## Handling Merge Conflicts

If merge conflicts occur:

1. Identify conflicting files:
   ```bash
   git status
   ```

2. Open conflicting files and resolve markers:
   ```
   <<<<<<< HEAD
   Current branch content
   =======
   Incoming branch content
   >>>>>>> branch-name
   ```

3. After resolving, mark as resolved:
   ```bash
   git add <resolved-file>
   ```

4. Complete the merge:
   ```bash
   git commit -m "Resolve merge conflicts in [files]"
   ```

## Best Practices for Cursor

1. **Use split view** for comparing and moving content between files
2. **Utilize search functionality** to find related content
3. **Save files frequently** to avoid losing changes
4. **Preview Markdown rendering** when available
5. **Commit logical units of work** rather than many small changes
6. **Add detailed commit messages** explaining the rationale for changes

## Troubleshooting

If you encounter issues with Cursor or Git operations:

1. **Check Git status** to understand the current state
2. **Stash changes** if needed to resolve conflicts
   ```bash
   git stash
   git stash apply
   ```
3. **Verify workspace paths** are correct
4. **Review error messages** carefully before proceeding
5. **Ask for user guidance** for significant issues 