(this.webpackJsonptask_2=this.webpackJsonptask_2||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(12),r=n.n(a),o=(n(42),n(15)),d=n(4);n(43),n(44);var b=function(){var e={color:"#FFFFFF",textDecoration:"none"};return Object(c.jsx)("div",{className:"nav-wrapper",children:Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)("h2",{children:"BeerShop"}),Object(c.jsxs)("ul",{className:"nav__list",children:[Object(c.jsx)(o.b,{style:e,to:"/",children:Object(c.jsx)("li",{children:"Home"})}),Object(c.jsx)(o.b,{style:e,to:"/catalog",children:Object(c.jsx)("li",{children:"Catalog"})}),Object(c.jsx)(o.b,{style:e,to:"/about",children:Object(c.jsx)("li",{children:"About"})})]})]})})},j=n(19),l=n(5),u=n(27),O=n.n(u),m=n(3),p=n(35),f=n(30),h="FETCH_CATALOG",v="SHOW_LOADER",x="HIDE_LOADER",I="ADD_ALL_TO_BASKET",y="REMOVE_ALL_FROM_BASKET",k="DRAG_ITEM",_="ADD_TO_BASKET",g="REMOVE_FROM_BASKET",S="ON_INPUT",B="FETCH_CLICK";n(51);var N=function(){return Object(c.jsx)("div",{className:"loadingio-spinner-bean-eater-6o1jck7o6s5",children:Object(c.jsxs)("div",{className:"ldio-7slxxstf83s",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})]})})},E=n(31),T=n(32),w=n(36),C=n(34);n(52);var D=function(e){var t,n=e.content,s=e.id,i=Object(l.d)((function(e){return e.catalog.items.columns})).inBasket,a=Object(l.c)();return t=-1===i.itemsIds.indexOf(s)?Object(c.jsx)("button",{id:s,onClick:function(e){var t;a((t=e.target.id,{type:_,payload:t}))},type:"button",className:"item__btn item__btn--basket"}):Object(c.jsx)("button",{id:s,onClick:function(e){var t;a((t=e.target.id,{type:g,payload:t}))},type:"button",className:"item__btn item__btn--rmv"}),Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("span",{className:"item__name",children:n}),t]})},A=(n(53),function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(e){var c;return Object(E.a)(this,n),(c=t.call(this,e)).myref=i.a.createRef(),c.state={numToShow:14},c.intersectionObserver=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&c.setState({numToShow:c.state.numToShow+5})})),c}return Object(T.a)(n,[{key:"componentDidMount",value:function(){this.intersectionObserver.observe(this.myref.current)}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,s=t.byIds,i=this.props.renderButton();return Object(c.jsx)(j.c,{droppableId:this.props.id,children:function(t,a){return Object(c.jsxs)("div",{className:"items-container",children:[i,Object(c.jsxs)("ul",Object(m.a)(Object(m.a)({className:"items-container__list"},t.droppableProps),{},{ref:t.innerRef,style:{background:a.isDraggingOver?"lightblue":"lightgrey"},children:[n.slice(0,e.state.numToShow).map((function(e,t){return Object(c.jsx)(j.b,{draggableId:e,index:t,children:function(t,n){return Object(c.jsx)("li",Object(m.a)(Object(m.a)(Object(m.a)({className:"items-container__item",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(m.a)({backgroundColor:n.isDragging?"#72d7ff":"#d6efff"},t.draggableProps.style),children:Object(c.jsx)(D,{content:s[e].name,id:e})}))}},e)})),t.placeholder,Object(c.jsx)("div",{ref:e.myref})]}))]})}})}}]),n}(s.Component)),R=n(14);var F=function(e,t){var n=Object(s.useState)(e),c=Object(R.a)(n,2),i=c[0],a=c[1];return Object(s.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e,t]),i};n(54);var L=Object(l.b)(null,(function(e){return{onInput:function(t){e(function(e){return{type:S,payload:e.trim()}}(t))}}}))((function(e){var t=e.onInput,n=Object(s.useState)(""),i=Object(R.a)(n,2),a=i[0],r=i[1],o=F(a,300);return Object(s.useEffect)((function(){return t(o)}),[o,t]),Object(c.jsx)("input",{className:"search-input",type:"text",placeholder:"type to search",value:a,onChange:function(e){r(e.target.value)}})}));n(55),n(56);var H=function(){var e=Object(s.useState)(!1),t=Object(R.a)(e,2),n=t[0],i=t[1],a=Object(s.useRef)(),r=Object(s.useRef)(),o=[a,r],d=function(){i(o.some((function(e){return e.current.checked})))},b=Object(l.c)();return Object(c.jsxs)("div",{className:"preload",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"preload__question",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043d\u0430\u043f\u0438\u0442\u043a\u0430:"}),Object(c.jsxs)("div",{className:"preload__controls",children:[Object(c.jsx)("input",{className:"preload__input",id:"pivo",ref:a,onClick:d,name:"drink",type:"radio"}),Object(c.jsx)("label",{htmlFor:"pivo",children:"\u041f\u0438\u0432\u043e"}),Object(c.jsx)("input",{className:"preload__input",id:"beer",ref:r,onClick:d,name:"drink",type:"radio"}),Object(c.jsx)("label",{htmlFor:"beer",children:"Beer"})]})]}),Object(c.jsx)("button",{type:"button",disabled:!n,className:"preload__btn",onClick:function(){b(function(){var e=Object(f.a)(O.a.mark((function e(t){var n,c,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:v}),e.next=4,fetch("https://api.punkapi.com/v2/beers?per_page=80");case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,s=[],i={},c.forEach((function(e){var t=e.id,n=Object(p.a)(e,["id"]);s.push(t.toString()),i[t]=Object(m.a)({},n)})),t({type:h,payload:{columns:{inStock:{id:"inStock",itemsIds:s},inBasket:{id:"inBasket",itemsIds:[]}},byIds:i}}),t({type:x}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()),b({type:B})},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433"})]})},M=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.catalog.items})),n=t.columns,s=t.byIds,a=n.inStock,r=n.inBasket,o=Object(l.d)((function(e){return e.app.loading})),d=function(e){return!e.length},b=Object(l.d)((function(e){return e.button.clicked})),u=function(){var t;a.itemsIds.length&&e((t=a.itemsIds,{type:I,payload:t}))},O=function(){var t;r.itemsIds.length&&e((t=r.itemsIds,{type:y,payload:t}))};if(o)return Object(c.jsx)(N,{});if(!b)return Object(c.jsx)(H,{});return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(L,{}),Object(c.jsx)("div",{className:"catalog__list",children:Object(c.jsxs)(j.a,{onDragEnd:function(t){e(function(e){return{type:k,result:e}}(t))},children:[Object(c.jsx)(A,{items:a.itemsIds,byIds:s,id:a.id,renderButton:function(){return Object(c.jsx)("button",{type:"button",disabled:d(a.itemsIds),className:"catalog__control",onClick:u,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435"})}}),Object(c.jsx)(A,{items:r.itemsIds,byIds:s,id:r.id,renderButton:function(){return Object(c.jsx)("button",{type:"button",disabled:d(r.itemsIds),className:"catalog__control",onClick:O,children:"\u0423\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435"})}})]})})]})};n(57);var K=function(){return Object(c.jsx)("div",{className:"catalog",children:Object(c.jsx)(M,{})})};var P=function(){return Object(c.jsx)("h2",{children:"Welcome to the BeerShop!"})};var V=function(){return Object(c.jsx)("h2",{children:"Here you can find info about our company!"})};var X=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,component:P}),Object(c.jsx)(d.a,{path:"/catalog",component:K}),Object(c.jsx)(d.a,{path:"/about",component:V})]})})]})},U=n(10),G=n(33),J={loading:!1},W=n(16),q=n(8),z={items:{columns:{inStock:{id:"inStock",itemsIds:[]},inBasket:{id:"inBasket",itemsIds:[]}},byIds:{}}},Q={clicked:!1},Y=Object(U.c)({catalog:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return Object(m.a)(Object(m.a)({},t),{},{items:n.payload});case k:var c=n.result,s=c.destination,i=c.source,a=c.draggableId;if(!s)return t;if(s.droppableId===i.droppableId&&s.index===i.index)return t;var r=t.items.columns[i.droppableId],o=t.items.columns[s.droppableId];if(r===o){var d=Object(q.a)(r.itemsIds);d.splice(i.index,1),d.splice(s.index,0,a);var b=Object(m.a)(Object(m.a)({},r),{},{itemsIds:d});return Object(m.a)(Object(m.a)({},t),{},{items:{columns:Object(m.a)(Object(m.a)({},t.items.columns),{},Object(W.a)({},b.id,b)),byIds:Object(m.a)({},t.items.byIds)}})}var j=Object(q.a)(r.itemsIds);j.splice(i.index,1);var l=Object(m.a)(Object(m.a)({},r),{},{itemsIds:j}),u=Object(q.a)(o.itemsIds);u.splice(s.index,0,a);var O=Object(m.a)(Object(m.a)({},o),{},{itemsIds:u});return Object(m.a)(Object(m.a)({},t),{},{items:{columns:Object(m.a)(Object(m.a)({},t.items.columns),{},(e={},Object(W.a)(e,l.id,l),Object(W.a)(e,O.id,O),e)),byIds:Object(m.a)({},t.items.byIds)}});case I:return Object(m.a)(Object(m.a)({},t),{},{items:Object(m.a)(Object(m.a)({},t.items),{},{columns:{inStock:{id:"inStock",itemsIds:[]},inBasket:{id:"inBasket",itemsIds:[].concat(Object(q.a)(t.items.columns.inBasket.itemsIds),Object(q.a)(n.payload))}}})});case y:return Object(m.a)(Object(m.a)({},t),{},{items:{byIds:Object(m.a)({},t.items.byIds),columns:{inStock:{id:"inStock",itemsIds:[].concat(Object(q.a)(n.payload),Object(q.a)(t.items.columns.inStock.itemsIds))},inBasket:{id:"inBasket",itemsIds:[]}}}});case _:var p=t.items.columns.inStock.itemsIds.indexOf(n.payload);return Object(m.a)(Object(m.a)({},t),{},{items:{byIds:Object(m.a)({},t.items.byIds),columns:{inStock:{id:"inStock",itemsIds:[].concat(Object(q.a)(t.items.columns.inStock.itemsIds.slice(0,p)),Object(q.a)(t.items.columns.inStock.itemsIds.slice(p+1)))},inBasket:{id:"inBasket",itemsIds:[].concat(Object(q.a)(t.items.columns.inBasket.itemsIds),[n.payload])}}}});case g:var f=t.items.columns.inBasket.itemsIds.indexOf(n.payload);return Object(m.a)(Object(m.a)({},t),{},{items:{byIds:Object(m.a)({},t.items.byIds),columns:{inStock:{id:"inStock",itemsIds:[n.payload].concat(Object(q.a)(t.items.columns.inStock.itemsIds))},inBasket:{id:"inBasket",itemsIds:[].concat(Object(q.a)(t.items.columns.inBasket.itemsIds.slice(0,f)),Object(q.a)(t.items.columns.inBasket.itemsIds.slice(f+1)))}}}});case S:var v=n.payload?n.payload:"";return Object(m.a)(Object(m.a)({},t),{},{items:Object(m.a)(Object(m.a)({},t.items),{},{columns:Object(m.a)(Object(m.a)({},t.items.columns),{},{inStock:{id:"inStock",itemsIds:Object(q.a)(Object.keys(t.items.byIds).filter((function(e){return t.items.byIds[e].name.toLowerCase().indexOf(v.toLowerCase())>-1&&-1===t.items.columns.inBasket.itemsIds.indexOf(e)})))}})})});default:return t}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case x:return Object(m.a)(Object(m.a)({},e),{},{loading:!1});default:return e}},button:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(m.a)(Object(m.a)({},e),{},{clicked:!0});default:return e}}}),Z=Object(U.e)(Y,Object(U.d)(Object(U.a)(G.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),$=Object(c.jsx)(l.a,{store:Z,children:Object(c.jsx)(X,{})});r.a.render($,document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4289a45d.chunk.js.map