"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[5278],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return a?t.createElement(f,p(p({ref:n},c),{},{components:a})):t.createElement(f,p({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<o;d++)p[d]=a[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29359:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=a(87462),r=(a(67294),a(3905));const o={},p="\u67b6\u8a2dLDAP \u7df4\u7fd2\u74b0\u5883",l={unversionedId:"Software/ldap/ldap",id:"Software/ldap/ldap",title:"\u67b6\u8a2dLDAP \u7df4\u7fd2\u74b0\u5883",description:"base on gpt \u56de\u7b54\u4e26\u4fee\u6539",source:"@site/docs/Software/ldap/ldap.md",sourceDirName:"Software/ldap",slug:"/Software/ldap/",permalink:"/docs/Software/ldap/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/ldap/ldap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u70ba\u4ec0\u9ebc\u9078\u64c7 pocketbase",permalink:"/docs/Software/Pockebase/why"},next:{title:"Loki",permalink:"/docs/Software/log/loki"}},i={},d=[],c={toc:d};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u67b6\u8a2dldap-\u7df4\u7fd2\u74b0\u5883"},"\u67b6\u8a2dLDAP \u7df4\u7fd2\u74b0\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker run \\\n    -d \\\n    -p 389:389 \\\n    -p 636:636 \\\n    -v /usr/local/ldap:/usr/local/ldap \\\n    -v /data/openldap/ldap:/var/lib/ldap \\\n    -v /data/openldap/slapd.d:/etc/ldap/slapd.d \\\n    --env LDAP_ORGANISATION="imysh" \\\n    --env LDAP_DOMAIN="imysh.com" \\\n    --env LDAP_ADMIN_PASSWORD="123456" \\\n    --name openldap \\\n    --hostname openldap-host\\\n    --network bridge \\\n    osixia/openldap\n\ndocker run \\\n    -p 8081:80 \\\n    --privileged \\\n    --name phpldapadmin \\\n    --env PHPLDAPADMIN_HTTPS=false \\\n    --env PHPLDAPADMIN_LDAP_HOSTS=192.168.x.xxx  \\\n    --detach osixia/phpldapadmin\n\ndocker run --name keycloak_test -d -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=changeME quay.io/keycloak/keycloak:latest start-dev\n\n\u52a0\u4e0a grafana \u5beb\u6210 docker-compose file\n\n\n')),(0,r.kt)("p",null,"base on gpt \u56de\u7b54\u4e26\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'version: "3"\n\nservices:\n  openldap:\n    image: osixia/openldap\n    container_name: openldap\n    environment:\n      LDAP_ORGANISATION: "imysh"\n      LDAP_DOMAIN: "imysh.com"\n      LDAP_ADMIN_PASSWORD: "123456"\n    ports:\n      - "389:389"\n      - "636:636"\n    volumes:\n      - "./data/usr/local/ldap:/usr/local/ldap"\n      - "./data/openldap/ldap:/var/lib/ldap"\n      - "./data/openldap/slapd.d:/etc/ldap/slapd.d"\n    networks:\n      - bridge\n\n  phpldapadmin:\n    image: osixia/phpldapadmin\n    container_name: phpldapadmin\n    environment:\n      PHPLDAPADMIN_HTTPS: "false"\n      PHPLDAPADMIN_LDAP_HOSTS: "openldap"\n    ports:\n      - "8081:80"\n    privileged: true\n    networks:\n      - bridge\n\n  # keycloak_test:\n  #   image: quay.io/keycloak/keycloak:latest\n  #   container_name: keycloak_test\n  #   environment:\n  #     KEYCLOAK_ADMIN: "admin"\n  #     KEYCLOAK_ADMIN_PASSWORD: "changeME"\n  #   ports:\n  #     - "8080:8080"\n  #   networks:\n  #     - bridge\n  #   command: start-dev\n\n  # grafana:\n  #   image: grafana/grafana:latest\n  #   container_name: grafana\n  #   ports:\n  #     - "3000:3000"\n  #   networks:\n  #     - bridge\n\nnetworks:\n  bridge:\n    driver: bridge\n\n')),(0,r.kt)("p",null,"goto ip:8081\n\u767b\u5165\u4f7f\u7528 cn=admin,dc=imysh,dc=com  /  123456"))}s.isMDXComponent=!0}}]);