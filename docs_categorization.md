# MVMD Documentation Categorization

This document tracks the reorganization of all documentation files according to the restructuring plan. It serves as a reference for the content migration process.

## File Migration Map

| Current File | New Location | Primary Topic | Action | Notes |
|--------------|--------------|---------------|--------|-------|
| **Introduction Section** | | | | |
| docs/introduction.md | docs/introduction.md | Overview and value proposition | Modify | Consolidate with quickstart |
| docs/quickstart.md | (merged into introduction) | Getting started | Merge | Content to be integrated into introduction |
| docs/for-standards-organizations.md | docs/for-standards-organizations.md | Standards organizations benefits | Keep | Specialized audience content |
| docs/introduction/concepts.md | (distribute to core concepts) | Basic concepts | Remove | Distribute content to appropriate sections |
| **Core Concepts Section** | | | | |
| docs/concepts/overview.md | docs/concepts/overview.md | Concepts navigation | Update | Reflect new structure |
| docs/concepts/core-metadata-concepts.md | docs/concepts/core-metadata-concepts.md | Metadata fundamentals | Simplify | Focus on core principles |
| docs/concepts/types-of-things.md | docs/concepts/types-of-things.md | Schema.org types | Simplify | Remove duplicate content |
| docs/concepts/linking-vs-embedding.md | docs/concepts/linking-vs-embedding.md | Reference strategies | Focus | Emphasize decision criteria |
| docs/concepts/file-organization.md | docs/concepts/file-organization.md | File structure | Simplify | Focus on practical guidelines |
| **Namespaces Section (New)** | | | | |
| docs/embedding/overview.md | docs/namespaces/overview.md | Namespace concept | Rewrite | New focus on namespace principles |
| docs/embedding/schema/schema-org.md | docs/namespaces/schema-org.md | Schema.org | Consolidate | Merge with JSON-LD basics |
| docs/embedding/schema/json-ld.md | (merge to schema-org.md) | JSON-LD | Merge | Integrate into schema-org.md |
| docs/embedding/3d-assets/x3d.md | docs/namespaces/3d-standards.md | X3D standard | Consolidate | Merge all 3D standards into one file |
| docs/embedding/3d-assets/openxr.md | docs/namespaces/3d-standards.md | OpenXR standard | Consolidate | Merge all 3D standards into one file |
| docs/examples/embedding/gltf.md | docs/namespaces/3d-standards.md | glTF standard | Consolidate | Merge all 3D standards into one file |
| docs/examples/embedding/usd.md | docs/namespaces/3d-standards.md | USD standard | Consolidate | Merge all 3D standards into one file |
| docs/examples/embedding/vrm.md | docs/namespaces/3d-standards.md | VRM standard | Consolidate | Merge all 3D standards into one file |
| docs/examples/embedding/collada.md | docs/namespaces/3d-standards.md | COLLADA standard | Consolidate | Merge all 3D standards into one file |
| docs/examples/embedding/fbx.md | docs/namespaces/3d-standards.md | FBX standard | Consolidate | Merge all 3D standards into one file |
| docs/embedding/geospatial/3d-tiles.md | docs/namespaces/geospatial-standards.md | 3D Tiles | Consolidate | Merge geospatial standards |
| docs/embedding/geospatial/cityjson.md | docs/namespaces/geospatial-standards.md | CityJSON | Consolidate | Merge geospatial standards |
| docs/embedding/geospacial.md | docs/namespaces/geospatial-standards.md | Geospatial concepts | Consolidate | Merge geospatial standards |
| docs/embedding/trust/c2pa.md | docs/namespaces/trust-provenance.md | C2PA | Expand | Cover trust and provenance standards |
| **Implementation Patterns Section** | | | | |
| docs/implementation/overview.md | docs/implementation/overview.md | Implementation overview | Rewrite | Make task-oriented |
| docs/implementation/getting-started.md | docs/implementation/getting-started.md | Basic implementation | Focus | Remove concept overlap |
| docs/implementation/assets.md | docs/implementation/assets.md | Asset implementation | Streamline | Focus on implementation |
| docs/implementation/nfts.md | docs/implementation/nfts.md | NFT implementation | Streamline | Focus on NFT-specific aspects |
| docs/implementation/composable.md | docs/implementation/composable.md | Composable assets | Streamline | Remove conceptual overlap |
| docs/implementation/best-practices.md | docs/implementation/best-practices.md | Best practices | Simplify | Focus on practical advice |
| docs/examples/combining-standards.md | docs/implementation/combining-standards.md | Multi-standard usage | Move | Move to implementation section |
| docs/implementation/composable/assembly-patterns.md | (merge to composable.md) | Assembly patterns | Consolidate | Merge into main composable file |
| docs/implementation/composable/concepts.md | (merge to composable.md) | Composable concepts | Consolidate | Merge into main composable file |
| docs/implementation/composable/schema-parts.md | (merge to composable.md) | Schema parts | Consolidate | Merge into main composable file |
| docs/implementation/nft/concepts.md | (merge to nfts.md) | NFT concepts | Consolidate | Merge into main NFTs file |
| docs/implementation/nft/examples.md | (merge to nfts.md) | NFT examples | Consolidate | Merge into main NFTs file |
| docs/implementation/standards-implementation.md | (distribute to namespaces) | Standards usage | Remove | Distribute to namespace pages |
| docs/implementation/metadata-profiles.md | (remove) | Profile overview | Remove | Redundant with integration profiles |
| **Integration Profiles Section** | | | | |
| docs/integration-profiles/overview.md | docs/integration-profiles/overview.md | Profiles overview | Update | Reflect standardized structure |
| docs/integration-profiles/basic.md | docs/integration-profiles/basic.md | Basic profile | Standardize | Follow standard format |
| docs/integration-profiles/avatar.md | docs/integration-profiles/avatar.md | Avatar profile | Standardize | Follow standard format |
| docs/integration-profiles/scene.md | docs/integration-profiles/scene.md | Scene profile | Standardize | Follow standard format |
| docs/integration-profiles/vehicle.md | docs/integration-profiles/vehicle.md | Vehicle profile | Standardize | Follow standard format |
| docs/integration-profiles/wearable.md | docs/integration-profiles/wearable.md | Wearable profile | Standardize | Follow standard format |
| docs/integration-profiles/composable-3d-nft.md | docs/integration-profiles/composable-3d-nft.md | Composable NFT | Standardize | Follow standard format |
| docs/integration-profiles/digital-twin.md | docs/integration-profiles/digital-twin.md | Digital twin | Standardize | Follow standard format |
| docs/integration-profiles/equipable.md | docs/integration-profiles/equipable.md | Equipable items | Standardize | Follow standard format |
| docs/integration-profiles/identity.md | docs/integration-profiles/identity.md | Identity | Standardize | Follow standard format |
| docs/integration-profiles/royalty.md | docs/integration-profiles/royalty.md | Royalty | Standardize | Follow standard format |
| docs/integration-profiles/interactable.md | docs/integration-profiles/interactable.md | Interactable | Standardize | Follow standard format |
| docs/integration-profiles/future.md | docs/integration-profiles/future.md | Future profiles | Keep | Roadmap planning |
| **Reference Section (New)** | | | | |
| docs/tools/validator.md | docs/reference/validator.md | Validation tool | Move | Move to reference section |
| (new file) | docs/reference/schemas.md | Schema definitions | Create | Technical schema definitions |
| (new file) | docs/reference/glossary.md | Terminology | Create | Terminology reference |
| (new file) | docs/reference/api.md | API documentation | Create | API reference |
| **Community Section** | | | | |
| docs/contributing.md | docs/community/contributing.md | Contribution | Move | Move to community section |
| docs/community/become-supporter.md | docs/community/become-supporter.md | Becoming supporter | Keep | Community content |
| docs/community/sdo-integration-guide.md | docs/community/sdo-integration-guide.md | SDO integration | Keep | Community content |
| docs/community/supporters.md | docs/community/supporters.md | Supporters list | Keep | Community content |
| docs/community/supporters/nftr-pro.md | docs/community/supporters/nftr-pro.md | NFTR Pro | Keep | Community content |
| docs/community/supporters/sumset-tech.md | docs/community/supporters/sumset-tech.md | Sumset Tech | Keep | Community content |
| docs/guides/content-creators.md | docs/community/guides/content-creators.md | Content creator guide | Move | Move to community/guides |
| **Files to Remove** | | | | |
| docs/embedding/3d-virtual-world.md | (remove) | 3D virtual worlds | Remove | Content consolidated into namespaces |
| docs/embedding/general-metadata.md | (remove) | General metadata | Remove | Content consolidated into schema-org |
| docs/embedding/media-content.md | (remove) | Media content | Remove | Content distributed to namespaces |
| docs/examples/README.md | (remove) | Examples overview | Remove | Examples distributed to concept pages |
| docs/examples/embedding/README.md | (remove) | Embedding examples | Remove | Examples distributed to namespace pages |

## Content Distribution Map

This section outlines how content from files to be removed should be distributed to new files:

1. **JSON-LD content from embedding/schema/json-ld.md**:
   - Core concepts → namespaces/schema-org.md
   - Advanced patterns → reference/schemas.md

2. **3D Standards content**:
   - Each standard (glTF, USD, etc.) → namespaces/3d-standards.md with one example per standard

3. **Embedding content**:
   - Core embedding principles → concepts/linking-vs-embedding.md
   - Standard-specific embedding → respective namespace file

4. **Examples content**:
   - Distribute to concept files and namespace files
   - Complex examples → implementation/combining-standards.md

5. **Implementation details**:
   - Standard-specific details → respective namespace file
   - Implementation patterns → implementation patterns files
   - Best practices → implementation/best-practices.md

## Progress Tracking

- [ ] Introduction section reviewed and consolidated
- [ ] Core Concepts simplified
- [ ] Namespaces section created
- [ ] Implementation section streamlined
- [ ] Integration Profiles standardized
- [ ] Reference section established
- [ ] Community section organized
- [ ] Navigation updated
- [ ] Redundant files removed 