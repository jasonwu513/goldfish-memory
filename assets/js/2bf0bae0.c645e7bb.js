"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[8879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,y=c["".concat(i,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},l="yt-dlp",p={unversionedId:"Video/yt-dlp/intro",id:"Video/yt-dlp/intro",title:"yt-dlp",description:"\u4ecb\u7d39",source:"@site/docs/Video/yt-dlp/intro.md",sourceDirName:"Video/yt-dlp",slug:"/Video/yt-dlp/intro",permalink:"/goldfish-memory/docs/Video/yt-dlp/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Video/yt-dlp/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Loki",permalink:"/goldfish-memory/docs/Software/log/loki"}},i={},d=[{value:"\u4ecb\u7d39",id:"\u4ecb\u7d39",level:2},{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4e0b\u8f09\u5f71\u7247",id:"\u4e0b\u8f09\u5f71\u7247",level:3},{value:"\u50c5\u4e0b\u8f09\u97f3\u8a0a",id:"\u50c5\u4e0b\u8f09\u97f3\u8a0a",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yt-dlp"},"yt-dlp"),(0,a.kt)("h2",{id:"\u4ecb\u7d39"},"\u4ecb\u7d39"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp"},"yt-dlp")),(0,a.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,a.kt)("p",null,"Global install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install yt-dlp\n")),(0,a.kt)("p",null,"venv install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir yt-dlp\ncd yt-dlp \npython3 -m venv yt-dlp-env\nsource yt-dlp-env/bin/activate\npip3 install xyz\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u4e0b\u8f09\u5f71\u7247"},"\u4e0b\u8f09\u5f71\u7247"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp --output "%(title)s.%(ext)s" --embed-thumbnail --add-metadata --merge-output-format mp4 \u300c\u5f71\u7247\u7db2\u5740\u300d\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import yt_dlp\n\nyt_opts = {\n    'format': 'bestvideo+bestaudio/best',\n    'outtmpl': '%(title)s.%(ext)s',\n    'embed_thumbnail': True,\n    'add_metadata': True,\n    'merge_output_format': 'mp4'\n}\n\nwith yt_dlp.YoutubeDL(yt_opts) as ydl:\n    ydl.download(['\u5f71\u7247\u7db2\u5740'])\n")),(0,a.kt)("h2",{id:"\u50c5\u4e0b\u8f09\u97f3\u8a0a"},"\u50c5\u4e0b\u8f09\u97f3\u8a0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp --output "%(title)s.%(ext)s" --embed-thumbnail --add-metadata --extract-audio --audio-format mp3 --audio-quality 320K \u300c\u5f71\u7247\u7db2\u5740\u300d\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import yt_dlp\n\nyt_opts = {\n    'format': 'bestaudio/best',\n    'outtmpl': '%(title)s.%(ext)s',\n    'extract_audio': True,\n    'audio_format': 'mp3',  # Ensure audio is converted to MP3\n    'audio_quality': '320K',\n    'postprocessors': [\n        {  # Extract and convert audio to mp3 using ffmpeg\n            'key': 'FFmpegExtractAudio',\n            'preferredcodec': 'mp3',\n            'preferredquality': '320',\n        },\n        {  # Embed thumbnail in mp3 file\n            'key': 'FFmpegMetadata',\n        },\n        {  # Embed metadata in mp3 file\n            'key': 'EmbedThumbnail',\n        }\n    ],\n}\n\nwith yt_dlp.YoutubeDL(yt_opts) as ydl:\n    ydl.download(['\u5f71\u7247\u7db2\u5740'])\n")),(0,a.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ivonblog.com/posts/yt-dlp-usage/"},"yt-dlp-usage"))))}s.isMDXComponent=!0}}]);