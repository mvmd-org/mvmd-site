"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[3372],{541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"implementation/nfts","title":"NFTs","description":"NFTs can leverage Schema.org metadata to enhance their functionality while maintaining compatibility with existing blockchain standards. This guide shows how to extend standard NFT metadata formats with rich Schema.org descriptions.","source":"@site/docs/implementation/nfts.md","sourceDirName":"implementation","slug":"/implementation/nfts","permalink":"/implementation/nfts","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/implementation/nfts.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Assets","permalink":"/implementation/assets"},"next":{"title":"Composable","permalink":"/implementation/composable"}}');var a=n(4848),r=n(8453);const s={},l="NFTs",o={},c=[{value:"Modern NFT Capabilities",id:"modern-nft-capabilities",level:2},{value:"ERC-721 Metadata Standard",id:"erc-721-metadata-standard",level:2},{value:"Integration Approaches",id:"integration-approaches",level:2},{value:"1. Root Data Attribute",id:"1-root-data-attribute",level:3},{value:"2. Direct Integration",id:"2-direct-integration",level:3},{value:"When to Use Each Approach",id:"when-to-use-each-approach",level:2},{value:"Use Root Data Attribute",id:"use-root-data-attribute",level:3},{value:"Use Direct Integration",id:"use-direct-integration",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Schema.org Implementation",id:"schemaorg-implementation",level:3},{value:"Data Quality",id:"data-quality",level:3},{value:"Note to Platform/App Developers",id:"note-to-platformapp-developers",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"nfts",children:"NFTs"})}),"\n",(0,a.jsx)(t.p,{children:"NFTs can leverage Schema.org metadata to enhance their functionality while maintaining compatibility with existing blockchain standards. This guide shows how to extend standard NFT metadata formats with rich Schema.org descriptions."}),"\n",(0,a.jsx)(t.h2,{id:"modern-nft-capabilities",children:"Modern NFT Capabilities"}),"\n",(0,a.jsx)(t.p,{children:"Modern NFTs can support:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Multiple file formats per token"}),"\n",(0,a.jsx)(t.li,{children:"Different quality levels of assets"}),"\n",(0,a.jsx)(t.li,{children:"Supporting materials and documentation"}),"\n",(0,a.jsx)(t.li,{children:"Platform-specific implementations"}),"\n",(0,a.jsx)(t.li,{children:"Interactive behaviors"}),"\n",(0,a.jsx)(t.li,{children:"Dynamic properties"}),"\n",(0,a.jsx)(t.li,{children:"Cross-platform compatibility"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"erc-721-metadata-standard",children:"ERC-721 Metadata Standard"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC-721 standard"})," defines a basic metadata structure that most NFT platforms expect:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Asset Name",\n  "description": "Asset Description",\n  "image": "https://example.com/image.jpg",\n  "attributes": [\n    {\n      "trait_type": "Property Name",\n      "value": "Property Value"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Required fields:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"name"}),": Token name"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"description"}),": Token description"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"image"}),": URL to token image"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"attributes"}),": Array of trait objects (optional but common)"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This basic structure is widely supported but limited in its ability to describe complex digital assets."}),"\n",(0,a.jsx)(t.h2,{id:"integration-approaches",children:"Integration Approaches"}),"\n",(0,a.jsx)(t.h3,{id:"1-root-data-attribute",children:"1. Root Data Attribute"}),"\n",(0,a.jsx)(t.p,{children:"This approach preserves the original ERC-721 structure while adding Schema.org metadata:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Example NFT",\n  "description": "Platform-compatible NFT description",\n  "image": "https://example.com/preview.jpg",\n  "attributes": [\n    {\n      "trait_type": "Rarity",\n      "value": "Legendary"\n    }\n  ],\n  "data": {\n    "@context": {\n      "@vocab": "https://schema.org/",\n      "mvmd": "https://mvmd.org/v1/"\n    },\n    "@type": "ImageObject",\n    "contentUrl": "https://example.com/preview.jpg",\n    "encodingFormat": "image/jpeg",\n    "associatedMedia": [\n      {\n        "@type": "3DModel",\n        "contentUrl": "https://example.com/model.glb",\n        "encodingFormat": "model/gltf-binary"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"2-direct-integration",children:"2. Direct Integration"}),"\n",(0,a.jsx)(t.p,{children:"This approach merges Schema.org properties with the NFT metadata:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "ImageObject",\n  "name": "Example NFT",\n  "description": "Enhanced NFT description",\n  "contentUrl": "https://example.com/preview.jpg",\n  "encodingFormat": "image/jpeg",\n  "attributes": [\n    {\n      "trait_type": "Rarity",\n      "value": "Legendary"\n    }\n  ],\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "contentUrl": "https://example.com/model.glb",\n      "encodingFormat": "model/gltf-binary"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"when-to-use-each-approach",children:"When to Use Each Approach"}),"\n",(0,a.jsx)(t.h3,{id:"use-root-data-attribute",children:"Use Root Data Attribute"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Working with established NFT marketplaces"}),"\n",(0,a.jsx)(t.li,{children:"Maximum compatibility is required"}),"\n",(0,a.jsx)(t.li,{children:"Existing metadata processing must be maintained"}),"\n",(0,a.jsx)(t.li,{children:"Platform may not understand Schema.org"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"use-direct-integration",children:"Use Direct Integration"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Building new platforms or marketplaces"}),"\n",(0,a.jsx)(t.li,{children:"Full control over metadata processing"}),"\n",(0,a.jsx)(t.li,{children:"Schema.org compatibility is primary concern"}),"\n",(0,a.jsx)(t.li,{children:"Metadata redundancy should be minimized"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsx)(t.h3,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Maintain required ERC-721 fields"}),"\n",(0,a.jsx)(t.li,{children:"Ensure valid URLs"}),"\n",(0,a.jsx)(t.li,{children:"Test with target platforms"}),"\n",(0,a.jsx)(t.li,{children:"Handle missing data gracefully"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"schemaorg-implementation",children:"Schema.org Implementation"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Use proper context declarations"}),"\n",(0,a.jsx)(t.li,{children:"Choose appropriate types"}),"\n",(0,a.jsx)(t.li,{children:"Maintain consistent naming"}),"\n",(0,a.jsx)(t.li,{children:"Document custom properties"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"data-quality",children:"Data Quality"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Avoid duplicate information"}),"\n",(0,a.jsx)(t.li,{children:"Use appropriate data types"}),"\n",(0,a.jsx)(t.li,{children:"Include required properties"}),"\n",(0,a.jsx)(t.li,{children:"Validate all URLs"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"note-to-platformapp-developers",children:"Note to Platform/App Developers"}),"\n",(0,a.jsx)(t.p,{children:"When implementing NFT metadata support in your platform or application, ensure you can handle both integration approaches (root data attribute and direct integration) to maintain compatibility and future-proofing. Your platform should:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Check for Schema.org properties at both the root level and in the data attribute"}),"\n",(0,a.jsx)(t.li,{children:"Process whichever format is present without breaking standard ERC-721 compatibility"}),"\n",(0,a.jsx)(t.li,{children:"Document which approach your platform prefers while supporting both"}),"\n",(0,a.jsx)(t.li,{children:"Gracefully handle cases where metadata exists in both locations"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Supporting both approaches ensures your platform works with current NFT standards while being ready for enhanced metadata capabilities."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Note: For detailed examples of NFT metadata implementation, including complex scenarios with multiple assets, character metadata, and interactive elements, please refer to the Examples section of the documentation. (Coming soon)"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);