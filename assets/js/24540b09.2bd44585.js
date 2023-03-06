"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[891],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},804:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=r(3117),i=(r(7294),r(3905));const a={id:"TemporaryFile",title:"TemporaryFile",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/TemporaryFile",id:"api/interfaces/TemporaryFile",title:"TemporaryFile",description:"Represents a temporary file in the local filesystem.",source:"@site/docs/api/interfaces/TemporaryFile.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TemporaryFile",permalink:"/docs/api/interfaces/TemporaryFile",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TemporaryFile",title:"TemporaryFile",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"TakeSnapshotOptions",permalink:"/docs/api/interfaces/TakeSnapshotOptions"},next:{title:"VideoFile",permalink:"/docs/api/interfaces/VideoFile"}},l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"path",id:"path",level:3},{value:"Defined in",id:"defined-in",level:4}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a temporary file in the local filesystem."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TemporaryFile"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PhotoFile"},(0,i.kt)("inlineCode",{parentName:"a"},"PhotoFile"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/VideoFile"},(0,i.kt)("inlineCode",{parentName:"a"},"VideoFile"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The path of the file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want to consume this file (e.g. for displaying it in an ",(0,i.kt)("inlineCode",{parentName:"p"},"<Image>")," component), you might have to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"file://")," prefix.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note:")," This file might get deleted once the app closes because it lives in the temp directory."))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/TemporaryFile.ts#L12"},"TemporaryFile.ts:12")))}m.isMDXComponent=!0}}]);