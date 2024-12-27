"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[1753],{4900:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"standards/3d-assets/gltf","title":"glTF Standard","description":"glTF (GL Transmission Format) is a royalty-free specification developed by the Khronos Group for the efficient transmission and loading of 3D models and scenes in applications. It minimizes both the size of 3D assets and the runtime processing required to unpack and utilize them, making it an ideal choice for web-based and real-time applications.","source":"@site/docs/standards/3d-assets/gltf.md","sourceDirName":"standards/3d-assets","slug":"/standards/3d-assets/gltf","permalink":"/standards/3d-assets/gltf","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/standards/3d-assets/gltf.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"JSON-LD Standard","permalink":"/standards/schema/json-ld"},"next":{"title":"Open USD Standard","permalink":"/standards/3d-assets/usd"}}');var t=i(4848),r=i(8453);const a={sidebar_position:1},l="glTF Standard",o={},d=[{value:"Core Properties",id:"core-properties",level:2},{value:"Transform Information",id:"transform-information",level:3},{value:"Material Properties",id:"material-properties",level:3},{value:"Animation Data",id:"animation-data",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Property Guidelines",id:"property-guidelines",level:2},{value:"Transform Properties",id:"transform-properties",level:3},{value:"Material Properties",id:"material-properties-1",level:3},{value:"Animation Properties",id:"animation-properties",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Required Properties",id:"required-properties",level:3},{value:"Optional Properties",id:"optional-properties",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"gltf-standard",children:"glTF Standard"})}),"\n",(0,t.jsx)(e.p,{children:"glTF (GL Transmission Format) is a royalty-free specification developed by the Khronos Group for the efficient transmission and loading of 3D models and scenes in applications. It minimizes both the size of 3D assets and the runtime processing required to unpack and utilize them, making it an ideal choice for web-based and real-time applications.\nKhronos Group"}),"\n",(0,t.jsxs)(e.p,{children:["For more detailed information, you can refer to the official glTF 2.0 specification: ",(0,t.jsx)(e.a,{href:"https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",children:"glTF 2.0 Specification"})]}),"\n",(0,t.jsx)(e.h2,{id:"core-properties",children:"Core Properties"}),"\n",(0,t.jsx)(e.h3,{id:"transform-information",children:"Transform Information"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html"\n  },\n  "@type": "3DModel",\n  "name": "Positioned Asset",\n  \n  "gltf:transform": {\n    "scale": [1.0, 1.0, 1.0],\n    "rotation": [0, 0, 0, 1],\n    "translation": [0, 0.45, 0]\n  },\n  "gltf:unit": "meter"\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"material-properties",children:"Material Properties"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Detailed Asset",\n  \n  "gltf:materials": [\n    {\n      "name": "MetallicPanel",\n      "pbrMetallicRoughness": {\n        "baseColorFactor": [0.8, 0.8, 0.8, 1.0],\n        "metallicFactor": 1.0,\n        "roughnessFactor": 0.2\n      }\n    },\n    {\n      "name": "WoodSurface",\n      "pbrMetallicRoughness": {\n        "baseColorFactor": [0.6, 0.4, 0.2, 1.0],\n        "metallicFactor": 0.0,\n        "roughnessFactor": 0.8\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"animation-data",children:"Animation Data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Animated Asset",\n  \n  "gltf:animations": [\n    {\n      "name": "Rotate",\n      "type": "rotation",\n      "duration": 2.0,\n      "channels": ["node_1"],\n      "interpolation": "LINEAR"\n    },\n    {\n      "name": "Scale",\n      "type": "scale",\n      "duration": 1.5,\n      "channels": ["node_1"],\n      "interpolation": "STEP"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  "name": "Interactive Kiosk",\n  "description": "Digital information kiosk with animated display panel",\n  \n  "gltf:asset": {\n    "version": "2.0",\n    "copyright": "\xa9 2024 Virtual Designs Inc.",\n    "generator": "MetaverseBuilder 2.1"\n  },\n  \n  "gltf:scene": {\n    "nodes": ["kiosk_base", "display_panel"],\n    "defaultScene": true\n  },\n  \n  "gltf:nodes": [\n    {\n      "name": "kiosk_base",\n      "transform": {\n        "scale": [1.0, 1.0, 1.0],\n        "rotation": [0, 0, 0, 1],\n        "translation": [0, 0, 0]\n      },\n      "mesh": "kiosk_base_mesh"\n    },\n    {\n      "name": "display_panel",\n      "transform": {\n        "scale": [1.0, 1.0, 1.0],\n        "rotation": [0, 0, 0, 1],\n        "translation": [0, 1.5, 0]\n      },\n      "mesh": "panel_mesh"\n    }\n  ],\n  \n  "gltf:materials": [\n    {\n      "name": "KioskMetal",\n      "pbrMetallicRoughness": {\n        "baseColorFactor": [0.8, 0.8, 0.8, 1.0],\n        "metallicFactor": 1.0,\n        "roughnessFactor": 0.2\n      }\n    },\n    {\n      "name": "DisplayScreen",\n      "pbrMetallicRoughness": {\n        "baseColorFactor": [0.1, 0.1, 0.1, 1.0],\n        "metallicFactor": 0.0,\n        "roughnessFactor": 0.1\n      },\n      "emissiveFactor": [1.0, 1.0, 1.0]\n    }\n  ],\n  \n  "gltf:animations": [\n    {\n      "name": "DisplayRotate",\n      "type": "rotation",\n      "duration": 2.0,\n      "channels": ["display_panel"],\n      "interpolation": "LINEAR"\n    },\n    {\n      "name": "DisplayActive",\n      "type": "emissive",\n      "duration": 1.0,\n      "channels": ["DisplayScreen"],\n      "interpolation": "STEP"\n    }\n  ],\n  \n  "gltf:meshes": [\n    {\n      "name": "kiosk_base_mesh",\n      "primitives": [\n        {\n          "material": "KioskMetal",\n          "attributes": {\n            "POSITION": true,\n            "NORMAL": true,\n            "TEXCOORD_0": true\n          }\n        }\n      ]\n    },\n    {\n      "name": "panel_mesh",\n      "primitives": [\n        {\n          "material": "DisplayScreen",\n          "attributes": {\n            "POSITION": true,\n            "NORMAL": true,\n            "TEXCOORD_0": true\n          }\n        }\n      ]\n    }\n  ],\n  \n  "gltf:extensions": [\n    {\n      "name": "KHR_materials_unlit",\n      "meshes": ["panel_mesh"]\n    },\n    {\n      "name": "KHR_lights_punctual",\n      "lights": ["display_glow"]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"property-guidelines",children:"Property Guidelines"}),"\n",(0,t.jsx)(e.h3,{id:"transform-properties",children:"Transform Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use right-handed coordinate system"}),"\n",(0,t.jsx)(e.li,{children:"Rotations in quaternions [x, y, z, w]"}),"\n",(0,t.jsx)(e.li,{children:"Scales as uniform or non-uniform [x, y, z]"}),"\n",(0,t.jsx)(e.li,{children:"Translations in meters [x, y, z]"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"material-properties-1",children:"Material Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use PBR (Physically Based Rendering) properties"}),"\n",(0,t.jsx)(e.li,{children:"Specify all material factors"}),"\n",(0,t.jsx)(e.li,{children:"Include texture references when used"}),"\n",(0,t.jsx)(e.li,{children:"Document custom properties"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"animation-properties",children:"Animation Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Provide clear animation names"}),"\n",(0,t.jsx)(e.li,{children:"Specify target nodes/channels"}),"\n",(0,t.jsx)(e.li,{children:"Include duration and interpolation"}),"\n",(0,t.jsx)(e.li,{children:"Document animation triggers"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,t.jsx)(e.h3,{id:"required-properties",children:"Required Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Valid glTF version"}),"\n",(0,t.jsx)(e.li,{children:"Proper coordinate system"}),"\n",(0,t.jsx)(e.li,{children:"Complete material definitions"}),"\n",(0,t.jsx)(e.li,{children:"Node references"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"optional-properties",children:"Optional Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Animations"}),"\n",(0,t.jsx)(e.li,{children:"Extensions"}),"\n",(0,t.jsx)(e.li,{children:"Extra attributes"}),"\n",(0,t.jsx)(e.li,{children:"Custom properties"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Hierarchy Organization"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use clear node naming"}),"\n",(0,t.jsx)(e.li,{children:"Maintain logical scene structure"}),"\n",(0,t.jsx)(e.li,{children:"Document parent-child relationships"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Material Management"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use consistent material naming"}),"\n",(0,t.jsx)(e.li,{children:"Apply PBR principles"}),"\n",(0,t.jsx)(e.li,{children:"Document material properties"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Animation Structure"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Clear animation purposes"}),"\n",(0,t.jsx)(e.li,{children:"Logical timing"}),"\n",(0,t.jsx)(e.li,{children:"Proper channel targeting"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Extension Usage"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Document required extensions"}),"\n",(0,t.jsx)(e.li,{children:"Validate extension support"}),"\n",(0,t.jsx)(e.li,{children:"Provide fallbacks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Review ",(0,t.jsx)(e.a,{href:"/standards/3d-assets/usd",children:"USD Standard"})," for scene composition"]}),"\n",(0,t.jsxs)(e.li,{children:["See ",(0,t.jsx)(e.a,{href:"/metadata-profiles/3d-object-profile.md",children:"3D Object Profile"})," for complete profile"]}),"\n",(0,t.jsxs)(e.li,{children:["Check ",(0,t.jsx)(e.a,{href:"../tools/validation.md",children:"Validation"})," for testing metadata"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);