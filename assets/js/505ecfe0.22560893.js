"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[3211],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?t.createElement(k,i(i({ref:r},u),{},{components:n})):t.createElement(k,i({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37141:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const l={},i="Golang DI \u5c0d\u6bd4 Laravel \u7bc4\u4f8b",a={unversionedId:"Golang/di",id:"Golang/di",title:"Golang DI \u5c0d\u6bd4 Laravel \u7bc4\u4f8b",description:"\u8f49\u63db\u5982\u4e0b\uff1a",source:"@site/docs/Golang/di.md",sourceDirName:"Golang",slug:"/Golang/di",permalink:"/goldfish-memory/docs/Golang/di",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Golang/di.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Golang \u8a3b\u89e3",permalink:"/goldfish-memory/docs/Golang/comment"},next:{title:"gin c.Request",permalink:"/goldfish-memory/docs/Golang/gin/request"}},p={},s=[{value:"1. UserRepository\u6d4b\u8bd5",id:"1-userrepository\u6d4b\u8bd5",level:3},{value:"2. UserController\u6d4b\u8bd5",id:"2-usercontroller\u6d4b\u8bd5",level:3},{value:"\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6 wire",id:"\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6-wire",level:2},{value:"1. \u5b89\u88c5 Wire",id:"1-\u5b89\u88c5-wire",level:3},{value:"2. \u521b\u5efa Wire \u6587\u4ef6",id:"2-\u521b\u5efa-wire-\u6587\u4ef6",level:3},{value:"3. \u5b9a\u4e49\u6784\u9020\u51fd\u6570",id:"3-\u5b9a\u4e49\u6784\u9020\u51fd\u6570",level:3},{value:"4. \u751f\u6210 Wire \u4ee3\u7801",id:"4-\u751f\u6210-wire-\u4ee3\u7801",level:3},{value:"5. \u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801",id:"5-\u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801",level:3}],u={toc:s};function c(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golang-di-\u5c0d\u6bd4-laravel-\u7bc4\u4f8b"},"Golang DI \u5c0d\u6bd4 Laravel \u7bc4\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n \nnamespace App\\Http\\Controllers;\n \nuse App\\Http\\Controllers\\Controller;\nuse App\\Repositories\\UserRepository;\nuse App\\Models\\User;\nuse Illuminate\\View\\View;\n \nclass UserController extends Controller\n{\n    /**\n     * Create a new controller instance.\n     */\n    public function __construct(\n        protected UserRepository $users,\n    ) {}\n \n    /**\n     * Show the profile for the given user.\n     */\n    public function show(string $id): View\n    {\n        $user = $this->users->find($id);\n \n        return view('user.profile', ['user' => $user]);\n    }\n}\n")),(0,o.kt)("p",null,"\u8f49\u63db\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"repository/user_repository.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package repository\n\ntype User struct {\n    ID   string\n    Name string\n}\n\ntype UserRepository struct{}\n\nfunc (r *UserRepository) Find(id string) *User {\n    // \u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u8fd9\u91cc\u53ef\u80fd\u4f1a\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u7528\u6237\u4fe1\u606f\n    return &User{ID: id, Name: "John Doe"}\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"controller/user_controller.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package controller\n\nimport (\n    "fmt"\n    "your_project/repository"  // \u5bfc\u5165repository\u5305\n)\n\ntype UserController struct {\n    users *repository.UserRepository\n}\n\nfunc NewUserController(users *repository.UserRepository) *UserController {\n    return &UserController{users: users}\n}\n\nfunc (c *UserController) Show(id string) {\n    user := c.users.Find(id)\n    fmt.Printf("User: %+v\\n", user)\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"main.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "your_project/controller"\n    "your_project/repository"\n)\n\nfunc main() {\n    usersRepo := &repository.UserRepository{}\n    userController := controller.NewUserController(usersRepo)\n    userController.Show("1")\n}\n')),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\u5b9a\u4e49\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"repository"),"\u5305\u5185\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"UserController"),"\u5b9a\u4e49\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"controller"),"\u5305\u5185\uff0c\u7136\u540e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"main.go"),"\u6587\u4ef6\u4e2d\u5bfc\u5165\u8fd9\u4e24\u4e2a\u5305\u5e76\u4f7f\u7528\u5b83\u4eec\u3002\u8bf7\u6ce8\u610f\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"your_project"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u9879\u76ee\u8def\u5f84\u3002"),(0,o.kt)("p",null,"\u8981\u4e3a\u4e0a\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"UserController"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528Go\u7684\u5185\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"testing"),"\u5305\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u57fa\u672c\u7684\u6d4b\u8bd5\u7528\u4f8b\u793a\u4f8b\uff1a"),(0,o.kt)("h3",{id:"1-userrepository\u6d4b\u8bd5"},"1. UserRepository\u6d4b\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package repository\n\nimport (\n    "testing"\n)\n\nfunc TestFindUser(t *testing.T) {\n    repo := &UserRepository{}\n    user := repo.Find("1")\n    if user == nil {\n        t.Error("Expected a user, got nil")\n    }\n    if user.ID != "1" || user.Name != "John Doe" {\n        t.Errorf("Expected user with ID \'1\' and Name \'John Doe\', got %+v", user)\n    }\n}\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u6d4b\u8bd5\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Find"),"\u65b9\u6cd5\uff0c\u786e\u4fdd\u5b83\u8fd4\u56de\u4e86\u6b63\u786e\u7684\u7528\u6237\u5bf9\u8c61\u3002"),(0,o.kt)("h3",{id:"2-usercontroller\u6d4b\u8bd5"},"2. UserController\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u5bf9\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"UserController"),"\u7684\u6d4b\u8bd5\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\u7684\u6a21\u62df\u7248\u672c\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u4e0d\u4f9d\u8d56\u5b9e\u9645",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\u884c\u4e3a\u7684\u60c5\u51b5\u4e0b\u6d4b\u8bd5",(0,o.kt)("inlineCode",{parentName:"p"},"UserController"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package controller\n\nimport (\n    "testing"\n    "your_project/repository"\n)\n\ntype MockUserRepository struct{}\n\nfunc (m *MockUserRepository) Find(id string) *repository.User {\n    return &repository.User{ID: "1", Name: "John Doe"}\n}\n\nfunc TestShowUser(t *testing.T) {\n    mockRepo := &MockUserRepository{}\n    controller := NewUserController(mockRepo)\n    // \u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u65b9\u5f0f\u6765\u6355\u6349\u6216\u6bd4\u8f83controller\u65b9\u6cd5\u7684\u8f93\u51fa\n    controller.Show("1")\n}\n')),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"MockUserRepository"),"\u6765\u6a21\u62df",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),"\u7684\u884c\u4e3a\uff0c\u5e76\u7528\u5b83\u6765\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"UserController"),"\u7684\u5b9e\u4f8b\u3002\u7136\u540e\u6211\u4eec\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Show"),"\u65b9\u6cd5\u3002\u5728\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Show"),"\u65b9\u6cd5\u53ea\u662f\u6253\u5370\u7528\u6237\u4fe1\u606f\uff0c\u6240\u4ee5\u4f60\u53ef\u80fd\u9700\u8981\u627e\u5230\u4e00\u79cd\u65b9\u6cd5\u6765\u6355\u6349\u6216\u6bd4\u8f83\u8f93\u51fa\uff0c\u4ee5\u786e\u4fdd\u65b9\u6cd5\u7684\u884c\u4e3a\u662f\u6b63\u786e\u7684\u3002"),(0,o.kt)("h2",{id:"\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6-wire"},"\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6 wire"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wire")," \u662f\u7531 Google \u5f00\u53d1\u7684\u4e00\u79cd Go \u8bed\u8a00\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6\u3002\u5b83\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u89e3\u6790\u548c\u6ce8\u5165\u4f9d\u8d56\u5173\u7cfb\uff0c\u4ece\u800c\u63d0\u9ad8\u8fd0\u884c\u65f6\u6027\u80fd\u5e76\u51cf\u5c11\u542f\u52a8\u65f6\u95f4\u3002\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire")," \u6765\u5904\u7406\u4f9d\u8d56\u6ce8\u5165\u53ef\u4ee5\u4f7f\u4ee3\u7801\u66f4\u52a0\u6e05\u6670\uff0c\u5e76\u4e14\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u4f9d\u8d56\u6ce8\u5165\u7684\u4ee3\u7801\uff0c\u907f\u514d\u4e86\u624b\u52a8\u7f16\u5199\u7e41\u7410\u7684\u521d\u59cb\u5316\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4f60\u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"UserController")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository")," \u7684\u4f8b\u5b50\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire")," \u662f\u5b8c\u5168\u5408\u9002\u7684\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire")," \u6765\u6ce8\u5165\u4f9d\u8d56\u7684\u57fa\u672c\u6b65\u9aa4\uff1a"),(0,o.kt)("h3",{id:"1-\u5b89\u88c5-wire"},"1. \u5b89\u88c5 Wire"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire")," \u5de5\u5177\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go install github.com/google/wire/cmd/wire@latest\n")),(0,o.kt)("h3",{id:"2-\u521b\u5efa-wire-\u6587\u4ef6"},"2. \u521b\u5efa Wire \u6587\u4ef6"),(0,o.kt)("p",null,"\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"wire.go")," \u7684\u6587\u4ef6\uff0c\u5e76\u7f16\u5199\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// +build wireinject\n\npackage main\n\nimport (\n    "your_project/controller"\n    "your_project/repository"\n    "github.com/google/wire"\n)\n\nfunc InitializeUserController() *controller.UserController {\n    wire.Build(repository.NewUserRepository, controller.NewUserController)\n    return nil\n}\n')),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializeUserController")," \u51fd\u6570\uff0c\u5b83\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire.Build")," \u6765\u58f0\u660e\u4f9d\u8d56\u5173\u7cfb\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"NewUserRepository")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"NewUserController")," \u51fd\u6570\u9700\u8981\u88ab\u5b9a\u4e49\u5728\u5bf9\u5e94\u7684\u5305\u4e2d\uff0c\u5e76\u8fd4\u56de\u5bf9\u5e94\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("h3",{id:"3-\u5b9a\u4e49\u6784\u9020\u51fd\u6570"},"3. \u5b9a\u4e49\u6784\u9020\u51fd\u6570"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"controller")," \u5305\u4e2d\uff0c\u5206\u522b\u5b9a\u4e49\u6784\u9020\u51fd\u6570\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"repository/user_repository.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"package repository\n\n// ... (\u5176\u4ed6\u4ee3\u7801\u4fdd\u6301\u4e0d\u53d8)\n\nfunc NewUserRepository() *UserRepository {\n    return &UserRepository{}\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"controller/user_controller.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"package controller\n\n// ... (\u5176\u4ed6\u4ee3\u7801\u4fdd\u6301\u4e0d\u53d8)\n\nfunc NewUserController(users *repository.UserRepository) *UserController {\n    return &UserController{users: users}\n}\n")),(0,o.kt)("h3",{id:"4-\u751f\u6210-wire-\u4ee3\u7801"},"4. \u751f\u6210 Wire \u4ee3\u7801"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire_gen.go")," \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wire\n")),(0,o.kt)("h3",{id:"5-\u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801"},"5. \u4f7f\u7528\u751f\u6210\u7684\u4ee3\u7801"),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"main.go")," \u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"InitializeUserController")," \u51fd\u6570\u6765\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"UserController")," \u7684\u5b9e\u4f8b\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    userController := InitializeUserController()\n    user := userController.Show("1")\n    fmt.Printf("User: %+v\\n", user)\n}\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"wire"),"\uff0c\u4f60\u53ef\u4ee5\u51cf\u5c11\u624b\u52a8\u7f16\u5199\u4f9d\u8d56\u6ce8\u5165\u4ee3\u7801\u7684\u5de5\u4f5c\u91cf\uff0c\u540c\u65f6\u4fdd\u6301\u4ee3\u7801\u7684\u6e05\u6670\u548c\u53ef\u7ef4\u62a4\u6027\u3002"))}c.isMDXComponent=!0}}]);