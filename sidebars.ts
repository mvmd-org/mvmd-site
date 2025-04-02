import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        'introduction',
        'for-standards-organizations',
        'quickstart',
        {
            type: 'category',
            label: 'Concepts',
            items: [
                'concepts/overview',
                'concepts/fundamentals',
                'concepts/types-of-things',
                'concepts/composition',
                'concepts/references',
                'concepts/uris-vs-embedding',
                'concepts/file-organization',
                'concepts/embedding-and-reference',
                'concepts/metadata-fundamentals'
            ],
        },
        {
            type: 'category',
            label: 'Implementation',
            items: [
                'implementation/overview',
                'implementation/assets',
                'implementation/nfts',
                'implementation/composable',
                'implementation/best-practices',
                'implementation/getting-started',
                'implementation/standards-implementation',
                'implementation/metadata-profiles'
            ],
        },
        {
            type: 'category',
            label: 'Integration Profiles',
            items: [
                'integration-profiles/overview',
                'integration-profiles/basic',
                'integration-profiles/wearable',
                'integration-profiles/avatar',
                'integration-profiles/composable-3d-nft',
                'integration-profiles/digital-twin',
                'integration-profiles/vehicle',
                'integration-profiles/identity',
                'integration-profiles/royalty',
                'integration-profiles/scene',
                'integration-profiles/equipable',
                'integration-profiles/interactable',
                'integration-profiles/future'
            ],
        },
        {
            type: 'category',
            label: 'Embedding',
            items: [
                'embedding/overview',
                'embedding/combining-standards',
                'embedding/media-content',
                'embedding/general-metadata',
                'embedding/3d-virtual-world',
                {
                    type: 'category',
                    label: '3D Assets',
                    items: [
                        'embedding/3d-assets/gltf',
                        'embedding/3d-assets/usd',
                        'embedding/3d-assets/x3d',
                        'embedding/3d-assets/fbx',
                        'embedding/3d-assets/vrm',
                        'embedding/3d-assets/openxr',
                        'embedding/3d-assets/collada'
                    ],
                },
                {
                    type: 'category',
                    label: 'Geospatial',
                    items: [
                        'embedding/geospatial/cityjson',
                        'embedding/geospatial/3d-tiles',
                    ],
                },
                {
                    type: 'category',
                    label: 'Trust and Provenance',
                    items: [
                        'embedding/trust/c2pa',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Community',
            items: [
                'community/supporters',
                'community/become-supporter',
                'community/contributors',
                'community/sdo-integration-guide',
                'supporting-organizations',
                'contributing'
            ],
        },
        {
            type: 'category',
            label: 'Tools',
            items: [
                'tools/validator'
            ],
        }
    ],
};

export default sidebars;
