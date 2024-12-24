"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[12],{9833:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tools/query-builder","title":"query-builder","description":"---","source":"@site/docs/tools/query-builder.md","sourceDirName":"tools","slug":"/tools/query-builder","permalink":"/tools/query-builder","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/tools/query-builder.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"api-reference","permalink":"/tools/api-reference"}}');var i=r(4848),a=r(8453);const l={},t=void 0,c={},d=[{value:"sidebar_position: 3",id:"sidebar_position-3",level:2},{value:"Query Types",id:"query-types",level:2},{value:"Basic Search",id:"basic-search",level:3},{value:"Property Filters",id:"property-filters",level:3},{value:"Query Operations",id:"query-operations",level:2},{value:"Comparison Operators",id:"comparison-operators",level:3},{value:"Logical Operators",id:"logical-operators",level:3},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Field Selection",id:"field-selection",level:3},{value:"Aggregations",id:"aggregations",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Query Optimization",id:"1-query-optimization",level:3},{value:"2. Performance Considerations",id:"2-performance-considerations",level:3},{value:"3. Error Handling",id:"3-error-handling",level:3},{value:"Common Query Patterns",id:"common-query-patterns",level:2},{value:"Find Assets by Creator",id:"find-assets-by-creator",level:3},{value:"Search Environment Features",id:"search-environment-features",level:3},{value:"Find Compatible Assets",id:"find-compatible-assets",level:3},{value:"Using Query Results",id:"using-query-results",level:2},{value:"Result Format",id:"result-format",level:3},{value:"Error Format",id:"error-format",level:3},{value:"Next Steps",id:"next-steps",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"sidebar_position-3",children:"sidebar_position: 3"}),"\n",(0,i.jsx)(n.h1,{id:"query-builder",children:"Query Builder"}),"\n",(0,i.jsx)(n.p,{children:"The MVMD Query Builder helps you construct metadata queries using a visual interface or programmatic APIs. This tool supports complex queries across all metadata profiles and standards."}),"\n",(0,i.jsx)(n.h2,{id:"query-types",children:"Query Types"}),"\n",(0,i.jsx)(n.h3,{id:"basic-search",children:"Basic Search"}),"\n",(0,i.jsx)(n.p,{children:"Simple text-based search across all metadata fields."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(query: "office chair", type: "3DModel") {\n    results {\n      name\n      description\n      contentUrl\n      creator {\n        name\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"property-filters",children:"Property Filters"}),"\n",(0,i.jsx)(n.p,{children:"Filter by specific metadata properties:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    filter: {\n      type: "3DModel"\n      properties: [\n        { key: "encodingFormat", value: "model/gltf-binary" }\n        { key: "gltf:materials.name", value: "Metal" }\n      ]\n    }\n  ) {\n    results {\n      name\n      contentUrl\n      gltf:materials {\n        name\n        pbrMetallicRoughness {\n          baseColorFactor\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"query-operations",children:"Query Operations"}),"\n",(0,i.jsx)(n.h3,{id:"comparison-operators",children:"Comparison Operators"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eq"}),": Equals"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ne"}),": Not equals"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gt"}),": Greater than"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lt"}),": Less than"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gte"}),": Greater than or equal"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lte"}),": Less than or equal"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"contains"}),": Contains substring"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"startsWith"}),": Starts with"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"in"}),": Value in array"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"regex"}),": Regular expression match"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    filter: {\n      dateCreated: { gte: "2024-01-01" }\n      maximumAttendeeCapacity: { gt: 100 }\n    }\n  ) {\n    results {\n      name\n      dateCreated\n      maximumAttendeeCapacity\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"logical-operators",children:"Logical Operators"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AND"}),": All conditions must match"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OR"}),": Any condition must match"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NOT"}),": Condition must not match"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    filter: {\n      AND: [\n        { type: "3DModel" },\n        { \n          OR: [\n            { "gltf:materials.name": "Metal" },\n            { "gltf:materials.name": "Glass" }\n          ]\n        }\n      ]\n    }\n  ) {\n    results {\n      name\n      gltf:materials {\n        name\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,i.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,i.jsx)(n.p,{children:"Control result size and position:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    query: "chair"\n    limit: 20\n    offset: 40\n  ) {\n    results {\n      name\n    }\n    pageInfo {\n      totalResults\n      hasNextPage\n      nextOffset\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"field-selection",children:"Field Selection"}),"\n",(0,i.jsx)(n.p,{children:"Control which fields to return:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(query: "conference room") {\n    results {\n      # Basic fields\n      name\n      description\n      \n      # Technical details\n      gltf:materials {\n        name\n        pbrMetallicRoughness\n      }\n      \n      # Spatial properties\n      spatialCoverage {\n        box\n        height\n      }\n      \n      # Capacity info\n      maximumAttendeeCapacity\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"aggregations",children:"Aggregations"}),"\n",(0,i.jsx)(n.p,{children:"Perform calculations on query results:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  aggregate(\n    groupBy: "creator.name"\n    metrics: [\n      { type: "count", name: "totalAssets" },\n      { type: "avg", field: "maximumAttendeeCapacity", name: "avgCapacity" }\n    ]\n  ) {\n    results {\n      key\n      totalAssets\n      avgCapacity\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(n.h3,{id:"1-query-optimization",children:"1. Query Optimization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use specific field queries instead of full-text search"}),"\n",(0,i.jsx)(n.li,{children:"Request only needed fields"}),"\n",(0,i.jsx)(n.li,{children:"Use pagination for large result sets"}),"\n",(0,i.jsx)(n.li,{children:"Apply appropriate filters early"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-performance-considerations",children:"2. Performance Considerations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Limit result size appropriately"}),"\n",(0,i.jsx)(n.li,{children:"Use indexed fields when possible"}),"\n",(0,i.jsx)(n.li,{children:"Avoid deep nested queries"}),"\n",(0,i.jsx)(n.li,{children:"Consider caching frequent queries"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-error-handling",children:"3. Error Handling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(query: "chair") {\n    results {\n      name\n    }\n    errors {\n      field\n      message\n      code\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"common-query-patterns",children:"Common Query Patterns"}),"\n",(0,i.jsx)(n.h3,{id:"find-assets-by-creator",children:"Find Assets by Creator"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    filter: {\n      creator: { name: "Virtual Furnishings Inc." }\n      type: "3DModel"\n    }\n    sort: { field: "dateCreated", order: DESC }\n    limit: 10\n  ) {\n    results {\n      name\n      description\n      dateCreated\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"search-environment-features",children:"Search Environment Features"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    filter: {\n      type: "Place"\n      amenityFeature: {\n        name: "presentationScreen"\n        value: true\n      }\n    }\n  ) {\n    results {\n      name\n      maximumAttendeeCapacity\n      amenityFeature {\n        name\n        value\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"find-compatible-assets",children:"Find Compatible Assets"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:'{\n  search(\n    filter: {\n      AND: [\n        { type: "3DModel" },\n        { encodingFormat: "model/gltf-binary" },\n        { \n          OR: [\n            { license: "https://creativecommons.org/licenses/by/4.0/" },\n            { license: "https://creativecommons.org/licenses/by-sa/4.0/" }\n          ]\n        }\n      ]\n    }\n  ) {\n    results {\n      name\n      contentUrl\n      license\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"using-query-results",children:"Using Query Results"}),"\n",(0,i.jsx)(n.h3,{id:"result-format",children:"Result Format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "search": {\n      "results": [\n        {\n          "name": "Office Chair",\n          "contentUrl": "https://example.com/models/chair.glb"\n        }\n      ],\n      "pageInfo": {\n        "totalResults": 42,\n        "hasNextPage": true,\n        "nextOffset": 20\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"error-format",children:"Error Format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "search": {\n      "results": [],\n      "errors": [\n        {\n          "field": "filter.dateCreated",\n          "message": "Invalid date format",\n          "code": "INVALID_FORMAT"\n        }\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Review ",(0,i.jsx)(n.a,{href:"/tools/api-reference",children:"API Reference"})," for programmatic access"]}),"\n",(0,i.jsxs)(n.li,{children:["See ",(0,i.jsx)(n.a,{href:"/tools/validation",children:"Validation"})," for ensuring metadata quality"]}),"\n",(0,i.jsxs)(n.li,{children:["Check ",(0,i.jsx)(n.a,{href:"/implementation/metadata-profiles/basic-profile",children:"Basic Profile"})," for core metadata fields"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var s=r(6540);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);