(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{162:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(155),i=t(157),c=t(55),s=t.n(c);function m(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(160),i=t(157),c=t(162);a.default=function(e){var a=e.tags,t=e.sidebar,n={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));var s=Object.entries(n).sort((function(e,a){var t=e[0],n=a[0];return t===n?0:t>n?1:-1})).map((function(e){var t=e[0],n=e[1];return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((function(e){return r.a.createElement(i.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},s)))))}}}]);