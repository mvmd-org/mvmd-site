# MVMD Documentation Restructuring Plan

This document outlines a comprehensive step-by-step plan for restructuring the MVMD documentation to eliminate redundancy, improve clarity, and create a more maintainable structure.

## Objectives

1. Consolidate redundant content
2. Create a new Namespaces section to replace the Embedding section
3. Simplify examples (one per concept)
4. Improve navigation and information hierarchy
5. Standardize document structure across sections

## Implementation Plan

### Phase 1: Content Audit and Mapping ✓

1. **Create Content Inventory** ✓
   - [x] Create a spreadsheet with the following columns:
     - File path
     - Primary topic
     - Secondary topics
     - Key concepts
     - Examples included
     - Target audience
     - Proposed action (keep, modify, consolidate, remove)
   
2. **Identify Redundant Content** ✓
   - [x] Mark duplicate explanations of concepts
   - [x] Identify overlapping examples
   - [x] List sections that explain the same concepts in different places
   
3. **Map Content Relationships** ✓
   - [x] Identify which documents reference each other
   - [x] Note circular references
   - [x] Document content dependencies

4. **Categorize Documents by New Structure** ✓
   - [x] Assign each document to its new section:
     - Introduction
     - Core Concepts
     - Namespaces
     - Implementation Patterns
     - Integration Profiles
     - Reference

### Phase 2: Create New Directory Structure

1. **Set Up Directory Framework**
   - [ ] Create `/docs/namespaces` directory for the new section
   - [ ] Create `/docs/reference` directory for technical references
   - [ ] Create `/docs/community/guides` directory for user guides (ensure parent directory exists)
   - [ ] Add placeholder files for namespace structure:
     ```
     /docs/namespaces/
       _category_.json       # Controls sidebar display
       overview.md           # Introduction to namespaces
       schema-org.md         # Schema.org + JSON-LD
       3d-standards.md       # All 3D formats (glTF, USD, etc.)
       geospatial-standards.md # Geospatial standards
       trust-provenance.md   # Authentication standards
     ```
   - [ ] Add placeholder files for reference structure:
     ```
     /docs/reference/
       _category_.json
       validator.md          # Moved from tools/
       schemas.md            # Technical schema definitions
       glossary.md           # Terminology reference
       api.md                # API documentation
     ```
   
2. **Create Template Documents**
   - [ ] Create standardized templates for each document type with the following considerations:
     - **Namespace page template**: Include sections for standard description, core properties, linking example, embedding example, implementation considerations
     - **Concept page template**: Include purpose, explanation, single clear example, relationship to other concepts
     - **Implementation pattern template**: Include task-oriented headings, practical steps, single example, troubleshooting
     - **Integration profile template**: Include purpose, required properties, optional properties, one comprehensive example, implementation considerations
   - [ ] Each template should include:
     - Standard front matter with sidebar_position
     - Consistent heading structure
     - Placeholders for examples
     - Cross-reference format
     - Related concepts section

3. **Update Category Definition Files**
   - [ ] Create or update `_category_.json` files for each directory:
     ```
     // Example for namespaces category
     {
       "label": "Namespaces",
       "position": 3,
       "link": {
         "type": "doc",
         "id": "namespaces/overview"
       }
     }
     ```

### Phase 3: Content Migration - Core Sections

1. **Streamline Introduction Section**
   - [ ] Create backup of original files before editing
   - [ ] Consolidate content from:
     - `docs/introduction.md`
     - `docs/quickstart.md` 
   - [ ] Remove redundant explanations of MVMD benefits (identified in redundancy analysis)
   - [ ] Create clear pathways to different sections based on user roles
   - [ ] Focus on essential information only
   - [ ] Ensure all cross-references use new file paths

2. **Simplify Core Concepts**
   - [ ] Create backup of original files before editing
   - [ ] Revise `docs/concepts/core-metadata-concepts.md`:
     - Remove implementation-specific details identified in our analysis
     - Focus on foundational principles
     - Include only one clear example per concept
     - Remove duplicate JSON-LD explanations that will be in schema-org.md
   - [ ] Update `docs/concepts/types-of-things.md`:
     - Simplify explanations
     - Consolidate with relevant parts from implementation docs
     - Ensure consistent terminology
     - Reference schema-org.md for more detailed information
   - [ ] Replace `docs/concepts/linking-vs-embedding.md` with simplified version:
     - Focus on decision criteria
     - Provide one clear example of each approach
     - Remove excessive technical details
     - Add references to namespace-specific implementation
   - [ ] Revise `docs/concepts/file-organization.md`:
     - Focus on practical guidelines
     - Remove redundant explanations
     - Simplify examples
     - Update references to new file structure

3. **Create Namespaces Section**
   - [ ] Write `docs/namespaces/overview.md`:
     - Explain namespace concept clearly
     - Provide guidance on namespace selection
     - Include patterns for namespace declaration
     - Reference content from embedding/overview.md
   
   - [ ] Create `docs/namespaces/schema-org.md`:
     - Brief description of Schema.org
     - Core properties/vocabulary
     - One minimal example showing both linking and embedding
     - Implementation considerations
     - Consolidate from embedding/schema/schema-org.md and embedding/schema/json-ld.md
   
   - [ ] Create `docs/namespaces/3d-standards.md`:
     - Overview of 3D standards (glTF, USD, VRM, etc.)
     - One example per standard showing both linking and embedding
     - Focus on integration patterns
     - Consolidate from embedding/3d-assets/* and examples/embedding/* files
     - Use subsections for each standard to maintain organization
   
   - [ ] Create `docs/namespaces/geospatial-standards.md`:
     - Overview of geospatial standards
     - Examples of both linking and embedding
     - Guidelines for implementation
     - Consolidate from embedding/geospatial/* and embedding/geospacial.md
   
   - [ ] Create `docs/namespaces/trust-provenance.md`:
     - Overview of trust and provenance standards
     - Examples of both linking and embedding
     - Implementation guidance
     - Consolidate from embedding/trust/c2pa.md and related content

### Phase 4: Content Migration - Implementation & Profiles

1. **Consolidate Implementation Patterns**
   - [ ] Create backup of original files before editing
   - [ ] Revise `docs/implementation/overview.md`:
     - Create task-oriented structure
     - Remove theoretical content covered in concepts
     - Focus on practical implementation scenarios
     - Use clear job-based navigation ("I want to...")
   
   - [ ] Process implementation documents in this order (to handle dependencies):
     1. `docs/implementation/getting-started.md`
     2. `docs/implementation/assets.md`
     3. `docs/implementation/nfts.md` (merge in nft/*)
     4. `docs/implementation/composable.md` (merge in composable/*)
     5. `docs/implementation/best-practices.md`
     6. Create `docs/implementation/combining-standards.md` from examples/combining-standards.md
   
   - [ ] For each implementation document:
     - Remove content that duplicates core concepts (based on redundancy analysis)
     - Focus on practical tasks and workflows
     - Include only one clear example per pattern
     - Ensure consistent terminology
     - Reference appropriate namespace pages for standard-specific details

2. **Standardize Integration Profiles**
   - [ ] Create backup of original files before editing
   - [ ] Create standard structure for all profile documents:
     - Profile purpose and use cases
     - Required properties
     - Optional properties
     - One comprehensive example
     - Implementation considerations
   
   - [ ] Update each integration profile in this order (to handle dependencies):
     1. `docs/integration-profiles/overview.md`
     2. `docs/integration-profiles/basic.md`
     3. Remaining profiles:
        - `docs/integration-profiles/avatar.md`
        - `docs/integration-profiles/scene.md`
        - `docs/integration-profiles/vehicle.md`
        - `docs/integration-profiles/wearable.md`
        - `docs/integration-profiles/composable-3d-nft.md`
        - `docs/integration-profiles/digital-twin.md`
        - `docs/integration-profiles/equipable.md`
        - `docs/integration-profiles/identity.md`
        - `docs/integration-profiles/royalty.md`
        - `docs/integration-profiles/interactable.md`
        - `docs/integration-profiles/future.md`
   
   - [ ] For each profile document:
     - Remove explanations of concepts covered elsewhere
     - Focus on profile-specific requirements
     - Ensure one clear, complete example
     - Add cross-references to relevant concepts and namespaces
     - Update references to embedding/* to point to namespace/* files

### Phase 5: Reference and Community Sections

1. **Create Reference Section**
   - [ ] Move and update validator.md from tools/ to reference/
   - [ ] Create reference/schemas.md for technical schema definitions:
     - JSON Schema definitions
     - Advanced validation patterns
     - Technical implementation details
   - [ ] Create reference/glossary.md with terms from across the documentation
   - [ ] Create reference/api.md for programmatic access documentation

2. **Organize Community Section**
   - [ ] Move contributing.md to community/contributing.md
   - [ ] Create community/guides directory if needed
   - [ ] Move guides/content-creators.md to community/guides/content-creators.md
   - [ ] Ensure all community files have consistent formatting

### Phase 6: Navigation Updates

1. **Revise Sidebar Configuration**
   - [ ] Update `sidebars.ts` to reflect new structure:
     ```typescript
     // New structure example
     const sidebars = {
       tutorialSidebar: [
         {
           type: 'doc',
           id: 'introduction',
           label: 'Introduction'
         },
         {
           type: 'doc',
           id: 'for-standards-organizations',
           label: 'For Standards Organizations'
         },
         {
           type: 'category',
           label: 'Core Concepts',
           items: [
             'concepts/overview',
             'concepts/core-metadata-concepts',
             'concepts/types-of-things',
             'concepts/linking-vs-embedding',
             'concepts/file-organization',
           ],
         },
         {
           type: 'category',
           label: 'Namespaces',
           items: [
             'namespaces/overview',
             'namespaces/schema-org',
             'namespaces/3d-standards',
             'namespaces/geospatial-standards',
             'namespaces/trust-provenance',
           ],
         },
         {
           type: 'category',
           label: 'Implementation',
           items: [
             'implementation/overview',
             'implementation/getting-started',
             'implementation/assets',
             'implementation/nfts',
             'implementation/composable',
             'implementation/combining-standards',
             'implementation/best-practices',
           ],
         },
         {
           type: 'category',
           label: 'Integration Profiles',
           items: [
             'integration-profiles/overview',
             'integration-profiles/basic',
             // Additional profiles...
           ],
         },
         {
           type: 'category',
           label: 'Reference',
           items: [
             'reference/validator',
             'reference/schemas',
             'reference/glossary',
             'reference/api',
           ],
         },
         {
           type: 'category',
           label: 'Community',
           items: [
             'community/contributing',
             // Additional community pages...
           ],
         },
       ],
     };
     ```

2. **Update Cross-References**
   - [ ] Audit all internal links to ensure they point to new file paths (can use grep to find all markdown links)
   - [ ] Fix broken references caused by file moves and consolidation
   - [ ] Update navigation paths in overview documents
   - [ ] Check for references to examples/ and embedding/ directories and update them

3. **Review Navigation Flow**
   - [ ] Test documentation flow for different user journeys:
     - New user journey
     - Developer journey
     - Standards organization journey
   - [ ] Verify logical progression from basic to advanced topics
   - [ ] Ensure consistent breadcrumb navigation

### Phase 7: Cleanup and Content Removal

1. **Create Archive of Original Content**
   - [ ] Create a backup branch in Git to preserve the original structure
   - [ ] Zip or archive all original content for reference

2. **Remove Redundant Files**
   - [ ] Verify all content has been migrated before removal (use the categorization spreadsheet as a checklist)
   - [ ] Remove entire `/docs/embedding` directory
   - [ ] Remove `/docs/examples` directory
   - [ ] Remove duplicate implementation files (nft/*, composable/*)
   - [ ] Delete any other redundant files identified in the content audit
   - [ ] Remove `/docs/introduction/concepts.md` after content distribution

3. **Clean Up Repo**
   - [ ] Remove outdated files from Git tracking
   - [ ] Update `.gitignore` if needed
   - [ ] Clean up any temporary files
   - [ ] Commit final documentation structure

### Phase 8: Review and Polish

1. **Technical Review**
   - [ ] Verify all examples work correctly
   - [ ] Check internal consistency
   - [ ] Test all links and references
   - [ ] Ensure all code examples are valid
   - [ ] Run linting/validation tools if available

2. **Editorial Review**
   - [ ] Check for consistent terminology
   - [ ] Verify consistent formatting across all pages
   - [ ] Standardize phrasing and tone
   - [ ] Remove unnecessary verbosity
   - [ ] Ensure all headings follow a consistent pattern

3. **Final Verification**
   - [ ] Build the documentation site locally
   - [ ] Check for build warnings or errors
   - [ ] Verify smooth navigation between sections
   - [ ] Test search functionality against key terms
   - [ ] Validate mobile responsiveness

### Phase 9: Namespaces Enhancement and Embedding Consolidation

1. **Expand Namespaces Section With Standard-Specific Content**
   - [ ] Create backup of current namespace files before enhancing
   - [ ] Enhance `docs/namespaces/3d-standards.md` to include dedicated subsections for each 3D standard:
     ```
     ## glTF
     - Overview and use cases
     - Core properties and extensions
     - Embedding patterns
     - External reference patterns
     - Implementation examples
     - Best practices

     ## USD (Universal Scene Description)
     - Overview and use cases
     - Core properties and extensions
     - Embedding patterns
     - External reference patterns
     - Implementation examples
     - Best practices

     ## VRM
     // Similar structure

     ## FBX
     // Similar structure

     ## Collada
     // Similar structure

     ## X3D
     // Similar structure
     ```

   - [ ] Enhance `docs/namespaces/geospatial-standards.md` with detailed subsections:
     ```
     ## CityJSON
     - Overview and use cases
     - Core properties and extensions
     - Embedding patterns
     - External reference patterns
     - Implementation examples
     - Best practices

     ## 3D Tiles
     // Similar structure
     ```

   - [ ] Enhance `docs/namespaces/trust-provenance.md` with detailed subsections:
     ```
     ## C2PA
     - Overview and use cases
     - Core properties and extensions
     - Embedding patterns
     - External reference patterns
     - Implementation examples
     - Best practices
     ```

   - [ ] Create `docs/namespaces/openxr.md` for XR-specific standards:
     ```
     # OpenXR Standards
     
     ## Overview
     - Introduction to OpenXR in metaverse metadata
     - Key use cases and applications
     
     ## Standards and Extensions
     - Core standards overview
     - Common extensions
     - Integration patterns with MVMD
     
     ## Implementation 
     - Embedding patterns
     - External reference patterns
     - Implementation examples
     - Best practices
     ```

2. **Remove Embedding Content from Other Sections**
   - [ ] Create backup of files to be modified
   - [ ] Audit all files outside the namespaces directory for embedding-specific content:
     - `docs/concepts/linking-vs-embedding.md`: Refocus on the conceptual decision, remove format-specific implementation details
     - `docs/implementation/*.md`: Remove format-specific embedding details, add references to namespaces section
     - `docs/examples/*.md`: Update to reference namespace-specific examples instead of duplicating
     - `docs/integration-profiles/*.md`: Replace embedding details with references to namespace sections

3. **Add Cross-References to Namespaces Section**
   - [ ] Update all files that previously contained embedding details to point to the namespaces section
   - [ ] Add "Related Namespaces" sections at the end of implementation documents
   - [ ] Include links to relevant namespace pages from integration profiles

4. **Create Practical Implementation Guides for Each Namespace**
   - [ ] For each standard in the namespaces section, create a practical implementation guide:
     - Step-by-step implementation instructions
     - Common pitfalls and solutions
     - Real-world example scenarios
     - Integration with other standards

5. **Update Navigation and Sidebar**
   - [ ] Update `sidebars.ts` to reflect enhanced namespaces structure
   - [ ] Ensure proper ordering and hierarchy
   - [ ] Add any new namespace pages to the navigation

6. **Validate and Test**
   - [ ] Verify all references to embedding are either removed or redirected to namespaces
   - [ ] Test navigation flow between implementation pages and relevant namespace pages
   - [ ] Ensure complete coverage of all standards mentioned in the documentation
   - [ ] Validate all examples in namespace pages

## Implementation Approach

To prevent losing context while implementing this plan, we will:

1. Complete each phase before moving to the next
2. Implement content changes in logical groups
3. Make regular commits with descriptive messages
4. Test the documentation site locally after each major change
5. Keep a log of completed tasks and pending issues
6. Use the docs_categorization.md file as the master reference for tracking progress

## Success Criteria

The restructuring will be considered successful when:

1. All documentation follows the new structure
2. No redundant content exists
3. Each concept is explained exactly once
4. Examples are minimal but complete
5. Navigation is intuitive and logical
6. Build completes without warnings or errors
7. Search functionality returns relevant results 