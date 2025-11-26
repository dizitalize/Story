import{j as m}from"./jsx-runtime-DF2Pcvd1.js";import{r as zt}from"./index-kS-9iBlu.js";import{r as E}from"./index-B2-qRKKC.js";import{c as _t}from"./classNames-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _e="_tooltipRoot_plu4z_3",Re="_tooltip_plu4z_3",ke="_variantDefault_plu4z_38",Se="_variantLight_plu4z_39",De="_variantDark_plu4z_45",Le="_sizeSmall_plu4z_52",Ce="_sizeMedium_plu4z_61",Oe="_sizeLarge_plu4z_70",Ee="_noShadow_plu4z_79",ze="_arrow_plu4z_84",je="_arrowLight_plu4z_94",Me="_arrowDark_plu4z_98",Pe="_arrowTop_plu4z_103",Fe="_arrowBottom_plu4z_109",Ne="_arrowLeft_plu4z_115",Be="_arrowRight_plu4z_121",We="_content_plu4z_128",z={tooltipRoot:_e,tooltip:Re,variantDefault:ke,variantLight:Se,variantDark:De,sizeSmall:Le,sizeMedium:Ce,sizeLarge:Oe,noShadow:Ee,arrow:ze,arrowLight:je,arrowDark:Me,arrowTop:Pe,arrowBottom:Fe,arrowLeft:Ne,arrowRight:Be,content:We},gt=E.forwardRef(({size:t,variant:e,placement:n,className:o="",style:r,...s},i)=>{const a=n.split("-")[0],d=e==="dark"?"Dark":"Light",c=`arrow${a.charAt(0).toUpperCase()+a.slice(1)}`,p=_t(z.arrow,z[`arrow${d}`],z[c],o);return m.jsx("div",{ref:i,className:p,style:r,"aria-hidden":"true",...s})});gt.displayName="TooltipArrow";gt.__docgenInfo={description:"",methods:[],displayName:"TooltipArrow",props:{size:{required:!0,tsType:{name:"number"},description:""},variant:{required:!0,tsType:{name:"union",raw:"TooltipVariant | 'light' | 'dark'",elements:[{name:"union",raw:"'light' | 'dark' | 'default' | 'analytics'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'default'"},{name:"literal",value:"'analytics'"}]},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},placement:{required:!0,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Z=Math.min,U=Math.max,ht=Math.round,it=Math.floor,N=t=>({x:t,y:t}),Ve={left:"right",right:"left",bottom:"top",top:"bottom"},$e={start:"end",end:"start"};function Rt(t,e,n){return U(t,Z(e,n))}function ot(t,e){return typeof t=="function"?t(e):t}function G(t){return t.split("-")[0]}function rt(t){return t.split("-")[1]}function pe(t){return t==="x"?"y":"x"}function Dt(t){return t==="y"?"height":"width"}const He=new Set(["top","bottom"]);function q(t){return He.has(G(t))?"y":"x"}function Lt(t){return pe(q(t))}function Ie(t,e,n){n===void 0&&(n=!1);const o=rt(t),r=Lt(t),s=Dt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=wt(i)),[i,wt(i)]}function qe(t){const e=wt(t);return[kt(t),e,kt(e)]}function kt(t){return t.replace(/start|end/g,e=>$e[e])}const jt=["left","right"],Mt=["right","left"],Xe=["top","bottom"],Ye=["bottom","top"];function Ke(t,e,n){switch(t){case"top":case"bottom":return n?e?Mt:jt:e?jt:Mt;case"left":case"right":return e?Xe:Ye;default:return[]}}function Ue(t,e,n,o){const r=rt(t);let s=Ke(G(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(kt)))),s}function wt(t){return t.replace(/left|right|bottom|top/g,e=>Ve[e])}function Ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function fe(t){return typeof t!="number"?Ge(t):{top:t,right:t,bottom:t,left:t}}function yt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Pt(t,e,n){let{reference:o,floating:r}=t;const s=q(e),i=Lt(e),a=Dt(i),d=G(e),c=s==="y",p=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,g=o[a]/2-r[a]/2;let l;switch(d){case"top":l={x:p,y:o.y-r.height};break;case"bottom":l={x:p,y:o.y+o.height};break;case"right":l={x:o.x+o.width,y:u};break;case"left":l={x:o.x-r.width,y:u};break;default:l={x:o.x,y:o.y}}switch(rt(e)){case"start":l[i]-=g*(n&&c?-1:1);break;case"end":l[i]+=g*(n&&c?-1:1);break}return l}const Je=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,a=s.filter(Boolean),d=await(i.isRTL==null?void 0:i.isRTL(e));let c=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:p,y:u}=Pt(c,o,d),g=o,l={},f=0;for(let w=0;w<a.length;w++){const{name:h,fn:y}=a[w],{x:v,y:x,data:A,reset:b}=await y({x:p,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:l,rects:c,platform:i,elements:{reference:t,floating:e}});p=v??p,u=x??u,l={...l,[h]:{...l[h],...A}},b&&f<=50&&(f++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(c=b.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:p,y:u}=Pt(c,g,d)),w=-1)}return{x:p,y:u,placement:g,strategy:r,middlewareData:l}};async function me(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:a,strategy:d}=t,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:l=0}=ot(e,t),f=fe(l),h=a[g?u==="floating"?"reference":"floating":u],y=yt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(h)))==null||n?h:h.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:p,strategy:d})),v=u==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),A=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},b=yt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:x,strategy:d}):v);return{top:(y.top-b.top+f.top)/A.y,bottom:(b.bottom-y.bottom+f.bottom)/A.y,left:(y.left-b.left+f.left)/A.x,right:(b.right-y.right+f.right)/A.x}}const Qe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:s,platform:i,elements:a,middlewareData:d}=e,{element:c,padding:p=0}=ot(t,e)||{};if(c==null)return{};const u=fe(p),g={x:n,y:o},l=Lt(r),f=Dt(l),w=await i.getDimensions(c),h=l==="y",y=h?"top":"left",v=h?"bottom":"right",x=h?"clientHeight":"clientWidth",A=s.reference[f]+s.reference[l]-g[l]-s.floating[f],b=g[l]-s.reference[l],R=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c));let T=R?R[x]:0;(!T||!await(i.isElement==null?void 0:i.isElement(R)))&&(T=a.floating[x]||s.floating[f]);const V=A/2-b/2,k=T/2-w[f]/2-1,L=Z(u[y],k),Y=Z(u[v],k),$=L,K=T-w[f]-Y,_=T/2-w[f]/2+V,H=Rt($,_,K),j=!d.arrow&&rt(r)!=null&&_!==H&&s.reference[f]/2-(_<$?L:Y)-w[f]/2<0,C=j?_<$?_-$:_-K:0;return{[l]:g[l]+C,data:{[l]:H,centerOffset:_-H-C,...j&&{alignmentOffset:C}},reset:j}}}),Ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:a,platform:d,elements:c}=e,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:l="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:w=!0,...h}=ot(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=G(r),v=q(a),x=G(a)===a,A=await(d.isRTL==null?void 0:d.isRTL(c.floating)),b=g||(x||!w?[wt(a)]:qe(a)),R=f!=="none";!g&&R&&b.push(...Ue(a,w,f,A));const T=[a,...b],V=await me(e,h),k=[];let L=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&k.push(V[y]),u){const _=Ie(r,i,A);k.push(V[_[0]],V[_[1]])}if(L=[...L,{placement:r,overflows:k}],!k.every(_=>_<=0)){var Y,$;const _=(((Y=s.flip)==null?void 0:Y.index)||0)+1,H=T[_];if(H&&(!(u==="alignment"?v!==q(H):!1)||L.every(S=>q(S.placement)===v?S.overflows[0]>0:!0)))return{data:{index:_,overflows:L},reset:{placement:H}};let j=($=L.filter(C=>C.overflows[0]<=0).sort((C,S)=>C.overflows[1]-S.overflows[1])[0])==null?void 0:$.placement;if(!j)switch(l){case"bestFit":{var K;const C=(K=L.filter(S=>{if(R){const F=q(S.placement);return F===v||F==="y"}return!0}).map(S=>[S.placement,S.overflows.filter(F=>F>0).reduce((F,Te)=>F+Te,0)]).sort((S,F)=>S[1]-F[1])[0])==null?void 0:K[0];C&&(j=C);break}case"initialPlacement":j=a;break}if(r!==j)return{reset:{placement:j}}}return{}}}},tn=new Set(["left","top"]);async function en(t,e){const{placement:n,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=G(n),a=rt(n),d=q(n)==="y",c=tn.has(i)?-1:1,p=s&&d?-1:1,u=ot(e,t);let{mainAxis:g,crossAxis:l,alignmentAxis:f}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof f=="number"&&(l=a==="end"?f*-1:f),d?{x:l*p,y:g*c}:{x:g*c,y:l*p}}const nn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:s,placement:i,middlewareData:a}=e,d=await en(e,t);return i===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+d.x,y:s+d.y,data:{...d,placement:i}}}}},on=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:i=!1,limiter:a={fn:h=>{let{x:y,y:v}=h;return{x:y,y:v}}},...d}=ot(t,e),c={x:n,y:o},p=await me(e,d),u=q(G(r)),g=pe(u);let l=c[g],f=c[u];if(s){const h=g==="y"?"top":"left",y=g==="y"?"bottom":"right",v=l+p[h],x=l-p[y];l=Rt(v,l,x)}if(i){const h=u==="y"?"top":"left",y=u==="y"?"bottom":"right",v=f+p[h],x=f-p[y];f=Rt(v,f,x)}const w=a.fn({...e,[g]:l,[u]:f});return{...w,data:{x:w.x-n,y:w.y-o,enabled:{[g]:s,[u]:i}}}}}};function xt(){return typeof window<"u"}function et(t){return ge(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(ge(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ge(t){return xt()?t instanceof Node||t instanceof O(t).Node:!1}function M(t){return xt()?t instanceof Element||t instanceof O(t).Element:!1}function B(t){return xt()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function Ft(t){return!xt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}const rn=new Set(["inline","contents"]);function st(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!rn.has(r)}const sn=new Set(["table","td","th"]);function an(t){return sn.has(et(t))}const ln=[":popover-open",":modal"];function vt(t){return ln.some(e=>{try{return t.matches(e)}catch{return!1}})}const cn=["transform","translate","scale","rotate","perspective"],dn=["transform","translate","scale","rotate","perspective","filter"],un=["paint","layout","strict","content"];function Ct(t){const e=Ot(),n=M(t)?P(t):t;return cn.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||dn.some(o=>(n.willChange||"").includes(o))||un.some(o=>(n.contain||"").includes(o))}function pn(t){let e=X(t);for(;B(e)&&!tt(e);){if(Ct(e))return e;if(vt(e))return null;e=X(e)}return null}function Ot(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const fn=new Set(["html","body","#document"]);function tt(t){return fn.has(et(t))}function P(t){return O(t).getComputedStyle(t)}function bt(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function X(t){if(et(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ft(t)&&t.host||W(t);return Ft(e)?e.host:e}function he(t){const e=X(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&st(e)?e:he(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=he(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=O(r);if(s){const a=St(i);return e.concat(i,i.visualViewport||[],st(r)?r:[],a&&n?nt(a):[])}return e.concat(r,nt(r,[],n))}function St(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function we(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=B(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,a=ht(n)!==s||ht(o)!==i;return a&&(n=s,o=i),{width:n,height:o,$:a}}function Et(t){return M(t)?t:t.contextElement}function Q(t){const e=Et(t);if(!B(e))return N(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=we(e);let i=(s?ht(n.width):n.width)/o,a=(s?ht(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!a||!Number.isFinite(a))&&(a=1),{x:i,y:a}}const mn=N(0);function ye(t){const e=O(t);return!Ot()||!e.visualViewport?mn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==O(t)?!1:e}function J(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Et(t);let i=N(1);e&&(o?M(o)&&(i=Q(o)):i=Q(t));const a=gn(s,n,o)?ye(s):N(0);let d=(r.left+a.x)/i.x,c=(r.top+a.y)/i.y,p=r.width/i.x,u=r.height/i.y;if(s){const g=O(s),l=o&&M(o)?O(o):o;let f=g,w=St(f);for(;w&&o&&l!==f;){const h=Q(w),y=w.getBoundingClientRect(),v=P(w),x=y.left+(w.clientLeft+parseFloat(v.paddingLeft))*h.x,A=y.top+(w.clientTop+parseFloat(v.paddingTop))*h.y;d*=h.x,c*=h.y,p*=h.x,u*=h.y,d+=x,c+=A,f=O(w),w=St(f)}}return yt({width:p,height:u,x:d,y:c})}function At(t,e){const n=bt(t).scrollLeft;return e?e.left+n:J(W(t)).left+n}function xe(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-At(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function hn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=W(o),a=e?vt(e.floating):!1;if(o===i||a&&s)return n;let d={scrollLeft:0,scrollTop:0},c=N(1);const p=N(0),u=B(o);if((u||!u&&!s)&&((et(o)!=="body"||st(i))&&(d=bt(o)),B(o))){const l=J(o);c=Q(o),p.x=l.x+o.clientLeft,p.y=l.y+o.clientTop}const g=i&&!u&&!s?xe(i,d):N(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-d.scrollLeft*c.x+p.x+g.x,y:n.y*c.y-d.scrollTop*c.y+p.y+g.y}}function wn(t){return Array.from(t.getClientRects())}function yn(t){const e=W(t),n=bt(t),o=t.ownerDocument.body,r=U(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=U(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+At(t);const a=-n.scrollTop;return P(o).direction==="rtl"&&(i+=U(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:a}}const Nt=25;function xn(t,e){const n=O(t),o=W(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,a=0,d=0;if(r){s=r.width,i=r.height;const p=Ot();(!p||p&&e==="fixed")&&(a=r.offsetLeft,d=r.offsetTop)}const c=At(o);if(c<=0){const p=o.ownerDocument,u=p.body,g=getComputedStyle(u),l=p.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,f=Math.abs(o.clientWidth-u.clientWidth-l);f<=Nt&&(s-=f)}else c<=Nt&&(s+=c);return{width:s,height:i,x:a,y:d}}const vn=new Set(["absolute","fixed"]);function bn(t,e){const n=J(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=B(t)?Q(t):N(1),i=t.clientWidth*s.x,a=t.clientHeight*s.y,d=r*s.x,c=o*s.y;return{width:i,height:a,x:d,y:c}}function Bt(t,e,n){let o;if(e==="viewport")o=xn(t,n);else if(e==="document")o=yn(W(t));else if(M(e))o=bn(e,n);else{const r=ye(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return yt(o)}function ve(t,e){const n=X(t);return n===e||!M(n)||tt(n)?!1:P(n).position==="fixed"||ve(n,e)}function An(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(a=>M(a)&&et(a)!=="body"),r=null;const s=P(t).position==="fixed";let i=s?X(t):t;for(;M(i)&&!tt(i);){const a=P(i),d=Ct(i);!d&&a.position==="fixed"&&(r=null),(s?!d&&!r:!d&&a.position==="static"&&!!r&&vn.has(r.position)||st(i)&&!d&&ve(t,i))?o=o.filter(p=>p!==i):r=a,i=X(i)}return e.set(t,o),o}function Tn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?vt(e)?[]:An(e,this._c):[].concat(n),o],a=i[0],d=i.reduce((c,p)=>{const u=Bt(e,p,r);return c.top=U(u.top,c.top),c.right=Z(u.right,c.right),c.bottom=Z(u.bottom,c.bottom),c.left=U(u.left,c.left),c},Bt(e,a,r));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function _n(t){const{width:e,height:n}=we(t);return{width:e,height:n}}function Rn(t,e,n){const o=B(e),r=W(e),s=n==="fixed",i=J(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const d=N(0);function c(){d.x=At(r)}if(o||!o&&!s)if((et(e)!=="body"||st(r))&&(a=bt(e)),o){const l=J(e,!0,s,e);d.x=l.x+e.clientLeft,d.y=l.y+e.clientTop}else r&&c();s&&!o&&r&&c();const p=r&&!o&&!s?xe(r,a):N(0),u=i.left+a.scrollLeft-d.x-p.x,g=i.top+a.scrollTop-d.y-p.y;return{x:u,y:g,width:i.width,height:i.height}}function Tt(t){return P(t).position==="static"}function Wt(t,e){if(!B(t)||P(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return W(t)===n&&(n=n.ownerDocument.body),n}function be(t,e){const n=O(t);if(vt(t))return n;if(!B(t)){let r=X(t);for(;r&&!tt(r);){if(M(r)&&!Tt(r))return r;r=X(r)}return n}let o=Wt(t,e);for(;o&&an(o)&&Tt(o);)o=Wt(o,e);return o&&tt(o)&&Tt(o)&&!Ct(o)?n:o||pn(t)||n}const kn=async function(t){const e=this.getOffsetParent||be,n=this.getDimensions,o=await n(t.floating);return{reference:Rn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Sn(t){return P(t).direction==="rtl"}const Dn={convertOffsetParentRelativeRectToViewportRelativeRect:hn,getDocumentElement:W,getClippingRect:Tn,getOffsetParent:be,getElementRects:kn,getClientRects:wn,getDimensions:_n,getScale:Q,isElement:M,isRTL:Sn};function Ae(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ln(t,e){let n=null,o;const r=W(t);function s(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function i(a,d){a===void 0&&(a=!1),d===void 0&&(d=1),s();const c=t.getBoundingClientRect(),{left:p,top:u,width:g,height:l}=c;if(a||e(),!g||!l)return;const f=it(u),w=it(r.clientWidth-(p+g)),h=it(r.clientHeight-(u+l)),y=it(p),x={rootMargin:-f+"px "+-w+"px "+-h+"px "+-y+"px",threshold:U(0,Z(1,d))||1};let A=!0;function b(R){const T=R[0].intersectionRatio;if(T!==d){if(!A)return i();T?i(!1,T):o=setTimeout(()=>{i(!1,1e-7)},1e3)}T===1&&!Ae(c,t.getBoundingClientRect())&&i(),A=!1}try{n=new IntersectionObserver(b,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return i(!0),s}function Cn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:d=!1}=o,c=Et(t),p=r||s?[...c?nt(c):[],...nt(e)]:[];p.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),s&&y.addEventListener("resize",n)});const u=c&&a?Ln(c,n):null;let g=-1,l=null;i&&(l=new ResizeObserver(y=>{let[v]=y;v&&v.target===c&&l&&(l.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=l)==null||x.observe(e)})),n()}),c&&!d&&l.observe(c),l.observe(e));let f,w=d?J(t):null;d&&h();function h(){const y=J(t);w&&!Ae(w,y)&&n(),w=y,f=requestAnimationFrame(h)}return n(),()=>{var y;p.forEach(v=>{r&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),u==null||u(),(y=l)==null||y.disconnect(),l=null,d&&cancelAnimationFrame(f)}}const On=nn,En=on,zn=Ze,jn=Qe,Mn=(t,e,n)=>{const o=new Map,r={platform:Dn,...n},s={...r.platform,_c:o};return Je(t,e,{...r,platform:s})};function Pn({openDelay:t,closeDelay:e,placement:n,isOpenProp:o,defaultOpen:r,onOpenChange:s,triggerMode:i,arrowSize:a}){const[d,c]=E.useState(r),p=E.useRef(null),u=E.useRef(null),g=E.useRef(null),l=E.useRef(null),f=E.useRef(null),w=o!==void 0?o:d,h=E.useCallback(x=>{o===void 0&&c(x),s==null||s(x)},[o,s]),y=()=>{l.current&&clearTimeout(l.current),f.current&&clearTimeout(f.current),l.current=window.setTimeout(()=>h(!0),t)},v=()=>{l.current&&clearTimeout(l.current),f.current&&clearTimeout(f.current),f.current=window.setTimeout(()=>h(!1),e)};return E.useEffect(()=>{const x=p.current,A=u.current;if(!(!x||!A||!w))return Cn(x,A,()=>{Mn(x,A,{placement:n,middleware:[On(12),zn(),En({padding:8}),jn({element:g.current,padding:2})]}).then(({x:b,y:R})=>{Object.assign(A.style,{left:`${b}px`,top:`${R}px`})})})},[w,n,a]),E.useEffect(()=>()=>{l.current&&clearTimeout(l.current),f.current&&clearTimeout(f.current)},[]),E.useEffect(()=>{if(!w)return;const x=b=>{if(i!=="click")return;const R=p.current,T=u.current;!R||!T||!R.contains(b.target)&&!T.contains(b.target)&&h(!1)},A=b=>{b.key==="Escape"&&h(!1)};return document.addEventListener("mousedown",x),document.addEventListener("keydown",A),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",A)}},[w,i,h]),{open:w,triggerRef:p,tooltipRef:u,arrowRef:g,scheduleOpen:y,scheduleClose:v,setOpenState:h}}const Vt=E.createContext(null),Fn="_analyticsTooltip_c6l0x_2",Nn="_variantLight_c6l0x_29",Bn="_variantDark_c6l0x_35",Wn="_contentWrapper_c6l0x_41",Vn="_dateLabel_c6l0x_49",$n="_metricRow_c6l0x_54",Hn="_metricDot_c6l0x_61",In="_metricLabel_c6l0x_68",qn="_trigger_c6l0x_72",I={analyticsTooltip:Fn,variantLight:Nn,variantDark:Bn,contentWrapper:Wn,dateLabel:Vn,metricRow:$n,metricDot:Hn,metricLabel:In,trigger:qn},D=t=>{const{id:e,placement:n="top",showArrow:o=!0,size:r="medium",openDelay:s=300,closeDelay:i=150,isOpen:a,defaultOpen:d=!1,onOpenChange:c,allowShadow:p=!0,triggerMode:u="hover",className:g="",children:l}=t,f=t.variant||"default",w=f==="analytics",h=f==="default"||f==="analytics"?"light":f,y=14,{open:v,triggerRef:x,tooltipRef:A,arrowRef:b,scheduleOpen:R,scheduleClose:T,setOpenState:V}=Pn({openDelay:s,closeDelay:i,placement:n,isOpenProp:a,defaultOpen:d,onOpenChange:c,triggerMode:u,arrowSize:y}),k={};if(u!=="manual"&&(u==="hover"?(k.onMouseEnter=R,k.onMouseLeave=T,k.onFocus=R,k.onBlur=T):u==="focus"?(k.onFocus=R,k.onBlur=T):u==="click"&&(k.onClick=()=>V(!v))),w&&t.variant==="analytics"){const{date:_,items:H}=t,j=h==="light"?I.variantLight:I.variantDark,C=_t(I.analyticsTooltip,j,g);return m.jsx(Vt.Provider,{value:{open:v,setOpen:V,triggerMode:u},children:m.jsxs("span",{ref:S=>x.current=S,className:I.trigger,"aria-describedby":e,...k,children:[l,zt.createPortal(m.jsxs("div",{id:e,ref:A,role:"tooltip",className:C,"data-open":v,children:[o&&m.jsx(gt,{ref:b,size:y,variant:h,placement:n}),m.jsxs("div",{className:I.contentWrapper,children:[m.jsx("div",{className:I.dateLabel,children:_}),H.map((S,F)=>m.jsxs("div",{className:I.metricRow,children:[m.jsx("span",{className:I.metricDot,style:{background:S.dotColor}}),m.jsx("span",{className:I.metricLabel,children:S.label})]},F))]})]}),document.body)]})})}const L=t.variant!=="analytics"?t.content:"",Y=h==="light"?z.variantLight:z.variantDark,$=r==="small"?z.sizeSmall:r==="large"?z.sizeLarge:z.sizeMedium,K=_t(z.tooltip,Y,$,!p&&z.noShadow,g);return m.jsx(Vt.Provider,{value:{open:v,setOpen:V,triggerMode:u},children:m.jsxs("span",{ref:_=>x.current=_,className:z.tooltipRoot,"aria-describedby":e,...k,children:[l,zt.createPortal(m.jsxs("div",{id:e,ref:A,role:"tooltip",className:K,"data-open":v,children:[o&&m.jsx(gt,{ref:b,size:y,variant:h,placement:n}),m.jsx("div",{className:z.content,children:typeof L=="string"?m.jsx("span",{children:L}):L})]}),document.body)]})})};D.displayName="Tooltip";D.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const Jn={title:"DataDisplay/Tooltip",component:D,tags:["autodocs"],parameters:{docs:{description:{component:"Premium pixel-precise tooltip component with default and analytics variants."}}},argTypes:{variant:{control:"select",options:["default","light","dark","analytics"]},size:{control:"select",options:["small","medium","large"]},placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"]},triggerMode:{control:"select",options:["hover","focus","click","manual"]},showArrow:{control:"boolean"},allowShadow:{control:"boolean"}}},at={args:{content:"tooltip",variant:"light",size:"medium",placement:"top",showArrow:!0,triggerMode:"hover",allowShadow:!0},render:t=>m.jsx(D,{...t,children:m.jsx("span",{style:{padding:12},children:"Trigger"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},lt={render:()=>m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"].map(t=>m.jsx(D,{content:t,placement:t,variant:"dark",showArrow:!0,allowShadow:!0,children:m.jsx("span",{style:{padding:10,background:"var(--color-neutral-200,#eee)",borderRadius:6},children:t})},t))}),parameters:{docs:{source:{type:"code",state:"open"}}}},ct={render:()=>m.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap"},children:[m.jsx(D,{content:"tooltip",variant:"default",size:"medium",placement:"top",showArrow:!0,children:m.jsx("span",{style:{padding:12},children:"default"})}),m.jsx(D,{content:"tooltip",variant:"light",size:"medium",placement:"top",showArrow:!0,children:m.jsx("span",{style:{padding:12},children:"light"})}),m.jsx(D,{content:"tooltip",variant:"dark",size:"medium",placement:"top",showArrow:!0,children:m.jsx("span",{style:{padding:12},children:"dark"})}),m.jsx(D,{variant:"analytics",date:"22 May, 2021",items:[{dotColor:"#26D7E0",label:"90k"}],placement:"top",showArrow:!0,children:m.jsx("span",{style:{padding:12},children:"analytics"})})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},dt={render:()=>m.jsx("div",{style:{display:"flex",gap:28},children:["small","medium","large"].map(t=>m.jsx(D,{content:"tooltip",size:t,variant:"light",showArrow:!0,children:m.jsx("span",{style:{padding:14},children:t})},t))}),parameters:{docs:{source:{type:"code",state:"open"}}}},ut={render:()=>m.jsx("div",{style:{display:"flex",gap:20},children:["hover","focus","click"].map(t=>m.jsx(D,{content:t,triggerMode:t,variant:"dark",placement:"bottom",showArrow:!0,children:m.jsx("button",{style:{padding:"8px 12px"},children:t})},t))}),parameters:{docs:{source:{type:"code",state:"open"}}}},pt={render:()=>m.jsxs("div",{style:{display:"flex",gap:28},children:[m.jsx(D,{content:"fast",openDelay:50,closeDelay:50,variant:"light",showArrow:!0,children:m.jsx("span",{style:{padding:12},children:"Fast"})}),m.jsx(D,{content:"slow",openDelay:800,closeDelay:400,variant:"light",showArrow:!0,children:m.jsx("span",{style:{padding:12},children:"Slow"})})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},ft={render:()=>m.jsxs("div",{style:{display:"flex",gap:40},children:[m.jsx(D,{variant:"analytics",date:"22 May, 2021",items:[{dotColor:"#26D7E0",label:"90k"}],placement:"top",showArrow:!0,children:m.jsx("span",{style:{padding:12,background:"var(--color-neutral-100)",borderRadius:6},children:"Light Analytics"})}),m.jsx(D,{variant:"analytics",date:"22 May, 2021",items:[{dotColor:"#26D7E0",label:"90k"}],placement:"top",showArrow:!0,children:m.jsx("span",{style:{padding:12,background:"var(--color-neutral-800)",color:"white",borderRadius:6},children:"Dark Analytics"})})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},mt={render:()=>m.jsx(D,{variant:"analytics",date:"22 May, 2021",items:[{dotColor:"#26D7E0",label:"90k"},{dotColor:"#FFB020",label:"12k"},{dotColor:"#F05252",label:"3.2k"}],placement:"bottom",showArrow:!0,children:m.jsx("span",{style:{padding:12,background:"var(--color-primary-100)",borderRadius:6},children:"Multiple Metrics"})}),parameters:{docs:{source:{type:"code",state:"open"}}}};var $t,Ht,It;at.parameters={...at.parameters,docs:{...($t=at.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    content: 'tooltip',
    variant: 'light',
    size: 'medium',
    placement: 'top',
    showArrow: true,
    triggerMode: 'hover',
    allowShadow: true
  },
  render: args => <Tooltip {...args}><span style={{
      padding: 12
    }}>Trigger</span></Tooltip>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(It=(Ht=at.parameters)==null?void 0:Ht.docs)==null?void 0:It.source}}};var qt,Xt,Yt;lt.parameters={...lt.parameters,docs:{...(qt=lt.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>\r
      {['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'].map(p => <Tooltip key={p} content={p} placement={p as any} variant='dark' showArrow allowShadow>\r
          <span style={{
        padding: 10,
        background: 'var(--color-neutral-200,#eee)',
        borderRadius: 6
      }}>{p}</span>\r
        </Tooltip>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Yt=(Xt=lt.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};var Kt,Ut,Gt;ct.parameters={...ct.parameters,docs:{...(Kt=ct.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap'
  }}>\r
      <Tooltip content='tooltip' variant='default' size='medium' placement='top' showArrow>\r
        <span style={{
        padding: 12
      }}>default</span>\r
      </Tooltip>\r
      <Tooltip content='tooltip' variant='light' size='medium' placement='top' showArrow>\r
        <span style={{
        padding: 12
      }}>light</span>\r
      </Tooltip>\r
      <Tooltip content='tooltip' variant='dark' size='medium' placement='top' showArrow>\r
        <span style={{
        padding: 12
      }}>dark</span>\r
      </Tooltip>\r
      <Tooltip variant='analytics' date='22 May, 2021' items={[{
      dotColor: '#26D7E0',
      label: '90k'
    }]} placement='top' showArrow>\r
        <span style={{
        padding: 12
      }}>analytics</span>\r
      </Tooltip>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Gt=(Ut=ct.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};var Jt,Qt,Zt;dt.parameters={...dt.parameters,docs:{...(Jt=dt.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 28
  }}>\r
      {['small', 'medium', 'large'].map(s => <Tooltip key={s} content='tooltip' size={s as any} variant='light' showArrow>\r
          <span style={{
        padding: 14
      }}>{s}</span>\r
        </Tooltip>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Zt=(Qt=dt.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.source}}};var te,ee,ne;ut.parameters={...ut.parameters,docs:{...(te=ut.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20
  }}>\r
      {['hover', 'focus', 'click'].map(m => <Tooltip key={m} content={m} triggerMode={m as any} variant='dark' placement='bottom' showArrow>\r
          <button style={{
        padding: '8px 12px'
      }}>{m}</button>\r
        </Tooltip>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ne=(ee=ut.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,se;pt.parameters={...pt.parameters,docs:{...(oe=pt.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 28
  }}>\r
      <Tooltip content='fast' openDelay={50} closeDelay={50} variant='light' showArrow>\r
        <span style={{
        padding: 12
      }}>Fast</span>\r
      </Tooltip>\r
      <Tooltip content='slow' openDelay={800} closeDelay={400} variant='light' showArrow>\r
        <span style={{
        padding: 12
      }}>Slow</span>\r
      </Tooltip>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(se=(re=pt.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ae,le;ft.parameters={...ft.parameters,docs:{...(ie=ft.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 40
  }}>\r
      <Tooltip variant='analytics' date='22 May, 2021' items={[{
      dotColor: '#26D7E0',
      label: '90k'
    }]} placement='top' showArrow>\r
        <span style={{
        padding: 12,
        background: 'var(--color-neutral-100)',
        borderRadius: 6
      }}>Light Analytics</span>\r
      </Tooltip>\r
      <Tooltip variant='analytics' date='22 May, 2021' items={[{
      dotColor: '#26D7E0',
      label: '90k'
    }]} placement='top' showArrow>\r
        <span style={{
        padding: 12,
        background: 'var(--color-neutral-800)',
        color: 'white',
        borderRadius: 6
      }}>Dark Analytics</span>\r
      </Tooltip>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(le=(ae=ft.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ce,de,ue;mt.parameters={...mt.parameters,docs:{...(ce=mt.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Tooltip variant='analytics' date='22 May, 2021' items={[{
    dotColor: '#26D7E0',
    label: '90k'
  }, {
    dotColor: '#FFB020',
    label: '12k'
  }, {
    dotColor: '#F05252',
    label: '3.2k'
  }]} placement='bottom' showArrow>\r
      <span style={{
      padding: 12,
      background: 'var(--color-primary-100)',
      borderRadius: 6
    }}>Multiple Metrics</span>\r
    </Tooltip>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ue=(de=mt.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Qn=["Basic","AllPlacements","Variants","Sizes","TriggerModes","Delays","Analytics","MultipleMetrics"];export{lt as AllPlacements,ft as Analytics,at as Basic,pt as Delays,mt as MultipleMetrics,dt as Sizes,ut as TriggerModes,ct as Variants,Qn as __namedExportsOrder,Jn as default};
