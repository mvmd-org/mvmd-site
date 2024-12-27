"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[9998],{1449:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"implementation/profiles/environment-profile","title":"Environment Profile","description":"The Environment Profile defines metadata for virtual spaces and environments. This profile combines spatial, interactive, and technical properties from multiple standards to describe complex virtual environments.","source":"@site/docs/implementation/profiles/environment-profile.md","sourceDirName":"implementation/profiles","slug":"/implementation/profiles/environment-profile","permalink":"/implementation/profiles/environment-profile","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/implementation/profiles/environment-profile.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4}}');var r=i(4848),a=i(8453);const l={sidebar_position:4},o="Environment Profile",s={},c=[{value:"Core Structure",id:"core-structure",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Basic Information (from Basic Profile)",id:"basic-information-from-basic-profile",level:3},{value:"Environment Properties",id:"environment-properties",level:3},{value:"Spatial Properties",id:"spatial-properties",level:2},{value:"Basic Spatial Information",id:"basic-spatial-information",level:3},{value:"Scene Composition",id:"scene-composition",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Spatial Validation",id:"spatial-validation",level:3},{value:"Capacity Validation",id:"capacity-validation",level:3},{value:"Interactive Elements",id:"interactive-elements",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"environment-profile",children:"Environment Profile"})}),"\n",(0,r.jsx)(e.p,{children:"The Environment Profile defines metadata for virtual spaces and environments. This profile combines spatial, interactive, and technical properties from multiple standards to describe complex virtual environments."}),"\n",(0,r.jsx)(e.h2,{id:"core-structure",children:"Core Structure"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n   "@context": {\n      "@vocab": "https://schema.org/",\n      "gltf": "https://www.khronos.org/gltf/",\n      "usd": "https://openusd.org/ns/",\n      "citygml": "http://www.opengis.net/citygml/2.0"\n   },\n   "@type": "Place",\n\n   "name": "Virtual Conference Center",\n   "description": "Large-scale virtual conference space with multiple meeting rooms and interactive displays",\n\n   "identifier": {\n      "@type": "PropertyValue",\n      "propertyID": "MVMD-ID",\n      "value": "environment-2024-001"\n   }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"required-properties",children:"Required Properties"}),"\n",(0,r.jsx)(e.h3,{id:"basic-information-from-basic-profile",children:"Basic Information (from Basic Profile)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"@context"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@type"}),': Must be "Place"']}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"name"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"description"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"identifier"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"creator"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"contentUrl"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"encodingFormat"})}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"environment-properties",children:"Environment Properties"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"maximumAttendeeCapacity"})}),"\n",(0,r.jsx)(e.li,{children:"Spatial boundaries"}),"\n",(0,r.jsx)(e.li,{children:"Entry points"}),"\n",(0,r.jsx)(e.li,{children:"Interactive elements"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"spatial-properties",children:"Spatial Properties"}),"\n",(0,r.jsx)(e.h3,{id:"basic-spatial-information",children:"Basic Spatial Information"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n   "spatialCoverage": {\n      "@type": "GeoShape",\n      "box": "0,0,100,100",\n      "elevation": 0\n   },\n\n   "maximumAttendeeCapacity": 500,\n\n   "amenityFeature": [\n      {\n         "@type": "LocationFeatureSpecification",\n         "name": "mainHall",\n         "value": true,\n         "maxCapacity": 200\n      },\n      {\n         "@type": "LocationFeatureSpecification",\n         "name": "meetingRooms",\n         "value": 8,\n         "maxCapacity": 30\n      }\n   ]\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"scene-composition",children:"Scene Composition"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n   "usd:stage": {\n      "upAxis": "Y",\n      "metersPerUnit": 1.0\n   },\n\n   "usd:layers": [\n      {\n         "name": "architecture",\n         "path": "/Conference/Architecture"\n      },\n      {\n         "name": "furniture",\n         "path": "/Conference/Furniture"\n      },\n      {\n         "name": "lighting",\n         "path": "/Conference/Lighting"\n      }\n   ]\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n   "@context": {\n      "@vocab": "https://schema.org/",\n      "gltf": "https://www.khronos.org/gltf/",\n      "usd": "https://openusd.org/ns/",\n      "citygml": "http://www.opengis.net/citygml/2.0"\n   },\n   "@type": "Place",\n\n   "name": "Virtual Conference Center",\n   "description": "Professional virtual conference space featuring a grand hall, multiple meeting rooms, and interactive presentation areas.",\n\n   "identifier": {\n      "@type": "PropertyValue",\n      "propertyID": "MVMD-ID",\n      "value": "environment-2024-001"\n   },\n\n   "creator": {\n      "@type": "Organization",\n      "name": "Virtual Spaces Inc.",\n      "url": "https://example.com/virtual-spaces"\n   },\n\n   "dateCreated": "2024-03-15",\n   "license": "https://creativecommons.org/licenses/by/4.0/",\n\n   "contentUrl": "https://example.com/environments/conference-center.usd",\n   "encodingFormat": "model/vnd.usd",\n   "thumbnailUrl": "https://example.com/thumbnails/conference-center.jpg",\n\n   "spatialCoverage": {\n      "@type": "GeoShape",\n      "box": "0,0,200,150",\n      "elevation": 0,\n      "ceiling": 6\n   },\n\n   "maximumAttendeeCapacity": 500,\n\n   "amenityFeature": [\n      {\n         "@type": "LocationFeatureSpecification",\n         "name": "mainHall",\n         "value": true,\n         "maxCapacity": 200,\n         "location": {\n            "@type": "Place",\n            "additionalProperty": {\n               "@type": "PropertyValue",\n               "name": "coordinates",\n               "value": [100, 0, 75]\n            }\n         }\n      },\n      {\n         "@type": "LocationFeatureSpecification",\n         "name": "meetingRooms",\n         "value": 8,\n         "maxCapacity": 30,\n         "amenityFeature": {\n            "name": "presentationScreen",\n            "value": true\n         }\n      }\n   ],\n\n   "usd:stage": {\n      "upAxis": "Y",\n      "metersPerUnit": 1.0\n   },\n\n   "usd:layers": [\n      {\n         "name": "architecture",\n         "path": "/Conference/Architecture"\n      },\n      {\n         "name": "furniture",\n         "path": "/Conference/Furniture"\n      },\n      {\n         "name": "lighting",\n         "path": "/Conference/Lighting"\n      },\n      {\n         "name": "interactive",\n         "path": "/Conference/Interactive"\n      }\n   ],\n\n   "usd:variants": {\n      "lighting": ["day", "night", "presentation"],\n      "layout": ["conference", "exhibition", "reception"]\n   },\n\n   "citygml:indoor": {\n      "storeys": 1,\n      "rooms": [\n         {\n            "name": "mainHall",\n            "type": "hall",\n            "height": 6.0,\n            "area": 1000\n         },\n         {\n            "name": "meetingRoom",\n            "type": "meeting",\n            "height": 3.0,\n            "area": 50,\n            "count": 8\n         }\n      ]\n   },\n\n   "additionalProperty": [\n      {\n         "@type": "PropertyValue",\n         "name": "entryPoints",\n         "value": [\n            {\n               "name": "mainEntrance",\n               "position": [100, 0, 0],\n               "direction": [0, 0, 1]\n            },\n            {\n               "name": "sideEntrance",\n               "position": [0, 0, 75],\n               "direction": [1, 0, 0]\n            }\n         ]\n      },\n      {\n         "@type": "PropertyValue",\n         "name": "spawnPoints",\n         "value": [\n            {\n               "name": "lobby",\n               "position": [100, 0, 10],\n               "direction": [0, 0, 1]\n            }\n         ]\n      },\n      {\n         "@type": "PropertyValue",\n         "name": "interactiveElements",\n         "value": [\n            {\n               "type": "presentationScreen",\n               "locations": ["mainHall", "meetingRooms"],\n               "interactions": ["display", "share", "control"]\n            },\n            {\n               "type": "lightingControl",\n               "locations": ["mainHall", "meetingRooms"],\n               "interactions": ["adjust", "preset"]\n            }\n         ]\n      },\n      {\n         "@type": "PropertyValue",\n         "name": "streamingRegions",\n         "value": [\n            {\n               "name": "mainHall",\n               "priority": 1,\n               "lodLevels": [0, 1, 2]\n            },\n            {\n               "name": "meetingRooms",\n               "priority": 2,\n               "lodLevels": [0, 1]\n            }\n         ]\n      }\n   ]\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,r.jsx)(e.h3,{id:"spatial-validation",children:"Spatial Validation"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Valid spatial boundaries"}),"\n",(0,r.jsx)(e.li,{children:"Non-negative dimensions"}),"\n",(0,r.jsx)(e.li,{children:"Valid coordinates"}),"\n",(0,r.jsx)(e.li,{children:"Proper unit usage"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"capacity-validation",children:"Capacity Validation"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Valid total capacity"}),"\n",(0,r.jsx)(e.li,{children:"Consistent sub-area capacities"}),"\n",(0,r.jsx)(e.li,{children:"Reasonable density limits"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"interactive-elements",children:"Interactive Elements"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Valid element types"}),"\n",(0,r.jsx)(e.li,{children:"Proper positioning"}),"\n",(0,r.jsx)(e.li,{children:"Clear interaction methods"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Spatial Organization"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Clear zone definitions"}),"\n",(0,r.jsx)(e.li,{children:"Proper capacity allocation"}),"\n",(0,r.jsx)(e.li,{children:"Logical layout structure"}),"\n",(0,r.jsx)(e.li,{children:"Efficient navigation paths"}),"\n",(0,r.jsx)(e.li,{children:"Resource optimization"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Interactive Features"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Well-defined interactions"}),"\n",(0,r.jsx)(e.li,{children:"Clear element locations"}),"\n",(0,r.jsx)(e.li,{children:"Proper feature documentation"}),"\n",(0,r.jsx)(e.li,{children:"User-friendly controls"}),"\n",(0,r.jsx)(e.li,{children:"Efficient handling"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Scene Management"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Organized layer structure"}),"\n",(0,r.jsx)(e.li,{children:"Proper variant definitions"}),"\n",(0,r.jsx)(e.li,{children:"Clear streaming regions"}),"\n",(0,r.jsx)(e.li,{children:"Resource optimization"}),"\n",(0,r.jsx)(e.li,{children:"Performance monitoring"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Entry Management"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Clear entry points"}),"\n",(0,r.jsx)(e.li,{children:"Defined spawn locations"}),"\n",(0,r.jsx)(e.li,{children:"Proper flow control"}),"\n",(0,r.jsx)(e.li,{children:"Traffic management"}),"\n",(0,r.jsx)(e.li,{children:"Access control"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Review ",(0,r.jsx)(e.a,{href:"./3d-object-profile.md",children:"3D Object Profile"})," for object metadata"]}),"\n",(0,r.jsxs)(e.li,{children:["See ",(0,r.jsx)(e.a,{href:"/implementation/profiles/avatar-profile",children:"Avatar Profile"})," for character integration"]}),"\n",(0,r.jsxs)(e.li,{children:["Check ",(0,r.jsx)(e.a,{href:"../tools/validation.md",children:"Validation Tools"})," for testing"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var t=i(6540);const r={},a=t.createContext(r);function l(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);