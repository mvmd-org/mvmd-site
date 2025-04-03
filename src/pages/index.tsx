import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Book, Code2, Network, FileCheck, Users, Puzzle, Boxes, LayoutList, Zap, Layers, Compass} from 'lucide-react';
import MetaverseSchematic from '@site/src/components/metaverse-schematic';

const SupporterCard = ({name, url, description, profileUrl, logo}) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow overflow-hidden">
            <Link to={profileUrl} className="block p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="mb-4 h-[100px] object-contain"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                        <a href={url} target="_blank" rel="noopener noreferrer"
                           className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                            {name}
                        </a>
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
                </div>
            </Link>
        </div>
    );
};

function FeatureCard({icon, title, description}) {
    return (
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}

function BenefitCard({icon, title, description, linkText, linkUrl}) {
    return (
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
            {linkText && linkUrl && (
                <Link to={linkUrl} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-auto">
                    {linkText} →
                </Link>
            )}
        </div>
    );
}

function IntegrationProfileCard({title, description, linkUrl}) {
    return (
        <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <Link to={linkUrl} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                View Profile →
            </Link>
        </div>
    );
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative">
            <div className="container mx-auto">
                <div className="flex items-center">
                    <div className="w-64 py-24">
                        <img
                            src="/img/logo.svg"
                            alt="MVMD Logo"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className="flex-1 px-6 py-24">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-bold mb-6">
                                <strong>Metaverse Metadata Directory</strong>
                            </h1>
                            <p className="text-xl mb-8">
                                {siteConfig.tagline}
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
                                    to="/docs/introduction">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Metaverse Metadata Directory - Your central hub for discovering and implementing metadata standards for Metaverse assets">
            <HomepageHeader/>

            <main>
                {/* Problem Statement Section */}
                <div className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 dark:text-white">The Metaverse Standards Challenge</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Today's metaverse ecosystem relies on numerous excellent standards working in different domains:
                                </p>
                                <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                                    <li><strong><a href="https://www.khronos.org/gltf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">glTF</a></strong> handles 3D model representation</li>
                                    <li><strong><a href="https://graphics.pixar.com/usd/docs/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">USD</a></strong> enables complex scene composition</li>
                                    <li><strong><a href="https://vrm.dev/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">VRM</a></strong> specializes in humanoid avatars</li>
                                    <li><strong><a href="https://www.autodesk.com/developer-network/platform-technologies/fbx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">FBX</a></strong> supports animation and rigging</li>
                                    <li><strong><a href="https://www.khronos.org/collada/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">COLLADA</a></strong> facilitates asset exchange</li>
                                    <li><strong><a href="https://www.web3d.org/x3d/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">X3D</a></strong> enables web-based 3D graphics</li>
                                    <li><strong><a href="https://www.khronos.org/openxr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">OpenXR</a></strong> standardizes VR/AR experiences</li>
                                    <li><strong><a href="https://www.cityjson.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">CityJSON</a></strong> provides urban environment modeling</li>
                                    <li><strong><a href="https://cesium.com/ion/3d-tiles" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">3D Tiles</a></strong> manages large-scale geospatial data</li>
                                    <li><strong><a href="https://c2pa.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">C2PA</a></strong> handles content authentication</li>
                                </ul>
                                <p className="text-gray-700 dark:text-gray-300">
                                    These standards excel in their domains but achieving interoperability between them requires additional integration work.
                                </p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg flex justify-center">
                                <div className="relative w-full max-w-md">
                                    <div className="flex justify-center items-center">
                                        <div className="flex flex-wrap gap-4 justify-center">
                                            {[
                                                "glTF",
                                                "USD",
                                                "VRM",
                                                "FBX",
                                                "COLLADA",
                                                "X3D",
                                                "OpenXR",
                                                "CityJSON",
                                                "3D Tiles",
                                                "C2PA"
                                            ].map((standard, index) => (
                                                <div key={index} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md text-blue-600 dark:text-blue-400 font-medium border border-gray-200 dark:border-gray-600">
                                                    {standard}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-6 text-center text-gray-500 dark:text-gray-400 italic">
                                        Each standard addresses different aspects of the metaverse
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solution Overview Section */}
                <div className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6 dark:text-white text-center md:text-left">The MVMD Approach</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-12 text-center md:text-left">
                            MVMD establishes formal integration pathways between established metadata standards through a structured architecture.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 flex justify-center">
                                <MetaverseSchematic />
                            </div>
                            <div className="order-1 md:order-2">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full flex items-center justify-center">1</div>
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white mb-0">Metaverse Asset Standards</p>
                                            <p className="text-gray-700 dark:text-gray-300">Leveraging established standards like glTF, USD, VRM, and C2PA which provide specialized capabilities for different aspects of metaverse assets.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full flex items-center justify-center">2</div>
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white mb-0">Schema.org & JSON-LD</p>
                                            <p className="text-gray-700 dark:text-gray-300">Using Schema.org vocabulary with JSON-LD to create a standardized metadata foundation.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full flex items-center justify-center">3</div>
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white mb-0">MVMD Integration Profiles</p>
                                            <p className="text-gray-700 dark:text-gray-300">Specific profiles that define precise integration patterns for various metaverse use cases.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full flex items-center justify-center">4</div>
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white mb-0">Digital Assets Implementation</p>
                                            <p className="text-gray-700 dark:text-gray-300">Enabling NFTs, digital assets, and data with consistent metadata handling.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full flex items-center justify-center">5</div>
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white mb-0">Interoperable Ecosystem</p>
                                            <p className="text-gray-700 dark:text-gray-300">Creating a seamless experience across metaverse platforms, digital asset stores, and Web3 explorers.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stakeholder Benefits Section */}
                <div className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Who Benefits from MVMD</h2>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                            <BenefitCard
                                icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400"/>}
                                title="Content Creators"
                                description="Implement multiple standards without conflicts, follow ready-to-use integration patterns, validate implementations with clear tools, and future-proof your development."
                                linkText="Content Creators"
                                linkUrl="/contributors/content-creators/overview"
                            />
                            <BenefitCard
                                icon={<Boxes className="w-8 h-8 text-green-600 dark:text-green-400"/>}
                                title="Developers"
                                description="Enable cross-platform asset compatibility, improve discovery and filtering, support rich metadata across your platform, and reduce creator onboarding friction."
                                linkText="Developers"
                                linkUrl="/contributors/developers/overview"
                            />
                            <BenefitCard
                                icon={<Network className="w-8 h-8 text-purple-600 dark:text-purple-400"/>}
                                title="Standards Organizations"
                                description="Increase adoption for your standard, improve implementation quality, collaborate on integration patterns, and gain real-world feedback."
                                linkText="Standards Organizations"
                                linkUrl="/contributors/standards-organizations/overview"
                            />
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">How MVMD Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <div className="text-4xl mb-4">🧩</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Standards Selection</h3>
                                <p className="text-gray-600 dark:text-gray-300">Identify the relevant standards for a specific use case</p>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <div className="text-4xl mb-4">📋</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Integration Profile</h3>
                                <p className="text-gray-600 dark:text-gray-300">Define exactly how standards work together</p>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <div className="text-4xl mb-4">✅</div>
                                <h3 className="text-xl font-semibold mb-2 dark:text-white">Implementation & Validation</h3>
                                <p className="text-gray-600 dark:text-gray-300">Build interoperable solutions with validation support</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link
                                to="/concepts/overview"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block">
                                Learn More About the Process
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Featured Integration Profiles Section */}
                <div className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Integration Profiles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <IntegrationProfileCard
                                title="Composable 3D NFT"
                                description="Defines metadata for complex 3D NFTs with component parts that can be recombined and used across platforms. Combines Schema.org, glTF, and C2PA standards."
                                linkUrl="/integration-profiles/composable-3d-nft"
                            />
                            <IntegrationProfileCard
                                title="Avatar"
                                description="Standardizes metadata for digital avatars and characters, enabling consistent representation and animation across metaverse platforms."
                                linkUrl="/integration-profiles/avatar"
                            />
                        </div>
                        <div className="text-center">
                            <Link
                                to="/integration-profiles/overview"
                                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 inline-block">
                                View All Integration Profiles
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Getting Started Paths Section */}
                <div className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-8 dark:text-white">Start Your Journey</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white">I'm new to metadata:</p>
                                            <Link to="/concepts/metadata/fundamentals" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Quickstart Guide →
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <Puzzle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white">I need implementation patterns:</p>
                                            <Link to="/integration-profiles/overview" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Integration Profiles →
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white">I want technical details:</p>
                                            <Link to="/implementation/overview" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Implementation Guide →
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold dark:text-white">I need to validate:</p>
                                            <Link to="/validator" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                                Try the Validator →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-6 dark:text-white">Join the Community</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    MVMD is a collaborative effort supported by industry partners committed to metaverse interoperability.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <Link to="/contributors/overview" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        <Users className="w-5 h-5 mr-2" />
                                        Learn how to contribute
                                    </Link>
                                    <Link to="/contributors/standards-organizations/overview" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        <Zap className="w-5 h-5 mr-2" />
                                        Become a supporting organization
                                    </Link>
                                </div>
                                <div>
                                    <p className="font-semibold mb-3 dark:text-white">Supporting Organizations:</p>
                                    <div className="flex flex-wrap gap-4">
                                        <img src="/img/nftr-logo.png" alt="NFTr.pro" className="h-10 object-contain" />
                                        <img src="/img/sumset-tech-logo.png" alt="SumSet.Tech" className="h-10 object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
