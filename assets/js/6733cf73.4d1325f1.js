"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[6168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,v=m["".concat(u,".").concat(b)]||m[b]||p[b]||l;return r?a.createElement(v,o(o({ref:t},s),{},{components:r})):a.createElement(v,o({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"Network/Postman/Variable",id:"Network/Postman/Variable",title:"Variable",description:"\u5728 Postman \u4e2d\uff0c\u8b8a\u6578\uff08Variables\uff09\u7528\u65bc\u5132\u5b58\u548c\u7ba1\u7406\u5728\u8acb\u6c42\uff08Requests\uff09\u4e2d\u53ef\u7528\u7684\u6578\u64da\u3002\u6839\u64da\u8b8a\u6578\u7684\u4f5c\u7528\u57df\uff08Scope\uff09\uff0c\u9019\u4e9b\u8b8a\u6578\u6709\u4e0d\u540c\u7684\u985e\u578b\u3002\u4ee5\u4e0b\u70ba\u4f60\u8aaa\u660e\u9019\u56db\u7a2e\u8b8a\u6578\uff08Global, Variable, Collection, Environment\uff09\u4e4b\u9593\u7684\u5dee\u7570\uff0c\u4ee5\u53ca\u5982\u4f55\u8a2d\u5b9a\u5b83\u5011\uff1a",source:"@site/docs/Network/Postman/Variable.md",sourceDirName:"Network/Postman",slug:"/Network/Postman/Variable",permalink:"/docs/Network/Postman/Variable",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/Postman/Variable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/docs/Network/Postman/Test"},next:{title:"frontmater",permalink:"/docs/Notes/Docusaurus/frontmater"}},u={},c=[{value:"Global Variable\uff08\u5168\u5c40\u8b8a\u6578\uff09",id:"global-variable\u5168\u5c40\u8b8a\u6578",level:3},{value:"\u8a2d\u7f6e\u5168\u5c40\u8b8a\u6578",id:"\u8a2d\u7f6e\u5168\u5c40\u8b8a\u6578",level:4},{value:"Collection Variable\uff08\u96c6\u5408\u8b8a\u6578\uff09",id:"collection-variable\u96c6\u5408\u8b8a\u6578",level:3},{value:"\u8a2d\u7f6e\u96c6\u5408\u8b8a\u6578",id:"\u8a2d\u7f6e\u96c6\u5408\u8b8a\u6578",level:4},{value:"Environment Variable\uff08\u74b0\u5883\u8b8a\u6578\uff09",id:"environment-variable\u74b0\u5883\u8b8a\u6578",level:3},{value:"\u8a2d\u7f6e\u74b0\u5883\u8b8a\u6578",id:"\u8a2d\u7f6e\u74b0\u5883\u8b8a\u6578",level:4},{value:"Variable\uff08\u4e00\u822c\u7684\u8b8a\u6578\uff09",id:"variable\u4e00\u822c\u7684\u8b8a\u6578",level:3},{value:"\u8a2d\u7f6e\u5c40\u90e8\u8b8a\u6578",id:"\u8a2d\u7f6e\u5c40\u90e8\u8b8a\u6578",level:4},{value:"\u5982\u4f55\u4f7f\u7528\u8b8a\u6578",id:"\u5982\u4f55\u4f7f\u7528\u8b8a\u6578",level:3}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 Postman \u4e2d\uff0c\u8b8a\u6578\uff08Variables\uff09\u7528\u65bc\u5132\u5b58\u548c\u7ba1\u7406\u5728\u8acb\u6c42\uff08Requests\uff09\u4e2d\u53ef\u7528\u7684\u6578\u64da\u3002\u6839\u64da\u8b8a\u6578\u7684\u4f5c\u7528\u57df\uff08Scope\uff09\uff0c\u9019\u4e9b\u8b8a\u6578\u6709\u4e0d\u540c\u7684\u985e\u578b\u3002\u4ee5\u4e0b\u70ba\u4f60\u8aaa\u660e\u9019\u56db\u7a2e\u8b8a\u6578\uff08Global, Variable, Collection, Environment\uff09\u4e4b\u9593\u7684\u5dee\u7570\uff0c\u4ee5\u53ca\u5982\u4f55\u8a2d\u5b9a\u5b83\u5011\uff1a"),(0,n.kt)("h3",{id:"global-variable\u5168\u5c40\u8b8a\u6578"},"Global Variable\uff08\u5168\u5c40\u8b8a\u6578\uff09"),(0,n.kt)("p",null,"\u5168\u5c40\u8b8a\u6578\u5177\u6709 Postman \u4e2d\u6700\u9ad8\u7684\u4f5c\u7528\u57df\u3002\u4e00\u65e6\u8a2d\u7f6e\u4e86\u5168\u5c40\u8b8a\u6578\uff0c\u5b83\u5c07\u5728\u6574\u500b Postman \u5de5\u4f5c\u5340\u7684\u4efb\u4f55\u96c6\u5408\uff08Collection\uff09\u3001\u6587\u4ef6\u593e\uff08Folder\uff09\u6216\u8acb\u6c42\uff08Request\uff09\u4e2d\u90fd\u53ef\u7528\u3002"),(0,n.kt)("h4",{id:"\u8a2d\u7f6e\u5168\u5c40\u8b8a\u6578"},"\u8a2d\u7f6e\u5168\u5c40\u8b8a\u6578"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'\u5f9e "Quick Look"\uff08\u53f3\u4e0a\u89d2\u7684\u773c\u775b\u5716\u6a19\uff09'),(0,n.kt)("li",{parentName:"ul"},'\u5f9e "Environment"\uff08\u74b0\u5883\uff09\u6a19\u7c64\u9801'),(0,n.kt)("li",{parentName:"ul"},"\u901a\u904e\u8173\u672c\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},'pm.globals.set("variable_name", "variable_value");'))),(0,n.kt)("h3",{id:"collection-variable\u96c6\u5408\u8b8a\u6578"},"Collection Variable\uff08\u96c6\u5408\u8b8a\u6578\uff09"),(0,n.kt)("p",null,"\u96c6\u5408\u8b8a\u6578\u7684\u4f5c\u7528\u57df\u50c5\u9650\u65bc\u5176\u6240\u5c6c\u7684\u96c6\u5408\u3002\u5982\u679c\u5728\u96c6\u5408\u7d1a\u5225\u5b9a\u7fa9\u4e86\u4e00\u500b\u8b8a\u6578\uff0c\u5247\u8a72\u8b8a\u6578\u50c5\u5728\u8a72\u96c6\u5408\u5167\u7684\u6bcf\u500b\u6587\u4ef6\u593e\u548c\u8acb\u6c42\u4e2d\u53ef\u7528\u3002"),(0,n.kt)("h4",{id:"\u8a2d\u7f6e\u96c6\u5408\u8b8a\u6578"},"\u8a2d\u7f6e\u96c6\u5408\u8b8a\u6578"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u904e\u9032\u5165\u96c6\u5408\u6982\u89bd > \u8b8a\u6578\u6a19\u7c64\u9801\uff08Variables tab\uff09\u4f86\u8a2d\u7f6e\u3002")),(0,n.kt)("h3",{id:"environment-variable\u74b0\u5883\u8b8a\u6578"},"Environment Variable\uff08\u74b0\u5883\u8b8a\u6578\uff09"),(0,n.kt)("p",null,"\u74b0\u5883\u8b8a\u6578\u7684\u4f5c\u7528\u57df\u9650\u65bc\u4f60\u6240\u9078\u64c7\u7684\u74b0\u5883\u3002\u5728 Postman \u4e2d\uff0c\u74b0\u5883\u662f\u4e00\u7d44\u9375-\u503c\u5c0d\uff0c\u5141\u8a31\u4f60\u4f7f\u7528\u8b8a\u6578\u81ea\u5b9a\u7fa9\u8acb\u6c42\u3002"),(0,n.kt)("h4",{id:"\u8a2d\u7f6e\u74b0\u5883\u8b8a\u6578"},"\u8a2d\u7f6e\u74b0\u5883\u8b8a\u6578"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'\u5f9e "Environment"\uff08\u74b0\u5883\uff09\u6a19\u7c64\u9801'),(0,n.kt)("li",{parentName:"ul"},"\u901a\u904e\u8173\u672c\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},'pm.environment.set("variable_name", "variable_value");'))),(0,n.kt)("h3",{id:"variable\u4e00\u822c\u7684\u8b8a\u6578"},"Variable\uff08\u4e00\u822c\u7684\u8b8a\u6578\uff09"),(0,n.kt)("p",null,'"Variable" \u662f\u4e00\u500b\u901a\u7528\u8853\u8a9e\uff0c\u53ef\u80fd\u6307\u4efb\u4f55\u985e\u578b\u7684\u8b8a\u6578\u3002\u5728 Postman \u8173\u672c\u4e2d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6709\u5c40\u90e8\u8b8a\u6578\uff08Local Variables\uff09\u3002'),(0,n.kt)("h4",{id:"\u8a2d\u7f6e\u5c40\u90e8\u8b8a\u6578"},"\u8a2d\u7f6e\u5c40\u90e8\u8b8a\u6578"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u904e\u5728 Pre-request Script \u6216 Tests \u8173\u672c\u4e2d\u4f7f\u7528 JavaScript \u4f86\u8a2d\u7f6e\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'let localVar = "some value";\n')),(0,n.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528\u8b8a\u6578"},"\u5982\u4f55\u4f7f\u7528\u8b8a\u6578"),(0,n.kt)("p",null,"\u5728\u8acb\u6c42\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u904e\u5305\u88f9\u5b83\u5011\u7684\u540d\u7a31\u5728\u96d9\u5927\u62ec\u865f\u4e2d\u4f86\u4f7f\u7528\u9019\u4e9b\u8b8a\u6578\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{{variable_name}}\n")),(0,n.kt)("p",null,"\u9019\u4e9b\u8b8a\u6578\u7684\u4f5c\u7528\u57df\u662f\u6709\u5c64\u6b21\u7684\uff0c\u610f\u5473\u8457\u5982\u679c\u5728\u591a\u500b\u4f5c\u7528\u57df\u4e2d\u5b9a\u7fa9\u4e86\u76f8\u540c\u7684\u8b8a\u6578\u540d\u7a31\uff0cPostman \u6703\u6309\u7167\u9019\u6a23\u7684\u512a\u5148\u9806\u5e8f\u4f86\u4f7f\u7528\u8b8a\u6578\uff1a\u5c40\u90e8\uff08Local\uff09> \u74b0\u5883\uff08Environment\uff09> \u96c6\u5408\uff08Collection\uff09> \u5168\u5c40\uff08Global\uff09\u3002"))}p.isMDXComponent=!0}}]);