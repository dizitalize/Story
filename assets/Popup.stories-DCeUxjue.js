import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as i,R as O}from"./index-B2-qRKKC.js";import{r as qe}from"./index-kS-9iBlu.js";import{I as Oe}from"./Icon-fxUjVhc4.js";import{T}from"./Typography-BdmfNA7_.js";import{I as Te}from"./Input-CgYWvA8q.js";import{B as f}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B0WUkk9i.js";import"./classNames-2dOUpm6k.js";import"./Label-KEzZ_8lI.js";const Ee="_fadeIn_1s9y4_1",Ae="_scaleIn_1s9y4_1",y={"popup-overlay":"_popup-overlay_1s9y4_1",fadeIn:Ee,"popup-container":"_popup-container_1s9y4_14",scaleIn:Ae,"popup-container--sm":"_popup-container--sm_1s9y4_28","popup-container--md":"_popup-container--md_1s9y4_32","popup-container--lg":"_popup-container--lg_1s9y4_36","popup-container--xl":"_popup-container--xl_1s9y4_40","popup-header":"_popup-header_1s9y4_44","popup-icon":"_popup-icon_1s9y4_52","popup-titleContainer":"_popup-titleContainer_1s9y4_58","popup-body":"_popup-body_1s9y4_64","popup-footer":"_popup-footer_1s9y4_70","popup-close":"_popup-close_1s9y4_77"},E=({children:t})=>e.jsx("div",{className:y["popup-icon"],"aria-hidden":"true",children:t});E.displayName="PopupIcon";E.__docgenInfo={description:"",methods:[],displayName:"PopupIcon"};const A=({onClick:t})=>e.jsx("button",{type:"button",onClick:t,"aria-label":"Close",className:y["popup-close"],children:e.jsx(Oe,{name:"CloseIcon",size:20})});A.displayName="PopupCloseButton";A.__docgenInfo={description:"",methods:[],displayName:"PopupCloseButton"};const D=({icon:t,title:o,subtitle:n,onClose:r,showCloseButton:l=!0})=>e.jsxs("div",{className:y["popup-header"],children:[t&&e.jsx(E,{children:t}),e.jsxs("div",{className:y["popup-titleContainer"],children:[o&&e.jsx(T,{variant:"h3",style:{fontSize:"20px",fontWeight:600,marginBottom:n?"8px":0,color:"var(--color-neutral-900, #111827)"},children:o}),n&&e.jsx(T,{variant:"body2",style:{fontSize:"14px",color:"var(--color-neutral-600, #4B5563)",marginTop:"4px"},children:n})]}),l&&r&&e.jsx(A,{onClick:r})]});D.displayName="PopupHeader";D.__docgenInfo={description:"",methods:[],displayName:"PopupHeader",props:{showCloseButton:{defaultValue:{value:"true",computed:!1},required:!1}}};const R=({description:t,children:o,showInput:n,inputPlaceholder:r="Enter value...",inputValue:l,onInputChange:u})=>e.jsxs("div",{className:y["popup-body"],children:[t&&e.jsx(T,{variant:"body1",style:{fontSize:"14px",lineHeight:"1.6",color:"var(--color-neutral-700, #374151)"},children:t}),o,n&&e.jsx(Te,{placeholder:r,value:l,onChange:g=>u==null?void 0:u(g.target.value),size:"md",style:{width:"100%"}})]});R.displayName="PopupBody";R.__docgenInfo={description:"",methods:[],displayName:"PopupBody",props:{inputPlaceholder:{defaultValue:{value:"'Enter value...'",computed:!1},required:!1}}};const F=({primaryButton:t,secondaryButton:o})=>!t&&!o?null:e.jsxs("div",{className:y["popup-footer"],children:[o&&e.jsx(f,{variant:o.variant||"outlined",onClick:o.onClick,size:"md",children:o.label}),t&&e.jsx(f,{variant:t.variant||"filled",onClick:t.onClick,size:"md",children:t.label})]});F.displayName="PopupFooter";F.__docgenInfo={description:"",methods:[],displayName:"PopupFooter"};const De=()=>{if(typeof document>"u")return;const t="popup-animations";if(document.getElementById(t))return;const o=document.createElement("style");o.id=t,o.textContent=`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `,document.head.appendChild(o)},h=({id:t,open:o,defaultOpen:n=!1,onOpenChange:r,size:l="md",variant:u="default",icon:g,title:s,subtitle:a,description:m,children:c,showInput:w,inputPlaceholder:Ce,inputValue:xe,onInputChange:Pe,primaryButton:ke,secondaryButton:_e,showCloseButton:Be=!0,closeOnOverlayClick:V=!0,closeOnEsc:Y=!0,preventScroll:N=!0,className:je="",overlayClassName:ze=""})=>{const[Ie,Se]=i.useState(n),q=o!==void 0,v=q?o:Ie,L=i.useRef(null),U=i.useRef(null),$=i.useCallback(p=>{q||Se(p),r==null||r(p)},[q,r]),b=i.useCallback(()=>{$(!1)},[$]),we=i.useCallback(p=>{V&&p.target===p.currentTarget&&b()},[V,b]);if(i.useEffect(()=>{if(!v||!Y)return;const p=d=>{d.key==="Escape"&&b()};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[v,Y,b]),i.useEffect(()=>{if(!v)return;U.current=document.activeElement;const p=setTimeout(()=>{var C,H;const d=(C=L.current)==null?void 0:C.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');(H=d==null?void 0:d[0])==null||H.focus()},100);if(N){const d=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${d}px`,document.body.style.width="100%"}return De(),()=>{var d;if(clearTimeout(p),N){const C=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,parseInt(C||"0")*-1)}(d=U.current)==null||d.focus()}},[v,N]),!v)return null;const Ne=e.jsx("div",{className:[y["popup-overlay"],ze].filter(Boolean).join(" "),onClick:we,children:e.jsxs("div",{ref:L,id:t,role:"dialog","aria-modal":"true","aria-labelledby":s?`${t}-title`:void 0,"aria-describedby":m?`${t}-description`:void 0,className:[y["popup-container"],y[`popup-container--${l}`],je].filter(Boolean).join(" "),onClick:p=>p.stopPropagation(),children:[e.jsx(D,{icon:g,title:s,subtitle:a,onClose:b,showCloseButton:Be}),e.jsx(R,{description:m,showInput:w,inputPlaceholder:Ce,inputValue:xe,onInputChange:Pe,children:c}),e.jsx(F,{primaryButton:ke,secondaryButton:_e})]})});return qe.createPortal(Ne,document.body)};h.displayName="Popup";const W=({popups:t,onClose:o})=>e.jsx(e.Fragment,{children:t.map(n=>e.jsx(h,{...n.options,open:!0,onOpenChange:r=>{r||o(n.id)}},n.id))});W.displayName="PopupContainer";W.__docgenInfo={description:"",methods:[],displayName:"PopupContainer"};function Re(){const[t,o]=i.useState([]),n=i.useCallback((s,a={})=>{o(m=>[...m.filter(w=>w.id!==s),{id:s,options:{id:s,...a},createdAt:Date.now()}])},[]),r=i.useCallback(s=>{o(a=>a.filter(m=>m.id!==s))},[]),l=i.useCallback(s=>{o(a=>a.some(c=>c.id===s)?a.filter(c=>c.id!==s):a)},[]),u=i.useCallback((s,a)=>{o(m=>m.map(c=>c.id===s?{...c,options:{...c.options,...a}}:c))},[]),g=i.useCallback(s=>t.some(a=>a.id===s),[t]);return{open:n,close:r,toggle:l,update:u,popups:t,isOpen:g}}const Ke={title:"Feedback/Popup",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Modal/Popup component with focus trap, scroll lock, ESC close, and programmatic API."}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},variant:{control:"select",options:["default","confirmation","verification","terms"]},showCloseButton:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},closeOnEsc:{control:"boolean"},preventScroll:{control:"boolean"}}},x={args:{open:!0,size:"md",icon:"🎉",title:"Congratulations!",description:"Your action has been completed successfully. Would you like to proceed?",primaryButton:{label:"Accept",variant:"filled"},secondaryButton:{label:"Reject",variant:"outlined"}},parameters:{docs:{source:{type:"code",state:"open"}}}},P={args:{open:!0,size:"md",title:"Verify your email",subtitle:"We sent a code to your email address",showInput:!0,inputPlaceholder:"Enter verification code",primaryButton:{label:"Continue",variant:"filled"}},parameters:{docs:{source:{type:"code",state:"open"}}}},k={args:{open:!0,size:"lg",title:"Terms & Agreements",description:'By clicking "I agree", you acknowledge that you have read and understood our Terms of Service and Privacy Policy. These terms govern your use of our service and outline your rights and responsibilities. Please review them carefully before proceeding. If you do not agree with any part of these terms, please click "Nope 😌" to decline.',primaryButton:{label:"I agree",variant:"filled"},secondaryButton:{label:"Nope 😌",variant:"outlined"}},parameters:{docs:{source:{type:"code",state:"open"}}}},_={render:()=>{const t=()=>{const[o,n]=O.useState(!1);return e.jsxs("div",{children:[e.jsx(f,{onClick:()=>n(!0),children:"Open Popup"}),e.jsx(h,{open:o,onOpenChange:n,size:"md",icon:"🚀",title:"Welcome!",description:"This popup was triggered by a button click.",primaryButton:{label:"Got it",onClick:()=>n(!1)}})]})};return e.jsx(t,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},B={render:()=>{const t=()=>{const[o,n]=O.useState("md"),[r,l]=O.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[["sm","md","lg","xl"].map(u=>e.jsxs(f,{onClick:()=>{n(u),l(!0)},variant:"outlined",children:[u.toUpperCase()," Popup"]},u)),e.jsx(h,{open:r,onOpenChange:l,size:o,title:`${o.toUpperCase()} Size Popup`,description:"This demonstrates different popup sizes.",primaryButton:{label:"Close",onClick:()=>l(!1)}})]})};return e.jsx(t,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},j={args:{open:!0,size:"lg",title:"Privacy Policy",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",primaryButton:{label:"Accept"}},parameters:{docs:{source:{type:"code",state:"open"}}}},z={args:{open:!0,size:"md",title:"Important Notice",description:"You must explicitly close this popup using the button. Clicking outside will not close it.",closeOnOverlayClick:!1,primaryButton:{label:"I understand"}},parameters:{docs:{source:{type:"code",state:"open"}}}},I={render:()=>{const t=()=>{const o=Re();return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(f,{onClick:()=>o.open("confirm",{size:"md",icon:"✅",title:"Confirm Action",description:"Are you sure you want to proceed?",primaryButton:{label:"Yes",onClick:()=>o.close("confirm")},secondaryButton:{label:"No",onClick:()=>o.close("confirm")}}),children:"Open Confirmation"}),e.jsx(f,{onClick:()=>o.open("verify",{size:"md",title:"Enter Code",showInput:!0,inputPlaceholder:"Verification code",primaryButton:{label:"Submit",onClick:()=>o.close("verify")}}),variant:"outlined",children:"Open Verification"}),e.jsx(f,{onClick:()=>o.open("terms",{size:"lg",title:"Terms of Service",description:"Please read and accept our terms to continue using the service.",primaryButton:{label:"Accept",onClick:()=>o.close("terms")},secondaryButton:{label:"Decline",onClick:()=>o.close("terms")}}),variant:"outlined",children:"Open Terms"}),e.jsx(W,{popups:o.popups,onClose:o.close})]})};return e.jsx(t,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},S={args:{open:!0,size:"md",title:"Custom Content",children:e.jsxs("div",{style:{padding:"20px",background:"var(--color-neutral-50, #F9FAFB)",borderRadius:"8px"},children:[e.jsx("p",{style:{margin:0},children:"This is custom content inside the popup body."}),e.jsxs("ul",{style:{marginTop:12,paddingLeft:20},children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"})]})]}),primaryButton:{label:"Done"}},parameters:{docs:{source:{type:"code",state:"open"}}}};var G,M,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    open: true,
    size: 'md',
    icon: '🎉',
    title: 'Congratulations!',
    description: 'Your action has been completed successfully. Would you like to proceed?',
    primaryButton: {
      label: 'Accept',
      variant: 'filled'
    },
    secondaryButton: {
      label: 'Reject',
      variant: 'outlined'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(J=(M=x.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var K,Q,X;P.parameters={...P.parameters,docs:{...(K=P.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    open: true,
    size: 'md',
    title: 'Verify your email',
    subtitle: 'We sent a code to your email address',
    showInput: true,
    inputPlaceholder: 'Enter verification code',
    primaryButton: {
      label: 'Continue',
      variant: 'filled'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(X=(Q=P.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,oe;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    open: true,
    size: 'lg',
    title: 'Terms & Agreements',
    description: 'By clicking "I agree", you acknowledge that you have read and understood our Terms of Service and Privacy Policy. These terms govern your use of our service and outline your rights and responsibilities. Please review them carefully before proceeding. If you do not agree with any part of these terms, please click "Nope 😌" to decline.',
    primaryButton: {
      label: 'I agree',
      variant: 'filled'
    },
    secondaryButton: {
      label: 'Nope 😌',
      variant: 'outlined'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(oe=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,re;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const Demo: React.FC = () => {
      const [open, setOpen] = React.useState(false);
      return <div>\r
          <Button onClick={() => setOpen(true)}>Open Popup</Button>\r
          <Popup open={open} onOpenChange={setOpen} size="md" icon="🚀" title="Welcome!" description="This popup was triggered by a button click." primaryButton={{
          label: 'Got it',
          onClick: () => setOpen(false)
        }} />\r
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(re=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,ie,ae;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const Demo: React.FC = () => {
      const [size, setSize] = React.useState<'sm' | 'md' | 'lg' | 'xl'>('md');
      const [open, setOpen] = React.useState(false);
      return <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>\r
          {(['sm', 'md', 'lg', 'xl'] as const).map(s => <Button key={s} onClick={() => {
          setSize(s);
          setOpen(true);
        }} variant="outlined">\r
              {s.toUpperCase()} Popup\r
            </Button>)}\r
          <Popup open={open} onOpenChange={setOpen} size={size} title={\`\${size.toUpperCase()} Size Popup\`} description="This demonstrates different popup sizes." primaryButton={{
          label: 'Close',
          onClick: () => setOpen(false)
        }} />\r
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ae=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var pe,le,ce;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    open: true,
    size: 'lg',
    title: 'Privacy Policy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    primaryButton: {
      label: 'Accept'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ce=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,me;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    open: true,
    size: 'md',
    title: 'Important Notice',
    description: 'You must explicitly close this popup using the button. Clicking outside will not close it.',
    closeOnOverlayClick: false,
    primaryButton: {
      label: 'I understand'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(me=(de=z.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ye,fe,ge;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const Demo: React.FC = () => {
      const popup = usePopupController();
      return <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>\r
          <Button onClick={() => popup.open('confirm', {
          size: 'md',
          icon: '✅',
          title: 'Confirm Action',
          description: 'Are you sure you want to proceed?',
          primaryButton: {
            label: 'Yes',
            onClick: () => popup.close('confirm')
          },
          secondaryButton: {
            label: 'No',
            onClick: () => popup.close('confirm')
          }
        })}>\r
            Open Confirmation\r
          </Button>\r
          <Button onClick={() => popup.open('verify', {
          size: 'md',
          title: 'Enter Code',
          showInput: true,
          inputPlaceholder: 'Verification code',
          primaryButton: {
            label: 'Submit',
            onClick: () => popup.close('verify')
          }
        })} variant="outlined">\r
            Open Verification\r
          </Button>\r
          <Button onClick={() => popup.open('terms', {
          size: 'lg',
          title: 'Terms of Service',
          description: 'Please read and accept our terms to continue using the service.',
          primaryButton: {
            label: 'Accept',
            onClick: () => popup.close('terms')
          },
          secondaryButton: {
            label: 'Decline',
            onClick: () => popup.close('terms')
          }
        })} variant="outlined">\r
            Open Terms\r
          </Button>\r
          <PopupContainer popups={popup.popups} onClose={popup.close} />\r
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ge=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ve,be,he;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    open: true,
    size: 'md',
    title: 'Custom Content',
    children: <div style={{
      padding: '20px',
      background: 'var(--color-neutral-50, #F9FAFB)',
      borderRadius: '8px'
    }}>\r
        <p style={{
        margin: 0
      }}>This is custom content inside the popup body.</p>\r
        <ul style={{
        marginTop: 12,
        paddingLeft: 20
      }}>\r
          <li>Item 1</li>\r
          <li>Item 2</li>\r
          <li>Item 3</li>\r
        </ul>\r
      </div>,
    primaryButton: {
      label: 'Done'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(he=(be=S.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Qe=["ConfirmationPopup","VerificationPopup","TermsPopup","ButtonTriggeredPopup","PopupSizes","LongContent","NoOverlayClose","ProgrammaticController","WithCustomContent"];export{_ as ButtonTriggeredPopup,x as ConfirmationPopup,j as LongContent,z as NoOverlayClose,B as PopupSizes,I as ProgrammaticController,k as TermsPopup,P as VerificationPopup,S as WithCustomContent,Qe as __namedExportsOrder,Ke as default};
