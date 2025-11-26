import{j as u}from"./jsx-runtime-DF2Pcvd1.js";import{r as g}from"./index-B2-qRKKC.js";import{t as o,d as p,c as v}from"./typography-Brmv3wtg.js";import{s as d}from"./spacing-QHzs6Ru8.js";import{s as m}from"./shadows-2l0gRrJX.js";import{r as y}from"./radius-CJc3Nkyb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f={surfacePrimary:"#ffffff",surfaceSecondary:"#f5f5f5",surfaceTertiary:"#eeeeee",textPrimary:"#000000",textSecondary:"#666666",textTertiary:"#999999",textDisabled:"#cccccc",interactive:"#5115dfff",interactiveHover:"#4010c9",interactiveActive:"#3009b3",interactiveDisabled:"#e0d5f7",success:"#0f0",warning:"#ff0",error:"#f00",info:"#0099ff",borderDefault:"#e0e0e0",borderSubtle:"#f0f0f0",background:"#ffffff",backgroundSecondary:"#fafafa"},q={surfacePrimary:"#1a1a1a",surfaceSecondary:"#2d2d2d",surfaceTertiary:"#3d3d3d",textPrimary:"#ffffff",textSecondary:"#cccccc",textTertiary:"#999999",textDisabled:"#666666",interactive:"#7c3ff2",interactiveHover:"#9055ff",interactiveActive:"#a366ff",interactiveDisabled:"#4a3a6b",success:"#0f0",warning:"#ff0",error:"#f00",info:"#0099ff",borderDefault:"#444444",borderSubtle:"#2a2a2a",background:"#121212",backgroundSecondary:"#1e1e1e"},c={mobile:"320px",tablet:"768px",desktop:"1024px",wide:"1440px"};class j{static generateCSSVariables(e){const r={};return this.addColorVariables(r,e.colors),this.addSemanticVariables(r,e.semantic),this.addTypographyVariables(r,e.typography),this.addSpacingVariables(r,e.spacing),this.addShadowVariables(r,e.shadows),this.addRadiusVariables(r,e.radius),this.addBreakpointVariables(r,e.breakpoints),r}static addColorVariables(e,r){const n=["primary","secondary","tertiary","gray","accent","warning","info","danger","success"];for(const t of n){const i=r[t];if(i&&typeof i=="object")for(const[s,k]of Object.entries(i))s!=="white"&&s!=="black"&&(e[`--color-${t}-${s}`]=k)}e["--color-white"]=r.neutral.white,e["--color-black"]=r.neutral.black}static addSemanticVariables(e,r){for(const[n,t]of Object.entries(r))e[`--semantic-${n}`]=t}static addTypographyVariables(e,r){for(const[n,t]of Object.entries(r)){const i=t;e[`--typography-${n}-family`]=i.fontFamily,e[`--typography-${n}-size`]=i.fontSize,e[`--typography-${n}-weight`]=i.fontWeight.toString(),e[`--typography-${n}-line-height`]=i.lineHeight,e[`--typography-${n}-letter-spacing`]=i.letterSpacing}}static addSpacingVariables(e,r){for(const[n,t]of Object.entries(r))e[`--spacing-${n}`]=t}static addShadowVariables(e,r){for(const[n,t]of Object.entries(r))e[`--shadow-${n}`]=t}static addRadiusVariables(e,r){for(const[n,t]of Object.entries(r))e[`--radius-${n}`]=t}static addBreakpointVariables(e,r){for(const[n,t]of Object.entries(r))e[`--breakpoint-${n}`]=t}static toCSSString(e){return Object.entries(e).map(([r,n])=>`  ${r}: ${n};`).join(`
`)}static generateCSS(e,r=":root"){const n=this.generateCSSVariables(e),t=this.toCSSString(n);return`${r} {
${t}
}`}static injectTheme(e,r=":root"){if(typeof document>"u")return;const n=document.getElementById("theme-style");n&&n.remove();const t=document.createElement("style");t.id="theme-style",t.innerHTML=this.generateCSS(e,r),document.head.appendChild(t)}}const h={id:"default-light",name:"Default Light",description:"Modern light theme with vibrant colors",mode:"light",colors:p,semantic:f,typography:o,spacing:d,shadows:m,radius:y,breakpoints:c},H={id:"default-dark",name:"Default Dark",description:"Modern dark theme",mode:"dark",colors:p,semantic:q,typography:o,spacing:d,shadows:m,radius:y,breakpoints:c},C={id:"classic-light",name:"Classic Light",description:"Traditional light theme",mode:"light",colors:v,semantic:f,typography:o,spacing:d,shadows:m,radius:y,breakpoints:c},z={id:"classic-dark",name:"Classic Dark",description:"Traditional dark theme",mode:"dark",colors:v,semantic:q,typography:o,spacing:d,shadows:m,radius:y,breakpoints:c},F={"default-light":h,"default-dark":H,"classic-light":C,"classic-dark":z};function W(a){return F[a]}const V=g.createContext(void 0);function b({children:a,initialThemeId:e="default-light",initialMode:r="light",tenantId:n,userId:t,onThemeChange:i}){const[s,k]=g.useState(e),[T,w]=g.useState(r),l=g.useMemo(()=>W(s)||h,[s]);g.useEffect(()=>{j.injectTheme(l),i==null||i(l)},[l,i]);const x={currentTheme:l,mode:T,setTheme:k,setMode:w,tenantId:n,userId:t};return u.jsx(V.Provider,{value:x,children:a})}b.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialThemeId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default-light"',computed:!1}},initialMode:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},tenantId:{required:!1,tsType:{name:"string"},description:""},userId:{required:!1,tsType:{name:"string"},description:""},onThemeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(theme: ThemeConfig) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  name: string;
  description?: string;
  mode: ThemeMode;
  colors: ColorPalettes;
  semantic: SemanticTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
  radius: RadiusTokens;
  breakpoints: BreakpointTokens;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"mode",value:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}],required:!0}},{key:"colors",value:{name:"signature",type:"object",raw:`{
  primary: ColorScale;
  secondary: ColorScale;
  tertiary: ColorScale;
  gray: ColorScale;
  accent: ColorScale;
  warning: ColorScale;
  info: ColorScale;
  danger: ColorScale;
  success: ColorScale;
  neutral: {
    white: string;
    black: string;
  };
}`,signature:{properties:[{key:"primary",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"secondary",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"tertiary",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"gray",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"accent",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"warning",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"info",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"danger",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"success",value:{name:"signature",type:"object",raw:`{
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}`,signature:{properties:[{key:"100",value:{name:"string",required:!0}},{key:"200",value:{name:"string",required:!0}},{key:"300",value:{name:"string",required:!0}},{key:"400",value:{name:"string",required:!0}},{key:"500",value:{name:"string",required:!0}},{key:"600",value:{name:"string",required:!0}},{key:"700",value:{name:"string",required:!0}},{key:"800",value:{name:"string",required:!0}},{key:"900",value:{name:"string",required:!0}}]},required:!0}},{key:"neutral",value:{name:"signature",type:"object",raw:`{
  white: string;
  black: string;
}`,signature:{properties:[{key:"white",value:{name:"string",required:!0}},{key:"black",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"semantic",value:{name:"signature",type:"object",raw:`{
  // Surface colors
  surfacePrimary: string;
  surfaceSecondary: string;
  surfaceTertiary: string;

  // Text/Foreground colors
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;

  // Interactive colors
  interactive: string;
  interactiveHover: string;
  interactiveActive: string;
  interactiveDisabled: string;

  // Status colors
  success: string;
  warning: string;
  error: string;
  info: string;

  // Borders and dividers
  borderDefault: string;
  borderSubtle: string;

  // Background
  background: string;
  backgroundSecondary: string;
}`,signature:{properties:[{key:"surfacePrimary",value:{name:"string",required:!0}},{key:"surfaceSecondary",value:{name:"string",required:!0}},{key:"surfaceTertiary",value:{name:"string",required:!0}},{key:"textPrimary",value:{name:"string",required:!0}},{key:"textSecondary",value:{name:"string",required:!0}},{key:"textTertiary",value:{name:"string",required:!0}},{key:"textDisabled",value:{name:"string",required:!0}},{key:"interactive",value:{name:"string",required:!0}},{key:"interactiveHover",value:{name:"string",required:!0}},{key:"interactiveActive",value:{name:"string",required:!0}},{key:"interactiveDisabled",value:{name:"string",required:!0}},{key:"success",value:{name:"string",required:!0}},{key:"warning",value:{name:"string",required:!0}},{key:"error",value:{name:"string",required:!0}},{key:"info",value:{name:"string",required:!0}},{key:"borderDefault",value:{name:"string",required:!0}},{key:"borderSubtle",value:{name:"string",required:!0}},{key:"background",value:{name:"string",required:!0}},{key:"backgroundSecondary",value:{name:"string",required:!0}}]},required:!0}},{key:"typography",value:{name:"signature",type:"object",raw:`{
  // Headings
  displayLarge: TypographyToken;
  displayMedium: TypographyToken;
  displaySmall: TypographyToken;

  headlineLarge: TypographyToken;
  headlineMedium: TypographyToken;
  headlineSmall: TypographyToken;

  // Body text
  bodyLarge: TypographyToken;
  bodyMedium: TypographyToken;
  bodySmall: TypographyToken;

  // Labels
  labelLarge: TypographyToken;
  labelMedium: TypographyToken;
  labelSmall: TypographyToken;
}`,signature:{properties:[{key:"displayLarge",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"displayMedium",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"displaySmall",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"headlineLarge",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"headlineMedium",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"headlineSmall",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"bodyLarge",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"bodyMedium",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"bodySmall",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"labelLarge",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"labelMedium",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}},{key:"labelSmall",value:{name:"signature",type:"object",raw:`{
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}`,signature:{properties:[{key:"fontFamily",value:{name:"string",required:!0}},{key:"fontSize",value:{name:"string",required:!0}},{key:"fontWeight",value:{name:"number",required:!0}},{key:"lineHeight",value:{name:"string",required:!0}},{key:"letterSpacing",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"spacing",value:{name:"signature",type:"object",raw:`{
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}`,signature:{properties:[{key:"xs",value:{name:"string",required:!0}},{key:"sm",value:{name:"string",required:!0}},{key:"md",value:{name:"string",required:!0}},{key:"lg",value:{name:"string",required:!0}},{key:"xl",value:{name:"string",required:!0}},{key:"xxl",value:{name:"string",required:!0}},{key:"xxxl",value:{name:"string",required:!0}}]},required:!0}},{key:"shadows",value:{name:"signature",type:"object",raw:`{
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}`,signature:{properties:[{key:"none",value:{name:"string",required:!0}},{key:"xs",value:{name:"string",required:!0}},{key:"sm",value:{name:"string",required:!0}},{key:"md",value:{name:"string",required:!0}},{key:"lg",value:{name:"string",required:!0}},{key:"xl",value:{name:"string",required:!0}},{key:"xxl",value:{name:"string",required:!0}}]},required:!0}},{key:"radius",value:{name:"signature",type:"object",raw:`{
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}`,signature:{properties:[{key:"none",value:{name:"string",required:!0}},{key:"xs",value:{name:"string",required:!0}},{key:"sm",value:{name:"string",required:!0}},{key:"md",value:{name:"string",required:!0}},{key:"lg",value:{name:"string",required:!0}},{key:"xl",value:{name:"string",required:!0}},{key:"full",value:{name:"string",required:!0}}]},required:!0}},{key:"breakpoints",value:{name:"signature",type:"object",raw:`{
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}`,signature:{properties:[{key:"mobile",value:{name:"string",required:!0}},{key:"tablet",value:{name:"string",required:!0}},{key:"desktop",value:{name:"string",required:!0}},{key:"wide",value:{name:"string",required:!0}}]},required:!0}}]}},name:"theme"}],return:{name:"void"}}},description:""}}};globalThis.IS_REACT_ACT_ENVIRONMENT=!0;const D=console.error;console.error=(...a)=>{const e=typeof a[0]=="string"?a[0]:"";e.includes("Warning: An update to")||e.includes("inside a test was not wrapped in act")||e.includes("A suspended resource finished loading inside a test")||D.call(console,...a)};const S=document.createElement("style");S.textContent=`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .icon-spinning {
    animation: spin 1s linear infinite;
  }
`;document.head.appendChild(S);const B={parameters:{layout:"centered",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{source:{state:"closed",type:"code"},canvas:{sourceState:"hidden"}}},globalTypes:{theme:{name:"Theme",description:"Select theme",defaultValue:"default",toolbar:{icon:"paintbrush",items:[{value:"default",title:"Default",icon:"circlehollow"},{value:"classic",title:"Classic",icon:"circlehollow"}]}},appearance:{name:"Appearance",description:"Light or dark mode",defaultValue:"light",toolbar:{items:[{value:"light",title:"Light",icon:"sun"},{value:"dark",title:"Dark",icon:"moon"}]}}},decorators:[(a,e)=>{const r=e.globals.theme||"default",n=e.globals.appearance||"light",t=`${r}-${n}`;return u.jsx(b,{initialThemeId:t,children:u.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--color-surface-primary)",color:"var(--color-text-primary)",transition:"all 0.3s ease-in-out"},children:[u.jsx($,{theme:r,appearance:n}),u.jsx("div",{style:{padding:"4rem 2rem 2rem 2rem"},children:u.jsx(a,{})})]})},t)}]};function $({theme:a,appearance:e}){var n;const r={default:{light:{bg:"#bf9bff",border:"#a573ff"},dark:{bg:"#985fff",border:"#5115dfff"}},classic:{light:{bg:"#4a90e2",border:"#357abd"},dark:{bg:"#2c5aa0",border:"#1a3a5c"}}};return(n=r[a])!=null&&n[e]||r.default.light,u.jsx("div",{})}export{B as default};
