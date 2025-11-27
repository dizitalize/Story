import{j as t}from"./jsx-runtime-DF2Pcvd1.js";import{r as l}from"./index-B2-qRKKC.js";import{c as G}from"./classNames-2dOUpm6k.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Qe="_autocomplete_8svgg_266",Xe="_label_8svgg_277",Ye="_inputContainer_8svgg_285",Ze="_chipsContainer_8svgg_325",et="_input_8svgg_285",tt="_chip_8svgg_325",nt="_chipRemove_8svgg_386",at="_actions_8svgg_405",rt="_clearButton_8svgg_412",lt="_loadingSpinner_8svgg_431",ot="_listbox_8svgg_445",it="_option_8svgg_479",st="_optionIcon_8svgg_515",ut="_optionLabel_8svgg_525",ct="_optionCaption_8svgg_529",dt="_groupLabel_8svgg_535",pt="_noOptions_8svgg_549",mt="_caption_8svgg_557",c={autocomplete:Qe,"autocomplete--fullWidth":"_autocomplete--fullWidth_8svgg_273",label:Xe,inputContainer:Ye,"inputContainer--disabled":"_inputContainer--disabled_8svgg_297","inputContainer--focused":"_inputContainer--focused_8svgg_300","inputContainer--error":"_inputContainer--error_8svgg_306","inputContainer--readOnly":"_inputContainer--readOnly_8svgg_319",chipsContainer:Ze,"chipsContainer--scrollable":"_chipsContainer--scrollable_8svgg_334",input:et,chip:tt,chipRemove:nt,actions:at,clearButton:rt,loadingSpinner:lt,listbox:ot,option:it,"option--highlighted":"_option--highlighted_8svgg_494","option--selected":"_option--selected_8svgg_498","option--disabled":"_option--disabled_8svgg_509",optionIcon:st,optionLabel:ut,optionCaption:ct,groupLabel:dt,noOptions:pt,caption:mt,"caption--error":"_caption--error_8svgg_564"};function gt(e){const[n,a]=l.useState(!1),u=e.value!==void 0?e.value:e.defaultValue??(e.multiple?[]:null),i=()=>{if(e.multiple||!u)return"";const o=e.options.find(d=>d.value===u);return o?o.label:""},[g,m]=l.useState(i()),[s,f]=l.useState(u),[C,O]=l.useState(-1),[_,y]=l.useState(!1),V=l.useRef(null),j=l.useRef(null),h=l.useRef();l.useEffect(()=>{if(e.value!==void 0&&(f(e.value),!e.multiple))if(e.value){const o=e.options.find(d=>d.value===e.value);o&&m(o.label)}else m("")},[e.value,e.multiple,e.options]);const T=l.useMemo(()=>{if(!s)return[];const o=Array.isArray(s)?s:[s];return e.options.filter(d=>o.includes(d.value))},[s,e.options]),w=l.useMemo(()=>{let o=e.options;if(g.trim()&&(o=o.filter(d=>d.label.toLowerCase().includes(g.toLowerCase()))),e.groupBy){const d=[],b=new Map;return o.forEach(x=>{const A=e.groupBy(x);b.has(A)||b.set(A,[]),b.get(A).push(x)}),b.forEach((x,A)=>{d.push({type:"group",label:A}),d.push(...x)}),d}return o},[e.options,g,e.groupBy]),Q=l.useCallback(o=>{var d;m(o),a(!0),(d=e.onInputChange)==null||d.call(e,o),e.async&&e.onSearch&&(h.current&&clearTimeout(h.current),y(!0),h.current=setTimeout(async()=>{try{await e.onSearch(o)}finally{y(!1)}},e.debounceTime??300))},[e]),N=l.useCallback(o=>{var b;if(o.disabled)return;let d;if(e.multiple){const x=s||[];d=x.includes(o.value)?x.filter(p=>p!==o.value):[...x,o.value]}else d=o.value,a(!1),m(o.label);e.value===void 0&&f(d),(b=e.onChange)==null||b.call(e,d)},[e.multiple,s,e.value,e.onChange]),r=l.useCallback(o=>{var x;if(!e.multiple)return;const b=(s||[]).filter(A=>A!==o.value);e.value===void 0&&f(b),(x=e.onChange)==null||x.call(e,b)},[e.multiple,s,e.value,e.onChange]),X=l.useCallback(()=>{var d,b;const o=e.multiple?[]:null;e.value===void 0&&f(o),(d=e.onChange)==null||d.call(e,o),m(""),(b=V.current)==null||b.focus()},[e.multiple,e.value,e.onChange]),R=l.useCallback(o=>s?(Array.isArray(s)?s:[s]).includes(o.value):!1,[s]);l.useEffect(()=>{O(-1)},[w]);const W=l.useCallback(()=>{if(!e.multiple&&s){const o=e.options.find(d=>d.value===s);o&&m(o.label)}},[e.multiple,e.options,s]);return{open:n,setOpen:a,inputValue:g,setInputValue:Q,selectedOptions:T,filteredOptions:w,highlightedIndex:C,setHighlightedIndex:O,selectOption:N,removeOption:r,clearSelection:X,isSelected:R,loading:_,inputRef:V,listboxRef:j,handleBlur:W}}function ht(e){const{open:n,setOpen:a,filteredOptions:u,highlightedIndex:i,setHighlightedIndex:g,selectOption:m,removeOption:s,selectedOptions:f,inputValue:C,multiple:O,listboxRef:_}=e,y=u.filter(h=>!("type"in h&&h.type==="group")),V=l.useCallback(h=>{switch(h.key){case"ArrowDown":if(h.preventDefault(),!n)a(!0);else{const T=Math.min(i+1,y.length-1);g(T),j(T)}break;case"ArrowUp":if(h.preventDefault(),n){const T=Math.max(i-1,0);g(T),j(T)}break;case"Enter":h.preventDefault(),n&&i>=0&&y[i]?m(y[i]):n||a(!0);break;case"Escape":h.preventDefault(),n&&(a(!1),g(-1));break;case"Tab":n&&i>=0&&y[i]&&(h.preventDefault(),m(y[i])),a(!1);break;case"Backspace":O&&C===""&&f.length>0&&(h.preventDefault(),s(f[f.length-1]));break;default:!n&&h.key.length===1&&a(!0);break}},[n,a,i,g,y,m,s,f,C,O]),j=h=>{if(!_.current)return;const w=_.current.querySelectorAll('[role="option"]')[h];w&&w.scrollIntoView({block:"nearest",behavior:"smooth"})};return{handleKeyDown:V}}const Fe=e=>{const{inputRef:n,inputValue:a,onInputChange:u,onFocus:i,onBlur:g,onKeyDown:m,placeholder:s,disabled:f,readOnly:C,id:O,ariaExpanded:_,ariaControls:y,ariaActivedescendant:V,ariaInvalid:j}=e;return t.jsx("input",{ref:n,id:O,type:"text",className:c.input,value:a,onChange:h=>u(h.target.value),onFocus:i,onBlur:g,onKeyDown:m,placeholder:s,disabled:f,readOnly:C,role:"combobox","aria-expanded":_,"aria-controls":y,"aria-activedescendant":V,"aria-autocomplete":"list","aria-invalid":j,autoComplete:"off"})};Fe.__docgenInfo={description:"",methods:[],displayName:"AutocompleteInput",props:{inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},onInputChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},ariaExpanded:{required:!0,tsType:{name:"boolean"},description:""},ariaControls:{required:!0,tsType:{name:"string"},description:""},ariaActivedescendant:{required:!1,tsType:{name:"string"},description:""},ariaInvalid:{required:!1,tsType:{name:"boolean"},description:""}}};const Pe=e=>{const{listboxRef:n,id:a,children:u,maxHeight:i}=e;return t.jsx("div",{ref:n,id:a,role:"listbox",className:c.listbox,style:i?{maxHeight:i}:void 0,children:u})};Pe.__docgenInfo={description:"",methods:[],displayName:"AutocompleteList",props:{listboxRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},id:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const He=e=>{const{option:n,selected:a,highlighted:u,onClick:i,id:g,renderOption:m}=e,s=G(c.option,u&&c["option--highlighted"],a&&c["option--selected"],n.disabled&&c["option--disabled"]);return m?t.jsx("div",{id:g,role:"option","aria-selected":a,className:s,onClick:n.disabled?void 0:i,children:m(n,a)}):t.jsxs("div",{id:g,role:"option","aria-selected":a,className:s,onClick:n.disabled?void 0:i,children:[n.icon&&t.jsx("div",{className:c.optionIcon,children:n.icon}),t.jsxs("div",{className:c.optionLabel,children:[n.label,n.caption&&t.jsx("div",{className:c.optionCaption,children:n.caption})]})]})};He.__docgenInfo={description:"",methods:[],displayName:"AutocompleteOption",props:{option:{required:!0,tsType:{name:"AutocompleteOptionType",elements:[{name:"T"}],raw:"AutocompleteOptionType<T>"},description:""},selected:{required:!0,tsType:{name:"boolean"},description:""},highlighted:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"string"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionType<T>, selected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"AutocompleteOptionType",elements:[{name:"T"}],raw:"AutocompleteOptionType<T>"},name:"option"},{type:{name:"boolean"},name:"selected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const $e=e=>{const{option:n,onRemove:a,renderMultiValue:u}=e;return u?t.jsx(t.Fragment,{children:u(n,a)}):t.jsxs("div",{className:c.chip,children:[n.icon&&t.jsx("div",{className:c.optionIcon,children:n.icon}),t.jsx("span",{children:n.label}),t.jsx("button",{type:"button",className:c.chipRemove,onClick:i=>{i.stopPropagation(),a()},"aria-label":`Remove ${n.label}`,children:"✕"})]})};$e.__docgenInfo={description:"",methods:[],displayName:"AutocompleteMultiValue",props:{option:{required:!0,tsType:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderMultiValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>, onRemove: () => void) => React.ReactNode",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onRemove"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const ze=({label:e})=>t.jsx("div",{className:c.groupLabel,children:e});ze.__docgenInfo={description:"",methods:[],displayName:"AutocompleteGroupLabel"};const v=e=>{const{id:n,label:a,caption:u,error:i,placeholder:g="Search...",multiple:m=!1,disabled:s=!1,readOnly:f=!1,loading:C=!1,clearable:O=!0,renderOption:_,renderMultiValue:y,className:V,fullWidth:j=!1,maxHeight:h,chipScrollable:T=!1,slotProps:w}=e,[Q,N]=l.useState(!1),r=gt({options:e.options,value:e.value,defaultValue:e.defaultValue,multiple:m,async:e.async,onSearch:e.onSearch,debounceTime:e.debounceTime,onChange:e.onChange,onInputChange:e.onInputChange,groupBy:e.groupBy,allowCustomValue:e.allowCustomValue}),X=ht({open:r.open,setOpen:r.setOpen,filteredOptions:r.filteredOptions,highlightedIndex:r.highlightedIndex,setHighlightedIndex:r.setHighlightedIndex,selectOption:r.selectOption,removeOption:r.removeOption,selectedOptions:r.selectedOptions,inputValue:r.inputValue,multiple:m,inputRef:r.inputRef,listboxRef:r.listboxRef}),R=`${n||"autocomplete"}-listbox`,W=`${n||"autocomplete"}-input`,o=G(c.autocomplete,j&&c["autocomplete--fullWidth"],V),d=G(c.inputContainer,Q&&c["inputContainer--focused"],i&&c["inputContainer--error"],s&&c["inputContainer--disabled"],f&&c["inputContainer--readOnly"]),b=G(c.chipsContainer,T&&c["chipsContainer--scrollable"]),x=O&&!s&&!f&&(r.selectedOptions.length>0||r.inputValue.length>0),A=r.filteredOptions.filter(p=>!("type"in p&&p.type==="group"));return t.jsxs("div",{className:o,children:[a&&t.jsx("label",{htmlFor:W,className:c.label,children:a}),t.jsxs("div",{className:d,onClick:()=>{var p;!s&&!f&&((p=r.inputRef.current)==null||p.focus())},children:[t.jsxs("div",{className:b,children:[m&&r.selectedOptions.map((p,I)=>t.jsx($e,{option:p,onRemove:()=>r.removeOption(p),renderMultiValue:y},`${p.value}-${I}`)),t.jsx(Fe,{inputRef:r.inputRef,inputValue:r.inputValue,onInputChange:r.setInputValue,onFocus:()=>{N(!0),r.setOpen(!0),!m&&r.inputValue&&setTimeout(()=>{var p;(p=r.inputRef.current)==null||p.select()},0)},onBlur:()=>{N(!1),setTimeout(()=>{r.setOpen(!1),r.handleBlur()},200)},onKeyDown:p=>{X.handleKeyDown(p)},placeholder:m&&r.selectedOptions.length>0?"":g,disabled:s,readOnly:f,id:W,ariaExpanded:r.open,ariaControls:R,ariaActivedescendant:r.highlightedIndex>=0?`${R}-option-${r.highlightedIndex}`:void 0,ariaInvalid:!!i})]}),t.jsxs("div",{className:c.actions,children:[(C||r.loading)&&t.jsx("div",{className:c.loadingSpinner}),x&&t.jsx("button",{type:"button",className:c.clearButton,onClick:p=>{var I;p.stopPropagation(),r.clearSelection(),r.setInputValue(""),(I=r.inputRef.current)==null||I.focus()},"aria-label":"Clear",children:"✕"})]})]}),r.open&&t.jsx(Pe,{listboxRef:r.listboxRef,id:R,maxHeight:h,children:r.filteredOptions.length===0?t.jsx("div",{className:c.noOptions,children:r.inputValue?"No options found":"No options"}):r.filteredOptions.map((p,I)=>{if("type"in p&&p.type==="group")return t.jsx(ze,{label:p.label},`group-${p.label}`);const q=p,Y=A.findIndex(Ge=>Ge.value===q.value),Ue=Y===r.highlightedIndex,Je=r.isSelected(q);return t.jsx(He,{id:`${R}-option-${Y}`,option:q,selected:Je,highlighted:Ue,onClick:()=>r.selectOption(q),renderOption:_},`${q.value}-${I}`)})}),(u||i)&&t.jsx("div",{className:`${c.caption} ${i?c["caption--error"]:""}`,children:i||u})]})};v.displayName="Autocomplete";v.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"}],raw:"AutocompleteOption<T>[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},debounceTime:{required:!1,tsType:{name:"number"},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void | Promise<void>",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},groupBy:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>) => string",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>, selected: boolean) => ReactNode",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"},{type:{name:"boolean"},name:"selected"}],return:{name:"ReactNode"}}},description:""},renderMultiValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>, onRemove: () => void) => ReactNode",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onRemove"}],return:{name:"ReactNode"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},allowCustomValue:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T | T[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""},slotProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  input?: any;
  listbox?: any;
  option?: any;
  chip?: any;
}`,signature:{properties:[{key:"input",value:{name:"any",required:!1}},{key:"listbox",value:{name:"any",required:!1}},{key:"option",value:{name:"any",required:!1}},{key:"chip",value:{name:"any",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},virtualized:{required:!1,tsType:{name:"boolean"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""},chipScrollable:{required:!1,tsType:{name:"boolean"},description:""}}};const xt={title:"Inputs/Autocomplete",component:v,parameters:{docs:{source:{type:"code",state:"open"}}},argTypes:{multiple:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},fullWidth:{control:"boolean"}}},S=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],Ke=[{label:"United States",value:"us",group:"North America"},{label:"Canada",value:"ca",group:"North America"},{label:"Mexico",value:"mx",group:"North America"},{label:"Brazil",value:"br",group:"South America"},{label:"Argentina",value:"ar",group:"South America"},{label:"United Kingdom",value:"uk",group:"Europe"},{label:"France",value:"fr",group:"Europe"},{label:"Germany",value:"de",group:"Europe"},{label:"China",value:"cn",group:"Asia"},{label:"Japan",value:"jp",group:"Asia"},{label:"India",value:"in",group:"Asia"}],E={render:()=>{const[e,n]=l.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Select a fruit",placeholder:"Type to search...",options:S,value:e,onChange:a=>n(a)})})}},k={render:()=>{const[e,n]=l.useState([]);return t.jsx("div",{style:{maxWidth:500,padding:20},children:t.jsx(v,{label:"Select multiple fruits",placeholder:"Add fruits...",options:S,value:e,onChange:a=>n(a),multiple:!0})})}},L={render:()=>{const[e,n]=l.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Favorite Fruit",caption:"Choose your favorite fruit from the list",placeholder:"Search fruits...",options:S,value:e,onChange:a=>n(a)})})}},B={render:()=>{const[e,n]=l.useState(null),a=[{label:"Home",value:"home",icon:"🏠"},{label:"Settings",value:"settings",icon:"⚙️"},{label:"Profile",value:"profile",icon:"👤"},{label:"Messages",value:"messages",icon:"💬"},{label:"Notifications",value:"notifications",icon:"🔔"}];return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Navigate to",placeholder:"Select a page...",options:a,value:e,onChange:u=>n(u)})})}},D={render:()=>{const[e,n]=l.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Select a country",placeholder:"Search countries...",options:Ke,value:e,onChange:a=>n(a),groupBy:a=>a.group||"Other"})})}},M={render:()=>{const[e,n]=l.useState(null),[a,u]=l.useState([]),[i,g]=l.useState(!1),m=async s=>{g(!0),await new Promise(C=>setTimeout(C,500));const f=S.filter(C=>C.label.toLowerCase().includes(s.toLowerCase()));u(f),g(!1)};return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Async Search",placeholder:"Type to search...",options:a,value:e,onChange:s=>n(s),async:!0,onSearch:m,loading:i,debounceTime:300})})}},F={render:()=>{const[e,n]=l.useState(null),a=[{label:"John Doe",value:"1",caption:"john@example.com",icon:"👨"},{label:"Jane Smith",value:"2",caption:"jane@example.com",icon:"👩"},{label:"Bob Johnson",value:"3",caption:"bob@example.com",icon:"👨"}];return t.jsx("div",{style:{maxWidth:450,padding:20},children:t.jsx(v,{label:"Assign to",placeholder:"Search users...",options:a,value:e,onChange:u=>n(u),renderOption:u=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[t.jsx("div",{style:{fontSize:24},children:u.icon}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:500},children:u.label}),t.jsx("div",{style:{fontSize:12,color:"#666"},children:u.caption})]})]})})})}},P={render:()=>{const[e,n]=l.useState(null);return t.jsxs("div",{style:{maxWidth:500,padding:20,display:"grid",gap:24},children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Controlled"}),t.jsx(v,{label:"Controlled Input",placeholder:"Search...",options:S,value:e,onChange:a=>n(a)}),t.jsxs("p",{style:{marginTop:8,fontSize:14,color:"#666"},children:["Selected: ",e||"None"]})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Uncontrolled"}),t.jsx(v,{label:"Uncontrolled Input",placeholder:"Search...",options:S,defaultValue:"apple"})]})]})}},H={render:()=>{const[e,n]=l.useState(null),[a,u]=l.useState(""),i=g=>{n(g),u(g?"":"Please select a fruit")};return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Required Field",placeholder:"Select a fruit...",options:S,value:e,onChange:i,error:a})})}},$={render:()=>t.jsxs("div",{style:{maxWidth:400,padding:20,display:"grid",gap:24},children:[t.jsx(v,{label:"Disabled",placeholder:"Search...",options:S,disabled:!0}),t.jsx(v,{label:"ReadOnly",placeholder:"Search...",options:S,value:"apple",readOnly:!0})]})},z={render:()=>{const[e,n]=l.useState(["apple","banana"]);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"With Clear Button",placeholder:"Select fruits...",options:S,value:e,onChange:a=>n(a||[]),multiple:!0,clearable:!0})})}},K={render:()=>{const[e,n]=l.useState(null),a=Array.from({length:1e3},(u,i)=>({label:`Item ${i+1}`,value:`item-${i+1}`}));return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Large Dataset (1000 items)",placeholder:"Search items...",options:a,value:e,onChange:u=>n(u),virtualized:!0})})}},U={render:()=>{const[e,n]=l.useState([]);return t.jsx("div",{style:{maxWidth:500,padding:32,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:12,boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},children:t.jsxs("div",{style:{background:"white",padding:24,borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.1)"},children:[t.jsx("h2",{style:{margin:"0 0 16px 0",fontSize:20},children:"Premium Card"}),t.jsx(v,{label:"Select Tags",caption:"Choose one or more tags for categorization",placeholder:"Add tags...",options:S,value:e,onChange:a=>n(a),multiple:!0,fullWidth:!0})]})})}},J={render:()=>{const[e,n]=l.useState([]);return t.jsx("div",{style:{maxWidth:600,padding:20},children:t.jsx(v,{label:"Full Featured Autocomplete",caption:"Multi-select with groups, icons, and all features enabled",placeholder:"Search countries...",options:Ke.map(a=>({...a,icon:"🌍"})),value:e,onChange:a=>n(a),multiple:!0,clearable:!0,fullWidth:!0,groupBy:a=>a.group||"Other"})})}};var Z,ee,te;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Select a fruit" placeholder="Type to search..." options={fruits} value={value} onChange={v => setValue(v as string | null)} />\r
      </div>;
  }
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      maxWidth: 500,
      padding: 20
    }}>\r
        <Autocomplete label="Select multiple fruits" placeholder="Add fruits..." options={fruits} value={value} onChange={v => setValue(v as string[])} multiple />\r
      </div>;
  }
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,oe,ie;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Favorite Fruit" caption="Choose your favorite fruit from the list" placeholder="Search fruits..." options={fruits} value={value} onChange={v => setValue(v as string | null)} />\r
      </div>;
  }
}`,...(ie=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,ue,ce;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const optionsWithIcons: AutocompleteOption<string>[] = [{
      label: 'Home',
      value: 'home',
      icon: '🏠'
    }, {
      label: 'Settings',
      value: 'settings',
      icon: '⚙️'
    }, {
      label: 'Profile',
      value: 'profile',
      icon: '👤'
    }, {
      label: 'Messages',
      value: 'messages',
      icon: '💬'
    }, {
      label: 'Notifications',
      value: 'notifications',
      icon: '🔔'
    }];
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Navigate to" placeholder="Select a page..." options={optionsWithIcons} value={value} onChange={v => setValue(v as string | null)} />\r
      </div>;
  }
}`,...(ce=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Select a country" placeholder="Search countries..." options={countries} value={value} onChange={v => setValue(v as string | null)} groupBy={option => option.group || 'Other'} />\r
      </div>;
  }
}`,...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,ve;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [options, setOptions] = useState<AutocompleteOption<string>[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = async (query: string) => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const filtered = fruits.filter(f => f.label.toLowerCase().includes(query.toLowerCase()));
      setOptions(filtered);
      setLoading(false);
    };
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Async Search" placeholder="Type to search..." options={options} value={value} onChange={v => setValue(v as string | null)} async onSearch={handleSearch} loading={loading} debounceTime={300} />\r
      </div>;
  }
}`,...(ve=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,be,ye;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const users: AutocompleteOption<string>[] = [{
      label: 'John Doe',
      value: '1',
      caption: 'john@example.com',
      icon: '👨'
    }, {
      label: 'Jane Smith',
      value: '2',
      caption: 'jane@example.com',
      icon: '👩'
    }, {
      label: 'Bob Johnson',
      value: '3',
      caption: 'bob@example.com',
      icon: '👨'
    }];
    return <div style={{
      maxWidth: 450,
      padding: 20
    }}>\r
        <Autocomplete label="Assign to" placeholder="Search users..." options={users} value={value} onChange={v => setValue(v as string | null)} renderOption={option => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>\r
              <div style={{
          fontSize: 24
        }}>{option.icon}</div>\r
              <div>\r
                <div style={{
            fontWeight: 500
          }}>{option.label}</div>\r
                <div style={{
            fontSize: 12,
            color: '#666'
          }}>{option.caption}</div>\r
              </div>\r
            </div>} />\r
      </div>;
  }
}`,...(ye=(be=F.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,Ce,Se;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [controlled, setControlled] = useState<string | null>(null);
    return <div style={{
      maxWidth: 500,
      padding: 20,
      display: 'grid',
      gap: 24
    }}>\r
        <div>\r
          <h3>Controlled</h3>\r
          <Autocomplete label="Controlled Input" placeholder="Search..." options={fruits} value={controlled} onChange={v => setControlled(v as string | null)} />\r
          <p style={{
          marginTop: 8,
          fontSize: 14,
          color: '#666'
        }}>\r
            Selected: {controlled || 'None'}\r
          </p>\r
        </div>\r
        <div>\r
          <h3>Uncontrolled</h3>\r
          <Autocomplete label="Uncontrolled Input" placeholder="Search..." options={fruits} defaultValue="apple" />\r
        </div>\r
      </div>;
  }
}`,...(Se=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Te,Ae,Oe;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [error, setError] = useState('');
    const handleChange = (newValue: string | string[] | null) => {
      setValue(newValue as string | null);
      if (!newValue) {
        setError('Please select a fruit');
      } else {
        setError('');
      }
    };
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Required Field" placeholder="Select a fruit..." options={fruits} value={value} onChange={handleChange} error={error} />\r
      </div>;
  }
}`,...(Oe=(Ae=H.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var _e,Ve,je;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400,
    padding: 20,
    display: 'grid',
    gap: 24
  }}>\r
      <Autocomplete label="Disabled" placeholder="Search..." options={fruits} disabled />\r
      <Autocomplete label="ReadOnly" placeholder="Search..." options={fruits} value="apple" readOnly />\r
    </div>
}`,...(je=(Ve=$.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var we,Re,Ie;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['apple', 'banana']);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="With Clear Button" placeholder="Select fruits..." options={fruits} value={value} onChange={v => setValue(v as string[] || [])} multiple clearable />\r
      </div>;
  }
}`,...(Ie=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var qe,Ne,We;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const largeDataset: AutocompleteOption<string>[] = Array.from({
      length: 1000
    }, (_, i) => ({
      label: \`Item \${i + 1}\`,
      value: \`item-\${i + 1}\`
    }));
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Large Dataset (1000 items)" placeholder="Search items..." options={largeDataset} value={value} onChange={v => setValue(v as string | null)} virtualized />\r
      </div>;
  }
}`,...(We=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Ee,ke,Le;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      maxWidth: 500,
      padding: 32,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 12,
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    }}>\r
        <div style={{
        background: 'white',
        padding: 24,
        borderRadius: 8,
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}>\r
          <h2 style={{
          margin: '0 0 16px 0',
          fontSize: 20
        }}>Premium Card</h2>\r
          <Autocomplete label="Select Tags" caption="Choose one or more tags for categorization" placeholder="Add tags..." options={fruits} value={value} onChange={v => setValue(v as string[])} multiple fullWidth />\r
        </div>\r
      </div>;
  }
}`,...(Le=(ke=U.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Be,De,Me;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      maxWidth: 600,
      padding: 20
    }}>\r
        <Autocomplete label="Full Featured Autocomplete" caption="Multi-select with groups, icons, and all features enabled" placeholder="Search countries..." options={countries.map(c => ({
        ...c,
        icon: '🌍'
      }))} value={value} onChange={v => setValue(v as string[])} multiple clearable fullWidth groupBy={option => option.group || 'Other'} />\r
      </div>;
  }
}`,...(Me=(De=J.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};const Ct=["BasicAutocomplete","MultiSelectWithChips","WithLabelAndCaption","WithIcons","GroupedOptions","AsyncSearch","CustomOptionRenderer","ControlledVsUncontrolled","ErrorState","DisabledAndReadOnly","ClearButtonExample","Virtualized1000Items","PremiumSurfaceExample","AllFeaturesCombined"];export{J as AllFeaturesCombined,M as AsyncSearch,E as BasicAutocomplete,z as ClearButtonExample,P as ControlledVsUncontrolled,F as CustomOptionRenderer,$ as DisabledAndReadOnly,H as ErrorState,D as GroupedOptions,k as MultiSelectWithChips,U as PremiumSurfaceExample,K as Virtualized1000Items,B as WithIcons,L as WithLabelAndCaption,Ct as __namedExportsOrder,xt as default};
