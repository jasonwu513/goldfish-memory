"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[5394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="VUE3",c={unversionedId:"Software/FrontEnd/vue3/basic",id:"Software/FrontEnd/vue3/basic",title:"VUE3",description:"- init npm init vue@latest ... npm install ... npm run dev",source:"@site/docs/Software/FrontEnd/vue3/basic.md",sourceDirName:"Software/FrontEnd/vue3",slug:"/Software/FrontEnd/vue3/basic",permalink:"/docs/Software/FrontEnd/vue3/basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/FrontEnd/vue3/basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"solutions",permalink:"/docs/Software/FrontEnd/solutions/"},next:{title:"Git Notes",permalink:"/docs/Software/Git/"}},l={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue3"},"VUE3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"init npm init vue@latest ... npm install ... npm run dev"),(0,o.kt)("li",{parentName:"ul"},"ref"),(0,o.kt)("li",{parentName:"ul"},"reactive"),(0,o.kt)("li",{parentName:"ul"},"start a project"),(0,o.kt)("li",{parentName:"ul"},"option api vs compostion api data => ref reactive")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n {{todoList}}\n</template>\n<script>\nexport default {\n setup(){\n  let todoList = [\n   {todo:"\u6211\u60f3\u770b\u6d77",isCheck:false},\n   {todo:"\u6211\u60f3\u6d6a\u6f2b",isCheck:true},\n  ]\n  return{\n   todoList,\n  }\n }\n}\n<\/script>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n {{todoList}}\n</template>\n<script setup>\n let todoList = [\n  {todo:"\u6211\u60f3\u770b\u6d77",isCheck:false},\n  {todo:"\u6211\u60f3\u6d6a\u6f2b",isCheck:true},\n ]\n<\/script>\n')))}u.isMDXComponent=!0}}]);