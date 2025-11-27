import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E="_aspectRatio_iwn5o_265",U="_aspectRatioContent_iwn5o_271",p={aspectRatio:E,aspectRatioContent:U},t=({ratio:d="16/9",children:z,className:T,style:P,...B})=>{const l=d!=="auto"?d:void 0;return e.jsx("div",{className:`${p.aspectRatio} ${T||""}`,style:{...P,...l&&{aspectRatio:l}},...B,children:e.jsx("div",{className:p.aspectRatioContent,children:z})})};t.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{ratio:{defaultValue:{value:"'16/9'",computed:!1},required:!1}}};const F={title:"DataDisplay/AspectRatio",component:t,tags:["autodocs"],argTypes:{ratio:{control:{type:"select"},options:["1/1","4/3","16/9","21/9","3/2","2/3","9/16","auto"]}}},r=d=>e.jsx(t,{...d,children:e.jsx("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold"},children:d.ratio||"16/9"})});r.args={ratio:"16/9"};r.parameters={docs:{source:{code:'<AspectRatio ratio="16/9">...</AspectRatio>'}}};const a=()=>e.jsx("div",{style:{maxWidth:600},children:e.jsx(t,{ratio:"16/9",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4",alt:"Mountain landscape"})})});a.parameters={docs:{source:{code:'<AspectRatio ratio="16/9"><img src="..." /></AspectRatio>'}}};const i=()=>e.jsx("div",{style:{maxWidth:300},children:e.jsx(t,{ratio:"1/1",children:e.jsx("div",{style:{background:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"20px"},children:"1:1 Square"})})});i.parameters={docs:{source:{code:'<AspectRatio ratio="1/1">...</AspectRatio>'}}};const o=()=>e.jsx("div",{style:{maxWidth:300},children:e.jsx(t,{ratio:"2/3",children:e.jsx("div",{style:{background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"20px"},children:"2:3 Portrait"})})});o.parameters={docs:{source:{code:'<AspectRatio ratio="2/3">...</AspectRatio>'}}};const s=()=>e.jsx(t,{ratio:"21/9",children:e.jsx("div",{style:{background:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"20px"},children:"21:9 Ultra Wide"})});s.parameters={docs:{source:{code:'<AspectRatio ratio="21/9">...</AspectRatio>'}}};const c=()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:16},children:[e.jsx(t,{ratio:"1/1",children:e.jsx("div",{style:{background:"#667eea",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:"1:1"})}),e.jsx(t,{ratio:"4/3",children:e.jsx("div",{style:{background:"#764ba2",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:"4:3"})}),e.jsx(t,{ratio:"16/9",children:e.jsx("div",{style:{background:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:"16:9"})}),e.jsx(t,{ratio:"21/9",children:e.jsx("div",{style:{background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:"21:9"})}),e.jsx(t,{ratio:"3/2",children:e.jsx("div",{style:{background:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:"3:2"})}),e.jsx(t,{ratio:"2/3",children:e.jsx("div",{style:{background:"#8b5cf6",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:"2:3"})})]});c.parameters={docs:{source:{code:'<AspectRatio ratio="..." />'}}};const n=()=>e.jsx("div",{style:{maxWidth:800},children:e.jsx(t,{ratio:"16/9",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/dQw4w9WgXcQ",title:"YouTube video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%"}})})});n.parameters={docs:{source:{code:'<AspectRatio ratio="16/9"><iframe src="..." /></AspectRatio>'}}};r.__docgenInfo={description:"",methods:[],displayName:"Basic",props:{ratio:{required:!1,tsType:{name:"union",raw:`| '1/1' 
| '4/3' 
| '16/9' 
| '21/9' 
| '3/2' 
| '2/3' 
| '9/16'
| 'auto'`,elements:[{name:"literal",value:"'1/1'"},{name:"literal",value:"'4/3'"},{name:"literal",value:"'16/9'"},{name:"literal",value:"'21/9'"},{name:"literal",value:"'3/2'"},{name:"literal",value:"'2/3'"},{name:"literal",value:"'9/16'"},{name:"literal",value:"'auto'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"WithImage"};i.__docgenInfo={description:"",methods:[],displayName:"Square"};o.__docgenInfo={description:"",methods:[],displayName:"Portrait"};s.__docgenInfo={description:"",methods:[],displayName:"UltraWide"};c.__docgenInfo={description:"",methods:[],displayName:"AllRatios"};n.__docgenInfo={description:"",methods:[],displayName:"VideoEmbed"};var m,u,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(args: AspectRatioProps) => <AspectRatio {...args}>\r
    <div style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold'
  }}>\r
      {args.ratio || '16/9'}\r
    </div>\r
  </AspectRatio>`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div style={{
  maxWidth: 600
}}>\r
    <AspectRatio ratio="16/9">\r
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" alt="Mountain landscape" />\r
    </AspectRatio>\r
  </div>`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,v,R;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  maxWidth: 300
}}>\r
    <AspectRatio ratio="1/1">\r
      <div style={{
      background: '#f59e0b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px'
    }}>\r
        1:1 Square\r
      </div>\r
    </AspectRatio>\r
  </div>`,...(R=(v=i.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var j,b,A;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  maxWidth: 300
}}>\r
    <AspectRatio ratio="2/3">\r
      <div style={{
      background: '#10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px'
    }}>\r
        2:3 Portrait\r
      </div>\r
    </AspectRatio>\r
  </div>`,...(A=(b=o.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var w,I,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => <AspectRatio ratio="21/9">\r
    <div style={{
    background: '#ef4444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '20px'
  }}>\r
      21:9 Ultra Wide\r
    </div>\r
  </AspectRatio>`,...(C=(I=s.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var _,S,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 16
}}>\r
    <AspectRatio ratio="1/1">\r
      <div style={{
      background: '#667eea',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>1:1</div>\r
    </AspectRatio>\r
    <AspectRatio ratio="4/3">\r
      <div style={{
      background: '#764ba2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>4:3</div>\r
    </AspectRatio>\r
    <AspectRatio ratio="16/9">\r
      <div style={{
      background: '#f59e0b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>16:9</div>\r
    </AspectRatio>\r
    <AspectRatio ratio="21/9">\r
      <div style={{
      background: '#10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>21:9</div>\r
    </AspectRatio>\r
    <AspectRatio ratio="3/2">\r
      <div style={{
      background: '#ef4444',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>3:2</div>\r
    </AspectRatio>\r
    <AspectRatio ratio="2/3">\r
      <div style={{
      background: '#8b5cf6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>2:3</div>\r
    </AspectRatio>\r
  </div>`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var W,N,q;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div style={{
  maxWidth: 800
}}>\r
    <AspectRatio ratio="16/9">\r
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{
      width: '100%',
      height: '100%'
    }} />\r
    </AspectRatio>\r
  </div>`,...(q=(N=n.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const M=["Basic","WithImage","Square","Portrait","UltraWide","AllRatios","VideoEmbed"];export{c as AllRatios,r as Basic,o as Portrait,i as Square,s as UltraWide,n as VideoEmbed,a as WithImage,M as __namedExportsOrder,F as default};
