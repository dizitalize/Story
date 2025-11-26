import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as C}from"./index-B2-qRKKC.js";import{C as n}from"./Checkbox-Bx2Vk9iC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Label-KEzZ_8lI.js";import"./classNames-2dOUpm6k.js";const he={title:"Inputs/Checkbox",component:n,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["small","medium","large"]},variant:{control:{type:"radio"},options:["default","soft"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},parameters:{docs:{description:{component:"A customizable checkbox component supporting various states, sizes, and variants. Fully accessible with keyboard navigation and ARIA attributes."}}}},l={args:{label:"Accept terms and conditions"},parameters:{docs:{source:{type:"code",state:"open"}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Small checkbox",size:"small"}),e.jsx(n,{label:"Medium checkbox",size:"medium"}),e.jsx(n,{label:"Large checkbox",size:"large"})]}),parameters:{docs:{description:{story:"Checkbox is available in three sizes: small, medium (default), and large."},source:{type:"code",state:"open"}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Default variant",variant:"default",checked:!0}),e.jsx(n,{label:"Soft variant",variant:"soft",checked:!0})]}),parameters:{docs:{description:{story:"Checkbox supports default and soft variants for different visual styles."},source:{type:"code",state:"open"}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Unchecked",checked:!1}),e.jsx(n,{label:"Checked",checked:!0}),e.jsx(n,{label:"Indeterminate",indeterminate:!0}),e.jsx(n,{label:"Disabled unchecked",disabled:!0}),e.jsx(n,{label:"Disabled checked",checked:!0,disabled:!0}),e.jsx(n,{label:"Disabled indeterminate",indeterminate:!0,disabled:!0})]}),parameters:{docs:{description:{story:"Checkbox supports multiple states: unchecked, checked, indeterminate (partially checked), and disabled."},source:{type:"code",state:"open"}}}},h={render:()=>{const[r,c]=C.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Controlled checkbox",checked:r,onChange:o=>c(o.target.checked)}),e.jsxs("p",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:["Status: ",r?"Checked":"Unchecked"]})]})},parameters:{docs:{description:{story:"Checkbox can be used as a controlled component with checked and onChange props."},source:{type:"code",state:"open"}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Newsletter subscription",helperText:"Get updates about new features"}),e.jsx(n,{label:"Terms and conditions",helperText:"You must accept to continue",checked:!0})]}),parameters:{docs:{description:{story:"Checkbox can display helper text below the label for additional context."},source:{type:"code",state:"open"}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Accept terms",error:!0,errorMessage:"You must accept the terms"}),e.jsx(n,{label:"Subscribe to newsletter",error:!0,errorMessage:"Invalid selection",checked:!0})]}),parameters:{docs:{description:{story:"Checkbox supports error state with custom error messages."},source:{type:"code",state:"open"}}}},b={render:()=>{const[r,c]=C.useState([]),o=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}],g=(a,s)=>{c(t=>s?[...t,a]:t.filter(f=>f!==a))};return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:12,fontWeight:600},children:"Select your frameworks:"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:o.map(a=>e.jsx(n,{label:a.label,value:a.value,checked:r.includes(a.value),onChange:s=>g(a.value,s.target.checked)},a.value))}),e.jsxs("div",{style:{marginTop:16,fontSize:14,color:"var(--color-text-secondary)"},children:["Selected: ",r.length>0?r.join(", "):"None"]})]})},parameters:{docs:{description:{story:"Multiple checkboxes can be grouped together for multi-selection scenarios."},source:{type:"code",state:"open"}}}},x={render:()=>{const[r,c]=C.useState({child1:!1,child2:!1,child3:!1}),o=Object.values(r).every(Boolean),g=Object.values(r).some(Boolean)&&!o,a=t=>{c({child1:t,child2:t,child3:t})},s=(t,f)=>{c(se=>({...se,[t]:f}))};return e.jsxs("div",{children:[e.jsx(n,{label:"Select all",checked:o,indeterminate:g,onChange:t=>a(t.target.checked)}),e.jsxs("div",{style:{marginLeft:24,marginTop:12,display:"flex",flexDirection:"column",gap:8},children:[e.jsx(n,{label:"Option 1",checked:r.child1,onChange:t=>s("child1",t.target.checked)}),e.jsx(n,{label:"Option 2",checked:r.child2,onChange:t=>s("child2",t.target.checked)}),e.jsx(n,{label:"Option 3",checked:r.child3,onChange:t=>s("child3",t.target.checked)})]})]})},parameters:{docs:{description:{story:"Indeterminate state is useful for parent checkboxes when some but not all child items are selected."},source:{type:"code",state:"open"}}}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Default Variant"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{label:"Small",size:"small",variant:"default",checked:!0}),e.jsx(n,{label:"Medium",size:"medium",variant:"default",checked:!0}),e.jsx(n,{label:"Large",size:"large",variant:"default",checked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Soft Variant"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{label:"Small",size:"small",variant:"soft",checked:!0}),e.jsx(n,{label:"Medium",size:"medium",variant:"soft",checked:!0}),e.jsx(n,{label:"Large",size:"large",variant:"soft",checked:!0})]})]})]}),parameters:{docs:{description:{story:"All size and variant combinations displayed together."},source:{type:"code",state:"open"}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{ariaLabel:"Option 1"}),e.jsx(n,{ariaLabel:"Option 2",checked:!0}),e.jsx(n,{ariaLabel:"Option 3",indeterminate:!0})]}),parameters:{docs:{description:{story:"Checkbox can be used without a visible label. Always provide ariaLabel for accessibility."},source:{type:"code",state:"open"}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"Custom styled checkbox",checked:!0,style:{padding:8,backgroundColor:"var(--color-primary-50)",borderRadius:"var(--radius-md)"}}),e.jsx(n,{label:"Another custom style",checked:!0,className:"custom-checkbox-class"})]}),parameters:{docs:{description:{story:"Checkbox supports custom styling via style prop or className."},source:{type:"code",state:"open"}}}};var j,S,D;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(D=(S=l.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var z,I,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Checkbox label="Small checkbox" size="small" />\r
      <Checkbox label="Medium checkbox" size="medium" />\r
      <Checkbox label="Large checkbox" size="large" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox is available in three sizes: small, medium (default), and large."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var A,L,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Checkbox label="Default variant" variant="default" checked />\r
      <Checkbox label="Soft variant" variant="soft" checked />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox supports default and soft variants for different visual styles."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(O=(L=i.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var T,M,B;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Checkbox label="Unchecked" checked={false} />\r
      <Checkbox label="Checked" checked={true} />\r
      <Checkbox label="Indeterminate" indeterminate={true} />\r
      <Checkbox label="Disabled unchecked" disabled />\r
      <Checkbox label="Disabled checked" checked disabled />\r
      <Checkbox label="Disabled indeterminate" indeterminate disabled />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox supports multiple states: unchecked, checked, indeterminate (partially checked), and disabled."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var V,N,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>\r
        <Checkbox label="Controlled checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />\r
        <p style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>\r
          Status: {checked ? "Checked" : "Unchecked"}\r
        </p>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox can be used as a controlled component with checked and onChange props."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(E=(N=h.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,W,G;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Checkbox label="Newsletter subscription" helperText="Get updates about new features" />\r
      <Checkbox label="Terms and conditions" helperText="You must accept to continue" checked />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox can display helper text below the label for additional context."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(G=(W=u.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var U,Y,P;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Checkbox label="Accept terms" error errorMessage="You must accept the terms" />\r
      <Checkbox label="Subscribe to newsletter" error errorMessage="Invalid selection" checked />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox supports error state with custom error messages."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(P=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var H,_,F;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
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
    const handleChange = (value: string, checked: boolean) => {
      setSelected(prev => checked ? [...prev, value] : prev.filter(v => v !== value));
    };
    return <div>\r
        <div style={{
        marginBottom: 12,
        fontWeight: 600
      }}>\r
          Select your frameworks:\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>\r
          {options.map(option => <Checkbox key={option.value} label={option.label} value={option.value} checked={selected.includes(option.value)} onChange={e => handleChange(option.value, e.target.checked)} />)}\r
        </div>\r
        <div style={{
        marginTop: 16,
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>\r
          Selected: {selected.length > 0 ? selected.join(", ") : "None"}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple checkboxes can be grouped together for multi-selection scenarios."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,J,K;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      child1: false,
      child2: false,
      child3: false
    });
    const allChecked = Object.values(checkedItems).every(Boolean);
    const someChecked = Object.values(checkedItems).some(Boolean) && !allChecked;
    const handleParentChange = (checked: boolean) => {
      setCheckedItems({
        child1: checked,
        child2: checked,
        child3: checked
      });
    };
    const handleChildChange = (key: keyof typeof checkedItems, checked: boolean) => {
      setCheckedItems(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div>\r
        <Checkbox label="Select all" checked={allChecked} indeterminate={someChecked} onChange={e => handleParentChange(e.target.checked)} />\r
        <div style={{
        marginLeft: 24,
        marginTop: 12,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>\r
          <Checkbox label="Option 1" checked={checkedItems.child1} onChange={e => handleChildChange("child1", e.target.checked)} />\r
          <Checkbox label="Option 2" checked={checkedItems.child2} onChange={e => handleChildChange("child2", e.target.checked)} />\r
          <Checkbox label="Option 3" checked={checkedItems.child3} onChange={e => handleChildChange("child3", e.target.checked)} />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Indeterminate state is useful for parent checkboxes when some but not all child items are selected."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
          <Checkbox label="Small" size="small" variant="default" checked />\r
          <Checkbox label="Medium" size="medium" variant="default" checked />\r
          <Checkbox label="Large" size="large" variant="default" checked />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: 12
      }}>Soft Variant</h4>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>\r
          <Checkbox label="Small" size="small" variant="soft" checked />\r
          <Checkbox label="Medium" size="medium" variant="soft" checked />\r
          <Checkbox label="Large" size="large" variant="soft" checked />\r
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
}`,...(Z=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ne;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16,
    alignItems: "center"
  }}>\r
      <Checkbox ariaLabel="Option 1" />\r
      <Checkbox ariaLabel="Option 2" checked />\r
      <Checkbox ariaLabel="Option 3" indeterminate />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox can be used without a visible label. Always provide ariaLabel for accessibility."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Checkbox label="Custom styled checkbox" checked style={{
      padding: 8,
      backgroundColor: "var(--color-primary-50)",
      borderRadius: "var(--radius-md)"
    }} />\r
      <Checkbox label="Another custom style" checked className="custom-checkbox-class" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox supports custom styling via style prop or className."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const ue=["Default","Sizes","Variants","States","Controlled","WithHelperText","ErrorState","CheckboxGroup","IndeterminateExample","AllSizesAllVariants","WithoutLabel","CustomStyling"];export{k as AllSizesAllVariants,b as CheckboxGroup,h as Controlled,v as CustomStyling,l as Default,m as ErrorState,x as IndeterminateExample,d as Sizes,p as States,i as Variants,u as WithHelperText,y as WithoutLabel,ue as __namedExportsOrder,he as default};
