"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8019],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2384:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const a={},i="VSCODE",c={unversionedId:"Software/Editor/VSCODE/devcontainer",id:"Software/Editor/VSCODE/devcontainer",title:"VSCODE",description:"reusse current window",source:"@site/docs/Software/Editor/VSCODE/devcontainer.md",sourceDirName:"Software/Editor/VSCODE",slug:"/Software/Editor/VSCODE/devcontainer",permalink:"/docs/Software/Editor/VSCODE/devcontainer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Editor/VSCODE/devcontainer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cursor",permalink:"/docs/Software/Editor/Cursor/basic"},next:{title:"intro",permalink:"/docs/Software/FrontEnd/playwright/intro"}},s={},l=[{value:"devcontainer",id:"devcontainer",level:2}],p={toc:l};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vscode"},"VSCODE"),(0,o.kt)("p",null,"reusse current window "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"code -r path\n")),(0,o.kt)("h2",{id:"devcontainer"},"devcontainer"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728\u672c\u6a5f\u6216\u9060\u7aef\u5c07\u5c08\u6848\u7528container \u555f\u52d5\n\u53ef\u4ee5\u5728devcontainer \u4e2d, \u8a2d\u5b9a\u591a\u7a2e\u53c3\u6578\n\u53c3\u7167"),(0,o.kt)("p",null,"\u9060\u7aef\u6709\u5169\u7a2e\u4f7f\u7528\u6a21\u5f0f,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c07\u7a0b\u5f0f\u78bc\u585e\u5165 container volume \u4e2d, (\u5efa\u8b70\u958b\u767c\u5b8c\u5c31commit \u907f\u514d container \u88abrm \u7a0b\u5f0f\u78bc\u6d88\u5931), \u5efa\u8b70\u76f4\u63a5\u7528 CLONE REPOSITORY IN CONTAINER VOLUME"),(0,o.kt)("li",{parentName:"ol"},"\u5c07\u9060\u7aef\u4e3b\u6a5f\u4e0a\u4e4b\u7a0b\u5f0f\u78bc bind \u81f3 container"),(0,o.kt)("li",{parentName:"ol"},'\u5982\u679c\u7528HARBOR \u8981\u8a18\u5f97 \u6539,   "insecure-registries": ','[ "192.168.1.56:8888"]',", \u4e26\u8a18\u5f97 docker login")),(0,o.kt)("p",null,"settings.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"docker.environment": {\n    "DOCKER_HOST": "ssh://your-remote-user@your-remote-machine-fqdn-or-ip-here"\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u7a2e\u65b9\u5f0f workspace \u4e0d\u7528\u7279\u5225\u53bb\u6539")),(0,o.kt)("p",null,"devcontainer.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// For format details, see https://aka.ms/devcontainer.json. For config options, see the\n// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node\n{\n    "name": "Node.js",\n    "image": "mcr.microsoft.com/devcontainers/javascript-node:0-18",\n    "features": {\n        "ghcr.io/rocker-org/devcontainer-features/apt-packages:1": {},\n        "ghcr.io/devcontainers-contrib/features/zsh-plugins:0": {}\n    },\n    "appPort": ["3001:3000"]\n\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u7a2e\u65b9\u5f0f workspace \u5982\u4e0b\u4fee\u6539")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Python 3.11",\n    // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile\n    // "build": {\n    //     "dockerfile": "Dockerfile"\n    // },\n    "image": "python:3.11.1",\n    "customizations": {\n        "vscode": {\n            "extensions": [\n                "alefragnani.Bookmarks",\n                "eamodio.gitlens",\n                "ms-python.python",\n                "ms-python.vscode-pylance"\n            ]\n        }\n    },\n\n    "forwardPorts": [1237],\n\n    "remoteUser": "root",\n    // \u5c07\u9060\u7aefserver folder\u639b\u8f09\u81f3container \u5167\u90e8\n    "workspaceMount": "source=/home/jasonwu513/remote/python3.11/aspeed,target=/aspeed,type=bind,consistency=cached",\n    // \u6307\u5b9a workspaceFolder \u8def\u5f91 IN CONTAINER\n    "workspaceFolder": "/aspeed"\n}\n')))}d.isMDXComponent=!0}}]);