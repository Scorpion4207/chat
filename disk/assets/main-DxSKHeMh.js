(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const I={MODAL_SETTINGS:document.getElementById("overlow-settings"),SETTINGS:document.getElementById("settings"),INPUT_NIKENAME:document.getElementById("modal__settings-text"),FORM_SETTINGS:document.getElementById("modal__settings-form"),RESULT_NAME_CHANGE:document.getElementById("query-result-name-change")},N={SERVER_URL:"https://edu.strada.one",POST_AND_PATCH_FETCH:"/api/user",GET_DATA_USER:"/api/user/me",GET_DATA_MESSAGES:"/api/messages"};/*! js-cookie v3.0.5 | MIT */function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var Ee={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ne(t,e){function n(a,o,i){if(!(typeof document>"u")){i=W({},e,i),typeof i.expires=="number"&&(i.expires=new Date(Date.now()+i.expires*864e5)),i.expires&&(i.expires=i.expires.toUTCString()),a=encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var u in i)i[u]&&(s+="; "+u,i[u]!==!0&&(s+="="+i[u].split(";")[0]));return document.cookie=a+"="+t.write(o,a)+s}}function r(a){if(!(typeof document>"u"||arguments.length&&!a)){for(var o=document.cookie?document.cookie.split("; "):[],i={},s=0;s<o.length;s++){var u=o[s].split("="),d=u.slice(1).join("=");try{var f=decodeURIComponent(u[0]);if(i[f]=t.read(d,f),a===f)break}catch{}}return a?i[a]:i}}return Object.create({set:n,get:r,remove:function(a,o){n(a,"",W({},o,{expires:-1}))},withAttributes:function(a){return ne(this.converter,W({},this.attributes,a))},withConverter:function(a){return ne(W({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var P=ne(Ee,{path:"/"});async function fe(t,e){return await(await(await fetch(t,{headers:{"Content-Type":"application/json;charset=utf-8",Authorization:`Bearer ${P.get("token")}`}})).json())[e]}const{INPUT_NIKENAME:B}=I;function ve(){const t=B==null?void 0:B.value;return{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:`Bearer ${P.get("token")}`},body:JSON.stringify({name:t})}}async function Oe(){const t=await fetch("https://edu.strada.one/api/user",ve());if(!t.ok)throw new Error("Неудача");return await t.json()}const Me={TEMPLATE_CONTENT:document.getElementById("templateContent"),MESSAGE_BLOG:document.getElementById("message-block"),INPUT_TEXT:document.getElementById("typingText")};async function Pe(t){return await(await(await fetch(t,{headers:{"Content-Type":"application/json;charset=utf-8",Authorization:`Bearer ${P.get("token")}`}})).json()).messages}const le=6048e5,De=864e5,re=Symbol.for("constructDateFrom");function v(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&re in t?t[re](e):t instanceof Date?new t.constructor(e):new Date(e)}function g(t,e){return v(e||t,t)}let Te={};function R(){return Te}function _(t,e){var s,u,d,f;const n=R(),r=(e==null?void 0:e.weekStartsOn)??((u=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,a=g(t,e==null?void 0:e.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function A(t,e){return _(t,{...e,weekStartsOn:1})}function me(t,e){const n=g(t,e==null?void 0:e.in),r=n.getFullYear(),a=v(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=A(a),i=v(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=A(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function ae(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function xe(t,...e){const n=v.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function oe(t,e){const n=g(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function ke(t,e,n){const[r,a]=xe(n==null?void 0:n.in,t,e),o=oe(r),i=oe(a),s=+o-ae(o),u=+i-ae(i);return Math.round((s-u)/De)}function pe(t,e){const n=me(t,e),r=v(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),A(r)}function Se(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Ce(t){return!(!Se(t)&&typeof t!="number"||isNaN(+g(t)))}function _e(t,e){const n=g(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const We={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Le=(t,e,n)=>{let r;const a=We[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function q(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const Ae={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ye={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ie={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ne={date:q({formats:Ae,defaultWidth:"full"}),time:q({formats:Ye,defaultWidth:"full"}),dateTime:q({formats:Ie,defaultWidth:"full"})},Re={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Fe=(t,e,n,r)=>Re[t];function p(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):i;a=t.formattingValues[s]||t.formattingValues[i]}else{const i=t.defaultWidth,s=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const Be={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},He={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},je={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ge={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ue=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Xe={ordinalNumber:Ue,era:p({values:Be,defaultWidth:"wide"}),quarter:p({values:qe,defaultWidth:"wide",argumentCallback:t=>t-1}),month:p({values:He,defaultWidth:"wide"}),day:p({values:je,defaultWidth:"wide"}),dayPeriod:p({values:Ve,defaultWidth:"wide",formattingValues:Ge,defaultFormattingWidth:"wide"})};function S(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?$e(s,y=>y.test(i)):Qe(s,y=>y.test(i));let d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;const f=e.slice(i.length);return{value:d,rest:f}}}function Qe(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function $e(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function ze(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const s=e.slice(a.length);return{value:i,rest:s}}}const Je=/^(\d+)(th|st|nd|rd)?/i,Ke=/\d+/i,Ze={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},et={any:[/^b/i,/^(a|c)/i]},tt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nt={any:[/1/i,/2/i,/3/i,/4/i]},rt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},at={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ot={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},it={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},st={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ct={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ut={ordinalNumber:ze({matchPattern:Je,parsePattern:Ke,valueCallback:t=>parseInt(t,10)}),era:S({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),quarter:S({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:nt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:S({matchPatterns:rt,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any"}),day:S({matchPatterns:ot,defaultMatchWidth:"wide",parsePatterns:it,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:st,defaultMatchWidth:"any",parsePatterns:ct,defaultParseWidth:"any"})},dt={code:"en-US",formatDistance:Le,formatLong:Ne,formatRelative:Fe,localize:Xe,match:ut,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ft(t,e){const n=g(t,e==null?void 0:e.in);return ke(n,_e(n))+1}function lt(t,e){const n=g(t,e==null?void 0:e.in),r=+A(n)-+pe(n);return Math.round(r/le)+1}function he(t,e){var f,y,x,k;const n=g(t,e==null?void 0:e.in),r=n.getFullYear(),a=R(),o=(e==null?void 0:e.firstWeekContainsDate)??((y=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:y.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(x=a.locale)==null?void 0:x.options)==null?void 0:k.firstWeekContainsDate)??1,i=v((e==null?void 0:e.in)||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=_(i,e),u=v((e==null?void 0:e.in)||t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const d=_(u,e);return+n>=+s?r+1:+n>=+d?r:r-1}function mt(t,e){var s,u,d,f;const n=R(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(d=n.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,a=he(t,e),o=v((e==null?void 0:e.in)||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),_(o,e)}function ht(t,e){const n=g(t,e==null?void 0:e.in),r=+_(n,e)-+mt(n,e);return Math.round(r/le)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const E={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ie={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E.y(t,e)},Y:function(t,e,n,r){const a=he(t,r),o=a>0?a:1-a;if(e==="YY"){const i=o%100;return c(i,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){const n=me(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return E.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=ht(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=lt(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):E.d(t,e)},D:function(t,e,n){const r=ft(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=D.noon:r===0?a=D.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=D.evening:r>=12?a=D.afternoon:r>=4?a=D.morning:a=D.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return E.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):E.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):E.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):E.s(t,e)},S:function(t,e){return E.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return ce(r);case"XXXX":case"XX":return M(r);case"XXXXX":case"XXX":default:return M(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return ce(r);case"xxxx":case"xx":return M(r);case"xxxxx":case"xxx":default:return M(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+se(r,":");case"OOOO":default:return"GMT"+M(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+se(r,":");case"zzzz":default:return"GMT"+M(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return c(r,e.length)},T:function(t,e,n){return c(+t,e.length)}};function se(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+c(o,2)}function ce(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):M(t,e)}function M(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),o=c(r%60,2);return n+a+e+o}const ue=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ge=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},gt=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return ue(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",ue(r,e)).replace("{{time}}",ge(a,e))},yt={p:ge,P:gt},wt=/^D+$/,bt=/^Y+$/,Et=["D","DD","YY","YYYY"];function vt(t){return wt.test(t)}function Ot(t){return bt.test(t)}function Mt(t,e,n){const r=Pt(t,e,n);if(console.warn(r),Et.includes(t))throw new RangeError(r)}function Pt(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,xt=/^'([^]*?)'?$/,kt=/''/g,pt=/[a-zA-Z]/;function St(t,e,n){var f,y,x,k;const r=R(),a=r.locale??dt,o=r.firstWeekContainsDate??((y=(f=r.locale)==null?void 0:f.options)==null?void 0:y.firstWeekContainsDate)??1,i=r.weekStartsOn??((k=(x=r.locale)==null?void 0:x.options)==null?void 0:k.weekStartsOn)??0,s=g(t,n==null?void 0:n.in);if(!Ce(s))throw new RangeError("Invalid time value");let u=e.match(Tt).map(h=>{const m=h[0];if(m==="p"||m==="P"){const F=yt[m];return F(h,a.formatLong)}return h}).join("").match(Dt).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const m=h[0];if(m==="'")return{isToken:!1,value:Ct(h)};if(ie[m])return{isToken:!0,value:h};if(m.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(u=a.localize.preprocessor(s,u));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return u.map(h=>{if(!h.isToken)return h.value;const m=h.value;(Ot(m)||vt(m))&&Mt(m,e,String(t));const F=ie[m[0]];return F(s,m,a.localize,d)}).join("")}function Ct(t){const e=t.match(xt);return e?e[1].replace(kt,"'"):t}const{TEMPLATE_CONTENT:de,MESSAGE_BLOG:Y}=Me,{SERVER_URL:_t,GET_DATA_MESSAGES:Wt}=N;console.log();console.log(new Date("2025-01-19T11:03:21.604Z").getTime());const Lt=[1,3,2,9,6];console.log(Lt.sort((t,e)=>t-e));function At(t,e,n,r){if(de&&Y){const a=document.createElement("div");e===P.get("email")?a.classList.add("sent-message"):a.classList.add("delivered-message");const o=de.content.cloneNode(!0),i=o.querySelector(".message");i.textContent=`${t}: ${n}`;const s=o.querySelector(".time");s.textContent=St(new Date(r),"HH/mm"),a.append(o),Y.append(a)}}async function ye(){Y&&(Y.innerHTML=""),(await Pe(`${_t}${Wt}`)).sort((e,n)=>new Date(e.createdAt).getTime()-new Date(n.createdAt).getTime()).map(e=>At(e.user.name,e.user.email,e.text,e.createdAt))}const T={INPUT_EMAIL:document.getElementById("modal-authorization__email"),FORM_EMAIL:document.getElementById("authorization"),EMAIL_VALIDATION:document.getElementById("query-result-email"),ENTER_CODE:document.getElementById("enterCode"),OVERLOW_AUTHORIZATION:document.getElementById("overlow-authorization"),OVERLOW_CONFIRMATION:document.getElementById("overlow-confirmation"),CLOSE_CONFIRMATION:document.querySelector(".modal-confirmation__close")},{INPUT_EMAIL:L}=T;function Yt(t){if(t&&t.value==="")throw new Error("Введите текст")}function It(){if(L!=null&&L.value&&!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(L.value))throw new Error("Неверный ввод электронной почты !")}const{MODAL_SETTINGS:l,RESULT_NAME_CHANGE:b,INPUT_NIKENAME:Nt}=I,{SERVER_URL:Rt,GET_DATA_USER:Ft}=N;function Bt(){l!=null&&l.classList.contains("none")&&(l==null||l.classList.remove("none"))}function qt(t){try{b&&(b.textContent="");const e=t==null?void 0:t.target;(!(l!=null&&l.classList.contains("none"))&&e.classList.contains("modal__settings")||e.classList.contains("modal__close"))&&(l==null||l.classList.add("none"))}catch(e){b&&(b.textContent=`${e}`,b.style.color="red")}}async function Ht(){try{b&&(b.textContent=""),Oe(),Yt(Nt),fe(`${Rt}${Ft}`,"name"),await ye(),l==null||l.classList.add("none")}catch(t){b&&(b.textContent=`${t}`,b.style.color="red")}}const{INPUT_EMAIL:H}=T;function jt(){const t=H==null?void 0:H.value;return{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({email:t})}}const{EMAIL_VALIDATION:j,ENTER_CODE:V}=T;function Vt(){j&&V&&(j.textContent="УСПЕХ!!! А теперь введите отправленный код для входа",j.style.color="#1DB954",V.style.pointerEvents="visible",V.style.backgroundColor="#1DB954")}const{EMAIL_VALIDATION:C,INPUT_EMAIL:O}=T;async function Gt(t){const e=await fetch(t,jt());if(!e.ok)throw new Error("Неудалось отправить код на почту !");return Vt(),await e.json()}async function Ut(t){try{t.preventDefault();const e=O==null?void 0:O.value;e&&P.set("email",e);const{SERVER_URL:n,POST_AND_PATCH_FETCH:r}=N;C&&(C.textContent=""),It(),await Gt(`${n}${r}`)}catch(e){C&&(C.textContent=`${e}`,C.style.color="red")}finally{O!=null&&O.value&&(O.value="")}}const we={INPUT_CONFIRMATION:document.getElementById("modal-confirmation__text"),FORM_CONFIRMATION:document.getElementById("confirmation"),CONFIRMATION_VALIDATION:document.getElementById("query-result-confirmation"),OVERLOW_CONFIRMATION:document.getElementById("overlow-confirmation"),CLOSE_CONFIRMATION:document.querySelector(".modal-confirmation__close")},{OVERLOW_AUTHORIZATION:G,OVERLOW_CONFIRMATION:U}=T;function be(){G==null||G.classList.toggle("none"),U==null||U.classList.toggle("none")}const{INPUT_CONFIRMATION:w,OVERLOW_CONFIRMATION:X,CONFIRMATION_VALIDATION:Q}=we,{MODAL_SETTINGS:$}=I;async function Xt(){try{const{SERVER_URL:t,GET_DATA_USER:e}=N;if(w!=null&&w.value){P.set("token",w==null?void 0:w.value);const n=P.get("token"),r=await fe(`${t}${e}`,"token");if(n!==r)throw new Error("Данный токен не верен");$==null||$.classList.toggle("none"),X==null||X.classList.toggle("none")}}catch(t){Q&&(Q.textContent=`${t}`,Q.style.color="red")}finally{w!=null&&w.value&&(w.value="")}}const{ENTER_CODE:z,CLOSE_CONFIRMATION:J,FORM_EMAIL:K}=T,{FORM_CONFIRMATION:Z}=we,{SETTINGS:ee,FORM_SETTINGS:te}=I,Qt=document.getElementById("sending");ee==null||ee.addEventListener("click",Bt);document.addEventListener("click",qt);z==null||z.addEventListener("click",be);J==null||J.addEventListener("click",be);Z==null||Z.addEventListener("submit",t=>{t.preventDefault(),Xt()});Qt.addEventListener("submit",t=>{t.preventDefault(),ye()});K==null||K.addEventListener("submit",Ut);te==null||te.addEventListener("submit",t=>{t.preventDefault(),Ht()});
