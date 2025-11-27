import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{B as n}from"./Button-Sb-dFZaJ.js";import{I as e}from"./Icon-CQ1yD0uX.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";import"./iframe-3Q35QAIm.js";const aa={title:"Inputs/Button",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},startIcon:{control:!1},endIcon:{control:!1}}},r={args:{label:"Button"}},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Contained",variant:"contained"}),a.jsx(n,{label:"Outlined",variant:"outlined"}),a.jsx(n,{label:"Soft",variant:"soft"}),a.jsx(n,{label:"Tertiary",variant:"tertiary"})]})},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Small",size:"sm"}),a.jsx(n,{label:"Medium",size:"md"}),a.jsx(n,{label:"Large",size:"lg"})]})},s={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Add",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16})}),a.jsx(n,{label:"Delete",startIcon:a.jsx(e,{name:"DeleteIcon",variant:"regular",size:16}),variant:"outlined",tone:"error"}),a.jsx(n,{label:"Download",startIcon:a.jsx(e,{name:"DownloadIcon",variant:"regular",size:16}),variant:"soft"})]}),a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Upload",endIcon:a.jsx(e,{name:"UploadIcon",variant:"regular",size:16})}),a.jsx(n,{label:"Save",endIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),variant:"contained",tone:"success"}),a.jsx(n,{label:"Remove",endIcon:a.jsx(e,{name:"DeleteIcon",variant:"regular",size:16}),variant:"tertiary",tone:"error"})]}),a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Process",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),endIcon:a.jsx(e,{name:"DownloadIcon",variant:"regular",size:16})}),a.jsx(n,{startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),"aria-label":"Add item"}),a.jsx(n,{endIcon:a.jsx(e,{name:"DeleteIcon",variant:"regular",size:16}),"aria-label":"Delete item",variant:"outlined"})]})]}),parameters:{docs:{source:{code:`// Leading icon (startIcon)
<Button label="Add" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} />
<Button label="Delete" startIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} variant="outlined" tone="error" />

// Trailing icon (endIcon)
<Button label="Upload" endIcon={<Icon name="UploadIcon" variant="regular" size={16} />} />
<Button label="Save" endIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="contained" tone="success" />

// Both icons
<Button label="Process" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} endIcon={<Icon name="DownloadIcon" variant="regular" size={16} />} />

// Icon only (no label)
<Button startIcon={<Icon name="AddIcon" variant="regular" size={16} />} aria-label="Add item" />
<Button endIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} aria-label="Delete item" variant="outlined" />`,language:"tsx",type:"code"}}}},l={args:{label:"Loading...",loading:!0}},i={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Contained",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),variant:"contained"}),a.jsx(n,{label:"Outlined",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),variant:"outlined"}),a.jsx(n,{label:"Soft",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),variant:"soft"}),a.jsx(n,{label:"Tertiary",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),variant:"tertiary"})]})}),parameters:{docs:{description:{story:"Icons work with all button variants."}}}},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[a.jsx(n,{label:"Small",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),size:"sm"}),a.jsx(n,{label:"Medium",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),size:"md"}),a.jsx(n,{label:"Large",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),size:"lg"})]}),parameters:{docs:{description:{story:"Icons automatically scale with button size."}}}},d={render:()=>a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{label:"Default",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),tone:"default"}),a.jsx(n,{label:"Success",startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),tone:"success"}),a.jsx(n,{label:"Warning",startIcon:a.jsx(e,{name:"UploadIcon",variant:"regular",size:16}),tone:"warning"}),a.jsx(n,{label:"Error",startIcon:a.jsx(e,{name:"DeleteIcon",variant:"regular",size:16}),tone:"error"})]}),parameters:{docs:{description:{story:"Icons inherit button color based on tone."}}}},u={render:()=>a.jsxs("div",{style:{display:"flex",gap:16},children:[a.jsx(n,{startIcon:a.jsx(e,{name:"AddIcon",variant:"regular",size:16}),"aria-label":"Add"}),a.jsx(n,{startIcon:a.jsx(e,{name:"TrashIcon",variant:"regular",size:16}),"aria-label":"Delete",variant:"outlined",tone:"error"}),a.jsx(n,{startIcon:a.jsx(e,{name:"DownloadIcon",variant:"regular",size:16}),"aria-label":"Download",variant:"soft"}),a.jsx(n,{startIcon:a.jsx(e,{name:"UploadIcon",variant:"regular",size:16}),"aria-label":"Upload",variant:"tertiary"})]}),parameters:{docs:{description:{story:"Icon-only buttons without labels. Always provide aria-label for accessibility."},source:{code:`<Button startIcon={<Icon name="AddIcon" variant="regular" size={16} />} aria-label="Add" />
<Button startIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} aria-label="Delete" variant="outlined" tone="error" />`,language:"tsx",type:"code"}}}},I={args:{label:"Disabled",disabled:!0}},m={args:{label:"Full Width",fullWidth:!0},parameters:{docs:{source:{code:'<Button label="Full Width" fullWidth />',language:"tsx",type:"code"}}}};var v,g,p;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var b,x,z;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>\r
      <Button label="Contained" variant="contained" />\r
      <Button label="Outlined" variant="outlined" />\r
      <Button label="Soft" variant="soft" />\r
      <Button label="Tertiary" variant="tertiary" />\r
    </div>
}`,...(z=(x=t.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var y,j,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>\r
      <Button label="Small" size="sm" />\r
      <Button label="Medium" size="md" />\r
      <Button label="Large" size="lg" />\r
    </div>
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var f,A,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <div style={{
      display: "flex",
      gap: 16
    }}>\r
        <Button label="Add" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} />\r
        <Button label="Delete" startIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} variant="outlined" tone="error" />\r
        <Button label="Download" startIcon={<Icon name="DownloadIcon" variant="regular" size={16} />} variant="soft" />\r
      </div>\r
      <div style={{
      display: "flex",
      gap: 16
    }}>\r
        <Button label="Upload" endIcon={<Icon name="UploadIcon" variant="regular" size={16} />} />\r
        <Button label="Save" endIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="contained" tone="success" />\r
        <Button label="Remove" endIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} variant="tertiary" tone="error" />\r
      </div>\r
      <div style={{
      display: "flex",
      gap: 16
    }}>\r
        <Button label="Process" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} endIcon={<Icon name="DownloadIcon" variant="regular" size={16} />} />\r
        <Button startIcon={<Icon name="AddIcon" variant="regular" size={16} />} aria-label="Add item" />\r
        <Button endIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} aria-label="Delete item" variant="outlined" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`// Leading icon (startIcon)
<Button label="Add" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} />
<Button label="Delete" startIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} variant="outlined" tone="error" />

// Trailing icon (endIcon)
<Button label="Upload" endIcon={<Icon name="UploadIcon" variant="regular" size={16} />} />
<Button label="Save" endIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="contained" tone="success" />

// Both icons
<Button label="Process" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} endIcon={<Icon name="DownloadIcon" variant="regular" size={16} />} />

// Icon only (no label)
<Button startIcon={<Icon name="AddIcon" variant="regular" size={16} />} aria-label="Add item" />
<Button endIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} aria-label="Delete item" variant="outlined" />\`,
        language: "tsx",
        type: "code"
      }
    }
  }
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var h,S,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Loading...",
    loading: true
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var W,U,T;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <div style={{
      display: "flex",
      gap: 16
    }}>\r
        <Button label="Contained" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="contained" />\r
        <Button label="Outlined" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="outlined" />\r
        <Button label="Soft" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="soft" />\r
        <Button label="Tertiary" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="tertiary" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icons work with all button variants."
      }
    }
  }
}`,...(T=(U=i.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var L,O,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>\r
      <Button label="Small" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} size="sm" />\r
      <Button label="Medium" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} size="md" />\r
      <Button label="Large" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} size="lg" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icons automatically scale with button size."
      }
    }
  }
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var C,k,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>\r
      <Button label="Default" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} tone="default" />\r
      <Button label="Success" startIcon={<Icon name="AddIcon" variant="regular" size={16} />} tone="success" />\r
      <Button label="Warning" startIcon={<Icon name="UploadIcon" variant="regular" size={16} />} tone="warning" />\r
      <Button label="Error" startIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} tone="error" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icons inherit button color based on tone."
      }
    }
  }
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var M,P,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>\r
      <Button startIcon={<Icon name="AddIcon" variant="regular" size={16} />} aria-label="Add" />\r
      <Button startIcon={<Icon name="TrashIcon" variant="regular" size={16} />} aria-label="Delete" variant="outlined" tone="error" />\r
      <Button startIcon={<Icon name="DownloadIcon" variant="regular" size={16} />} aria-label="Download" variant="soft" />\r
      <Button startIcon={<Icon name="UploadIcon" variant="regular" size={16} />} aria-label="Upload" variant="tertiary" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons without labels. Always provide aria-label for accessibility."
      },
      source: {
        code: \`<Button startIcon={<Icon name="AddIcon" variant="regular" size={16} />} aria-label="Add" />
<Button startIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} aria-label="Delete" variant="outlined" tone="error" />\`,
        language: "tsx",
        type: "code"
      }
    }
  }
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var R,_,q;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    disabled: true
  }
}`,...(q=(_=I.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Full Width",
    fullWidth: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button label=\\"Full Width\\" fullWidth />\`,
        language: "tsx",
        type: "code"
      }
    }
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const na=["Basic","Variants","Sizes","WithIcons","Loading","IconWithVariants","IconWithSizes","IconWithTones","IconOnly","Disabled","FullWidth"];export{r as Basic,I as Disabled,m as FullWidth,u as IconOnly,c as IconWithSizes,d as IconWithTones,i as IconWithVariants,l as Loading,o as Sizes,t as Variants,s as WithIcons,na as __namedExportsOrder,aa as default};
