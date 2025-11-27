import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as Le,r as Ee}from"./index-B2-qRKKC.js";import{A as x}from"./Avatar-CyudGiul.js";import{I as r}from"./Icon-CQ1yD0uX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-3Q35QAIm.js";const Fe="_chip_1y4tr_266",t={"dark-mode":"_dark-mode_1y4tr_245",chip:Fe,"chip--small":"_chip--small_1y4tr_280","chip--medium":"_chip--medium_1y4tr_287","chip--large":"_chip--large_1y4tr_294","chip--contained":"_chip--contained_1y4tr_301","chip--disabled":"_chip--disabled_1y4tr_306","chip--outline":"_chip--outline_1y4tr_315","chip--soft":"_chip--soft_1y4tr_330","chip--tertiary":"_chip--tertiary_1y4tr_343","chip--selected":"_chip--selected_1y4tr_362","chip--shadow":"_chip--shadow_1y4tr_366","chip--border":"_chip--border_1y4tr_370","chip-avatar":"_chip-avatar_1y4tr_380","chip-dot":"_chip-dot_1y4tr_401","chip-dot--small":"_chip-dot--small_1y4tr_408","chip-dot--medium":"_chip-dot--medium_1y4tr_413","chip-dot--large":"_chip-dot--large_1y4tr_418","chip-icon":"_chip-icon_1y4tr_423","chip-content":"_chip-content_1y4tr_442","chip-remove":"_chip-remove_1y4tr_448"},a=Le.memo(({id:C,content:fe,variant:n="contained",size:b="medium",leadingIcon:j,trailingIcon:S,avatar:z,dot:ye=!1,dotColor:xe,disabled:_=!1,selectable:Ce=!1,selected:_e=!1,allowBorder:R=!1,allowShadow:Ie=!1,backgroundColor:we,textColor:be,borderColor:je,className:A,onClick:T,onRemove:I,...Se})=>{const[D,ze]=Ee.useState(_e),Re=w=>{_||(Ce&&ze(!D),T&&T(w))},Ae=w=>{w.stopPropagation(),I&&!_&&I()},Te=t[`chip--${b}`],De=t[`chip--${n}`],o=[t.chip,Te,De];_&&o.push(t["chip--disabled"]),D&&o.push(t["chip--selected"]),Ie&&o.push(t["chip--shadow"]),(R||n==="outline")&&o.push(t["chip--border"]),A&&o.push(A);const We=t[`chip-dot--${b}`],Ne=we||(n==="contained"?"var(--color-primary-600)":n==="soft"?"var(--color-primary-100)":n==="outline"?"transparent":n==="tertiary"?"var(--color-gray-100)":"var(--color-gray-50)"),qe=be||(n==="contained"?"var(--color-white)":n==="soft"?"var(--color-primary-700)":n==="outline"?"var(--color-primary-600)":n==="tertiary"?"var(--color-gray-700)":"var(--color-gray-600)"),Be=je||(n==="outline"?"var(--color-primary-600)":"var(--color-gray-300)"),ke=xe||"var(--color-success-600)";return e.jsxs("div",{id:C,className:o.join(" "),style:{backgroundColor:Ne,color:qe,borderColor:R||n==="outline"?Be:void 0},onClick:Re,...Se,children:[z&&e.jsx("span",{className:t["chip-avatar"],children:z}),ye&&e.jsx("span",{className:`${t["chip-dot"]} ${We}`,style:{backgroundColor:ke}}),j&&e.jsx("span",{className:t["chip-icon"],children:j}),e.jsx("span",{className:t["chip-content"],children:fe}),I?e.jsx("span",{className:t["chip-remove"],onClick:Ae,children:"×"}):S&&e.jsx("span",{className:t["chip-icon"],children:S})]})});a.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{variant:{defaultValue:{value:'"contained"',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1},dot:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},selectable:{defaultValue:{value:"false",computed:!1},required:!1},selected:{defaultValue:{value:"false",computed:!1},required:!1},allowBorder:{defaultValue:{value:"false",computed:!1},required:!1},allowShadow:{defaultValue:{value:"false",computed:!1},required:!1}}};const $e={title:"DataDisplay/Chip",component:a,tags:["autodocs"],parameters:{docs:{source:{type:"code"}}},argTypes:{size:{control:"radio",options:["small","medium","large"]},variant:{control:"radio",options:["outline","contained","soft","tertiary"]},backgroundColor:{control:"color"},textColor:{control:"color"},dotColor:{control:"color"},borderColor:{control:"color"},dot:{control:"boolean"},disabled:{control:"boolean"},selectable:{control:"boolean"},selected:{control:"boolean"},allowBorder:{control:"boolean"},allowShadow:{control:"boolean"},leadingIcon:{table:{disable:!0}},trailingIcon:{table:{disable:!0}},avatar:{table:{disable:!0}},onRemove:{table:{disable:!0}},onClick:{table:{disable:!0}}}},i=C=>e.jsx(a,{...C});i.args={content:"Chip",variant:"contained",size:"medium"};const d=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Outline",variant:"outline"}),e.jsx(a,{content:"Contained",variant:"contained"}),e.jsx(a,{content:"Soft",variant:"soft"}),e.jsx(a,{content:"Tertiary",variant:"tertiary"})]}),p=()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{content:"Small",size:"small",variant:"contained"}),e.jsx(a,{content:"Medium",size:"medium",variant:"contained"}),e.jsx(a,{content:"Large",size:"large",variant:"contained"})]}),m=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Active",dot:!0,variant:"contained"}),e.jsx(a,{content:"Online",dot:!0,dotColor:"var(--color-success-600)",variant:"soft"}),e.jsx(a,{content:"Offline",dot:!0,dotColor:"var(--color-gray-500)",variant:"outline"})]}),s=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"John Doe",avatar:e.jsx(x,{initials:"JD",size:"xs",shape:"circle"}),variant:"contained"}),e.jsx(a,{content:"Alice Smith",avatar:e.jsx(x,{initials:"AS",size:"xs",shape:"circle"}),variant:"soft"}),e.jsx(a,{content:"Bob Lee",avatar:e.jsx(x,{initials:"BL",size:"xs",shape:"circle"}),variant:"outline"})]});s.parameters={docs:{source:{code:`<Chip 
  content="John Doe" 
  avatar={<Avatar initials="JD" size="xs" shape="circle" />} 
  variant="contained" 
/>
<Chip 
  content="Alice Smith" 
  avatar={<Avatar initials="AS" size="xs" shape="circle" />} 
  variant="soft" 
/>
<Chip 
  content="Bob Lee" 
  avatar={<Avatar initials="BL" size="xs" shape="circle" />} 
  variant="outline" 
/>`}}};const l=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Add",leadingIcon:e.jsx(r,{name:"AddIcon",variant:"regular",size:16}),variant:"contained"}),e.jsx(a,{content:"Delete",trailingIcon:e.jsx(r,{name:"DeleteIcon",variant:"regular",size:16}),variant:"soft"}),e.jsx(a,{content:"Save",leadingIcon:e.jsx(r,{name:"FolderFilledIcon",variant:"regular",size:16}),trailingIcon:e.jsx(r,{name:"ArrowRightNormalIcon",variant:"regular",size:16}),variant:"outline"})]});l.parameters={docs:{source:{code:`<Chip 
  content="Add" 
  leadingIcon={<Icon name="AddIcon" variant="regular" size={16} />} 
  variant="contained" 
/>
<Chip 
  content="Delete" 
  trailingIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} 
  variant="soft" 
/>
<Chip
  content="Save"
  leadingIcon={<Icon name="FolderFilledIcon" variant="regular" size={16} />}
  trailingIcon={<Icon name="ArrowRightNormalIcon" variant="regular" size={16} />}
  variant="outline"
/>`}}};const u=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Click me",selectable:!0,variant:"contained"}),e.jsx(a,{content:"Toggle",selectable:!0,variant:"soft"}),e.jsx(a,{content:"Select",selectable:!0,variant:"outline"})]}),v=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Remove me",onRemove:()=>alert("Removed"),variant:"contained"}),e.jsx(a,{content:"Closable",onRemove:()=>console.log("closed"),variant:"soft"}),e.jsx(a,{content:"Delete",onRemove:()=>{},variant:"outline"})]}),h=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Disabled",disabled:!0,variant:"contained"}),e.jsx(a,{content:"No action",disabled:!0,variant:"soft"}),e.jsx(a,{content:"Inactive",disabled:!0,dot:!0,variant:"outline"})]}),g=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:300},children:[e.jsx(a,{content:"This is a very long chip content that should handle text gracefully",variant:"contained"}),e.jsx(a,{content:"Another long text example with multiple words",variant:"soft",dot:!0})]}),f=()=>e.jsx(a,{content:"Custom",variant:"contained",backgroundColor:"var(--color-danger-600)",textColor:"var(--color-white)",dotColor:"var(--color-warning-500)",borderColor:"var(--color-danger-700)",dot:!0,allowBorder:!0,allowShadow:!0}),y=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Shadow",allowShadow:!0,variant:"contained"}),e.jsx(a,{content:"Border",allowBorder:!0,variant:"soft"}),e.jsx(a,{content:"Both",allowShadow:!0,allowBorder:!0,variant:"outline"})]}),c=()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{content:"Verified",leadingIcon:e.jsx(r,{name:"CheckSingleIcon",variant:"regular",size:14}),dot:!0,dotColor:"var(--color-success-600)",variant:"soft",size:"small"}),e.jsx(a,{content:"Admin",avatar:e.jsx(x,{initials:"AD",size:"xs",shape:"circle"}),variant:"contained",size:"medium"}),e.jsx(a,{content:"Premium",leadingIcon:e.jsx(r,{name:"HeartFilledIcon",variant:"regular",size:18}),trailingIcon:e.jsx(r,{name:"HeartOutlineIcon",variant:"regular",size:18}),variant:"contained",size:"large"}),e.jsx(a,{content:"Draft",leadingIcon:e.jsx(r,{name:"FileFilledIcon",variant:"regular",size:16}),onRemove:()=>{},variant:"outline"})]});c.parameters={docs:{source:{code:`<Chip
  content="Verified"
  leadingIcon={<Icon name="CheckSingleIcon" variant="regular" size={14} />}
  dot
  dotColor="var(--color-success-600)"
  variant="soft"
  size="small"
/>
<Chip 
  content="Admin" 
  avatar={<Avatar initials="AD" size="xs" shape="circle" />} 
  variant="contained" 
  size="medium" 
/>
<Chip
  content="Premium"
  leadingIcon={<Icon name="HeartFilledIcon" variant="regular" size={18} />}
  trailingIcon={<Icon name="HeartOutlineIcon" variant="regular" size={18} />}
  variant="contained"
  size="large"
/>
<Chip
  content="Draft"
  leadingIcon={<Icon name="FileFilledIcon" variant="regular" size={16} />}
  onRemove={() => {}}
  variant="outline"
/>`}}};i.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "outline"
| "contained"
| "soft"
| "tertiary"`,elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"contained"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"tertiary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dot:{required:!1,tsType:{name:"boolean"},description:""},dotColor:{required:!1,tsType:{name:"string"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},allowBorder:{required:!1,tsType:{name:"boolean"},description:""},allowShadow:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};d.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};p.__docgenInfo={description:"",methods:[],displayName:"AllSizes"};m.__docgenInfo={description:"",methods:[],displayName:"WithDot"};s.__docgenInfo={description:"",methods:[],displayName:"WithAvatar"};l.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};u.__docgenInfo={description:"",methods:[],displayName:"Selectable"};v.__docgenInfo={description:"",methods:[],displayName:"Removable"};h.__docgenInfo={description:"",methods:[],displayName:"Disabled"};g.__docgenInfo={description:"",methods:[],displayName:"LongContent"};f.__docgenInfo={description:"",methods:[],displayName:"ColorControl"};y.__docgenInfo={description:"",methods:[],displayName:"WithShadowAndBorder"};c.__docgenInfo={description:"",methods:[],displayName:"RealWorldUsage"};var W,N,q;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:"(args: ChipProps) => <Chip {...args} />",...(q=(N=i.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var B,k,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Outline" variant="outline" />\r
    <Chip content="Contained" variant="contained" />\r
    <Chip content="Soft" variant="soft" />\r
    <Chip content="Tertiary" variant="tertiary" />\r
  </div>`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var E,F,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  alignItems: "center"
}}>\r
    <Chip content="Small" size="small" variant="contained" />\r
    <Chip content="Medium" size="medium" variant="contained" />\r
    <Chip content="Large" size="large" variant="contained" />\r
  </div>`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,H,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Active" dot variant="contained" />\r
    <Chip content="Online" dot dotColor="var(--color-success-600)" variant="soft" />\r
    <Chip content="Offline" dot dotColor="var(--color-gray-500)" variant="outline" />\r
  </div>`,...(O=(H=m.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var P,J,$;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="John Doe" avatar={<Avatar initials="JD" size="xs" shape="circle" />} variant="contained" />\r
    <Chip content="Alice Smith" avatar={<Avatar initials="AS" size="xs" shape="circle" />} variant="soft" />\r
    <Chip content="Bob Lee" avatar={<Avatar initials="BL" size="xs" shape="circle" />} variant="outline" />\r
  </div>`,...($=(J=s.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var U,G,K;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Add" leadingIcon={<Icon name="AddIcon" variant="regular" size={16} />} variant="contained" />\r
    <Chip content="Delete" trailingIcon={<Icon name="DeleteIcon" variant="regular" size={16} />} variant="soft" />\r
    <Chip content="Save" leadingIcon={<Icon name="FolderFilledIcon" variant="regular" size={16} />} trailingIcon={<Icon name="ArrowRightNormalIcon" variant="regular" size={16} />} variant="outline" />\r
  </div>`,...(K=(G=l.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Click me" selectable variant="contained" />\r
    <Chip content="Toggle" selectable variant="soft" />\r
    <Chip content="Select" selectable variant="outline" />\r
  </div>`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Remove me" onRemove={() => alert("Removed")} variant="contained" />\r
    <Chip content="Closable" onRemove={() => console.log("closed")} variant="soft" />\r
    <Chip content="Delete" onRemove={() => {}} variant="outline" />\r
  </div>`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Disabled" disabled variant="contained" />\r
    <Chip content="No action" disabled variant="soft" />\r
    <Chip content="Inactive" disabled dot variant="outline" />\r
  </div>`,...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,se;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 300
}}>\r
    <Chip content="This is a very long chip content that should handle text gracefully" variant="contained" />\r
    <Chip content="Another long text example with multiple words" variant="soft" dot />\r
  </div>`,...(se=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:'() => <Chip content="Custom" variant="contained" backgroundColor="var(--color-danger-600)" textColor="var(--color-white)" dotColor="var(--color-warning-500)" borderColor="var(--color-danger-700)" dot allowBorder allowShadow />',...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,ue;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Shadow" allowShadow variant="contained" />\r
    <Chip content="Border" allowBorder variant="soft" />\r
    <Chip content="Both" allowShadow allowBorder variant="outline" />\r
  </div>`,...(ue=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ve,he,ge;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: 12,
  flexWrap: "wrap"
}}>\r
    <Chip content="Verified" leadingIcon={<Icon name="CheckSingleIcon" variant="regular" size={14} />} dot dotColor="var(--color-success-600)" variant="soft" size="small" />\r
    <Chip content="Admin" avatar={<Avatar initials="AD" size="xs" shape="circle" />} variant="contained" size="medium" />\r
    <Chip content="Premium" leadingIcon={<Icon name="HeartFilledIcon" variant="regular" size={18} />} trailingIcon={<Icon name="HeartOutlineIcon" variant="regular" size={18} />} variant="contained" size="large" />\r
    <Chip content="Draft" leadingIcon={<Icon name="FileFilledIcon" variant="regular" size={16} />} onRemove={() => {}} variant="outline" />\r
  </div>`,...(ge=(he=c.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Ue=["Basic","AllVariants","AllSizes","WithDot","WithAvatar","WithIcons","Selectable","Removable","Disabled","LongContent","ColorControl","WithShadowAndBorder","RealWorldUsage"];export{p as AllSizes,d as AllVariants,i as Basic,f as ColorControl,h as Disabled,g as LongContent,c as RealWorldUsage,v as Removable,u as Selectable,s as WithAvatar,m as WithDot,l as WithIcons,y as WithShadowAndBorder,Ue as __namedExportsOrder,$e as default};
