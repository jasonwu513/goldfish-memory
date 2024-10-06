"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[6486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),m=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),y=n,s=c["".concat(u,".").concat(y)]||c[y]||f[y]||o;return r?a.createElement(s,i(i({ref:t},p),{},{components:r})):a.createElement(s,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={},i="\u70ba\u4ec0\u9ebc\u6211\u61c9\u8a72\u4f7f\u7528 ComfyUI\uff1f",l={unversionedId:"Software/AI/Image/comfyui/intro",id:"Software/AI/Image/comfyui/intro",title:"\u70ba\u4ec0\u9ebc\u6211\u61c9\u8a72\u4f7f\u7528 ComfyUI\uff1f",description:"ComfyUI \u7684\u512a\u9ede",source:"@site/docs/Software/AI/Image/comfyui/intro.md",sourceDirName:"Software/AI/Image/comfyui",slug:"/Software/AI/Image/comfyui/intro",permalink:"/goldfish-memory/docs/Software/AI/Image/comfyui/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/AI/Image/comfyui/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Comfyui \u751f\u6210\u51fa\u8272\u7684\u85dd\u8853\u4f5c\u54c1",permalink:"/goldfish-memory/docs/Software/AI/Image/comfyui/basic"},next:{title:"Midjourney \u7db2\u9801\u7248\u7684\u4f7f\u7528\u6280\u5de7",permalink:"/goldfish-memory/docs/Software/AI/Image/mj/midjourney"}},u={},m=[{value:"ComfyUI \u7684\u512a\u9ede",id:"comfyui-\u7684\u512a\u9ede",level:2},{value:"\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762",id:"\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762",level:3},{value:"\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027",id:"\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027",level:3},{value:"\u65b9\u4fbf\u7684\u5354\u4f5c\u548c\u5206\u4eab",id:"\u65b9\u4fbf\u7684\u5354\u4f5c\u548c\u5206\u4eab",level:3},{value:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528 ComfyUI",id:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528-comfyui",level:2},{value:"\u4e0b\u8f09\u548c\u5b89\u88dd",id:"\u4e0b\u8f09\u548c\u5b89\u88dd",level:3},{value:"\u719f\u6089\u754c\u9762\u548c\u529f\u80fd",id:"\u719f\u6089\u754c\u9762\u548c\u529f\u80fd",level:3},{value:"\u500b\u6027\u5316\u8a2d\u5b9a",id:"\u500b\u6027\u5316\u8a2d\u5b9a",level:3},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2},{value:"ComfyUI \u70ba Stable Diffusion \u7b49\u6587\u672c\u5230\u5716\u50cf\u6a21\u578b\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762,\u5177\u6709\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027\u3002\u7121\u8ad6\u662f\u521d\u5b78\u8005\u9084\u662f\u6709\u7d93\u9a57\u7684\u4f7f\u7528\u8005,\u90fd\u53ef\u4ee5\u901a\u904e ComfyUI \u5feb\u901f\u4e0a\u624b\u4e26\u5275\u9020\u51fa\u4ee4\u4eba\u9a5a\u5606\u7684\u5716\u50cf\u4f5c\u54c1\u3002\u7acb\u5373\u958b\u59cb\u4f7f\u7528 ComfyUI,\u958b\u555f\u4f60\u7684\u5275\u610f\u4e4b\u65c5\u5427!",id:"comfyui-\u70ba-stable-diffusion-\u7b49\u6587\u672c\u5230\u5716\u50cf\u6a21\u578b\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762\u5177\u6709\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027\u7121\u8ad6\u662f\u521d\u5b78\u8005\u9084\u662f\u6709\u7d93\u9a57\u7684\u4f7f\u7528\u8005\u90fd\u53ef\u4ee5\u901a\u904e-comfyui-\u5feb\u901f\u4e0a\u624b\u4e26\u5275\u9020\u51fa\u4ee4\u4eba\u9a5a\u5606\u7684\u5716\u50cf\u4f5c\u54c1\u7acb\u5373\u958b\u59cb\u4f7f\u7528-comfyui\u958b\u555f\u4f60\u7684\u5275\u610f\u4e4b\u65c5\u5427",level:3}],p={toc:m};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u70ba\u4ec0\u9ebc\u6211\u61c9\u8a72\u4f7f\u7528-comfyui"},"\u70ba\u4ec0\u9ebc\u6211\u61c9\u8a72\u4f7f\u7528 ComfyUI\uff1f"),(0,n.kt)("h2",{id:"comfyui-\u7684\u512a\u9ede"},"ComfyUI \u7684\u512a\u9ede"),(0,n.kt)("h3",{id:"\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762"},"\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ComfyUI \u63d0\u4f9b\u4e86\u4e00\u500b\u76f4\u89c0\u3001\u7c21\u55ae\u7684\u5716\u5f62\u5316\u754c\u9762")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8005\u53ef\u4ee5\u8f15\u9b06\u5730\u700f\u89bd\u548c\u9078\u64c7\u5404\u7a2e\u6a21\u578b\u548c\u53c3\u6578")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7121\u9700\u7de8\u5beb\u8907\u96dc\u7684\u547d\u4ee4\u884c\u6307\u4ee4\u5373\u53ef\u751f\u6210\u5716\u50cf"))),(0,n.kt)("h3",{id:"\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027"},"\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ComfyUI \u652f\u63f4\u591a\u7a2e\u6587\u672c\u5230\u5716\u50cf\u7684\u6a21\u578b,\u5982 Stable Diffusion\u3001DALL-E\u3001 Flux.1 \u7b49")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u4e86\u5404\u7a2e\u9810\u8a2d\u7684\u53c3\u6578\u548c\u8a2d\u5b9a,\u53ef\u4ee5\u5feb\u901f\u751f\u6210\u9ad8\u8cea\u91cf\u7684\u5716\u50cf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u900f\u904e\u5b89\u88dd\u63d2\u4ef6\u64f4\u5c55\u529f\u80fd,\u6eff\u8db3\u66f4\u591a\u500b\u6027\u5316\u7684\u9700\u6c42"))),(0,n.kt)("h3",{id:"\u65b9\u4fbf\u7684\u5354\u4f5c\u548c\u5206\u4eab"},"\u65b9\u4fbf\u7684\u5354\u4f5c\u548c\u5206\u4eab"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ComfyUI \u652f\u63f4\u532f\u5165/\u532f\u51fa\u8a2d\u5b9a,\u65b9\u4fbf\u5728\u4e0d\u540c\u8a2d\u5099\u4e4b\u9593\u540c\u6b65\u548c\u5206\u4eab")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8005\u53ef\u4ee5\u5728\u793e\u5340\u4e2d\u5206\u4eab\u81ea\u5df1\u7684\u8a2d\u5b9a\u548c\u751f\u6210\u7684\u5716\u50cf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u904e\u5354\u4f5c\u548c\u4ea4\u6d41,\u7372\u5f97\u66f4\u591a\u9748\u611f\u548c\u6280\u5de7"))),(0,n.kt)("h2",{id:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528-comfyui"},"\u5982\u4f55\u958b\u59cb\u4f7f\u7528 ComfyUI"),(0,n.kt)("h3",{id:"\u4e0b\u8f09\u548c\u5b89\u88dd"},"\u4e0b\u8f09\u548c\u5b89\u88dd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u524d\u5f80 ComfyUI \u7684\u5b98\u65b9\u7db2\u7ad9\u4e0b\u8f09\u6700\u65b0\u7248\u672c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6309\u7167\u5b89\u88dd\u6307\u5f15\u5b8c\u6210 ComfyUI \u7684\u5b89\u88dd"))),(0,n.kt)("h3",{id:"\u719f\u6089\u754c\u9762\u548c\u529f\u80fd"},"\u719f\u6089\u754c\u9762\u548c\u529f\u80fd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u700f\u89bd ComfyUI \u7684\u5404\u500b\u9078\u9805\u5361\u548c\u8a2d\u5b9a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5617\u8a66\u4f7f\u7528\u9810\u8a2d\u7684\u53c3\u6578\u751f\u6210\u5716\u50cf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u63a2\u7d22\u63d2\u4ef6\u5546\u5e97,\u5b89\u88dd\u611f\u8208\u8da3\u7684\u64f4\u5c55\u529f\u80fd"))),(0,n.kt)("h3",{id:"\u500b\u6027\u5316\u8a2d\u5b9a"},"\u500b\u6027\u5316\u8a2d\u5b9a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8abf\u6574\u53c3\u6578\u4ee5\u7372\u5f97\u66f4\u597d\u7684\u751f\u6210\u6548\u679c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u5e38\u7528\u7684\u8a2d\u5b9a,\u65b9\u4fbf\u4e0b\u6b21\u4f7f\u7528")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8207\u793e\u5340\u6210\u54e1\u5206\u4eab\u81ea\u5df1\u7684\u8a2d\u5b9a\u548c\u5275\u4f5c"))),(0,n.kt)("h2",{id:"\u7d50\u8a9e"},"\u7d50\u8a9e"),(0,n.kt)("h3",{id:"comfyui-\u70ba-stable-diffusion-\u7b49\u6587\u672c\u5230\u5716\u50cf\u6a21\u578b\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762\u5177\u6709\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027\u7121\u8ad6\u662f\u521d\u5b78\u8005\u9084\u662f\u6709\u7d93\u9a57\u7684\u4f7f\u7528\u8005\u90fd\u53ef\u4ee5\u901a\u904e-comfyui-\u5feb\u901f\u4e0a\u624b\u4e26\u5275\u9020\u51fa\u4ee4\u4eba\u9a5a\u5606\u7684\u5716\u50cf\u4f5c\u54c1\u7acb\u5373\u958b\u59cb\u4f7f\u7528-comfyui\u958b\u555f\u4f60\u7684\u5275\u610f\u4e4b\u65c5\u5427"},"ComfyUI \u70ba Stable Diffusion \u7b49\u6587\u672c\u5230\u5716\u50cf\u6a21\u578b\u63d0\u4f9b\u4e86\u4e00\u500b\u7c21\u55ae\u6613\u7528\u7684\u754c\u9762,\u5177\u6709\u8c50\u5bcc\u7684\u529f\u80fd\u548c\u64f4\u5c55\u6027\u3002\u7121\u8ad6\u662f\u521d\u5b78\u8005\u9084\u662f\u6709\u7d93\u9a57\u7684\u4f7f\u7528\u8005,\u90fd\u53ef\u4ee5\u901a\u904e ComfyUI \u5feb\u901f\u4e0a\u624b\u4e26\u5275\u9020\u51fa\u4ee4\u4eba\u9a5a\u5606\u7684\u5716\u50cf\u4f5c\u54c1\u3002\u7acb\u5373\u958b\u59cb\u4f7f\u7528 ComfyUI,\u958b\u555f\u4f60\u7684\u5275\u610f\u4e4b\u65c5\u5427!"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53c3\u8003\u8cc7\u6599\u4f86\u6e90\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/comments/15if9ts/why_should_i_use_comfyui/"},"Why should I use ComfyUI?"))))}f.isMDXComponent=!0}}]);