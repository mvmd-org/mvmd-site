# MVMD Documentation Restructuring Plan

## Purpose

The purpose of this restructuring plan is to streamline the MVMD documentation by reducing redundancy and improving clarity while preserving all essential content. The current structure has significant content overlap between implementation, namespaces, and integration profiles sections. 

Through this restructuring, we will consolidate implementation details into namespace files, with **each technical standard (glTF, USD, VRM, OpenXR, etc.) having its own dedicated namespace document**. This approach organizes implementation details by standard rather than by concept, reducing duplication and creating a single source of truth for each standard's implementation patterns. Each namespace document will follow a consistent structure showing how to declare the namespace, link to external files (with complete examples including URLs and hashes), and embed data directly in metadata.

**Important Note**: Only specific technical standards (glTF, USD, VRM, etc.) will be represented as namespaces. General categories like schema.org, "3D standards," "geospatial standards," or "trust and provenance" are not individual namespaces and should not have dedicated namespace files. Instead, the concepts section will cover the fundamental principles of metadata, including how to implement namespaces in the metadata-fundamentals document.

We will also simplify integration profiles and create a more intuitive information hierarchy without losing valuable information. The restructured documentation will provide clearer navigation paths for different user types (new users, developers, and standards organizations) while maintaining comprehensive coverage of all concepts.

## Key User Journeys to Consider

Understanding the different ways users interact with our documentation is essential for effective restructuring. The following key user journeys must be preserved and enhanced:

### 1. New User / First-Time Developer

**Journey Path:**
- Starts with Introduction → Core Concepts → Basic Implementation
- Needs clear progression from fundamentals to practical application
- Typically follows a linear path through the documentation

**Key Needs:**
- Clear explanation of core concepts without technical jargon
- Step-by-step getting started guides
- Basic examples that can be implemented quickly
- Visual diagrams showing relationships between concepts
- Consistent terminology and progressive disclosure of complexity

### 2. Implementation-Focused Developer

**Journey Path:**
- Often enters directly at a specific standard's namespace documentation
- Jumps between implementation examples and reference documentation
- Searches for specific use cases or patterns

**Key Needs:**
- Complete, copy-pastable examples
- Consistent structure across all standard implementations
- Clear distinctions between required and optional properties
- Troubleshooting guidance for common issues
- Cross-references to related standards when implementing complex assets

### 3. Standards Organization Stakeholder

**Journey Path:**
- Focuses on conceptual overview and alignment with existing standards
- Reviews integration approaches and extension mechanisms
- Evaluates compatibility with their own standards

**Key Needs:**
- High-level architectural overview
- Explanations of design decisions and rationale
- Clear integration patterns for combining standards
- Examples of extending the metadata model
- Technical specifications without implementation details

### 4. Multi-Platform Implementer

**Journey Path:**
- Compares implementation approaches across platforms
- Focuses on integration profiles that ensure cross-platform compatibility
- Needs to understand platform-specific constraints

**Key Needs:**
- Side-by-side comparison of implementation approaches
- Platform-specific considerations and limitations
- Validation tools to ensure cross-platform compatibility
- Examples showing the same asset implemented across platforms

### 5. Content Creator / Asset Designer

**Journey Path:**
- Primarily interested in metadata requirements for specific asset types
- Focuses on integration profiles over implementation details
- Needs to understand how metadata affects discoverability and functionality

**Key Needs:**
- Clear property requirements for each asset type
- Guidelines for enhancing asset metadata
- Tools for validating their metadata implementation
- Examples specific to their asset type

## Visualization of User Journeys

The documentation restructuring should include visualizations of these key user journeys, showing:

- Entry points to the documentation for different user types
- Typical navigation paths through the content
- Key decision points where users branch to different sections
- Cross-references between related content areas
- Progressive complexity layers that users can navigate as their needs evolve

These visualizations will help ensure our restructured documentation accommodates all essential user journeys while reducing redundancy and improving clarity.

## Phase 1: Research and Analysis

### Step 1: Document the Current Structure [IN PROGRESS]
- Map the entire documentation structure using a tree diagram
  - Current documentation structure:
    ```
    /docs
    ├── introduction.md
    ├── quickstart.md
    ├── for-standards-organizations.md
    ├── concepts/
    │   ├── overview.md
    │   ├── metadata-fundamentals.md
    │   ├── types-of-assets.md
    │   ├── structural-organization.md
    │   └── linking-vs-embedding.md
    ├── namespaces/
    │   ├── overview.md
    │   ├── schema-org.md
    │   ├── 3d-standards.md (contains glTF, USD, VRM, etc.)
    │   ├── geospatial-standards.md (contains CityJSON, 3D-Tiles, etc.)
    │   ├── trust-provenance.md (contains C2PA, etc.)
    │   └── openxr.md
    ├── implementation/
    │   ├── overview.md
    │   ├── getting-started.md
    │   ├── assets.md
    │   ├── nfts.md
    │   ├── composable.md
    │   ├── best-practices.md
    │   ├── metadata-profiles.md
    │   └── standards-implementation.md (overlaps with namespaces content)
    ├── integration-profiles/
    │   ├── overview.md
    │   ├── basic.md
    │   ├── wearable.md
    │   ├── avatar.md
    │   ├── composable-3d-nft.md
    │   ├── digital-twin.md
    │   ├── vehicle.md
    │   ├── identity.md
    │   ├── royalty.md
    │   ├── scene.md
    │   ├── equipable.md (significant overlap with wearable.md)
    │   ├── interactable.md
    │   └── future.md
    ├── reference/
    │   ├── validator.md
    │   ├── schemas.md
    │   ├── api.md
    │   └── glossary.md
    ├── community/
    │   ├── supporters.md
    │   ├── become-supporter.md
    │   ├── contributing.md
    │   ├── sdo-integration-guide.md
    │   ├── guides/
    │   │   └── content-creators.md
    │   └── supporters/
    │       ├── nftr-pro.md
    │       └── sumset-tech.md
    └── tools/
        └── validator.md
    ```
- Document all files, their sizes, and last modified dates
  - Completed initial file listing with sizes and dates
- Identify primary sections and their relationships
  - Found current organization: Introduction leads to different paths based on user type
  - Overlap found between Implementation and Namespaces sections
  - General categories (3d-standards, geospatial-standards, trust-provenance) currently treated as namespaces
  - Standards-implementation.md contains implementation details that should be moved to individual namespace files
  - Wearable.md and equipable.md have significant content overlap
- Create visualization of cross-references between sections
  - Cross-reference diagram:
    ```
    Introduction
    ↓
    Concepts ←→ Namespaces
         ↓         ↓
    Implementation ←→ Integration Profiles
         ↓
    Reference
    ```
  - Key cross-references identified:
    * Introduction links to Concepts, Namespaces, and Integration Profiles
    * Namespaces section references implementation patterns from Implementation
    * Implementation section references namespace declarations from Namespaces
    * Implementation/standards-implementation.md contains examples duplicated in namespaces files
    * Integration Profiles reference both Namespaces and Implementation details
    * Wearable and Equipable profiles have overlapping attachment point properties
- **Identify all technical standards currently covered across the documentation**
  - Comprehensive list of technical standards identified:
    * Schema.org (Basic metadata structure)
    * glTF (3D model format by Khronos Group)
    * USD (Universal Scene Description by Pixar)
    * VRM (Humanoid avatar format)
    * USDZ (USD packaged format for AR)
    * FBX (Animation and rigging format)
    * X3D (Web-based 3D graphics)
    * COLLADA (Asset exchange format)
    * OpenXR (AR/VR standard)
    * WebXR (Web-based AR/VR)
    * CityJSON (Urban environment modeling)
    * 3D-Tiles (Large-scale geospatial data)
    * C2PA (Content authentication)
    * ERC-721/ERC-1155 (NFT standards)
- **Clarify which standards should be represented as namespaces vs. general concepts**
  - Current approach incorrectly treats categories like "3D standards" as namespaces
  - Need to separate specific technical standards (glTF, USD, VRM, etc.) into individual namespace files
  - Individual files should be created for:
    * gltf.md - From content in 3d-standards.md and standards-implementation.md
    * usd.md - From content in 3d-standards.md and standards-implementation.md
    * vrm.md - From content in 3d-standards.md
    * openxr.md - Already has dedicated file, needs reorganization
    * cityjson.md - From content in geospatial-standards.md
    * 3d-tiles.md - From content in geospatial-standards.md
    * c2pa.md - From content in trust-provenance.md
    * erc721.md - From content in implementation/nfts.md
    * collada.md - From relevant content across documentation
    * x3d.md - From relevant content across documentation
    * fbx.md - From relevant content across documentation

### Step 2: Content Inventory
- Create spreadsheet with the following columns:
  - File path
  - Content type (conceptual, reference, example, etc.)
  - Key topics covered
  - **Technical standards referenced**
  - Unique information
  - Duplicated information
  - Cross-references to other files
  - Primary audience (new users, developers, standards organizations)
  - Current status/completeness
  - Recommended action (keep, move, merge, delete)

### Step 3: User Journey Analysis
- Document 3-5 primary user personas (new user, developer, standards organization, etc.)
- Map typical user journeys through the documentation for each persona
- Identify pain points and areas of confusion in current structure
- Document optimal paths for each persona in the proposed structure
- **Map how users interact with different technical standards documentation**

### Step 4: Namespace-Implementation Mapping
- Create detailed table mapping implementation content to namespace files
- **For each technical standard (glTF, USD, VRM, OpenXR, etc.), identify all related content across the documentation**
- Columns:
  - Source file (implementation directory)
  - Target file (namespace directory, e.g., `namespaces/gltf.md`, `namespaces/usd.md`, etc.)
  - Unique content to preserve
  - Implementation patterns to transfer
  - Examples to migrate
  - Best practices to incorporate
  - **Linking examples that demonstrate the standard**
  - **Embedding examples that demonstrate the standard**

### Step 5: Integration Profile Analysis
- Create table evaluating all current profiles:
  - Profile name
  - Purpose/use cases
  - Required properties
  - Optional properties
  - Overlap with other profiles
  - Completeness/maturity
  - Usage frequency/importance
  - **Technical standards referenced**
  - Recommended action (keep, merge, deprecate)

### Step 6: Link and Reference Analysis
- Document all internal links between files
- Identify potential broken links after restructuring
- Create mapping of old URLs to new URLs
- Plan for redirects or updates to maintain link integrity
- **Map references to technical standards across documentation**

### Step 7: Validation Criteria Development
- Develop checklist for content preservation
- Create test cases for key user journeys
- Define success criteria for the restructuring
- **Create standards-specific validation criteria for each namespace**
- Establish metrics for documentation quality and completeness

## Phase 2: Implementation

### Step 1: Content Backup
- Create complete backup of documentation directory
- Set up version control branch for restructuring
- Document baseline metrics for comparison

### Step 2: Update Metadata Fundamentals in Concepts Section
- **Enhance the metadata-fundamentals document in the concepts section to include:**
  - Clear explanation of what namespaces are and how they work
  - General principles for implementing namespaces in metadata
  - How to reference different technical standards
  - When to use different standards together

### Step 3: Create Standard-Specific Namespace Files
- **Create a dedicated namespace file for each technical standard:**
  - `namespaces/gltf.md` (3D model representation)
  - `namespaces/usd.md` (Complex scene composition)
  - `namespaces/vrm.md` (Humanoid avatars)
  - `namespaces/fbx.md` (Animation and rigging)
  - `namespaces/collada.md` (Asset exchange)
  - `namespaces/x3d.md` (Web-based 3D graphics)
  - `namespaces/openxr.md` (VR/AR experiences)
  - `namespaces/cityjson.md` (Urban environment modeling)
  - `namespaces/3d-tiles.md` (Large-scale geospatial data)
  - `namespaces/c2pa.md` (Content authentication)
  - Additional standards as identified in Phase 1

- **For each standard-specific namespace file, include these consistent sections:**
  1. **Standard Overview**: Brief description and key features
  2. **Namespace Declaration**: How to declare and use the namespace in metadata
  3. **Linking Implementation**: Complete examples of linking to external files with:
     - URL references
     - SHA256 hash for content verification
     - Standard-specific metadata (e.g., transforms for 3D models)
  4. **Embedding Implementation**: Examples showing how to embed data directly in JSON metadata
  5. **Implementation Patterns**: Common usage patterns and best practices
  6. **Integration with Other Standards**: How this standard works with others

- **Add relevant content from implementation files**
- **Move code examples to appropriate sections**
- **Add "Best Practices" subsection**
- **Update cross-references**
- **Verify all unique content is preserved**

### Step 4: Consolidate Integration Profiles
- Execute profile mergers based on Phase 1 analysis:
  - Merge wearable/equipable profiles
  - Combine avatar/identity profiles
  - Update example JSONs
  - Ensure property documentation is comprehensive
  - **Update profile documentation to reference the new standard-specific namespace files**
  - **Ensure examples reference standards consistently with the new namespace approach**
  - Verify no information is lost during consolidation

### Step 5: Update Navigation Structure
- Modify sidebar configuration to reflect the new structure
- Update _category_.json files
- **Organize namespaces section to group standards logically (e.g., by use case or related technology)**
- Reorganize file structure to match new hierarchy
- Verify navigation paths align with user journeys from Phase 1
- **Ensure no redundant "namespace overview" document is created**

### Step 6: Clean Up Redundant Content
- Remove redundant implementation files after content migration
- Implement redirects for removed pages
- Document all deleted files and their content disposition
- Cross-check against content inventory to ensure nothing valuable is lost
- **Verify all standard-specific implementation details have been moved to appropriate namespace files**
- **Remove any documents that incorrectly treat general categories as namespaces**

### Step 7: Fix Internal References
- Update all internal links to reflect new structure
- Verify no broken links exist
- Update cross-references between sections
- Ensure consistency in terminology and references
- **Update references to standards to point to dedicated namespace files**

### Step 8: User Journey Validation
- Test all user journeys identified in Phase 1
- Verify all critical paths are maintained
- Check for gaps in content flow
- Ensure logical progression from basic to advanced topics
- **Validate standard-specific implementation paths for developers**

### Step 9: Documentation Quality Verification
- Review all modified files for consistency
- Verify formatting and style consistency
- Check for unintended content loss
- Validate against criteria developed in Phase 1
- **Ensure each standard's namespace file follows the consistent structure**
- **Verify no redundant information exists between namespaces and concept sections**

### Step 10: SEO and Discoverability Updates
- Update meta descriptions
- Ensure proper heading hierarchy
- Check for appropriate keyword usage
- **Add standard-specific keywords to improve findability**
- Verify search functionality works with new structure

### Step 11: Final Verification and Deployment
- Conduct final review against Phase 1 content inventory
- Verify all unique content is preserved
- Test documentation site functionality
- Deploy changes to production
- Monitor user feedback and analytics post-deployment

## Verification Checkpoints

Throughout Phase 2, at each step, verify against Phase 1 data:
- ✓ All unique content preserved
- ✓ User journeys maintained or improved
- ✓ No critical information lost
- ✓ Navigation remains intuitive
- ✓ Cross-references updated correctly
- ✓ Examples remain accessible and relevant
- ✓ **Each technical standard has a complete namespace file**
- ✓ **Linking and embedding examples are comprehensive for each standard**
- ✓ **Standard-specific implementation details are preserved and enhanced**
- ✓ **No redundant information between namespaces and concepts sections**
- ✓ **Metadata fundamentals properly explain namespace implementation**

This structured approach ensures we maintain the integrity and comprehensiveness of the documentation while achieving the goals of reducing redundancy and improving clarity through standard-specific organization. 