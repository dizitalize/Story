import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as m,R as Ce}from"./index-B2-qRKKC.js";import{L as Be}from"./Label-KEzZ_8lI.js";import{T as qe}from"./Typography-BdmfNA7_.js";import{I as Re}from"./Icon-CQ1yD0uX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";import"./iframe-3Q35QAIm.js";const ze={default:"12px"},D={y:"16px",x:"20px",gap:"8px"},q={descSize:"13px",lineHeight:1.4},a={success:{bg:"var(--color-success-50, #ECFDF5)",border:"var(--color-success-300, #6EE7B7)",fg:"var(--color-success-700, #047857)",softBg:"var(--color-success-100, #D1FAE5)"},warning:{bg:"var(--color-warning-50, #FFFBEB)",border:"var(--color-warning-300, #FCD34D)",fg:"var(--color-warning-800, #92400E)",softBg:"var(--color-warning-100, #FEF3C7)"},error:{bg:"var(--color-error-50, #FEF2F2)",border:"var(--color-error-300, #FCA5A5)",fg:"var(--color-error-700, #B91C1C)",softBg:"var(--color-error-100, #FEE2E2)"},info:{bg:"var(--color-primary-50, #EFF6FF)",border:"var(--color-primary-300, #93C5FD)",fg:"var(--color-primary-700, #1D4ED8)",softBg:"var(--color-primary-100, #DBEAFE)"}};function Le(s,t,r){const n=a[s],l={display:"flex",width:"100%",boxSizing:"border-box",padding:`${D.y} ${D.x}`,gap:D.gap,borderRadius:ze.default,alignItems:"flex-start",fontSize:q.descSize,lineHeight:q.lineHeight.toString(),fontFamily:"var(--font-family, system-ui, -apple-system, sans-serif)",boxShadow:"0 1px 3px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)",transition:"opacity var(--motion-duration-fast,120ms) var(--motion-easing-ease-out), transform var(--motion-duration-fast,120ms) var(--motion-easing-ease-out)"};switch(t){case"default":Object.assign(l,{background:n.bg,border:`1px solid ${n.border}`,color:r?n.fg:"var(--color-neutral-800,#1F2937)"});break;case"outlined":Object.assign(l,{background:"var(--color-neutral-0,#FFFFFF)",border:`2px solid ${n.fg}`,color:r?n.fg:"var(--color-neutral-800,#1F2937)"});break;case"soft":Object.assign(l,{background:n.softBg,border:`1px solid ${n.softBg}`,color:r?n.fg:"var(--color-neutral-800,#1F2937)"});break}return l}function Oe(s,t){return{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"13px",fontWeight:500,cursor:"pointer",color:a[s].fg,textDecoration:t?"underline":"none",background:"transparent",border:"none",padding:0}}const d={size:20},We={success:e.jsxs("svg",{width:d.size,height:d.size,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"10",cy:"10",r:"10",fill:a.success.filledBg,opacity:"0.15"}),e.jsx("path",{d:"M6 10.5l2.5 2.5 5-5",stroke:a.success.fg,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),warning:e.jsxs("svg",{width:d.size,height:d.size,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"10",cy:"10",r:"10",fill:a.warning.filledBg,opacity:"0.15"}),e.jsx("path",{d:"M10 5v6",stroke:a.warning.fg,strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"10",cy:"14",r:"1",fill:a.warning.fg})]}),error:e.jsxs("svg",{width:d.size,height:d.size,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"10",cy:"10",r:"10",fill:a.error.filledBg,opacity:"0.15"}),e.jsx("path",{d:"M7 7l6 6M13 7l-6 6",stroke:a.error.fg,strokeWidth:"2",strokeLinecap:"round"})]}),info:e.jsxs("svg",{width:d.size,height:d.size,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"10",cy:"10",r:"10",fill:a.info.filledBg,opacity:"0.15"}),e.jsx("path",{d:"M10 9v5",stroke:a.info.fg,strokeWidth:"2",strokeLinecap:"round"}),e.jsx("circle",{cx:"10",cy:"6",r:"1",fill:a.info.fg})]})},ve=({status:s,icon:t})=>e.jsx("span",{style:{display:"inline-flex",marginTop:2},children:t??We[s]});ve.__docgenInfo={description:"",methods:[],displayName:"AlertIcon"};const be=({children:s,status:t,colorText:r})=>s?e.jsx(Be,{style:{fontSize:"14px",fontWeight:600,marginBottom:4,color:r?a[t].fg:"inherit"},children:s}):null;be.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};const we=({children:s})=>s?e.jsx(qe,{variant:"body2",style:{marginTop:2},children:s}):null;we.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const Ae=({id:s,status:t,linkEnabled:r,linkText:n="Learn more",linkUnderline:l=!1,linkType:o=t,linkIconName:i,onLinkClick:c})=>{if(!r)return null;const f=Oe(o,l);return e.jsxs("button",{type:"button",style:f,onClick:()=>c==null?void 0:c(s),"aria-label":n,children:[i&&e.jsx(Re,{name:i,size:16}),e.jsx("span",{children:n})]})};Ae.__docgenInfo={description:"",methods:[],displayName:"AlertCTA",props:{linkText:{defaultValue:{value:"'Learn more'",computed:!1},required:!1},linkUnderline:{defaultValue:{value:"false",computed:!1},required:!1},linkType:{defaultValue:{value:"status",computed:!1},required:!1}}};const u=({id:s,status:t="success",title:r,description:n,showIcon:l=!0,colorText:o=!1,linkEnabled:i=!1,linkText:c,linkUnderline:f=!1,linkType:ke=t,linkIconName:je,onLinkClick:Ie,variant:F="default",className:Se="",children:C,dismissible:Ee=!1,onClose:E})=>{const[B,De]=m.useState(!0),Fe=Le(t,F,o);return e.jsxs("div",{id:s,role:"alert","data-status":t,"data-variant":F,style:{...Fe,opacity:B?1:0,transform:B?"scale(1)":"scale(0.96)"},className:Se,children:[l&&e.jsx(ve,{status:t}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx(be,{status:t,colorText:o,children:r}),C||e.jsx(we,{children:n}),e.jsx("div",{style:{marginTop:8},children:e.jsx(Ae,{id:s,status:t,linkEnabled:i,linkText:c,linkUnderline:f,linkType:ke,linkIconName:je,onLinkClick:Ie})})]}),Ee&&e.jsx("button",{type:"button","aria-label":"Close alert",onClick:()=>{De(!1),E==null||E(s)},style:{background:"transparent",border:"none",cursor:"pointer",padding:4,marginLeft:8,alignSelf:"flex-start"},children:e.jsx("span",{style:{fontSize:16,lineHeight:1},"aria-hidden":"true",children:"×"})})]})};u.displayName="Alert";u.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{id:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},colorText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},linkEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},linkText:{required:!1,tsType:{name:"string"},description:""},linkUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},linkType:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"status = 'success'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'soft'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'soft'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id?: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const Me={"top-right":{position:"fixed",top:24,right:24,display:"flex",flexDirection:"column",gap:12,zIndex:1e4,maxWidth:400},"top-left":{position:"fixed",top:24,left:24,display:"flex",flexDirection:"column",gap:12,zIndex:1e4,maxWidth:400},"bottom-right":{position:"fixed",bottom:24,right:24,display:"flex",flexDirection:"column",gap:12,zIndex:1e4,maxWidth:400},"bottom-left":{position:"fixed",bottom:24,left:24,display:"flex",flexDirection:"column",gap:12,zIndex:1e4,maxWidth:400}},p=({alerts:s,position:t})=>e.jsx("div",{style:Me[t],"aria-live":"polite","aria-relevant":"additions removals",children:s.map(r=>e.jsx(u,{...r.options,id:r.id},r.id))});p.displayName="AlertContainer";p.__docgenInfo={description:"",methods:[],displayName:"AlertContainer"};function He(){return"alert-"+Math.random().toString(36).slice(2,10)}function Te(){const[s,t]=m.useState([]),r=m.useRef({}),n=m.useCallback(o=>{t(i=>i.filter(c=>c.id!==o)),r.current[o]&&(clearTimeout(r.current[o]),delete r.current[o])},[]),l=m.useCallback(o=>{const i=o.id??He(),c={id:i,options:{...o,id:i},createdAt:Date.now()};return t(f=>[...f,c]),o.timeout&&o.timeout>0&&(r.current[i]=setTimeout(()=>n(i),o.timeout)),i},[n]);return m.useEffect(()=>()=>{Object.values(r.current).forEach(o=>clearTimeout(o))},[]),{showAlert:l,closeAlert:n,alerts:s}}const Je={title:"DataDisplay/Alert",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Alert component with statuses, variants, CTA, and programmatic controller."}}},argTypes:{status:{control:"select",options:["success","warning","error","info"]},variant:{control:"select",options:["default","outlined","soft"]},showIcon:{control:"boolean"},colorText:{control:"boolean"},linkEnabled:{control:"boolean"},linkUnderline:{control:"boolean"},linkType:{control:"select",options:["success","warning","error","info"]},linkIconName:{control:"text"},dismissible:{control:"boolean"}}},g={args:{status:"success",title:"Success Message",description:"You can insert a description for the message here.",showIcon:!0,variant:"default",linkEnabled:!0,linkText:"Learn more",linkUnderline:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},h={args:{status:"warning",title:"Warning Message",description:"You can insert a description for the message here.",showIcon:!0,variant:"default",linkEnabled:!0,linkText:"Learn more"},parameters:{docs:{source:{type:"code",state:"open"}}}},y={args:{status:"error",title:"Error Message",description:"You can insert a description for the message here.",showIcon:!0,variant:"default",linkEnabled:!0,linkText:"Learn more"},parameters:{docs:{source:{type:"code",state:"open"}}}},x={args:{status:"info",title:"Hint Message",description:"You can insert a description for the message here.",showIcon:!0,variant:"default",linkEnabled:!0,linkText:"Learn more"},parameters:{docs:{source:{type:"code",state:"open"}}}},v={args:{status:"success",title:"Outlined Alert",description:"Outlined variant with strong border emphasis.",showIcon:!0,variant:"outlined"},parameters:{docs:{source:{type:"code",state:"open"}}}},b={args:{status:"error",title:"Outlined Error",description:"Outlined variant for emphasis.",showIcon:!0,variant:"outlined",linkEnabled:!0,linkText:"Retry"},parameters:{docs:{source:{type:"code",state:"open"}}}},w={args:{status:"warning",title:"Soft Alert",description:"Soft variant uses subtle background tint.",showIcon:!0,variant:"soft"},parameters:{docs:{source:{type:"code",state:"open"}}}},A={args:{status:"info",title:"Title Only Alert",showIcon:!0,variant:"default"},parameters:{docs:{source:{type:"code",state:"open"}}}},T={args:{status:"success",title:"Success Message",description:"You can insert a description for the message here.",showIcon:!0,variant:"default",linkEnabled:!0,linkText:"Learn more",linkUnderline:!0,linkType:"success"},parameters:{docs:{source:{type:"code",state:"open"}}}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(u,{status:"success",title:"Success",description:"All operations completed.",showIcon:!0}),e.jsx(u,{status:"warning",title:"Warning",description:"Action required to proceed.",showIcon:!0}),e.jsx(u,{status:"error",title:"Error",description:"Something went wrong.",showIcon:!0}),e.jsx(u,{status:"info",title:"Hint",description:"Remember to save frequently.",showIcon:!0})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},j={args:{status:"info",title:"Dismissible Alert",description:"You can close this alert.",showIcon:!0,variant:"default",dismissible:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},I={render:()=>{const s=()=>{const{showAlert:t,alerts:r}=Te();return e.jsxs("div",{style:{minHeight:300},children:[e.jsx("button",{style:{padding:"8px 16px",borderRadius:8,background:"var(--color-primary-600,#2563EB)",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>t({status:"success",title:"Programmatic Alert",description:"Triggered from button.",variant:"default",timeout:4e3,position:"bottom-right"}),children:"Trigger Alert"}),e.jsx(p,{position:"bottom-right",alerts:r.filter(n=>(n.options.position??"bottom-right")==="bottom-right")})]})};return e.jsx(s,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},S={render:()=>{const s=()=>{const{showAlert:t,alerts:r}=Te();return Ce.useEffect(()=>{t({status:"success",title:"Top Right",description:"Positioned alert",variant:"default",position:"top-right",timeout:5e3}),t({status:"warning",title:"Top Left",description:"Positioned alert",variant:"default",position:"top-left",timeout:5e3}),t({status:"error",title:"Bottom Right",description:"Positioned alert",variant:"default",position:"bottom-right",timeout:5e3}),t({status:"info",title:"Bottom Left",description:"Positioned alert",variant:"default",position:"bottom-left",timeout:5e3})},[t]),e.jsxs("div",{style:{minHeight:320},children:[e.jsx(p,{position:"top-right",alerts:r.filter(n=>n.options.position==="top-right")}),e.jsx(p,{position:"top-left",alerts:r.filter(n=>n.options.position==="top-left")}),e.jsx(p,{position:"bottom-right",alerts:r.filter(n=>n.options.position==="bottom-right")}),e.jsx(p,{position:"bottom-left",alerts:r.filter(n=>n.options.position==="bottom-left")})]})};return e.jsx(s,{})},parameters:{docs:{source:{type:"code",state:"open"}}}};var R,z,L;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: 'Success Message',
    description: 'You can insert a description for the message here.',
    showIcon: true,
    variant: 'default',
    linkEnabled: true,
    linkText: 'Learn more',
    linkUnderline: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var O,W,M;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    title: 'Warning Message',
    description: 'You can insert a description for the message here.',
    showIcon: true,
    variant: 'default',
    linkEnabled: true,
    linkText: 'Learn more'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(M=(W=h.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var H,N,_;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    status: 'error',
    title: 'Error Message',
    description: 'You can insert a description for the message here.',
    showIcon: true,
    variant: 'default',
    linkEnabled: true,
    linkText: 'Learn more'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(_=(N=y.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var P,V,Y;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Hint Message',
    description: 'You can insert a description for the message here.',
    showIcon: true,
    variant: 'default',
    linkEnabled: true,
    linkText: 'Learn more'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Y=(V=x.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var U,$,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: 'Outlined Alert',
    description: 'Outlined variant with strong border emphasis.',
    showIcon: true,
    variant: 'outlined'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    status: 'error',
    title: 'Outlined Error',
    description: 'Outlined variant for emphasis.',
    showIcon: true,
    variant: 'outlined',
    linkEnabled: true,
    linkText: 'Retry'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    title: 'Soft Alert',
    description: 'Soft variant uses subtle background tint.',
    showIcon: true,
    variant: 'soft'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Title Only Alert',
    showIcon: true,
    variant: 'default'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ne=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,oe,ae;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: 'Success Message',
    description: 'You can insert a description for the message here.',
    showIcon: true,
    variant: 'default',
    linkEnabled: true,
    linkText: 'Learn more',
    linkUnderline: true,
    linkType: 'success'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ae=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,le,ce;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>\r
      <Alert status='success' title='Success' description='All operations completed.' showIcon />\r
      <Alert status='warning' title='Warning' description='Action required to proceed.' showIcon />\r
      <Alert status='error' title='Error' description='Something went wrong.' showIcon />\r
      <Alert status='info' title='Hint' description='Remember to save frequently.' showIcon />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Dismissible Alert',
    description: 'You can close this alert.',
    showIcon: true,
    variant: 'default',
    dismissible: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(pe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,ge;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const Demo: React.FC = () => {
      const {
        showAlert,
        alerts,
        closeAlert
      } = useAlertController();
      return <div style={{
        minHeight: 300
      }}>\r
          <button style={{
          padding: '8px 16px',
          borderRadius: 8,
          background: 'var(--color-primary-600,#2563EB)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }} onClick={() => showAlert({
          status: 'success',
          title: 'Programmatic Alert',
          description: 'Triggered from button.',
          variant: 'default',
          timeout: 4000,
          position: 'bottom-right'
        })}>\r
            Trigger Alert\r
          </button>\r
          <AlertContainer position='bottom-right' alerts={alerts.filter(a => (a.options.position ?? 'bottom-right') === 'bottom-right')} />\r
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ge=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,ye,xe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const Demo: React.FC = () => {
      const {
        showAlert,
        alerts
      } = useAlertController();
      React.useEffect(() => {
        showAlert({
          status: 'success',
          title: 'Top Right',
          description: 'Positioned alert',
          variant: 'default',
          position: 'top-right',
          timeout: 5000
        });
        showAlert({
          status: 'warning',
          title: 'Top Left',
          description: 'Positioned alert',
          variant: 'default',
          position: 'top-left',
          timeout: 5000
        });
        showAlert({
          status: 'error',
          title: 'Bottom Right',
          description: 'Positioned alert',
          variant: 'default',
          position: 'bottom-right',
          timeout: 5000
        });
        showAlert({
          status: 'info',
          title: 'Bottom Left',
          description: 'Positioned alert',
          variant: 'default',
          position: 'bottom-left',
          timeout: 5000
        });
      }, [showAlert]);
      return <div style={{
        minHeight: 320
      }}>\r
          <AlertContainer position='top-right' alerts={alerts.filter(a => a.options.position === 'top-right')} />\r
          <AlertContainer position='top-left' alerts={alerts.filter(a => a.options.position === 'top-left')} />\r
          <AlertContainer position='bottom-right' alerts={alerts.filter(a => a.options.position === 'bottom-right')} />\r
          <AlertContainer position='bottom-left' alerts={alerts.filter(a => a.options.position === 'bottom-left')} />\r
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(xe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};const Ke=["Success","Warning","Error","Hint","Outlined","Filled","Soft","TitleOnly","DescriptionCTA","WithIcons","Dismissible","Dynamic","Positioned"];export{T as DescriptionCTA,j as Dismissible,I as Dynamic,y as Error,b as Filled,x as Hint,v as Outlined,S as Positioned,w as Soft,g as Success,A as TitleOnly,h as Warning,k as WithIcons,Ke as __namedExportsOrder,Je as default};
