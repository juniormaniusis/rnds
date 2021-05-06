(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,o,r){"use strict";r.d(o,"a",(function(){return l})),r.d(o,"b",(function(){return m}));var n=r(0),t=r.n(n);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function c(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=t.a.createContext({}),d=function(e){var o=t.a.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},l=function(e){var o=d(e.components);return t.a.createElement(u.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},b=t.a.forwardRef((function(e,o){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||p[b]||a;return r?t.a.createElement(m,s(s({ref:o},u),{},{components:r})):t.a.createElement(m,s({ref:o},u))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},74:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return i})),r.d(o,"metadata",(function(){return s})),r.d(o,"toc",(function(){return c})),r.d(o,"default",(function(){return d}));var n=r(3),t=r(7),a=(r(0),r(144)),i={id:"erros",title:"Erros",sidebar_label:"Erros"},s={unversionedId:"publico-alvo/ti/erros",id:"publico-alvo/ti/erros",isDocsHomePage:!1,title:"Erros",description:"Requisi\xe7\xf5es",source:"@site/docs/publico-alvo/ti/erros.md",slug:"/publico-alvo/ti/erros",permalink:"/rnds/docs/publico-alvo/ti/erros",version:"current",lastUpdatedAt:1611526727,formattedLastUpdatedAt:"1/24/2021",sidebar_label:"Erros",sidebar:"someSidebar",previous:{title:"Requisi\xe7\xf5es",permalink:"/rnds/docs/publico-alvo/ti/requisicoes"},next:{title:"Autentica\xe7\xe3o",permalink:"/rnds/docs/publico-alvo/ti/autenticacao"}},c=[{value:"Requisi\xe7\xf5es",id:"requisi\xe7\xf5es",children:[]},{value:"Erros",id:"erros",children:[]}],u={toc:c};function d(e){var o=e.components,r=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:o,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"requisi\xe7\xf5es"},"Requisi\xe7\xf5es"),Object(a.b)("h4",{id:"obter-token"},"Obter token"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "longa sequencia aqui. Este token ser\xe1 necess\xe1rio, o valor deste campo, em todas as demais requisi\xe7\xf5es. Ele ser\xe1 fornecido por meio do header X-Authorization-Server, conforme detalhado abaixo.",\n  "scope": "read write",\n  "token_type": "jwt",\n  "expires_in": 1800000\n}\n')),Object(a.b)("p",null,"O valor da propriedade ",Object(a.b)("strong",{parentName:"p"},"access_token")," ser\xe1 empregado em todas as demais requisi\xe7\xf5es. As requisi\xe7\xf5es fazem uso deste valor por\nmeio do header ",Object(a.b)("strong",{parentName:"p"},"X-Authorization-Server"),". Em particular, o valor deste ",Object(a.b)("em",{parentName:"p"},"header")," deve ser fornecido no seguinte formato:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"X-Authorization-Server: Bearer <valor-de-access-token-aqui>\n")),Object(a.b)("p",null,"Conv\xe9m observar que esta n\xe3o \xe9 a \xfanica informa\xe7\xe3o de seguran\xe7a exigida, outro ",Object(a.b)("em",{parentName:"p"},"header"),", ",Object(a.b)("strong",{parentName:"p"},"Authorization"),", cujo valor deve ser o CNS do requisitante, tamb\xe9m deve ser fornecido nas requisi\xe7\xf5es aos servi\xe7os ",Object(a.b)("em",{parentName:"p"},"EHR"),"."),Object(a.b)("h4",{id:"c\xf3digo-inv\xe1lido-cns"},"C\xf3digo inv\xe1lido CNS"),Object(a.b)("p",null,"Na consulta por profissional via CNS, se o c\xf3digo CNS \xe9 inv\xe1lido, por exemplo, ent\xe3o tem-se o resultado abaixo:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "Resource Practitioner/<codivo-invalido> is not known"\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"submeter-bundle-com-identificador-inv\xe1lido-do-solicitante"},"Submeter bundle com identificador inv\xe1lido do solicitante"),Object(a.b)("p",null,"O identificador do solicitante, ap\xf3s devidamente cadastrado, pode ser recuperado conforme ilustrado abaixo, pelo Portal de Servi\xe7os:"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1735792/90821002-9eb30f80-e308-11ea-8636-58645a1fa3c2.png",alt:"image"})),Object(a.b)("p",null,'O identificador que acima segue ocultado, deve ser fornecido no lugar do texto "qualquer", no trecho da requisi\xe7\xe3o (bundle),\nconforme ilustrado abaixo:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    "identifier": {\n        "system": "http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-qualquer",\n        "value": "valor-unico-do-bundle-para-o-lab"\n    },\n')),Object(a.b)("p",null,'Se o valor "qualquer" n\xe3o \xe9 substitu\xeddo pelo identificador do solicitante, a resposta ser\xe1 aquela abaixo:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "security",\n      "diagnostics": "(EHR-ERR881) Voc\xea n\xe3o possui autoriza\xe7\xe3o para utilizar esse sistema de origem: http://www.saude.gov.br/fhir/r4/NamingSystem/BRRNDS-qualquer"\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"422-submeter-recurso-com-n\xfamero-que-n\xe3o-\xe9-\xfanico-para-o-laborat\xf3rio"},"(422) Submeter recurso com n\xfamero que n\xe3o \xe9 \xfanico para o laborat\xf3rio"),Object(a.b)("p",null,"Este identificador \xe9 aquele fornecido por meio da propriedade ",Object(a.b)("strong",{parentName:"p"},"identifier.value")," do ",Object(a.b)("em",{parentName:"p"},"bundle"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "(EHR-ERR866) O identifier informado j\xe1 foi utilizado para cadastrar outro documento e n\xe3o pode ser repetido."\n    }\n  ]\n}\n')),Object(a.b)("h3",{id:"erros"},"Erros"),Object(a.b)("h4",{id:"requisi\xe7\xf5es-dependem-de-valores-de-entrada"},"Requisi\xe7\xf5es dependem de valores de entrada"),Object(a.b)("p",null,"A consulta a um estabelecimento de sa\xfade via seu CNES exige que o c\xf3digo correspondente seja fornecido na URL, por exemplo,\n",Object(a.b)("inlineCode",{parentName:"p"},"https://ehr-services.hmg.saude.gov.br/api;fhir/r4/Organization/2337991"),". Se o c\xf3digo, neste exemplo, ",Object(a.b)("inlineCode",{parentName:"p"},"2337991")," ou outro n\xe3o\n\xe9 fornecido, ent\xe3o voc\xea receber\xe1 como resposta o conte\xfado abaixo:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "processing",\n      "diagnostics": "Invalid request: The FHIR endpoint on this server does not know how to handle GET operation[Organization/] with parameters [[]]"\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"requisi\xe7\xe3o-com-consist\xeancia-verificada"},"Requisi\xe7\xe3o com consist\xeancia verificada"),Object(a.b)("p",null,"A consulta por CNES retorna a resposta abaixo se o profissional de sa\xfade em nome do qual a\nrequisi\xe7\xe3o \xe9 feita (valor omitido na resposta abaixo) n\xe3o possui v\xednculo com a credencial tamb\xe9m omitida."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "resourceType": "OperationOutcome",\n  "issue": [\n    {\n      "severity": "error",\n      "code": "security",\n      "diagnostics": "(EHR-ERR906) Profissional CNS <numero aqui> n\xe3o autorizado, pois n\xe3o possui v\xednculo CBO autorizado em nenhum dos estabelecimentos autorizados para a credencial <numero aqui>."\n    }\n  ]\n}\n')),Object(a.b)("h4",{id:"401-token-empregado-para-a-requisi\xe7\xe3o-expirou"},"(401) Token empregado para a requisi\xe7\xe3o expirou"),Object(a.b)("p",null,"Lembre-se de que o ",Object(a.b)("em",{parentName:"p"},"token"),", quando obtido, tem uma validade de 30 minutos. Ap\xf3s estes 30 minutos\nqualquer requisi\xe7\xe3o que o utilize ir\xe1 retornar algo similar ao conte\xfado abaixo:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'{\n    "resourceType": "OperationOutcome",\n    "issue": [\n        {\n            "severity": "error",\n            "code": "security",\n            "diagnostics": "(EHR-ERR882) O token de certificado usado para autorizar o acesso n\xe3o \xe9 v\xe1lido. JWT expired at 2020-08-19T23:54:28Z. Current time: 2020-08-20T11:00:27Z, a difference of 39959356 milliseconds.  Allowed clock skew: 0 milliseconds."\n        }\n    ]\n}\n')),Object(a.b)("h4",{id:"422-valor-de-status-diferente-de-final"},'(422) Valor de "status" diferente de "final"'),Object(a.b)("p",null,"Se tentar submeter um laudo, cujo ",Object(a.b)("strong",{parentName:"p"},"status")," \xe9 diferente de ",Object(a.b)("strong",{parentName:"p"},"final"),", conforme ilustrado abaixo"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1735792/91478272-f5bf6400-e875-11ea-98ab-ac7961384967.png",alt:"image"})),Object(a.b)("p",null,"e compat\xedvel com o perfil ",Object(a.b)("a",{parentName:"p",href:"https://simplifier.net/redenacionaldedadosemsaude/brestadoobservacao-1.0"},"Estado da Observa\xe7\xe3o"),", ter\xe1 como resposta"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'{\n    "resourceType": "OperationOutcome",\n    "issue": [\n        {\n            "severity": "error",\n            "code": "processing",\n            "diagnostics": "(EHR-ERR924) Ao enviar um documento \xe9 obrigat\xf3rio utilizar o status: final"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);