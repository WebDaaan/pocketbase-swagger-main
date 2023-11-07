import{S as J,i as M,s as O,F as W,c as N,m as T,t as y,a as q,d as H,C as Y,E as j,g as _,k as A,n as B,o as m,O as D,G as K,p as Q,q as E,e as b,w as h,b as P,f as p,r as G,h as w,u as S,v as U,y as F,x as V,z as R}from"./index-a65ca895.js";function X(r){let e,l,s,n,t,o,c,u,i,a,v,k,g,C,d=r[4]&&I(r);return o=new E({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:r}}}),u=new E({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:r}}}),{c(){e=b("form"),l=b("div"),s=b("h5"),n=h(`Reset your user password
                    `),d&&d.c(),t=P(),N(o.$$.fragment),c=P(),N(u.$$.fragment),i=P(),a=b("button"),v=b("span"),v.textContent="Set new password",p(l,"class","content txt-center m-b-base"),p(v,"class","txt"),p(a,"type","submit"),p(a,"class","btn btn-lg btn-block"),a.disabled=r[2],G(a,"btn-loading",r[2])},m(f,$){_(f,e,$),w(e,l),w(l,s),w(s,n),d&&d.m(s,null),w(e,t),T(o,e,null),w(e,c),T(u,e,null),w(e,i),w(e,a),w(a,v),k=!0,g||(C=S(e,"submit",U(r[5])),g=!0)},p(f,$){f[4]?d?d.p(f,$):(d=I(f),d.c(),d.m(s,null)):d&&(d.d(1),d=null);const L={};$&3073&&(L.$$scope={dirty:$,ctx:f}),o.$set(L);const z={};$&3074&&(z.$$scope={dirty:$,ctx:f}),u.$set(z),(!k||$&4)&&(a.disabled=f[2]),(!k||$&4)&&G(a,"btn-loading",f[2])},i(f){k||(y(o.$$.fragment,f),y(u.$$.fragment,f),k=!0)},o(f){q(o.$$.fragment,f),q(u.$$.fragment,f),k=!1},d(f){f&&m(e),d&&d.d(),H(o),H(u),g=!1,C()}}}function Z(r){let e,l,s,n,t;return{c(){e=b("div"),e.innerHTML=`<div class="icon"><i class="ri-checkbox-circle-line"></i></div> 
            <div class="content txt-bold"><p>Successfully changed the user password.</p> 
                <p>You can now sign in with your new password.</p></div>`,l=P(),s=b("button"),s.textContent="Close",p(e,"class","alert alert-success"),p(s,"type","button"),p(s,"class","btn btn-transparent btn-block")},m(o,c){_(o,e,c),_(o,l,c),_(o,s,c),n||(t=S(s,"click",r[7]),n=!0)},p:F,i:F,o:F,d(o){o&&m(e),o&&m(l),o&&m(s),n=!1,t()}}}function I(r){let e,l,s;return{c(){e=h("for "),l=b("strong"),s=h(r[4])},m(n,t){_(n,e,t),_(n,l,t),w(l,s)},p(n,t){t&16&&V(s,n[4])},d(n){n&&m(e),n&&m(l)}}}function x(r){let e,l,s,n,t,o,c,u;return{c(){e=b("label"),l=h("New password"),n=P(),t=b("input"),p(e,"for",s=r[10]),p(t,"type","password"),p(t,"id",o=r[10]),t.required=!0,t.autofocus=!0},m(i,a){_(i,e,a),w(e,l),_(i,n,a),_(i,t,a),R(t,r[0]),t.focus(),c||(u=S(t,"input",r[8]),c=!0)},p(i,a){a&1024&&s!==(s=i[10])&&p(e,"for",s),a&1024&&o!==(o=i[10])&&p(t,"id",o),a&1&&t.value!==i[0]&&R(t,i[0])},d(i){i&&m(e),i&&m(n),i&&m(t),c=!1,u()}}}function ee(r){let e,l,s,n,t,o,c,u;return{c(){e=b("label"),l=h("New password confirm"),n=P(),t=b("input"),p(e,"for",s=r[10]),p(t,"type","password"),p(t,"id",o=r[10]),t.required=!0},m(i,a){_(i,e,a),w(e,l),_(i,n,a),_(i,t,a),R(t,r[1]),c||(u=S(t,"input",r[9]),c=!0)},p(i,a){a&1024&&s!==(s=i[10])&&p(e,"for",s),a&1024&&o!==(o=i[10])&&p(t,"id",o),a&2&&t.value!==i[1]&&R(t,i[1])},d(i){i&&m(e),i&&m(n),i&&m(t),c=!1,u()}}}function te(r){let e,l,s,n;const t=[Z,X],o=[];function c(u,i){return u[3]?0:1}return e=c(r),l=o[e]=t[e](r),{c(){l.c(),s=j()},m(u,i){o[e].m(u,i),_(u,s,i),n=!0},p(u,i){let a=e;e=c(u),e===a?o[e].p(u,i):(A(),q(o[a],1,1,()=>{o[a]=null}),B(),l=o[e],l?l.p(u,i):(l=o[e]=t[e](u),l.c()),y(l,1),l.m(s.parentNode,s))},i(u){n||(y(l),n=!0)},o(u){q(l),n=!1},d(u){o[e].d(u),u&&m(s)}}}function se(r){let e,l;return e=new W({props:{nobranding:!0,$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},m(s,n){T(e,s,n),l=!0},p(s,[n]){const t={};n&2079&&(t.$$scope={dirty:n,ctx:s}),e.$set(t)},i(s){l||(y(e.$$.fragment,s),l=!0)},o(s){q(e.$$.fragment,s),l=!1},d(s){H(e,s)}}}function le(r,e,l){let s,{params:n}=e,t="",o="",c=!1,u=!1;async function i(){if(c)return;l(2,c=!0);const g=new D("../");try{const C=K(n==null?void 0:n.token);await g.collection(C.collectionId).confirmPasswordReset(n==null?void 0:n.token,t,o),l(3,u=!0)}catch(C){Q.error(C)}l(2,c=!1)}const a=()=>window.close();function v(){t=this.value,l(0,t)}function k(){o=this.value,l(1,o)}return r.$$set=g=>{"params"in g&&l(6,n=g.params)},r.$$.update=()=>{r.$$.dirty&64&&l(4,s=Y.getJWTPayload(n==null?void 0:n.token).email||"")},[t,o,c,u,s,i,n,a,v,k]}class oe extends J{constructor(e){super(),M(this,e,le,se,O,{params:6})}}export{oe as default};
