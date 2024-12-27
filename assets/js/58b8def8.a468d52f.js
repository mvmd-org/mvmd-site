"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[1193],{383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"core-concepts/embedding-and-reference","title":"Embedding and Reference Patterns","description":"This guide covers strategies for embedding content directly in metadata versus referencing external resources, with a focus on optimizing asset delivery and management in Metaverse environments.","source":"@site/docs/core-concepts/embedding-and-reference.md","sourceDirName":"core-concepts","slug":"/core-concepts/embedding-and-reference","permalink":"/core-concepts/embedding-and-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/core-concepts/embedding-and-reference.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"File Organization","permalink":"/core-concepts/file-organization"},"next":{"title":"Overview","permalink":"/standards/overview"}}');var i=t(4848),a=t(8453);const o={sidebar_position:3},l="Embedding and Reference Patterns",s={},c=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Direct Embedding",id:"direct-embedding",level:3},{value:"External References",id:"external-references",level:3},{value:"Implementation Patterns",id:"implementation-patterns",level:2},{value:"Direct Content Embedding",id:"direct-content-embedding",level:3},{value:"External Resource References",id:"external-resource-references",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Content Organization",id:"1-content-organization",level:3},{value:"2. Resource References",id:"2-resource-references",level:3},{value:"3. Performance Optimization",id:"3-performance-optimization",level:3},{value:"4. Content Management",id:"4-content-management",level:3},{value:"Loading Strategies",id:"loading-strategies",level:2},{value:"Progressive Loading",id:"progressive-loading",level:3},{value:"Conditional Loading",id:"conditional-loading",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"embedding-and-reference-patterns",children:"Embedding and Reference Patterns"})}),"\n",(0,i.jsx)(n.p,{children:"This guide covers strategies for embedding content directly in metadata versus referencing external resources, with a focus on optimizing asset delivery and management in Metaverse environments."}),"\n",(0,i.jsx)(n.h2,{id:"core-concepts",children:"Core Concepts"}),"\n",(0,i.jsx)(n.h3,{id:"direct-embedding",children:"Direct Embedding"}),"\n",(0,i.jsx)(n.p,{children:"Embedding includes content directly within the metadata:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Asset Preview",\n  "contentUrl": "https://example.com/preview.jpg",\n  "encodingFormat": "image/jpeg",\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "configurationSettings",\n      "name": "Configuration Settings",\n      "value": "high"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "configFormat",\n      "name": "Configuration Format",\n      "value": "progressive"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"external-references",children:"External References"}),"\n",(0,i.jsx)(n.p,{children:"Referencing links to external resources:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Asset Preview",\n  "contentUrl": "https://example.com/preview.jpg",\n  "encodingFormat": "image/jpeg",\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Detailed Model",\n      "contentUrl": "https://example.com/model.glb",\n      "encodingFormat": "model/gltf-binary"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"implementation-patterns",children:"Implementation Patterns"}),"\n",(0,i.jsx)(n.h3,{id:"direct-content-embedding",children:"Direct Content Embedding"}),"\n",(0,i.jsx)(n.p,{children:"Example of embedded configuration using valid Schema.org properties:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Interactive Object Preview",\n  "contentUrl": "https://example.com/preview.jpg",\n  "encodingFormat": "image/jpeg",\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "interactionTrigger",\n      "name": "Interaction Trigger",\n      "value": "proximity"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "interactionDistance",\n      "name": "Interaction Distance",\n      "value": "2.0"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "interactionResponse",\n      "name": "Interaction Response",\n      "value": "highlight"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"external-resource-references",children:"External Resource References"}),"\n",(0,i.jsx)(n.p,{children:"Example with multiple quality variants:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Character Preview",\n  "contentUrl": "https://example.com/preview.jpg",\n  "encodingFormat": "image/jpeg",\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "High-Detail Model",\n      "contentUrl": "https://example.com/model-high.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "qualityLevel",\n          "name": "Quality Level",\n          "value": "high"\n        }\n      ]\n    },\n    {\n      "@type": "3DModel",\n      "name": "Low-Detail Model",\n      "contentUrl": "https://example.com/model-low.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "qualityLevel",\n          "name": "Quality Level",\n          "value": "low"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,i.jsx)(n.p,{children:"Here's a comprehensive example showing various embedding and reference patterns:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Interactive Scene Preview",\n  "contentUrl": "https://example.com/scene-preview.jpg",\n  "encodingFormat": "image/jpeg",\n  "description": "Interactive virtual scene with multiple components and configurations",\n  \n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "lightingType",\n      "name": "Lighting Type",\n      "value": "dynamic"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "lightingIntensity",\n      "name": "Lighting Intensity",\n      "value": "1.0"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "physicsSetting",\n      "name": "Physics Setting",\n      "value": "enabled"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "gravityValue",\n      "name": "Gravity Value",\n      "value": "-9.81"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "collisionLayers",\n      "name": "Collision Layers",\n      "value": "ground,objects,characters"\n    }\n  ],\n  \n  "hasPart": [\n    {\n      "@type": "3DModel",\n      "name": "Environment Base",\n      "contentUrl": "https://example.com/environment.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "transform",\n          "name": "Transform Data",\n          "value": "scale:1,1,1;rotation:0,0,0,1;translation:0,0,0"\n        }\n      ]\n    }\n  ],\n  \n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Interactive Objects",\n      "contentUrl": "https://example.com/objects.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "interactionType",\n          "name": "Interaction Type",\n          "value": "click"\n        },\n        {\n          "@type": "PropertyValue",\n          "propertyID": "interactionResponse",\n          "name": "Interaction Response",\n          "value": "animate"\n        }\n      ]\n    },\n    {\n      "@type": "VideoObject",\n      "name": "Background Video",\n      "contentUrl": "https://example.com/background.mp4",\n      "encodingFormat": "video/mp4",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "playbackLoop",\n          "name": "Playback Loop",\n          "value": "true"\n        },\n        {\n          "@type": "PropertyValue",\n          "propertyID": "playbackVolume",\n          "name": "Playback Volume",\n          "value": "0.5"\n        }\n      ]\n    }\n  ],\n  \n  "encodesCreativeWork": [\n    {\n      "@type": "DigitalDocument",\n      "name": "Interaction Guide",\n      "url": "https://example.com/guide.md",\n      "encodingFormat": "text/markdown"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(n.h3,{id:"1-content-organization",children:"1. Content Organization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Group related content logically"}),"\n",(0,i.jsx)(n.li,{children:"Maintain clear hierarchy"}),"\n",(0,i.jsx)(n.li,{children:"Use appropriate relationships"}),"\n",(0,i.jsx)(n.li,{children:"Consider load order"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-resource-references",children:"2. Resource References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use absolute URLs"}),"\n",(0,i.jsx)(n.li,{children:"Include fallback options"}),"\n",(0,i.jsx)(n.li,{children:"Consider CDN usage"}),"\n",(0,i.jsx)(n.li,{children:"Implement caching strategy"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-performance-optimization",children:"3. Performance Optimization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Minimize embedded data size"}),"\n",(0,i.jsx)(n.li,{children:"Use appropriate compression"}),"\n",(0,i.jsx)(n.li,{children:"Implement lazy loading"}),"\n",(0,i.jsx)(n.li,{children:"Consider bandwidth usage"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-content-management",children:"4. Content Management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Version external resources"}),"\n",(0,i.jsx)(n.li,{children:"Track dependencies"}),"\n",(0,i.jsx)(n.li,{children:"Handle missing resources"}),"\n",(0,i.jsx)(n.li,{children:"Implement updates efficiently"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"loading-strategies",children:"Loading Strategies"}),"\n",(0,i.jsx)(n.h3,{id:"progressive-loading",children:"Progressive Loading"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@type": "ImageObject",\n  "name": "Progressive Asset",\n  "contentUrl": "https://example.com/preview.jpg",\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Low Detail",\n      "contentUrl": "https://example.com/model-low.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "loadPriority",\n          "name": "Load Priority",\n          "value": "immediate"\n        }\n      ]\n    },\n    {\n      "@type": "3DModel",\n      "name": "High Detail",\n      "contentUrl": "https://example.com/model-high.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "loadPriority",\n          "name": "Load Priority",\n          "value": "deferred"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"conditional-loading",children:"Conditional Loading"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "@type": "ImageObject",\n  "name": "Platform-Specific Asset",\n  "contentUrl": "https://example.com/preview.jpg",\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Mobile Version",\n      "contentUrl": "https://example.com/model-mobile.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "platform",\n          "name": "Platform",\n          "value": "mobile"\n        }\n      ]\n    },\n    {\n      "@type": "3DModel",\n      "name": "Desktop Version",\n      "contentUrl": "https://example.com/model-desktop.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "platform",\n          "name": "Platform",\n          "value": "desktop"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Review ",(0,i.jsx)(n.a,{href:"/core-concepts/file-organization",children:"File Organization"})," for structure guidance"]}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"/implementation/best-practices",children:"Best Practices"})," for implementation tips"]}),"\n",(0,i.jsxs)(n.li,{children:["Check ",(0,i.jsx)(n.a,{href:"/tools/validation",children:"Validation Tools"})," for metadata validation"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);