import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as f,R as s}from"./index-B2-qRKKC.js";import{r as so}from"./index-kS-9iBlu.js";import{I as ro}from"./Icon-CQ1yD0uX.js";import{I as lo}from"./Input-Di0Rlviz.js";import{C as io}from"./Checkbox-Bx2Vk9iC.js";import{T as co}from"./Typography-BdmfNA7_.js";import{B as l}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-3Q35QAIm.js";import"./classNames-2dOUpm6k.js";import"./Label-KEzZ_8lI.js";const u={"modal-overlay":"_modal-overlay_xg6zc_1","modal-fade-in":"_modal-fade-in_xg6zc_1","modal-container":"_modal-container_xg6zc_13","modal-scale-in":"_modal-scale-in_xg6zc_1","modal-container--sm":"_modal-container--sm_xg6zc_30","modal-container--md":"_modal-container--md_xg6zc_35","modal-container--lg":"_modal-container--lg_xg6zc_40","modal-container--auto":"_modal-container--auto_xg6zc_45","modal-header":"_modal-header_xg6zc_50","modal-icon":"_modal-icon_xg6zc_58","modal-title":"_modal-title_xg6zc_64","modal-body":"_modal-body_xg6zc_72","modal-description":"_modal-description_xg6zc_78","modal-footer":"_modal-footer_xg6zc_85","modal-footer--center":"_modal-footer--center_xg6zc_94","modal-image":"_modal-image_xg6zc_98","modal-close":"_modal-close_xg6zc_107","modal-checkbox-container":"_modal-checkbox-container_xg6zc_164","modal-checkbox-label":"_modal-checkbox-label_xg6zc_171","modal-fade-out":"_modal-fade-out_xg6zc_1","modal-scale-out":"_modal-scale-out_xg6zc_1"},L=({onClick:t,className:o,style:a})=>e.jsx("div",{className:[u["modal-overlay"],o].filter(Boolean).join(" "),style:{...a},onClick:t,"aria-hidden":"true"});L.displayName="ModalOverlay";L.__docgenInfo={description:"ModalOverlay - Backdrop overlay for modal",methods:[],displayName:"ModalOverlay"};const U=({onClose:t})=>e.jsx("button",{type:"button",onClick:t,"aria-label":"Close modal",className:u["modal-close"],children:e.jsx(ro,{name:"CloseIcon",size:20})});U.displayName="ModalCloseButton";U.__docgenInfo={description:`ModalCloseButton - Close button for modal header
Uses existing Icon component`,methods:[],displayName:"ModalCloseButton"};const $=({title:t,icon:o,showClose:a=!0,onClose:n,className:r,style:p})=>!t&&!o?null:e.jsxs("div",{className:[u["modal-header"],r].filter(Boolean).join(" "),style:{...p},children:[o&&e.jsx("span",{className:u["modal-icon"],role:"img","aria-label":"Modal icon",children:o}),t&&e.jsx("div",{style:{flex:1},children:e.jsx("h2",{className:u["modal-title"],children:t})}),a&&e.jsx(U,{onClose:n})]});$.displayName="ModalHeader";$.__docgenInfo={description:"ModalHeader - Header section with optional icon, title, and close button",methods:[],displayName:"ModalHeader",props:{showClose:{defaultValue:{value:"true",computed:!1},required:!1}}};const q=({description:t,inputProps:o,withCheckbox:a,checkboxLabel:n,checkboxChecked:r,onCheckboxChange:p,children:x,className:c,style:m})=>e.jsxs("div",{className:[u["modal-body"],c].filter(Boolean).join(" "),style:{...m},children:[t&&e.jsx(co,{variant:"body2",className:u["modal-description"],children:t}),o&&e.jsx("div",{style:{marginTop:t?"16px":"0"},children:e.jsx(lo,{type:o.type||"text",placeholder:o.placeholder,value:o.value,onChange:d=>{var h;return(h=o.onChange)==null?void 0:h.call(o,d.target.value)},style:{width:"100%"}})}),a&&n&&e.jsxs("div",{className:u["modal-checkbox-container"],children:[e.jsx(io,{checked:r,onChange:d=>p==null?void 0:p(d.target.checked),id:"modal-checkbox"}),e.jsx("label",{htmlFor:"modal-checkbox",className:u["modal-checkbox-label"],children:n})]}),x]});q.displayName="ModalBody";q.__docgenInfo={description:`ModalBody - Body section with description, input, and checkbox
Uses existing Typography, Input, and Checkbox components`,methods:[],displayName:"ModalBody"};const H=({buttons:t=[],className:o,style:a})=>t.length===0?null:e.jsx("div",{className:[u["modal-footer"],t.length===1?u["modal-footer--center"]:"",o].filter(Boolean).join(" "),style:{...a},children:t.map((n,r)=>e.jsx(l,{variant:n.variant||"filled",onClick:n.onClick,disabled:n.disabled,autoFocus:n.autoFocus,children:n.label},r))});H.displayName="ModalFooter";H.__docgenInfo={description:`ModalFooter - Footer section with action buttons
Uses existing Button component`,methods:[],displayName:"ModalFooter",props:{buttons:{defaultValue:{value:"[]",computed:!1},required:!1}}};const G=({src:t,alt:o,className:a,style:n})=>e.jsx("img",{src:t,alt:o,className:[u["modal-image"],a].filter(Boolean).join(" "),style:{...n}});G.displayName="ModalImage";G.__docgenInfo={description:"ModalImage - Hero image for modal header",methods:[],displayName:"ModalImage"};const S={fadeIn:`
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
  `},po=()=>{if(typeof document>"u")return;const t="modal-animations";if(document.getElementById(t))return;const o=document.createElement("style");o.id=t,o.textContent=`
    ${S.fadeIn}
    ${S.fadeOut}
    ${S.scaleIn}
    ${S.scaleOut}
  `,document.head.appendChild(o)},i=({id:t,isOpen:o,defaultOpen:a=!1,onOpenChange:n,title:r,description:p,icon:x,image:c,imageAlt:m="Modal image",size:d="md",showClose:h=!0,closeOnBackdrop:y=!0,closeOnEsc:K=!0,preventScroll:V=!0,footerButtons:qe=[],withCheckbox:He,checkboxLabel:Ge,checkboxChecked:Je,onCheckboxChange:Ke,inputProps:Ve,className:Qe,style:Xe,children:Ze})=>{const[eo,oo]=f.useState(a),W=o!==void 0,O=W?o:eo,Q=f.useRef(null),k=f.useCallback(()=>{W||oo(!1),n==null||n(!1)},[W,n]);if(f.useEffect(()=>{O&&po()},[O]),f.useEffect(()=>{if(!O||!K)return;const C=b=>{b.key==="Escape"&&k()};return document.addEventListener("keydown",C),()=>document.removeEventListener("keydown",C)},[O,K,k]),f.useEffect(()=>{if(!O||!V)return;const C=document.body.style.overflow,b=document.body.style.paddingRight,g=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",g>0&&(document.body.style.paddingRight=`${g}px`),()=>{document.body.style.overflow=C,document.body.style.paddingRight=b}},[O,V]),f.useEffect(()=>{if(!O)return;const C=Q.current;if(!C)return;const b=C.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),g=b[0],v=b[b.length-1];g==null||g.focus();const X=M=>{M.key==="Tab"&&(M.shiftKey?document.activeElement===g&&(M.preventDefault(),v==null||v.focus()):document.activeElement===v&&(M.preventDefault(),g==null||g.focus()))};return C.addEventListener("keydown",X),()=>C.removeEventListener("keydown",X)},[O]),!O)return null;const to=()=>{y&&k()},no=C=>{C.stopPropagation()},ao=e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:to}),e.jsxs("div",{ref:Q,id:t,className:[u["modal-container"],d?u[`modal-container--${d}`]:"",Qe].filter(Boolean).join(" "),style:{...Xe},onClick:no,role:"dialog","aria-modal":"true","aria-labelledby":r?"modal-title":void 0,"aria-describedby":p?"modal-description":void 0,children:[c&&e.jsx(G,{src:c,alt:m}),e.jsx($,{title:r,icon:x,showClose:h,onClose:k}),e.jsx(q,{description:p,inputProps:Ve,withCheckbox:He,checkboxLabel:Ge,checkboxChecked:Je,onCheckboxChange:Ke,children:Ze}),e.jsx(H,{buttons:qe})]})]});return so.createPortal(ao,document.body)};i.displayName="Modal";const J=({modals:t,onClose:o})=>e.jsx(e.Fragment,{children:t.map(a=>e.jsx(i,{id:a.id,...a.props,isOpen:!0,onOpenChange:n=>{var r,p;n||o(a.id),(p=(r=a.props).onOpenChange)==null||p.call(r,n)}},a.id))});J.displayName="ModalContainer";J.__docgenInfo={description:`ModalContainer - Renders programmatically opened modals
Maps array of active modals to Modal components`,methods:[],displayName:"ModalContainer"};const uo=()=>{const[t,o]=f.useState([]),a=f.useCallback((c,m={})=>{o(d=>[...d.filter(y=>y.id!==c),{id:c,props:{...m,isOpen:!0}}])},[]),n=f.useCallback(c=>{o(m=>m.filter(d=>d.id!==c))},[]),r=f.useCallback((c,m={})=>{o(d=>d.find(y=>y.id===c)?d.filter(y=>y.id!==c):[...d,{id:c,props:{...m,isOpen:!0}}])},[]),p=f.useCallback((c,m)=>{o(d=>d.map(h=>h.id===c?{...h,props:{...h.props,...m}}:h))},[]),x=f.useCallback(c=>t.some(m=>m.id===c),[t]);return{modals:t,open:a,close:n,toggle:r,update:p,isOpen:x}},So={title:"Feedback/Modal",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Modal component matching reference design with support for images, inputs, checkboxes, and custom layouts."}}},argTypes:{size:{control:"select",options:["sm","md","lg","auto"]},showClose:{control:"boolean"},closeOnBackdrop:{control:"boolean"},closeOnEsc:{control:"boolean"},withCheckbox:{control:"boolean"}}},$e={hero:"https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400",newsletter:"https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=600&h=400"},B={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Deactivate Modal"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",icon:"⚠️",title:"Confirm Deactivation",description:"Are you sure you want to deactivate your account? This action cannot be undone and all your data will be permanently deleted.",footerButtons:[{label:"Reject",variant:"outlined",onClick:()=>o(!1)},{label:"Accept",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},j={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Order Placed Modal"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"sm",icon:"🎉",title:"Order Placed!",description:"Your order has been successfully placed. You will receive a confirmation email shortly.",footerButtons:[{label:"Continue Shopping",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},w={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Confirm Accept"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"sm",title:"Do You Want to Accept?",description:"Please confirm your decision to proceed with this action.",footerButtons:[{label:"Reject",variant:"outlined",onClick:()=>o(!1)},{label:"Accept",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},_={render:()=>{const[t,o]=s.useState(!0),[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open with Checkbox"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"sm",title:"Do You Want to Accept?",description:"Please confirm your decision. You can save your preference for future actions.",withCheckbox:!0,checkboxLabel:"Remember my choice",checkboxChecked:a,onCheckboxChange:n,footerButtons:[{label:"Reject",variant:"outlined",onClick:()=>o(!1)},{label:"Accept",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},z={render:()=>{const[t,o]=s.useState(!0),[a,n]=s.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Newsletter Modal"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",title:"Subscribe to Newsletter",description:"Get the latest updates and exclusive content delivered to your inbox.",inputProps:{type:"email",placeholder:"Enter your email address",value:a,onChange:n},footerButtons:[{label:"Subscribe",variant:"filled",onClick:()=>{console.log("Subscribed:",a),o(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},A={render:()=>{const[t,o]=s.useState(!0),[a,n]=s.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Newsletter with Image"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",image:$e.newsletter,imageAlt:"Newsletter banner",title:"Join Our Community",description:"Subscribe to our newsletter and stay updated with the latest news, tips, and exclusive offers.",inputProps:{type:"email",placeholder:"Your email address",value:a,onChange:n},footerButtons:[{label:"Subscribe Now",variant:"filled",onClick:()=>{console.log("Subscribed:",a),o(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},N={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Image Confirm"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",image:$e.hero,imageAlt:"Confirmation hero",title:"Confirm Your Action",description:"This is an important decision. Please review the information carefully before proceeding.",footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>o(!1)},{label:"Confirm",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},R={render:()=>{const[t,o]=s.useState("md"),[a,n]=s.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[["sm","md","lg"].map(r=>e.jsxs(l,{onClick:()=>{o(r),n(!0)},variant:"outlined",children:["Open ",r.toUpperCase()," Modal"]},r)),e.jsx(i,{isOpen:a,onOpenChange:n,size:t,icon:"📏",title:`${t.toUpperCase()} Size Modal`,description:"This modal demonstrates different size variations. Choose a size to see how the modal adapts.",footerButtons:[{label:"Close",variant:"filled",onClick:()=>n(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},F={render:()=>{const t=uo();return e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(l,{onClick:()=>t.open("confirm",{size:"md",icon:"✅",title:"Confirm Action",description:"Are you sure you want to proceed with this action?",footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>t.close("confirm")},{label:"Confirm",variant:"filled",onClick:()=>t.close("confirm")}]}),children:"Open Confirmation"}),e.jsx(l,{onClick:()=>t.open("newsletter",{size:"md",title:"Subscribe",description:"Enter your email to subscribe to our newsletter",inputProps:{type:"email",placeholder:"Email address"},footerButtons:[{label:"Subscribe",variant:"filled",onClick:()=>t.close("newsletter")}]}),variant:"outlined",children:"Open Newsletter"}),e.jsx(l,{onClick:()=>t.open("success",{size:"sm",icon:"🎉",title:"Success!",description:"Your operation completed successfully.",footerButtons:[{label:"Done",variant:"filled",onClick:()=>t.close("success")}]}),variant:"outlined",children:"Open Success"}),e.jsx(J,{modals:t.modals,onClose:t.close})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},I={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Modal (No Backdrop Close)"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",icon:"⚠️",title:"Important Notice",description:"You must explicitly close this modal using the button. Clicking outside will not close it.",closeOnBackdrop:!1,footerButtons:[{label:"I Understand",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},E={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Modal (No Close Button)"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",icon:"🔒",title:"Required Action",description:"This modal requires you to make a choice before proceeding.",showClose:!1,closeOnBackdrop:!1,closeOnEsc:!1,footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>o(!1)},{label:"Proceed",variant:"filled",onClick:()=>o(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},T={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Custom Modal"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"lg",title:"Custom Content",footerButtons:[{label:"Close",variant:"filled",onClick:()=>o(!1)}],children:e.jsxs("div",{style:{padding:"0 0 16px 0"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:600},children:"Features List"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px",color:"#666"},children:[e.jsx("li",{children:"Feature 1: Advanced analytics and reporting"}),e.jsx("li",{children:"Feature 2: Real-time collaboration tools"}),e.jsx("li",{children:"Feature 3: Cloud storage integration"}),e.jsx("li",{children:"Feature 4: Mobile app access"}),e.jsx("li",{children:"Feature 5: 24/7 customer support"})]})]})})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},P={render:()=>{const[t,o]=s.useState(!1),[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open First Modal"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",icon:"1️⃣",title:"First Modal",description:"This is the first modal. You can open another modal on top of this one.",footerButtons:[{label:"Close",variant:"outlined",onClick:()=>o(!1)},{label:"Open Second Modal",variant:"filled",onClick:()=>n(!0)}]}),e.jsx(i,{isOpen:a,onOpenChange:n,size:"sm",icon:"2️⃣",title:"Second Modal",description:"This modal is stacked on top of the first one.",footerButtons:[{label:"Close",variant:"filled",onClick:()=>n(!1)}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},D={render:()=>{const[t,o]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),variant:"outlined",children:"Delete Item"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"sm",icon:"🗑️",title:"Delete Confirmation",description:"This item will be permanently deleted. This action cannot be undone.",footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>o(!1)},{label:"Delete",variant:"filled",onClick:()=>{console.log("Item deleted"),o(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}},Y={render:()=>{const[t,o]=s.useState(!0),[a,n]=s.useState(""),[r,p]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>o(!0),children:"Open Registration"}),e.jsx(i,{isOpen:t,onOpenChange:o,size:"md",title:"Create Account",description:"Enter your email address to create a new account. We'll send you a verification link.",inputProps:{type:"email",placeholder:"your@email.com",value:a,onChange:n},withCheckbox:!0,checkboxLabel:"I agree to the Terms of Service and Privacy Policy",checkboxChecked:r,onCheckboxChange:p,footerButtons:[{label:"Cancel",variant:"outlined",onClick:()=>o(!1)},{label:"Create Account",variant:"filled",disabled:!a||!r,onClick:()=>{console.log("Account created:",a),o(!1)}}]})]})},parameters:{docs:{source:{type:"code",state:"open"}}}};var Z,ee,oe;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(oe=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,re,le;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(re=w.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,ce,de;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,me;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var fe,he,Ce;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(he=A.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var ge,Oe,ye;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:ye.source}}};var be,xe,ke;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ke=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var ve,Me,Se;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};var Be,je,we;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(we=(je=I.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var _e,ze,Ae;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ae=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};var Ne,Re,Fe;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Fe=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};var Ie,Ee,Te;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Te=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Pe,De,Ye;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ye=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Ye.source}}};var We,Le,Ue;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(Le=Y.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};const Bo=["DeactivateAccountModal","OrderPlacedModal","ConfirmAcceptModal","ConfirmAcceptWithCheckboxModal","NewsletterModal","NewsletterWithImageModal","ImageConfirmModal","ModalSizes","ProgrammaticModalController","DisableOverlayClose","NoCloseButton","CustomContentModal","StackedModals","DeleteConfirmation","FormSubmissionModal"];export{w as ConfirmAcceptModal,_ as ConfirmAcceptWithCheckboxModal,T as CustomContentModal,B as DeactivateAccountModal,D as DeleteConfirmation,I as DisableOverlayClose,Y as FormSubmissionModal,N as ImageConfirmModal,R as ModalSizes,z as NewsletterModal,A as NewsletterWithImageModal,E as NoCloseButton,j as OrderPlacedModal,F as ProgrammaticModalController,P as StackedModals,Bo as __namedExportsOrder,So as default};
