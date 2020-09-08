(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),o=(a(0),a(98)),l={id:"fhirpath",title:"FHIRPath",sidebar_label:"FHIRPath"},c={unversionedId:"tools/fhirpath",id:"tools/fhirpath",isDocsHomePage:!1,title:"FHIRPath",description:"Implementa\xe7\xf5es do FHIR podem retornar representa\xe7\xf5es de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath (online, specification, tutorial, java).",source:"@site/docs\\tools\\fhirpath.md",slug:"/tools/fhirpath",permalink:"/rnds/docs/tools/fhirpath",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tools/fhirpath.md",version:"current",sidebar_label:"FHIRPath",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/rnds/docs/doc3"},next:{title:"Postman",permalink:"/rnds/docs/tools/postman"}},p=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Opera\xe7\xe3o trivial",id:"opera\xe7\xe3o-trivial",children:[]}],i={rightToc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Implementa\xe7\xf5es do FHIR podem retornar representa\xe7\xf5es de recursos em JSON. Neste caso, o JSON retornado pode ser consultado por meio de JsonPath (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonpath.com/"}),"online"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://goessner.net/articles/JsonPath/"}),"specification"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.baeldung.com/guide-to-jayway-jsonpath"}),"tutorial"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/json-path/JsonPath"}),"java"),")."),Object(o.b)("p",null,"FHIRPath \xe9 similar a JsonPath, contudo, cont\xe9m fun\xe7\xf5es espec\xedficas para FHIR."),Object(o.b)("p",null,"FHIRPath est\xe1 definido ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://hl7.org/fhirpath/"}),"aqui"),". Consulte ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/HL7/FHIRPath/blob/master/spec/index.adoc"}),"detalhes"),"). FHIRPath \xe9 usado pela ",Object(o.b)("em",{parentName:"p"},"Clinical Quality Language")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://cql.hl7.org/index.html"}),"CQL"),")."),Object(o.b)("p",null,"Consultas baseadas em FHIRPath podem ser executadas por meio do portal ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://clinfhir.com"}),"clinfhir"),". Adicionalmente, pode-se usar a implementa\xe7\xe3o ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/HL7/fhirpath.js"}),"fhirpath")," em Javascript, dentre outras\nop\xe7\xf5es."),Object(o.b)("p",null,"Esta implementa\xe7\xe3o \xe9 empregada nos exemplos fornecidos abaixo."),Object(o.b)("h3",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ git clone https://github.com/kyriosdata/rnds\n$ cd rnds/tools/fhirpath\n$ yarn install\n")),Object(o.b)("h3",{id:"opera\xe7\xe3o-trivial"},"Opera\xe7\xe3o trivial"),Object(o.b)("p",null,"Contando quantas entradas possuem no documento ",Object(o.b)("strong",{parentName:"p"},"exemplo.json"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Qual o tipo do recurso?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "resourceType"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quando o ",Object(o.b)("em",{parentName:"li"},"Bundle")," foi atualizado pela \xfaltima vez?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "meta.lastUpdated"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Qual o identificador local (definido pelo laborat\xf3rio) do ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "identifier.value"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quantos recursos est\xe3o reunidos no ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ npm run fhirpath -- -f exemplo.json -e "entry.count()"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Quais os tipos dos recursos reunidos no ",Object(o.b)("em",{parentName:"li"},"Bundle"),"?")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'$ yarn fhirpath -- -f exemplo.json -e "entry.resource.resourceType"\n')))}s.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=s(a),m=r,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return a?n.a.createElement(d,c(c({ref:t},i),{},{components:a})):n.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);