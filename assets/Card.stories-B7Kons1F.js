import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as C}from"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=C.memo(C.forwardRef(({title:g,subtitle:m,image:y,content:f,footer:v,hoverable:h=!1,clickable:b=!1,onClick:x,className:X="",style:Z={},children:ee},re)=>{const te={display:"flex",flexDirection:"column",borderRadius:"var(--radius-lg)",backgroundColor:"#ffffff",boxShadow:"var(--shadow-sm)",overflow:"hidden",transition:"all 0.2s ease-in-out",cursor:b||h?"pointer":"default",...Z},oe=t=>{(b||h)&&x&&x(t)};return e.jsxs("div",{ref:re,className:X,style:te,onClick:oe,onMouseEnter:t=>{h&&(t.currentTarget.style.boxShadow="var(--shadow-lg)",t.currentTarget.style.transform="translateY(-4px)")},onMouseLeave:t=>{t.currentTarget.style.boxShadow="var(--shadow-sm)",t.currentTarget.style.transform="translateY(0)"},children:[y&&e.jsx("img",{src:y,alt:g,style:{width:"100%",height:"200px",objectFit:"cover",borderBottom:"1px solid var(--color-gray-100)"}}),e.jsxs("div",{style:{padding:"var(--spacing-lg)",flex:1},children:[e.jsx("h3",{style:{fontSize:"var(--font-size-lg)",fontWeight:"var(--font-weight-bold)",margin:0,marginBottom:m?"var(--spacing-xs)":"var(--spacing-md)",color:"var(--color-gray-900)"},children:g}),m&&e.jsx("p",{style:{fontSize:"var(--font-size-sm)",color:"var(--color-gray-600)",margin:0,marginBottom:"var(--spacing-md)"},children:m}),f&&e.jsx("p",{style:{fontSize:"var(--font-size-base)",color:"var(--color-gray-700)",lineHeight:"var(--line-height-normal)",margin:0,marginBottom:"var(--spacing-md)"},children:f}),ee]}),v&&e.jsx("div",{style:{padding:"var(--spacing-md) var(--spacing-lg)",backgroundColor:"var(--color-gray-50)",borderTop:"1px solid var(--color-gray-100)"},children:v})]})}));r.displayName="Card";r.__docgenInfo={description:"Card component with shadow, spacing, and theme token support.",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles",defaultValue:{value:"{}",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},onDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ie={title:"Surfaces/Card",component:r,tags:["autodocs"],argTypes:{hoverable:{control:"boolean"},clickable:{control:"boolean"}},parameters:{docs:{description:{component:"A flexible container component for displaying content. Supports images, titles, subtitles, content, and footers with hover effects."}}}},o={args:{title:"Card Title",content:"This is the card content. It can contain any text or information you want to display."},parameters:{docs:{source:{type:"code",state:"open"}}}},n={args:{title:"Product Name",subtitle:"Category: Electronics",content:"This card includes a subtitle for additional context or categorization."},parameters:{docs:{description:{story:"Cards can include subtitles for additional information below the title."},source:{type:"code",state:"open"}}}},a={args:{title:"Beautiful Landscape",subtitle:"Nature Photography",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",content:"A stunning view of mountains and valleys captured at sunset."},parameters:{docs:{description:{story:"Cards can include images at the top for visual appeal."},source:{type:"code",state:"open"}}}},s={args:{title:"Article Title",content:"This is a preview of the article content. Click to read more.",footer:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"var(--color-text-secondary)"},children:"2 min read"}),e.jsx("button",{style:{padding:"6px 12px",borderRadius:4,border:"1px solid var(--color-primary-600)",backgroundColor:"transparent",color:"var(--color-primary-600)",cursor:"pointer"},children:"Read More"})]})},parameters:{docs:{description:{story:"Cards can include custom footer content such as actions or metadata."},source:{type:"code",state:"open"}}}},i={args:{title:"Hoverable Card",content:"Hover over this card to see the elevation effect.",hoverable:!0},parameters:{docs:{description:{story:"Set hoverable to true to add a lift effect on mouse hover."},source:{type:"code",state:"open"}}}},c={args:{title:"Clickable Card",content:"Click this card to trigger an action.",clickable:!0,onClick:()=>alert("Card clicked!")},parameters:{docs:{description:{story:"Make cards clickable with the clickable prop and onClick handler."},source:{type:"code",state:"open"}}}},d={render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{title:"Wireless Headphones",subtitle:"$199.99",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=200&fit=crop",content:"High-quality wireless headphones with active noise cancellation and 30-hour battery life.",footer:e.jsx("button",{style:{width:"100%",padding:"10px",borderRadius:4,border:"none",backgroundColor:"var(--color-primary-600)",color:"white",cursor:"pointer",fontWeight:600},children:"Add to Cart"}),hoverable:!0})}),parameters:{docs:{description:{story:"Example of a product card for e-commerce applications."},source:{type:"code",state:"open"}}}},l={render:()=>e.jsx("div",{style:{maxWidth:400},children:e.jsx(r,{title:"Getting Started with React",subtitle:"By John Doe • March 15, 2025",image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",content:"Learn the basics of React, including components, props, state, and hooks in this comprehensive beginner's guide.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("span",{style:{padding:"4px 8px",borderRadius:4,backgroundColor:"var(--color-primary-100)",color:"var(--color-primary-700)",fontSize:12},children:"React"}),e.jsx("span",{style:{padding:"4px 8px",borderRadius:4,backgroundColor:"var(--color-primary-100)",color:"var(--color-primary-700)",fontSize:12},children:"Tutorial"}),e.jsx("span",{style:{padding:"4px 8px",borderRadius:4,backgroundColor:"var(--color-primary-100)",color:"var(--color-primary-700)",fontSize:12},children:"JavaScript"})]}),clickable:!0,onClick:()=>console.log("Open blog post")})}),parameters:{docs:{description:{story:"Example of a blog post card with tags in the footer."},source:{type:"code",state:"open"}}}},p={render:()=>e.jsx(r,{title:"Custom Card Content",subtitle:"Using the children prop",children:e.jsxs("div",{style:{padding:16},children:[e.jsx("p",{style:{margin:0,marginBottom:16},children:"You can pass any custom content using the children prop instead of the content prop."}),e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[e.jsx("button",{style:{flex:1,padding:"8px 16px",borderRadius:4,border:"1px solid var(--color-primary-600)",backgroundColor:"transparent",color:"var(--color-primary-600)",cursor:"pointer"},children:"Cancel"}),e.jsx("button",{style:{flex:1,padding:"8px 16px",borderRadius:4,border:"none",backgroundColor:"var(--color-primary-600)",color:"white",cursor:"pointer"},children:"Confirm"})]})]})}),parameters:{docs:{description:{story:"Use the children prop for completely custom card content."},source:{type:"code",state:"open"}}}},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:24},children:[e.jsx(r,{title:"Card 1",content:"First card in the grid",hoverable:!0}),e.jsx(r,{title:"Card 2",content:"Second card in the grid",hoverable:!0}),e.jsx(r,{title:"Card 3",content:"Third card in the grid",hoverable:!0}),e.jsx(r,{title:"Card 4",content:"Fourth card in the grid",hoverable:!0}),e.jsx(r,{title:"Card 5",content:"Fifth card in the grid",hoverable:!0}),e.jsx(r,{title:"Card 6",content:"Sixth card in the grid",hoverable:!0})]}),parameters:{docs:{description:{story:"Cards work great in grid layouts for displaying multiple items."},source:{type:"code",state:"open"}}}};var w,k,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Card Title",
    content: "This is the card content. It can contain any text or information you want to display."
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var R,T,j;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: "Product Name",
    subtitle: "Category: Electronics",
    content: "This card includes a subtitle for additional context or categorization."
  },
  parameters: {
    docs: {
      description: {
        story: "Cards can include subtitles for additional information below the title."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var E,M,H;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: "Beautiful Landscape",
    subtitle: "Nature Photography",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    content: "A stunning view of mountains and valleys captured at sunset."
  },
  parameters: {
    docs: {
      description: {
        story: "Cards can include images at the top for visual appeal."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(H=(M=a.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var z,q,W;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: "Article Title",
    content: "This is a preview of the article content. Click to read more.",
    footer: <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: 12,
        color: "var(--color-text-secondary)"
      }}>2 min read</span>\r
        <button style={{
        padding: "6px 12px",
        borderRadius: 4,
        border: "1px solid var(--color-primary-600)",
        backgroundColor: "transparent",
        color: "var(--color-primary-600)",
        cursor: "pointer"
      }}>\r
          Read More\r
        </button>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "Cards can include custom footer content such as actions or metadata."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(W=(q=s.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var B,L,N;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Hoverable Card",
    content: "Hover over this card to see the elevation effect.",
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Set hoverable to true to add a lift effect on mouse hover."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,F,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: "Clickable Card",
    content: "Click this card to trigger an action.",
    clickable: true,
    onClick: () => alert("Card clicked!")
  },
  parameters: {
    docs: {
      description: {
        story: "Make cards clickable with the clickable prop and onClick handler."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var A,D,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320
  }}>\r
      <Card title="Wireless Headphones" subtitle="$199.99" image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=200&fit=crop" content="High-quality wireless headphones with active noise cancellation and 30-hour battery life." footer={<button style={{
      width: "100%",
      padding: "10px",
      borderRadius: 4,
      border: "none",
      backgroundColor: "var(--color-primary-600)",
      color: "white",
      cursor: "pointer",
      fontWeight: 600
    }}>\r
            Add to Cart\r
          </button>} hoverable />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example of a product card for e-commerce applications."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var J,U,V;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400
  }}>\r
      <Card title="Getting Started with React" subtitle="By John Doe • March 15, 2025" image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop" content="Learn the basics of React, including components, props, state, and hooks in this comprehensive beginner's guide." footer={<div style={{
      display: "flex",
      gap: 8
    }}>\r
            <span style={{
        padding: "4px 8px",
        borderRadius: 4,
        backgroundColor: "var(--color-primary-100)",
        color: "var(--color-primary-700)",
        fontSize: 12
      }}>React</span>\r
            <span style={{
        padding: "4px 8px",
        borderRadius: 4,
        backgroundColor: "var(--color-primary-100)",
        color: "var(--color-primary-700)",
        fontSize: 12
      }}>Tutorial</span>\r
            <span style={{
        padding: "4px 8px",
        borderRadius: 4,
        backgroundColor: "var(--color-primary-100)",
        color: "var(--color-primary-700)",
        fontSize: 12
      }}>JavaScript</span>\r
          </div>} clickable onClick={() => console.log("Open blog post")} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example of a blog post card with tags in the footer."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Y,_,O;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Card title="Custom Card Content" subtitle="Using the children prop">\r
      <div style={{
      padding: 16
    }}>\r
        <p style={{
        margin: 0,
        marginBottom: 16
      }}>You can pass any custom content using the children prop instead of the content prop.</p>\r
        <div style={{
        display: "flex",
        gap: 8,
        marginBottom: 16
      }}>\r
          <button style={{
          flex: 1,
          padding: "8px 16px",
          borderRadius: 4,
          border: "1px solid var(--color-primary-600)",
          backgroundColor: "transparent",
          color: "var(--color-primary-600)",
          cursor: "pointer"
        }}>\r
            Cancel\r
          </button>\r
          <button style={{
          flex: 1,
          padding: "8px 16px",
          borderRadius: 4,
          border: "none",
          backgroundColor: "var(--color-primary-600)",
          color: "white",
          cursor: "pointer"
        }}>\r
            Confirm\r
          </button>\r
        </div>\r
      </div>\r
    </Card>,
  parameters: {
    docs: {
      description: {
        story: "Use the children prop for completely custom card content."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var $,K,Q;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 24
  }}>\r
      <Card title="Card 1" content="First card in the grid" hoverable />\r
      <Card title="Card 2" content="Second card in the grid" hoverable />\r
      <Card title="Card 3" content="Third card in the grid" hoverable />\r
      <Card title="Card 4" content="Fourth card in the grid" hoverable />\r
      <Card title="Card 5" content="Fifth card in the grid" hoverable />\r
      <Card title="Card 6" content="Sixth card in the grid" hoverable />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Cards work great in grid layouts for displaying multiple items."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ce=["Default","WithSubtitle","WithImage","WithFooter","Hoverable","Clickable","ProductCard","BlogPostCard","CustomContent","CardGrid"];export{l as BlogPostCard,u as CardGrid,c as Clickable,p as CustomContent,o as Default,i as Hoverable,d as ProductCard,s as WithFooter,a as WithImage,n as WithSubtitle,ce as __namedExportsOrder,ie as default};
