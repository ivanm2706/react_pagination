(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),r=c(2),i=c(1),l=c(3),s=c.n(l);function o(e){for(var t=[],c=1;c<=e;c+=1)t.push(c);return t}function j(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return{start:e*t-e+1,end:e*t>c?c:e*t}}var u=c(0),d=function(e){var t=e.total,c=e.perPage,a=e.currentPage,n=e.onPageChange,r=function(e){n(+e.currentTarget.id)};return Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:s()("page-item",{disabled:1===a}),children:Object(u.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":"true",onClick:function(){n(a-1)},children:"\xab"})}),o(Math.ceil(t/c)).map((function(e){return Object(u.jsx)("li",{className:s()("page-item",{active:a===e}),children:Object(u.jsx)("a",{"data-cy":"pageLink",id:"".concat(e),className:"page-link",href:"#".concat(e),onClick:r,children:e})})})),Object(u.jsx)("li",{className:s()("page-item",{disabled:Math.ceil(t/c)===a}),children:Object(u.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"true",onClick:function(){n(a+1)},children:"\xbb"})})]})},h=(c(11),function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)}))),b=function(){var e=Object(i.useState)(5),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],o=l[1],b=Object(i.useState)(h.slice(0,c)),g=Object(r.a)(b,2),p=g[0],m=g[1],O=Object(i.useState)((function(){return j(c,1)})),f=Object(r.a)(O,2),x=f[0],v=f[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ".concat(s," "),"(items ".concat(x.start," - ").concat(x.end," of ").concat(h.length,")")]}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){var t=+e.currentTarget.value;o(1),a(t),m(h.slice(1*t-t,t)),v(j(t,1))},children:[Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"20",children:"20"})]})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(d,{total:h.length,perPage:c,currentPage:s,onPageChange:function(e){o(e),v(j(c,e,h.length)),m(h.slice(c*e-c,c*e>h.length?h.length:c*e))}}),Object(u.jsx)("ul",{children:p.map((function(e){return Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.78bcbedb.chunk.js.map