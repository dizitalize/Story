import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as v,R as p}from"./index-B2-qRKKC.js";import{I as ue}from"./Icon-CQ1yD0uX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-3Q35QAIm.js";const he="_accordion_7zsnq_266",fe="_variantDefault_7zsnq_274",ye="_items_7zsnq_274",ge="_accordionItem_7zsnq_283",xe="_accordionHeader_7zsnq_292",be="_expanded_7zsnq_295",Ae="_accordionContent_7zsnq_302",Ie="_variantGroup_7zsnq_306",ve="_caption_7zsnq_328",je="_headerContent_7zsnq_372",we="_title_7zsnq_380",Se="_label_7zsnq_388",Ce="_icon_7zsnq_396",Te="_rotated_7zsnq_406",t={accordion:he,variantDefault:fe,items:ye,accordionItem:ge,accordionHeader:xe,expanded:be,accordionContent:Ae,variantGroup:Ie,caption:ve,headerContent:je,title:we,label:Se,icon:Ce,rotated:Te},n=v.forwardRef(({id:m,title:d,children:j,collapsedLabel:w="Show More",expandedLabel:S="Show Less",dynamicTitle:C=!0,className:T="",hideCaption:k=!1,isExpanded:r=!1,onToggle:c,...i},q)=>e.jsxs("div",{ref:q,className:`${t.accordionItem} ${r?t.expanded:t.collapsed} ${T}`,"data-id":m,...i,children:[e.jsxs("button",{className:t.accordionHeader,onClick:c,"aria-expanded":r,"aria-controls":`${m}-content`,children:[e.jsxs("div",{className:t.headerContent,children:[e.jsx("span",{className:t.title,children:d}),C&&!k&&e.jsx("span",{className:t.label,children:r?S:w})]}),e.jsx(ue,{name:"chevron-down",className:`${t.icon} ${r?t.rotated:""}`})]}),r&&e.jsx("div",{id:`${m}-content`,className:t.accordionContent,children:j})]}));n.displayName="AccordionItem";const a=v.forwardRef(({id:m,children:d,caption:j="Accordion",hideCaption:w=!1,BackgroundColor:S="#E1F0FF",showBackgroundColor:C=!1,expandFirstItem:T=!1,variant:k="default",singleExpand:r=!0,onOpen:c,onClose:i,visibility:q=!0,className:re="",...ae},se)=>{const[ce,de]=v.useState(T&&p.Children.count(d)>0?new Set([p.Children.toArray(d)[0].props.id]):new Set),le=v.useCallback(o=>{de(l=>{const s=new Set(l),E=!s.has(o);if(r&&E){const R=Array.from(l)[0];R&&(i==null||i(R)),s.clear()}return E?(s.add(o),c==null||c(o)):(s.delete(o),i==null||i(o)),s})},[r,c,i]);if(!q)return null;const pe=C?{backgroundColor:S}:{},me=k==="group"?t.variantGroup:t.variantDefault;return e.jsxs("div",{ref:se,className:`${t.accordion} ${me} ${re}`,style:pe,...ae,children:[!w&&e.jsx("h2",{className:t.caption,children:j}),e.jsx("div",{className:t.items,children:p.Children.map(d,o=>{if(p.isValidElement(o)){const l=o.props.id,s=ce.has(l);return p.cloneElement(o,{isExpanded:s,onToggle:()=>le(l)})}return o})})]})});a.displayName="Accordion";n.__docgenInfo={description:`AccordionItem Component
Individual accordion item with expand/collapse functionality`,methods:[],displayName:"AccordionItem",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the accordion item"},title:{required:!0,tsType:{name:"string"},description:"Title of the accordion item"},collapsedLabel:{required:!1,tsType:{name:"string"},description:"Label shown when item is collapsed",defaultValue:{value:"'Show More'",computed:!1}},expandedLabel:{required:!1,tsType:{name:"string"},description:"Label shown when item is expanded",defaultValue:{value:"'Show Less'",computed:!1}},dynamicTitle:{required:!1,tsType:{name:"boolean"},description:"Show dynamic title with label",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},hideCaption:{required:!1,tsType:{name:"boolean"},description:"Hide caption text",defaultValue:{value:"false",computed:!1}},isExpanded:{required:!1,tsType:{name:"boolean"},description:"Is the item expanded (controlled by parent)",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when item toggle state changes"}}};a.__docgenInfo={description:`Accordion Component
Container for accordion items with expand/collapse functionality`,methods:[],displayName:"Accordion",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the accordion"},children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<AccordionItemProps>",elements:[{name:"AccordionItemProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<AccordionItemProps>",elements:[{name:"AccordionItemProps"}]}],raw:"React.ReactElement<AccordionItemProps>[]"}]},description:"Content - array of AccordionItem components"},caption:{required:!1,tsType:{name:"string"},description:"Caption for the accordion",defaultValue:{value:"'Accordion'",computed:!1}},hideCaption:{required:!1,tsType:{name:"boolean"},description:"Hide the caption",defaultValue:{value:"false",computed:!1}},BackgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the accordion",defaultValue:{value:"'#E1F0FF'",computed:!1}},showBackgroundColor:{required:!1,tsType:{name:"boolean"},description:"Show background color",defaultValue:{value:"false",computed:!1}},expandFirstItem:{required:!1,tsType:{name:"boolean"},description:"Expand the first item by default",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'group'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'group'"}]},description:'Variant style: "default" or "group"',defaultValue:{value:"'default'",computed:!1}},singleExpand:{required:!1,tsType:{name:"boolean"},description:"Only allow one item open at a time",defaultValue:{value:"true",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:"Callback when item opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:"Callback when item closes"},visibility:{required:!1,tsType:{name:"boolean"},description:"Initial visibility state",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Fe={title:"Surfaces/Accordion",component:a,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["default","group"]},singleExpand:{control:"boolean"},expandFirstItem:{control:"boolean"},hideCaption:{control:"boolean"},showBackgroundColor:{control:"boolean"}},parameters:{docs:{description:{component:"A collapsible content component for organizing information. Supports single or multiple expanded items with smooth animations."}}}},u={args:{id:"accordion-1",caption:"Frequently Asked Questions",children:[e.jsx(n,{id:"item-1",title:"What is React?",children:e.jsx("p",{children:"React is a JavaScript library for building user interfaces."})},"1"),e.jsx(n,{id:"item-2",title:"What is TypeScript?",children:e.jsx("p",{children:"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."})},"2"),e.jsx(n,{id:"item-3",title:"What is Storybook?",children:e.jsx("p",{children:"Storybook is a tool for developing UI components in isolation."})},"3")]},parameters:{docs:{source:{type:"code",state:"open"}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs(a,{id:"default-variant",caption:"Default Variant",variant:"default",children:[e.jsx(n,{id:"d1",title:"Section 1",children:e.jsx("p",{children:"Content for section 1 in default variant."})}),e.jsx(n,{id:"d2",title:"Section 2",children:e.jsx("p",{children:"Content for section 2 in default variant."})})]}),e.jsxs(a,{id:"group-variant",caption:"Group Variant",variant:"group",children:[e.jsx(n,{id:"g1",title:"Section 1",children:e.jsx("p",{children:"Content for section 1 in group variant."})}),e.jsx(n,{id:"g2",title:"Section 2",children:e.jsx("p",{children:"Content for section 2 in group variant."})})]})]}),parameters:{docs:{description:{story:"Accordion supports default and group variants for different visual styles."},source:{type:"code",state:"open"}}}},f={args:{id:"single-expand",caption:"Single Expand Mode",singleExpand:!0,children:[e.jsx(n,{id:"s1",title:"Only one can be open",children:e.jsx("p",{children:"When you open this section, others will close automatically."})},"1"),e.jsx(n,{id:"s2",title:"Try opening this",children:e.jsx("p",{children:"The previous section will close when you open this one."})},"2"),e.jsx(n,{id:"s3",title:"Or this one",children:e.jsx("p",{children:"This is useful for FAQs and wizards where only one section should be visible."})},"3")]},parameters:{docs:{description:{story:"In single expand mode, only one item can be expanded at a time."},source:{type:"code",state:"open"}}}},y={args:{id:"multiple-expand",caption:"Multiple Expand Mode",singleExpand:!1,children:[e.jsx(n,{id:"m1",title:"Multiple items can be open",children:e.jsx("p",{children:"You can have multiple sections expanded simultaneously."})},"1"),e.jsx(n,{id:"m2",title:"Open this too",children:e.jsx("p",{children:"The previous section stays open when you expand this one."})},"2"),e.jsx(n,{id:"m3",title:"And this as well",children:e.jsx("p",{children:"This is useful for settings panels or detailed forms."})},"3")]},parameters:{docs:{description:{story:"When singleExpand is false, multiple items can be expanded simultaneously."},source:{type:"code",state:"open"}}}},g={args:{id:"expand-first",caption:"First Item Expanded",expandFirstItem:!0,children:[e.jsx(n,{id:"f1",title:"This opens by default",children:e.jsx("p",{children:"The first item is expanded automatically when the component mounts."})},"1"),e.jsx(n,{id:"f2",title:"Second item",children:e.jsx("p",{children:"This item is collapsed by default."})},"2"),e.jsx(n,{id:"f3",title:"Third item",children:e.jsx("p",{children:"This item is also collapsed by default."})},"3")]},parameters:{docs:{description:{story:"Set expandFirstItem to true to automatically expand the first accordion item."},source:{type:"code",state:"open"}}}},x={args:{id:"with-bg",caption:"With Background Color",showBackgroundColor:!0,BackgroundColor:"#E1F0FF",children:[e.jsx(n,{id:"b1",title:"Section with background",children:e.jsx("p",{children:"The accordion container has a custom background color."})},"1"),e.jsx(n,{id:"b2",title:"Another section",children:e.jsx("p",{children:"This is useful for highlighting important sections."})},"2")]},parameters:{docs:{description:{story:"Accordion can have a custom background color for emphasis."},source:{type:"code",state:"open"}}}},b={render:()=>e.jsxs(a,{id:"custom-labels",caption:"Custom Expand/Collapse Labels",children:[e.jsx(n,{id:"c1",title:"Item with custom labels",collapsedLabel:"View details",expandedLabel:"Hide details",children:e.jsx("p",{children:"This item uses custom labels for the expand/collapse state."})}),e.jsx(n,{id:"c2",title:"Another item",collapsedLabel:"Read more",expandedLabel:"Read less",children:e.jsx("p",{children:"Each item can have its own custom labels."})})]}),parameters:{docs:{description:{story:"Customize the expand/collapse labels for each accordion item."},source:{type:"code",state:"open"}}}},A={render:()=>e.jsxs(a,{id:"rich-content",caption:"Accordion with Rich Content",children:[e.jsx(n,{id:"r1",title:"Getting Started",children:e.jsxs("div",{style:{padding:"16px 0"},children:[e.jsx("h4",{style:{marginBottom:8},children:"Installation"}),e.jsx("code",{style:{display:"block",padding:12,backgroundColor:"#f5f5f5",borderRadius:4,marginBottom:16},children:"npm install @design-system/ui-components"}),e.jsx("h4",{style:{marginBottom:8},children:"Usage"}),e.jsx("p",{children:"Import and use the components in your React application."})]})}),e.jsx(n,{id:"r2",title:"Configuration",children:e.jsx("div",{style:{padding:"16px 0"},children:e.jsxs("ul",{style:{margin:0,paddingLeft:20},children:[e.jsx("li",{children:"Set up your theme tokens"}),e.jsx("li",{children:"Configure global styles"}),e.jsx("li",{children:"Import required components"})]})})}),e.jsx(n,{id:"r3",title:"Examples",children:e.jsxs("div",{style:{padding:"16px 0"},children:[e.jsx("p",{children:"Check out our extensive collection of examples in Storybook."}),e.jsx("button",{style:{marginTop:12,padding:"8px 16px",borderRadius:4,border:"none",backgroundColor:"var(--color-primary-600)",color:"white",cursor:"pointer"},children:"View Examples"})]})})]}),parameters:{docs:{description:{story:"Accordion items can contain any React content including headings, lists, code blocks, and buttons."},source:{type:"code",state:"open"}}}},I={render:()=>e.jsxs(a,{id:"faq",caption:"Frequently Asked Questions",singleExpand:!0,expandFirstItem:!0,children:[e.jsxs(n,{id:"faq1",title:"How do I install the design system?",children:[e.jsx("p",{children:"You can install our design system using npm or yarn:"}),e.jsx("code",{style:{display:"block",padding:12,backgroundColor:"#f5f5f5",borderRadius:4,marginTop:8},children:"npm install @design-system/ui-components"})]}),e.jsx(n,{id:"faq2",title:"Is TypeScript supported?",children:e.jsx("p",{children:"Yes! All components are written in TypeScript and include full type definitions out of the box."})}),e.jsx(n,{id:"faq3",title:"Can I customize the theme?",children:e.jsx("p",{children:"Absolutely. The design system uses CSS variables for theming, making it easy to customize colors, spacing, typography, and more."})}),e.jsx(n,{id:"faq4",title:"Is it accessible?",children:e.jsx("p",{children:"Yes, all components follow WCAG 2.1 Level AA guidelines and include proper ARIA attributes for screen readers."})}),e.jsx(n,{id:"faq5",title:"What browsers are supported?",children:e.jsx("p",{children:"We support all modern browsers including Chrome, Firefox, Safari, and Edge. IE11 is not supported."})})]}),parameters:{docs:{description:{story:"Real-world FAQ example using accordion with single expand mode."},source:{type:"code",state:"open"}}}};var _,F,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: "accordion-1",
    caption: "Frequently Asked Questions",
    children: [<AccordionItem key="1" id="item-1" title="What is React?">\r
        <p>React is a JavaScript library for building user interfaces.</p>\r
      </AccordionItem>, <AccordionItem key="2" id="item-2" title="What is TypeScript?">\r
        <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>\r
      </AccordionItem>, <AccordionItem key="3" id="item-3" title="What is Storybook?">\r
        <p>Storybook is a tool for developing UI components in isolation.</p>\r
      </AccordionItem>]
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var z,L,W;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32
  }}>\r
      <Accordion id="default-variant" caption="Default Variant" variant="default">\r
        <AccordionItem id="d1" title="Section 1">\r
          <p>Content for section 1 in default variant.</p>\r
        </AccordionItem>\r
        <AccordionItem id="d2" title="Section 2">\r
          <p>Content for section 2 in default variant.</p>\r
        </AccordionItem>\r
      </Accordion>\r
\r
      <Accordion id="group-variant" caption="Group Variant" variant="group">\r
        <AccordionItem id="g1" title="Section 1">\r
          <p>Content for section 1 in group variant.</p>\r
        </AccordionItem>\r
        <AccordionItem id="g2" title="Section 2">\r
          <p>Content for section 2 in group variant.</p>\r
        </AccordionItem>\r
      </Accordion>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Accordion supports default and group variants for different visual styles."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var B,N,M;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "single-expand",
    caption: "Single Expand Mode",
    singleExpand: true,
    children: [<AccordionItem key="1" id="s1" title="Only one can be open">\r
        <p>When you open this section, others will close automatically.</p>\r
      </AccordionItem>, <AccordionItem key="2" id="s2" title="Try opening this">\r
        <p>The previous section will close when you open this one.</p>\r
      </AccordionItem>, <AccordionItem key="3" id="s3" title="Or this one">\r
        <p>This is useful for FAQs and wizards where only one section should be visible.</p>\r
      </AccordionItem>]
  },
  parameters: {
    docs: {
      description: {
        story: "In single expand mode, only one item can be expanded at a time."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(M=(N=f.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var D,G,H;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: "multiple-expand",
    caption: "Multiple Expand Mode",
    singleExpand: false,
    children: [<AccordionItem key="1" id="m1" title="Multiple items can be open">\r
        <p>You can have multiple sections expanded simultaneously.</p>\r
      </AccordionItem>, <AccordionItem key="2" id="m2" title="Open this too">\r
        <p>The previous section stays open when you expand this one.</p>\r
      </AccordionItem>, <AccordionItem key="3" id="m3" title="And this as well">\r
        <p>This is useful for settings panels or detailed forms.</p>\r
      </AccordionItem>]
  },
  parameters: {
    docs: {
      description: {
        story: "When singleExpand is false, multiple items can be expanded simultaneously."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,$,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    id: "expand-first",
    caption: "First Item Expanded",
    expandFirstItem: true,
    children: [<AccordionItem key="1" id="f1" title="This opens by default">\r
        <p>The first item is expanded automatically when the component mounts.</p>\r
      </AccordionItem>, <AccordionItem key="2" id="f2" title="Second item">\r
        <p>This item is collapsed by default.</p>\r
      </AccordionItem>, <AccordionItem key="3" id="f3" title="Third item">\r
        <p>This item is also collapsed by default.</p>\r
      </AccordionItem>]
  },
  parameters: {
    docs: {
      description: {
        story: "Set expandFirstItem to true to automatically expand the first accordion item."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Y=($=g.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var P,J,U;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "with-bg",
    caption: "With Background Color",
    showBackgroundColor: true,
    BackgroundColor: "#E1F0FF",
    children: [<AccordionItem key="1" id="b1" title="Section with background">\r
        <p>The accordion container has a custom background color.</p>\r
      </AccordionItem>, <AccordionItem key="2" id="b2" title="Another section">\r
        <p>This is useful for highlighting important sections.</p>\r
      </AccordionItem>]
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion can have a custom background color for emphasis."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(U=(J=x.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var O,K,X;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Accordion id="custom-labels" caption="Custom Expand/Collapse Labels">\r
      <AccordionItem id="c1" title="Item with custom labels" collapsedLabel="View details" expandedLabel="Hide details">\r
        <p>This item uses custom labels for the expand/collapse state.</p>\r
      </AccordionItem>\r
      <AccordionItem id="c2" title="Another item" collapsedLabel="Read more" expandedLabel="Read less">\r
        <p>Each item can have its own custom labels.</p>\r
      </AccordionItem>\r
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "Customize the expand/collapse labels for each accordion item."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,ee,ne;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Accordion id="rich-content" caption="Accordion with Rich Content">\r
      <AccordionItem id="r1" title="Getting Started">\r
        <div style={{
        padding: "16px 0"
      }}>\r
          <h4 style={{
          marginBottom: 8
        }}>Installation</h4>\r
          <code style={{
          display: "block",
          padding: 12,
          backgroundColor: "#f5f5f5",
          borderRadius: 4,
          marginBottom: 16
        }}>\r
            npm install @design-system/ui-components\r
          </code>\r
          <h4 style={{
          marginBottom: 8
        }}>Usage</h4>\r
          <p>Import and use the components in your React application.</p>\r
        </div>\r
      </AccordionItem>\r
      <AccordionItem id="r2" title="Configuration">\r
        <div style={{
        padding: "16px 0"
      }}>\r
          <ul style={{
          margin: 0,
          paddingLeft: 20
        }}>\r
            <li>Set up your theme tokens</li>\r
            <li>Configure global styles</li>\r
            <li>Import required components</li>\r
          </ul>\r
        </div>\r
      </AccordionItem>\r
      <AccordionItem id="r3" title="Examples">\r
        <div style={{
        padding: "16px 0"
      }}>\r
          <p>Check out our extensive collection of examples in Storybook.</p>\r
          <button style={{
          marginTop: 12,
          padding: "8px 16px",
          borderRadius: 4,
          border: "none",
          backgroundColor: "var(--color-primary-600)",
          color: "white",
          cursor: "pointer"
        }}>\r
            View Examples\r
          </button>\r
        </div>\r
      </AccordionItem>\r
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "Accordion items can contain any React content including headings, lists, code blocks, and buttons."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ne=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ie;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Accordion id="faq" caption="Frequently Asked Questions" singleExpand expandFirstItem>\r
      <AccordionItem id="faq1" title="How do I install the design system?">\r
        <p>You can install our design system using npm or yarn:</p>\r
        <code style={{
        display: "block",
        padding: 12,
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
        marginTop: 8
      }}>\r
          npm install @design-system/ui-components\r
        </code>\r
      </AccordionItem>\r
      <AccordionItem id="faq2" title="Is TypeScript supported?">\r
        <p>Yes! All components are written in TypeScript and include full type definitions out of the box.</p>\r
      </AccordionItem>\r
      <AccordionItem id="faq3" title="Can I customize the theme?">\r
        <p>Absolutely. The design system uses CSS variables for theming, making it easy to customize colors, spacing, typography, and more.</p>\r
      </AccordionItem>\r
      <AccordionItem id="faq4" title="Is it accessible?">\r
        <p>Yes, all components follow WCAG 2.1 Level AA guidelines and include proper ARIA attributes for screen readers.</p>\r
      </AccordionItem>\r
      <AccordionItem id="faq5" title="What browsers are supported?">\r
        <p>We support all modern browsers including Chrome, Firefox, Safari, and Edge. IE11 is not supported.</p>\r
      </AccordionItem>\r
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "Real-world FAQ example using accordion with single expand mode."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Ve=["Default","Variants","SingleExpand","MultipleExpand","ExpandFirstItem","WithBackgroundColor","CustomLabels","RichContent","FAQ"];export{b as CustomLabels,u as Default,g as ExpandFirstItem,I as FAQ,y as MultipleExpand,A as RichContent,f as SingleExpand,h as Variants,x as WithBackgroundColor,Ve as __namedExportsOrder,Fe as default};
