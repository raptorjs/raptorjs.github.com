define("raptor/dom",function(e){"use strict";var t=function(e){if(typeof e=="string"){var t=e;e=document.getElementById(t);if(!e)throw raptor.createError(new Error('Target element not found: "'+t+'"'))}return e},n=function(t){var n=e.find("raptor/pubsub");n&&n.publish("dom/beforeRemove",{el:t})},r={forEachChildEl:function(e,t,n){r.forEachChild(e,t,n,1)},forEachChild:function(e,t,n,r){if(!e)return;var i=0,s=e.childNodes,o=s.length;for(;i<o;i++){var u=s[i];u&&(r==null||r==u.nodeType)&&t.call(n,u)}},detach:function(e){e=t(e),e.parentNode.removeChild(e)},appendTo:function(e,n){t(n).appendChild(t(e))},replace:function(e,r){r=t(r),n(r),r.parentNode.replaceChild(t(e),r)},replaceChildrenOf:function(e,i){i=t(i),r.forEachChildEl(i,function(e){n(e)}),i.innerHTML="",i.appendChild(t(e))},insertBefore:function(e,n){n=t(n),n.parentNode.insertBefore(t(e),n)},insertAfter:function(e,n){n=t(n),e=t(e);var r=n.nextSibling,i=n.parentNode;r?i.insertBefore(e,r):i.appendChild(e)},prependTo:function(e,n){n=t(n),n.insertBefore(t(e),n.firstChild||null)}};return r});