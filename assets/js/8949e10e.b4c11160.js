"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[184],{3855:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"recipes/composable-3d-nft","title":"Composable 3D NFT","description":"This Composable 3D NFT recipe extends the Basic Profile with properties specific to 3D models and objects. This profile combines","source":"@site/docs/recipes/composable-3d-nft.md","sourceDirName":"recipes","slug":"/recipes/composable-3d-nft","permalink":"/recipes/composable-3d-nft","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/recipes/composable-3d-nft.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/recipes/overview"},"next":{"title":"Future Recipes","permalink":"/recipes/future"}}');var a=r(4848),s=r(8453);const i={sidebar_position:2},o="Composable 3D NFT",l={},d=[{value:"Core Structure",id:"core-structure",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"composable-3d-nft",children:"Composable 3D NFT"})}),"\n",(0,a.jsx)(n.p,{children:"This Composable 3D NFT recipe extends the Basic Profile with properties specific to 3D models and objects. This profile combines\nSchema.org metadata with technical properties from glTF and related standards to define reusable 3D assets."}),"\n",(0,a.jsx)(n.p,{children:"It uses the hasPart attribute to define the individual parts of the model, so that they can be combined with other NFTs."}),"\n",(0,a.jsx)(n.h2,{id:"core-structure",children:"Core Structure"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Trashformers #3 - The Professor",\n  "description": "The Professor is an eccentric and brilliant scientist with spider-like metallic legs and a body made from a smuggled ipe wood shelf, obsessed with the properties of garbage and pioneering the field of \\"Quantum Garbology,\\" which makes him a valuable, though absent-minded, ally to the Trashformers.",\n  "sensitive_content": false,\n  "series_number": 3,\n  "series_total": 123,\n  "attributes": [\n    {\n      "trait_type": "Head",\n      "value": "Dark Shelfmet"\n    },\n    {\n      "trait_type": "Waist",\n      "value": "Mempool"\n    },\n    {\n      "trait_type": "Bottom",\n      "value": "Air Care"\n    },\n    {\n      "trait_type": "Legs",\n      "value": "Arachnoid"\n    },\n    {\n      "trait_type": "Slide",\n      "value": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_slide.png"\n    }\n  ],\n  "collection": {\n    "name": "Trashformers",\n    "id": "d1da7f91-5175-441f-8c68-f02c146250f7",\n    "attributes": [\n      {\n        "type": "description",\n        "value": "123 Spacebucks NFTs"\n      },\n      {\n        "type": "icon",\n        "value": "https://trashformers.xyz/files/trashformers-icon.jpg"\n      },\n      {\n        "type": "banner",\n        "value": "https://trashformers.xyz/files/trashformers_header.jpg"\n      },\n      {\n        "type": "twitter",\n        "value": "@TrashformersNFT"\n      },\n      {\n        "type": "website",\n        "value": "https://trashformers.xyz"\n      }\n    ]\n  },\n  "data": {\n    "@context": {\n      "@vocab": "https://schema.org/",\n      "mvmd": "https://mvmd.org/v1/",\n      "gltf": "https://www.khronos.org/gltf/"\n    },\n    "@type": "ImageObject",\n    "encodingFormat": "image/png",\n    "contentSize": "4.1708 MB",\n    "width": 4000,\n    "height": 4000,\n    "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_image.png",\n    "encodesCreativeWork": [\n      {\n        "@type": "VideoObject",\n        "sha256": "3b4b77d57a5d354c830455dc97a5ecc3fc1a7d9338999958ddd95f5d96fdec23",\n        "height": "4000",\n        "width": "4000",\n        "name": "Trashformers 003 - Rare 1_turntable.mp4",\n        "size": "16.378 MB",\n        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_turntable.mp4",\n        "description": "Turntable",\n        "encodingFormat": "video/mp4"\n      }\n    ],\n    "thumbnail": [\n      {\n        "@type": "ImageObject",\n        "sha256": "050aa7b601f9d050a9ecb1b852911c235064916f0d9d6587d72a3983a2a92564",\n        "height": "4000",\n        "width": "4000",\n        "name": "Trashformers 003 - Rare 1_image.png",\n        "size": "4.1708 MB",\n        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_image.png",\n        "description": "Thumbnail",\n        "encodingFormat": "image/png"\n      }\n    ],\n    "associatedMedia": [\n      {\n        "@type": "3DModel",\n        "sha256": "6b773924348c8933cebbb23a71990ccfb16b00356dfb1ddfd7bbf28ac33e9e04",\n        "name": "Trashformers 003 - Rare 1_glb.glb",\n        "size": "3.52 MB",\n        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_glb.glb",\n        "description": "GLB Model",\n        "encodingFormat": "model/gltf-binary"\n      }\n    ],\n    "hasPart": [\n      {\n        "@type": "3DModel",\n        "encodingFormat": "model/gltf-binary",\n        "sha256": "b3b9488ee49f38fa256a22c89e8efd6ce1a98d6a0d25a5a6aa76695f0efe7ea9",\n        "identifier": {\n          "@type": "PropertyValue",\n          "propertyID": "Trait",\n          "name": "Head",\n          "value": "Dark Shelfmet"\n        },\n        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_part_head_dark_shelfmet.glb",\n        "gltf:properties": {\n          "scale": [\n            1.4201340675354005,\n            1.4201343059539796,\n            1.4201343059539796\n          ],\n          "rotation": [\n            -0.7071068286895752,\n            0.0,\n            0.0,\n            0.7071068286895752\n          ],\n          "translation": [\n            0.0001447883842047304,\n            0.4153881072998047,\n            0.0830850899219513\n          ]\n        },\n        "name": "Trashformers 003 - Rare 1_part_head_dark_shelfmet.glb",\n        "size": "677.920 KB",\n        "description": "GLB Part"\n      },\n      {\n        "@type": "3DModel",\n        "encodingFormat": "model/gltf-binary",\n        "sha256": "615656921907f14606e7dffb6c145931a2978798779e1d1b6a6a049f6168b7d2",\n        "identifier": {\n          "@type": "PropertyValue",\n          "propertyID": "Trait",\n          "name": "Bottom",\n          "value": "Air Care"\n        },\n        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_part_bottom_air_care.glb",\n        "gltf:properties": {\n          "scale": [\n            1.1783671379089356,\n            1.1783673763275147,\n            1.1783673763275147\n          ],\n          "rotation": [\n            -0.7071068286895752,\n            0.0,\n            0.0,\n            0.7071068286895752\n          ],\n          "translation": [\n            0.0,\n            -0.2519422769546509,\n            0.09754324704408646\n          ]\n        },\n        "name": "Trashformers 003 - Rare 1_part_bottom_air_care.glb",\n        "size": "555.960 KB",\n        "description": "GLB Part"\n      },\n      {\n        "@type": "3DModel",\n        "encodingFormat": "model/gltf-binary",\n        "sha256": "7187721a651e53860d54fb7e6375ca11af49153ea074c48f56e08c341a3eab8e",\n        "identifier": {\n          "@type": "PropertyValue",\n          "propertyID": "Trait",\n          "name": "Legs",\n          "value": "Arachnoid"\n        },\n        "url": "https://trashformers.xyz/files/Trashformers_003_-_Rare_1_part_legs_arachnoid.glb",\n        "gltf:properties": {\n          "scale": [\n            1.0947469472885132,\n            1.0947471857070923,\n            1.0947471857070923\n          ],\n          "rotation": [\n            -0.7071068286895752,\n            0.0,\n            0.0,\n            0.7071068286895752\n          ],\n          "translation": [\n            0.0,\n            -0.5753867030143738,\n            0.0025049836840480568\n          ]\n        },\n        "name": "Trashformers 003 - Rare 1_part_legs_arachnoid.glb",\n        "size": "1.36 MB",\n        "description": "GLB Part"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Review ",(0,a.jsx)(n.a,{href:"./environment-profile.md",children:"Environment Profile"})," for spatial context"]}),"\n",(0,a.jsxs)(n.li,{children:["Check ",(0,a.jsx)(n.a,{href:"./avatar-profile.md",children:"Avatar Profile"})," for character-specific properties"]}),"\n",(0,a.jsxs)(n.li,{children:["See ",(0,a.jsx)(n.a,{href:"../tools/validation.md",children:"Validation Tools"})," for testing"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);