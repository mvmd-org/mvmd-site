import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Book, Code2, Network, FileCheck} from 'lucide-react';

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
                                    to="/quickstart">
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
                {/* Key Features */}
                <div className="py-20 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">What You Can Do</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeatureCard
                                icon={<Book className="w-8 h-8 text-blue-600 dark:text-blue-400"/>}
                                title="Browse Standards"
                                description="Explore our curated registry of metadata standards for the Metaverse"
                            />
                            <FeatureCard
                                icon={<Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400"/>}
                                title="Implement Profiles"
                                description="Use our pre-defined profiles for common asset types and scenarios"
                            />
                            <FeatureCard
                                icon={<FileCheck className="w-8 h-8 text-blue-600 dark:text-blue-400"/>}
                                title="Validate Metadata"
                                description="Ensure your metadata meets industry standards with validation"
                            />
                            <FeatureCard
                                icon={<Network className="w-8 h-8 text-blue-600 dark:text-blue-400"/>}
                                title="Connect Assets"
                                description="Create interoperable connections between virtual assets and environments"
                            />
                        </div>
                    </div>
                </div>

                {/* Supporters Section */}
                <div className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Supported By</h2>
                        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
                            Join these organizations in building an interoperable Metaverse
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <SupporterCard
                                name="NFTr.pro"
                                url="https://nftr.pro"
                                description="NFT tools for creators, by creators"
                                profileUrl="/community/supporters/nftr-pro"
                                logo="/img/nftr-logo.png"
                            />
                            <SupporterCard
                                name="SumSet.Tech"
                                url="https://sumset.tech"
                                description="Building the tech behind your experiences"
                                profileUrl="/community/supporters/sumset-tech"
                                logo="/img/sumset-tech-logo.png"
                            />
                        </div>
                        <div className="text-center mt-12">
                            <Link
                                to="/community/supporters"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">
                                View All Supporters →
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
