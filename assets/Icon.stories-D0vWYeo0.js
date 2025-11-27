import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{I as a}from"./Icon-fxUjVhc4.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B0WUkk9i.js";const N={title:"DataDisplay/Icon",component:a,tags:["autodocs"],argTypes:{name:{control:"text"},variant:{control:{type:"radio"},options:["regular","bold","solid"]},size:{control:"number"},color:{control:"color"},ariaLabel:{control:"text"},lazy:{control:"boolean"}}},r=j=>e.jsx(a,{...j});r.args={name:"AddCircleIcon",variant:"regular",size:32,ariaLabel:"Add"};r.parameters={docs:{source:{code:'<Icon name="AddCircleIcon" variant="regular" size={32} ariaLabel="Add" />'}}};const i=()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{name:"AddCircleIcon",variant:"regular",size:32,ariaLabel:"Add"}),e.jsx(a,{name:"AddCircleIcon",variant:"bold",size:32,ariaLabel:"Add"}),e.jsx(a,{name:"AddCircleIcon",variant:"solid",size:32,ariaLabel:"Add"})]});i.parameters={docs:{source:{code:`<Icon name="AddCircleIcon" variant="regular" />
<Icon name="AddCircleIcon" variant="bold" />
<Icon name="AddCircleIcon" variant="solid" />`}}};const n=()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"end"},children:[e.jsx(a,{name:"AddCircleIcon",size:16,ariaLabel:"Add"}),e.jsx(a,{name:"AddCircleIcon",size:24,ariaLabel:"Add"}),e.jsx(a,{name:"AddCircleIcon",size:32,ariaLabel:"Add"}),e.jsx(a,{name:"AddCircleIcon",size:48,ariaLabel:"Add"})]});n.parameters={docs:{source:{code:'<Icon name="AddCircleIcon" size={16} /> // ...'}}};const s=()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs("div",{style:{color:"var(--color-primary-600)",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(a,{name:"AddCircleIcon",size:40,ariaLabel:"Add"}),e.jsx("span",{style:{fontSize:12},children:"Inherited"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(a,{name:"AddCircleIcon",size:40,color:"#ff4d4f",ariaLabel:"Add"}),e.jsx("span",{style:{fontSize:12},children:"Custom #ff4d4f"})]}),e.jsxs("div",{style:{background:"#111",padding:8,borderRadius:6,color:"white",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(a,{name:"AddCircleIcon",size:40,ariaLabel:"Add"}),e.jsx("span",{style:{fontSize:12},children:"Dark BG inherit"})]})]});s.parameters={docs:{source:{code:'<Icon name="AddCircleIcon" /> // inherits color'}}};const o=()=>e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsx(a,{name:"AddCircleIcon",variant:"bold",size:40,lazy:!0,fallback:e.jsx("span",{children:"Loading…"}),ariaLabel:"Add"}),e.jsx(a,{name:"AddCircleIcon",variant:"solid",size:40,lazy:!0,fallback:e.jsx("span",{children:"Loading…"}),ariaLabel:"Add"})]});o.parameters={docs:{source:{code:'<Icon name="AddCircleIcon" lazy fallback={<span>Loading…" />'}}};const d=()=>e.jsxs("div",{children:[e.jsx(a,{name:"DoesNotExistIcon",size:40,ariaLabel:"Missing"}),e.jsx("span",{style:{fontSize:12},children:"Should warn & render nothing."})]});d.parameters={docs:{source:{code:'<Icon name="DoesNotExistIcon" />'}}};r.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{name:{required:!0,tsType:{name:"string"},description:'Base icon name without variant suffix (e.g. "AddCircleIcon")'},variant:{required:!1,tsType:{name:"union",raw:"'regular' | 'bold' | 'solid'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'solid'"}]},description:"Visual weight / style variant"},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Pixel size or any CSS size value (applies to width & height)"},color:{required:!1,tsType:{name:"string"},description:"Fill (or stroke) color override"},ariaLabel:{required:!1,tsType:{name:"string"},description:'Accessible label (sets role="img"). If omitted the icon is decorative.'},title:{required:!1,tsType:{name:"string"},description:"Optional title element for tooltip semantics"},lazy:{required:!1,tsType:{name:"boolean"},description:"Lazy load the icon component via dynamic import"},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Fallback node while lazy icon loads"},as:{required:!1,tsType:{name:"ElementType"},description:"Render as a different wrapper element"}}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};n.__docgenInfo={description:"",methods:[],displayName:"Sizes"};s.__docgenInfo={description:"",methods:[],displayName:"Colors"};o.__docgenInfo={description:"",methods:[],displayName:"LazyLoading"};d.__docgenInfo={description:"",methods:[],displayName:"UnknownIconGracefulFail"};var l,c,t;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"(args: IconProps) => <Icon {...args} />",...(t=(c=r.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var m,p,I;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 24,
  alignItems: 'center'
}}>\r
    <Icon name="AddCircleIcon" variant="regular" size={32} ariaLabel="Add" />\r
    <Icon name="AddCircleIcon" variant="bold" size={32} ariaLabel="Add" />\r
    <Icon name="AddCircleIcon" variant="solid" size={32} ariaLabel="Add" />\r
  </div>`,...(I=(p=i.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var u,f,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 16,
  alignItems: 'end'
}}>\r
    <Icon name="AddCircleIcon" size={16} ariaLabel="Add" />\r
    <Icon name="AddCircleIcon" size={24} ariaLabel="Add" />\r
    <Icon name="AddCircleIcon" size={32} ariaLabel="Add" />\r
    <Icon name="AddCircleIcon" size={48} ariaLabel="Add" />\r
  </div>`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,A,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 24
}}>\r
    <div style={{
    color: 'var(--color-primary-600)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>\r
      <Icon name="AddCircleIcon" size={40} ariaLabel="Add" />\r
      <span style={{
      fontSize: 12
    }}>Inherited</span>\r
    </div>\r
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>\r
      <Icon name="AddCircleIcon" size={40} color="#ff4d4f" ariaLabel="Add" />\r
      <span style={{
      fontSize: 12
    }}>Custom #ff4d4f</span>\r
    </div>\r
    <div style={{
    background: '#111',
    padding: 8,
    borderRadius: 6,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>\r
      <Icon name="AddCircleIcon" size={40} ariaLabel="Add" />\r
      <span style={{
      fontSize: 12
    }}>Dark BG inherit</span>\r
    </div>\r
  </div>`,...(x=(A=s.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var b,z,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 32
}}>\r
    <Icon name="AddCircleIcon" variant="bold" size={40} lazy fallback={<span>Loading…</span>} ariaLabel="Add" />\r
    <Icon name="AddCircleIcon" variant="solid" size={40} lazy fallback={<span>Loading…</span>} ariaLabel="Add" />\r
  </div>`,...(v=(z=o.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var L,h,C;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div>\r
    <Icon name="DoesNotExistIcon" size={40} ariaLabel="Missing" />\r
    <span style={{
    fontSize: 12
  }}>Should warn & render nothing.</span>\r
  </div>`,...(C=(h=d.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const T=["Basic","Variants","Sizes","Colors","LazyLoading","UnknownIconGracefulFail"];export{r as Basic,s as Colors,o as LazyLoading,n as Sizes,d as UnknownIconGracefulFail,i as Variants,T as __namedExportsOrder,N as default};
