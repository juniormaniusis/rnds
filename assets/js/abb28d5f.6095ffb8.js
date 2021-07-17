(self.webpackChunkguia=self.webpackChunkguia||[]).push([[241],{3905:function(e,a,o){"use strict";o.d(a,{Zo:function(){return u},kt:function(){return m}});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),c=function(e){var a=t.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=c(e.components);return t.createElement(d.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||n;return o?t.createElement(f,i(i({ref:a},u),{},{components:o})):t.createElement(f,i({ref:a},u))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2704:function(e,a,o){"use strict";o.r(a),o.d(a,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=o(2122),r=o(9756),n=(o(7294),o(3905)),i=["components"],s={id:"introducao",title:"Introdu\xe7\xe3o",sidebar_label:"Introdu\xe7\xe3o"},d=void 0,c={unversionedId:"introducao",id:"introducao",isDocsHomePage:!1,title:"Introdu\xe7\xe3o",description:"Na perspectiva de um estabelecimento de sa\xfade, a Rede Nacional de Dados em Sa\xfade (RNDS) oferece servi\xe7os",source:"@site/docs/introducao.md",sourceDirName:".",slug:"/introducao",permalink:"/rnds/docs/introducao",version:"current",lastUpdatedAt:1611663650,formattedLastUpdatedAt:"1/26/2021",frontMatter:{id:"introducao",title:"Introdu\xe7\xe3o",sidebar_label:"Introdu\xe7\xe3o"},sidebar:"contexto",next:{title:"Conector",permalink:"/rnds/docs/conector"}},u=[{value:"O que muda com a RNDS?",id:"o-que-muda-com-a-rnds",children:[]},{value:"Este Guia",id:"este-guia",children:[]}],l={toc:u};function p(e){var a=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,t.Z)({},l,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Na perspectiva de um estabelecimento de sa\xfade, a Rede Nacional de Dados em Sa\xfade (RNDS) oferece servi\xe7os\npara a interoperabilidade em sa\xfade no territ\xf3rio nacional. No Brasil, \xe9 por meio da RNDS que um estabelecimento em sa\xfade disponibiliza informa\xe7\xe3o que ser\xe1 consumido por outro."),(0,n.kt)("p",null,"Quando um estabelecimento de sa\xfade se integra \xe0 RNDS, cria-se a possibilidade dele contribuir com informa\xe7\xf5es em sa\xfade pertinentes aos usu\xe1rios que assiste,\nbem como consumir informa\xe7\xf5es geradas por outros estabelecimentos."),(0,n.kt)("p",null,"Conforme ilustrado abaixo, a integra\xe7\xe3o com a RNDS segue o padr\xe3o ",(0,n.kt)("a",{parentName:"p",href:"./glossario#fhir"},"FHIR"),'. Isso significa "independ\xeancia do estabelecimento de sa\xfade" em rela\xe7\xe3o \xe0 tecnologia e ao seu ecossistema. Noutras palavras, a RNDS n\xe3o imp\xf5e, n\xe3o restringe e nem tampouco orienta decis\xf5es do estabelecimento de sa\xfade.'),(0,n.kt)("p",null,"Nesse sentido, a interoperabilidade realiza-se por meio de requisi\xe7\xf5es ",(0,n.kt)("em",{parentName:"p"},"https"),", que obedecem ao padr\xe3o FHIR e \xe0 ",(0,n.kt)("a",{parentName:"p",href:"./rnds/definicoes"},"adapta\xe7\xe3o")," definida pela RNDS, e partem do estabelecimento de sa\xfade para atingir o ",(0,n.kt)("a",{parentName:"p",href:"./rnds/ambientes"},"ambiente")," de produ\xe7\xe3o da RNDS, seja para enviar ou requisitar informa\xe7\xe3o em sa\xfade."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"interoperabilidade",src:o(9102).Z})),(0,n.kt)("p",null,'Os servi\xe7os oferecidos pela RNDS para interoperabilidade ser\xe3o estendidos, ao longo do tempo, para viabilizar as necessidades de troca de informa\xe7\xe3o em sa\xfade no Brasil. A primeira necessidade contemplada \xe9 a notifica\xe7\xe3o de resultados de exames de SARS-CoV-2. Para ilustrar a ado\xe7\xe3o do padr\xe3o FHIR, integrar para notificar um resultado de exame \xe9 "similar" \xe0 submiss\xe3o de um Registro de Atendimento Cl\xednico (RAC) ou Sum\xe1rio de Alta (SA), dentre outros.'),(0,n.kt)("h2",{id:"o-que-muda-com-a-rnds"},"O que muda com a RNDS?"),(0,n.kt)("p",null,"Por exemplo, em um cen\xe1rio convencional, sem a integra\xe7\xe3o com a RNDS, laudos produzidos permanecem restritos ao sistema de software do laborat\xf3rio em quest\xe3o.\nEm algum momento s\xe3o enviados para uma base de dados segura, e tornam-se inacess\xedveis a outros estabelecimentos de sa\xfade, e infelizmente, at\xe9 aos pr\xf3prios pacientes."),(0,n.kt)("p",null,'A informa\xe7\xe3o em sa\xfade, contudo, "precisa chegar onde \xe9 necess\xe1ria". A ',(0,n.kt)("a",{parentName:"p",href:"https://www.in.gov.br/en/web/dou/-/portaria-n-1.792-de-17-de-julho-de-2020-267730859"},"Portaria 1.792, de 17 de julho de 2020"),", do Minist\xe9rio da Sa\xfade,\n\xe9 um marco hist\xf3rico neste sentido. Essa portaria estabelece a obrigatoriedade de notificar o Minist\xe9rio da Sa\xfade acerca dos resultados de testes de SARS-CoV-2 produzidos em todo o territ\xf3rio nacional."),(0,n.kt)("p",null,"A figura abaixo ilustra o envio de laudos de um laborat\xf3rio para a RNDS, como consequ\xeancia desta Portaria."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:o(8016).Z})),(0,n.kt)("p",null,"Na pr\xe1tica isso significa que cada laborat\xf3rio ter\xe1 que produzir software para a sua integra\xe7\xe3o com a RNDS. Noutras palavras, esse software de integra\xe7\xe3o do laborat\xf3rio (estabelecimento de sa\xfade), denominado de ",(0,n.kt)("em",{parentName:"p"},"conector"),", deve enviar a informa\xe7\xe3o em sa\xfade pertinente a cada laudo que produz ao Minist\xe9rio da Sa\xfade (veja a ilustra\xe7\xe3o abaixo)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:o(2027).Z})),(0,n.kt)("h2",{id:"este-guia"},"Este Guia"),(0,n.kt)("p",null,"O ",(0,n.kt)("strong",{parentName:"p"},"Guia de Integra\xe7\xe3o RNDS")," tem como compromisso identificar todos\nos passos necess\xe1rios, orienta\xe7\xf5es e outras informa\xe7\xf5es, sejam administrativas ou t\xe9cnicas, para ",(0,n.kt)("em",{parentName:"p"},"facilitar a integra\xe7\xe3o com a RNDS"),"."),(0,n.kt)("p",null,"O objetivo \xe9 orientar estabelecimentos de sa\xfade acerca da integra\xe7\xe3o com a RNDS. Esta integra\xe7\xe3o \xe9 ilustrada, neste Guia, para o cen\xe1rio da notifica\xe7\xe3o obrigat\xf3ria de resultados de exames (SARS-CoV-2) ao Minist\xe9rio da Sa\xfade pelos laborat\xf3rios em territ\xf3rio nacional. Outros cen\xe1rios como o envio de Sum\xe1rio de Alta, por exemplo, dentre muitos outros, s\xe3o similares. As especificidades dos cen\xe1rios, contudo, s\xe3o devidamente documentadas, como o modelo de informa\xe7\xe3o e o modelo computacional, que s\xe3o espec\xedficos para cada troca de informa\xe7\xe3o."),(0,n.kt)("p",null,"Dois pap\xe9is definem o ",(0,n.kt)("a",{parentName:"p",href:"./publico-alvo/publico-alvo"},"p\xfablico-alvo")," deste ",(0,n.kt)("em",{parentName:"p"},"Guia"),": (a) gestor (respons\xe1vel pelo laborat\xf3rio) e (b) integrador (desenvolvedor)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A integra\xe7\xe3o entre estabelecimentos de sa\xfade e a RNDS (Minist\xe9rio da Sa\xfade) \xe9 o foco deste guia. Os exemplos s\xe3o baseados no envio de lados de COVID-19 de Laborat\xf3rios de An\xe1lises Cl\xednicas para a RNDS.")))}p.isMDXComponent=!0},8016:function(e,a,o){"use strict";a.Z=o.p+"assets/images/laboratorio-6a4da2d663285f474a85dee6b3b39fa4.png"},2027:function(e,a,o){"use strict";a.Z=o.p+"assets/images/pratica-36d00e5500b989474cd2220632fbba42.png"},9102:function(e,a,o){"use strict";a.Z=o.p+"assets/images/rnds-brasil-019883f75fd489c857e786ec8000e74c.png"}}]);