(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"T+Nf":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Bl7J"),r=a("hh49"),o=a("KQm4"),i=a("K2Fo");function u(e){var t=e.addFieldName,a=Object(n.useState)(""),c=a[0],r=a[1];return l.a.createElement("form",{className:"mb-5",onSubmit:function(e){e.preventDefault(),c&&(t(c),r(""))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"input form-control",placeholder:"New Key",value:c,onChange:function(e){return r(e.target.value)}})),l.a.createElement("button",{className:"btn btn-primary btn-block text-uppercase"},"Add new field type"))}var m=function(){var e=Object(n.useState)([]),t=e[0],a=e[1];Object(n.useEffect)((function(){Object(i.b)().fields&&a(Object(i.b)().fields)}),[]),console.log(t);var c=function(e){var n=Object(o.a)(t);n.splice(e,1),a(n)},r=function(e){e.preventDefault(),Object(i.g)({guid:Object(i.d)().guid,fields:t})},m=function(e){var t=e.fieldname,a=e.index;return l.a.createElement("div",{className:"form-group row"},l.a.createElement("div",{className:"col-10"},l.a.createElement("input",{className:"form-control",value:t.text,onChange:r,disabled:!0})),l.a.createElement("div",{className:"col-2"},l.a.createElement("button",{className:"btn btn-block btn-danger",onClick:function(){return c(a)}},"x")))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",null,"Field Types"),t?t.map((function(e,t){return l.a.createElement(m,{key:t,index:t,fieldname:e,removeremoveFieldName:c})})):null,l.a.createElement(u,{addFieldName:function(e){var n=Object(i.a)(),l=[].concat(Object(o.a)(t),[{text:e,guid:n}]);a(l)}}),l.a.createElement("div",{className:"help-text"},l.a.createElement("p",null,"Create as many field names as you want. This allows to keep key/value pairs nice and consistant everywhere. Once youre done, savie the fields below to synce them to the database.")),l.a.createElement("form",{onSubmit:r},l.a.createElement("button",{className:"btn btn-primary btn-block text-uppercase"},"Save Fields")))},s=a("vrFN");t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(c.a,null,l.a.createElement(s.a,{title:"Field Settings"}),l.a.createElement(m,null)))}},hh49:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=a("K2Fo"),r=a("Wbzz");t.a=function(e){var t=e.children;return Object(c.f)()?l.a.createElement("div",{className:"loggedIn"},t):(Object(r.navigate)("/login"),null)}}}]);
//# sourceMappingURL=component---src-pages-fields-js-3a7c35aed334612be8b8.js.map