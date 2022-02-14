var app=function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function i(e,n){e.appendChild(n)}function c(e,n,t){e.insertBefore(n,t||null)}function l(e){e.parentNode.removeChild(e)}function s(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function m(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function u(){return d(" ")}function h(e,n,t,r){return e.addEventListener(n,t,r),()=>e.removeEventListener(n,t,r)}function f(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function p(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function g(e,n,t,r){null===t?e.style.removeProperty(n):e.style.setProperty(n,t,r?"important":"")}let b;function $(e){b=e}const v=[],y=[],_=[],k=[],x=Promise.resolve();let w=!1;function j(e){_.push(e)}const E=new Set;let A=0;function N(){const e=b;do{for(;A<v.length;){const e=v[A];A++,$(e),z(e.$$)}for($(null),v.length=0,A=0;y.length;)y.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];E.has(n)||(E.add(n),n())}_.length=0}while(v.length);for(;k.length;)k.pop()();w=!1,E.clear(),$(e)}function z(e){if(null!==e.fragment){e.update(),r(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(j)}}const B=new Set;let O;function P(){O={r:0,c:[],p:O}}function q(){O.r||r(O.c),O=O.p}function C(e,n){e&&e.i&&(B.delete(e),e.i(n))}function L(e,n,t,r){if(e&&e.o){if(B.has(e))return;B.add(e),O.c.push((()=>{B.delete(e),r&&(t&&e.d(1),r())})),e.o(n)}}function S(e){e&&e.c()}function T(e,t,a,i){const{fragment:c,on_mount:l,on_destroy:s,after_update:m}=e.$$;c&&c.m(t,a),i||j((()=>{const t=l.map(n).filter(o);s?s.push(...t):r(t),e.$$.on_mount=[]})),m.forEach(j)}function M(e,n){const t=e.$$;null!==t.fragment&&(r(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function D(e,n){-1===e.$$.dirty[0]&&(v.push(e),w||(w=!0,x.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function F(n,o,a,i,c,s,m,d=[-1]){const u=b;$(n);const h=n.$$={fragment:null,ctx:null,props:s,update:e,not_equal:c,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(u?u.$$.context:[])),callbacks:t(),dirty:d,skip_bound:!1,root:o.target||u.$$.root};m&&m(h.root);let f=!1;if(h.ctx=a?a(n,o.props||{},((e,t,...r)=>{const o=r.length?r[0]:t;return h.ctx&&c(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),f&&D(n,e)),t})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&C(n.$$.fragment),T(n,o.target,o.anchor,o.customElement),N()}$(u)}class G{$destroy(){M(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var H={monsters:[{name:"toxic"},{name:"sentinel"},{name:"steel-infused"},{name:"chaosweaver"},{name:"echoist"},{name:"bloodletter"},{name:"gargantuan"},{name:"malediction"},{name:"vampiric"},{name:"permafrost"},{name:"berserker"},{name:"juggernaut"},{name:"arcane buffer"},{name:"flameweaver"},{name:"frostweaver"},{name:"stormweaver"},{name:"deadeye"},{name:"overcharged"},{name:"hasted"},{name:"dynamo"},{name:"bombardier"},{name:"incendiary"},{name:"frenzied"},{name:"bonebreaker"},{name:"soul.conduit"},{name:"consecrator"},{name:"treant horde",children:["toxic","sentinel","steel-infused"]},{name:"hexer",children:["chaosweaver","echoist"]},{name:"corrupter",children:["bloodletter","chaosweaver"]},{name:"rejuvenating",children:["gargantuan","vampiric"]},{name:"evocationist",children:["flameweaver","frostweaver","stormweaver"]},{name:"assassin",children:["deadeye","vampiric"]},{name:"ice prison",children:["permafrost","sentinel"]},{name:"storm strider",children:["stormweaver","hasted"]},{name:"heralding minions",children:["dynamo","arcane buffer"]},{name:"necromancer",children:["bombardier","overcharged"]},{name:"entangler",children:["toxic","bloodletter"]},{name:"flame strider",children:["flameweaver","hasted"]},{name:"executioner",children:["frenzied","berserker"]},{name:"magma barrier",children:["incendiary","bonebreaker"]},{name:"invulnerable",children:["sentinel","juggernaut","consecrator"]},{name:"frost strider",children:["frostweaver","hasted"]},{name:"mirror image",children:["echoist","soul.conduit"]},{name:"mana siphoner",children:["consecrator","dynamo"]},{name:"drought bringer",children:["malediction","deadeye"]},{name:"effigy",children:["hexer","malediction","corrupter"]},{name:"crystal-skinned",children:["rejuvenating","permafrost","berserker"]},{name:"temporal bubble",children:["hexer","juggernaut","arcane buffer"]},{name:"empowered elements",children:["evocationist","steel-infused","chaosweaver"]},{name:"trickster",children:["assassin","overcharged","echoist"]},{name:"brine king-touched",children:["ice prison","storm strider","heralding minions"]},{name:"corpse detonator",children:["necromancer","incendiary"]},{name:"abberath-touched",children:["flame strider","rejuvenating","frenzied"]},{name:"tukohama-touched",children:["executioner","magma barrier","bonebreaker"]},{name:"soul eater",children:["necromancer","soul.conduit","gargantuan"]},{name:"empowering minions",children:["necromancer","executioner","gargantuan"]},{name:"arakali-touched",children:["corpse detonator","entangler","assassin"]},{name:"kitava-touched",children:["abberath-touched","corpse detonator","tukohama-touched","corrupter"]},{name:"shakari-touched",children:["soul eater","entangler","drought bringer"]},{name:"lunaris-touched",children:["empowering minions","invulnerable","frost strider"]},{name:"solaris-touched",children:["empowering minions","invulnerable","magma barrier"]},{name:"innocence-touched",children:["lunaris-touched","solaris-touched","mirror image","mana siphoner"]}]};function I(e,n,t){const r=e.slice();return r[6]=n[t],r}function J(e){let n,t,r=e[3],o=[];for(let n=0;n<r.length;n+=1)o[n]=K(I(e,r,n));const a=e=>L(o[e],1,1,(()=>{o[e]=null}));return{c(){n=m("div");for(let e=0;e<o.length;e+=1)o[e].c();f(n,"class","sub_recipe")},m(e,r){c(e,n,r);for(let e=0;e<o.length;e+=1)o[e].m(n,null);t=!0},p(e,t){if(12&t){let i;for(r=e[3],i=0;i<r.length;i+=1){const a=I(e,r,i);o[i]?(o[i].p(a,t),C(o[i],1)):(o[i]=K(a),o[i].c(),C(o[i],1),o[i].m(n,null))}for(P(),i=r.length;i<o.length;i+=1)a(i);q()}},i(e){if(!t){for(let e=0;e<r.length;e+=1)C(o[e]);t=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)L(o[e]);t=!1},d(e){e&&l(n),s(o,e)}}}function K(e){let n,t;return n=new V({props:{monster_name:e[6],parent_complete:e[2]}}),{c(){S(n.$$.fragment)},m(e,r){T(n,e,r),t=!0},p(e,t){const r={};8&t&&(r.monster_name=e[6]),4&t&&(r.parent_complete=e[2]),n.$set(r)},i(e){t||(C(n.$$.fragment,e),t=!0)},o(e){L(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function Q(e){let n,t,r,o,a,s,g,b,$,v,y,_=e[3].length>0&&!R&&J(e);return{c(){n=m("div"),t=m("div"),r=m("div"),o=m("input"),a=u(),s=d(e[1]),g=u(),_&&_.c(),f(o,"type","checkbox"),f(o,"id","checkbox"),f(t,"class","info svelte-ihhw02"),f(n,"class",b="main "+(e[2]&&!e[0]?"complete":"not_complete")+" svelte-ihhw02")},m(l,m){c(l,n,m),i(n,t),i(t,r),i(r,o),o.checked=e[2],i(r,a),i(r,s),i(n,g),_&&_.m(n,null),$=!0,v||(y=h(o,"change",e[4]),v=!0)},p(e,[t]){4&t&&(o.checked=e[2]),(!$||2&t)&&p(s,e[1]),e[3].length>0&&!R?_?(_.p(e,t),8&t&&C(_,1)):(_=J(e),_.c(),C(_,1),_.m(n,null)):_&&(P(),L(_,1,1,(()=>{_=null})),q()),(!$||5&t&&b!==(b="main "+(e[2]&&!e[0]?"complete":"not_complete")+" svelte-ihhw02"))&&f(n,"class",b)},i(e){$||(C(_),$=!0)},o(e){L(_),$=!1},d(e){e&&l(n),_&&_.d(),v=!1,y()}}}let R=!1;function U(e,n,t){let r=!1,{parent_complete:o=!1}=n,{monster_name:a}=n,i=[],c=H.monsters.find((e=>e.name===a));return console.log(c),void 0!==c&&void 0!==c.children&&(i=c.children),e.$$set=e=>{"parent_complete"in e&&t(0,o=e.parent_complete),"monster_name"in e&&t(1,a=e.monster_name)},[o,a,r,i,function(){r=this.checked,t(2,r)}]}class V extends G{constructor(e){super(),F(this,e,U,Q,a,{parent_complete:0,monster_name:1})}}function W(e,n,t){const r=e.slice();return r[3]=n[t],r}function X(e,n,t){const r=e.slice();return r[3]=n[t],r[6]=n,r[7]=t,r}function Y(e){let n,t,r,o,a=e[3].name+"";function s(){return e[1](e[3],e[6],e[7])}return{c(){n=m("button"),t=d(a),f(n,"class","hide_button svelte-qbynm7"),g(n,"opacity",e[3].hidden?"0.5":"1")},m(e,a){c(e,n,a),i(n,t),r||(o=h(n,"click",s),r=!0)},p(r,o){e=r,1&o&&a!==(a=e[3].name+"")&&p(t,a),1&o&&g(n,"opacity",e[3].hidden?"0.5":"1")},d(e){e&&l(n),r=!1,o()}}}function Z(e){let n,t;return n=new V({props:{monster_name:e[3].name}}),{c(){S(n.$$.fragment)},m(e,r){T(n,e,r),t=!0},p(e,t){const r={};1&t&&(r.monster_name=e[3].name),n.$set(r)},i(e){t||(C(n.$$.fragment,e),t=!0)},o(e){L(n.$$.fragment,e),t=!1},d(e){M(n,e)}}}function ee(e){let n,t,r=!e[3].hidden&&Z(e);return{c(){r&&r.c(),n=d("")},m(e,o){r&&r.m(e,o),c(e,n,o),t=!0},p(e,t){e[3].hidden?r&&(P(),L(r,1,1,(()=>{r=null})),q()):r?(r.p(e,t),1&t&&C(r,1)):(r=Z(e),r.c(),C(r,1),r.m(n.parentNode,n))},i(e){t||(C(r),t=!0)},o(e){L(r),t=!1},d(e){r&&r.d(e),e&&l(n)}}}function ne(e){let n,t,r,o,a,d=e[0],h=[];for(let n=0;n<d.length;n+=1)h[n]=Y(X(e,d,n));let f=e[0],p=[];for(let n=0;n<f.length;n+=1)p[n]=ee(W(e,f,n));const g=e=>L(p[e],1,1,(()=>{p[e]=null}));return{c(){n=m("main"),t=m("flexbox");for(let e=0;e<h.length;e+=1)h[e].c();r=u(),o=m("div");for(let e=0;e<p.length;e+=1)p[e].c()},m(e,l){c(e,n,l),i(n,t);for(let e=0;e<h.length;e+=1)h[e].m(t,null);i(n,r),i(n,o);for(let e=0;e<p.length;e+=1)p[e].m(o,null);a=!0},p(e,[n]){if(1&n){let r;for(d=e[0],r=0;r<d.length;r+=1){const o=X(e,d,r);h[r]?h[r].p(o,n):(h[r]=Y(o),h[r].c(),h[r].m(t,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=d.length}if(1&n){let t;for(f=e[0],t=0;t<f.length;t+=1){const r=W(e,f,t);p[t]?(p[t].p(r,n),C(p[t],1)):(p[t]=ee(r),p[t].c(),C(p[t],1),p[t].m(o,null))}for(P(),t=f.length;t<p.length;t+=1)g(t);q()}},i(e){if(!a){for(let e=0;e<f.length;e+=1)C(p[e]);a=!0}},o(e){p=p.filter(Boolean);for(let e=0;e<p.length;e+=1)L(p[e]);a=!1},d(e){e&&l(n),s(h,e),s(p,e)}}}function te(e,n,t){let r=[{name:"innocence-touched",hidden:!1},{name:"brine king-touched",hidden:!1},{name:"kitava-touched",hidden:!1},{name:"evocationist",hidden:!1},{name:"shakari-touched",hidden:!1},{name:"arakali-touched",hidden:!1}];return[r,(e,n,o)=>t(0,n[o].hidden=!e.hidden,r)]}return new class extends G{constructor(e){super(),F(this,e,te,ne,a,{})}}({target:document.body,props:{name:"test"}})}();