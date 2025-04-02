import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';
import type { Props as LayoutProps } from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

export default function LayoutWrapper(props: LayoutProps): JSX.Element {
  const location = useLocation();
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [errorBlockIndex, setErrorBlockIndex] = useState<string | null>(null);

  useEffect(() => {
    const hash = location.hash;
    let targetId = '';
    let errors: string[] = [];
    let blockIndex: string | null = null;

    if (hash) {
      const hashParts = hash.substring(1).split('&');
      targetId = hashParts[0];
      
      const params = new URLSearchParams(hashParts.slice(1).join('&'));
      const encodedErrors = params.get('validationErrors');
      blockIndex = params.get('validationBlock');
      
      if (encodedErrors) {
        try {
          errors = JSON.parse(decodeURIComponent(encodedErrors));
        } catch (e) {
          console.error("Error parsing validation errors from hash:", e);
          errors = [];
        }
      }
    }

    setValidationErrors(errors);
    setErrorBlockIndex(blockIndex);

    if (targetId) {
      const attemptScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // console.log(`Element with id ${targetId} not found yet, retrying...`);
          // setTimeout(attemptScroll, 100); // Retry mechanism
        }
      };
      
      const timeoutId = setTimeout(attemptScroll, 150); 
      return () => clearTimeout(timeoutId); 
    } else {
       // If no targetId, clear errors (e.g., navigating away)
       // setValidationErrors([]); 
       // setErrorBlockIndex(null);
       // Decide if clearing errors on hash removal is desired
    }

  }, [location.hash]);

  return (
    <>
      {validationErrors.length > 0 && (
        <div className={styles.validationErrorPopup}>
          <h4>Validation Errors (Block {errorBlockIndex ?? 'N/A'})</h4>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
          <button onClick={() => setValidationErrors([])} className={styles.closeButton}>X</button>
        </div>
      )}
      <OriginalLayout {...props} />
    </>
  );
}
