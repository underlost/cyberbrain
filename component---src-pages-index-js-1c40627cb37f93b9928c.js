(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"33yf":function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",a=!1,o=arguments.length-1;o>=-1&&!a;o--){var l=o>=0?arguments[o]:e.cwd();if("string"!=typeof l)throw new TypeError("Arguments to path.resolve must be strings");l&&(t=l+"/"+t,a="/"===l.charAt(0))}return(a?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!a).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),l="/"===a(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&l&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),o=r(n.split("/")),l=Math.min(a.length,o.length),s=l,c=0;c<l;c++)if(a[c]!==o[c]){s=c;break}var i=[];for(c=s;c<a.length;c++)i.push("..");return(i=i.concat(o.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!a){r=o;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){n=t+1;break}}else-1===r&&(a=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,a=!0,o=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47!==s)-1===r&&(a=!1,r=l+1),46===s?-1===t?t=l:1!==o&&(o=1):-1!==t&&(o=-1);else if(!a){n=l+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("vrFN"),l=n("hh49"),s=n("Zsri"),c=n.n(s),i=n("K2Fo"),u=n("33yf"),f=n.n(u),m=n("wx14"),b=n("zLVn"),v=n("TSYQ"),h=n.n(v),d=n("XcHJ"),p=n("i52p"),g=Math.pow(2,31)-1;function j(){var e=Object(d.a)(),t=Object(r.useRef)();return Object(p.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=g?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=g?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),g)}(t,r,Date.now()+a))},clear:n}}),[])}var E=n("7xGa"),y=n("ZCiN"),N=n("vUet"),O=n("XQC9"),w=a.a.createContext({onClose:function(){}}),C=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.closeLabel,l=e.closeButton,s=e.className,c=e.children,i=Object(b.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);n=Object(N.a)(n,"toast-header");var u=Object(r.useContext)(w),f=Object(y.a)((function(e){u&&u.onClose&&u.onClose(e)}));return a.a.createElement("div",Object(m.a)({ref:t},i,{className:h()(n,s)}),c,l&&a.a.createElement(O.a,{label:o,onClick:f,className:"ml-2 mb-1","data-dismiss":"toast"}))}));C.displayName="ToastHeader",C.defaultProps={closeLabel:"Close",closeButton:!0};var x=C,A=n("YdCC"),k=Object(A.a)("toast-body"),T=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,l=e.children,s=e.transition,c=void 0===s?E.a:s,i=e.show,u=void 0===i||i,f=e.animation,v=void 0===f||f,d=e.delay,p=void 0===d?3e3:d,g=e.autohide,y=void 0!==g&&g,O=e.onClose,C=Object(b.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);n=Object(N.a)(n,"toast");var x=Object(r.useRef)(p),A=Object(r.useRef)(O);Object(r.useEffect)((function(){x.current=p,A.current=O}),[p,O]);var k=j(),T=!(!y||!u),S=Object(r.useCallback)((function(){T&&(null==A.current||A.current())}),[T]);Object(r.useEffect)((function(){k.set(S,x.current)}),[k,S]);var B=Object(r.useMemo)((function(){return{onClose:O}}),[O]),P=!(!c||!v),J=a.a.createElement("div",Object(m.a)({},C,{ref:t,className:h()(n,o,!P&&(u?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),l);return a.a.createElement(w.Provider,{value:B},P&&c?a.a.createElement(c,{in:u,unmountOnExit:!0},J):J)}));T.displayName="Toast";var S=Object.assign(T,{Body:k,Header:x}),B=n("Bl7J"),P=function(){var e=Object(i.d)().siteName,t=Object(i.d)().siteAPI,n=Object(r.useState)(""),o=n[0],l=n[1],s=Object(r.useState)(""),u=s[0],m=s[1],b=Object(r.useState)(!1),v=b[0],h=b[1],d=new c.a({url:e,key:t,version:"v3"});var p=function(e){e.preventDefault();var t=o,n=u,r=JSON.stringify({version:"0.3.1",markups:[],atoms:[],cards:[["html",{cardName:"html",html:n}]],sections:[[10,0]]});(function(e){for(var t,n=/="([^"]*?(?:\.jpg|\.jpeg|\.gif|\.png|\.svg|\.sgvz))"/gim,r=[];null!==(t=n.exec(e));){var a=t[1];r.push(d.images.upload({ref:a,file:f.a.resolve(a)}))}return Promise.all(r).then((function(t){return t.forEach((function(t){return e=e.replace(t.ref,t.url)})),e}))})(n).then(d.posts.add({title:t,tags:["#aside"],mobiledoc:r}).then((function(e){return console.log(JSON.stringify(e))})).catch((function(e){return console.log(e)}))).catch((function(e){return console.log(e)})),h(!0),l(""),m("")};return a.a.createElement(a.a.Fragment,null,a.a.createElement(B.a,null,a.a.createElement("form",{className:"form",method:"post",onSubmit:function(e){p(e)}},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label d-block"},a.a.createElement("span",{className:"sr-only"},"Title"),a.a.createElement("input",{className:"form-control form-control-subtle px-0",type:"text",placeholder:"Title (optional)",name:"title",value:o,onChange:function(e){return l(e.target.value)}}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"label d-block"},a.a.createElement("span",{className:"sr-only"},"Content"),a.a.createElement("textarea",{className:"form-control form-control-subtle px-0",type:"text",placeholder:"Start typing something...",name:"content",value:u,onChange:function(e){return m(e.target.value)}}))),a.a.createElement("div",{className:"text-right"},a.a.createElement("input",{className:"btn btn-primary text-lowercase",type:"submit",value:"Share"})))),a.a.createElement("div",{style:{position:"absolute",bottom:"20px",right:"20px"}},a.a.createElement(S,{onClose:function(){return h(!1)},show:v,delay:3e3,autohide:!0},a.a.createElement(S.Header,null,a.a.createElement("strong",{className:"mr-auto"},"Notice")),a.a.createElement(S.Body,null,"A new post was sucessfully created."))))};t.default=function(){return a.a.createElement(l.a,null,a.a.createElement(o.a,{title:"Share something..."}),a.a.createElement(P,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1c40627cb37f93b9928c.js.map