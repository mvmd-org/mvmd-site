"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[121],{6150:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"3d-standards/usd","title":"USD Standard","description":"Universal Scene Description (USD) provides metadata standards for complex scene composition and management in the Metaverse. This guide covers how to describe USD-specific properties within your metadata.","source":"@site/docs/3d-standards/usd.md","sourceDirName":"3d-standards","slug":"/3d-standards/usd","permalink":"/3d-standards/usd","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/3d-standards/usd.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"glTF Standard","permalink":"/3d-standards/gltf"},"next":{"title":"X3D Standard","permalink":"/3d-standards/x3d"}}');var s=i(4848),a=i(8453);const t={sidebar_position:2},l="USD Standard",d={},c=[{value:"Core Properties",id:"core-properties",level:2},{value:"Stage Configuration",id:"stage-configuration",level:3},{value:"Layer Structure",id:"layer-structure",level:3},{value:"Variant Sets",id:"variant-sets",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Property Guidelines",id:"property-guidelines",level:2},{value:"Stage Properties",id:"stage-properties",level:3},{value:"Layer Properties",id:"layer-properties",level:3},{value:"Variant Properties",id:"variant-properties",level:3},{value:"Composition Rules",id:"composition-rules",level:2},{value:"Layer Organization",id:"layer-organization",level:3},{value:"Variant Management",id:"variant-management",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Next Steps",id:"next-steps",level:2}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"usd-standard",children:"USD Standard"})}),"\n",(0,s.jsx)(e.p,{children:"Universal Scene Description (USD) provides metadata standards for complex scene composition and management in the Metaverse. This guide covers how to describe USD-specific properties within your metadata."}),"\n",(0,s.jsx)(e.h2,{id:"core-properties",children:"Core Properties"}),"\n",(0,s.jsx)(e.h3,{id:"stage-configuration",children:"Stage Configuration"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "usd": "https://openusd.org/ns/"\n  },\n  "@type": "Place",\n  "name": "Virtual Environment",\n  \n  "usd:stage": {\n    "upAxis": "Y",\n    "metersPerUnit": 1.0,\n    "timeCodesPerSecond": 24\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"layer-structure",children:"Layer Structure"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "usd:layers": [\n    {\n      "name": "base",\n      "path": "/Environment/Base",\n      "defaultPrim": "World"\n    },\n    {\n      "name": "architecture",\n      "path": "/Environment/Architecture",\n      "reference": "base"\n    },\n    {\n      "name": "furniture",\n      "path": "/Environment/Furniture",\n      "reference": "architecture"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"variant-sets",children:"Variant Sets"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "usd:variants": {\n    "lighting": {\n      "name": "lighting",\n      "variants": ["day", "night", "evening"],\n      "default": "day"\n    },\n    "season": {\n      "name": "season",\n      "variants": ["summer", "winter", "autumn", "spring"],\n      "default": "summer"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "usd": "https://openusd.org/ns/"\n  },\n  "@type": "Place",\n  "name": "Virtual Plaza",\n  "description": "Interactive public plaza with dynamic lighting and seasonal variations",\n  \n  "usd:stage": {\n    "upAxis": "Y",\n    "metersPerUnit": 1.0,\n    "timeCodesPerSecond": 24,\n    "startTimeCode": 0,\n    "endTimeCode": 240\n  },\n  \n  "usd:layers": [\n    {\n      "name": "base",\n      "path": "/Plaza/Base",\n      "defaultPrim": "Plaza",\n      "kind": "component"\n    },\n    {\n      "name": "terrain",\n      "path": "/Plaza/Terrain",\n      "reference": "base",\n      "kind": "component"\n    },\n    {\n      "name": "architecture",\n      "path": "/Plaza/Architecture",\n      "reference": "terrain",\n      "kind": "assembly"\n    },\n    {\n      "name": "vegetation",\n      "path": "/Plaza/Vegetation",\n      "reference": "architecture",\n      "kind": "component"\n    },\n    {\n      "name": "furniture",\n      "path": "/Plaza/Furniture",\n      "reference": "architecture",\n      "kind": "component"\n    },\n    {\n      "name": "lighting",\n      "path": "/Plaza/Lighting",\n      "reference": "architecture",\n      "kind": "component"\n    }\n  ],\n  \n  "usd:variants": {\n    "lighting": {\n      "name": "lighting",\n      "variants": ["day", "night", "evening"],\n      "default": "day",\n      "properties": {\n        "intensity": "float",\n        "color": "color3f",\n        "direction": "vector3f"\n      }\n    },\n    "season": {\n      "name": "season",\n      "variants": ["summer", "winter", "autumn", "spring"],\n      "default": "summer",\n      "affectedLayers": ["vegetation", "lighting"]\n    },\n    "events": {\n      "name": "events",\n      "variants": ["normal", "celebration", "concert"],\n      "default": "normal",\n      "affectedLayers": ["lighting", "furniture"]\n    }\n  },\n  \n  "usd:composition": {\n    "defaultPrim": "Plaza",\n    "primChildren": [\n      {\n        "name": "Ground",\n        "type": "Xform",\n        "variants": ["season"]\n      },\n      {\n        "name": "Buildings",\n        "type": "Xform",\n        "variants": ["lighting"]\n      },\n      {\n        "name": "Trees",\n        "type": "Xform",\n        "variants": ["season"]\n      },\n      {\n        "name": "Installations",\n        "type": "Xform",\n        "variants": ["events"]\n      }\n    ]\n  },\n  \n  "usd:references": [\n    {\n      "name": "StandardFurniture",\n      "path": "/Plaza/Furniture/Standard",\n      "assetPath": "furniture/standard.usd"\n    },\n    {\n      "name": "EventFurniture",\n      "path": "/Plaza/Furniture/Event",\n      "assetPath": "furniture/event.usd"\n    }\n  ],\n  \n  "usd:properties": {\n    "visibility": "inherited",\n    "purpose": "default",\n    "kind": "assembly"\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"property-guidelines",children:"Property Guidelines"}),"\n",(0,s.jsx)(e.h3,{id:"stage-properties",children:"Stage Properties"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'Use proper up axis ("Y" or "Z")'}),"\n",(0,s.jsx)(e.li,{children:"Define correct scale (metersPerUnit)"}),"\n",(0,s.jsx)(e.li,{children:"Specify time codes if animated"}),"\n",(0,s.jsx)(e.li,{children:"Include frame rate information"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"layer-properties",children:"Layer Properties"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use descriptive layer names"}),"\n",(0,s.jsx)(e.li,{children:"Define clear layer hierarchy"}),"\n",(0,s.jsx)(e.li,{children:"Specify reference relationships"}),"\n",(0,s.jsx)(e.li,{children:"Include layer purposes"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"variant-properties",children:"Variant Properties"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use meaningful variant names"}),"\n",(0,s.jsx)(e.li,{children:"Define default variants"}),"\n",(0,s.jsx)(e.li,{children:"Specify affected properties"}),"\n",(0,s.jsx)(e.li,{children:"Document variant relationships"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"composition-rules",children:"Composition Rules"}),"\n",(0,s.jsx)(e.h3,{id:"layer-organization",children:"Layer Organization"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Base layers first"}),"\n",(0,s.jsx)(e.li,{children:"Referenced layers follow"}),"\n",(0,s.jsx)(e.li,{children:"Specializations last"}),"\n",(0,s.jsx)(e.li,{children:"Clear dependency chain"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"variant-management",children:"Variant Management"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Group related variants"}),"\n",(0,s.jsx)(e.li,{children:"Define fallback options"}),"\n",(0,s.jsx)(e.li,{children:"Document dependencies"}),"\n",(0,s.jsx)(e.li,{children:"Specify affect scope"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Layer Structure"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Organize layers logically"}),"\n",(0,s.jsx)(e.li,{children:"Use clear naming conventions"}),"\n",(0,s.jsx)(e.li,{children:"Document layer purposes"}),"\n",(0,s.jsx)(e.li,{children:"Maintain clear hierarchy"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Variant Sets"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Group related variations"}),"\n",(0,s.jsx)(e.li,{children:"Provide default options"}),"\n",(0,s.jsx)(e.li,{children:"Consider performance"}),"\n",(0,s.jsx)(e.li,{children:"Document combinations"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Reference Management"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use clear asset paths"}),"\n",(0,s.jsx)(e.li,{children:"Document dependencies"}),"\n",(0,s.jsx)(e.li,{children:"Consider load order"}),"\n",(0,s.jsx)(e.li,{children:"Manage asset versions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Property Inheritance"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Define inheritance clearly"}),"\n",(0,s.jsx)(e.li,{children:"Document overrides"}),"\n",(0,s.jsx)(e.li,{children:"Consider performance"}),"\n",(0,s.jsx)(e.li,{children:"Maintain consistency"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Layer Conflicts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "usd:layers": [\n    {\n      "name": "override",\n      "reference": "missing_layer"  // Invalid reference\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Invalid Variants"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "usd:variants": {\n    "lighting": {\n      "variants": [],  // Empty variants array\n      "default": "missing"  // Non-existent default\n    }\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Review ",(0,s.jsx)(e.a,{href:"/metadata-profiles/environment-profile.md",children:"Environment Profile"})]}),"\n",(0,s.jsxs)(e.li,{children:["See ",(0,s.jsx)(e.a,{href:"/combining-standards.md",children:"Combining Standards"})]}),"\n",(0,s.jsxs)(e.li,{children:["Check ",(0,s.jsx)(e.a,{href:"/tools/validation",children:"Validation"})]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>l});var r=i(6540);const s={},a=r.createContext(s);function t(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);