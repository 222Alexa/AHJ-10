(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),s=n.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,s=n.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),s=function(t){return function(e,r,s){var a,c=n(e),u=i(c),l=o(s,u);if(t&&r!=r){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),i=r(614),s=r(4326),a=r(5112)("toStringTag"),c=n.Object,u="Arguments"==s(function(){return arguments}());t.exports=o?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?r:u?s(e):"Object"==(n=s(e))&&i(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),s=r(3070);t.exports=function(t,e,r){for(var a=o(e),c=s.f,u=i.f,l=0;l<a.length;l++){var d=a[l];n(t,d)||r&&n(r,d)||c(t,d,u(e,d))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),s=r(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),s=r(1320),a=r(3505),c=r(9920),u=r(4705);t.exports=function(t,e){var r,l,d,p,f,h=t.target,v=t.global,m=t.stat;if(r=v?n:m?n[h]||a(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],d=t.noTargetGet?(f=o(r,l))&&f.value:r[l],!u(v?l:h+(m?".":"#")+l,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),s(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},6916:t=>{var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!n||n&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:t=>{var e=Function.prototype,r=e.bind,n=e.call,o=r&&r.bind(n,n);t.exports=r?function(t){return t&&o(t)}:function(t){return t&&function(){return n.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},647:(t,e,r)=>{var n=r(1702),o=r(7908),i=Math.floor,s=n("".charAt),a=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,d,p){var f=r+t.length,h=n.length,v=l;return void 0!==d&&(d=o(d),v=u),a(p,v,(function(o,a){var u;switch(s(a,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,r);case"'":return c(e,f);case"<":u=d[c(a,1,-1)];break;default:var l=+a;if(0===l)return o;if(l>h){var p=i(l/10);return 0===p?o:p<=h?void 0===n[p-1]?s(a,1):n[p-1]+s(a,1):o}u=n[l-1]}return void 0===u?"":u}))}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),s=r(4326),a=n.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),s=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,s=r(8536),a=r(7854),c=r(1702),u=r(111),l=r(8880),d=r(2597),p=r(5465),f=r(6200),h=r(3501),v="Object already initialized",m=a.TypeError,g=a.WeakMap;if(s||p.state){var b=p.state||(p.state=new g),y=c(b.get),x=c(b.has),S=c(b.set);n=function(t,e){if(x(b,t))throw new m(v);return e.facade=t,S(b,t,e),e},o=function(t){return y(b,t)||{}},i=function(t){return x(b,t)}}else{var _=f("state");h[_]=!0,n=function(t,e){if(d(t,_))throw new m(v);return e.facade=t,l(t,_,e),e},o=function(t){return d(t,_)?t[_]:{}},i=function(t){return d(t,_)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return r}}}},614:t=>{t.exports=function(t){return"function"==typeof t}},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,s=function(t,e){var r=c[a(t)];return r==l||r!=u&&(o(e)?n(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},7850:(t,e,r)=>{var n=r(111),o=r(4326),i=r(5112)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),s=r(7976),a=r(3307),c=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,c(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),s=n.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),s=r(3353),a=r(9670),c=r(4948),u=n.TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,p="enumerable",f="configurable",h="writable";e.f=o?s?function(t,e,r){if(a(t),e=c(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&h in r&&!r.writable){var n=d(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:f in r?r.configurable:n.configurable,enumerable:p in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(a(t),e=c(e),a(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),s=r(9114),a=r(5656),c=r(4948),u=r(2597),l=r(4664),d=Object.getOwnPropertyDescriptor;e.f=n?d:function(t,e){if(t=a(t),e=c(e),l)try{return d(t,e)}catch(t){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),s=r(1318).indexOf,a=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),u=0,l=[];for(r in n)!o(a,r)&&o(n,r)&&c(l,r);for(;e.length>u;)o(n,r=e[u++])&&(~s(l,r)||c(l,r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),s=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!s(n=o(r,t)))return n;if(i(r=t.valueOf)&&!s(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!s(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),s=r(5181),a=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=s.f;return r?c(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),s=r(8880),a=r(3505),c=r(2788),u=r(9909),l=r(6530).CONFIGURABLE,d=u.get,p=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u,d=!!c&&!!c.unsafe,h=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;o(r)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==m)&&s(r,"name",m),(u=p(r)).source||(u.source=f.join("string"==typeof m?m:""))),t!==n?(d?!v&&t[e]&&(h=!0):delete t[e],h?t[e]=r:s(t,e,r)):h?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&d(this).source||c(this)}))},7066:(t,e,r)=>{"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",s=n[i]||o(i,{});t.exports=s},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.2",mode:n?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),s=r(2190),a=r(8173),c=r(2140),u=r(5112),l=n.TypeError,d=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var r,n=a(t,d);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||s(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),s=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),s=r(9711),a=r(133),c=r(3307),u=o("wks"),l=n.Symbol,d=l&&l.for,p=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&d?d(e):p(e)}return u[t]}},8757:(t,e,r)=>{"use strict";var n=r(2109),o=r(7854),i=r(6916),s=r(1702),a=r(4488),c=r(614),u=r(7850),l=r(1340),d=r(8173),p=r(7066),f=r(647),h=r(5112),v=r(1913),m=h("replace"),g=RegExp.prototype,b=o.TypeError,y=s(p),x=s("".indexOf),S=s("".replace),_=s("".slice),w=Math.max,E=function(t,e,r){return r>t.length?-1:""===e?r:x(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,s,p,h,O,j,T,q=a(this),M=0,P=0,L="";if(null!=t){if((r=u(t))&&(n=l(a("flags"in g?t.flags:y(t))),!~x(n,"g")))throw b("`.replaceAll` does not allow non-global regexes");if(o=d(t,m))return i(o,t,q,e);if(v&&r)return S(l(q),t,e)}for(s=l(q),p=l(t),(h=c(e))||(e=l(e)),O=p.length,j=w(1,O),M=E(s,p,0);-1!==M;)T=h?l(e(p,M,s)):f(p,s,M,[],void 0,e),L+=_(s,P,M)+T,P=M+O,M=E(s,p,M+j);return P<s.length&&(L+=_(s,P)),L}})},7207:(t,e,r)=>{r(8757)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";class t{constructor(){this.options={enableAccuracy:!1,timeout:5e3,maximumAge:0}}getPosition(){return new Promise((t=>{navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>t(this.successHandler(e))),(e=>t(this.errorHandler(e)))):(this.errorDescription={success:!0,title:"Выбранный браузер не поддерживает геолоакацию",message:"Выберите другой браузер или введите данные вручную"},t(this.errorDescription))}))}successHandler(t){this.errorDescription=null;const{latitude:e,longitude:r}=t.coords;return this.coords={success:!0,latitude:+e.toFixed(5),longitude:+r.toFixed(5),date:new Date(t.timestamp).toLocaleString()},this.coords}errorHandler(t){switch(this.coords=null,this.errorDescription={},t.code){case 1:this.errorDescription={success:!1,title:"Нет разразрешения нa использование геолокации",message:"Измените настройки и обновите страницу или введите координаты вручную"};break;case 2:this.errorDescription={success:!1,title:"Техническая ошибка",message:"Измените настройки и обновите страницу или введите координаты вручную"};break;case 3:this.errorDescription={success:!1,title:"Превышено время ожидания",message:"Измените настройки и обновите страницу или введите координаты вручную"};break;default:this.errorDescription={success:!1,title:"Неизвестная ошибка",message:"Упс, что-то пошло не так...Повторите попытку или введите координаты вручную"}}return console.log(this.errorDescription,"descr"),this.errorDescription}}class e{constructor(t){this.parentEl=t}static get markup(){return'\n        <div class="modal modal-active">\n\t\t\t    <div class="modal-content">\n\t\t\t      <h3 class="modal__title"></h3>\n            <span class="modal__message"></span>\n            <div class="input__geo">\n              <input class="input__coords" type="text" placeholder="широта, долгота">\n              <span class="tooltip-active hidden">*Заполните поле\t</span>\n            </div>\n            <div class="button__block modal__button">\n              <button class="modal__add-btn">Добавить</button>\n            </div>\n          </div>\n      </div>\n'}redrawModal(){this.parentEl.insertAdjacentHTML("afterbegin",this.constructor.markup),this.modalWrapperEl.classList.add("modal-active")}showDescription(t,e){document.querySelector(".modal__title").textContent=t,document.querySelector(".modal__message").textContent=e}get modalWrapperEl(){return this.parentEl.querySelector(".modal")}get modalTitle(){return this.parentEl.querySelector(".modal__title")}set modalTitle(t){this.parentEl.querySelector(".modal__title").textContent=t}get modalMessage(){return this.parentEl.querySelector(".modal__message")}set modalMessage(t){this.parentEl.querySelector(".modal__message").textContent=t}get modalButtonEl(){return this.parentEl.querySelector(".modal__add-btn")}closeModalForm(t){""!==document.querySelector(".input__coords").value?(this.modalWrapperEl.classList.remove("modal-active"),this.parentEl.querySelector(".modal").remove()):document.querySelector(".tooltip-active").classList.remove("hidden")}}class n{constructor(t,e){this.content=t,this.coords=e}init(){this.bindToDOM()}static template(t,e,r){return`\n    <div class="article-box">\n      <div class="article__header">${t}</div>\n      <div class="article__content">\n        <span class="article__post">${e}</span>\n      </div>\n      <div class="article__footer">\n        <span class="geo__coords">[${r}]</span>\n        <span class="geo__icon">&#128681</span>\n      </td>\n    </tr>\n`}bindToDOM(){const t=document.querySelector(".board"),e=this.addCard(this.created,this.content,this.coords);t.insertAdjacentHTML("beforeend",e)}addCard(){if(this.created=(new Date).toLocaleString(),this.content=document.querySelector(".text__field").value.trim(),this.content){const t=this.constructor.template(this.created,this.content,this.coords);return document.querySelector(".text__field").value="",t}return!1}}r(7207);class o{constructor(t){this.inputEl=t,this.result=[]}verify(){const t=this.getValuesArr(),e=this.getAllowableValue(t);return this.result=[],e}getValuesArr(){let t=this.inputEl.value.replace(/\[|\]/g,"");t=t.split(",");return t.map((t=>t.replaceAll(" ","")))}getAllowableValue(t){t.forEach((t=>{const e=/^-?[0-9][0-9,./]+$/.test(t);this.result.push(e)}));if(this.someValues(this.result))return this.showTooltip("Допустимы только числовые параметры"),this.result=[],!1;return this.getOverlapValue(t)?(document.querySelector(".tooltip-active").classList.add("hidden"),t):void 0}getOverlapValue(t){return t.length<=1||t.length>2?(this.showTooltip("Введите второй параметр через запятую"),!1):t[0].replace("-","")>90?(this.showTooltip("Допустимые значения широты от -90 до 90"),!1):t[1].replace("-","")>180?(this.showTooltip("Допустимые значения долготы -180 до 180"),!1):(document.querySelector(".tooltip-active").classList.add("hidden"),t)}showTooltip(t){const e=document.querySelector(".tooltip-active");e.classList.remove("hidden"),e.textContent=t}someValues(t){return!!t.some((t=>!1===t))}}const i=document.querySelector(".container"),s=new class{constructor(t){this.container=t,this.board=null}createBoard(){this.board=document.createElement("div"),this.board.classList.add("board-container"),this.bindToDOM()}static get markup(){return'\n    \n    <div class="board-container">\n      <h3 class="board__title"></h3>\n      <div class="board"></div>\n      <div class="input-wrapper">\n        <input class="text__field" type="text" placeholder="Напишите что-нибудь...">\n        <div class="button__block">\n          <button class="audio__btn">&#9835</button>\n          <button class="video__btn">&#128250</button>\n        </div>\n      </div>\n    </div>\n\t\t'}bindToDOM(){this.container.insertAdjacentHTML("afterbegin",this.constructor.markup)}}(i),a=new class{constructor(e){this.board=e,this.store=[],this.geo=new t}init(){this.container=document.querySelector(".container"),this.board.createBoard();document.querySelector(".input-wrapper");this.addSubscribe(this.container),this.modal=new e(this.container),this.fieldMessage=document.querySelector(".text__field")}addSubscribe(t){t.addEventListener("keyup",this.keyUp.bind(this)),t.addEventListener("click",this.completionField.bind(this)),t.addEventListener("input",this.completionField.bind(this)),t.addEventListener("click",this.getManualCoords.bind(this))}completionField(t){t.target.classList.contains("text__field")&&document.querySelector(".tooltip-active")&&(Array.from(document.querySelectorAll(".tooltip-active")).forEach((t=>t.remove())),document.querySelector(".text__field").style.outline="none")}validityFields(t){const e=document.createElement("span");if(e.classList.add("tooltip-active"),!t.parentElement.lastElementChild.classList.contains("tooltip-active"))return""!==t.value||(this.parentEl.insertAdjacentElement("beforeend",e),e.textContent="*Заполните поле",document.querySelector(".text__field").style.outline="2px solid red",!1)}keyUp(t){if(t.preventDefault(),document.querySelector(".tooltip-active")||"Enter"!==t.code)return;this.parentEl=t.target.parentElement;this.validityFields(document.querySelector(".text__field"))&&this.getAutoCoords()}getAutoCoords(){this.position=this.geo.getPosition(),this.position.then((t=>{t.success?(this.content=this.fieldMessage.value,this.coords=[t.latitude,t.longitude],this.createPost(this.content,this.coords)):(this.modal.redrawModal(),this.modal.showDescription(t.title,t.message))}))}getManualCoords(t){if(!t.target.classList.contains("modal__add-btn"))return;if(""===document.querySelector(".input__coords").value)return void document.querySelector(".tooltip-active").classList.remove("hidden");this.content=this.fieldMessage.value,this.coordsValue=document.querySelector(".input__coords");const e=new o(this.coordsValue);this.coords=e.verify(),this.coords&&(this.createPost(this.content,this.coords),this.modal.closeModalForm())}createPost(t,e){const r=new n(t,e);r.init(),console.log(r,"post")}}(s);a.init()})()})();