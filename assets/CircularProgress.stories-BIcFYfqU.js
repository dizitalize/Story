import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as l}from"./index-B2-qRKKC.js";import{d,t as B}from"./typography-Brmv3wtg.js";import{s as Q}from"./spacing-QHzs6Ru8.js";import{m as F}from"./motion-Cg9jJe8C.js";import{T as o}from"./Typography-BdmfNA7_.js";import{B as ys}from"./Box-Br7V4Iia.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";const p={primary:d.primary[500],success:d.success[600],warning:d.warning[900],error:d.danger[600],track:d.gray[300]},X=r=>{if(!r)return;if(/^(#|rgb|hsl)/.test(r))return r;const s=r.split(".");if(s.length===2){const[t,a]=s;if(t==="neutral"&&(a==="white"||a==="black"))return d.neutral[a];const n=d[t];if(n&&a in n)return n[a]}return r},hs={sm:40,md:80,lg:120},H={sm:3,md:4,lg:6},Y={rotate:`
    @keyframes circular-progress-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,dash:`
    @keyframes circular-progress-dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 100, 200;
        stroke-dashoffset: -15;
      }
      100% {
        stroke-dasharray: 100, 200;
        stroke-dashoffset: -125;
      }
    }
  `},ns=()=>{const r="circular-progress-animations";if(document.getElementById(r))return;const s=document.createElement("style");s.id=r,s.textContent=`
    ${Y.rotate}
    ${Y.dash}
  `,document.head.appendChild(s)},vs=(r,s)=>({position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",width:r,height:r,...s}),fs=r=>({display:"block",width:"100%",height:"100%",transform:"rotate(-90deg)",...r&&{animation:`circular-progress-rotate ${F.duration.slower} linear infinite`}}),xs=r=>({transition:r?"none":`stroke-dashoffset ${F.duration.normal} ${F.easing.easeInOut}`,...r&&{animation:`circular-progress-dash ${F.duration.slower} ${F.easing.easeInOut} infinite`}}),bs=r=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",justifyContent:"center",width:r*.7,height:r*.7,textAlign:"center"}),Cs=r=>typeof r=="number"?r:hs[r||"md"],ws=(r,s)=>typeof r=="number"?r:typeof r=="string"&&r in Q?parseInt(Q[r],10):typeof s=="string"&&s in H?H[s]:H.md,Ts=(r,s)=>{const t=(r-s)/2,a=2*Math.PI*t,n=r/2;return{radius:t,circumference:a,center:n}},Ss=(r,s)=>{const t=Math.max(0,Math.min(100,r));return s-t/100*s},is=({radius:r,thickness:s,color:t})=>{const a=2*Math.PI*r;return e.jsx("circle",{cx:"50%",cy:"50%",r,fill:"none",stroke:t,strokeWidth:s,strokeDasharray:a,strokeDashoffset:0,strokeLinecap:"round",style:{transition:"none"}})};is.__docgenInfo={description:"CircularTrack component renders the background track circle",methods:[],displayName:"CircularTrack"};const cs=({value:r,formatter:s,size:t})=>{const n=(s||(u=>`${Math.round(u)}`))(r);return e.jsx("div",{style:bs(t),children:e.jsx(o,{variant:"headlineSmall",style:{fontSize:t>100?B.headlineLarge.fontSize:t>60?B.headlineSmall.fontSize:B.bodyLarge.fontSize,fontWeight:B.headlineSmall.fontWeight,color:d.gray[800],lineHeight:1},children:n})})};cs.__docgenInfo={description:"CircularValueLabel component displays the progress value in the center",methods:[],displayName:"CircularValueLabel"};const ks=r=>{const{indeterminate:s,value:t=0,duration:a=300}=r,[n,u]=l.useState(0),[_,m]=l.useState(!1);return l.useEffect(()=>{s&&ns()},[s]),l.useEffect(()=>{if(!s&&t!==void 0){m(!0);const R=setTimeout(()=>{m(!1)},a);return()=>clearTimeout(R)}},[t,s,a]),{rotationStyle:s?{animation:"circular-progress-rotate 1.4s linear infinite"}:{},strokeDashoffset:n,isAnimating:_}},i=({id:r,value:s,size:t="md",thickness:a,color:n="primary.500",trackColor:u="gray.300",roundedCaps:_=!0,showLabel:m=!0,labelFormatter:K,className:R,style:ls,children:O})=>{const g=Cs(t),N=ws(a,t),{radius:U,circumference:G,center:J}=Ts(g,N),c=s===void 0,$=c?0:Math.max(0,Math.min(100,s)),ds=Ss($,G);ks({indeterminate:c,value:$}),l.useEffect(()=>{c&&ns()},[c]);const ps=vs(g,ls),us=fs(c),ms=xs(c),gs=c?{role:"progressbar","aria-busy":!0,"aria-valuemin":void 0,"aria-valuemax":void 0,"aria-valuenow":void 0}:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":$,"aria-busy":void 0};return e.jsxs("div",{id:r,style:ps,className:R,...gs,children:[e.jsxs("svg",{style:us,viewBox:`0 0 ${g} ${g}`,xmlns:"http://www.w3.org/2000/svg",children:[e.jsx(is,{radius:U,thickness:N,color:X(u)||p.track}),e.jsx("circle",{cx:J,cy:J,r:U,fill:"none",stroke:X(n)||p.primary,strokeWidth:N,strokeDasharray:G,strokeDashoffset:c?G*.75:ds,strokeLinecap:_?"round":"butt",style:{...ms,...c&&{animation:"circular-progress-dash 1.4s ease-in-out infinite"}}})]}),!c&&(m||O)&&e.jsx(e.Fragment,{children:O?e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",justifyContent:"center"},children:O}):m?e.jsx(cs,{value:$,formatter:K,size:g}):null})]})};i.__docgenInfo={description:`CircularProgress component displays progress in a circular format
Supports both determinate (0-100 value) and indeterminate (continuous rotation) modes`,methods:[],displayName:"CircularProgress",props:{id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},value:{required:!1,tsType:{name:"number"},description:`Progress value (0-100)
If undefined, component renders in indeterminate mode`},size:{required:!1,tsType:{name:"union",raw:"CircularProgressSize | number",elements:[{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},{name:"number"}]},description:`Size of the circular progress
Can be a preset size or custom pixel value
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"number | keyof SpacingTokens",elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}`,signature:{properties:[{key:"xs",value:{name:"string",required:!0}},{key:"sm",value:{name:"string",required:!0}},{key:"md",value:{name:"string",required:!0}},{key:"lg",value:{name:"string",required:!0}},{key:"xl",value:{name:"string",required:!0}},{key:"xxl",value:{name:"string",required:!0}},{key:"xxxl",value:{name:"string",required:!0}}]}}]},description:`Thickness of the progress arc.
Can be a raw pixel number or a spacing token key (e.g. 'xs','sm','md').
@default spacingTokens.sm (8px) for md size, scaled for other presets`},color:{required:!1,tsType:{name:"string"},description:`Color of the progress arc. Accepts a direct color string OR a token spec
like 'primary.500', 'success.600', 'gray.300', or 'neutral.white'.
@default 'primary.500'`,defaultValue:{value:"'primary.500'",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:`Color of the background track (token or raw color)
@default 'gray.300'`,defaultValue:{value:"'gray.300'",computed:!1}},roundedCaps:{required:!1,tsType:{name:"boolean"},description:`Whether to render rounded caps on the arc
@default true`,defaultValue:{value:"true",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show the value label in the center
@default true`,defaultValue:{value:"true",computed:!1}},labelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom formatter for the label value\n@default (value) => `${Math.round(value)}`"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"},children:{required:!1,tsType:{name:"ReactNode"},description:`Custom children to render inside the progress circle
Overrides the default label`}}};const Ds={title:"Feedback/CircularProgress",component:i,parameters:{layout:"centered",docs:{description:{component:"A circular progress indicator that shows progress in a ring format. Supports both determinate (with specific value) and indeterminate (loading) modes."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100). Leave undefined for indeterminate mode."},size:{control:{type:"select"},options:["sm","md","lg",80,120,160],description:"Size preset or custom pixel value"},thickness:{control:{type:"number",min:1,max:20},description:"Thickness of the progress arc"},color:{control:{type:"color"},description:"Color of the progress arc"},trackColor:{control:{type:"color"},description:"Color of the background track"},roundedCaps:{control:{type:"boolean"},description:"Whether to render rounded caps on the arc"},showLabel:{control:{type:"boolean"},description:"Whether to show the value label"}}},y={args:{value:30,size:"md",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},h={args:{value:45,size:"sm",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},v={args:{value:65,size:"md",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},f={args:{value:75,size:"lg",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},x={args:{value:80,size:160,thickness:8,showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},b={args:{value:50,size:"md",showLabel:!1},parameters:{docs:{source:{type:"code",state:"open"}}}},C={args:{value:67,size:"md",showLabel:!0,labelFormatter:r=>`${Math.round(r)}%`},parameters:{docs:{source:{type:"code",state:"open"}}}},w={args:{value:55,size:"md",thickness:8,showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},T={args:{value:40,size:"md",thickness:2,showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},S={args:{value:85,size:"md",color:"success.600",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},k={args:{value:60,size:"md",color:"warning.900",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},z={args:{value:25,size:"md",color:"danger.600",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},L={args:{value:70,size:"md",color:"accent.500",trackColor:"accent.200",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},j={args:{value:50,size:"md",roundedCaps:!1,showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},P={args:{value:void 0,size:"md"},parameters:{docs:{source:{type:"code",state:"open"}}}},I={args:{value:void 0,size:"md",color:"success.600"},parameters:{docs:{source:{type:"code",state:"open"}}}},A={render:r=>{const[s,t]=l.useState(30);return l.useEffect(()=>{const a=setInterval(()=>{t(n=>{const u=n+10;return u>100?0:u})},1e3);return()=>clearInterval(a)},[]),e.jsx(i,{...r,value:s})},args:{size:"md",showLabel:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},W={args:{value:75,size:"lg",showLabel:!1,children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{variant:"h4",style:{fontWeight:600,color:"#1f2937"},children:"75%"}),e.jsx(o,{variant:"body2",style:{color:"#6b7280",marginTop:"4px"},children:"Complete"})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},q={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:25,size:"md",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"Starting"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:50,size:"md",color:"warning.900",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"In Progress"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:100,size:"md",color:"success.600",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"Complete"})]})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},M={render:()=>e.jsxs(ys,{style:{width:"300px",padding:"24px",backgroundColor:"#ffffff",borderRadius:"12px",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(i,{value:68,size:60,thickness:"sm",showLabel:!0}),e.jsxs("div",{children:[e.jsx(o,{variant:"h4",style:{fontWeight:600,color:"#1f2937",marginBottom:"4px"},children:"Project Progress"}),e.jsx(o,{variant:"body2",style:{color:"#6b7280"},children:"68% of tasks completed"})]})]}),e.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid #e5e7eb"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx(o,{variant:"body2",style:{color:"#6b7280"},children:"Completed"}),e.jsx(o,{variant:"body2",style:{fontWeight:600,color:"#1f2937"},children:"34 / 50"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(o,{variant:"body2",style:{color:"#6b7280"},children:"Remaining"}),e.jsx(o,{variant:"body2",style:{fontWeight:600,color:"#1f2937"},children:"16 tasks"})]})]})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},D={render:()=>e.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f9fafb",gap:"24px"},children:[e.jsx(i,{value:void 0,size:"lg",color:p.primary}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{variant:"h3",style:{fontWeight:600,color:"#1f2937",marginBottom:"8px"},children:"Loading..."}),e.jsx(o,{variant:"body1",style:{color:"#6b7280"},children:"Please wait while we prepare your content"})]})]}),parameters:{docs:{source:{type:"code",state:"open"}},layout:"fullscreen"}},E={render:()=>{const[r,s]=l.useState(0),t=[{value:0,label:"Initializing...",color:p.primary},{value:25,label:"Loading assets...",color:p.primary},{value:50,label:"Processing data...",color:p.warning},{value:75,label:"Finalizing...",color:p.warning},{value:100,label:"Complete!",color:p.success}];return l.useEffect(()=>{const a=setInterval(()=>{s(n=>n<t.length-1?n+1:0)},1500);return()=>clearInterval(a)},[]),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:t[r].value,size:"lg",color:t[r].color,showLabel:!0}),e.jsx(o,{variant:"h4",style:{marginTop:"16px",fontWeight:600,color:"#1f2937"},children:t[r].label})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},V={render:()=>e.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:60,size:"sm",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:60,size:"md",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"Medium"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:60,size:"lg",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"Large"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{value:60,size:160,thickness:"md",showLabel:!0}),e.jsx(o,{variant:"body2",style:{marginTop:"8px",color:"#6b7280"},children:"Custom (160px)"})]})]}),parameters:{docs:{source:{type:"code",state:"open"}}}};var Z,ee,re,se,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    value: 30,
    size: 'md',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Default circular progress with 30% completion",...(te=(se=y.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var ae,oe,ne,ie,ce;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'sm',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"Small size circular progress",...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var le,de,pe,ue,me;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    value: 65,
    size: 'md',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"Medium size circular progress (default)",...(me=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var ge,ye,he,ve,fe;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 'lg',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(he=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:he.source},description:{story:"Large size circular progress",...(fe=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var xe,be,Ce,we,Te;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: 160,
    thickness: 8,
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ce=(be=x.parameters)==null?void 0:be.docs)==null?void 0:Ce.source},description:{story:"Custom size circular progress (160px)",...(Te=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Te.description}}};var Se,ke,ze,Le,je;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'md',
    showLabel: false
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ze=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:ze.source},description:{story:"Circular progress without label",...(je=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:je.description}}};var Pe,Ie,Ae,We,qe;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    value: 67,
    size: 'md',
    showLabel: true,
    labelFormatter: value => \`\${Math.round(value)}%\`
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ae=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source},description:{story:"Circular progress with custom label formatter",...(qe=(We=C.parameters)==null?void 0:We.docs)==null?void 0:qe.description}}};var Me,De,Ee,Ve,Fe;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    value: 55,
    size: 'md',
    thickness: 8,
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ee=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Ee.source},description:{story:"Circular progress with custom thickness",...(Fe=(Ve=w.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.description}}};var $e,Be,_e,Re,Oe;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'md',
    thickness: 2,
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(_e=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:_e.source},description:{story:"Circular progress with thin stroke",...(Oe=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Oe.description}}};var Ne,Ge,He,Ke,Ue;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    value: 85,
    size: 'md',
    color: 'success.600',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(He=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:He.source},description:{story:"Success-colored circular progress",...(Ue=(Ke=S.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.description}}};var Je,Qe,Xe,Ye,Ze;k.parameters={...k.parameters,docs:{...(Je=k.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'md',
    color: 'warning.900',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Xe=(Qe=k.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source},description:{story:"Warning-colored circular progress",...(Ze=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.description}}};var er,rr,sr,tr,ar;z.parameters={...z.parameters,docs:{...(er=z.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    value: 25,
    size: 'md',
    color: 'danger.600',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(sr=(rr=z.parameters)==null?void 0:rr.docs)==null?void 0:sr.source},description:{story:"Error-colored circular progress",...(ar=(tr=z.parameters)==null?void 0:tr.docs)==null?void 0:ar.description}}};var or,nr,ir,cr,lr;L.parameters={...L.parameters,docs:{...(or=L.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    value: 70,
    size: 'md',
    color: 'accent.500',
    trackColor: 'accent.200',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ir=(nr=L.parameters)==null?void 0:nr.docs)==null?void 0:ir.source},description:{story:"Custom color circular progress",...(lr=(cr=L.parameters)==null?void 0:cr.docs)==null?void 0:lr.description}}};var dr,pr,ur,mr,gr;j.parameters={...j.parameters,docs:{...(dr=j.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'md',
    roundedCaps: false,
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ur=(pr=j.parameters)==null?void 0:pr.docs)==null?void 0:ur.source},description:{story:"Circular progress without rounded caps",...(gr=(mr=j.parameters)==null?void 0:mr.docs)==null?void 0:gr.description}}};var yr,hr,vr,fr,xr;P.parameters={...P.parameters,docs:{...(yr=P.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    value: undefined,
    // Indeterminate mode
    size: 'md'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(vr=(hr=P.parameters)==null?void 0:hr.docs)==null?void 0:vr.source},description:{story:"Indeterminate mode - continuous loading animation",...(xr=(fr=P.parameters)==null?void 0:fr.docs)==null?void 0:xr.description}}};var br,Cr,wr,Tr,Sr;I.parameters={...I.parameters,docs:{...(br=I.parameters)==null?void 0:br.docs,source:{originalSource:`{
  args: {
    value: undefined,
    size: 'md',
    color: 'success.600'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(wr=(Cr=I.parameters)==null?void 0:Cr.docs)==null?void 0:wr.source},description:{story:"Indeterminate mode with custom color",...(Sr=(Tr=I.parameters)==null?void 0:Tr.docs)==null?void 0:Sr.description}}};var kr,zr,Lr,jr,Pr;A.parameters={...A.parameters,docs:{...(kr=A.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(30);
    useEffect(() => {
      const interval = setInterval(() => {
        setValue(prev => {
          const next = prev + 10;
          return next > 100 ? 0 : next;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return <CircularProgress {...args} value={value} />;
  },
  args: {
    size: 'md',
    showLabel: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Lr=(zr=A.parameters)==null?void 0:zr.docs)==null?void 0:Lr.source},description:{story:"Animated transition demo - value changes smoothly",...(Pr=(jr=A.parameters)==null?void 0:jr.docs)==null?void 0:Pr.description}}};var Ir,Ar,Wr,qr,Mr;W.parameters={...W.parameters,docs:{...(Ir=W.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 'lg',
    showLabel: false,
    children: <div style={{
      textAlign: 'center'
    }}>\r
        <Typography variant="h4" style={{
        fontWeight: 600,
        color: '#1f2937'
      }}>\r
          75%\r
        </Typography>\r
        <Typography variant="body2" style={{
        color: '#6b7280',
        marginTop: '4px'
      }}>\r
          Complete\r
        </Typography>\r
      </div>
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Wr=(Ar=W.parameters)==null?void 0:Ar.docs)==null?void 0:Wr.source},description:{story:"Custom children content instead of default label",...(Mr=(qr=W.parameters)==null?void 0:qr.docs)==null?void 0:Mr.description}}};var Dr,Er,Vr,Fr,$r;q.parameters={...q.parameters,docs:{...(Dr=q.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={25} size="md" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          Starting\r
        </Typography>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={50} size="md" color="warning.900" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          In Progress\r
        </Typography>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={100} size="md" color="success.600" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          Complete\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Vr=(Er=q.parameters)==null?void 0:Er.docs)==null?void 0:Vr.source},description:{story:"Multiple progress indicators with different values",...($r=(Fr=q.parameters)==null?void 0:Fr.docs)==null?void 0:$r.description}}};var Br,_r,Rr,Or,Nr;M.parameters={...M.parameters,docs:{...(Br=M.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: '300px',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  }}>\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>\r
        <CircularProgress value={68} size={60} thickness="sm" showLabel />\r
        <div>\r
          <Typography variant="h4" style={{
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '4px'
        }}>\r
            Project Progress\r
          </Typography>\r
          <Typography variant="body2" style={{
          color: '#6b7280'
        }}>\r
            68% of tasks completed\r
          </Typography>\r
        </div>\r
      </div>\r
      <div style={{
      marginTop: '16px',
      paddingTop: '16px',
      borderTop: '1px solid #e5e7eb'
    }}>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px'
      }}>\r
          <Typography variant="body2" style={{
          color: '#6b7280'
        }}>\r
            Completed\r
          </Typography>\r
          <Typography variant="body2" style={{
          fontWeight: 600,
          color: '#1f2937'
        }}>\r
            34 / 50\r
          </Typography>\r
        </div>\r
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>\r
          <Typography variant="body2" style={{
          color: '#6b7280'
        }}>\r
            Remaining\r
          </Typography>\r
          <Typography variant="body2" style={{
          fontWeight: 600,
          color: '#1f2937'
        }}>\r
            16 tasks\r
          </Typography>\r
        </div>\r
      </div>\r
    </Box>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Rr=(_r=M.parameters)==null?void 0:_r.docs)==null?void 0:Rr.source},description:{story:"Inside a card component",...(Nr=(Or=M.parameters)==null?void 0:Or.docs)==null?void 0:Nr.description}}};var Gr,Hr,Kr,Ur,Jr;D.parameters={...D.parameters,docs:{...(Gr=D.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    gap: '24px'
  }}>\r
      <CircularProgress value={undefined} size="lg" color={circularProgressColors.primary} />\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <Typography variant="h3" style={{
        fontWeight: 600,
        color: '#1f2937',
        marginBottom: '8px'
      }}>\r
          Loading...\r
        </Typography>\r
        <Typography variant="body1" style={{
        color: '#6b7280'
      }}>\r
          Please wait while we prepare your content\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    },
    layout: 'fullscreen'
  }
}`,...(Kr=(Hr=D.parameters)==null?void 0:Hr.docs)==null?void 0:Kr.source},description:{story:"Fullscreen loading example",...(Jr=(Ur=D.parameters)==null?void 0:Ur.docs)==null?void 0:Jr.description}}};var Qr,Xr,Yr,Zr,es;E.parameters={...E.parameters,docs:{...(Qr=E.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
  render: () => {
    const [stage, setStage] = useState(0);
    const stages = [{
      value: 0,
      label: 'Initializing...',
      color: circularProgressColors.primary
    }, {
      value: 25,
      label: 'Loading assets...',
      color: circularProgressColors.primary
    }, {
      value: 50,
      label: 'Processing data...',
      color: circularProgressColors.warning
    }, {
      value: 75,
      label: 'Finalizing...',
      color: circularProgressColors.warning
    }, {
      value: 100,
      label: 'Complete!',
      color: circularProgressColors.success
    }];
    useEffect(() => {
      const interval = setInterval(() => {
        setStage(prev => prev < stages.length - 1 ? prev + 1 : 0);
      }, 1500);
      return () => clearInterval(interval);
    }, []);
    return <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={stages[stage].value} size="lg" color={stages[stage].color} showLabel />\r
        <Typography variant="h4" style={{
        marginTop: '16px',
        fontWeight: 600,
        color: '#1f2937'
      }}>\r
          {stages[stage].label}\r
        </Typography>\r
      </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Yr=(Xr=E.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.source},description:{story:"Progress with dynamic stages",...(es=(Zr=E.parameters)==null?void 0:Zr.docs)==null?void 0:es.description}}};var rs,ss,ts,as,os;V.parameters={...V.parameters,docs:{...(rs=V.parameters)==null?void 0:rs.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '48px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={60} size="sm" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          Small\r
        </Typography>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={60} size="md" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          Medium\r
        </Typography>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={60} size="lg" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          Large\r
        </Typography>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <CircularProgress value={60} size={160} thickness="md" showLabel />\r
        <Typography variant="body2" style={{
        marginTop: '8px',
        color: '#6b7280'
      }}>\r
          Custom (160px)\r
        </Typography>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ts=(ss=V.parameters)==null?void 0:ss.docs)==null?void 0:ts.source},description:{story:"All sizes comparison",...(os=(as=V.parameters)==null?void 0:as.docs)==null?void 0:os.description}}};const Es=["Determinate","SizeSmall","SizeMedium","SizeLarge","CustomSize","WithoutLabel","CustomLabelFormatter","CustomThickness","ThinStroke","SuccessColor","WarningColor","ErrorColor","CustomColor","SquareCaps","Indeterminate","IndeterminateCustomColor","AnimatedTransition","CustomChildren","MultipleProgress","InsideCard","FullscreenLoading","DynamicStages","AllSizes"];export{V as AllSizes,A as AnimatedTransition,W as CustomChildren,L as CustomColor,C as CustomLabelFormatter,x as CustomSize,w as CustomThickness,y as Determinate,E as DynamicStages,z as ErrorColor,D as FullscreenLoading,P as Indeterminate,I as IndeterminateCustomColor,M as InsideCard,q as MultipleProgress,f as SizeLarge,v as SizeMedium,h as SizeSmall,j as SquareCaps,S as SuccessColor,T as ThinStroke,k as WarningColor,b as WithoutLabel,Es as __namedExportsOrder,Ds as default};
