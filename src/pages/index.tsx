import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="Metaverse Metadata Directory - Your central hub for metadata standards">
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
