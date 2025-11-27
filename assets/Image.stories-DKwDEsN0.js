import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as p,R as qa}from"./index-B2-qRKKC.js";import{B as H}from"./Badge-BMr-ll-n.js";import{s as _a}from"./shadows-2l0gRrJX.js";import{r as N}from"./radius-CJc3Nkyb.js";import{I as Ga}from"./Icon-CQ1yD0uX.js";import{T as Ba}from"./Typography-BdmfNA7_.js";import{S as Ca}from"./SkeletonBlock-DuqQnv6v.js";import{I as O}from"./IconButton-B2mw4IJM.js";import{B as K}from"./Button-Sb-dFZaJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-3Q35QAIm.js";import"./motion-Cg9jJe8C.js";import"./classNames-2dOUpm6k.js";const Z={sm:{width:"80px",height:"80px"},md:{width:"160px",height:"160px"},lg:{width:"240px",height:"240px"},xl:{width:"320px",height:"320px"},full:{width:"100%",height:"auto"}},Fa=(s,r,l,i,c,n,d)=>{const o={position:"relative",display:"inline-block",overflow:"hidden",borderRadius:i?N[i]:N.md};return l&&(o.width=Z[l].width,o.height=Z[l].height),s&&(o.width=typeof s=="number"?`${s}px`:s),r&&(o.height=typeof r=="number"?`${r}px`:r),d&&(o.aspectRatio=d,r||(o.height="auto")),c&&(o.boxShadow=_a.md),n&&(o.border="1px solid var(--color-gray-200, #EEEEEE)"),o},Wa=s=>({width:"100%",height:"100%",display:"block",objectFit:s||"cover"}),Ta=()=>({position:"absolute",top:0,left:0,width:"100%",height:"100%",filter:"blur(10px)",transform:"scale(1.1)",transition:"opacity 0.3s ease-in-out"}),Va=(s="top-right")=>{const r={position:"absolute",zIndex:10};switch(s){case"top-left":return{...r,top:"8px",left:"8px"};case"top-right":return{...r,top:"8px",right:"8px"};case"bottom-left":return{...r,bottom:"8px",left:"8px"};case"bottom-right":return{...r,bottom:"8px",right:"8px"};case"center":return{...r,top:"50%",left:"50%",transform:"translate(-50%, -50%)"};default:return{...r,top:"8px",right:"8px"}}},Na="var(--color-gray-100, #F5F5F5)",Oa=(s,r,l)=>({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:s?typeof s=="number"?`${s}px`:s:"100%",height:r?typeof r=="number"?`${r}px`:r:"100%",backgroundColor:Na,borderRadius:l?N[l]:N.md,gap:"8px"}),J=({icon:s="image",label:r,width:l,height:i,radius:c="md",className:n,style:d})=>{const o=Oa(l,i,c);return e.jsxs("div",{className:n,style:{...o,...d},role:"img","aria-label":r||"Image failed to load",children:[e.jsx(Ga,{name:s,size:48,color:"var(--color-gray-400, #D0D0D0)"}),r&&e.jsx(Ba,{variant:"body2",color:"var(--color-gray-500, #999999)",align:"center",children:r})]})};J.displayName="ImageFallback";J.__docgenInfo={description:`ImageFallback - Displays when image fails to load
Uses existing Icon and Typography components`,methods:[],displayName:"ImageFallback",props:{icon:{defaultValue:{value:"'image'",computed:!1},required:!1},radius:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const Q=({width:s="100%",height:r="200px",aspectRatio:l,radius:i="md",className:c,style:n})=>e.jsx(Ca,{width:s,height:r,aspectRatio:l,radius:i,animation:"wave",className:c,style:n});Q.displayName="ImageLoader";Q.__docgenInfo={description:`ImageLoader - Loading skeleton for images
Uses existing Skeleton component`,methods:[],displayName:"ImageLoader",props:{width:{defaultValue:{value:"'100%'",computed:!1},required:!1},height:{defaultValue:{value:"'200px'",computed:!1},required:!1},radius:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const ba=s=>{const[r,l]=p.useState("idle"),[i,c]=p.useState(0),n=p.useRef(null);p.useEffect(()=>{if(!s){l("error");return}l("loading");const o=new Image;n.current=o;const m=()=>{l("loaded")},u=()=>{l("error")};return o.addEventListener("load",m),o.addEventListener("error",u),o.src=s,o.complete&&(o.naturalWidth>0?m():u()),()=>{o.removeEventListener("load",m),o.removeEventListener("error",u),n.current=null}},[s,i]);const d=p.useCallback(()=>{c(o=>o+1)},[]);return{status:r,retry:d}},t=({id:s,src:r,alt:l,width:i,height:c,radius:n="md",shadow:d=!1,border:o=!1,objectFit:m="cover",size:u,aspectRatio:X,loading:Ia="lazy",placeholder:U,fallbackIcon:wa="image",fallbackLabel:Ea,showSkeleton:Aa=!1,overlay:Y,overlayPosition:Ma="top-right",onLoad:g,onError:h,className:D,style:$})=>{const{status:y}=ba(r),[ja,ka]=p.useState(!!U),Pa=Fa(i,c,u,n,d,o,X),La=Wa(m),Ra=p.useCallback(()=>{ka(!1),g==null||g()},[g]),za=p.useCallback(()=>{h==null||h()},[h]);return Aa&&y==="loading"?e.jsx(Q,{width:i||(u?void 0:"100%"),height:c,aspectRatio:X,radius:n,className:D,style:$}):y==="error"?e.jsx(J,{icon:wa,label:Ea,width:i||(u?void 0:"100%"),height:c,radius:n,className:D,style:$}):e.jsxs("div",{id:s,className:D,style:{...Pa,...$},children:[U&&ja&&e.jsx("img",{src:U,alt:"","aria-hidden":"true",style:{...Ta(),opacity:y==="loaded"?0:1}}),e.jsx("img",{src:r,alt:l,loading:Ia,onLoad:Ra,onError:za,style:La}),Y&&y==="loaded"&&e.jsx("div",{style:Va(Ma),children:Y})]})};t.displayName="Image";t.__docgenInfo={description:`Image - Production-ready image component with loading, error, and overlay support

@example
// Basic usage
<Image src="/photo.jpg" alt="Photo" size="md" />

@example
// With skeleton loading
<Image src="/photo.jpg" alt="Photo" showSkeleton aspectRatio="16/9" />

@example
// With fallback
<Image 
  src="/broken.jpg" 
  alt="Photo" 
  fallbackIcon="image-off" 
  fallbackLabel="Image not available" 
/>

@example
// With overlay
<Image 
  src="/photo.jpg" 
  alt="Photo"
  overlay={<Button size="sm">Edit</Button>}
  overlayPosition="top-right"
/>`,methods:[],displayName:"Image",props:{id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},src:{required:!0,tsType:{name:"string"},description:"Image source URL"},alt:{required:!0,tsType:{name:"string"},description:"Alt text (required for accessibility)"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Image width"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Image height"},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"Border radius from tokens",defaultValue:{value:"'md'",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"Show shadow",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"Show border",defaultValue:{value:"false",computed:!1}},objectFit:{required:!1,tsType:{name:"union",raw:"'cover' | 'contain' | 'fill' | 'scale-down' | 'none'",elements:[{name:"literal",value:"'cover'"},{name:"literal",value:"'contain'"},{name:"literal",value:"'fill'"},{name:"literal",value:"'scale-down'"},{name:"literal",value:"'none'"}]},description:"Object fit behavior",defaultValue:{value:"'cover'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"Size preset"},aspectRatio:{required:!1,tsType:{name:"union",raw:"ImageAspectRatio | string",elements:[{name:"union",raw:"'1/1' | '4/3' | '3/4' | '16/9' | '9/16' | '21/9'",elements:[{name:"literal",value:"'1/1'"},{name:"literal",value:"'4/3'"},{name:"literal",value:"'3/4'"},{name:"literal",value:"'16/9'"},{name:"literal",value:"'9/16'"},{name:"literal",value:"'21/9'"}]},{name:"string"}]},description:"Aspect ratio"},loading:{required:!1,tsType:{name:"union",raw:"'lazy' | 'eager'",elements:[{name:"literal",value:"'lazy'"},{name:"literal",value:"'eager'"}]},description:"Loading strategy",defaultValue:{value:"'lazy'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Blur placeholder image (low-res preview)"},fallbackIcon:{required:!1,tsType:{name:"string"},description:"Fallback icon name when error",defaultValue:{value:"'image'",computed:!1}},fallbackLabel:{required:!1,tsType:{name:"string"},description:"Fallback label text"},showSkeleton:{required:!1,tsType:{name:"boolean"},description:"Show skeleton while loading",defaultValue:{value:"false",computed:!1}},overlay:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Overlay content"},overlayPosition:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'center'"}]},description:"Overlay position",defaultValue:{value:"'top-right'",computed:!1}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when image loads"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when image errors"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"}}};const sr={title:"DataDisplay/Image",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Production-ready Image component with loading states, error fallbacks, overlays, and blur placeholders."}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]},objectFit:{control:"select",options:["cover","contain","fill","scale-down","none"]},radius:{control:"select",options:["none","xs","sm","md","lg","xl","full"]},aspectRatio:{control:"text"},loading:{control:"select",options:["lazy","eager"]},overlayPosition:{control:"select",options:["top-left","top-right","bottom-left","bottom-right","center"]},shadow:{control:"boolean"},border:{control:"boolean"},showSkeleton:{control:"boolean"}}},a={landscape:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600",portrait:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=800",square:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=600",lowRes:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=20&h=15&blur=10",broken:"https://broken-url-does-not-exist.jpg"},x={args:{src:a.square,alt:"Mountain landscape",size:"sm",radius:"md"},parameters:{docs:{source:{type:"code",state:"open"}}}},f={args:{src:a.square,alt:"Mountain landscape",size:"md",radius:"md"},parameters:{docs:{source:{type:"code",state:"open"}}}},v={args:{src:a.landscape,alt:"Mountain landscape",size:"lg",radius:"lg",shadow:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},S={args:{src:a.landscape,alt:"Mountain landscape",size:"xl",radius:"xl",shadow:!0},parameters:{docs:{source:{type:"code",state:"open"}}}},b={args:{src:a.landscape,alt:"Mountain landscape",size:"full",radius:"lg",aspectRatio:"16/9"},parameters:{docs:{source:{type:"code",state:"open"}}}},I={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{src:a.landscape,alt:"Square crop",aspectRatio:"1/1",radius:"md"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},w={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsx(t,{src:a.landscape,alt:"16:9 crop",aspectRatio:"16/9",radius:"lg",shadow:!0})}),parameters:{docs:{source:{type:"code",state:"open"}}}},E={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{src:a.landscape,alt:"4:3 crop",aspectRatio:"4/3",radius:"md"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},A={render:()=>e.jsx("div",{style:{width:"600px"},children:e.jsx(t,{src:a.landscape,alt:"21:9 ultrawide",aspectRatio:"21/9",radius:"lg",border:!0})}),parameters:{docs:{source:{type:"code",state:"open"}}}},M={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{src:a.portrait,alt:"Cover fit",width:"200px",height:"200px",objectFit:"cover",radius:"md"}),e.jsx(t,{src:a.landscape,alt:"Cover fit",width:"200px",height:"200px",objectFit:"cover",radius:"md"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{src:a.portrait,alt:"Contain fit",width:"200px",height:"200px",objectFit:"contain",radius:"md",border:!0}),e.jsx(t,{src:a.landscape,alt:"Contain fit",width:"200px",height:"200px",objectFit:"contain",radius:"md",border:!0})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},k={render:()=>e.jsx(t,{src:a.landscape,alt:"Loading with skeleton",width:"400px",aspectRatio:"16/9",showSkeleton:!0,radius:"lg"}),parameters:{docs:{source:{type:"code",state:"open"}}}},P={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsx(t,{src:a.landscape,alt:"Image with blur placeholder",placeholder:a.lowRes,aspectRatio:"16/9",radius:"lg"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},L={args:{src:a.broken,alt:"Broken image",width:"300px",height:"300px",fallbackIcon:"image-off",fallbackLabel:"Image not available",radius:"md"},parameters:{docs:{source:{type:"code",state:"open"}}}},R={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{src:a.broken,alt:"User photo",size:"md",fallbackIcon:"user",fallbackLabel:"No photo",radius:"full"}),e.jsx(t,{src:a.broken,alt:"Product image",size:"md",fallbackIcon:"package",fallbackLabel:"No image",radius:"md"}),e.jsx(t,{src:a.broken,alt:"Gallery photo",size:"md",fallbackIcon:"photo",radius:"lg"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},z={render:()=>e.jsx(t,{src:a.landscape,alt:"Image with overlay",width:"400px",aspectRatio:"16/9",radius:"lg",overlay:e.jsx(O,{size:"sm",variant:"filled",shape:"circle",children:"✏️"}),overlayPosition:"top-right"}),parameters:{docs:{source:{type:"code",state:"open"}}}},q={render:()=>e.jsx(t,{src:a.landscape,alt:"Image with badge",width:"400px",aspectRatio:"16/9",radius:"lg",overlay:e.jsx(H,{variant:"filled",color:"success",children:"New"}),overlayPosition:"bottom-left"}),parameters:{docs:{source:{type:"code",state:"open"}}}},_={render:()=>e.jsx(t,{src:a.landscape,alt:"Image with play button",width:"500px",aspectRatio:"16/9",radius:"lg",overlay:e.jsx(O,{size:"lg",variant:"filled",shape:"circle",children:"▶️"}),overlayPosition:"center"}),parameters:{docs:{source:{type:"code",state:"open"}}}},G={render:()=>e.jsx("div",{style:{position:"relative",width:"500px"},children:e.jsx(t,{src:a.landscape,alt:"Image with multiple overlays",aspectRatio:"16/9",radius:"lg",overlay:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",top:"8px",left:"8px"},children:e.jsx(H,{variant:"filled",color:"primary",children:"Featured"})}),e.jsx("div",{style:{position:"absolute",top:"8px",right:"8px"},children:e.jsx(O,{size:"sm",variant:"soft",shape:"circle",children:"❤️"})}),e.jsx("div",{style:{position:"absolute",bottom:"8px",right:"8px"},children:e.jsx(K,{size:"sm",variant:"filled",children:"View Details"})})]}),overlayPosition:"top-left"})}),parameters:{docs:{source:{type:"code",state:"open"}}}},B={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{src:a.square,alt:"With shadow",size:"md",shadow:!0,radius:"lg"}),e.jsx(t,{src:a.square,alt:"With border",size:"md",border:!0,radius:"lg"}),e.jsx(t,{src:a.square,alt:"Shadow + border",size:"md",shadow:!0,border:!0,radius:"lg"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{src:a.square,alt:"No radius",size:"sm",radius:"none"}),e.jsx(t,{src:a.square,alt:"Small radius",size:"sm",radius:"sm"}),e.jsx(t,{src:a.square,alt:"Medium radius",size:"sm",radius:"md"}),e.jsx(t,{src:a.square,alt:"Large radius",size:"sm",radius:"lg"}),e.jsx(t,{src:a.square,alt:"Circle",size:"sm",radius:"full"})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},F={render:()=>{const s=()=>{const[r,l]=qa.useState(a.broken),{status:i,retry:c}=ba(r),n=()=>{l(a.landscape),c()};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(t,{src:r,alt:"Retry example",aspectRatio:"16/9",fallbackIcon:"alert-circle",fallbackLabel:"Failed to load",radius:"lg",showSkeleton:!0}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(K,{onClick:n,variant:"outlined",size:"sm",children:"Retry Load"}),e.jsx(K,{onClick:()=>l(a.broken),variant:"outlined",size:"sm",children:"Break Image"}),e.jsxs("span",{style:{fontSize:"14px",color:"#666"},children:["Status: ",e.jsx("strong",{children:i})]})]})]})};return e.jsx(s,{})},parameters:{docs:{source:{type:"code",state:"open"}}}},W={render:()=>e.jsxs("div",{style:{width:"300px",border:"1px solid #E5E7EB",borderRadius:"12px",overflow:"hidden"},children:[e.jsx(t,{src:a.square,alt:"Product photo",aspectRatio:"1/1",radius:"none",overlay:e.jsx("div",{style:{position:"absolute",top:"12px",right:"12px"},children:e.jsx(H,{variant:"filled",color:"error",children:"-20%"})}),overlayPosition:"top-right"}),e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px"},children:"Product Name"}),e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666"},children:"$99.99"})]})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{src:a.square,alt:"User avatar",size:"sm",radius:"full",border:!0}),e.jsx(t,{src:a.square,alt:"User avatar",size:"md",radius:"full",border:!0}),e.jsx(t,{src:a.square,alt:"User avatar",size:"lg",radius:"full",border:!0})]}),parameters:{docs:{source:{type:"code",state:"open"}}}},V={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"16px",maxWidth:"800px"},children:[a.landscape,a.square,a.portrait,a.landscape,a.square,a.portrait].map((s,r)=>e.jsx(t,{src:s,alt:`Gallery image ${r+1}`,aspectRatio:"1/1",radius:"lg",objectFit:"cover",overlay:e.jsx(O,{size:"sm",variant:"soft",shape:"circle",children:"🔍"}),overlayPosition:"top-right"},r))}),parameters:{docs:{source:{type:"code",state:"open"}}}};var ee,ae,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGES.square,
    alt: 'Mountain landscape',
    size: 'sm',
    radius: 'md'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(re=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,oe;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGES.square,
    alt: 'Mountain landscape',
    size: 'md',
    radius: 'md'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,ne;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGES.landscape,
    alt: 'Mountain landscape',
    size: 'lg',
    radius: 'lg',
    shadow: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ne=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ce,de,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGES.landscape,
    alt: 'Mountain landscape',
    size: 'xl',
    radius: 'xl',
    shadow: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(pe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,ge;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGES.landscape,
    alt: 'Mountain landscape',
    size: 'full',
    radius: 'lg',
    aspectRatio: '16/9'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ge=(me=b.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ye,xe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <Image src={SAMPLE_IMAGES.landscape} alt="Square crop" aspectRatio="1/1" radius="md" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(xe=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var fe,ve,Se;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>\r
      <Image src={SAMPLE_IMAGES.landscape} alt="16:9 crop" aspectRatio="16/9" radius="lg" shadow />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Se=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var be,Ie,we;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <Image src={SAMPLE_IMAGES.landscape} alt="4:3 crop" aspectRatio="4/3" radius="md" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(we=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ee,Ae,Me;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Image src={SAMPLE_IMAGES.landscape} alt="21:9 ultrawide" aspectRatio="21/9" radius="lg" border />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Me=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var je,ke,Pe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>\r
      <Image src={SAMPLE_IMAGES.portrait} alt="Cover fit" width="200px" height="200px" objectFit="cover" radius="md" />\r
      <Image src={SAMPLE_IMAGES.landscape} alt="Cover fit" width="200px" height="200px" objectFit="cover" radius="md" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Pe=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Le,Re,ze;j.parameters={...j.parameters,docs:{...(Le=j.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>\r
      <Image src={SAMPLE_IMAGES.portrait} alt="Contain fit" width="200px" height="200px" objectFit="contain" radius="md" border />\r
      <Image src={SAMPLE_IMAGES.landscape} alt="Contain fit" width="200px" height="200px" objectFit="contain" radius="md" border />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ze=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var qe,_e,Ge;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <Image src={SAMPLE_IMAGES.landscape} alt="Loading with skeleton" width="400px" aspectRatio="16/9" showSkeleton radius="lg" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ge=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Be,Ce,Fe;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>\r
      <Image src={SAMPLE_IMAGES.landscape} alt="Image with blur placeholder" placeholder={SAMPLE_IMAGES.lowRes} aspectRatio="16/9" radius="lg" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Fe=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};var We,Te,Ve;L.parameters={...L.parameters,docs:{...(We=L.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMAGES.broken,
    alt: 'Broken image',
    width: '300px',
    height: '300px',
    fallbackIcon: 'image-off',
    fallbackLabel: 'Image not available',
    radius: 'md'
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ve=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ve.source}}};var Ne,Oe,Ue;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>\r
      <Image src={SAMPLE_IMAGES.broken} alt="User photo" size="md" fallbackIcon="user" fallbackLabel="No photo" radius="full" />\r
      <Image src={SAMPLE_IMAGES.broken} alt="Product image" size="md" fallbackIcon="package" fallbackLabel="No image" radius="md" />\r
      <Image src={SAMPLE_IMAGES.broken} alt="Gallery photo" size="md" fallbackIcon="photo" radius="lg" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ue=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var De,$e,Ke;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <Image src={SAMPLE_IMAGES.landscape} alt="Image with overlay" width="400px" aspectRatio="16/9" radius="lg" overlay={<IconButton size="sm" variant="filled" shape="circle">\r
          ✏️\r
        </IconButton>} overlayPosition="top-right" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ke=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var He,Je,Qe;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <Image src={SAMPLE_IMAGES.landscape} alt="Image with badge" width="400px" aspectRatio="16/9" radius="lg" overlay={<Badge variant="filled" color="success">New</Badge>} overlayPosition="bottom-left" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Qe=(Je=q.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;_.parameters={..._.parameters,docs:{...(Xe=_.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <Image src={SAMPLE_IMAGES.landscape} alt="Image with play button" width="500px" aspectRatio="16/9" radius="lg" overlay={<IconButton size="lg" variant="filled" shape="circle">\r
          ▶️\r
        </IconButton>} overlayPosition="center" />,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Ze=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var ea,aa,ra;G.parameters={...G.parameters,docs:{...(ea=G.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '500px'
  }}>\r
      <Image src={SAMPLE_IMAGES.landscape} alt="Image with multiple overlays" aspectRatio="16/9" radius="lg" overlay={<>\r
            <div style={{
        position: 'absolute',
        top: '8px',
        left: '8px'
      }}>\r
              <Badge variant="filled" color="primary">Featured</Badge>\r
            </div>\r
            <div style={{
        position: 'absolute',
        top: '8px',
        right: '8px'
      }}>\r
              <IconButton size="sm" variant="soft" shape="circle">\r
                ❤️\r
              </IconButton>\r
            </div>\r
            <div style={{
        position: 'absolute',
        bottom: '8px',
        right: '8px'
      }}>\r
              <Button size="sm" variant="filled">View Details</Button>\r
            </div>\r
          </>} overlayPosition="top-left" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ra=(aa=G.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var ta,sa,oa;B.parameters={...B.parameters,docs:{...(ta=B.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>\r
      <Image src={SAMPLE_IMAGES.square} alt="With shadow" size="md" shadow radius="lg" />\r
      <Image src={SAMPLE_IMAGES.square} alt="With border" size="md" border radius="lg" />\r
      <Image src={SAMPLE_IMAGES.square} alt="Shadow + border" size="md" shadow border radius="lg" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(oa=(sa=B.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var la,ia,na;C.parameters={...C.parameters,docs:{...(la=C.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>\r
      <Image src={SAMPLE_IMAGES.square} alt="No radius" size="sm" radius="none" />\r
      <Image src={SAMPLE_IMAGES.square} alt="Small radius" size="sm" radius="sm" />\r
      <Image src={SAMPLE_IMAGES.square} alt="Medium radius" size="sm" radius="md" />\r
      <Image src={SAMPLE_IMAGES.square} alt="Large radius" size="sm" radius="lg" />\r
      <Image src={SAMPLE_IMAGES.square} alt="Circle" size="sm" radius="full" />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(na=(ia=C.parameters)==null?void 0:ia.docs)==null?void 0:na.source}}};var ca,da,pa;F.parameters={...F.parameters,docs:{...(ca=F.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  render: () => {
    const RetryDemo: React.FC = () => {
      const [imageSrc, setImageSrc] = React.useState(SAMPLE_IMAGES.broken);
      const {
        status,
        retry
      } = useImageStatus(imageSrc);
      const handleRetry = () => {
        // Simulate fixing the URL
        setImageSrc(SAMPLE_IMAGES.landscape);
        retry();
      };
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px'
      }}>\r
          <Image src={imageSrc} alt="Retry example" aspectRatio="16/9" fallbackIcon="alert-circle" fallbackLabel="Failed to load" radius="lg" showSkeleton />\r
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>\r
            <Button onClick={handleRetry} variant="outlined" size="sm">\r
              Retry Load\r
            </Button>\r
            <Button onClick={() => setImageSrc(SAMPLE_IMAGES.broken)} variant="outlined" size="sm">\r
              Break Image\r
            </Button>\r
            <span style={{
            fontSize: '14px',
            color: '#666'
          }}>\r
              Status: <strong>{status}</strong>\r
            </span>\r
          </div>\r
        </div>;
    };
    return <RetryDemo />;
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(pa=(da=F.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ua,ma,ga;W.parameters={...W.parameters,docs:{...(ua=W.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    overflow: 'hidden'
  }}>\r
      <Image src={SAMPLE_IMAGES.square} alt="Product photo" aspectRatio="1/1" radius="none" overlay={<div style={{
      position: 'absolute',
      top: '12px',
      right: '12px'
    }}>\r
            <Badge variant="filled" color="error">-20%</Badge>\r
          </div>} overlayPosition="top-right" />\r
      <div style={{
      padding: '16px'
    }}>\r
        <h3 style={{
        margin: '0 0 8px 0',
        fontSize: '16px'
      }}>Product Name</h3>\r
        <p style={{
        margin: 0,
        fontSize: '14px',
        color: '#666'
      }}>$99.99</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(ga=(ma=W.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ha,ya,xa;T.parameters={...T.parameters,docs:{...(ha=T.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <Image src={SAMPLE_IMAGES.square} alt="User avatar" size="sm" radius="full" border />\r
      <Image src={SAMPLE_IMAGES.square} alt="User avatar" size="md" radius="full" border />\r
      <Image src={SAMPLE_IMAGES.square} alt="User avatar" size="lg" radius="full" border />\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(xa=(ya=T.parameters)==null?void 0:ya.docs)==null?void 0:xa.source}}};var fa,va,Sa;V.parameters={...V.parameters,docs:{...(fa=V.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    maxWidth: '800px'
  }}>\r
      {[SAMPLE_IMAGES.landscape, SAMPLE_IMAGES.square, SAMPLE_IMAGES.portrait, SAMPLE_IMAGES.landscape, SAMPLE_IMAGES.square, SAMPLE_IMAGES.portrait].map((src, i) => <Image key={i} src={src} alt={\`Gallery image \${i + 1}\`} aspectRatio="1/1" radius="lg" objectFit="cover" overlay={<IconButton size="sm" variant="soft" shape="circle">\r
              🔍\r
            </IconButton>} overlayPosition="top-right" />)}\r
    </div>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
}`,...(Sa=(va=V.parameters)==null?void 0:va.docs)==null?void 0:Sa.source}}};const or=["Small","Medium","Large","ExtraLarge","FullWidth","AspectRatioSquare","AspectRatio16by9","AspectRatio4by3","AspectRatio21by9","ObjectFitCover","ObjectFitContain","WithSkeleton","WithBlurPlaceholder","WithFallback","FallbackWithCustomIcon","WithOverlayTopRight","WithOverlayBottomLeft","WithOverlayCenter","MultipleOverlays","WithShadowAndBorder","RoundedVariations","InteractiveRetry","ProductCard","UserAvatar","Gallery"];export{w as AspectRatio16by9,A as AspectRatio21by9,E as AspectRatio4by3,I as AspectRatioSquare,S as ExtraLarge,R as FallbackWithCustomIcon,b as FullWidth,V as Gallery,F as InteractiveRetry,v as Large,f as Medium,G as MultipleOverlays,j as ObjectFitContain,M as ObjectFitCover,W as ProductCard,C as RoundedVariations,x as Small,T as UserAvatar,P as WithBlurPlaceholder,L as WithFallback,q as WithOverlayBottomLeft,_ as WithOverlayCenter,z as WithOverlayTopRight,B as WithShadowAndBorder,k as WithSkeleton,or as __namedExportsOrder,sr as default};
