import{j as t}from"./jsx-runtime-DF2Pcvd1.js";import{r as i}from"./index-B2-qRKKC.js";import{I as nt}from"./Input-CgYWvA8q.js";import{c as X}from"./classNames-2dOUpm6k.js";import{L as te}from"./Label-KEzZ_8lI.js";import{I as at}from"./Icon-fxUjVhc4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-B0WUkk9i.js";const rt="_autocomplete_1u3wr_267",lt="_label_1u3wr_278",ot="_inputContainer_1u3wr_286",it="_chipsContainer_1u3wr_307",st="_triggerButton_1u3wr_330",ut="_input_1u3wr_286",ct="_chip_1u3wr_307",dt="_chipRemove_1u3wr_389",pt="_actions_1u3wr_408",mt="_loadingSpinner_1u3wr_434",gt="_listbox_1u3wr_448",ht="_option_1u3wr_482",vt="_optionIcon_1u3wr_518",ft="_optionLabel_1u3wr_528",bt="_optionCaption_1u3wr_532",yt="_groupLabel_1u3wr_538",xt="_noOptions_1u3wr_552",Ct="_caption_1u3wr_560",St="_floatingCaption_1u3wr_571",c={autocomplete:rt,"autocomplete--fullWidth":"_autocomplete--fullWidth_1u3wr_274",label:lt,inputContainer:ot,"inputContainer--disabled":"_inputContainer--disabled_1u3wr_299","inputContainer--readOnly":"_inputContainer--readOnly_1u3wr_303",chipsContainer:it,"chipsContainer--scrollable":"_chipsContainer--scrollable_1u3wr_316",triggerButton:st,input:ut,chip:ct,chipRemove:dt,actions:pt,loadingSpinner:mt,listbox:gt,option:ht,"option--highlighted":"_option--highlighted_1u3wr_497","option--selected":"_option--selected_1u3wr_501","option--disabled":"_option--disabled_1u3wr_512",optionIcon:vt,optionLabel:ft,optionCaption:bt,groupLabel:yt,noOptions:xt,caption:Ct,"caption--error":"_caption--error_1u3wr_567",floatingCaption:St};function Tt(e){const[n,a]=i.useState(!1),s=e.value!==void 0?e.value:e.defaultValue??(e.multiple?[]:null),l=()=>{if(e.multiple||!s)return"";const o=e.options.find(d=>d.value===s);return o?o.label:""},[m,g]=i.useState(l()),[u,f]=i.useState(s),[C,A]=i.useState(-1),[_,y]=i.useState(!1),j=i.useRef(null),R=i.useRef(null),h=i.useRef();i.useEffect(()=>{if(e.value!==void 0&&(f(e.value),!e.multiple))if(e.value){const o=e.options.find(d=>d.value===e.value);o&&g(o.label)}else g("")},[e.value,e.multiple,e.options]);const S=i.useMemo(()=>{if(!u)return[];const o=Array.isArray(u)?u:[u];return e.options.filter(d=>o.includes(d.value))},[u,e.options]),V=i.useMemo(()=>{let o=e.options;if(m.trim()&&(o=o.filter(d=>d.label.toLowerCase().includes(m.toLowerCase()))),e.groupBy){const d=[],b=new Map;return o.forEach(x=>{const w=e.groupBy(x);b.has(w)||b.set(w,[]),b.get(w).push(x)}),b.forEach((x,w)=>{d.push({type:"group",label:w}),d.push(...x)}),d}return o},[e.options,m,e.groupBy]),q=i.useCallback(o=>{var d;g(o),a(!0),(d=e.onInputChange)==null||d.call(e,o),e.async&&e.onSearch&&(h.current&&clearTimeout(h.current),y(!0),h.current=setTimeout(async()=>{try{await e.onSearch(o)}finally{y(!1)}},e.debounceTime??300))},[e]),N=i.useCallback(o=>{var b;if(o.disabled)return;let d;if(e.multiple){const x=u||[];d=x.includes(o.value)?x.filter(Z=>Z!==o.value):[...x,o.value]}else d=o.value,a(!1),g(o.label);e.value===void 0&&f(d),(b=e.onChange)==null||b.call(e,d)},[e.multiple,u,e.value,e.onChange]),W=i.useCallback(o=>{var x;if(!e.multiple)return;const b=(u||[]).filter(w=>w!==o.value);e.value===void 0&&f(b),(x=e.onChange)==null||x.call(e,b)},[e.multiple,u,e.value,e.onChange]),r=i.useCallback(()=>{var d,b;const o=e.multiple?[]:null;e.value===void 0&&f(o),(d=e.onChange)==null||d.call(e,o),g(""),(b=j.current)==null||b.focus()},[e.multiple,e.value,e.onChange]),Y=i.useCallback(o=>u?(Array.isArray(u)?u:[u]).includes(o.value):!1,[u]);i.useEffect(()=>{A(-1)},[V]);const I=i.useCallback(()=>{if(!e.multiple&&u){const o=e.options.find(d=>d.value===u);o&&g(o.label)}},[e.multiple,e.options,u]);return{open:n,setOpen:a,inputValue:m,setInputValue:q,selectedOptions:S,filteredOptions:V,highlightedIndex:C,setHighlightedIndex:A,selectOption:N,removeOption:W,clearSelection:r,isSelected:Y,loading:_,inputRef:j,listboxRef:R,handleBlur:I}}function wt(e){const{open:n,setOpen:a,filteredOptions:s,highlightedIndex:l,setHighlightedIndex:m,selectOption:g,removeOption:u,selectedOptions:f,inputValue:C,multiple:A,listboxRef:_}=e,y=s.filter(h=>!("type"in h&&h.type==="group")),j=i.useCallback(h=>{switch(h.key){case"ArrowDown":if(h.preventDefault(),!n)a(!0);else{const S=Math.min(l+1,y.length-1);m(S),R(S)}break;case"ArrowUp":if(h.preventDefault(),n){const S=Math.max(l-1,0);m(S),R(S)}break;case"Enter":h.preventDefault(),n&&l>=0&&y[l]?g(y[l]):n||a(!0);break;case"Escape":h.preventDefault(),n&&(a(!1),m(-1));break;case"Tab":n&&l>=0&&y[l]&&(h.preventDefault(),g(y[l])),a(!1);break;case"Backspace":A&&C===""&&f.length>0&&(h.preventDefault(),u(f[f.length-1]));break;default:!n&&h.key.length===1&&a(!0);break}},[n,a,l,m,y,g,u,f,C,A]),R=h=>{if(!_.current)return;const V=_.current.querySelectorAll('[role="option"]')[h];V&&V.scrollIntoView({block:"nearest",behavior:"smooth"})};return{handleKeyDown:j}}const Ue=e=>{const{inputRef:n,inputValue:a,onInputChange:s,onFocus:l,onBlur:m,onKeyDown:g,placeholder:u,disabled:f,readOnly:C,id:A,ariaExpanded:_,ariaControls:y,ariaActivedescendant:j,ariaInvalid:R,size:h="medium",state:S="placeholder",label:V,className:q}=e;return t.jsx(nt,{ref:n,id:A,value:a,onChange:N=>s(N.target.value),onFocus:l,onBlur:m,onKeyDown:g,placeholder:u,disabled:f,readOnly:C,role:"combobox","aria-expanded":_,"aria-controls":y,"aria-activedescendant":j,"aria-autocomplete":"list","aria-invalid":R,autoComplete:"off",size:h,state:S,label:V,className:`${c.input} ${q||""}`,trailingIcon:e.trailingIcon,onTrailingIconClick:e.trailingIconOnClick})};Ue.__docgenInfo={description:"",methods:[],displayName:"AutocompleteInput",props:{inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},inputValue:{required:!0,tsType:{name:"string"},description:""},onInputChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},ariaExpanded:{required:!0,tsType:{name:"boolean"},description:""},ariaControls:{required:!0,tsType:{name:"string"},description:""},ariaActivedescendant:{required:!1,tsType:{name:"string"},description:""},ariaInvalid:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},state:{required:!1,tsType:{name:"any"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIconOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const Je=e=>{const{listboxRef:n,id:a,children:s,maxHeight:l}=e;return t.jsx("div",{ref:n,id:a,role:"listbox",className:c.listbox,style:l?{maxHeight:l}:void 0,children:s})};Je.__docgenInfo={description:"",methods:[],displayName:"AutocompleteList",props:{listboxRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},id:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const Ge=e=>{const{option:n,selected:a,highlighted:s,onClick:l,id:m,renderOption:g}=e,u=X(c.option,s&&c["option--highlighted"],a&&c["option--selected"],n.disabled&&c["option--disabled"]);return g?t.jsx("div",{id:m,role:"option","aria-selected":a,className:u,onClick:n.disabled?void 0:l,children:g(n,a)}):t.jsxs("div",{id:m,role:"option","aria-selected":a,className:u,onClick:n.disabled?void 0:l,children:[n.icon&&t.jsx("div",{className:c.optionIcon,children:n.icon}),t.jsxs("div",{className:c.optionLabel,children:[n.label,n.caption&&t.jsx("div",{className:c.optionCaption,children:n.caption})]})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"AutocompleteOption",props:{option:{required:!0,tsType:{name:"AutocompleteOptionType",elements:[{name:"T"}],raw:"AutocompleteOptionType<T>"},description:""},selected:{required:!0,tsType:{name:"boolean"},description:""},highlighted:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},id:{required:!0,tsType:{name:"string"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOptionType<T>, selected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"AutocompleteOptionType",elements:[{name:"T"}],raw:"AutocompleteOptionType<T>"},name:"option"},{type:{name:"boolean"},name:"selected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const Qe=e=>{const{option:n,onRemove:a,renderMultiValue:s}=e;return s?t.jsx(t.Fragment,{children:s(n,a)}):t.jsxs("div",{className:c.chip,children:[n.icon&&t.jsx("div",{className:c.optionIcon,children:n.icon}),t.jsx("span",{children:n.label}),t.jsx("button",{type:"button",className:c.chipRemove,onClick:l=>{l.stopPropagation(),a()},"aria-label":`Remove ${n.label}`,children:"✕"})]})};Qe.__docgenInfo={description:"",methods:[],displayName:"AutocompleteMultiValue",props:{option:{required:!0,tsType:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},renderMultiValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>, onRemove: () => void) => React.ReactNode",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onRemove"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const Xe=({label:e})=>t.jsx("div",{className:c.groupLabel,children:e});Xe.__docgenInfo={description:"",methods:[],displayName:"AutocompleteGroupLabel"};const v=e=>{const{id:n,label:a,caption:s,error:l,placeholder:m="Search...",multiple:g=!1,disabled:u=!1,readOnly:f=!1,loading:C=!1,clearable:A=!0,renderOption:_,renderMultiValue:y,className:j,fullWidth:R=!1,maxHeight:h,chipScrollable:S=!1,slotProps:V,triggerAsButton:q=!1}=e,[N,W]=i.useState(!1),r=Tt({options:e.options,value:e.value,defaultValue:e.defaultValue,multiple:g,async:e.async,onSearch:e.onSearch,debounceTime:e.debounceTime,onChange:e.onChange,onInputChange:e.onInputChange,groupBy:e.groupBy,allowCustomValue:e.allowCustomValue}),Y=wt({open:r.open,setOpen:r.setOpen,filteredOptions:r.filteredOptions,highlightedIndex:r.highlightedIndex,setHighlightedIndex:r.setHighlightedIndex,selectOption:r.selectOption,removeOption:r.removeOption,selectedOptions:r.selectedOptions,inputValue:r.inputValue,multiple:g,inputRef:r.inputRef,listboxRef:r.listboxRef}),I=`${n||"autocomplete"}-listbox`,o=`${n||"autocomplete"}-input`,d=X(c.autocomplete,R&&c["autocomplete--fullWidth"],j),b=X(c.inputContainer,N&&c["inputContainer--focused"],l&&c["inputContainer--error"],u&&c["inputContainer--disabled"],f&&c["inputContainer--readOnly"]),x=X(c.chipsContainer,S&&c["chipsContainer--scrollable"]),w=A&&!u&&!f&&(r.selectedOptions.length>0||r.inputValue.length>0),Z=r.filteredOptions.filter(p=>!("type"in p&&p.type==="group"));return t.jsxs("div",{className:d,children:[a&&t.jsx("label",{htmlFor:o,className:c.label,children:a}),t.jsxs("div",{className:b,onClick:()=>{var p;!u&&!f&&((p=r.inputRef.current)==null||p.focus())},children:[(s||l)&&t.jsx("div",{className:`${c.floatingCaption} ${l?c["caption--error"]:""}`,children:t.jsx(te,{size:"sm",children:l||s})}),t.jsxs("div",{className:x,children:[g&&r.selectedOptions.map((p,O)=>t.jsx(Qe,{option:p,onRemove:()=>r.removeOption(p),renderMultiValue:y},`${p.value}-${O}`)),q&&!r.open?t.jsx("button",{type:"button",id:o,className:c.triggerButton,onClick:p=>{p.stopPropagation(),!u&&!f&&(r.setOpen(!0),setTimeout(()=>{var O;(O=r.inputRef.current)==null||O.focus()},0),W(!0))},disabled:u,"aria-haspopup":"listbox","aria-expanded":r.open,children:s||m}):t.jsx(Ue,{inputRef:r.inputRef,inputValue:r.inputValue,onInputChange:r.setInputValue,onFocus:()=>{W(!0),r.setOpen(!0),!g&&r.inputValue&&setTimeout(()=>{var p;(p=r.inputRef.current)==null||p.select()},0)},onBlur:()=>{W(!1),setTimeout(()=>{r.setOpen(!1),r.handleBlur()},200)},onKeyDown:p=>{Y.handleKeyDown(p)},placeholder:g&&r.selectedOptions.length>0?"":m,disabled:u,readOnly:f,id:o,ariaExpanded:r.open,ariaControls:I,ariaActivedescendant:r.highlightedIndex>=0?`${I}-option-${r.highlightedIndex}`:void 0,ariaInvalid:!!l,trailingIcon:w?t.jsx(at,{name:"times",variant:"regular"}):void 0,trailingIconOnClick:p=>{var O;p.stopPropagation(),r.clearSelection(),r.setInputValue(""),(O=r.inputRef.current)==null||O.focus()}})]}),t.jsx("div",{className:c.actions,children:(C||r.loading)&&t.jsx("div",{className:c.loadingSpinner})})]}),r.open&&t.jsx(Je,{listboxRef:r.listboxRef,id:I,maxHeight:h,children:r.filteredOptions.length===0?t.jsx("div",{className:c.noOptions,children:r.inputValue?"No options found":"No options"}):r.filteredOptions.map((p,O)=>{if("type"in p&&p.type==="group")return t.jsx(Xe,{label:p.label},`group-${p.label}`);const E=p,ee=Z.findIndex(tt=>tt.value===E.value),Ze=ee===r.highlightedIndex,et=r.isSelected(E);return t.jsx(Ge,{id:`${I}-option-${ee}`,option:E,selected:et,highlighted:Ze,onClick:()=>r.selectOption(E),renderOption:_},`${E.value}-${O}`)})}),(s||l)&&t.jsx("div",{className:`${c.caption} ${l?c["caption--error"]:""}`,children:t.jsx(te,{size:"sm",className:c.captionLabel,children:l||s})})]})};v.displayName="Autocomplete";v.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"}],raw:"AutocompleteOption<T>[]"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},debounceTime:{required:!1,tsType:{name:"number"},description:""},async:{required:!1,tsType:{name:"boolean"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void | Promise<void>",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},groupBy:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>) => string",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"}],return:{name:"string"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>, selected: boolean) => ReactNode",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"},{type:{name:"boolean"},name:"selected"}],return:{name:"ReactNode"}}},description:""},renderMultiValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: AutocompleteOption<T>, onRemove: () => void) => ReactNode",signature:{arguments:[{type:{name:"AutocompleteOption",elements:[{name:"T"}],raw:"AutocompleteOption<T>"},name:"option"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onRemove"}],return:{name:"ReactNode"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},allowCustomValue:{required:!1,tsType:{name:"boolean"},description:""},triggerAsButton:{required:!1,tsType:{name:"boolean"},description:`When true, the autocomplete renders a caption-only button (collapsed state)
that opens the input/list when clicked. Useful for compact triggers.`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T | T[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | T[] | null",elements:[{name:"T"},{name:"Array",elements:[{name:"T"}],raw:"T[]"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""},slotProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  input?: any;
  listbox?: any;
  option?: any;
  chip?: any;
}`,signature:{properties:[{key:"input",value:{name:"any",required:!1}},{key:"listbox",value:{name:"any",required:!1}},{key:"option",value:{name:"any",required:!1}},{key:"chip",value:{name:"any",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},virtualized:{required:!1,tsType:{name:"boolean"},description:""},maxHeight:{required:!1,tsType:{name:"string"},description:""},chipScrollable:{required:!1,tsType:{name:"boolean"},description:""}}};const Nt={title:"Inputs/Autocomplete",component:v,parameters:{docs:{source:{type:"code",state:"open"}}},argTypes:{multiple:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},fullWidth:{control:"boolean"}}},T=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],Ye=[{label:"United States",value:"us",group:"North America"},{label:"Canada",value:"ca",group:"North America"},{label:"Mexico",value:"mx",group:"North America"},{label:"Brazil",value:"br",group:"South America"},{label:"Argentina",value:"ar",group:"South America"},{label:"United Kingdom",value:"uk",group:"Europe"},{label:"France",value:"fr",group:"Europe"},{label:"Germany",value:"de",group:"Europe"},{label:"China",value:"cn",group:"Asia"},{label:"Japan",value:"jp",group:"Asia"},{label:"India",value:"in",group:"Asia"}],k={render:()=>{const[e,n]=i.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Select a fruit",placeholder:"Type to search...",options:T,value:e,onChange:a=>n(a)})})}},L={render:()=>{const[e,n]=i.useState([]);return t.jsx("div",{style:{maxWidth:500,padding:20},children:t.jsx(v,{label:"Select multiple fruits",placeholder:"Add fruits...",options:T,value:e,onChange:a=>n(a),multiple:!0})})}},B={render:()=>{const[e,n]=i.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Favorite Fruit",caption:"Choose your favorite fruit from the list",placeholder:"Search fruits...",options:T,value:e,onChange:a=>n(a)})})}},M={render:()=>{const[e,n]=i.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Favorite Fruit",caption:"Choose your favorite fruit from the list",placeholder:"Search fruits...",options:T,value:e,onChange:a=>n(a),triggerAsButton:!0})})}},D={render:()=>{const[e,n]=i.useState(null),a=[{label:"Home",value:"home",icon:"🏠"},{label:"Settings",value:"settings",icon:"⚙️"},{label:"Profile",value:"profile",icon:"👤"},{label:"Messages",value:"messages",icon:"💬"},{label:"Notifications",value:"notifications",icon:"🔔"}];return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Navigate to",placeholder:"Select a page...",options:a,value:e,onChange:s=>n(s)})})}},F={render:()=>{const[e,n]=i.useState(null);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Select a country",placeholder:"Search countries...",options:Ye,value:e,onChange:a=>n(a),groupBy:a=>a.group||"Other"})})}},$={render:()=>{const[e,n]=i.useState(null),[a,s]=i.useState([]),[l,m]=i.useState(!1),g=async u=>{m(!0),await new Promise(C=>setTimeout(C,500));const f=T.filter(C=>C.label.toLowerCase().includes(u.toLowerCase()));s(f),m(!1)};return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Async Search",placeholder:"Type to search...",options:a,value:e,onChange:u=>n(u),async:!0,onSearch:g,loading:l,debounceTime:300})})}},P={render:()=>{const[e,n]=i.useState(null),a=[{label:"John Doe",value:"1",caption:"john@example.com",icon:"👨"},{label:"Jane Smith",value:"2",caption:"jane@example.com",icon:"👩"},{label:"Bob Johnson",value:"3",caption:"bob@example.com",icon:"👨"}];return t.jsx("div",{style:{maxWidth:450,padding:20},children:t.jsx(v,{label:"Assign to",placeholder:"Search users...",options:a,value:e,onChange:s=>n(s),renderOption:s=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[t.jsx("div",{style:{fontSize:24},children:s.icon}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:500},children:s.label}),t.jsx("div",{style:{fontSize:12,color:"#666"},children:s.caption})]})]})})})}},z={render:()=>{const[e,n]=i.useState(null);return t.jsxs("div",{style:{maxWidth:500,padding:20,display:"grid",gap:24},children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Controlled"}),t.jsx(v,{label:"Controlled Input",placeholder:"Search...",options:T,value:e,onChange:a=>n(a)}),t.jsxs("p",{style:{marginTop:8,fontSize:14,color:"#666"},children:["Selected: ",e||"None"]})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Uncontrolled"}),t.jsx(v,{label:"Uncontrolled Input",placeholder:"Search...",options:T,defaultValue:"apple"})]})]})}},H={render:()=>{const[e,n]=i.useState(null),[a,s]=i.useState(""),l=m=>{n(m),s(m?"":"Please select a fruit")};return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Required Field",placeholder:"Select a fruit...",options:T,value:e,onChange:l,error:a})})}},K={render:()=>t.jsxs("div",{style:{maxWidth:400,padding:20,display:"grid",gap:24},children:[t.jsx(v,{label:"Disabled",placeholder:"Search...",options:T,disabled:!0}),t.jsx(v,{label:"ReadOnly",placeholder:"Search...",options:T,value:"apple",readOnly:!0})]})},U={render:()=>{const[e,n]=i.useState(["apple","banana"]);return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"With Clear Button",placeholder:"Select fruits...",options:T,value:e,onChange:a=>n(a||[]),multiple:!0,clearable:!0})})}},J={render:()=>{const[e,n]=i.useState(null),a=Array.from({length:1e3},(s,l)=>({label:`Item ${l+1}`,value:`item-${l+1}`}));return t.jsx("div",{style:{maxWidth:400,padding:20},children:t.jsx(v,{label:"Large Dataset (1000 items)",placeholder:"Search items...",options:a,value:e,onChange:s=>n(s),virtualized:!0})})}},G={render:()=>{const[e,n]=i.useState([]);return t.jsx("div",{style:{maxWidth:500,padding:32,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:12,boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},children:t.jsxs("div",{style:{background:"white",padding:24,borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.1)"},children:[t.jsx("h2",{style:{margin:"0 0 16px 0",fontSize:20},children:"Premium Card"}),t.jsx(v,{label:"Select Tags",caption:"Choose one or more tags for categorization",placeholder:"Add tags...",options:T,value:e,onChange:a=>n(a),multiple:!0,fullWidth:!0})]})})}},Q={render:()=>{const[e,n]=i.useState([]);return t.jsx("div",{style:{maxWidth:600,padding:20},children:t.jsx(v,{label:"Full Featured Autocomplete",caption:"Multi-select with groups, icons, and all features enabled",placeholder:"Search countries...",options:Ye.map(a=>({...a,icon:"🌍"})),value:e,onChange:a=>n(a),multiple:!0,clearable:!0,fullWidth:!0,groupBy:a=>a.group||"Other"})})}};var ne,ae,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Select a fruit" placeholder="Type to search..." options={fruits} value={value} onChange={v => setValue(v as string | null)} />\r
      </div>;
  }
}`,...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,oe,ie;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      maxWidth: 500,
      padding: 20
    }}>\r
        <Autocomplete label="Select multiple fruits" placeholder="Add fruits..." options={fruits} value={value} onChange={v => setValue(v as string[])} multiple />\r
      </div>;
  }
}`,...(ie=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,ue,ce;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Favorite Fruit" caption="Choose your favorite fruit from the list" placeholder="Search fruits..." options={fruits} value={value} onChange={v => setValue(v as string | null)} />\r
      </div>;
  }
}`,...(ce=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Favorite Fruit" caption="Choose your favorite fruit from the list" placeholder="Search fruits..." options={fruits} value={value} onChange={v => setValue(v as string | null)} triggerAsButton />\r
      </div>;
  }
}`,...(me=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,ve;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,be,ye;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="Select a country" placeholder="Search countries..." options={countries} value={value} onChange={v => setValue(v as string | null)} groupBy={option => option.group || 'Other'} />\r
      </div>;
  }
}`,...(ye=(be=F.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,Ce,Se;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Te,we,Ae;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ae=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Oe,_e,je;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(je=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Re,Ve,Ie;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ie=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var qe,Ne,We;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400,
    padding: 20,
    display: 'grid',
    gap: 24
  }}>\r
      <Autocomplete label="Disabled" placeholder="Search..." options={fruits} disabled />\r
      <Autocomplete label="ReadOnly" placeholder="Search..." options={fruits} value="apple" readOnly />\r
    </div>
}`,...(We=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Ee,ke,Le;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['apple', 'banana']);
    return <div style={{
      maxWidth: 400,
      padding: 20
    }}>\r
        <Autocomplete label="With Clear Button" placeholder="Select fruits..." options={fruits} value={value} onChange={v => setValue(v as string[] || [])} multiple clearable />\r
      </div>;
  }
}`,...(Le=(ke=U.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Be,Me,De;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(De=(Me=J.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Fe,$e,Pe;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Pe.source}}};var ze,He,Ke;Q.parameters={...Q.parameters,docs:{...(ze=Q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ke=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};const Wt=["BasicAutocomplete","MultiSelectWithChips","WithLabelAndCaption","CaptionButtonTrigger","WithIcons","GroupedOptions","AsyncSearch","CustomOptionRenderer","ControlledVsUncontrolled","ErrorState","DisabledAndReadOnly","ClearButtonExample","Virtualized1000Items","PremiumSurfaceExample","AllFeaturesCombined"];export{Q as AllFeaturesCombined,$ as AsyncSearch,k as BasicAutocomplete,M as CaptionButtonTrigger,U as ClearButtonExample,z as ControlledVsUncontrolled,P as CustomOptionRenderer,K as DisabledAndReadOnly,H as ErrorState,F as GroupedOptions,L as MultiSelectWithChips,G as PremiumSurfaceExample,J as Virtualized1000Items,D as WithIcons,B as WithLabelAndCaption,Wt as __namedExportsOrder,Nt as default};
