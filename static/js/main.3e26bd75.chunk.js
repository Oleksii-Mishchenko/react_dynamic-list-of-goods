(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),c=n(5),a=n(6),s=n(3),i=n.n(s),u=n(1),d=n.n(u),l=(n(12),n(0)),b=d.a.memo((function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){var t=Object(u.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=function(){var t=Object(c.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="all"===t.t0?3:"firstFive"===t.t0?7:"red"===t.t0?11:15;break;case 3:return t.next=5,f();case 5:return n=t.sent,t.abrupt("break",16);case 7:return t.next=9,f().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 9:return n=t.sent,t.abrupt("break",16);case 11:return t.next=13,f().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 13:return n=t.sent,t.abrupt("break",16);case 15:throw new Error("Can not handle this request");case 16:r(n);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){o("all")},children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){o("firstFive")},children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){o("red")},children:"Load red goods"}),Object(l.jsx)(b,{goods:n})]})};o.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3e26bd75.chunk.js.map