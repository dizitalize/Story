import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{u as Qe,c as I,a as F,b as ea,S as i,d as aa}from"./SkeletonBlock-DuqQnv6v.js";import{s as ta}from"./spacing-QHzs6Ru8.js";import{R as _}from"./index-B2-qRKKC.js";import"./radius-CJc3Nkyb.js";import"./motion-Cg9jJe8C.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=({id:o,animation:t="wave",width:n,height:p,radius:c="sm",fullWidth:l=!1,lines:d=1,gap:s=ta.sm,lastLineWidth:x="70%",className:u,style:h})=>{const{animationStyle:D}=Qe(t);if(d===1){const P=I(t,n,p,c,l),v=F("md",n,l);return e.jsx("span",{id:o,className:u,style:{...P,...v,...h},"aria-hidden":"true",children:t==="wave"&&e.jsx("span",{style:D})})}const Xe=typeof s=="number"?`${s}px`:s;return e.jsx("div",{id:o,className:u,style:{display:"flex",flexDirection:"column",gap:Xe,width:l?"100%":n?typeof n=="number"?`${n}px`:n:"auto",...h},"aria-hidden":"true",children:Array.from({length:d}).map((P,v)=>{const M=v===d-1?x:"100%",Ye=I(t,M,p,c,!1),Ze=F("md",M,!1);return e.jsx("span",{style:{...Ye,...Ze},children:t==="wave"&&e.jsx("span",{style:D})},v)})})};a.displayName="SkeletonLine";a.__docgenInfo={description:`SkeletonLine - Text line skeleton component
Renders single or multiple lines with customizable width and spacing`,methods:[],displayName:"SkeletonLine",props:{animation:{defaultValue:{value:"'wave'",computed:!1},required:!1},radius:{defaultValue:{value:"'sm'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},lines:{defaultValue:{value:"1",computed:!1},required:!1},gap:{defaultValue:{value:'"8px"',computed:!1},required:!1},lastLineWidth:{defaultValue:{value:"'70%'",computed:!1},required:!1}}};const r=({id:o,animation:t="wave",size:n="md",diameter:p,className:c,style:l})=>{const{animationStyle:d}=Qe(t),s=I(t,void 0,void 0,"full",!1),x=ea(n,p);return e.jsx("span",{id:o,className:c,style:{...s,...x,...l},"aria-hidden":"true",children:t==="wave"&&e.jsx("span",{style:d})})};r.displayName="SkeletonCircle";r.__docgenInfo={description:`SkeletonCircle - Circular skeleton component (for avatars)
Matches Avatar component sizing tokens`,methods:[],displayName:"SkeletonCircle",props:{animation:{defaultValue:{value:"'wave'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const N=({variant:o="text",...t})=>o==="circle"?e.jsx(r,{...t}):o==="block"?e.jsx(i,{...t}):e.jsx(a,{...t});N.displayName="Skeleton";N.__docgenInfo={description:`Skeleton - Universal skeleton component
Automatically renders the appropriate shape based on variant prop

@example
// Text skeleton
<Skeleton variant="text" width="200px" />

@example
// Circle (avatar) skeleton
<Skeleton variant="circle" size="md" />

@example
// Block (card) skeleton
<Skeleton variant="block" height="200px" aspectRatio="16/9" />`,methods:[],displayName:"Skeleton",props:{variant:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const m=({children:o,animation:t="wave",stagger:n,synchronized:p=!1,className:c,style:l})=>{const d=_.Children.map(o,(s,x)=>{if(!_.isValidElement(s))return s;const u={animation:s.props.animation||t};if(n&&!p){const h=aa(n,x);u.style={...s.props.style,...h}}return _.cloneElement(s,u)});return e.jsx("div",{className:c,style:{display:"flex",flexDirection:"column",gap:"12px",...l},children:d})};m.displayName="SkeletonGroup";m.__docgenInfo={description:`SkeletonGroup - Container for multiple skeleton components
Provides synchronized or staggered animation control

@example
// Synchronized animations
<SkeletonGroup animation="wave" synchronized>
  <Skeleton variant="circle" size="md" />
  <Skeleton variant="text" lines={2} />
</SkeletonGroup>

@example
// Staggered animations
<SkeletonGroup animation="pulse" stagger={100}>
  <Skeleton variant="text" />
  <Skeleton variant="text" />
  <Skeleton variant="text" />
</SkeletonGroup>`,methods:[],displayName:"SkeletonGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Child skeletons"},animation:{required:!1,tsType:{name:"union",raw:"'wave' | 'pulse' | 'none'",elements:[{name:"literal",value:"'wave'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'none'"}]},description:"Animation type for all children",defaultValue:{value:"'wave'",computed:!1}},stagger:{required:!1,tsType:{name:"number"},description:"Stagger animation delay (ms)"},synchronized:{required:!1,tsType:{name:"boolean"},description:"Synchronize all animations",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"}}};const ca={title:"Feedback/Skeleton",component:N,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Skeleton component with wave, pulse, and static animations. Supports text, circle, and block variants with design token integration."}}},argTypes:{variant:{control:"select",options:["text","circle","block"]},animation:{control:"select",options:["wave","pulse","none"]},radius:{control:"select",options:["none","xs","sm","md","lg","xl","full"]},fullWidth:{control:"boolean"}}},g={args:{variant:"text",animation:"wave",width:"300px"},parameters:{docs:{source:{type:"code",state:"open"}}}},y={render:()=>e.jsx(a,{lines:3,width:"100%",gap:"8px",lastLineWidth:"60%",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},w={render:()=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(a,{lines:5,fullWidth:!0,gap:"10px",lastLineWidth:"40%",animation:"wave"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},S={render:()=>e.jsx(r,{size:"sm",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},k={render:()=>e.jsx(r,{size:"md",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},f={render:()=>e.jsx(r,{size:"lg",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},j={render:()=>e.jsx(r,{diameter:"64px",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},L={render:()=>e.jsx(i,{width:"300px",height:"200px",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},W={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{aspectRatio:"16/9",animation:"wave"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},C={render:()=>e.jsx(i,{height:"150px",animation:"wave"}),parameters:{docs:{source:{type:"code",state:"open"}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{lines:1,width:"100%",animation:"wave"}),e.jsx(r,{size:"md",animation:"wave"}),e.jsx(i,{height:"100px",animation:"wave"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},z={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{lines:1,width:"100%",animation:"pulse"}),e.jsx(r,{size:"md",animation:"pulse"}),e.jsx(i,{height:"100px",animation:"pulse"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(a,{lines:1,width:"100%",animation:"none"}),e.jsx(r,{size:"md",animation:"none"}),e.jsx(i,{height:"100px",animation:"none"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},B={render:()=>e.jsxs(m,{animation:"wave",synchronized:!0,children:[e.jsx(a,{lines:1,width:"200px"}),e.jsx(a,{lines:1,width:"180px"}),e.jsx(a,{lines:1,width:"160px"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},R={render:()=>e.jsxs(m,{animation:"pulse",stagger:150,children:[e.jsx(a,{lines:1,width:"100%"}),e.jsx(a,{lines:1,width:"100%"}),e.jsx(a,{lines:1,width:"100%"}),e.jsx(a,{lines:1,width:"100%"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},E={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"20px",border:"1px solid #E5E7EB",borderRadius:"12px",maxWidth:"400px"},children:[e.jsx(r,{size:"lg",animation:"wave"}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{lines:2,fullWidth:!0,gap:"8px",lastLineWidth:"70%",animation:"wave"})})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},G={render:()=>e.jsxs("div",{style:{border:"1px solid #E5E7EB",borderRadius:"12px",overflow:"hidden",maxWidth:"400px"},children:[e.jsx(i,{aspectRatio:"16/9",animation:"wave",radius:"none"}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(a,{lines:1,width:"60%",animation:"wave",height:"24px"}),e.jsx("div",{style:{marginTop:"12px"},children:e.jsx(a,{lines:3,fullWidth:!0,gap:"8px",lastLineWidth:"80%",animation:"wave"})}),e.jsxs("div",{style:{marginTop:"16px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx(r,{size:"sm",animation:"wave"}),e.jsx(a,{lines:1,width:"120px",animation:"wave"})]})]})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},A={render:()=>e.jsx("div",{style:{maxWidth:"500px",padding:"20px",border:"1px solid #E5E7EB",borderRadius:"12px"},children:e.jsxs(m,{animation:"wave",children:[e.jsxs("div",{children:[e.jsx(a,{lines:1,width:"100px",height:"14px",animation:"wave"}),e.jsx("div",{style:{marginTop:"8px"},children:e.jsx(i,{height:"40px",animation:"wave"})})]}),e.jsxs("div",{children:[e.jsx(a,{lines:1,width:"120px",height:"14px",animation:"wave"}),e.jsx("div",{style:{marginTop:"8px"},children:e.jsx(i,{height:"40px",animation:"wave"})})]}),e.jsxs("div",{children:[e.jsx(a,{lines:1,width:"80px",height:"14px",animation:"wave"}),e.jsx("div",{style:{marginTop:"8px"},children:e.jsx(i,{height:"100px",animation:"wave"})})]}),e.jsx("div",{style:{marginTop:"8px"},children:e.jsx(i,{height:"44px",width:"150px",animation:"wave",radius:"md"})})]})}),parameters:{docs:{source:{type:"code",state:"open"}}}},q={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"700px"},children:[...Array(5)].map((o,t)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",border:"1px solid #E5E7EB",borderRadius:"8px"},children:[e.jsx(r,{size:"sm",animation:"wave"}),e.jsx(a,{lines:1,width:"150px",animation:"wave"}),e.jsx(a,{lines:1,width:"100px",animation:"wave"}),e.jsx(a,{lines:1,width:"80px",animation:"wave",style:{marginLeft:"auto"}})]},t))}),parameters:{docs:{source:{type:"code",state:"open"}}}},V={render:()=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsxs(m,{animation:"wave",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"},children:[e.jsx(r,{diameter:"80px",animation:"wave"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(a,{lines:1,width:"200px",height:"24px",animation:"wave"}),e.jsx("div",{style:{marginTop:"8px"},children:e.jsx(a,{lines:2,fullWidth:!0,gap:"6px",lastLineWidth:"70%",animation:"wave"})})]})]}),e.jsx(i,{height:"120px",animation:"wave"}),e.jsx(a,{lines:4,fullWidth:!0,gap:"8px",lastLineWidth:"50%",animation:"wave"}),e.jsx(i,{aspectRatio:"21/9",animation:"wave"})]})}),parameters:{docs:{source:{type:"code",state:"open"}}}};var U,$,H;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'wave',
    width: '300px'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(H=($=g.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var O,J,K;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <SkeletonLine lines={3} width="100%" gap="8px" lastLineWidth="60%" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px'
  }}>\r
      <SkeletonLine lines={5} fullWidth gap="10px" lastLineWidth="40%" animation="wave" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <SkeletonCircle size="sm" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ie,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <SkeletonCircle size="md" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(re=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ne,se,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <SkeletonCircle size="lg" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,de,pe;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SkeletonCircle diameter="64px" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(pe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,me,xe;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <SkeletonBlock width="300px" height="200px" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(xe=(me=L.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var ue,he,ve;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <SkeletonBlock aspectRatio="16/9" animation="wave" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ve=(he=W.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ge,ye,we;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <SkeletonBlock height="150px" animation="wave" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(we=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Se,ke,fe;b.parameters={...b.parameters,docs:{...(Se=b.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>\r
      <SkeletonLine lines={1} width="100%" animation="wave" />\r
      <SkeletonCircle size="md" animation="wave" />\r
      <SkeletonBlock height="100px" animation="wave" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(fe=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var je,Le,We;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>\r
      <SkeletonLine lines={1} width="100%" animation="pulse" />\r
      <SkeletonCircle size="md" animation="pulse" />\r
      <SkeletonBlock height="100px" animation="pulse" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(We=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:We.source}}};var Ce,be,ze;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  }}>\r
      <SkeletonLine lines={1} width="100%" animation="none" />\r
      <SkeletonCircle size="md" animation="none" />\r
      <SkeletonBlock height="100px" animation="none" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ze=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var Te,Be,Re;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <SkeletonGroup animation="wave" synchronized>\r
      <SkeletonLine lines={1} width="200px" />\r
      <SkeletonLine lines={1} width="180px" />\r
      <SkeletonLine lines={1} width="160px" />\r
    </SkeletonGroup>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Re=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var Ee,Ge,Ae;R.parameters={...R.parameters,docs:{...(Ee=R.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <SkeletonGroup animation="pulse" stagger={150}>\r
      <SkeletonLine lines={1} width="100%" />\r
      <SkeletonLine lines={1} width="100%" />\r
      <SkeletonLine lines={1} width="100%" />\r
      <SkeletonLine lines={1} width="100%" />\r
    </SkeletonGroup>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ae=(Ge=R.parameters)==null?void 0:Ge.docs)==null?void 0:Ae.source}}};var qe,Ve,_e;E.parameters={...E.parameters,docs:{...(qe=E.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    maxWidth: '400px'
  }}>\r
      <SkeletonCircle size="lg" animation="wave" />\r
      <div style={{
      flex: 1
    }}>\r
        <SkeletonLine lines={2} fullWidth gap="8px" lastLineWidth="70%" animation="wave" />\r
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
}`,...(_e=(Ve=E.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var Ie,Ne,De;G.parameters={...G.parameters,docs:{...(Ie=G.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    overflow: 'hidden',
    maxWidth: '400px'
  }}>\r
      <SkeletonBlock aspectRatio="16/9" animation="wave" radius="none" />\r
      <div style={{
      padding: '20px'
    }}>\r
        <SkeletonLine lines={1} width="60%" animation="wave" height="24px" />\r
        <div style={{
        marginTop: '12px'
      }}>\r
          <SkeletonLine lines={3} fullWidth gap="8px" lastLineWidth="80%" animation="wave" />\r
        </div>\r
        <div style={{
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>\r
          <SkeletonCircle size="sm" animation="wave" />\r
          <SkeletonLine lines={1} width="120px" animation="wave" />\r
        </div>\r
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
}`,...(De=(Ne=G.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Pe,Me,Fe;A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '500px',
    padding: '20px',
    border: '1px solid #E5E7EB',
    borderRadius: '12px'
  }}>\r
      <SkeletonGroup animation="wave">\r
        <div>\r
          <SkeletonLine lines={1} width="100px" height="14px" animation="wave" />\r
          <div style={{
          marginTop: '8px'
        }}>\r
            <SkeletonBlock height="40px" animation="wave" />\r
          </div>\r
        </div>\r
        <div>\r
          <SkeletonLine lines={1} width="120px" height="14px" animation="wave" />\r
          <div style={{
          marginTop: '8px'
        }}>\r
            <SkeletonBlock height="40px" animation="wave" />\r
          </div>\r
        </div>\r
        <div>\r
          <SkeletonLine lines={1} width="80px" height="14px" animation="wave" />\r
          <div style={{
          marginTop: '8px'
        }}>\r
            <SkeletonBlock height="100px" animation="wave" />\r
          </div>\r
        </div>\r
        <div style={{
        marginTop: '8px'
      }}>\r
          <SkeletonBlock height="44px" width="150px" animation="wave" radius="md" />\r
        </div>\r
      </SkeletonGroup>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Fe=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ue,$e,He;q.parameters={...q.parameters,docs:{...(Ue=q.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '700px'
  }}>\r
      {[...Array(5)].map((_, i) => <div key={i} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      border: '1px solid #E5E7EB',
      borderRadius: '8px'
    }}>\r
          <SkeletonCircle size="sm" animation="wave" />\r
          <SkeletonLine lines={1} width="150px" animation="wave" />\r
          <SkeletonLine lines={1} width="100px" animation="wave" />\r
          <SkeletonLine lines={1} width="80px" animation="wave" style={{
        marginLeft: 'auto'
      }} />\r
        </div>)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(He=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Oe,Je,Ke;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px'
  }}>\r
      <SkeletonGroup animation="wave">\r
        {/* Header */}\r
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px'
      }}>\r
          <SkeletonCircle diameter="80px" animation="wave" />\r
          <div style={{
          flex: 1
        }}>\r
            <SkeletonLine lines={1} width="200px" height="24px" animation="wave" />\r
            <div style={{
            marginTop: '8px'
          }}>\r
              <SkeletonLine lines={2} fullWidth gap="6px" lastLineWidth="70%" animation="wave" />\r
            </div>\r
          </div>\r
        </div>\r
\r
        {/* Content blocks */}\r
        <SkeletonBlock height="120px" animation="wave" />\r
        <SkeletonLine lines={4} fullWidth gap="8px" lastLineWidth="50%" animation="wave" />\r
        <SkeletonBlock aspectRatio="21/9" animation="wave" />\r
      </SkeletonGroup>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ke=(Je=V.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const ma=["SingleTextLine","MultipleTextLines","TextLinesParagraph","CircleSmall","CircleMedium","CircleLarge","CircleCustomSize","BlockCard","BlockWithAspectRatio","BlockFullWidth","WaveAnimation","PulseAnimation","NoAnimation","GroupSynchronized","GroupStaggered","UserCardLoading","ArticleCardLoading","FormLoadingState","TableRowsLoading","MixedLayoutComplex"];export{G as ArticleCardLoading,L as BlockCard,C as BlockFullWidth,W as BlockWithAspectRatio,j as CircleCustomSize,f as CircleLarge,k as CircleMedium,S as CircleSmall,A as FormLoadingState,R as GroupStaggered,B as GroupSynchronized,V as MixedLayoutComplex,y as MultipleTextLines,T as NoAnimation,z as PulseAnimation,g as SingleTextLine,q as TableRowsLoading,w as TextLinesParagraph,E as UserCardLoading,b as WaveAnimation,ma as __namedExportsOrder,ca as default};
