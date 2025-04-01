"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[9774],{4358:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"integration-profiles/digital-twin","title":"digital-twin","description":"PROPOSED STATE: This integration profile is currently in a proposed state and is under community review. The specification may change based on feedback and implementation experience.","source":"@site/docs/integration-profiles/digital-twin.md","sourceDirName":"integration-profiles","slug":"/integration-profiles/digital-twin","permalink":"/integration-profiles/digital-twin","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/integration-profiles/digital-twin.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Composable 3D NFT","permalink":"/integration-profiles/composable-3d-nft"},"next":{"title":"Vehicle","permalink":"/integration-profiles/vehicle"}}');var r=i(4848),s=i(8453);const a={sidebar_position:3},l="Digital Twin Integration Profile",o={},c=[{value:"Core Structure",id:"core-structure",level:2},{value:"Required Properties",id:"required-properties",level:2},{value:"Basic Information",id:"basic-information",level:3},{value:"Digital Twin Properties",id:"digital-twin-properties",level:3},{value:"Technical Specifications",id:"technical-specifications",level:2},{value:"Physical Entity Mapping",id:"physical-entity-mapping",level:3},{value:"Synchronization Configuration",id:"synchronization-configuration",level:3},{value:"Complete Example",id:"complete-example",level:2},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Required Properties",id:"required-properties-1",level:3},{value:"Technical Properties",id:"technical-properties",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"PROPOSED STATE"}),": This integration profile is currently in a proposed state and is under community review. The specification may change based on feedback and implementation experience."]}),"\n"]}),"\n",(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"digital-twin-integration-profile",children:"Digital Twin Integration Profile"})}),"\n",(0,r.jsx)(e.p,{children:"The Digital Twin Integration Profile defines metadata for virtual representations of physical objects, environments, or systems. This profile enables synchronization between physical entities and their digital counterparts, supporting real-time monitoring, simulation, and control."}),"\n",(0,r.jsx)(e.h2,{id:"core-structure",children:"Core Structure"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "DigitalDocument",\n  \n  "name": "Factory Equipment Twin",\n  "description": "Digital twin of manufacturing equipment with real-time sensor data",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "twin-2024-001"\n  },\n  \n  "subjectOf": {\n    "@type": "Thing",\n    "name": "Industrial Robot Arm",\n    "manufacturer": "Industrial Robotics Inc.",\n    "serialNumber": "IR-2024-X7-42",\n    "productionDate": "2024-01-15"\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"required-properties",children:"Required Properties"}),"\n",(0,r.jsx)(e.h3,{id:"basic-information",children:"Basic Information"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"@context"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"@type"}),': Typically "DigitalDocument" or "Dataset"']}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"name"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"description"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"identifier"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"subjectOf"}),": The physical entity being represented"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"digital-twin-properties",children:"Digital Twin Properties"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Physical entity identification"}),"\n",(0,r.jsx)(e.li,{children:"Synchronization mechanism"}),"\n",(0,r.jsx)(e.li,{children:"Update frequency"}),"\n",(0,r.jsx)(e.li,{children:"Sensor mappings"}),"\n",(0,r.jsx)(e.li,{children:"Historical data configuration"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"technical-specifications",children:"Technical Specifications"}),"\n",(0,r.jsx)(e.h3,{id:"physical-entity-mapping",children:"Physical Entity Mapping"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "subjectOf": {\n    "@type": "Thing",\n    "name": "Industrial Robot Arm",\n    "manufacturer": "Industrial Robotics Inc.",\n    "serialNumber": "IR-2024-X7-42",\n    "productionDate": "2024-01-15",\n    "location": {\n      "@type": "Place",\n      "name": "Factory Floor - Section B",\n      "address": {\n        "@type": "PostalAddress",\n        "streetAddress": "123 Manufacturing Way",\n        "addressLocality": "Industry City",\n        "postalCode": "12345",\n        "addressCountry": "US"\n      },\n      "geo": {\n        "@type": "GeoCoordinates",\n        "latitude": 37.7749,\n        "longitude": -122.4194\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"synchronization-configuration",children:"Synchronization Configuration"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "synchronization": {\n    "mechanism": "MQTT",\n    "endpoint": "mqtt://example.com/twins/robot-42",\n    "updateFrequency": "realtime",\n    "lastSynced": "2024-03-15T14:30:00Z",\n    "connectionStatus": "active",\n    "latency": 120\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "@context": {\n    "@vocab": "https://schema.org/",\n    "mvmd": "https://mvmd.org/v1/"\n  },\n  "@type": "DigitalDocument",\n  \n  "name": "Manufacturing Robot Digital Twin",\n  "description": "Comprehensive digital twin of industrial robot arm with real-time sensor data, maintenance history, and predictive analytics",\n  \n  "identifier": {\n    "@type": "PropertyValue",\n    "propertyID": "MVMD-ID",\n    "value": "twin-2024-001"\n  },\n  \n  "creator": {\n    "@type": "Organization",\n    "name": "Digital Twin Solutions Inc.",\n    "url": "https://example.com/digital-twins"\n  },\n  \n  "dateCreated": "2024-01-15",\n  "dateModified": "2024-03-15",\n  \n  "subjectOf": {\n    "@type": "Thing",\n    "name": "Industrial Robot Arm",\n    "manufacturer": "Industrial Robotics Inc.",\n    "model": "PrecisionArm X7",\n    "serialNumber": "IR-2024-X7-42",\n    "productionDate": "2024-01-10",\n    "installDate": "2024-01-15",\n    "location": {\n      "@type": "Place",\n      "name": "Factory Floor - Section B",\n      "address": {\n        "@type": "PostalAddress",\n        "streetAddress": "123 Manufacturing Way",\n        "addressLocality": "Industry City",\n        "postalCode": "12345",\n        "addressCountry": "US"\n      },\n      "geo": {\n        "@type": "GeoCoordinates",\n        "latitude": 37.7749,\n        "longitude": -122.4194\n      }\n    },\n    "productionLine": "Assembly Line 3"\n  },\n  \n  "associatedMedia": [\n    {\n      "@type": "3DModel",\n      "name": "Robot Arm 3D Model",\n      "contentUrl": "https://example.com/models/robot-x7.glb",\n      "encodingFormat": "model/gltf-binary"\n    },\n    {\n      "@type": "ImageObject",\n      "name": "Robot Installation Photo",\n      "contentUrl": "https://example.com/images/robot-installed.jpg",\n      "encodingFormat": "image/jpeg"\n    }\n  ],\n  \n  "synchronization": {\n    "mechanism": "MQTT",\n    "endpoint": "mqtt://example.com/twins/robot-42",\n    "updateFrequency": "realtime",\n    "lastSynced": "2024-03-15T14:30:00Z",\n    "connectionStatus": "active",\n    "latency": 120\n  },\n  \n  "sensors": [\n    {\n      "id": "temp-1",\n      "name": "Joint Temperature",\n      "type": "temperature",\n      "unit": "celsius",\n      "location": "main_joint",\n      "updateFrequency": 10,\n      "currentValue": 42.3,\n      "timestamp": "2024-03-15T14:30:00Z",\n      "normalRange": [30, 65],\n      "criticalRange": [75, 90]\n    },\n    {\n      "id": "motion-1",\n      "name": "Arm Position",\n      "type": "position",\n      "unit": "degrees",\n      "location": "arm_angle",\n      "updateFrequency": 50,\n      "currentValue": 45.2,\n      "timestamp": "2024-03-15T14:30:00Z",\n      "accuracy": 0.1\n    },\n    {\n      "id": "pressure-1",\n      "name": "Hydraulic Pressure",\n      "type": "pressure",\n      "unit": "psi",\n      "location": "hydraulic_system",\n      "updateFrequency": 5,\n      "currentValue": 1200,\n      "timestamp": "2024-03-15T14:30:00Z",\n      "normalRange": [1000, 1500],\n      "criticalRange": [1800, 2000]\n    }\n  ],\n  \n  "dataStorage": {\n    "historicalData": {\n      "retentionPeriod": "90d",\n      "storageLocation": "cloud",\n      "samplingRate": "1m",\n      "compressionLevel": "high"\n    },\n    "analytics": {\n      "predictionModels": ["failure_prediction", "maintenance_scheduling"],\n      "alertThresholds": {\n        "temperature": 70,\n        "pressure": 1700\n      }\n    }\n  },\n  \n  "maintenance": {\n    "history": [\n      {\n        "date": "2024-02-15",\n        "type": "scheduled",\n        "description": "30-day checkup",\n        "technician": "J. Smith",\n        "findings": "All systems nominal"\n      }\n    ],\n    "schedule": {\n      "nextMaintenance": "2024-04-15",\n      "type": "scheduled",\n      "description": "90-day full inspection"\n    },\n    "predictedIssues": [\n      {\n        "component": "hydraulic_pump",\n        "probability": 0.23,\n        "timeframe": "30d",\n        "recommendedAction": "Visual inspection at next maintenance"\n      }\n    ]\n  },\n  \n  "performance": {\n    "uptime": "99.7%",\n    "productivity": [\n      {\n        "metric": "units_processed",\n        "value": 12500,\n        "period": "30d"\n      },\n      {\n        "metric": "cycle_time",\n        "value": 45.2,\n        "unit": "seconds"\n      }\n    ],\n    "alerts": [\n      {\n        "date": "2024-03-10T08:42:15Z",\n        "type": "warning",\n        "source": "temp-1",\n        "message": "Temperature spike detected",\n        "value": 68.5,\n        "resolution": "auto-resolved"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,r.jsx)(e.h3,{id:"required-properties-1",children:"Required Properties"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Valid physical entity mapping"}),"\n",(0,r.jsx)(e.li,{children:"Complete synchronization configuration"}),"\n",(0,r.jsx)(e.li,{children:"Proper sensor definitions"}),"\n",(0,r.jsx)(e.li,{children:"Data storage configuration"}),"\n",(0,r.jsx)(e.li,{children:"Maintenance information"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"technical-properties",children:"Technical Properties"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Valid endpoints"}),"\n",(0,r.jsx)(e.li,{children:"Proper update frequencies"}),"\n",(0,r.jsx)(e.li,{children:"Complete sensor metadata"}),"\n",(0,r.jsx)(e.li,{children:"Appropriate value ranges"}),"\n",(0,r.jsx)(e.li,{children:"Timestamp formatting"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Physical Entity Mapping"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Include complete identification"}),"\n",(0,r.jsx)(e.li,{children:"Provide accurate location"}),"\n",(0,r.jsx)(e.li,{children:"Document physical characteristics"}),"\n",(0,r.jsx)(e.li,{children:"Include manufacturer information"}),"\n",(0,r.jsx)(e.li,{children:"Add installation details"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Synchronization Configuration"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Define clear update mechanisms"}),"\n",(0,r.jsx)(e.li,{children:"Document endpoint security"}),"\n",(0,r.jsx)(e.li,{children:"Set appropriate update frequencies"}),"\n",(0,r.jsx)(e.li,{children:"Include status monitoring"}),"\n",(0,r.jsx)(e.li,{children:"Plan for connection loss"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Sensor Integration"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Document all connected sensors"}),"\n",(0,r.jsx)(e.li,{children:"Define clear measurement units"}),"\n",(0,r.jsx)(e.li,{children:"Set normal and critical ranges"}),"\n",(0,r.jsx)(e.li,{children:"Include calibration information"}),"\n",(0,r.jsx)(e.li,{children:"Plan update frequencies"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Data Management"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Define storage requirements"}),"\n",(0,r.jsx)(e.li,{children:"Document retention policies"}),"\n",(0,r.jsx)(e.li,{children:"Plan data compression"}),"\n",(0,r.jsx)(e.li,{children:"Consider privacy requirements"}),"\n",(0,r.jsx)(e.li,{children:"Include backup procedures"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Data Synchronization"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Connection reliability"}),"\n",(0,r.jsx)(e.li,{children:"Update frequency balancing"}),"\n",(0,r.jsx)(e.li,{children:"Data validation challenges"}),"\n",(0,r.jsx)(e.li,{children:"System latency management"}),"\n",(0,r.jsx)(e.li,{children:"Authentication requirements"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Sensor Integration"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Sensor data accuracy"}),"\n",(0,r.jsx)(e.li,{children:"Calibration drift"}),"\n",(0,r.jsx)(e.li,{children:"Unit conversion issues"}),"\n",(0,r.jsx)(e.li,{children:"Timestamp synchronization"}),"\n",(0,r.jsx)(e.li,{children:"Data filtering requirements"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Review ",(0,r.jsx)(e.a,{href:"../implementation/integration-patterns.md",children:"Integration Patterns"})," for physical-digital synchronization"]}),"\n",(0,r.jsxs)(e.li,{children:["See ",(0,r.jsx)(e.a,{href:"../implementation/data-storage.md",children:"Data Storage Best Practices"})," for time-series data management"]}),"\n",(0,r.jsxs)(e.li,{children:["Check ",(0,r.jsx)(e.a,{href:"../tools/validation.md",children:"Validation Tools"})," for testing"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);