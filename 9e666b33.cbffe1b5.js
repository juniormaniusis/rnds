(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(131)),l={id:"fhirpath",title:"FHIRPath",sidebar_label:"FHIRPath"},c={unversionedId:"rel/tools/fhirpath",id:"rel/tools/fhirpath",isDocsHomePage:!1,title:"FHIRPath",description:"Implementa\xe7\xf5es do FHIR retornam, em geral, representa\xe7\xf5es de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath. H\xe1 vasta informa\xe7\xe3o sobre o Jsonpath, como a possibilidade de execu\xe7\xe3o de consultas online, a especifica\xe7\xe3o detalhada, tutorial e at\xe9 aplica\xe7\xe3o em java) que executa Jsonpath.",source:"@site/docs\\rel\\tools\\fhirpath.md",slug:"/rel/tools/fhirpath",permalink:"/rnds/docs/rel/tools/fhirpath",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/rel/tools/fhirpath.md",version:"current",sidebar_label:"FHIRPath",sidebar:"someSidebar",previous:{title:"Bibliotecas",permalink:"/rnds/docs/rel/tools/bibliotecas"},next:{title:"keytool",permalink:"/rnds/docs/rel/tools/keytool"}},s=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Opera\xe7\xe3o trivial",id:"opera\xe7\xe3o-trivial",children:[]}],i={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementa\xe7\xf5es do FHIR retornam, em geral, representa\xe7\xf5es de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath. H\xe1 vasta informa\xe7\xe3o sobre o Jsonpath, como a possibilidade de execu\xe7\xe3o de consultas ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonpath.com/"}),"online"),", a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://goessner.net/articles/JsonPath/"}),"especifica\xe7\xe3o detalhada"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.baeldung.com/guide-to-jayway-jsonpath"}),"tutorial")," e at\xe9 aplica\xe7\xe3o em ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/json-path/JsonPath"}),"java"),") que executa Jsonpath."),Object(o.b)("p",null,"FHIRPath \xe9 similar a JsonPath, contudo, cont\xe9m fun\xe7\xf5es espec\xedficas para FHIR. FHIRPath tamb\xe9m \xe9 usado pela ",Object(o.b)("em",{parentName:"p"},"Clinical Quality Language")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cql.hl7.org/index.html"}),"CQL"),")."),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://hl7.org/fhirpath/"}),"defini\xe7\xe3o de FHIRPath")," tamb\xe9m est\xe1 dispon\xedvel, inclusive em ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/HL7/FHIRPath/blob/master/spec/index.adoc"}),"detalhes"),". "),Object(o.b)("p",null,"Consultas baseadas em FHIRPath podem ser executadas por meio do portal ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://clinfhir.com"}),"clinfhir"),". Adicionalmente, pode-se usar a implementa\xe7\xe3o ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/HL7/fhirpath.js"}),"fhirpath")," em Javascript, dentre outras op\xe7\xf5es."),Object(o.b)("p",null,"Esta implementa\xe7\xe3o \xe9 empregada nos exemplos fornecidos abaixo."),Object(o.b)("h3",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ git clone https://github.com/kyriosdata/rnds\n$ cd rnds/tools/fhirpath\n$ yarn install\n")),Object(o.b)("p",null,"Em projeto existente (depend\xeancias de desenvolvimento):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ yarn add fhirpath --dev\n")),Object(o.b)("h3",{id:"opera\xe7\xe3o-trivial"},"Opera\xe7\xe3o trivial"),Object(o.b)("p",null,"Contando quantas entradas possuem no documento ",Object(o.b)("strong",{parentName:"p"},"exemplo.json"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Qual o tipo do recurso?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "resourceType"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quando o ",Object(o.b)("em",{parentName:"li"},"Bundle")," foi atualizado pela \xfaltima vez?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "meta.lastUpdated"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Qual o identificador local (definido pelo laborat\xf3rio) do ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "identifier.value"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quantos recursos est\xe3o reunidos no ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ npm run fhirpath -- -f exemplo.json -e "entry.count()"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quais os tipos dos recursos reunidos no ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "entry.resource.resourceType"\n')))}p.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return a?n.a.createElement(m,c(c({ref:t},i),{},{components:a})):n.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);