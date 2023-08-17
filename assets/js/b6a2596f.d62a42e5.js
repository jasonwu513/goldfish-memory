"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[5673],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>u});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),d=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(r),u=t,f=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return r?a.createElement(f,l(l({ref:n},s),{},{components:r})):a.createElement(f,l({ref:n},s))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:t,l[1]=p;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51003:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=r(87462),t=(r(67294),r(3905));const o={},l="\u67b6\u8a2dLDAP \u7df4\u7fd2\u74b0\u5883",p={unversionedId:"Personal/ldap/ldap",id:"Personal/ldap/ldap",title:"\u67b6\u8a2dLDAP \u7df4\u7fd2\u74b0\u5883",description:"\u8a62\u554fgpt",source:"@site/docs/Personal/ldap/ldap.md",sourceDirName:"Personal/ldap",slug:"/Personal/ldap/",permalink:"/goldfish-memory/docs/Personal/ldap/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Personal/ldap/ldap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spy",permalink:"/goldfish-memory/docs/Personal/Windows/spy"},next:{title:"Loki",permalink:"/goldfish-memory/docs/Personal/log/loki"}},i={},d=[],s={toc:d};function c(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\u67b6\u8a2dldap-\u7df4\u7fd2\u74b0\u5883"},"\u67b6\u8a2dLDAP \u7df4\u7fd2\u74b0\u5883"),(0,t.kt)("p",null,"\u8a62\u554fgpt"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'docker run \\\n    -d \\\n    -p 389:389 \\\n    -p 636:636 \\\n    -v /usr/local/ldap:/usr/local/ldap \\\n    -v /data/openldap/ldap:/var/lib/ldap \\\n    -v /data/openldap/slapd.d:/etc/ldap/slapd.d \\\n    --env LDAP_ORGANISATION="imysh" \\\n    --env LDAP_DOMAIN="imysh.com" \\\n    --env LDAP_ADMIN_PASSWORD="123456" \\\n    --name openldap \\\n    --hostname openldap-host\\\n    --network bridge \\\n    osixia/openldap\n\ndocker run \\\n    -p 8081:80 \\\n    --privileged \\\n    --name phpldapadmin \\\n    --env PHPLDAPADMIN_HTTPS=false \\\n    --env PHPLDAPADMIN_LDAP_HOSTS=192.168.x.xxx  \\\n    --detach osixia/phpldapadmin\n\ndocker run --name keycloak_test -d -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=changeME quay.io/keycloak/keycloak:latest start-dev\n\n\u52a0\u4e0a grafana \u5beb\u6210 docker-compose file\n\n\n')),(0,t.kt)("p",null,"base on gpt \u56de\u7b54\u4e26\u4fee\u6539"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n  openldap:\n    image: osixia/openldap\n    container_name: openldap\n    environment:\n      LDAP_ORGANISATION: "imysh"\n      LDAP_DOMAIN: "imysh.com"\n      LDAP_ADMIN_PASSWORD: "123456"\n    ports:\n      - "389:389"\n      - "636:636"\n    volumes:\n      - "./data/usr/local/ldap:/usr/local/ldap"\n      - "./data/openldap/ldap:/var/lib/ldap"\n      - "./data/openldap/slapd.d:/etc/ldap/slapd.d"\n    networks:\n      - bridge\n\n  phpldapadmin:\n    image: osixia/phpldapadmin\n    container_name: phpldapadmin\n    environment:\n      PHPLDAPADMIN_HTTPS: "false"\n      PHPLDAPADMIN_LDAP_HOSTS: "openldap"\n    ports:\n      - "8081:80"\n    privileged: true\n    networks:\n      - bridge\n\n  # keycloak_test:\n  #   image: quay.io/keycloak/keycloak:latest\n  #   container_name: keycloak_test\n  #   environment:\n  #     KEYCLOAK_ADMIN: "admin"\n  #     KEYCLOAK_ADMIN_PASSWORD: "changeME"\n  #   ports:\n  #     - "8080:8080"\n  #   networks:\n  #     - bridge\n  #   command: start-dev\n\n  # grafana:\n  #   image: grafana/grafana:latest\n  #   container_name: grafana\n  #   ports:\n  #     - "3000:3000"\n  #   networks:\n  #     - bridge\n\nnetworks:\n  bridge:\n    driver: bridge\n\n')),(0,t.kt)("p",null,"goto ip:8081\n\u767b\u5165\u4f7f\u7528 cn=admin,dc=imysh,dc=com  /  123456"))}c.isMDXComponent=!0}}]);