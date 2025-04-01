import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'introduction',
            label: 'Introduction',
        },
        {
            type: 'category',
            label: 'Fundamentals',
            items: [
                {
                    type: 'doc',
                    id: 'fundamentals/getting-started',
                    label: 'Getting Started',
                },
                {
                    type: 'doc',
                    id: 'fundamentals/core-concepts',
                    label: 'Core Concepts',
                },
                {
                    type: 'doc',
                    id: 'fundamentals/metadata-foundations',
                    label: 'Metadata Foundations',
                },
                {
                    type: 'doc',
                    id: 'fundamentals/schema-and-json-ld',
                    label: 'Schema.org & JSON-LD',
                },
                {
                    type: 'doc',
                    id: 'fundamentals/structure-and-composition',
                    label: 'Structure & Composition',
                },
                {
                    type: 'doc',
                    id: 'fundamentals/reference-vs-embedding',
                    label: 'Reference vs Embedding',
                },
                {
                    type: 'doc',
                    id: 'fundamentals/standards-compatibility',
                    label: 'Standards Compatibility',
                },
            ],
        },
        {
            type: 'category',
            label: 'How-To Guides',
            items: [
                {
                    type: 'category',
                    label: 'Basic Implementation',
                    items: [
                        {
                            type: 'doc',
                            id: 'guides/basic/create-metadata',
                            label: 'Create Basic Metadata',
                        },
                        {
                            type: 'doc',
                            id: 'guides/basic/validate-metadata',
                            label: 'Validate Your Metadata',
                        },
                        {
                            type: 'doc',
                            id: 'guides/basic/organize-files',
                            label: 'Organize Your Files',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: '3D Assets',
                    items: [
                        {
                            type: 'doc',
                            id: 'guides/3d-assets/describe-3d-models',
                            label: 'Describe 3D Models',
                        },
                        {
                            type: 'doc',
                            id: 'guides/3d-assets/add-thumbnails',
                            label: 'Add Thumbnails & Previews',
                        },
                        {
                            type: 'doc',
                            id: 'guides/3d-assets/document-materials',
                            label: 'Document Materials',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'NFTs',
                    items: [
                        {
                            type: 'doc',
                            id: 'guides/nfts/prepare-nft-metadata',
                            label: 'Prepare NFT Metadata',
                        },
                        {
                            type: 'doc',
                            id: 'guides/nfts/add-royalty-information',
                            label: 'Add Royalty Information',
                        },
                        {
                            type: 'doc',
                            id: 'guides/nfts/composable-nfts',
                            label: 'Create Composable NFTs',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Virtual Worlds',
                    items: [
                        {
                            type: 'doc',
                            id: 'guides/virtual-worlds/describe-scenes',
                            label: 'Describe Scenes',
                        },
                        {
                            type: 'doc',
                            id: 'guides/virtual-worlds/interactable-objects',
                            label: 'Create Interactable Objects',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Advanced',
                    items: [
                        {
                            type: 'doc',
                            id: 'guides/advanced/construct-complex-metadata',
                            label: 'Construct Complex Metadata',
                        },
                        {
                            type: 'doc',
                            id: 'guides/advanced/combine-standards',
                            label: 'Combine Multiple Standards',
                        },
                        {
                            type: 'doc',
                            id: 'guides/advanced/add-trust-provenance',
                            label: 'Add Trust & Provenance',
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Integration Profiles',
            items: [
                {
                    type: 'doc',
                    id: 'integration-profiles/overview',
                    label: 'Overview',
                },
                {
                    type: 'category',
                    label: 'Profile Management',
                    items: [
                        {
                            type: 'doc',
                            id: 'integration-profiles/management/profile-states',
                            label: 'Profile States',
                        },
                        {
                            type: 'doc',
                            id: 'integration-profiles/management/future',
                            label: 'Future Integration Profiles',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/basic',
                    label: 'Basic',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/wearable',
                    label: 'Wearables',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/avatar',
                    label: 'Avatar',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/composable-3d-nft',
                    label: 'Composable 3D NFT',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/digital-twin',
                    label: 'Digital Twin',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/vehicle',
                    label: 'Vehicle',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/identity',
                    label: 'Identity',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/royalty',
                    label: 'Royalty',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/scene',
                    label: 'Scene',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/equipable',
                    label: 'Equipable',
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/interactable',
                    label: 'Interactables',
                },
            ],
        },
        {
            type: 'category',
            label: 'Reference',
            items: [
                {
                    type: 'category',
                    label: 'Schema & JSON-LD',
                    items: [
                        {
                            type: 'doc',
                            id: 'reference/schema/schema-org',
                            label: 'Schema.org',
                        },
                        {
                            type: 'doc',
                            id: 'reference/schema/json-ld',
                            label: 'JSON-LD',
                        },
                        {
                            type: 'doc',
                            id: 'reference/schema/context',
                            label: 'Context Files',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: '3D Formats',
                    items: [
                        {
                            type: 'doc',
                            id: 'reference/3d-formats/gltf',
                            label: 'glTF',
                        },
                        {
                            type: 'doc',
                            id: 'reference/3d-formats/usd',
                            label: 'USD',
                        },
                        {
                            type: 'doc',
                            id: 'reference/3d-formats/vrm',
                            label: 'VRM',
                        },
                        {
                            type: 'doc',
                            id: 'reference/3d-formats/other',
                            label: 'Other Formats',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Geospatial',
                    items: [
                        {
                            type: 'doc',
                            id: 'reference/geospatial/cityjson',
                            label: 'CityJSON',
                        },
                        {
                            type: 'doc',
                            id: 'reference/geospatial/3d-tiles',
                            label: '3D Tiles',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Trust & Provenance',
                    items: [
                        {
                            type: 'doc',
                            id: 'reference/trust/c2pa',
                            label: 'C2PA',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'reference/terms-glossary',
                    label: 'Terms Glossary',
                },
            ],
        },
        {
            type: 'category',
            label: 'Examples',
            items: [
                {
                    type: 'category',
                    label: 'By Asset Type',
                    items: [
                        {
                            type: 'doc',
                            id: 'examples/asset-types/3d-model',
                            label: '3D Model',
                        },
                        {
                            type: 'doc',
                            id: 'examples/asset-types/avatar',
                            label: 'Avatar',
                        },
                        {
                            type: 'doc',
                            id: 'examples/asset-types/wearable',
                            label: 'Wearable',
                        },
                        {
                            type: 'doc',
                            id: 'examples/asset-types/scene',
                            label: 'Scene',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'By Use Case',
                    items: [
                        {
                            type: 'doc',
                            id: 'examples/use-cases/nft-marketplace',
                            label: 'NFT Marketplace',
                        },
                        {
                            type: 'doc',
                            id: 'examples/use-cases/virtual-world',
                            label: 'Virtual World',
                        },
                        {
                            type: 'doc',
                            id: 'examples/use-cases/digital-twin',
                            label: 'Digital Twin',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Complete Projects',
                    items: [
                        {
                            type: 'doc',
                            id: 'examples/complete/mvmd-marketplace',
                            label: 'MVMD Marketplace',
                        },
                        {
                            type: 'doc',
                            id: 'examples/complete/virtual-gallery',
                            label: 'Virtual Gallery',
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Community',
            items: [
                {
                    type: 'category',
                    label: 'Contributing',
                    items: [
                        {
                            type: 'doc',
                            id: 'community/contributing',
                            label: 'How to Contribute',
                        },
                        {
                            type: 'doc',
                            id: 'community/contributors',
                            label: 'Contributors',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Supporters',
                    items: [
                        {
                            type: 'doc',
                            id: 'community/supporters',
                            label: 'Current Supporters',
                        },
                        {
                            type: 'doc',
                            id: 'community/become-supporter',
                            label: 'Become a Supporter',
                        },
                        {
                            type: 'doc',
                            id: 'community/supporters/nftr-pro',
                            label: 'NFTr.pro',
                        },
                        {
                            type: 'doc',
                            id: 'community/supporters/sumset-tech',
                            label: 'SumSet.Tech',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'community/sdo-integration-guide',
                    label: 'Standards Organization Guide',
                },
                {
                    type: 'doc',
                    id: 'for-standards-organizations',
                    label: 'For Standards Organizations',
                },
            ],
        },
        {
            type: 'category',
            label: 'Tools',
            items: [
                {
                    type: 'doc',
                    id: 'tools/validator',
                    label: 'Validator',
                },
                {
                    type: 'doc',
                    id: 'tools/metadata-generator',
                    label: 'Metadata Generator',
                },
            ],
        },
    ],
};

export default sidebars;
