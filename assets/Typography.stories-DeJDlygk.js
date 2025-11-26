import{j as r}from"./jsx-runtime-DF2Pcvd1.js";import{T as e}from"./Typography-BdmfNA7_.js";import"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const nr={title:"DataDisplay/Typography",component:e,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","buttonLarge","buttonSmall","caption","overline","inherit"]},align:{control:{type:"radio"},options:["left","center","right","justify","inherit"]},color:{control:{type:"select"},options:["primary","secondary","success","error","info","warning","textPrimary","textSecondary","textDisabled"]},gutterBottom:{control:"boolean"},noWrap:{control:"boolean"},paragraph:{control:"boolean"}}},a={args:{children:"The quick brown fox jumps over the lazy dog",variant:"body1",align:"left"}},t={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{variant:"h1",children:"Heading 1"}),r.jsx(e,{variant:"h2",children:"Heading 2"}),r.jsx(e,{variant:"h3",children:"Heading 3"}),r.jsx(e,{variant:"h4",children:"Heading 4"}),r.jsx(e,{variant:"h5",children:"Heading 5"}),r.jsx(e,{variant:"h6",children:"Heading 6"})]}),parameters:{docs:{description:{story:"All heading variants from h1 to h6."}}}},n={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{variant:"subtitle1",children:"Subtitle 1 - Larger subtitle text for section headings"}),r.jsx(e,{variant:"subtitle2",children:"Subtitle 2 - Smaller subtitle text for subsection headings"})]}),parameters:{docs:{description:{story:"Subtitle variants for section and subsection headings."}}}},o={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{variant:"body1",children:"Body 1 - This is the default body text variant. It's used for main content and longer passages of text. The quick brown fox jumps over the lazy dog."}),r.jsx(e,{variant:"body2",children:"Body 2 - This is a smaller body text variant. It's used for secondary content or when space is limited. The quick brown fox jumps over the lazy dog."})]}),parameters:{docs:{description:{story:"Body text variants for main and secondary content."}}}},i={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{variant:"buttonLarge",children:"BUTTON LARGE TEXT"}),r.jsx(e,{variant:"buttonSmall",children:"BUTTON SMALL TEXT"})]}),parameters:{docs:{description:{story:"Typography variants designed for button labels."}}}},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{variant:"caption",children:"Caption text - Used for image captions, helper text, or small annotations"}),r.jsx(e,{variant:"overline",children:"OVERLINE TEXT - USED FOR LABELS"})]}),parameters:{docs:{description:{story:"Smaller text variants for captions and overlines."}}}},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{color:"primary",children:"Primary color text"}),r.jsx(e,{color:"secondary",children:"Secondary color text"}),r.jsx(e,{color:"success",children:"Success color text"}),r.jsx(e,{color:"error",children:"Error color text"}),r.jsx(e,{color:"info",children:"Info color text"}),r.jsx(e,{color:"warning",children:"Warning color text"}),r.jsx(e,{color:"textPrimary",children:"Text primary color"}),r.jsx(e,{color:"textSecondary",children:"Text secondary color"}),r.jsx(e,{color:"textDisabled",children:"Text disabled color"})]}),parameters:{docs:{description:{story:"Typography supports semantic color variants."}}}},l={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(e,{align:"left",children:"Left aligned text (default)"}),r.jsx(e,{align:"center",children:"Center aligned text"}),r.jsx(e,{align:"right",children:"Right aligned text"}),r.jsx(e,{align:"justify",children:"Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."})]}),parameters:{docs:{description:{story:"Text alignment options."}}}},d={render:()=>r.jsxs("div",{children:[r.jsx(e,{variant:"h4",gutterBottom:!0,children:"Heading with Gutter Bottom"}),r.jsx(e,{children:"The heading above has a bottom margin applied via the gutterBottom prop. This is useful for creating consistent spacing between elements."})]}),parameters:{docs:{description:{story:"The gutterBottom prop adds bottom margin for consistent spacing."}}}},c={render:()=>r.jsx("div",{style:{width:300,border:"1px solid #ccc",padding:16},children:r.jsx(e,{noWrap:!0,children:"This is a very long text that would normally wrap to multiple lines, but with noWrap enabled it will be truncated with an ellipsis instead of wrapping."})}),parameters:{docs:{description:{story:"The noWrap prop truncates text with an ellipsis instead of wrapping."}}}},y={render:()=>r.jsxs("div",{children:[r.jsx(e,{paragraph:!0,children:"First paragraph. The paragraph prop is a shorthand for rendering as a p element. This is useful for semantic HTML structure."}),r.jsx(e,{paragraph:!0,children:"Second paragraph. Each paragraph has appropriate spacing."}),r.jsx(e,{children:"Final text without paragraph prop."})]}),parameters:{docs:{description:{story:"The paragraph prop renders text as a <p> element with proper spacing."}}}},h={render:()=>r.jsxs("div",{children:[r.jsx(e,{variant:"h3",color:"primary",gutterBottom:!0,children:"Article Title"}),r.jsx(e,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0,children:"By Author Name • Published on November 21, 2025"}),r.jsx(e,{variant:"body1",paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),r.jsx(e,{variant:"body1",paragraph:!0,children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),r.jsx(e,{variant:"caption",color:"textSecondary",children:"Note: This is an example caption for additional information."})]}),parameters:{docs:{description:{story:"A complex example combining multiple typography variants, colors, and props."}}}},g={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx(e,{variant:"h1",children:"h1. Heading"}),r.jsx(e,{variant:"h2",children:"h2. Heading"}),r.jsx(e,{variant:"h3",children:"h3. Heading"}),r.jsx(e,{variant:"h4",children:"h4. Heading"}),r.jsx(e,{variant:"h5",children:"h5. Heading"}),r.jsx(e,{variant:"h6",children:"h6. Heading"}),r.jsx(e,{variant:"subtitle1",children:"subtitle1. Lorem ipsum dolor sit amet"}),r.jsx(e,{variant:"subtitle2",children:"subtitle2. Lorem ipsum dolor sit amet"}),r.jsx(e,{variant:"body1",children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur."}),r.jsx(e,{variant:"body2",children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit."}),r.jsx(e,{variant:"buttonLarge",children:"BUTTON LARGE"}),r.jsx(e,{variant:"buttonSmall",children:"BUTTON SMALL"}),r.jsx(e,{variant:"caption",children:"caption text"}),r.jsx(e,{variant:"overline",children:"OVERLINE TEXT"})]}),parameters:{docs:{description:{story:"All typography variants displayed together for comparison."}}}};var u,m,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    variant: "body1",
    align: "left"
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var T,v,b;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography variant="h1">Heading 1</Typography>\r
      <Typography variant="h2">Heading 2</Typography>\r
      <Typography variant="h3">Heading 3</Typography>\r
      <Typography variant="h4">Heading 4</Typography>\r
      <Typography variant="h5">Heading 5</Typography>\r
      <Typography variant="h6">Heading 6</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All heading variants from h1 to h6."
      }
    }
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,j,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography variant="subtitle1">\r
        Subtitle 1 - Larger subtitle text for section headings\r
      </Typography>\r
      <Typography variant="subtitle2">\r
        Subtitle 2 - Smaller subtitle text for subsection headings\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Subtitle variants for section and subsection headings."
      }
    }
  }
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var L,w,B;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography variant="body1">\r
        Body 1 - This is the default body text variant. It's used for main content\r
        and longer passages of text. The quick brown fox jumps over the lazy dog.\r
      </Typography>\r
      <Typography variant="body2">\r
        Body 2 - This is a smaller body text variant. It's used for secondary content\r
        or when space is limited. The quick brown fox jumps over the lazy dog.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Body text variants for main and secondary content."
      }
    }
  }
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var E,H,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography variant="buttonLarge">BUTTON LARGE TEXT</Typography>\r
      <Typography variant="buttonSmall">BUTTON SMALL TEXT</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Typography variants designed for button labels."
      }
    }
  }
}`,...(D=(H=i.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var A,q,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography variant="caption">\r
        Caption text - Used for image captions, helper text, or small annotations\r
      </Typography>\r
      <Typography variant="overline">OVERLINE TEXT - USED FOR LABELS</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Smaller text variants for captions and overlines."
      }
    }
  }
}`,...(N=(q=s.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var U,O,R;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography color="primary">Primary color text</Typography>\r
      <Typography color="secondary">Secondary color text</Typography>\r
      <Typography color="success">Success color text</Typography>\r
      <Typography color="error">Error color text</Typography>\r
      <Typography color="info">Info color text</Typography>\r
      <Typography color="warning">Warning color text</Typography>\r
      <Typography color="textPrimary">Text primary color</Typography>\r
      <Typography color="textSecondary">Text secondary color</Typography>\r
      <Typography color="textDisabled">Text disabled color</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Typography supports semantic color variants."
      }
    }
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,I,P;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>\r
      <Typography align="left">Left aligned text (default)</Typography>\r
      <Typography align="center">Center aligned text</Typography>\r
      <Typography align="right">Right aligned text</Typography>\r
      <Typography align="justify">\r
        Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
        ad minim veniam, quis nostrud exercitation ullamco laboris.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Text alignment options."
      }
    }
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var C,G,X;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div>\r
      <Typography variant="h4" gutterBottom>\r
        Heading with Gutter Bottom\r
      </Typography>\r
      <Typography>\r
        The heading above has a bottom margin applied via the gutterBottom prop.\r
        This is useful for creating consistent spacing between elements.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The gutterBottom prop adds bottom margin for consistent spacing."
      }
    }
  }
}`,...(X=(G=d.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var k,z,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300,
    border: "1px solid #ccc",
    padding: 16
  }}>\r
      <Typography noWrap>\r
        This is a very long text that would normally wrap to multiple lines, but\r
        with noWrap enabled it will be truncated with an ellipsis instead of wrapping.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The noWrap prop truncates text with an ellipsis instead of wrapping."
      }
    }
  }
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var M,V,Q;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div>\r
      <Typography paragraph>\r
        First paragraph. The paragraph prop is a shorthand for rendering as a p element.\r
        This is useful for semantic HTML structure.\r
      </Typography>\r
      <Typography paragraph>\r
        Second paragraph. Each paragraph has appropriate spacing.\r
      </Typography>\r
      <Typography>\r
        Final text without paragraph prop.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The paragraph prop renders text as a <p> element with proper spacing."
      }
    }
  }
}`,...(Q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};var J,_,K;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div>\r
      <Typography variant="h3" color="primary" gutterBottom>\r
        Article Title\r
      </Typography>\r
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>\r
        By Author Name • Published on November 21, 2025\r
      </Typography>\r
      <Typography variant="body1" paragraph>\r
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod\r
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r
        consequat.\r
      </Typography>\r
      <Typography variant="body1" paragraph>\r
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\r
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\r
        sunt in culpa qui officia deserunt mollit anim id est laborum.\r
      </Typography>\r
      <Typography variant="caption" color="textSecondary">\r
        Note: This is an example caption for additional information.\r
      </Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "A complex example combining multiple typography variants, colors, and props."
      }
    }
  }
}`,...(K=(_=h.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8
  }}>\r
      <Typography variant="h1">h1. Heading</Typography>\r
      <Typography variant="h2">h2. Heading</Typography>\r
      <Typography variant="h3">h3. Heading</Typography>\r
      <Typography variant="h4">h4. Heading</Typography>\r
      <Typography variant="h5">h5. Heading</Typography>\r
      <Typography variant="h6">h6. Heading</Typography>\r
      <Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet</Typography>\r
      <Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet</Typography>\r
      <Typography variant="body1">\r
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\r
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur.\r
      </Typography>\r
      <Typography variant="body2">\r
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\r
        blanditiis tenetur unde suscipit.\r
      </Typography>\r
      <Typography variant="buttonLarge">BUTTON LARGE</Typography>\r
      <Typography variant="buttonSmall">BUTTON SMALL</Typography>\r
      <Typography variant="caption">caption text</Typography>\r
      <Typography variant="overline">OVERLINE TEXT</Typography>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All typography variants displayed together for comparison."
      }
    }
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const or=["Basic","Headings","Subtitles","Body","ButtonText","SmallText","Colors","Alignment","GutterBottom","NoWrap","Paragraph","ComplexExample","AllVariantsShowcase"];export{l as Alignment,g as AllVariantsShowcase,a as Basic,o as Body,i as ButtonText,p as Colors,h as ComplexExample,d as GutterBottom,t as Headings,c as NoWrap,y as Paragraph,s as SmallText,n as Subtitles,or as __namedExportsOrder,nr as default};
