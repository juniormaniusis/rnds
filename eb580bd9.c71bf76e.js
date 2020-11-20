(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{101:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return d})),t.d(r,"default",(function(){return s}));var a=t(2),n=t(6),o=(t(0),t(112)),i={id:"glossario",title:"Gloss\xe1rio",sidebar_label:"Gloss\xe1rio"},c={unversionedId:"intro/glossario",id:"intro/glossario",isDocsHomePage:!1,title:"Gloss\xe1rio",description:"Certificado digital",source:"@site/docs\\intro\\glossario.md",slug:"/intro/glossario",permalink:"/rnds/docs/intro/glossario",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/intro/glossario.md",version:"current",sidebar_label:"Gloss\xe1rio",sidebar:"someSidebar",previous:{title:"Contexto",permalink:"/rnds/docs/intro/contexto"},next:{title:"Resultado de Exame Laboratorial",permalink:"/rnds/docs/rnds/resultado"}},d=[{value:"Certificado digital",id:"certificado-digital",children:[]},{value:"FHIR",id:"fhir",children:[]},{value:"ICP-Brasil",id:"icp-brasil",children:[]},{value:"Payload",id:"payload",children:[]},{value:"RNDS",id:"rnds",children:[]},{value:"TI",id:"ti",children:[]}],l={rightToc:d};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"certificado-digital"},"Certificado digital"),Object(o.b)("p",null,"Identidade de pessoa f\xedsica (e-CPF) ou de pessoa jur\xeddica (e-CNPJ) no mundo digital."),Object(o.b)("h3",{id:"fhir"},"FHIR"),Object(o.b)("p",null,"FHIR \xe9 acr\xf4nimo de ",Object(o.b)("em",{parentName:"p"},"Fast Healthcare Interoperability Resources"),". Conforme o ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://hl7.org/fhir/"}),"HL7 FHIR"),', FHIR \xe9 "um padr\xe3o para troca de dados em sa\xfade".'),Object(o.b)("h3",{id:"icp-brasil"},"ICP-Brasil"),Object(o.b)("p",null,"Infraestrutura de Chaves P\xfablicas Brasileira. Conforme o Instituto Nacional de Tecnologia da Informa\xe7\xe3o (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gov.br/iti/pt-br/assuntos/icp-brasil"}),"ITI"),'), a ICP-Brasil "\xe9 uma cadeia hier\xe1rquica de confian\xe7a que viabiliza a emiss\xe3o de certificados digitais para identifica\xe7\xe3o virtual do cidad\xe3o."'),Object(o.b)("h3",{id:"payload"},"Payload"),Object(o.b)("p",null,"Conte\xfado efetivo ou dado propriamente dito, a ser transferido, de uma mensagem.\nConsulte a defini\xe7\xe3o na ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Payload_(computing)"}),"wikipedia"),"."),Object(o.b)("h3",{id:"rnds"},"RNDS"),Object(o.b)("p",null,"Rede Nacional de Dados em Sa\xfade. O portal da RNDS \xe9 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rnds.saude.gov.br"}),"https://rnds.saude.gov.br"),"."),Object(o.b)("h3",{id:"ti"},"TI"),Object(o.b)("p",null,"Acr\xf4nimo de Tecnologia da Informa\xe7\xe3o. Tamb\xe9m \xe9 comum o emprego de TIC (Tecnologias da Informa\xe7\xe3o e Comunica\xe7\xe3o)."))}s.isMDXComponent=!0},112:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),s=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?n.a.createElement(f,c(c({ref:r},l),{},{components:t})):n.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);