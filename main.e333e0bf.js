parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/";document.body.insertAdjacentHTML("beforeend",'\n  <div class="first-received">\n    <h3>\n      First Received\n    </h3>\n    <ul></ul>\n  </div>\n  <div class="all-successful">\n    <h3>\n      All Successful\n    </h3>\n    <ul></ul>\n  </div>\n');var e=function(e){return fetch("".concat(n).concat(e)).then(function(n){if(!n.ok)throw new Error("".concat(n.status," - ").concat(n.statusText));return n.json()})},t=function(n,e){var t=document.querySelector(n).querySelector("ul"),c=document.createElement("li");c.innerText=e,t.append(c)},c=function(n){return Promise.race(n.map(function(n){return e("phones/".concat(n,".json"))})).then(function(n){t(".first-received",n.name)})},r=function(n){return Promise.allSettled(n.map(function(n){return e("phones/".concat(n,".json"))})).then(function(n){n.forEach(function(n){"fulfilled"===n.status&&t(".all-successful",n.value.name)})})},u=function(){return e("phones.json")};u().then(function(n){var e=n.map(function(n){return n.id});return Promise.all([c(e),r(e)])}).catch(function(n){return console.error(n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e333e0bf.js.map