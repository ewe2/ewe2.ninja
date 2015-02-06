/*
 * Copyright 2014 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
!function(t,e){function i(t){return function(){return this[t]}}function n(t,e){var i=t.split("."),n=Z;!(i[0]in n)&&n.execScript&&n.execScript("var "+i[0]);for(var o;i.length&&(o=i.shift());)i.length||void 0===e?n=n[o]?n[o]:n[o]={}:n[o]=e}function o(t){return t.call.apply(t.bind,arguments)}function r(t,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function s(){return s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:r,s.apply(X,arguments)}function a(t,e){this.G=t,this.v=e||t,this.z=this.v.document}function h(t,i,n){t=t.z.getElementsByTagName(i)[0],t||(t=e.documentElement),t&&t.lastChild&&t.insertBefore(n,t.lastChild)}function p(t,e,i){e=e||[],i=i||[];for(var n=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var r=Y,s=0;s<n.length;s+=1)if(e[o]===n[s]){r=Q;break}r||n.push(e[o])}for(e=[],o=0;o<n.length;o+=1){for(r=Y,s=0;s<i.length;s+=1)if(n[o]===i[s]){r=Q;break}r||e.push(n[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(t,e){for(var i=t.className.split(/\s+/),n=0,o=i.length;o>n;n++)if(i[n]==e)return Q;return Y}function c(t){var e=t.v.location.protocol;return"about:"==e&&(e=t.G.location.protocol),"https:"==e?"https:":"http:"}function u(t,e){var i=t.createElement("link",{rel:"stylesheet",href:e}),n=Y;i.onload=function(){n||(n=Q)},i.onerror=function(){n||(n=Q)},h(t,"head",i)}function l(e,i,n,o){var r=e.z.getElementsByTagName("head")[0];if(r){var s=e.createElement("script",{src:i}),a=Y;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=Q,n&&n(X),s.onload=s.onreadystatechange=X,"HEAD"==s.parentNode.tagName&&r.removeChild(s))},r.appendChild(s),t.setTimeout(function(){a||(a=Q,n&&n(Error("Script load timeout")))},o||5e3),s}return X}function d(t,e,i){this.M=t,this.U=e,this.Aa=i}function g(t,e,i,n){this.d=t!=X?t:X,this.o=e!=X?e:X,this.aa=i!=X?i:X,this.f=n!=X?n:X}function m(t){t=ee.exec(t);var e=X,i=X,n=X,o=X;return t&&(t[1]!==X&&t[1]&&(e=parseInt(t[1],10)),t[2]!==X&&t[2]&&(i=parseInt(t[2],10)),t[3]!==X&&t[3]&&(n=parseInt(t[3],10)),t[4]!==X&&t[4]&&(o=/^[0-9]+$/.test(t[4])?parseInt(t[4],10):t[4])),new g(e,i,n,o)}function w(t,e,i,n,o,r,s,a,h,p,f){this.K=t,this.Ga=e,this.za=i,this.fa=n,this.Ea=o,this.ea=r,this.wa=s,this.Fa=a,this.va=h,this.da=p,this.j=f}function v(t,e){this.a=t,this.I=e}function y(t){var e=x(t.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!=e?(/BB\d{2}/.test(e)&&(e="BlackBerry"),e):(t=x(t.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1),""!=t?("Mac_PowerPC"==t&&(t="Macintosh"),t):"Unknown")}function b(t){var e=x(t.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(e||(e=x(t.a,/Windows Phone( OS)? ([^;)]+)/,2))||(e=x(t.a,/(iPhone )?OS ([\d_]+)/,2)))return e;if(e=x(t.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var e=e.split(/\s/),i=0;i<e.length;i+=1)if(/^[\d\._]+$/.test(e[i]))return e[i];return(t=x(t.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?t:"Unknown"}function k(t){var e=y(t),i=b(t),n=m(i),o=x(t.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),r=m(o),s="Unknown",a=new g,h="Unknown",p=Y;return/OPR\/[\d.]+/.test(t.a)?s="Opera":-1!=t.a.indexOf("Chrome")||-1!=t.a.indexOf("CrMo")||-1!=t.a.indexOf("CriOS")?s="Chrome":/Silk\/\d/.test(t.a)?s="Silk":"BlackBerry"==e||"Android"==e?s="BuiltinBrowser":-1!=t.a.indexOf("PhantomJS")?s="PhantomJS":-1!=t.a.indexOf("Safari")?s="Safari":-1!=t.a.indexOf("AdobeAIR")&&(s="AdobeAIR"),"BuiltinBrowser"==s?h="Unknown":"Silk"==s?h=x(t.a,/Silk\/([\d\._]+)/,1):"Chrome"==s?h=x(t.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=t.a.indexOf("Version/")?h=x(t.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==s?h=x(t.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==s?h=x(t.a,/OPR\/([\d.]+)/,1):"PhantomJS"==s&&(h=x(t.a,/PhantomJS\/([\d.]+)/,1)),a=m(h),p="AdobeAIR"==s?2<a.d||2==a.d&&5<=a.o:"BlackBerry"==e?10<=n.d:"Android"==e?2<n.d||2==n.d&&1<n.o:526<=r.d||525<=r.d&&13<=r.o,new w(s,a,h,"AppleWebKit",r,o,e,n,i,O(t.I),new d(p,536>r.d||536==r.d&&11>r.o,"iPhone"==e||"iPad"==e||"iPod"==e||"Macintosh"==e))}function x(t,e,i){return(t=t.match(e))&&t[i]?t[i]:""}function O(t){return t.documentMode?t.documentMode:void 0}function S(t){this.ua=t||"-"}function _(t,e){this.K=t,this.V=4,this.L="n";var i=(e||"n4").match(/^([nio])([1-9])$/i);i&&(this.L=i[1],this.V=parseInt(i[2],10))}function B(t){return t.L+t.V}function A(t){var e=4,i="n",n=X;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(i=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),i+e}function N(t,e,i){this.c=t,this.m=e,this.O=i,this.h="wf",this.g=new S("-")}function P(t){var e=f(t.m,t.g.f(t.h,"active")),i=[],n=[t.g.f(t.h,"loading")];e||i.push(t.g.f(t.h,"inactive")),p(t.m,i,n),C(t,"inactive")}function C(t,e,i){t.O[e]&&(i?t.O[e](i.getName(),B(i)):t.O[e]())}function j(){this.w={}}function M(t,e){this.c=t,this.C=e,this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}function I(t,e){var i;i=[];for(var n=e.K.split(/,\s*/),o=0;o<n.length;o++){var r=n[o].replace(/['"]/g,"");i.push(-1==r.indexOf(" ")?r:"'"+r+"'")}i=i.join(","),n="normal",o=e.V+"00","o"===e.L?n="oblique":"i"===e.L&&(n="italic"),t.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+i+";"+("font-style:"+n+";font-weight:"+o+";")}function E(t){h(t.c,"body",t.s)}function W(t,e,i,n,o,r,s,a){this.W=t,this.sa=e,this.c=i,this.q=n,this.C=a||"BESbswy",this.j=o,this.F={},this.T=r||5e3,this.Z=s||X,this.B=this.A=X,t=new M(this.c,this.C),E(t);for(var h in ne)ne.hasOwnProperty(h)&&(I(t,new _(ne[h],B(this.q))),this.F[ne[h]]=t.s.offsetWidth);t.remove()}function U(t,e,i){for(var n in ne)if(ne.hasOwnProperty(n)&&e===t.F[ne[n]]&&i===t.F[ne[n]])return Q;return Y}function F(t){var e=t.A.s.offsetWidth,i=t.B.s.offsetWidth;e===t.F.serif&&i===t.F["sans-serif"]||t.j.U&&U(t,e,i)?te()-t.xa>=t.T?t.j.U&&U(t,e,i)&&(t.Z===X||t.Z.hasOwnProperty(t.q.getName()))?T(t,t.W):T(t,t.sa):setTimeout(s(function(){F(this)},t),25):T(t,t.W)}function T(t,e){t.A.remove(),t.B.remove(),e(t.q)}function R(t,e,i,n){this.c=e,this.t=i,this.P=0,this.ba=this.Y=Y,this.T=n,this.j=t.j}function q(t,e,i,n,o){if(0===e.length&&o)P(t.t);else for(t.P+=e.length,o&&(t.Y=o),o=0;o<e.length;o++){var r=e[o],a=i[r.getName()],h=t.t,f=r;p(h.m,[h.g.f(h.h,f.getName(),B(f).toString(),"loading")]),C(h,"fontloading",f),new W(s(t.ga,t),s(t.ha,t),t.c,r,t.j,t.T,n,a).start()}}function L(t){0==--t.P&&t.Y&&(t.ba?(t=t.t,p(t.m,[t.g.f(t.h,"active")],[t.g.f(t.h,"loading"),t.g.f(t.h,"inactive")]),C(t,"active")):P(t.t))}function V(t){this.G=t,this.u=new j,this.ya=new v(t.navigator.userAgent,t.document),this.a=this.ya.parse(),this.Q=this.R=0}function z(t,e){this.c=t,this.e=e,this.k=[]}function D(t,e){this.c=t,this.e=e,this.k=[]}function G(t,e){this.c=t,this.e=e}function K(t,e,i){this.N=t?t:e+oe,this.p=[],this.S=[],this.ca=i||""}function $(t){this.p=t,this.$=[],this.J={}}function J(t,i){this.a=new v(navigator.userAgent,e).parse(),this.c=t,this.e=i}function H(t,e){this.c=t,this.e=e,this.k=[]}var Q=!0,X=null,Y=!1,Z=this,te=Date.now||function(){return+new Date};a.prototype.createElement=function(t,e,i){if(t=this.z.createElement(t),e)for(var n in e)e.hasOwnProperty(n)&&("style"==n?t.style.cssText=e[n]:t.setAttribute(n,e[n]));return i&&t.appendChild(this.z.createTextNode(i)),t},n("webfont.BrowserInfo",d),d.prototype.pa=i("M"),d.prototype.hasWebFontSupport=d.prototype.pa,d.prototype.qa=i("U"),d.prototype.hasWebKitFallbackBug=d.prototype.qa,d.prototype.ra=i("Aa"),d.prototype.hasWebKitMetricsBug=d.prototype.ra;var ee=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;g.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")},n("webfont.UserAgent",w),w.prototype.getName=i("K"),w.prototype.getName=w.prototype.getName,w.prototype.oa=i("za"),w.prototype.getVersion=w.prototype.oa,w.prototype.ka=i("fa"),w.prototype.getEngine=w.prototype.ka,w.prototype.la=i("ea"),w.prototype.getEngineVersion=w.prototype.la,w.prototype.ma=i("wa"),w.prototype.getPlatform=w.prototype.ma,w.prototype.na=i("va"),w.prototype.getPlatformVersion=w.prototype.na,w.prototype.ja=i("da"),w.prototype.getDocumentMode=w.prototype.ja,w.prototype.ia=i("j"),w.prototype.getBrowserInfo=w.prototype.ia;var ie=new w("Unknown",new g,"Unknown","Unknown",new g,"Unknown","Unknown",new g,"Unknown",void 0,new d(Y,Y,Y));v.prototype.parse=function(){var t;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){t=y(this);var e=b(this),i=m(e),n=X,o=X,r=X,s=X,a=x(this.a,/Trident\/([\d\w\.]+)/,1),h=O(this.I),n=-1!=this.a.indexOf("MSIE")?x(this.a,/MSIE ([\d\w\.]+)/,1):x(this.a,/rv:([\d\w\.]+)/,1),o=m(n);""!=a?(r="Trident",s=m(a)):(r="Unknown",s=new g,a="Unknown"),t=new w("MSIE",o,n,r,s,a,t,i,e,h,new d("Windows"==t&&6<=o.d||"Windows Phone"==t&&8<=i.d,Y,Y))}else if(-1!=this.a.indexOf("Opera"))t:if(t="Unknown",e=x(this.a,/Presto\/([\d\w\.]+)/,1),i=m(e),n=b(this),o=m(n),r=O(this.I),i.d!==X?t="Presto":(-1!=this.a.indexOf("Gecko")&&(t="Gecko"),e=x(this.a,/rv:([^\)]+)/,1),i=m(e)),-1!=this.a.indexOf("Opera Mini/"))s=x(this.a,/Opera Mini\/([\d\.]+)/,1),a=m(s),t=new w("OperaMini",a,s,t,i,e,y(this),o,n,r,new d(Y,Y,Y));else{if(-1!=this.a.indexOf("Version/")&&(s=x(this.a,/Version\/([\d\.]+)/,1),a=m(s),a.d!==X)){t=new w("Opera",a,s,t,i,e,y(this),o,n,r,new d(10<=a.d,Y,Y));break t}s=x(this.a,/Opera[\/ ]([\d\.]+)/,1),a=m(s),t=a.d!==X?new w("Opera",a,s,t,i,e,y(this),o,n,r,new d(10<=a.d,Y,Y)):new w("Opera",new g,"Unknown",t,i,e,y(this),o,n,r,new d(Y,Y,Y))}else/OPR\/[\d.]+/.test(this.a)?t=k(this):/AppleWeb(K|k)it/.test(this.a)?t=k(this):-1!=this.a.indexOf("Gecko")?(t="Unknown",e=new g,i="Unknown",n=b(this),o=m(n),r=Y,-1!=this.a.indexOf("Firefox")?(t="Firefox",i=x(this.a,/Firefox\/([\d\w\.]+)/,1),e=m(i),r=3<=e.d&&5<=e.o):-1!=this.a.indexOf("Mozilla")&&(t="Mozilla"),s=x(this.a,/rv:([^\)]+)/,1),a=m(s),r||(r=1<a.d||1==a.d&&9<a.o||1==a.d&&9==a.o&&2<=a.aa||s.match(/1\.9\.1b[123]/)!=X||s.match(/1\.9\.1\.[\d\.]+/)!=X),t=new w(t,e,i,"Gecko",a,s,y(this),o,n,O(this.I),new d(r,Y,Y))):t=ie;return t},S.prototype.f=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.ua)},_.prototype.getName=i("K"),M.prototype.remove=function(){var t=this.s;t.parentNode&&t.parentNode.removeChild(t)};var ne={Da:"serif",Ca:"sans-serif",Ba:"monospace"};W.prototype.start=function(){this.A=new M(this.c,this.C),E(this.A),this.B=new M(this.c,this.C),E(this.B),this.xa=te(),I(this.A,new _(this.q.getName()+",serif",B(this.q))),I(this.B,new _(this.q.getName()+",sans-serif",B(this.q))),F(this)},R.prototype.ga=function(t){var e=this.t;p(e.m,[e.g.f(e.h,t.getName(),B(t).toString(),"active")],[e.g.f(e.h,t.getName(),B(t).toString(),"loading"),e.g.f(e.h,t.getName(),B(t).toString(),"inactive")]),C(e,"fontactive",t),this.ba=Q,L(this)},R.prototype.ha=function(t){var e=this.t,i=f(e.m,e.g.f(e.h,t.getName(),B(t).toString(),"active")),n=[],o=[e.g.f(e.h,t.getName(),B(t).toString(),"loading")];i||n.push(e.g.f(e.h,t.getName(),B(t).toString(),"inactive")),p(e.m,n,o),C(e,"fontinactive",t),L(this)},V.prototype.load=function(t){var e=t.context||this.G;this.c=new a(this.G,e);var e=new N(this.c,e.document.documentElement,t),i=[],n=t.timeout;p(e.m,[e.g.f(e.h,"loading")]),C(e,"loading");var o,i=this.u,r=this.c,h=[];for(o in t)if(t.hasOwnProperty(o)){var f=i.w[o];f&&h.push(f(t[o],r))}for(i=h,this.Q=this.R=i.length,t=new R(this.a,this.c,e,n),o=0,n=i.length;n>o;o++)r=i[o],r.H(this.a,s(this.ta,this,r,e,t))},V.prototype.ta=function(t,e,i,n){var o=this;n?t.load(function(t,e,n){var r=0==--o.R;setTimeout(function(){q(i,t,e||{},n||X,r)},0)}):(t=0==--this.R,this.Q--,t&&0==this.Q&&P(e),q(i,[],{},X,t))},z.prototype.D=function(t){return c(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+t+".js"},z.prototype.H=function(t,e){var i=this.e.id,n=this.c.v,o=this;i?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[i]=function(t,i){for(var n=0,r=i.fonts.length;r>n;++n){var s=i.fonts[n];o.k.push(new _(s.name,A("font-weight:"+s.weight+";font-style:"+s.style)))}e(t)},l(this.c,this.D(i),function(t){t&&e(Y)})):e(Y)},z.prototype.load=function(t){t(this.k)},D.prototype.D=function(t){var e=c(this.c);return(this.e.api||e+"//use.typekit.net")+"/"+t+".js"},D.prototype.H=function(t,e){var i=this.e.id,n=this.e,o=this.c.v,r=this;i?(o.__webfonttypekitmodule__||(o.__webfonttypekitmodule__={}),o.__webfonttypekitmodule__[i]=function(i){i(t,n,function(t,i,n){for(var o=0;o<i.length;o+=1){var s=n[i[o]];if(s)for(var a=0;a<s.length;a+=1)r.k.push(new _(i[o],s[a]));else r.k.push(new _(i[o]))}e(t)})},l(this.c,this.D(i),function(t){t&&e(Y)},2e3)):e(Y)},D.prototype.load=function(t){t(this.k)},G.prototype.load=function(t){var e,i,n=this.e.urls||[],o=this.e.families||[],r=this.e.testStrings||{};for(e=0,i=n.length;i>e;e++)u(this.c,n[e]);for(n=[],e=0,i=o.length;i>e;e++){var s=o[e].split(":");if(s[1])for(var a=s[1].split(","),h=0;h<a.length;h+=1)n.push(new _(s[0],a[h]));else n.push(new _(s[0]))}t(n,r)},G.prototype.H=function(t,e){return e(t.j.M)};var oe="//fonts.googleapis.com/css";K.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var t=this.p.length,e=[],i=0;t>i;i++)e.push(this.p[i].replace(/ /g,"+"));return t=this.N+"?family="+e.join("%7C"),0<this.S.length&&(t+="&subset="+this.S.join(",")),0<this.ca.length&&(t+="&text="+encodeURIComponent(this.ca)),t};var re={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},se={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ae={i:"i",italic:"i",n:"n",normal:"n"},he=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");$.prototype.parse=function(){for(var t=this.p.length,e=0;t>e;e++){var i=this.p[e].split(":"),n=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var r,s=i[1];if(r=[],s)for(var s=s.split(","),a=s.length,h=0;a>h;h++){var p;if(p=s[h],p.match(/^[\w-]+$/)){p=he.exec(p.toLowerCase());var f=void 0;if(p==X)f="";else{if(f=void 0,f=p[1],f==X||""==f)f="4";else var c=se[f],f=c?c:isNaN(f)?"4":f.substr(0,1);f=[p[2]==X||""==p[2]?"n":ae[p[2]],f].join("")}p=f}else p="";p&&r.push(p)}0<r.length&&(o=r),3==i.length&&(i=i[2],r=[],i=i?i.split(","):r,0<i.length&&(i=re[i[0]])&&(this.J[n]=i))}for(this.J[n]||(i=re[n])&&(this.J[n]=i),i=0;i<o.length;i+=1)this.$.push(new _(n,o[i]))}};var pe={Arimo:Q,Cousine:Q,Tinos:Q};J.prototype.H=function(t,e){e(t.j.M)},J.prototype.load=function(t){var e=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=Q){var i=s(this.X,this,t),n=function(){e.z.body?i():setTimeout(n,0)};n()}else this.X(t)},J.prototype.X=function(t){for(var e=this.c,i=new K(this.e.api,c(e),this.e.text),n=this.e.families,o=n.length,r=0;o>r;r++){var s=n[r].split(":");3==s.length&&i.S.push(s.pop());var a="";2==s.length&&""!=s[1]&&(a=":"),i.p.push(s.join(a))}n=new $(n),n.parse(),u(e,i.f()),t(n.$,n.J,pe)},H.prototype.H=function(t,e){var i=this,n=i.e.projectId,o=i.e.version;if(n){var r=i.c.v;l(this.c,i.D(n,o),function(o){if(o)e(Y);else{if(r["__mti_fntLst"+n]&&(o=r["__mti_fntLst"+n]()))for(var s=0;s<o.length;s++)i.k.push(new _(o[s].fontfamily));e(t.j.M)}}).id="__MonotypeAPIScript__"+n}else e(Y)},H.prototype.D=function(t,e){var i=c(this.c),n=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return i+"//"+n+"/"+t+".js"+(e?"?v="+e:"")},H.prototype.load=function(t){t(this.k)};var fe=new V(Z);fe.u.w.custom=function(t,e){return new G(e,t)},fe.u.w.fontdeck=function(t,e){return new z(e,t)},fe.u.w.monotype=function(t,e){return new H(e,t)},fe.u.w.typekit=function(t,e){return new D(e,t)},fe.u.w.google=function(t,e){return new J(e,t)},Z.WebFont||(Z.WebFont={},Z.WebFont.load=s(fe.load,fe),Z.WebFontConfig&&fe.load(Z.WebFontConfig))}(this,document);