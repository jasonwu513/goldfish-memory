"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[4018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,E=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(E,o(o({ref:t},s),{},{components:n})):r.createElement(E,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={},o="Excel \u6a1e\u7d10\u5206\u6790\u8868",i={unversionedId:"Office/Excel/\u6a1e\u7d10\u5206\u6790sql",id:"Office/Excel/\u6a1e\u7d10\u5206\u6790sql",title:"Excel \u6a1e\u7d10\u5206\u6790\u8868",description:"\u8aaa\u660e",source:"@site/docs/Office/Excel/\u6a1e\u7d10\u5206\u6790sql.md",sourceDirName:"Office/Excel",slug:"/Office/Excel/\u6a1e\u7d10\u5206\u6790sql",permalink:"/goldfish-memory/docs/Office/Excel/\u6a1e\u7d10\u5206\u6790sql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Office/Excel/\u6a1e\u7d10\u5206\u6790sql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u4f5c\u65e5 (workday.intl)",permalink:"/goldfish-memory/docs/Office/Excel/\u51fd\u5f0f/\u5de5\u4f5c\u65e5"},next:{title:"\u6392\u5e8f\u7be9\u9078",permalink:"/goldfish-memory/docs/Office/Excel/\u7be9\u9078\u6392\u5e8f"}},c={},p=[{value:"\u8aaa\u660e",id:"\u8aaa\u660e",level:2},{value:"\u8a9e\u6cd5",id:"\u8a9e\u6cd5",level:2},{value:"\u5728 SQL \u4e2d\u7b49\u6548\u7684\u64cd\u4f5c",id:"\u5728-sql-\u4e2d\u7b49\u6548\u7684\u64cd\u4f5c",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 <code>CASE WHEN</code>\uff08\u901a\u7528 SQL\uff09",id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-case-when\u901a\u7528-sql",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528 <code>PIVOT</code>\uff08SQL Server \u6216 Oracle \u7b49\u652f\u6301\u7684\u8cc7\u6599\u5eab\uff09",id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528-pivotsql-server-\u6216-oracle-\u7b49\u652f\u6301\u7684\u8cc7\u6599\u5eab",level:3},{value:"SQL Server \u7684 <code>PIVOT</code> \u5beb\u6cd5\uff1a",id:"sql-server-\u7684-pivot-\u5beb\u6cd5",level:4},{value:"Oracle \u7684 <code>PIVOT</code> \u5beb\u6cd5\uff1a",id:"oracle-\u7684-pivot-\u5beb\u6cd5",level:4},{value:"\u65b9\u6cd5\u4e09\uff1aMySQL \u6a21\u64ec\u6a1e\u7d10\u8868",id:"\u65b9\u6cd5\u4e09mysql-\u6a21\u64ec\u6a1e\u7d10\u8868",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"excel-\u6a1e\u7d10\u5206\u6790\u8868"},"Excel \u6a1e\u7d10\u5206\u6790\u8868"),(0,l.kt)("h2",{id:"\u8aaa\u660e"},"\u8aaa\u660e"),(0,l.kt)("p",null,"Excel \u6a1e\u7d10\u5206\u6790\u8868\u662f Excel \u4e2d\u7684\u4e00\u500b\u529f\u80fd\uff0c\u7528\u4f86\u5c0d\u8cc7\u6599\u9032\u884c\u5206\u6790\uff0c\u4e26\u4e14\u53ef\u4ee5\u5feb\u901f\u5730\u5c0d\u8cc7\u6599\u9032\u884c\u5206\u985e\u3001\u8a08\u7b97\u3001\u7e3d\u7d50\u3002"),(0,l.kt)("h2",{id:"\u8a9e\u6cd5"},"\u8a9e\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9078\u53d6\u8cc7\u6599"),(0,l.kt)("li",{parentName:"ol"},"\u63d2\u5165\u6a1e\u7d10\u5206\u6790\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u9078\u64c7\u8981\u5206\u6790\u7684\u6b04\u4f4d"),(0,l.kt)("li",{parentName:"ol"},"\u9078\u64c7\u8981\u986f\u793a\u7684\u8cc7\u6599"),(0,l.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u6a1e\u7d10\u5206\u6790\u8868"),(0,l.kt)("li",{parentName:"ol"},"\u5206\u6790\u8cc7\u6599")),(0,l.kt)("h2",{id:"\u5728-sql-\u4e2d\u7b49\u6548\u7684\u64cd\u4f5c"},"\u5728 SQL \u4e2d\u7b49\u6548\u7684\u64cd\u4f5c"),(0,l.kt)("p",null,"\u8981\u5728 SQL \u4e2d\u5be6\u73fe\u985e\u4f3c Excel \u6a1e\u7d10\u5206\u6790\u8868\u7684\u6548\u679c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"CASE WHEN"))," \u6216 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"PIVOT")),"\uff08\u67d0\u4e9b\u8cc7\u6599\u5eab\u652f\u6301\uff09\u4f86\u5c07\u6578\u64da\u5f59\u7e3d\u5230\u5217\u548c\u884c\u4e2d\u3002\u5047\u8a2d\u60c5\u6cc1\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5217\u6a19\u7c64\uff08Column Labels\uff09"),"\uff1a\u696d\u52d9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u884c\u6a19\u7c64\uff08Row Labels\uff09"),"\uff1a\u7522\u54c1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u503c\uff08Values\uff09"),"\uff1a\u92b7\u552e\u503c")),(0,l.kt)("p",null,"\u5047\u8a2d\u8868\u7d50\u69cb\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"sales_table\n-----------------------------------\n| \u696d\u52d9 | \u7522\u54c1  | \u92b7\u552e\u503c |\n-----------------------------------\n| A    | \u7522\u54c11 | 100   |\n| B    | \u7522\u54c12 | 150   |\n| A    | \u7522\u54c12 | 200   |\n| C    | \u7522\u54c11 | 300   |\n...\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-case-when\u901a\u7528-sql"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"CASE WHEN"),"\uff08\u901a\u7528 SQL\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u8cc7\u6599\u5eab\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"PIVOT"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"CASE WHEN")," \u4f86\u624b\u52d5\u9032\u884c\u6578\u64da\u900f\u8996\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    \u7522\u54c1,\n    SUM(CASE WHEN \u696d\u52d9 = 'A' THEN \u92b7\u552e\u503c ELSE 0 END) AS A_\u696d\u52d9,\n    SUM(CASE WHEN \u696d\u52d9 = 'B' THEN \u92b7\u552e\u503c ELSE 0 END) AS B_\u696d\u52d9,\n    SUM(CASE WHEN \u696d\u52d9 = 'C' THEN \u92b7\u552e\u503c ELSE 0 END) AS C_\u696d\u52d9\nFROM sales_table\nGROUP BY \u7522\u54c1;\n")),(0,l.kt)("p",null,"\u9019\u6a23\u7684\u67e5\u8a62\u6703\u7522\u751f\u985e\u4f3c\u4ee5\u4e0b\u7d50\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"-----------------------------------\n| \u7522\u54c1  | A_\u696d\u52d9 | B_\u696d\u52d9 | C_\u696d\u52d9 |\n-----------------------------------\n| \u7522\u54c11 | 100   | 0     | 300    |\n| \u7522\u54c12 | 200   | 150   | 0      |\n...\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u4f7f\u7528-pivotsql-server-\u6216-oracle-\u7b49\u652f\u6301\u7684\u8cc7\u6599\u5eab"},"\u65b9\u6cd5\u4e8c\uff1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"PIVOT"),"\uff08SQL Server \u6216 Oracle \u7b49\u652f\u6301\u7684\u8cc7\u6599\u5eab\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u8cc7\u6599\u5eab\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"PIVOT"),"\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b83\u4f86\u7c21\u5316\u9019\u500b\u904e\u7a0b\u3002"),(0,l.kt)("h4",{id:"sql-server-\u7684-pivot-\u5beb\u6cd5"},"SQL Server \u7684 ",(0,l.kt)("inlineCode",{parentName:"h4"},"PIVOT")," \u5beb\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM (\n    SELECT \u7522\u54c1, \u696d\u52d9, \u92b7\u552e\u503c\n    FROM sales_table\n) AS SourceTable\nPIVOT (\n    SUM(\u92b7\u552e\u503c)\n    FOR \u696d\u52d9 IN ([A], [B], [C])\n) AS PivotTable;\n")),(0,l.kt)("h4",{id:"oracle-\u7684-pivot-\u5beb\u6cd5"},"Oracle \u7684 ",(0,l.kt)("inlineCode",{parentName:"h4"},"PIVOT")," \u5beb\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM sales_table\nPIVOT (\n    SUM(\u92b7\u552e\u503c)\n    FOR \u696d\u52d9 IN ('A' AS A_\u696d\u52d9, 'B' AS B_\u696d\u52d9, 'C' AS C_\u696d\u52d9)\n);\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5\u4e09mysql-\u6a21\u64ec\u6a1e\u7d10\u8868"},"\u65b9\u6cd5\u4e09\uff1aMySQL \u6a21\u64ec\u6a1e\u7d10\u8868"),(0,l.kt)("p",null,"MySQL \u4e0d\u76f4\u63a5\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"PIVOT"),"\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"CASE WHEN")," \u7d50\u5408\u4f86\u6a21\u64ec\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    \u7522\u54c1,\n    SUM(CASE WHEN \u696d\u52d9 = 'A' THEN \u92b7\u552e\u503c ELSE 0 END) AS A_\u696d\u52d9,\n    SUM(CASE WHEN \u696d\u52d9 = 'B' THEN \u92b7\u552e\u503c ELSE 0 END) AS B_\u696d\u52d9,\n    SUM(CASE WHEN \u696d\u52d9 = 'C' THEN \u92b7\u552e\u503c ELSE 0 END) AS C_\u696d\u52d9\nFROM sales_table\nGROUP BY \u7522\u54c1;\n")),(0,l.kt)("h3",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"CASE WHEN"))," \u662f\u901a\u7528\u7684\u89e3\u6cd5\uff0c\u9069\u7528\u65bc\u5404\u985e\u8cc7\u6599\u5eab\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"PIVOT"))," \u5247\u9069\u5408\u652f\u6301\u9019\u500b\u529f\u80fd\u7684\u8cc7\u6599\u5eab\uff08\u5982 SQL Server \u548c Oracle\uff09\uff0c\u80fd\u5920\u66f4\u7c21\u55ae\u512a\u96c5\u5730\u5be6\u73fe\u900f\u8996\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8a62\u7d50\u679c\u6703\u5448\u73fe\u70ba\u985e\u4f3c Excel \u6a1e\u7d10\u8868\u7684\u5f62\u5f0f\uff0c\u5217\u6a19\u7c64\u70ba\u696d\u52d9\u3001\u884c\u6a19\u7c64\u70ba\u7522\u54c1\uff0c\u503c\u70ba\u92b7\u552e\u984d\u3002")))}u.isMDXComponent=!0}}]);