"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[6840],{3905:(e,r,t)=>{t.d(r,{Zo:()=>g,kt:()=>p});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},g=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},s=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=u(t),p=a,m=s["".concat(c,".").concat(p)]||s[p]||d[p]||n;return t?o.createElement(m,l(l({ref:r},g),{},{components:t})):o.createElement(m,l({ref:r},g))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},65717:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const n={},l="\u5ba2\u88fd\u5316\u81ea\u5df1\u7684Framework",i={unversionedId:"Software/Language/Golang/gohub/myFramework",id:"Software/Language/Golang/gohub/myFramework",title:"\u5ba2\u88fd\u5316\u81ea\u5df1\u7684Framework",description:"\u57fa\u65bcGohub\u7684\u67b6\u69cb",source:"@site/docs/Software/Language/Golang/gohub/myFramework.md",sourceDirName:"Software/Language/Golang/gohub",slug:"/Software/Language/Golang/gohub/myFramework",permalink:"/goldfish-memory/docs/Software/Language/Golang/gohub/myFramework",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Language/Golang/gohub/myFramework.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creete API FLOW",permalink:"/goldfish-memory/docs/Software/Language/Golang/gohub/createApi"},next:{title:"Learning Golang",permalink:"/goldfish-memory/docs/Software/Language/Golang/learn"}},c={},u=[{value:"\u57fa\u65bcGohub\u7684\u67b6\u69cb",id:"\u57fa\u65bcgohub\u7684\u67b6\u69cb",level:2},{value:"\u4fee\u6539Validate \u7528\u7684package Nov w2",id:"\u4fee\u6539validate-\u7528\u7684package-nov-w2",level:3},{value:"\u6dfb\u52a0wire\u4f86\u505aDI Nov w4",id:"\u6dfb\u52a0wire\u4f86\u505adi-nov-w4",level:3},{value:"\u7528\u6587\u4ef6\u751f\u6210 config \u6a94\u6848 Nov w3",id:"\u7528\u6587\u4ef6\u751f\u6210-config-\u6a94\u6848-nov-w3",level:3},{value:"\u6dfb\u52a0\u4ea4\u4e92\u5f0f\u7684REPL(gore) Oct",id:"\u6dfb\u52a0\u4ea4\u4e92\u5f0f\u7684replgore-oct",level:3},{value:"\u4fee\u6539\u539f\u5148\u6a94\u6848\u7522\u51fa\u7684\u4e00\u4e9b\u554f\u984c Nov w1",id:"\u4fee\u6539\u539f\u5148\u6a94\u6848\u7522\u51fa\u7684\u4e00\u4e9b\u554f\u984c-nov-w1",level:3},{value:"\uff2dail \u4fee\u6539 tls Dec 1",id:"\uff4dail-\u4fee\u6539-tls-dec-1",level:3},{value:"Events/Queue (watermill) Dec 3",id:"eventsqueue-watermill-dec-3",level:3},{value:"Task scheduling (cron) Dec 2",id:"task-scheduling-cron-dec-2",level:3}],g={toc:u};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5ba2\u88fd\u5316\u81ea\u5df1\u7684framework"},"\u5ba2\u88fd\u5316\u81ea\u5df1\u7684Framework"),(0,a.kt)("h2",{id:"\u57fa\u65bcgohub\u7684\u67b6\u69cb"},"\u57fa\u65bcGohub\u7684\u67b6\u69cb"),(0,a.kt)("h3",{id:"\u4fee\u6539validate-\u7528\u7684package-nov-w2"},"\u4fee\u6539Validate \u7528\u7684package Nov w2"),(0,a.kt)("h3",{id:"\u6dfb\u52a0wire\u4f86\u505adi-nov-w4"},"\u6dfb\u52a0wire\u4f86\u505aDI Nov w4"),(0,a.kt)("h3",{id:"\u7528\u6587\u4ef6\u751f\u6210-config-\u6a94\u6848-nov-w3"},"\u7528\u6587\u4ef6\u751f\u6210 config \u6a94\u6848 Nov w3"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u4ea4\u4e92\u5f0f\u7684replgore-oct"},"\u6dfb\u52a0\u4ea4\u4e92\u5f0f\u7684REPL(gore) Oct"),(0,a.kt)("h3",{id:"\u4fee\u6539\u539f\u5148\u6a94\u6848\u7522\u51fa\u7684\u4e00\u4e9b\u554f\u984c-nov-w1"},"\u4fee\u6539\u539f\u5148\u6a94\u6848\u7522\u51fa\u7684\u4e00\u4e9b\u554f\u984c Nov w1"),(0,a.kt)("h3",{id:"\uff4dail-\u4fee\u6539-tls-dec-1"},"\uff2dail \u4fee\u6539 tls Dec 1"),(0,a.kt)("h3",{id:"eventsqueue-watermill-dec-3"},"Events/Queue (watermill) Dec 3"),(0,a.kt)("h3",{id:"task-scheduling-cron-dec-2"},"Task scheduling (cron) Dec 2"))}d.isMDXComponent=!0}}]);