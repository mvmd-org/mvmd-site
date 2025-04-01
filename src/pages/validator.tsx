import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import SchemaValidator from '../components/SchemaValidator';
import { useLocation } from '@docusaurus/router';
import styles from './validator.module.css';

function ValidatorPage() {
  const location = useLocation();
  const [initialJson, setInitialJson] = useState<string>('');

  useEffect(() => {
    // Get the 'code' parameter from the URL
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    
    if (code) {
      try {
        // Decode the URL-encoded JSON
        const decodedJson = decodeURIComponent(code);
        // Try to parse and re-stringify to format it nicely
        const formattedJson = JSON.stringify(JSON.parse(decodedJson), null, 2);
        setInitialJson(formattedJson);
      } catch (error) {
        console.error('Failed to parse JSON from URL:', error);
      }
    }
  }, [location]);

  return (
    <Layout
      title="Schema Validator"
      description="Validate your JSON-LD schemas against Schema.org standards"
    >
      <div className={styles.validatorPage}>
        <div className={styles.header}>
          <h1>Schema Validator</h1>
          <div className={styles.description}>
            <p>
              Validate your JSON-LD schemas against Schema.org standards. You can either:
            </p>
            <ul>
              <li>Paste your JSON-LD directly into the editor below</li>
              <li>
                Share schemas by adding them to the URL with <code>?code=YOUR_URL_ENCODED_JSON</code>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.validatorContainer}>
          <SchemaValidator initialJson={initialJson} />
        </div>
      </div>
    </Layout>
  );
}

export default ValidatorPage; 