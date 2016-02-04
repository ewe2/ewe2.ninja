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
!function(t,e,i){function n(t){return function(){return this[t]}}function o(t,e){var i=t.split("."),n=tt;!(i[0]in n)&&n.execScript&&n.execScript("var "+i[0]);for(var o;i.length&&(o=i.shift());)i.length||void 0===e?n=n[o]?n[o]:n[o]={}:n[o]=e}function r(t,e,i){return t.call.apply(t.bind,arguments)}function s(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function a(t,e,i){return a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r:s,a.apply(Y,arguments)}function h(t,e){this.G=t,this.v=e||t,this.z=this.v.document}function p(t,i,n){t=t.z.getElementsByTagName(i)[0],t||(t=e.documentElement),t&&t.lastChild&&t.insertBefore(n,t.lastChild)}function f(t,e,i){e=e||[],i=i||[];for(var n=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var r=Z,s=0;s<n.length;s+=1)if(e[o]===n[s]){r=X;break}r||n.push(e[o])}for(e=[],o=0;o<n.length;o+=1){for(r=Z,s=0;s<i.length;s+=1)if(n[o]===i[s]){r=X;break}r||e.push(n[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function c(t,e){for(var i=t.className.split(/\s+/),n=0,o=i.length;o>n;n++)if(i[n]==e)return X;return Z}function u(t){var e=t.v.location.protocol;return"about:"==e&&(e=t.G.location.protocol),"https:"==e?"https:":"http:"}function l(t,e){var i=t.createElement("link",{rel:"stylesheet",href:e}),n=Z;i.onload=function(){n||(n=X)},i.onerror=function(){n||(n=X)},p(t,"head",i)}function d(e,i,n,o){var r=e.z.getElementsByTagName("head")[0];if(r){var s=e.createElement("script",{src:i}),a=Z;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=X,n&&n(Y),s.onload=s.onreadystatechange=Y,"HEAD"==s.parentNode.tagName&&r.removeChild(s))},r.appendChild(s),t.setTimeout(function(){a||(a=X,n&&n(Error("Script load timeout")))},o||5e3),s}return Y}function g(t,e,i){this.M=t,this.U=e,this.Aa=i}function m(t,e,i,n){this.d=t!=Y?t:Y,this.o=e!=Y?e:Y,this.aa=i!=Y?i:Y,this.f=n!=Y?n:Y}function w(t){t=it.exec(t);var e=Y,i=Y,n=Y,o=Y;return t&&(t[1]!==Y&&t[1]&&(e=parseInt(t[1],10)),t[2]!==Y&&t[2]&&(i=parseInt(t[2],10)),t[3]!==Y&&t[3]&&(n=parseInt(t[3],10)),t[4]!==Y&&t[4]&&(o=/^[0-9]+$/.test(t[4])?parseInt(t[4],10):t[4])),new m(e,i,n,o)}function v(t,e,i,n,o,r,s,a,h,p,f){this.K=t,this.Ga=e,this.za=i,this.fa=n,this.Ea=o,this.ea=r,this.wa=s,this.Fa=a,this.va=h,this.da=p,this.j=f}function y(t,e){this.a=t,this.I=e}function b(t){var e=O(t.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!=e?(/BB\d{2}/.test(e)&&(e="BlackBerry"),e):(t=O(t.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1),""!=t?("Mac_PowerPC"==t&&(t="Macintosh"),t):"Unknown")}function k(t){var e=O(t.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(e||(e=O(t.a,/Windows Phone( OS)? ([^;)]+)/,2))||(e=O(t.a,/(iPhone )?OS ([\d_]+)/,2)))return e;if(e=O(t.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var e=e.split(/\s/),i=0;i<e.length;i+=1)if(/^[\d\._]+$/.test(e[i]))return e[i];return(t=O(t.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?t:"Unknown"}function x(t){var e=b(t),i=k(t),n=w(i),o=O(t.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),r=w(o),s="Unknown",a=new m,h="Unknown",p=Z;return/OPR\/[\d.]+/.test(t.a)?s="Opera":-1!=t.a.indexOf("Chrome")||-1!=t.a.indexOf("CrMo")||-1!=t.a.indexOf("CriOS")?s="Chrome":/Silk\/\d/.test(t.a)?s="Silk":"BlackBerry"==e||"Android"==e?s="BuiltinBrowser":-1!=t.a.indexOf("PhantomJS")?s="PhantomJS":-1!=t.a.indexOf("Safari")?s="Safari":-1!=t.a.indexOf("AdobeAIR")&&(s="AdobeAIR"),"BuiltinBrowser"==s?h="Unknown":"Silk"==s?h=O(t.a,/Silk\/([\d\._]+)/,1):"Chrome"==s?h=O(t.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=t.a.indexOf("Version/")?h=O(t.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==s?h=O(t.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==s?h=O(t.a,/OPR\/([\d.]+)/,1):"PhantomJS"==s&&(h=O(t.a,/PhantomJS\/([\d.]+)/,1)),a=w(h),p="AdobeAIR"==s?2<a.d||2==a.d&&5<=a.o:"BlackBerry"==e?10<=n.d:"Android"==e?2<n.d||2==n.d&&1<n.o:526<=r.d||525<=r.d&&13<=r.o,new v(s,a,h,"AppleWebKit",r,o,e,n,i,S(t.I),new g(p,536>r.d||536==r.d&&11>r.o,"iPhone"==e||"iPad"==e||"iPod"==e||"Macintosh"==e))}function O(t,e,i){return(t=t.match(e))&&t[i]?t[i]:""}function S(t){return t.documentMode?t.documentMode:void 0}function _(t){this.ua=t||"-"}function B(t,e){this.K=t,this.V=4,this.L="n";var i=(e||"n4").match(/^([nio])([1-9])$/i);i&&(this.L=i[1],this.V=parseInt(i[2],10))}function A(t){return t.L+t.V}function N(t){var e=4,i="n",n=Y;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(i=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),i+e}function P(t,e,i){this.c=t,this.m=e,this.O=i,this.h="wf",this.g=new _("-")}function C(t){var e=c(t.m,t.g.f(t.h,"active")),i=[],n=[t.g.f(t.h,"loading")];e||i.push(t.g.f(t.h,"inactive")),f(t.m,i,n),j(t,"inactive")}function j(t,e,i){t.O[e]&&(i?t.O[e](i.getName(),A(i)):t.O[e]())}function M(){this.w={}}function I(t,e){this.c=t,this.C=e,this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}function E(t,e){var i;i=[];for(var n=e.K.split(/,\s*/),o=0;o<n.length;o++){var r=n[o].replace(/['"]/g,"");-1==r.indexOf(" ")?i.push(r):i.push("'"+r+"'")}i=i.join(","),n="normal",o=e.V+"00","o"===e.L?n="oblique":"i"===e.L&&(n="italic"),t.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+i+";"+("font-style:"+n+";font-weight:"+o+";")}function W(t){p(t.c,"body",t.s)}function U(t,e,i,n,o,r,s,a){this.W=t,this.sa=e,this.c=i,this.q=n,this.C=a||"BESbswy",this.j=o,this.F={},this.T=r||5e3,this.Z=s||Y,this.B=this.A=Y,t=new I(this.c,this.C),W(t);for(var h in ot)ot.hasOwnProperty(h)&&(E(t,new B(ot[h],A(this.q))),this.F[ot[h]]=t.s.offsetWidth);t.remove()}function F(t,e,i){for(var n in ot)if(ot.hasOwnProperty(n)&&e===t.F[ot[n]]&&i===t.F[ot[n]])return X;return Z}function T(t){var e=t.A.s.offsetWidth,i=t.B.s.offsetWidth;e===t.F.serif&&i===t.F["sans-serif"]||t.j.U&&F(t,e,i)?et()-t.xa>=t.T?t.j.U&&F(t,e,i)&&(t.Z===Y||t.Z.hasOwnProperty(t.q.getName()))?R(t,t.W):R(t,t.sa):setTimeout(a(function(){T(this)},t),25):R(t,t.W)}function R(t,e){t.A.remove(),t.B.remove(),e(t.q)}function q(t,e,i,n){this.c=e,this.t=i,this.P=0,this.ba=this.Y=Z,this.T=n,this.j=t.j}function L(t,e,i,n,o){if(0===e.length&&o)C(t.t);else for(t.P+=e.length,o&&(t.Y=o),o=0;o<e.length;o++){var r=e[o],s=i[r.getName()],h=t.t,p=r;f(h.m,[h.g.f(h.h,p.getName(),A(p).toString(),"loading")]),j(h,"fontloading",p),new U(a(t.ga,t),a(t.ha,t),t.c,r,t.j,t.T,n,s).start()}}function V(t){0==--t.P&&t.Y&&(t.ba?(t=t.t,f(t.m,[t.g.f(t.h,"active")],[t.g.f(t.h,"loading"),t.g.f(t.h,"inactive")]),j(t,"active")):C(t.t))}function z(t){this.G=t,this.u=new M,this.ya=new y(t.navigator.userAgent,t.document),this.a=this.ya.parse(),this.Q=this.R=0}function D(t,e){this.c=t,this.e=e,this.k=[]}function G(t,e){this.c=t,this.e=e,this.k=[]}function K(t,e){this.c=t,this.e=e}function $(t,e,i){this.N=t?t:e+rt,this.p=[],this.S=[],this.ca=i||""}function J(t){this.p=t,this.$=[],this.J={}}function H(t,i){this.a=new y(navigator.userAgent,e).parse(),this.c=t,this.e=i}function Q(t,e){this.c=t,this.e=e,this.k=[]}var X=!0,Y=null,Z=!1,tt=this,et=Date.now||function(){return+new Date};h.prototype.createElement=function(t,e,i){if(t=this.z.createElement(t),e)for(var n in e)e.hasOwnProperty(n)&&("style"==n?t.style.cssText=e[n]:t.setAttribute(n,e[n]));return i&&t.appendChild(this.z.createTextNode(i)),t},o("webfont.BrowserInfo",g),g.prototype.pa=n("M"),g.prototype.hasWebFontSupport=g.prototype.pa,g.prototype.qa=n("U"),g.prototype.hasWebKitFallbackBug=g.prototype.qa,g.prototype.ra=n("Aa"),g.prototype.hasWebKitMetricsBug=g.prototype.ra;var it=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;m.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")},o("webfont.UserAgent",v),v.prototype.getName=n("K"),v.prototype.getName=v.prototype.getName,v.prototype.oa=n("za"),v.prototype.getVersion=v.prototype.oa,v.prototype.ka=n("fa"),v.prototype.getEngine=v.prototype.ka,v.prototype.la=n("ea"),v.prototype.getEngineVersion=v.prototype.la,v.prototype.ma=n("wa"),v.prototype.getPlatform=v.prototype.ma,v.prototype.na=n("va"),v.prototype.getPlatformVersion=v.prototype.na,v.prototype.ja=n("da"),v.prototype.getDocumentMode=v.prototype.ja,v.prototype.ia=n("j"),v.prototype.getBrowserInfo=v.prototype.ia;var nt=new v("Unknown",new m,"Unknown","Unknown",new m,"Unknown","Unknown",new m,"Unknown",void 0,new g(Z,Z,Z));y.prototype.parse=function(){var t;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){t=b(this);var e=k(this),i=w(e),n=Y,o=Y,r=Y,s=Y,a=O(this.a,/Trident\/([\d\w\.]+)/,1),h=S(this.I),n=-1!=this.a.indexOf("MSIE")?O(this.a,/MSIE ([\d\w\.]+)/,1):O(this.a,/rv:([\d\w\.]+)/,1),o=w(n);""!=a?(r="Trident",s=w(a)):(r="Unknown",s=new m,a="Unknown"),t=new v("MSIE",o,n,r,s,a,t,i,e,h,new g("Windows"==t&&6<=o.d||"Windows Phone"==t&&8<=i.d,Z,Z))}else if(-1!=this.a.indexOf("Opera"))t:if(t="Unknown",e=O(this.a,/Presto\/([\d\w\.]+)/,1),i=w(e),n=k(this),o=w(n),r=S(this.I),i.d!==Y?t="Presto":(-1!=this.a.indexOf("Gecko")&&(t="Gecko"),e=O(this.a,/rv:([^\)]+)/,1),i=w(e)),-1!=this.a.indexOf("Opera Mini/"))s=O(this.a,/Opera Mini\/([\d\.]+)/,1),a=w(s),t=new v("OperaMini",a,s,t,i,e,b(this),o,n,r,new g(Z,Z,Z));else{if(-1!=this.a.indexOf("Version/")&&(s=O(this.a,/Version\/([\d\.]+)/,1),a=w(s),a.d!==Y)){t=new v("Opera",a,s,t,i,e,b(this),o,n,r,new g(10<=a.d,Z,Z));break t}s=O(this.a,/Opera[\/ ]([\d\.]+)/,1),a=w(s),t=a.d!==Y?new v("Opera",a,s,t,i,e,b(this),o,n,r,new g(10<=a.d,Z,Z)):new v("Opera",new m,"Unknown",t,i,e,b(this),o,n,r,new g(Z,Z,Z))}else/OPR\/[\d.]+/.test(this.a)?t=x(this):/AppleWeb(K|k)it/.test(this.a)?t=x(this):-1!=this.a.indexOf("Gecko")?(t="Unknown",e=new m,i="Unknown",n=k(this),o=w(n),r=Z,-1!=this.a.indexOf("Firefox")?(t="Firefox",i=O(this.a,/Firefox\/([\d\w\.]+)/,1),e=w(i),r=3<=e.d&&5<=e.o):-1!=this.a.indexOf("Mozilla")&&(t="Mozilla"),s=O(this.a,/rv:([^\)]+)/,1),a=w(s),r||(r=1<a.d||1==a.d&&9<a.o||1==a.d&&9==a.o&&2<=a.aa||s.match(/1\.9\.1b[123]/)!=Y||s.match(/1\.9\.1\.[\d\.]+/)!=Y),t=new v(t,e,i,"Gecko",a,s,b(this),o,n,S(this.I),new g(r,Z,Z))):t=nt;return t},_.prototype.f=function(t){for(var e=[],i=0;i<arguments.length;i++)e.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.ua)},B.prototype.getName=n("K"),I.prototype.remove=function(){var t=this.s;t.parentNode&&t.parentNode.removeChild(t)};var ot={Da:"serif",Ca:"sans-serif",Ba:"monospace"};U.prototype.start=function(){this.A=new I(this.c,this.C),W(this.A),this.B=new I(this.c,this.C),W(this.B),this.xa=et(),E(this.A,new B(this.q.getName()+",serif",A(this.q))),E(this.B,new B(this.q.getName()+",sans-serif",A(this.q))),T(this)},q.prototype.ga=function(t){var e=this.t;f(e.m,[e.g.f(e.h,t.getName(),A(t).toString(),"active")],[e.g.f(e.h,t.getName(),A(t).toString(),"loading"),e.g.f(e.h,t.getName(),A(t).toString(),"inactive")]),j(e,"fontactive",t),this.ba=X,V(this)},q.prototype.ha=function(t){var e=this.t,i=c(e.m,e.g.f(e.h,t.getName(),A(t).toString(),"active")),n=[],o=[e.g.f(e.h,t.getName(),A(t).toString(),"loading")];i||n.push(e.g.f(e.h,t.getName(),A(t).toString(),"inactive")),f(e.m,n,o),j(e,"fontinactive",t),V(this)},z.prototype.load=function(t){var e=t.context||this.G;this.c=new h(this.G,e);var e=new P(this.c,e.document.documentElement,t),i=[],n=t.timeout;f(e.m,[e.g.f(e.h,"loading")]),j(e,"loading");var o,i=this.u,r=this.c,s=[];for(o in t)if(t.hasOwnProperty(o)){var p=i.w[o];p&&s.push(p(t[o],r))}for(i=s,this.Q=this.R=i.length,t=new q(this.a,this.c,e,n),o=0,n=i.length;n>o;o++)r=i[o],r.H(this.a,a(this.ta,this,r,e,t))},z.prototype.ta=function(t,e,i,n){var o=this;n?t.load(function(t,e,n){var r=0==--o.R;setTimeout(function(){L(i,t,e||{},n||Y,r)},0)}):(t=0==--this.R,this.Q--,t&&0==this.Q&&C(e),L(i,[],{},Y,t))},D.prototype.D=function(t){return u(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+t+".js"},D.prototype.H=function(t,e){var i=this.e.id,n=this.c.v,o=this;i?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[i]=function(t,i){for(var n=0,r=i.fonts.length;r>n;++n){var s=i.fonts[n];o.k.push(new B(s.name,N("font-weight:"+s.weight+";font-style:"+s.style)))}e(t)},d(this.c,this.D(i),function(t){t&&e(Z)})):e(Z)},D.prototype.load=function(t){t(this.k)},G.prototype.D=function(t){var e=u(this.c);return(this.e.api||e+"//use.typekit.net")+"/"+t+".js"},G.prototype.H=function(t,e){var i=this.e.id,n=this.e,o=this.c.v,r=this;i?(o.__webfonttypekitmodule__||(o.__webfonttypekitmodule__={}),o.__webfonttypekitmodule__[i]=function(i){i(t,n,function(t,i,n){for(var o=0;o<i.length;o+=1){var s=n[i[o]];if(s)for(var a=0;a<s.length;a+=1)r.k.push(new B(i[o],s[a]));else r.k.push(new B(i[o]))}e(t)})},d(this.c,this.D(i),function(t){t&&e(Z)},2e3)):e(Z)},G.prototype.load=function(t){t(this.k)},K.prototype.load=function(t){var e,i,n=this.e.urls||[],o=this.e.families||[],r=this.e.testStrings||{};for(e=0,i=n.length;i>e;e++)l(this.c,n[e]);for(n=[],e=0,i=o.length;i>e;e++){var s=o[e].split(":");if(s[1])for(var a=s[1].split(","),h=0;h<a.length;h+=1)n.push(new B(s[0],a[h]));else n.push(new B(s[0]))}t(n,r)},K.prototype.H=function(t,e){return e(t.j.M)};var rt="//fonts.googleapis.com/css";$.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var t=this.p.length,e=[],i=0;t>i;i++)e.push(this.p[i].replace(/ /g,"+"));return t=this.N+"?family="+e.join("%7C"),0<this.S.length&&(t+="&subset="+this.S.join(",")),0<this.ca.length&&(t+="&text="+encodeURIComponent(this.ca)),t};var st={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},at={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ht={i:"i",italic:"i",n:"n",normal:"n"},pt=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");J.prototype.parse=function(){for(var t=this.p.length,e=0;t>e;e++){var i=this.p[e].split(":"),n=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var r,s=i[1];if(r=[],s)for(var s=s.split(","),a=s.length,h=0;a>h;h++){var p;if(p=s[h],p.match(/^[\w-]+$/)){p=pt.exec(p.toLowerCase());var f=void 0;if(p==Y)f="";else{if(f=void 0,f=p[1],f==Y||""==f)f="4";else var c=at[f],f=c?c:isNaN(f)?"4":f.substr(0,1);f=[p[2]==Y||""==p[2]?"n":ht[p[2]],f].join("")}p=f}else p="";p&&r.push(p)}0<r.length&&(o=r),3==i.length&&(i=i[2],r=[],i=i?i.split(","):r,0<i.length&&(i=st[i[0]])&&(this.J[n]=i))}for(this.J[n]||(i=st[n])&&(this.J[n]=i),i=0;i<o.length;i+=1)this.$.push(new B(n,o[i]))}};var ft={Arimo:X,Cousine:X,Tinos:X};H.prototype.H=function(t,e){e(t.j.M)},H.prototype.load=function(t){var e=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=X){var i=a(this.X,this,t),n=function(){e.z.body?i():setTimeout(n,0)};n()}else this.X(t)},H.prototype.X=function(t){for(var e=this.c,i=new $(this.e.api,u(e),this.e.text),n=this.e.families,o=n.length,r=0;o>r;r++){var s=n[r].split(":");3==s.length&&i.S.push(s.pop());var a="";2==s.length&&""!=s[1]&&(a=":"),i.p.push(s.join(a))}n=new J(n),n.parse(),l(e,i.f()),t(n.$,n.J,ft)},Q.prototype.H=function(t,e){var i=this,n=i.e.projectId,o=i.e.version;if(n){var r=i.c.v;d(this.c,i.D(n,o),function(o){if(o)e(Z);else{if(r["__mti_fntLst"+n]&&(o=r["__mti_fntLst"+n]()))for(var s=0;s<o.length;s++)i.k.push(new B(o[s].fontfamily));e(t.j.M)}}).id="__MonotypeAPIScript__"+n}else e(Z)},Q.prototype.D=function(t,e){var i=u(this.c),n=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return i+"//"+n+"/"+t+".js"+(e?"?v="+e:"")},Q.prototype.load=function(t){t(this.k)};var ct=new z(tt);ct.u.w.custom=function(t,e){return new K(e,t)},ct.u.w.fontdeck=function(t,e){return new D(e,t)},ct.u.w.monotype=function(t,e){return new Q(e,t)},ct.u.w.typekit=function(t,e){return new G(e,t)},ct.u.w.google=function(t,e){return new H(e,t)},tt.WebFont||(tt.WebFont={},tt.WebFont.load=a(ct.load,ct),tt.WebFontConfig&&ct.load(tt.WebFontConfig))}(this,document);