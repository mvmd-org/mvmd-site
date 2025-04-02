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
                    // Redirect for glTF content from 3d-standards to the dedicated namespace file
                    {
                        from: '/namespaces/3d-standards#gltf',
                        to: '/namespaces/gltf',
                    },
                    // Redirect for USD content from 3d-standards to the dedicated namespace file
                    {
                        from: '/namespaces/3d-standards#usd',
                        to: '/namespaces/usd',
                    },
                    // Redirects for implementations mentioned in standards-implementation
                    {
                        from: '/implementation/standards-implementation#gltf',
                        to: '/namespaces/gltf',
                    },
                    {
                        from: '/implementation/standards-implementation#usd',
                        to: '/namespaces/usd',
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
                ],
                createRedirects(existingPath) {
                    // Create redirects for content that was moved from 3d-standards.md
                    if (existingPath.includes('/namespaces/gltf')) {
                        return [
                            existingPath.replace('/namespaces/gltf', '/namespaces/3d-standards#gltf'),
                            existingPath.replace('/namespaces/gltf', '/implementation/standards-implementation#gltf'),
                        ];
                    }
                    if (existingPath.includes('/namespaces/usd')) {
                        return [
                            existingPath.replace('/namespaces/usd', '/namespaces/3d-standards#usd'),
                            existingPath.replace('/namespaces/usd', '/implementation/standards-implementation#usd'),
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
