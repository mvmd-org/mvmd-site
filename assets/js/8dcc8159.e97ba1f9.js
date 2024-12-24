"use strict";(self.webpackChunkmvmd_site=self.webpackChunkmvmd_site||[]).push([[666],{3774:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"tools/api-reference","title":"API Reference","description":"Authentication","source":"@site/docs/tools/api-reference.md","sourceDirName":"tools","slug":"/tools/api-reference","permalink":"/tools/api-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/mvmd-org/mvmd-site/edit/main/docs/tools/api-reference.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Validation Guide?","permalink":"/tools/validation"},"next":{"title":"Query Builder","permalink":"/tools/query-builder"}}');var s=i(4848),t=i(8453);const l={sidebar_position:2},a="API Reference",d={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Getting API Keys",id:"getting-api-keys",level:3},{value:"API Key Management",id:"api-key-management",level:3},{value:"Core Endpoints",id:"core-endpoints",level:2},{value:"Validation API",id:"validation-api",level:3},{value:"Validate Metadata",id:"validate-metadata",level:4},{value:"Batch Validation",id:"batch-validation",level:4},{value:"Query API",id:"query-api",level:3},{value:"Search Metadata",id:"search-metadata",level:4},{value:"Advanced Search",id:"advanced-search",level:4},{value:"Profile API",id:"profile-api",level:3},{value:"List Profiles",id:"list-profiles",level:4},{value:"Get Profile Schema",id:"get-profile-schema",level:4},{value:"Response Formats",id:"response-formats",level:2},{value:"Success Response",id:"success-response",level:3},{value:"Error Response",id:"error-response",level:3},{value:"Rate Limits",id:"rate-limits",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Authentication",id:"1-authentication",level:3},{value:"2. Request Optimization",id:"2-request-optimization",level:3},{value:"3. Error Handling",id:"3-error-handling",level:3},{value:"4. Security",id:"4-security",level:3},{value:"Code Examples",id:"code-examples",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Python",id:"python",level:3},{value:"Next Steps",id:"next-steps",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"api-reference",children:"API Reference"})}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(n.h3,{id:"getting-api-keys",children:"Getting API Keys"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Register at the MVMD Developer Portal"}),"\n",(0,s.jsx)(n.li,{children:"Create a new API key"}),"\n",(0,s.jsx)(n.li,{children:"Use the key in your API requests"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -H "Authorization: Bearer your-api-key" https://api.mvmd.org/v1/validate\n'})}),"\n",(0,s.jsx)(n.h3,{id:"api-key-management",children:"API Key Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# List active keys\ncurl -H "Authorization: Bearer your-api-key" \\\n     https://api.mvmd.org/v1/keys\n\n# Create new key\ncurl -X POST \\\n     -H "Authorization: Bearer your-api-key" \\\n     -H "Content-Type: application/json" \\\n     -d \'{"name": "Production Key", "expires": "2025-12-31"}\' \\\n     https://api.mvmd.org/v1/keys\n\n# Revoke key\ncurl -X DELETE \\\n     -H "Authorization: Bearer your-api-key" \\\n     https://api.mvmd.org/v1/keys/{key-id}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"core-endpoints",children:"Core Endpoints"}),"\n",(0,s.jsx)(n.h3,{id:"validation-api",children:"Validation API"}),"\n",(0,s.jsx)(n.h4,{id:"validate-metadata",children:"Validate Metadata"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST /v1/validate"})}),"\n",(0,s.jsx)(n.p,{children:"Validates metadata against specified profiles."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "profile": "3DObject",\n  "metadata": {\n    "@context": "https://schema.org/",\n    "@type": "3DModel",\n    "name": "Test Asset"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "valid": true,\n  "warnings": [],\n  "errors": []\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"batch-validation",children:"Batch Validation"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST /v1/validate/batch"})}),"\n",(0,s.jsx)(n.p,{children:"Validates multiple metadata objects in a single request."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "profile": "3DObject",\n      "metadata": {\n        "@context": "https://schema.org/",\n        "@type": "3DModel",\n        "name": "Asset 1"\n      }\n    },\n    {\n      "profile": "Environment",\n      "metadata": {\n        "@context": "https://schema.org/",\n        "@type": "Place",\n        "name": "Environment 1"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"query-api",children:"Query API"}),"\n",(0,s.jsx)(n.h4,{id:"search-metadata",children:"Search Metadata"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /v1/search"})}),"\n",(0,s.jsx)(n.p,{children:"Searches metadata based on criteria."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"q"}),": Search query"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),": Asset type"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"profile"}),": Metadata profile"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"limit"}),": Results per page (default: 20, max: 100)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"offset"}),": Pagination offset"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sort"}),": Sort field and direction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filter"}),": Advanced filtering criteria"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl "https://api.mvmd.org/v1/search?q=chair&type=3DModel&limit=10"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"advanced-search",children:"Advanced Search"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST /v1/search"})}),"\n",(0,s.jsx)(n.p,{children:"Performs complex metadata searches."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "query": {\n    "type": "3DModel",\n    "filter": {\n      "AND": [\n        {"creator.name": "Virtual Studios"},\n        {"encodingFormat": "model/gltf-binary"},\n        {"dateCreated": {"gte": "2024-01-01"}}\n      ]\n    }\n  },\n  "fields": ["name", "description", "contentUrl"],\n  "sort": [{"field": "dateCreated", "order": "desc"}],\n  "limit": 20,\n  "offset": 0\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"profile-api",children:"Profile API"}),"\n",(0,s.jsx)(n.h4,{id:"list-profiles",children:"List Profiles"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /v1/profiles"})}),"\n",(0,s.jsx)(n.p,{children:"Lists available metadata profiles."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl https://api.mvmd.org/v1/profiles\n"})}),"\n",(0,s.jsx)(n.h4,{id:"get-profile-schema",children:"Get Profile Schema"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /v1/profiles/{profile-name}/schema"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieves JSON Schema for a specific profile."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl https://api.mvmd.org/v1/profiles/3DObject/schema\n"})}),"\n",(0,s.jsx)(n.h2,{id:"response-formats",children:"Response Formats"}),"\n",(0,s.jsx)(n.h3,{id:"success-response",children:"Success Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "success",\n  "data": {\n    // Response data\n  },\n  "meta": {\n    "timestamp": "2024-03-15T10:30:00Z",\n    "requestId": "req_abc123"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"error-response",children:"Error Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "status": "error",\n  "error": {\n    "code": "VALIDATION_ERROR",\n    "message": "Invalid metadata format",\n    "details": [\n      {\n        "field": "name",\n        "message": "Required field missing"\n      }\n    ]\n  },\n  "meta": {\n    "timestamp": "2024-03-15T10:30:00Z",\n    "requestId": "req_abc123"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"rate-limits",children:"Rate Limits"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tier"}),(0,s.jsx)(n.th,{children:"Requests/Day"}),(0,s.jsx)(n.th,{children:"Burst Rate"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Free"}),(0,s.jsx)(n.td,{children:"1,000"}),(0,s.jsx)(n.td,{children:"10/second"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pro"}),(0,s.jsx)(n.td,{children:"10,000"}),(0,s.jsx)(n.td,{children:"50/second"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enterprise"}),(0,s.jsx)(n.td,{children:"Custom"}),(0,s.jsx)(n.td,{children:"Custom"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Rate limit headers included in responses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"X-RateLimit-Limit: 1000\nX-RateLimit-Remaining: 995\nX-RateLimit-Reset: 1621814400\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"VALIDATION_ERROR"})}),(0,s.jsx)(n.td,{children:"Invalid metadata format or content"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"AUTHENTICATION_ERROR"})}),(0,s.jsx)(n.td,{children:"Invalid or missing API key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"AUTHORIZATION_ERROR"})}),(0,s.jsx)(n.td,{children:"Insufficient permissions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RATE_LIMIT_ERROR"})}),(0,s.jsx)(n.td,{children:"Rate limit exceeded"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PROFILE_ERROR"})}),(0,s.jsx)(n.td,{children:"Invalid or unsupported profile"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"QUERY_ERROR"})}),(0,s.jsx)(n.td,{children:"Invalid search query"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SERVER_ERROR"})}),(0,s.jsx)(n.td,{children:"Internal server error"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"1-authentication",children:"1. Authentication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Store API keys securely"}),"\n",(0,s.jsx)(n.li,{children:"Rotate keys regularly"}),"\n",(0,s.jsx)(n.li,{children:"Use separate keys for different environments"}),"\n",(0,s.jsx)(n.li,{children:"Monitor key usage"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-request-optimization",children:"2. Request Optimization"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use batch operations when possible"}),"\n",(0,s.jsx)(n.li,{children:"Implement proper pagination"}),"\n",(0,s.jsx)(n.li,{children:"Include only required fields"}),"\n",(0,s.jsx)(n.li,{children:"Cache frequent queries"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-error-handling",children:"3. Error Handling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement proper error handling"}),"\n",(0,s.jsx)(n.li,{children:"Monitor rate limits"}),"\n",(0,s.jsx)(n.li,{children:"Use exponential backoff"}),"\n",(0,s.jsx)(n.li,{children:"Log API responses"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-security",children:"4. Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use HTTPS only"}),"\n",(0,s.jsx)(n.li,{children:"Validate response data"}),"\n",(0,s.jsx)(n.li,{children:"Implement request signing"}),"\n",(0,s.jsx)(n.li,{children:"Monitor for suspicious activity"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const mvmdApi = require('mvmd-api');\n\nconst client = new mvmdApi({\n  apiKey: 'your-api-key',\n  environment: 'production'\n});\n\n// Validate metadata\nasync function validateMetadata(metadata) {\n  try {\n    const result = await client.validate({\n      profile: '3DObject',\n      metadata: metadata\n    });\n    return result.valid;\n  } catch (error) {\n    console.error('Validation failed:', error);\n    return false;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from mvmd_api import MvmdClient\n\nclient = MvmdClient(api_key='your-api-key')\n\n# Search metadata\ndef search_assets(query):\n    try:\n        results = client.search(\n            query=query,\n            limit=10,\n            type='3DModel'\n        )\n        return results.data\n    except Exception as e:\n        print(f\"Search failed: {e}\")\n        return None\n"})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Review ",(0,s.jsx)(n.a,{href:"/tools/query-builder",children:"Query Builder"})," for building complex queries"]}),"\n",(0,s.jsxs)(n.li,{children:["See ",(0,s.jsx)(n.a,{href:"/tools/validation",children:"Validation"})," for metadata validation"]}),"\n",(0,s.jsxs)(n.li,{children:["Check ",(0,s.jsx)(n.a,{href:"/implementation/best-practices",children:"Best Practices"})," for implementation guidance"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);