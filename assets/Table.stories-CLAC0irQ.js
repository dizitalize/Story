import{j as t}from"./jsx-runtime-DF2Pcvd1.js";import{r as q}from"./index-B2-qRKKC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const xe="_tableContainer_rt1zy_266",De="_caption_rt1zy_274",Se="_responsiveWrapper_rt1zy_283",Ne="_table_rt1zy_266",ke="_bordered_rt1zy_312",qe="_compact_rt1zy_326",ze="_responsive_rt1zy_283",$e="_headerRow_rt1zy_334",Ve="_tableCell_rt1zy_350",je="_headerCell_rt1zy_358",Ae="_dataCell_rt1zy_366",Pe="_alignLeft_rt1zy_371",Ie="_alignCenter_rt1zy_374",He="_alignRight_rt1zy_377",Be="_tableRow_rt1zy_381",Ee="_striped_rt1zy_385",We="_hoverable_rt1zy_391",Ue="_highlighted_rt1zy_400",Le="_emptyState_rt1zy_416",Fe="_earningsTable_rt1zy_428",Me="_earningsTable__totalRow_rt1zy_438",n={"dark-mode":"_dark-mode_rt1zy_245",tableContainer:xe,caption:De,responsiveWrapper:Se,table:Ne,bordered:ke,compact:qe,responsive:ze,headerRow:$e,tableCell:Ve,headerCell:je,dataCell:Ae,alignLeft:Pe,alignCenter:Ie,alignRight:He,tableRow:Be,striped:Ee,hoverable:We,highlighted:Ue,emptyState:Le,earningsTable:Fe,earningsTable__totalRow:Me},S=q.forwardRef(({value:e,column:a,isHeader:o=!1,render:r,className:u="",...l},m)=>{const b=o?"th":"td",d=a.align?n[`align${a.align.charAt(0).toUpperCase()+a.align.slice(1)}`]:"";return t.jsx(b,{ref:m,className:`${n.tableCell} ${o?n.headerCell:n.dataCell} ${d} ${u}`,style:{width:a.width},...l,children:r?r(e):e})});S.displayName="TableCell";const z=q.forwardRef(({data:e,columns:a,striped:o=!1,hoverable:r=!1,highlighted:u=!1,renderCell:l,className:m="",...b},d)=>t.jsx("tr",{ref:d,className:`${n.tableRow} ${o?n.striped:""} ${r?n.hoverable:""} ${u?n.highlighted:""} ${m}`,...b,children:a.map(c=>t.jsx(S,{value:e[c.id],column:c,isHeader:!1,render:l?N=>l(N,c.id,e):void 0},c.id))}));z.displayName="TableRow";const $=q.forwardRef(({id:e,columns:a,data:o,caption:r="Table",hideCaption:u=!1,striped:l=!1,bordered:m=!1,hoverable:b=!1,responsive:d=!1,compact:c=!1,highlightedRows:N=[],renderCell:fe,onRowClick:k,showRowNumbers:V=!1,visibility:we=!0,className:ve="",...Ce},_e)=>{if(!we)return null;const j=V?[{id:"__rowNumber__",label:"#",width:"50px",align:"center"},...a]:a,Re=`${n.table} ${m?n.bordered:""} ${c?n.compact:""} ${d?n.responsive:""} ${ve}`;return t.jsxs("div",{className:n.tableContainer,children:[!u&&t.jsx("h2",{className:n.caption,children:r}),t.jsx("div",{className:d?n.responsiveWrapper:"",children:t.jsxs("table",{ref:_e,id:e,className:Re,...Ce,children:[t.jsx("thead",{children:t.jsx("tr",{className:n.headerRow,children:j.map(s=>t.jsx(S,{value:s.label,column:s,isHeader:!0},s.id))})}),t.jsx("tbody",{children:o.map((s,A)=>{const Te=V?{...s,__rowNumber__:A+1}:s;return t.jsx(z,{data:Te,columns:j,striped:l&&A%2===1,hoverable:b,highlighted:N.includes(s.id),renderCell:fe,onClick:()=>k==null?void 0:k(s)},s.id)})})]})}),o.length===0&&t.jsx("div",{className:n.emptyState,children:t.jsx("p",{children:"No data available"})})]})});$.displayName="Table";S.__docgenInfo={description:`TableCell Component
Individual table cell`,methods:[],displayName:"TableCell",props:{value:{required:!0,tsType:{name:"any"},description:"Cell value/content"},column:{required:!0,tsType:{name:"TableColumn"},description:"Column configuration"},isHeader:{required:!1,tsType:{name:"boolean"},description:"Is this a header cell",defaultValue:{value:"false",computed:!1}},render:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"ReactNode"}}},description:"Custom renderer"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};z.__docgenInfo={description:`TableRow Component
Individual table row`,methods:[],displayName:"TableRow",props:{data:{required:!0,tsType:{name:"TableRowData"},description:"Row data"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Columns configuration"},striped:{required:!1,tsType:{name:"boolean"},description:"Whether row is striped (alternating background)",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether row is hoverable",defaultValue:{value:"false",computed:!1}},highlighted:{required:!1,tsType:{name:"boolean"},description:"Whether row is highlighted/selected",defaultValue:{value:"false",computed:!1}},renderCell:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any, columnId: string, rowData: TableRowData) => ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"},{type:{name:"string"},name:"columnId"},{type:{name:"TableRowData"},name:"rowData"}],return:{name:"ReactNode"}}},description:"Custom cell renderer function"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};$.__docgenInfo={description:`Table Component
Flexible table component with support for various styling and layout options`,methods:[],displayName:"Table",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the table"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Columns configuration"},data:{required:!0,tsType:{name:"Array",elements:[{name:"TableRowData"}],raw:"TableRowData[]"},description:"Table row data"},caption:{required:!1,tsType:{name:"string"},description:"Caption for the table",defaultValue:{value:"'Table'",computed:!1}},hideCaption:{required:!1,tsType:{name:"boolean"},description:"Hide the caption text",defaultValue:{value:"false",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"Show striped rows (alternating background colors)",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Show row borders",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Highlight rows on hover",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"Make table responsive with horizontal scroll on small screens",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"Compact table style with reduced padding",defaultValue:{value:"false",computed:!1}},highlightedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Highlight specific row ids",defaultValue:{value:"[]",computed:!1}},renderCell:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any, columnId: string, rowData: TableRowData) => ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"},{type:{name:"string"},name:"columnId"},{type:{name:"TableRowData"},name:"rowData"}],return:{name:"ReactNode"}}},description:"Custom cell renderer function"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(rowData: TableRowData) => void",signature:{arguments:[{type:{name:"TableRowData"},name:"rowData"}],return:{name:"void"}}},description:"Callback when row is clicked"},showRowNumbers:{required:!1,tsType:{name:"boolean"},description:"Show row numbers",defaultValue:{value:"false",computed:!1}},visibility:{required:!1,tsType:{name:"boolean"},description:"Initial visibility state",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const oa={title:"DataDisplay/Table",component:$,tags:["autodocs"],parameters:{docs:{description:{component:"Flexible table component supporting striped rows, hover states, row numbering, responsive layout, compact mode, custom cell rendering, and empty state handling."}}},argTypes:{striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},responsive:{control:"boolean"},compact:{control:"boolean"},showRowNumbers:{control:"boolean"},hideCaption:{control:"boolean"},visibility:{control:"boolean"}}},i=[{id:"name",label:"Name"},{id:"role",label:"Role"},{id:"department",label:"Department"},{id:"location",label:"Location"}],p=[{id:"1",name:"Alice",role:"Engineer",department:"Platform",location:"NY"},{id:"2",name:"Bob",role:"Designer",department:"UX",location:"Remote"},{id:"3",name:"Carol",role:"QA",department:"Quality",location:"SF"},{id:"4",name:"Dan",role:"PM",department:"Product",location:"Remote"}],g={args:{id:"table-basic",columns:i,data:p,caption:"Team Members",striped:!1,bordered:!1,hoverable:!1,responsive:!1},parameters:{docs:{description:{story:"Basic table with default styling."},source:{type:"code",state:"open"}}}},h={args:{id:"table-striped-hover",columns:i,data:p,caption:"Striped & Hoverable",striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Striped rows with hover highlight for better scanability."},source:{type:"code",state:"open"}}}},y={args:{id:"table-bordered-compact",columns:i,data:p,caption:"Bordered & Compact",bordered:!0,compact:!0,striped:!0},parameters:{docs:{description:{story:"Bordered table in compact density showing reduced padding and clear cell separation."},source:{type:"code",state:"open"}}}},Qe=[{id:"name",label:"Name",width:"140px"},{id:"role",label:"Role",width:"140px"},{id:"department",label:"Department",width:"160px"},{id:"location",label:"Location",width:"140px"},{id:"status",label:"Status",width:"120px"},{id:"tenure",label:"Tenure",width:"120px"}],Xe=[{id:"1",name:"Alice",role:"Engineer",department:"Platform",location:"NY",status:"Active",tenure:"3 yrs"},{id:"2",name:"Bob",role:"Designer",department:"UX",location:"Remote",status:"Active",tenure:"1 yr"},{id:"3",name:"Carol",role:"QA",department:"Quality",location:"SF",status:"Inactive",tenure:"5 yrs"}],f={args:{id:"table-responsive",columns:Qe,data:Xe,caption:"Responsive Table",responsive:!0,striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Responsive mode adds horizontal scroll when width exceeds container."},source:{type:"code",state:"open"}}}},w={args:{id:"table-row-numbers",columns:i,data:p,caption:"Row Numbers & Highlight",showRowNumbers:!0,striped:!0,hoverable:!0,highlightedRows:["2"]},parameters:{docs:{description:{story:"Displays automatic row numbering and highlights a specific row."},source:{type:"code",state:"open"}}}},Je=[{id:"product",label:"Product"},{id:"price",label:"Price",align:"right"},{id:"stock",label:"Stock",align:"center"}],Ye=[{id:"1",product:"MacBook Pro",price:2499,stock:45},{id:"2",product:"iPhone 14",price:999,stock:120},{id:"3",product:"Surface Pro",price:1299,stock:67}],v={args:{id:"table-custom-cell",columns:Je,data:Ye,caption:"Custom Cell Rendering",striped:!0,renderCell:(e,a)=>a==="price"?`$${e.toLocaleString()}`:a==="stock"?t.jsx("span",{style:{color:e<50?"var(--color-error-600)":"var(--color-success-600)"},children:e}):e},parameters:{docs:{description:{story:"Uses renderCell to format numeric values and apply conditional styling."},source:{type:"code",state:"open"}}}},C={args:{id:"table-empty",columns:i,data:[],caption:"Empty State",striped:!1},parameters:{docs:{description:{story:"Displays built-in empty state when no data rows are provided."},source:{type:"code",state:"open"}}}},Oe=[{id:"product",label:"Product",align:"left"},{id:"quantity",label:"Quantity",align:"center"},{id:"unitPrice",label:"Unit Price",align:"right"},{id:"total",label:"Total",align:"right"}],Ge=[{id:"1",product:"Widget A",quantity:100,unitPrice:9.99,total:999},{id:"2",product:"Widget B",quantity:50,unitPrice:19.99,total:999.5},{id:"3",product:"Widget C",quantity:25,unitPrice:39.99,total:999.75}],_={args:{id:"table-alignment",columns:Oe,data:Ge,caption:"Column Alignment",bordered:!0,striped:!0,renderCell:(e,a)=>a==="unitPrice"||a==="total"?`$${e.toFixed(2)}`:e},parameters:{docs:{description:{story:"Demonstrates left, center, and right alignment for different column types."},source:{type:"code",state:"open"}}}},R={args:{id:"table-clickable",columns:i,data:p,caption:"Clickable Rows",hoverable:!0,striped:!0,onRowClick:e=>{alert(`Clicked row: ${e.name}`)}},parameters:{docs:{description:{story:"Rows respond to click events via onRowClick handler."},source:{type:"code",state:"open"}}}},Ke=[{id:"name",label:"Name ↕",sortable:!0},{id:"score",label:"Score ↕",sortable:!0,align:"right"},{id:"date",label:"Date",align:"center"}],Ze=[{id:"1",name:"Alice",score:95,date:"2024-11-20"},{id:"2",name:"Bob",score:88,date:"2024-11-21"},{id:"3",name:"Carol",score:92,date:"2024-11-19"},{id:"4",name:"Dan",score:90,date:"2024-11-22"}],T={args:{id:"table-sortable",columns:Ke,data:Ze,caption:"Sortable Columns (Visual Demo)",striped:!0,hoverable:!0,bordered:!0},parameters:{docs:{description:{story:"Visual demonstration of sortable column headers. (Sorting logic would be handled by parent component state.)"},source:{type:"code",state:"open"}}}},ea=[{id:"user",label:"User",width:"200px"},{id:"status",label:"Status",align:"center",width:"120px"},{id:"actions",label:"Actions",align:"center",width:"150px"}],aa=[{id:"1",user:"alice@example.com",status:"active",actions:"edit"},{id:"2",user:"bob@example.com",status:"pending",actions:"edit"},{id:"3",user:"carol@example.com",status:"inactive",actions:"edit"}],x={args:{id:"table-rich",columns:ea,data:aa,caption:"Rich Content with JSX",striped:!0,hoverable:!0,renderCell:(e,a,o)=>{if(a==="status"){const r={active:"var(--color-success-600, #10b981)",pending:"var(--color-warning-600, #f59e0b)",inactive:"var(--color-neutral-400, #9ca3af)"};return t.jsx("span",{style:{display:"inline-block",padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:600,background:r[e]||"#ccc",color:"white"},children:e})}return a==="actions"?t.jsx("button",{style:{padding:"6px 12px",fontSize:"12px",borderRadius:"6px",border:"1px solid var(--color-neutral-300)",background:"var(--color-neutral-50)",cursor:"pointer"},onClick:r=>{r.stopPropagation(),alert(`Edit ${o.user}`)},children:"Edit"}):e}},parameters:{docs:{description:{story:"Custom cell rendering with badges and action buttons."},source:{type:"code",state:"open"}}}},D={args:{id:"table-hidden-caption",columns:i,data:p,caption:"Hidden Caption",hideCaption:!0,bordered:!0,striped:!0},parameters:{docs:{description:{story:"Table with caption hidden for a cleaner look."},source:{type:"code",state:"open"}}}};var P,I,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "table-basic",
    columns: basicColumns,
    data: basicData,
    caption: "Team Members",
    striped: false,
    bordered: false,
    hoverable: false,
    responsive: false
  },
  parameters: {
    docs: {
      description: {
        story: "Basic table with default styling."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var B,E,W;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "table-striped-hover",
    columns: basicColumns,
    data: basicData,
    caption: "Striped & Hoverable",
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Striped rows with hover highlight for better scanability."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(W=(E=h.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var U,L,F;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: "table-bordered-compact",
    columns: basicColumns,
    data: basicData,
    caption: "Bordered & Compact",
    bordered: true,
    compact: true,
    striped: true
  },
  parameters: {
    docs: {
      description: {
        story: "Bordered table in compact density showing reduced padding and clear cell separation."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(F=(L=y.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var M,Q,X;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "table-responsive",
    columns: wideColumns,
    data: wideData,
    caption: "Responsive Table",
    responsive: true,
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: "Responsive mode adds horizontal scroll when width exceeds container."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,Y,O;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: "table-row-numbers",
    columns: basicColumns,
    data: basicData,
    caption: "Row Numbers & Highlight",
    showRowNumbers: true,
    striped: true,
    hoverable: true,
    highlightedRows: ["2"]
  },
  parameters: {
    docs: {
      description: {
        story: "Displays automatic row numbering and highlights a specific row."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(O=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var G,K,Z;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: "table-custom-cell",
    columns: customColumns,
    data: customData,
    caption: "Custom Cell Rendering",
    striped: true,
    renderCell: (value, columnId) => {
      if (columnId === "price") {
        return \`$\${value.toLocaleString()}\`;
      }
      if (columnId === "stock") {
        return <span style={{
          color: value < 50 ? "var(--color-error-600)" : "var(--color-success-600)"
        }}>{value}</span>;
      }
      return value;
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Uses renderCell to format numeric values and apply conditional styling."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(Z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,ae,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    id: "table-empty",
    columns: basicColumns,
    data: [],
    caption: "Empty State",
    striped: false
  },
  parameters: {
    docs: {
      description: {
        story: "Displays built-in empty state when no data rows are provided."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,oe;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    id: "table-alignment",
    columns: alignedColumns,
    data: alignedData,
    caption: "Column Alignment",
    bordered: true,
    striped: true,
    renderCell: (value, columnId) => {
      if (columnId === "unitPrice" || columnId === "total") {
        return \`$\${value.toFixed(2)}\`;
      }
      return value;
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates left, center, and right alignment for different column types."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(oe=(re=_.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,le;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    id: "table-clickable",
    columns: basicColumns,
    data: basicData,
    caption: "Clickable Rows",
    hoverable: true,
    striped: true,
    onRowClick: rowData => {
      alert(\`Clicked row: \${rowData.name}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Rows respond to click events via onRowClick handler."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(le=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    id: "table-sortable",
    columns: sortableColumns,
    data: sortableData,
    caption: "Sortable Columns (Visual Demo)",
    striped: true,
    hoverable: true,
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: "Visual demonstration of sortable column headers. (Sorting logic would be handled by parent component state.)"
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(pe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,be;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    id: "table-rich",
    columns: richColumns,
    data: richData,
    caption: "Rich Content with JSX",
    striped: true,
    hoverable: true,
    renderCell: (value, columnId, rowData) => {
      if (columnId === "status") {
        const statusColors: Record<string, string> = {
          active: "var(--color-success-600, #10b981)",
          pending: "var(--color-warning-600, #f59e0b)",
          inactive: "var(--color-neutral-400, #9ca3af)"
        };
        return <span style={{
          display: "inline-block",
          padding: "4px 12px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 600,
          background: statusColors[value] || "#ccc",
          color: "white"
        }}>\r
            {value}\r
          </span>;
      }
      if (columnId === "actions") {
        return <button style={{
          padding: "6px 12px",
          fontSize: "12px",
          borderRadius: "6px",
          border: "1px solid var(--color-neutral-300)",
          background: "var(--color-neutral-50)",
          cursor: "pointer"
        }} onClick={e => {
          e.stopPropagation();
          alert(\`Edit \${rowData.user}\`);
        }}>\r
            Edit\r
          </button>;
      }
      return value;
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Custom cell rendering with badges and action buttons."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(be=(me=x.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ge,he,ye;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    id: "table-hidden-caption",
    columns: basicColumns,
    data: basicData,
    caption: "Hidden Caption",
    hideCaption: true,
    bordered: true,
    striped: true
  },
  parameters: {
    docs: {
      description: {
        story: "Table with caption hidden for a cleaner look."
      },
      source: {
        type: "code",
        state: "open"
      }
    }
  }
}`,...(ye=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const sa=["Basic","StripedHoverable","BorderedCompact","Responsive","RowNumbersAndHighlight","CustomCellRendering","EmptyState","ColumnAlignment","ClickableRows","SortableColumns","RichContent","HiddenCaption"];export{g as Basic,y as BorderedCompact,R as ClickableRows,_ as ColumnAlignment,v as CustomCellRendering,C as EmptyState,D as HiddenCaption,f as Responsive,x as RichContent,w as RowNumbersAndHighlight,T as SortableColumns,h as StripedHoverable,sa as __namedExportsOrder,oa as default};
