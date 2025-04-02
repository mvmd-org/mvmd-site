import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Metaverse Metadata Directory',
    tagline: 'Your central hub for discovering and implementing metadata standards for metaverse assets',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://mvmd.org',
    baseUrl: '/',
    organizationName: 'mvmd-org',
    projectName: 'mvmd-site',

    // Disable link checking temporarily
    onBrokenLinks: 'ignore', // Options: 'throw', 'warn', 'ignore'
    onBrokenMarkdownLinks: 'ignore', // Options: 'throw', 'warn', 'ignore'

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        // require.resolve('@docusaurus/plugin-debug'),
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    // Redirect for category pages to namespaces overview
                    {
                        from: '/namespaces/3d-standards',
                        to: '/namespaces/overview',
                    },
                    {
                        from: '/namespaces/geospatial-standards',
                        to: '/namespaces/overview',
                    },
                    {
                        from: '/namespaces/trust-provenance',
                        to: '/namespaces/overview',
                    },
                    // Redirects for implementations mentioned in standards-implementation
                    {
                        from: '/implementation/standards-implementation',
                        to: '/namespaces/overview',
                    },
                    // Manual redirect pages
                    {
                        from: '/namespaces/redirects/gltf-redirect',
                        to: '/namespaces/gltf',
                    },
                    {
                        from: '/namespaces/redirects/usd-redirect',
                        to: '/namespaces/usd',
                    },
                    {
                        from: '/namespaces/redirects/usdz-redirect',
                        to: '/namespaces/usdz',
                    },
                    {
                        from: '/namespaces/redirects/vrm-redirect',
                        to: '/namespaces/vrm',
                    },
                    {
                        from: '/namespaces/redirects/fbx-redirect',
                        to: '/namespaces/fbx',
                    },
                    {
                        from: '/namespaces/redirects/collada-redirect',
                        to: '/namespaces/collada',
                    },
                    {
                        from: '/namespaces/redirects/x3d-redirect',
                        to: '/namespaces/x3d',
                    },
                    {
                        from: '/namespaces/redirects/openxr-redirect',
                        to: '/namespaces/openxr',
                    },
                    {
                        from: '/namespaces/redirects/cityjson-redirect',
                        to: '/namespaces/cityjson',
                    },
                    {
                        from: '/namespaces/redirects/3d-tiles-redirect',
                        to: '/namespaces/3d-tiles',
                    },
                    {
                        from: '/namespaces/redirects/c2pa-redirect',
                        to: '/namespaces/c2pa',
                    },
                    {
                        from: '/namespaces/redirects/3d-standards-redirect',
                        to: '/namespaces/overview',
                    },
                    {
                        from: '/namespaces/redirects/geospatial-standards-redirect',
                        to: '/namespaces/overview',
                    },
                    {
                        from: '/namespaces/redirects/trust-provenance-redirect',
                        to: '/namespaces/overview',
                    },
                ],
                createRedirects(existingPath) {
                    // Create redirects for content that was moved from category pages
                    if (existingPath.includes('/namespaces/gltf')) {
                        return [
                            existingPath.replace('/namespaces/gltf', '/namespaces/3d-standards'),
                            existingPath.replace('/namespaces/gltf', '/implementation/standards-implementation'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/usd')) {
                        return [
                            existingPath.replace('/namespaces/usd', '/namespaces/3d-standards'),
                            existingPath.replace('/namespaces/usd', '/implementation/standards-implementation'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/usdz')) {
                        return [
                            existingPath.replace('/namespaces/usdz', '/namespaces/3d-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/vrm')) {
                        return [
                            existingPath.replace('/namespaces/vrm', '/namespaces/3d-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/fbx')) {
                        return [
                            existingPath.replace('/namespaces/fbx', '/namespaces/3d-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/collada')) {
                        return [
                            existingPath.replace('/namespaces/collada', '/namespaces/3d-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/x3d')) {
                        return [
                            existingPath.replace('/namespaces/x3d', '/namespaces/3d-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/openxr')) {
                        return [
                            existingPath.replace('/namespaces/openxr', '/namespaces/3d-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/cityjson')) {
                        return [
                            existingPath.replace('/namespaces/cityjson', '/namespaces/geospatial-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/3d-tiles')) {
                        return [
                            existingPath.replace('/namespaces/3d-tiles', '/namespaces/geospatial-standards'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/c2pa')) {
                        return [
                            existingPath.replace('/namespaces/c2pa', '/namespaces/trust-provenance'),
                        ];
                    }
                    return undefined;
                },
            },
        ],
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/mvmd-org/mvmd-site/edit/main/',
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        metadata: [
            {name: 'og:type', content: 'website'}, // Required Open Graph type
            {name: 'fb:app_id', content: 'YOUR_FB_APP_ID'}, // Replace with your Facebook App ID
            {name: 'og:title', content: 'Metaverse Metadata Directory'},
            {name: 'og:description', content: 'Metadata standards for metaverse assets'},
            {name: 'og:image', content: 'https://mvmd.org/img/mvmd-social-card.jpg'},
            {name: 'og:url', content: 'https://mvmd.org'},
            {name: 'twitter:card', content: 'summary_large_image'}, // For Twitter large card display
            {name: 'twitter:title', content: 'Metaverse Metadata Directory'},
            {name: 'twitter:description', content: 'Metadata standards for metaverse assets'},
            {name: 'twitter:image', content: 'https://mvmd.org/img/mvmd-social-card.jpg'},
        ],
        image: 'img/mvmd-social-card.jpg',
        navbar: {
            title: 'Metaverse Metadata Directory',
            logo: {
                alt: 'MVMD Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docs',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/validator',
                    label: 'Schema Validator',
                    position: 'right',
                },
                {
                    href: 'https://github.com/mvmd-org',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'X',
                            href: 'https://x.com/mvmd_org',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/mvmd-org',
                        },
                        {
                            label: 'Docs Validation Report',
                            to: '/validation-report',
                        },
                    ],
                },
            ],
            copyright: `version 0.3 - Copyright © ${new Date().getFullYear()} Metaverse Metadata Directory`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            magicComments: [
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {start: 'highlight-start', end: 'highlight-end'},
                },
            ],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
