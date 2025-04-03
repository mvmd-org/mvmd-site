"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[9691],{8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},9682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"implementation/composable","title":"Composable Asset Implementation","description":"This guide provides implementation patterns for creating and managing composable assets using MVMD-compliant metadata structures.","source":"@site/docs/implementation/composable.md","sourceDirName":"implementation","slug":"/implementation/composable","permalink":"/implementation/composable","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/implementation/composable.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docs","previous":{"title":"NFTs","permalink":"/implementation/nfts"},"next":{"title":"Best Practices","permalink":"/implementation/best-practices"}}');var a=t(4848),i=t(8453);const o={sidebar_position:5},r="Composable Asset Implementation",l={},c=[{value:"Core Composable Implementation Patterns",id:"core-composable-implementation-patterns",level:2},{value:"Basic Composable Asset",id:"basic-composable-asset",level:3},{value:"Component Templates",id:"component-templates",level:3},{value:"Nested Composables",id:"nested-composables",level:3},{value:"Extended Composable Properties",id:"extended-composable-properties",level:2},{value:"Runtime Behaviors",id:"runtime-behaviors",level:3},{value:"Component Dependencies",id:"component-dependencies",level:3},{value:"Implementation Best Practices",id:"implementation-best-practices",level:2},{value:"Assembly Management",id:"assembly-management",level:3},{value:"Performance Optimization",id:"performance-optimization",level:3},{value:"Validation &amp; Compatibility",id:"validation--compatibility",level:3},{value:"Related Documentation",id:"related-documentation",level:2},{value:"Related Concepts",id:"related-concepts",level:2},{value:"Related Namespaces",id:"related-namespaces",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"composable-asset-implementation",children:"Composable Asset Implementation"})}),"\n",(0,a.jsx)(n.p,{children:"This guide provides implementation patterns for creating and managing composable assets using MVMD-compliant metadata structures."}),"\n",(0,a.jsx)(n.h2,{id:"core-composable-implementation-patterns",children:"Core Composable Implementation Patterns"}),"\n",(0,a.jsx)(n.h3,{id:"basic-composable-asset",children:"Basic Composable Asset"}),"\n",(0,a.jsx)(n.p,{children:"A foundational composable asset that references its components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "CreativeWork",\n  "name": "Modular Spacecraft",\n  "description": "A customizable spacecraft with interchangeable components",\n  "creator": {\n    "@type": "Organization",\n    "name": "Space Assets Ltd",\n    "url": "https://spaceassets.example.com"\n  },\n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "name": "Spacecraft Hull",\n      "contentUrl": "https://assets.example.com/hull.glb"\n    },\n    {\n      "@type": "3DModel",\n      "name": "Engine Module",\n      "contentUrl": "https://assets.example.com/engine.glb"\n    },\n    {\n      "@type": "3DModel", \n      "name": "Navigation System",\n      "contentUrl": "https://assets.example.com/nav.glb"\n    }\n  ],\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "assembly",\n      "name": "Assembly Instructions",\n      "value": {\n        "version": "1.0",\n        "parentTransform": "identity",\n        "componentAssembly": [\n          {\n            "id": "hull",\n            "componentRef": 0,\n            "position": [0, 0, 0],\n            "rotation": [0, 0, 0, 1],\n            "scale": [1, 1, 1]\n          },\n          {\n            "id": "engine",\n            "componentRef": 1,\n            "position": [0, -2, 0],\n            "rotation": [0, 0, 0, 1],\n            "scale": [1, 1, 1]\n          },\n          {\n            "id": "nav",\n            "componentRef": 2,\n            "position": [0, 1, 0],\n            "rotation": [0, 0, 0, 1],\n            "scale": [0.5, 0.5, 0.5]\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"component-templates",children:"Component Templates"}),"\n",(0,a.jsx)(n.p,{children:"Define a reusable component template with customization options:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "3DModel",\n  "name": "Engine Module Template",\n  "description": "Customizable engine module for spacecraft",\n  "contentUrl": "https://assets.example.com/engine-template.glb",\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "customization",\n      "name": "Customization Options",\n      "value": {\n        "parameters": [\n          {\n            "name": "engineColor",\n            "type": "color",\n            "default": "#3366FF",\n            "options": ["#3366FF", "#FF3366", "#66FF33"]\n          },\n          {\n            "name": "engineSize",\n            "type": "vector3",\n            "default": [1, 1, 1],\n            "range": {\n              "min": [0.5, 0.5, 0.5],\n              "max": [2, 2, 2]\n            }\n          },\n          {\n            "name": "engineEfficiency",\n            "type": "number",\n            "default": 80,\n            "range": {\n              "min": 50,\n              "max": 100\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"nested-composables",children:"Nested Composables"}),"\n",(0,a.jsx)(n.p,{children:"Create complex hierarchical structures with nested components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "CreativeWork",\n  "name": "Space Station Complex",\n  "hasPart": [\n    {\n      "@type": "CreativeWork",\n      "name": "Habitat Module",\n      "hasPart": [\n        {\n          "@type": "3DModel",\n          "name": "Habitat Shell",\n          "contentUrl": "https://assets.example.com/habitat-shell.glb"\n        },\n        {\n          "@type": "3DModel",\n          "name": "Living Quarters",\n          "contentUrl": "https://assets.example.com/quarters.glb"\n        }\n      ],\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "assembly",\n          "name": "Assembly Instructions",\n          "value": {\n            "componentAssembly": [\n              {\n                "id": "shell",\n                "componentRef": 0,\n                "position": [0, 0, 0],\n                "rotation": [0, 0, 0, 1]\n              },\n              {\n                "id": "quarters",\n                "componentRef": 1,\n                "position": [0, 0, 0],\n                "rotation": [0, 0, 0, 1]\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "@type": "CreativeWork",\n      "name": "Power Module",\n      "hasPart": [\n        {\n          "@type": "3DModel",\n          "name": "Solar Panels",\n          "contentUrl": "https://assets.example.com/solar.glb"\n        },\n        {\n          "@type": "3DModel",\n          "name": "Power Distribution",\n          "contentUrl": "https://assets.example.com/power-dist.glb"\n        }\n      ]\n    }\n  ],\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "assembly",\n      "name": "Assembly Instructions",\n      "value": {\n        "componentAssembly": [\n          {\n            "id": "habitat",\n            "componentRef": 0,\n            "position": [0, 0, 0],\n            "rotation": [0, 0, 0, 1]\n          },\n          {\n            "id": "power",\n            "componentRef": 1,\n            "position": [20, 0, 0],\n            "rotation": [0, 0, 0, 1]\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"extended-composable-properties",children:"Extended Composable Properties"}),"\n",(0,a.jsx)(n.h3,{id:"runtime-behaviors",children:"Runtime Behaviors"}),"\n",(0,a.jsx)(n.p,{children:"Define interactive behaviors for composable assets:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "CreativeWork",\n  "name": "Interactive Spacecraft",\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "behaviors",\n      "name": "Interactive Behaviors",\n      "value": {\n        "interactions": [\n          {\n            "id": "engine-start",\n            "type": "animation",\n            "target": "engine",\n            "animation": "start-sequence",\n            "triggers": ["proximity", "click"],\n            "parameters": {\n              "sound": "engine-start.mp3",\n              "particleEffect": "engine-particles"\n            }\n          },\n          {\n            "id": "cockpit-open",\n            "type": "state-change",\n            "target": "cockpit",\n            "states": ["open", "closed"],\n            "defaultState": "closed",\n            "triggers": ["click"],\n            "transitionTime": 1.5\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"component-dependencies",children:"Component Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"Specify dependencies between components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "CreativeWork",\n  "name": "Advanced Spacecraft System",\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "dependencies",\n      "name": "Component Dependencies",\n      "value": {\n        "requirements": [\n          {\n            "component": "engine",\n            "requires": ["power-supply", "cooling-system"],\n            "compatibility": {\n              "powerSupply": {\n                "minPower": 1000,\n                "type": ["fusion", "antimatter"]\n              }\n            }\n          },\n          {\n            "component": "weapons-system",\n            "requires": ["power-supply", "targeting-computer"],\n            "incompatible": ["stealth-module"]\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"implementation-best-practices",children:"Implementation Best Practices"}),"\n",(0,a.jsx)(n.h3,{id:"assembly-management",children:"Assembly Management"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Define clear parent-child relationships"}),"\n",(0,a.jsx)(n.li,{children:"Use consistent coordinate systems"}),"\n",(0,a.jsx)(n.li,{children:"Document attachment points and interfaces"}),"\n",(0,a.jsx)(n.li,{children:"Include fallback behaviors for missing components"}),"\n",(0,a.jsx)(n.li,{children:"Establish component version compatibility rules"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Implement progressive loading for complex compositions"}),"\n",(0,a.jsx)(n.li,{children:"Use level-of-detail variations for different distances"}),"\n",(0,a.jsx)(n.li,{children:"Optimize component reuse with instancing"}),"\n",(0,a.jsx)(n.li,{children:"Consider memory implications for deeply nested structures"}),"\n",(0,a.jsx)(n.li,{children:"Document performance characteristics for large assemblies"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"validation--compatibility",children:"Validation & Compatibility"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Verify all component references are valid"}),"\n",(0,a.jsx)(n.li,{children:"Ensure transform values are within expected ranges"}),"\n",(0,a.jsx)(n.li,{children:"Test assembly with all possible component combinations"}),"\n",(0,a.jsx)(n.li,{children:"Provide graceful degradation for unsupported features"}),"\n",(0,a.jsx)(n.li,{children:"Maintain backward compatibility when updating components"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-documentation",children:"Related Documentation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/implementation/assets",children:"Basic Asset Implementation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/implementation/interactive-assets",children:"Interactive Asset Implementation"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../standards/schema-org.md",children:"Schema.org"}),": Core vocabulary for composable assets"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/standards/overview",children:"3D Standards Overview"}),": Implementation patterns for 3D components"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/standards/openxr",children:"OpenXR"}),": XR-specific implementation for composable assets"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-concepts",children:"Related Concepts"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./composable/assembly-patterns.md",children:"Assembly Patterns"}),": Detailed assembly strategies"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./composable/schema-parts.md",children:"Schema Parts"}),": Component schema definitions"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./composable/concepts.md",children:"Composable Concepts"}),": Fundamental composable principles"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/concepts/linking-vs-embedding",children:"Linking vs Embedding"}),": Reference management approaches"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-namespaces",children:"Related Namespaces"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../standards/schema-org.md",children:"Schema.org"}),": Core vocabulary for composable assets"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/standards/overview",children:"3D Standards"}),": Implementation patterns for 3D components"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/standards/openxr",children:"OpenXR Standards"}),": XR-specific implementation for composable assets"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}}}]);