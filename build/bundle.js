var app=function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function i(e,n){e.appendChild(n)}function c(e,n,t){e.insertBefore(n,t||null)}function l(e){e.parentNode.removeChild(e)}function s(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function m(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function u(){return d(" ")}function h(e,n,t,r){return e.addEventListener(n,t,r),()=>e.removeEventListener(n,t,r)}function f(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function g(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function p(e,n,t,r){null===t?e.style.removeProperty(n):e.style.setProperty(n,t,r?"important":"")}let b;function v(e){b=e}const $=[],y=[],_=[],k=[],x=Promise.resolve();let w=!1;function j(e){_.push(e)}const C=new Set;let E=0;function A(){const e=b;do{for(;E<$.length;){const e=$[E];E++,v(e),N(e.$$)}for(v(null),$.length=0,E=0;y.length;)y.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];C.has(n)||(C.add(n),n())}_.length=0}while($.length);for(;k.length;)k.pop()();w=!1,C.clear(),v(e)}function N(e){if(null!==e.fragment){e.update(),r(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(j)}}const z=new Set;let B;function O(){B={r:0,c:[],p:B}}function P(){B.r||r(B.c),B=B.p}function S(e,n){e&&e.i&&(z.delete(e),e.i(n))}function T(e,n,t,r){if(e&&e.o){if(z.has(e))return;z.add(e),B.c.push((()=>{z.delete(e),r&&(t&&e.d(1),r())})),e.o(n)}}function q(e){e&&e.c()}function L(e,t,a,i){const{fragment:c,on_mount:l,on_destroy:s,after_update:m}=e.$$;c&&c.m(t,a),i||j((()=>{const t=l.map(n).filter(o);s?s.push(...t):r(t),e.$$.on_mount=[]})),m.forEach(j)}function M(e,n){const t=e.$$;null!==t.fragment&&(r(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function H(e,n){-1===e.$$.dirty[0]&&($.push(e),w||(w=!0,x.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function I(n,o,a,i,c,s,m,d=[-1]){const u=b;v(n);const h=n.$$={fragment:null,ctx:null,props:s,update:e,not_equal:c,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(u?u.$$.context:[])),callbacks:t(),dirty:d,skip_bound:!1,root:o.target||u.$$.root};m&&m(h.root);let f=!1;if(h.ctx=a?a(n,o.props||{},((e,t,...r)=>{const o=r.length?r[0]:t;return h.ctx&&c(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),f&&H(n,e)),t})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&S(n.$$.fragment),L(n,o.target,o.anchor,o.customElement),A()}v(u)}class D{$destroy(){M(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var F={monsters:[{name:"toxic"},{name:"sentinel"},{name:"steel-infused"},{name:"chaosweaver"},{name:"echoist"},{name:"bloodletter"},{name:"gargantuan"},{name:"malediction"},{name:"vampiric"},{name:"permafrost"},{name:"berserker"},{name:"juggernaut"},{name:"arcane buffer"},{name:"flameweaver"},{name:"frostweaver"},{name:"stormweaver"},{name:"deadeye"},{name:"overcharged"},{name:"hasted"},{name:"dynamo"},{name:"bombardier"},{name:"incendiary"},{name:"frenzied"},{name:"bonebreaker"},{name:"soul.conduit"},{name:"consecrator"},{name:"treant horde",children:["toxic","sentinel","steel-infused"]},{name:"hexer",children:["chaosweaver","echoist"]},{name:"corrupter",children:["bloodletter","chaosweaver"]},{name:"rejuvenating",children:["gargantuan","vampiric"]},{name:"evocationist",children:["flameweaver","frostweaver","stormweaver"]},{name:"assassin",children:["deadeye","vampiric"]},{name:"ice prison",children:["permafrost","sentinel"]},{name:"storm strider",children:["stormweaver","hasted"]},{name:"heralding minions",children:["dynamo","arcane buffer"]},{name:"necromancer",children:["bombardier","overcharged"]},{name:"entangler",children:["toxic","bloodletter"]},{name:"flame strider",children:["flameweaver","hasted"]},{name:"executioner",children:["frenzied","berserker"]},{name:"magma barrier",children:["incendiary","bonebreaker"]},{name:"invulnerable",children:["sentinel","juggernaut","consecrator"]},{name:"frost strider",children:["frostweaver","hasted"]},{name:"mirror image",children:["echoist","soul.conduit"]},{name:"mana siphoner",children:["consecrator","dynamo"]},{name:"drought bringer",children:["malediction","deadeye"]},{name:"effigy",children:["hexer","malediction","corrupter"]},{name:"crystal-skinned",children:["rejuvenating","permafrost","berserker"]},{name:"temporal bubble",children:["hexer","juggernaut","arcane buffer"]},{name:"empowered elements",children:["evocationist","steel-infused","chaosweaver"]},{name:"trickster",children:["assassin","overcharged","echoist"]},{name:"brine king-touched",children:["ice prison","storm strider","heralding minions"]},{name:"corpse detonator",children:["necromancer","incendiary"]},{name:"abberath-touched",children:["flame strider","rejuvenating","frenzied"]},{name:"tukohama-touched",children:["executioner","magma barrier","bonebreaker"]},{name:"soul eater",children:["necromancer","soul.conduit","gargantuan"]},{name:"empowering minions",children:["necromancer","executioner","gargantuan"]},{name:"arakali-touched",children:["corpse detonator","entangler","assassin"]},{name:"kitava-touched",children:["abberath-touched","corpse detonator","tukohama-touched","corrupter"]},{name:"shakari-touched",children:["soul eater","entangler","drought bringer"]},{name:"lunaris-touched",children:["empowering minions","invulnerable","frost strider"]},{name:"solaris-touched",children:["empowering minions","invulnerable","magma barrier"]},{name:"innocence-touched",children:["lunaris-touched","solaris-touched","mirror image","mana siphoner"]}]};function G(e,n,t){const r=e.slice();return r[6]=n[t],r}function J(e){let n,t,r=e[3],o=[];for(let n=0;n<r.length;n+=1)o[n]=K(G(e,r,n));const a=e=>T(o[e],1,1,(()=>{o[e]=null}));return{c(){n=m("div");for(let e=0;e<o.length;e+=1)o[e].c();f(n,"class","sub_recipe")},m(e,r){c(e,n,r);for(let e=0;e<o.length;e+=1)o[e].m(n,null);t=!0},p(e,t){if(12&t){let i;for(r=e[3],i=0;i<r.length;i+=1){const a=G(e,r,i);o[i]?(o[i].p(a,t),S(o[i],1)):(o[i]=K(a),o[i].c(),S(o[i],1),o[i].m(n,null))}for(O(),i=r.length;i<o.length;i+=1)a(i);P()}},i(e){if(!t){for(let e=0;e<r.length;e+=1)S(o[e]);t=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)T(o[e]);t=!1},d(e){e&&l(n),s(o,e)}}}function K(e){let n,t;return n=new U({props:{monster_name:e[6],parent_complete:e[2]}}),{c(){q(n.$$.fragment)},m(e,r){L(n,e,r),t=!0},p(e,t){const r={};8&t&&(r.monster_name=e[6]),4&t&&(r.parent_complete=e[2]),n.$set(r)},i(e){t||(S(n.$$.fragment,e),t=!0)},o(e){T(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function Q(e){let n,t,r,o,a,s,p,b,v,$,y,_=e[3].length>0&&!e[2]&&J(e);return{c(){n=m("div"),t=m("div"),r=m("div"),o=m("input"),a=u(),s=d(e[1]),p=u(),_&&_.c(),f(o,"type","checkbox"),f(o,"id","checkbox"),f(t,"class","info svelte-ihhw02"),f(n,"class",b="main "+(e[2]&&!e[0]?"complete":"not_complete")+" svelte-ihhw02")},m(l,m){c(l,n,m),i(n,t),i(t,r),i(r,o),o.checked=e[2],i(r,a),i(r,s),i(n,p),_&&_.m(n,null),v=!0,$||(y=h(o,"change",e[4]),$=!0)},p(e,[t]){4&t&&(o.checked=e[2]),(!v||2&t)&&g(s,e[1]),e[3].length>0&&!e[2]?_?(_.p(e,t),12&t&&S(_,1)):(_=J(e),_.c(),S(_,1),_.m(n,null)):_&&(O(),T(_,1,1,(()=>{_=null})),P()),(!v||5&t&&b!==(b="main "+(e[2]&&!e[0]?"complete":"not_complete")+" svelte-ihhw02"))&&f(n,"class",b)},i(e){v||(S(_),v=!0)},o(e){T(_),v=!1},d(e){e&&l(n),_&&_.d(),$=!1,y()}}}function R(e,n,t){let r=!1,{parent_complete:o=!1}=n,{monster_name:a}=n,i=[],c=F.monsters.find((e=>e.name===a));return console.log(c),void 0!==c&&void 0!==c.children&&(i=c.children),e.$$set=e=>{"parent_complete"in e&&t(0,o=e.parent_complete),"monster_name"in e&&t(1,a=e.monster_name)},[o,a,r,i,function(){r=this.checked,t(2,r)}]}class U extends D{constructor(e){super(),I(this,e,R,Q,a,{parent_complete:0,monster_name:1})}}function V(e,n,t){const r=e.slice();return r[3]=n[t],r}function W(e,n,t){const r=e.slice();return r[3]=n[t],r[6]=n,r[7]=t,r}function X(e){let n,t,r,o,a=e[3].name+"";function s(){return e[1](e[3],e[6],e[7])}return{c(){n=m("button"),t=d(a),f(n,"class","hide_button svelte-qbynm7"),p(n,"opacity",e[3].hidden?"0.5":"1")},m(e,a){c(e,n,a),i(n,t),r||(o=h(n,"click",s),r=!0)},p(r,o){e=r,1&o&&a!==(a=e[3].name+"")&&g(t,a),1&o&&p(n,"opacity",e[3].hidden?"0.5":"1")},d(e){e&&l(n),r=!1,o()}}}function Y(e){let n,t;return n=new U({props:{monster_name:e[3].name}}),{c(){q(n.$$.fragment)},m(e,r){L(n,e,r),t=!0},p(e,t){const r={};1&t&&(r.monster_name=e[3].name),n.$set(r)},i(e){t||(S(n.$$.fragment,e),t=!0)},o(e){T(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function Z(e){let n,t,r=!e[3].hidden&&Y(e);return{c(){r&&r.c(),n=d("")},m(e,o){r&&r.m(e,o),c(e,n,o),t=!0},p(e,t){e[3].hidden?r&&(O(),T(r,1,1,(()=>{r=null})),P()):r?(r.p(e,t),1&t&&S(r,1)):(r=Y(e),r.c(),S(r,1),r.m(n.parentNode,n))},i(e){t||(S(r),t=!0)},o(e){T(r),t=!1},d(e){r&&r.d(e),e&&l(n)}}}function ee(e){let n,t,r,o,a,d,h,f,g,p,b,v,$,y,_,k,x,w=e[0],j=[];for(let n=0;n<w.length;n+=1)j[n]=X(W(e,w,n));let C=e[0],E=[];for(let n=0;n<C.length;n+=1)E[n]=Z(V(e,C,n));const A=e=>T(E[e],1,1,(()=>{E[e]=null}));return{c(){n=m("main"),t=m("h1"),t.textContent="Monster recipes",r=u(),o=m("flexbox");for(let e=0;e<j.length;e+=1)j[e].c();a=u(),d=m("h2"),d.textContent="Suggestions",h=u(),f=m("p"),f.textContent="Innocence, brine king, kitava, evocationist",g=u(),p=m("p"),p.textContent="assasin, mirror image, treant horde, necromancer/rejuvenating",b=u(),v=m("p"),v.textContent="rejuvenating, assasin, mirror image, Treant Horde",$=u(),y=m("p"),_=u(),k=m("div");for(let e=0;e<E.length;e+=1)E[e].c()},m(e,l){c(e,n,l),i(n,t),i(n,r),i(n,o);for(let e=0;e<j.length;e+=1)j[e].m(o,null);i(n,a),i(n,d),i(n,h),i(n,f),i(n,g),i(n,p),i(n,b),i(n,v),i(n,$),i(n,y),i(n,_),i(n,k);for(let e=0;e<E.length;e+=1)E[e].m(k,null);x=!0},p(e,[n]){if(1&n){let t;for(w=e[0],t=0;t<w.length;t+=1){const r=W(e,w,t);j[t]?j[t].p(r,n):(j[t]=X(r),j[t].c(),j[t].m(o,null))}for(;t<j.length;t+=1)j[t].d(1);j.length=w.length}if(1&n){let t;for(C=e[0],t=0;t<C.length;t+=1){const r=V(e,C,t);E[t]?(E[t].p(r,n),S(E[t],1)):(E[t]=Z(r),E[t].c(),S(E[t],1),E[t].m(k,null))}for(O(),t=C.length;t<E.length;t+=1)A(t);P()}},i(e){if(!x){for(let e=0;e<C.length;e+=1)S(E[e]);x=!0}},o(e){E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)T(E[e]);x=!1},d(e){e&&l(n),s(j,e),s(E,e)}}}function ne(e,n,t){let r=[{name:"innocence-touched",hidden:!0},{name:"brine king-touched",hidden:!0},{name:"kitava-touched",hidden:!0},{name:"evocationist",hidden:!0},{name:"shakari-touched",hidden:!0},{name:"arakali-touched",hidden:!0},{name:"assassin",hidden:!0},{name:"mirror image",hidden:!0},{name:"treant horde",hidden:!0},{name:"rejuvenating",hidden:!0}].sort(((e,n)=>e.name.localeCompare(n.name)));return[r,(e,n,o)=>t(0,n[o].hidden=!e.hidden,r)]}return new class extends D{constructor(e){super(),I(this,e,ne,ee,a,{})}}({target:document.body,props:{name:"test"}})}();
