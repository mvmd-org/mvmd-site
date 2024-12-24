"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[340],{8638:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"implementation/best-practices","title":"Best Practices","description":"This guide outlines practical guidelines for implementing high-quality Metaverse metadata. Following these practices ensures your metadata is discoverable, maintainable, and interoperable.","source":"@site/docs/implementation/best-practices.md","sourceDirName":"implementation","slug":"/implementation/best-practices","permalink":"/implementation/best-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/implementation/best-practices.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Environment Profile","permalink":"/implementation/metadata-profiles/environment-profile"},"next":{"title":"Validation Guide?","permalink":"/tools/validation"}}');var r=i(4848),t=i(8453);const a={sidebar_position:3},l="Best Practices",c={},o=[{value:"Metadata Structure",id:"metadata-structure",level:2},{value:"Use Clear Organization",id:"use-clear-organization",level:3},{value:"Use Proper Namespacing",id:"use-proper-namespacing",level:3},{value:"Content Quality",id:"content-quality",level:2},{value:"Write Clear Descriptions",id:"write-clear-descriptions",level:3},{value:"Include Technical Details",id:"include-technical-details",level:3},{value:"Asset Relationships",id:"asset-relationships",level:2},{value:"Define Clear Hierarchies",id:"define-clear-hierarchies",level:3},{value:"Reference Resources Properly",id:"reference-resources-properly",level:3},{value:"Version Management",id:"version-management",level:2},{value:"Track Changes Clearly",id:"track-changes-clearly",level:3},{value:"Rights Management",id:"rights-management",level:2},{value:"Specify Clear Licensing",id:"specify-clear-licensing",level:3},{value:"Implementation Guidelines",id:"implementation-guidelines",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"best-practices",children:"Best Practices"})}),"\n",(0,r.jsx)(n.p,{children:"This guide outlines practical guidelines for implementing high-quality Metaverse metadata. Following these practices ensures your metadata is discoverable, maintainable, and interoperable."}),"\n",(0,r.jsx)(n.h2,{id:"metadata-structure",children:"Metadata Structure"}),"\n",(0,r.jsx)(n.h3,{id:"use-clear-organization",children:"Use Clear Organization"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Group related properties logically"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  \n  "name": "Office Chair",\n  "description": "Ergonomic office chair with adjustable height",\n  \n  "creator": {\n    "@type": "Organization",\n    "name": "Virtual Furnishings Inc.",\n    "url": "https://example.com/virtual-furnishings"\n  },\n  \n  "contentUrl": "https://example.com/models/chair.glb",\n  "encodingFormat": "model/gltf-binary",\n  \n  "license": "https://creativecommons.org/licenses/by/4.0/",\n  "dateCreated": "2024-03-15"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Mix unrelated properties randomly"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "contentUrl": "https://example.com/models/chair.glb",\n  "creator": {"@type": "Organization"},\n  "dateCreated": "2024-03-15",\n  "name": "Office Chair",\n  "encodingFormat": "model/gltf-binary"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"use-proper-namespacing",children:"Use Proper Namespacing"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Clearly separate different standards"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Office Chair",\n  \n  "gltf:transform": {\n    "scale": [1.0, 1.0, 1.0],\n    "rotation": [0, 0, 0, 1],\n    "translation": [0, 0.45, 0]\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Mix standards without namespacing"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "scale": [1.0, 1.0, 1.0],\n  "rotation": [0, 0, 0, 1]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"content-quality",children:"Content Quality"}),"\n",(0,r.jsx)(n.h3,{id:"write-clear-descriptions",children:"Write Clear Descriptions"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Provide detailed, specific descriptions"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Ergonomic Office Chair",\n  "description": "High-backed office chair with adjustable height, tilt mechanism, and lumbar support. Suitable for professional office environments. Available in blue and black variants.",\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "name": "seatHeight",\n      "value": "45-60cm",\n      "unitCode": "CMT"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Use vague or minimal descriptions"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Chair",\n  "description": "An office chair"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"include-technical-details",children:"Include Technical Details"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Specify precise technical information"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "contentSize": "2048576",\n  "encodingFormat": "model/gltf-binary",\n  "gltf:materials": [{\n    "name": "Fabric",\n    "pbrMetallicRoughness": {\n      "baseColorFactor": [0.2, 0.2, 0.8, 1.0],\n      "metallicFactor": 0.0,\n      "roughnessFactor": 0.8\n    }\n  }]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Omit or provide imprecise technical details"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "contentSize": "2MB",\n  "encodingFormat": "glb"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"asset-relationships",children:"Asset Relationships"}),"\n",(0,r.jsx)(n.h3,{id:"define-clear-hierarchies",children:"Define Clear Hierarchies"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Use explicit relationships"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "CreativeWork",\n  "name": "Office Furniture Set",\n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "@id": "https://example.com/models/chair",\n      "name": "Office Chair"\n    },\n    {\n      "@type": "3DModel",\n      "@id": "https://example.com/models/desk",\n      "name": "Office Desk"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Use ambiguous relationships"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "CreativeWork",\n  "name": "Office Set",\n  "related": [\n    "chair",\n    "desk"\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"reference-resources-properly",children:"Reference Resources Properly"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Use full, resolvable URLs"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "contentUrl": "https://example.com/models/chair.glb",\n  "thumbnailUrl": "https://example.com/thumbnails/chair.jpg",\n  "sameAs": [\n    "https://other-platform.com/models/chair-123",\n    "ipfs://QmXaXa1XaX..."\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Use relative or incomplete references"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "contentUrl": "/models/chair.glb",\n  "thumbnailUrl": "chair.jpg"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"version-management",children:"Version Management"}),"\n",(0,r.jsx)(n.h3,{id:"track-changes-clearly",children:"Track Changes Clearly"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Include version information"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "version": "2.1.0",\n  "dateModified": "2024-03-15",\n  "previousVersion": {\n    "@id": "https://example.com/models/chair/2.0.0",\n    "version": "2.0.0",\n    "dateModified": "2024-02-01"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Omit version tracking"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "dateModified": "2024-03-15"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"rights-management",children:"Rights Management"}),"\n",(0,r.jsx)(n.h3,{id:"specify-clear-licensing",children:"Specify Clear Licensing"}),"\n",(0,r.jsxs)(n.p,{children:["\u2705 ",(0,r.jsx)(n.strong,{children:"Do"}),": Include detailed rights information"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "license": "https://creativecommons.org/licenses/by/4.0/",\n  "acquireLicensePage": "https://example.com/license/chair",\n  "creditText": "Created by Virtual Furnishings Inc.",\n  "copyrightNotice": "\xa9 2024 Virtual Furnishings Inc. All rights reserved.",\n  "usageTerms": "Attribution required. Commercial use allowed."\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u274c ",(0,r.jsx)(n.strong,{children:"Don't"}),": Use vague licensing terms"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Office Chair",\n  "license": "free for use"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"implementation-guidelines",children:"Implementation Guidelines"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Start Simple"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Begin with basic Schema.org properties"}),"\n",(0,r.jsx)(n.li,{children:"Add technical details gradually"}),"\n",(0,r.jsx)(n.li,{children:"Validate at each step"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Maintain Consistency"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use consistent property names"}),"\n",(0,r.jsx)(n.li,{children:"Follow standard date formats"}),"\n",(0,r.jsx)(n.li,{children:"Apply consistent naming conventions"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Plan for Evolution"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Design for extensibility"}),"\n",(0,r.jsx)(n.li,{children:"Document changes clearly"}),"\n",(0,r.jsx)(n.li,{children:"Maintain backwards compatibility"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Optimize for Discovery"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use descriptive names"}),"\n",(0,r.jsx)(n.li,{children:"Include relevant keywords"}),"\n",(0,r.jsx)(n.li,{children:"Add proper categorization"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Regular Validation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check required properties"}),"\n",(0,r.jsx)(n.li,{children:"Verify format compliance"}),"\n",(0,r.jsx)(n.li,{children:"Test references"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Review ",(0,r.jsx)(n.a,{href:"/metadata-profiles/basic-profile.md",children:"Metadata Profiles"})," for structure templates"]}),"\n",(0,r.jsxs)(n.li,{children:["Check ",(0,r.jsx)(n.a,{href:"/tools/validation",children:"Validation Tools"})," for compliance testing"]}),"\n",(0,r.jsxs)(n.li,{children:["Explore ",(0,r.jsx)(n.a,{href:"/standards/overview",children:"Standards"})," for advanced features"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);