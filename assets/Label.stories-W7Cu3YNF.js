import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{L as r}from"./Label-KEzZ_8lI.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";const A={title:"DataDisplay/Label",component:r,tags:["autodocs"],parameters:{docs:{source:{type:"code"}}},argTypes:{size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"},required:{control:"boolean"},children:{control:"text"}}},i=E=>e.jsx(r,{...E});i.args={children:"Label Text",size:"md"};i.parameters={docs:{source:{code:"<Label>Label Text</Label>"}}};const a=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{size:"sm",children:"Small Label"}),e.jsx(r,{size:"md",children:"Medium Label"}),e.jsx(r,{size:"lg",children:"Large Label"})]});a.parameters={docs:{source:{code:`<Label size="sm">Small Label</Label>
<Label size="md">Medium Label</Label>
<Label size="lg">Large Label</Label>`}}};const d=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{required:!0,children:"Required Field"}),e.jsx(r,{required:!0,size:"lg",children:"Large Required Field"})]});d.parameters={docs:{source:{code:`<Label required>Required Field</Label>
<Label required size="lg">Large Required Field</Label>`}}};const s=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{disabled:!0,children:"Disabled Label"}),e.jsx(r,{disabled:!0,required:!0,children:"Disabled Required Label"})]});s.parameters={docs:{source:{code:`<Label disabled>Disabled Label</Label>
<Label disabled required>Disabled Required Label</Label>`}}};const l=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(r,{htmlFor:"username",children:"Username"}),e.jsx("input",{id:"username",type:"text",placeholder:"Enter username",style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}})]});l.parameters={docs:{source:{code:`<Label htmlFor="username">Username</Label>
<input id="username" type="text" placeholder="Enter username" />`}}};const t=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(r,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter email",required:!0,style:{padding:"8px",borderRadius:"4px",border:"1px solid #ccc"}})]});t.parameters={docs:{source:{code:`<Label htmlFor="email" required>Email Address</Label>
<input id="email" type="email" placeholder="Enter email" required />`}}};const o=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"name",required:!0,size:"md",children:"Full Name"}),e.jsx("input",{id:"name",type:"text",style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc",marginTop:"4px"}})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"email-form",required:!0,size:"md",children:"Email"}),e.jsx("input",{id:"email-form",type:"email",style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc",marginTop:"4px"}})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"bio",size:"md",children:"Bio"}),e.jsx("textarea",{id:"bio",rows:3,style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc",marginTop:"4px"}})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"country",disabled:!0,size:"md",children:"Country"}),e.jsx("input",{id:"country",type:"text",disabled:!0,value:"United States",style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #ccc",marginTop:"4px"}})]})]});o.parameters={docs:{source:{code:`<div>
  <Label htmlFor="name" required size="md">Full Name</Label>
  <input id="name" type="text" />
</div>
<div>
  <Label htmlFor="email" required size="md">Email</Label>
  <input id="email" type="email" />
</div>
<div>
  <Label htmlFor="bio" size="md">Bio</Label>
  <textarea id="bio" rows={3} />
</div>
<div>
  <Label htmlFor="country" disabled size="md">Country</Label>
  <input id="country" type="text" disabled value="United States" />
</div>`}}};i.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Label size"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required"}}};a.__docgenInfo={description:"",methods:[],displayName:"AllSizes"};d.__docgenInfo={description:"",methods:[],displayName:"Required"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};l.__docgenInfo={description:"",methods:[],displayName:"WithInput"};t.__docgenInfo={description:"",methods:[],displayName:"WithRequiredInput"};o.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var p,c,n;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"(args: LabelProps) => <Label {...args} />",...(n=(c=i.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,u,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}}>\r
    <Label size="sm">Small Label</Label>\r
    <Label size="md">Medium Label</Label>\r
    <Label size="lg">Large Label</Label>\r
  </div>`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,L,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}}>\r
    <Label required>Required Field</Label>\r
    <Label required size="lg">Large Required Field</Label>\r
  </div>`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}}>\r
    <Label disabled>Disabled Label</Label>\r
    <Label disabled required>Disabled Required Label</Label>\r
  </div>`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var q,v,R;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}}>\r
    <Label htmlFor="username">Username</Label>\r
    <input id="username" type="text" placeholder="Enter username" style={{
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  }} />\r
  </div>`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var j,z,F;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}}>\r
    <Label htmlFor="email" required>Email Address</Label>\r
    <input id="email" type="email" placeholder="Enter email" required style={{
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  }} />\r
  </div>`,...(F=(z=t.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var D,S,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  maxWidth: 400
}}>\r
    <div>\r
      <Label htmlFor="name" required size="md">Full Name</Label>\r
      <input id="name" type="text" style={{
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginTop: '4px'
    }} />\r
    </div>\r
    <div>\r
      <Label htmlFor="email-form" required size="md">Email</Label>\r
      <input id="email-form" type="email" style={{
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginTop: '4px'
    }} />\r
    </div>\r
    <div>\r
      <Label htmlFor="bio" size="md">Bio</Label>\r
      <textarea id="bio" rows={3} style={{
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginTop: '4px'
    }} />\r
    </div>\r
    <div>\r
      <Label htmlFor="country" disabled size="md">Country</Label>\r
      <input id="country" type="text" disabled value="United States" style={{
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      marginTop: '4px'
    }} />\r
    </div>\r
  </div>`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const B=["Basic","AllSizes","Required","Disabled","WithInput","WithRequiredInput","FormExample"];export{a as AllSizes,i as Basic,s as Disabled,o as FormExample,d as Required,l as WithInput,t as WithRequiredInput,B as __namedExportsOrder,A as default};
