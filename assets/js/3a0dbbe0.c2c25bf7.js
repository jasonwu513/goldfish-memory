"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=u(n),d=o,m=y["".concat(l,".").concat(d)]||y[d]||c[d]||r;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},85778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i="automation",p={unversionedId:"Software/Language/Python/pyautowin",id:"Software/Language/Python/pyautowin",title:"automation",description:"pywinauto",source:"@site/docs/Software/Language/Python/pyautowin.md",sourceDirName:"Software/Language/Python",slug:"/Software/Language/Python/pyautowin",permalink:"/docs/Software/Language/Python/pyautowin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/Language/Python/pyautowin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Design Pattern",permalink:"/docs/Software/Language/Python/designPattern"},next:{title:"Vaultwarden",permalink:"/docs/Software/Password/"}},l={},u=[{value:"pywinauto",id:"pywinauto",level:2},{value:"install",id:"install",level:3},{value:"example",id:"example",level:3},{value:"pyautogui",id:"pyautogui",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automation"},"automation"),(0,o.kt)("h2",{id:"pywinauto"},"pywinauto"),(0,o.kt)("p",null,"pywinauto is a set of python modules to automate the Microsoft Windows GUI. At its simplest it allows you to send mouse and keyboard actions to windows dialogs and controls, but it has support for more complex actions like getting text data."),(0,o.kt)("h3",{id:"install"},"install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pywinauto\n")),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pywinauto.application import Application \napp = Application().start("notepad.exe")\napp.UntitledNotepad.Edit.type_keys("pywinauto Works!", with_spaces = True)\napp.UntitledNotepad.menu_select("File -> Save As")\napp.SaveAs.Edit.type_keys(r"C:\\test.txt")\napp.SaveAs.Save.click()\napp.UntitledNotepad.menu_select("File -> Exit")\n')),(0,o.kt)("h2",{id:"pyautogui"},"pyautogui"),(0,o.kt)("p",null,"PyAutoGUI is a cross-platform GUI automation Python module for human beings. Used to programmatically control the mouse & keyboard."))}c.isMDXComponent=!0}}]);