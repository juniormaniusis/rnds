(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return s})),r.d(a,"metadata",(function(){return i})),r.d(a,"toc",(function(){return p})),r.d(a,"default",(function(){return d}));var o=r(3),t=r(7),n=(r(0),r(142)),s={id:"tecnologias",title:"Ecossistema FHIR",sidebar_label:"Ecossistema FHIR"},i={unversionedId:"rnds/tecnologias",id:"rnds/tecnologias",isDocsHomePage:!1,title:"Ecossistema FHIR",description:"FHIR",source:"@site/docs\\rnds\\tecnologias.mdx",slug:"/rnds/tecnologias",permalink:"/rnds/docs/rnds/tecnologias",version:"current",lastUpdatedAt:1612288800,sidebar_label:"Ecossistema FHIR",sidebar:"someSidebar",previous:{title:"Defini\xe7\xf5es",permalink:"/rnds/docs/rnds/definicoes"},next:{title:"RNDS API",permalink:"/rnds/docs/rnds/tools/api"}},p=[{value:"FHIR",id:"fhir",children:[]},{value:"Forge (editor de perfis)",id:"forge-editor-de-perfis",children:[]},{value:"Simplifier.NET",id:"simplifiernet",children:[]},{value:"JSON (h\xe1 ainda XML e RDF)",id:"json-h\xe1-ainda-xml-e-rdf",children:[]},{value:"Implementa\xe7\xe3o do FHIR",id:"implementa\xe7\xe3o-do-fhir",children:[]},{value:"Implementa\xe7\xf5es para testes",id:"implementa\xe7\xf5es-para-testes",children:[]},{value:"RESTful API FHIR",id:"restful-api-fhir",children:[]},{value:"FHIRPath",id:"fhirpath",children:[]}],c={toc:p};function d(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,r,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"fhir"},"FHIR"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hl7.org/fhir/"}),"FHIR")," \xe9 um padr\xe3o para a troca de informa\xe7\xe3o em sa\xfade,\no acr\xf4nimo vem de ",Object(n.b)("em",{parentName:"p"},"Fast Healthcare Interoperability Resources"),"."),Object(n.b)("p",null,"Destacado no pr\xf3prio nome, ",Object(n.b)("em",{parentName:"p"},"resource"),", ou recurso, \xe9 o elemento b\xe1sico\nempregado para a interoperabilidade de sistemas de informa\xe7\xe3o em sa\xfade\nusando FHIR."),Object(n.b)("p",null,"Um recurso representa algum tipo de entidade do cuidado em sa\xfade.\nPor exemplo, o recurso ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/patient.html"}),Object(n.b)("em",{parentName:"a"},"Patient")),"\n\xe9 empregado para dados demogr\xe1ficos ou outra informa\xe7\xe3o administrativa\nacerca do indiv\xedduo. Por outro lado, se o que se deseja trocar s\xe3o\nmedidas como press\xe3o ou temperatura, por exemplo, ent\xe3o far\xe1 uso do\nrecurso ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/observation.html"}),Object(n.b)("em",{parentName:"a"},"Observation")),"."),Object(n.b)("p",null,"No momento em que esta p\xe1gina \xe9 escrita est\xe3o definidos 145 tipos\ndistintos de ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/resourcelist.html"}),"recursos"),".\nTodos eles devidamente documentados."),Object(n.b)("p",null,"Est\xe1 al\xe9m do escopo apresentar o FHIR em abrang\xeancia e profundidade.\nOs primeiros passos podem ser orientados por\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://blog.heliossoftware.com/fhir-training-the-early-steps-of-mastering-hl7-fhir-997d8dfa1320"}),"aqui"),"."),Object(n.b)("h3",{id:"forge-editor-de-perfis"},"Forge (editor de perfis)"),Object(n.b)("p",null,'O FHIR visa contemplar um conjunto razo\xe1vel de cen\xe1rios, mas n\xe3o \xe9\nposs\xedvel abarcar os usos espec\xedficos de todo o planeta. Felizmente,\no FHIR permite "personaliza\xe7\xf5es" por meio de perfis (',Object(n.b)("em",{parentName:"p"},"profiles"),")."),Object(n.b)("p",null,"A defini\xe7\xe3o de perfis \xe9 um esfor\xe7o de modelagem de informa\xe7\xe3o em sa\xfade.\nDesenvolvedores ter\xe3o que ter acesso aos perfis que personalizam os\nrecursos a serem trocados. Afinal, toda a troca de dados dever\xe1 estar\nem conformidade com os perfis definidos. Consulte os\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net/RedeNacionaldeDadosemSaude"}),"perfis")," definidos\npela RNDS para detalhes."),Object(n.b)("p",null,"A edi\xe7\xe3o de um perfil \xe9 melhor realizada com o apoio de um editor\nespec\xedfico para esta finalidade. ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net/forge"}),"Forge"),",\ndispon\xedvel para Windows, \xe9 uma op\xe7\xe3o."),Object(n.b)("p",null,"Conv\xe9m ressaltar que para a integra\xe7\xe3o com a RNDS n\xe3o ser\xe1 necess\xe1rio\ndefinir perfis (",Object(n.b)("em",{parentName:"p"},"profiles"),"). Esta \xe9 uma atribui\xe7\xe3o da RNDS e os ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net/RedeNacionaldeDadosemSaude"}),"perfis")," j\xe1 est\xe3o definidos. O acesso a eles, contudo, \xe9 necess\xe1rio para verificar se as personaliza\xe7\xf5es definidas s\xe3o atendidas."),Object(n.b)("h3",{id:"simplifiernet"},"Simplifier.NET"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net"}),"Simplifier.NET")," \xe9 um servi\xe7o que permite\npublicar e consultar perfis (",Object(n.b)("em",{parentName:"p"},"profiles"),"). Conv\xe9m ressaltar que perfis\nprecisam ser conhecidos entre as partes que ir\xe3o interagir e que\nferramenta a Forge, por exemplo, apresentada na se\xe7\xe3o anterior,\npermite apenas cri\xe1-los."),Object(n.b)("p",null,"As facilidades oferecidas pelo Simplifier.NET incluem a navega\xe7\xe3o entre\nrecursos e defini\xe7\xf5es pertinentes, o que \xe9 desej\xe1vel para\nquem deseja consultar perfis."),Object(n.b)("p",null,"Os ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://simplifier.net/RedeNacionaldeDadosemSaude"}),"perfis"),"\ndefinidos pela RNDS podem ser consultados via este servi\xe7o."),Object(n.b)("h2",{id:"json-h\xe1-ainda-xml-e-rdf"},"JSON (h\xe1 ainda XML e RDF)"),Object(n.b)("p",null,"Quando se usa o FHIR para troca de dados, o que ocorre \xe9 a troca de\nrecursos. Tais recursos podem trafegar representados em v\xe1rios\nformatos, dentre eles, JSON. Este guia de integra\xe7\xe3o faz uso de JSON."),Object(n.b)("p",null,"O portal oficial define ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.json.org/json-en.html"}),"JSON"),"\n(JavaScript Object Notation) como ",Object(n.b)("em",{parentName:"p"},"um formato leve para troca de dados"),".\nAinda acrescenta que este formato \xe9 ",Object(n.b)("em",{parentName:"p"},"f\xe1cil para seres humanos\nescreverem e lerem"),"."),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/XML"}),"XML"),", \xe0 semelhan\xe7a de JSON,\n\xe9 comumente empregado em ",Object(n.b)("em",{parentName:"p"},"web services")," (servi\xe7os oferecidos por\nmeio da internet). Por outro lado, ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.hl7.org/fhir/rdf.html"}),"RDF"),"\nest\xe1 associado, em geral, a quest\xf5es sem\xe2nticas, por exemplo,\nquando se deseja realizar infer\xeancia sobre os dados."),Object(n.b)("h2",{id:"implementa\xe7\xe3o-do-fhir"},"Implementa\xe7\xe3o do FHIR"),Object(n.b)("p",null,"FHIR \xe9 uma especifica\xe7\xe3o, um padr\xe3o. Computador, por outro lado,\nprecisa de um software que implementa este padr\xe3o para ser executado.\nH\xe1 v\xe1rias implementa\xe7\xf5es do padr\xe3o FHIR e algumas\ns\xe3o ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://wiki.hl7.org/Open_Source_FHIR_implementations"}),Object(n.b)("em",{parentName:"a"},"open source")),",\ncomo a implementa\xe7\xe3o de refer\xeancia do FHIR, a ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://hapifhir.io"}),"Hapi FHIR"),"."),Object(n.b)("p",null,"A integra\xe7\xe3o com a RNDS significa que h\xe1 uma implementa\xe7\xe3o do FHIR\noferecida pela RNDS, observando os perfis definidas pela RNDS, por meio\nda qual laborat\xf3rios e outros estabelecimentos de s\xfade consultam e\nenviam informa\xe7\xf5es de sa\xfade."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Quem disponibiliza uma implementa\xe7\xe3o do FHIR \xe9 a RNDS. Laborat\xf3rios\ns\xe3o clientes desta implementa\xe7\xe3o. Laborat\xf3rios n\xe3o precisam disponibilizar\numa implementa\xe7\xe3o do FHIR.")),Object(n.b)("p",null,"A implementa\xe7\xe3o do FHIR oferecida pela RNDS est\xe1 dispon\xedvel em dois\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/rnds/docs/rnds/ambientes"}),"ambientes"),", um de homologa\xe7\xe3o e outro de produ\xe7\xe3o."),Object(n.b)("h2",{id:"implementa\xe7\xf5es-para-testes"},"Implementa\xe7\xf5es para testes"),Object(n.b)("p",null,"H\xe1 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://wiki.hl7.org/Publicly_Available_FHIR_Servers_for_testing"}),"v\xe1rios"),"\nservidores dispon\xedveis para experimenta\xe7\xe3o com o FHIR. Ou seja, s\xe3o\ncomputadores que est\xe3o executando alguma implementa\xe7\xe3o do FHIR e n\xe3o\ncobram nada por isso. Estes servidores s\xe3o empregados apenas para testes, o que\n\xe9 suficiente para desenvolvedores que queiram conhecer mais sobre o padr\xe3o."),Object(n.b)("p",null,"Cada um destes servidores funciona como um estabelecimento apto a\ninteragir com outros por meio do FHIR. Desta forma, sem exig\xeancias\nque s\xe3o necess\xe1rias em um cen\xe1rio real, at\xe9 porque os dados\ndisponibilizados n\xe3o s\xe3o dados reais, voc\xea pode submeter requisi\xe7\xf5es\ne observar os recursos retornados no formato da sua escolha, em geral\nXML ou JSON, conforme visto anteriormente."),Object(n.b)("p",null,"Desenvolvedores podem empregar estes servidores para se ambientar\ncom o padr\xe3o FHIR. De fato, o acesso ao ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/rnds/docs/rnds/ambientes"}),"ambiente"),"\nde homologa\xe7\xe3o da RNDS pode ser precedido pelo contato com um\ndestes servidores."),Object(n.b)("p",null,'Antes que o respons\xe1vel pelo laborat\xf3rio obtenha um certificado\ndigital, pe\xe7a o credenciamento e aguarde pela homologa\xe7\xe3o,\ndesenvolvedores podem empregar um destes servidores para experimenta\xe7\xe3o.\nConv\xe9m observar, contudo, que nestes casos tais servidores n\xe3o estar\xe3o\naderentes aos perfis estabelecidos pela RNDS.\nOu seja, seguem o padr\xe3o FHIR, mas sem "obdecer" as especificidades\nimpostas pelos perfis nacionais.'),Object(n.b)("p",null,"Em tempo, a implementa\xe7\xe3o de refer\xeancia do FHIR, Hapi FHIR,\ncitada anteriormente, tamb\xe9m possui um servidor para testes\ndispon\xedvel em ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://hapi.fhir.org/"}),"http://hapi.fhir.org/"),"."),Object(n.b)("h2",{id:"restful-api-fhir"},"RESTful API FHIR"),Object(n.b)("p",null,"H\xe1 uma API (",Object(n.b)("em",{parentName:"p"},"Application Programming Interface"),") bem-definida\npara o acesso\na um servidor FHIR. Trata-se de uma RESTFul API, a\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://hl7.org/fhir/http.html"}),"RESTful API FHIR"),"."),Object(n.b)("p",null,"Consulte ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://restfulapi.net/"}),"What is REST")," para saber o\nque \xe9 uma RESTful API, e portais\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Kikobeats/awesome-api"}),"pertinentes"),".\nRESTful API \xe9 um estilo amplamente empregado para integra\xe7\xe3o\nentre sistemas, e n\xe3o \xe9 espec\xedfico para a sa\xfade. H\xe1 um conjunto\nsignificativo de servi\xe7\xf5es dispon\xedveis\npor meio de uma RESTful API (veja uma lista deles\n",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://medium.com/better-programming/a-curated-list-of-100-cool-and-fun-public-apis-to-inspire-your-next-project-7600ce3e9b3"}),"aqui"),")."),Object(n.b)("h2",{id:"fhirpath"},"FHIRPath"),Object(n.b)("p",null,"FHIRPath \xe9 um mecanismo para manusear documentos JSON\ncontendo recursos FHIR.\nTrata-se de proposta similar \xe0 JsonPath e XML Path,\npor exemplo. Contudo,\npossui fun\xe7\xf5es espec\xedficas para documentos contendo\nrecursos FHIR."))}d.isMDXComponent=!0},142:function(e,a,r){"use strict";r.d(a,"a",(function(){return m})),r.d(a,"b",(function(){return b}));var o=r(0),t=r.n(o);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=t.a.createContext({}),d=function(e){var a=t.a.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},m=function(e){var a=d(e.components);return t.a.createElement(c.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},u=t.a.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,b=m["".concat(s,".").concat(u)]||m[u]||l[u]||n;return r?t.a.createElement(b,i(i({ref:a},c),{},{components:r})):t.a.createElement(b,i({ref:a},c))}));function b(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);