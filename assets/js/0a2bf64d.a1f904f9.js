"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[4562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),y=o,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},c="Synology mariadb 10 connect",l={unversionedId:"Database/mysql/connect",id:"Database/mysql/connect",title:"Synology mariadb 10 connect",description:"1. \u5b89\u88dd\u5b8cmariadb10\u5f8c \u958b\u555f\u4e86 TCP \u9023\u7dda \u548c\u8a2d\u5b9a\u9632\u706b\u7246 \u4f46\u4ecd\u7121\u6cd5\u4f7f\u7528Dbeaver \u9023\u7dda",source:"@site/docs/Database/mysql/connect.md",sourceDirName:"Database/mysql",slug:"/Database/mysql/connect",permalink:"/goldfish-memory/docs/Database/mysql/connect",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database/mysql/connect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource",permalink:"/goldfish-memory/docs/Csharp/resource"},next:{title:"mycli",permalink:"/goldfish-memory/docs/Database/mysql/mycli"}},s={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"synology-mariadb-10-connect"},"Synology mariadb 10 connect"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88dd\u5b8cmariadb10\u5f8c \u958b\u555f\u4e86 TCP \u9023\u7dda \u548c\u8a2d\u5b9a\u9632\u706b\u7246 \u4f46\u4ecd\u7121\u6cd5\u4f7f\u7528Dbeaver \u9023\u7dda"),(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9agrant host")),(0,o.kt)("p",null,"ERROR 1130 (HY000): Host 'labcchaha.localdomain' is not allowed to connect to this MariaDB server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT host FROM mysql.user WHERE user = \"root\";\nGRANT ALL ON *.* to 'root'@'allowDoaminOrIp'IDENTIFIED BY 'password';\nSELECT host FROM mysql.user WHERE user = \"root\";\nFLUSH PRIVILEGES;\n\n\n")),(0,o.kt)("p",null,"ERROR 1698 (28000): Access denied for user 'root'@'localhost'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GRANT ALL ON *.* to 'root'@'localhost' IDENTIFIED BY 'password';\n")))}u.isMDXComponent=!0}}]);