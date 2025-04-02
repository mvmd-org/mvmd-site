import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'introduction',
            label: 'Introduction'
        },
        {
            type: 'doc',
            id: 'introduction/concepts',
            label: 'Core Concepts'
        },
        {
            type: 'doc',
            id: 'for-standards-organizations',
            label: 'For Standards Organizations'
        },
        {
            type: 'doc',
            id: 'quickstart',
            label: 'Quick Start'
        },
        {
            type: 'category',
            label: 'Concepts',
            items: [
                {
                    type: 'doc',
                    id: 'concepts/overview',
                    label: 'Overview'
                },
                {
                    type: 'doc',
                    id: 'concepts/fundamentals',
                    label: 'Fundamentals'
                },
                {
                    type: 'doc',
                    id: 'concepts/types-of-things',
                    label: 'Types of Things'
                },
                {
                    type: 'doc',
                    id: 'concepts/composition',
                    label: 'Composition'
                },
                {
                    type: 'doc',
                    id: 'concepts/references',
                    label: 'References'
                },
                {
                    type: 'doc',
                    id: 'concepts/uris-vs-embedding',
                    label: 'URIs vs Embedding'
                },
                {
                    type: 'doc',
                    id: 'concepts/file-organization',
                    label: 'File Organization'
                },
                {
                    type: 'doc',
                    id: 'concepts/embedding-and-reference',
                    label: 'Embedding and Reference'
                },
                {
                    type: 'doc',
                    id: 'concepts/metadata-fundamentals',
                    label: 'Metadata Fundamentals'
                }
            ],
        },
        {
            type: 'category',
            label: 'Implementation',
            items: [
                {
                    type: 'doc',
                    id: 'implementation/overview',
                    label: 'Overview'
                },
                {
                    type: 'doc',
                    id: 'implementation/assets',
                    label: 'Assets'
                },
                {
                    type: 'doc',
                    id: 'implementation/nfts',
                    label: 'NFTs'
                },
                {
                    type: 'doc',
                    id: 'implementation/composable',
                    label: 'Composable'
                },
                {
                    type: 'doc',
                    id: 'implementation/best-practices',
                    label: 'Best Practices'
                },
                {
                    type: 'doc',
                    id: 'implementation/getting-started',
                    label: 'Getting Started'
                },
                {
                    type: 'doc',
                    id: 'implementation/standards-implementation',
                    label: 'Standards Implementation'
                },
                {
                    type: 'doc',
                    id: 'implementation/metadata-profiles',
                    label: 'Metadata Profiles'
                },
                {
                    type: 'category',
                    label: 'Composable',
                    items: [
                        {
                            type: 'doc',
                            id: 'implementation/composable/assembly-patterns',
                            label: 'Assembly Patterns'
                        },
                        {
                            type: 'doc',
                            id: 'implementation/composable/concepts',
                            label: 'Concepts'
                        },
                        {
                            type: 'doc',
                            id: 'implementation/composable/schema-parts',
                            label: 'Schema Parts'
                        }
                    ],
                },
                {
                    type: 'category',
                    label: 'NFT',
                    items: [
                        {
                            type: 'doc',
                            id: 'implementation/nft/concepts',
                            label: 'Concepts'
                        },
                        {
                            type: 'doc',
                            id: 'implementation/nft/examples',
                            label: 'Examples'
                        }
                    ],
                }
            ],
        },
        {
            type: 'category',
            label: 'Integration Profiles',
            items: [
                {
                    type: 'doc',
                    id: 'integration-profiles/overview',
                    label: 'Overview'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/basic',
                    label: 'Basic Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/wearable',
                    label: 'Wearable Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/avatar',
                    label: 'Avatar Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/composable-3d-nft',
                    label: 'Composable 3D NFT'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/digital-twin',
                    label: 'Digital Twin'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/vehicle',
                    label: 'Vehicle Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/identity',
                    label: 'Identity Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/royalty',
                    label: 'Royalty Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/scene',
                    label: 'Scene Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/equipable',
                    label: 'Equipable Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/interactable',
                    label: 'Interactable Profile'
                },
                {
                    type: 'doc',
                    id: 'integration-profiles/future',
                    label: 'Future Profiles'
                }
            ],
        },
        {
            type: 'category',
            label: 'Embedding',
            items: [
                {
                    type: 'doc',
                    id: 'embedding/overview',
                    label: 'Overview'
                },
                {
                    type: 'doc',
                    id: 'embedding/combining-standards',
                    label: 'Combining Standards'
                },
                {
                    type: 'doc',
                    id: 'embedding/media-content',
                    label: 'Media Content'
                },
                {
                    type: 'doc',
                    id: 'embedding/general-metadata',
                    label: 'General Metadata'
                },
                {
                    type: 'doc',
                    id: 'embedding/3d-virtual-world',
                    label: '3D Virtual World'
                },
                {
                    type: 'doc',
                    id: 'embedding/geospacial',
                    label: 'Geospatial'
                },
                {
                    type: 'category',
                    label: 'Schema',
                    items: [
                        {
                            type: 'doc',
                            id: 'embedding/schema/schema-org',
                            label: 'Schema.org'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/schema/json-ld',
                            label: 'JSON-LD'
                        }
                    ],
                },
                {
                    type: 'category',
                    label: '3D Assets',
                    items: [
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/gltf',
                            label: 'glTF'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/usd',
                            label: 'USD'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/x3d',
                            label: 'X3D'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/fbx',
                            label: 'FBX'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/vrm',
                            label: 'VRM'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/openxr',
                            label: 'OpenXR'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/3d-assets/collada',
                            label: 'COLLADA'
                        }
                    ],
                },
                {
                    type: 'category',
                    label: 'Geospatial',
                    items: [
                        {
                            type: 'doc',
                            id: 'embedding/geospatial/cityjson',
                            label: 'CityJSON'
                        },
                        {
                            type: 'doc',
                            id: 'embedding/geospatial/3d-tiles',
                            label: '3D Tiles'
                        }
                    ],
                },
                {
                    type: 'category',
                    label: 'Trust and Provenance',
                    items: [
                        {
                            type: 'doc',
                            id: 'embedding/trust/c2pa',
                            label: 'C2PA'
                        }
                    ],
                }
            ],
        },
        {
            type: 'category',
            label: 'Community',
            items: [
                {
                    type: 'doc',
                    id: 'community/supporters',
                    label: 'Supporters'
                },
                {
                    type: 'doc',
                    id: 'community/become-supporter',
                    label: 'Become a Supporter'
                },
                {
                    type: 'doc',
                    id: 'community/contributors',
                    label: 'Contributors'
                },
                {
                    type: 'doc',
                    id: 'community/sdo-integration-guide',
                    label: 'SDO Integration Guide'
                },
                {
                    type: 'category',
                    label: 'Supporters',
                    items: [
                        {
                            type: 'doc',
                            id: 'community/supporters/nftr-pro',
                            label: 'NFTR Pro'
                        },
                        {
                            type: 'doc',
                            id: 'community/supporters/sumset-tech',
                            label: 'Sumset Tech'
                        }
                    ],
                },
                {
                    type: 'doc',
                    id: 'supporting-organizations',
                    label: 'Supporting Organizations'
                },
                {
                    type: 'doc',
                    id: 'contributing',
                    label: 'Contributing'
                }
            ],
        },
        {
            type: 'category',
            label: 'Tools',
            items: [
                {
                    type: 'doc',
                    id: 'tools/validator',
                    label: 'Schema Validator'
                }
            ],
        },
        {
            type: 'category',
            label: 'Guides',
            items: [
                {
                    type: 'doc',
                    id: 'guides/content-creators',
                    label: 'Content Creators Guide'
                }
            ],
        }
    ],
};

export default sidebars;
