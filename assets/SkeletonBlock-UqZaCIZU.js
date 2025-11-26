import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{r as a}from"./radius-CJc3Nkyb.js";import{m as p}from"./motion-Doj7O8T4.js";import{r as v}from"./index-B2-qRKKC.js";const c={base:"#E5E7EB",highlightRgb:"243, 244, 246"},i={sm:{width:"32px",height:"32px"},md:{width:"40px",height:"40px"},lg:{width:"48px",height:"48px"}},S={sm:"12px",md:"16px",lg:"20px"},m={wave:"1.5s",pulse:"1.5s"},u={wave:`
    @keyframes skeleton-wave {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `,pulse:`
    @keyframes skeleton-pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }
  `},w=()=>{if(typeof document>"u")return;const t="skeleton-animations";if(document.getElementById(t))return;const e=document.createElement("style");e.id=t,e.textContent=`
    ${u.wave}
    ${u.pulse}
  `,document.head.appendChild(e)},$=(t,e,o,n,l)=>{const s={display:"inline-block",backgroundColor:c.base,borderRadius:n?a[n]:a.md,position:"relative",overflow:"hidden",width:l?"100%":e?typeof e=="number"?`${e}px`:e:"auto",height:o?typeof o=="number"?`${o}px`:o:"auto"};return t==="wave"?s.isolation="isolate":t==="pulse"&&(s.animation=`skeleton-pulse ${m.pulse} ${p.easing.easeInOut} infinite`),s},B=()=>({position:"absolute",top:0,left:0,right:0,bottom:0,background:`linear-gradient(
    90deg,
    transparent 0%,
    rgba(${c.highlightRgb}, 0.8) 50%,
    transparent 100%
  )`,animation:`skeleton-wave ${m.wave} ${p.easing.linear} infinite`,transform:"translateX(-100%)"}),N=(t="md",e,o)=>({width:o?"100%":e?typeof e=="number"?`${e}px`:e:"100%",height:S[t],borderRadius:a.sm}),T=(t,e)=>{const o=e?typeof e=="number"?`${e}px`:e:t?i[t].width:i.md.width;return{width:o,height:o,borderRadius:a.full}},E=(t,e)=>{const o={width:"100%",minHeight:"100px"};return t&&(o.aspectRatio=t),e&&(o.padding=typeof e=="number"?`${e}px`:e),o},V=(t,e)=>!t||e===void 0?{}:{animationDelay:`${t*e}ms`},C=(t="wave")=>{v.useEffect(()=>{t!=="none"&&w()},[t]);const e=t==="wave"?B():{},o=t!=="none"?`skeleton-animation-${t}`:"";return{animationStyle:e,animationClassName:o}},d=({id:t,animation:e="wave",width:o="100%",height:n,radius:l="lg",aspectRatio:s,padding:f,className:y,style:k,children:h})=>{const{animationStyle:x}=C(e),g=$(e,o,n,l,!1),b=E(s,f);return r.jsxs("div",{id:t,className:y,style:{...g,...b,...k},"aria-hidden":"true",children:[e==="wave"&&r.jsx("span",{style:x}),h]})};d.displayName="SkeletonBlock";d.__docgenInfo={description:`SkeletonBlock - Block skeleton component (for cards, sections)
Supports aspect ratios and padding`,methods:[],displayName:"SkeletonBlock",props:{animation:{defaultValue:{value:"'wave'",computed:!1},required:!1},width:{defaultValue:{value:"'100%'",computed:!1},required:!1},radius:{defaultValue:{value:"'lg'",computed:!1},required:!1}}};export{d as S,N as a,T as b,$ as c,V as d,C as u};
