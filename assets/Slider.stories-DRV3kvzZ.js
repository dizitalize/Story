import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{r as c,R as Fe}from"./index-B2-qRKKC.js";import{c as T}from"./classNames-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ue="_sliderRoot_uj6xr_1",Xe="_sliderTrackWrapper_uj6xr_10",Be="_track_uj6xr_18",Ke="_disabled_uj6xr_41",He="_focused_uj6xr_46",Ge="_filledRange_uj6xr_51",Je="_thumb_uj6xr_78",Qe="_valueLabel_uj6xr_143",Ye="_visible_uj6xr_160",Ze="_rangeOverlapLeft_uj6xr_164",ea="_rangeOverlapRight_uj6xr_168",aa="_minMaxLabels_uj6xr_210",ra="_marks_uj6xr_218",sa="_markItem_uj6xr_229",na="_markTick_uj6xr_236",o={sliderRoot:Ue,sliderTrackWrapper:Xe,track:Be,"size-sm":"_size-sm_uj6xr_29","size-md":"_size-md_uj6xr_33","size-lg":"_size-lg_uj6xr_37",disabled:Ke,focused:He,filledRange:Ge,"color-success":"_color-success_uj6xr_62","color-warning":"_color-warning_uj6xr_66","color-error":"_color-error_uj6xr_70","color-neutral":"_color-neutral_uj6xr_74",thumb:Je,valueLabel:Qe,visible:Ye,rangeOverlapLeft:Ze,rangeOverlapRight:ea,"variant-solid":"_variant-solid_uj6xr_192","variant-outlined":"_variant-outlined_uj6xr_196","variant-soft":"_variant-soft_uj6xr_201","variant-tertiary":"_variant-tertiary_uj6xr_205",minMaxLabels:aa,marks:ra,markItem:sa,markTick:na};function ta(n,s,{min:e,max:a,step:t}){switch(n.key){case"ArrowLeft":case"ArrowDown":return Math.max(e,s-t);case"ArrowRight":case"ArrowUp":return Math.min(a,s+t);case"Home":return e;case"End":return a;case"PageUp":return Math.min(a,s+t*10);case"PageDown":return Math.max(e,s-t*10);default:return s}}const z=(n,s,e)=>Math.min(Math.max(n,s),e);function Y(n,s,e){return Math.round((n-s)/e)*e+s}function la(n){const{range:s,min:e,max:a,step:t,disabled:u,value:m,defaultValue:x,onChange:h,marks:y=[]}=n,g=!!s,[I,N]=c.useState(()=>m!==void 0?m:x!==void 0?x:g?[e,a]:e),C=m!==void 0?m:I,S=c.useRef(null),[j,L]=c.useState(null),[P,D]=c.useState(null),[i,w]=c.useState(null),f=g?C:[C,C],R=c.useCallback(l=>{m===void 0&&N(l),h&&h(l)},[m,h]),_=c.useCallback((l,d)=>{if(!g){R(z(d,e,a));return}const[k,p]=f;if(l===0){const V=z(Math.min(d,p),e,a);R([V,p])}else{const V=z(Math.max(d,k),e,a);R([k,V])}},[g,R,f,e,a]),v=c.useCallback(l=>{if(S.current==null||j==null)return;const d=S.current.getBoundingClientRect();let p=z((l-d.left)/d.width,0,1)*(a-e)+e;p=Y(p,e,t),_(j,p)},[j,a,e,t,_]),b=c.useCallback(l=>{var V;if(u)return;l.preventDefault();const d=(V=S.current)==null?void 0:V.getBoundingClientRect();if(!d)return;const k=z((l.clientX-d.left)/d.width,0,1),p=Y(k*(a-e)+e,e,t);if(g){const[We,Oe]=f,Ae=Math.abs(p-We),qe=Math.abs(p-Oe),E=Ae<=qe?0:1;L(E),D(E),w(E),_(E,p)}else L(0),D(0),w(0),_(0,p)},[u,g,f,a,e,t,_]),G=c.useCallback(l=>{i!=null&&v(l.clientX)},[i,v]),J=c.useCallback(()=>{w(null),L(null)},[]);c.useEffect(()=>{if(i!=null)return window.addEventListener("pointermove",G),window.addEventListener("pointerup",J),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",J)}},[i,G,J]);const Pe=c.useCallback(l=>({onPointerDown:d=>{u||(d.preventDefault(),L(l),D(l),w(l))},onKeyDown:d=>{if(u)return;const k=f[l],p=ta(d,k,{min:e,max:a,step:t});p!==k&&(d.preventDefault(),_(l,p))},tabIndex:u?-1:0,role:"slider","aria-valuemin":e,"aria-valuemax":a,"aria-valuenow":Math.round(f[l]),"aria-disabled":u||void 0}),[u,f,e,a,t,_]),Ee=c.useCallback(()=>({onPointerDown:b}),[b]),$e=c.useMemo(()=>y.length?y.filter(l=>l.value>=e&&l.value<=a):[{value:e,label:e},{value:a,label:a}],[y,e,a]);return{thumbs:c.useMemo(()=>f.map((l,d)=>({index:d,value:l,percent:(l-e)/(a-e)*100,focused:P===d,dragging:i===d})),[f,e,a,P,i]),isRange:g,activeIndex:j,trackRef:S,getThumbProps:Pe,getTrackProps:Ee,marksToRender:$e}}const De=({size:n,disabled:s,focused:e,variant:a,children:t,trackRef:u,trackProps:m,className:x})=>{const h=T(o.track,o[`size-${n}`]||"",s&&o.disabled,e&&o.focused,x),y=a?o[`variant-${a}`]:"";return r.jsx("div",{className:T(o.sliderTrackWrapper,y),children:r.jsx("div",{ref:u,className:h,...m,children:t})})};De.__docgenInfo={description:"",methods:[],displayName:"SliderTrack"};const Q=({fromPercent:n,toPercent:s,color:e})=>{const a=Math.max(s-n,0),t=n,u=e?o[`color-${e}`]:"";return r.jsx("div",{className:T(o.filledRange,u),style:{left:`${t}%`,width:`${a}%`}})};Q.__docgenInfo={description:"",methods:[],displayName:"SliderRange"};const ze=({percent:n,size:s,color:e,disabled:a,focused:t,thumbProps:u,children:m})=>{const x=e?o[`color-${e}`]:"",h=T(o.thumb,o[`size-${s}`]||"",x,a&&o.disabled,t&&o.focused);return r.jsx("div",{className:h,style:{left:`${n}%`},...u,children:m})};ze.__docgenInfo={description:"",methods:[],displayName:"SliderThumb"};const Ie=({percent:n,value:s,visible:e,color:a,overlapSide:t})=>{const u=a?o[`color-${a}`]:"",m=t==="left"?o.rangeOverlapLeft:t==="right"?o.rangeOverlapRight:"",x=T(o.valueLabel,e&&o.visible,u,m);return r.jsxs("div",{className:x,style:{left:`${n}%`},children:["$",s.toLocaleString()]})};Ie.__docgenInfo={description:"",methods:[],displayName:"SliderValueLabel",props:{percent:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"number"},description:""},visible:{required:!0,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""},overlapSide:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | undefined",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"undefined"}]},description:""}}};const Ne=({marks:n,min:s,max:e})=>n.length?r.jsx("div",{className:o.marks,children:n.map(a=>{const t=(a.value-s)/(e-s)*100;return r.jsxs("div",{className:o.markItem,style:{left:`${t}%`,position:"absolute",transform:"translateX(-50%)"},children:[r.jsx("div",{className:o.markTick}),r.jsx("div",{children:a.label??a.value})]},a.value)})}):null;Ne.__docgenInfo={description:"",methods:[],displayName:"SliderMarks"};const M=n=>{const{id:s,min:e=0,max:a=100,step:t=1,disabled:u=!1,marks:m,showMinMaxLabel:x=!0,variant:h="solid",size:y="md",color:g="primary",trackColor:I=g,valueLabelDisplay:N="auto",className:C,style:S,range:j=!1,value:L,defaultValue:P,onChange:D}=n,i=la({range:!!j,min:e,max:a,step:t,disabled:u,value:L,defaultValue:P,onChange:D,marks:m}),w=T(o.sliderRoot,o[`variant-${h}`],C),f=c.useMemo(()=>{if(!i.isRange)return[void 0,void 0];const[v,b]=i.thumbs;return Math.abs(v.percent-b.percent)<6?["left","right"]:[void 0,void 0]},[i.isRange,i.thumbs]),R=v=>{if(N==="off")return!1;if(N==="on")return!0;const b=i.thumbs[v];return b.focused||b.dragging},_=i.isRange?r.jsx(Q,{fromPercent:i.thumbs[0].percent,toPercent:i.thumbs[1].percent,color:I}):r.jsx(Q,{fromPercent:0,toPercent:i.thumbs[0].percent,color:I});return r.jsxs("div",{id:s,className:w,style:S,"aria-disabled":u||void 0,children:[r.jsxs(De,{size:y,disabled:u,focused:i.activeIndex!=null,variant:h,trackRef:i.trackRef,trackProps:i.getTrackProps(),children:[_,i.thumbs.map((v,b)=>r.jsxs(Fe.Fragment,{children:[r.jsx(ze,{percent:v.percent,size:y,color:g,disabled:u,focused:v.focused,thumbProps:i.getThumbProps(b)}),r.jsx(Ie,{percent:v.percent,value:v.value,color:g,visible:R(b),overlapSide:f[b]})]},v.index))]}),x&&r.jsxs("div",{className:o.minMaxLabels,children:[r.jsx("span",{children:e}),r.jsx("span",{children:a})]}),r.jsx(Ne,{marks:i.marksToRender,min:e,max:a})]})};M.displayName="Slider";M.__docgenInfo={description:"",methods:[],displayName:"Slider"};const ma={title:"Inputs/Slider",component:M,parameters:{docs:{source:{type:"code",state:"open"}}},argTypes:{range:{control:"boolean"},defaultValue:{control:!1},value:{control:!1}}},$={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,defaultValue:60}},W={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,defaultValue:60,valueLabelDisplay:"on"}},O={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,defaultValue:60,disabled:!0}},A={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,range:!0,defaultValue:[25,75]}},q={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,range:!0,defaultValue:[25,75],valueLabelDisplay:"on"}},F={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,defaultValue:50,marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}]}},U={args:{min:0,max:100,step:1,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,defaultValue:60}},X={render:()=>{const[n,s]=c.useState(40);return r.jsxs("div",{style:{display:"grid",gap:"16px"},children:[r.jsx(M,{value:n,onChange:e=>s(e)}),r.jsxs("div",{children:["Value: ",n]})]})}},B={args:{min:0,max:100,step:10,size:"md",color:"primary",variant:"solid",showMinMaxLabel:!0,defaultValue:50,marks:[{value:0},{value:50},{value:100}]}},K={render:()=>r.jsxs("div",{style:{padding:"2rem",background:"var(--color-gray-50, #f9fafb)",borderRadius:"var(--radius-md, 8px)"},children:[r.jsx(M,{defaultValue:70,variant:"soft",valueLabelDisplay:"on",color:"primary"}),r.jsx(M,{defaultValue:30,variant:"outlined",color:"success",style:{marginTop:"var(--spacing-lg, 24px)"}})]})},H={parameters:{backgrounds:{default:"dark"}},render:()=>r.jsxs("div",{style:{background:"#111",padding:"2rem",borderRadius:"var(--radius-md, 8px)",color:"white"},children:[r.jsx(M,{defaultValue:55,color:"neutral",valueLabelDisplay:"on"}),r.jsx(M,{range:!0,defaultValue:[20,80],variant:"tertiary",color:"warning",valueLabelDisplay:"on",style:{marginTop:"var(--spacing-lg, 24px)"}})]})};var Z,ee,ae;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    defaultValue: 60
  }
}`,...(ae=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,ne;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    defaultValue: 60,
    valueLabelDisplay: 'on'
  }
}`,...(ne=(se=W.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,le,oe;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    defaultValue: 60,
    disabled: true
  }
}`,...(oe=(le=O.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,ue,de;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    range: true,
    defaultValue: [25, 75]
  } as any
}`,...(de=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,me,pe;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    range: true,
    defaultValue: [25, 75],
    valueLabelDisplay: 'on'
  } as any
}`,...(pe=(me=q.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ve,ge,fe;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    defaultValue: 50,
    marks: [{
      value: 0,
      label: '0'
    }, {
      value: 25,
      label: '25'
    }, {
      value: 50,
      label: '50'
    }, {
      value: 75,
      label: '75'
    }, {
      value: 100,
      label: '100'
    }]
  }
}`,...(fe=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,xe,he;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    defaultValue: 60
  }
}`,...(he=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var _e,ye,ke;X.parameters={...X.parameters,docs:{...(_e=X.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<number>(40);
    return <div style={{
      display: 'grid',
      gap: '16px'
    }}>\r
        <Slider value={val} onChange={(v: number) => setVal(v)} />\r
        <div>Value: {val}</div>\r
      </div>;
  }
}`,...(ke=(ye=X.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Me,Se,je;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    size: 'md',
    color: 'primary',
    variant: 'solid',
    showMinMaxLabel: true,
    defaultValue: 50,
    marks: [{
      value: 0
    }, {
      value: 50
    }, {
      value: 100
    }]
  }
}`,...(je=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Le,we,Re;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '2rem',
    background: 'var(--color-gray-50, #f9fafb)',
    borderRadius: 'var(--radius-md, 8px)'
  }}>\r
      <Slider defaultValue={70} variant="soft" valueLabelDisplay="on" color="primary" />\r
      <Slider defaultValue={30} variant="outlined" color="success" style={{
      marginTop: 'var(--spacing-lg, 24px)'
    }} />\r
    </div>
}`,...(Re=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Ve,Te,Ce;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => <div style={{
    background: '#111',
    padding: '2rem',
    borderRadius: 'var(--radius-md, 8px)',
    color: 'white'
  }}>\r
      <Slider defaultValue={55} color="neutral" valueLabelDisplay="on" />\r
      <Slider range defaultValue={[20, 80]} variant="tertiary" color="warning" valueLabelDisplay="on" style={{
      marginTop: 'var(--spacing-lg, 24px)'
    }} />\r
    </div>
}`,...(Ce=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};const pa=["DefaultSlider","FocusStateSlider","DisabledSlider","RangeSlider","RangeWithTooltips","SliderWithMarks","SliderWithMinMaxLabels","ControlledSlider","CustomStepSlider","CustomStylesExample","DarkThemeExample"];export{X as ControlledSlider,B as CustomStepSlider,K as CustomStylesExample,H as DarkThemeExample,$ as DefaultSlider,O as DisabledSlider,W as FocusStateSlider,A as RangeSlider,q as RangeWithTooltips,F as SliderWithMarks,U as SliderWithMinMaxLabels,pa as __namedExportsOrder,ma as default};
