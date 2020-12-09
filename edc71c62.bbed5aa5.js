(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),i=(a(0),a(131)),b={id:"servicos",title:"Servi\xe7os",sidebar_label:"Servi\xe7os"},o={unversionedId:"servicos",id:"servicos",isDocsHomePage:!1,title:"Servi\xe7os",description:"Dentre os servi\xe7os (web services) oferecidos pela RNDS, dois s\xe3o de seguran\xe7a e os demais enviam informa\xe7\xf5es para a RNDS ou recuperam informa\xe7\xf5es de sa\xfade disponibilizadas pela RNDS.",source:"@site/docs\\servicos.md",slug:"/servicos",permalink:"/rnds/docs/servicos",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/servicos.md",version:"current",sidebar_label:"Servi\xe7os",sidebar:"someSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/rnds/docs/introducao"},next:{title:"Defini\xe7\xf5es",permalink:"/rnds/docs/definicoes"}},c=[{value:"Seguran\xe7a (<em>web services</em>)",id:"seguran\xe7a-web-services",children:[]},{value:"Sa\xfade (<em>web services</em>)",id:"sa\xfade-web-services",children:[]}],s={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Dentre os servi\xe7os (",Object(i.b)("em",{parentName:"p"},"web services"),") oferecidos pela RNDS, dois s\xe3o de ",Object(i.b)("em",{parentName:"p"},"seguran\xe7a")," e os demais enviam informa\xe7\xf5es para a RNDS ou recuperam informa\xe7\xf5es de sa\xfade disponibilizadas pela RNDS."),Object(i.b)("p",null,"Os servi\xe7os de seguran\xe7a s\xe3o intermedi\xe1rios, \xe9 a partir deles que se obt\xe9m\na autentica\xe7\xe3o necess\xe1ria para acesso aos demais servi\xe7os. Em particular,\nsubstituem o emprego de autentica\xe7\xe3o baseada em usu\xe1rio/senha por certificado digital (estrat\xe9gia considerada mais segura)."),Object(i.b)("p",null,"Os servi\xe7os (",Object(i.b)("em",{parentName:"p"},"web services"),") de sa\xfade implementam a troca de informa\xe7\xe3o em sa\xfade. Estes servi\xe7os s\xe3o o meio para se atingir a desejada interoperabilidade em sa\xfade no Brasil."),Object(i.b)("p",null,"Abaixo segue uma vis\xe3o panor\xe2mica dos servi\xe7os oferecidos. Desenvolvedores, contudo, ter\xe3o que ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../ti/conhecer"}),"interagir e conhecer detalhes"),"."),Object(i.b)("h3",{id:"seguran\xe7a-web-services"},"Seguran\xe7a (",Object(i.b)("em",{parentName:"h3"},"web services"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"M\xe9todo"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Path"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o\x7f"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/token"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Obt\xe9m ",Object(i.b)("em",{parentName:"td"},"token")," de acesso")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/contexto-atendimento"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Obt\xe9m ",Object(i.b)("em",{parentName:"td"},"token")," para contexto de atendimento")))),Object(i.b)("h3",{id:"sa\xfade-web-services"},"Sa\xfade (",Object(i.b)("em",{parentName:"h3"},"web services"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"M\xe9todo"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Path"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Descri\xe7\xe3o\x7f"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/fhir/r4/Patient"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Obter informa\xe7\xf5es sobre paciente.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/fhir/r4/Organization"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Obter informa\xe7\xf5es sobre um estabelecimento de sa\xfade ou outra organiza\xe7\xe3o.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/fhir/r4/Practitioner"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Obter informa\xe7\xf5es sobre profissional de sa\xfade")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GET"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/fhir/r4/PractitionerRole"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Obter informa\xe7\xf5es sobre pap\xe9is desempenhados por profissionais de sa\xfade.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/fhir/r4/Bundle"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Enviar resultado de exame")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"POST"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"/api/fhir/r4/Bundle"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Substituir resultado de exame")))))}l.isMDXComponent=!0},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,u=d["".concat(b,".").concat(m)]||d[m]||p[m]||i;return a?n.a.createElement(u,o(o({ref:t},s),{},{components:a})):n.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var s=2;s<i;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);