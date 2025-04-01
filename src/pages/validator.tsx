import React from 'react';
import Layout from '@theme/Layout';
import SchemaValidator from '@site/src/components/SchemaValidator';

export default function ValidatorPage() {
    return (
        <Layout title="Schema Validator">
            <main className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--12">
                        <h1>Schema Validator</h1>
                        <p>
                            Validate your JSON-LD schema against Schema.org standards. 
                            This validator uses the official Schema.org validator service 
                            to ensure your metadata is compliant with the specification.
                        </p>
                        <SchemaValidator />
                    </div>
                </div>
            </main>
        </Layout>
    );
} 