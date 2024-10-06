"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[9018],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8204:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={},s="Vaultwarden",i={unversionedId:"Software/Password/password",id:"Software/Password/password",title:"Vaultwarden",description:"Vaultwarden is a password manager which is a fork of Bitwarden_rs. It is a server application that can be used to store and manage passwords and other sensitive information. It is a self-hosted password manager that allows you to store and manage your passwords securely.",source:"@site/docs/Software/Password/password.md",sourceDirName:"Software/Password",slug:"/Software/Password/",permalink:"/goldfish-memory/docs/Software/Password/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Password/password.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"automation",permalink:"/goldfish-memory/docs/Software/Language/Python/pyautowin"},next:{title:"Playwright",permalink:"/goldfish-memory/docs/Software/Playwright/"}},l={},c=[],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vaultwarden"},"Vaultwarden"),(0,a.kt)("p",null,"Vaultwarden is a password manager which is a fork of Bitwarden_rs. It is a server application that can be used to store and manage passwords and other sensitive information. It is a self-hosted password manager that allows you to store and manage your passwords securely."),(0,a.kt)("p",null,"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  vaultwarden:\n    image: vaultwarden/server:latest\n    container_name: vaultwarden\n    restart: unless-stopped\n    ports:\n     - 9445:80 #map any custom port to use (replace 9445 not 80)\n    volumes:\n     - ./bitwarden:/data:rw\n    environment:\n#     - ROCKET_TLS={certs="/ssl/certs/certs.pem",key="/ssl/private/key.pem"}  // Environment variable is specific to the Rocket web server\n     - ADMIN_TOKEN=${ADMIN_TOKEN}\n     - WEBSOCKET_ENABLED=true\n     - SIGNUPS_ALLOWED=false\n     - SMTP_HOST=${SMTP_HOST}\n     - SMTP_FROM=${SMTP_FROM}\n     - SMTP_PORT=${SMTP_PORT}\n     - SMTP_SSL=${SMTP_SSL}\n     - SMTP_USERNAME=${SMTP_USERNAME}\n     - SMTP_PASSWORD=${SMTP_PASSWORD}\n     - DOMAIN=${DOMAIN}\n\n#uncomment below network part if you are using Nginx Proxy Manager, or you can remove the same\n#networks:\n#  default:\n#    external:\n#      name: nginx-proxy-network\n')))}u.isMDXComponent=!0}}]);