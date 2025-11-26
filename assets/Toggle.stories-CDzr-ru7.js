import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as x,r}from"./index-B2-qRKKC.js";import{c as $}from"./classNames-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G="_toggleContainer_pfo7y_1",J="_toggleTrack_pfo7y_10",Q="_disabled_pfo7y_13",X="_toggleThumb_pfo7y_23",Y="_toggleInput_pfo7y_34",l={toggleContainer:G,toggleTrack:J,disabled:Q,toggleThumb:X,toggleInput:Y,"size-sm":"_size-sm_pfo7y_51","size-md":"_size-md_pfo7y_55","size-lg":"_size-lg_pfo7y_59"},n=x.memo(x.forwardRef(({size:s="md",checked:i=!1,disabled:a=!1,onChange:t,ariaLabel:o="Toggle switch",className:P="",...q},U)=>{const[u,V]=r.useState(i),F=r.useCallback(K=>{const h=K.target.checked;V(h),t==null||t(h)},[t]),H=$(l.toggleContainer,l[`size-${s}`],a&&l.disabled,P);return e.jsxs("label",{className:H,role:"switch","aria-checked":u,"aria-label":o,children:[e.jsx("input",{ref:U,type:"checkbox",className:l.toggleInput,checked:u,disabled:a,onChange:F,"aria-label":o,...q}),e.jsx("div",{className:l.toggleTrack,children:e.jsx("div",{className:l.toggleThumb,"aria-hidden":"true"})})]})}));n.displayName="Toggle";n.__docgenInfo={description:`Toggle Component - On/Off switch with multiple sizes and states

Features:
- Three sizes: sm, md, lg
- States: on (checked), off (unchecked), disabled
- Fully accessible with ARIA labels
- Keyboard support (Space/Enter to toggle)
- Smooth animations`,methods:[],displayName:"Toggle",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Toggle size
@default "md"`,defaultValue:{value:"'md'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:`Controlled state (on/off/disabled)
@default "off"`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when toggle state changes"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for accessibility",defaultValue:{value:"'Toggle switch'",computed:!1}},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref forwarded to input element"}},composes:["Omit"]};const te={title:"Inputs/Toggle",component:n,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:"An on/off toggle switch component with multiple sizes and states. Fully accessible with keyboard support and ARIA attributes."}}}},d={args:{ariaLabel:"Toggle switch"},parameters:{docs:{source:{type:"code",state:"open"}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{size:"sm",ariaLabel:"Small toggle"}),e.jsx("span",{style:{fontSize:14},children:"Small"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{size:"md",ariaLabel:"Medium toggle"}),e.jsx("span",{style:{fontSize:14},children:"Medium"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{size:"lg",ariaLabel:"Large toggle"}),e.jsx("span",{style:{fontSize:14},children:"Large"})]})]}),parameters:{docs:{description:{story:"Toggle switches are available in three sizes: small, medium (default), and large."},source:{type:"code",state:"open"}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{checked:!1,ariaLabel:"Off state"}),e.jsx("span",{style:{fontSize:14},children:"Off (Unchecked)"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{checked:!0,ariaLabel:"On state"}),e.jsx("span",{style:{fontSize:14},children:"On (Checked)"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{disabled:!0,ariaLabel:"Disabled off"}),e.jsx("span",{style:{fontSize:14},children:"Disabled Off"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{checked:!0,disabled:!0,ariaLabel:"Disabled on"}),e.jsx("span",{style:{fontSize:14},children:"Disabled On"})]})]}),parameters:{docs:{description:{story:"Toggle switches support multiple states: off, on, disabled off, and disabled on."},source:{type:"code",state:"open"}}}},g={render:()=>{const[s,i]=r.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(n,{checked:s,onChange:i,ariaLabel:"Controlled toggle"}),e.jsx("span",{style:{fontSize:14},children:"Notifications"})]}),e.jsxs("p",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:["Status: ",s?"Enabled":"Disabled"]})]})},parameters:{docs:{description:{story:"Toggle can be used as a controlled component with checked and onChange props."},source:{type:"code",state:"open"}}}},m={render:()=>{const[s,i]=r.useState({notifications:!0,darkMode:!1,autoSave:!0});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:300},children:[e.jsx("span",{style:{fontSize:14,fontWeight:500},children:"Enable notifications"}),e.jsx(n,{checked:s.notifications,onChange:a=>i({...s,notifications:a}),ariaLabel:"Enable notifications"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:300},children:[e.jsx("span",{style:{fontSize:14,fontWeight:500},children:"Dark mode"}),e.jsx(n,{checked:s.darkMode,onChange:a=>i({...s,darkMode:a}),ariaLabel:"Dark mode"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:300},children:[e.jsx("span",{style:{fontSize:14,fontWeight:500},children:"Auto-save"}),e.jsx(n,{checked:s.autoSave,onChange:a=>i({...s,autoSave:a}),ariaLabel:"Auto-save"})]})]})},parameters:{docs:{description:{story:"Toggle switches commonly used in settings panels with labels."},source:{type:"code",state:"open"}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Small Size"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{size:"sm",ariaLabel:"Small off"}),e.jsx(n,{size:"sm",checked:!0,ariaLabel:"Small on"}),e.jsx(n,{size:"sm",disabled:!0,ariaLabel:"Small disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Medium Size"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{size:"md",ariaLabel:"Medium off"}),e.jsx(n,{size:"md",checked:!0,ariaLabel:"Medium on"}),e.jsx(n,{size:"md",disabled:!0,ariaLabel:"Medium disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12},children:"Large Size"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{size:"lg",ariaLabel:"Large off"}),e.jsx(n,{size:"lg",checked:!0,ariaLabel:"Large on"}),e.jsx(n,{size:"lg",disabled:!0,ariaLabel:"Large disabled"})]})]})]}),parameters:{docs:{description:{story:"All sizes with different states displayed together."},source:{type:"code",state:"open"}}}},y={render:()=>{const[s,i]=r.useState({emailNotifications:!0,pushNotifications:!1,smsNotifications:!1,marketingEmails:!0,productUpdates:!0,securityAlerts:!0}),a=(t,o)=>{i({...s,[t]:o})};return e.jsxs("div",{style:{maxWidth:400},children:[e.jsx("h3",{style:{marginBottom:16},children:"Notification Settings"}),e.jsxs("div",{style:{marginBottom:24},children:[e.jsx("h4",{style:{marginBottom:12,fontSize:14,fontWeight:600},children:"Communication"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14},children:"Email notifications"}),e.jsx(n,{checked:s.emailNotifications,onChange:t=>a("emailNotifications",t),ariaLabel:"Email notifications"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14},children:"Push notifications"}),e.jsx(n,{checked:s.pushNotifications,onChange:t=>a("pushNotifications",t),ariaLabel:"Push notifications"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14},children:"SMS notifications"}),e.jsx(n,{checked:s.smsNotifications,onChange:t=>a("smsNotifications",t),ariaLabel:"SMS notifications"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:12,fontSize:14,fontWeight:600},children:"Marketing"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14},children:"Marketing emails"}),e.jsx(n,{checked:s.marketingEmails,onChange:t=>a("marketingEmails",t),ariaLabel:"Marketing emails"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14},children:"Product updates"}),e.jsx(n,{checked:s.productUpdates,onChange:t=>a("productUpdates",t),ariaLabel:"Product updates"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:14},children:"Security alerts"}),e.jsx(n,{checked:s.securityAlerts,onChange:t=>a("securityAlerts",t),ariaLabel:"Security alerts"})]})]})]})]})},parameters:{docs:{description:{story:"Real-world example of toggles in a settings panel."},source:{type:"code",state:"open"}}}};var b,v,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ariaLabel: "Toggle switch"
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,z,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle size="sm" ariaLabel="Small toggle" />\r
        <span style={{
        fontSize: 14
      }}>Small</span>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle size="md" ariaLabel="Medium toggle" />\r
        <span style={{
        fontSize: 14
      }}>Medium</span>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle size="lg" ariaLabel="Large toggle" />\r
        <span style={{
        fontSize: 14
      }}>Large</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Toggle switches are available in three sizes: small, medium (default), and large."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var L,T,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle checked={false} ariaLabel="Off state" />\r
        <span style={{
        fontSize: 14
      }}>Off (Unchecked)</span>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle checked={true} ariaLabel="On state" />\r
        <span style={{
        fontSize: 14
      }}>On (Checked)</span>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle disabled ariaLabel="Disabled off" />\r
        <span style={{
        fontSize: 14
      }}>Disabled Off</span>\r
      </div>\r
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>\r
        <Toggle checked disabled ariaLabel="Disabled on" />\r
        <span style={{
        fontSize: 14
      }}>Disabled On</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Toggle switches support multiple states: off, on, disabled off, and disabled on."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var w,I,D;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>\r
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12
      }}>\r
          <Toggle checked={checked} onChange={setChecked} ariaLabel="Controlled toggle" />\r
          <span style={{
          fontSize: 14
        }}>Notifications</span>\r
        </div>\r
        <p style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>\r
          Status: {checked ? "Enabled" : "Disabled"}\r
        </p>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Toggle can be used as a controlled component with checked and onChange props."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(D=(I=g.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var M,N,_;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true
    });
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>\r
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 300
      }}>\r
          <span style={{
          fontSize: 14,
          fontWeight: 500
        }}>Enable notifications</span>\r
          <Toggle checked={settings.notifications} onChange={val => setSettings({
          ...settings,
          notifications: val
        })} ariaLabel="Enable notifications" />\r
        </div>\r
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 300
      }}>\r
          <span style={{
          fontSize: 14,
          fontWeight: 500
        }}>Dark mode</span>\r
          <Toggle checked={settings.darkMode} onChange={val => setSettings({
          ...settings,
          darkMode: val
        })} ariaLabel="Dark mode" />\r
        </div>\r
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 300
      }}>\r
          <span style={{
          fontSize: 14,
          fontWeight: 500
        }}>Auto-save</span>\r
          <Toggle checked={settings.autoSave} onChange={val => setSettings({
          ...settings,
          autoSave: val
        })} ariaLabel="Auto-save" />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Toggle switches commonly used in settings panels with labels."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var E,A,W;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: 12
      }}>Small Size</h4>\r
        <div style={{
        display: "flex",
        gap: 16
      }}>\r
          <Toggle size="sm" ariaLabel="Small off" />\r
          <Toggle size="sm" checked ariaLabel="Small on" />\r
          <Toggle size="sm" disabled ariaLabel="Small disabled" />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: 12
      }}>Medium Size</h4>\r
        <div style={{
        display: "flex",
        gap: 16
      }}>\r
          <Toggle size="md" ariaLabel="Medium off" />\r
          <Toggle size="md" checked ariaLabel="Medium on" />\r
          <Toggle size="md" disabled ariaLabel="Medium disabled" />\r
        </div>\r
      </div>\r
      <div>\r
        <h4 style={{
        marginBottom: 12
      }}>Large Size</h4>\r
        <div style={{
        display: "flex",
        gap: 16
      }}>\r
          <Toggle size="lg" ariaLabel="Large off" />\r
          <Toggle size="lg" checked ariaLabel="Large on" />\r
          <Toggle size="lg" disabled ariaLabel="Large disabled" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All sizes with different states displayed together."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(W=(A=f.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var O,R,B;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      emailNotifications: true,
      pushNotifications: false,
      smsNotifications: false,
      marketingEmails: true,
      productUpdates: true,
      securityAlerts: true
    });
    const updateSetting = (key: keyof typeof settings, value: boolean) => {
      setSettings({
        ...settings,
        [key]: value
      });
    };
    return <div style={{
      maxWidth: 400
    }}>\r
        <h3 style={{
        marginBottom: 16
      }}>Notification Settings</h3>\r
        \r
        <div style={{
        marginBottom: 24
      }}>\r
          <h4 style={{
          marginBottom: 12,
          fontSize: 14,
          fontWeight: 600
        }}>Communication</h4>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>\r
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>\r
              <span style={{
              fontSize: 14
            }}>Email notifications</span>\r
              <Toggle checked={settings.emailNotifications} onChange={val => updateSetting("emailNotifications", val)} ariaLabel="Email notifications" />\r
            </div>\r
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>\r
              <span style={{
              fontSize: 14
            }}>Push notifications</span>\r
              <Toggle checked={settings.pushNotifications} onChange={val => updateSetting("pushNotifications", val)} ariaLabel="Push notifications" />\r
            </div>\r
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>\r
              <span style={{
              fontSize: 14
            }}>SMS notifications</span>\r
              <Toggle checked={settings.smsNotifications} onChange={val => updateSetting("smsNotifications", val)} ariaLabel="SMS notifications" />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: 12,
          fontSize: 14,
          fontWeight: 600
        }}>Marketing</h4>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>\r
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>\r
              <span style={{
              fontSize: 14
            }}>Marketing emails</span>\r
              <Toggle checked={settings.marketingEmails} onChange={val => updateSetting("marketingEmails", val)} ariaLabel="Marketing emails" />\r
            </div>\r
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>\r
              <span style={{
              fontSize: 14
            }}>Product updates</span>\r
              <Toggle checked={settings.productUpdates} onChange={val => updateSetting("productUpdates", val)} ariaLabel="Product updates" />\r
            </div>\r
            <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>\r
              <span style={{
              fontSize: 14
            }}>Security alerts</span>\r
              <Toggle checked={settings.securityAlerts} onChange={val => updateSetting("securityAlerts", val)} ariaLabel="Security alerts" />\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Real-world example of toggles in a settings panel."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(B=(R=y.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const ae=["Default","Sizes","States","Controlled","WithLabels","AllSizes","SettingsExample"];export{f as AllSizes,g as Controlled,d as Default,y as SettingsExample,c as Sizes,p as States,m as WithLabels,ae as __namedExportsOrder,te as default};
