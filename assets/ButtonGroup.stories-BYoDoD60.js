import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as l}from"./index-B2-qRKKC.js";import{B as Oe}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";const ke=l.createContext(null),we=()=>{const r=l.useContext(ke);if(!r)throw new Error("ButtonGroupItem must be used within a ButtonGroup");return r},Me=r=>{const{value:g,defaultValue:I,onChange:f,exclusive:p,multiSelect:d,orientation:j,variant:h,size:x,disabled:o,fullWidth:b}=r,[y,S]=l.useState(()=>I!==void 0?I:d?[]:null),m=g!==void 0,i=m?g:y,[B,V]=l.useState([]),[_,k]=l.useState(null),v=l.useCallback(a=>{V(u=>u.includes(a)?u:[...u,a])},[]),O=l.useCallback(a=>{V(u=>u.filter(s=>s!==a))},[]),c=l.useCallback(a=>{let u;if(p)u=i===a?null:a;else if(d){const s=Array.isArray(i)?i:[];s.includes(a)?u=s.filter(C=>C!==a):u=[...s,a]}else{const s=Array.isArray(i)?i:[];s.includes(a)?u=s.filter(C=>C!==a):u=[...s,a]}m||S(u),f&&f(u)},[i,p,d,m,f]);return l.useEffect(()=>{_===null&&B.length>0&&k(B[0])},[B,_]),l.useMemo(()=>({value:i??null,onChange:c,orientation:j,variant:h,size:x,exclusive:p,multiSelect:d,disabled:o,fullWidth:b,registeredValues:B,registerValue:v,unregisterValue:O,focusedValue:_,setFocusedValue:k}),[i,c,j,h,x,p,d,o,b,B,v,O,_])},De="_buttonGroup_1t4zr_267",Le="_horizontal_1t4zr_274",Ee="_segmented_1t4zr_279",Re="_groupItem_1t4zr_279",Te="_selected_1t4zr_297",We="_vertical_1t4zr_309",qe="_fullWidth_1t4zr_344",Ae="_disabled_1t4zr_354",Fe="_contained_1t4zr_376",Pe="_outlined_1t4zr_389",Ne="_soft_1t4zr_401",Ue="_tertiary_1t4zr_412",He="_iconOnly_1t4zr_422",Ke="_sizeSm_1t4zr_427",Je="_sizeLg_1t4zr_430",G={"dark-mode":"_dark-mode_1t4zr_245",buttonGroup:De,horizontal:Le,segmented:Ee,groupItem:Re,selected:Te,vertical:We,fullWidth:qe,disabled:Ae,contained:Fe,outlined:Pe,soft:Ne,tertiary:Ue,iconOnly:He,sizeSm:Ke,sizeLg:Je},n=({id:r,value:g,defaultValue:I,onChange:f,orientation:p="horizontal",variant:d="contained",size:j="md",exclusive:h=!1,multiSelect:x=!1,disabled:o=!1,fullWidth:b=!1,className:y,"aria-label":S,children:m})=>{const i=Me({value:g,defaultValue:I,onChange:f,exclusive:h,multiSelect:x,orientation:p,variant:d,size:j,disabled:o,fullWidth:b}),B=[G.buttonGroup,G[p],d!=="contained"&&G.segmented,b&&G.fullWidth,o&&G.disabled,y].filter(Boolean).join(" "),V=h?"radiogroup":"group";return e.jsx(ke.Provider,{value:i,children:e.jsx("div",{id:r,className:B,role:V,"aria-label":S,"aria-disabled":o,"aria-orientation":p,children:m})})};n.displayName="ButtonGroup";n.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},variant:{defaultValue:{value:"'contained'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},exclusive:{defaultValue:{value:"false",computed:!1},required:!1},multiSelect:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1}}};const t=({value:r,disabled:g=!1,icon:I,startIcon:f,endIcon:p,selected:d,className:j,onClick:h,children:x})=>{const o=we(),b=l.useRef(null),{registerValue:y,unregisterValue:S}=o;l.useEffect(()=>(y(r),()=>S(r)),[r,y,S]);const m=d!==void 0?d:Array.isArray(o.value)?o.value.includes(r):o.value===r,i=o.focusedValue===r,B=l.useCallback(v=>{!g&&!o.disabled&&(o.onChange(r),o.setFocusedValue(r),h&&h(v))},[g,o,r,h]),V=l.useCallback(v=>{const{orientation:O,registeredValues:c}=o,z=c.indexOf(r);let a=z,u=!1;if(O==="horizontal"?v.key==="ArrowRight"?(a=(z+1)%c.length,u=!0):v.key==="ArrowLeft"&&(a=(z-1+c.length)%c.length,u=!0):v.key==="ArrowDown"?(a=(z+1)%c.length,u=!0):v.key==="ArrowUp"&&(a=(z-1+c.length)%c.length,u=!0),u){v.preventDefault();const s=c[a];o.setFocusedValue(s);const C=document.querySelector(`[data-button-group-value="${s}"]`);C&&C.focus()}},[o,r]),_=[G.groupItem,G[o.variant],m&&G.selected,I&&!x&&G.iconOnly,j].filter(Boolean).join(" "),k=o.exclusive?{role:"radio","aria-checked":m}:o.multiSelect?{role:"checkbox","aria-checked":m}:{"aria-pressed":m};return e.jsx("div",{ref:b,className:_,children:e.jsx(Oe,{variant:o.variant,size:o.size,disabled:g||o.disabled,fullWidth:o.fullWidth,startIcon:I||f,endIcon:p,onClick:B,onKeyDown:V,tabIndex:i?0:-1,"data-button-group-value":r,...k,children:x})})};t.displayName="ButtonGroupItem";t.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{value:{required:!0,tsType:{name:"string"},description:"Unique value for this button"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable this specific button
@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display (icon-only button)"},startIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display before text"},endIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display after text"},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state (controlled from parent)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},children:{required:!1,tsType:{name:"ReactNode"},description:"Button content"}}};const et={title:"Inputs/Button Group",component:n,parameters:{layout:"centered",docs:{description:{component:`
# Button Group

A flexible button group component that supports multiple modes: segmented controls, toggle groups, exclusive selection (radio-like), and multi-select (checkbox-like).

## Features

- **Multiple Variants**: contained, outlined, soft, tertiary
- **Orientation**: horizontal or vertical layout
- **Selection Modes**: exclusive (single), multi-select, or toggle
- **Keyboard Navigation**: Full arrow key support with roving tab index
- **Accessibility**: ARIA roles and states for screen readers
- **Icon Support**: Icon-only, start icons, and end icons
- **Responsive**: Full-width mode available
- **Segmented Controls**: Merged borders for cohesive appearance

## Usage

\`\`\`tsx
import { ButtonGroup, ButtonGroupItem } from '@/components/Inputs/Button Group';

// Basic usage
<ButtonGroup>
  <ButtonGroupItem value="option1">Option 1</ButtonGroupItem>
  <ButtonGroupItem value="option2">Option 2</ButtonGroupItem>
  <ButtonGroupItem value="option3">Option 3</ButtonGroupItem>
</ButtonGroup>

// Exclusive mode (radio-like)
<ButtonGroup exclusive value={selectedValue} onChange={setSelectedValue}>
  <ButtonGroupItem value="left">Left</ButtonGroupItem>
  <ButtonGroupItem value="center">Center</ButtonGroupItem>
  <ButtonGroupItem value="right">Right</ButtonGroupItem>
</ButtonGroup>

// Multi-select mode
<ButtonGroup multiSelect value={selectedValues} onChange={setSelectedValues}>
  <ButtonGroupItem value="bold">Bold</ButtonGroupItem>
  <ButtonGroupItem value="italic">Italic</ButtonGroupItem>
  <ButtonGroupItem value="underline">Underline</ButtonGroupItem>
</ButtonGroup>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation of the button group"},variant:{control:"select",options:["contained","outlined","soft","tertiary"],description:"Visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"Size of all buttons in the group"},exclusive:{control:"boolean",description:"Only one button can be selected (radio behavior)"},multiSelect:{control:"boolean",description:"Multiple buttons can be selected (checkbox behavior)"},disabled:{control:"boolean",description:"Disable the entire button group"},fullWidth:{control:"boolean",description:"Make buttons stretch to fill container"}}},w={args:{"aria-label":"Basic button group"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})},M={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Contained"}),e.jsxs(n,{variant:"contained","aria-label":"Contained button group",children:[e.jsx(t,{value:"left",children:"Left"}),e.jsx(t,{value:"center",children:"Center"}),e.jsx(t,{value:"right",children:"Right"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Outlined"}),e.jsxs(n,{variant:"outlined","aria-label":"Outlined button group",children:[e.jsx(t,{value:"left",children:"Left"}),e.jsx(t,{value:"center",children:"Center"}),e.jsx(t,{value:"right",children:"Right"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Soft"}),e.jsxs(n,{variant:"soft","aria-label":"Soft button group",children:[e.jsx(t,{value:"left",children:"Left"}),e.jsx(t,{value:"center",children:"Center"}),e.jsx(t,{value:"right",children:"Right"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Tertiary"}),e.jsxs(n,{variant:"tertiary","aria-label":"Tertiary button group",children:[e.jsx(t,{value:"left",children:"Left"}),e.jsx(t,{value:"center",children:"Center"}),e.jsx(t,{value:"right",children:"Right"})]})]})]})},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsxs(n,{size:"sm","aria-label":"Small button group",children:[e.jsx(t,{value:"option1",children:"Small"}),e.jsx(t,{value:"option2",children:"Size"}),e.jsx(t,{value:"option3",children:"Group"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium"}),e.jsxs(n,{size:"md","aria-label":"Medium button group",children:[e.jsx(t,{value:"option1",children:"Medium"}),e.jsx(t,{value:"option2",children:"Size"}),e.jsx(t,{value:"option3",children:"Group"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsxs(n,{size:"lg","aria-label":"Large button group",children:[e.jsx(t,{value:"option1",children:"Large"}),e.jsx(t,{value:"option2",children:"Size"}),e.jsx(t,{value:"option3",children:"Group"})]})]})]})},L={args:{exclusive:!0,defaultValue:"center","aria-label":"Text alignment"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"left",children:"Left"}),e.jsx(t,{value:"center",children:"Center"}),e.jsx(t,{value:"right",children:"Right"}),e.jsx(t,{value:"justify",children:"Justify"})]})},E={args:{multiSelect:!0,defaultValue:["bold","italic"],"aria-label":"Text formatting"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"bold",children:"Bold"}),e.jsx(t,{value:"italic",children:"Italic"}),e.jsx(t,{value:"underline",children:"Underline"}),e.jsx(t,{value:"strikethrough",children:"Strike"})]})},R={args:{orientation:"vertical","aria-label":"Vertical button group"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"top",children:"Top"}),e.jsx(t,{value:"middle",children:"Middle"}),e.jsx(t,{value:"bottom",children:"Bottom"})]})},T={args:{exclusive:!0,defaultValue:"grid","aria-label":"View mode"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"list",icon:e.jsx("span",{children:"☰"})}),e.jsx(t,{value:"grid",icon:e.jsx("span",{children:"▦"})}),e.jsx(t,{value:"card",icon:e.jsx("span",{children:"▢"})})]})},W={args:{variant:"outlined","aria-label":"File actions"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"save",startIcon:e.jsx("span",{children:"💾"}),children:"Save"}),e.jsx(t,{value:"upload",startIcon:e.jsx("span",{children:"⬆️"}),children:"Upload"}),e.jsx(t,{value:"download",startIcon:e.jsx("span",{children:"⬇️"}),children:"Download"})]})},q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Entire Group Disabled"}),e.jsxs(n,{disabled:!0,"aria-label":"Disabled button group",children:[e.jsx(t,{value:"option1",children:"Option 1"}),e.jsx(t,{value:"option2",children:"Option 2"}),e.jsx(t,{value:"option3",children:"Option 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Individual Button Disabled"}),e.jsxs(n,{"aria-label":"Partially disabled button group",children:[e.jsx(t,{value:"option1",children:"Enabled"}),e.jsx(t,{value:"option2",disabled:!0,children:"Disabled"}),e.jsx(t,{value:"option3",children:"Enabled"})]})]})]})},A={args:{fullWidth:!0,exclusive:!0,defaultValue:"month","aria-label":"Calendar view"},render:r=>e.jsx("div",{style:{width:"600px"},children:e.jsxs(n,{...r,children:[e.jsx(t,{value:"day",children:"Day"}),e.jsx(t,{value:"week",children:"Week"}),e.jsx(t,{value:"month",children:"Month"}),e.jsx(t,{value:"year",children:"Year"})]})})},F={args:{variant:"outlined",exclusive:!0,defaultValue:"posts","aria-label":"Content type"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"posts",children:"Posts"}),e.jsx(t,{value:"photos",children:"Photos"}),e.jsx(t,{value:"videos",children:"Videos"}),e.jsx(t,{value:"likes",children:"Likes"})]})},P={args:{variant:"soft",size:"lg",exclusive:!0,defaultValue:"format","aria-label":"Editor tools"},render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{value:"format",startIcon:e.jsx("span",{children:"🎨"}),children:"Format"}),e.jsx(t,{value:"insert",startIcon:e.jsx("span",{children:"➕"}),children:"Insert"}),e.jsx(t,{value:"tools",startIcon:e.jsx("span",{children:"🔧"}),children:"Tools"}),e.jsx(t,{value:"settings",icon:e.jsx("span",{children:"⚙️"})})]})},N={args:{orientation:"vertical",fullWidth:!0,variant:"outlined",multiSelect:!0,defaultValue:["notifications","security"],"aria-label":"Settings categories"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsxs(n,{...r,children:[e.jsx(t,{value:"profile",startIcon:e.jsx("span",{children:"👤"}),children:"Profile Settings"}),e.jsx(t,{value:"notifications",startIcon:e.jsx("span",{children:"🔔"}),children:"Notifications"}),e.jsx(t,{value:"security",startIcon:e.jsx("span",{children:"🔒"}),children:"Security & Privacy"}),e.jsx(t,{value:"billing",startIcon:e.jsx("span",{children:"💳"}),children:"Billing & Plans"})]})})};var U,H,K;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Basic button group'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="option1">Option 1</ButtonGroupItem>\r
      <ButtonGroupItem value="option2">Option 2</ButtonGroupItem>\r
      <ButtonGroupItem value="option3">Option 3</ButtonGroupItem>\r
    </ButtonGroup>
}`,...(K=(H=w.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var J,Y,$;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Contained</h4>\r
        <ButtonGroup variant="contained" aria-label="Contained button group">\r
          <ButtonGroupItem value="left">Left</ButtonGroupItem>\r
          <ButtonGroupItem value="center">Center</ButtonGroupItem>\r
          <ButtonGroupItem value="right">Right</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <h4>Outlined</h4>\r
        <ButtonGroup variant="outlined" aria-label="Outlined button group">\r
          <ButtonGroupItem value="left">Left</ButtonGroupItem>\r
          <ButtonGroupItem value="center">Center</ButtonGroupItem>\r
          <ButtonGroupItem value="right">Right</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <h4>Soft</h4>\r
        <ButtonGroup variant="soft" aria-label="Soft button group">\r
          <ButtonGroupItem value="left">Left</ButtonGroupItem>\r
          <ButtonGroupItem value="center">Center</ButtonGroupItem>\r
          <ButtonGroupItem value="right">Right</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <h4>Tertiary</h4>\r
        <ButtonGroup variant="tertiary" aria-label="Tertiary button group">\r
          <ButtonGroupItem value="left">Left</ButtonGroupItem>\r
          <ButtonGroupItem value="center">Center</ButtonGroupItem>\r
          <ButtonGroupItem value="right">Right</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
    </div>
}`,...($=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,X,Z;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>\r
      <div>\r
        <h4>Small</h4>\r
        <ButtonGroup size="sm" aria-label="Small button group">\r
          <ButtonGroupItem value="option1">Small</ButtonGroupItem>\r
          <ButtonGroupItem value="option2">Size</ButtonGroupItem>\r
          <ButtonGroupItem value="option3">Group</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <h4>Medium</h4>\r
        <ButtonGroup size="md" aria-label="Medium button group">\r
          <ButtonGroupItem value="option1">Medium</ButtonGroupItem>\r
          <ButtonGroupItem value="option2">Size</ButtonGroupItem>\r
          <ButtonGroupItem value="option3">Group</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <h4>Large</h4>\r
        <ButtonGroup size="lg" aria-label="Large button group">\r
          <ButtonGroupItem value="option1">Large</ButtonGroupItem>\r
          <ButtonGroupItem value="option2">Size</ButtonGroupItem>\r
          <ButtonGroupItem value="option3">Group</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
    </div>
}`,...(Z=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,re;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    exclusive: true,
    defaultValue: 'center',
    'aria-label': 'Text alignment'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="left">Left</ButtonGroupItem>\r
      <ButtonGroupItem value="center">Center</ButtonGroupItem>\r
      <ButtonGroupItem value="right">Right</ButtonGroupItem>\r
      <ButtonGroupItem value="justify">Justify</ButtonGroupItem>\r
    </ButtonGroup>
}`,...(re=(te=L.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ne,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    multiSelect: true,
    defaultValue: ['bold', 'italic'],
    'aria-label': 'Text formatting'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="bold">Bold</ButtonGroupItem>\r
      <ButtonGroupItem value="italic">Italic</ButtonGroupItem>\r
      <ButtonGroupItem value="underline">Underline</ButtonGroupItem>\r
      <ButtonGroupItem value="strikethrough">Strike</ButtonGroupItem>\r
    </ButtonGroup>
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ue,le,ie;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    'aria-label': 'Vertical button group'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="top">Top</ButtonGroupItem>\r
      <ButtonGroupItem value="middle">Middle</ButtonGroupItem>\r
      <ButtonGroupItem value="bottom">Bottom</ButtonGroupItem>\r
    </ButtonGroup>
}`,...(ie=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,de,ce;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    exclusive: true,
    defaultValue: 'grid',
    'aria-label': 'View mode'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="list" icon={<span>☰</span>} />\r
      <ButtonGroupItem value="grid" icon={<span>▦</span>} />\r
      <ButtonGroupItem value="card" icon={<span>▢</span>} />\r
    </ButtonGroup>
}`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ve;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    'aria-label': 'File actions'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="save" startIcon={<span>💾</span>}>\r
        Save\r
      </ButtonGroupItem>\r
      <ButtonGroupItem value="upload" startIcon={<span>⬆️</span>}>\r
        Upload\r
      </ButtonGroupItem>\r
      <ButtonGroupItem value="download" startIcon={<span>⬇️</span>}>\r
        Download\r
      </ButtonGroupItem>\r
    </ButtonGroup>
}`,...(ve=(me=W.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var he,Be,Ge;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <h4>Entire Group Disabled</h4>\r
        <ButtonGroup disabled aria-label="Disabled button group">\r
          <ButtonGroupItem value="option1">Option 1</ButtonGroupItem>\r
          <ButtonGroupItem value="option2">Option 2</ButtonGroupItem>\r
          <ButtonGroupItem value="option3">Option 3</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
      <div>\r
        <h4>Individual Button Disabled</h4>\r
        <ButtonGroup aria-label="Partially disabled button group">\r
          <ButtonGroupItem value="option1">Enabled</ButtonGroupItem>\r
          <ButtonGroupItem value="option2" disabled>\r
            Disabled\r
          </ButtonGroupItem>\r
          <ButtonGroupItem value="option3">Enabled</ButtonGroupItem>\r
        </ButtonGroup>\r
      </div>\r
    </div>
}`,...(Ge=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var ge,xe,Ie;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    exclusive: true,
    defaultValue: 'month',
    'aria-label': 'Calendar view'
  },
  render: args => <div style={{
    width: '600px'
  }}>\r
      <ButtonGroup {...args}>\r
        <ButtonGroupItem value="day">Day</ButtonGroupItem>\r
        <ButtonGroupItem value="week">Week</ButtonGroupItem>\r
        <ButtonGroupItem value="month">Month</ButtonGroupItem>\r
        <ButtonGroupItem value="year">Year</ButtonGroupItem>\r
      </ButtonGroup>\r
    </div>
}`,...(Ie=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var fe,be,je;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    exclusive: true,
    defaultValue: 'posts',
    'aria-label': 'Content type'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="posts">Posts</ButtonGroupItem>\r
      <ButtonGroupItem value="photos">Photos</ButtonGroupItem>\r
      <ButtonGroupItem value="videos">Videos</ButtonGroupItem>\r
      <ButtonGroupItem value="likes">Likes</ButtonGroupItem>\r
    </ButtonGroup>
}`,...(je=(be=F.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var ye,Se,Ve;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    size: 'lg',
    exclusive: true,
    defaultValue: 'format',
    'aria-label': 'Editor tools'
  },
  render: args => <ButtonGroup {...args}>\r
      <ButtonGroupItem value="format" startIcon={<span>🎨</span>}>\r
        Format\r
      </ButtonGroupItem>\r
      <ButtonGroupItem value="insert" startIcon={<span>➕</span>}>\r
        Insert\r
      </ButtonGroupItem>\r
      <ButtonGroupItem value="tools" startIcon={<span>🔧</span>}>\r
        Tools\r
      </ButtonGroupItem>\r
      <ButtonGroupItem value="settings" icon={<span>⚙️</span>} />\r
    </ButtonGroup>
}`,...(Ve=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var _e,ze,Ce;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    fullWidth: true,
    variant: 'outlined',
    multiSelect: true,
    defaultValue: ['notifications', 'security'],
    'aria-label': 'Settings categories'
  },
  render: args => <div style={{
    width: '300px'
  }}>\r
      <ButtonGroup {...args}>\r
        <ButtonGroupItem value="profile" startIcon={<span>👤</span>}>\r
          Profile Settings\r
        </ButtonGroupItem>\r
        <ButtonGroupItem value="notifications" startIcon={<span>🔔</span>}>\r
          Notifications\r
        </ButtonGroupItem>\r
        <ButtonGroupItem value="security" startIcon={<span>🔒</span>}>\r
          Security & Privacy\r
        </ButtonGroupItem>\r
        <ButtonGroupItem value="billing" startIcon={<span>💳</span>}>\r
          Billing & Plans\r
        </ButtonGroupItem>\r
      </ButtonGroup>\r
    </div>
}`,...(Ce=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};const tt=["Basic","Variants","Sizes","ExclusiveMode","MultiSelectMode","VerticalOrientation","IconOnly","WithStartIcons","DisabledState","FullWidth","SegmentedControl","ComplexExample","VerticalFullWidth"];export{w as Basic,P as ComplexExample,q as DisabledState,L as ExclusiveMode,A as FullWidth,T as IconOnly,E as MultiSelectMode,F as SegmentedControl,D as Sizes,M as Variants,N as VerticalFullWidth,R as VerticalOrientation,W as WithStartIcons,tt as __namedExportsOrder,et as default};
