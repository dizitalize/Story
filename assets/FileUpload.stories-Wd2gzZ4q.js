import{j as a}from"./jsx-runtime-DF2Pcvd1.js";import{r as u,R as O}from"./index-B2-qRKKC.js";import{L as Be}from"./Label-KEzZ_8lI.js";import{I as x}from"./Icon-CQ1yD0uX.js";import{L as Ve}from"./LinearProgress-CUBwAGOa.js";import{B as $e}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./classNames-2dOUpm6k.js";import"./iframe-3Q35QAIm.js";const r={"r-fileupload":"_r-fileupload_1o6rg_1","r-fileupload__label":"_r-fileupload__label_1o6rg_6","r-fileupload__dropzone":"_r-fileupload__dropzone_1o6rg_10","r-fileupload__dropzone--focus":"_r-fileupload__dropzone--focus_1o6rg_22","r-fileupload__dropzone--disabled":"_r-fileupload__dropzone--disabled_1o6rg_27","r-fileupload__content":"_r-fileupload__content_1o6rg_32","r-fileupload__actions":"_r-fileupload__actions_1o6rg_38","r-fileupload__headline":"_r-fileupload__headline_1o6rg_43","r-fileupload__sublabel":"_r-fileupload__sublabel_1o6rg_48","r-fileupload__filelist":"_r-fileupload__filelist_1o6rg_53","r-fileupload__file":"_r-fileupload__file_1o6rg_53","r-fileupload__thumbnail":"_r-fileupload__thumbnail_1o6rg_71","r-fileupload__success-badge":"_r-fileupload__success-badge_1o6rg_83","r-fileupload__trash-btn":"_r-fileupload__trash-btn_1o6rg_94","r-fileupload__meta":"_r-fileupload__meta_1o6rg_104","r-fileupload__filename":"_r-fileupload__filename_1o6rg_109","r-fileupload__filesize":"_r-fileupload__filesize_1o6rg_117","r-fileupload__progress":"_r-fileupload__progress_1o6rg_122","r-fileupload__file-actions":"_r-fileupload__file-actions_1o6rg_126","r-fileupload__hint":"_r-fileupload__hint_1o6rg_132"},Oe=l=>l<1024?`${l} B`:l<1024*1024?`${Math.round(l/1024)} KB`:`${(l/(1024*1024)).toFixed(1)} Mb`,ze=({id:l,name:_,multiple:W=!1,disabled:n=!1,type:Ne="base",state:Pe="default",showSecondaryLabel:Te=!1,maxSize:g=50*1024*1024,accept:p=[],files:k=[],onDrop:q,onChange:M,onRemove:A,onRetry:E,...Ce})=>{const R=u.useRef(null),[De,U]=u.useState(!1),[h,B]=u.useState([]),y=O.useMemo(()=>p?(typeof p=="string"?p.split(","):Array.isArray(p)?p:[]).map(s=>s.trim()).filter(Boolean).map(s=>(s.startsWith("."),s.toLowerCase())):[],[p]),Le=y.join(","),v=u.useCallback(e=>{if(!e)return;const s=Array.from(e),o=[];if(s.forEach(c=>{const t=c.name.toLowerCase(),m=(c.type||"").toLowerCase();(!y.length||y.some(i=>{if(i.startsWith("."))return t.endsWith(i);if(i.includes("/")){if(i.endsWith("/*")){const Re=i.split("/")[0];return m.startsWith(Re+"/")}return m===i}return t.endsWith("."+i)||t.endsWith(i)}))&&(g&&c.size>g||o.push(c))}),o.length&&q&&q(o),o.length&&M)M(o);else if(o.length){const c=o.map(t=>({file:t,status:"uploading",progress:0}));B(t=>[...t,...c])}},[y,g,q,M]),We=u.useCallback(e=>{v(e.target.files),e.target&&(e.target.value="")},[v]);O.useEffect(()=>{if(!h.length)return;const e=[];return h.forEach((s,o)=>{if(s.status!=="uploading")return;const c=window.setInterval(()=>{B(t=>{const m=[...t],f=m[o];if(!f)return t;const i=Math.min(100,(f.progress||0)+Math.floor(Math.random()*30)+10);return f.progress=i,i>=100&&(f.status="success"),m})},500);e.push(c)}),()=>e.forEach(s=>clearInterval(s))},[h.length]);const V=u.useCallback(()=>{var e;n||(e=R.current)==null||e.click()},[n]),qe=u.useCallback(e=>{e.preventDefault(),U(!1),!n&&v(e.dataTransfer.files)},[n,v]),Me=u.useCallback(e=>{e.preventDefault(),!n&&U(!0)},[n]),Ue=u.useCallback(()=>U(!1),[]),$=(e,s)=>a.jsxs("div",{className:r["r-fileupload__file"],children:[Ne==="withImage"?a.jsx("div",{className:r["r-fileupload__thumbnail"],children:e.url?a.jsx("img",{src:e.url,alt:e.file.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):a.jsx(x,{name:e.url?"ImageIcon":"PhotoCamera01Icon"})}):null,a.jsxs("div",{className:r["r-fileupload__meta"],children:[a.jsx("div",{className:r["r-fileupload__filename"],children:e.file.name}),a.jsx("div",{className:r["r-fileupload__filesize"],children:e.size||Oe(e.file.size)})]}),a.jsx("div",{className:r["r-fileupload__file-actions"],children:e.status==="uploading"?a.jsx("div",{className:r["r-fileupload__progress"],children:a.jsx(Ve,{value:50})}):e.status==="success"?a.jsx("div",{children:a.jsx("div",{className:r["r-fileupload__success-badge"],children:a.jsx(x,{name:"CheckSingleIcon"})})}):e.status==="error"?a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[a.jsx($e,{size:"sm",variant:"tertiary",onClick:()=>E?E(e):Ae(e),children:"Retry"}),a.jsx("button",{"aria-label":"remove-file",onClick:()=>A?A(e):ke(e),className:r["r-fileupload__trash-btn"],children:a.jsx(x,{name:"TrashIcon"})})]}):null})]},s),ke=e=>{console.warn("FileUpload: onRemove not provided. File:",e.file.name)},Ae=e=>{console.warn("FileUpload: onRetry not provided. File:",e.file.name)},Ee=[r["r-fileupload__dropzone"],De?r["r-fileupload__dropzone--focus"]:"",n?r["r-fileupload__dropzone--disabled"]:""].filter(Boolean).join(" ");return a.jsxs("div",{className:r["r-fileupload"],...Ce,children:[a.jsx(Be,{className:r["r-fileupload__label"],htmlFor:`${l}-input`,children:"Upload File"}),a.jsx("div",{id:l,role:"button",tabIndex:0,onClick:V,onDrop:qe,onDragOver:Me,onDragLeave:Ue,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&V()},className:Ee,"aria-disabled":n,children:a.jsxs("div",{className:r["r-fileupload__content"],children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx(x,{name:"ImageIcon"}),a.jsxs("div",{children:[a.jsxs("div",{className:r["r-fileupload__headline"],children:["Drop your files here or ",a.jsx("span",{style:{color:"var(--color-primary-600)"},children:"browse"})]}),a.jsxs("div",{className:r["r-fileupload__sublabel"],children:["Maximum size: ",Math.round(g/(1024*1024)),"MB"]})]})]}),a.jsx("div",{className:r["r-fileupload__actions"]})]})}),Te?a.jsx("div",{className:r["r-fileupload__hint"],children:"You can upload PNG, JPG or PDF"}):null,a.jsx("input",{ref:R,type:"file",id:`${l}-input`,name:_,multiple:W,disabled:n,accept:Le,onChange:We,style:{display:"none"}}),a.jsxs("div",{className:r["r-fileupload__filelist"],children:[(k||[]).map((e,s)=>$(e,s)),h.map((e,s)=>$(e,(k||[]).length+s))]})]})};ze.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'base' | 'withImage'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'withImage'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'disabled' | 'inprogress' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'inprogress'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showSecondaryLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50 * 1024 * 1024",computed:!1}},accept:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"},description:"",defaultValue:{value:"[]",computed:!1}},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"UploadFile"},name:"file"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"UploadFile"},name:"file"}],return:{name:"void"}}},description:""}}};const aa={title:"Inputs/FileUpload",component:ze},d=(l,_=15e4,W="success")=>({file:new File([new ArrayBuffer(_)],l),url:"",size:`${Math.round(_/1024)} KB`,timestamp:new Date().toISOString(),status:W}),b={args:{id:"fu-1",maxSize:50*1024*1024,files:[]}},F={args:{id:"fu-2",state:"focus"}},w={args:{id:"fu-3",disabled:!0}},I={args:{id:"fu-4",files:[d("uploading.png",12e3,"uploading")]}},j={args:{id:"fu-5",files:[d("done.pdf",24e3,"success")]}},S={args:{id:"fu-6",type:"withImage",files:[d("image-1.png",45e3,"success")]}},z={args:{id:"fu-7",type:"withImage",files:[d("image-upload.png",45e3,"uploading")]}},N={args:{id:"fu-8",type:"withImage",files:[d("image-done.png",45e3,"success")]}},T={args:{id:"fu-9",showSecondaryLabel:!0}},C={args:{id:"fu-10",multiple:!0,files:[d("one.png"),d("two.pdf")]}},D={args:{id:"fu-11",accept:["image/png"],files:[d("file.txt")]}},L={args:{id:"fu-12",maxSize:1e3,files:[d("big.png",5e6)]}};var P,K,G;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'fu-1',
    maxSize: 50 * 1024 * 1024,
    files: []
  }
}`,...(G=(K=b.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var H,J,Y;F.parameters={...F.parameters,docs:{...(H=F.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'fu-2',
    state: 'focus'
  }
}`,...(Y=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Q,X,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: 'fu-3',
    disabled: true
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    id: 'fu-4',
    files: [sampleFile('uploading.png', 12000, 'uploading')]
  }
}`,...(re=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: 'fu-5',
    files: [sampleFile('done.pdf', 24000, 'success')]
  }
}`,...(ie=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var te,ne,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    id: 'fu-6',
    type: 'withImage',
    files: [sampleFile('image-1.png', 45000, 'success')]
  }
}`,...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ue,de,ce;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    id: 'fu-7',
    type: 'withImage',
    files: [sampleFile('image-upload.png', 45000, 'uploading')]
  }
}`,...(ce=(de=z.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,fe;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    id: 'fu-8',
    type: 'withImage',
    files: [sampleFile('image-done.png', 45000, 'success')]
  }
}`,...(fe=(me=N.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var _e,ge,he;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    id: 'fu-9',
    showSecondaryLabel: true
  }
}`,...(he=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,ve,xe;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    id: 'fu-10',
    multiple: true,
    files: [sampleFile('one.png'), sampleFile('two.pdf')]
  }
}`,...(xe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var be,Fe,we;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    id: 'fu-11',
    accept: ['image/png'],
    files: [sampleFile('file.txt')]
  }
}`,...(we=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:we.source}}};var Ie,je,Se;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    id: 'fu-12',
    maxSize: 1000,
    files: [sampleFile('big.png', 5000000)]
  }
}`,...(Se=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};const ra=["Default","Focus","Disabled","Inprogress","Success","WithImageDefault","WithImageUploading","WithImageSuccess","WithSecondaryLabel","MultipleFiles","InvalidType","MaxSizeExceeded"];export{b as Default,w as Disabled,F as Focus,I as Inprogress,D as InvalidType,L as MaxSizeExceeded,C as MultipleFiles,j as Success,S as WithImageDefault,N as WithImageSuccess,z as WithImageUploading,T as WithSecondaryLabel,ra as __namedExportsOrder,aa as default};
