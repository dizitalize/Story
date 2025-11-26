import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as j,r as x}from"./index-B2-qRKKC.js";import{c as g}from"./classNames-2dOUpm6k.js";import{L as ye}from"./Label-KEzZ_8lI.js";import"./_commonjsHelpers-Cpj98o6Y.js";const fe="_radioContainer_1s9pn_1",be="_disabled_1s9pn_7",he="_error_1s9pn_11",ge="_radio_1s9pn_1",xe="_inputWrapper_1s9pn_15",Re="_nativeInput_1s9pn_31",_e="_radioChecked_1s9pn_77",je="_radioDisabled_1s9pn_84",Te="_radioOuter_1s9pn_90",Se="_radioDot_1s9pn_98",ke="_scaleIn_1s9pn_1",ze="_label_1s9pn_130",De="_labelDisabled_1s9pn_148",Le="_helperText_1s9pn_153",Ee="_helperTextError_1s9pn_169",n={radioContainer:fe,disabled:be,error:he,radio:ge,inputWrapper:xe,"size-small":"_size-small_1s9pn_21","size-medium":"_size-medium_1s9pn_24","size-large":"_size-large_1s9pn_27",nativeInput:Re,radioChecked:_e,radioDisabled:je,radioOuter:Te,radioDot:Se,scaleIn:ke,label:ze,labelDisabled:De,helperText:Le,helperTextError:Ee,"variant-default":"_variant-default_1s9pn_174","variant-filled":"_variant-filled_1s9pn_181"},a=j.memo(j.forwardRef(({id:l,label:r,checked:s=!1,disabled:t=!1,size:ee="medium",variant:ae="default",name:ne,value:te,onChange:re,onFocus:le,onBlur:se,helperText:R,error:i=!1,errorMessage:h,ariaLabel:ie,ariaDescription:oe,className:de="",...ce},ue)=>{const pe=x.useId(),_=l||pe,me=g(n.radioContainer,n[`size-${ee}`],n[`variant-${ae}`],s&&n.checked,t&&n.disabled,i&&n.error,de),ve=g(n.radio,s&&n.radioChecked,t&&n.radioDisabled);return e.jsxs("div",{className:me,children:[e.jsxs("div",{className:n.inputWrapper,children:[e.jsx("input",{ref:ue,id:_,type:"radio",className:n.nativeInput,checked:s,disabled:t,name:ne,value:te,onChange:re,onFocus:le,onBlur:se,"aria-label":ie||r,"aria-description":oe||h,"aria-invalid":i,"aria-disabled":t,...ce}),e.jsxs("div",{className:ve,"aria-hidden":"true",children:[e.jsx("div",{className:n.radioOuter}),s&&e.jsx("div",{className:n.radioDot})]}),r&&e.jsx(ye,{htmlFor:_,size:"md",disabled:t,children:r})]}),(R||h)&&e.jsx("div",{className:g(n.helperText,i&&n.helperTextError),role:i?"alert":void 0,children:h||R})]})}));a.displayName="Radio";a.__docgenInfo={description:`Radio Component

A customizable radio button component supporting various states, sizes, and variants.
Fully accessible with keyboard navigation and ARIA attributes.`,methods:[],displayName:"Radio",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier for the radio button"},label:{required:!1,tsType:{name:"string"},description:"Label text displayed next to radio"},checked:{required:!1,tsType:{name:"boolean"},description:`Whether radio is selected/checked
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Radio button size
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"}]},description:`Visual appearance variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Radio group name (for grouping radios)"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Value of the radio button"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below"},error:{required:!1,tsType:{name:"boolean"},description:"Error message",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message text"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for accessibility"},ariaDescription:{required:!1,tsType:{name:"string"},description:"Aria description for accessibility"}},composes:["Omit"]};const Ae={title:"Inputs/Radio",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["small","medium","large"]},variant:{control:{type:"radio"},options:["default","filled"]},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},parameters:{docs:{description:{component:"A customizable radio button component for single-choice selection. Fully accessible with keyboard navigation and ARIA attributes."}}}},o={args:{label:"Option 1",value:"option1"},parameters:{docs:{source:{type:"code",state:"open"}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Small radio",size:"small",value:"small"}),e.jsx(a,{label:"Medium radio",size:"medium",value:"medium"}),e.jsx(a,{label:"Large radio",size:"large",value:"large"})]}),parameters:{docs:{description:{story:"Radio buttons are available in three sizes: small, medium (default), and large."},source:{type:"code",state:"open"}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Default variant",variant:"default",checked:!0,value:"default"}),e.jsx(a,{label:"Filled variant",variant:"filled",checked:!0,value:"filled"})]}),parameters:{docs:{description:{story:"Radio buttons support default and filled variants for different visual styles."},source:{type:"code",state:"open"}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Unselected",checked:!1,value:"unselected"}),e.jsx(a,{label:"Selected",checked:!0,value:"selected"}),e.jsx(a,{label:"Disabled unselected",disabled:!0,value:"disabled1"}),e.jsx(a,{label:"Disabled selected",checked:!0,disabled:!0,value:"disabled2"})]}),parameters:{docs:{description:{story:"Radio buttons support multiple states: unselected, selected, and disabled."},source:{type:"code",state:"open"}}}},p={render:()=>{const[l,r]=x.useState("react"),s=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}];return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12,fontWeight:600},children:"Select your framework:"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:s.map(t=>e.jsx(a,{label:t.label,name:"framework",value:t.value,checked:l===t.value,onChange:()=>r(t.value)},t.value))}),e.jsxs("div",{style:{marginTop:16,fontSize:14,color:"var(--color-text-secondary)"},children:["Selected: ",l]})]})},parameters:{docs:{description:{story:"Radio buttons in a group share the same name and allow only one selection."},source:{type:"code",state:"open"}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Option 1",helperText:"This is the first option",value:"opt1"}),e.jsx(a,{label:"Option 2",helperText:"This is the second option",checked:!0,value:"opt2"})]}),parameters:{docs:{description:{story:"Radio buttons can display helper text below the label for additional context."},source:{type:"code",state:"open"}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{label:"Invalid option",error:!0,errorMessage:"This option is not available",value:"err1"}),e.jsx(a,{label:"Required selection",error:!0,errorMessage:"Please select this option",checked:!0,value:"err2"})]}),parameters:{docs:{description:{story:"Radio buttons support error state with custom error messages."},source:{type:"code",state:"open"}}}},y={render:()=>{const[l,r]=x.useState("monthly");return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12,fontWeight:600},children:"Billing frequency:"}),e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(a,{label:"Monthly",name:"billing",value:"monthly",checked:l==="monthly",onChange:()=>r("monthly")}),e.jsx(a,{label:"Yearly",name:"billing",value:"yearly",checked:l==="yearly",onChange:()=>r("yearly")})]})]})},parameters:{docs:{description:{story:"Radio buttons can be arranged horizontally using flexbox."},source:{type:"code",state:"open"}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{ariaLabel:"Option 1",value:"1"}),e.jsx(a,{ariaLabel:"Option 2",checked:!0,value:"2"}),e.jsx(a,{ariaLabel:"Option 3",value:"3"})]}),parameters:{docs:{description:{story:"Radio buttons can be used without a visible label. Always provide ariaLabel for accessibility."},source:{type:"code",state:"open"}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Default Variant"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Small",size:"small",variant:"default",checked:!0,value:"d1"}),e.jsx(a,{label:"Medium",size:"medium",variant:"default",checked:!0,value:"d2"}),e.jsx(a,{label:"Large",size:"large",variant:"default",checked:!0,value:"d3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Filled Variant"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Small",size:"small",variant:"filled",checked:!0,value:"f1"}),e.jsx(a,{label:"Medium",size:"medium",variant:"filled",checked:!0,value:"f2"}),e.jsx(a,{label:"Large",size:"large",variant:"filled",checked:!0,value:"f3"})]})]})]}),parameters:{docs:{description:{story:"All size and variant combinations displayed together."},source:{type:"code",state:"open"}}}};var T,S,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    value: "option1"
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,D,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Radio label="Small radio" size="small" value="small" />\r
      <Radio label="Medium radio" size="medium" value="medium" />\r
      <Radio label="Large radio" size="large" value="large" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Radio buttons are available in three sizes: small, medium (default), and large."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,I,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Radio label="Default variant" variant="default" checked value="default" />\r
      <Radio label="Filled variant" variant="filled" checked value="filled" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Radio buttons support default and filled variants for different visual styles."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,q,M;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Radio label="Unselected" checked={false} value="unselected" />\r
      <Radio label="Selected" checked={true} value="selected" />\r
      <Radio label="Disabled unselected" disabled value="disabled1" />\r
      <Radio label="Disabled selected" checked disabled value="disabled2" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Radio buttons support multiple states: unselected, selected, and disabled."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(M=(q=u.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var A,O,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("react");
    const options = [{
      value: "react",
      label: "React"
    }, {
      value: "vue",
      label: "Vue"
    }, {
      value: "angular",
      label: "Angular"
    }, {
      value: "svelte",
      label: "Svelte"
    }];
    return <div>\r
        <div style={{
        marginBottom: 12,
        fontWeight: 600
      }}>\r
          Select your framework:\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>\r
          {options.map(option => <Radio key={option.value} label={option.label} name="framework" value={option.value} checked={selected === option.value} onChange={() => setSelected(option.value)} />)}\r
        </div>\r
        <div style={{
        marginTop: 16,
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>\r
          Selected: {selected}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Radio buttons in a group share the same name and allow only one selection."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var F,H,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Radio label="Option 1" helperText="This is the first option" value="opt1" />\r
      <Radio label="Option 2" helperText="This is the second option" checked value="opt2" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Radio buttons can display helper text below the label for additional context."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var B,N,P;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Radio label="Invalid option" error errorMessage="This option is not available" value="err1" />\r
      <Radio label="Required selection" error errorMessage="Please select this option" checked value="err2" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Radio buttons support error state with custom error messages."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(P=(N=v.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var U,G,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("monthly");
    return <div>\r
        <div style={{
        marginBottom: 12,
        fontWeight: 600
      }}>\r
          Billing frequency:\r
        </div>\r
        <div style={{
        display: "flex",
        gap: 24
      }}>\r
          <Radio label="Monthly" name="billing" value="monthly" checked={selected === "monthly"} onChange={() => setSelected("monthly")} />\r
          <Radio label="Yearly" name="billing" value="yearly" checked={selected === "yearly"} onChange={() => setSelected("yearly")} />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Radio buttons can be arranged horizontally using flexbox."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Y=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var $,J,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>\r
      <Radio ariaLabel="Option 1" value="1" />\r
      <Radio ariaLabel="Option 2" checked value="2" />\r
      <Radio ariaLabel="Option 3" value="3" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Radio buttons can be used without a visible label. Always provide ariaLabel for accessibility."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: 12
      }}>Default Variant</h4>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>\r
          <Radio label="Small" size="small" variant="default" checked value="d1" />\r
          <Radio label="Medium" size="medium" variant="default" checked value="d2" />\r
          <Radio label="Large" size="large" variant="default" checked value="d3" />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: 12
      }}>Filled Variant</h4>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>\r
          <Radio label="Small" size="small" variant="filled" checked value="f1" />\r
          <Radio label="Medium" size="medium" variant="filled" checked value="f2" />\r
          <Radio label="Large" size="large" variant="filled" checked value="f3" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All size and variant combinations displayed together."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Oe=["Default","Sizes","Variants","States","RadioGroup","WithHelperText","ErrorState","HorizontalLayout","WithoutLabel","AllSizesAllVariants"];export{b as AllSizesAllVariants,o as Default,v as ErrorState,y as HorizontalLayout,p as RadioGroup,d as Sizes,u as States,c as Variants,m as WithHelperText,f as WithoutLabel,Oe as __namedExportsOrder,Ae as default};
