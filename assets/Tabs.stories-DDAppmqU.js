import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as F,r as o}from"./index-B2-qRKKC.js";import{c as ue}from"./classNames-2dOUpm6k.js";import{I as me}from"./Icon-dy69MN_5.js";import"./_commonjsHelpers-Cpj98o6Y.js";const pe="_tabsContainer_1wany_273",ve="_tab_1wany_273",be="_indicator_1wany_508",fe="_noAnimations_1wany_688",i={"dark-mode":"_dark-mode_1wany_244",tabsContainer:pe,"orientation-horizontal":"_orientation-horizontal_1wany_299","orientation-vertical":"_orientation-vertical_1wany_305","alignment-start":"_alignment-start_1wany_315","alignment-center":"_alignment-center_1wany_319","alignment-end":"_alignment-end_1wany_323","alignment-space-between":"_alignment-space-between_1wany_327","density-sparse":"_density-sparse_1wany_334","density-normal":"_density-normal_1wany_339","density-compact":"_density-compact_1wany_344","density-dense":"_density-dense_1wany_349","size-compact":"_size-compact_1wany_357","size-small":"_size-small_1wany_365","size-medium":"_size-medium_1wany_373","size-large":"_size-large_1wany_381","size-xlarge":"_size-xlarge_1wany_389",tab:ve,"tab-disabled":"_tab-disabled_1wany_416","tab-active":"_tab-active_1wany_423","tab-focused":"_tab-focused_1wany_427","tab-content":"_tab-content_1wany_439","tab-icon-position-leading":"_tab-icon-position-leading_1wany_448","tab-icon-position-trailing":"_tab-icon-position-trailing_1wany_452","tab-icon-position-top":"_tab-icon-position-top_1wany_456","tab-icon":"_tab-icon_1wany_448","tab-label":"_tab-label_1wany_474","tab-badge":"_tab-badge_1wany_481","tab-focus-ring":"_tab-focus-ring_1wany_497",indicator:be,"variant-underline":"_variant-underline_1wany_538","variant-soft":"_variant-soft_1wany_571","variant-solid":"_variant-solid_1wany_593","variant-ghost":"_variant-ghost_1wany_618","variant-enclosed":"_variant-enclosed_1wany_636",noAnimations:fe,"scrollable-left":"_scrollable-left_1wany_747","scrollable-right":"_scrollable-right_1wany_759","has-icon":"_has-icon_1wany_786","has-badge":"_has-badge_1wany_792"},$=F.forwardRef(({label:a,icon:n,badge:r,disabled:d=!1,panelId:u,title:v,ariaLabel:w,onClick:x,onKeyDown:A,onFocus:S,onBlur:L,isActive:C=!1,isFocused:z=!1,isDisabled:b=d,showIcon:s=!0,showLabel:q=!0,iconPosition:H="leading",size:y="medium",variant:j="underline",tabIndex:h=-1},M)=>{const I=ue(i.tab,y==="compact"&&i["tab-size-small"],y==="small"&&i["tab-size-small"],y==="medium"&&i["tab-size-medium"],y==="large"&&i["tab-size-large"],y==="xlarge"&&i["tab-size-large"],C&&i["tab-active"],z&&i["tab-focused"],b&&i["tab-disabled"]);return e.jsxs("div",{ref:M,role:"tab","aria-selected":C,"aria-controls":u,"aria-disabled":b,tabIndex:b?-1:h,className:I,onClick:b?void 0:x,onKeyDown:b?void 0:A,onFocus:b?void 0:S,onBlur:b?void 0:L,title:v||(q?a:w||a),children:[e.jsxs("div",{className:i.tabContent,children:[s&&n&&e.jsx("span",{className:i.tabIcon,"aria-hidden":"true",children:e.jsx(me,{name:n,size:"sm"})}),q&&e.jsx("span",{className:i.tabLabel,children:a}),r!=null&&e.jsx("span",{className:i.tabBadge,children:r})]}),z&&e.jsx("div",{className:i["tab-focused"],"aria-hidden":"true"})]})});$.displayName="TabItem";$.__docgenInfo={description:`TabItem Component

Individual tab item with support for icons, badges, and multiple visual states.
Handles keyboard navigation, focus management, and accessibility attributes.`,methods:[],displayName:"TabItem",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for tab"},label:{required:!0,tsType:{name:"string"},description:"Label text for tab"},icon:{required:!1,tsType:{name:"string"},description:"Icon name (from Icon component registry)"},badge:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Badge value (number or string)"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},panelId:{required:!1,tsType:{name:"string"},description:"Optional content or panel ID"},title:{required:!1,tsType:{name:"string"},description:"Tooltip or title text"},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label (used for icon-only tabs or override)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Keyboard handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"},isActive:{required:!1,tsType:{name:"boolean"},description:"Internal: is this tab active",defaultValue:{value:"false",computed:!1}},isFocused:{required:!1,tsType:{name:"boolean"},description:"Internal: is this tab focused",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Internal: is this tab disabled",defaultValue:{value:"disabled = false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Internal: show icon",defaultValue:{value:"true",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Internal: show label",defaultValue:{value:"true",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'leading' | 'trailing' | 'top'",elements:[{name:"literal",value:"'leading'"},{name:"literal",value:"'trailing'"},{name:"literal",value:"'top'"}]},description:"Internal: icon position",defaultValue:{value:"'leading'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'compact' | 'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:"Internal: tab size",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'soft' | 'solid' | 'ghost' | 'enclosed'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'enclosed'"}]},description:"Internal: visual variant",defaultValue:{value:"'underline'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Internal: tab orientation"},tabIndex:{required:!1,tsType:{name:"number"},description:"Internal: tabindex",defaultValue:{value:"-1",computed:!1}}}};const ge=(...a)=>a.filter(Boolean).join(" "),l=F.forwardRef(({items:a,activeId:n,onTabChange:r,variant:d="underline",orientation:u="horizontal",indicatorPlacement:v=u==="vertical"?"right":"bottom",size:w="medium",density:x="normal",showIcons:A=!0,iconPosition:S="leading",showLabels:L=!0,className:C,ariaLabel:z,alignment:b="start",onKeyboardNavigation:s,disableAnimations:q=!1,activationMode:H="manual"},y)=>{const j=o.useRef(null),h=o.useRef({}),[M,I]=o.useState(null),[oe,U]=o.useState({});o.useEffect(()=>{if(!j.current||!h.current[n])return;const t=h.current[n],m=j.current;if(u==="horizontal"){const c=t.getBoundingClientRect(),f=m.getBoundingClientRect();U({left:`${c.left-f.left}px`,width:`${c.width}px`,height:v==="bottom"?2:void 0})}else{const c=t.getBoundingClientRect(),f=m.getBoundingClientRect();U({top:`${c.top-f.top}px`,height:`${c.height}px`,width:2})}},[n,u,v]);const ce=o.useCallback((t,m)=>{const c=a.filter(_=>!_.disabled).map(_=>_.id),f=c.indexOf(m);let T=f,g=!1;if(u==="horizontal"?t.key==="ArrowRight"?(T=(f+1)%c.length,g=!0,s==null||s("next")):t.key==="ArrowLeft"&&(T=(f-1+c.length)%c.length,g=!0,s==null||s("prev")):t.key==="ArrowDown"?(T=(f+1)%c.length,g=!0,s==null||s("next")):t.key==="ArrowUp"&&(T=(f-1+c.length)%c.length,g=!0,s==null||s("prev")),t.key==="Home"?(T=0,g=!0,s==null||s("first")):t.key==="End"&&(T=c.length-1,g=!0,s==null||s("last")),(t.key==="Enter"||t.key===" ")&&(r(m),g=!0),g){t.preventDefault();const _=c[T];I(_),H==="auto"&&(t.key==="ArrowRight"||t.key==="ArrowLeft"||t.key==="ArrowUp"||t.key==="ArrowDown")&&r(_),setTimeout(()=>{var P;(P=h.current[_])==null||P.focus()},0)}},[a,u,r,s,H]);F.useImperativeHandle(y,()=>({focusTab:t=>{var m;I(t),(m=h.current[t])==null||m.focus()},selectTab:t=>{r(t)},getActiveId:()=>n}),[n,r]);const de=ge(i.tabsContainer,i[`orientation-${u}`],i[`variant-${d}`],i[`size-${w}`],i[`density-${x}`],i[`alignment-${b}`],C);return e.jsxs("div",{ref:j,className:de,role:"tablist","aria-label":z||"Navigation tabs","aria-orientation":u,children:[a.map(t=>e.jsx($,{ref:m=>{m&&(h.current[t.id]=m)},...t,isActive:t.id===n,isFocused:t.id===M,isDisabled:t.disabled,showIcon:A&&!!t.icon,showLabel:L,iconPosition:S,size:w,variant:d,orientation:u,tabIndex:t.id===n?0:-1,onClick:()=>r(t.id),onKeyDown:m=>ce(m,t.id),onFocus:()=>I(t.id),onBlur:()=>I(null)},t.id)),d!=="enclosed"&&e.jsx("div",{className:i.indicator,style:{...oe,transition:q?"none":"width 0.2s ease, left 0.2s ease, top 0.2s ease, height 0.2s ease",...v==="right"&&{right:0,left:"auto"},...v==="left"&&{left:0}},"aria-hidden":"true"})]})});l.displayName="Tabs";l.__docgenInfo={description:`Tabs Component

A comprehensive, accessible tabs component supporting multiple visual variants,
orientations, sizes, and interaction patterns. Keyboard navigation, ARIA roles,
and full accessibility compliance included.`,methods:[{name:"focusTab",docblock:null,modifiers:[],params:[{name:"id",optional:!1,type:{name:"string"}}],returns:null},{name:"selectTab",docblock:null,modifiers:[],params:[{name:"id",optional:!1,type:{name:"string"}}],returns:null},{name:"getActiveId",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItemProps"}],raw:"TabItemProps[]"},description:"Tab items to render"},activeId:{required:!0,tsType:{name:"string"},description:"Currently active tab ID"},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Callback when tab selection changes"},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'soft' | 'solid' | 'ghost' | 'enclosed'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'enclosed'"}]},description:`Visual style variant
@default 'underline'`,defaultValue:{value:"'underline'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Tab orientation
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},indicatorPlacement:{required:!1,tsType:{name:"union",raw:"'bottom' | 'right' | 'left'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'left'"}]},description:`Indicator placement for vertical tabs
@default 'right' for vertical, 'bottom' for horizontal`,defaultValue:{value:"orientation === 'vertical' ? 'right' : 'bottom'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'compact' | 'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:`Size of tabs
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'sparse' | 'normal' | 'compact' | 'dense'",elements:[{name:"literal",value:"'sparse'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'dense'"}]},description:`Density/spacing between tabs
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}},showIcons:{required:!1,tsType:{name:"boolean"},description:`Show icons in tabs (if available)
@default true`,defaultValue:{value:"true",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'leading' | 'trailing' | 'top'",elements:[{name:"literal",value:"'leading'"},{name:"literal",value:"'trailing'"},{name:"literal",value:"'top'"}]},description:`Icon position relative to label
@default 'leading'`,defaultValue:{value:"'leading'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:`Show labels in tabs
@default true`,defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for the tablist"},scrollBehavior:{required:!1,tsType:{name:"union",raw:"'auto' | 'smooth' | 'none'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'none'"}]},description:`Allow scrolling on overflow (horizontal only)
@default 'auto'`},alignment:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'space-between'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'space-between'"}]},description:`Tab alignment (horizontal only)
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},onKeyboardNavigation:{required:!1,tsType:{name:"signature",type:"function",raw:"(direction: 'next' | 'prev' | 'first' | 'last') => void",signature:{arguments:[{type:{name:"union",raw:"'next' | 'prev' | 'first' | 'last'",elements:[{name:"literal",value:"'next'"},{name:"literal",value:"'prev'"},{name:"literal",value:"'first'"},{name:"literal",value:"'last'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback on keyboard navigation"},disableAnimations:{required:!1,tsType:{name:"boolean"},description:`Disable animation/transitions
@default false`,defaultValue:{value:"false",computed:!1}},activationMode:{required:!1,tsType:{name:"union",raw:"'manual' | 'auto'",elements:[{name:"literal",value:"'manual'"},{name:"literal",value:"'auto'"}]},description:`Manual activation: require Enter/Space to select
Auto activation: arrow keys select immediately
@default 'manual'`,defaultValue:{value:"'manual'",computed:!1}}}};const Ie={title:"Navigation/Tabs",component:l,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["underline","soft","solid","ghost","enclosed"]},orientation:{control:{type:"radio"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["compact","small","medium","large","xlarge"]},density:{control:{type:"select"},options:["sparse","normal","compact","dense"]}},parameters:{docs:{description:{component:"A tab navigation component for organizing content into separate views. Supports multiple variants, orientations, and keyboard navigation."}}}},p=[{id:"tab1",label:"Overview",content:"Overview content"},{id:"tab2",label:"Details",content:"Details content"},{id:"tab3",label:"Settings",content:"Settings content"}],R={args:{variant:"soft"},render:()=>{const[a,n]=o.useState("tab1");return e.jsx(l,{items:p,activeId:a,onTabChange:n})},parameters:{docs:{source:{type:"code",state:"open"}}}},E={render:()=>{const[a,n]=o.useState("tab1"),[r,d]=o.useState("tab1"),[u,v]=o.useState("tab1"),[w,x]=o.useState("tab1"),[A,S]=o.useState("tab1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Underline"}),e.jsx(l,{items:p,activeId:a,onTabChange:n,variant:"underline"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Soft"}),e.jsx(l,{items:p,activeId:r,onTabChange:d,variant:"soft"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Solid"}),e.jsx(l,{items:p,activeId:u,onTabChange:v,variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Ghost"}),e.jsx(l,{items:p,activeId:w,onTabChange:x,variant:"ghost"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Enclosed"}),e.jsx(l,{items:p,activeId:A,onTabChange:S,variant:"enclosed"})]})]})},parameters:{docs:{description:{story:"Tabs support five visual variants: underline, soft, solid, ghost, and enclosed."},source:{type:"code",state:"open"}}}},D={render:()=>{const[a,n]=o.useState("tab1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(l,{items:p,activeId:a,onTabChange:n,size:"compact"}),e.jsx(l,{items:p,activeId:a,onTabChange:n,size:"small"}),e.jsx(l,{items:p,activeId:a,onTabChange:n,size:"medium"}),e.jsx(l,{items:p,activeId:a,onTabChange:n,size:"large"}),e.jsx(l,{items:p,activeId:a,onTabChange:n,size:"xlarge"})]})},parameters:{docs:{description:{story:"Tabs are available in five sizes: compact, small, medium, large, and xlarge."},source:{type:"code",state:"open"}}}},k={render:()=>{const[a,n]=o.useState("tab1");return e.jsx(l,{items:p,activeId:a,onTabChange:n,orientation:"vertical"})},parameters:{docs:{description:{story:"Tabs can be displayed vertically for sidebar navigation."},source:{type:"code",state:"open"}}}},V={render:()=>{const[a,n]=o.useState("home"),r=[{id:"home",label:"Home",icon:"Home01Icon"},{id:"user",label:"Profile",icon:"UserIcon"},{id:"settings",label:"Settings",icon:"Settings01Icon"}];return e.jsx(l,{items:r,activeId:a,onTabChange:n,showIcons:!0})},parameters:{docs:{description:{story:"Tabs can include icons alongside labels for better visual recognition."},source:{type:"code",state:"open"}}}},B={render:()=>{const[a,n]=o.useState("profile"),r=[{id:"profile",label:"Profile",content:"User profile information"},{id:"account",label:"Account",content:"Account settings and preferences"},{id:"security",label:"Security",content:"Security and privacy settings"},{id:"notifications",label:"Notifications",content:"Notification preferences"}],d=r.find(u=>u.id===a);return e.jsxs("div",{children:[e.jsx(l,{items:r,activeId:a,onTabChange:n,variant:"underline"}),e.jsxs("div",{style:{padding:24,border:"1px solid var(--color-neutral-200)",borderTop:"none",borderRadius:"0 0 8px 8px"},children:[e.jsx("h3",{style:{marginTop:0},children:d==null?void 0:d.label}),e.jsx("p",{children:d==null?void 0:d.content})]})]})},parameters:{docs:{description:{story:"Complete example with tab content panel showing active tab information."},source:{type:"code",state:"open"}}}};var O,W,G;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "soft"
  },
  render: () => {
    const [activeId, setActiveId] = useState("tab1");
    return <Tabs items={sampleTabs} activeId={activeId} onTabChange={setActiveId} />;
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(G=(W=R.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,Q,X;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [active1, setActive1] = useState("tab1");
    const [active2, setActive2] = useState("tab1");
    const [active3, setActive3] = useState("tab1");
    const [active4, setActive4] = useState("tab1");
    const [active5, setActive5] = useState("tab1");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 32
    }}>\r
        <div>\r
          <h4 style={{
          marginBottom: 12
        }}>Underline</h4>\r
          <Tabs items={sampleTabs} activeId={active1} onTabChange={setActive1} variant="underline" />\r
        </div>\r
        <div>\r
          <h4 style={{
          marginBottom: 12
        }}>Soft</h4>\r
          <Tabs items={sampleTabs} activeId={active2} onTabChange={setActive2} variant="soft" />\r
        </div>\r
        <div>\r
          <h4 style={{
          marginBottom: 12
        }}>Solid</h4>\r
          <Tabs items={sampleTabs} activeId={active3} onTabChange={setActive3} variant="solid" />\r
        </div>\r
        <div>\r
          <h4 style={{
          marginBottom: 12
        }}>Ghost</h4>\r
          <Tabs items={sampleTabs} activeId={active4} onTabChange={setActive4} variant="ghost" />\r
        </div>\r
        <div>\r
          <h4 style={{
          marginBottom: 12
        }}>Enclosed</h4>\r
          <Tabs items={sampleTabs} activeId={active5} onTabChange={setActive5} variant="enclosed" />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs support five visual variants: underline, soft, solid, ghost, and enclosed."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,N;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState("tab1");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24
    }}>\r
        <Tabs items={sampleTabs} activeId={active} onTabChange={setActive} size="compact" />\r
        <Tabs items={sampleTabs} activeId={active} onTabChange={setActive} size="small" />\r
        <Tabs items={sampleTabs} activeId={active} onTabChange={setActive} size="medium" />\r
        <Tabs items={sampleTabs} activeId={active} onTabChange={setActive} size="large" />\r
        <Tabs items={sampleTabs} activeId={active} onTabChange={setActive} size="xlarge" />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs are available in five sizes: compact, small, medium, large, and xlarge."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(N=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};var K,ee,te;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState("tab1");
    return <Tabs items={sampleTabs} activeId={activeId} onTabChange={setActiveId} orientation="vertical" />;
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs can be displayed vertically for sidebar navigation."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState("home");
    const tabsWithIcons = [{
      id: "home",
      label: "Home",
      icon: "Home01Icon"
    }, {
      id: "user",
      label: "Profile",
      icon: "UserIcon"
    }, {
      id: "settings",
      label: "Settings",
      icon: "Settings01Icon"
    }];
    return <Tabs items={tabsWithIcons} activeId={activeId} onTabChange={setActiveId} showIcons />;
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs can include icons alongside labels for better visual recognition."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(se=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,re,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState("profile");
    const tabs = [{
      id: "profile",
      label: "Profile",
      content: "User profile information"
    }, {
      id: "account",
      label: "Account",
      content: "Account settings and preferences"
    }, {
      id: "security",
      label: "Security",
      content: "Security and privacy settings"
    }, {
      id: "notifications",
      label: "Notifications",
      content: "Notification preferences"
    }];
    const activeTab = tabs.find(t => t.id === activeId);
    return <div>\r
        <Tabs items={tabs} activeId={activeId} onTabChange={setActiveId} variant="underline" />\r
        <div style={{
        padding: 24,
        border: "1px solid var(--color-neutral-200)",
        borderTop: "none",
        borderRadius: "0 0 8px 8px"
      }}>\r
          <h3 style={{
          marginTop: 0
        }}>{activeTab?.label}</h3>\r
          <p>{activeTab?.content}</p>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Complete example with tab content panel showing active tab information."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(le=(re=B.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const xe=["Default","Variants","Sizes","VerticalOrientation","WithIcons","FullExample"];export{R as Default,B as FullExample,D as Sizes,E as Variants,k as VerticalOrientation,V as WithIcons,xe as __namedExportsOrder,Ie as default};
