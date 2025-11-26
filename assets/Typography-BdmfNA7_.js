import{R as n}from"./index-B2-qRKKC.js";const R="_typographyRoot_17rsn_1",S="_gutterBottom_17rsn_202",w="_noWrap_17rsn_206",e={typographyRoot:R,"variant-displayLarge":"_variant-displayLarge_17rsn_8","variant-displayMedium":"_variant-displayMedium_17rsn_16","variant-displaySmall":"_variant-displaySmall_17rsn_24","variant-h1":"_variant-h1_17rsn_33","variant-h2":"_variant-h2_17rsn_41","variant-h3":"_variant-h3_17rsn_49","variant-h4":"_variant-h4_17rsn_58","variant-h5":"_variant-h5_17rsn_59","variant-h6":"_variant-h6_17rsn_60","variant-subtitle1":"_variant-subtitle1_17rsn_69","variant-subtitle2":"_variant-subtitle2_17rsn_77","variant-body1":"_variant-body1_17rsn_86","variant-body2":"_variant-body2_17rsn_94","variant-buttonLarge":"_variant-buttonLarge_17rsn_103","variant-buttonSmall":"_variant-buttonSmall_17rsn_111","variant-caption":"_variant-caption_17rsn_120","variant-overline":"_variant-overline_17rsn_129","variant-inherit":"_variant-inherit_17rsn_139","align-left":"_align-left_17rsn_148","align-center":"_align-center_17rsn_152","align-right":"_align-right_17rsn_156","align-justify":"_align-justify_17rsn_160","color-primary":"_color-primary_17rsn_165","color-secondary":"_color-secondary_17rsn_169","color-success":"_color-success_17rsn_173","color-error":"_color-error_17rsn_177","color-info":"_color-info_17rsn_181","color-warning":"_color-warning_17rsn_185","color-text-primary":"_color-text-primary_17rsn_189","color-text-secondary":"_color-text-secondary_17rsn_193","color-text-disabled":"_color-text-disabled_17rsn_197",gutterBottom:S,noWrap:w},o={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",buttonLarge:"span",buttonSmall:"span",caption:"span",overline:"span",inherit:"span"},q={primary:"color-primary",secondary:"color-secondary",success:"color-success",error:"color-error",info:"color-info",warning:"color-warning",textPrimary:"color-text-primary",textSecondary:"color-text-secondary",textDisabled:"color-text-disabled"},s=n.memo(n.forwardRef(({align:l="inherit",children:u,classes:a,color:t,gutterBottom:c=!1,noWrap:m=!1,paragraph:p=!1,variant:i="body1",className:_="",style:d={},...y},v)=>{let r;p?r="p":r=o[i]||o.body1;const h=e[`variant-${i}`]||"",f=t&&e[q[t]||`color-${t}`]||"",g=l!=="inherit"?e[`align-${l}`]:"",b=c?e.gutterBottom:"",T=m?e.noWrap:"",x=[e.typographyRoot,h,f,g,b,T,a==null?void 0:a.root,_].filter(Boolean).join(" ");return n.createElement(r,{ref:v,className:x,style:d,...y,children:u})}));s.displayName="Typography";s.__docgenInfo={description:`Typography component with full Material UI API compatibility.
Uses custom design tokens from the theme system.`,methods:[],displayName:"Typography",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles",defaultValue:{value:"{}",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the component."},align:{required:!1,tsType:{name:"union",raw:'"center" | "inherit" | "justify" | "left" | "right"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"inherit"'},{name:"literal",value:'"justify"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Set the text alignment
Default: "inherit"`,defaultValue:{value:'"inherit"',computed:!1}},classes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"Override or extend the styles applied to the component."},color:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "error"
| "info"
| "warning"
| "textPrimary"
| "textSecondary"
| "textDisabled"
| string`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"textPrimary"'},{name:"literal",value:'"textSecondary"'},{name:"literal",value:'"textDisabled"'},{name:"string"}]},description:"The color of the component."},gutterBottom:{required:!1,tsType:{name:"boolean"},description:`Adds bottom margin if true.
Default: false`,defaultValue:{value:"false",computed:!1}},noWrap:{required:!1,tsType:{name:"boolean"},description:`Truncate with ellipsis.
Default: false`,defaultValue:{value:"false",computed:!1}},paragraph:{required:!1,tsType:{name:"boolean"},description:"Deprecated. If true, renders <p>.\nUse `component` prop instead.",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "h1"
| "h2"
| "h3"
| "h4"
| "h5"
| "h6"
| "subtitle1"
| "subtitle2"
| "body1"
| "body2"
| "buttonLarge"
| "buttonSmall"
| "caption"
| "overline"
| "inherit"
| string`,elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"subtitle1"'},{name:"literal",value:'"subtitle2"'},{name:"literal",value:'"body1"'},{name:"literal",value:'"body2"'},{name:"literal",value:'"buttonLarge"'},{name:"literal",value:'"buttonSmall"'},{name:"literal",value:'"caption"'},{name:"literal",value:'"overline"'},{name:"literal",value:'"inherit"'},{name:"string"}]},description:`Typography variant
Default: "body1"`,defaultValue:{value:'"body1"',computed:!1}}}};export{s as T};
