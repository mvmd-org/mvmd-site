import React from 'react';
import Layout from '@theme/Layout';
import styles from './validation-report.module.css'; // We'll create this for styling

function ValidationReportPage() {
  return (
    <Layout
      title="Docs Validation Report"
      description="Validation report for JSON examples in the documentation."
    >
      <div className={styles.reportContainer}>
        <h1>Documentation JSON Validation Report</h1>
        <p>
          This report shows validation results for JSON code blocks found in the documentation.
          It is automatically generated.
        </p>
        <iframe
          src="/docs-validation-report.html" // Path relative to static directory
          title="Documentation JSON Validation Report"
          className={styles.reportFrame}
        />
      </div>
    </Layout>
  );
}

export default ValidationReportPage; 