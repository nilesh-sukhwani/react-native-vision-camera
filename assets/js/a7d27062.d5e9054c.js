"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[825],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return v}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(i),c=n,v=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return i?a.createElement(v,o(o({ref:t},d),{},{components:i})):a.createElement(v,o({ref:t},d))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},1902:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var a=i(3117),n=(i(7294),i(3905));const r={id:"CameraDeviceFormat",title:"CameraDeviceFormat",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/CameraDeviceFormat",id:"api/interfaces/CameraDeviceFormat",title:"CameraDeviceFormat",description:"A Camera Device's video format. Do not create instances of this type yourself, only use Camera.getAvailableCameraDevices().",source:"@site/docs/api/interfaces/CameraDeviceFormat.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CameraDeviceFormat",permalink:"/docs/api/interfaces/CameraDeviceFormat",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CameraDeviceFormat",title:"CameraDeviceFormat",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"CameraDevice",permalink:"/docs/api/interfaces/CameraDevice"},next:{title:"CameraProps",permalink:"/docs/api/interfaces/CameraProps"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"autoFocusSystem",id:"autofocussystem",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"colorSpaces",id:"colorspaces",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"fieldOfView",id:"fieldofview",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"frameRateRanges",id:"framerateranges",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"isHighestPhotoQualitySupported",id:"ishighestphotoqualitysupported",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"maxISO",id:"maxiso",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"maxZoom",id:"maxzoom",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"minISO",id:"miniso",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"photoHeight",id:"photoheight",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"photoWidth",id:"photowidth",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"pixelFormat",id:"pixelformat",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"supportsPhotoHDR",id:"supportsphotohdr",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"supportsVideoHDR",id:"supportsvideohdr",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"videoHeight",id:"videoheight",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"videoStabilizationModes",id:"videostabilizationmodes",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"videoWidth",id:"videowidth",level:3},{value:"Defined in",id:"defined-in-15",level:4}],d={toc:s},m="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A Camera Device's video format. Do not create instances of this type yourself, only use ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/classes/Camera#getavailablecameradevices"},(0,n.kt)("inlineCode",{parentName:"a"},"Camera.getAvailableCameraDevices()")),"."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"autofocussystem"},"autoFocusSystem"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"autoFocusSystem"),": ",(0,n.kt)("a",{parentName:"p",href:"../#autofocussystem"},(0,n.kt)("inlineCode",{parentName:"a"},"AutoFocusSystem"))),(0,n.kt)("p",null,"Specifies this format's auto focus system."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L170"},"CameraDevice.ts:170")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"colorspaces"},"colorSpaces"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"colorSpaces"),": ",(0,n.kt)("a",{parentName:"p",href:"../#colorspace"},(0,n.kt)("inlineCode",{parentName:"a"},"ColorSpace")),"[]"),(0,n.kt)("p",null,"The available color spaces."),(0,n.kt)("p",null,"Note: On Android, this will always be only ",(0,n.kt)("inlineCode",{parentName:"p"},'["yuv"]')),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L154"},"CameraDevice.ts:154")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fieldofview"},"fieldOfView"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"fieldOfView"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The video field of view in degrees"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L144"},"CameraDevice.ts:144")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"framerateranges"},"frameRateRanges"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"frameRateRanges"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/interfaces/FrameRateRange"},(0,n.kt)("inlineCode",{parentName:"a"},"FrameRateRange")),"[]"),(0,n.kt)("p",null,"All available frame rate ranges. You can query this to find the highest frame rate available"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L166"},"CameraDevice.ts:166")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ishighestphotoqualitysupported"},"isHighestPhotoQualitySupported"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"isHighestPhotoQualitySupported"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"A boolean value specifying whether this format supports the highest possible photo quality that can be delivered on the current platform."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Platform"))),(0,n.kt)("p",null,"iOS 13.0+"),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L132"},"CameraDevice.ts:132")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"maxiso"},"maxISO"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"maxISO"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Maximum supported ISO value"),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L136"},"CameraDevice.ts:136")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"maxzoom"},"maxZoom"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"maxZoom"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The maximum zoom factor (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"128"),")"),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L148"},"CameraDevice.ts:148")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"miniso"},"minISO"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"minISO"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Minimum supported ISO value"),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L140"},"CameraDevice.ts:140")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"photoheight"},"photoHeight"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"photoHeight"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The height of the highest resolution a still image (photo) can be produced in"),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L114"},"CameraDevice.ts:114")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"photowidth"},"photoWidth"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"photoWidth"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The width of the highest resolution a still image (photo) can be produced in"),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L118"},"CameraDevice.ts:118")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"pixelformat"},"pixelFormat"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"pixelFormat"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"PixelFormat")),(0,n.kt)("p",null,"Specifies this format's pixel format. The pixel format specifies how the individual pixels are interpreted as a visual image."),(0,n.kt)("p",null,"The most common format is ",(0,n.kt)("inlineCode",{parentName:"p"},"420v"),". Some formats (like ",(0,n.kt)("inlineCode",{parentName:"p"},"x420"),") are not compatible with some frame processor plugins (e.g. MLKit)"),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L180"},"CameraDevice.ts:180")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"supportsphotohdr"},"supportsPhotoHDR"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"supportsPhotoHDR"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Specifies whether this format supports HDR mode for photo capture"),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L162"},"CameraDevice.ts:162")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"supportsvideohdr"},"supportsVideoHDR"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"supportsVideoHDR"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Specifies whether this format supports HDR mode for video capture"),(0,n.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L158"},"CameraDevice.ts:158")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"videoheight"},"videoHeight"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"videoHeight"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The video resolutions's height"),(0,n.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L122"},"CameraDevice.ts:122")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"videostabilizationmodes"},"videoStabilizationModes"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"videoStabilizationModes"),": ",(0,n.kt)("a",{parentName:"p",href:"../#videostabilizationmode"},(0,n.kt)("inlineCode",{parentName:"a"},"VideoStabilizationMode")),"[]"),(0,n.kt)("p",null,"All supported video stabilization modes"),(0,n.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L174"},"CameraDevice.ts:174")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"videowidth"},"videoWidth"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"videoWidth"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The video resolution's width"),(0,n.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/CameraDevice.ts#L126"},"CameraDevice.ts:126")))}u.isMDXComponent=!0}}]);