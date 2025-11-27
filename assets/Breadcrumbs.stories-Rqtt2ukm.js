import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{R as _,r as re}from"./index-B2-qRKKC.js";import{c as le}from"./classNames-2dOUpm6k.js";import{I as B}from"./Icon-dy69MN_5.js";import"./_commonjsHelpers-Cpj98o6Y.js";const te="_breadcrumbs_akyld_265",ce="_separator_akyld_290",ie="_separatorIcon_akyld_305",de="_item_akyld_312",me="_clickable_akyld_328",ue="_icon_akyld_331",pe="_label_akyld_334",be="_disabled_akyld_355",o={"dark-mode":"_dark-mode_akyld_244",breadcrumbs:te,separator:ce,separatorIcon:ie,item:de,clickable:me,icon:ue,label:pe,disabled:be,"size-sm":"_size-sm_akyld_385","size-md":"_size-md_akyld_400","size-lg":"_size-lg_akyld_415"},n=_.memo(re.forwardRef(({items:a,separator:r="/",separatorIcon:f,onBreadcrumbClick:y,disableLast:k=!0,size:ee="md",className:ae="",...ne},oe)=>{if(!a||a.length===0)return null;const se=(s,l)=>{k&&l||y==null||y(s)};return e.jsx("div",{ref:oe,className:le(o.breadcrumbs,o[`size-${ee}`],ae),...ne,children:a.map((s,l)=>{const h=l===a.length-1,C=!(k&&h);return e.jsxs(_.Fragment,{children:[l>0&&e.jsx("div",{className:o.separator,children:f?e.jsx(B,{name:f,className:o.separatorIcon}):e.jsx("span",{children:r})}),e.jsxs("button",{className:`${o.item} ${C?o.clickable:o.disabled}`,onClick:()=>se(s.value,h),disabled:!C,type:"button","aria-current":h?"page":void 0,children:[s.icon&&e.jsx(B,{name:s.icon,className:o.icon}),e.jsx("span",{className:o.label,children:s.label||s.value})]})]},s.value)})})}));n.displayName="Breadcrumbs";n.__docgenInfo={description:`Breadcrumbs Component
Displays a navigation hierarchy with icons and separators`,methods:[],displayName:"Breadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items with icon and value"},separator:{required:!1,tsType:{name:"string"},description:"Separator between breadcrumbs (default: '/')",defaultValue:{value:"'/'",computed:!1}},separatorIcon:{required:!1,tsType:{name:"string"},description:"Icon to use as separator (overrides separator prop)"},onBreadcrumbClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when a breadcrumb is clicked"},disableLast:{required:!1,tsType:{name:"boolean"},description:"Make last breadcrumb non-clickable",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the breadcrumb text",defaultValue:{value:"'md'",computed:!1}}}};const ke={title:"Navigation/Breadcrumbs",component:n,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},disableLast:{control:"boolean"}},parameters:{docs:{description:{component:"A navigation component that displays the current page's location within a hierarchy. Helps users understand their position and navigate back easily."}}}},t={args:{items:[{value:"home",label:"Home"},{value:"products",label:"Products"},{value:"electronics",label:"Electronics"}],onBreadcrumbClick:a=>console.log("Clicked:",a)},parameters:{docs:{source:{type:"code",state:"open"}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(n,{size:"sm",items:[{value:"home",label:"Home"},{value:"docs",label:"Documentation"},{value:"components",label:"Components"}]}),e.jsx(n,{size:"md",items:[{value:"home",label:"Home"},{value:"docs",label:"Documentation"},{value:"components",label:"Components"}]}),e.jsx(n,{size:"lg",items:[{value:"home",label:"Home"},{value:"docs",label:"Documentation"},{value:"components",label:"Components"}]})]}),parameters:{docs:{description:{story:"Breadcrumbs are available in three sizes: small, medium (default), and large."},source:{type:"code",state:"open"}}}},i={args:{items:[{value:"home",label:"Home",icon:"HomeIcon"},{value:"settings",label:"Settings",icon:"Settings01Icon"},{value:"profile",label:"Profile",icon:"UserIcon"}]},parameters:{docs:{description:{story:"Breadcrumb items can include icons for better visual recognition."},source:{type:"code",state:"open"}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(n,{separator:"/",items:[{value:"home",label:"Home"},{value:"docs",label:"Docs"},{value:"guide",label:"Guide"}]}),e.jsx(n,{separator:">",items:[{value:"home",label:"Home"},{value:"docs",label:"Docs"},{value:"guide",label:"Guide"}]}),e.jsx(n,{separator:"-",items:[{value:"home",label:"Home"},{value:"docs",label:"Docs"},{value:"guide",label:"Guide"}]}),e.jsx(n,{separator:"•",items:[{value:"home",label:"Home"},{value:"docs",label:"Docs"},{value:"guide",label:"Guide"}]})]}),parameters:{docs:{description:{story:"Customize the separator character between breadcrumb items."},source:{type:"code",state:"open"}}}},m={args:{items:[{value:"home",label:"Home"},{value:"products",label:"Products"},{value:"details",label:"Details"}],separatorIcon:"ChevronRightIcon"},parameters:{docs:{description:{story:"Use an icon as the separator instead of a text character."},source:{type:"code",state:"open"}}}},u={args:{items:[{value:"home",label:"Home"},{value:"catalog",label:"Catalog"},{value:"item",label:"Item Details"}],disableLast:!1,onBreadcrumbClick:a=>alert(`Clicked: ${a}`)},parameters:{docs:{description:{story:"By default, the last breadcrumb is disabled. Set disableLast to false to make it clickable."},source:{type:"code",state:"open"}}}},p={args:{items:[{value:"home",label:"Home"},{value:"workspace",label:"Workspace"},{value:"projects",label:"Projects"},{value:"design-system",label:"Design System"},{value:"components",label:"Components"},{value:"navigation",label:"Navigation"},{value:"breadcrumbs",label:"Breadcrumbs"}]},parameters:{docs:{description:{story:"Breadcrumbs automatically handle long navigation paths."},source:{type:"code",state:"open"}}}},b={args:{items:[{value:"home",icon:"Home01Icon"},{value:"folder",icon:"FolderIcon"},{value:"file",icon:"FileIcon"}],onBreadcrumbClick:a=>console.log("Clicked:",a)},parameters:{docs:{description:{story:"Breadcrumbs can display icons only without labels for a more compact design."},source:{type:"code",state:"open"}}}},v={render:()=>{const a=r=>{console.log("Navigating to:",r),alert(`Navigating to: ${r}`)};return e.jsx(n,{items:[{value:"home",label:"Home"},{value:"products",label:"Products"},{value:"laptop",label:"Laptop"}],onBreadcrumbClick:a})},parameters:{docs:{description:{story:"Handle breadcrumb clicks with the onBreadcrumbClick callback to implement custom navigation."},source:{type:"code",state:"open"}}}},g={render:()=>e.jsx("div",{style:{padding:24,backgroundColor:"#f5f5f5",borderRadius:8},children:e.jsx(n,{items:[{value:"home",label:"Home",icon:"Home01Icon"},{value:"electronics",label:"Electronics"},{value:"computers",label:"Computers"},{value:"laptops",label:"Laptops"},{value:"product-123",label:"MacBook Pro 16"}],onBreadcrumbClick:a=>console.log("Navigate to:",a)})}),parameters:{docs:{description:{story:"Real-world e-commerce product page breadcrumb navigation example."},source:{type:"code",state:"open"}}}};var I,x,H;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      label: "Home"
    }, {
      value: "products",
      label: "Products"
    }, {
      value: "electronics",
      label: "Electronics"
    }],
    onBreadcrumbClick: (value: string) => console.log("Clicked:", value)
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(H=(x=t.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var S,D,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <Breadcrumbs size="sm" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Documentation"
    }, {
      value: "components",
      label: "Components"
    }]} />\r
      <Breadcrumbs size="md" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Documentation"
    }, {
      value: "components",
      label: "Components"
    }]} />\r
      <Breadcrumbs size="lg" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Documentation"
    }, {
      value: "components",
      label: "Components"
    }]} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Breadcrumbs are available in three sizes: small, medium (default), and large."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var z,w,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      label: "Home",
      icon: "HomeIcon"
    }, {
      value: "settings",
      label: "Settings",
      icon: "Settings01Icon"
    }, {
      value: "profile",
      label: "Profile",
      icon: "UserIcon"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Breadcrumb items can include icons for better visual recognition."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var P,L,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <Breadcrumbs separator="/" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Docs"
    }, {
      value: "guide",
      label: "Guide"
    }]} />\r
      <Breadcrumbs separator=">" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Docs"
    }, {
      value: "guide",
      label: "Guide"
    }]} />\r
      <Breadcrumbs separator="-" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Docs"
    }, {
      value: "guide",
      label: "Guide"
    }]} />\r
      <Breadcrumbs separator="•" items={[{
      value: "home",
      label: "Home"
    }, {
      value: "docs",
      label: "Docs"
    }, {
      value: "guide",
      label: "Guide"
    }]} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Customize the separator character between breadcrumb items."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var T,q,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      label: "Home"
    }, {
      value: "products",
      label: "Products"
    }, {
      value: "details",
      label: "Details"
    }],
    separatorIcon: "ChevronRightIcon"
  },
  parameters: {
    docs: {
      description: {
        story: "Use an icon as the separator instead of a text character."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var G,$,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      label: "Home"
    }, {
      value: "catalog",
      label: "Catalog"
    }, {
      value: "item",
      label: "Item Details"
    }],
    disableLast: false,
    onBreadcrumbClick: (value: string) => alert(\`Clicked: \${value}\`)
  },
  parameters: {
    docs: {
      description: {
        story: "By default, the last breadcrumb is disabled. Set disableLast to false to make it clickable."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(W=($=u.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var F,A,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      label: "Home"
    }, {
      value: "workspace",
      label: "Workspace"
    }, {
      value: "projects",
      label: "Projects"
    }, {
      value: "design-system",
      label: "Design System"
    }, {
      value: "components",
      label: "Components"
    }, {
      value: "navigation",
      label: "Navigation"
    }, {
      value: "breadcrumbs",
      label: "Breadcrumbs"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Breadcrumbs automatically handle long navigation paths."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var V,M,O;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "home",
      icon: "Home01Icon"
    }, {
      value: "folder",
      icon: "FolderIcon"
    }, {
      value: "file",
      icon: "FileIcon"
    }],
    onBreadcrumbClick: (value: string) => console.log("Clicked:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "Breadcrumbs can display icons only without labels for a more compact design."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const handleClick = (value: string) => {
      console.log("Navigating to:", value);
      alert(\`Navigating to: \${value}\`);
    };
    return <Breadcrumbs items={[{
      value: "home",
      label: "Home"
    }, {
      value: "products",
      label: "Products"
    }, {
      value: "laptop",
      label: "Laptop"
    }]} onBreadcrumbClick={handleClick} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Handle breadcrumb clicks with the onBreadcrumbClick callback to implement custom navigation."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    backgroundColor: "#f5f5f5",
    borderRadius: 8
  }}>\r
      <Breadcrumbs items={[{
      value: "home",
      label: "Home",
      icon: "Home01Icon"
    }, {
      value: "electronics",
      label: "Electronics"
    }, {
      value: "computers",
      label: "Computers"
    }, {
      value: "laptops",
      label: "Laptops"
    }, {
      value: "product-123",
      label: "MacBook Pro 16"
    }]} onBreadcrumbClick={(value: string) => console.log("Navigate to:", value)} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Real-world e-commerce product page breadcrumb navigation example."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ce=["Default","Sizes","WithIcons","CustomSeparator","IconSeparator","ClickableLast","LongPath","OnlyIcons","WithCallback","ECommerce"];export{u as ClickableLast,d as CustomSeparator,t as Default,g as ECommerce,m as IconSeparator,p as LongPath,b as OnlyIcons,c as Sizes,v as WithCallback,i as WithIcons,Ce as __namedExportsOrder,ke as default};
