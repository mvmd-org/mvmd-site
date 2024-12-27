"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[3064],{9521:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"implementation/composable/concepts","title":"Composable Assets Concepts","description":"Composable assets are virtual items that can be combined, assembled, or nested to create more complex assets. This guide covers the fundamental concepts and architecture for implementing composable assets.","source":"@site/docs/implementation/composable/concepts.md","sourceDirName":"implementation/composable","slug":"/implementation/composable/concepts","permalink":"/implementation/composable/concepts","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/implementation/composable/concepts.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"examples","permalink":"/implementation/nft/examples"},"next":{"title":"Using Schema.org hasPart","permalink":"/implementation/composable/schema-parts"}}');var i=s(4848),l=s(8453);const o={sidebar_position:1},r="Composable Assets Concepts",a={},c=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Component Structure",id:"component-structure",level:3},{value:"Assembly Rules",id:"assembly-rules",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Component Validation",id:"component-validation",level:3},{value:"Assembly Validation",id:"assembly-validation",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"composable-assets-concepts",children:"Composable Assets Concepts"})}),"\n",(0,i.jsx)(n.p,{children:"Composable assets are virtual items that can be combined, assembled, or nested to create more complex assets. This guide covers the fundamental concepts and architecture for implementing composable assets."}),"\n",(0,i.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,i.jsx)(n.h3,{id:"component-structure",children:"Component Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Modular Robot",\n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "name": "Robot Head",\n      "contentUrl": "https://example.com/models/head.glb"\n    },\n    {\n      "@type": "3DModel",\n      "name": "Robot Body",\n      "contentUrl": "https://example.com/models/body.glb"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"assembly-rules",children:"Assembly Rules"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "assemblyRules": {\n    "required": ["head", "body", "legs"],\n    "optional": ["arms", "weapons"],\n    "constraints": {\n      "maxWeapons": 2,\n      "maxArms": 2\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Customizable Battle Mech",\n  "description": "Modular battle mech with interchangeable components",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "composable-2024-001"\n  },\n  \n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "@id": "#core",\n      "name": "Mech Core",\n      "contentUrl": "https://example.com/models/core.glb",\n      "required": true\n    },\n    {\n      "@type": "3DModel",\n      "@id": "#armor",\n      "name": "Heavy Armor",\n      "contentUrl": "https://example.com/models/armor.glb",\n      "attachmentPoints": ["core_mount"],\n      "optional": true\n    }\n  ],\n  \n  "assemblyRules": {\n    "required": ["core"],\n    "optional": ["armor", "weapons", "accessories"],\n    "constraints": {\n      "maxWeight": 1000,\n      "maxPower": 500,\n      "compatibilityRules": [\n        {\n          "if": "heavy_armor",\n          "then": "power_core_v2"\n        }\n      ]\n    }\n  },\n  \n  "attachmentSystem": {\n    "points": [\n      {\n        "id": "weapon_mount_left",\n        "type": "weapon",\n        "position": [-1, 0, 0]\n      },\n      {\n        "id": "weapon_mount_right",\n        "type": "weapon",\n        "position": [1, 0, 0]\n      }\n    ],\n    "sockets": [\n      {\n        "id": "core_mount",\n        "type": "armor",\n        "position": [0, 0, 0]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,i.jsx)(n.h3,{id:"component-validation",children:"Component Validation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Valid part references"}),"\n",(0,i.jsx)(n.li,{children:"Proper attachment points"}),"\n",(0,i.jsx)(n.li,{children:"Complete constraints"}),"\n",(0,i.jsx)(n.li,{children:"Resource limits"}),"\n",(0,i.jsx)(n.li,{children:"Compatibility rules"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"assembly-validation",children:"Assembly Validation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Required components present"}),"\n",(0,i.jsx)(n.li,{children:"Optional limits respected"}),"\n",(0,i.jsx)(n.li,{children:"Weight constraints"}),"\n",(0,i.jsx)(n.li,{children:"Power requirements"}),"\n",(0,i.jsx)(n.li,{children:"Physical constraints"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Component Design"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Modular architecture"}),"\n",(0,i.jsx)(n.li,{children:"Clear interfaces"}),"\n",(0,i.jsx)(n.li,{children:"Standardized connections"}),"\n",(0,i.jsx)(n.li,{children:"Resource management"}),"\n",(0,i.jsx)(n.li,{children:"Version control"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Assembly Logic"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clear rules"}),"\n",(0,i.jsx)(n.li,{children:"Efficient validation"}),"\n",(0,i.jsx)(n.li,{children:"Error handling"}),"\n",(0,i.jsx)(n.li,{children:"User feedback"}),"\n",(0,i.jsx)(n.li,{children:"State management"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Performance Optimization"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Resource loading"}),"\n",(0,i.jsx)(n.li,{children:"Physics calculations"}),"\n",(0,i.jsx)(n.li,{children:"Memory management"}),"\n",(0,i.jsx)(n.li,{children:"Network efficiency"}),"\n",(0,i.jsx)(n.li,{children:"Visual quality"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"User Experience"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clear interfaces"}),"\n",(0,i.jsx)(n.li,{children:"Visual feedback"}),"\n",(0,i.jsx)(n.li,{children:"Error messaging"}),"\n",(0,i.jsx)(n.li,{children:"Assembly guidance"}),"\n",(0,i.jsx)(n.li,{children:"Save/load support"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Review ",(0,i.jsx)(n.a,{href:"/implementation/composable/schema-parts",children:"Schema Parts"})," for implementation details"]}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"/implementation/composable/assembly-patterns",children:"Assembly Patterns"})," for practical examples"]}),"\n",(0,i.jsxs)(n.li,{children:["Check ",(0,i.jsx)(n.a,{href:"/tools/validation",children:"Validation Tools"})," for testing"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(6540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);