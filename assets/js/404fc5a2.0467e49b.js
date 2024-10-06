"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[5984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"Software/Github/diverged",id:"Software/Github/diverged",title:"diverged",description:"Main push fail",source:"@site/docs/Software/Github/diverged.md",sourceDirName:"Software/Github",slug:"/Software/Github/diverged",permalink:"/goldfish-memory/docs/Software/Github/diverged",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Github/diverged.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code Space",permalink:"/goldfish-memory/docs/Software/Github/codeSpace"},next:{title:"notification",permalink:"/goldfish-memory/docs/Software/Github/notification"}},p={},c=[{value:"Main push fail",id:"main-push-fail",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"main-push-fail"},"Main push fail"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git pull origin main\nFrom github.com:jasonwu513/goldfish-memory\n * branch            main       -> FETCH_HEAD\nhint: You have divergent branches and need to specify how to reconcile them.\nhint: You can do so by running one of the following commands sometime before\nhint: your next pull:\nhint: \nhint:   git config pull.rebase false  # merge\nhint:   git config pull.rebase true   # rebase\nhint:   git config pull.ff only       # fast-forward only\nhint: \nhint: You can replace "git config" with "git config --global" to set a default\nhint: preference for all repositories. You can also pass --rebase, --no-rebase,\nhint: or --ff-only on the command line to override the configured default per\nhint: invocation.\nfatal: Need to specify how to reconcile divergent branches.\n')),(0,a.kt)("p",null,"From github.com:jasonwu513/goldfish-memory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"branch            main       -> FETCH_HEAD\nfatal: Not possible to fast-forward, aborting.")),(0,a.kt)("p",null,"\u9019\u500b\u932f\u8aa4\u8a0a\u606f\u8868\u793a\uff0c\u7576\u5617\u8a66\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," \u62c9\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u7684\u6700\u65b0\u66f4\u6539\u6642\uff0cGit \u8a66\u5716\u4f7f\u7528\u5feb\u9032\uff08fast-forward\uff09\u5408\u4f75\uff0c\u4f46\u7531\u65bc\u672c\u5730 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u548c\u9060\u7a0b ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u4e4b\u9593\u5b58\u5728\u5206\u6b67\uff08diverged\uff09\uff0c\u5feb\u9032\u5408\u4f75\u4e0d\u662f\u53ef\u80fd\u7684\u9078\u64c7\u3002"),(0,a.kt)("p",null,"\u7c21\u800c\u8a00\u4e4b\uff0c\u9019\u610f\u5473\u8457\u672c\u5730 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u548c\u9060\u7a0b ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u90fd\u6709\u7368\u7acb\u7684\u63d0\u4ea4\uff0c\u56e0\u6b64Git\u4e0d\u77e5\u9053\u5982\u4f55\u81ea\u52d5\u5408\u4f75\u5b83\u5011\u3002"),(0,a.kt)("p",null,"\u8981\u89e3\u6c7a\u6b64\u554f\u984c\uff0c\u6709\u5e7e\u500b\u9078\u64c7\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u5408\u4f75 (Merge)"),": \u9019\u5c07\u5408\u4f75\u9060\u7a0b\u5206\u652f\u7684\u66f4\u6539\u5230\u672c\u5730\u5206\u652f\uff0c\u4e26\u53ef\u80fd\u5275\u5efa\u4e00\u500b\u65b0\u7684\u5408\u4f75\u63d0\u4ea4\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git pull --no-rebase\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8b8a\u57fa (Rebase)"),": \u9019\u5c07\u91cd\u65b0\u8a2d\u7f6e\u672c\u5730\u5206\u652f\u7684\u57fa\u9ede\u5230\u9060\u7a0b\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\uff0c\u4e26\u5c07\u5728\u672c\u5730\u5206\u652f\u4e0a\u7684\u6240\u6709\u63d0\u4ea4\u653e\u5728\u9802\u90e8\u3002\u9019\u53ef\u4ee5\u4fdd\u6301\u63d0\u4ea4\u6b77\u53f2\u7684\u7dda\u6027\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git pull --rebase\n")))),(0,a.kt)("p",null,"\u9078\u64c7\u54ea\u4e00\u7a2e\u65b9\u6cd5\u53d6\u6c7a\u65bc\u504f\u597d\u548c\u5de5\u4f5c\u6d41\u7a0b\u3002\u5982\u679c\u8207\u5176\u4ed6\u958b\u767c\u8005\u5354\u540c\u5de5\u4f5c\uff0c\u5efa\u8b70\u5728\u4f7f\u7528\u8b8a\u57fa\u4e4b\u524d\u5148\u8207\u4ed6\u5011\u5354\u5546\uff0c\u56e0\u70ba\u9019\u6703\u6539\u8b8a\u63d0\u4ea4\u7684\u6b77\u53f2\u3002"))}s.isMDXComponent=!0}}]);