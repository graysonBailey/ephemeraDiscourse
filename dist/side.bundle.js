(()=>{var e={3153:(e,t,n)=>{var r=n(3645),o=n(1667),i=n(6094),a=n(4622),l=n(9685);t=r(!1);var c=o(i),s=o(a),d=o(l);t.push([e.id,"body {\r\n  padding: 0;\r\n  margin: 10;\r\n  overflow-y:scroll;\r\n  height:100%;\r\n}\r\n\r\n@font-face {\r\n  font-family: OCRA;\r\n\r\n  src: url("+c+");\r\n}\r\n\r\n@font-face{\r\n  font-family: cam;\r\n  src : url("+s+");\r\n}\r\n\r\n@font-face{\r\n  font-family: miso;\r\n  src : url("+d+");\r\n}\r\n\r\n.instructions{\r\n  border:none;\r\n  outline:none;\r\n  color:black;\r\n  position: fixed;\r\n  font-family:OCRA;\r\n  font-size: 14px;\r\n  top:6vh;\r\n  left:1200px;\r\n  height:100;\r\n  width:300px;\r\n  z-index:3;\r\n}\r\n\r\n\r\n.notes {\r\n  border:none;\r\n  outline:none;\r\n  position: absolute;\r\n  background-color:rgba(180,180,180,.5);\r\n  font-family:OCRA;\r\n  font-size: 12px;\r\n  top: 200px;\r\n  left:400px;\r\n  height:300;\r\n  width:600;\r\n  z-index:3;\r\n}\r\n\r\n.discourseElement {\r\n  width: 400;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  color:black;\r\n  font-size: 17;\r\n  border: 1px solid black;\r\n  font-family: miso;\r\n    padding: 5px 5px 8px 5px;\r\n}\r\n\r\n.discourseQualities {\r\n  width: 100;\r\n  overflow: hidden;\r\n  background-color: rgba(180,180,180);\r\n  color:black;\r\n  font-size: 13;\r\n  font-family: miso;\r\n}\r\n\r\n.response{\r\n  background-color: #FF0033;\r\n  border: none;\r\n}\r\n\r\n.composition{\r\n  background-color: #33FFCC;\r\n  border: none;\r\n}\r\n\r\n.quote{\r\nbackground-color: black;\r\nborder: 1px solid white;\r\ncolor: white;\r\n}\r\n\r\n.editorial{\r\n  background-color:#FFCC00;\r\n  border: none;\r\n}\r\n\r\n.discourseCitation {\r\n  width: 400 ;\r\n  overflow: hidden;\r\n  color:black;\r\n  font-size: 16;\r\n  font-family: miso;\r\n}\r\n\r\n\r\n\r\n.discourseElementSVG {\r\n  width: 400;\r\n  overflow: hidden;\r\n  background-color: rgba(255,255,255,.8);\r\n  color:black;\r\n  font-size: 14.5;\r\n  font-family: cam;\r\n}\r\n\r\n.discourseCitation {\r\n  width: 400 ;\r\n  overflow: hidden;\r\n  color:black;\r\n  font-size: 13;\r\n  font-family: miso;\r\n}\r\n\r\n.discourseRelations {\r\n  width: 100 ;\r\n  overflow: hidden;\r\n  color:black;\r\n  font-size: 13;\r\n  font-family: miso;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n\r\n.letsHeadIt{\r\n  font-family: OCRA;\r\n  background-color: rgba(45,45,45);\r\n  color:white;\r\n  font-size: 13;\r\n  letter-spacing: 8px;\r\n}\r\n\r\n.letsHeadItRed{\r\n  font-family: OCRA;\r\n  background-color: rgba(255,0,51);\r\n  color:white;\r\n  font-size: 13;\r\n  letter-spacing: 8px;\r\n  position: fixed;\r\n}\r\n\r\n.ohLookItsData{\r\n  font-family: miso;\r\n  color:black;\r\n  font-size: 16;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.printButton {\r\n  position: fixed;\r\n  color:black;\r\n  font-family: OCRA;\r\n  position: fixed;\r\n  z-index:1;\r\n  border-style: solid;\r\n  border-width: thick;\r\n  border-color:black;\r\n  outline: none;\r\n  background-color:white;\r\n  font-size: 16;\r\n  right :50;\r\n  top: 50;\r\n  z-index:2\r\n}\r\n\r\n.printButton:hover {\r\n  background-color:#33FFCC;\r\n    border-color:#FFCC00;\r\n  color:#FFCC00;\r\n}\r\n\r\n.away{\r\ndisplay: none;\r\n}\r\n\r\n.right-cascade {\r\n  user-select: none;\r\n  position: fixed;\r\n  top: 0;\r\n  height:100vh;\r\n  right: 100;\r\n  font-family: OCRA;\r\n  font-size: 8pt;\r\n  padding: 5px 5px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: left;\r\n  justify-content: left;\r\n  z-index:1;\r\n}\r\n\r\n.lc-load {\r\n  top: 15vh;\r\n}\r\n.lc-low {\r\n  top: 45vh;\r\n}\r\n\r\n.lc-top {\r\n  top: 35vh;\r\n}\r\n\r\n.lc-mid {\r\n  top: 40vh;\r\n}\r\n",""]),e.exports=t},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var l=(n=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),c=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(c).concat([l]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},1667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},6094:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"6ae1f379bef576068eb292be30fdb167.otf"},4622:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"a85b26cf67c4a3b7a5497b23f9ff3a47.otf"},9685:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"f7f26928c6b1edc770c616475459ecc8.otf"},3309:(e,t,n)=>{var r=n(3379),o=n(3153);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},3379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],c=t.base?l[0]+t.base:l[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var f=a(d),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:d,updater:g(p,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=u||(u=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=l(e,t),s=0;s<n.length;s++){var d=a(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";n(3309);let e,t=[],r=[],o=[],i=1123,a=1589,l=[],c=[];async function s(e){try{const n=await fetch(e),o=await n.json();for(let e in o)t.includes(o[e].u)||(r.push(o[e]),t.push(o[e].u))}catch(e){console.log(e),console.log("failure at database retrieval - client")}}!async function(){try{let e=window.location.href.split("/"),t=e[e.length-1].split("$-$");if("[entire]-vollstaendig"==t[0])console.log("its the complete one"),s("/aTE/all");else for(let e in t)s("/sets/"+t[e])}catch(e){console.log(e)}}(),window.onload=function(){let t=window.location.href.split("/");e=t[t.length-1].split("$-$"),document.getElementById("XarSets").textContent=e.join(" , "),document.getElementById("time").textContent=Date.now(),l.push("a  d  i  s  c  o  u  r  s  e  .  s  t  a  t  e  "),l.push("{ s p a c e : "),l.push(",t i m e :                         }"),c.push(e.join(" , ")),c.push(Date.now()),document.getElementById("PlotterPrint").onclick=()=>{d.writeNotes(),d.save("aDiscourseSTATE"+e+Date.now()+".svg")},document.getElementById("PDFprint").onclick=()=>{document.getElementById("JSONoutput").classList.add("away"),document.getElementById("PDFprint").classList.add("away"),document.getElementById("PlotterPrint").classList.add("away"),window.print()},document.getElementById("JSONoutput").onclick=()=>{let t=JSON.stringify(r),n=document.createElement("a"),o=new Blob([t],{type:"text/plain"});n.href=URL.createObjectURL(o),n.download="aDiscourseSTATE"+e+Date.now()+".json",n.click(),URL.revokeObjectURL(n.href)}};const d=new p5((e=>{let n,s,d,f,p=120;e.preload=function(){s=e.loadFont("1CamBam_Stick_3.ttf"),d=e.loadFont("f7f26928c6b1edc770c616475459ecc8.otf"),f=e.loadFont("miso-bold.otf")},e.setup=function(){n=e.createCanvas(i,1e4),e.textFont(s),setTimeout((()=>{r.sort(((e,t)=>e.p.y-t.p.y));let i=0,l=r[0].p.y,c=r[0].p.x,s=r[0].p.x;for(let e in r)r[e].p.y<l&&(l=r[e].p.y),r[e].p.x<c?c=r[e].p.x:r[e].p.x>s&&(s=r[e].p.x);let d=600-l;for(let e in r)r[e].p.y+=d;for(let t=0;t<r.length;t++){r[t].c=r[t].c.replace(/\n\n/g," ");let n=r[t].c.split("^^"),l=e.createSpan(n[0]).class("discourseElement");l.id=r[t].u,l.position(r[t].p.x-200,r[t].p.y),l.attribute("contenteditable",!0);let d=l.size().height,f=e.createSpan(n[1]).class("discourseCitationSVG");if(f.id="cite"+r[t].u,f.position(r[t].p.x,r[t].p.y+d),o.push(d),n[0].charAt(0),n[0].charAt(1),r[t].p.x=e.map(r[t].p.x,c,s,50,673),t>0&&r[t].p.y-r[t-1].p.y>p){let e=r[t].p.y-(r[t-1].p.y+o[t-1])-p;for(let n=t;n<r.length;n++)r[n].p.y-=e}else if(t>0&&r[t].p.y-r[t-1].p.y<o[t-1]+p){let e=o[t-1]+p-(r[t].p.y-r[t-1].p.y);r[t].p.y+=e}let u=50;if(r[t].p.y%a>a-d-u){let e=a+u-r[t].p.y%a;r[t].p.y+=e}else if(r[t].p.y%a<u){let e=u-r[t].p.y%a;r[t].p.y+=e}l.remove(),f.remove(),d+=f.size().height,e.stroke(0,255,255),r[t].p.y>i&&(i=r[t].p.y)}i+=400,i+=a-i%a,e.resizeCanvas(1123,i),e.stroke(255,0,51),e.strokeWeight(1),e.noFill();for(let n in r)if(r[n].r.length>0){let o=r.filter((e=>r[n].r.includes(e.u)));e.stroke("#ffcc00"),e.strokeWeight(1.8),e.noFill();for(let t in o)e.line(r[n].p.x+200,r[n].p.y+20,o[t].p.x+200,o[t].p.y+20);let i=[];for(let e in r[n].r)t.includes(r[n].r[e])||i.push(r[n].r[e]);if(i.length>0){e.textSize(10),e.stroke(255,0,51),e.noFill(),e.strokeWeight(.2);let t=i.join(", ");r[n].p.x>550?(e.text("e x t e r n a l :",r[n].p.x-200,r[n].p.y+40),e.text(t,r[n].p.x-200,r[n].p.y+50,199,300)):(e.text("e x t e r n a l :",r[n].p.x+450,r[n].p.y+40),e.text(t,r[n].p.x+450,r[n].p.y+50,199,300))}}e.textSize(14),e.stroke(0),e.strokeWeight(.4),e.text("s t a t e . n o t e s :",400,187),e.textSize(11);for(let t=0;t<r.length;t++){let n=r[t].c.split("^^"),o=(n[0].match(/.{1,60}/g),e.createSpan(n[0]).class("discourseElement"));"r"==n[0].charAt(0)&&"/"==n[0].charAt(1)?o.addClass("response"):"c"==n[0].charAt(0)&&"/"==n[0].charAt(1)?o.addClass("composition"):"q"==n[0].charAt(0)&&"/"==n[0].charAt(1)?o.addClass("quote"):"q"==n[0].charAt(0)&&"/"==n[0].charAt(1)&&o.addClass("editorial"),o.id=r[t].u,o.position(r[t].p.x,r[t].p.y),o.attribute("contenteditable",!0);let i=o.size().height,a=e.createSpan(n[1]).class("discourseCitation");a.id="cite"+r[t].u,a.position(r[t].p.x,r[t].p.y+i+5),a.attribute("contenteditable",!0),e.createSpan(r[t].u+"  : ("+r[t].d+")").class("discourseCitation").position(r[t].p.x,r[t].p.y-18)}for(let t=0;200*t+400<n.height;t++)e.strokeWeight(2),e.line(0,200*t+400,25,200*t+400),e.strokeWeight(.5),e.text(t,20,200*t+395);e.writeThatTitle(),e.createElement("textarea").class("notes").id("notes"),document.getElementById("loading").remove()}),300)},e.writeNotes=function(){e.textFont(s),e.textSize(12),e.stroke(0),e.strokeWeight(.3),e.noFill();let t=document.getElementById("notes").value;e.text(t,400,205,600,400),e.line(390,200,390,400),e.line(380,200,380,400),document.getElementById("notes").remove()},e.writeThatTitle=function(){e.textFont(d),e.textSize(36),e.stroke(0),e.strokeWeight(.5),e.noFill();for(let t in l)e.text(l[t],50,100+40*t);e.textFont(f),e.textSize(22),e.text(c[0],180,132),e.text(c[1],160,172)}}),"statecraft");new p5((e=>{let t,n,s,f;e.preload=function(){n=e.loadFont("1CamBam_Stick_3.ttf"),s=e.loadFont("f7f26928c6b1edc770c616475459ecc8.otf"),f=e.loadFont("miso-bold.otf")},e.setup=function(){setTimeout((()=>{t=e.createCanvas(i,d.height),e.stroke(0),e.strokeWeight(.5),e.noFill(),e.line(e.width,0,e.width,e.height);for(let n=a;n<t.height;n+=a)e.line(10,n,1123,n);for(let n=0;n<t.height;n+=40)e.stroke(0),e.line(1125,n,1125,n+20);e.stroke(180);for(let n=400;n<t.height;n+=20)e.strokeWeight(.1),e.line(0,n,i,n),n%10==0&&e.line;for(let t=0;t<r.length;t++)e.noStroke(),e.fill(255),e.rect(r[t].p.x-5,r[t].p.y-5,410,o[t]+5);e.writeThatTitleBack()}),2e3)},e.writeThatTitleBack=function(){e.textFont(s),e.textSize(36),e.noStroke(),e.fill("#FFCC00");for(let t in l)e.text(l[t],52,102+40*t);e.textFont(f),e.textSize(22),e.fill(0),e.text(c[0],183,137),e.text(c[1],163,177)}}),"back")})()})();