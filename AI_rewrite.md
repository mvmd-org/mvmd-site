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

### Step 4: Namespace-Implementation Mapping [COMPLETED] ✓
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

Namespace-Implementation Mapping Table (Initial Standards):

#### glTF Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/3d-standards.md | namespaces/gltf.md | Overview and use cases, Core properties and extensions | Namespace declaration pattern, External reference pattern, Embedding pattern | Complete model example with textures and animations | Use .glb format, Include only essential metadata, Compress textures, Specify accurate MIME types | Basic content reference example, Versioning example | Material properties example, Animation properties example |
| implementation/standards-implementation.md | namespaces/gltf.md | Integration with Schema.org | Complementary standards integration approach | glTF character model with materials and animations | None unique (duplicates namespace content) | None unique (duplicates namespace content) | None unique (duplicates namespace content) |
| implementation/assets.md | namespaces/gltf.md | Asset management context | None unique (covered elsewhere) | None unique (duplicates namespace content) | Model optimization guidance | None unique (duplicates namespace content) | None unique (duplicates namespace content) |
| integration-profiles/wearable.md | namespaces/gltf.md | Wearable context with glTF | None unique (covered elsewhere) | None unique (covered in profiles) | glTF format for wearables | glTF format references | None unique (covered in profiles) |

#### USD Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/3d-standards.md | namespaces/usd.md | Overview and use cases, Core components and schemas | Namespace declaration pattern, External reference pattern, Embedding pattern | Complete example with variants and references | Optimize with instancing, Use composition capabilities, Consider file size and loading performance | Basic content reference, Variant sets reference | Stage and layers embedding |
| implementation/standards-implementation.md | namespaces/usd.md | Integration with Schema.org | Complementary standards integration approach | USD architectural scene with metadata | None unique (duplicates namespace content) | None unique (duplicates namespace content) | Stage and layers example |
| implementation/composable.md | namespaces/usd.md | Composability aspects of USD | Scene composition patterns | None unique (covered elsewhere) | Composition workflow guidance | None unique (covered elsewhere) | None unique (covered elsewhere) |

#### VRM Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/3d-standards.md | namespaces/vrm.md | Overview and use cases, Core properties, VRM Extensions | Namespace declaration pattern, External reference pattern, Embedding pattern | Complete avatar example with expressions and physics | None unique (to be developed) | Basic avatar reference | Expressions and humanoid examples |
| integration-profiles/avatar.md | namespaces/vrm.md | Avatar profile context | None unique (covered in profiles) | None unique (covered in profiles) | VRM-specific avatar guidance | None unique (covered in profiles) | None unique (covered in profiles) |
| implementation/assets.md | namespaces/vrm.md | Asset management context | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) |

#### OpenXR Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/openxr.md | namespaces/openxr.md | Core components and concepts | Namespace declaration pattern, External reference pattern, Embedding pattern | Complete XR experience with detailed configuration | None specified | Basic app reference, Hardware requirements reference | Configuration data example, Input actions configuration |
| implementation/standards-implementation.md | namespaces/openxr.md | Integration with WebXR | WebXR + MVMD bridging approach | WebXR experience with embedded metadata | None unique (duplicates namespace content) | None unique (duplicates namespace content) | None unique (duplicates namespace content) |

#### C2PA Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/trust-provenance.md | namespaces/c2pa.md | Overview and use cases, Core components and concepts | Namespace declaration pattern, External reference pattern, Embedding pattern | Complete 3D asset with creation history and provenance | Ensure complete signature chains, Include all relevant editing steps, Reference source files, Provide verification services | C2PA manifest file reference, Verification service reference | Claim data embedding |
| implementation/standards-implementation.md | namespaces/c2pa.md | Integration context | None unique (covered elsewhere) | None unique (duplicates namespace content) | None unique (duplicates namespace content) | None unique (duplicates namespace content) | None unique (duplicates namespace content) |

#### CityJSON Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/geospatial-standards.md | namespaces/cityjson.md | Overview and use cases, Core properties | Namespace declaration pattern, External reference pattern, Embedding pattern | Complete urban district with semantic information | Use compression techniques, Implement proper LOD structure, Follow CityGML semantic model, Include proper metadata for coordinate reference systems | Basic asset reference, Version-specific reference | CityJSON metadata embedding |
| implementation/standards-implementation.md | namespaces/cityjson.md | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) |

#### 3D-Tiles Standard Mapping

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| namespaces/geospatial-standards.md | namespaces/3d-tiles.md | Overview and use cases, Core components and features | Namespace declaration pattern, External reference pattern, Embedding pattern | Examples specific to 3D Tiles | Best practices related to 3D Tiles implementation | Tileset reference patterns | Tileset metadata embedding |
| implementation/standards-implementation.md | namespaces/3d-tiles.md | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) |

#### NFT Standards Mapping (ERC-721/ERC-1155)

| Source File | Target File | Unique Content | Implementation Patterns | Examples to Migrate | Best Practices | Linking Examples | Embedding Examples |
|-------------|-------------|----------------|-------------------------|---------------------|----------------|------------------|-------------------|
| implementation/nfts.md | namespaces/erc721.md | NFT standards overview, Properties and integration | NFT metadata patterns | NFT Standards + MVMD integration example | NFT metadata best practices | NFT metadata reference | MVMD embedding in NFT metadata |
| implementation/standards-implementation.md | namespaces/erc721.md | Integration context | NFT integration patterns | None unique (duplicates nfts.md) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) |
| integration-profiles/composable-3d-nft.md | namespaces/erc721.md | Profile-specific implementation | None unique (covered elsewhere) | None unique (covered in profiles) | None unique (covered elsewhere) | None unique (covered elsewhere) | None unique (covered elsewhere) |

Namespace-Implementation Mapping Summary:

1. Content Distribution Pattern:
   - Most technical standard content is currently in categorized files (3d-standards.md, geospatial-standards.md, trust-provenance.md)
   - Implementation examples are duplicated between namespace files and implementation/standards-implementation.md
   - Profile-specific implementations reference standards but contain minimal unique implementation patterns

2. Content Overlap Analysis:
   - High overlap between namespaces/3d-standards.md and implementation/standards-implementation.md
   - Moderate overlap between standards implementation and various integration profiles
   - Best practices are scattered across files with inconsistent coverage across standards

3. Migration Strategy:
   - Split categorical namespace files into standard-specific files (highest priority)
   - Consolidate implementation examples from standards-implementation.md into namespace files
   - Preserve unique implementation contexts when migrating content
   - Ensure consistent structure across all standard namespace files
   - Create cross-references from integration profiles to standard namespace files

4. Linking & Embedding Examples:
   - Most standards have both linking and embedding examples already documented
   - Ensure each standard namespace file maintains complete examples of both patterns
   - Standardize example format and complexity across all standards
   - Include appropriate cross-references to other related standards

5. Implementation Gaps:
   - Several standards lack specific best practices sections
   - Inconsistent depth of implementation examples across standards
   - Integration with other standards inconsistently documented
   - Some standards lack validation guidance

### Step 5: Integration Profile Analysis [COMPLETED] ✓
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

Integration Profile Analysis Table:

| Profile Name | Purpose/Use Cases | Required Properties | Optional Properties | Overlap with Other Profiles | Completeness/Maturity | Usage Frequency | Technical Standards Referenced | Recommended Action |
|--------------|------------------|---------------------|---------------------|----------------------------|----------------------|-----------------|--------------------------------|-------------------|
| Basic | Fundamental metadata for all assets | @context, @type, name, description, identifier, creator, dateCreated, license, contentUrl, encodingFormat | version, dateModified, thumbnail, contributor, keywords, copyrightHolder, maintainer, fileSize | Foundation for all other profiles | Complete (Stable) | Very High | Schema.org | Keep as foundation |
| Wearable | Digital fashion items and wearable accessories | @type (ImageObject), category, attachmentPoint, associatedMedia | compatibility, technicalRequirements, customizationOptions, variants, animations | Significant overlap with Equipable (attachment system) | Complete (Stable) | High | Schema.org, glTF | Merge with Equipable into "Attachable Items" |
| Equipable | Tools, weapons, and equipped items | @type (3DModel), category, equipableType, handedness, attachmentPoints, interactions | physics, effects, animations, usage | Significant overlap with Wearable (attachment system) | Complete (Proposed) | High | Schema.org, glTF | Merge with Wearable into "Attachable Items" |
| Avatar | Virtual characters and user representations | @type (VirtualCharacter), avatarProperties (type, style, skeleton, measurements), animationSupport | customization, expressiveness, equipmentSupport | Some overlap with Identity (personal representation) | Complete (Stable) | Very High | Schema.org, VRM | Keep, but align with Identity |
| Identity | Cross-platform digital identity | @type (Person), identityType, privacyLevel, authentication | representation, privacy, reputation, achievements, social | Some overlap with Avatar (visual representation) | Comprehensive (Proposed) | Medium | Schema.org, DID | Keep, but align with Avatar |
| Scene | Virtual environments and spaces | @type (Place), spatialInformation, environmentSettings | interactivity, navigation, lighting, physics, audio | Minor overlap with Digital Twin (environmental aspects) | Complete (Stable) | High | Schema.org, glTF, USD | Keep as is |
| Vehicle | Transportation and vehicle assets | vehicleType, specifications, performanceMetrics | physics, controlModel, animations, interiorLayout | None significant | Complete (Proposed) | Medium | Schema.org, glTF | Keep as is |
| Composable-3D-NFT | Blockchain-linked 3D assets with composable parts | NFT metadata, hasPart elements with gltf:properties | collection, attributes, thumbnails, alternate renderings | Minor overlap with other 3D profiles | Complete (Proposed) | Medium | Schema.org, glTF, ERC-721/1155 | Keep as is |
| Digital-Twin | Physical-digital representation | physicalAsset, digitalRepresentation, sensorData | telemetry, simulation, fidelity, updateFrequency | Minor overlap with Scene (environmental aspects) | Detailed (Proposed) | Low | Schema.org, glTF, IoT standards | Keep as is |
| Royalty | Revenue and rights management | rightsOwner, paymentDetails, revenueModel | splits, tiers, restrictions, transferRights | None significant | Detailed (Proposed) | Medium | Schema.org, ERC-2981 | Keep as is |
| Interactable | Interactive objects and elements | interactionType, triggers, responses | behavior, state, conditions, feedback | Some overlap with Equipable (interactions) | Minimal (Proposed) | Low | Schema.org, JSON-LD | Keep but enhance with Equipable interaction patterns |
| Future | Upcoming profile types | N/A | N/A | N/A | Planning | N/A | N/A | Keep as planning document |

Integration Profile Analysis Findings:

1. **Profile Maturity Assessment**:
   - Most mature profiles: Basic, Wearable, Avatar, Scene
   - Intermediate maturity: Equipable, Composable-3D-NFT, Vehicle
   - Early stage: Identity, Digital-Twin, Royalty, Interactable

2. **Content Overlap Analysis**:
   - Highest overlap: Wearable and Equipable (attachment system, 3D model requirements)
   - Moderate overlap: Avatar and Identity (representation and personalization)
   - Minor overlaps: Interactable with Equipable, Digital-Twin with Scene

3. **Technical Standards Coverage**:
   - Schema.org is used by all profiles (core vocabulary)
   - glTF is referenced in most 3D-related profiles
   - Specialized standards (VRM, ERC-721/1155, DID) have limited presence
   - Some standards referenced in profiles are not yet represented as namespaces

4. **Recommended Actions**:
   - **Merge Wearable and Equipable profiles** into a consolidated "Attachable Items" profile
   - **Keep but align Avatar and Identity** profiles for consistent representation
   - **Enhance Interactable** with patterns from Equipable
   - **Maintain Basic profile** as the foundation
   - **Keep other profiles separate** due to their unique purposes

5. **Profile Consistency Issues**:
   - Inconsistent property naming across profiles
   - Varying levels of detail in examples and requirements
   - Inconsistent use of @type values
   - Varying approaches to referencing technical standards
   - Inconsistent use of additionalProperty pattern

6. **Implementation Gaps**:
   - Limited validation rules in some profiles
   - Inconsistent cross-referencing between profiles
   - Varying levels of example completeness
   - Limited guidance on combining multiple profiles

7. **Profile Restructuring Priorities**:
   - Address Wearable/Equipable merger first (highest overlap)
   - Establish consistent pattern for technical standard references
   - Standardize property naming conventions
   - Create clear guidance for profile combinations
   - Ensure all profiles reference appropriate standard-specific namespace files

### Step 6: Link and Reference Analysis [COMPLETED] ✓
- Document all internal links between files
- Identify potential broken links after restructuring
- Create mapping of old URLs to new URLs
- Plan for redirects or updates to maintain link integrity
- **Map references to technical standards across documentation**

#### Link Analysis Table

| Source File | Target Files | Link Type | Number of Links | Potential Impact |
|-------------|--------------|-----------|----------------|------------------|
| docs/introduction.md | concepts/overview.md, integration-profiles/basic.md, reference/validator.md, namespaces/overview.md, implementation/overview.md, implementation/best-practices.md, for-standards-organizations.md | Internal Navigation | 12+ | Medium - Home page has numerous crucial links |
| docs/quickstart.md | introduction.md | Redirect | 1 | Low - Currently redirecting to introduction.md |
| docs/namespaces/overview.md | schema-org.md, 3d-standards.md, geospatial-standards.md, trust-provenance.md, concepts/linking-vs-embedding.md | Index to Namespaces | 5+ | High - Primary navigation to namespace files |
| docs/namespaces/schema-org.md | concepts/metadata-fundamentals.md, concepts/types-of-assets.md, concepts/linking-vs-embedding.md | Reference | 3+ | Medium - Links to conceptual information |
| docs/namespaces/3d-standards.md | concepts/metadata-fundamentals.md, concepts/types-of-assets.md, concepts/linking-vs-embedding.md | Reference | 3+ | High - Contains content for multiple standards |
| docs/namespaces/geospatial-standards.md | concepts/metadata-fundamentals.md, concepts/types-of-assets.md, concepts/linking-vs-embedding.md | Reference | 3+ | High - Contains content for multiple standards |
| docs/namespaces/trust-provenance.md | concepts/metadata-fundamentals.md, concepts/types-of-assets.md, concepts/linking-vs-embedding.md | Reference | 3+ | High - Contains content for multiple standards |
| docs/namespaces/openxr.md | concepts/metadata-fundamentals.md, concepts/types-of-assets.md, concepts/linking-vs-embedding.md | Reference | 3+ | Medium - Already a standard-specific file |
| docs/implementation/overview.md | assets.md, nfts.md, composable.md, best-practices.md, getting-started.md, reference/validator.md, concepts/*.md, namespaces/*.md | Implementation Index | 15+ | High - Primary navigation to implementation documents |
| docs/implementation/assets.md | namespaces/3d-standards.md, namespaces/schema-org.md, namespaces/trust-provenance.md, concepts/*.md, namespaces/*.md | Implementation Reference | 10+ | Medium - References standards that will be split |
| docs/implementation/standards-implementation.md | integration-profiles/overview.md, concepts/*.md, namespaces/*.md | Standards Reference | 10+ | Very High - Contains duplicated content and many links |
| docs/implementation/nfts.md | concepts/types-of-assets.md, integration-profiles/overview.md, nft/concepts.md, nft/examples.md, namespaces/*.md | NFT Reference | 8+ | Medium - Contains ERC-721 content to be extracted |
| docs/implementation/composable.md | composable/*.md, concepts/linking-vs-embedding.md, namespaces/*.md | Composable Reference | 7+ | Medium - References standards that will be split |
| docs/implementation/best-practices.md | concepts/metadata-fundamentals.md, concepts/types-of-assets.md, reference/validator.md, namespaces/*.md | Best Practices | 8+ | Medium - References that need updating |
| docs/implementation/getting-started.md | reference/validator.md, integration-profiles/overview.md, best-practices.md, namespaces/overview.md, composable.md, namespaces/*.md | Getting Started | 10+ | Medium - Important for new users |
| docs/implementation/metadata-profiles.md | concepts/types-of-assets.md, integration-profiles/overview.md, reference/validator.md, namespaces/*.md | Profiles Reference | 8+ | High - Contains redundant content |
| docs/integration-profiles/overview.md | basic.md, avatar.md, wearable.md, scene.md, vehicle.md, composable-3d-nft.md, digital-twin.md, identity.md, equipable.md, interactable.md, royalty.md, future.md, reference/validator.md, concepts/types-of-assets.md, namespaces/overview.md, implementation/best-practices.md, namespaces/*.md | Profiles Index | 20+ | High - Primary navigation to integration profiles |
| docs/integration-profiles/avatar.md | basic.md, wearable.md, identity.md, namespaces/3d-standards.md | Avatar Profile | 4+ | Medium - References VRM standard |
| docs/integration-profiles/wearable.md | namespaces/3d-standards.md | Wearable Profile | 1+ | Medium - Will merge with equipable.md |
| docs/integration-profiles/equipable.md | namespaces/3d-standards.md | Equipable Profile | 1+ | Medium - Will merge with wearable.md |
| docs/integration-profiles/identity.md | avatar.md, namespaces/trust-provenance.md, reference/validator.md | Identity Profile | 3+ | Medium - References DID standard |
| docs/integration-profiles/composable-3d-nft.md | namespaces/3d-standards.md, scene.md, avatar.md, reference/validator.md, namespaces/schema-org.md, namespaces/trust-provenance.md | Composable NFT Profile | 6+ | Medium - References multiple standards |
| docs/integration-profiles/basic.md | concepts/types-of-assets.md, concepts/metadata-fundamentals.md, namespaces/schema-org.md | Basic Profile | 3+ | Medium - Foundation for other profiles |
| Other Integration Profiles | Various | Various | Varies | Medium - References to standards and other profiles |

#### Old URL to New URL Mapping

| Old URL | New URL | Type | Notes |
|---------|---------|------|-------|
| /namespaces/3d-standards.md#gltf | /namespaces/gltf.md | Standard Extraction | glTF section moves to dedicated file |
| /namespaces/3d-standards.md#usd | /namespaces/usd.md | Standard Extraction | USD section moves to dedicated file |
| /namespaces/3d-standards.md#vrm | /namespaces/vrm.md | Standard Extraction | VRM section moves to dedicated file |
| /namespaces/geospatial-standards.md#cityjson | /namespaces/cityjson.md | Standard Extraction | CityJSON section moves to dedicated file |
| /namespaces/geospatial-standards.md#3d-tiles | /namespaces/3d-tiles.md | Standard Extraction | 3D Tiles section moves to dedicated file |
| /namespaces/trust-provenance.md#c2pa | /namespaces/c2pa.md | Standard Extraction | C2PA section moves to dedicated file |
| /namespaces/trust-provenance.md#did | /namespaces/did.md | Standard Extraction | DID section moves to dedicated file |
| /implementation/nfts.md | /namespaces/erc721.md | Standard Extraction | ERC-721 content moving to namespace |
| /integration-profiles/wearable.md | /integration-profiles/attachable.md | Profile Merge | Merged with equipable.md |
| /integration-profiles/equipable.md | /integration-profiles/attachable.md | Profile Merge | Merged with wearable.md |
| /implementation/standards-implementation.md | Multiple namespace files | Content Distribution | Content distributed to relevant namespace files |
| /implementation/metadata-profiles.md | Various integration profile files | Content Distribution | Content merged into relevant profiles |

#### Technical Standards Reference Mapping

| Technical Standard | Primary File | Secondary References | Implementation Examples | Notes |
|-------------------|--------------|----------------------|-------------------------|-------|
| Schema.org | namespaces/schema-org.md | All files | integration-profiles/basic.md | Core vocabulary used throughout |
| glTF | namespaces/3d-standards.md#gltf | implementation/standards-implementation.md, integration-profiles/wearable.md, integration-profiles/avatar.md, integration-profiles/composable-3d-nft.md | implementation/standards-implementation.md | To be moved to gltf.md |
| USD | namespaces/3d-standards.md#usd | implementation/standards-implementation.md, implementation/composable.md | implementation/standards-implementation.md | To be moved to usd.md |
| VRM | namespaces/3d-standards.md#vrm | integration-profiles/avatar.md | namespaces/3d-standards.md | To be moved to vrm.md |
| CityJSON | namespaces/geospatial-standards.md#cityjson | implementation/standards-implementation.md | namespaces/geospatial-standards.md | To be moved to cityjson.md |
| 3D Tiles | namespaces/geospatial-standards.md#3d-tiles | implementation/standards-implementation.md | namespaces/geospatial-standards.md | To be moved to 3d-tiles.md |
| C2PA | namespaces/trust-provenance.md#c2pa | integration-profiles/royalty.md, integration-profiles/identity.md | namespaces/trust-provenance.md | To be moved to c2pa.md |
| DID | namespaces/trust-provenance.md#did | integration-profiles/identity.md | namespaces/trust-provenance.md | To be moved to did.md |
| OpenXR | namespaces/openxr.md | implementation/standards-implementation.md | namespaces/openxr.md | Already in dedicated file |
| ERC-721/1155 | implementation/nfts.md | integration-profiles/composable-3d-nft.md | implementation/nfts.md | To be moved to erc721.md |

#### Link Integrity Preservation Plan

1. **Redirection Strategy**:
   - Create redirect files for all renamed or moved content
   - Implement HTML meta redirects from old URLs to new URLs
   - Update all direct links throughout documentation to point to new locations
   - Add explicit notes about moved content with links to new locations

2. **Link Update Process**:
   - Phase 1: Create all new standard-specific namespace files
   - Phase 2: Update all references to these standards in other files
   - Phase 3: Remove or redirect original categorized files once all content is migrated
   - Phase 4: Implement redirects for merged profiles (wearable/equipable)

3. **Critical Path Links**:
   - Introduction page links should be prioritized for updates
   - Links from integration profiles to standards must be updated immediately when standards content moves
   - Navigation sidebar structure must be updated to reflect new organization
   - Overview page links need comprehensive updates to reflect new hierarchy

4. **Standards Reference Consistency Plan**:
   - Create a consistent URL pattern for all standards (e.g., namespaces/[standard-name].md)
   - Update all implementation examples to reference the specific standard file
   - Ensure all profiles reference the specific standard files rather than category files
   - Update internal linking in implementation files to point to standard-specific files
   - Replace all references to general categories with specific standards where appropriate

5. **Documentation Completeness Check**:
   - Develop a link validation script to detect broken internal links
   - Validate all cross-references after restructuring
   - Ensure every standard referenced in examples links to its proper documentation
   - Verify no orphaned pages exist after restructuring
   - Create a comprehensive sitemap reflecting the new structure

Link Analysis Summary:

1. The restructuring will have a major impact on documentation links, with approximately 150+ internal links affected.
2. The highest impact will be on splitting categorized namespace files into standard-specific files.
3. Critical navigation paths from introduction, concepts, and overview pages must be carefully maintained.
4. Integration profiles will need significant updates to reference proper standard-specific files.
5. Implementation examples must be coordinated with namespace changes to maintain consistency.
6. Content distribution from standards-implementation.md will require careful tracking of all examples and references.
7. The proposed redirects and link updates will help maintain documentation integrity during the transition.

### Step 7: Validation Criteria Development [IN PROGRESS]
- Develop checklist for content preservation
- Create test cases for key user journeys
- Define success criteria for the restructuring
- **Create standards-specific validation criteria for each namespace**
- Establish metrics for documentation quality and completeness

#### Content Preservation Checklist

| Content Type | Validation Criteria | Priority | Verification Method |
|--------------|---------------------|----------|---------------------|
| Core Concepts | All fundamental metadata concepts preserved and enhanced | Critical | Manual review of concepts/*.md files |
| Technical Standard Documentation | Complete documentation for each standard with no information loss | Critical | Diff comparison between original and new content |
| Implementation Examples | All unique code examples preserved with proper context | High | Code extraction and comparison tool |
| Best Practices | All guidance preserved and properly associated with relevant standards | High | Manual review with checklist |
| Integration Profiles | All profile requirements and examples preserved | High | JSON schema validation of examples |
| User Guidance | All usage instructions and guidance preserved | Medium | User journey testing |
| Cross-References | All valuable cross-references maintained or enhanced | Medium | Link validation script |
| Diagrams & Visualizations | All visual elements preserved with proper context | Medium | Manual review |
| External References | All citations and external links maintained | Low | Automated link checker |

#### Key User Journey Test Cases

| User Type | Journey Description | Test Steps | Success Criteria |
|-----------|---------------------|------------|------------------|
| New User | First-time metadata implementation | 1. Start at Introduction<br>2. Navigate to Core Concepts<br>3. Review Metadata Fundamentals<br>4. Implement Basic Profile<br>5. Validate implementation | User can successfully create valid basic metadata without prior knowledge |
| Implementation Developer | Implementing glTF 3D model metadata | 1. Locate glTF namespace documentation<br>2. Review declaration pattern<br>3. Implement linking example<br>4. Implement embedding example<br>5. Validate against schema | Developer can produce valid glTF-referenced metadata with complete implementation |
| Standards Organization | Understanding how to integrate a standard | 1. Start at For Standards Organizations<br>2. Review metadata fundamentals<br>3. Examine similar standard implementations<br>4. Review namespace declaration patterns<br>5. Identify integration points | Standards organization can understand how to create namespace for their standard |
| Multi-Platform Implementer | Creating cross-platform avatar metadata | 1. Review Avatar profile<br>2. Examine platform-specific requirements<br>3. Implement VRM namespace references<br>4. Test on multiple platforms<br>5. Validate against schema | Implementer can create metadata that works across specified platforms |
| Content Creator | Creating wearable item metadata | 1. Locate Wearable profile<br>2. Review requirements<br>3. Implement metadata with glTF references<br>4. Validate against profile requirements<br>5. Test with validator tool | Creator can produce valid wearable metadata without deep technical knowledge |

#### Success Criteria for Restructuring

| Goal | Success Criteria | Measurement Method |
|------|------------------|-------------------|
| Reduced Content Redundancy | >80% reduction in duplicated content | Automated text similarity analysis |
| Improved Information Access | Average time to find implementation details decreased by 30% | User testing with timed tasks |
| Enhanced Standard Documentation | Each standard has complete namespace documentation | Checklist verification for sections |
| Clearer Navigation Structure | >90% of test users can find specified information | Usability testing |
| Preserved Content Integrity | No loss of unique information | Comprehensive diff comparison |
| Consistent Documentation Structure | >95% adherence to documentation templates | Template compliance check |
| Improved Cross-Referencing | All references point to correct locations | Automated link validation |
| Better User Journey Support | All test cases for key user journeys pass | User journey testing |
| Reduced Maintenance Burden | Update time for standards reduced by 40% | Time tracking for documentation updates |
| Enhanced Searchability | Search relevance improved by 25% | Search effectiveness testing |

#### Standards-Specific Validation Criteria

**Core Schema.org Namespace Validation**
- [ ] Complete explanation of Schema.org integration purpose and approach
- [ ] Documentation of all critical Schema.org types used in MVMD
- [ ] Property mappings between Schema.org and MVMD concepts
- [ ] Example JSON-LD declarations with context
- [ ] Clear extension patterns for Schema.org types
- [ ] Guidance on when to use native vs. extended properties
- [ ] Integration with other standards documentation
- [ ] Best practices for Schema.org usage in the metaverse

**glTF Namespace Validation**
- [ ] Complete explanation of glTF purpose and use cases
- [ ] Documentation of core glTF features relevant to metadata
- [ ] Namespace declaration pattern with complete JSON-LD context
- [ ] External reference pattern with glTF-specific properties
- [ ] Embedding pattern for glTF properties and extensions
- [ ] Well-documented examples for each pattern
- [ ] Integration with Schema.org and other relevant standards
- [ ] Material, texture, and animation metadata patterns
- [ ] Best practices for glTF integration
- [ ] Validation guidance for glTF references

**USD Namespace Validation**
- [ ] Complete explanation of USD purpose and use cases
- [ ] Documentation of core USD concepts relevant to metadata
- [ ] Namespace declaration pattern with complete JSON-LD context
- [ ] External reference pattern with USD-specific properties
- [ ] Embedding pattern for USD properties and schemas
- [ ] Stage and layer representation in metadata
- [ ] Variant set handling in metadata
- [ ] Composition structures and references
- [ ] Integration with other standards documentation
- [ ] Best practices for USD integration

**VRM Namespace Validation**
- [ ] Complete explanation of VRM purpose and use cases
- [ ] Documentation of core VRM features for avatars
- [ ] Namespace declaration pattern with JSON-LD context
- [ ] External reference pattern with VRM-specific properties
- [ ] Embedding pattern for VRM properties
- [ ] Humanoid structure representation
- [ ] Expression and animation metadata
- [ ] Integration with Schema.org and glTF documentation
- [ ] Best practices for avatar representation
- [ ] Validation guidance for VRM references

**OpenXR Namespace Validation**
- [ ] Complete explanation of OpenXR purpose and use cases
- [ ] Documentation of core OpenXR concepts relevant to metadata
- [ ] Namespace declaration pattern with JSON-LD context
- [ ] External reference pattern with OpenXR-specific properties
- [ ] Embedding pattern for OpenXR features
- [ ] Input and interaction metadata patterns
- [ ] Device and capability representation
- [ ] Integration with other standards documentation
- [ ] Best practices for XR metadata
- [ ] Validation guidance for OpenXR references

**C2PA Namespace Validation**
- [ ] Complete explanation of C2PA purpose and use cases
- [ ] Documentation of core C2PA concepts for content provenance
- [ ] Namespace declaration pattern with JSON-LD context
- [ ] External reference pattern with C2PA manifests
- [ ] Embedding pattern for C2PA claims and assertions
- [ ] Authentication and verification metadata patterns
- [ ] Chain of custody representation
- [ ] Integration with other standards documentation
- [ ] Best practices for provenance metadata
- [ ] Validation guidance for C2PA references

**CityJSON Namespace Validation**
- [ ] Complete explanation of CityJSON purpose and use cases
- [ ] Documentation of core CityJSON concepts for urban models
- [ ] Namespace declaration pattern with JSON-LD context
- [ ] External reference pattern with CityJSON-specific properties
- [ ] Embedding pattern for CityJSON features
- [ ] Geospatial reference system representation
- [ ] City object metadata patterns
- [ ] Integration with other standards documentation
- [ ] Best practices for urban model metadata
- [ ] Validation guidance for CityJSON references

**3D Tiles Namespace Validation**
- [ ] Complete explanation of 3D Tiles purpose and use cases
- [ ] Documentation of core 3D Tiles concepts for large datasets
- [ ] Namespace declaration pattern with JSON-LD context
- [ ] External reference pattern with 3D Tiles-specific properties
- [ ] Embedding pattern for tileset properties
- [ ] Spatial reference system representation
- [ ] Tileset metadata patterns
- [ ] Integration with other geospatial standards
- [ ] Best practices for large-scale geospatial metadata
- [ ] Validation guidance for 3D Tiles references

**ERC-721/1155 Namespace Validation**
- [ ] Complete explanation of NFT standards purpose and use cases
- [ ] Documentation of core NFT concepts relevant to metadata
- [ ] Namespace declaration pattern with JSON-LD context
- [ ] External reference pattern with NFT-specific properties
- [ ] Embedding pattern for NFT attributes and features
- [ ] Token identification and verification metadata
- [ ] Ownership and rights representation
- [ ] Integration with other standards documentation
- [ ] Best practices for NFT metadata
- [ ] Validation guidance for NFT standard references

#### Documentation Quality Metrics

| Metric | Measurement Method | Target | Rationale |
|--------|-------------------|--------|-----------|
| **Completeness** | Percentage of required sections present | >95% | Ensures comprehensive coverage |
| **Accuracy** | Error rate in technical information | <2% | Maintains technical integrity |
| **Consistency** | Adherence to style and terminology guidelines | >90% | Provides unified experience |
| **Clarity** | Readability score (Flesch-Kincaid) | 45-55 | Appropriate for technical documentation |
| **Example Quality** | Percentage of examples that validate | 100% | Ensures usable reference code |
| **Cross-Reference Integrity** | Percentage of valid internal links | 100% | Maintains navigation paths |
| **Structure Adherence** | Compliance with document templates | >95% | Ensures predictable organization |
| **User Task Support** | Success rate for common user tasks | >90% | Confirms practical usability |
| **Search Relevance** | First-page hit rate for key terms | >80% | Supports discoverability |
| **Update Recency** | Examples updated within 6 months | >90% | Ensures continued relevance |

#### Validation Implementation Plan

**Pre-Implementation Validation:**
1. Create checklist spreadsheet with all validation criteria
2. Establish baseline metrics for current documentation
3. Map all unique content to be preserved
4. Identify high-risk content areas requiring special attention

**During Implementation Validation:**
1. Use content preservation checklist at each step
2. Validate each namespace file against standards-specific criteria
3. Track all content moves and transformations
4. Regularly test user journeys on in-progress documentation

**Post-Implementation Validation:**
1. Complete full validation against all established criteria
2. Conduct A/B testing with current and new documentation structures
3. Run automated tests for link integrity and example validation
4. Perform user acceptance testing with representatives from each persona group
5. Measure final metrics against targets and document results

This comprehensive validation framework will ensure the documentation restructuring preserves all valuable content while improving organization, reducing redundancy, and enhancing the user experience for all user types. It provides clear, measurable criteria for success and specific checkpoints for each technical standard's documentation.

#### Documentation Restructuring Risk Assessment

| Risk | Probability | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| Content loss during restructuring | Medium | Critical | Complete content inventory and validation after each step |
| Broken navigation paths | High | High | Comprehensive link validation and redirection plan |
| Inconsistent standard documentation | Medium | High | Strict template adherence and review process |
| Incomplete user journeys | Medium | High | User journey testing throughout implementation |
| Degraded search effectiveness | Low | Medium | Search term verification and metadata enhancement |
| Implementation errors in examples | Medium | High | Automated validation of all code examples |
| Confusion during transition | High | Medium | Clear communication and temporary guidance |
| Profile inconsistency after mergers | Medium | Medium | Detailed mapping of all profile requirements before merging |
| Standards version compatibility issues | Low | Medium | Version documentation and backward compatibility notes |
| Documentation drift after restructuring | Medium | Medium | Maintenance plan and update documentation |

The validation criteria and metrics established in this phase will guide the entire implementation process and provide clear measures of success for the restructuring initiative.

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