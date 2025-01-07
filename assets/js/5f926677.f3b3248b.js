"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[5053],{2755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"recipes/equipable","title":"Equipable","description":"The Equipable Recipe extends the Basic Recipe with properties specific to items that can be equipped and used by avatars, such as tools, weapons, and interactive objects.","source":"@site/docs/recipes/equipable.md","sourceDirName":"recipes","slug":"/recipes/equipable","permalink":"/recipes/equipable","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/recipes/equipable.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6}}');var a=i(4848),s=i(8453);const r={sidebar_position:6},o="Equipable",l={},c=[{value:"Core Structure",id:"core-structure",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Basic Information",id:"basic-information",level:3},{value:"Equipable Properties",id:"equipable-properties",level:3},{value:"Technical Specifications",id:"technical-specifications",level:2},{value:"Attachment Configuration",id:"attachment-configuration",level:3},{value:"Interaction System",id:"interaction-system",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Equipable Properties",id:"equipable-properties-1",level:3},{value:"Technical Properties",id:"technical-properties",level:3},{value:"Interaction Properties",id:"interaction-properties",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"equipable",children:"Equipable"})}),"\n",(0,a.jsx)(n.p,{children:"The Equipable Recipe extends the Basic Recipe with properties specific to items that can be equipped and used by avatars, such as tools, weapons, and interactive objects."}),"\n",(0,a.jsx)(n.h2,{id:"core-structure",children:"Core Structure"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  \n  "name": "Magic Staff",\n  "description": "Interactive staff with particle effects and animations",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "equipable-2024-001"\n  },\n  \n  "category": "tool",\n  "equipableType": "staff",\n  "handedness": "both"\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"required-properties",children:"Required Properties"}),"\n",(0,a.jsx)(n.h3,{id:"basic-information",children:"Basic Information"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"@context"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@type"}),': Must be "3DModel"']}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"name"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"description"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"identifier"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"creator"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"contentUrl"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"encodingFormat"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"equipable-properties",children:"Equipable Properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"category"}),": Type of equipable item"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"equipableType"}),": Specific type within category"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"handedness"}),": How item is held/used"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"attachmentPoints"}),": Where item attaches"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"interactions"}),": Available interactions"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"technical-specifications",children:"Technical Specifications"}),"\n",(0,a.jsx)(n.h3,{id:"attachment-configuration",children:"Attachment Configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "attachmentPoints": {\n    "primary": {\n      "name": "right_hand",\n      "position": [0, 0, 0],\n      "rotation": [0, 0, 0, 1],\n      "scale": [1, 1, 1]\n    },\n    "secondary": {\n      "name": "left_hand",\n      "position": [0, 0, 0],\n      "rotation": [0, 0, 0, 1],\n      "scale": [1, 1, 1]\n    }\n  },\n  \n  "physics": {\n    "weight": 2.0,\n    "centerOfMass": [0, 0.3, 0],\n    "collisionMesh": "staff_collision"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"interaction-system",children:"Interaction System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "interactions": {\n    "primary": {\n      "name": "cast",\n      "type": "trigger",\n      "animation": "cast_spell",\n      "effects": ["magic_particles", "glow"],\n      "cooldown": 2.0\n    },\n    "secondary": {\n      "name": "block",\n      "type": "hold",\n      "animation": "staff_block",\n      "effects": ["shield_particles"]\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "gltf": "https://www.khronos.org/gltf/"\n  },\n  "@type": "3DModel",\n  \n  "name": "Arcane Staff",\n  "description": "Powerful magical staff with multiple spell effects",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "equipable-2024-001"\n  },\n  \n  "creator": {\n    "@type": "Organization",\n    "name": "Virtual Artifacts Inc.",\n    "url": "https://example.com/virtual-artifacts"\n  },\n  \n  "dateCreated": "2024-03-15",\n  "license": "https://creativecommons.org/licenses/by/4.0/",\n  \n  "contentUrl": "https://example.com/equipables/arcane-staff.glb",\n  "encodingFormat": "model/gltf-binary",\n  "thumbnail": "https://example.com/thumbnails/arcane-staff.jpg",\n  \n  "category": "tool",\n  "equipableType": "staff",\n  "handedness": "both",\n  \n  "attachmentPoints": {\n    "primary": {\n      "name": "right_hand",\n      "position": [0, 0, 0],\n      "rotation": [0, 0, 0, 1],\n      "scale": [1, 1, 1],\n      "boneMapping": "right_hand_grip"\n    },\n    "secondary": {\n      "name": "left_hand",\n      "position": [0, 0.4, 0],\n      "rotation": [0, 0, 0, 1],\n      "scale": [1, 1, 1],\n      "boneMapping": "left_hand_grip"\n    }\n  },\n  \n  "physics": {\n    "weight": 2.0,\n    "centerOfMass": [0, 0.3, 0],\n    "collisionMesh": "staff_collision",\n    "properties": {\n      "rigid": true,\n      "material": "wood",\n      "friction": 0.5\n    }\n  },\n  \n  "interactions": {\n    "primary": {\n      "name": "fireball",\n      "type": "trigger",\n      "animation": "cast_fireball",\n      "effects": [\n        {\n          "name": "fire_particles",\n          "type": "particle",\n          "duration": 2.0,\n          "color": [1.0, 0.5, 0.0]\n        },\n        {\n          "name": "glow",\n          "type": "emission",\n          "color": [1.0, 0.5, 0.0],\n          "intensity": 2.0\n        }\n      ],\n      "cooldown": 2.0\n    },\n    "secondary": {\n      "name": "shield",\n      "type": "hold",\n      "animation": "cast_shield",\n      "effects": [\n        {\n          "name": "shield_particles",\n          "type": "particle",\n          "duration": "hold",\n          "color": [0.0, 0.5, 1.0]\n        }\n      ],\n      "energy": {\n        "cost": 10,\n        "per": "second"\n      }\n    }\n  },\n  \n  "customization": {\n    "materials": [\n      {\n        "name": "staff_wood",\n        "type": "texture",\n        "options": [\n          {\n            "name": "oak",\n            "diffuse": "textures/oak_wood.jpg",\n            "normal": "textures/oak_wood_normal.jpg"\n          },\n          {\n            "name": "ebony",\n            "diffuse": "textures/ebony_wood.jpg",\n            "normal": "textures/ebony_wood_normal.jpg"\n          }\n        ]\n      },\n      {\n        "name": "crystal",\n        "type": "material",\n        "options": [\n          {\n            "name": "ruby",\n            "color": [1.0, 0.0, 0.0],\n            "emission": [1.0, 0.0, 0.0]\n          },\n          {\n            "name": "sapphire",\n            "color": [0.0, 0.0, 1.0],\n            "emission": [0.0, 0.0, 1.0]\n          }\n        ]\n      }\n    ],\n    \n    "effects": [\n      {\n        "name": "spell_color",\n        "type": "particle_color",\n        "options": [\n          {\n            "name": "fire",\n            "color": [1.0, 0.5, 0.0]\n          },\n          {\n            "name": "ice",\n            "color": [0.0, 0.5, 1.0]\n          }\n        ]\n      }\n    ]\n  },\n  \n  "gltf:animations": [\n    {\n      "name": "idle",\n      "type": "loop",\n      "duration": 3.0\n    },\n    {\n      "name": "cast_fireball",\n      "type": "oneshot",\n      "duration": 1.0\n    },\n    {\n      "name": "cast_shield",\n      "type": "loop",\n      "duration": 2.0\n    }\n  ],\n  \n  "compatibility": {\n    "avatarTypes": ["humanoid"],\n    "platforms": ["platform-a", "platform-b"],\n    "minimumVersion": "2.0"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,a.jsx)(n.h3,{id:"equipable-properties-1",children:"Equipable Properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Valid category values"}),"\n",(0,a.jsx)(n.li,{children:"Proper attachment points"}),"\n",(0,a.jsx)(n.li,{children:"Complete interaction definitions"}),"\n",(0,a.jsx)(n.li,{children:"Valid physics properties"}),"\n",(0,a.jsx)(n.li,{children:"Supported animations"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"technical-properties",children:"Technical Properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Valid attachment configurations"}),"\n",(0,a.jsx)(n.li,{children:"Proper bone mappings"}),"\n",(0,a.jsx)(n.li,{children:"Compatible physics settings"}),"\n",(0,a.jsx)(n.li,{children:"Supported effect types"}),"\n",(0,a.jsx)(n.li,{children:"Valid animation references"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"interaction-properties",children:"Interaction Properties"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Valid interaction types"}),"\n",(0,a.jsx)(n.li,{children:"Complete effect definitions"}),"\n",(0,a.jsx)(n.li,{children:"Proper cooldown values"}),"\n",(0,a.jsx)(n.li,{children:"Vali"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);