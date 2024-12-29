"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[5309],{252:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"recipes/wearable","title":"Wearables","description":"This recipe defines the metadata structure for wearable items in the metaverse, ensuring interoperability across different platforms and standards compliance.","source":"@site/docs/recipes/wearable.md","sourceDirName":"recipes","slug":"/recipes/wearable","permalink":"/recipes/wearable","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/recipes/wearable.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Basic","permalink":"/recipes/basic"},"next":{"title":"Avatar","permalink":"/recipes/avatar"}}');var r=i(4848),a=i(8453);const l={},s="Wearables",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Basic Example",id:"basic-example",level:2},{value:"Standard Example with Technical Properties",id:"standard-example-with-technical-properties",level:2},{value:"Complete Example",id:"complete-example",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Core Properties",id:"core-properties",level:3},{value:"Wearable-Specific Properties",id:"wearable-specific-properties",level:3},{value:"Associated Media",id:"associated-media",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Property Organization",id:"property-organization",level:3},{value:"Technical Requirements",id:"technical-requirements",level:3},{value:"Media Management",id:"media-management",level:3},{value:"Implementation Notes",id:"implementation-notes",level:2},{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"wearables",children:"Wearables"})}),"\n",(0,r.jsx)(n.p,{children:"This recipe defines the metadata structure for wearable items in the metaverse, ensuring interoperability across different platforms and standards compliance."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Wearable metadata must:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use ImageObject as the root type to represent the wearable's preview/thumbnail"}),"\n",(0,r.jsx)(n.li,{children:"Include proper Schema.org context and type declarations"}),"\n",(0,r.jsx)(n.li,{children:"Specify attachment points and compatibility information"}),"\n",(0,r.jsx)(n.li,{children:"Include technical specifications for 3D models"}),"\n",(0,r.jsx)(n.li,{children:"Follow Schema.org validation requirements"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(n.p,{children:"Here's a minimal valid wearable metadata example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Simple Digital Hat",\n  "description": "A basic digital hat wearable",\n  "contentUrl": "https://example.com/preview/simple_hat.jpg",\n  "encodingFormat": "image/jpeg",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "assetId",\n    "value": "wearable-2024-001"\n  },\n  \n  "creator": {\n    "@type": "Organization",\n    "name": "Digital Fashion Studio",\n    "url": "https://example.com/studio"\n  },\n\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "category",\n      "name": "Wearable Category",\n      "value": "headwear"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "attachmentPoint",\n      "name": "Attachment Point",\n      "value": "head"\n    }\n  ],\n\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Hat 3D Model",\n      "contentUrl": "https://example.com/models/hat.glb",\n      "encodingFormat": "model/gltf-binary"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"standard-example-with-technical-properties",children:"Standard Example with Technical Properties"}),"\n",(0,r.jsx)(n.p,{children:"This example adds more technical details while maintaining Schema.org validation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Digital Fashion Hat",\n  "description": "Interactive digital hat with customizable features",\n  "contentUrl": "https://example.com/preview/fashion_hat.jpg",\n  "encodingFormat": "image/jpeg",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "assetId",\n    "value": "wearable-2024-002"\n  },\n  \n  "creator": {\n    "@type": "Organization",\n    "name": "Digital Fashion Studio",\n    "url": "https://example.com/studio",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://example.com/studio/logo.png"\n    }\n  },\n\n  "license": "https://creativecommons.org/licenses/by-sa/4.0/",\n  \n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "category",\n      "name": "Wearable Category",\n      "value": "headwear"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "attachmentPoint",\n      "name": "Attachment Point",\n      "value": "head"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "compatibility",\n      "name": "Avatar Compatibility",\n      "value": "humanoid"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "technicalRequirements",\n      "name": "Technical Requirements",\n      "value": "polyCount:15000;textureSize:2048;materials:2"\n    }\n  ],\n\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Hat 3D Model",\n      "contentUrl": "https://example.com/models/fashion_hat.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "quality",\n          "name": "Quality Level",\n          "value": "high"\n        }\n      ]\n    },\n    {\n      "@type": "ImageObject",\n      "name": "Normal Map",\n      "contentUrl": "https://example.com/textures/hat_normal.jpg",\n      "encodingFormat": "image/jpeg",\n      "width": 2048,\n      "height": 2048\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,r.jsx)(n.p,{children:"Here's a comprehensive example showing all features while maintaining Schema.org compatibility:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "ImageObject",\n  "name": "Magical Crown",\n  "description": "Interactive royal crown with dynamic effects and animations",\n  "contentUrl": "https://example.com/preview/crown.jpg",\n  "encodingFormat": "image/jpeg",\n  "thumbnail": {\n    "@type": "ImageObject",\n    "contentUrl": "https://example.com/preview/crown_thumb.jpg",\n    "encodingFormat": "image/jpeg",\n    "width": 256,\n    "height": 256\n  },\n\n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "assetId",\n    "value": "wearable-2024-003"\n  },\n\n  "creator": {\n    "@type": "Organization",\n    "name": "Digital Fashion Studio",\n    "url": "https://example.com/studio",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://example.com/studio/logo.png"\n    }\n  },\n\n  "license": "https://creativecommons.org/licenses/by-sa/4.0/",\n  "acquireLicensePage": "https://example.com/license/crown",\n\n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "category",\n      "name": "Wearable Category",\n      "value": "headwear"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "attachmentPoint",\n      "name": "Attachment Point",\n      "value": "head"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "compatibility",\n      "name": "Avatar Compatibility",\n      "value": "humanoid"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "minRequirements",\n      "name": "Minimum Requirements",\n      "value": "polyCount:8000;textureSize:1024;materials:2"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "recommendedRequirements",\n      "name": "Recommended Requirements",\n      "value": "polyCount:25000;textureSize:4096;materials:4"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "physicsProperties",\n      "name": "Physics Properties",\n      "value": "mass:0.3;collisionEnabled:true;restitution:0.3;friction:0.5"\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "renderingProperties",\n      "name": "Rendering Properties",\n      "value": "castShadows:true;receiveShadows:true;reflective:true"\n    }\n  ],\n\n  "gltf:asset": {\n    "@type": "gltf:Asset",\n    "version": "2.0",\n    "generator": "Digital Fashion Studio Creator v1.0",\n    "copyright": "\xa9 2024 Digital Fashion Studio"\n  },\n\n  "gltf:transform": {\n    "@type": "gltf:Transform",\n    "scale": [1.0, 1.0, 1.0],\n    "rotation": [0, 0, 0, 1],\n    "translation": [0, 0.15, 0]\n  },\n\n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "High Quality Model",\n      "contentUrl": "https://example.com/models/crown_high.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "quality",\n          "name": "Quality Level",\n          "value": "high"\n        },\n        {\n          "@type": "PropertyValue",\n          "propertyID": "polyCount",\n          "name": "Polygon Count",\n          "value": "25000"\n        }\n      ]\n    },\n    {\n      "@type": "3DModel",\n      "name": "Low Quality Model",\n      "contentUrl": "https://example.com/models/crown_low.glb",\n      "encodingFormat": "model/gltf-binary",\n      "additionalProperty": [\n        {\n          "@type": "PropertyValue",\n          "propertyID": "quality",\n          "name": "Quality Level",\n          "value": "low"\n        },\n        {\n          "@type": "PropertyValue",\n          "propertyID": "polyCount",\n          "name": "Polygon Count",\n          "value": "8000"\n        }\n      ]\n    },\n    {\n      "@type": "ImageObject",\n      "name": "Base Color Map",\n      "contentUrl": "https://example.com/textures/crown_basecolor.jpg",\n      "encodingFormat": "image/jpeg",\n      "width": 2048,\n      "height": 2048\n    },\n    {\n      "@type": "ImageObject",\n      "name": "Normal Map",\n      "contentUrl": "https://example.com/textures/crown_normal.jpg",\n      "encodingFormat": "image/jpeg",\n      "width": 2048,\n      "height": 2048\n    },\n    {\n      "@type": "ImageObject",\n      "name": "Metallic-Roughness Map",\n      "contentUrl": "https://example.com/textures/crown_mer.jpg",\n      "encodingFormat": "image/jpeg",\n      "width": 2048,\n      "height": 2048\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"required-properties",children:"Required Properties"}),"\n",(0,r.jsx)(n.h3,{id:"core-properties",children:"Core Properties"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@context"}),": Context definition including Schema.org"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@type"}),': "ImageObject" for root object']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": Wearable name"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"description"}),": Detailed description"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"contentUrl"}),": URL to preview image"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"encodingFormat"}),": MIME type of preview"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identifier"}),": Unique identifier structure"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"creator"}),": Creator information"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"wearable-specific-properties",children:"Wearable-Specific Properties"}),"\n",(0,r.jsx)(n.p,{children:"Must be included in additionalProperty array:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Category"}),"\n",(0,r.jsx)(n.li,{children:"Attachment point(s)"}),"\n",(0,r.jsx)(n.li,{children:"Avatar compatibility"}),"\n",(0,r.jsx)(n.li,{children:"Technical requirements"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"associated-media",children:"Associated Media"}),"\n",(0,r.jsx)(n.p,{children:"Must include at least one 3D model:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"High quality version"}),"\n",(0,r.jsx)(n.li,{children:"Optional low quality version"}),"\n",(0,r.jsx)(n.li,{children:"Required textures and maps"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsx)(n.h3,{id:"property-organization",children:"Property Organization"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Group related properties together"}),"\n",(0,r.jsx)(n.li,{children:"Use consistent property naming"}),"\n",(0,r.jsx)(n.li,{children:"Include complete type declarations"}),"\n",(0,r.jsx)(n.li,{children:"Validate all examples"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"technical-requirements",children:"Technical Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify both minimum and recommended specs"}),"\n",(0,r.jsx)(n.li,{children:"Include detailed material information"}),"\n",(0,r.jsx)(n.li,{children:"Define physics properties when applicable"}),"\n",(0,r.jsx)(n.li,{children:"List supported features and capabilities"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"media-management",children:"Media Management"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Provide multiple quality levels"}),"\n",(0,r.jsx)(n.li,{children:"Include all required textures"}),"\n",(0,r.jsx)(n.li,{children:"Specify exact dimensions"}),"\n",(0,r.jsx)(n.li,{children:"Use appropriate formats"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Avatar Compatibility"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define clear attachment points"}),"\n",(0,r.jsx)(n.li,{children:"Specify scaling rules"}),"\n",(0,r.jsx)(n.li,{children:"Include fit adjustments"}),"\n",(0,r.jsx)(n.li,{children:"Handle different avatar types"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Technical Requirements"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specify polygon count limits"}),"\n",(0,r.jsx)(n.li,{children:"Define texture resolution ranges"}),"\n",(0,r.jsx)(n.li,{children:"List required materials"}),"\n",(0,r.jsx)(n.li,{children:"Include physics properties"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Platform Support"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define required features"}),"\n",(0,r.jsx)(n.li,{children:"List supported platforms"}),"\n",(0,r.jsx)(n.li,{children:"Specify rendering requirements"}),"\n",(0,r.jsx)(n.li,{children:"Include fallback options"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Schema Validation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use only valid Schema.org types"}),"\n",(0,r.jsx)(n.li,{children:"Include all required properties"}),"\n",(0,r.jsx)(n.li,{children:"Properly structure nested objects"}),"\n",(0,r.jsx)(n.li,{children:"Validate complex properties"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3D Asset Integration"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Provide appropriate LOD models"}),"\n",(0,r.jsx)(n.li,{children:"Include all required textures"}),"\n",(0,r.jsx)(n.li,{children:"Define clear material properties"}),"\n",(0,r.jsx)(n.li,{children:"Specify technical requirements"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compatibility"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define clear attachment methods"}),"\n",(0,r.jsx)(n.li,{children:"Specify avatar requirements"}),"\n",(0,r.jsx)(n.li,{children:"Include platform constraints"}),"\n",(0,r.jsx)(n.li,{children:"List supported features"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Validate metadata using Schema.org validator"}),"\n",(0,r.jsx)(n.li,{children:"Test with target platforms"}),"\n",(0,r.jsx)(n.li,{children:"Verify all required properties"}),"\n",(0,r.jsx)(n.li,{children:"Check media accessibility"}),"\n",(0,r.jsx)(n.li,{children:"Confirm technical requirements"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var t=i(6540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);