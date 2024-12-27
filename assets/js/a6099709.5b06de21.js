"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[8694],{8484:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"standards/3d-assets/openxr","title":"OpenXR Standard","description":"OpenXR is an open-source, royalty-free standard developed by the Khronos Group to provide high-performance access to virtual reality (VR) and augmented reality (AR) platforms and devices. It serves as a unified API, enabling developers to build applications that are interoperable across a wide range of hardware and software platforms, thereby reducing fragmentation in the XR (extended reality) industry.","source":"@site/docs/standards/3d-assets/openxr.md","sourceDirName":"standards/3d-assets","slug":"/standards/3d-assets/openxr","permalink":"/standards/3d-assets/openxr","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/standards/3d-assets/openxr.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"VRM Standard","permalink":"/standards/3d-assets/vrm"},"next":{"title":"Collada Standard","permalink":"/standards/3d-assets/collada"}}');var t=i(4848),s=i(8453);const a={sidebar_position:6},l="OpenXR Standard",o={},c=[{value:"Core Properties",id:"core-properties",level:2},{value:"Action Sets",id:"action-sets",level:3},{value:"Input Bindings",id:"input-bindings",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Property Guidelines",id:"property-guidelines",level:2},{value:"Configuration Properties",id:"configuration-properties",level:3},{value:"Action Properties",id:"action-properties",level:3},{value:"Space Properties",id:"space-properties",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"openxr-standard",children:"OpenXR Standard"})}),"\n",(0,t.jsx)(e.p,{children:"OpenXR is an open-source, royalty-free standard developed by the Khronos Group to provide high-performance access to virtual reality (VR) and augmented reality (AR) platforms and devices. It serves as a unified API, enabling developers to build applications that are interoperable across a wide range of hardware and software platforms, thereby reducing fragmentation in the XR (extended reality) industry.\nKhronos Group"}),"\n",(0,t.jsxs)(e.p,{children:["For detailed information, you can refer to the official OpenXR 1.0 specification: ",(0,t.jsx)(e.a,{href:"https://registry.khronos.org/OpenXR/#apispecs",children:"OpenXR 1.1 Specification"})]}),"\n",(0,t.jsx)(e.h2,{id:"core-properties",children:"Core Properties"}),"\n",(0,t.jsx)(e.h3,{id:"action-sets",children:"Action Sets"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "openxr": "https://registry.khronos.org/OpenXR/specs/1.1/html/xrspec.html"\n  },\n  "@type": "ImageObject",\n  "name": "Interactive Experience",\n\n  "openxr:actionSets": [\n    {\n      "@type": "openxr:ActionSet",\n      "name": "gameplay",\n      "localizedName": "Gameplay Controls",\n      "priority": 1,\n      "actions": [\n        {\n          "name": "grab",\n          "type": "boolean",\n          "localizedName": "Grab Object"\n        },\n        {\n          "name": "move",\n          "type": "vector2f",\n          "localizedName": "Move Character"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"input-bindings",children:"Input Bindings"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "openxr:inputBindings": {\n    "@type": "openxr:InputBindings",\n    "interactionProfile": "/interaction_profiles/khr/simple_controller",\n    "bindings": {\n      "gameplay/grab": {\n        "type": "click",\n        "paths": [\n          "/user/hand/left/input/select/click",\n          "/user/hand/right/input/select/click"\n        ]\n      },\n      "gameplay/move": {\n        "type": "value",\n        "paths": [\n          "/user/hand/left/input/thumbstick",\n          "/user/hand/right/input/thumbstick"\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "xr": "https://www.khronos.org/openxr/"\n  },\n  "@type": "ImageObject",\n  "name": "VR Training Simulation",\n  "description": "Interactive virtual reality training environment",\n  "contentUrl": "https://example.com/images/simulation-preview.jpg",\n  \n  "openxr:configuration": {\n    "@type": "openxr:Configuration",\n    "requiredExtensions": [\n      "XR_KHR_simple_controller",\n      "XR_EXT_hand_tracking"\n    ],\n    "viewConfiguration": "stereo",\n    "blendMode": "opaque",\n    "environmentBlendMode": "opaque",\n    "trackingProperties": {\n      "orientationTracking": true,\n      "positionTracking": true\n    }\n  },\n  \n  "openxr:actionSets": [\n    {\n      "@type": "openxr:ActionSet",\n      "name": "gameplay",\n      "localizedName": "Gameplay Controls",\n      "priority": 1,\n      "actions": [\n        {\n          "name": "grab",\n          "type": "boolean",\n          "localizedName": "Grab Object"\n        },\n        {\n          "name": "move",\n          "type": "vector2f",\n          "localizedName": "Move Character"\n        },\n        {\n          "name": "rotate",\n          "type": "vector2f",\n          "localizedName": "Rotate View"\n        },\n        {\n          "name": "teleport",\n          "type": "boolean",\n          "localizedName": "Teleport"\n        }\n      ]\n    },\n    {\n      "@type": "openxr:ActionSet",\n      "name": "ui",\n      "localizedName": "Menu Controls",\n      "priority": 2,\n      "actions": [\n        {\n          "name": "select",\n          "type": "boolean",\n          "localizedName": "Select Menu Item"\n        },\n        {\n          "name": "scroll",\n          "type": "vector2f",\n          "localizedName": "Scroll Menu"\n        }\n      ]\n    }\n  ],\n  \n  "openxr:inputBindings": {\n    "@type": "openxr:InputBindings",\n    "interactionProfile": "/interaction_profiles/khr/simple_controller",\n    "bindings": {\n      "gameplay/grab": {\n        "type": "click",\n        "paths": [\n          "/user/hand/left/input/select/click",\n          "/user/hand/right/input/select/click"\n        ]\n      },\n      "gameplay/move": {\n        "type": "value",\n        "paths": [\n          "/user/hand/left/input/thumbstick",\n          "/user/hand/right/input/thumbstick"\n        ]\n      },\n      "gameplay/rotate": {\n        "type": "value",\n        "paths": [\n          "/user/hand/right/input/thumbstick"\n        ]\n      },\n      "gameplay/teleport": {\n        "type": "click",\n        "paths": [\n          "/user/hand/right/input/trigger/value"\n        ]\n      }\n    }\n  },\n  \n  "openxr:spaces": {\n    "@type": "openxr:Spaces",\n    "referenceSpaces": [\n      {\n        "type": "local",\n        "bounds": {\n          "width": 5.0,\n          "height": 3.0\n        }\n      },\n      {\n        "type": "stage",\n        "bounds": {\n          "width": 10.0,\n          "height": 10.0\n        }\n      }\n    ],\n    "actionSpaces": [\n      {\n        "action": "gameplay/grab",\n        "space": "grip_pose"\n      }\n    ]\n  },\n  \n  "openxr:rendering": {\n    "@type": "openxr:Rendering",\n    "swapchainFormat": "RGBA8",\n    "depthFormat": "D24S8",\n    "sampleCount": 4,\n    "foveatedRendering": true,\n    "resolution": {\n      "width": 2048,\n      "height": 2048\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"property-guidelines",children:"Property Guidelines"}),"\n",(0,t.jsx)(e.h3,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Specify required extensions"}),"\n",(0,t.jsx)(e.li,{children:"Define view configuration"}),"\n",(0,t.jsx)(e.li,{children:"Set blend modes"}),"\n",(0,t.jsx)(e.li,{children:"Configure tracking"}),"\n",(0,t.jsx)(e.li,{children:"Document requirements"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"action-properties",children:"Action Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Use clear naming"}),"\n",(0,t.jsx)(e.li,{children:"Group related actions"}),"\n",(0,t.jsx)(e.li,{children:"Set proper priorities"}),"\n",(0,t.jsx)(e.li,{children:"Define types accurately"}),"\n",(0,t.jsx)(e.li,{children:"Document bindings"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"space-properties",children:"Space Properties"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Define reference spaces"}),"\n",(0,t.jsx)(e.li,{children:"Set proper bounds"}),"\n",(0,t.jsx)(e.li,{children:"Configure action spaces"}),"\n",(0,t.jsx)(e.li,{children:"Manage tracking"}),"\n",(0,t.jsx)(e.li,{children:"Document relationships"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Input Configuration"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Group related actions"}),"\n",(0,t.jsx)(e.li,{children:"Use consistent naming"}),"\n",(0,t.jsx)(e.li,{children:"Provide localization"}),"\n",(0,t.jsx)(e.li,{children:"Test combinations"}),"\n",(0,t.jsx)(e.li,{children:"Document bindings"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Space Management"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Define clear boundaries"}),"\n",(0,t.jsx)(e.li,{children:"Configure references"}),"\n",(0,t.jsx)(e.li,{children:"Handle transitions"}),"\n",(0,t.jsx)(e.li,{children:"Test tracking"}),"\n",(0,t.jsx)(e.li,{children:"Validate poses"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Rendering Setup"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Set proper formats"}),"\n",(0,t.jsx)(e.li,{children:"Configure resolution"}),"\n",(0,t.jsx)(e.li,{children:"Enable optimizations"}),"\n",(0,t.jsx)(e.li,{children:"Test performance"}),"\n",(0,t.jsx)(e.li,{children:"Validate quality"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Extension Handling"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Check availability"}),"\n",(0,t.jsx)(e.li,{children:"Provide fallbacks"}),"\n",(0,t.jsx)(e.li,{children:"Test compatibility"}),"\n",(0,t.jsx)(e.li,{children:"Document requirements"}),"\n",(0,t.jsx)(e.li,{children:"Handle failures"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Review ",(0,t.jsx)(e.a,{href:"../interaction-profile.md",children:"Interaction Profiles"})]}),"\n",(0,t.jsxs)(e.li,{children:["See ",(0,t.jsx)(e.a,{href:"./vr-standards.md",children:"VR Standards"})]}),"\n",(0,t.jsxs)(e.li,{children:["Check ",(0,t.jsx)(e.a,{href:"/tools/validation",children:"Validation"})]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var r=i(6540);const t={},s=r.createContext(t);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);