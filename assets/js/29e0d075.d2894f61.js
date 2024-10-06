"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[4355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,d=m["".concat(c,".").concat(u)]||m[u]||k[u]||o;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l="Pocketbase",i={unversionedId:"Software/Pockebase/pocketbase",id:"Software/Pockebase/pocketbase",title:"Pocketbase",description:"\u4f7f\u7528\u76ee\u7684",source:"@site/docs/Software/Pockebase/pocketbase.md",sourceDirName:"Software/Pockebase",slug:"/Software/Pockebase/pocketbase",permalink:"/goldfish-memory/docs/Software/Pockebase/pocketbase",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Pockebase/pocketbase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Playwright",permalink:"/goldfish-memory/docs/Software/Playwright/"},next:{title:"\u70ba\u4ec0\u9ebc\u9078\u64c7 pocketbase",permalink:"/goldfish-memory/docs/Software/Pockebase/why"}},c={},s=[{value:"\u4f7f\u7528\u76ee\u7684",id:"\u4f7f\u7528\u76ee\u7684",level:2},{value:"Installation",id:"installation",level:2},{value:"Pocketbase CRUD \u64cd\u4f5c\u7bc4\u4f8b",id:"pocketbase-crud-\u64cd\u4f5c\u7bc4\u4f8b",level:2}],p={toc:s};function k(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pocketbase"},"Pocketbase"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u76ee\u7684"},"\u4f7f\u7528\u76ee\u7684"),(0,n.kt)("p",null,"Pocketbase \u662f\u4e00\u500b\u7c21\u55ae\u7684\u8cc7\u6599\u5eab\u7cfb\u7d71, \u53ef\u4ee5\u7528\u4f86\u5b58\u653e\u8cc7\u6599, \u4e26\u9032\u884c CRUD \u64cd\u4f5c\u3002\n\u9069\u5408\u7528\u4f86\u505a\u70ba\u5c0f\u578b\u5c08\u6848\u7684\u8cc7\u6599\u5eab\u7cfb\u7d71, \u4f8b\u5982: \u7c21\u55ae\u7684\u7db2\u7ad9\u3001\u5c0f\u578b\u61c9\u7528\u7a0b\u5f0f\u7b49\u6216\u8457\u662fmock server\u3002"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u524d\u5f80 github ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pocketbase/pocketbase/releases"},"pocketbase ")," \u4e0b\u8f09\u6700\u65b0\u7248\u672c\u7684 Pocketbase \u5b89\u88dd\u6a94, \xa0\u5982\u679c\u662f Mac Arm cpu, \u8acb\u4e0b\u8f09 ",(0,n.kt)("inlineCode",{parentName:"li"},"pocketbase-darwin-arm64"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u89e3\u58d3\u7e2e Pocketbase \u5b89\u88dd\u6a94\u3002"),(0,n.kt)("li",{parentName:"ol"},"mv Pocketbase \u81f3 \u5c08\u6848\u76ee\u9304\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9032\u5165 Pocketbase \u76ee\u9304, \u57f7\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"./pocketbase")," \u5373\u53ef\u555f\u52d5 Pocketbase\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u958b\u555f\u700f\u89bd\u5668, \u8f38\u5165 ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:8080")," \u5373\u53ef\u958b\u59cb\u4f7f\u7528 Pocketbase\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u586b\u5beb\u57fa\u672c\u8cc7\u6599, \u5b8c\u6210\u8a3b\u518a\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u586b\u5beb\u57fa\u672c\u8cc7\u6599",src:a(19388).Z,width:"2344",height:"1356"})),(0,n.kt)("h2",{id:"pocketbase-crud-\u64cd\u4f5c\u7bc4\u4f8b"},"Pocketbase CRUD \u64cd\u4f5c\u7bc4\u4f8b"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521d\u59cb\u756b\u9762\n",(0,n.kt)("img",{alt:"\u521d\u59cb\u756b\u9762",src:a(9099).Z,width:"3818",height:"1870"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u65b0\u589eCollection, Collection \u662f\u4e00\u500b\u8cc7\u6599\u8868, \u7528\u4f86\u5b58\u653e\u8cc7\u6599\u3002 \u53ef\u4ee5\u60f3\u50cf\u6210\u4e00\u500b Excel \u7684\u5de5\u4f5c\u8868\xa0\u6216\u662f\u8cc7\u6599\u5eab\u7684 Table\u3002"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9ede\u64ca ",(0,n.kt)("strong",{parentName:"p"},"\uff0b New Collection")," \u65b0\u589e Collection\n",(0,n.kt)("img",{alt:"\u65b0\u589eCollection",src:a(24745).Z,width:"3818",height:"1870"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f38\u5165 Collection \u540d\u7a31, \u4e26\u9ede\u64ca ",(0,n.kt)("strong",{parentName:"p"},"\uff0b New filed")," \u6309\u9215\n",(0,n.kt)("img",{alt:"\u8f38\u5165Collection\u540d\u7a31",src:a(89886).Z,width:"1736",height:"1020"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8a2d\u5b9a  Field \u985e\u578b\u5f8c\u8f38\u5165 Field \u540d\u7a31, \u4e26\u9ede\u64ca ",(0,n.kt)("strong",{parentName:"p"},"Create")," \u6309\u9215"))))}k.isMDXComponent=!0},24745:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/addCollection-ebfa0cb801830d5b01f48fdd4624d6a8.png"},89886:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/editCollection-9a912a27d36897acdfda87808814b260.png"},9099:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/initScreenShot-59998e5faa2e5ced86182deb021b7853.png"},19388:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/inputInitData-5236c0afe9602be3f3ec8cb255977af3.png"}}]);