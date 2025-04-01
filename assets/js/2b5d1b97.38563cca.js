"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[1005],{6493:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tools/validator","title":"Validator","description":"MVMD provides two ways to validate your metadata:","source":"@site/docs/tools/validator.md","sourceDirName":"tools","slug":"/tools/validator","permalink":"/tools/validator","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/tools/validator.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Standards Integration Guide for SDOs","permalink":"/community/sdo-integration-guide"}}');var r=i(4848),s=i(8453);const t={},l="Validator",o={},d=[{value:"Using the MVMD Schema Validator",id:"using-the-mvmd-schema-validator",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Using the Schema.org Validator",id:"using-the-schemaorg-validator",level:2},{value:"Using the Schema.org Validator",id:"using-the-schemaorg-validator-1",level:2},{value:"Step 1: Prepare Your Metadata",id:"step-1-prepare-your-metadata",level:3},{value:"Step 2: Choose Your Validator",id:"step-2-choose-your-validator",level:3},{value:"Option 1: MVMD Schema Validator",id:"option-1-mvmd-schema-validator",level:4},{value:"Option 2: Schema.org Validator",id:"option-2-schemaorg-validator",level:4},{value:"Common Validation Issues",id:"common-validation-issues",level:2},{value:"1. Missing Required Properties",id:"1-missing-required-properties",level:3},{value:"2. Invalid Type Values",id:"2-invalid-type-values",level:3},{value:"3. Incorrect Property Types",id:"3-incorrect-property-types",level:3},{value:"Handling Namespaced Properties",id:"handling-namespaced-properties",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Future MVMD Validation",id:"future-mvmd-validation",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"validator",children:"Validator"})}),"\n",(0,r.jsx)(n.p,{children:"MVMD provides two ways to validate your metadata:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MVMD Schema Validator"})," - Our integrated validator that provides a user-friendly interface for validating your metadata directly on the MVMD site."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Schema.org Validator"})," - The official Schema.org validator for comprehensive validation against the Schema.org specification."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-mvmd-schema-validator",children:"Using the MVMD Schema Validator"}),"\n",(0,r.jsx)(n.p,{children:"The MVMD Schema Validator is the recommended way to validate your metadata. It provides:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A clean, user-friendly interface"}),"\n",(0,r.jsx)(n.li,{children:"Real-time validation feedback"}),"\n",(0,r.jsx)(n.li,{children:"Detailed error and warning messages"}),"\n",(0,r.jsx)(n.li,{children:"Support for all Schema.org types and properties"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Visit the ",(0,r.jsx)(n.a,{href:"/validator",children:"MVMD Schema Validator"})]}),"\n",(0,r.jsx)(n.li,{children:"Paste your JSON-LD metadata into the input field"}),"\n",(0,r.jsx)(n.li,{children:'Click "Validate Schema"'}),"\n",(0,r.jsx)(n.li,{children:"Review the validation results"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The validator will show:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u2705 Success message if your schema is valid"}),"\n",(0,r.jsx)(n.li,{children:"\u274c Error messages with specific issues if validation fails"}),"\n",(0,r.jsx)(n.li,{children:"\u26a0\ufe0f Warnings for potential improvements"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-schemaorg-validator",children:"Using the Schema.org Validator"}),"\n",(0,r.jsxs)(n.p,{children:["The Schema.org Validator (",(0,r.jsx)(n.a,{href:"https://validator.schema.org/",children:"https://validator.schema.org/"}),") is the official validation tool. This guide explains how to use it effectively with MVMD metadata."]}),"\n",(0,r.jsx)(n.p,{children:"Note: In the future, MVMD will provide dedicated validation tools that handle namespaced properties, file attachments, and cross-references between files. This guide will be updated when those tools become available."}),"\n",(0,r.jsx)(n.h2,{id:"using-the-schemaorg-validator-1",children:"Using the Schema.org Validator"}),"\n",(0,r.jsx)(n.h3,{id:"step-1-prepare-your-metadata",children:"Step 1: Prepare Your Metadata"}),"\n",(0,r.jsx)(n.p,{children:"Before validation, ensure your metadata:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Has a properly defined ",(0,r.jsx)(n.code,{children:"@context"})]}),"\n",(0,r.jsx)(n.li,{children:"Uses valid Schema.org types"}),"\n",(0,r.jsx)(n.li,{children:"Includes all required properties"}),"\n",(0,r.jsx)(n.li,{children:"Uses proper JSON-LD formatting"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example of properly formatted metadata:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Asset Preview",\n  "description": "Preview image of 3D asset",\n  "contentUrl": "https://example.com/preview.jpg",\n  "encodingFormat": "image/jpeg"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can validate this example using either:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"/validator",children:"MVMD Schema Validator"}),' - Click "Validate Schema" to check against Schema.org standards']}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://validator.schema.org/",children:"Schema.org Validator"}),' - Click "Validate" to use the official validator']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"step-2-choose-your-validator",children:"Step 2: Choose Your Validator"}),"\n",(0,r.jsx)(n.h4,{id:"option-1-mvmd-schema-validator",children:"Option 1: MVMD Schema Validator"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.a,{href:"/validator",children:"MVMD Schema Validator"})]}),"\n",(0,r.jsx)(n.li,{children:"Paste your metadata into the input field"}),"\n",(0,r.jsx)(n.li,{children:'Click "Validate Schema"'}),"\n",(0,r.jsx)(n.li,{children:"Review the results"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"option-2-schemaorg-validator",children:"Option 2: Schema.org Validator"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://validator.schema.org/",children:"https://validator.schema.org/"})]}),"\n",(0,r.jsx)(n.li,{children:'Choose the "Validate" tab'}),"\n",(0,r.jsx)(n.li,{children:"Select JSON-LD as the format"}),"\n",(0,r.jsx)(n.li,{children:"Paste your metadata"}),"\n",(0,r.jsx)(n.li,{children:'Click "Validate"'}),"\n",(0,r.jsx)(n.li,{children:"Review the results"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-validation-issues",children:"Common Validation Issues"}),"\n",(0,r.jsx)(n.h3,{id:"1-missing-required-properties",children:"1. Missing Required Properties"}),"\n",(0,r.jsx)(n.p,{children:"Error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "ImageObject"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Fix:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "ImageObject",\n  "name": "Asset Name",\n  "contentUrl": "https://example.com/image.jpg"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-invalid-type-values",children:"2. Invalid Type Values"}),"\n",(0,r.jsx)(n.p,{children:"Error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DAsset",\n  "name": "Example Asset"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Fix:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Example Asset"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-incorrect-property-types",children:"3. Incorrect Property Types"}),"\n",(0,r.jsx)(n.p,{children:"Error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "ImageObject",\n  "name": "Asset Name",\n  "contentUrl": 12345\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Fix:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "ImageObject",\n  "name": "Asset Name",\n  "contentUrl": "https://example.com/image.jpg"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"handling-namespaced-properties",children:"Handling Namespaced Properties"}),"\n",(0,r.jsx)(n.p,{children:"The Schema.org validator will ignore properties from other namespaces. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Example Model",\n  "gltf:asset": {\n    "version": "2.0"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"gltf:asset"})," property will be ignored during validation. This is expected behavior until MVMD's dedicated validation tools are available."]}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Validate Core Properties First"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start with basic Schema.org properties"}),"\n",(0,r.jsx)(n.li,{children:"Ensure all required fields are present"}),"\n",(0,r.jsx)(n.li,{children:"Use correct property types"}),"\n",(0,r.jsx)(n.li,{children:"Fix any validation errors"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Document Namespaced Properties"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keep track of non-Schema.org properties"}),"\n",(0,r.jsx)(n.li,{children:"Document their requirements"}),"\n",(0,r.jsx)(n.li,{children:"Plan for future validation"}),"\n",(0,r.jsx)(n.li,{children:"Follow standard specifications"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Regular Validation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validate during development"}),"\n",(0,r.jsx)(n.li,{children:"Check after updates"}),"\n",(0,r.jsx)(n.li,{children:"Monitor for changes"}),"\n",(0,r.jsx)(n.li,{children:"Keep documentation current"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"future-mvmd-validation",children:"Future MVMD Validation"}),"\n",(0,r.jsx)(n.p,{children:"The upcoming MVMD validation tools will provide:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Complete Validation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Schema.org compliance"}),"\n",(0,r.jsx)(n.li,{children:"Namespace validation"}),"\n",(0,r.jsx)(n.li,{children:"File attachment verification"}),"\n",(0,r.jsx)(n.li,{children:"Cross-reference checking"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Extended Features"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Profile-specific validation"}),"\n",(0,r.jsx)(n.li,{children:"Custom rule sets"}),"\n",(0,r.jsx)(n.li,{children:"Batch validation"}),"\n",(0,r.jsx)(n.li,{children:"Automated testing"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Integration Support"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"API access"}),"\n",(0,r.jsx)(n.li,{children:"CI/CD integration"}),"\n",(0,r.jsx)(n.li,{children:"Development tools"}),"\n",(0,r.jsx)(n.li,{children:"Validation reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Review ",(0,r.jsx)(n.a,{href:"/implementation/metadata-fundamentals.md",children:"Metadata Fundamentals"})]}),"\n",(0,r.jsxs)(n.li,{children:["Check ",(0,r.jsx)(n.a,{href:"/implementation/best-practices",children:"Best Practices"})]}),"\n",(0,r.jsxs)(n.li,{children:["Explore ",(0,r.jsx)(n.a,{href:"/implementation/metadata-profiles/basic-profile.md",children:"Profile Requirements"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var a=i(6540);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);