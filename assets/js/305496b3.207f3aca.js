"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[8809],{394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"embedding/3d-assets/collada","title":"Collada Standard","description":"COLLADA (Collaborative Design Activity) is an open standard XML schema developed by the Khronos Group for exchanging digital assets among various graphics software applications. It facilitates the seamless interchange of 3D models, animations, textures, and physics simulations between different tools and platforms, enhancing workflow efficiency in 3D content creation. COLLADA documents are typically saved with a .dae (Digital Asset Exchange) file extension. The standard has been widely adopted across the industry and is recognized as ISO/PAS 17506:2012.","source":"@site/docs/embedding/3d-assets/collada.md","sourceDirName":"embedding/3d-assets","slug":"/embedding/3d-assets/collada","permalink":"/embedding/3d-assets/collada","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/embedding/3d-assets/collada.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"OpenXR Standard","permalink":"/embedding/3d-assets/openxr"},"next":{"title":"CityJSON Standard","permalink":"/embedding/geospatial/cityjson"}}');var s=i(4848),t=i(8453);const a={sidebar_position:7},l="Collada Standard",o={},c=[{value:"Core Properties",id:"core-properties",level:2},{value:"Asset Information",id:"asset-information",level:3},{value:"Geometry Structure",id:"geometry-structure",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Property Guidelines",id:"property-guidelines",level:2},{value:"Asset Properties",id:"asset-properties",level:3},{value:"Library Properties",id:"library-properties",level:3},{value:"Scene Properties",id:"scene-properties",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"collada-standard",children:"Collada Standard"})}),"\n",(0,s.jsx)(n.p,{children:"COLLADA (Collaborative Design Activity) is an open standard XML schema developed by the Khronos Group for exchanging digital assets among various graphics software applications. It facilitates the seamless interchange of 3D models, animations, textures, and physics simulations between different tools and platforms, enhancing workflow efficiency in 3D content creation. COLLADA documents are typically saved with a .dae (Digital Asset Exchange) file extension. The standard has been widely adopted across the industry and is recognized as ISO/PAS 17506:2012."}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed information, you can access the full COLLADA 1.5 specification here: ",(0,s.jsx)(n.a,{href:"http://www.collada.org/2008/03/COLLADASchema",children:"COLLADA 1.5 Specification"})]}),"\n",(0,s.jsx)(n.h2,{id:"core-properties",children:"Core Properties"}),"\n",(0,s.jsx)(n.h3,{id:"asset-information",children:"Asset Information"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "dae": "http://www.collada.org/2008/03/COLLADASchema"\n  },\n  "@type": "ImageObject",\n  "name": "3D Scene Export",\n  \n  "dae:asset": {\n    "@type": "dae:Asset",\n    "contributor": {\n      "author": "Digital Arts Studio",\n      "authoring_tool": "Creator Suite 2024",\n      "comments": "Exported for Metaverse use"\n    },\n    "created": "2024-03-15T10:30:00Z",\n    "modified": "2024-03-15T14:20:00Z",\n    "unit": {\n      "name": "meter",\n      "meter": 1.0\n    },\n    "up_axis": "Y_UP"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"geometry-structure",children:"Geometry Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "dae:library_geometries": {\n    "@type": "dae:GeometryLibrary",\n    "geometry": [\n      {\n        "@type": "dae:Geometry",\n        "id": "cube-mesh",\n        "name": "Cube",\n        "mesh": {\n          "source": {\n            "float_array": {\n              "id": "positions",\n              "count": 24,\n              "stride": 3\n            }\n          },\n          "vertices": {\n            "input": {\n              "semantic": "POSITION",\n              "source": "#positions"\n            }\n          }\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "dae": "https://www.khronos.org/collada/ns/"\n  },\n  "@type": "ImageObject",\n  "name": "Architectural Scene",\n  "description": "Detailed architectural model with materials and lighting",\n  "contentUrl": "https://example.com/images/architecture-preview.jpg",\n  \n  "dae:asset": {\n    "@type": "dae:Asset",\n    "contributor": {\n      "author": "Digital Arts Studio",\n      "authoring_tool": "Creator Suite 2024",\n      "comments": "Architectural visualization export"\n    },\n    "created": "2024-03-15T10:30:00Z",\n    "modified": "2024-03-15T14:20:00Z",\n    "unit": {\n      "name": "meter",\n      "meter": 1.0\n    },\n    "up_axis": "Y_UP"\n  },\n  \n  "dae:library_cameras": {\n    "@type": "dae:CameraLibrary",\n    "camera": [\n      {\n        "id": "main-camera",\n        "name": "Main View",\n        "optics": {\n          "technique_common": {\n            "perspective": {\n              "xfov": 60,\n              "aspect_ratio": 1.777,\n              "znear": 0.1,\n              "zfar": 1000.0\n            }\n          }\n        }\n      }\n    ]\n  },\n  \n  "dae:library_lights": {\n    "@type": "dae:LightLibrary",\n    "light": [\n      {\n        "id": "sun-light",\n        "name": "Sun",\n        "technique_common": {\n          "directional": {\n            "color": [1.0, 0.98, 0.92],\n            "intensity": 1.0\n          }\n        }\n      },\n      {\n        "id": "ambient-light",\n        "name": "Ambient",\n        "technique_common": {\n          "ambient": {\n            "color": [0.2, 0.2, 0.2]\n          }\n        }\n      }\n    ]\n  },\n  \n  "dae:library_images": {\n    "@type": "dae:ImageLibrary",\n    "image": [\n      {\n        "id": "texture-1",\n        "name": "WallTexture",\n        "init_from": "textures/wall_diffuse.jpg"\n      }\n    ]\n  },\n  \n  "dae:library_materials": {\n    "@type": "dae:MaterialLibrary",\n    "material": [\n      {\n        "id": "wall-material",\n        "name": "Wall",\n        "instance_effect": {\n          "technique": {\n            "phong": {\n              "diffuse": {\n                "texture": {\n                  "texture": "texture-1",\n                  "texcoord": "UVSET0"\n                }\n              },\n              "specular": [0.2, 0.2, 0.2],\n              "shininess": 20\n            }\n          }\n        }\n      }\n    ]\n  },\n  \n  "dae:library_geometries": {\n    "@type": "dae:GeometryLibrary",\n    "geometry": [\n      {\n        "@type": "dae:Geometry",\n        "id": "wall-mesh",\n        "name": "Wall",\n        "mesh": {\n          "source": [\n            {\n              "id": "positions",\n              "float_array": {\n                "count": 12,\n                "stride": 3\n              }\n            },\n            {\n              "id": "normals",\n              "float_array": {\n                "count": 12,\n                "stride": 3\n              }\n            },\n            {\n              "id": "texcoords",\n              "float_array": {\n                "count": 8,\n                "stride": 2\n              }\n            }\n          ],\n          "vertices": {\n            "input": [\n              {\n                "semantic": "POSITION",\n                "source": "#positions"\n              },\n              {\n                "semantic": "NORMAL",\n                "source": "#normals"\n              },\n              {\n                "semantic": "TEXCOORD",\n                "source": "#texcoords"\n              }\n            ]\n          }\n        }\n      }\n    ]\n  },\n  \n  "dae:library_visual_scenes": {\n    "@type": "dae:VisualSceneLibrary",\n    "visual_scene": {\n      "id": "main-scene",\n      "name": "Building",\n      "node": [\n        {\n          "id": "wall-1",\n          "name": "Front Wall",\n          "translate": [0, 0, 0],\n          "rotate": [0, 1, 0, 0],\n          "scale": [1, 1, 1],\n          "instance_geometry": {\n            "url": "#wall-mesh",\n            "bind_material": {\n              "technique_common": {\n                "instance_material": {\n                  "symbol": "wall-material",\n                  "target": "#wall-material"\n                }\n              }\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"property-guidelines",children:"Property Guidelines"}),"\n",(0,s.jsx)(n.h3,{id:"asset-properties",children:"Asset Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Include contributor info"}),"\n",(0,s.jsx)(n.li,{children:"Set proper units"}),"\n",(0,s.jsx)(n.li,{children:"Define coordinate system"}),"\n",(0,s.jsx)(n.li,{children:"Track versions"}),"\n",(0,s.jsx)(n.li,{children:"Document tools"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"library-properties",children:"Library Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Organize by type"}),"\n",(0,s.jsx)(n.li,{children:"Use clear IDs"}),"\n",(0,s.jsx)(n.li,{children:"Define relationships"}),"\n",(0,s.jsx)(n.li,{children:"Track dependencies"}),"\n",(0,s.jsx)(n.li,{children:"Document usage"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scene-properties",children:"Scene Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create clear hierarchy"}),"\n",(0,s.jsx)(n.li,{children:"Set transformations"}),"\n",(0,s.jsx)(n.li,{children:"Link resources"}),"\n",(0,s.jsx)(n.li,{children:"Define instances"}),"\n",(0,s.jsx)(n.li,{children:"Track references"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Asset Organization"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Group by type"}),"\n",(0,s.jsx)(n.li,{children:"Use clear naming"}),"\n",(0,s.jsx)(n.li,{children:"Track versions"}),"\n",(0,s.jsx)(n.li,{children:"Document sources"}),"\n",(0,s.jsx)(n.li,{children:"Manage dependencies"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Resource Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Organize libraries"}),"\n",(0,s.jsx)(n.li,{children:"Track references"}),"\n",(0,s.jsx)(n.li,{children:"Handle external files"}),"\n",(0,s.jsx)(n.li,{children:"Optimize reuse"}),"\n",(0,s.jsx)(n.li,{children:"Validate links"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Scene Structure"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clear hierarchy"}),"\n",(0,s.jsx)(n.li,{children:"Logical grouping"}),"\n",(0,s.jsx)(n.li,{children:"Proper transforms"}),"\n",(0,s.jsx)(n.li,{children:"Efficient instances"}),"\n",(0,s.jsx)(n.li,{children:"Clean organization"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Material Setup"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Define clearly"}),"\n",(0,s.jsx)(n.li,{children:"Link textures"}),"\n",(0,s.jsx)(n.li,{children:"Set properties"}),"\n",(0,s.jsx)(n.li,{children:"Handle effects"}),"\n",(0,s.jsx)(n.li,{children:"Document usage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Review ",(0,s.jsx)(n.a,{href:"../material-standards.md",children:"Material Standards"})]}),"\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsx)(n.a,{href:"../scene-composition.md",children:"Scene Composition"})]}),"\n",(0,s.jsxs)(n.li,{children:["Check ",(0,s.jsx)(n.a,{href:"../../tools/validation.md",children:"Validation"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);