(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{108:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var o=t(3),n=t(7),a=(t(0),t(144)),i={id:"fhirserver",title:"Servidor FHIR",sidebar_label:"Servidor FHIR"},c={unversionedId:"rnds/tools/fhirserver",id:"rnds/tools/fhirserver",isDocsHomePage:!1,title:"Servidor FHIR",description:"A experimenta\xe7\xe3o com o FHIR pode ser feita com v\xe1rios servidores de acesso livre. Por outro lado, h\xe1 possibilidade",source:"@site/docs/rnds/tools/fhirserver.md",slug:"/rnds/tools/fhirserver",permalink:"/rnds/docs/rnds/tools/fhirserver",version:"current",lastUpdatedAt:1612482247,formattedLastUpdatedAt:"2/4/2021",sidebar_label:"Servidor FHIR",sidebar:"someSidebar",previous:{title:"Valida\xe7\xe3o de Recursos",permalink:"/rnds/docs/rnds/tools/validacao"},next:{title:"Objetivo",permalink:"/rnds/docs/rel/objetivo-rel"}},l=[{value:"Servidor FHIR local",id:"servidor-fhir-local",children:[]}],s={toc:l};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A experimenta\xe7\xe3o com o FHIR pode ser feita com v\xe1rios servidores de ",Object(a.b)("a",{parentName:"p",href:"../tecnologias#implementa%C3%A7%C3%A3o-do-fhir"},"acesso livre"),". Por outro lado, h\xe1 possibilidade\nde controle total em um servidor local."),Object(a.b)("h2",{id:"servidor-fhir-local"},"Servidor FHIR local"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Fa\xe7a o download do aplicativo ",Object(a.b)("em",{parentName:"p"},"Command Line Interface Tool for HAPI FHIR"),". A vers\xe3o 5.1.0 pode ser baixada ",Object(a.b)("a",{parentName:"p",href:"https://github.com/hapifhir/hapi-fhir/releases/download/v5.1.0/hapi-fhir-5.1.0-cli.zip"},"aqui"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Extraia o conte\xfado do arquivo .zip. Isto pode ser feito com o utilit\xe1rio ",Object(a.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/technotes/tools/windows/jar.html"},"jar")," que acompanha o JDK. Possivelmente com o comando",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"jar xvf hapi-fhir-5.1.0-cli.zip"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Coloque o servidor FHIR em execu\xe7\xe3o com o comando abaixo. Consulte detalhes das op\xe7\xf5es ",Object(a.b)("a",{parentName:"p",href:"https://hapifhir.io/hapi-fhir/docs/tools/hapi_fhir_cli.html"},"aqui"),".",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"hapi-fhir-cli run-server -v r4")))))}p.isMDXComponent=!0},144:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),p=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=o,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?n.a.createElement(f,c(c({ref:r},s),{},{components:t})):n.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);