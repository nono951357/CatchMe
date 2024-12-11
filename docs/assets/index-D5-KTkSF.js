(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}})();const Xe=!1;var Ze=Array.isArray,ze=Array.from,Je=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptors,At=Object.getPrototypeOf;function Qe(t){return t()}function Ot(t){for(var e=0;e<t.length;e++)t[e]()}const A=2,ve=4,ot=8,jt=16,L=32,yt=64,Ft=128,V=256,dt=512,x=1024,P=2048,it=4096,Z=8192,z=16384,tr=32768,Bt=65536,er=1<<19,de=1<<20,pt=Symbol("$state"),rr=Symbol("");function pe(t){return t===this.v}function nr(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function lr(t){return!nr(t,this.v)}function or(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ir(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sr(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ur(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ar(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let st=!1;function cr(){st=!0}function he(t){return{f:0,v:t,reactions:null,equals:pe,version:0}}function _r(t,e=!1){var n;const r=he(t);return e||(r.equals=lr),st&&h!==null&&h.l!==null&&((n=h.l).s??(n.s=[])).push(r),r}function q(t,e=!1){return vr(_r(t,e))}function vr(t){return p!==null&&p.f&A&&(D===null?Fr([t]):D.push(t)),t}function g(t,e){return p!==null&&wt()&&p.f&(A|jt)&&(D===null||!D.includes(t))&&fr(),dr(t,e)}function dr(t,e){return t.equals(e)||(t.v=e,t.version=qe(),ge(t,P),wt()&&d!==null&&d.f&x&&!(d.f&L)&&(w!==null&&w.includes(t)?(M(d,P),xt(d)):I===null?Cr([t]):I.push(t))),e}function ge(t,e){var r=t.reactions;if(r!==null)for(var n=wt(),l=r.length,o=0;o<l;o++){var i=r[o],u=i.f;u&P||!n&&i===d||(M(i,e),u&(x|V)&&(u&A?ge(i,it):xt(i)))}}const pr=1,hr=2,gr=Symbol();let mr=!1;function Zt(t){return t!==null&&typeof t=="object"&&pt in t?t[pt]:t}function yr(t,e){return Object.is(Zt(t),Zt(e))}var zt,me,ye;function wr(){if(zt===void 0){zt=window;var t=Element.prototype,e=Node.prototype;me=Xt(e,"firstChild").get,ye=Xt(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function we(t=""){return document.createTextNode(t)}function ht(t){return me.call(t)}function Yt(t){return ye.call(t)}function C(t,e){return ht(t)}function Jt(t,e){{var r=ht(t);return r instanceof Comment&&r.data===""?Yt(r):r}}function R(t,e=1,r=!1){let n=t;for(;e--;)n=Yt(n);return n}function Er(t){var e=A|P;d===null?e|=V:d.f|=de;var r=p!==null&&p.f&A?p:null;const n={children:null,ctx:h,deps:null,equals:pe,f:e,fn:t,reactions:null,v:null,version:0,parent:r??d};return r!==null&&(r.children??(r.children=[])).push(n),n}function Ee(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&A?Vt(n):Q(n)}}}function br(t){for(var e=t.parent;e!==null;){if(!(e.f&A))return e;e=e.parent}return null}function be(t){var e,r=d;B(br(t));try{Ee(t),e=Re(t)}finally{B(r)}return e}function xe(t){var e=be(t),r=(K||t.f&V)&&t.deps!==null?it:x;M(t,r),t.equals(e)||(t.v=e,t.version=qe())}function Vt(t){Ee(t),lt(t,0),M(t,z),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Te(t){d===null&&p===null&&sr(),p!==null&&p.f&V&&ir(),Ut&&or()}function xr(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function J(t,e,r,n=!0){var l=(t&yt)!==0,o=d,i={ctx:h,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:e,last:null,next:null,parent:l?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var u=X;try{re(!0),bt(i),i.f|=tr}catch(_){throw Q(i),_}finally{re(u)}}else e!==null&&xt(i);var s=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&de)===0;if(!s&&!l&&n&&(o!==null&&xr(i,o),p!==null&&p.f&A)){var f=p;(f.children??(f.children=[])).push(i)}return i}function ke(t){const e=J(ot,null,!1);return M(e,x),e.teardown=t,e}function Ct(t){Te();var e=d!==null&&(d.f&L)!==0&&h!==null&&!h.m;if(e){var r=h;(r.e??(r.e=[])).push({fn:t,effect:d,reaction:p})}else{var n=Se(t);return n}}function Tr(t){return Te(),Wt(t)}function kr(t){const e=J(yt,t,!0);return()=>{Q(e)}}function Se(t){return J(ve,t,!1)}function Wt(t){return J(ot,t,!0)}function Qt(t){return Ne(t)}function Ne(t,e=0){return J(ot|jt|e,t,!0)}function Dt(t,e=!0){return J(ot|L,t,!0,e)}function Ae(t){var e=t.teardown;if(e!==null){const r=Ut,n=p;ne(!0),j(null);try{e.call(null)}finally{ne(r),j(n)}}}function Oe(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)Vt(e[r])}}function Fe(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;Q(r,e),r=n}}function Sr(t){for(var e=t.first;e!==null;){var r=e.next;e.f&L||Q(e),e=r}}function Q(t,e=!0){var r=!1;if((e||t.f&er)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var o=n===l?null:Yt(n);n.remove(),n=o}r=!0}Fe(t,e&&!r),Oe(t),lt(t,0),M(t,z);var i=t.transitions;if(i!==null)for(const s of i)s.stop();Ae(t);var u=t.parent;u!==null&&u.first!==null&&Ce(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ce(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function te(t,e){var r=[];De(t,r,!0),Nr(r,()=>{Q(t),e&&e()})}function Nr(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function De(t,e,r){if(!(t.f&Z)){if(t.f^=Z,t.transitions!==null)for(const i of t.transitions)(i.is_global||r)&&e.push(i);for(var n=t.first;n!==null;){var l=n.next,o=(n.f&Bt)!==0||(n.f&L)!==0;De(n,e,o?r:!1),n=l}}}function ee(t){Le(t,!0)}function Le(t,e){if(t.f&Z){ut(t)&&bt(t),t.f^=Z;for(var r=t.first;r!==null;){var n=r.next,l=(r.f&Bt)!==0||(r.f&L)!==0;Le(r,l?e:!1),r=n}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||e)&&o.in()}}let Lt=!1,Mt=[];function Ar(){Lt=!1;const t=Mt.slice();Mt=[],Ot(t)}function qt(t){Lt||(Lt=!0,queueMicrotask(Ar)),Mt.push(t)}function Or(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let vt=!1,gt=!1,mt=null,X=!1,Ut=!1;function re(t){X=t}function ne(t){Ut=t}let Rt=[],nt=0;let p=null;function j(t){p=t}let d=null;function B(t){d=t}let D=null;function Fr(t){D=t}let w=null,T=0,I=null;function Cr(t){I=t}let Me=0,K=!1,h=null;function qe(){return++Me}function wt(){return!st||h!==null&&h.l===null}function ut(t){var i,u;var e=t.f;if(e&P)return!0;if(e&it){var r=t.deps,n=(e&V)!==0;if(r!==null){var l;if(e&dt){for(l=0;l<r.length;l++)((i=r[l]).reactions??(i.reactions=[])).push(t);t.f^=dt}for(l=0;l<r.length;l++){var o=r[l];if(ut(o)&&xe(o),n&&d!==null&&!K&&!((u=o==null?void 0:o.reactions)!=null&&u.includes(t))&&(o.reactions??(o.reactions=[])).push(t),o.version>t.version)return!0}}n||M(t,x)}return!1}function Dr(t,e){for(var r=e;r!==null;){if(r.f&Ft)try{r.fn(t);return}catch{r.f^=Ft}r=r.parent}throw vt=!1,t}function Lr(t){return(t.f&z)===0&&(t.parent===null||(t.parent.f&Ft)===0)}function Et(t,e,r,n){if(vt){if(r===null&&(vt=!1),Lr(e))throw t;return}r!==null&&(vt=!0);{Dr(t,e);return}}function Re(t){var v;var e=w,r=T,n=I,l=p,o=K,i=D,u=h,s=t.f;w=null,T=0,I=null,p=s&(L|yt)?null:t,K=!X&&(s&V)!==0,D=null,h=t.ctx;try{var f=(0,t.fn)(),_=t.deps;if(w!==null){var c;if(lt(t,T),_!==null&&T>0)for(_.length=T+w.length,c=0;c<w.length;c++)_[T+c]=w[c];else t.deps=_=w;if(!K)for(c=T;c<_.length;c++)((v=_[c]).reactions??(v.reactions=[])).push(t)}else _!==null&&T<_.length&&(lt(t,T),_.length=T);return f}finally{w=e,T=r,I=n,p=l,K=o,D=i,h=u}}function Mr(t,e){let r=e.reactions;if(r!==null){var n=r.indexOf(t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&e.f&A&&(w===null||!w.includes(e))&&(M(e,it),e.f&(V|dt)||(e.f^=dt),lt(e,0))}function lt(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Mr(t,r[n])}function bt(t){var e=t.f;if(!(e&z)){M(t,x);var r=d,n=h;d=t;try{e&jt?Sr(t):Fe(t),Oe(t),Ae(t);var l=Re(t);t.teardown=typeof l=="function"?l:null,t.version=Me}catch(o){Et(o,t,r,n||t.ctx)}finally{d=r}}}function qr(){if(nt>1e3){nt=0;try{ur()}catch(t){if(mt!==null)Et(t,mt,null);else throw t}}nt++}function Rr(t){var e=t.length;if(e!==0){qr();var r=X;X=!0;try{for(var n=0;n<e;n++){var l=t[n];l.f&x||(l.f^=x);var o=[];Ie(l,o),Ir(o)}}finally{X=r}}}function Ir(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(z|Z)))try{ut(n)&&(bt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Ce(n):n.fn=null))}catch(l){Et(l,n,null,n.ctx)}}}function Pr(){if(gt=!1,nt>1001)return;const t=Rt;Rt=[],Rr(t),gt||(nt=0,mt=null)}function xt(t){gt||(gt=!0,queueMicrotask(Pr)),mt=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(yt|L)){if(!(r&x))return;e.f^=x}}Rt.push(e)}function Ie(t,e){var r=t.first,n=[];t:for(;r!==null;){var l=r.f,o=(l&L)!==0,i=o&&(l&x)!==0,u=r.next;if(!i&&!(l&Z))if(l&ot){if(o)r.f^=x;else try{ut(r)&&bt(r)}catch(c){Et(c,r,null,r.ctx)}var s=r.first;if(s!==null){r=s;continue}}else l&ve&&n.push(r);if(u===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var f=c.next;if(f!==null){r=f;continue t}c=c.parent}}r=u}for(var _=0;_<n.length;_++)s=n[_],e.push(s),Ie(s,e)}function a(t){var _;var e=t.f,r=(e&A)!==0;if(r&&e&z){var n=be(t);return Vt(t),n}if(p!==null){D!==null&&D.includes(t)&&ar();var l=p.deps;w===null&&l!==null&&l[T]===t?T++:w===null?w=[t]:w.push(t),I!==null&&d!==null&&d.f&x&&!(d.f&L)&&I.includes(t)&&(M(d,P),xt(d))}else if(r&&t.deps===null)for(var o=t,i=o.parent,u=o;i!==null;)if(i.f&A){var s=i;u=s,i=s.parent}else{var f=i;(_=f.deriveds)!=null&&_.includes(u)||(f.deriveds??(f.deriveds=[])).push(u);break}return r&&(o=t,ut(o)&&xe(o)),t.v}function $t(t){const e=p;try{return p=null,t()}finally{p=e}}const jr=~(P|it|x);function M(t,e){t.f=t.f&jr|e}function Br(t,e=1){var r=a(t),n=e===1?r++:r--;return g(t,r),n}function Pe(t,e=!1,r){h={p:h,c:null,e:null,m:!1,s:t,x:null,l:null},st&&!e&&(h.l={s:null,u:null,r1:[],r2:he(!1)})}function je(t){const e=h;if(e!==null){const i=e.e;if(i!==null){var r=d,n=p;e.e=null;try{for(var l=0;l<i.length;l++){var o=i[l];B(o.effect),j(o.reaction),Se(o.fn)}}finally{B(r),j(n)}}h=e.p,e.m=!0}return{}}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)It(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&pt in r&&It(r)}}}function It(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{It(t[n],e)}catch{}const r=At(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=_e(r);for(let l in n){const o=n[l].get;if(o)try{o.call(t)}catch{}}}}}let le=!1;function Vr(){le||(le=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function Be(t){var e=p,r=d;j(null),B(null);try{return t()}finally{j(e),B(r)}}function Ye(t,e,r,n=r){t.addEventListener(e,()=>Be(r));const l=t.__on_r;l?t.__on_r=()=>{l(),n(!0)}:t.__on_r=()=>n(!0),Vr()}const Wr=new Set,oe=new Set;function Ur(t,e,r,n){function l(o){if(n.capture||rt.call(e,o),!o.cancelBubble)return Be(()=>r.call(this,o))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?qt(()=>{e.addEventListener(t,l,n)}):e.addEventListener(t,l,n),l}function _t(t,e,r,n,l){var o={capture:n,passive:l},i=Ur(t,e,r,o);(e===document.body||e===window||e===document)&&ke(()=>{e.removeEventListener(t,i,o)})}function rt(t){var at;var e=this,r=e.ownerDocument,n=t.type,l=((at=t.composedPath)==null?void 0:at.call(t))||[],o=l[0]||t.target,i=0,u=t.__root;if(u){var s=l.indexOf(u);if(s!==-1&&(e===document||e===window)){t.__root=e;return}var f=l.indexOf(e);if(f===-1)return;s<=f&&(i=s)}if(o=l[i]||t.target,o!==e){Je(t,"currentTarget",{configurable:!0,get(){return o||r}});var _=p,c=d;j(null),B(null);try{for(var v,m=[];o!==null;){var y=o.assignedSlot||o.parentNode||o.host||null;try{var S=o["__"+n];if(S!==void 0&&!o.disabled)if(Ze(S)){var[W,...U]=S;W.apply(o,[t,...U])}else S.call(o,t)}catch($){v?m.push($):v=$}if(t.cancelBubble||y===e||y===null)break;o=y}if(v){for(let $ of m)queueMicrotask(()=>{throw $});throw v}}finally{t.__root=e,delete t.currentTarget,j(_),B(c)}}}function $r(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Pt(t,e){var r=d;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function Tt(t,e){var r=(e&pr)!==0,n=(e&hr)!==0,l,o=!t.startsWith("<!>");return()=>{l===void 0&&(l=$r(o?t:"<!>"+t),r||(l=ht(l)));var i=n?document.importNode(l,!0):l.cloneNode(!0);if(r){var u=ht(i),s=i.lastChild;Pt(u,s)}else Pt(i,i);return i}}function Hr(){var t=document.createDocumentFragment(),e=document.createComment(""),r=we();return t.append(e,r),Pt(e,r),t}function tt(t,e){t!==null&&t.before(e)}const Gr=["touchstart","touchmove"];function Kr(t){return Gr.includes(t)}function ie(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function Xr(t,e){return Zr(t,e)}const G=new Map;function Zr(t,{target:e,anchor:r,props:n={},events:l,context:o,intro:i=!0}){wr();var u=new Set,s=c=>{for(var v=0;v<c.length;v++){var m=c[v];if(!u.has(m)){u.add(m);var y=Kr(m);e.addEventListener(m,rt,{passive:y});var S=G.get(m);S===void 0?(document.addEventListener(m,rt,{passive:y}),G.set(m,1)):G.set(m,S+1)}}};s(ze(Wr)),oe.add(s);var f=void 0,_=kr(()=>{var c=r??e.appendChild(we());return Dt(()=>{if(o){Pe({});var v=h;v.c=o}l&&(n.$$events=l),f=t(c,n)||{},o&&je()}),()=>{var y;for(var v of u){e.removeEventListener(v,rt);var m=G.get(v);--m===0?(document.removeEventListener(v,rt),G.delete(v)):G.set(v,m)}oe.delete(s),se.delete(f),c!==r&&((y=c.parentNode)==null||y.removeChild(c))}});return se.set(f,_),f}let se=new WeakMap;function ue(t,e,r=!1){var n=t,l=null,o=null,i=gr,u=r?Bt:0,s=!1;const f=(c,v=!0)=>{s=!0,_(v,c)},_=(c,v)=>{i!==(i=c)&&(i?(l?ee(l):v&&(l=Dt(()=>v(n))),o&&te(o,()=>{o=null})):(o?ee(o):v&&(o=Dt(()=>v(n))),l&&te(l,()=>{l=null})))};Ne(()=>{s=!1,e(f),s||_(null,null)},u)}function et(t,e,r,n){var l=t.__attributes??(t.__attributes={});l[e]!==(l[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[rr]=r),r==null?t.removeAttribute(e):typeof r!="string"&&zr(t).includes(e)?t[e]=r:t.setAttribute(e,r))}var ae=new Map;function zr(t){var e=ae.get(t.nodeName);if(e)return e;ae.set(t.nodeName,e=[]);for(var r,n=At(t),l=Element.prototype;l!==n;){r=_e(n);for(var o in r)r[o].set&&e.push(o);n=At(n)}return e}function Jr(t,e){var r=t.__className,n=Qr(e);(r!==n||mr)&&(e==null?t.removeAttribute("class"):t.className=n,t.__className=n)}function Qr(t){return t??""}function tn(t,e,r=e){var n=wt();Ye(t,"input",l=>{var o=l?t.defaultValue:t.value;if(o=St(t)?Nt(o):o,r(o),n&&o!==(o=e())){var i=t.selectionStart,u=t.selectionEnd;t.value=o??"",u!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(u,t.value.length))}}),$t(e)==null&&t.value&&r(St(t)?Nt(t.value):t.value),Wt(()=>{var l=e();St(t)&&l===Nt(t.value)||t.type==="date"&&!l&&!t.value||l!==t.value&&(t.value=l??"")})}const kt=new Set;function fe(t,e,r,n,l=n){var o=r.getAttribute("type")==="checkbox",i=t;if(e!==null)for(var u of e)i=i[u]??(i[u]=[]);i.push(r),Ye(r,"change",()=>{var s=r.__value;o&&(s=en(i,s,r.checked)),l(s)},()=>l(o?[]:null)),Wt(()=>{var s=n();o?(s=s||[],r.checked=s.includes(r.__value)):r.checked=yr(r.__value,s)}),ke(()=>{var s=i.indexOf(r);s!==-1&&i.splice(s,1)}),kt.has(i)||(kt.add(i),qt(()=>{i.sort((s,f)=>s.compareDocumentPosition(f)===4?-1:1),kt.delete(i)})),qt(()=>{})}function en(t,e,r){for(var n=new Set,l=0;l<t.length;l+=1)t[l].checked&&n.add(t[l].__value);return r||n.delete(e),Array.from(n)}function St(t){var e=t.type;return e==="number"||e==="range"}function Nt(t){return t===""?null:+t}function rn(t=!1){const e=h,r=e.l.u;if(!r)return;let n=()=>Yr(e.s);if(t){let l=0,o={};const i=Er(()=>{let u=!1;const s=e.s;for(const f in s)s[f]!==o[f]&&(o[f]=s[f],u=!0);return u&&l++,l});n=()=>a(i)}r.b.length&&Tr(()=>{ce(e,n),Ot(r.b)}),Ct(()=>{const l=$t(()=>r.m.map(Qe));return()=>{for(const o of l)typeof o=="function"&&o()}}),r.a.length&&Ct(()=>{ce(e,n),Ot(r.a)})}function ce(t,e){if(t.l.s)for(const r of t.l.s)a(r);e()}function nn(t){h===null&&Or(),st&&h.l!==null?ln(h).m.push(t):Ct(()=>{const e=$t(t);if(typeof e=="function")return e})}function ln(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const on="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(on);cr();var sn=Tt('<div class="start-screen svelte-1xwd9g7"><h1>Set Target Score</h1> <input type="number" min="100" max="1000" class="svelte-1xwd9g7"> <div class="target-selection svelte-1xwd9g7"><label class="svelte-1xwd9g7"><input type="radio" name="target"> Fly</label> <label class="svelte-1xwd9g7"><input type="radio" name="target"> Rat</label></div> <button class="svelte-1xwd9g7">Start</button></div>'),un=Tt('<div class="win-screen svelte-1xwd9g7"><h1>You Win!</h1> <p> </p> <button class="svelte-1xwd9g7">Play Again</button></div>'),an=Tt('<div class="eg svelte-1xwd9g7"><div class="circle-boundary svelte-1xwd9g7"></div> <div><img class="svelte-1xwd9g7"></div> <div class="cursor svelte-1xwd9g7"></div></div> <div class="score svelte-1xwd9g7"> </div>',1),fn=Tt("<main><!></main>");function cn(t,e){Pe(e,!1);const r=[];let n=[1,1,0,0],l=q(n[0]),o=q(n[1]),i=n[2],u=n[3],s=q(0),f=q(0),_=q(0),c=q(100),v=q(!1),m=q(!1),y=q("fly");const S=300,W=window.innerWidth/2,U=window.innerHeight/2;nn(()=>{setInterval(()=>{if(!a(v)||a(m))return;if(Math.sqrt((a(l)-a(s))**2+(a(o)-a(f))**2)<100){const N=.005+a(_)*5e-4;i+=(a(l)-a(s))*N,u+=(a(o)-a(f))*N}if(g(l,a(l)+i),g(o,a(o)+u),i*=.95,u*=.95,Math.sqrt((a(l)-W)**2+(a(o)-U)**2)>S){const N=Math.atan2(a(o)-U,a(l)-W);g(l,W+S*Math.cos(N)),g(o,U+S*Math.sin(N)),i=-i,u=-u}},16)});function at(){const b=document.querySelector(`.${a(y)}`).getBoundingClientRect();a(s)>=b.left&&a(s)<=b.right&&a(f)>=b.top&&a(f)<=b.bottom&&(Br(_),a(_)>=a(c)&&g(m,!0))}function $(){(E=>(g(l,E[0]),g(o,E[1]),i=E[2],u=E[3]))([1,1,0,0]),g(s,0),g(f,0),g(_,0),g(v,!0),g(m,!1)}function Ve(E){let b=parseInt(E.target.value);b<100?g(c,100):b>1e3?g(c,1e3):g(c,b)}rn();var Ht=fn(),We=C(Ht);{var Ue=E=>{var b=sn(),N=R(C(b),2),ft=R(N,2),ct=C(ft),O=C(ct);O.value=(O.__value="fly")==null?"":"fly";var Y=R(ct,2),F=C(Y);F.value=(F.__value="rat")==null?"":"rat";var H=R(ft,2);tn(N,()=>a(c),k=>g(c,k)),_t("input",N,Ve),fe(r,[],O,()=>a(y),k=>g(y,k)),fe(r,[],F,()=>a(y),k=>g(y,k)),_t("click",H,$),tt(E,b)},$e=E=>{var b=Hr(),N=Jt(b);{var ft=O=>{var Y=un(),F=R(C(Y),2),H=C(F),k=R(F,2);Qt(()=>ie(H,`Score: ${a(_)??""}`)),_t("click",k,()=>g(v,!1)),tt(O,Y)},ct=O=>{var Y=an(),F=Jt(Y),H=C(F);et(H,"style",`left: ${W??""}px; top: ${U??""}px;`);var k=R(H,2),Gt=C(k),He=R(k,2),Ge=R(F,2),Ke=C(Ge);Qt(()=>{Jr(k,`${a(y)??""} svelte-1xwd9g7`),et(k,"style",`left: ${a(l)??""}px; top: ${a(o)??""}px;`),et(Gt,"src",`${a(y)??""}.png`),et(Gt,"alt",a(y)),et(He,"style",`left: ${a(s)??""}px; top: ${a(f)??""}px;`),ie(Ke,`Score: ${a(_)??""}`)}),_t("mousemove",F,Kt=>{g(s,Kt.clientX),g(f,Kt.clientY),at()}),tt(O,Y)};ue(N,O=>{a(m)?O(ft):O(ct,!1)},!0)}tt(E,b)};ue(We,E=>{a(v)?E($e,!1):E(Ue)})}tt(t,Ht),je()}Xr(cn,{target:document.getElementById("app")});