import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as o}from"./index-B2-qRKKC.js";import{I as r}from"./Input-Di0Rlviz.js";import{I as a}from"./Icon-CQ1yD0uX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";import"./Label-KEzZ_8lI.js";import"./iframe-3Q35QAIm.js";const ye={title:"Inputs/Input",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},state:{control:"select",options:["placeholder","focus-placeholder","disabled-placeholder","filled","disabled-filled","filled-placeholder","warning","success","error"]},label:{control:"text"},disabled:{control:"boolean"},hintText:{control:"boolean"}},parameters:{docs:{description:{component:"A text input component with various states, sizes, and support for leading/trailing icons and labels."}}}},u={args:{placeholder:"Enter text...",size:"medium"},parameters:{docs:{source:{type:"code",state:"open"}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{size:"small",placeholder:"Small input"}),e.jsx(r,{size:"medium",placeholder:"Medium input"}),e.jsx(r,{size:"large",placeholder:"Large input"})]}),parameters:{docs:{description:{story:"Input comes in three sizes: small, medium, and large."},source:{type:"code",state:"open"}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{state:"placeholder",placeholder:"Placeholder state"}),e.jsx(r,{state:"focus-placeholder",placeholder:"Focus state"}),e.jsx(r,{state:"disabled-placeholder",placeholder:"Disabled state",disabled:!0}),e.jsx(r,{state:"filled",value:"Filled state",readOnly:!0}),e.jsx(r,{state:"warning",placeholder:"Warning state"}),e.jsx(r,{state:"success",placeholder:"Success state"}),e.jsx(r,{state:"error",placeholder:"Error state"})]}),parameters:{docs:{description:{story:"Input supports multiple states: placeholder, focus-placeholder, disabled-placeholder, filled, warning, success, and error."},source:{type:"code",state:"open"}}}},g={args:{label:"Email address",placeholder:"Enter your email"},parameters:{docs:{description:{story:"Add a label above the input field."},source:{type:"code",state:"open"}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(r,{label:"Username",placeholder:"Choose a unique username",hintText:!0}),e.jsx(r,{label:"Password",type:"password",placeholder:"Must be at least 8 characters",hintText:!0})]}),parameters:{docs:{description:{story:"Enable hint text display with the hintText prop."},source:{type:"code",state:"open"}}}},y={render:()=>{const[n,t]=o.useState(""),[s,j]=o.useState(!1),d=()=>{j(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n))};return e.jsxs("div",{children:[e.jsx(r,{label:"Email",placeholder:"Enter your email",value:n,onChange:p=>t(p.target.value),onBlur:d,state:s?"error":"placeholder"}),s&&e.jsx("div",{style:{color:"var(--color-error-600)",fontSize:12,marginTop:4},children:"Please enter a valid email address"})]})},parameters:{docs:{description:{story:"Show validation errors with the error state."},source:{type:"code",state:"open"}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{placeholder:"Search...",leadingIcon:e.jsx(a,{name:"search",variant:"regular"})}),e.jsx(r,{placeholder:"Enter email",leadingIcon:e.jsx(a,{name:"envelope",variant:"regular"})}),e.jsx(r,{placeholder:"Enter phone",leadingIcon:e.jsx(a,{name:"phone",variant:"regular"})})]}),parameters:{docs:{description:{story:"Add an icon at the beginning of the input field."},source:{type:"code",state:"open"}}}},f={render:()=>{const[n,t]=o.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{placeholder:"Search...",trailingIcon:e.jsx(a,{name:"search",variant:"regular"})}),e.jsx(r,{type:n?"text":"password",placeholder:"Enter password",trailingIcon:e.jsx(a,{name:n?"eye-slash":"eye",variant:"regular",onClick:()=>t(!n),style:{cursor:"pointer"}})})]})},parameters:{docs:{description:{story:"Add an icon at the end of the input field, optionally interactive."},source:{type:"code",state:"open"}}}},w={render:()=>e.jsx(r,{placeholder:"Search...",leadingIcon:e.jsx(a,{name:"search",variant:"regular"}),trailingIcon:e.jsx(a,{name:"times",variant:"regular",style:{cursor:"pointer"}})}),parameters:{docs:{description:{story:"Use both leading and trailing icons together."},source:{type:"code",state:"open"}}}},I={render:()=>{const[n,t]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(r,{label:"Controlled Input",placeholder:"Type something...",value:n,onChange:s=>t(s.target.value)}),e.jsxs("div",{style:{fontSize:12,color:"var(--color-text-secondary)",marginTop:4},children:["Character count: ",n.length]})]}),e.jsx("button",{onClick:()=>t(""),style:{padding:"8px 16px",borderRadius:4,border:"none",backgroundColor:"var(--color-primary-600)",color:"white",cursor:"pointer"},children:"Clear"})]})},parameters:{docs:{description:{story:"Control the input value with React state."},source:{type:"code",state:"open"}}}},b={render:()=>{const[n,t]=o.useState(""),[s,j]=o.useState(""),[d,p]=o.useState(!1),[l,le]=o.useState({}),ie=c=>{c.preventDefault();const i={};n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(i.email="Invalid email format"):i.email="Email is required",s?s.length<8&&(i.password="Password must be at least 8 characters"):i.password="Password is required",le(i),Object.keys(i).length===0&&alert("Form submitted successfully!")};return e.jsxs("form",{onSubmit:ie,style:{maxWidth:400,display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(r,{label:"Email",type:"email",placeholder:"Enter your email",value:n,onChange:c=>t(c.target.value),leadingIcon:e.jsx(a,{name:"envelope",variant:"regular"}),state:l.email?"error":"placeholder"}),l.email&&e.jsx("div",{style:{color:"var(--color-error-600)",fontSize:12,marginTop:4},children:l.email})]}),e.jsxs("div",{children:[e.jsx(r,{label:"Password",type:d?"text":"password",placeholder:"Enter your password",value:s,onChange:c=>j(c.target.value),leadingIcon:e.jsx(a,{name:"lock",variant:"regular"}),trailingIcon:e.jsx(a,{name:d?"eye-slash":"eye",variant:"regular",onClick:()=>p(!d),style:{cursor:"pointer"}}),state:l.password?"error":"placeholder"}),l.password&&e.jsx("div",{style:{color:"var(--color-error-600)",fontSize:12,marginTop:4},children:l.password})]}),e.jsx("button",{type:"submit",style:{padding:"10px 16px",borderRadius:4,border:"none",backgroundColor:"var(--color-primary-600)",color:"white",cursor:"pointer",fontWeight:600},children:"Sign In"})]})},parameters:{docs:{description:{story:"Example of a login form using Input components with validation."},source:{type:"code",state:"open"}}}},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Small"}),e.jsx(r,{size:"small",label:"Small Input",placeholder:"Enter text",leadingIcon:e.jsx(a,{name:"user",variant:"regular"}),hintText:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Medium"}),e.jsx(r,{size:"medium",label:"Medium Input",placeholder:"Enter text",leadingIcon:e.jsx(a,{name:"user",variant:"regular"}),hintText:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:16},children:"Large"}),e.jsx(r,{size:"large",label:"Large Input",placeholder:"Enter text",leadingIcon:e.jsx(a,{name:"user",variant:"regular"}),hintText:!0})]})]}),parameters:{docs:{description:{story:"Comparison of all input sizes with labels, icons, and hint text."},source:{type:"code",state:"open"}}}};var E,z,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "medium"
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var P,T,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Input size="small" placeholder="Small input" />\r
      <Input size="medium" placeholder="Medium input" />\r
      <Input size="large" placeholder="Large input" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Input comes in three sizes: small, medium, and large."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var W,k,B;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Input state="placeholder" placeholder="Placeholder state" />\r
      <Input state="focus-placeholder" placeholder="Focus state" />\r
      <Input state="disabled-placeholder" placeholder="Disabled state" disabled />\r
      <Input state="filled" value="Filled state" readOnly />\r
      <Input state="warning" placeholder="Warning state" />\r
      <Input state="success" placeholder="Success state" />\r
      <Input state="error" placeholder="Error state" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Input supports multiple states: placeholder, focus-placeholder, disabled-placeholder, filled, warning, success, and error."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(B=(k=h.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var L,R,A;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "Enter your email"
  },
  parameters: {
    docs: {
      description: {
        story: "Add a label above the input field."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var F,M,q;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <Input label="Username" placeholder="Choose a unique username" hintText />\r
      <Input label="Password" type="password" placeholder="Must be at least 8 characters" hintText />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Enable hint text display with the hintText prop."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(q=(M=x.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var O,U,V;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const handleBlur = () => {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      setError(!emailRegex.test(email));
    };
    return <div>\r
        <Input label="Email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} onBlur={handleBlur} state={error ? "error" : "placeholder"} />\r
        {error && <div style={{
        color: "var(--color-error-600)",
        fontSize: 12,
        marginTop: 4
      }}>Please enter a valid email address</div>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Show validation errors with the error state."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var $,H,_;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Input placeholder="Search..." leadingIcon={<Icon name="search" variant="regular" />} />\r
      <Input placeholder="Enter email" leadingIcon={<Icon name="envelope" variant="regular" />} />\r
      <Input placeholder="Enter phone" leadingIcon={<Icon name="phone" variant="regular" />} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Add an icon at the beginning of the input field."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(_=(H=v.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>\r
        <Input placeholder="Search..." trailingIcon={<Icon name="search" variant="regular" />} />\r
        <Input type={showPassword ? "text" : "password"} placeholder="Enter password" trailingIcon={<Icon name={showPassword ? "eye-slash" : "eye"} variant="regular" onClick={() => setShowPassword(!showPassword)} style={{
        cursor: "pointer"
      }} />} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Add an icon at the end of the input field, optionally interactive."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Input placeholder="Search..." leadingIcon={<Icon name="search" variant="regular" />} trailingIcon={<Icon name="times" variant="regular" style={{
    cursor: "pointer"
  }} />} />,
  parameters: {
    docs: {
      description: {
        story: "Use both leading and trailing icons together."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>\r
        <div>\r
          <Input label="Controlled Input" placeholder="Type something..." value={value} onChange={e => setValue(e.target.value)} />\r
          <div style={{
          fontSize: 12,
          color: "var(--color-text-secondary)",
          marginTop: 4
        }}>Character count: {value.length}</div>\r
        </div>\r
        <button onClick={() => setValue("")} style={{
        padding: "8px 16px",
        borderRadius: 4,
        border: "none",
        backgroundColor: "var(--color-primary-600)",
        color: "white",
        cursor: "pointer"
      }}>\r
          Clear\r
        </button>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Control the input value with React state."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ne,ae;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{
      email?: string;
      password?: string;
    }>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: {
        email?: string;
        password?: string;
      } = {};
      if (!email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format";
      }
      if (!password) {
        newErrors.password = "Password is required";
      } else if (password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        alert("Form submitted successfully!");
      }
    };
    return <form onSubmit={handleSubmit} style={{
      maxWidth: 400,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>\r
        <div>\r
          <Input label="Email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} leadingIcon={<Icon name="envelope" variant="regular" />} state={errors.email ? "error" : "placeholder"} />\r
          {errors.email && <div style={{
          color: "var(--color-error-600)",
          fontSize: 12,
          marginTop: 4
        }}>{errors.email}</div>}\r
        </div>\r
        <div>\r
          <Input label="Password" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} leadingIcon={<Icon name="lock" variant="regular" />} trailingIcon={<Icon name={showPassword ? "eye-slash" : "eye"} variant="regular" onClick={() => setShowPassword(!showPassword)} style={{
          cursor: "pointer"
        }} />} state={errors.password ? "error" : "placeholder"} />\r
          {errors.password && <div style={{
          color: "var(--color-error-600)",
          fontSize: 12,
          marginTop: 4
        }}>{errors.password}</div>}\r
        </div>\r
        <button type="submit" style={{
        padding: "10px 16px",
        borderRadius: 4,
        border: "none",
        backgroundColor: "var(--color-primary-600)",
        color: "white",
        cursor: "pointer",
        fontWeight: 600
      }}>\r
          Sign In\r
        </button>\r
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a login form using Input components with validation."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ae=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,se,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <div>\r
        <h3 style={{
        marginBottom: 16
      }}>Small</h3>\r
        <Input size="small" label="Small Input" placeholder="Enter text" leadingIcon={<Icon name="user" variant="regular" />} hintText />\r
      </div>\r
      <div>\r
        <h3 style={{
        marginBottom: 16
      }}>Medium</h3>\r
        <Input size="medium" label="Medium Input" placeholder="Enter text" leadingIcon={<Icon name="user" variant="regular" />} hintText />\r
      </div>\r
      <div>\r
        <h3 style={{
        marginBottom: 16
      }}>Large</h3>\r
        <Input size="large" label="Large Input" placeholder="Enter text" leadingIcon={<Icon name="user" variant="regular" />} hintText />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all input sizes with labels, icons, and hint text."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const ve=["Default","Sizes","States","WithLabel","WithHintText","ErrorState","WithLeadingIcon","WithTrailingIcon","WithBothIcons","Controlled","LoginForm","AllSizes"];export{S as AllSizes,I as Controlled,u as Default,y as ErrorState,b as LoginForm,m as Sizes,h as States,w as WithBothIcons,x as WithHintText,g as WithLabel,v as WithLeadingIcon,f as WithTrailingIcon,ve as __namedExportsOrder,ye as default};
