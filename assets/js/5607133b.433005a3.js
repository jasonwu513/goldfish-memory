"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Git Notes",c={unversionedId:"Software/Git/git",id:"Software/Git/git",title:"Git Notes",description:"add \u8cc7\u6599\u593e\u4e0b\u6240\u6709\u6a94\u6848",source:"@site/docs/Software/Git/git.md",sourceDirName:"Software/Git",slug:"/Software/Git/",permalink:"/goldfish-memory/docs/Software/Git/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Git/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VUE3",permalink:"/goldfish-memory/docs/Software/FrontEnd/vue3/basic"},next:{title:"branchRules",permalink:"/goldfish-memory/docs/Software/Github/branchRules"}},l={},s=[{value:"add \u8cc7\u6599\u593e\u4e0b\u6240\u6709\u6a94\u6848",id:"add-\u8cc7\u6599\u593e\u4e0b\u6240\u6709\u6a94\u6848",level:2},{value:"\u5f9e\u5225\u7684\u5206\u652f\u64bf\u6a94\u6848",id:"\u5f9e\u5225\u7684\u5206\u652f\u64bf\u6a94\u6848",level:2},{value:"\u5f9e\u5225\u7684\u5206\u652f\u64bfcommit",id:"\u5f9e\u5225\u7684\u5206\u652f\u64bfcommit",level:2},{value:"\u5f9egit conflict \u4e2d\u8df3\u51fa",id:"\u5f9egit-conflict-\u4e2d\u8df3\u51fa",level:2},{value:"\u91cd\u8a2d\u6700\u5f8c\u4e00\u6b21commit",id:"\u91cd\u8a2d\u6700\u5f8c\u4e00\u6b21commit",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-notes"},"Git Notes"),(0,a.kt)("h2",{id:"add-\u8cc7\u6599\u593e\u4e0b\u6240\u6709\u6a94\u6848"},"add \u8cc7\u6599\u593e\u4e0b\u6240\u6709\u6a94\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git add <folder>/*\n")),(0,a.kt)("h2",{id:"\u5f9e\u5225\u7684\u5206\u652f\u64bf\u6a94\u6848"},"\u5f9e\u5225\u7684\u5206\u652f\u64bf\u6a94\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout <branch> -- <file>\n")),(0,a.kt)("h2",{id:"\u5f9e\u5225\u7684\u5206\u652f\u64bfcommit"},"\u5f9e\u5225\u7684\u5206\u652f\u64bfcommit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git cherry-pick <commit>\n")),(0,a.kt)("h2",{id:"\u5f9egit-conflict-\u4e2d\u8df3\u51fa"},"\u5f9egit conflict \u4e2d\u8df3\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git merge --abort\n")),(0,a.kt)("h2",{id:"\u91cd\u8a2d\u6700\u5f8c\u4e00\u6b21commit"},"\u91cd\u8a2d\u6700\u5f8c\u4e00\u6b21commit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git reset HEAD^\n")))}p.isMDXComponent=!0}}]);