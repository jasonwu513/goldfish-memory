"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[77],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="VUE3",l={unversionedId:"Personal/FrontEnd/vue3/basic",id:"Personal/FrontEnd/vue3/basic",title:"VUE3",description:"- init npm init vue@latest ... npm install ... npm run dev",source:"@site/docs/Personal/FrontEnd/vue3/basic.md",sourceDirName:"Personal/FrontEnd/vue3",slug:"/Personal/FrontEnd/vue3/basic",permalink:"/goldfish-memory/docs/Personal/FrontEnd/vue3/basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Personal/FrontEnd/vue3/basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/goldfish-memory/docs/Personal/FrontEnd/playwright/intro"},next:{title:"basic",permalink:"/goldfish-memory/docs/Personal/Golang/basic"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue3"},"VUE3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"init npm init vue@latest ... npm install ... npm run dev"),(0,o.kt)("li",{parentName:"ul"},"ref"),(0,o.kt)("li",{parentName:"ul"},"reactive"),(0,o.kt)("li",{parentName:"ul"},"start a project"),(0,o.kt)("li",{parentName:"ul"},"option api vs compostion api data => ref reactive")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n {{todoList}}\n</template>\n<script>\nexport default {\n setup(){\n  let todoList = [\n   {todo:"\u6211\u60f3\u770b\u6d77",isCheck:false},\n   {todo:"\u6211\u60f3\u6d6a\u6f2b",isCheck:true},\n  ]\n  return{\n   todoList,\n  }\n }\n}\n<\/script>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<template>\n {{todoList}}\n</template>\n<script setup>\n let todoList = [\n  {todo:"\u6211\u60f3\u770b\u6d77",isCheck:false},\n  {todo:"\u6211\u60f3\u6d6a\u6f2b",isCheck:true},\n ]\n<\/script>\n')))}u.isMDXComponent=!0}}]);