import{j as t}from"./jsx-runtime-DF2Pcvd1.js";import{r as s,R as N}from"./index-B2-qRKKC.js";import{r as Ne}from"./index-kS-9iBlu.js";import{I as Ee}from"./Icon-dy69MN_5.js";import{T as E}from"./Typography-BdmfNA7_.js";import{I as Fe}from"./Input-DuNUc9ZW.js";import{B as f}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";import"./Label-KEzZ_8lI.js";const We={sm:{width:"90%",maxWidth:"400px"},md:{width:"90%",maxWidth:"520px"},lg:{width:"90%",maxWidth:"680px"},xl:{width:"90%",maxWidth:"840px"}},y={padding:"32px",headerGap:"16px",bodyGap:"20px",footerGap:"12px",iconSize:48,closeButtonSize:24},Ae={container:"var(--radius-2xl, 20px)"};function Re(o){const e=We[o];return{position:"relative",width:e.width,maxWidth:e.maxWidth,backgroundColor:"var(--color-neutral-0, #FFFFFF)",borderRadius:Ae.container,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",padding:y.padding,maxHeight:"90vh",overflowY:"auto",animation:"scaleIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",fontFamily:"var(--font-family, system-ui, -apple-system, sans-serif)"}}const De={display:"flex",alignItems:"flex-start",gap:y.headerGap,marginBottom:y.bodyGap,position:"relative"},_e={display:"flex",flexDirection:"column",gap:y.bodyGap},Ve={display:"flex",gap:y.footerGap,justifyContent:"flex-end",marginTop:"32px"},Ye={position:"absolute",top:0,right:0,width:y.closeButtonSize,height:y.closeButtonSize,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:"transparent",border:"none",padding:0,color:"var(--color-neutral-500, #6B7280)",transition:"color 0.2s"},Ge={fontSize:`${y.iconSize}px`,lineHeight:1,flexShrink:0},Le={flex:1,minWidth:0,paddingRight:"32px"},Ue=()=>{if(typeof document>"u")return;const o="popup-animations";if(document.getElementById(o))return;const e=document.createElement("style");e.id=o,e.textContent=`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `,document.head.appendChild(e)},F=({children:o})=>t.jsx("div",{style:Ge,"aria-hidden":"true",children:o});F.displayName="PopupIcon";F.__docgenInfo={description:"",methods:[],displayName:"PopupIcon"};const W=({onClick:o})=>t.jsx("button",{type:"button",onClick:o,"aria-label":"Close",style:Ye,onMouseEnter:e=>{e.currentTarget.style.color="var(--color-neutral-700, #374151)"},onMouseLeave:e=>{e.currentTarget.style.color="var(--color-neutral-500, #6B7280)"},children:t.jsx(Ee,{name:"CloseIcon",size:20})});W.displayName="PopupCloseButton";W.__docgenInfo={description:"",methods:[],displayName:"PopupCloseButton"};const A=({icon:o,title:e,subtitle:n,onClose:r,showCloseButton:p=!0})=>t.jsxs("div",{style:De,children:[o&&t.jsx(F,{children:o}),t.jsxs("div",{style:Le,children:[e&&t.jsx(E,{variant:"h3",style:{fontSize:"20px",fontWeight:600,marginBottom:n?"8px":0,color:"var(--color-neutral-900, #111827)"},children:e}),n&&t.jsx(E,{variant:"body2",style:{fontSize:"14px",color:"var(--color-neutral-600, #4B5563)",marginTop:"4px"},children:n})]}),p&&r&&t.jsx(W,{onClick:r})]});A.displayName="PopupHeader";A.__docgenInfo={description:"",methods:[],displayName:"PopupHeader",props:{showCloseButton:{defaultValue:{value:"true",computed:!1},required:!1}}};const R=({description:o,children:e,showInput:n,inputPlaceholder:r="Enter value...",inputValue:p,onInputChange:u})=>t.jsxs("div",{style:_e,children:[o&&t.jsx(E,{variant:"body1",style:{fontSize:"14px",lineHeight:"1.6",color:"var(--color-neutral-700, #374151)"},children:o}),e,n&&t.jsx(Fe,{placeholder:r,value:p,onChange:g=>u==null?void 0:u(g.target.value),size:"md",style:{width:"100%"}})]});R.displayName="PopupBody";R.__docgenInfo={description:"",methods:[],displayName:"PopupBody",props:{inputPlaceholder:{defaultValue:{value:"'Enter value...'",computed:!1},required:!1}}};const D=({primaryButton:o,secondaryButton:e})=>!o&&!e?null:t.jsxs("div",{style:Ve,children:[e&&t.jsx(f,{variant:e.variant||"outlined",onClick:e.onClick,size:"md",children:e.label}),o&&t.jsx(f,{variant:o.variant||"filled",onClick:o.onClick,size:"md",children:o.label})]});D.displayName="PopupFooter";D.__docgenInfo={description:"",methods:[],displayName:"PopupFooter"};const v=({id:o,open:e,defaultOpen:n=!1,onOpenChange:r,size:p="md",variant:u="default",icon:g,title:i,subtitle:a,description:m,children:c,showInput:T,inputPlaceholder:be,inputValue:Ce,onInputChange:ke,primaryButton:Pe,secondaryButton:Be,showCloseButton:Se=!0,closeOnOverlayClick:V=!0,closeOnEsc:Y=!0,preventScroll:q=!0,className:ze="",overlayClassName:je=""})=>{const[we,Ie]=s.useState(n),O=e!==void 0,x=O?e:we,G=s.useRef(null),L=s.useRef(null),U=s.useCallback(l=>{O||Ie(l),r==null||r(l)},[O,r]),h=s.useCallback(()=>{U(!1)},[U]),Te=s.useCallback(l=>{V&&l.target===l.currentTarget&&h()},[V,h]);if(s.useEffect(()=>{if(!x||!Y)return;const l=d=>{d.key==="Escape"&&h()};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[x,Y,h]),s.useEffect(()=>{if(!x)return;L.current=document.activeElement;const l=setTimeout(()=>{var b,H;const d=(b=G.current)==null?void 0:b.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');(H=d==null?void 0:d[0])==null||H.focus()},100);if(q){const d=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${d}px`,document.body.style.width="100%"}return Ue(),()=>{var d;if(clearTimeout(l),q){const b=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,parseInt(b||"0")*-1)}(d=L.current)==null||d.focus()}},[x,q]),!x)return null;const qe=Re(p),Oe=t.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,padding:"20px",backdropFilter:"blur(2px)",animation:"fadeIn 0.2s ease-out"},className:je,onClick:Te,children:t.jsxs("div",{ref:G,id:o,role:"dialog","aria-modal":"true","aria-labelledby":i?`${o}-title`:void 0,"aria-describedby":m?`${o}-description`:void 0,style:qe,className:ze,onClick:l=>l.stopPropagation(),children:[t.jsx(A,{icon:g,title:i,subtitle:a,onClose:h,showCloseButton:Se}),t.jsx(R,{description:m,showInput:T,inputPlaceholder:be,inputValue:Ce,onInputChange:ke,children:c}),t.jsx(D,{primaryButton:Pe,secondaryButton:Be})]})});return Ne.createPortal(Oe,document.body)};v.displayName="Popup";const _=({popups:o,onClose:e})=>t.jsx(t.Fragment,{children:o.map(n=>t.jsx(v,{...n.options,open:!0,onOpenChange:r=>{r||e(n.id)}},n.id))});_.displayName="PopupContainer";_.__docgenInfo={description:"",methods:[],displayName:"PopupContainer"};function He(){const[o,e]=s.useState([]),n=s.useCallback((i,a={})=>{e(m=>[...m.filter(T=>T.id!==i),{id:i,options:{id:i,...a},createdAt:Date.now()}])},[]),r=s.useCallback(i=>{e(a=>a.filter(m=>m.id!==i))},[]),p=s.useCallback(i=>{e(a=>a.some(c=>c.id===i)?a.filter(c=>c.id!==i):a)},[]),u=s.useCallback((i,a)=>{e(m=>m.map(c=>c.id===i?{...c,options:{...c.options,...a}}:c))},[]),g=s.useCallback(i=>o.some(a=>a.id===i),[o]);return{open:n,close:r,toggle:p,update:u,popups:o,isOpen:g}}const nt={title:"Feedback/Popup",component:v,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Modal/Popup component with focus trap, scroll lock, ESC close, and programmatic API."}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},variant:{control:"select",options:["default","confirmation","verification","terms"]},showCloseButton:{control:"boolean"},closeOnOverlayClick:{control:"boolean"},closeOnEsc:{control:"boolean"},preventScroll:{control:"boolean"}}},C={args:{open:!0,size:"md",icon:"🎉",title:"Congratulations!",description:"Your action has been completed successfully. Would you like to proceed?",primaryButton:{label:"Accept",variant:"filled"},secondaryButton:{label:"Reject",variant:"outlined"}},parameters:{docs:{source:{type:"code",state:"open"}}}},k={args:{open:!0,size:"md",title:"Verify your email",subtitle:"We sent a code to your email address",showInput:!0,inputPlaceholder:"Enter verification code",primaryButton:{label:"Continue",variant:"filled"}},parameters:{docs:{source:{type:"code",state:"open"}}}},P={args:{open:!0,size:"lg",title:"Terms & Agreements",description:'By clicking "I agree", you acknowledge that you have read and understood our Terms of Service and Privacy Policy. These terms govern your use of our service and outline your rights and responsibilities. Please review them carefully before proceeding. If you do not agree with any part of these terms, please click "Nope 😌" to decline.',primaryButton:{label:"I agree",variant:"filled"},secondaryButton:{label:"Nope 😌",variant:"outlined"}},parameters:{docs:{source:{type:"code",state:"open"}}}},B={render:()=>{const o=()=>{const[e,n]=N.useState(!1);return t.jsxs("div",{children:[t.jsx(f,{onClick:()=>n(!0),children:"Open Popup"}),t.jsx(v,{open:e,onOpenChange:n,size:"md",icon:"🚀",title:"Welcome!",description:"This popup was triggered by a button click.",primaryButton:{label:"Got it",onClick:()=>n(!1)}})]})};return t.jsx(o,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},S={render:()=>{const o=()=>{const[e,n]=N.useState("md"),[r,p]=N.useState(!1);return t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[["sm","md","lg","xl"].map(u=>t.jsxs(f,{onClick:()=>{n(u),p(!0)},variant:"outlined",children:[u.toUpperCase()," Popup"]},u)),t.jsx(v,{open:r,onOpenChange:p,size:e,title:`${e.toUpperCase()} Size Popup`,description:"This demonstrates different popup sizes.",primaryButton:{label:"Close",onClick:()=>p(!1)}})]})};return t.jsx(o,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},z={args:{open:!0,size:"lg",title:"Privacy Policy",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",primaryButton:{label:"Accept"}},parameters:{docs:{source:{type:"code",state:"open"}}}},j={args:{open:!0,size:"md",title:"Important Notice",description:"You must explicitly close this popup using the button. Clicking outside will not close it.",closeOnOverlayClick:!1,primaryButton:{label:"I understand"}},parameters:{docs:{source:{type:"code",state:"open"}}}},w={render:()=>{const o=()=>{const e=He();return t.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[t.jsx(f,{onClick:()=>e.open("confirm",{size:"md",icon:"✅",title:"Confirm Action",description:"Are you sure you want to proceed?",primaryButton:{label:"Yes",onClick:()=>e.close("confirm")},secondaryButton:{label:"No",onClick:()=>e.close("confirm")}}),children:"Open Confirmation"}),t.jsx(f,{onClick:()=>e.open("verify",{size:"md",title:"Enter Code",showInput:!0,inputPlaceholder:"Verification code",primaryButton:{label:"Submit",onClick:()=>e.close("verify")}}),variant:"outlined",children:"Open Verification"}),t.jsx(f,{onClick:()=>e.open("terms",{size:"lg",title:"Terms of Service",description:"Please read and accept our terms to continue using the service.",primaryButton:{label:"Accept",onClick:()=>e.close("terms")},secondaryButton:{label:"Decline",onClick:()=>e.close("terms")}}),variant:"outlined",children:"Open Terms"}),t.jsx(_,{popups:e.popups,onClose:e.close})]})};return t.jsx(o,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},I={args:{open:!0,size:"md",title:"Custom Content",children:t.jsxs("div",{style:{padding:"20px",background:"var(--color-neutral-50, #F9FAFB)",borderRadius:"8px"},children:[t.jsx("p",{style:{margin:0},children:"This is custom content inside the popup body."}),t.jsxs("ul",{style:{marginTop:12,paddingLeft:20},children:[t.jsx("li",{children:"Item 1"}),t.jsx("li",{children:"Item 2"}),t.jsx("li",{children:"Item 3"})]})]}),primaryButton:{label:"Done"}},parameters:{docs:{source:{type:"code",state:"open"}}}};var $,M,J;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(M=C.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var K,Q,X;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,re;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,se,ae;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ae=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,pe,ce;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,de,me;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=j.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ye,fe,ge;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var xe,he,ve;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ve=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const rt=["ConfirmationPopup","VerificationPopup","TermsPopup","ButtonTriggeredPopup","PopupSizes","LongContent","NoOverlayClose","ProgrammaticController","WithCustomContent"];export{B as ButtonTriggeredPopup,C as ConfirmationPopup,z as LongContent,j as NoOverlayClose,S as PopupSizes,w as ProgrammaticController,P as TermsPopup,k as VerificationPopup,I as WithCustomContent,rt as __namedExportsOrder,nt as default};
