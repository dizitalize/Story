import{j as e}from"./jsx-runtime-DF2Pcvd1.js";import{r as h}from"./index-B2-qRKKC.js";import{B as jt}from"./Badge-BMr-ll-n.js";import{I as Te}from"./Input-Di0Rlviz.js";import{c as Ie}from"./classNames-2dOUpm6k.js";import{I as ne}from"./Icon-CQ1yD0uX.js";import{B as en}from"./Button-Sb-dFZaJ.js";import{I}from"./IconButton-B2mw4IJM.js";import{C as E}from"./Checkbox-Bx2Vk9iC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Label-KEzZ_8lI.js";import"./iframe-3Q35QAIm.js";const tn="_listView_9pjms_5",nn="_listViewContent_9pjms_15",an="_toolbar_9pjms_20",rn="_toolbarLeft_9pjms_31",sn="_toolbarRight_9pjms_32",on="_tableWrapper_9pjms_38",ln="_table_9pjms_38",dn="_tableHead_9pjms_65",cn="_sticky_9pjms_69",mn="_tableHeader_9pjms_75",pn="_headerContent_9pjms_89",un="_tableBody_9pjms_95",hn="_tableRow_9pjms_99",yn="_hoverable_9pjms_103",gn="_selected_9pjms_107",bn="_striped_9pjms_113",fn="_disabled_9pjms_116",vn="_tableCell_9pjms_122",wn="_selectionCell_9pjms_133",xn="_cellContent_9pjms_139",jn="_card_9pjms_148",Cn="_horizontalItem_9pjms_151",_n="_cardGrid_9pjms_166",Sn="_cardSelection_9pjms_197",Tn="_cardContent_9pjms_203",In="_cardField_9pjms_209",kn="_cardLabel_9pjms_215",Dn="_cardValue_9pjms_221",Nn="_horizontalList_9pjms_226",Ln="_horizontalContent_9pjms_258",zn="_horizontalField_9pjms_265",Vn="_pagination_9pjms_274",Rn="_paginationInfo_9pjms_284",An="_paginationControls_9pjms_289",Pn="_pageNumber_9pjms_295",qn="_emptyState_9pjms_302",Mn="_emptyCell_9pjms_312",En="_skeleton_9pjms_317",Kn="_showDividers_9pjms_334",a={listView:tn,listViewContent:nn,toolbar:an,toolbarLeft:rn,toolbarRight:sn,tableWrapper:on,table:ln,tableHead:dn,sticky:cn,tableHeader:mn,"align-center":"_align-center_9pjms_82","align-right":"_align-right_9pjms_85",headerContent:pn,tableBody:un,tableRow:hn,hoverable:yn,selected:gn,striped:bn,disabled:fn,tableCell:vn,selectionCell:wn,cellContent:xn,"density-compact":"_density-compact_9pjms_144",card:jn,horizontalItem:Cn,"density-spacious":"_density-spacious_9pjms_155",cardGrid:_n,cardSelection:Sn,cardContent:Tn,cardField:In,cardLabel:kn,cardValue:Dn,horizontalList:Nn,horizontalContent:Ln,horizontalField:zn,pagination:Vn,paginationInfo:Rn,paginationControls:An,pageNumber:Pn,emptyState:qn,emptyCell:Mn,skeleton:En,"skeleton-loading":"_skeleton-loading_9pjms_1",showDividers:Kn},v=({id:i,items:m=[],columns:p=[],layout:u="table",selectionMode:o="none",selectedKeys:w,defaultSelectedKeys:x=[],onSelectionChange:S,rowKey:V="id",striped:Ct=!1,showRowDividers:_t=!0,density:St="comfortable",canShowToolbar:Tt=!1,toolSettings:c,pageSettings:R,height:It,loading:ae=!1,emptyContent:re,onRowClick:se,onRowDoubleClick:oe,onRowHover:ie,isRowDisabled:f,defaultRowTemplate:A,onCellEditStart:le,onCellEditEnd:de,onRowUpdate:ce,className:kt="",style:Dt,showHeader:Nt=!0,stickyHeader:Lt=!1,hoverableRows:me=!0,rowClassName:pe,sortState:k,onSortChange:we})=>{var Se;const[zt,xe]=h.useState(x),[P,Vt]=h.useState(""),[q,je]=h.useState(null),[M,ue]=h.useState(null),[D,Rt]=h.useState(u),At=St,he=w!==void 0?w:zt,C=h.useCallback((t,n)=>typeof V=="function"?V(t):t[V]??n,[V]),Ce=(t,n,s)=>{const r=n||s;return r?t[r]:null},{pageSize:T=10,currentPage:_=1,total:Pt,onPageChange:N,showTotal:qt=!0}=R||{},ye=h.useMemo(()=>{if(!R)return m;const t=(_-1)*T,n=t+T;return m.slice(t,n)},[m,R,_,T]),g=h.useMemo(()=>{var n;if(!P||!((n=c==null?void 0:c.search)!=null&&n.searchKey))return ye;const t=c.search.searchKey;return ye.filter(s=>{const r=s[t];return r==null?!1:String(r).toLowerCase().includes(P.toLowerCase())})},[ye,P,(Se=c==null?void 0:c.search)==null?void 0:Se.searchKey]),Mt=t=>{if(o!=="multiple")return;const n=t?g.map((r,l)=>C(r,l)):[];w===void 0&&xe(n);const s=t?g:[];S==null||S(n,s)},ge=(t,n,s)=>{const r=C(t,n);let l;o==="single"?l=s?[r]:[]:l=s?[...he,r]:he.filter(b=>b!==r),w===void 0&&xe(l);const d=g.filter((b,Zt)=>l.includes(C(b,Zt)));S==null||S(l,d)},L=(t,n)=>{const s=C(t,n);return he.includes(s)},_e=g.length>0&&g.every((t,n)=>L(t,n)),Et=g.some((t,n)=>L(t,n))&&!_e,Kt=(t,n,s)=>{if(!n.editable)return;const r=C(t,s),l=Ce(t,n.dataIndex,n.field);je({rowKey:r,columnId:n.id}),ue(l),le==null||le(t,n)},be=(t,n,s)=>{if(q){if(s&&M!==void 0){const r=n.dataIndex||n.field,l=r?{...t,[r]:M}:{...t};de==null||de(t,n,M),ce==null||ce(l)}je(null),ue(null)}},Bt=(t,n,s)=>{if(!q)return!1;const r=C(t,s);return q.rowKey===r&&q.columnId===n.id},fe=(t,n)=>{f!=null&&f(t)||se==null||se(t,n)},$t=t=>{var n,s;Vt(t),(s=(n=c==null?void 0:c.search)==null?void 0:n.onSearch)==null||s.call(n,t)},Ft=()=>g.filter((t,n)=>L(t,n)),z=(t,n,s)=>{const r=Ce(t,n.dataIndex,n.field);return n.render?n.render(r,t,s):r!=null?String(r):""},Ot=(t,n,s)=>{if(!Bt(t,n,s))return e.jsx("div",{className:a.cellContent,onDoubleClick:()=>Kt(t,n,s),children:z(t,n,s)});const l=n.editorType||"text";return l==="text"||l==="number"?e.jsx(Te,{type:l,value:M,onChange:d=>ue(d.target.value),onBlur:()=>be(t,n,!0),onKeyDown:d=>{d.key==="Enter"&&be(t,n,!0),d.key==="Escape"&&be(t,n,!1)},autoFocus:!0,size:"small",...n.editorProps}):z(t,n,s)},Ht=()=>Nt?e.jsx("thead",{className:`${a.tableHead} ${Lt?a.sticky:""}`,children:e.jsxs("tr",{children:[o!=="none"&&e.jsx("th",{className:a.selectionCell,children:o==="multiple"&&e.jsx(E,{checked:_e,indeterminate:Et,onChange:t=>Mt(t.target.checked)})}),p.map(t=>e.jsx("th",{className:`${a.tableHeader} ${t.align?a[`align-${t.align}`]:""}`,style:{width:t.width},children:e.jsxs("div",{className:a.headerContent,children:[e.jsx("span",{children:t.header}),t.sortable&&we&&e.jsx(I,{icon:"sort",size:"xsmall",variant:"ghost",onClick:()=>{const n=(k==null?void 0:k.column)===t.id&&(k==null?void 0:k.direction)==="asc"?"desc":"asc";we(t.id,n)}})]})},t.id))]})}):null,Gt=()=>ae?e.jsx("tbody",{children:Array.from({length:5}).map((t,n)=>e.jsxs("tr",{children:[o!=="none"&&e.jsx("td",{children:e.jsx("div",{className:a.skeleton})}),p.map(s=>e.jsx("td",{children:e.jsx("div",{className:a.skeleton})},s.id))]},`skeleton-${n}`))}):g.length===0?e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:p.length+(o!=="none"?1:0),className:a.emptyCell,children:re||e.jsx("div",{className:a.emptyState,children:"No data available"})})})}):e.jsx("tbody",{className:a.tableBody,children:g.map((t,n)=>{const s=C(t,n),r=L(t,n),l=f==null?void 0:f(t),d=Ie(a.tableRow,r&&a.selected,l&&a.disabled,me&&!l&&a.hoverable,Ct&&n%2===1&&a.striped,typeof pe=="function"?pe(t,n):pe);return e.jsxs("tr",{className:d,onClick:()=>fe(t,n),onDoubleClick:()=>oe==null?void 0:oe(t,n),onMouseEnter:()=>ie==null?void 0:ie(t,n),children:[o!=="none"&&e.jsx("td",{className:a.selectionCell,children:e.jsx(E,{checked:r,onChange:b=>ge(t,n,b.target.checked),disabled:l})}),p.map(b=>e.jsx("td",{className:`${a.tableCell} ${b.align?a[`align-${b.align}`]:""} ${b.className||""}`,children:b.editable?Ot(t,b,n):z(t,b,n)},b.id))]},s)})}),Jt=()=>e.jsx("div",{className:a.tableWrapper,style:{height:It},children:e.jsxs("table",{className:a.table,children:[Ht(),Gt()]})}),Wt=()=>ae?e.jsx("div",{className:a.cardGrid,children:Array.from({length:6}).map((t,n)=>e.jsx("div",{className:a.card,children:e.jsx("div",{className:a.skeleton,style:{height:120}})},`skeleton-${n}`))}):g.length===0?e.jsx("div",{className:a.emptyState,children:re||"No data available"}):e.jsx("div",{className:a.cardGrid,children:g.map((t,n)=>{const s=C(t,n),r=L(t,n),l=f==null?void 0:f(t);return e.jsxs("div",{className:`${a.card} ${r?a.selected:""} ${l?a.disabled:""} ${me&&!l?a.hoverable:""}`,onClick:()=>fe(t,n),children:[o!=="none"&&e.jsx("div",{className:a.cardSelection,children:e.jsx(E,{checked:r,onChange:d=>ge(t,n,d.target.checked),disabled:l})}),A?A(t,n):e.jsx("div",{className:a.cardContent,children:p.map(d=>e.jsxs("div",{className:a.cardField,children:[e.jsxs("div",{className:a.cardLabel,children:[d.header,":"]}),e.jsx("div",{className:a.cardValue,children:z(t,d,n)})]},d.id))})]},s)})}),Yt=()=>ae?e.jsx("div",{className:a.horizontalList,children:Array.from({length:4}).map((t,n)=>e.jsx("div",{className:a.horizontalItem,children:e.jsx("div",{className:a.skeleton,style:{height:80}})},`skeleton-${n}`))}):g.length===0?e.jsx("div",{className:a.emptyState,children:re||"No data available"}):e.jsx("div",{className:a.horizontalList,children:g.map((t,n)=>{const s=C(t,n),r=L(t,n),l=f==null?void 0:f(t);return e.jsxs("div",{className:`${a.horizontalItem} ${r?a.selected:""} ${l?a.disabled:""} ${me&&!l?a.hoverable:""}`,onClick:()=>fe(t,n),children:[o!=="none"&&e.jsx(E,{checked:r,onChange:d=>ge(t,n,d.target.checked),disabled:l}),A?A(t,n):e.jsx("div",{className:a.horizontalContent,children:p.slice(0,3).map(d=>e.jsxs("div",{className:a.horizontalField,children:[e.jsxs("strong",{children:[d.header,":"]})," ",z(t,d,n)]},d.id))})]},s)})}),Ut=()=>{var n,s;if(!Tt||!c)return null;const t=Ft();return e.jsxs("div",{className:a.toolbar,children:[e.jsxs("div",{className:a.toolbarLeft,children:[c.leftContent,((n=c.search)==null?void 0:n.allowSearch)&&e.jsx(Te,{placeholder:c.search.searchPlaceholder||"Search...",value:P,onChange:r=>$t(r.target.value),leadingIcon:e.jsx(ne,{name:"search",variant:"regular"}),size:"small"})]}),e.jsxs("div",{className:a.toolbarRight,children:[(s=c.actions)==null?void 0:s.map(r=>{const l=r.variant==="primary"?"contained":r.variant==="danger"?"destructive":"outlined";return e.jsxs(en,{variant:l,size:"md",onClick:()=>{var d;return(d=r.onClick)==null?void 0:d.call(r,t)},disabled:r.disabled||r.requiresSelection&&t.length===0,children:[r.icon&&e.jsx(ne,{name:r.icon,variant:"regular"}),r.label]},r.id)}),c.canShowToggle&&e.jsx(I,{icon:D==="table"?"grid":"list",size:"small",variant:"ghost",onClick:()=>Rt(D==="table"?"cards":"table"),title:"Toggle layout"}),c.showRefresh&&e.jsx(I,{icon:"refresh",size:"small",variant:"ghost",title:"Refresh"}),c.showFilter&&e.jsx(I,{icon:"filter",size:"small",variant:"ghost",title:"Filter"}),c.showExport&&e.jsx(I,{icon:"download",size:"small",variant:"ghost",title:"Export"}),c.rightContent]})]})},Xt=()=>{if(!R)return null;const t=Pt||m.length,n=Math.ceil(t/T);return e.jsxs("div",{className:a.pagination,children:[qt&&e.jsxs("div",{className:a.paginationInfo,children:["Showing ",(_-1)*T+1,"-",Math.min(_*T,t)," of ",t]}),e.jsxs("div",{className:a.paginationControls,children:[e.jsx(I,{icon:"chevron-left",size:"small",variant:"ghost",onClick:()=>N==null?void 0:N(_-1,T),disabled:_===1}),e.jsxs("span",{className:a.pageNumber,children:["Page ",_," of ",n]}),e.jsx(I,{icon:"chevron-right",size:"small",variant:"ghost",onClick:()=>N==null?void 0:N(_+1,T),disabled:_>=n})]})]})},Qt=Ie(a.listView,a[`layout-${D}`],a[`density-${At}`],_t&&a.showDividers,kt);return e.jsxs("div",{id:i,className:Qt,style:Dt,children:[Ut(),e.jsxs("div",{className:a.listViewContent,children:[D==="table"&&Jt(),D==="cards"&&Wt(),D==="horizontal"&&Yt()]}),Xt()]})};v.displayName="ListView";v.__docgenInfo={description:`ListView Component

A highly configurable data list component that supports:
- Multiple layouts (table, cards, horizontal)
- Selection modes (none, single, multiple)
- Inline editing
- Toolbar with search and actions
- Pagination
- Sorting
- Custom row templates

@example
\`\`\`tsx
<ListView
  items={data}
  columns={columns}
  selectionMode="multiple"
  canShowToolbar
  toolSettings={{ search: { allowSearch: true } }}
  pageSettings={{ pageSize: 10 }}
/>
\`\`\``,methods:[],displayName:"ListView",props:{id:{required:!1,tsType:{name:"string"},description:"Unique component identifier"},items:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Data items to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnDefinition",elements:[{name:"T"}],raw:"ColumnDefinition<T>"}],raw:"ColumnDefinition<T>[]"},description:"Column definitions (for table layout)",defaultValue:{value:"[]",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'table' | 'cards' | 'horizontal'",elements:[{name:"literal",value:"'table'"},{name:"literal",value:"'cards'"},{name:"literal",value:"'horizontal'"}]},description:"Layout mode",defaultValue:{value:"'table'",computed:!1}},selectionMode:{required:!1,tsType:{name:"union",raw:"'none' | 'single' | 'multiple'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"Selection mode",defaultValue:{value:"'none'",computed:!1}},selectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"Controlled selected row keys"},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"Default selected keys (uncontrolled)",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: (string | number)[], selectedRows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"keys"},{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedRows"}],return:{name:"void"}}},description:"Selection change callback"},rowKey:{required:!1,tsType:{name:"union",raw:"string | ((row: T) => string | number)",elements:[{name:"string"},{name:"unknown"}]},description:"Function to extract unique key from row",defaultValue:{value:"'id'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Show alternating row colors",defaultValue:{value:"false",computed:!1}},showRowDividers:{required:!1,tsType:{name:"boolean"},description:"Show dividers between rows",defaultValue:{value:"true",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'comfortable' | 'compact' | 'spacious'",elements:[{name:"literal",value:"'comfortable'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'spacious'"}]},description:"Density mode",defaultValue:{value:"'comfortable'",computed:!1}},canShowToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"false",computed:!1}},toolSettings:{required:!1,tsType:{name:"ToolSettings"},description:"Toolbar configuration"},pageSettings:{required:!1,tsType:{name:"PageSettings"},description:"Pagination configuration"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed height with scrollable body"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyContent:{required:!1,tsType:{name:"ReactNode"},description:"Empty state content"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Row click callback"},onRowDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Row double click callback"},onRowHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Row hover callback"},isRowDisabled:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"boolean"}}},description:"Function to determine if row is disabled"},defaultRowTemplate:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"ReactNode"}}},description:"Custom row template renderer"},onCellEditStart:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, column: ColumnDefinition<T>) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"ColumnDefinition",elements:[{name:"T"}],raw:"ColumnDefinition<T>"},name:"column"}],return:{name:"void"}}},description:"Cell edit start callback"},onCellEditEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, column: ColumnDefinition<T>, newValue: any) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"ColumnDefinition",elements:[{name:"T"}],raw:"ColumnDefinition<T>"},name:"column"},{type:{name:"any"},name:"newValue"}],return:{name:"void"}}},description:"Cell edit end callback"},onRowUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(updatedRow: T) => void",signature:{arguments:[{type:{name:"T"},name:"updatedRow"}],return:{name:"void"}}},description:"Row update callback"},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom style"},showHeader:{required:!1,tsType:{name:"boolean"},description:"Show header",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Sticky header",defaultValue:{value:"false",computed:!1}},hoverableRows:{required:!1,tsType:{name:"boolean"},description:"Enable row hover effect",defaultValue:{value:"true",computed:!1}},rowClassName:{required:!1,tsType:{name:"union",raw:"string | ((row: T, index: number) => string)",elements:[{name:"string"},{name:"unknown"}]},description:"Custom row className"},sortState:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  column: string;
  direction: 'asc' | 'desc';
}`,signature:{properties:[{key:"column",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!0}}]}},description:"Sort configuration"},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:"Sort change callback"}}};const ia={title:"DataDisplay/ListView",component:v,tags:["autodocs"],argTypes:{selectionMode:{control:"select",options:["none","single","multiple"]},layout:{control:"select",options:["table","cards","horizontal"]},density:{control:"select",options:["comfortable","compact","spacious"]},striped:{control:"boolean"},showRowDividers:{control:"boolean"},canShowToolbar:{control:"boolean"},loading:{control:"boolean"},hoverableRows:{control:"boolean"},stickyHeader:{control:"boolean"}},parameters:{docs:{description:{component:"A highly configurable data list component that supports multiple layouts, selection modes, inline editing, toolbar with search and actions, pagination, and sorting. Perfect for displaying tabular data, product catalogs, user lists, and more."}}}},j=[{id:1,name:"John",dept:"I.T",dob:"1 October 1990",doj:"01 October 2020",gender:"M"},{id:2,name:"Ramesh",dept:"Computer",dob:"2-10-1990",doj:"02 Oct 2020",gender:"M"},{id:3,name:"Gokul",dept:"Mech",dob:"10/23/1990",doj:"03/10/2020",gender:"M"},{id:4,name:"Rahul",dept:"Maths",dob:"10/04/1990",doj:"10/04/2020",gender:"M"},{id:5,name:"Priya",dept:"I.T",dob:"15/06/1992",doj:"15/06/2021",gender:"F"},{id:6,name:"Anita",dept:"Computer",dob:"22/09/1991",doj:"22/09/2019",gender:"F"}],y=[{id:"name",header:"Name",dataIndex:"name",width:150},{id:"dept",header:"Dept",dataIndex:"dept",width:120},{id:"dob",header:"DOB",dataIndex:"dob",width:150},{id:"doj",header:"DOJ",dataIndex:"doj",width:150},{id:"gender",header:"Gender",dataIndex:"gender",width:100,align:"center"}],Bn=[{id:"1",tripId:"TRP001",date:"10/08/2021",from:"Location 1",to:"Location 2",brid:"BR0001",dispatcher:"CN0001",planned:"10/08/2021",driver:"15/08/2021",driverId:"D00001",agentId:"V00001",agentName:"Ramesh...",altTrain:"Alt-Tran...",status:"Online"},{id:"2",tripId:"TRP002",date:"10/08/2021",from:"Location 1",to:"Location 2",brid:"BR0001",dispatcher:"CN0001",planned:"10/08/2021",driver:"15/08/2021",driverId:"D00001",agentId:"V00001",agentName:"Ramesh...",altTrain:"Alt-Tran...",status:"Delayed"}],$n=[{id:"tripId",header:"Trip ID",dataIndex:"tripId",width:100},{id:"from",header:"From",dataIndex:"from",width:120},{id:"to",header:"To",dataIndex:"to",width:120},{id:"brid",header:"BR ID",dataIndex:"brid",width:100},{id:"dispatcher",header:"Dispatcher",dataIndex:"dispatcher",width:120},{id:"planned",header:"Planned",dataIndex:"planned",width:120},{id:"driver",header:"Driver",dataIndex:"driver",width:120},{id:"driverId",header:"Driver ID",dataIndex:"driverId",width:100},{id:"agentId",header:"Agent ID",dataIndex:"agentId",width:100},{id:"agentName",header:"Agent Name",dataIndex:"agentName",width:120},{id:"status",header:"Released",dataIndex:"status",width:100,render:i=>e.jsx(jt,{content:i,variant:"soft",backgroundColor:i==="Online"?"var(--color-success-100)":"var(--color-error-100)",textColor:i==="Online"?"var(--color-success-700)":"var(--color-error-700)"})}],Fn=[{id:1,firstName:"Rahul",lastName:"Corwin",email:"Jessie.Dietrich17@gmail.com",phone:"811.924.8196 x785"},{id:2,firstName:"Eugene",lastName:"McGlynn",email:"Candida92@hotmail.com",phone:"(811) 226-0861"},{id:3,firstName:"Velva",lastName:"Runte",email:"Daryl.Ritchie@hotmail.com",phone:"(586) 474-1202"},{id:4,firstName:"Virginia",lastName:"Lynch",email:"Estevan_West@yahoo.com",phone:"835.886.1036 x643"}],On=[{id:"firstName",header:"First Name",dataIndex:"firstName",width:150},{id:"lastName",header:"Last Name",dataIndex:"lastName",width:150},{id:"email",header:"Email",dataIndex:"email",width:250},{id:"phone",header:"Phone",dataIndex:"phone",width:180}],Hn=[{id:1,product:"MacBook Pro",brand:"Apple",category:"Laptops",price:2499,rating:4.9,stock:45},{id:2,product:"iPhone 14",brand:"Apple",category:"Smartphones",price:999,rating:4.8,stock:120},{id:3,product:"Galaxy S23",brand:"Samsung",category:"Smartphones",price:899,rating:4.7,stock:85},{id:4,product:"ThinkPad X1",brand:"Lenovo",category:"Laptops",price:1799,rating:4.6,stock:32},{id:5,product:"Surface Pro",brand:"Microsoft",category:"Tablets",price:1299,rating:4.5,stock:67},{id:6,product:"iPad Air",brand:"Apple",category:"Tablets",price:699,rating:4.7,stock:95}],Gn=[{id:"id",header:"ID",dataIndex:"id",width:80,align:"center"},{id:"product",header:"Product",dataIndex:"product",width:180},{id:"brand",header:"Brand",dataIndex:"brand",width:120},{id:"category",header:"Category",dataIndex:"category",width:140},{id:"price",header:"Price",dataIndex:"price",width:120,align:"right",render:i=>`$${i.toLocaleString()}`},{id:"rating",header:"Rating",dataIndex:"rating",width:100,align:"center",render:i=>e.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:4},children:[e.jsx(ne,{name:"star",variant:"solid",style:{color:"var(--color-warning-500)",fontSize:14}}),i]})},{id:"stock",header:"Stock",dataIndex:"stock",width:100,align:"center"}],Jn=i=>{const m=["I.T","Computer","Mech","Maths","Physics","Chemistry"],p=["John","Ramesh","Gokul","Rahul","Priya","Anita","Vijay","Sanjay","Deepa","Kavya"];return Array.from({length:i},(u,o)=>({id:o+1,name:p[o%p.length],dept:m[o%m.length],dob:`${o%28+1}/0${o%9+1}/199${o%10}`,doj:`${o%28+1}/0${o%9+1}/202${o%4}`,gender:o%3===0?"F":"M"}))},ve=Jn(100),K={args:{items:j,columns:y,layout:"table",selectionMode:"none",striped:!1,showRowDividers:!0},parameters:{docs:{description:{story:"Basic table layout displaying employee data with standard columns."},source:{type:"code",state:"open"}}}},B={render:()=>{const[i,m]=h.useState(j),p=[{id:"name",header:"Name",dataIndex:"name",width:150},{id:"dept",header:"Dept",dataIndex:"dept",width:120},{id:"dob",header:"DOB",dataIndex:"dob",width:150,editable:!0,editorType:"text"},{id:"doj",header:"DOJ",dataIndex:"doj",width:150,editable:!0,editorType:"text"},{id:"gender",header:"Gender",dataIndex:"gender",width:100,align:"center"}],u=o=>{m(w=>w.map(x=>x.id===o.id?o:x))};return e.jsx(v,{items:i,columns:p,layout:"table",onRowUpdate:u,striped:!0})},parameters:{docs:{description:{story:"Inline editable rows. Double-click DOB or DOJ cells to edit. Press Enter to save, Escape to cancel."},source:{type:"code",state:"open"}}}},$={args:{items:Bn,columns:$n,layout:"table",selectionMode:"none",striped:!0,showRowDividers:!0},parameters:{docs:{description:{story:"List with status badges showing trip data with Online/Delayed indicators."},source:{type:"code",state:"open"}}}},F={args:{items:ve,columns:y,layout:"table",height:"400px",stickyHeader:!0,striped:!0},parameters:{a11y:{disable:!0},docs:{description:{story:"Large dataset with fixed height and vertical scrolling. Header stays fixed on scroll."},source:{type:"code",state:"closed"}}}},O={args:{items:ve.slice(0,20),columns:y,layout:"table",density:"compact",striped:!0,height:"500px"},parameters:{docs:{description:{story:"Dense spacing mode showing more rows in less space, ideal for data-heavy interfaces."},source:{type:"code",state:"open"}}}},H={render:()=>{const[i,m]=h.useState([]),[p,u]=h.useState(j);return e.jsx(v,{items:p,columns:y,layout:"table",selectionMode:"multiple",selectedKeys:i,onSelectionChange:o=>m(o),canShowToolbar:!0,toolSettings:{search:{allowSearch:!0,searchKey:"name",searchPlaceholder:"Search Name"},actions:[{id:"approve",label:"Approve",icon:"check",variant:"primary",requiresSelection:!0,onClick:o=>alert(`Approved ${o.length} employees`)},{id:"delete",label:"Delete",icon:"trash",variant:"danger",requiresSelection:!0,onClick:o=>{if(confirm(`Delete ${o.length} employees?`)){const w=o.map(x=>x.id);u(x=>x.filter(S=>!w.includes(S.id))),m([])}}}],canShowToggle:!0,showRefresh:!0,showFilter:!0,showExport:!0},striped:!0})},parameters:{a11y:{disable:!0},docs:{description:{story:"Full-featured toolbar with search, action buttons, layout toggle, and utility icons."},source:{type:"code",state:"closed"}}}},G={render:()=>{const[i,m]=h.useState([]);return e.jsxs("div",{children:[e.jsx(v,{items:j,columns:y,layout:"table",selectionMode:"single",selectedKeys:i,onSelectionChange:(p,u)=>{m(p),console.log("Selected:",u)},striped:!0}),e.jsxs("div",{style:{marginTop:16,padding:16,backgroundColor:"var(--color-background)",borderRadius:"var(--radius-md)"},children:["Selected ID: ",i[0]||"None"]})]})},parameters:{docs:{description:{story:"Single selection mode - only one row can be selected at a time."},source:{type:"code",state:"open"}}}},J={render:()=>{const[i,m]=h.useState([]);return e.jsxs("div",{children:[e.jsx(v,{items:j,columns:y,layout:"table",selectionMode:"multiple",selectedKeys:i,onSelectionChange:(p,u)=>{m(p),console.log("Selected:",u)},striped:!0}),e.jsxs("div",{style:{marginTop:16,padding:16,backgroundColor:"var(--color-background)",borderRadius:"var(--radius-md)"},children:["Selected: ",i.length," row(s) - IDs: [",i.join(", "),"]"]})]})},parameters:{docs:{description:{story:"Multiple selection mode with header checkbox for select-all functionality."},source:{type:"code",state:"open"}}}},W={args:{items:Fn,columns:On,layout:"horizontal",selectionMode:"multiple",hoverableRows:!0},parameters:{docs:{description:{story:"Horizontal card layout ideal for contact lists and compact data display."},source:{type:"code",state:"open"}}}},Y={args:{items:j,columns:y,layout:"cards",selectionMode:"multiple",hoverableRows:!0},parameters:{docs:{description:{story:"Card grid layout for responsive, visual data presentation."},source:{type:"code",state:"open"}}}},U={render:()=>e.jsx(v,{items:j,columns:y,layout:"cards",selectionMode:"multiple",defaultRowTemplate:i=>e.jsxs("div",{style:{padding:8},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",color:"var(--color-primary-600)"},children:i.name}),e.jsxs("p",{style:{margin:"4px 0",fontSize:14,color:"var(--color-text-secondary)"},children:[e.jsx("strong",{children:"Department:"})," ",i.dept]}),e.jsxs("p",{style:{margin:"4px 0",fontSize:14,color:"var(--color-text-secondary)"},children:[e.jsx("strong",{children:"DOB:"})," ",i.dob," | ",e.jsx("strong",{children:"DOJ:"})," ",i.doj]}),e.jsx("div",{style:{marginTop:8},children:e.jsx(jt,{content:i.gender==="M"?"Male":"Female",variant:"soft",size:"small"})})]})}),parameters:{docs:{description:{story:"Custom row template with rich content using the defaultRowTemplate prop."},source:{type:"code",state:"open"}}}},X={args:{items:Hn,columns:Gn,layout:"table",selectionMode:"multiple",striped:!0,canShowToolbar:!0,toolSettings:{search:{allowSearch:!0,searchKey:"product",searchPlaceholder:"Search products..."},actions:[{id:"addToCart",label:"Add to Cart",icon:"shopping-cart",variant:"primary",requiresSelection:!0}],canShowToggle:!0}},parameters:{docs:{description:{story:"E-commerce product list with ID, brand, category, price, rating, and stock information."},source:{type:"code",state:"open"}}}},Q={render:()=>{const i=ve,[m,p]=h.useState(1),u=10,o=(m-1)*u,w=i.slice(o,o+u);return e.jsx("div",{children:e.jsx(v,{items:w,columns:y,layout:"table",selectionMode:"multiple",striped:!0,pageSettings:{pageSize:u,currentPage:m,total:i.length,onPageChange:x=>p(x),showTotal:!0}})})},parameters:{a11y:{disable:!0},docs:{description:{story:"Server-side pagination with controlled page state, simulating API-driven data loading."},source:{type:"code",state:"closed"}}}},Z={args:{items:[],columns:y,layout:"table",loading:!0},parameters:{docs:{description:{story:"Loading state with skeleton rows while data is being fetched."},source:{type:"code",state:"open"}}}},ee={args:{items:[],columns:y,layout:"table",emptyContent:e.jsxs("div",{style:{textAlign:"center",padding:"40px 0"},children:[e.jsx(ne,{name:"inbox",variant:"regular",style:{fontSize:48,color:"var(--color-text-tertiary)",marginBottom:16}}),e.jsx("h3",{style:{margin:"0 0 8px 0",color:"var(--color-text-secondary)"},children:"No Data Found"}),e.jsx("p",{style:{margin:0,color:"var(--color-text-tertiary)"},children:"There are no items to display"})]})},parameters:{docs:{description:{story:"Custom empty state with icon and messaging when no data is available."},source:{type:"code",state:"open"}}}},te={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Compact"}),e.jsx(v,{items:j.slice(0,3),columns:y,layout:"table",density:"compact"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Comfortable (Default)"}),e.jsx(v,{items:j.slice(0,3),columns:y,layout:"table",density:"comfortable"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Spacious"}),e.jsx(v,{items:j.slice(0,3),columns:y,layout:"table",density:"spacious"})]})]}),parameters:{docs:{description:{story:"Comparison of all three density modes: compact, comfortable, and spacious."},source:{type:"code",state:"open"}}}};var ke,De,Ne;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    items: employeeData,
    columns: employeeColumns,
    layout: "table",
    selectionMode: "none",
    striped: false,
    showRowDividers: true
  },
  parameters: {
    docs: {
      description: {
        story: "Basic table layout displaying employee data with standard columns."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Ne=(De=K.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Le,ze,Ve;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(employeeData);
    const editableColumns: ColumnDefinition<Employee>[] = [{
      id: "name",
      header: "Name",
      dataIndex: "name",
      width: 150
    }, {
      id: "dept",
      header: "Dept",
      dataIndex: "dept",
      width: 120
    }, {
      id: "dob",
      header: "DOB",
      dataIndex: "dob",
      width: 150,
      editable: true,
      editorType: "text"
    }, {
      id: "doj",
      header: "DOJ",
      dataIndex: "doj",
      width: 150,
      editable: true,
      editorType: "text"
    }, {
      id: "gender",
      header: "Gender",
      dataIndex: "gender",
      width: 100,
      align: "center"
    }];
    const handleRowUpdate = (updatedRow: Employee) => {
      setData(prev => prev.map(row => row.id === updatedRow.id ? updatedRow : row));
    };
    return <ListView items={data} columns={editableColumns} layout="table" onRowUpdate={handleRowUpdate} striped />;
  },
  parameters: {
    docs: {
      description: {
        story: "Inline editable rows. Double-click DOB or DOJ cells to edit. Press Enter to save, Escape to cancel."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Ve=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Re,Ae,Pe;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    items: tripData,
    columns: tripColumns,
    layout: "table",
    selectionMode: "none",
    striped: true,
    showRowDividers: true
  },
  parameters: {
    docs: {
      description: {
        story: "List with status badges showing trip data with Online/Delayed indicators."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Pe=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var qe,Me,Ee;F.parameters={...F.parameters,docs:{...(qe=F.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    items: LARGE_EMPLOYEE_DATA,
    columns: employeeColumns,
    layout: "table",
    height: "400px",
    stickyHeader: true,
    striped: true
  },
  parameters: {
    a11y: {
      disable: true
    },
    docs: {
      description: {
        story: "Large dataset with fixed height and vertical scrolling. Header stays fixed on scroll."
      },
      source: {
        type: "code",
        state: "closed"
      }
    }
  }
}`,...(Ee=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var Ke,Be,$e;O.parameters={...O.parameters,docs:{...(Ke=O.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    items: LARGE_EMPLOYEE_DATA.slice(0, 20),
    columns: employeeColumns,
    layout: "table",
    density: "compact",
    striped: true,
    height: "500px"
  },
  parameters: {
    docs: {
      description: {
        story: "Dense spacing mode showing more rows in less space, ideal for data-heavy interfaces."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...($e=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:$e.source}}};var Fe,Oe,He;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    const [items, setItems] = useState(employeeData);
    return <ListView items={items} columns={employeeColumns} layout="table" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={keys => setSelectedKeys(keys)} canShowToolbar toolSettings={{
      search: {
        allowSearch: true,
        searchKey: "name",
        searchPlaceholder: "Search Name"
      },
      actions: [{
        id: "approve",
        label: "Approve",
        icon: "check",
        variant: "primary",
        requiresSelection: true,
        onClick: rows => alert(\`Approved \${rows.length} employees\`)
      }, {
        id: "delete",
        label: "Delete",
        icon: "trash",
        variant: "danger",
        requiresSelection: true,
        onClick: rows => {
          if (confirm(\`Delete \${rows.length} employees?\`)) {
            const rowIds = rows.map(r => r.id);
            setItems(prev => prev.filter(item => !rowIds.includes(item.id)));
            setSelectedKeys([]);
          }
        }
      }],
      canShowToggle: true,
      showRefresh: true,
      showFilter: true,
      showExport: true
    }} striped />;
  },
  parameters: {
    a11y: {
      disable: true
    },
    docs: {
      description: {
        story: "Full-featured toolbar with search, action buttons, layout toggle, and utility icons."
      },
      source: {
        type: "code",
        state: "closed"
      }
    }
  }
}`,...(He=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var Ge,Je,We;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    return <div>\r
        <ListView items={employeeData} columns={employeeColumns} layout="table" selectionMode="single" selectedKeys={selectedKeys} onSelectionChange={(keys, rows) => {
        setSelectedKeys(keys);
        console.log("Selected:", rows);
      }} striped />\r
        <div style={{
        marginTop: 16,
        padding: 16,
        backgroundColor: "var(--color-background)",
        borderRadius: "var(--radius-md)"
      }}>\r
          Selected ID: {selectedKeys[0] || "None"}\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Single selection mode - only one row can be selected at a time."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(We=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:We.source}}};var Ye,Ue,Xe;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    return <div>\r
        <ListView items={employeeData} columns={employeeColumns} layout="table" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={(keys, rows) => {
        setSelectedKeys(keys);
        console.log("Selected:", rows);
      }} striped />\r
        <div style={{
        marginTop: 16,
        padding: 16,
        backgroundColor: "var(--color-background)",
        borderRadius: "var(--radius-md)"
      }}>\r
          Selected: {selectedKeys.length} row(s) - IDs: [{selectedKeys.join(", ")}]\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple selection mode with header checkbox for select-all functionality."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Xe=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Qe,Ze,et;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    items: contactData,
    columns: contactColumns,
    layout: "horizontal",
    selectionMode: "multiple",
    hoverableRows: true
  },
  parameters: {
    docs: {
      description: {
        story: "Horizontal card layout ideal for contact lists and compact data display."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(et=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;Y.parameters={...Y.parameters,docs:{...(tt=Y.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    items: employeeData,
    columns: employeeColumns,
    layout: "cards",
    selectionMode: "multiple",
    hoverableRows: true
  },
  parameters: {
    docs: {
      description: {
        story: "Card grid layout for responsive, visual data presentation."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(at=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var rt,st,ot;U.parameters={...U.parameters,docs:{...(rt=U.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => {
    return <ListView items={employeeData} columns={employeeColumns} layout="cards" selectionMode="multiple" defaultRowTemplate={(row: Employee) => <div style={{
      padding: 8
    }}>\r
            <h3 style={{
        margin: "0 0 8px 0",
        color: "var(--color-primary-600)"
      }}>{row.name}</h3>\r
            <p style={{
        margin: "4px 0",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>\r
              <strong>Department:</strong> {row.dept}\r
            </p>\r
            <p style={{
        margin: "4px 0",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>\r
              <strong>DOB:</strong> {row.dob} | <strong>DOJ:</strong> {row.doj}\r
            </p>\r
            <div style={{
        marginTop: 8
      }}>\r
              <Badge content={row.gender === "M" ? "Male" : "Female"} variant="soft" size="small" />\r
            </div>\r
          </div>} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Custom row template with rich content using the defaultRowTemplate prop."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ot=(st=U.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,lt,dt;X.parameters={...X.parameters,docs:{...(it=X.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    items: productData,
    columns: productColumns,
    layout: "table",
    selectionMode: "multiple",
    striped: true,
    canShowToolbar: true,
    toolSettings: {
      search: {
        allowSearch: true,
        searchKey: "product",
        searchPlaceholder: "Search products..."
      },
      actions: [{
        id: "addToCart",
        label: "Add to Cart",
        icon: "shopping-cart",
        variant: "primary",
        requiresSelection: true
      }],
      canShowToggle: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: "E-commerce product list with ID, brand, category, price, rating, and stock information."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(dt=(lt=X.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ct,mt,pt;Q.parameters={...Q.parameters,docs:{...(ct=Q.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => {
    const fullDataset = LARGE_EMPLOYEE_DATA;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    // Simulate server-side pagination
    const startIndex = (currentPage - 1) * pageSize;
    const currentItems = fullDataset.slice(startIndex, startIndex + pageSize);
    return <div>\r
        <ListView items={currentItems} columns={employeeColumns} layout="table" selectionMode="multiple" striped pageSettings={{
        pageSize,
        currentPage,
        total: fullDataset.length,
        onPageChange: page => setCurrentPage(page),
        showTotal: true
      }} />\r
      </div>;
  },
  parameters: {
    a11y: {
      disable: true
    },
    docs: {
      description: {
        story: "Server-side pagination with controlled page state, simulating API-driven data loading."
      },
      source: {
        type: "code",
        state: "closed"
      }
    }
  }
}`,...(pt=(mt=Q.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ut,ht,yt;Z.parameters={...Z.parameters,docs:{...(ut=Z.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    items: [],
    columns: employeeColumns,
    layout: "table",
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state with skeleton rows while data is being fetched."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(yt=(ht=Z.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};var gt,bt,ft;ee.parameters={...ee.parameters,docs:{...(gt=ee.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    items: [],
    columns: employeeColumns,
    layout: "table",
    emptyContent: <div style={{
      textAlign: "center",
      padding: "40px 0"
    }}>\r
        <Icon name="inbox" variant="regular" style={{
        fontSize: 48,
        color: "var(--color-text-tertiary)",
        marginBottom: 16
      }} />\r
        <h3 style={{
        margin: "0 0 8px 0",
        color: "var(--color-text-secondary)"
      }}>No Data Found</h3>\r
        <p style={{
        margin: 0,
        color: "var(--color-text-tertiary)"
      }}>There are no items to display</p>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: "Custom empty state with icon and messaging when no data is available."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ft=(bt=ee.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var vt,wt,xt;te.parameters={...te.parameters,docs:{...(vt=te.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>\r
      <div>\r
        <h3 style={{
        marginBottom: 12
      }}>Compact</h3>\r
        <ListView items={employeeData.slice(0, 3)} columns={employeeColumns} layout="table" density="compact" />\r
      </div>\r
      <div>\r
        <h3 style={{
        marginBottom: 12
      }}>Comfortable (Default)</h3>\r
        <ListView items={employeeData.slice(0, 3)} columns={employeeColumns} layout="table" density="comfortable" />\r
      </div>\r
      <div>\r
        <h3 style={{
        marginBottom: 12
      }}>Spacious</h3>\r
        <ListView items={employeeData.slice(0, 3)} columns={employeeColumns} layout="table" density="spacious" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three density modes: compact, comfortable, and spacious."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(xt=(wt=te.parameters)==null?void 0:wt.docs)==null?void 0:xt.source}}};const la=["BasicTable","EditableRows","StatusList","LargeScrollableList","CompactList","WithToolbarAndActions","SingleSelect","MultiSelect","HorizontalCardLayout","CardsLayout","CustomRowTemplate","ProductListExample","ServerSidePaging","LoadingState","EmptyState","DensityComparison"];export{K as BasicTable,Y as CardsLayout,O as CompactList,U as CustomRowTemplate,te as DensityComparison,B as EditableRows,ee as EmptyState,W as HorizontalCardLayout,F as LargeScrollableList,Z as LoadingState,J as MultiSelect,X as ProductListExample,Q as ServerSidePaging,G as SingleSelect,$ as StatusList,H as WithToolbarAndActions,la as __namedExportsOrder,ia as default};
