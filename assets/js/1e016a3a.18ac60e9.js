"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[6359],{805:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"implementation/composable/assembly-patterns","title":"Assembly Patterns and Examples","description":"This guide provides practical patterns and examples for implementing composable asset assembly systems.","source":"@site/docs/implementation/composable/assembly-patterns.md","sourceDirName":"implementation/composable","slug":"/implementation/composable/assembly-patterns","permalink":"/implementation/composable/assembly-patterns","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/implementation/composable/assembly-patterns.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Using Schema.org hasPart","permalink":"/implementation/composable/schema-parts"},"next":{"title":"Best Practices","permalink":"/implementation/best-practices"}}');var t=s(4848),l=s(8453);const a={sidebar_position:3},o="Assembly Patterns and Examples",r={},c=[{value:"Basic Patterns",id:"basic-patterns",level:2},{value:"Linear Assembly",id:"linear-assembly",level:3},{value:"Hierarchical Assembly",id:"hierarchical-assembly",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Assembly Patterns",id:"assembly-patterns",level:2},{value:"Socket-Based Assembly",id:"socket-based-assembly",level:3},{value:"Constraint-Based Assembly",id:"constraint-based-assembly",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Common Patterns",id:"common-patterns",level:2},{value:"Modular Building System",id:"modular-building-system",level:3},{value:"Vehicle Assembly",id:"vehicle-assembly",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Physical Validation",id:"physical-validation",level:3},{value:"Logical Validation",id:"logical-validation",level:3},{value:"Implementation Examples",id:"implementation-examples",level:2},{value:"Simple Connection",id:"simple-connection",level:3},{value:"Complex Assembly",id:"complex-assembly",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"assembly-patterns-and-examples",children:"Assembly Patterns and Examples"})}),"\n",(0,t.jsx)(e.p,{children:"This guide provides practical patterns and examples for implementing composable asset assembly systems."}),"\n",(0,t.jsx)(e.h2,{id:"basic-patterns",children:"Basic Patterns"}),"\n",(0,t.jsx)(e.h3,{id:"linear-assembly",children:"Linear Assembly"}),"\n",(0,t.jsx)(e.p,{children:"Components assembled in sequence:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Linear Assembly",\n  "assemblySequence": [\n    {\n      "step": 1,\n      "component": "#base",\n      "description": "Place base component"\n    },\n    {\n      "step": 2,\n      "component": "#middle",\n      "description": "Attach middle section"\n    },\n    {\n      "step": 3,\n      "component": "#top",\n      "description": "Add top component"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"hierarchical-assembly",children:"Hierarchical Assembly"}),"\n",(0,t.jsx)(e.p,{children:"Nested component structure:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Hierarchical Assembly",\n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "@id": "#main",\n      "name": "Main Assembly",\n      "hasPart": [\n        {\n          "@type": "3DModel",\n          "@id": "#sub-1",\n          "name": "Sub Assembly 1",\n          "hasPart": [\n            {\n              "@type": "3DModel",\n              "@id": "#component-1",\n              "name": "Component 1"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": "https://schema.org/",\n  "@type": "3DModel",\n  "name": "Modular Furniture Set",\n  "description": "Customizable furniture set with multiple configurations",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "furniture-2024-001"\n  },\n  \n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "@id": "#base",\n      "name": "Base Unit",\n      "contentUrl": "https://example.com/furniture/base.glb",\n      "required": true,\n      "attachmentPoints": [\n        {\n          "id": "left",\n          "type": "extension",\n          "position": [-1, 0, 0]\n        },\n        {\n          "id": "right",\n          "type": "extension",\n          "position": [1, 0, 0]\n        }\n      ]\n    },\n    {\n      "@type": "3DModel",\n      "@id": "#extension",\n      "name": "Extension Unit",\n      "contentUrl": "https://example.com/furniture/extension.glb",\n      "optional": true,\n      "maxCount": 2,\n      "attachesTo": ["left", "right"]\n    },\n    {\n      "@type": "3DModel",\n      "@id": "#top",\n      "name": "Top Unit",\n      "contentUrl": "https://example.com/furniture/top.glb",\n      "required": true,\n      "attachesTo": ["base", "extension"],\n      "variants": [\n        {\n          "id": "flat",\n          "name": "Flat Top",\n          "contentUrl": "https://example.com/furniture/top-flat.glb"\n        },\n        {\n          "id": "curved",\n          "name": "Curved Top",\n          "contentUrl": "https://example.com/furniture/top-curved.glb"\n        }\n      ]\n    }\n  ],\n  \n  "assemblyRules": {\n    "required": ["base", "top"],\n    "optional": ["extension"],\n    "constraints": {\n      "maxWidth": 3,\n      "maxExtensions": 2,\n      "compatibilityRules": [\n        {\n          "if": "extension.count >= 2",\n          "then": "top.flat"\n        }\n      ]\n    }\n  },\n  \n  "configurations": [\n    {\n      "name": "Basic",\n      "parts": ["base", "top.flat"]\n    },\n    {\n      "name": "Extended",\n      "parts": ["base", "extension", "top.curved"]\n    },\n    {\n      "name": "Full",\n      "parts": ["base", "extension", "extension", "top.flat"]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"assembly-patterns",children:"Assembly Patterns"}),"\n",(0,t.jsx)(e.h3,{id:"socket-based-assembly",children:"Socket-Based Assembly"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "attachmentSystem": {\n    "sockets": [\n      {\n        "id": "socket-1",\n        "type": "universal",\n        "position": [0, 0, 0],\n        "rotation": [0, 0, 0, 1],\n        "accepts": ["type-a", "type-b"]\n      }\n    ],\n    "plugs": [\n      {\n        "id": "plug-1",\n        "type": "type-a",\n        "position": [0, 0, 0],\n        "rotation": [0, 0, 0, 1]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"constraint-based-assembly",children:"Constraint-Based Assembly"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "constraints": {\n    "physical": {\n      "maxWeight": 100,\n      "maxSize": [10, 10, 10],\n      "centerOfMass": [0, 0, 0]\n    },\n    "logical": {\n      "requiredTypes": ["base", "top"],\n      "incompatiblePairs": [\n        ["heavy", "small_base"],\n        ["tall", "unstable"]\n      ]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Assembly Design"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Clear connection points"}),"\n",(0,t.jsx)(e.li,{children:"Logical constraints"}),"\n",(0,t.jsx)(e.li,{children:"Intuitive sequences"}),"\n",(0,t.jsx)(e.li,{children:"Error prevention"}),"\n",(0,t.jsx)(e.li,{children:"Visual feedback"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Component Management"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Version control"}),"\n",(0,t.jsx)(e.li,{children:"Dependency tracking"}),"\n",(0,t.jsx)(e.li,{children:"Update handling"}),"\n",(0,t.jsx)(e.li,{children:"Cache management"}),"\n",(0,t.jsx)(e.li,{children:"Resource optimization"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"User Experience"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Clear instructions"}),"\n",(0,t.jsx)(e.li,{children:"Visual guides"}),"\n",(0,t.jsx)(e.li,{children:"Error handling"}),"\n",(0,t.jsx)(e.li,{children:"Undo/redo support"}),"\n",(0,t.jsx)(e.li,{children:"Progress saving"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Performance"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Efficient loading"}),"\n",(0,t.jsx)(e.li,{children:"Resource management"}),"\n",(0,t.jsx)(e.li,{children:"Physics optimization"}),"\n",(0,t.jsx)(e.li,{children:"Memory usage"}),"\n",(0,t.jsx)(e.li,{children:"Network efficiency"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"common-patterns",children:"Common Patterns"}),"\n",(0,t.jsx)(e.h3,{id:"modular-building-system",children:"Modular Building System"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "buildingSystem": {\n    "grid": {\n      "size": 1.0,\n      "snapPoints": ["center", "edge", "corner"],\n      "rotation": 90\n    },\n    "rules": {\n      "support": "required",\n      "overlap": "forbidden",\n      "gravity": "enabled"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"vehicle-assembly",children:"Vehicle Assembly"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "vehicleSystem": {\n    "core": {\n      "chassis": "required",\n      "mountPoints": [\n        "engine",\n        "wheels",\n        "body"\n      ]\n    },\n    "balance": {\n      "weightDistribution": "automatic",\n      "centerOfMass": "calculated"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsx)(e.h3,{id:"physical-validation",children:"Physical Validation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Proper connections"}),"\n",(0,t.jsx)(e.li,{children:"Weight limits"}),"\n",(0,t.jsx)(e.li,{children:"Size constraints"}),"\n",(0,t.jsx)(e.li,{children:"Balance checks"}),"\n",(0,t.jsx)(e.li,{children:"Collision detection"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"logical-validation",children:"Logical Validation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Required components"}),"\n",(0,t.jsx)(e.li,{children:"Valid configurations"}),"\n",(0,t.jsx)(e.li,{children:"Compatibility rules"}),"\n",(0,t.jsx)(e.li,{children:"Dependency checks"}),"\n",(0,t.jsx)(e.li,{children:"Version compatibility"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"implementation-examples",children:"Implementation Examples"}),"\n",(0,t.jsx)(e.h3,{id:"simple-connection",children:"Simple Connection"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "connection": {\n    "type": "snap",\n    "points": [\n      {\n        "id": "source",\n        "position": [0, 0, 0]\n      },\n      {\n        "id": "target",\n        "position": [1, 0, 0]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"complex-assembly",children:"Complex Assembly"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "assembly": {\n    "stages": [\n      {\n        "name": "foundation",\n        "required": true,\n        "components": ["base", "supports"]\n      },\n      {\n        "name": "structure",\n        "required": true,\n        "components": ["walls", "roof"]\n      },\n      {\n        "name": "details",\n        "optional": true,\n        "components": ["windows", "doors"]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Review ",(0,t.jsx)(e.a,{href:"/implementation/composable/schema-parts",children:"Schema Parts"})," for basic implementation"]}),"\n",(0,t.jsxs)(e.li,{children:["See ",(0,t.jsx)(e.a,{href:"/implementation/composable/concepts",children:"Composable Concepts"})," for theoretical foundation"]}),"\n",(0,t.jsxs)(e.li,{children:["Check ",(0,t.jsx)(e.a,{href:"/tools/validation",children:"Validation Tools"})," for testing patterns"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>o});var i=s(6540);const t={},l=i.createContext(t);function a(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);