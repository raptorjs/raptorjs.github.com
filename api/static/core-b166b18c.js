(function(){var e=function(e){return e=+e,e!==e?e=0:e!==0&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},t="a"[0]!="a",n=function(e){if(e==null)throw new TypeError("can't convert "+e+" to object");return t&&typeof e=="string"&&e?e.split(""):Object(e)},r=Function.prototype.call,i=Array.prototype,s=Object.prototype,o=i.slice;Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(typeof n!="function")throw new TypeError("Function.prototype.bind called on incompatible "+n);var r=o.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e,u=n.apply(s,r.concat(o.call(arguments)));return Object(u)===u?u:s}return n.apply(t,r.concat(o.call(arguments)))};return i});var u=r.bind(s.toString),a=r.bind(s.hasOwnProperty);Array.isArray||(Array.isArray=function(t){return u(t)=="[object Array]"}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var r=n(this),i=arguments[1],s=-1,o=r.length>>>0;if(u(t)!="[object Function]")throw new TypeError;while(++s<o)s in r&&t.call(i,r[s],s,r)}),Array.prototype.map||(Array.prototype.map=function(t){var r=n(this),i=r.length>>>0,s=Array(i),o=arguments[1];if(u(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var a=0;a<i;a++)a in r&&(s[a]=t.call(o,r[a],a,r));return s}),Array.prototype.filter||(Array.prototype.filter=function(t){var r=n(this),i=r.length>>>0,s=[],o,a=arguments[1];if(u(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var f=0;f<i;f++)f in r&&(o=r[f],t.call(a,o,f,r)&&s.push(o));return s}),Array.prototype.every||(Array.prototype.every=function(t){var r=n(this),i=r.length>>>0,s=arguments[1];if(u(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var o=0;o<i;o++)if(o in r&&!t.call(s,r[o],o,r))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var r=n(this),i=r.length>>>0,s=arguments[1];if(u(t)!="[object Function]")throw new TypeError(t+" is not a function");for(var o=0;o<i;o++)if(o in r&&t.call(s,r[o],o,r))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var r=n(this),i=r.length>>>0;if(u(t)!="[object Function]")throw new TypeError(t+" is not a function");if(!i&&arguments.length==1)throw new TypeError("reduce of empty array with no initial value");var s=0,o;if(arguments.length>=2)o=arguments[1];else do{if(s in r){o=r[s++];break}if(++s>=i)throw new TypeError("reduce of empty array with no initial value")}while(!0);for(;s<i;s++)s in r&&(o=t.call(void 0,o,r[s],s,r));return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var r=n(this),i=r.length>>>0;if(u(t)!="[object Function]")throw new TypeError(t+" is not a function");if(!i&&arguments.length==1)throw new TypeError("reduceRight of empty array with no initial value");var s,o=i-1;if(arguments.length>=2)s=arguments[1];else do{if(o in r){s=r[o--];break}if(--o<0)throw new TypeError("reduceRight of empty array with no initial value")}while(!0);do o in this&&(s=t.call(void 0,s,r[o],o,r));while(o--);return s}),Array.prototype.indexOf||(Array.prototype.indexOf=function(r){var i=n(this),s=i.length>>>0;if(!s)return-1;var o=0;arguments.length>1&&(o=e(arguments[1])),o=o>=0?o:Math.max(0,s+o);for(;o<s;o++)if(o in i&&i[o]===r)return o;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(r){var i=n(this),s=i.length>>>0;if(!s)return-1;var o=s-1;arguments.length>1&&(o=Math.min(o,e(arguments[1]))),o=o>=0?o:s-Math.abs(o);for(;o>=0;o--)if(o in i&&r===i[o])return o;return-1});if(!Object.keys){var f=!0,l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=l.length;for(var h in{toString:null})f=!1;Object.keys=function m(e){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError("Object.keys called on a non-object");var m=[];for(var t in e)a(e,t)&&m.push(t);if(f)for(var n=0,r=c;n<r;n++){var i=l[n];a(e,i)&&m.push(i)}return m}}Date.now||(Date.now=function(){return(new Date).getTime()});var p="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||p.trim()){p="["+p+"]";var d=new RegExp("^"+p+p+"*"),v=new RegExp(p+p+"*$");String.prototype.trim=function(){if(this===undefined||this===null)throw new TypeError("can't convert "+this+" to object");return String(this).replace(d,"").replace(v,"")}}})();
(function(){var e=String.prototype;e.startsWith||(e.startsWith=function(e,t){var n=this;return t&&(n=n.substring(t)),n.length<e.length?!1:n.substring(0,e.length)==e}),e.endsWith||(e.endsWith=function(e,t){var n=this;return t&&(n=n.substring(t)),n.length<e.length?!1:n.slice(0-e.length)==e})})();
(function(){var e,t={},n=function(e){return e&&t[e]||(t[e]={postCreate:[]})},r={},i="/",s={},o=[].slice,u=Array.isArray,a=function(e,t){e||(e={});for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},f=function(e){return typeof e=="string"},l=function(e){return typeof e=="function"},c=function(e,t,n){e!=null&&(e.forEach?e:[e]).forEach(t,n)},h=function(e,t,n){for(var r in e)e.hasOwnProperty(r)&&t.call(n,r,e[r])},p=function(e,t,n){var r=l(t)?t():t,i;return n&&c(n,function(e){if(i=e(r))r=i}),r},d=function(e,t,n){var r=e.prototype,i=function(){},s=f(t)?w(t):t;return a(e,s),i.prototype=s.prototype,e.superclass=i.prototype,e.prototype=new i,n&&a(e.prototype,r),r},v=function(e,t,n){if(!l(e)){var r=e;e=r.init||function(){},a(e.prototype,r)}t&&d(e,t,!0),e.getName=e.getName||function(){return n};var i=e.prototype;return i.constructor=e,i.getClass=function(){return e},e},m=function(){return this._ordinal},g=function(){return this._name},y=function(e){return this._ordinal-e._ordinal},b=function(e,t){e.charAt(0)==i&&(e=e.substring(1));if(e.charAt(0)=="."){if(!t)return e;var n=t.split(i).slice(0,-1);return c(e.split(i),function(e,t){e==".."?n.splice(n.length-1,1):e!="."&&n.push(e)}),n.join(i)}return e.replace(/\./g,i)},w=function(n,i,s){if(i)return w("raptor/loader").load(n,i,s);if(r.hasOwnProperty(n))return r[n];if(e.exists(n)){var o=t[n];return r[n]=p(n,o.factory,o.postCreate)}throw new Error(n+" not found")},E={load:function(e,t){var n=this.normalize;u(e)||(e=[e]);for(var r=0,i=e.length;r<i;r++)e[r]=n(e[r]);return w(e,t)},exists:function(t){return e.exists(this.normalize(t))},find:function(t){return e.find(this.normalize(t))}},S={extend:function(){return N(arguments,this.require,0,1)},Class:function(){return N(arguments,this.require,1)},Enum:function(){return N(arguments,this.require,0,0,1)}},x=function(e){return a(e,S)},T=function(e){return a(e,E)},N=function(t,n,r,i,s){var o=0,p=t.length-1,d,w,E,S,x,N=[],k,L,A=T(function(e,t){return t?A.load(e,t):n(e,E)}),O=new C(A),M=O.exports,_={require:A,exports:M,module:O},D=function(){return c(N,function(e,t){var r;(r=_[e])||(r=n(e,E)),N[t]=r}),N};A.normalize=function(e){return b(e,E)};for(;o<p;o++)w=t[o],f(w)?E?S=b(w,E):E=O.id=b(w):u(w)?N=w:s?x=w:S=w.superclass;return L=t[p],i?k=function(t){l(L)&&(L=L.apply(e,D().concat([A,t]))),L&&a(l(t)?t.prototype:t,L)}:(r||S?k=function(e){return S=f(S)?A(S):S,v(e,S,E)}:s&&(u(L)&&(x=L,L=null),k=function(e){e?typeof e=="object"&&(e=v(e,0,E)):e=function(){};var t=e.prototype,n=0,r=function(t,r){return a(e[t]=new r,{_ordinal:n++,_name:t})};if(u(x))c(x,function(t){r(t,e)});else if(x){var i=function(){};i.prototype=t,h(x,function(t,n){e.apply(r(t,i),n||[])})}return e.valueOf=function(t){return e[t]},a(t,{name:g,ordinal:m,compareTo:y}),t.toString==Object.prototype.toString&&(t.toString=g),e}),d=l(L)?function(){var t=L.apply(e,D().concat([A,M,O]));return t===undefined?O.exports:t}:L),e.define(E,d,k)},C=function(e){var t=this;t.require=e,t.exports={}};C.prototype={logger:function(){var e=this;return e.l||(e.l=w("raptor/logging").logger(e.id))}},e={cache:r,inherit:d,extend:a,forEach:c,arrayFromArguments:function(e,t){return e?t?t<e.length?o.call(e,t):[]:o.call(e):[]},forEachEntry:h,createError:function(e,t){var n,r=arguments.length,i=Error;return r==2?(n=e instanceof i?e:new i(e),n._cause=t):r==1&&(e instanceof i?n=e:n=new i(e)),n},define:function(t,i,s){if(!t)return p.apply(e,arguments);var o=n(t),u;i&&(o.factory=i),s&&(o.postCreate.push(s),(u=r[t])&&s(u)),typeof u=="object"&&u.toString===Object.prototype.toString&&(u.toString=function(){return"["+t+"]"})},exists:function(e){return t.hasOwnProperty(e)},find:function(t){return e.exists(t)?e.require(t):undefined},require:w,normalize:b,_define:N,props:[E,S]};var k;if(typeof window!="undefined"){k=window;var L=S.require=function(e,t){return w(b(e,t))};define=x(function(){return N(arguments,L)}),require=T(function(e,t){return l(t)?require.load(e,t):w(b(e))}),require.normalize=b,define.amd={}}else k=global,module.exports=e;e.define("raptor",e),a(k,{$rset:function(e,t,n){if(typeof t=="object")h(t,function(t,n){$rset(e,t,n)});else{var r=s[e];r||(r=s[e]={}),n!==undefined?r[t]=n:delete r[t]}},$radd:function(e,t){var n=s[e];n||(n=s[e]=[]),n.push(t)},$rget:function(e,t){var n=s[e];return arguments.length==2?n&&n[t]:n}}),e.global=k})();
define("raptor/logging",["raptor"],function(e){var t=function(){return!1},n={isTraceEnabled:t,isDebugEnabled:t,isInfoEnabled:t,isWarnEnabled:t,isErrorEnabled:t,isFatalEnabled:t,dump:t,trace:t,debug:t,info:t,warn:t,error:t,fatal:t};return{logger:function(e){return n},configure:t,voidLogger:n}});
define("raptor/listeners",["raptor"],function(e,t){"use strict";var n=e.forEachEntry,r=Array.isArray,i=e.extend,s=0,o="__lstnrs",u=function(){},a,f=function(e,t){return e?t?function(){e.apply(t,arguments)}:e:u},l=function(e){var t=[],n;e._listeners.forEach(function(e){e.removed?(n=e.thisObj)&&delete n[o][e.id]:t.push(e)}),e._listeners=t,e._listeners.length||e._onEmpty()},c=function(e,t){t.removed=!0,l(e)},h=function(e,t){return function(){c(e,t)}},p=function(t){return function(r){if(!arguments.length)n(t,function(e,t){t.remove()});else{var i=t[r];if(!i)throw e.createError(new Error("Invalid message name: "+r));i.unsubscribe()}}},d=function(e,t){this.name=e,this.data=t};d.prototype={getName:function(){return this.name},getData:function(){return this.data}};var v=function(){this._listeners=[],this._onEmpty=u};v.prototype={add:function(e,t,n){var r=this,i,u={callback:e,thisObj:t,removed:!1,autoRemove:n,id:s++},a;i=u.remove=h(r,u),r._listeners.push(u);var f={remove:i};return f.unsubscribe=f.remove,t&&((a=t[o])||(a=t[o]={}),a[u.id]=f),f},publish:function(){var e=arguments,t=this;t._listeners.forEach(function(n){if(n.removed)return;n.callback.apply(n.thisObj,e),n.autoRemove&&c(t,n)})},onEmpty:function(e,t){this._onEmpty=f(e,t)},removeAll:function(){var e=this._listeners;for(var t=0;t<e.length;t++)e[t].removed=!0;l(this)}};var m=function(e,t){var n=t._allowed;if(n&&!n[e])throw new Error('Invalid message name of "'+e+'". Allowed messages: '+Object.keys(n).join(", "))},g=function(e){return function(t){var n=[e].concat(Array.prototype.slice.call(arguments));this[typeof t=="function"?"subscribe":"publish"].apply(this,n)}},y=function(){this._byName||(this._byName={})};return y.prototype={__observable:!0,registerMessages:function(e,t){this._allowed||(this._allowed={});for(var n=0,r=e.length;n<r;n++){var i=e[n];this._allowed[i]=!0,t&&(this[i]=g(i))}},subscribe:function(e,t,r,i){var s=this,o,u;if(typeof e=="object")return i=r,r=t,o={},n(e,function(e,t){o[e]=s.subscribe(e,t,r,i)}),u={unsubscribe:p(o)},u.remove=u.removeAll=u.unsubscribe,u;m(e,s);var a=s._byName[e];return a||(s._byName[e]=a=new v,a.onEmpty(function(){delete s._byName[e]})),a.add(t,r,i)},unsubscribeAll:function(){var e=this;n(e._byName,function(e,t){t.removeAll()}),e._byName={}},publish:function(e,t){var n;r(t)?n=t:(a.isMessage(e)?(t=e,e=t.getName()):t=a.createMessage(e,t),n=[t.data,t]),m(e,this);var i=this,s=function(e){var t=i._byName[e];if(!t)return;t.publish.apply(t,n)};s(e),s("*");var o=e.lastIndexOf(".");return o>=0&&s(e.substring(0,o+1)+"*"),t}},a={Message:d,createListeners:function(){return new v},createObservable:function(e,t){var n=new y;return e&&n.registerMessages(e,t),n},makeObservable:function(e,t,n,r){t||(t=e),t.__observable||i(t,y.prototype),y.call(e),n&&e.registerMessages(n,r)},isObervable:function(e){return e&&e.__observable},createMessage:function(e,t){return new d(e,t)},isMessage:function(e){return e instanceof d},bind:f,unsubscribeFromAll:function(e){var t=e[o];if(t)for(var n in t)t[n].unsubscribe()}},a});