"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"Docker/build",id:"Docker/build",title:"build",description:"build image example:",source:"@site/docs/Docker/build.md",sourceDirName:"Docker",slug:"/Docker/build",permalink:"/goldfish-memory/docs/Docker/build",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/goldfish-memory/docs/DigitalOcean/Laravel"},next:{title:"\u5716\u7247",permalink:"/goldfish-memory/docs/Docusaurus/image"}},s={},l=[],m={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"build image example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n#!/bin/bash\n\nversion=$1\ngit_commit_hash=$(git rev-parse --short HEAD)\n\nif [ -z "$version" ]; then\n    echo "Please input version tag"\n    docker images | grep image_name\n    exit 1\nfi\n\necho "version: $version"\necho "git_commit_hash: $git_commit_hash"\n\n\ndocker build -t image_name:$version-$git_commit_hash -t image_name:latest -f ./docker/Dockerfile .\n\necho "docker build success"\n\ndocker tag image_name:$version-$git_commit_hash example:5000/image_name:$version-$git_commit_hash\ndocker tag image_name:latest example:5000/image_name:latest\n\necho "docker tag success"\n\ndocker push example:5000/image_name:$version-$git_commit_hash\ndocker push example:5000/image_name:latest\n')))}u.isMDXComponent=!0}}]);