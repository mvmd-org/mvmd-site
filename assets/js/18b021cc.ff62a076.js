"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[735],{3827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"introduction/quickstart","title":"Quickstart Guide","description":"This guide helps you quickly implement basic metadata for your Metaverse assets using MVMD standards.","source":"@site/docs/introduction/quickstart.md","sourceDirName":"introduction","slug":"/introduction/quickstart","permalink":"/introduction/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/introduction/quickstart.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Core Concepts","permalink":"/introduction/concepts"},"next":{"title":"Standards Registry Overview","permalink":"/standards/overview"}}');var i=t(4848),s=t(8453);const r={sidebar_position:3},l="Quickstart Guide",o={},d=[{value:"Basic 3D Asset Example",id:"basic-3d-asset-example",level:2},{value:"Step-by-Step Implementation",id:"step-by-step-implementation",level:2},{value:"1. Choose Your Asset Type",id:"1-choose-your-asset-type",level:3},{value:"2. Add Basic Information",id:"2-add-basic-information",level:3},{value:"3. Add Technical Details",id:"3-add-technical-details",level:3},{value:"4. Add Standard-Specific Properties",id:"4-add-standard-specific-properties",level:3},{value:"5. Validate Your Metadata",id:"5-validate-your-metadata",level:3},{value:"Common Asset Types",id:"common-asset-types",level:2},{value:"Avatar",id:"avatar",level:3},{value:"Environment",id:"environment",level:3},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"quickstart-guide",children:"Quickstart Guide"})}),"\n",(0,i.jsx)(n.p,{children:"This guide helps you quickly implement basic metadata for your Metaverse assets using MVMD standards."}),"\n",(0,i.jsx)(n.h2,{id:"basic-3d-asset-example",children:"Basic 3D Asset Example"}),"\n",(0,i.jsx)(n.p,{children:"Here's a complete example of metadata for a 3D model:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Modern Chair",\n  "description": "A comfortable modern office chair with adjustable height",\n  "creator": {\n    "@type": "Organization",\n    "name": "Virtual Furnishings Inc.",\n    "url": "https://example.com/virtual-furnishings"\n  },\n  "dateCreated": "2024-03-15",\n  "license": "https://creativecommons.org/licenses/by/4.0/",\n  "contentUrl": "https://example.com/models/modern-chair.glb",\n  "thumbnailUrl": "https://example.com/thumbnails/modern-chair.jpg",\n  "gltf:asset": {\n    "version": "2.0",\n    "copyright": "\xa9 2024 Virtual Furnishings Inc."\n  },\n  "gltf:transform": {\n    "scale": [1.0, 1.0, 1.0],\n    "rotation": [0, 0, 0, 1],\n    "translation": [0, 0.5, 0]\n  },\n  "gltf:materials": [{\n    "name": "Chair_Fabric",\n    "pbrMetallicRoughness": {\n      "baseColorFactor": [0.2, 0.2, 0.8, 1.0],\n      "metallicFactor": 0.0,\n      "roughnessFactor": 0.8\n    }\n  }],\n  "gltf:animations": [{\n    "name": "ChairSpin",\n    "type": "rotation",\n    "duration": 2.0\n  }]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step-implementation",children:"Step-by-Step Implementation"}),"\n",(0,i.jsx)(n.h3,{id:"1-choose-your-asset-type",children:"1. Choose Your Asset Type"}),"\n",(0,i.jsx)(n.p,{children:"Select the appropriate type for your asset:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"3DModel"})," for individual 3D objects"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VirtualCharacter"})," for avatars"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Place"})," for environments"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-add-basic-information",children:"2. Add Basic Information"}),"\n",(0,i.jsx)(n.p,{children:"Include essential Schema.org properties:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Asset Name",\n  "description": "Clear description of your asset",\n  "creator": {\n    "@type": "Organization",\n    "name": "Your Organization"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-add-technical-details",children:"3. Add Technical Details"}),"\n",(0,i.jsx)(n.p,{children:"Include format and access information:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "contentUrl": "https://example.com/your-asset.glb",\n  "encodingFormat": "model/gltf-binary",\n  "dateCreated": "2024-03-15",\n  "license": "https://creativecommons.org/licenses/by/4.0/"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"4-add-standard-specific-properties",children:"4. Add Standard-Specific Properties"}),"\n",(0,i.jsx)(n.p,{children:"Include properties from relevant standards:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "gltf:asset": {\n    "version": "2.0",\n    "copyright": "\xa9 2024 Your Organization"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"5-validate-your-metadata",children:"5. Validate Your Metadata"}),"\n",(0,i.jsx)(n.p,{children:"Check your metadata using the MVMD Validator:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://validator.mvmd.org",children:"validator.mvmd.org"})]}),"\n",(0,i.jsx)(n.li,{children:"Paste your metadata"}),"\n",(0,i.jsx)(n.li,{children:'Click "Validate"'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-asset-types",children:"Common Asset Types"}),"\n",(0,i.jsx)(n.h3,{id:"avatar",children:"Avatar"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "VirtualCharacter",\n  "name": "Default Avatar",\n  "description": "Basic humanoid avatar with standard animations",\n  "contentUrl": "https://example.com/avatars/default.glb",\n  "thumbnailUrl": "https://example.com/thumbnails/default-avatar.jpg",\n  "additionalProperty": {\n    "@type": "PropertyValue",\n    "name": "avatarType",\n    "value": "humanoid"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"environment",children:"Environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "Place",\n  "name": "Town Square",\n  "description": "Public virtual gathering space with seating and interactive displays",\n  "contentUrl": "https://example.com/environments/town-square.usd",\n  "thumbnailUrl": "https://example.com/thumbnails/town-square.jpg",\n  "maximumAttendeeCapacity": 100\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(n.p,{children:"After implementing basic metadata:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add More Detail"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Review full ",(0,i.jsx)(n.a,{href:"/standards/overview",children:"standards documentation"})]}),"\n",(0,i.jsx)(n.li,{children:"Add standard-specific properties"}),"\n",(0,i.jsx)(n.li,{children:"Include authentication data"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Implement Advanced Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add geospatial information"}),"\n",(0,i.jsx)(n.li,{children:"Include provenance data"}),"\n",(0,i.jsx)(n.li,{children:"Define interactions"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Explore Tools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Try the validation API"}),"\n",(0,i.jsx)(n.li,{children:"Use metadata query tools"}),"\n",(0,i.jsx)(n.li,{children:"Implement automated validation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For more detailed information, see:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/implementation/metadata-profiles/basic-profile",children:"Metadata Profiles"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/implementation/best-practices",children:"Best Practices"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/tools/api-reference",children:"API Reference"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);