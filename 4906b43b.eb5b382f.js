(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,b=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(b,".").concat(m)]||p[m]||l[m]||o;return a?n.a.createElement(u,i(i({ref:t},d),{},{components:a})):n.a.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,b=new Array(o);b[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var d=2;d<o;d++)b[d]=a[d];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},202:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ambientes-eb0701a7b14da3092a63fd39aac117f3.png"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var r=a(2),n=a(6),o=(a(0),a(106)),b={id:"ambientes",title:"Ambientes",sidebar_label:"Ambientes"},i={unversionedId:"rnds/ambientes",id:"rnds/ambientes",isDocsHomePage:!1,title:"Ambientes",description:"O padr\xe3o FHIR, adotado pela RNDS, possui uma RESTFul API bem-definida.",source:"@site/docs\\rnds\\ambientes.md",slug:"/rnds/ambientes",permalink:"/rnds/docs/rnds/ambientes",editUrl:"https://github.com/kyriosdata/rnds/edit/master/guia/docs/rnds/ambientes.md",version:"current",sidebar_label:"Ambientes",sidebar:"someSidebar",previous:{title:"Resultado de Exame Laboratorial",permalink:"/rnds/docs/rnds/resultado"},next:{title:"Ecossistema FHIR",permalink:"/rnds/docs/rnds/tecnologias"}},s=[{value:"Ambiente de homologa\xe7\xe3o (endere\xe7os)",id:"ambiente-de-homologa\xe7\xe3o-endere\xe7os",children:[]},{value:"Ambiente de produ\xe7\xe3o (endere\xe7os)",id:"ambiente-de-produ\xe7\xe3o-endere\xe7os",children:[]}],d={rightToc:s};function c(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,b,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O padr\xe3o FHIR, adotado pela RNDS, possui uma RESTFul API bem-definida.\nO Software de Integra\xe7\xe3o a ser criado por um laborat\xf3rio, portanto, far\xe1\nuso desta API, disponibilizada em um endere\xe7o, para se integrar \xe0 RNDS."),Object(o.b)("p",null,"O uso da API, contudo, depende de um ",Object(o.b)("em",{parentName:"p"},"token")," de acesso, obtido em um outro\nendere\xe7o. Este ",Object(o.b)("em",{parentName:"p"},"token")," \xe9 parte da seguran\xe7a, ele autentica quem est\xe1\nrealizando a requisi\xe7\xe3o. A obten\xe7\xe3o deste ",Object(o.b)("em",{parentName:"p"},"token")," exige a disponibilidade\ndo Certificado Digital do laborat\xf3rio em quest\xe3o, ou seja, um certificado\nICP-Brasil (e-CPF ou e-CNPJ)."),Object(o.b)("p",null,"Adicionalmente, a RNDS oferece dois ambientes, um de homologa\xe7\xe3o e outro de produ\xe7\xe3o.\nCada um deles inclui um endere\xe7o para obten\xe7\xe3o do ",Object(o.b)("em",{parentName:"p"},"token")," de acesso (",Object(o.b)("em",{parentName:"p"},"Auth"),") e\noutro para os servi\xe7os (",Object(o.b)("em",{parentName:"p"},"EHR"),") propriamente ditos para troca de informa\xe7\xf5es em sa\xfade, conforme ilustrado abaixo."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:a(202).default})),Object(o.b)("h3",{id:"ambiente-de-homologa\xe7\xe3o-endere\xe7os"},"Ambiente de homologa\xe7\xe3o (endere\xe7os)"),Object(o.b)("p",null,"O ambiente de homologa\xe7\xe3o existe para testes e experimenta\xe7\xf5es."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Fun\xe7\xe3o"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Endere\xe7o"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Auth"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"https",Object(o.b)("span",null,":"),"//ehr-auth-hmg.saude.gov.br/api/token"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EHR"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"https",Object(o.b)("span",null,":"),"//ehr-services.hmg.saude.gov.br/api"))))),Object(o.b)("h3",{id:"ambiente-de-produ\xe7\xe3o-endere\xe7os"},"Ambiente de produ\xe7\xe3o (endere\xe7os)"),Object(o.b)("p",null,'O ambiente de produ\xe7\xe3o coloca \xe0 disposi\xe7\xe3o os servi\xe7os que, de fato,\nenviam e recuperam informa\xe7\xf5es em sa\xfade "reais".'),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Fun\xe7\xe3o"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Endere\xe7o"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Auth"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"https",Object(o.b)("span",null,":"),"//ehr-auth.saude.gov.br/api/token"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EHR (por estado)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(o.b)("strong",{parentName:"td"},"https",Object(o.b)("span",null,":"),"//","<","UF",">","-ehr-services.saude.gov.br/api"))))),Object(o.b)("p",null,"O endere\xe7o para obten\xe7\xe3o do ",Object(o.b)("em",{parentName:"p"},"token")," de acesso \xe9 \xfanico para todo o Brasil.\nPor outro lado, h\xe1 um endere\xe7o para cada estado da federa\xe7\xe3o para requisi\xe7\xe3o\ndos servi\xe7os FHIR. Neste caso, cada laborat\xf3rio, conforme o CNES em quest\xe3o, far\xe1 uso do estado correspondente."),Object(o.b)("p",null,"O Laborat\xf3rio R\xf4mulo Rocha, por exemplo, localizado no Estado de Goi\xe1s (CNES 2337991), far\xe1 uso do\nendere\xe7o ",Object(o.b)("strong",{parentName:"p"},"https",Object(o.b)("span",null,":"),"//go-ehr-services.saude.gov.br/api"),". Em outro exemplo, se o laborat\xf3rio est\xe1 em Minas Gerais, ent\xe3o\no endere\xe7o que deve ser obrigatoriamente empregado \xe9 ",Object(o.b)("strong",{parentName:"p"},"https",Object(o.b)("span",null,":"),"//mg-ehr-services.saude.gov.br/api"),", e assim por diante."))}c.isMDXComponent=!0}}]);