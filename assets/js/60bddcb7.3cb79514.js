"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="jq example",l={unversionedId:"Software/Jq/jq",id:"Software/Jq/jq",title:"jq example",description:"Filter by time",source:"@site/docs/Software/Jq/jq.md",sourceDirName:"Software/Jq",slug:"/Software/Jq/",permalink:"/goldfish-memory/docs/Software/Jq/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Jq/jq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u70ba\u4f55\u9078\u64c7 Github Project \u4f86\u9032\u884c\u5c08\u6848\u7ba1\u7406\uff1f",permalink:"/goldfish-memory/docs/Software/Github/project/why_github_project"},next:{title:"Adguard",permalink:"/goldfish-memory/docs/Software/LabService/adguard"}},c={},s=[{value:"Filter by time",id:"filter-by-time",level:2},{value:"Filter by sql and beatiful print with -r option output raw strings, not JSON texts;",id:"filter-by-sql-and-beatiful-print-with--r-option-output-raw-strings-not-json-texts",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jq-example"},"jq example"),(0,o.kt)("h2",{id:"filter-by-time"},"Filter by time"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'jq \'select(.time > "2024-01-25T15:00:00+08:00" and .time < "2024-01-25T16:00:00+08:00")\' yourfile.json\n')),(0,o.kt)("h2",{id:"filter-by-sql-and-beatiful-print-with--r-option-output-raw-strings-not-json-texts"},"Filter by sql and beatiful print with -r option output raw strings, not JSON texts;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jq  -r 'select(.sql != null) | .sql' gorm.log\n")))}p.isMDXComponent=!0}}]);