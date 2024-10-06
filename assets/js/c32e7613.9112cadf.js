"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8522],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),p=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=t,f=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return a?r.createElement(f,l(l({ref:n},m),{},{components:a})):r.createElement(f,l({ref:n},m))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18852:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),t=(a(67294),a(3905));const o={},l="Marshal & Unmarshal",i={unversionedId:"Software/Language/Golang/marshal",id:"Software/Language/Golang/marshal",title:"Marshal & Unmarshal",description:"\u5728Go\u8a9e\u8a00\u4e2d\uff0cencoding/json\u6a19\u6e96\u5eab\u63d0\u4f9b\u4e86\u5c0dJSON\u6578\u64da\u9032\u884c\u7de8\u78bc\uff08Marshaling\uff09\u548c\u89e3\u78bc\uff08Unmarshaling\uff09\u7684\u529f\u80fd\u3002",source:"@site/docs/Software/Language/Golang/marshal.md",sourceDirName:"Software/Language/Golang",slug:"/Software/Language/Golang/marshal",permalink:"/goldfish-memory/docs/Software/Language/Golang/marshal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Language/Golang/marshal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Learning Golang",permalink:"/goldfish-memory/docs/Software/Language/Golang/learn"},next:{title:"pointer",permalink:"/goldfish-memory/docs/Software/Language/Golang/pointer"}},s={},p=[{value:"Marshal\uff08\u7de8\u78bc\uff09",id:"marshal\u7de8\u78bc",level:3},{value:"Unmarshal\uff08\u89e3\u78bc\uff09",id:"unmarshal\u89e3\u78bc",level:3}],m={toc:p};function c(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"marshal--unmarshal"},"Marshal & Unmarshal"),(0,t.kt)("p",null,"\u5728Go\u8a9e\u8a00\u4e2d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"encoding/json"),"\u6a19\u6e96\u5eab\u63d0\u4f9b\u4e86\u5c0dJSON\u6578\u64da\u9032\u884c\u7de8\u78bc\uff08Marshaling\uff09\u548c\u89e3\u78bc\uff08Unmarshaling\uff09\u7684\u529f\u80fd\u3002"),(0,t.kt)("h3",{id:"marshal\u7de8\u78bc"},"Marshal\uff08\u7de8\u78bc\uff09"),(0,t.kt)("p",null,"\u7576\u6709\u4e00\u500bGo\u8a9e\u8a00\u7684\u6578\u64da\u7d50\u69cb\uff0c\u60f3\u8981\u5c07\u5176\u8f49\u63db\u70baJSON\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"json.Marshal"),"\u51fd\u6578\u3002\u9019\u500b\u904e\u7a0b\u7a31\u70baMarshaling\u6216\u8005Serialization\uff08\u5e8f\u5217\u5316\uff09\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'type Person struct {\n    Name string `json:"name"`\n    Age  int    `json:"age"`\n}\n\nfunc main() {\n    p := Person{Name: "John Doe", Age: 30}\n    jsonData, err := json.Marshal(p)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(string(jsonData))  // {"name":"John Doe","age":30}\n}\n')),(0,t.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u5011\u5b9a\u7fa9\u4e86\u4e00\u500b",(0,t.kt)("inlineCode",{parentName:"p"},"Person"),"\u7d50\u69cb\uff0c\u5275\u5efa\u4e86\u4e00\u500b\u6b64\u7d50\u69cb\u7684\u5be6\u4f8b",(0,t.kt)("inlineCode",{parentName:"p"},"p"),"\uff0c\u4e26\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"json.Marshal"),"\u5c07\u5176\u8f49\u63db\u70baJSON\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,t.kt)("h3",{id:"unmarshal\u89e3\u78bc"},"Unmarshal\uff08\u89e3\u78bc\uff09"),(0,t.kt)("p",null,"\u7576\u6709\u4e00\u500bJSON\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u60f3\u8981\u5c07\u5176\u8f49\u63db\u70baGo\u8a9e\u8a00\u7684\u6578\u64da\u7d50\u69cb\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"json.Unmarshal"),"\u51fd\u6578\u3002\u9019\u500b\u904e\u7a0b\u7a31\u70baUnmarshaling\u6216\u8005Deserialization\uff08\u53cd\u5e8f\u5217\u5316\uff09\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    jsonData := []byte(`{"name":"John Doe","age":30}`)\n    var p Person\n    err := json.Unmarshal(jsonData, &p)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println(p)  // {John Doe 30}\n}\n')),(0,t.kt)("p",null,"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u6709\u4e00\u500bJSON\u683c\u5f0f\u7684\u5b57\u7b26\u4e32",(0,t.kt)("inlineCode",{parentName:"p"},"jsonData"),"\uff0c\u4e26\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"json.Unmarshal"),"\u5c07\u5176\u89e3\u6790\u70ba",(0,t.kt)("inlineCode",{parentName:"p"},"Person"),"\u7d50\u69cb\u7684\u5be6\u4f8b",(0,t.kt)("inlineCode",{parentName:"p"},"p"),"\u3002"),(0,t.kt)("p",null,"\u6ce8\u610f\u5728\u9019\u5169\u500b\u904e\u7a0b\u4e2d\uff0cGo\u8a9e\u8a00\u7684\u7d50\u69cb\u9ad4\u5b57\u6bb5\u53ef\u4ee5\u901a\u904e\u6a19\u7c3d\uff08tags\uff09\u4f86\u6307\u5b9a\u5c0d\u61c9\u7684JSON\u9375\u540d\uff0c\u4ee5\u53ca\u9032\u884c\u5176\u4ed6\u4e00\u4e9b\u8a2d\u5b9a\uff0c\u5982\u5ffd\u7565\u5b57\u6bb5\u3001\u689d\u4ef6\u5e8f\u5217\u5316\u7b49\u3002"))}c.isMDXComponent=!0}}]);