"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[677],{2252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"backup/avatar","title":"Avatar Profile","description":"Purpose and Use Cases","source":"@site/docs/backup/avatar.md","sourceDirName":"backup","slug":"/backup/avatar","permalink":"/backup/avatar","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/backup/avatar.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3}}');var r=t(4848),s=t(8453);const a={sidebar_position:3},l="Avatar Profile",o={},d=[{value:"Purpose and Use Cases",id:"purpose-and-use-cases",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Optional Properties",id:"optional-properties",level:2},{value:"Complete Example",id:"complete-example",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Required Fields Validation",id:"required-fields-validation",level:3},{value:"Optional Fields Validation",id:"optional-fields-validation",level:3},{value:"Implementation Considerations",id:"implementation-considerations",level:2},{value:"Cross-Platform Compatibility",id:"cross-platform-compatibility",level:3},{value:"Animation Implementation",id:"animation-implementation",level:3},{value:"Customization Support",id:"customization-support",level:3},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"avatar-profile",children:"Avatar Profile"})}),"\n",(0,r.jsx)(n.h2,{id:"purpose-and-use-cases",children:"Purpose and Use Cases"}),"\n",(0,r.jsx)(n.p,{children:"The Avatar Profile extends the Basic Profile with properties specific to virtual characters and avatars. It defines metadata structures for customizable, interactive characters that can represent users or NPCs in virtual environments."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Key Use Cases:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"User representation in virtual worlds and social platforms"}),"\n",(0,r.jsx)(n.li,{children:"Non-player characters (NPCs) in games and interactive experiences"}),"\n",(0,r.jsx)(n.li,{children:"Digital identity visualization"}),"\n",(0,r.jsx)(n.li,{children:"Cross-platform avatar portability"}),"\n",(0,r.jsx)(n.li,{children:"Virtual influencers and digital humans"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"required-properties",children:"Required Properties"}),"\n",(0,r.jsxs)(n.p,{children:["The Avatar Profile inherits all required properties from the ",(0,r.jsx)(n.a,{href:"/backup/basic",children:"Basic Profile"})," and adds the following avatar-specific properties:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "VirtualCharacter",\n  \n  // Basic Profile required properties...\n  \n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "avatarProperties",\n      "name": "Avatar Properties",\n      "value": {\n        "type": "humanoid",\n        "style": "stylized",\n        "skeleton": "standard-humanoid",\n        "measurements": {\n          "height": 1.75,\n          "unit": "meters"\n        }\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "animationSupport",\n      "name": "Animation Support",\n      "value": {\n        "supported": ["idle", "walk", "run"]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@type"})}),(0,r.jsx)(n.td,{children:"Asset type"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'Must be "VirtualCharacter"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"avatarProperties.type"})}),(0,r.jsx)(n.td,{children:"Character topology"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'E.g., "humanoid", "creature", "robot"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"avatarProperties.style"})}),(0,r.jsx)(n.td,{children:"Visual style"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:'E.g., "realistic", "stylized", "cartoon"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"avatarProperties.skeleton"})}),(0,r.jsx)(n.td,{children:"Rigging system"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Standard rig identifier"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"avatarProperties.measurements"})}),(0,r.jsx)(n.td,{children:"Basic dimensions"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"At minimum, include height"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"animationSupport.supported"})}),(0,r.jsx)(n.td,{children:"Supported animations"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"List of basic animation names"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"optional-properties",children:"Optional Properties"}),"\n",(0,r.jsx)(n.p,{children:"The Avatar Profile includes the following optional properties to enhance functionality:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  // Required properties as above...\n  \n  "additionalProperty": [\n    // Required additional properties...\n    \n    {\n      "@type": "PropertyValue",\n      "propertyID": "customization",\n      "name": "Customization Options",\n      "value": {\n        "features": [\n          {\n            "category": "face",\n            "options": ["eyes", "nose", "mouth", "ears"],\n            "blendshapes": true\n          },\n          {\n            "category": "hair",\n            "options": ["style", "color"]\n          },\n          {\n            "category": "body",\n            "options": ["build", "height"]\n          }\n        ],\n        "textures": [\n          {\n            "category": "skin",\n            "resolution": "2048x2048",\n            "customizable": true\n          }\n        ]\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "expressiveness",\n      "name": "Expressiveness",\n      "value": {\n        "facialExpressions": true,\n        "voiceSupport": false,\n        "lipSync": false,\n        "emotionTriggers": ["happy", "sad", "angry", "surprised"]\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "equipmentSupport",\n      "name": "Equipment Support",\n      "value": {\n        "slots": ["head", "body", "hands", "feet"],\n        "attachmentPoints": ["rightHand", "leftHand", "back"]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"customization.features"})}),(0,r.jsx)(n.td,{children:"Customizable features"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"User-modifiable aspects"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"customization.textures"})}),(0,r.jsx)(n.td,{children:"Texture customization"}),(0,r.jsx)(n.td,{children:"Array"}),(0,r.jsx)(n.td,{children:"Modifiable texture maps"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"expressiveness"})}),(0,r.jsx)(n.td,{children:"Emotional capabilities"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"Expression capabilities"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"equipmentSupport"})}),(0,r.jsx)(n.td,{children:"Equipment compatibility"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"Attachment points for items"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "VirtualCharacter",\n  \n  "name": "Universal Avatar",\n  "description": "Highly customizable humanoid avatar with extensive animation support and cross-platform compatibility",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "avatar-2024-001"\n  },\n  \n  "creator": {\n    "@type": "Organization",\n    "name": "Virtual Characters Inc.",\n    "url": "https://example.com/virtual-characters"\n  },\n  \n  "dateCreated": "2024-03-15",\n  "dateModified": "2024-03-20T14:30:00Z",\n  "version": "1.2.0",\n  \n  "license": "https://creativecommons.org/licenses/by/4.0/",\n  \n  "contentUrl": "https://example.com/avatars/universal.glb",\n  "encodingFormat": "model/gltf-binary",\n  "fileSize": 3145728,\n  \n  "thumbnail": "https://example.com/thumbnails/avatar.jpg",\n  \n  "keywords": ["avatar", "humanoid", "customizable", "cross-platform"],\n  \n  "additionalProperty": [\n    {\n      "@type": "PropertyValue",\n      "propertyID": "avatarProperties",\n      "name": "Avatar Properties",\n      "value": {\n        "type": "humanoid",\n        "style": "stylized",\n        "skeleton": "standard-humanoid-v2",\n        "measurements": {\n          "height": 1.75,\n          "proportions": "standard",\n          "unit": "meters"\n        }\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "animationSupport",\n      "name": "Animation Support",\n      "value": {\n        "supported": ["idle", "walk", "run", "jump", "sit", "wave", "dance"],\n        "format": "glTF animations",\n        "retargetable": true\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "customization",\n      "name": "Customization Options",\n      "value": {\n        "features": [\n          {\n            "category": "face",\n            "options": ["eyes", "nose", "mouth", "ears", "jaw", "cheeks"],\n            "blendshapes": true,\n            "parameters": 24\n          },\n          {\n            "category": "hair",\n            "options": ["style", "color", "length", "texture"],\n            "presets": 12\n          },\n          {\n            "category": "body",\n            "options": ["build", "height", "weight", "musculature"],\n            "parameters": 18\n          }\n        ],\n        "textures": [\n          {\n            "category": "skin",\n            "resolution": "2048x2048",\n            "maps": ["diffuse", "normal", "roughness"],\n            "customizable": true\n          },\n          {\n            "category": "clothing",\n            "resolution": "2048x2048",\n            "maps": ["diffuse", "normal", "roughness"],\n            "customizable": true\n          }\n        ]\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "expressiveness",\n      "name": "Expressiveness",\n      "value": {\n        "facialExpressions": true,\n        "blendshapeCount": 52,\n        "voiceSupport": true,\n        "lipSync": true,\n        "emotionTriggers": ["happy", "sad", "angry", "surprised", "disgusted", "fearful", "neutral"]\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "equipmentSupport",\n      "name": "Equipment Support",\n      "value": {\n        "slots": ["head", "upper_body", "lower_body", "hands", "feet", "accessories"],\n        "attachmentPoints": ["rightHand", "leftHand", "back", "hip", "shoulder"],\n        "supportedWearableFormats": ["glTF", "VRM"]\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "platformSupport",\n      "name": "Platform Support",\n      "value": {\n        "vrmSupport": true,\n        "readyPlayerMeCompatible": true,\n        "vrChatCompatible": true,\n        "testedPlatforms": ["unity", "unreal", "mozilla-hubs", "meta-horizon"]\n      }\n    },\n    {\n      "@type": "PropertyValue",\n      "propertyID": "performanceOptions",\n      "name": "Performance Options",\n      "value": {\n        "lod": [\n          {\n            "level": 0,\n            "triangles": 50000,\n            "textureSize": 2048\n          },\n          {\n            "level": 1,\n            "triangles": 25000,\n            "textureSize": 1024\n          },\n          {\n            "level": 2,\n            "triangles": 10000,\n            "textureSize": 512\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,r.jsx)(n.h3,{id:"required-fields-validation",children:"Required Fields Validation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"All required fields from Basic Profile must be present"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@type"}),' must be "VirtualCharacter"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"avatarProperties"})," must include at minimum:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": String value describing topology"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"measurements.height"}),": Numeric value with unit"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"animationSupport.supported"})," must contain at least one animation name"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"optional-fields-validation",children:"Optional Fields Validation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"customization.features"})," must be an array if present"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"customization.textures"})," must be an array if present"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expressiveness"})," should include appropriate boolean values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"equipmentSupport.slots"})," and ",(0,r.jsx)(n.code,{children:"equipmentSupport.attachmentPoints"})," should be arrays if present"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation-considerations",children:"Implementation Considerations"}),"\n",(0,r.jsx)(n.h3,{id:"cross-platform-compatibility",children:"Cross-Platform Compatibility"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use standard bone/joint naming conventions following major platform guidelines"}),"\n",(0,r.jsx)(n.li,{children:"Provide VRM metadata when possible for wider compatibility"}),"\n",(0,r.jsx)(n.li,{children:"Test across multiple platforms to ensure consistent appearance and animations"}),"\n",(0,r.jsx)(n.li,{children:"Include LOD variants for different performance requirements"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"animation-implementation",children:"Animation Implementation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure animations are properly retargetable"}),"\n",(0,r.jsx)(n.li,{children:"Provide base locomotion animations at minimum (idle, walk, run)"}),"\n",(0,r.jsx)(n.li,{children:"Test facial animations across platforms if implemented"}),"\n",(0,r.jsx)(n.li,{children:"Document platform-specific animation limitations"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"customization-support",children:"Customization Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Follow platform-specific guidelines for customization parameters"}),"\n",(0,r.jsx)(n.li,{children:"Document the range and limits of each customizable feature"}),"\n",(0,r.jsx)(n.li,{children:"Consider providing default presets for quick setup"}),"\n",(0,r.jsx)(n.li,{children:"Test customization across different rendering engines"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/backup/basic",children:"Basic Profile"}),": Foundation for all assets including avatars"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/backup/wearable",children:"Wearable Profile"}),": For items that can be equipped by avatars"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/backup/identity",children:"Identity Profile"}),": For connecting avatars to user identity"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/standards/overview",children:"3D Standards Namespace"}),": Details on VRM and other avatar formats"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);