"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[6630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},s="ZSH & BASH \u6bd4\u8f03",o={unversionedId:"OS/Linux/zsh",id:"OS/Linux/zsh",title:"ZSH & BASH \u6bd4\u8f03",description:"\u70ba\u4ec0\u9ebc\u9078\u64c7 ZSH \u800c\u975e BASH?",source:"@site/docs/OS/Linux/zsh.md",sourceDirName:"OS/Linux",slug:"/OS/Linux/zsh",permalink:"/docs/OS/Linux/zsh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/OS/Linux/zsh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rsync",permalink:"/docs/OS/Linux/rsync"},next:{title:"\u70ba\u4f55\u9078\u64c7Mac \u4f5c\u70ba\u958b\u767c\u74b0\u5883",permalink:"/docs/OS/Mac/notes"}},i={},p=[{value:"\u70ba\u4ec0\u9ebc\u9078\u64c7 ZSH \u800c\u975e BASH?",id:"\u70ba\u4ec0\u9ebc\u9078\u64c7-zsh-\u800c\u975e-bash",level:2},{value:"BASH \u7684\u5c40\u9650\u6027",id:"bash-\u7684\u5c40\u9650\u6027",level:3},{value:"ZSH \u7684\u512a\u52e2",id:"zsh-\u7684\u512a\u52e2",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:3},{value:"ZSH \u5b89\u88dd\u8207\u914d\u7f6e",id:"zsh-\u5b89\u88dd\u8207\u914d\u7f6e",level:2},{value:"\u5b89\u88dd ZSH \u548c\u8a2d\u7f6e\u9810\u8a2d shell",id:"\u5b89\u88dd-zsh-\u548c\u8a2d\u7f6e\u9810\u8a2d-shell",level:3},{value:"\u5b89\u88dd Oh My Zsh \u548c Powerlevel10k \u4e3b\u984c",id:"\u5b89\u88dd-oh-my-zsh-\u548c-powerlevel10k-\u4e3b\u984c",level:3},{value:"\u81ea\u8a02 Powerlevel10k \u4e3b\u984c",id:"\u81ea\u8a02-powerlevel10k-\u4e3b\u984c",level:3},{value:"\u4f7f\u7528\u81ea\u8a02\u63d0\u793a\u7b26\u865f",id:"\u4f7f\u7528\u81ea\u8a02\u63d0\u793a\u7b26\u865f",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:3},{value:"\u9047\u5230\u4e2d\u6587\u986f\u793a\u554f\u984c",id:"\u9047\u5230\u4e2d\u6587\u986f\u793a\u554f\u984c",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zsh--bash-\u6bd4\u8f03"},"ZSH & BASH \u6bd4\u8f03"),(0,r.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u9078\u64c7-zsh-\u800c\u975e-bash"},"\u70ba\u4ec0\u9ebc\u9078\u64c7 ZSH \u800c\u975e BASH?"),(0,r.kt)("h3",{id:"bash-\u7684\u5c40\u9650\u6027"},"BASH \u7684\u5c40\u9650\u6027"),(0,r.kt)("p",null,"BASH \u662f\u4e00\u500b\u529f\u80fd\u5f37\u5927\u7684 shell\uff0c\u4f46\u5728\u7279\u5b9a\u60c5\u6cc1\u4e0b\u53ef\u80fd\u6703\u986f\u5f97\u4e0d\u8db3\u3002\u5b83\u7684\u81ea\u52d5\u5b8c\u6210\u529f\u80fd\u76f8\u5c0d\u7c21\u55ae\uff0c\u64f4\u5c55\u6027\u6709\u9650\uff0c\u7576\u9700\u8981\u66f4\u8907\u96dc\u7684\u8173\u672c\u6216\u64cd\u4f5c\u6642\uff0c\u5f80\u5f80\u9700\u8981\u4f9d\u8cf4\u5176\u4ed6\u7de8\u7a0b\u8a9e\u8a00\u5982 Perl \u6216 Python\u3002"),(0,r.kt)("h3",{id:"zsh-\u7684\u512a\u52e2"},"ZSH \u7684\u512a\u52e2"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u66f4\u5f37\u5927\u7684\u81ea\u52d5\u5b8c\u6210\u529f\u80fd"),"\uff1aZSH \u7684\u81ea\u52d5\u5b8c\u6210\u4e0d\u50c5\u529f\u80fd\u8c50\u5bcc\uff0c\u9084\u80fd\u6839\u64da\u4e0a\u4e0b\u6587\u63d0\u4f9b\u66f4\u7cbe\u78ba\u7684\u5efa\u8b70\uff0c\u8b93\u4f7f\u7528\u8005\u5728\u7de8\u5beb\u547d\u4ee4\u6642\u66f4\u52a0\u9ad8\u6548\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8c50\u5bcc\u7684\u64f4\u5c55\u529f\u80fd"),"\uff1aZSH \u64c1\u6709\u8c50\u5bcc\u7684\u63d2\u4ef6\u548c\u4e3b\u984c\u5eab\uff0c\u9019\u4e9b\u64f4\u5c55\u529f\u80fd\u80fd\u589e\u5f37 shell \u7684\u529f\u80fd\uff0c\u751a\u81f3\u80fd\u5920\u5927\u5e45\u63d0\u5347\u7d42\u7aef\u7684\u4f7f\u7528\u9ad4\u9a57\uff0c\u5982\u7f8e\u5316\u5916\u89c0\u548c\u63d0\u9ad8\u751f\u7522\u529b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u66f4\u597d\u7684\u517c\u5bb9\u6027"),"\uff1aZSH \u8207\u5927\u90e8\u5206 BASH \u8173\u672c\u517c\u5bb9\uff0c\u4e26\u4e14\u63d0\u4f9b\u66f4\u591a\u529f\u80fd\uff0c\u4f7f\u5f97\u5f9e BASH \u9077\u79fb\u5230 ZSH \u66f4\u52a0\u5bb9\u6613\u548c\u7121\u7e2b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u667a\u80fd\u7684\u6b77\u53f2\u8a18\u9304\u7ba1\u7406"),"\uff1aZSH \u7684\u6b77\u53f2\u8a18\u9304\u7ba1\u7406\u66f4\u70ba\u667a\u80fd\uff0c\u80fd\u5e6b\u52a9\u7528\u6236\u5feb\u901f\u67e5\u627e\u548c\u91cd\u8907\u4f7f\u7528\u4e4b\u524d\u7684\u547d\u4ee4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f37\u5927\u7684\u6b63\u5247\u8868\u9054\u5f0f\u652f\u6301"),"\uff1aZSH \u5c0d\u6b63\u5247\u8868\u9054\u5f0f\u7684\u652f\u6301\u66f4\u70ba\u5f37\u5927\u548c\u9748\u6d3b\uff0c\u8b93\u7528\u6236\u80fd\u5920\u66f4\u8f15\u9b06\u5730\u9032\u884c\u8907\u96dc\u7684\u6587\u672c\u8655\u7406\u3002"))),(0,r.kt)("h3",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,r.kt)("p",null,"ZSH \u76f8\u6bd4 BASH \u64c1\u6709\u66f4\u5f37\u5927\u7684\u81ea\u52d5\u5b8c\u6210\u3001\u64f4\u5c55\u529f\u80fd\u3001\u517c\u5bb9\u6027\u3001\u6b77\u53f2\u8a18\u9304\u7ba1\u7406\u548c\u6b63\u5247\u8868\u9054\u5f0f\u652f\u6301\u7b49\u512a\u52e2\uff0c\u9019\u4f7f\u5f97 ZSH \u6210\u70ba\u66f4\u70ba\u5f37\u5927\u4e14\u9748\u6d3b\u7684 shell \u9078\u64c7\u3002\u5c0d\u65bc\u8ffd\u6c42\u9ad8\u6548\u548c\u5b9a\u5236\u5316\u7684 shell \u9ad4\u9a57\u7684\u7528\u6236\uff0cZSH \u662f\u503c\u5f97\u63a8\u85a6\u7684\u66ff\u4ee3\u65b9\u6848\u3002"),(0,r.kt)("h2",{id:"zsh-\u5b89\u88dd\u8207\u914d\u7f6e"},"ZSH \u5b89\u88dd\u8207\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u5b89\u88dd-zsh-\u548c\u8a2d\u7f6e\u9810\u8a2d-shell"},"\u5b89\u88dd ZSH \u548c\u8a2d\u7f6e\u9810\u8a2d shell"),(0,r.kt)("p",null,"\u5b89\u88dd ZSH \u975e\u5e38\u7c21\u55ae\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt install zsh"),"\u3002ZSH \u63d0\u4f9b\u4e86\u66f4\u9748\u6d3b\u7684\u547d\u4ee4\u8655\u7406\uff0c\u5982\u4e0d\u5340\u5206\u5927\u5c0f\u5beb\u3001\u53ef\u8907\u88fd\u8cbc\u4e0a\u547d\u4ee4\u800c\u4e0d\u7acb\u5373\u57f7\u884c\u7b49\u3002\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"chsh")," \u547d\u4ee4\u5c07 ZSH \u8a2d\u70ba\u9810\u8a2d shell\uff0c\u9019\u6a23\u6bcf\u6b21\u6253\u958b\u7d42\u7aef\u6642\u5c07\u81ea\u52d5\u4f7f\u7528 ZSH\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88dd-oh-my-zsh-\u548c-powerlevel10k-\u4e3b\u984c"},"\u5b89\u88dd Oh My Zsh \u548c Powerlevel10k \u4e3b\u984c"),(0,r.kt)("p",null,"\u70ba\u4e86\u9032\u4e00\u6b65\u63d0\u5347 ZSH \u7684\u529f\u80fd\u548c\u5916\u89c0\uff0c\u53ef\u4ee5\u5b89\u88dd Oh My Zsh \u7ba1\u7406\u6846\u67b6\u3002\u8a72\u6846\u67b6\u4e0d\u50c5\u63d0\u4f9b\u591a\u7a2e\u63d2\u4ef6\u548c\u4e3b\u984c\uff0c\u9084\u4f7f\u7ba1\u7406\u548c\u5b9a\u5236 ZSH \u66f4\u52a0\u65b9\u4fbf\u3002\u5176\u4e2d\uff0cPowerlevel10k \u662f\u4e00\u6b3e\u5f37\u5927\u7684\u4e3b\u984c\uff0c\u53ef\u4ee5\u986f\u793a\u8c50\u5bcc\u7684\u7d42\u7aef\u8cc7\u8a0a\uff0c\u5982\u5206\u652f\u540d\u7a31\u3001\u5de5\u4f5c\u76ee\u9304\u72c0\u614b\u3001\u547d\u4ee4\u57f7\u884c\u6642\u9593\u7b49\u3002"),(0,r.kt)("h3",{id:"\u81ea\u8a02-powerlevel10k-\u4e3b\u984c"},"\u81ea\u8a02 Powerlevel10k \u4e3b\u984c"),(0,r.kt)("p",null,"\u5b89\u88dd\u5b8c\u6210\u5f8c\uff0c\u53ef\u4ee5\u6839\u64da\u500b\u4eba\u559c\u597d\u81ea\u8a02 Powerlevel10k \u4e3b\u984c\uff0c\u4f8b\u5982\u4fdd\u7559\u5f69\u8679\u8272\u3001\u4f7f\u7528 Unicode \u5716\u793a\u3001\u986f\u793a\u5206\u652f\u8cc7\u8a0a\u7b49\u3002\u6b64\u904e\u7a0b\u9700\u8981\u914d\u7f6e\u5b57\u578b\uff0c\u5982 MesloLGS Nerd Font\uff0c\u78ba\u4fdd\u6240\u6709\u5716\u793a\u6b63\u5e38\u986f\u793a\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528\u81ea\u8a02\u63d0\u793a\u7b26\u865f"},"\u4f7f\u7528\u81ea\u8a02\u63d0\u793a\u7b26\u865f"),(0,r.kt)("p",null,"\u81ea\u8a02\u63d0\u793a\u7b26\u865f\u80fd\u63d0\u4f9b\u66f4\u8c50\u5bcc\u7684\u5373\u6642\u8cc7\u8a0a\uff0c\u5982\u986f\u793a\u7576\u524d\u5206\u652f\u540d\u7a31\u3001\u5de5\u4f5c\u76ee\u9304\u72c0\u614b\u53ca\u547d\u4ee4\u57f7\u884c\u6642\u9593\u7b49\uff0c\u9019\u6a23\u53ef\u4ee5\u5728\u64cd\u4f5c\u904e\u7a0b\u4e2d\u66f4\u76f4\u89c0\u5730\u638c\u63e1\u7cfb\u7d71\u72c0\u614b\u3002"),(0,r.kt)("h3",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"if [ -f ~/.zshrc_aliases ]; then\n    . ~/.zshrc_aliases\nfi\n\nif [ -f ~/.zshrc_functions ]; then\n    . ~/.zshrc_functions\nfi\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},".zshrc_aliases")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"alias vi=\"nvim\"\nalias iforgot=\"cat /home/jasonwu513/iforgot\"\nalias bj4=\"cd /var/log\"\nalias pj=\"cd /Users/wuyishen/projects\"\n\n# No more cd ../../../..\nalias ..='cd ..'\nalias ...='cd ../..'\nalias ....='cd ../../..'\nalias .....='cd ../../../..'\nalias ......='cd ../../../../..'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},".zshrc_functions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'function mov2gif() {\n    ffmpeg -i $1 \\\n        -vf "fps=10,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \\\n        -loop 0 $1.gif\n}\n')),(0,r.kt)("h3",{id:"\u9047\u5230\u4e2d\u6587\u986f\u793a\u554f\u984c"},"\u9047\u5230\u4e2d\u6587\u986f\u793a\u554f\u984c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 0",src:n(13283).Z,width:"2510",height:"144"}),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim ~/.zshrc\n")),(0,r.kt)("p",null,"\u8a2d\u5b9a\u6210 UTF-8 \u7de8\u78bc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vim"},'# \u5728 ~/.zshrc \u4e2d\u52a0\u5165\u4ee5\u4e0b\u5167\u5bb9\nexport LC_ALL="en_US.UTF-8"\nexport LANG="en_US.UTF-8"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 1",src:n(44378).Z,width:"2516",height:"148"}),"  "),(0,r.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/linuxquestions/comments/p50jvl/those_of_you_who_prefer_zsh_to_bash_why/"},"\u70ba\u4ec0\u9ebc\u9078\u64c7 ZSH \u800c\u975e BASH?"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=PZTLIVQxxEY"},"\u5c07 Ubuntu \u7d42\u7aef\u6a5f\u8f49\u63db\u70ba\u5177\u6709\u8c50\u5bcc\u8cc7\u8a0a\u7684\u63d0\u793a\u7b26\u865f"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/love131452098/article/details/122348809"},"zsh \u7d42\u7aef\u51fa\u73fe\u4e2d\u6587\u4e82\u78bc")))))}u.isMDXComponent=!0},44378:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b6cbcbfdadc58975e778d860eafe4f5e1d734a66350a2b8021bcbfbf2e74f7fe-2c302092c9e0efb6f73b8ba9bfc55fcf.png"},13283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e86646f3dbcae6c6d90d1eb6ccfac80d38b1b2d5b0fd5567d59cdcbafa88b774-d10ca24fc96eb932683776170c2a333f.png"}}]);