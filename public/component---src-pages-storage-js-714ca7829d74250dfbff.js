(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"d/jA":function(e,t,a){"use strict";var n=a("KQm4"),l=a("q1tI"),c=a.n(l),r=a("K2Fo");function i(e){var t=e.addFieldName,a=Object(l.useState)(""),n=a[0],i=a[1],u=Object(l.useState)(""),o=u[0],m=u[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n&&(t(o,n),i(""),m(""))},className:"mb-4"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col-4"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("select",{className:"custom-select",id:"inputGroupSelect01",onChange:function(e){return m(e.target.value)}},c.a.createElement("option",{selected:!0},"Key"),Object(r.b)().fields?Object(r.b)().fields.map((function(e,t){return c.a.createElement("option",{key:t,index:t,value:e.text},e.text)})):null))),c.a.createElement("div",{className:"col-8"},c.a.createElement("input",{type:"text",className:"input form-control",value:n,placeholder:"Value",onChange:function(e){return i(e.target.value)}}))),c.a.createElement("button",{className:"btn btn-primary btn-block text-uppercase"},"Add new custom Field"))}t.a=function(){var e=Object(l.useState)([]),t=e[0],a=e[1];Object(l.useEffect)((function(){Object(r.c)().fields&&a(Object(r.c)().fields)}),[]),console.log(Object(r.c)().fields);var u=function(e){var l=Object(n.a)(t);l.splice(e,1),a(l)},o=function(e){e.preventDefault(),Object(r.h)({guid:Object(r.d)().guid,fields:t})},m=function(e){var t=e.fieldname,a=e.index;return c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-3"},c.a.createElement("input",{type:"text",className:"input form-control",value:t.key,disabled:!0})),c.a.createElement("div",{className:"col-7"},c.a.createElement("input",{type:"text",className:"input form-control",value:t.value,onChange:o,disabled:!0})),c.a.createElement("div",{className:"col-2"},c.a.createElement("button",{className:"btn btn-block btn-warning",onClick:function(){return u(a)}},"x")))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",{className:"h6 text-uppercase"},"Current Site Fields"),t?t.map((function(e,t){return c.a.createElement(m,{key:t,index:t,fieldname:e,removeremoveFieldName:u})})):null,c.a.createElement("h6",null,"Add New Field"),c.a.createElement(i,{addFieldName:function(e,l){var c=Object(r.a)(),i=[].concat(Object(n.a)(t),[{key:e,value:l,guid:c}]);a(i)}}),c.a.createElement("form",{onSubmit:o},c.a.createElement("button",{className:"btn btn-primary btn-block ttext-uppercase"},"Save Fields")))}},hh49:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=a("K2Fo"),r=a("Wbzz");t.a=function(e){var t=e.children;if("undefined"!=typeof window)return Object(c.f)()?l.a.createElement("div",{className:"loggedIn"},t):(Object(r.navigate)("/login"),null)}},jNsp:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Bl7J"),r=a("hh49"),i=a("d/jA"),u=a("vrFN");t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(c.a,null,l.a.createElement(u.a,{title:"Storage Settings"}),l.a.createElement(i.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-storage-js-714ca7829d74250dfbff.js.map