var W=Object.defineProperty;var F=(a,e,r)=>e in a?W(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var p=(a,e,r)=>F(a,typeof e!="symbol"?e+"":e,r);import{j as s}from"./jsx-runtime-DF2Pcvd1.js";import{r as l}from"./index-B2-qRKKC.js";import{t as d,d as q,c as h}from"./typography-Brmv3wtg.js";import{s as y}from"./spacing-QHzs6Ru8.js";import{s as m}from"./shadows-2l0gRrJX.js";import{r as c}from"./radius-CJc3Nkyb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b={surfacePrimary:"#ffffff",surfaceSecondary:"#f5f5f5",surfaceTertiary:"#eeeeee",textPrimary:"#000000",textSecondary:"#666666",textTertiary:"#999999",textDisabled:"#cccccc",interactive:"#5115dfff",interactiveHover:"#4010c9",interactiveActive:"#3009b3",interactiveDisabled:"#e0d5f7",success:"#0f0",warning:"#ff0",error:"#f00",info:"#0099ff",borderDefault:"#e0e0e0",borderSubtle:"#f0f0f0",background:"#ffffff",backgroundSecondary:"#fafafa"},S={surfacePrimary:"#1a1a1a",surfaceSecondary:"#2d2d2d",surfaceTertiary:"#3d3d3d",textPrimary:"#ffffff",textSecondary:"#cccccc",textTertiary:"#999999",textDisabled:"#666666",interactive:"#7c3ff2",interactiveHover:"#9055ff",interactiveActive:"#a366ff",interactiveDisabled:"#4a3a6b",success:"#0f0",warning:"#ff0",error:"#f00",info:"#0099ff",borderDefault:"#444444",borderSubtle:"#2a2a2a",background:"#121212",backgroundSecondary:"#1e1e1e"},k={mobile:"320px",tablet:"768px",desktop:"1024px",wide:"1440px"};class v{static generateCSSVariables(e){const r={};return this.addColorVariables(r,e.colors),this.addSemanticVariables(r,e.semantic),this.addTypographyVariables(r,e.typography),this.addSpacingVariables(r,e.spacing),this.addShadowVariables(r,e.shadows),this.addRadiusVariables(r,e.radius),this.addBreakpointVariables(r,e.breakpoints),r}static addColorVariables(e,r){const t=["primary","secondary","tertiary","gray","accent","warning","info","danger","success"];for(const n of t){const i=r[n];if(i&&typeof i=="object")for(const[u,g]of Object.entries(i))u!=="white"&&u!=="black"&&(e[`--color-${n}-${u}`]=g)}e["--color-white"]=r.neutral.white,e["--color-black"]=r.neutral.black}static addSemanticVariables(e,r){for(const[t,n]of Object.entries(r))e[`--semantic-${t}`]=n}static addTypographyVariables(e,r){for(const[t,n]of Object.entries(r)){const i=n;e[`--typography-${t}-family`]=i.fontFamily,e[`--typography-${t}-size`]=i.fontSize,e[`--typography-${t}-weight`]=i.fontWeight.toString(),e[`--typography-${t}-line-height`]=i.lineHeight,e[`--typography-${t}-letter-spacing`]=i.letterSpacing}}static addSpacingVariables(e,r){for(const[t,n]of Object.entries(r))e[`--spacing-${t}`]=n}static addShadowVariables(e,r){for(const[t,n]of Object.entries(r))e[`--shadow-${t}`]=n}static addRadiusVariables(e,r){for(const[t,n]of Object.entries(r))e[`--radius-${t}`]=n}static addBreakpointVariables(e,r){for(const[t,n]of Object.entries(r))e[`--breakpoint-${t}`]=n}static toCSSString(e){return Object.entries(e).map(([r,t])=>`  ${r}: ${t};`).join(`
`)}static generateCSS(e,r=":root"){const t=this.getCacheKey(e);let n=this.cssCache.get(t);if(!n){const i=this.generateCSSVariables(e);n=this.toCSSString(i),this.cssCache.set(t,n),this.themeCache.set(t,e)}return`${r} {
${n}
}`}static injectTheme(e,r=":root",t="theme-style"){if(typeof document>"u")return;const n=document.getElementById(t);n&&n.remove();const i=document.createElement("style");i.id=t,i.innerHTML=this.generateCSS(e,r),document.head.appendChild(i)}static generateStyleElement(e,r=":root",t="theme-style"){const n=document.createElement("style");return n.id=t,n.innerHTML=this.generateCSS(e,r),n}static getCacheKey(e){const r=this.stableStringify(e);return`t-${this.hashString(r)}`}static stableStringify(e){const r=new WeakSet,t=n=>{if(n===null||typeof n!="object")return n;if(r.has(n))return;if(r.add(n),Array.isArray(n))return n.map(t);const i=Object.keys(n).sort(),u={};for(const g of i)u[g]=t(n[g]);return u};return JSON.stringify(t(e))}static hashString(e){let r=5381;for(let t=0;t<e.length;t++)r=r*33^e.charCodeAt(t);return r>>>0}static applyThemePatch(e,r,t=":root",n="theme-style"){const i=this.deepMerge(e,r),u=this.getCacheKey(i);this.cssCache.delete(u),this.injectTheme(i,t,n)}static deepMerge(e,r){if(r==null)return e;if(typeof r!="object"||Array.isArray(r))return r;const t={...e||{}};for(const n of Object.keys(r))t[n]=this.deepMerge(e?e[n]:void 0,r[n]);return t}}p(v,"cssCache",new Map),p(v,"themeCache",new Map);const T={id:"default-light",name:"Default Light",description:"Modern light theme with vibrant colors",mode:"light",colors:q,semantic:b,typography:d,spacing:y,shadows:m,radius:c,breakpoints:k},$={id:"default-dark",name:"Default Dark",description:"Modern dark theme",mode:"dark",colors:q,semantic:S,typography:d,spacing:y,shadows:m,radius:c,breakpoints:k},M={id:"classic-light",name:"Classic Light",description:"Traditional light theme",mode:"light",colors:h,semantic:b,typography:d,spacing:y,shadows:m,radius:c,breakpoints:k},V={id:"classic-dark",name:"Classic Dark",description:"Traditional dark theme",mode:"dark",colors:h,semantic:S,typography:d,spacing:y,shadows:m,radius:c,breakpoints:k},D={"default-light":T,"default-dark":$,"classic-light":M,"classic-dark":V};function A(a){return D[a]}const L=l.createContext(void 0);function w({children:a,initialThemeId:e="default-light",initialMode:r="light",tenantId:t,userId:n,onThemeChange:i}){const[u,g]=l.useState(e),[j,C]=l.useState(r),o=l.useMemo(()=>A(u)||T,[u]);l.useEffect(()=>{const f=t?`[data-tenant="${t}"]`:":root",z=t?`theme-style-tenant-${t}`:"theme-style";v.injectTheme(o,f,z),i==null||i(o)},[o,i]);const H={currentTheme:o,mode:j,setTheme:g,setMode:C,tenantId:t,userId:n};return s.jsx(L.Provider,{value:H,children:a})}w.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialThemeId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default-light"',computed:!1}},initialMode:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},tenantId:{required:!1,tsType:{name:"string"},description:""},userId:{required:!1,tsType:{name:"string"},description:""},onThemeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(theme: ThemeConfig) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"mobile",value:{name:"string",required:!0}},{key:"tablet",value:{name:"string",required:!0}},{key:"desktop",value:{name:"string",required:!0}},{key:"wide",value:{name:"string",required:!0}}]},required:!0}}]}},name:"theme"}],return:{name:"void"}}},description:""}}};globalThis.IS_REACT_ACT_ENVIRONMENT=!0;const P=console.error;console.error=(...a)=>{const e=typeof a[0]=="string"?a[0]:"";e.includes("Warning: An update to")||e.includes("inside a test was not wrapped in act")||e.includes("A suspended resource finished loading inside a test")||P.call(console,...a)};const x=document.createElement("style");x.textContent=`
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
`;document.head.appendChild(x);const Z={parameters:{layout:"centered",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{source:{state:"closed",type:"code"},canvas:{sourceState:"hidden"}}},globalTypes:{theme:{name:"Theme",description:"Select theme",defaultValue:"default",toolbar:{icon:"paintbrush",items:[{value:"default",title:"Default",icon:"circlehollow"},{value:"classic",title:"Classic",icon:"circlehollow"}]}},appearance:{name:"Appearance",description:"Light or dark mode",defaultValue:"light",toolbar:{items:[{value:"light",title:"Light",icon:"sun"},{value:"dark",title:"Dark",icon:"moon"}]}}},decorators:[(a,e)=>{const r=e.globals.theme||"default",t=e.globals.appearance||"light",n=`${r}-${t}`;return s.jsx(w,{initialThemeId:n,children:s.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"var(--color-surface-primary)",color:"var(--color-text-primary)",transition:"all 0.3s ease-in-out"},children:[s.jsx(E,{theme:r,appearance:t}),s.jsx("div",{style:{padding:"4rem 2rem 2rem 2rem"},children:s.jsx(a,{})})]})},n)}]};function E({theme:a,appearance:e}){var t;const r={default:{light:{bg:"#bf9bff",border:"#a573ff"},dark:{bg:"#985fff",border:"#5115dfff"}},classic:{light:{bg:"#4a90e2",border:"#357abd"},dark:{bg:"#2c5aa0",border:"#1a3a5c"}}};return(t=r[a])!=null&&t[e]||r.default.light,s.jsx("div",{})}export{Z as default};
