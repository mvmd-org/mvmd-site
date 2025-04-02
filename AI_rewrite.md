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

### Step 1: Document the Current Structure [COMPLETED] ✓
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

### Step 2: Content Inventory [COMPLETED] ✓
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

Sample content inventory (partial):

| File Path | Content Type | Key Topics | Standards Referenced | Unique Information | Duplicated Information | Cross-References | Primary Audience | Status | Recommended Action |
|-----------|--------------|------------|---------------------|-------------------|------------------------|------------------|-----------------|--------|-------------------|
| namespaces/overview.md | Conceptual | Namespace principles, usage patterns | General | Namespace concept definition | Implementation patterns duplicated in implementation/ | concepts/linking-vs-embedding.md | All users | Complete | Keep, update to focus on general principles |
| namespaces/3d-standards.md | Reference, Examples | 3D standards implementation, embedding patterns | glTF, USD, VRM, USDZ | Standard-specific namespaces, URLs | Implementation examples duplicate standards-implementation.md | implementation/standards-implementation.md | Developers | Complete | Split into individual namespace files |
| namespaces/geospatial-standards.md | Reference, Examples | Geospatial data implementation | CityJSON, 3D-Tiles | Geospatial-specific properties | Some implementation patterns | implementation/standards-implementation.md | Developers | Complete | Split into individual namespace files |
| namespaces/trust-provenance.md | Reference, Examples | Content verification, authentication | C2PA | Authentication workflows | Some implementation examples | implementation/standards-implementation.md | Developers | Complete | Split into individual namespace files |
| namespaces/openxr.md | Reference, Examples | XR experiences, interactions | OpenXR, WebXR | XR-specific properties | Some implementation patterns | implementation/standards-implementation.md | Developers | Complete | Keep as individual file, reorganize |
| implementation/overview.md | Conceptual | Implementation approaches, patterns | Multiple | High-level implementation guidance | Some namespace concepts | namespaces/overview.md | Developers | Complete | Keep, update to avoid duplication |
| implementation/standards-implementation.md | Tutorial, Examples | Standards integration patterns | glTF, USD, WebXR, NFT standards | Implementation code examples | Many examples duplicate namespace files | namespaces/* | Developers | Complete | Distribute content to namespace files, then delete |
| integration-profiles/wearable.md | Reference, Examples | Wearable item metadata | glTF, Schema.org | Wearable-specific properties | Attachment system duplicates equipable.md | integration-profiles/equipable.md | Developers, Content creators | Complete | Merge with equipable.md |
| integration-profiles/equipable.md | Reference, Examples | Equipable item metadata | glTF, Schema.org | Equipment interactions | Attachment system duplicates wearable.md | integration-profiles/wearable.md | Developers, Content creators | Complete | Merge with wearable.md |
| concepts/overview.md | Conceptual | Core metadata concepts | Schema.org, JSON-LD | Overview of fundamental concepts | Some overlap with namespaces/overview.md | All concepts/* files | New users | Complete | Keep, streamline |
| concepts/metadata-fundamentals.md | Tutorial | Metadata basics | Schema.org, JSON-LD | *Empty file* | N/A | N/A | New users | Incomplete | Create content from namespace concepts |
| concepts/linking-vs-embedding.md | Conceptual | Resource reference strategies | Multiple | Decision criteria, patterns | Implementation details duplicate namespace files | namespaces/* | All users | Complete | Keep, enhance with namespace updates |
| concepts/types-of-assets.md | Reference | Asset type definitions | Schema.org | Asset categories and types | Minor overlap with implementation/assets.md | implementation/assets.md | All users | Complete | Keep, ensure alignment with implementation |
| concepts/structural-organization.md | Conceptual | Metadata organization | Schema.org | Organization principles | Some overlap with implementation best practices | implementation/best-practices.md | Developers | Complete | Keep, ensure alignment with implementation |
| introduction.md | Conceptual | Framework introduction | Multiple | High-level overview | Minor overlap with concepts/overview.md | Multiple cross-references | All users | Complete | Keep, may need updates for new structure |
| quickstart.md | Tutorial | Getting started | Schema.org | Quick implementation guide | Some overlap with implementation/getting-started.md | implementation/getting-started.md | New users | Complete | Keep, ensure alignment with new structure |
| for-standards-organizations.md | Conceptual | SDO integration | Multiple | Standards-specific guidance | Some overlap with concepts | community/sdo-integration-guide.md | Standards orgs | Complete | Keep, ensure alignment with new namespace approach |
| integration-profiles/overview.md | Conceptual | Profile purpose and structure | Multiple | Profile listing, implementation approach | Some overlap with implementation/metadata-profiles.md | Multiple cross-references | All users | Complete | Keep, update profile status and descriptions |
| implementation/metadata-profiles.md | Examples | Profile implementation examples | Schema.org, glTF | Implementation code examples | Significant overlap with individual profile pages | integration-profiles/* | Developers | Complete | Merge content into integration profiles or remove |
| integration-profiles/avatar.md | Reference, Examples | Avatar metadata structure | Schema.org, VRM | Avatar-specific properties | Some overlap with identity.md | integration-profiles/identity.md | Developers, Content creators | Complete | Consider merging with identity.md |
| integration-profiles/composable-3d-nft.md | Reference, Examples | Composable NFT metadata | Schema.org, ERC-721/1155 | NFT-specific composition properties | Some overlap with implementation/nfts.md | implementation/nfts.md | Developers | Complete | Keep, ensure references to standard-specific namespace files |
| integration-profiles/basic.md | Reference, Examples | Core metadata structure | Schema.org | Basic metadata requirements | Some overlap with implementation/getting-started.md | implementation/getting-started.md | All users | Complete | Keep as foundation for other profiles |
| integration-profiles/vehicle.md | Reference, Examples | Vehicle metadata structure | Schema.org | Vehicle-specific properties | None significant | None significant | Content creators | Complete | Keep, ensure references to standard-specific namespace files |
| implementation/nfts.md | Tutorial, Examples | NFT metadata implementation | ERC-721/1155 | NFT-specific implementation patterns | Some overlap with composable-3d-nft.md | integration-profiles/composable-3d-nft.md | Developers | Complete | Extract ERC-721/1155 namespace content, keep implementation guidance |

Content inventory analysis summary:
- The metadata-fundamentals.md file is empty and needs to be created with content from namespace concepts
- There's significant duplication between implementation/standards-implementation.md and the namespaces files
- Integration profiles for wearable and equipable have substantial overlap and should be merged
- Avatar and identity profiles have some overlap and could potentially be merged
- Concept files generally remain valuable but need updates to align with the new namespace approach
- Many files reference general categories like "3D standards" instead of specific technical standards
- implementation/metadata-profiles.md duplicates content found in the integration profiles and should be consolidated
- Several files in the implementation directory contain standard-specific information that should be moved to appropriate namespace files
- Cross-references need to be updated throughout to point to new namespace structure

Based on the content inventory, key actions needed:
1. Create individual namespace files for each technical standard
2. Populate metadata-fundamentals.md with content from namespace overview
3. Merge wearable and equipable profiles
4. Consider merging avatar and identity profiles
5. Update all cross-references to reflect new structure
6. Remove or consolidate duplicated content between implementation and namespaces
7. Ensure all examples reference specific standards rather than general categories

### Step 3: User Journey Analysis [COMPLETED] ✓
- Document 3-5 primary user personas (new user, developer, standards organization, etc.)
  - These personas have been identified in the "Key User Journeys to Consider" section:
    1. New User / First-Time Developer
    2. Implementation-Focused Developer
    3. Standards Organization Stakeholder
    4. Multi-Platform Implementer
    5. Content Creator / Asset Designer

- Map typical user journeys through the documentation for each persona
  - **New User / First-Time Developer Journey**:
    1. Entry point: Introduction page or direct link from search engines
    2. Next steps: 
       - Introduction → Core Concepts → Basic Implementation
       - Introduction → Quickstart → Basic Profile
    3. Key pages visited:
       - introduction.md
       - concepts/overview.md
       - concepts/metadata-fundamentals.md
       - quickstart.md
       - implementation/getting-started.md
       - integration-profiles/basic.md
    4. Information needs:
       - What is metadata and why is it important?
       - How to implement basic metadata
       - Simple copy-pastable examples

  - **Implementation-Focused Developer Journey**:
    1. Entry points: 
       - Direct link to specific standard implementation 
       - Search result for a specific standard
    2. Next steps:
       - Namespaces/[specific standard] → Implementation examples → Integration profiles
       - Implementation/standards-implementation → Namespaces → Integration profiles
    3. Key pages visited:
       - namespaces/3d-standards.md (looking for specific standard)
       - implementation/standards-implementation.md
       - implementation/best-practices.md
       - integration-profiles/[specific profile].md
       - reference/validator.md
    4. Information needs:
       - How to implement a specific standard
       - Best practices for implementation
       - Complete code examples
       - Validation methods

  - **Standards Organization Stakeholder Journey**:
    1. Entry points:
       - for-standards-organizations.md
       - introduction.md
    2. Next steps:
       - For Standards Organizations → Namespaces → Concepts
       - Introduction → Concepts → Namespaces
    3. Key pages visited:
       - for-standards-organizations.md
       - concepts/overview.md
       - concepts/metadata-fundamentals.md
       - namespaces/overview.md
       - community/sdo-integration-guide.md
    4. Information needs:
       - How their standard fits into MVMD
       - Technical integration approaches
       - High-level architecture

  - **Multi-Platform Implementer Journey**:
    1. Entry points:
       - implementation/overview.md
       - integration-profiles/overview.md
    2. Next steps:
       - Implementation → Integration Profiles → Platform-specific guidance
       - Integration Profiles → Implementation → Namespaces
    3. Key pages visited:
       - implementation/overview.md
       - implementation/best-practices.md
       - integration-profiles/[relevant profiles].md
       - namespaces/[relevant standards].md
    4. Information needs:
       - Cross-platform compatibility information
       - Platform-specific constraints
       - Implementation differences across platforms

  - **Content Creator / Asset Designer Journey**:
    1. Entry points:
       - introduction.md
       - integration-profiles/overview.md
    2. Next steps:
       - Introduction → Integration Profiles → Specific asset type
       - Integration Profiles overview → Specific profile
    3. Key pages visited:
       - introduction.md
       - integration-profiles/overview.md
       - integration-profiles/[specific asset type].md
       - reference/validator.md
    4. Information needs:
       - Metadata requirements for specific asset types
       - Validation tools
       - Examples for their specific content type

- Identify pain points and areas of confusion in current structure
  - **New User Pain Points**:
    - Empty metadata-fundamentals.md file leaves critical knowledge gap
    - Confusing split between implementation and namespaces content
    - Unclear which implementation approach to follow when multiple options exist
    - Examples spread across multiple locations
    - Too many cross-references before understanding the basics
  
  - **Implementation Developer Pain Points**:
    - Standard-specific information split between namespaces and implementation directories
    - Duplicated examples with slight differences cause confusion
    - Need to cross-reference multiple files to get complete implementation details
    - Unclear distinction between general categories and specific standards
    - No centralized standard-specific files for complete reference
  
  - **Standards Organization Pain Points**:
    - Unable to easily find all references to a specific standard
    - Unclear how general categories like "3D standards" relate to specific standards
    - Implementation details mixed with conceptual information
    - Difficult to understand how their standard fits into the overall architecture
  
  - **Multi-Platform Implementer Pain Points**:
    - Platform-specific information scattered across multiple files
    - Difficult to compare implementation approaches across platforms
    - Unclear which integration profiles to use in combination
    - Inconsistent structure between related profiles (e.g., wearable and equipable)
  
  - **Content Creator Pain Points**:
    - Too much technical implementation detail before getting to requirements
    - Difficult to find clear requirements for specific asset types
    - Overlapping profiles create confusion about which to follow
    - More technical details than needed for content creation tasks

- Document optimal paths for each persona in the proposed structure
  - **New User Optimal Path**:
    1. Introduction
    2. Concepts/metadata-fundamentals (enhanced with clear explanations)
    3. Quickstart with basic implementation
    4. Integration-profiles/basic
    5. Relevant integration profile for their asset type
  
  - **Implementation Developer Optimal Path**:
    1. Introduction or direct to relevant namespace
    2. Standard-specific namespace file (e.g., namespaces/gltf.md)
    3. Implementation patterns in that specific file
    4. Integration profiles relevant to their asset type
    5. Validation tools
  
  - **Standards Organization Optimal Path**:
    1. for-standards-organizations.md
    2. concepts/metadata-fundamentals.md (enhanced)
    3. Similar standard-specific namespace files
    4. Community/sdo-integration-guide.md
  
  - **Multi-Platform Implementer Optimal Path**:
    1. Introduction or implementation/overview.md
    2. Standard-specific namespace files for each platform
    3. Platform-specific sections in integration profiles
    4. Cross-platform validation guidance
  
  - **Content Creator Optimal Path**:
    1. Introduction
    2. Quick navigation to relevant integration profile
    3. Clear metadata requirements in profile
    4. Validation tools
    5. Optional: standard-specific details if needed

- **Map how users interact with different technical standards documentation**
  - **Standard-Specific Interaction Patterns**:
    - **glTF**: 
      - 3D model creators need embedding patterns
      - Game developers need linking patterns and extensions
      - Platform developers need implementation details
    
    - **USD**: 
      - Scene creators need composition examples
      - Environment designers need reference patterns
      - Platform developers need format specifications
    
    - **Schema.org**:
      - All users need basic vocabulary usage
      - SEO-focused users need discovery patterns
      - Developers need property specifications
    
    - **VRM**:
      - Avatar creators need rigging specifications
      - Platform developers need animation implementations
      - Game developers need integration patterns

  - **Cross-Standard Interaction Needs**:
    - Combining glTF with VRM for animated avatars
    - Integrating Schema.org with 3D standards for discoverability
    - Implementing C2PA with other standards for authentication
    - Using OpenXR with 3D models for interactive experiences

  - **Technical Standard Implementation Paths**:
    1. Understand the standard's purpose and scope
    2. Review declaration patterns for the standard
    3. Implement linking or embedding based on use case
    4. Add standard-specific properties
    5. Validate the implementation

User journey analysis summary:
- The documentation needs clear, dedicated paths for each user type
- Standard-specific files should be created to reduce confusion and crossreferencing
- The metadata-fundamentals.md file is critical and needs to be created with comprehensive content
- Navigation should be reorganized to support the identified optimal paths
- Examples should be consolidated within standard-specific files
- Cross-references need to be updated to reflect the new structure

### Step 4: Namespace-Implementation Mapping [IN PROGRESS]
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