import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import type { Props as LayoutProps } from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props: LayoutProps): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.substring(1);
      
      const attemptScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Retry mechanism if element not found immediately 
          // Might be needed for very complex pages or slow rendering
          // console.log(`Element with id ${id} not found yet, retrying...`);
          // setTimeout(attemptScroll, 100); // Simple retry, use cautiously
        }
      };
      
      // Use a timeout to ensure the element has rendered after navigation/rehydration
      const timeoutId = setTimeout(attemptScroll, 150); // Increased timeout slightly

      return () => clearTimeout(timeoutId); 
    }
  }, [location.hash]);

  return (
    <>
      <OriginalLayout {...props} />
    </>
  );
}
