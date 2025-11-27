import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{r as h}from"./index-B2-qRKKC.js";import{c as ze}from"./classNames-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ee="_track_4g7k4_278",De="_buffer_4g7k4_300",Oe="_bar_4g7k4_329",t={"dark-mode":"_dark-mode_4g7k4_244","progress-container":"_progress-container_4g7k4_265","progress-row":"_progress-row_4g7k4_272",track:Ee,"track--sm":"_track--sm_4g7k4_288","track--md":"_track--md_4g7k4_292","track--lg":"_track--lg_4g7k4_296",buffer:De,"buffer--primary":"_buffer--primary_4g7k4_309","buffer--success":"_buffer--success_4g7k4_313","buffer--warning":"_buffer--warning_4g7k4_317","buffer--error":"_buffer--error_4g7k4_321","buffer--neutral":"_buffer--neutral_4g7k4_325",bar:Oe,"bar--primary":"_bar--primary_4g7k4_339","bar--success":"_bar--success_4g7k4_343","bar--warning":"_bar--warning_4g7k4_347","bar--error":"_bar--error_4g7k4_351","bar--neutral":"_bar--neutral_4g7k4_355","bar--gradient":"_bar--gradient_4g7k4_359","bar--striped":"_bar--striped_4g7k4_387","progress-stripes":"_progress-stripes_4g7k4_1","bar--indeterminate":"_bar--indeterminate_4g7k4_420","progress-indeterminate":"_progress-indeterminate_4g7k4_1","label-inside":"_label-inside_4g7k4_426","label-inside--primary":"_label-inside--primary_4g7k4_435","label-inside--success":"_label-inside--success_4g7k4_439","label-inside--warning":"_label-inside--warning_4g7k4_443","label-inside--error":"_label-inside--error_4g7k4_447","label-inside--neutral":"_label-inside--neutral_4g7k4_451","label-title":"_label-title_4g7k4_455","label-trailing":"_label-trailing_4g7k4_462","label-floating":"_label-floating_4g7k4_470","label-floating--top":"_label-floating--top_4g7k4_482","label-floating--bottom":"_label-floating--bottom_4g7k4_486"},Ue=(e,s,a)=>Math.min(Math.max(e,s),a),Ge=300;function He(e){const{value:s,min:a,max:u,animation:c,indeterminate:o}=e,x=Math.max(u-a,1),d=o?0:Ue(((s??a)-a)/x*100,0,100),[l,b]=h.useState(d),n=h.useRef(null),m=h.useRef(l);return h.useEffect(()=>{const B=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(o||!c||B){b(d),m.current=d;return}const g=performance.now(),C=Ge,v=m.current,k=d,_=z=>{const y=z-g,p=Math.min(y/C,1),E=p<.5?2*p*p:-1+(4-2*p)*p,D=v+(k-v)*E;b(D),p<1?n.current=requestAnimationFrame(_):m.current=k};return n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(_),()=>{n.current&&cancelAnimationFrame(n.current)}},[d,c,o]),{percent:d,animatedPercent:l,isIndeterminate:o}}const qe=({size:e,bufferPercent:s,color:a,children:u})=>{const c=`${t.track} ${t[`track--${e}`]}`,o=s!==void 0?`${t.buffer} ${t[`buffer--${a}`]}`:"";return r.jsxs("div",{className:c,children:[s!==void 0&&r.jsx("div",{className:o,style:{width:`${s}%`}}),u]})};qe.__docgenInfo={description:"",methods:[],displayName:"LinearProgressTrack"};const Fe=({percent:e,animatedPercent:s,indeterminate:a,striped:u,gradient:c,color:o,animation:x,showLabel:d,insideLabel:l})=>{const b=ze(t.bar,t[`bar--${o}`],c&&t["bar--gradient"],u&&t["bar--striped"],a&&t["bar--indeterminate"]),n=d&&l?`${t["label-inside"]} ${t[`label-inside--${o}`]}`:"",m=a?void 0:`${x?s:e}%`;return r.jsx("div",{className:b,style:{width:m},children:d&&l&&r.jsx("div",{className:n,children:l})})};Fe.__docgenInfo={description:"",methods:[],displayName:"LinearProgressBar"};const V=({variant:e,percent:s,children:a})=>e==="top-floating"?r.jsx("div",{className:`${t["label-floating"]} ${t["label-floating--top"]}`,style:{left:`${s}%`},children:a}):e==="bottom-floating"?r.jsx("div",{className:`${t["label-floating"]} ${t["label-floating--bottom"]}`,style:{left:`${s}%`},children:a}):e==="title"?r.jsx("div",{className:t["label-title"],children:a}):e==="trailing"?r.jsx("div",{className:t["label-trailing"],children:a}):null;V.__docgenInfo={description:"",methods:[],displayName:"LinearProgressLabel"};function Je(e,s){return`${Math.round(s)}%`}const i=({id:e,value:s,min:a=0,max:u=100,bufferValue:c,indeterminate:o=!1,striped:x=!1,gradient:d=!1,showLabel:l=!1,labelFormatter:b=Je,variant:n="base",color:m="primary",size:B="md",animation:g=!0,className:C})=>{const{percent:v,animatedPercent:k,isIndeterminate:_}=He({value:s??a,min:a,max:u,animation:g,indeterminate:o}),z=h.useMemo(()=>{if(c===void 0)return;const Ce=Math.max(u-a,1);return Math.min(Math.max((c-a)/Ce*100,0),100)},[c,a,u]),y=l?b(s,v):null,p=n==="inside"&&l,E=n==="trailing"&&l,D=n==="title"&&l,O=n==="top-floating"&&l,Ie=n==="bottom-floating"&&l,Re=`${t["progress-container"]} ${C||""}`.trim(),Ve=t["progress-row"],Be=r.jsxs(qe,{size:B,bufferPercent:z,color:m,children:[r.jsx(Fe,{percent:v,animatedPercent:k,indeterminate:_,striped:x,gradient:d,color:m,animation:g,showLabel:p,insideLabel:p?y:void 0}),(O||Ie)&&r.jsx(V,{variant:O?"top-floating":"bottom-floating",percent:g?k:v,animation:g,children:y})]});return r.jsxs("div",{id:e,role:"progressbar","aria-valuemin":a,"aria-valuemax":u,"aria-valuenow":_?void 0:Math.round(s??a),"aria-busy":_||void 0,className:Re,children:[D&&r.jsx(V,{variant:"title",percent:v,animation:g,children:y}),r.jsxs("div",{className:Ve,children:[Be,E&&r.jsx(V,{variant:"trailing",percent:v,animation:g,children:y})]})]})};i.displayName="LinearProgress";i.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",props:{id:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},bufferValue:{required:!1,tsType:{name:"number"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | undefined, percent: number) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},name:"value"},{type:{name:"number"},name:"percent"}],return:{name:"ReactNode"}}},description:"",defaultValue:{value:"function defaultFormatter(_value: number | undefined, percent: number): string {\n  return `${Math.round(percent)}%`;\n}",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'base'
| 'title'
| 'trailing'
| 'top-floating'
| 'bottom-floating'
| 'inside'`,elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'title'"},{name:"literal",value:"'trailing'"},{name:"literal",value:"'top-floating'"},{name:"literal",value:"'bottom-floating'"},{name:"literal",value:"'inside'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},animation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Ze={title:"Feedback/LinearProgress",component:i,parameters:{docs:{source:{type:"code",state:"open"}}},args:{min:0,max:100,color:"primary",size:"md",animation:!0}},f=[0,10,20,30,40,50,60,70,80,90,100],Ae=["primary","success","warning","error","neutral"],Ke=["sm","md","lg"],L={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:f.map(e=>r.jsx(i,{value:e,showLabel:!1},e))})},w={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:f.map(e=>r.jsx(i,{value:e,variant:"title",showLabel:!0},e))})},P={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:f.map(e=>r.jsx(i,{value:e,variant:"trailing",showLabel:!0},e))})},j={render:()=>r.jsx("div",{style:{display:"grid",gap:"24px"},children:f.map(e=>r.jsx(i,{value:e,variant:"top-floating",showLabel:!0},e))})},T={render:()=>r.jsx("div",{style:{display:"grid",gap:"24px"},children:f.map(e=>r.jsx(i,{value:e,variant:"bottom-floating",showLabel:!0},e))})},$={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:f.map(e=>r.jsx(i,{value:e,variant:"inside",showLabel:!0},e))})},M={render:()=>r.jsx(i,{indeterminate:!0,striped:!0,gradient:!0,showLabel:!0,variant:"inside",labelFormatter:()=>"Loading"})},N={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:[20,40,60,80].map(e=>r.jsx(i,{value:e/2,bufferValue:e,showLabel:!0,variant:"trailing"},e))})},S={render:()=>r.jsx("div",{style:{display:"grid",gap:"24px"},children:Ke.map(e=>r.jsx(i,{value:60,size:e,variant:"inside",showLabel:!0},e))})},q={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:Ae.map(e=>r.jsx(i,{value:70,color:e,variant:"inside",showLabel:!0},e))})},F={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:f.map(e=>r.jsx(i,{value:e,animation:!0,showLabel:!0,variant:"inside"},e))})},A={render:()=>r.jsx("div",{style:{display:"grid",gap:"12px"},children:[0,25,50,75,100].map(e=>r.jsx(i,{value:e,min:0,max:200,labelFormatter:(s,a)=>`${Math.round(s||0)}/200 (${Math.round(a)}%)`,showLabel:!0,variant:"trailing"},e))})},I={render:()=>r.jsx("div",{style:{display:"grid",gap:"16px"},children:f.filter(e=>e>0).map(e=>r.jsx(i,{value:e,striped:!0,gradient:!0,variant:"inside",showLabel:!0},e))})},R={parameters:{backgrounds:{default:"dark"}},render:()=>r.jsx("div",{style:{background:"#000",padding:"24px",borderRadius:"8px",display:"grid",gap:"16px"},children:Ae.map(e=>r.jsx(i,{value:65,color:e,variant:"inside",showLabel:!0,gradient:!0,striped:!0},e))})};var U,G,H;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} showLabel={false} />)}\r
    </div>
}`,...(H=(G=L.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} variant="title" showLabel />)}\r
    </div>
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Y;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} variant="trailing" showLabel />)}\r
    </div>
}`,...(Y=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} variant="top-floating" showLabel />)}\r
    </div>
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,te;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} variant="bottom-floating" showLabel />)}\r
    </div>
}`,...(te=(se=T.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,ne,le;$.parameters={...$.parameters,docs:{...(ie=$.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} variant="inside" showLabel />)}\r
    </div>
}`,...(le=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,de,ue;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <LinearProgress indeterminate striped gradient showLabel variant="inside" labelFormatter={() => 'Loading'} />
}`,...(ue=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,pe,me;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {[20, 40, 60, 80].map(v => <LinearProgress key={v} value={v / 2} bufferValue={v} showLabel variant="trailing" />)}\r
    </div>
}`,...(me=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,ve,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px'
  }}>\r
      {sizes.map(s => <LinearProgress key={s} value={60} size={s} variant="inside" showLabel />)}\r
    </div>
}`,...(fe=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,_e,ye;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {colors.map(c => <LinearProgress key={c} value={70} color={c} variant="inside" showLabel />)}\r
    </div>
}`,...(ye=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:ye.source}}};var xe,ke,he;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {values.map(v => <LinearProgress key={v} value={v} animation showLabel variant="inside" />)}\r
    </div>
}`,...(he=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:he.source}}};var Le,we,Pe;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '12px'
  }}>\r
      {[0, 25, 50, 75, 100].map(v => <LinearProgress key={v} value={v} min={0} max={200} labelFormatter={(val, p) => \`\${Math.round(val || 0)}/200 (\${Math.round(p)}%)\`} showLabel variant="trailing" />)}\r
    </div>
}`,...(Pe=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var je,Te,$e;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>\r
      {values.filter(v => v > 0).map(v => <LinearProgress key={v} value={v} striped gradient variant="inside" showLabel />)}\r
    </div>
}`,...($e=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Me,Ne,Se;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => <div style={{
    background: '#000',
    padding: '24px',
    borderRadius: '8px',
    display: 'grid',
    gap: '16px'
  }}>\r
      {colors.map(c => <LinearProgress key={c} value={65} color={c} variant="inside" showLabel gradient striped />)}\r
    </div>
}`,...(Se=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};const er=["BaseProgress","TitleLabelProgress","TrailingLabelProgress","TopFloatingLabelProgress","BottomFloatingLabelProgress","InsideLabelProgress","IndeterminateProgress","BufferProgress","AllSizes","AllColors","AnimatedProgress","RangeExample","StripedProgress","DarkMode"];export{q as AllColors,S as AllSizes,F as AnimatedProgress,L as BaseProgress,T as BottomFloatingLabelProgress,N as BufferProgress,R as DarkMode,M as IndeterminateProgress,$ as InsideLabelProgress,A as RangeExample,I as StripedProgress,w as TitleLabelProgress,j as TopFloatingLabelProgress,P as TrailingLabelProgress,er as __namedExportsOrder,Ze as default};
