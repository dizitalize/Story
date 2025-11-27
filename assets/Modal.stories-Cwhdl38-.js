import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as m,R as s}from"./index-B2-qRKKC.js";import{r as rt}from"./index-kS-9iBlu.js";import{s as lt}from"./shadows-2l0gRrJX.js";import{r as _}from"./radius-CJc3Nkyb.js";import{m as x}from"./motion-Doj7O8T4.js";import{I as it}from"./Icon-dy69MN_5.js";import{I as ct}from"./Input-DuNUc9ZW.js";import{C as dt}from"./Checkbox-Bx2Vk9iC.js";import{T as pt}from"./Typography-BdmfNA7_.js";import{B as l}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";import"./Label-KEzZ_8lI.js";const ut={sm:{maxWidth:"400px",padding:"24px"},md:{maxWidth:"480px",padding:"28px"},lg:{maxWidth:"600px",padding:"32px"},auto:{maxWidth:"auto",padding:"28px"}},M={fadeIn:`
    @keyframes modal-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,fadeOut:`
    @keyframes modal-fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `,scaleIn:`
    @keyframes modal-scale-in {
      from {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  `,scaleOut:`
    @keyframes modal-scale-out {
      from {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      to {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95);
      }
    }
  `},mt=()=>{if(typeof document>"u")return;const o="modal-animations";if(document.getElementById(o))return;const t=document.createElement("style");t.id=o,t.textContent=`
    ${M.fadeIn}
    ${M.fadeOut}
    ${M.scaleIn}
    ${M.scaleOut}
  `,document.head.appendChild(t)},ft=()=>({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(4px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",animation:`modal-fade-in ${x.duration.normal} ${x.easing.easeOut}`}),ht=(o="md")=>({position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#FFFFFF",borderRadius:_.lg,boxShadow:lt.xl,maxWidth:ut[o].maxWidth,width:o==="auto"?"auto":"90vw",maxHeight:"90vh",overflow:"hidden",display:"flex",flexDirection:"column",zIndex:1001,animation:`modal-scale-in ${x.duration.normal} ${x.easing.easeOut}`}),Ct=o=>({display:"flex",alignItems:"flex-start",gap:o?"12px":"0",padding:"24px 24px 16px 24px",position:"relative"}),gt=()=>({fontSize:"32px",lineHeight:"32px",flexShrink:0}),yt=o=>({padding:o?"0 24px 20px 24px":"0 24px 24px 24px",overflowY:"auto",flex:1}),Ot=o=>({display:"flex",alignItems:"center",justifyContent:o===1?"center":"flex-end",gap:"12px",padding:"16px 24px 24px 24px",borderTop:"1px solid var(--color-gray-200, #EEEEEE)"}),xt=()=>({width:"100%",height:"auto",display:"block",borderTopLeftRadius:_.lg,borderTopRightRadius:_.lg,objectFit:"cover"}),bt=()=>({position:"absolute",top:"20px",right:"20px",background:"transparent",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:_.sm,transition:`background-color ${x.duration.fast} ${x.easing.easeOut}`,color:"var(--color-gray-500, #999999)"}),kt=()=>({margin:0,fontSize:"18px",fontWeight:600,lineHeight:"24px",color:"var(--color-gray-900, #1A1A1A)"}),vt=()=>({margin:"8px 0 0 0",fontSize:"14px",lineHeight:"20px",color:"var(--color-gray-600, #808080)"}),St=()=>({display:"flex",alignItems:"center",gap:"8px",marginTop:"16px"}),$=({onClick:o,className:t,style:a})=>e.jsx("div",{className:t,style:{...ft(),...a},onClick:o,"aria-hidden":"true"});$.displayName="ModalOverlay";$.__docgenInfo={description:"ModalOverlay - Backdrop overlay for modal",methods:[],displayName:"ModalOverlay"};const H=({onClose:o})=>e.jsx("button",{type:"button",onClick:o,"aria-label":"Close modal",style:bt(),onMouseEnter:t=>{t.currentTarget.style.backgroundColor="var(--color-gray-100, #F5F5F5)"},onMouseLeave:t=>{t.currentTarget.style.backgroundColor="transparent"},children:e.jsx(it,{name:"CloseIcon",size:20})});H.displayName="ModalCloseButton";H.__docgenInfo={description:`ModalCloseButton - Close button for modal header
Uses existing Icon component`,methods:[],displayName:"ModalCloseButton"};const U=({title:o,icon:t,showClose:a=!0,onClose:n,className:r,style:d})=>!o&&!t?null:e.jsxs("div",{className:r,style:{...Ct(!!t),...d},children:[t&&e.jsx("span",{style:gt(),role:"img","aria-label":"Modal icon",children:t}),o&&e.jsx("div",{style:{flex:1},children:e.jsx("h2",{style:kt(),children:o})}),a&&e.jsx(H,{onClose:n})]});U.displayName="ModalHeader";U.__docgenInfo={description:"ModalHeader - Header section with optional icon, title, and close button",methods:[],displayName:"ModalHeader",props:{showClose:{defaultValue:{value:"true",computed:!1},required:!1}}};const q=({description:o,inputProps:t,withCheckbox:a,checkboxLabel:n,checkboxChecked:r,onCheckboxChange:d,children:b,className:c,style:u})=>e.jsxs("div",{className:c,style:{...yt(!1),...u},children:[o&&e.jsx(pt,{variant:"body2",style:vt(),children:o}),t&&e.jsx("div",{style:{marginTop:o?"16px":"0"},children:e.jsx(ct,{type:t.type||"text",placeholder:t.placeholder,value:t.value,onChange:p=>{var f;return(f=t.onChange)==null?void 0:f.call(t,p.target.value)},style:{width:"100%"}})}),a&&n&&e.jsxs("div",{style:St(),children:[e.jsx(dt,{checked:r,onChange:p=>d==null?void 0:d(p.target.checked),id:"modal-checkbox"}),e.jsx("label",{htmlFor:"modal-checkbox",style:{cursor:"pointer",userSelect:"none",fontSize:"14px",color:"var(--color-gray-700, #666666)"},children:n})]}),b]});q.displayName="ModalBody";q.__docgenInfo={description:`ModalBody - Body section with description, input, and checkbox
Uses existing Typography, Input, and Checkbox components`,methods:[],displayName:"ModalBody"};const G=({buttons:o=[],className:t,style:a})=>o.length===0?null:e.jsx("div",{className:t,style:{...Ot(o.length),...a},children:o.map((n,r)=>e.jsx(l,{variant:n.variant||"filled",onClick:n.onClick,disabled:n.disabled,autoFocus:n.autoFocus,children:n.label},r))});G.displayName="ModalFooter";G.__docgenInfo={description:`ModalFooter - Footer section with action buttons
Uses existing Button component`,methods:[],displayName:"ModalFooter",props:{buttons:{defaultValue:{value:"[]",computed:!1},required:!1}}};const J=({src:o,alt:t,className:a,style:n})=>e.jsx("img",{src:o,alt:t,className:a,style:{...xt(),...n}});J.displayName="ModalImage";J.__docgenInfo={description:"ModalImage - Hero image for modal header",methods:[],displayName:"ModalImage"};const i=({id:o,isOpen:t,defaultOpen:a=!1,onOpenChange:n,title:r,description:d,icon:b,image:c,imageAlt:u="Modal image",size:p="md",showClose:f=!0,closeOnBackdrop:y=!0,closeOnEsc:V=!0,preventScroll:Q=!0,footerButtons:qe=[],withCheckbox:Ge,checkboxLabel:Je,checkboxChecked:Ke,onCheckboxChange:Ve,inputProps:Qe,className:Xe,style:Ze,children:et})=>{const[tt,ot]=m.useState(a),L=t!==void 0,g=L?t:tt,X=m.useRef(null),k=m.useCallback(()=>{L||ot(!1),n==null||n(!1)},[L,n]);if(m.useEffect(()=>{g&&mt()},[g]),m.useEffect(()=>{if(!g||!V)return;const h=O=>{O.key==="Escape"&&k()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[g,V,k]),m.useEffect(()=>{if(!g||!Q)return;const h=document.body.style.overflow,O=document.body.style.paddingRight,C=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",C>0&&(document.body.style.paddingRight=`${C}px`),()=>{document.body.style.overflow=h,document.body.style.paddingRight=O}},[g,Q]),m.useEffect(()=>{if(!g)return;const h=X.current;if(!h)return;const O=h.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),C=O[0],v=O[O.length-1];C==null||C.focus();const Z=S=>{S.key==="Tab"&&(S.shiftKey?document.activeElement===C&&(S.preventDefault(),v==null||v.focus()):document.activeElement===v&&(S.preventDefault(),C==null||C.focus()))};return h.addEventListener("keydown",Z),()=>h.removeEventListener("keydown",Z)},[g]),!g)return null;const nt=()=>{y&&k()},at=h=>{h.stopPropagation()},st=e.jsxs(e.Fragment,{children:[e.jsx($,{onClick:nt}),e.jsxs("div",{ref:X,id:o,className:Xe,style:{...ht(p),...Ze},onClick:at,role:"dialog","aria-modal":"true","aria-labelledby":r?"modal-title":void 0,"aria-describedby":d?"modal-description":void 0,children:[c&&e.jsx(J,{src:c,alt:u}),e.jsx(U,{title:r,icon:b,showClose:f,onClose:k}),e.jsx(q,{description:d,inputProps:Qe,withCheckbox:Ge,checkboxLabel:Je,checkboxChecked:Ke,onCheckboxChange:Ve,children:et}),e.jsx(G,{buttons:qe})]})]});return rt.createPortal(st,document.body)};i.displayName="Modal";const K=({modals:o,onClose:t})=>e.jsx(e.Fragment,{children:o.map(a=>e.jsx(i,{id:a.id,...a.props,isOpen:!0,onOpenChange:n=>{var r,d;n||t(a.id),(d=(r=a.props).onOpenChange)==null||d.call(r,n)}},a.id))});K.displayName="ModalContainer";K.__docgenInfo={description:`ModalContainer - Renders programmatically opened modals
Maps array of active modals to Modal components`,methods:[],displayName:"ModalContainer"};const Mt=()=>{const[o,t]=m.useState([]),a=m.useCallback((c,u={})=>{t(p=>[...p.filter(y=>y.id!==c),{id:c,props:{...u,isOpen:!0}}])},[]),n=m.useCallback(c=>{t(u=>u.filter(p=>p.id!==c))},[]),r=m.useCallback((c,u={})=>{t(p=>p.find(y=>y.id===c)?p.filter(y=>y.id!==c):[...p,{id:c,props:{...u,isOpen:!0}}])},[]),d=m.useCallback((c,u)=>{t(p=>p.map(f=>f.id===c?{...f,props:{...f.props,...u}}:f))},[]),b=m.useCallback(c=>o.some(u=>u.id===c),[o]);return{modals:o,open:a,close:n,toggle:r,update:d,isOpen:b}},Yt={title:"Feedback/Modal",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Modal component matching reference design with support for images, inputs, checkboxes, and custom layouts."}}},argTypes:{size:{control:"select",options:["sm","md","lg","auto"]},showClose:{control:"boolean"},closeOnBackdrop:{control:"boolean"},closeOnEsc:{control:"boolean"},withCheckbox:{control:"boolean"}}},Ue={hero:"https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400",newsletter:"https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=600&h=400"},B={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Deactivate Modal"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",icon:"⚠️",title:"Confirm Deactivation",description:"Are you sure you want to deactivate your account? This action cannot be undone and all your data will be permanently deleted.",footerButtons:[{label:"Reject",variant:"outlined",onClick:()=>t(!1)},{label:"Accept",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},j={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Order Placed Modal"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"sm",icon:"🎉",title:"Order Placed!",description:"Your order has been successfully placed. You will receive a confirmation email shortly.",footerButtons:[{label:"Continue Shopping",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},w={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Confirm Accept"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"sm",title:"Do You Want to Accept?",description:"Please confirm your decision to proceed with this action.",footerButtons:[{label:"Reject",variant:"outlined",onClick:()=>t(!1)},{label:"Accept",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},z={render:()=>{const[o,t]=s.useState(!0),[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open with Checkbox"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"sm",title:"Do You Want to Accept?",description:"Please confirm your decision. You can save your preference for future actions.",withCheckbox:!0,checkboxLabel:"Remember my choice",checkboxChecked:a,onCheckboxChange:n,footerButtons:[{label:"Reject",variant:"outlined",onClick:()=>t(!1)},{label:"Accept",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},F={render:()=>{const[o,t]=s.useState(!0),[a,n]=s.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Newsletter Modal"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",title:"Subscribe to Newsletter",description:"Get the latest updates and exclusive content delivered to your inbox.",inputProps:{type:"email",placeholder:"Enter your email address",value:a,onChange:n},footerButtons:[{label:"Subscribe",variant:"filled",onClick:()=>{console.log("Subscribed:",a),t(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},A={render:()=>{const[o,t]=s.useState(!0),[a,n]=s.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Newsletter with Image"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",image:Ue.newsletter,imageAlt:"Newsletter banner",title:"Join Our Community",description:"Subscribe to our newsletter and stay updated with the latest news, tips, and exclusive offers.",inputProps:{type:"email",placeholder:"Your email address",value:a,onChange:n},footerButtons:[{label:"Subscribe Now",variant:"filled",onClick:()=>{console.log("Subscribed:",a),t(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},I={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Image Confirm"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",image:Ue.hero,imageAlt:"Confirmation hero",title:"Confirm Your Action",description:"This is an important decision. Please review the information carefully before proceeding.",footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>t(!1)},{label:"Confirm",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},R={render:()=>{const[o,t]=s.useState("md"),[a,n]=s.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[["sm","md","lg"].map(r=>e.jsxs(l,{onClick:()=>{t(r),n(!0)},variant:"outlined",children:["Open ",r.toUpperCase()," Modal"]},r)),e.jsx(i,{isOpen:a,onOpenChange:n,size:o,icon:"📏",title:`${o.toUpperCase()} Size Modal`,description:"This modal demonstrates different size variations. Choose a size to see how the modal adapts.",footerButtons:[{label:"Close",variant:"filled",onClick:()=>n(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},T={render:()=>{const o=Mt();return e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(l,{onClick:()=>o.open("confirm",{size:"md",icon:"✅",title:"Confirm Action",description:"Are you sure you want to proceed with this action?",footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>o.close("confirm")},{label:"Confirm",variant:"filled",onClick:()=>o.close("confirm")}]}),children:"Open Confirmation"}),e.jsx(l,{onClick:()=>o.open("newsletter",{size:"md",title:"Subscribe",description:"Enter your email to subscribe to our newsletter",inputProps:{type:"email",placeholder:"Email address"},footerButtons:[{label:"Subscribe",variant:"filled",onClick:()=>o.close("newsletter")}]}),variant:"outlined",children:"Open Newsletter"}),e.jsx(l,{onClick:()=>o.open("success",{size:"sm",icon:"🎉",title:"Success!",description:"Your operation completed successfully.",footerButtons:[{label:"Done",variant:"filled",onClick:()=>o.close("success")}]}),variant:"outlined",children:"Open Success"}),e.jsx(K,{modals:o.modals,onClose:o.close})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},E={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Modal (No Backdrop Close)"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",icon:"⚠️",title:"Important Notice",description:"You must explicitly close this modal using the button. Clicking outside will not close it.",closeOnBackdrop:!1,footerButtons:[{label:"I Understand",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},N={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Modal (No Close Button)"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",icon:"🔒",title:"Required Action",description:"This modal requires you to make a choice before proceeding.",showClose:!1,closeOnBackdrop:!1,closeOnEsc:!1,footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>t(!1)},{label:"Proceed",variant:"filled",onClick:()=>t(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},D={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Custom Modal"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"lg",title:"Custom Content",footerButtons:[{label:"Close",variant:"filled",onClick:()=>t(!1)}],children:e.jsxs("div",{style:{padding:"0 0 16px 0"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:600},children:"Features List"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px",color:"#666"},children:[e.jsx("li",{children:"Feature 1: Advanced analytics and reporting"}),e.jsx("li",{children:"Feature 2: Real-time collaboration tools"}),e.jsx("li",{children:"Feature 3: Cloud storage integration"}),e.jsx("li",{children:"Feature 4: Mobile app access"}),e.jsx("li",{children:"Feature 5: 24/7 customer support"})]})]})})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},P={render:()=>{const[o,t]=s.useState(!1),[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open First Modal"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",icon:"1️⃣",title:"First Modal",description:"This is the first modal. You can open another modal on top of this one.",footerButtons:[{label:"Close",variant:"outlined",onClick:()=>t(!1)},{label:"Open Second Modal",variant:"filled",onClick:()=>n(!0)}]}),e.jsx(i,{isOpen:a,onOpenChange:n,size:"sm",icon:"2️⃣",title:"Second Modal",description:"This modal is stacked on top of the first one.",footerButtons:[{label:"Close",variant:"filled",onClick:()=>n(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},W={render:()=>{const[o,t]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),variant:"outlined",children:"Delete Item"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"sm",icon:"🗑️",title:"Delete Confirmation",description:"This item will be permanently deleted. This action cannot be undone.",footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>t(!1)},{label:"Delete",variant:"filled",onClick:()=>{console.log("Item deleted"),t(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},Y={render:()=>{const[o,t]=s.useState(!0),[a,n]=s.useState(""),[r,d]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open Registration"}),e.jsx(i,{isOpen:o,onOpenChange:t,size:"md",title:"Create Account",description:"Enter your email address to create a new account. We'll send you a verification link.",inputProps:{type:"email",placeholder:"your@email.com",value:a,onChange:n},withCheckbox:!0,checkboxLabel:"I agree to the Terms of Service and Privacy Policy",checkboxChecked:r,onCheckboxChange:d,footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>t(!1)},{label:"Create Account",variant:"filled",disabled:!a||!r,onClick:()=>{console.log("Account created:",a),t(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}};var ee,te,oe;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Deactivate Modal</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" icon="⚠️" title="Confirm Deactivation" description="Are you sure you want to deactivate your account? This action cannot be undone and all your data will be permanently deleted." footerButtons={[{
        label: 'Reject',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Accept',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(oe=(te=B.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ae,se;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Order Placed Modal</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="sm" icon="🎉" title="Order Placed!" description="Your order has been successfully placed. You will receive a confirmation email shortly." footerButtons={[{
        label: 'Continue Shopping',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(se=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,le,ie;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Confirm Accept</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="sm" title="Do You Want to Accept?" description="Please confirm your decision to proceed with this action." footerButtons={[{
        label: 'Reject',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Accept',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ie=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [remember, setRemember] = React.useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open with Checkbox</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="sm" title="Do You Want to Accept?" description="Please confirm your decision. You can save your preference for future actions." withCheckbox checkboxLabel="Remember my choice" checkboxChecked={remember} onCheckboxChange={setRemember} footerButtons={[{
        label: 'Reject',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Accept',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(pe=(de=z.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,fe;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [email, setEmail] = React.useState('');
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Newsletter Modal</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" title="Subscribe to Newsletter" description="Get the latest updates and exclusive content delivered to your inbox." inputProps={{
        type: 'email',
        placeholder: 'Enter your email address',
        value: email,
        onChange: setEmail
      }} footerButtons={[{
        label: 'Subscribe',
        variant: 'filled',
        onClick: () => {
          console.log('Subscribed:', email);
          setOpen(false);
        }
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(fe=(me=F.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,Ce,ge;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [email, setEmail] = React.useState('');
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Newsletter with Image</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" image={SAMPLE_IMAGES.newsletter} imageAlt="Newsletter banner" title="Join Our Community" description="Subscribe to our newsletter and stay updated with the latest news, tips, and exclusive offers." inputProps={{
        type: 'email',
        placeholder: 'Your email address',
        value: email,
        onChange: setEmail
      }} footerButtons={[{
        label: 'Subscribe Now',
        variant: 'filled',
        onClick: () => {
          console.log('Subscribed:', email);
          setOpen(false);
        }
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ge=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var ye,Oe,xe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Image Confirm</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" image={SAMPLE_IMAGES.hero} imageAlt="Confirmation hero" title="Confirm Your Action" description="This is an important decision. Please review the information carefully before proceeding." footerButtons={[{
        label: 'Cancel',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Confirm',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(xe=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:xe.source}}};var be,ke,ve;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
    const [open, setOpen] = React.useState(false);
    return <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>\r
        {(['sm', 'md', 'lg'] as const).map(s => <Button key={s} onClick={() => {
        setSize(s);
        setOpen(true);
      }} variant="outlined">\r
            Open {s.toUpperCase()} Modal\r
          </Button>)}\r
        <Modal isOpen={open} onOpenChange={setOpen} size={size} icon="📏" title={\`\${size.toUpperCase()} Size Modal\`} description="This modal demonstrates different size variations. Choose a size to see how the modal adapts." footerButtons={[{
        label: 'Close',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ve=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var Se,Me,Be;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const modal = useModalController();
    return <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>\r
        <Button onClick={() => modal.open('confirm', {
        size: 'md',
        icon: '✅',
        title: 'Confirm Action',
        description: 'Are you sure you want to proceed with this action?',
        footerButtons: [{
          label: 'Cancel',
          variant: 'outlined',
          onClick: () => modal.close('confirm')
        }, {
          label: 'Confirm',
          variant: 'filled',
          onClick: () => modal.close('confirm')
        }]
      })}>\r
          Open Confirmation\r
        </Button>\r
        <Button onClick={() => modal.open('newsletter', {
        size: 'md',
        title: 'Subscribe',
        description: 'Enter your email to subscribe to our newsletter',
        inputProps: {
          type: 'email',
          placeholder: 'Email address'
        },
        footerButtons: [{
          label: 'Subscribe',
          variant: 'filled',
          onClick: () => modal.close('newsletter')
        }]
      })} variant="outlined">\r
          Open Newsletter\r
        </Button>\r
        <Button onClick={() => modal.open('success', {
        size: 'sm',
        icon: '🎉',
        title: 'Success!',
        description: 'Your operation completed successfully.',
        footerButtons: [{
          label: 'Done',
          variant: 'filled',
          onClick: () => modal.close('success')
        }]
      })} variant="outlined">\r
          Open Success\r
        </Button>\r
        <ModalContainer modals={modal.modals} onClose={modal.close} />\r
      </div>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Be=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var je,we,ze;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Modal (No Backdrop Close)</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" icon="⚠️" title="Important Notice" description="You must explicitly close this modal using the button. Clicking outside will not close it." closeOnBackdrop={false} footerButtons={[{
        label: 'I Understand',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ze=(we=E.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Fe,Ae,Ie;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Modal (No Close Button)</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" icon="🔒" title="Required Action" description="This modal requires you to make a choice before proceeding." showClose={false} closeOnBackdrop={false} closeOnEsc={false} footerButtons={[{
        label: 'Cancel',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Proceed',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ie=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Re,Te,Ee;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Custom Modal</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="lg" title="Custom Content" footerButtons={[{
        label: 'Close',
        variant: 'filled',
        onClick: () => setOpen(false)
      }]}>\r
          <div style={{
          padding: '0 0 16px 0'
        }}>\r
            <h3 style={{
            margin: '0 0 12px 0',
            fontSize: '16px',
            fontWeight: 600
          }}>\r
              Features List\r
            </h3>\r
            <ul style={{
            margin: 0,
            paddingLeft: '20px',
            color: '#666'
          }}>\r
              <li>Feature 1: Advanced analytics and reporting</li>\r
              <li>Feature 2: Real-time collaboration tools</li>\r
              <li>Feature 3: Cloud storage integration</li>\r
              <li>Feature 4: Mobile app access</li>\r
              <li>Feature 5: 24/7 customer support</li>\r
            </ul>\r
          </div>\r
        </Modal>\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ee=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ne,De,Pe;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const [firstOpen, setFirstOpen] = React.useState(false);
    const [secondOpen, setSecondOpen] = React.useState(false);
    return <>\r
        <Button onClick={() => setFirstOpen(true)}>Open First Modal</Button>\r
        <Modal isOpen={firstOpen} onOpenChange={setFirstOpen} size="md" icon="1️⃣" title="First Modal" description="This is the first modal. You can open another modal on top of this one." footerButtons={[{
        label: 'Close',
        variant: 'outlined',
        onClick: () => setFirstOpen(false)
      }, {
        label: 'Open Second Modal',
        variant: 'filled',
        onClick: () => setSecondOpen(true)
      }]} />\r
        <Modal isOpen={secondOpen} onOpenChange={setSecondOpen} size="sm" icon="2️⃣" title="Second Modal" description="This modal is stacked on top of the first one." footerButtons={[{
        label: 'Close',
        variant: 'filled',
        onClick: () => setSecondOpen(false)
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Pe=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var We,Ye,_e;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    return <>\r
        <Button onClick={() => setOpen(true)} variant="outlined">\r
          Delete Item\r
        </Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="sm" icon="🗑️" title="Delete Confirmation" description="This item will be permanently deleted. This action cannot be undone." footerButtons={[{
        label: 'Cancel',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Delete',
        variant: 'filled',
        onClick: () => {
          console.log('Item deleted');
          setOpen(false);
        }
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(_e=(Ye=W.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source}}};var Le,$e,He;Y.parameters={...Y.parameters,docs:{...(Le=Y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [agreeToTerms, setAgreeToTerms] = React.useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Registration</Button>\r
        <Modal isOpen={open} onOpenChange={setOpen} size="md" title="Create Account" description="Enter your email address to create a new account. We'll send you a verification link." inputProps={{
        type: 'email',
        placeholder: 'your@email.com',
        value: email,
        onChange: setEmail
      }} withCheckbox checkboxLabel="I agree to the Terms of Service and Privacy Policy" checkboxChecked={agreeToTerms} onCheckboxChange={setAgreeToTerms} footerButtons={[{
        label: 'Cancel',
        variant: 'outlined',
        onClick: () => setOpen(false)
      }, {
        label: 'Create Account',
        variant: 'filled',
        disabled: !email || !agreeToTerms,
        onClick: () => {
          console.log('Account created:', email);
          setOpen(false);
        }
      }]} />\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(He=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};const _t=["DeactivateAccountModal","OrderPlacedModal","ConfirmAcceptModal","ConfirmAcceptWithCheckboxModal","NewsletterModal","NewsletterWithImageModal","ImageConfirmModal","ModalSizes","ProgrammaticModalController","DisableOverlayClose","NoCloseButton","CustomContentModal","StackedModals","DeleteConfirmation","FormSubmissionModal"];export{w as ConfirmAcceptModal,z as ConfirmAcceptWithCheckboxModal,D as CustomContentModal,B as DeactivateAccountModal,W as DeleteConfirmation,E as DisableOverlayClose,Y as FormSubmissionModal,I as ImageConfirmModal,R as ModalSizes,F as NewsletterModal,A as NewsletterWithImageModal,N as NoCloseButton,j as OrderPlacedModal,T as ProgrammaticModalController,P as StackedModals,_t as __namedExportsOrder,Yt as default};
