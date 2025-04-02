# MVMD Documentation Restructuring Plan

This document outlines the plan to restructure the MVMD documentation to make it more user-friendly, consistent, and maintainable.

## Purpose

The purpose of this restructuring is to streamline the MVMD documentation by reducing redundancy and improving clarity while preserving all essential content. The current structure has significant content overlap between implementation, standards, and integration profiles sections.

## High-Level Restructuring Plan

The restructuring will consolidate implementation details into standard files, with each technical standard (like glTF, USD, VRM, OpenXR) having its own dedicated standard document. This approach will:

1. Reduce duplication between implementation and standard-specific content
2. Create clearer pathways for different user types
3. Ensure comprehensive coverage of each standard
4. Simplify maintenance by centralizing standard-specific information

## Important Notes

- Only specific technical standards will be represented as standards (e.g., glTF, USD, VRM, OpenXR)
- General categories (like 3D, Geospatial, etc.) will not have dedicated standard files
- Implementation guides will be reorganized around use cases rather than standards
- Integration profiles will be consolidated where there is significant overlap

## Key User Journeys

### New Users (Developer with no prior knowledge)
- **Needs**: Understanding of basic concepts, quickstart guide, simple examples
- **Entry Point**: concepts/overview.md
- **Path**:
  - Read basic concepts (metadata-fundamentals.md)
  - Browse implementation guides for relevant use case
  - Follow step-by-step implementation examples
  - Examine integration profile for specific asset type
  - Reference standard documentation as needed

### Developers (Some familiarity with metadata)
- **Needs**: Specific implementation details, standard integration, advanced features
- **Entry Point**: implementation/overview.md or profile-specific page
- **Path**:
  - Review integration profile for specific asset type
  - Follow implementation guide for specific use case
  - Reference standard documentation for technical details
  - Validate implementation against requirements

### Standards Organizations (Looking to integrate)
- **Needs**: Understanding how to integrate new standards, reference existing patterns
- **Entry Point**: standards/overview.md
- **Path**:
  - Review existing standard implementations
  - Examine standard namespace integration patterns
  - Explore validation requirements
  - Create standard integration proposal

### Content Creators (Asset Creation)
- **Needs**: Profile requirements, validation tools, best practices
- **Entry Point**: profiles/overview.md
- **Path**:
  - Identify relevant profile for asset type
  - Review required and optional properties
  - Check specific standard requirements if applicable
  - Validate asset metadata against requirements

## Content Inventory Analysis

| File | Content Type | Key Topics | Duplication | Recommendation |
|------|--------------|------------|-------------|----------------|
| concepts/overview.md | Concept | Core concepts | Minimal | Update to reflect new structure |
| concepts/metadata-fundamentals.md | Concept | Empty | N/A | Create content |
| concepts/linked-data.md | Concept | Linked data principles | Minimal | Keep with minor updates |
| implementation/overview.md | Implementation | Implementation approach | Moderate | Update to focus on use cases |
| implementation/standards-implementation.md | Implementation | Standard integration | High | Merge with standard files |
| implementation/assets.md | Implementation | Asset metadata | Moderate | Update as implementation guide |
| implementation/profiles.md | Implementation | Profile overview | High | Merge with profile documents |
| standards/overview.md | Technical Standard | Standard integration | High | Update to reflect technical standards |
| standards/gltf.md | Technical Standard | glTF integration | Moderate | Expand with implementation details |
| standards/usd.md | Technical Standard | USD integration | Moderate | Expand with implementation details |
| standards/3d-standards.md | Category | 3D standards | High | Eliminate and create individual standard files |
| standards/geospatial-standards.md | Category | Geospatial | High | Eliminate and create individual standard files |
| profiles/overview.md | Profile | Profile usage | Minimal | Update to reflect merged profiles |
| profiles/wearable.md | Profile | Wearable items | High | Merge with equipable.md |
| profiles/equipable.md | Profile | Equipable items | High | Merge with wearable.md |
| profiles/avatar.md | Profile | Avatar representation | Moderate | Potential merge with identity.md |

## User Journey Analysis

### Primary User Personas

1. **New Developer**: First-time implementer of metaverse metadata
   - **Pain Points**: Confusion over where to start, overwhelmed by options
   - **Current Path**: Often starts at concepts but gets lost between implementation and standards
   - **Ideal Path**: Clear progression from concepts to implementation guides to specific standards as needed

2. **Experienced Developer**: Looking for specific implementation details
   - **Pain Points**: Fragmentation between implementation and standard-specific content
   - **Current Path**: Often bounces between implementation guides and standard documents
   - **Ideal Path**: Direct access to use case-based guides with integrated standard information

3. **Standards Organization**: Looking to integrate a new standard
   - **Pain Points**: Lack of clear guidelines for standard integration patterns
   - **Current Path**: Reviews existing standard documents but finds inconsistent patterns
   - **Ideal Path**: Clear template for standard integration with consistent examples

4. **Content Creator**: Creating assets with proper metadata
   - **Pain Points**: Difficulty determining which profiles and standards apply
   - **Current Path**: Starts with profiles but struggles to find standard-specific requirements
   - **Ideal Path**: Profile-centric view with clear references to applicable standards

## Action Plan Based on Analysis

1. **Create dedicated paths for each user type**:
   - Entry points optimized for each persona
   - Clear navigation paths through documentation
   - Contextual next steps at each stage

2. **Consolidate duplicate content**:
   - Move implementation details into standard documents
   - Merge overlapping profiles
   - Eliminate category pages in favor of specific standard pages

3. **Create missing content**:
   - Develop fundamentals content for concepts section
   - Create individual standard files for each technical standard
   - Build comprehensive validation documentation

4. **Improve cross-references**:
   - Add contextual links between related documents
   - Create "see also" sections in each document
   - Implement consistent linking patterns

## Phased Implementation

## Phase 1: Structure and Planning [COMPLETED] ✓

### Step 1: Define New Structure and Navigation [COMPLETED] ✓
- Created clear information architecture separating:
  - Core concepts (fundamental understanding)
  - Profiles (asset type requirements)
  - Standards (technical standard integration)
  - Implementation guides (practical how-to)
- Designed user journey maps for different user types:
  - New developers (entry through concepts)
  - Experienced developers (entry through implementation)
  - Standards organizations (entry through standards)
  - Content creators (entry through profiles)
- Mapped content relationships and dependencies:
  - Created hierarchy of concepts building on each other
  - Identified relationships between profiles and standards
  - Mapped implementations to profiles and standards
- Developed navigation structure based on user needs:
  - Primary navigation centered on content types
  - Secondary navigation based on relationships
  - Progressive disclosure of complexity

### Step 2: Create Content Inventory and Audit [COMPLETED] ✓
- Analyzed all existing documentation:
  - Identified content overlap and duplication
  - Assessed completeness and accuracy
  - Evaluated structure and organization
- Developed validation criteria for content quality:
  - Technical accuracy checks
  - Consistent terminology usage
  - Example correctness and validity
  - Cross-reference accuracy
- Created content gap analysis:
  - Missing fundamental concepts
  - Incomplete standard coverage
  - Profile inconsistencies
  - Implementation gaps
- Developed migration strategy for existing content:
  - Content to preserve as-is
  - Content to restructure
  - Content to merge
  - Content to create new

## Phase 2: Content Development and Migration [IN PROGRESS]

### Step 1: Create Standard-Specific Standard Files with Schema Validation [COMPLETED] ✓
- Created dedicated standard files for key standards:
  - glTF standard file with complete documentation
  - USD standard file with complete documentation
- Developed JSON Schema validation files for each standard:
  - gltf.schema.json for validating glTF standard usage
  - usd.schema.json for validating USD standard usage
- Created JSON-LD context files for semantic mapping:
  - gltf.context.jsonld for glTF standard
  - usd.context.jsonld for USD standard
- Updated 3d-standards.md overview to reference individual standard files
- Applied consistent documentation structure across standards

### Step 2: Implement Redirects and Navigation Updates [COMPLETED] ✓
- Updated sidebar navigation with new structure:
  - Reorganized sidebar.ts to reflect new architecture
  - Added implementation guides section with use case focus
  - Added documentation validation tools
- Implemented redirects for content reorganization:
  - Added @docusaurus/plugin-client-redirects to handle redirects
  - Configured redirects in docusaurus.config.ts file
- Updated sidebar navigation structure to include new standard files
- Added explicit notes about moved content with links:
  - Added content notices to 3d-standards.md 
  - Added redirects from category pages to specific standards
- Updated cross-references across all documentation

### Step 3: Apply Documentation Templates for Consistency [COMPLETED] ✓
- Applied standard templates to key documentation types:
  - Applied concept template to metadata-fundamentals.md
  - Applied profile template to wearable.md
  - Applied implementation template to assets.md
- Ensured consistent structure across document types:
  - Standardized headings and sections
  - Implemented proper front matter
  - Added cross-references between related documents
- Created comprehensive content following template guidelines:
  - Added clear explanations 
  - Included practical implementation examples
  - Added troubleshooting guidance
  - Listed related documents and next steps
- Preserved all existing content while improving organization

### Step 4: Restructure Implementation Guides Based on Use Cases [COMPLETED] ✓
- Reorganized implementation guides based on use cases:
  - Reviewed existing cross-platform-assets.md implementation guide
  - Reviewed existing interactive-assets.md implementation guide
  - Reviewed existing discovery-optimization.md implementation guide
- Created implementation guide template for consistency:
  - Created templates/implementation-guide-template.md
  - Documented standard sections for implementation guides
- Updated implementation/overview.md to use consistent terminology:
  - Changed "Related Namespaces" section to "Related Standards"
  - Ensured consistent navigation between guides
- Verified all implementation guides follow consistent structure:
  - Each guide covers specific use cases 
  - Each guide provides step-by-step implementation workflow
  - Each guide includes complete examples and variations
  - Each guide links to related standards and concepts

### Step 5: Update Profile Templates and Documentation [PLANNED]
- Apply consistent template across all profiles:
  - Purpose and use cases
  - Required properties
  - Optional properties
  - Implementation examples
  - Validation requirements
  - Related profiles and extensions
- Merge overlapping profiles:
  - Combine wearable.md and equipable.md into attachable.md
  - Consider merging avatar.md and identity.md based on content analysis
- Update cross-references to standard-specific files
- Create JSON Schema validation files for each profile