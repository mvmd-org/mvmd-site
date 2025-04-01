import React from 'react';
import clsx from 'clsx';
import CodeBlock from '@theme-original/CodeBlock';
import styles from './styles.module.css';

export default function CodeBlockWrapper(props) {
    const validateCode = () => {
        const encodedCode = encodeURIComponent(props.children);
        const validatorUrl = `/validator?code=${encodedCode}`;
        window.open(validatorUrl, '_blank');
    };

    return (
        <div className={styles.codeBlockContainer}>
            <CodeBlock {...props} />
            <button
                className={clsx(
                    'clean-btn',
                    styles.validateButton
                )}
                onClick={validateCode}
            >
                Validate
            </button>
        </div>
    );
}
