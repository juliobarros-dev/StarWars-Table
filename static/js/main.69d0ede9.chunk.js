(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),u=a.n(l),c=a(4),o=a.n(c),i=a(6),s=a(2),m=a(1),d=Object(n.createContext)();function f(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(o.a.mark((function e(t){var a,n,r,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://swapi-trybe.herokuapp.com/api/planets/?page=".concat(t),e.prev=1,e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,l=r.results,u=l.map((function(e){return delete e.residents,e})),e.abrupt("return",u);case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var b=function(e){var t=e.children,a=Object(n.useState)([]),l=Object(m.a)(a,2),u=l[0],c=l[1],p=Object(n.useState)([]),b=Object(m.a)(p,2),v=b[0],E=b[1],g=Object(n.useState)([]),O=Object(m.a)(g,2),j=O[0],h=O[1],C=Object(n.useState)(""),N=Object(m.a)(C,2),y=N[0],k=N[1],x=Object(n.useState)([]),F=Object(m.a)(x,2),S=F[0],w=F[1],D=Object(n.useRef)(Object(s.a)(u)),P=Object(n.useState)("name"),B=Object(m.a)(P,2),I=B[0],L=B[1],R=Object(n.useState)(""),_=Object(m.a)(R,2),V=_[0],q=_[1],A=Object(n.useState)(1),J=Object(m.a)(A,2),T=J[0],z=J[1],G=Object(n.useState)(!1),H=Object(m.a)(G,2),M=H[0],U=H[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(T);case 2:t=e.sent,c(t),E(t),h(Object.keys(t[0]));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[T]),Object(n.useEffect)((function(){D.current=u.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})),E(D.current)}),[y,u]),Object(n.useEffect)((function(){!function(){if(!S.length)return E(Object(s.a)(u));D.current=Object(s.a)(u),S.forEach((function(e){var t=e.column,a=e.comparison,n=e.value;return"maior que"===a?(D.current=D.current.filter((function(e){return Number(e[t])>Number(n)})),E(D.current)):"menor que"===a?(D.current=D.current.filter((function(e){return Number(e[t])<Number(n)})),E(D.current)):(D.current=D.current.filter((function(e){return Number(e[t])===Number(n)})),E(D.current))}))}()}),[S,u]);var W={planetList:v,headerArray:j,filters:{filterByName:{name:y},filterByNumericValues:S},setName:k,setNumericFilter:w,data:u,filteredArray:D,setOrderField:L,orderField:I,orderRule:V,setOrderRule:q,page:T,setPage:z,isFilter:M,setIsFilter:U};return r.a.createElement(d.Provider,{value:W},t)},v=a(3),E={diameter:"Di\xe2metro",population:"Popula\xe7\xe3o",orbital_period:"Per\xedodo orbital",rotation_period:"Rota\xe7\xe3o",surface_water:"Superf\xedcie com \xe1gua"},g=["maior que","menor que","igual a"],O={name:"Nome",rotation_period:"Rota\xe7\xe3o",orbital_period:"Per\xedodo orbital",diameter:"Di\xe2metro",climate:"Clima",gravity:"Gravidade",terrain:"Terreno",surface_water:"Superf\xedcie com \xe1gua",population:"Popula\xe7\xe3o",films:"Filmes"},j=["1","2","3","4","5","6"];function h(e){var t=e.data,a=e.id,n=e.name,l=e.onClick;return r.a.createElement("section",{className:"order-section"},t.length>0?r.a.createElement("p",null,"Filtros aplicados"):null,r.a.createElement("ul",{className:"pure-menu-list",id:a,name:n},t.map((function(e){return r.a.createElement("li",{className:"pure-menu-item",key:Object(v.uuid)()},r.a.createElement("span",null,"".concat(e.column," ").concat(e.comparison," ").concat(e.value)),r.a.createElement("button",{className:"button-error",onClick:function(){return l(e.column)},type:"button"},"X"))}))))}h.defaultProps={data:[]};var C=a(10);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length>0){var t=Object(C.a)({},E),a=e.map((function(e){return e.column}));return a.forEach((function(e){return delete t[e]})),t}return E}function y(e){var t=e.className,a=e.id,n=e.label,l=e.name,u=e.onChange,c=e.placeholder,o=e.testId,i=e.type,s=e.value;return r.a.createElement("label",{htmlFor:a},n,r.a.createElement("input",{className:t,"data-testid":o,id:a,name:l,onChange:u,placeholder:c,type:i,value:s}))}function k(e){var t=e.dataDisplay,a=e.dataValue,n=e.id,l=e.label,u=e.name,c=e.onClick,o=e.onChange,i=e.value;return r.a.createElement("label",{htmlFor:n},l,r.a.createElement("select",{id:n,name:u,onClick:c,value:i,onChange:o},t.map((function(e,t){return r.a.createElement("option",{key:Object(v.uuid)(),value:a[t]},e)}))))}function x(e){var t=e.className,a=e.disabled,n=e.id,l=e.name,u=e.onClick,c=e.testId,o=e.text;return r.a.createElement("button",{className:t,"data-testid":c,disabled:a,id:n,name:l,onClick:u,type:"submit"},o)}y.defaultProps={className:"",label:"",placeholder:"",testId:"",value:""},k.defaultProps={dataDisplay:[],dataValue:[],onClick:function(){},onChange:function(){}},x.defaultProps={className:"",disabled:!1,testId:""};var F=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)("maior que"),c=Object(m.a)(u,2),o=c[0],i=c[1],f=Object(n.useState)(""),p=Object(m.a)(f,2),b=p[0],v=p[1],E=Object(n.useContext)(d),O=E.setName,j=E.filters,C=j.filterByName.name,F=j.filterByNumericValues,S=E.setNumericFilter,w=E.setIsFilter,D={id:"nameFilter",name:"name",onChange:function(e){var t=e.target.value;return O(t)},placeholder:"Nome do planeta",type:"text",value:C},P={dataDisplay:Object.values(N(F)),dataValue:Object.keys(N(F)),id:"columnFilter",label:"Filtre por: ",name:"column",onChange:function(e){var t=e.target.value;return l(t)},onClick:function(e){var t=e.target.value;return l(t)},value:a},B={dataDisplay:g,dataValue:g,id:"comparisonFilter",label:"Compara\xe7\xe3o: ",name:"comparison",onChange:function(e){var t=e.target.value;return i(t)},onClick:function(e){var t=e.target.value;return i(t)},value:o},I={id:"numberInput",name:"value",onChange:function(e){var t=e.target.value;return v(t)},placeholder:"Digite apenas n\xfameros",type:"number",value:b},L={className:"pure-button",id:"confirmFilterButton",name:"filterButton",onClick:function(e){if(e.preventDefault(),a){var t={column:a,comparison:o,value:b};v(""),S([].concat(Object(s.a)(F),[t])),w(!0)}},text:"Pesquisar"},R={data:F,id:"appliedFiltersList",name:"appliedFilters",onClick:function(e){var t=F.filter((function(t){return t.column!==e}));S(t)}};return r.a.createElement("div",null,r.a.createElement("form",{className:"pure-form"},r.a.createElement(y,D),r.a.createElement(k,P),r.a.createElement(k,B),r.a.createElement(y,I),r.a.createElement(x,L)),r.a.createElement(h,R))};function S(){var e=Object(n.useContext)(d),t=e.orderField,a=e.setOrderField,l=e.setOrderRule,u={dataDisplay:["Nome"].concat(Object(s.a)(Object.values(E))),dataValue:["name"].concat(Object(s.a)(Object.keys(E))),id:"columnOrder",label:"Ordenar por: ",name:"column",onChange:function(e){var t=e.target.value;return a(t)},onClick:function(e){var t=e.target.value;return a(t)},value:t},c={id:"ascOrder",label:"Crescente",name:"seletor",onChange:function(e){var t=e.target.value;return l(t)},onClick:function(e){var t=e.target.value;return l(t)},type:"radio",value:"ASC"},o={id:"descOrder",label:"Decrescente",name:"seletor",onChange:function(e){var t=e.target.value;return l(t)},onClick:function(e){var t=e.target.value;return l(t)},type:"radio",value:"DESC"};return r.a.createElement("form",{className:"pure-form orderForm"},r.a.createElement(k,u),r.a.createElement(y,c),r.a.createElement(y,o))}function w(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-img"},r.a.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-6-1.png",alt:"Star Wars Logo",className:"footer-img"})),r.a.createElement(F,null),r.a.createElement(S,null))}function D(){return r.a.createElement("div",{className:"loadingDiv"},r.a.createElement("img",{src:"https://i.gifer.com/YCZH.gif",alt:"Loading"}))}function P(){return r.a.createElement("section",{className:"filter-not-found"},r.a.createElement("div",null,r.a.createElement("h3",{className:"filter-text"},"FILTER NOT FOUND")),r.a.createElement("div",null,r.a.createElement("img",{src:"http://i.memeful.com/media/post/0Mx3Jpw_700wa_0.gif",alt:"Sad R2D2"})))}function B(e,t,a){return"ASC"===a?(e.sort((function(e,a){return e[t]-a[t]})),e):"DESC"===a?(e.sort((function(e,a){return a[t]-e[t]})),e):void 0}function I(){var e=Object(n.useContext)(d),t=e.planetList,a=e.orderField,l=e.orderRule,u=e.isFilter,c=e.filters.filterByName.name;if(!t.length>0&&u)return r.a.createElement(P,null);if(!t.length>0&&c.length>0)return r.a.createElement(P,null);if(!t.length>0)return r.a.createElement(D,null);return r.a.createElement("main",{id:"table-main"},r.a.createElement("table",{className:"pure-table pure-table-horizontal"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.values(O).map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,(a&&l?function(e,t,a){var n=Object(s.a)(e);return"ASC"===a?(n.sort((function(e,a){return e[t]>a[t]?1:e[t]<a[t]?-1:0})),B(n,t,a)):"DESC"===a?(n.sort((function(e,a){return a[t]>e[t]?1:a[t]<e[t]?-1:0})),B(n,t,a)):void 0}(t,a,l):t).map((function(e){return r.a.createElement("tr",{key:Object(v.uuid)()},Object.keys(O).map((function(t){return r.a.createElement("td",{key:Object(v.uuid)(),"data-testid":"name"===t?"planet-name":null},e[t])})))})))))}function L(){var e=Object(n.useContext)(d),t=e.page,a=e.setPage,l=e.planetList,u={className:"pure-button",id:"previouspageButton",name:"previousButton",onClick:function(){return a(t-1)},text:"Anterior",disabled:1===t},c={className:"pure-button",id:"nextpageButton",name:"nextButton",onClick:function(){return a(t+1)},text:"Pr\xf3ximo",disabled:6===t};return r.a.createElement("footer",null,l.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,j.map((function(e,n){return r.a.createElement("button",{type:"button",key:e,className:n+1===t?"actual-page index-button":"index-button",onClick:function(){return a(n+1)}},e)}))),r.a.createElement("div",null,r.a.createElement(x,u),r.a.createElement(x,c))):null)}function R(){return r.a.createElement("main",null,r.a.createElement(I,null),r.a.createElement(L,null))}function _(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(R,null))}a(21);var V=function(){return r.a.createElement(b,null,r.a.createElement(_,null))};u.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.69d0ede9.chunk.js.map