(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),o=a(7),n=(a(0),a(144)),i={id:"autenticacao",title:"Autentica\xe7\xe3o",sidebar_label:"Autentica\xe7\xe3o"},c={unversionedId:"publico-alvo/ti/autenticacao",id:"publico-alvo/ti/autenticacao",isDocsHomePage:!1,title:"Autentica\xe7\xe3o",description:'Java apenas faz uso de comunica\xe7\xe3o via SSL quando a aplica\xe7\xe3o em quest\xe3o "confia" no servi\xe7o com o qual est\xe1 interagindo. A confian\xe7a \xe9 estabelecida por meio do conte\xfado de um arquivo, o keystore.',source:"@site/docs/publico-alvo/ti/autenticacao.md",slug:"/publico-alvo/ti/autenticacao",permalink:"/rnds/docs/publico-alvo/ti/autenticacao",version:"current",lastUpdatedAt:1611244498,formattedLastUpdatedAt:"1/21/2021",sidebar_label:"Autentica\xe7\xe3o",sidebar:"someSidebar",previous:{title:"Erros",permalink:"/rnds/docs/publico-alvo/ti/erros"},next:{title:"Passo a passo",permalink:"/rnds/docs/passo-a-passo"}},s=[{value:"Certificado DATASUS",id:"certificado-datasus",children:[]},{value:"Certificado Let&#39;s Encrypt",id:"certificado-lets-encrypt",children:[]},{value:"Projeto seguran\xe7a",id:"projeto-seguran\xe7a",children:[]},{value:"Exibindo o conte\xfado do keystore",id:"exibindo-o-conte\xfado-do-keystore",children:[]},{value:"Importar certificado",id:"importar-certificado",children:[]}],p={toc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,'Java apenas faz uso de comunica\xe7\xe3o via SSL quando a aplica\xe7\xe3o em quest\xe3o "confia" no servi\xe7o com o qual est\xe1 interagindo. A confian\xe7a \xe9 estabelecida por meio do conte\xfado de um arquivo, o ',Object(n.b)("em",{parentName:"p"},"keystore"),"."),Object(n.b)("p",null,"O ",Object(n.b)("em",{parentName:"p"},"keystore")," deve conter os certificados das autoridades certificadoras cujos certificados\npor ela assinados s\xe3o considerados confi\xe1veis. Dito de outro forma,\na aplica\xe7\xe3o em Java estabelece uma rela\xe7\xe3o de confian\xe7a apenas com certificados assinados por autoridades certificadoras\ncujos certificados est\xe3o contidos no ",Object(n.b)("em",{parentName:"p"},"keystore"),"."),Object(n.b)("p",null,"O efeito pr\xe1tico \xe9 que uma aplica\xe7\xe3o em Java s\xf3 confiar\xe1 no\ncertificado de um servidor da RNDS, se a autoridade certificadora que emitiu tal certificado estiver no\n",Object(n.b)("em",{parentName:"p"},"keystore")," empregado pela aplica\xe7\xe3o. Ou seja, \xe9 necess\xe1rio dizer em qual autoridade certificadora a sua\naplica\xe7\xe3o deve confiar. Quando registrar tal informa\xe7\xe3o no ",Object(n.b)("em",{parentName:"p"},"keystore")," da aplica\xe7\xe3o, ent\xe3o ela\npassar\xe1 a confiar nos certificados por ela emitidos."),Object(n.b)("p",null,"Caso contr\xe1rio, o resultado prov\xe1vel da tentativa de acesso \xe0 RNDS por meio de Java ser\xe1"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"javax.net.ssl.SSLHandshakeException: PKIX path building failed:\nsun.security.provider.certpath.SunCertPathBuilderException:\nunable to find valid certification path to requested target\n")),Object(n.b)("p",null,"Abaixo seguem os passos para evitar este problema a partir do projeto de seguran\xe7a disponibilizado\npelo DATASUS."),Object(n.b)("h3",{id:"certificado-datasus"},"Certificado DATASUS"),Object(n.b)("p",null,"Abra o seu navegador e navegue at\xe9 ",Object(n.b)("strong",{parentName:"p"},"ehr-auth-hmg.saude.gov.br"),', se for o Chrome, clique no cadeado ao lado da URL e,\nna sequ\xeancia, na op\xe7\xe3o "Certificado (v\xe1lido)", o resultado ser\xe1 algo parecido com a tela abaixo:'),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1735792/92937056-3cd65900-f421-11ea-8325-0a7cfa5794cd.png",alt:"image"})),Object(n.b)("p",null,'Nesta tela, observa-se que "Let\'s Encrypt Authority X3" \xe9 quem emitiu o certificado pertinente \xe0 p\xe1gina\nexibida pelo navegador. Ou seja, Java precisa que o certificado de "Let\'s Encrypt Authority X3" seja\nacrescentado ao ',Object(n.b)("em",{parentName:"p"},"keystore")," para que a aplica\xe7\xe3o possa confiar no certificado da RNDS."),Object(n.b)("p",null,"Em tempo,\n",Object(n.b)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," \xe9 uma autoridade certificadora sem fins lucrativos.\nE, adicionalmente, os certificados por ela empregados, em particular o\n",Object(n.b)("a",{parentName:"p",href:"https://letsencrypt.org/certificates/#intermediate-certificates"},"Let's Encrypt Authority X3"),"\npode ser baixado sem dificuldades."),Object(n.b)("p",null,"Observe que a rec\xedproca tamb\xe9m \xe9 verdadeira. Em particular, a RNDS confia apenas em certificados\nICP-Brasil."),Object(n.b)("h3",{id:"certificado-lets-encrypt"},"Certificado Let's Encrypt"),Object(n.b)("p",null,"No endere\xe7o ",Object(n.b)("a",{parentName:"p",href:"https://letsencrypt.org/certificates/#intermediate-certificates"},"https://letsencrypt.org/certificates/#intermediate-certificates"),' \xe9 poss\xedvel ter acesso a v\xe1rios certificados da "Let\'s Encrypt", entre eles o\n',Object(n.b)("em",{parentName:"p"},"Let\u2019s Encrypt Authority X3")," que, conforme visto acima, assina o certificado\nutilizado pelo DATASUS. Um dos arquivos (formatos) correspondentes ao certificado da ",Object(n.b)("em",{parentName:"p"},"Let's Encrypt Authority X3")," \xe9 ",Object(n.b)("a",{parentName:"p",href:"https://letsencrypt.org/certs/letsencryptauthorityx3.der"},"letsencryptauthorityx3.der"),"."),Object(n.b)("p",null,"Ap\xf3s baixar tal certificado, ser\xe1 necess\xe1rio acrescent\xe1-lo ao\n",Object(n.b)("em",{parentName:"p"},"keystore")," empregado pela aplica\xe7\xe3o Java."),Object(n.b)("h3",{id:"projeto-seguran\xe7a"},"Projeto seguran\xe7a"),Object(n.b)("p",null,"O arquivo ",Object(n.b)("strong",{parentName:"p"},"certificado.jks"),' \xe9 parte do projeto "Seguran\xe7a - Projeto Java para gerar token autentica\xe7\xe3o", oferecido pela RNDS (baixe o arquivo ',Object(n.b)("a",{parentName:"p",href:"http://mobileapps.saude.gov.br/portal-servicos/files/f3bd659c8c8ae3ee966e575fde27eb58/53c86213276e091be7128abc031f5d38_8ymqlifr9.zip"},".zip"),").\nEste arquivo \xe9 um ",Object(n.b)("em",{parentName:"p"},"keystore"),' p\xfablico, oferecido pelo DATASUS, cuja senha \xe9 "secret". O uso dele permite obter um ',Object(n.b)("em",{parentName:"p"},"token")," de acesso, contudo, n\xe3o\nter\xe1 utilidade nos demais servi\xe7os (naturalmente). Contudo, \xe9 suficiente\npara o uso pretendido aqui."),Object(n.b)("h3",{id:"exibindo-o-conte\xfado-do-keystore"},"Exibindo o conte\xfado do keystore"),Object(n.b)("p",null,"Ao executar o comando ",Object(n.b)("inlineCode",{parentName:"p"},"keytool -list -keystore certificado.jks")," ser\xe1 exibido todo o conte\xfado do ",Object(n.b)("em",{parentName:"p"},"keystore"),", no caso, contendo\ntr\xeas certificados, cujos nomes (",Object(n.b)("em",{parentName:"p"},"alias"),") s\xe3o ",Object(n.b)("em",{parentName:"p"},"client"),", ",Object(n.b)("em",{parentName:"p"},"server")," e, o \xfaltimo, ",Object(n.b)("em",{parentName:"p"},"*",".saude.gov.br (geotrust rsa ca 2018)"),', conforme abaixo. A senha, conforme mencionada acima, \xe9 "secret".'),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"Keystore type: PKCS12\nKeystore provider: SUN\n\nYour keystore contains 3 entries\n\nclient, 4 de mar de 2020, PrivateKeyEntry,\nCertificate fingerprint (SHA-256): 08:81:5D:4D:F5:86:77:31:63:15:A1:D3:C7:AA:4C:39:35:17:69:4C:62:24:86:19:33:88:0F:42:8D:04:D7:BA\nserver, 11 de set de 2020, trustedCertEntry,\nCertificate fingerprint (SHA-256): 1D:DB:8B:1C:A7:0C:C4:5D:5E:38:B5:09:ED:D2:F4:4C:1C:74:D8:65:BB:B6:AB:21:2D:AF:F1:58:08:74:99:CD\n*.saude.gov.br (geotrust rsa ca 2018), 11 de set de 2020, trustedCertEntry,\nCertificate fingerprint (SHA-256): D7:6B:42:22:8D:BE:29:F3:00:5A:C6:A1:2D:2B:43:24:26:B9:3B:35:73:8E:61:CC:FD:31:8A:F7:1C:1E:F0:5C\n")),Object(n.b)("p",null,'Observe que nenhum destes certificado \xe9 da autoridade certificadora "Let\'s Encrypt Authority X3".'),Object(n.b)("h3",{id:"importar-certificado"},"Importar certificado"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"keytool -importcert -file letsencryptauthorityx3.der -keystore certificado.jks -storepass secret -alias letsencrypt\n")))}d.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||l[b]||n;return a?o.a.createElement(m,c(c({ref:t},p),{},{components:a})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<n;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);