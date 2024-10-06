"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=u(r),c=a,s=k["".concat(p,".").concat(c)]||k[c]||g[c]||l;return r?n.createElement(s,o(o({ref:t},m),{},{components:r})):n.createElement(s,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},41757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"Software/AI/DataEngineer/eigenvalue",id:"Software/AI/DataEngineer/eigenvalue",title:"eigenvalue",description:"Feature Vectorization \u548c Eigenvector \u662f\u5169\u500b\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5\uff0c\u96d6\u7136\u5b83\u5011\u90fd\u6d89\u53ca\u5230\u6578\u5b78\u4e2d\u7684\u201c\u5411\u91cf\u201d\uff0c\u4f46\u5b83\u5011\u7684\u7528\u9014\u548c\u4e0a\u4e0b\u6587\u662f\u4e0d\u540c\u7684\u3002\u8b93\u6211\u5011\u4f86\u6df1\u5165\u89e3\u91cb\u9019\u5169\u500b\u6982\u5ff5\u53ca\u5176\u5340\u5225\u3002",source:"@site/docs/Software/AI/DataEngineer/eigenvalue.md",sourceDirName:"Software/AI/DataEngineer",slug:"/Software/AI/DataEngineer/eigenvalue",permalink:"/goldfish-memory/docs/Software/AI/DataEngineer/eigenvalue",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/AI/DataEngineer/eigenvalue.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"changeJobs",permalink:"/goldfish-memory/docs/Software/AI/DataEngineer/changeJobs"},next:{title:"featureVectorization",permalink:"/goldfish-memory/docs/Software/AI/DataEngineer/featureVectorization"}},p={},u=[{value:"<strong>1. Feature Vectorization\uff08\u7279\u5fb5\u5411\u91cf\u5316\uff09</strong>",id:"1-feature-vectorization\u7279\u5fb5\u5411\u91cf\u5316",level:3},{value:"<strong>2. Eigenvector\uff08\u7279\u5fb5\u5411\u91cf/\u672c\u5fb5\u5411\u91cf\uff09</strong>",id:"2-eigenvector\u7279\u5fb5\u5411\u91cf\u672c\u5fb5\u5411\u91cf",level:3},{value:"<strong>\u5340\u5225\u7e3d\u7d50</strong>\uff1a",id:"\u5340\u5225\u7e3d\u7d50",level:3},{value:"<strong>\u61c9\u7528\u8209\u4f8b</strong>\uff1a",id:"\u61c9\u7528\u8209\u4f8b",level:3},{value:"<strong>\u7d50\u8ad6</strong>\uff1a",id:"\u7d50\u8ad6",level:3}],m={toc:u};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Feature Vectorization")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"Eigenvector")," \u662f\u5169\u500b\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5\uff0c\u96d6\u7136\u5b83\u5011\u90fd\u6d89\u53ca\u5230\u6578\u5b78\u4e2d\u7684\u201c\u5411\u91cf\u201d\uff0c\u4f46\u5b83\u5011\u7684\u7528\u9014\u548c\u4e0a\u4e0b\u6587\u662f\u4e0d\u540c\u7684\u3002\u8b93\u6211\u5011\u4f86\u6df1\u5165\u89e3\u91cb\u9019\u5169\u500b\u6982\u5ff5\u53ca\u5176\u5340\u5225\u3002"),(0,a.kt)("h3",{id:"1-feature-vectorization\u7279\u5fb5\u5411\u91cf\u5316"},(0,a.kt)("strong",{parentName:"h3"},"1. Feature Vectorization\uff08\u7279\u5fb5\u5411\u91cf\u5316\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Feature Vectorization")," \u662f\u6307\u5c07\u6578\u64da\u96c6\u4e2d\u7684\u591a\u500b\u7279\u5fb5\u7d44\u5408\u6210\u4e00\u500b\u5411\u91cf\uff0c\u9019\u500b\u904e\u7a0b\u901a\u5e38\u767c\u751f\u5728\u6578\u64da\u9810\u8655\u7406\u7684\u968e\u6bb5\u3002\u5176\u4e3b\u8981\u76ee\u7684\u662f\u5c07\u5206\u6563\u7684\u7279\u5fb5\uff08\u5982\u591a\u500b\u6578\u64da\u5217\uff09\u8f49\u63db\u6210\u4e00\u500b\u5411\u91cf\uff0c\u4ee5\u4fbf\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u80fd\u5920\u4f7f\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0a\u4e0b\u6587"),"\uff1a\u5728\u6a5f\u5668\u5b78\u7fd2\u548c\u6578\u64da\u79d1\u5b78\u4e2d\uff0c\u901a\u5e38\u5728\u8655\u7406\u7d50\u69cb\u5316\u6578\u64da\u6642\uff0c\u6211\u5011\u6703\u5c07\u591a\u500b\u6578\u64da\u5217\uff08\u4f8b\u5982\u5e74\u9f61\u3001\u6536\u5165\u3001\u623f\u9593\u6578\uff09\u5408\u4f75\u6210\u70ba\u4e00\u500b\u5411\u91cf\uff0c\u4e26\u4f5c\u70ba\u6a21\u578b\u7684\u8f38\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f5c\u7528"),"\uff1a\u5c07\u591a\u500b\u7279\u5fb5\u7d44\u5408\u6210\u4e00\u500b\u7d71\u4e00\u7684\u6578\u5b78\u8868\u793a\u5f62\u5f0f\uff0c\u4ee5\u4fbf\u6a21\u578b\u9032\u884c\u904b\u7b97\u548c\u9810\u6e2c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7bc4\u4f8b"),"\uff1a\n\u5047\u8a2d\u4e00\u500b\u623f\u50f9\u9810\u6e2c\u6578\u64da\u96c6\u4e2d\u5305\u542b\u4e09\u500b\u7279\u5fb5\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u623f\u5c4b\u9762\u7a4d"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"\u623f\u9593\u6578")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"\u623f\u9f61"),"\uff0c\u6211\u5011\u53ef\u4ee5\u5c07\u9019\u4e9b\u7279\u5fb5\u7d44\u5408\u6210\u4e00\u500b\u5411\u91cf\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"[1500, 3, 10]"),"\uff0c\u4f86\u8868\u793a\u4e00\u68df\u5177\u9ad4\u7684\u623f\u5c4b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95dc\u9375\u9ede"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Feature Vectorization")," \u662f\u4e00\u500b\u5c07\u591a\u500b\u7279\u5fb5\u7d44\u5408\u6210\u5411\u91cf\u7684\u904e\u7a0b\uff0c\u901a\u5e38\u4f7f\u7528\u5de5\u5177\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"VectorAssembler")," \u5728 PySpark \u4e2d\u5b8c\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u662f\u6578\u64da\u9810\u8655\u7406\u4e2d\u7684\u4e00\u500b\u6b65\u9a5f\uff0c\u4e26\u4e14\u6bcf\u500b\u6578\u64da\u9ede\u90fd\u6709\u4e00\u500b\u5411\u91cf\uff0c\u9019\u4e9b\u5411\u91cf\u4ee3\u8868\u4e86\u8a72\u6578\u64da\u9ede\u7684\u591a\u500b\u5c6c\u6027\u3002")),(0,a.kt)("h3",{id:"2-eigenvector\u7279\u5fb5\u5411\u91cf\u672c\u5fb5\u5411\u91cf"},(0,a.kt)("strong",{parentName:"h3"},"2. Eigenvector\uff08\u7279\u5fb5\u5411\u91cf/\u672c\u5fb5\u5411\u91cf\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Eigenvector")," \u662f\u7dda\u6027\u4ee3\u6578\u4e2d\u7684\u4e00\u500b\u6982\u5ff5\uff0c\u8207\u77e9\u9663\u76f8\u95dc\u3002\u5b83\u662f\u7576\u4e00\u500b\u77e9\u9663\u4f5c\u7528\u65bc\u4e00\u500b\u5411\u91cf\u6642\uff0c\u8a72\u5411\u91cf\u53ea\u6703\u6539\u8b8a\u9577\u5ea6\u800c\u4e0d\u6539\u8b8a\u65b9\u5411\u7684\u5411\u91cf\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0a\u4e0b\u6587"),"\uff1a\u5728\u6578\u5b78\uff08\u7279\u5225\u662f\u7dda\u6027\u4ee3\u6578\uff09\u548c\u6578\u64da\u79d1\u5b78\u7684\u964d\u7dad\u6280\u8853\u4e2d\uff08\u5982\u4e3b\u6210\u5206\u5206\u6790\uff0cPCA\uff09\uff0c\u7279\u5fb5\u5411\u91cf\u6709\u8457\u91cd\u8981\u7684\u4f5c\u7528\u3002PCA \u7528\u65bc\u5c07\u9ad8\u7dad\u6578\u64da\u964d\u7dad\uff0c\u901a\u904e\u9078\u64c7\u80fd\u5920\u63cf\u8ff0\u6578\u64da\u6700\u591a\u65b9\u5dee\u7684\u65b9\u5411\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f5c\u7528"),"\uff1a\u7279\u5fb5\u5411\u91cf\u8207\u7279\u5fb5\u503c\u6709\u95dc\uff0c\u901a\u5e38\u5728\u77e9\u9663\u5206\u89e3\u6216\u964d\u7dad\u904e\u7a0b\u4e2d\u4f7f\u7528\u3002\u7576\u6211\u5011\u5c0d\u77e9\u9663\u9032\u884c\u5206\u89e3\uff08\u5982\u9032\u884c PCA\uff09\uff0c\u7279\u5fb5\u5411\u91cf\u8868\u793a\u4e86\u6578\u64da\u7684\u4e3b\u8981\u65b9\u5411\u6216\u6a21\u5f0f\uff0c\u800c\u7279\u5fb5\u503c\u5247\u8868\u793a\u9019\u4e9b\u65b9\u5411\u7684\u201c\u91cd\u8981\u6027\u201d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7bc4\u4f8b"),"\uff1a\n\u5982\u679c\u6211\u5011\u6709\u4e00\u500b 2x2 \u7684\u77e9\u9663\uff0c\u61c9\u7528\u5728\u4e00\u500b\u7279\u5b9a\u7684\u5411\u91cf\u4e0a\uff0c\u5982\u679c\u9019\u500b\u5411\u91cf\u7684\u65b9\u5411\u4e0d\u8b8a\uff08\u53ea\u6709\u9577\u5ea6\u6539\u8b8a\uff09\uff0c\u90a3\u9ebc\u9019\u500b\u5411\u91cf\u5c31\u662f\u9019\u500b\u77e9\u9663\u7684\u7279\u5fb5\u5411\u91cf\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95dc\u9375\u9ede"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Eigenvector")," \u662f\u4e00\u500b\u6578\u5b78\u5411\u91cf\uff0c\u4e3b\u8981\u8207\u77e9\u9663\u5206\u89e3\u6709\u95dc\uff0c\u4e26\u4e14\u5728\u6a5f\u5668\u5b78\u7fd2\u7684\u964d\u7dad\u6280\u8853\uff08\u5982 PCA\uff09\u4e2d\u5177\u6709\u91cd\u8981\u4f5c\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u63cf\u8ff0\u7684\u662f\u77e9\u9663\u5c0d\u5411\u91cf\u65bd\u52a0\u8b8a\u63db\u5f8c\u7684\u7d50\u679c\u3002")),(0,a.kt)("h3",{id:"\u5340\u5225\u7e3d\u7d50"},(0,a.kt)("strong",{parentName:"h3"},"\u5340\u5225\u7e3d\u7d50"),"\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u6982\u5ff5")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Feature Vectorization")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Eigenvector")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u4e2d\u6587\u540d\u7a31")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7279\u5fb5\u5411\u91cf\u5316"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7279\u5fb5\u5411\u91cf/\u672c\u5fb5\u5411\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u61c9\u7528\u9818\u57df")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6a5f\u5668\u5b78\u7fd2\u4e2d\u7684\u6578\u64da\u9810\u8655\u7406"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7dda\u6027\u4ee3\u6578\u548c\u6a5f\u5668\u5b78\u7fd2\u4e2d\u7684\u77e9\u9663\u5206\u89e3\u3001\u964d\u7dad")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u4f5c\u7528")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c07\u591a\u500b\u7279\u5fb5\u7d44\u5408\u6210\u4e00\u500b\u5411\u91cf\uff0c\u65b9\u4fbf\u6a21\u578b\u8655\u7406"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u77e9\u9663\u4f5c\u7528\u5728\u5411\u91cf\u4e0a\u6642\uff0c\u4fdd\u6301\u65b9\u5411\u4e0d\u8b8a\u7684\u5411\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u7bc4\u4f8b")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[1500, 3, 10]")," \u8868\u793a\u623f\u5c4b\u7279\u5fb5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728 PCA \u4e2d\uff0c\u7279\u5fb5\u5411\u91cf\u63cf\u8ff0\u4e86\u6578\u64da\u7684\u4e3b\u65b9\u5411")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u5de5\u5177/\u7b97\u6cd5")),(0,a.kt)("td",{parentName:"tr",align:null},"VectorAssembler\u3001\u5176\u4ed6\u7279\u5fb5\u7d44\u5408\u5de5\u5177"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7279\u5fb5\u503c\u5206\u89e3\u3001\u4e3b\u6210\u5206\u5206\u6790\uff08PCA\uff09\u7b49")))),(0,a.kt)("h3",{id:"\u61c9\u7528\u8209\u4f8b"},(0,a.kt)("strong",{parentName:"h3"},"\u61c9\u7528\u8209\u4f8b"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Feature Vectorization"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u6a5f\u5668\u5b78\u7fd2\u4e2d\uff0c\u5c0d\u65bc\u4e00\u500b\u623f\u50f9\u9810\u6e2c\u6a21\u578b\uff0c\u4f60\u53ef\u80fd\u6709\u591a\u500b\u7279\u5fb5\uff0c\u5982\u623f\u5b50\u7684\u9762\u7a4d\u3001\u623f\u9593\u6578\u548c\u623f\u9f61\u3002\u9019\u4e9b\u7279\u5fb5\u88ab\u7d44\u5408\u6210\u4e00\u500b\u7279\u5fb5\u5411\u91cf\uff0c\u4e26\u4f5c\u70ba\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u7684\u8f38\u5165\u4f86\u9032\u884c\u9810\u6e2c\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Eigenvector"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e3b\u6210\u5206\u5206\u6790\uff08PCA\uff09\u4e2d\uff0c\u7279\u5fb5\u5411\u91cf\u8868\u793a\u6578\u64da\u5728\u9ad8\u7dad\u7a7a\u9593\u4e2d\u6700\u91cd\u8981\u7684\u65b9\u5411\u3002PCA \u5c07\u6578\u64da\u6295\u5f71\u5230\u9019\u4e9b\u7279\u5fb5\u5411\u91cf\u4e0a\uff0c\u4ee5\u5be6\u73fe\u964d\u7dad\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u5c07\u9ad8\u7dad\u6578\u64da\u6295\u5f71\u5230\u4f4e\u7dad\u7a7a\u9593\uff0c\u4e26\u4e14\u4fdd\u7559\u6578\u64da\u4e2d\u7684\u4e3b\u8981\u4fe1\u606f\u3002")))),(0,a.kt)("h3",{id:"\u7d50\u8ad6"},(0,a.kt)("strong",{parentName:"h3"},"\u7d50\u8ad6"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Feature Vectorization")," \u662f\u6a5f\u5668\u5b78\u7fd2\u4e2d\u5e38\u898b\u7684\u6578\u64da\u9810\u8655\u7406\u6b65\u9a5f\uff0c\u7528\u65bc\u5c07\u591a\u500b\u7279\u5fb5\u7d44\u5408\u6210\u4e00\u500b\u5411\u91cf\uff0c\u9019\u6a23\u53ef\u4ee5\u8b93\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u6b63\u78ba\u8655\u7406\u8f38\u5165\u6578\u64da\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Eigenvector")," \u662f\u7dda\u6027\u4ee3\u6578\u4e2d\u7684\u4e00\u500b\u91cd\u8981\u6982\u5ff5\uff0c\u901a\u5e38\u61c9\u7528\u65bc\u77e9\u9663\u5206\u89e3\u548c\u6578\u64da\u964d\u7dad\uff0c\u5982 PCA\u3002\u5728\u9019\u88e1\uff0c\u5b83\u63cf\u8ff0\u7684\u662f\u6578\u64da\u7684\u4e3b\u65b9\u5411\uff0c\u7528\u65bc\u63d0\u53d6\u6700\u6709\u50f9\u503c\u7684\u4fe1\u606f\u3002")),(0,a.kt)("p",null,"\u5169\u8005\u7684\u5171\u540c\u9ede\u662f\uff0c\u5b83\u5011\u90fd\u6d89\u53ca\u5230\u5411\u91cf\u7684\u4f7f\u7528\uff0c\u4f46\u5728\u4e0a\u4e0b\u6587\u548c\u61c9\u7528\u5834\u666f\u4e0a\u5b58\u5728\u986f\u8457\u5dee\u7570\u3002"))}g.isMDXComponent=!0}}]);