import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{f as Ze}from"./index-1e4jrA0o.js";import{r as P}from"./index-BgCQ941z.js";import{c as N}from"./cn-BEHD0UYf.js";import{C as je}from"./checkbox-Cwc5397B.js";import{a as et,P as tt,b as Le,c as nt,e as ot}from"./pagination-DJT6yGrl.js";import{a as at,b as rt,c as Ce,d as st,T as it,e as Ae}from"./table-fdsJhJ47.js";import{c as Ge}from"./createLucideIcon-BROHhCyT.js";import{a as lt,b as ut,c as dt,S as ct,d as gt}from"./select-BWl0jssQ.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-BMvmY0JD.js";import"./index-B9tD0Hfr.js";import"./index-RJnmdD4_.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./check-DLjw-kwL.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";import"./index-BdQq_4o_.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-DYKZN-PH.js";import"./index-Bxcmxnpx.js";import"./chevron-down-DX_dkZyb.js";import"./chevron-up-CCoYB0VF.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],pt=Ge("inbox",mt);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ht=Ge("loader-circle",ft);/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function A(e,o){return typeof e=="function"?e(o):e}function F(e,o){return t=>{o.setState(n=>({...n,[e]:A(t,n[e])}))}}function he(e){return e instanceof Function}function wt(e){return Array.isArray(e)&&e.every(o=>typeof o=="number")}function St(e,o){const t=[],n=a=>{a.forEach(r=>{t.push(r);const s=o(r);s!=null&&s.length&&n(s)})};return n(e),t}function w(e,o,t){let n=[],a;return r=>{let s;t.key&&t.debug&&(s=Date.now());const i=e(r);if(!(i.length!==n.length||i.some((m,p)=>n[p]!==m)))return a;n=i;let c;if(t.key&&t.debug&&(c=Date.now()),a=o(...i),t==null||t.onChange==null||t.onChange(a),t.key&&t.debug&&t!=null&&t.debug()){const m=Math.round((Date.now()-s)*100)/100,p=Math.round((Date.now()-c)*100)/100,g=p/16,u=(f,h)=>{for(f=String(f);f.length<h;)f=" "+f;return f};console.info(`%c⏱ ${u(p,5)} /${u(m,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*g,120))}deg 100% 31%);`,t?.key)}return a}}function S(e,o,t,n){return{debug:()=>{var a;return(a=e?.debugAll)!=null?a:e[o]},key:!1,onChange:n}}function Ct(e,o,t,n){const a=()=>{var s;return(s=r.getValue())!=null?s:e.options.renderFallbackValue},r={id:`${o.id}_${t.id}`,row:o,column:t,getValue:()=>o.getValue(n),renderValue:a,getContext:w(()=>[e,t,o,r],(s,i,l,c)=>({table:s,column:i,row:l,cell:c,getValue:c.getValue,renderValue:c.renderValue}),S(e.options,"debugCells"))};return e._features.forEach(s=>{s.createCell==null||s.createCell(r,t,o,e)},{}),r}function vt(e,o,t,n){var a,r;const i={...e._getDefaultColumnDef(),...o},l=i.accessorKey;let c=(a=(r=i.id)!=null?r:l?typeof String.prototype.replaceAll=="function"?l.replaceAll(".","_"):l.replace(/\./g,"_"):void 0)!=null?a:typeof i.header=="string"?i.header:void 0,m;if(i.accessorFn?m=i.accessorFn:l&&(l.includes(".")?m=g=>{let u=g;for(const h of l.split(".")){var f;u=(f=u)==null?void 0:f[h]}return u}:m=g=>g[i.accessorKey]),!c)throw new Error;let p={id:`${String(c)}`,accessorFn:m,parent:n,depth:t,columnDef:i,columns:[],getFlatColumns:w(()=>[!0],()=>{var g;return[p,...(g=p.columns)==null?void 0:g.flatMap(u=>u.getFlatColumns())]},S(e.options,"debugColumns")),getLeafColumns:w(()=>[e._getOrderColumnsFn()],g=>{var u;if((u=p.columns)!=null&&u.length){let f=p.columns.flatMap(h=>h.getLeafColumns());return g(f)}return[p]},S(e.options,"debugColumns"))};for(const g of e._features)g.createColumn==null||g.createColumn(p,e);return p}const _="debugHeaders";function ke(e,o,t){var n;let r={id:(n=t.id)!=null?n:o.id,column:o,index:t.index,isPlaceholder:!!t.isPlaceholder,placeholderId:t.placeholderId,depth:t.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const s=[],i=l=>{l.subHeaders&&l.subHeaders.length&&l.subHeaders.map(i),s.push(l)};return i(r),s},getContext:()=>({table:e,header:r,column:o})};return e._features.forEach(s=>{s.createHeader==null||s.createHeader(r,e)}),r}const xt={createTable:e=>{e.getHeaderGroups=w(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(o,t,n,a)=>{var r,s;const i=(r=n?.map(p=>t.find(g=>g.id===p)).filter(Boolean))!=null?r:[],l=(s=a?.map(p=>t.find(g=>g.id===p)).filter(Boolean))!=null?s:[],c=t.filter(p=>!(n!=null&&n.includes(p.id))&&!(a!=null&&a.includes(p.id)));return W(o,[...i,...c,...l],e)},S(e.options,_)),e.getCenterHeaderGroups=w(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(o,t,n,a)=>(t=t.filter(r=>!(n!=null&&n.includes(r.id))&&!(a!=null&&a.includes(r.id))),W(o,t,e,"center")),S(e.options,_)),e.getLeftHeaderGroups=w(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(o,t,n)=>{var a;const r=(a=n?.map(s=>t.find(i=>i.id===s)).filter(Boolean))!=null?a:[];return W(o,r,e,"left")},S(e.options,_)),e.getRightHeaderGroups=w(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(o,t,n)=>{var a;const r=(a=n?.map(s=>t.find(i=>i.id===s)).filter(Boolean))!=null?a:[];return W(o,r,e,"right")},S(e.options,_)),e.getFooterGroups=w(()=>[e.getHeaderGroups()],o=>[...o].reverse(),S(e.options,_)),e.getLeftFooterGroups=w(()=>[e.getLeftHeaderGroups()],o=>[...o].reverse(),S(e.options,_)),e.getCenterFooterGroups=w(()=>[e.getCenterHeaderGroups()],o=>[...o].reverse(),S(e.options,_)),e.getRightFooterGroups=w(()=>[e.getRightHeaderGroups()],o=>[...o].reverse(),S(e.options,_)),e.getFlatHeaders=w(()=>[e.getHeaderGroups()],o=>o.map(t=>t.headers).flat(),S(e.options,_)),e.getLeftFlatHeaders=w(()=>[e.getLeftHeaderGroups()],o=>o.map(t=>t.headers).flat(),S(e.options,_)),e.getCenterFlatHeaders=w(()=>[e.getCenterHeaderGroups()],o=>o.map(t=>t.headers).flat(),S(e.options,_)),e.getRightFlatHeaders=w(()=>[e.getRightHeaderGroups()],o=>o.map(t=>t.headers).flat(),S(e.options,_)),e.getCenterLeafHeaders=w(()=>[e.getCenterFlatHeaders()],o=>o.filter(t=>{var n;return!((n=t.subHeaders)!=null&&n.length)}),S(e.options,_)),e.getLeftLeafHeaders=w(()=>[e.getLeftFlatHeaders()],o=>o.filter(t=>{var n;return!((n=t.subHeaders)!=null&&n.length)}),S(e.options,_)),e.getRightLeafHeaders=w(()=>[e.getRightFlatHeaders()],o=>o.filter(t=>{var n;return!((n=t.subHeaders)!=null&&n.length)}),S(e.options,_)),e.getLeafHeaders=w(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(o,t,n)=>{var a,r,s,i,l,c;return[...(a=(r=o[0])==null?void 0:r.headers)!=null?a:[],...(s=(i=t[0])==null?void 0:i.headers)!=null?s:[],...(l=(c=n[0])==null?void 0:c.headers)!=null?l:[]].map(m=>m.getLeafHeaders()).flat()},S(e.options,_))}};function W(e,o,t,n){var a,r;let s=0;const i=function(g,u){u===void 0&&(u=1),s=Math.max(s,u),g.filter(f=>f.getIsVisible()).forEach(f=>{var h;(h=f.columns)!=null&&h.length&&i(f.columns,u+1)},0)};i(e);let l=[];const c=(g,u)=>{const f={depth:u,id:[n,`${u}`].filter(Boolean).join("_"),headers:[]},h=[];g.forEach(x=>{const C=[...h].reverse()[0],b=x.column.depth===f.depth;let y,V=!1;if(b&&x.column.parent?y=x.column.parent:(y=x.column,V=!0),C&&C?.column===y)C.subHeaders.push(x);else{const z=ke(t,y,{id:[n,u,y.id,x?.id].filter(Boolean).join("_"),isPlaceholder:V,placeholderId:V?`${h.filter(E=>E.column===y).length}`:void 0,depth:u,index:h.length});z.subHeaders.push(x),h.push(z)}f.headers.push(x),x.headerGroup=f}),l.push(f),u>0&&c(h,u-1)},m=o.map((g,u)=>ke(t,g,{depth:s,index:u}));c(m,s-1),l.reverse();const p=g=>g.filter(f=>f.column.getIsVisible()).map(f=>{let h=0,x=0,C=[0];f.subHeaders&&f.subHeaders.length?(C=[],p(f.subHeaders).forEach(y=>{let{colSpan:V,rowSpan:z}=y;h+=V,C.push(z)})):h=1;const b=Math.min(...C);return x=x+b,f.colSpan=h,f.rowSpan=x,{colSpan:h,rowSpan:x}});return p((a=(r=l[0])==null?void 0:r.headers)!=null?a:[]),l}const Rt=(e,o,t,n,a,r,s)=>{let i={id:o,index:n,original:t,depth:a,parentId:s,_valuesCache:{},_uniqueValuesCache:{},getValue:l=>{if(i._valuesCache.hasOwnProperty(l))return i._valuesCache[l];const c=e.getColumn(l);if(c!=null&&c.accessorFn)return i._valuesCache[l]=c.accessorFn(i.original,n),i._valuesCache[l]},getUniqueValues:l=>{if(i._uniqueValuesCache.hasOwnProperty(l))return i._uniqueValuesCache[l];const c=e.getColumn(l);if(c!=null&&c.accessorFn)return c.columnDef.getUniqueValues?(i._uniqueValuesCache[l]=c.columnDef.getUniqueValues(i.original,n),i._uniqueValuesCache[l]):(i._uniqueValuesCache[l]=[i.getValue(l)],i._uniqueValuesCache[l])},renderValue:l=>{var c;return(c=i.getValue(l))!=null?c:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>St(i.subRows,l=>l.subRows),getParentRow:()=>i.parentId?e.getRow(i.parentId,!0):void 0,getParentRows:()=>{let l=[],c=i;for(;;){const m=c.getParentRow();if(!m)break;l.push(m),c=m}return l.reverse()},getAllCells:w(()=>[e.getAllLeafColumns()],l=>l.map(c=>Ct(e,i,c,c.id)),S(e.options,"debugRows")),_getAllCellsByColumnId:w(()=>[i.getAllCells()],l=>l.reduce((c,m)=>(c[m.column.id]=m,c),{}),S(e.options,"debugRows"))};for(let l=0;l<e._features.length;l++){const c=e._features[l];c==null||c.createRow==null||c.createRow(i,e)}return i},yt={createColumn:(e,o)=>{e._getFacetedRowModel=o.options.getFacetedRowModel&&o.options.getFacetedRowModel(o,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():o.getPreFilteredRowModel(),e._getFacetedUniqueValues=o.options.getFacetedUniqueValues&&o.options.getFacetedUniqueValues(o,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=o.options.getFacetedMinMaxValues&&o.options.getFacetedMinMaxValues(o,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},Oe=(e,o,t)=>{var n,a;const r=t==null||(n=t.toString())==null?void 0:n.toLowerCase();return!!(!((a=e.getValue(o))==null||(a=a.toString())==null||(a=a.toLowerCase())==null)&&a.includes(r))};Oe.autoRemove=e=>D(e);const We=(e,o,t)=>{var n;return!!(!((n=e.getValue(o))==null||(n=n.toString())==null)&&n.includes(t))};We.autoRemove=e=>D(e);const Be=(e,o,t)=>{var n;return((n=e.getValue(o))==null||(n=n.toString())==null?void 0:n.toLowerCase())===t?.toLowerCase()};Be.autoRemove=e=>D(e);const qe=(e,o,t)=>{var n;return(n=e.getValue(o))==null?void 0:n.includes(t)};qe.autoRemove=e=>D(e);const Ke=(e,o,t)=>!t.some(n=>{var a;return!((a=e.getValue(o))!=null&&a.includes(n))});Ke.autoRemove=e=>D(e)||!(e!=null&&e.length);const Ue=(e,o,t)=>t.some(n=>{var a;return(a=e.getValue(o))==null?void 0:a.includes(n)});Ue.autoRemove=e=>D(e)||!(e!=null&&e.length);const Je=(e,o,t)=>e.getValue(o)===t;Je.autoRemove=e=>D(e);const Ye=(e,o,t)=>e.getValue(o)==t;Ye.autoRemove=e=>D(e);const De=(e,o,t)=>{let[n,a]=t;const r=e.getValue(o);return r>=n&&r<=a};De.resolveFilterValue=e=>{let[o,t]=e,n=typeof o!="number"?parseFloat(o):o,a=typeof t!="number"?parseFloat(t):t,r=o===null||Number.isNaN(n)?-1/0:n,s=t===null||Number.isNaN(a)?1/0:a;if(r>s){const i=r;r=s,s=i}return[r,s]};De.autoRemove=e=>D(e)||D(e[0])&&D(e[1]);const L={includesString:Oe,includesStringSensitive:We,equalsString:Be,arrIncludes:qe,arrIncludesAll:Ke,arrIncludesSome:Ue,equals:Je,weakEquals:Ye,inNumberRange:De};function D(e){return e==null||e===""}const Pt={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:F("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,o)=>{e.getAutoFilterFn=()=>{const t=o.getCoreRowModel().flatRows[0],n=t?.getValue(e.id);return typeof n=="string"?L.includesString:typeof n=="number"?L.inNumberRange:typeof n=="boolean"||n!==null&&typeof n=="object"?L.equals:Array.isArray(n)?L.arrIncludes:L.weakEquals},e.getFilterFn=()=>{var t,n;return he(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(t=(n=o.options.filterFns)==null?void 0:n[e.columnDef.filterFn])!=null?t:L[e.columnDef.filterFn]},e.getCanFilter=()=>{var t,n,a;return((t=e.columnDef.enableColumnFilter)!=null?t:!0)&&((n=o.options.enableColumnFilters)!=null?n:!0)&&((a=o.options.enableFilters)!=null?a:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var t;return(t=o.getState().columnFilters)==null||(t=t.find(n=>n.id===e.id))==null?void 0:t.value},e.getFilterIndex=()=>{var t,n;return(t=(n=o.getState().columnFilters)==null?void 0:n.findIndex(a=>a.id===e.id))!=null?t:-1},e.setFilterValue=t=>{o.setColumnFilters(n=>{const a=e.getFilterFn(),r=n?.find(m=>m.id===e.id),s=A(t,r?r.value:void 0);if(Te(a,s,e)){var i;return(i=n?.filter(m=>m.id!==e.id))!=null?i:[]}const l={id:e.id,value:s};if(r){var c;return(c=n?.map(m=>m.id===e.id?l:m))!=null?c:[]}return n!=null&&n.length?[...n,l]:[l]})}},createRow:(e,o)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=o=>{const t=e.getAllLeafColumns(),n=a=>{var r;return(r=A(o,a))==null?void 0:r.filter(s=>{const i=t.find(l=>l.id===s.id);if(i){const l=i.getFilterFn();if(Te(l,s.value,i))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(n)},e.resetColumnFilters=o=>{var t,n;e.setColumnFilters(o?[]:(t=(n=e.initialState)==null?void 0:n.columnFilters)!=null?t:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function Te(e,o,t){return(e&&e.autoRemove?e.autoRemove(o,t):!1)||typeof o>"u"||typeof o=="string"&&!o}const bt=(e,o,t)=>t.reduce((n,a)=>{const r=a.getValue(e);return n+(typeof r=="number"?r:0)},0),_t=(e,o,t)=>{let n;return t.forEach(a=>{const r=a.getValue(e);r!=null&&(n>r||n===void 0&&r>=r)&&(n=r)}),n},It=(e,o,t)=>{let n;return t.forEach(a=>{const r=a.getValue(e);r!=null&&(n<r||n===void 0&&r>=r)&&(n=r)}),n},Nt=(e,o,t)=>{let n,a;return t.forEach(r=>{const s=r.getValue(e);s!=null&&(n===void 0?s>=s&&(n=a=s):(n>s&&(n=s),a<s&&(a=s)))}),[n,a]},Ft=(e,o)=>{let t=0,n=0;if(o.forEach(a=>{let r=a.getValue(e);r!=null&&(r=+r)>=r&&(++t,n+=r)}),t)return n/t},$t=(e,o)=>{if(!o.length)return;const t=o.map(r=>r.getValue(e));if(!wt(t))return;if(t.length===1)return t[0];const n=Math.floor(t.length/2),a=t.sort((r,s)=>r-s);return t.length%2!==0?a[n]:(a[n-1]+a[n])/2},Mt=(e,o)=>Array.from(new Set(o.map(t=>t.getValue(e))).values()),Dt=(e,o)=>new Set(o.map(t=>t.getValue(e))).size,Vt=(e,o)=>o.length,ve={sum:bt,min:_t,max:It,extent:Nt,mean:Ft,median:$t,unique:Mt,uniqueCount:Dt,count:Vt},zt={getDefaultColumnDef:()=>({aggregatedCell:e=>{var o,t;return(o=(t=e.getValue())==null||t.toString==null?void 0:t.toString())!=null?o:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:F("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,o)=>{e.toggleGrouping=()=>{o.setGrouping(t=>t!=null&&t.includes(e.id)?t.filter(n=>n!==e.id):[...t??[],e.id])},e.getCanGroup=()=>{var t,n;return((t=e.columnDef.enableGrouping)!=null?t:!0)&&((n=o.options.enableGrouping)!=null?n:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var t;return(t=o.getState().grouping)==null?void 0:t.includes(e.id)},e.getGroupedIndex=()=>{var t;return(t=o.getState().grouping)==null?void 0:t.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const t=e.getCanGroup();return()=>{t&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const t=o.getCoreRowModel().flatRows[0],n=t?.getValue(e.id);if(typeof n=="number")return ve.sum;if(Object.prototype.toString.call(n)==="[object Date]")return ve.extent},e.getAggregationFn=()=>{var t,n;if(!e)throw new Error;return he(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(t=(n=o.options.aggregationFns)==null?void 0:n[e.columnDef.aggregationFn])!=null?t:ve[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=o=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(o),e.resetGrouping=o=>{var t,n;e.setGrouping(o?[]:(t=(n=e.initialState)==null?void 0:n.grouping)!=null?t:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,o)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=t=>{if(e._groupingValuesCache.hasOwnProperty(t))return e._groupingValuesCache[t];const n=o.getColumn(t);return n!=null&&n.columnDef.getGroupingValue?(e._groupingValuesCache[t]=n.columnDef.getGroupingValue(e.original),e._groupingValuesCache[t]):e.getValue(t)},e._groupingValuesCache={}},createCell:(e,o,t,n)=>{e.getIsGrouped=()=>o.getIsGrouped()&&o.id===t.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&o.getIsGrouped(),e.getIsAggregated=()=>{var a;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((a=t.subRows)!=null&&a.length)}}};function Et(e,o,t){if(!(o!=null&&o.length)||!t)return e;const n=e.filter(r=>!o.includes(r.id));return t==="remove"?n:[...o.map(r=>e.find(s=>s.id===r)).filter(Boolean),...n]}const jt={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:F("columnOrder",e)}),createColumn:(e,o)=>{e.getIndex=w(t=>[O(o,t)],t=>t.findIndex(n=>n.id===e.id),S(o.options,"debugColumns")),e.getIsFirstColumn=t=>{var n;return((n=O(o,t)[0])==null?void 0:n.id)===e.id},e.getIsLastColumn=t=>{var n;const a=O(o,t);return((n=a[a.length-1])==null?void 0:n.id)===e.id}},createTable:e=>{e.setColumnOrder=o=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(o),e.resetColumnOrder=o=>{var t;e.setColumnOrder(o?[]:(t=e.initialState.columnOrder)!=null?t:[])},e._getOrderColumnsFn=w(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(o,t,n)=>a=>{let r=[];if(!(o!=null&&o.length))r=a;else{const s=[...o],i=[...a];for(;i.length&&s.length;){const l=s.shift(),c=i.findIndex(m=>m.id===l);c>-1&&r.push(i.splice(c,1)[0])}r=[...r,...i]}return Et(r,t,n)},S(e.options,"debugTable"))}},xe=()=>({left:[],right:[]}),Lt={getInitialState:e=>({columnPinning:xe(),...e}),getDefaultOptions:e=>({onColumnPinningChange:F("columnPinning",e)}),createColumn:(e,o)=>{e.pin=t=>{const n=e.getLeafColumns().map(a=>a.id).filter(Boolean);o.setColumnPinning(a=>{var r,s;if(t==="right"){var i,l;return{left:((i=a?.left)!=null?i:[]).filter(p=>!(n!=null&&n.includes(p))),right:[...((l=a?.right)!=null?l:[]).filter(p=>!(n!=null&&n.includes(p))),...n]}}if(t==="left"){var c,m;return{left:[...((c=a?.left)!=null?c:[]).filter(p=>!(n!=null&&n.includes(p))),...n],right:((m=a?.right)!=null?m:[]).filter(p=>!(n!=null&&n.includes(p)))}}return{left:((r=a?.left)!=null?r:[]).filter(p=>!(n!=null&&n.includes(p))),right:((s=a?.right)!=null?s:[]).filter(p=>!(n!=null&&n.includes(p)))}})},e.getCanPin=()=>e.getLeafColumns().some(n=>{var a,r,s;return((a=n.columnDef.enablePinning)!=null?a:!0)&&((r=(s=o.options.enableColumnPinning)!=null?s:o.options.enablePinning)!=null?r:!0)}),e.getIsPinned=()=>{const t=e.getLeafColumns().map(i=>i.id),{left:n,right:a}=o.getState().columnPinning,r=t.some(i=>n?.includes(i)),s=t.some(i=>a?.includes(i));return r?"left":s?"right":!1},e.getPinnedIndex=()=>{var t,n;const a=e.getIsPinned();return a?(t=(n=o.getState().columnPinning)==null||(n=n[a])==null?void 0:n.indexOf(e.id))!=null?t:-1:0}},createRow:(e,o)=>{e.getCenterVisibleCells=w(()=>[e._getAllVisibleCells(),o.getState().columnPinning.left,o.getState().columnPinning.right],(t,n,a)=>{const r=[...n??[],...a??[]];return t.filter(s=>!r.includes(s.column.id))},S(o.options,"debugRows")),e.getLeftVisibleCells=w(()=>[e._getAllVisibleCells(),o.getState().columnPinning.left],(t,n)=>(n??[]).map(r=>t.find(s=>s.column.id===r)).filter(Boolean).map(r=>({...r,position:"left"})),S(o.options,"debugRows")),e.getRightVisibleCells=w(()=>[e._getAllVisibleCells(),o.getState().columnPinning.right],(t,n)=>(n??[]).map(r=>t.find(s=>s.column.id===r)).filter(Boolean).map(r=>({...r,position:"right"})),S(o.options,"debugRows"))},createTable:e=>{e.setColumnPinning=o=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(o),e.resetColumnPinning=o=>{var t,n;return e.setColumnPinning(o?xe():(t=(n=e.initialState)==null?void 0:n.columnPinning)!=null?t:xe())},e.getIsSomeColumnsPinned=o=>{var t;const n=e.getState().columnPinning;if(!o){var a,r;return!!((a=n.left)!=null&&a.length||(r=n.right)!=null&&r.length)}return!!((t=n[o])!=null&&t.length)},e.getLeftLeafColumns=w(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(o,t)=>(t??[]).map(n=>o.find(a=>a.id===n)).filter(Boolean),S(e.options,"debugColumns")),e.getRightLeafColumns=w(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(o,t)=>(t??[]).map(n=>o.find(a=>a.id===n)).filter(Boolean),S(e.options,"debugColumns")),e.getCenterLeafColumns=w(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(o,t,n)=>{const a=[...t??[],...n??[]];return o.filter(r=>!a.includes(r.id))},S(e.options,"debugColumns"))}};function At(e){return e||(typeof document<"u"?document:null)}const B={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},Re=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),kt={getDefaultColumnDef:()=>B,getInitialState:e=>({columnSizing:{},columnSizingInfo:Re(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:F("columnSizing",e),onColumnSizingInfoChange:F("columnSizingInfo",e)}),createColumn:(e,o)=>{e.getSize=()=>{var t,n,a;const r=o.getState().columnSizing[e.id];return Math.min(Math.max((t=e.columnDef.minSize)!=null?t:B.minSize,(n=r??e.columnDef.size)!=null?n:B.size),(a=e.columnDef.maxSize)!=null?a:B.maxSize)},e.getStart=w(t=>[t,O(o,t),o.getState().columnSizing],(t,n)=>n.slice(0,e.getIndex(t)).reduce((a,r)=>a+r.getSize(),0),S(o.options,"debugColumns")),e.getAfter=w(t=>[t,O(o,t),o.getState().columnSizing],(t,n)=>n.slice(e.getIndex(t)+1).reduce((a,r)=>a+r.getSize(),0),S(o.options,"debugColumns")),e.resetSize=()=>{o.setColumnSizing(t=>{let{[e.id]:n,...a}=t;return a})},e.getCanResize=()=>{var t,n;return((t=e.columnDef.enableResizing)!=null?t:!0)&&((n=o.options.enableColumnResizing)!=null?n:!0)},e.getIsResizing=()=>o.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,o)=>{e.getSize=()=>{let t=0;const n=a=>{if(a.subHeaders.length)a.subHeaders.forEach(n);else{var r;t+=(r=a.column.getSize())!=null?r:0}};return n(e),t},e.getStart=()=>{if(e.index>0){const t=e.headerGroup.headers[e.index-1];return t.getStart()+t.getSize()}return 0},e.getResizeHandler=t=>{const n=o.getColumn(e.column.id),a=n?.getCanResize();return r=>{if(!n||!a||(r.persist==null||r.persist(),ye(r)&&r.touches&&r.touches.length>1))return;const s=e.getSize(),i=e?e.getLeafHeaders().map(C=>[C.column.id,C.column.getSize()]):[[n.id,n.getSize()]],l=ye(r)?Math.round(r.touches[0].clientX):r.clientX,c={},m=(C,b)=>{typeof b=="number"&&(o.setColumnSizingInfo(y=>{var V,z;const E=o.options.columnResizeDirection==="rtl"?-1:1,Se=(b-((V=y?.startOffset)!=null?V:0))*E,H=Math.max(Se/((z=y?.startSize)!=null?z:0),-.999999);return y.columnSizingStart.forEach(R=>{let[v,T]=R;c[v]=Math.round(Math.max(T+T*H,0)*100)/100}),{...y,deltaOffset:Se,deltaPercentage:H}}),(o.options.columnResizeMode==="onChange"||C==="end")&&o.setColumnSizing(y=>({...y,...c})))},p=C=>m("move",C),g=C=>{m("end",C),o.setColumnSizingInfo(b=>({...b,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},u=At(t),f={moveHandler:C=>p(C.clientX),upHandler:C=>{u?.removeEventListener("mousemove",f.moveHandler),u?.removeEventListener("mouseup",f.upHandler),g(C.clientX)}},h={moveHandler:C=>(C.cancelable&&(C.preventDefault(),C.stopPropagation()),p(C.touches[0].clientX),!1),upHandler:C=>{var b;u?.removeEventListener("touchmove",h.moveHandler),u?.removeEventListener("touchend",h.upHandler),C.cancelable&&(C.preventDefault(),C.stopPropagation()),g((b=C.touches[0])==null?void 0:b.clientX)}},x=Tt()?{passive:!1}:!1;ye(r)?(u?.addEventListener("touchmove",h.moveHandler,x),u?.addEventListener("touchend",h.upHandler,x)):(u?.addEventListener("mousemove",f.moveHandler,x),u?.addEventListener("mouseup",f.upHandler,x)),o.setColumnSizingInfo(C=>({...C,startOffset:l,startSize:s,deltaOffset:0,deltaPercentage:0,columnSizingStart:i,isResizingColumn:n.id}))}}},createTable:e=>{e.setColumnSizing=o=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(o),e.setColumnSizingInfo=o=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(o),e.resetColumnSizing=o=>{var t;e.setColumnSizing(o?{}:(t=e.initialState.columnSizing)!=null?t:{})},e.resetHeaderSizeInfo=o=>{var t;e.setColumnSizingInfo(o?Re():(t=e.initialState.columnSizingInfo)!=null?t:Re())},e.getTotalSize=()=>{var o,t;return(o=(t=e.getHeaderGroups()[0])==null?void 0:t.headers.reduce((n,a)=>n+a.getSize(),0))!=null?o:0},e.getLeftTotalSize=()=>{var o,t;return(o=(t=e.getLeftHeaderGroups()[0])==null?void 0:t.headers.reduce((n,a)=>n+a.getSize(),0))!=null?o:0},e.getCenterTotalSize=()=>{var o,t;return(o=(t=e.getCenterHeaderGroups()[0])==null?void 0:t.headers.reduce((n,a)=>n+a.getSize(),0))!=null?o:0},e.getRightTotalSize=()=>{var o,t;return(o=(t=e.getRightHeaderGroups()[0])==null?void 0:t.headers.reduce((n,a)=>n+a.getSize(),0))!=null?o:0}}};let q=null;function Tt(){if(typeof q=="boolean")return q;let e=!1;try{const o={get passive(){return e=!0,!1}},t=()=>{};window.addEventListener("test",t,o),window.removeEventListener("test",t)}catch{e=!1}return q=e,q}function ye(e){return e.type==="touchstart"}const Ht={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:F("columnVisibility",e)}),createColumn:(e,o)=>{e.toggleVisibility=t=>{e.getCanHide()&&o.setColumnVisibility(n=>({...n,[e.id]:t??!e.getIsVisible()}))},e.getIsVisible=()=>{var t,n;const a=e.columns;return(t=a.length?a.some(r=>r.getIsVisible()):(n=o.getState().columnVisibility)==null?void 0:n[e.id])!=null?t:!0},e.getCanHide=()=>{var t,n;return((t=e.columnDef.enableHiding)!=null?t:!0)&&((n=o.options.enableHiding)!=null?n:!0)},e.getToggleVisibilityHandler=()=>t=>{e.toggleVisibility==null||e.toggleVisibility(t.target.checked)}},createRow:(e,o)=>{e._getAllVisibleCells=w(()=>[e.getAllCells(),o.getState().columnVisibility],t=>t.filter(n=>n.column.getIsVisible()),S(o.options,"debugRows")),e.getVisibleCells=w(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(t,n,a)=>[...t,...n,...a],S(o.options,"debugRows"))},createTable:e=>{const o=(t,n)=>w(()=>[n(),n().filter(a=>a.getIsVisible()).map(a=>a.id).join("_")],a=>a.filter(r=>r.getIsVisible==null?void 0:r.getIsVisible()),S(e.options,"debugColumns"));e.getVisibleFlatColumns=o("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=o("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=o("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=o("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=o("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=t=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(t),e.resetColumnVisibility=t=>{var n;e.setColumnVisibility(t?{}:(n=e.initialState.columnVisibility)!=null?n:{})},e.toggleAllColumnsVisible=t=>{var n;t=(n=t)!=null?n:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((a,r)=>({...a,[r.id]:t||!(r.getCanHide!=null&&r.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(t=>!(t.getIsVisible!=null&&t.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(t=>t.getIsVisible==null?void 0:t.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>t=>{var n;e.toggleAllColumnsVisible((n=t.target)==null?void 0:n.checked)}}};function O(e,o){return o?o==="center"?e.getCenterVisibleLeafColumns():o==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const Gt={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},Ot={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:F("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:o=>{var t;const n=(t=e.getCoreRowModel().flatRows[0])==null||(t=t._getAllCellsByColumnId()[o.id])==null?void 0:t.getValue();return typeof n=="string"||typeof n=="number"}}),createColumn:(e,o)=>{e.getCanGlobalFilter=()=>{var t,n,a,r;return((t=e.columnDef.enableGlobalFilter)!=null?t:!0)&&((n=o.options.enableGlobalFilter)!=null?n:!0)&&((a=o.options.enableFilters)!=null?a:!0)&&((r=o.options.getColumnCanGlobalFilter==null?void 0:o.options.getColumnCanGlobalFilter(e))!=null?r:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>L.includesString,e.getGlobalFilterFn=()=>{var o,t;const{globalFilterFn:n}=e.options;return he(n)?n:n==="auto"?e.getGlobalAutoFilterFn():(o=(t=e.options.filterFns)==null?void 0:t[n])!=null?o:L[n]},e.setGlobalFilter=o=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(o)},e.resetGlobalFilter=o=>{e.setGlobalFilter(o?void 0:e.initialState.globalFilter)}}},Wt={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:F("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let o=!1,t=!1;e._autoResetExpanded=()=>{var n,a;if(!o){e._queue(()=>{o=!0});return}if((n=(a=e.options.autoResetAll)!=null?a:e.options.autoResetExpanded)!=null?n:!e.options.manualExpanding){if(t)return;t=!0,e._queue(()=>{e.resetExpanded(),t=!1})}},e.setExpanded=n=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(n),e.toggleAllRowsExpanded=n=>{n??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=n=>{var a,r;e.setExpanded(n?{}:(a=(r=e.initialState)==null?void 0:r.expanded)!=null?a:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(n=>n.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>n=>{n.persist==null||n.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const n=e.getState().expanded;return n===!0||Object.values(n).some(Boolean)},e.getIsAllRowsExpanded=()=>{const n=e.getState().expanded;return typeof n=="boolean"?n===!0:!(!Object.keys(n).length||e.getRowModel().flatRows.some(a=>!a.getIsExpanded()))},e.getExpandedDepth=()=>{let n=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(r=>{const s=r.split(".");n=Math.max(n,s.length)}),n},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,o)=>{e.toggleExpanded=t=>{o.setExpanded(n=>{var a;const r=n===!0?!0:!!(n!=null&&n[e.id]);let s={};if(n===!0?Object.keys(o.getRowModel().rowsById).forEach(i=>{s[i]=!0}):s=n,t=(a=t)!=null?a:!r,!r&&t)return{...s,[e.id]:!0};if(r&&!t){const{[e.id]:i,...l}=s;return l}return n})},e.getIsExpanded=()=>{var t;const n=o.getState().expanded;return!!((t=o.options.getIsRowExpanded==null?void 0:o.options.getIsRowExpanded(e))!=null?t:n===!0||n?.[e.id])},e.getCanExpand=()=>{var t,n,a;return(t=o.options.getRowCanExpand==null?void 0:o.options.getRowCanExpand(e))!=null?t:((n=o.options.enableExpanding)!=null?n:!0)&&!!((a=e.subRows)!=null&&a.length)},e.getIsAllParentsExpanded=()=>{let t=!0,n=e;for(;t&&n.parentId;)n=o.getRow(n.parentId,!0),t=n.getIsExpanded();return t},e.getToggleExpandedHandler=()=>{const t=e.getCanExpand();return()=>{t&&e.toggleExpanded()}}}},Ie=0,Ne=10,Pe=()=>({pageIndex:Ie,pageSize:Ne}),Bt={getInitialState:e=>({...e,pagination:{...Pe(),...e?.pagination}}),getDefaultOptions:e=>({onPaginationChange:F("pagination",e)}),createTable:e=>{let o=!1,t=!1;e._autoResetPageIndex=()=>{var n,a;if(!o){e._queue(()=>{o=!0});return}if((n=(a=e.options.autoResetAll)!=null?a:e.options.autoResetPageIndex)!=null?n:!e.options.manualPagination){if(t)return;t=!0,e._queue(()=>{e.resetPageIndex(),t=!1})}},e.setPagination=n=>{const a=r=>A(n,r);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(a)},e.resetPagination=n=>{var a;e.setPagination(n?Pe():(a=e.initialState.pagination)!=null?a:Pe())},e.setPageIndex=n=>{e.setPagination(a=>{let r=A(n,a.pageIndex);const s=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return r=Math.max(0,Math.min(r,s)),{...a,pageIndex:r}})},e.resetPageIndex=n=>{var a,r;e.setPageIndex(n?Ie:(a=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageIndex)!=null?a:Ie)},e.resetPageSize=n=>{var a,r;e.setPageSize(n?Ne:(a=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageSize)!=null?a:Ne)},e.setPageSize=n=>{e.setPagination(a=>{const r=Math.max(1,A(n,a.pageSize)),s=a.pageSize*a.pageIndex,i=Math.floor(s/r);return{...a,pageIndex:i,pageSize:r}})},e.setPageCount=n=>e.setPagination(a=>{var r;let s=A(n,(r=e.options.pageCount)!=null?r:-1);return typeof s=="number"&&(s=Math.max(-1,s)),{...a,pageCount:s}}),e.getPageOptions=w(()=>[e.getPageCount()],n=>{let a=[];return n&&n>0&&(a=[...new Array(n)].fill(null).map((r,s)=>s)),a},S(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:n}=e.getState().pagination,a=e.getPageCount();return a===-1?!0:a===0?!1:n<a-1},e.previousPage=()=>e.setPageIndex(n=>n-1),e.nextPage=()=>e.setPageIndex(n=>n+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var n;return(n=e.options.pageCount)!=null?n:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var n;return(n=e.options.rowCount)!=null?n:e.getPrePaginationRowModel().rows.length}}},be=()=>({top:[],bottom:[]}),qt={getInitialState:e=>({rowPinning:be(),...e}),getDefaultOptions:e=>({onRowPinningChange:F("rowPinning",e)}),createRow:(e,o)=>{e.pin=(t,n,a)=>{const r=n?e.getLeafRows().map(l=>{let{id:c}=l;return c}):[],s=a?e.getParentRows().map(l=>{let{id:c}=l;return c}):[],i=new Set([...s,e.id,...r]);o.setRowPinning(l=>{var c,m;if(t==="bottom"){var p,g;return{top:((p=l?.top)!=null?p:[]).filter(h=>!(i!=null&&i.has(h))),bottom:[...((g=l?.bottom)!=null?g:[]).filter(h=>!(i!=null&&i.has(h))),...Array.from(i)]}}if(t==="top"){var u,f;return{top:[...((u=l?.top)!=null?u:[]).filter(h=>!(i!=null&&i.has(h))),...Array.from(i)],bottom:((f=l?.bottom)!=null?f:[]).filter(h=>!(i!=null&&i.has(h)))}}return{top:((c=l?.top)!=null?c:[]).filter(h=>!(i!=null&&i.has(h))),bottom:((m=l?.bottom)!=null?m:[]).filter(h=>!(i!=null&&i.has(h)))}})},e.getCanPin=()=>{var t;const{enableRowPinning:n,enablePinning:a}=o.options;return typeof n=="function"?n(e):(t=n??a)!=null?t:!0},e.getIsPinned=()=>{const t=[e.id],{top:n,bottom:a}=o.getState().rowPinning,r=t.some(i=>n?.includes(i)),s=t.some(i=>a?.includes(i));return r?"top":s?"bottom":!1},e.getPinnedIndex=()=>{var t,n;const a=e.getIsPinned();if(!a)return-1;const r=(t=a==="top"?o.getTopRows():o.getBottomRows())==null?void 0:t.map(s=>{let{id:i}=s;return i});return(n=r?.indexOf(e.id))!=null?n:-1}},createTable:e=>{e.setRowPinning=o=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(o),e.resetRowPinning=o=>{var t,n;return e.setRowPinning(o?be():(t=(n=e.initialState)==null?void 0:n.rowPinning)!=null?t:be())},e.getIsSomeRowsPinned=o=>{var t;const n=e.getState().rowPinning;if(!o){var a,r;return!!((a=n.top)!=null&&a.length||(r=n.bottom)!=null&&r.length)}return!!((t=n[o])!=null&&t.length)},e._getPinnedRows=(o,t,n)=>{var a;return((a=e.options.keepPinnedRows)==null||a?(t??[]).map(s=>{const i=e.getRow(s,!0);return i.getIsAllParentsExpanded()?i:null}):(t??[]).map(s=>o.find(i=>i.id===s))).filter(Boolean).map(s=>({...s,position:n}))},e.getTopRows=w(()=>[e.getRowModel().rows,e.getState().rowPinning.top],(o,t)=>e._getPinnedRows(o,t,"top"),S(e.options,"debugRows")),e.getBottomRows=w(()=>[e.getRowModel().rows,e.getState().rowPinning.bottom],(o,t)=>e._getPinnedRows(o,t,"bottom"),S(e.options,"debugRows")),e.getCenterRows=w(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(o,t,n)=>{const a=new Set([...t??[],...n??[]]);return o.filter(r=>!a.has(r.id))},S(e.options,"debugRows"))}},Kt={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:F("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=o=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(o),e.resetRowSelection=o=>{var t;return e.setRowSelection(o?{}:(t=e.initialState.rowSelection)!=null?t:{})},e.toggleAllRowsSelected=o=>{e.setRowSelection(t=>{o=typeof o<"u"?o:!e.getIsAllRowsSelected();const n={...t},a=e.getPreGroupedRowModel().flatRows;return o?a.forEach(r=>{r.getCanSelect()&&(n[r.id]=!0)}):a.forEach(r=>{delete n[r.id]}),n})},e.toggleAllPageRowsSelected=o=>e.setRowSelection(t=>{const n=typeof o<"u"?o:!e.getIsAllPageRowsSelected(),a={...t};return e.getRowModel().rows.forEach(r=>{Fe(a,r.id,n,!0,e)}),a}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=w(()=>[e.getState().rowSelection,e.getCoreRowModel()],(o,t)=>Object.keys(o).length?_e(e,t):{rows:[],flatRows:[],rowsById:{}},S(e.options,"debugTable")),e.getFilteredSelectedRowModel=w(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(o,t)=>Object.keys(o).length?_e(e,t):{rows:[],flatRows:[],rowsById:{}},S(e.options,"debugTable")),e.getGroupedSelectedRowModel=w(()=>[e.getState().rowSelection,e.getSortedRowModel()],(o,t)=>Object.keys(o).length?_e(e,t):{rows:[],flatRows:[],rowsById:{}},S(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const o=e.getFilteredRowModel().flatRows,{rowSelection:t}=e.getState();let n=!!(o.length&&Object.keys(t).length);return n&&o.some(a=>a.getCanSelect()&&!t[a.id])&&(n=!1),n},e.getIsAllPageRowsSelected=()=>{const o=e.getPaginationRowModel().flatRows.filter(a=>a.getCanSelect()),{rowSelection:t}=e.getState();let n=!!o.length;return n&&o.some(a=>!t[a.id])&&(n=!1),n},e.getIsSomeRowsSelected=()=>{var o;const t=Object.keys((o=e.getState().rowSelection)!=null?o:{}).length;return t>0&&t<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const o=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:o.filter(t=>t.getCanSelect()).some(t=>t.getIsSelected()||t.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>o=>{e.toggleAllRowsSelected(o.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>o=>{e.toggleAllPageRowsSelected(o.target.checked)}},createRow:(e,o)=>{e.toggleSelected=(t,n)=>{const a=e.getIsSelected();o.setRowSelection(r=>{var s;if(t=typeof t<"u"?t:!a,e.getCanSelect()&&a===t)return r;const i={...r};return Fe(i,e.id,t,(s=n?.selectChildren)!=null?s:!0,o),i})},e.getIsSelected=()=>{const{rowSelection:t}=o.getState();return Ve(e,t)},e.getIsSomeSelected=()=>{const{rowSelection:t}=o.getState();return $e(e,t)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:t}=o.getState();return $e(e,t)==="all"},e.getCanSelect=()=>{var t;return typeof o.options.enableRowSelection=="function"?o.options.enableRowSelection(e):(t=o.options.enableRowSelection)!=null?t:!0},e.getCanSelectSubRows=()=>{var t;return typeof o.options.enableSubRowSelection=="function"?o.options.enableSubRowSelection(e):(t=o.options.enableSubRowSelection)!=null?t:!0},e.getCanMultiSelect=()=>{var t;return typeof o.options.enableMultiRowSelection=="function"?o.options.enableMultiRowSelection(e):(t=o.options.enableMultiRowSelection)!=null?t:!0},e.getToggleSelectedHandler=()=>{const t=e.getCanSelect();return n=>{var a;t&&e.toggleSelected((a=n.target)==null?void 0:a.checked)}}}},Fe=(e,o,t,n,a)=>{var r;const s=a.getRow(o,!0);t?(s.getCanMultiSelect()||Object.keys(e).forEach(i=>delete e[i]),s.getCanSelect()&&(e[o]=!0)):delete e[o],n&&(r=s.subRows)!=null&&r.length&&s.getCanSelectSubRows()&&s.subRows.forEach(i=>Fe(e,i.id,t,n,a))};function _e(e,o){const t=e.getState().rowSelection,n=[],a={},r=function(s,i){return s.map(l=>{var c;const m=Ve(l,t);if(m&&(n.push(l),a[l.id]=l),(c=l.subRows)!=null&&c.length&&(l={...l,subRows:r(l.subRows)}),m)return l}).filter(Boolean)};return{rows:r(o.rows),flatRows:n,rowsById:a}}function Ve(e,o){var t;return(t=o[e.id])!=null?t:!1}function $e(e,o,t){var n;if(!((n=e.subRows)!=null&&n.length))return!1;let a=!0,r=!1;return e.subRows.forEach(s=>{if(!(r&&!a)&&(s.getCanSelect()&&(Ve(s,o)?r=!0:a=!1),s.subRows&&s.subRows.length)){const i=$e(s,o);i==="all"?r=!0:(i==="some"&&(r=!0),a=!1)}}),a?"all":r?"some":!1}const Me=/([0-9]+)/gm,Ut=(e,o,t)=>Xe(k(e.getValue(t)).toLowerCase(),k(o.getValue(t)).toLowerCase()),Jt=(e,o,t)=>Xe(k(e.getValue(t)),k(o.getValue(t))),Yt=(e,o,t)=>ze(k(e.getValue(t)).toLowerCase(),k(o.getValue(t)).toLowerCase()),Xt=(e,o,t)=>ze(k(e.getValue(t)),k(o.getValue(t))),Qt=(e,o,t)=>{const n=e.getValue(t),a=o.getValue(t);return n>a?1:n<a?-1:0},Zt=(e,o,t)=>ze(e.getValue(t),o.getValue(t));function ze(e,o){return e===o?0:e>o?1:-1}function k(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function Xe(e,o){const t=e.split(Me).filter(Boolean),n=o.split(Me).filter(Boolean);for(;t.length&&n.length;){const a=t.shift(),r=n.shift(),s=parseInt(a,10),i=parseInt(r,10),l=[s,i].sort();if(isNaN(l[0])){if(a>r)return 1;if(r>a)return-1;continue}if(isNaN(l[1]))return isNaN(s)?-1:1;if(s>i)return 1;if(i>s)return-1}return t.length-n.length}const G={alphanumeric:Ut,alphanumericCaseSensitive:Jt,text:Yt,textCaseSensitive:Xt,datetime:Qt,basic:Zt},en={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:F("sorting",e),isMultiSortEvent:o=>o.shiftKey}),createColumn:(e,o)=>{e.getAutoSortingFn=()=>{const t=o.getFilteredRowModel().flatRows.slice(10);let n=!1;for(const a of t){const r=a?.getValue(e.id);if(Object.prototype.toString.call(r)==="[object Date]")return G.datetime;if(typeof r=="string"&&(n=!0,r.split(Me).length>1))return G.alphanumeric}return n?G.text:G.basic},e.getAutoSortDir=()=>{const t=o.getFilteredRowModel().flatRows[0];return typeof t?.getValue(e.id)=="string"?"asc":"desc"},e.getSortingFn=()=>{var t,n;if(!e)throw new Error;return he(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(t=(n=o.options.sortingFns)==null?void 0:n[e.columnDef.sortingFn])!=null?t:G[e.columnDef.sortingFn]},e.toggleSorting=(t,n)=>{const a=e.getNextSortingOrder(),r=typeof t<"u"&&t!==null;o.setSorting(s=>{const i=s?.find(u=>u.id===e.id),l=s?.findIndex(u=>u.id===e.id);let c=[],m,p=r?t:a==="desc";if(s!=null&&s.length&&e.getCanMultiSort()&&n?i?m="toggle":m="add":s!=null&&s.length&&l!==s.length-1?m="replace":i?m="toggle":m="replace",m==="toggle"&&(r||a||(m="remove")),m==="add"){var g;c=[...s,{id:e.id,desc:p}],c.splice(0,c.length-((g=o.options.maxMultiSortColCount)!=null?g:Number.MAX_SAFE_INTEGER))}else m==="toggle"?c=s.map(u=>u.id===e.id?{...u,desc:p}:u):m==="remove"?c=s.filter(u=>u.id!==e.id):c=[{id:e.id,desc:p}];return c})},e.getFirstSortDir=()=>{var t,n;return((t=(n=e.columnDef.sortDescFirst)!=null?n:o.options.sortDescFirst)!=null?t:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=t=>{var n,a;const r=e.getFirstSortDir(),s=e.getIsSorted();return s?s!==r&&((n=o.options.enableSortingRemoval)==null||n)&&(!(t&&(a=o.options.enableMultiRemove)!=null)||a)?!1:s==="desc"?"asc":"desc":r},e.getCanSort=()=>{var t,n;return((t=e.columnDef.enableSorting)!=null?t:!0)&&((n=o.options.enableSorting)!=null?n:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var t,n;return(t=(n=e.columnDef.enableMultiSort)!=null?n:o.options.enableMultiSort)!=null?t:!!e.accessorFn},e.getIsSorted=()=>{var t;const n=(t=o.getState().sorting)==null?void 0:t.find(a=>a.id===e.id);return n?n.desc?"desc":"asc":!1},e.getSortIndex=()=>{var t,n;return(t=(n=o.getState().sorting)==null?void 0:n.findIndex(a=>a.id===e.id))!=null?t:-1},e.clearSorting=()=>{o.setSorting(t=>t!=null&&t.length?t.filter(n=>n.id!==e.id):[])},e.getToggleSortingHandler=()=>{const t=e.getCanSort();return n=>{t&&(n.persist==null||n.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?o.options.isMultiSortEvent==null?void 0:o.options.isMultiSortEvent(n):!1))}}},createTable:e=>{e.setSorting=o=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(o),e.resetSorting=o=>{var t,n;e.setSorting(o?[]:(t=(n=e.initialState)==null?void 0:n.sorting)!=null?t:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},tn=[xt,Ht,jt,Lt,yt,Pt,Gt,Ot,en,zt,Wt,Bt,qt,Kt,kt];function nn(e){var o,t;const n=[...tn,...(o=e._features)!=null?o:[]];let a={_features:n};const r=a._features.reduce((g,u)=>Object.assign(g,u.getDefaultOptions==null?void 0:u.getDefaultOptions(a)),{}),s=g=>a.options.mergeOptions?a.options.mergeOptions(r,g):{...r,...g};let l={...{},...(t=e.initialState)!=null?t:{}};a._features.forEach(g=>{var u;l=(u=g.getInitialState==null?void 0:g.getInitialState(l))!=null?u:l});const c=[];let m=!1;const p={_features:n,options:{...r,...e},initialState:l,_queue:g=>{c.push(g),m||(m=!0,Promise.resolve().then(()=>{for(;c.length;)c.shift()();m=!1}).catch(u=>setTimeout(()=>{throw u})))},reset:()=>{a.setState(a.initialState)},setOptions:g=>{const u=A(g,a.options);a.options=s(u)},getState:()=>a.options.state,setState:g=>{a.options.onStateChange==null||a.options.onStateChange(g)},_getRowId:(g,u,f)=>{var h;return(h=a.options.getRowId==null?void 0:a.options.getRowId(g,u,f))!=null?h:`${f?[f.id,u].join("."):u}`},getCoreRowModel:()=>(a._getCoreRowModel||(a._getCoreRowModel=a.options.getCoreRowModel(a)),a._getCoreRowModel()),getRowModel:()=>a.getPaginationRowModel(),getRow:(g,u)=>{let f=(u?a.getPrePaginationRowModel():a.getRowModel()).rowsById[g];if(!f&&(f=a.getCoreRowModel().rowsById[g],!f))throw new Error;return f},_getDefaultColumnDef:w(()=>[a.options.defaultColumn],g=>{var u;return g=(u=g)!=null?u:{},{header:f=>{const h=f.header.column.columnDef;return h.accessorKey?h.accessorKey:h.accessorFn?h.id:null},cell:f=>{var h,x;return(h=(x=f.renderValue())==null||x.toString==null?void 0:x.toString())!=null?h:null},...a._features.reduce((f,h)=>Object.assign(f,h.getDefaultColumnDef==null?void 0:h.getDefaultColumnDef()),{}),...g}},S(e,"debugColumns")),_getColumnDefs:()=>a.options.columns,getAllColumns:w(()=>[a._getColumnDefs()],g=>{const u=function(f,h,x){return x===void 0&&(x=0),f.map(C=>{const b=vt(a,C,x,h),y=C;return b.columns=y.columns?u(y.columns,b,x+1):[],b})};return u(g)},S(e,"debugColumns")),getAllFlatColumns:w(()=>[a.getAllColumns()],g=>g.flatMap(u=>u.getFlatColumns()),S(e,"debugColumns")),_getAllFlatColumnsById:w(()=>[a.getAllFlatColumns()],g=>g.reduce((u,f)=>(u[f.id]=f,u),{}),S(e,"debugColumns")),getAllLeafColumns:w(()=>[a.getAllColumns(),a._getOrderColumnsFn()],(g,u)=>{let f=g.flatMap(h=>h.getLeafColumns());return u(f)},S(e,"debugColumns")),getColumn:g=>a._getAllFlatColumnsById()[g]};Object.assign(a,p);for(let g=0;g<a._features.length;g++){const u=a._features[g];u==null||u.createTable==null||u.createTable(a)}return a}function on(){return e=>w(()=>[e.options.data],o=>{const t={rows:[],flatRows:[],rowsById:{}},n=function(a,r,s){r===void 0&&(r=0);const i=[];for(let c=0;c<a.length;c++){const m=Rt(e,e._getRowId(a[c],c,s),a[c],c,r,void 0,s?.id);if(t.flatRows.push(m),t.rowsById[m.id]=m,i.push(m),e.options.getSubRows){var l;m.originalSubRows=e.options.getSubRows(a[c],c),(l=m.originalSubRows)!=null&&l.length&&(m.subRows=n(m.originalSubRows,r+1,m))}}return i};return t.rows=n(o),t},S(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function an(e){const o=[],t=n=>{var a;o.push(n),(a=n.subRows)!=null&&a.length&&n.getIsExpanded()&&n.subRows.forEach(t)};return e.rows.forEach(t),{rows:o,flatRows:e.flatRows,rowsById:e.rowsById}}function rn(e){return o=>w(()=>[o.getState().pagination,o.getPrePaginationRowModel(),o.options.paginateExpandedRows?void 0:o.getState().expanded],(t,n)=>{if(!n.rows.length)return n;const{pageSize:a,pageIndex:r}=t;let{rows:s,flatRows:i,rowsById:l}=n;const c=a*r,m=c+a;s=s.slice(c,m);let p;o.options.paginateExpandedRows?p={rows:s,flatRows:i,rowsById:l}:p=an({rows:s,flatRows:i,rowsById:l}),p.flatRows=[];const g=u=>{p.flatRows.push(u),u.subRows.length&&u.subRows.forEach(g)};return p.rows.forEach(g),p},S(o.options,"debugTable"))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function He(e,o){return e?sn(e)?P.createElement(e,o):e:null}function sn(e){return ln(e)||typeof e=="function"||un(e)}function ln(e){return typeof e=="function"&&(()=>{const o=Object.getPrototypeOf(e);return o.prototype&&o.prototype.isReactComponent})()}function un(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function dn(e){const o={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[t]=P.useState(()=>({current:nn(o)})),[n,a]=P.useState(()=>t.current.initialState);return t.current.setOptions(r=>({...r,...e,state:{...n,...e.state},onStateChange:s=>{a(s),e.onStateChange==null||e.onStateChange(s)}})),t.current}function j({columns:e,data:o,enablePagination:t=!1,pagination:n={pageSize:10,pageIndex:0},onPaginationChange:a,enableRowSelection:r=!1,onRowSelectionChange:s,enableColumnResizing:i=!1,columnResizeMode:l="onChange",columnPinning:c,onRowClick:m,onRowDoubleClick:p,bordered:g=!1,classNames:u,pageSizeLabel:f="Rows per page",loading:h=!1,showPage:x=!0,stickyHeader:C=!0,emptyMessage:b}){const[y,V]=P.useState({});P.useEffect(()=>{if(s&&r){const R=Object.keys(y).map(v=>o[Number(v)]);s(R)}},[y,o,s,r]);const z=P.useMemo(()=>r?[{id:"select",size:40,enablePinning:!0,header:({table:R})=>d.jsx(je,{checked:R.getIsAllPageRowsSelected(),onCheckedChange:v=>R.toggleAllPageRowsSelected(!!v),"aria-label":"Select all"}),cell:({row:R})=>d.jsx(je,{checked:R.getIsSelected(),onCheckedChange:v=>R.toggleSelected(!!v),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1,enableResizing:!1},...e]:e,[e,r]),E=dn({data:o,columns:z,getCoreRowModel:on(),getPaginationRowModel:rn(),manualPagination:!0,pageCount:-1,state:{pagination:{pageIndex:n.pageIndex,pageSize:n.pageSize},rowSelection:y,columnPinning:c??{left:[],right:[]}},onPaginationChange:R=>{if(typeof R=="function"&&a){const v=R({pageIndex:n.pageIndex,pageSize:n.pageSize});a({pageIndex:v.pageIndex,pageSize:v.pageSize})}},enableRowSelection:r,onRowSelectionChange:V,columnResizeMode:l,enableColumnResizing:i}),H=E.getVisibleLeafColumns().filter(R=>R.getIsPinned()==="left").at(-1)?.id;return d.jsxs("div",{className:N("space-y-4",u?.root),children:[d.jsxs("div",{className:N("rounded-md border overflow-x-auto relative",C&&['[&>[data-slot="table-container"]]:h-full overflow-auto relative'],u?.tableWrapper),children:[h&&d.jsx("div",{className:"absolute inset-0 bg-background/50 backdrop-blur-[1px] z-50 flex items-center justify-center",children:d.jsxs("div",{className:"flex flex-col items-center gap-2",children:[d.jsx(ht,{className:"animate-spin text-primary",size:32}),d.jsx("span",{className:"text-sm font-medium",children:"Loading..."})]})}),d.jsxs(at,{className:N("table-fixed w-full border-spacing-0 border-separate",u?.table),children:[d.jsx(rt,{className:N(C&&"sticky top-0 z-21",u?.header),children:E.getHeaderGroups().map(R=>d.jsx(Ce,{className:N("relative",u?.headerRow),children:R.headers.map((v,T)=>{const M=v.column.getIsPinned();return d.jsxs(st,{style:{width:v.getSize(),position:M?"sticky":"relative",...M&&{position:"sticky",...M==="left"?{left:v.column.getStart()}:{right:v.column.getAfter()},zIndex:20}},className:N("bg-secondary text-xs font-semibold text-secondary-foreground border-b",M&&["z-20","bg-secondary text-xs font-semibold text-secondary-foreground",M==="left"&&v.column.id===H?"border-r":M==="right"&&v.column.getPinnedIndex()===0?"border-l":void 0],g&&T!==0&&"border-l",u?.headerCell),children:[d.jsx("div",{className:"flex items-center gap-2",children:v.isPlaceholder?null:He(v.column.columnDef.header,v.getContext())}),i&&v.column.getCanResize()&&d.jsx("div",{onMouseDown:v.getResizeHandler(),onTouchStart:v.getResizeHandler(),className:N("absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none bg-primary-foreground/20")})]},v.id)})},R.id))}),d.jsx(it,{className:u?.body,children:E.getRowModel().rows?.length?E.getRowModel().rows.map(R=>d.jsx(Ce,{"data-state":R.getIsSelected()&&"selected",className:N("relative",(m||p)&&"cursor-pointer hover:bg-muted/50",u?.row),onClick:()=>m?.(R),onDoubleClick:()=>p?.(R),children:R.getVisibleCells().map((v,T)=>{const M=v.column.getIsPinned();return d.jsx(Ae,{style:{width:v.column.getSize(),position:M?"sticky":"relative",...M&&{position:"sticky",...M==="left"?{left:v.column.getStart()}:{right:v.column.getAfter()},zIndex:20}},className:N(M&&["z-20","bg-background/95 group-hover:bg-muted",M==="left"&&v.column.id===H?"border-r":v.column.getPinnedIndex()===0?"border-l":void 0],g&&T!==0&&"border-l",u?.cell),children:He(v.column.columnDef.cell,v.getContext())},v.id)})},R.id)):d.jsx(Ce,{children:d.jsx(Ae,{colSpan:z.length,className:N("h-24 text-center",u?.noResults),children:b||(h?d.jsx("div",{className:"flex flex-col items-center gap-2 py-4 min-h-[124px]"}):d.jsxs("div",{className:"flex flex-col items-center gap-2 py-4",children:[d.jsx(pt,{className:"h-6 w-6 text-muted-foreground"}),d.jsx("p",{className:"text-sm text-muted-foreground",children:"No data available"}),d.jsx("p",{className:"text-xs text-muted-foreground/80",children:"Once data is available, it will appear here."})]}))})})})]})]}),t&&d.jsxs("div",{className:N("flex items-center justify-between px-2",u?.pagination),children:[d.jsxs("div",{className:N("flex items-center gap-2",u?.rowsPerPageSelect),children:[d.jsx("p",{className:"text-sm font-medium",children:f}),d.jsxs(lt,{value:`${n.pageSize}`,onValueChange:R=>{a?.({pageIndex:0,pageSize:Number(R)})},children:[d.jsx(ut,{className:"h-8 w-[70px]",children:d.jsx(dt,{placeholder:n.pageSize})}),d.jsx(ct,{side:"top",children:[10,20,30,40,50].map(R=>d.jsx(gt,{value:`${R}`,children:R},R))})]})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[x&&d.jsxs("span",{className:N("text-sm whitespace-nowrap",u?.pageInfo),children:["Page ",n.pageIndex+1]}),d.jsx(et,{children:d.jsxs(tt,{children:[d.jsx(Le,{children:d.jsx(nt,{onClick:()=>a?.({...n,pageIndex:n.pageIndex-1}),"aria-disabled":n.pageIndex===0,className:N(n.pageIndex===0&&"pointer-events-none opacity-50",u?.paginationButton)})}),d.jsx(Le,{children:d.jsx(ot,{onClick:()=>a?.({...n,pageIndex:n.pageIndex+1}),"aria-disabled":!E.getCanNextPage(),className:N(!E.getCanNextPage()&&"pointer-events-none opacity-50",u?.paginationButton)})})]})})]})]})]})}j.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDef",elements:[{name:"TData"},{name:"unknown"}],raw:"ColumnDef<TData, unknown>"}],raw:"ColumnDef<TData, unknown>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},enablePagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pagination:{required:!1,tsType:{name:"DataTablePaginationState"},description:"",defaultValue:{value:`{
  pageSize: 10,
  pageIndex: 0,
}`,computed:!1}},onPaginationChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pagination: DataTablePaginationState) => void",signature:{arguments:[{type:{name:"DataTablePaginationState"},name:"pagination"}],return:{name:"void"}}},description:""},enableRowSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: TData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"selectedRows"}],return:{name:"void"}}},description:""},enableColumnResizing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},columnResizeMode:{required:!1,tsType:{name:"ColumnResizeMode"},description:"",defaultValue:{value:"'onChange'",computed:!1}},columnPinning:{required:!1,tsType:{name:"ColumnPinningState"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row<TData>) => void",signature:{arguments:[{type:{name:"Row",elements:[{name:"TData"}],raw:"Row<TData>"},name:"row"}],return:{name:"void"}}},description:""},onRowDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row<TData>) => void",signature:{arguments:[{type:{name:"Row",elements:[{name:"TData"}],raw:"Row<TData>"},name:"row"}],return:{name:"void"}}},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},classNames:{required:!1,tsType:{name:"DataTableClassNames"},description:"Class names for different parts of the table"},pageSizeLabel:{required:!1,tsType:{name:"string"},description:'Custom text for page size label (default: "Rows per page")',defaultValue:{value:"'Rows per page'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading overlay on top of the table",defaultValue:{value:"false",computed:!1}},showPage:{required:!1,tsType:{name:"boolean"},description:"Show current page number (default: true)",defaultValue:{value:"true",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Show header as sticky on top of the table",defaultValue:{value:"true",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Custom message or component to show when data is empty (default: "No results.")'}}};async function Qe(e,o){try{const n=await(await fetch(`https://swapi.tech/api/people?page=${e}&limit=${o}`)).json();return{data:await Promise.all(n.results.map(async r=>{const i=await(await fetch(`https://swapi.tech/api/people/${r.uid}`)).json();return{id:r.uid,name:r.name,height:i.result.properties.height,mass:i.result.properties.mass,birthYear:i.result.properties.birth_year,gender:i.result.properties.gender}})),totalPages:n.total_pages,totalRecords:n.total_records}}catch(t){return console.error("Error fetching Star Wars data:",t),{data:[],totalPages:0,totalRecords:0}}}const $=[{id:"1",firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com"},{id:"2",firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com"},{id:"3",firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com"}],Ee=[{id:"1",firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com"},{id:"2",firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com"},{id:"3",firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com"}],I=[{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"},{accessorKey:"age",header:"Age"},{accessorKey:"email",header:"Email"}],we=[{accessorKey:"id",header:"ID",size:50},{accessorKey:"firstName",header:"First Name",size:150},{accessorKey:"lastName",header:"Last Name",size:150},{accessorKey:"age",header:"Age",size:100},{accessorKey:"email",header:"Email",size:250},{accessorKey:"status",header:"Status",size:150,cell:()=>"Active"},{accessorKey:"role",header:"Role",size:150,cell:()=>"User"},{accessorKey:"department",header:"Department",size:200,cell:()=>"Engineering"},{accessorKey:"location",header:"Location",size:200,cell:()=>"New York"}],cn={root:"custom-root-class",tableWrapper:"custom-wrapper-class",table:"custom-table-class",header:"custom-header-class",headerRow:"custom-header-row-class",headerCell:"custom-header-cell-class",body:"custom-body-class",row:"custom-row-class",cell:"custom-cell-class",pagination:"custom-pagination-class",paginationButton:"custom-pagination-button-class",rowsPerPageSelect:"custom-rows-per-page-select-class",pageInfo:"custom-page-info-class",noResults:"custom-no-results-class"},to={title:"Blocks/DataTable",component:j,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A flexible and feature-rich data table component built on top of [TanStack Table v8](https://tanstack.com/table/v8).

### Features
- Server-side pagination support
- Row selection with checkbox
- Column resizing
- Column pinning (via props)
- Row click and double-click events
- Customizable border styles
- Customizable column definitions
- Loading state with overlay
- Custom empty state message
- Extensive class name customization
- Accessible UI components using Radix UI primitives`}}},argTypes:{columns:{description:"Array of column definitions using TanStack Table ColumnDef",control:"object"},data:{description:"Array of data objects to display in the table",control:"object"},enablePagination:{description:"Enable server-side pagination controls",control:"boolean",defaultValue:!1},pagination:{description:"Current pagination state (pageSize and pageIndex)",control:"object"},onPaginationChange:{description:"Callback fired when pagination state changes",control:!1},enableRowSelection:{description:"Enable row selection with checkboxes",control:"boolean",defaultValue:!1},onRowSelectionChange:{description:"Callback fired when row selection changes",control:!1},enableColumnResizing:{description:"Enable column resizing",control:"boolean",defaultValue:!1},columnResizeMode:{description:'Column resize mode ("onChange" or "onEnd")',control:"radio",options:["onChange","onEnd"],defaultValue:"onChange"},columnPinning:{description:"Column pinning state for pinning columns to left or right",control:"object"},onRowClick:{description:"Callback fired when a row is clicked",control:!1},onRowDoubleClick:{description:"Callback fired when a row is double-clicked",control:!1},bordered:{description:"Enable borders between columns",control:"boolean",defaultValue:!1},classNames:{description:`Custom class names for different table parts. Available keys:
- root: Class for the root container div
- tableWrapper: Class for the table wrapper div
- table: Class for the table element
- header: Class for the table header
- headerRow: Class for the table header row
- headerCell: Class for the table header cell
- body: Class for the table body
- row: Class for the table row
- cell: Class for the table cell
- pagination: Class for the pagination wrapper
- paginationButton: Class for the pagination buttons
- rowsPerPageSelect: Class for the rows per page select
- pageInfo: Class for the page info text
- noResults: Class for the no results message`,control:"object"},pageSizeLabel:{description:"Custom text for page size label",control:"text",defaultValue:"Rows per page"},showPage:{description:"Show current page number",control:"boolean",defaultValue:!0},stickyHeader:{description:"Show header as sticky on top of the table",control:"boolean",defaultValue:!0},loading:{description:"Show loading overlay on top of the table",control:"boolean",defaultValue:!1},emptyMessage:{description:"Custom message or component to show when data is empty",control:"text"}}},K={args:{columns:I,data:$},parameters:{docs:{description:{story:"Basic table configuration without any advanced features enabled."}}}},U={args:{columns:I,data:$,enablePagination:!0,enableRowSelection:!0,enableColumnResizing:!0,columnResizeMode:"onChange",onRowSelectionChange:Ze(),pagination:{pageSize:10,pageIndex:0},columnPinning:{left:["select","firstName","lastName"]},bordered:!0,pageSizeLabel:"Display rows"},parameters:{docs:{description:{story:"Table with all features enabled: pagination with custom label, row selection, column resizing, column pinning, and borders."}}}},J={render:e=>{const[o,t]=P.useState({pageSize:10,pageIndex:0});return d.jsx(j,{...e,enablePagination:!0,pagination:o,onPaginationChange:t})},args:{columns:I,data:$},parameters:{docs:{description:{story:"Example of controlled pagination with 2 items per page."}}}},Y={render:e=>{const[o,t]=P.useState([]);return d.jsxs("div",{className:"space-y-4",children:[d.jsx(j,{...e,enableRowSelection:!0,onRowSelectionChange:t}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium",children:"Selected Rows:"}),d.jsx("pre",{className:"mt-2 rounded bg-secondary text-secondary-foreground p-4",children:JSON.stringify(o,null,2)})]})]})},args:{columns:I,data:$},parameters:{docs:{description:{story:"Example of row selection with checkbox support and selection state display."}}}},X={args:{columns:I,data:$,columnPinning:{left:["firstName","lastName"]}},parameters:{docs:{description:{story:"Example of column pinning with firstName and lastName pinned to left."}}}},Q={render:e=>{const[o,t]=P.useState(null),[n,a]=P.useState(null);return d.jsxs("div",{className:"space-y-4",children:[d.jsx(j,{...e,onRowClick:t,onRowDoubleClick:a}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium",children:"Last Clicked Row:"}),d.jsx("pre",{className:"mt-2 rounded bg-secondary text-secondary-foreground p-4",children:o?JSON.stringify(o.original,null,2):"None"})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium",children:"Last Double-Clicked Row:"}),d.jsx("pre",{className:"mt-2 rounded bg-secondary text-secondary-foreground p-4",children:n?JSON.stringify(n.original,null,2):"None"})]})]})]})},args:{columns:I,data:$},parameters:{docs:{description:{story:"Example of row click and double-click events with display of the clicked row data."}}}},Z={args:{columns:I,data:$,bordered:!0},parameters:{docs:{description:{story:"Table with borders between columns for better visual separation."}}}},ee={args:{columns:I,data:$,enablePagination:!0,classNames:{root:"custom-root-class",tableWrapper:"custom-table-wrapper shadow-lg",table:"custom-table",header:"custom-header",headerRow:"custom-header-row",headerCell:"custom-header-cell",body:"custom-body",row:"custom-row hover:bg-slate-50",cell:"custom-cell",pagination:"custom-pagination mt-4",paginationButton:"custom-pagination-button",rowsPerPageSelect:"custom-rows-per-page-select",pageInfo:"custom-page-info font-semibold",noResults:"custom-no-results italic"}},parameters:{docs:{description:{story:"Example of customizing the appearance of different table parts using custom class names. Note that header cells have a primary background color by default."}}}},te={args:{columns:I,data:$,enablePagination:!0,classNames:{headerCell:"bg-secondary text-secondary-foreground"}},parameters:{docs:{description:{story:"Example of overriding the default primary header color with a secondary color scheme."}}}},ne={args:{columns:I,data:$,enablePagination:!0,pageSizeLabel:"Items per page"},parameters:{docs:{description:{story:"Example of customizing the page size label text."}}}},oe={args:{columns:I,data:$,enablePagination:!0,showPage:!1},parameters:{docs:{description:{story:"Example of pagination without the page number display."}}}},ae={render:e=>{const[o,t]=P.useState([]),[n,a]=P.useState(!0),[r,s]=P.useState({pageSize:10,pageIndex:0}),[i,l]=P.useState(0),c=[{accessorKey:"name",header:"Name"},{accessorKey:"height",header:"Height (cm)"},{accessorKey:"mass",header:"Mass (kg)"},{accessorKey:"birthYear",header:"Birth Year"},{accessorKey:"gender",header:"Gender"}];return P.useEffect(()=>{(async()=>{a(!0);try{const p=await Qe(r.pageIndex+1,r.pageSize);t(p.data),l(p.totalRecords)}catch(p){console.error("Error loading Star Wars data:",p)}finally{a(!1)}})()},[r.pageIndex,r.pageSize]),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"rounded-lg border p-4",children:[d.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Star Wars Characters"}),d.jsx(j,{...e,columns:c,data:o,enablePagination:!0,pagination:r,onPaginationChange:s,pageSizeLabel:"Characters per page",bordered:!0,loading:n})]}),d.jsxs("div",{className:"rounded-lg border bg-card p-4",children:[d.jsxs("h3",{className:"font-medium",children:["Total Records: ",i]}),d.jsxs("p",{className:"mt-2 text-sm text-muted-foreground",children:["Data provided by"," ",d.jsx("a",{href:"https://swapi.tech",target:"_blank",rel:"noopener noreferrer",className:"font-medium text-primary hover:underline",children:"SWAPI.tech"})]})]})]})},args:{showPage:!0},parameters:{docs:{description:{story:"A fully functional example using the Star Wars API (SWAPI) with server-side pagination and loading states."}}}},re={args:{columns:I,data:[],loading:!0,enablePagination:!0},parameters:{docs:{description:{story:"Example showing the loading state overlay on the table."}}}},se={render:e=>{const o=()=>d.jsxs("div",{className:"flex flex-col items-center gap-2 py-4",children:[d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-muted-foreground",children:[d.jsx("title",{children:"Upload Icon"}),d.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d.jsx("polyline",{points:"17 8 12 3 7 8"}),d.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),d.jsx("p",{className:"text-sm text-muted-foreground",children:"No data available"}),d.jsx("p",{className:"text-xs text-muted-foreground/80",children:"Try adjusting your filters or search terms"})]});return d.jsxs("div",{className:"space-y-8",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"mb-4 text-sm font-medium",children:"With Text Message"}),d.jsx(j,{...e,data:[],emptyMessage:"No data found. Please try again."})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-4 text-sm font-medium",children:"With Custom Component"}),d.jsx(j,{...e,data:[],emptyMessage:d.jsx(o,{})})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"mb-4 text-sm font-medium",children:"Default Empty Message"}),d.jsx(j,{...e,data:[]})]})]})},args:{columns:I,enablePagination:!0},parameters:{docs:{description:{story:"Examples of customizing the empty state message with both text and a custom component."}}}},ie={args:{columns:I,data:$,loading:!0},parameters:{docs:{description:{story:"Table showing loading state with overlay."}}}},le={args:{columns:I,data:[],emptyMessage:"No data available. Try adjusting your filters."},parameters:{docs:{description:{story:"Table showing custom empty state message when no data is available."}}}},ue={args:{columns:I,data:$,classNames:cn,bordered:!0},parameters:{docs:{description:{story:"Table with custom class names applied to different parts of the table structure."}}}},de={render:function(){const[o,t]=P.useState(!1),[n,a]=P.useState([]),[r,s]=P.useState({pageSize:10,pageIndex:0}),i=[{accessorKey:"name",header:"Name"},{accessorKey:"height",header:"Height"},{accessorKey:"mass",header:"Mass"},{accessorKey:"birthYear",header:"Birth Year"},{accessorKey:"gender",header:"Gender"}];return P.useEffect(()=>{(async()=>{t(!0);try{const c=await Qe(r.pageIndex+1,r.pageSize);a(c.data)}catch(c){console.error("Failed to fetch data:",c)}finally{t(!1)}})()},[r.pageIndex,r.pageSize]),d.jsx(j,{columns:i,data:n,enablePagination:!0,pagination:r,onPaginationChange:s,loading:o})},parameters:{docs:{description:{story:"Table demonstrating server-side pagination with loading states, fetching Star Wars character data from SWAPI."}}}},ce={name:"With Left Pinned Columns",args:{columns:we,data:Ee,columnPinning:{left:["id","firstName","lastName"],right:[]}},parameters:{docs:{description:{story:"Example of a table with two columns pinned to the left side. The table container has a fixed width to demonstrate horizontal scrolling behavior."}}},decorators:[e=>d.jsx("div",{style:{width:"500px",overflow:"auto"},children:d.jsx(e,{})})]},ge={name:"With Right Pinned Columns",args:{columns:we,data:Ee,columnPinning:{left:[],right:["department","location"]}},parameters:{docs:{description:{story:"Example of a table with two columns pinned to the right side. The table container has a fixed width to demonstrate horizontal scrolling behavior."}}},decorators:[e=>d.jsx("div",{style:{width:"500px",overflow:"auto"},children:d.jsx(e,{})})]},me={name:"With Both Sides Pinned Columns",args:{columns:we,data:Ee,columnPinning:{left:["id","firstName"],right:["location"]},bordered:!0},parameters:{docs:{description:{story:"Example of a table with columns pinned to both left and right sides. The table container has a fixed width to demonstrate horizontal scrolling behavior."}}},decorators:[e=>d.jsx("div",{style:{width:"500px",overflow:"auto"},children:d.jsx(e,{})})]},gn=[{id:"1",name:"John Doe",amount:1234.56,status:"Active",date:"2024-03-20"},{id:"2",name:"Jane Smith",amount:2345.67,status:"Inactive",date:"2024-03-21"},{id:"3",name:"Bob Johnson",amount:3456.78,status:"Pending",date:"2024-03-22"}],pe={name:"With Column Alignment",args:{data:gn,columns:[{accessorKey:"id",header:()=>d.jsx("div",{className:"w-full text-left",children:"ID"}),cell:({cell:e})=>d.jsx("div",{className:"text-left",children:e.getValue()})},{accessorKey:"name",header:()=>d.jsx("div",{className:"w-full text-left",children:"Name"}),cell:({cell:e})=>d.jsx("div",{className:"text-left font-medium",children:e.getValue()})},{accessorKey:"amount",header:()=>d.jsx("div",{className:"w-full text-right",children:"Amount"}),cell:({cell:e})=>d.jsxs("div",{className:"text-right font-mono",children:["$",e.getValue().toFixed(2)]})},{accessorKey:"status",header:()=>d.jsx("div",{className:"w-full text-center",children:"Status"}),cell:({cell:e})=>d.jsx("div",{className:"text-center",children:d.jsx("span",{className:`inline-block px-2 py-1 rounded-full text-xs font-medium
              ${e.getValue()==="Active"?"bg-green-100 text-green-800":""}
              ${e.getValue()==="Inactive"?"bg-red-100 text-red-800":""}
              ${e.getValue()==="Pending"?"bg-yellow-100 text-yellow-800":""}
            `,children:e.getValue()})})},{accessorKey:"date",header:()=>d.jsx("div",{className:"w-full text-center",children:"Date"}),cell:({cell:e})=>d.jsx("div",{className:"text-center font-mono",children:new Date(e.getValue()).toLocaleDateString()})}],bordered:!0},parameters:{docs:{description:{story:`Example demonstrating different text alignments for both headers and cells:
- ID: Left-aligned header and content (default for text)
- Name: Left-aligned header and content with medium font weight
- Amount: Right-aligned header and content with monospace font (common for numbers)
- Status: Center-aligned header and content with colored badges
- Date: Center-aligned header and content with monospace font

The header alignment matches the cell alignment for visual consistency. Each header div uses w-full to ensure proper alignment across the entire cell width.`}}}},mn=[{id:"1",firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com"},{id:"2",firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com"},{id:"3",firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com"},{id:"4",firstName:"Alice",lastName:"Williams",age:28,email:"alice.williams@example.com"},{id:"5",firstName:"Charlie",lastName:"Brown",age:42,email:"charlie.brown@example.com"},{id:"6",firstName:"Eva",lastName:"Davis",age:31,email:"eva.davis@example.com"},{id:"7",firstName:"Frank",lastName:"Miller",age:29,email:"frank.miller@example.com"},{id:"8",firstName:"Grace",lastName:"Wilson",age:36,email:"grace.wilson@example.com"},{id:"9",firstName:"Henry",lastName:"Taylor",age:33,email:"henry.taylor@example.com"},{id:"10",firstName:"Ivy",lastName:"Anderson",age:27,email:"ivy.anderson@example.com"},{id:"11",firstName:"Jack",lastName:"Thomas",age:38,email:"jack.thomas@example.com"},{id:"12",firstName:"Kelly",lastName:"Roberts",age:34,email:"kelly.roberts@example.com"},{id:"13",firstName:"Liam",lastName:"Clark",age:32,email:"liam.clark@example.com"},{id:"14",firstName:"Mia",lastName:"Lewis",age:29,email:"mia.lewis@example.com"},{id:"15",firstName:"Noah",lastName:"Walker",age:41,email:"noah.walker@example.com"},{id:"16",firstName:"Olivia",lastName:"Hall",age:26,email:"olivia.hall@example.com"},{id:"17",firstName:"Peter",lastName:"Young",age:37,email:"peter.young@example.com"},{id:"18",firstName:"Quinn",lastName:"King",age:31,email:"quinn.king@example.com"},{id:"19",firstName:"Rachel",lastName:"Scott",age:28,email:"rachel.scott@example.com"},{id:"20",firstName:"Samuel",lastName:"Green",age:39,email:"samuel.green@example.com"}],fe={args:{columns:we,data:mn,bordered:!0,enableRowSelection:!0,enableColumnResizing:!0,classNames:{tableWrapper:"h-[400px] w-[600px]",headerCell:"bg-secondary text-secondary-foreground",row:"hover:bg-muted/50",body:"bg-background"},columnPinning:{left:["select","id"]},onRowSelectionChange:e=>{console.log("Selected rows:",e)},onRowClick:e=>{console.log("Row clicked:",e)},onRowDoubleClick:e=>{console.log("Row double clicked:",e)}},parameters:{docs:{description:{story:`Table with fixed height (400px) and scrollable content. Features:
- Fixed header that stays visible while scrolling
- Horizontal and vertical scrolling
- Row selection with checkbox column
- Column resizing
- Custom styling
- Row hover effect`}}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table configuration without any advanced features enabled.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    enablePagination: true,
    enableRowSelection: true,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    onRowSelectionChange: fn(),
    pagination: {
      pageSize: 10,
      pageIndex: 0
    },
    columnPinning: {
      left: ['select', 'firstName', 'lastName']
    },
    bordered: true,
    pageSizeLabel: 'Display rows'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with all features enabled: pagination with custom label, row selection, column resizing, column pinning, and borders.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [pagination, setPagination] = useState({
      pageSize: 10,
      pageIndex: 0
    });
    return <DataTable<Person> {...args} enablePagination pagination={pagination} onPaginationChange={setPagination} />;
  },
  args: {
    columns,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled pagination with 2 items per page.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState<Person[]>([]);
    return <div className="space-y-4">
        <DataTable<Person> {...args} enableRowSelection onRowSelectionChange={setSelectedRows} />
        <div>
          <h3 className="font-medium">Selected Rows:</h3>
          <pre className="mt-2 rounded bg-secondary text-secondary-foreground p-4">
            {JSON.stringify(selectedRows, null, 2)}
          </pre>
        </div>
      </div>;
  },
  args: {
    columns,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of row selection with checkbox support and selection state display.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    columnPinning: {
      left: ['firstName', 'lastName']
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of column pinning with firstName and lastName pinned to left.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [lastClickedRow, setLastClickedRow] = useState<Row<Person> | null>(null);
    const [lastDoubleClickedRow, setLastDoubleClickedRow] = useState<Row<Person> | null>(null);
    return <div className="space-y-4">
        <DataTable<Person> {...args} onRowClick={setLastClickedRow} onRowDoubleClick={setLastDoubleClickedRow} />
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Last Clicked Row:</h3>
            <pre className="mt-2 rounded bg-secondary text-secondary-foreground p-4">
              {lastClickedRow ? JSON.stringify(lastClickedRow.original, null, 2) : 'None'}
            </pre>
          </div>
          <div>
            <h3 className="font-medium">Last Double-Clicked Row:</h3>
            <pre className="mt-2 rounded bg-secondary text-secondary-foreground p-4">
              {lastDoubleClickedRow ? JSON.stringify(lastDoubleClickedRow.original, null, 2) : 'None'}
            </pre>
          </div>
        </div>
      </div>;
  },
  args: {
    columns,
    data
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of row click and double-click events with display of the clicked row data.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with borders between columns for better visual separation.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    enablePagination: true,
    classNames: {
      root: 'custom-root-class',
      tableWrapper: 'custom-table-wrapper shadow-lg',
      table: 'custom-table',
      header: 'custom-header',
      headerRow: 'custom-header-row',
      headerCell: 'custom-header-cell',
      body: 'custom-body',
      row: 'custom-row hover:bg-slate-50',
      cell: 'custom-cell',
      pagination: 'custom-pagination mt-4',
      paginationButton: 'custom-pagination-button',
      rowsPerPageSelect: 'custom-rows-per-page-select',
      pageInfo: 'custom-page-info font-semibold',
      noResults: 'custom-no-results italic'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of customizing the appearance of different table parts using custom class names. Note that header cells have a primary background color by default.'
      }
    }
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    enablePagination: true,
    classNames: {
      headerCell: 'bg-secondary text-secondary-foreground'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of overriding the default primary header color with a secondary color scheme.'
      }
    }
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    enablePagination: true,
    pageSizeLabel: 'Items per page'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of customizing the page size label text.'
      }
    }
  }
}`,...ne.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    enablePagination: true,
    showPage: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of pagination without the page number display.'
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [data, setData] = useState<SWAPIPerson[]>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState<DataTablePaginationState>({
      pageSize: 10,
      pageIndex: 0
    });
    const [totalRecords, setTotalRecords] = useState(0);
    const columns: ColumnDef<SWAPIPerson>[] = [{
      accessorKey: 'name',
      header: 'Name'
    }, {
      accessorKey: 'height',
      header: 'Height (cm)'
    }, {
      accessorKey: 'mass',
      header: 'Mass (kg)'
    }, {
      accessorKey: 'birthYear',
      header: 'Birth Year'
    }, {
      accessorKey: 'gender',
      header: 'Gender'
    }];
    useEffect(() => {
      const loadData = async () => {
        setLoading(true);
        try {
          const result = await fetchPeople(pagination.pageIndex + 1, pagination.pageSize);
          setData(result.data);
          setTotalRecords(result.totalRecords);
        } catch (error) {
          console.error('Error loading Star Wars data:', error);
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }, [pagination.pageIndex, pagination.pageSize]);
    return <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-bold">Star Wars Characters</h2>
          <DataTable<SWAPIPerson> {...args} columns={columns} data={data} enablePagination pagination={pagination} onPaginationChange={setPagination} pageSizeLabel="Characters per page" bordered loading={loading} />
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-medium">Total Records: {totalRecords}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Data provided by{' '}
            <a href="https://swapi.tech" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
              SWAPI.tech
            </a>
          </p>
        </div>
      </div>;
  },
  args: {
    showPage: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A fully functional example using the Star Wars API (SWAPI) with server-side pagination and loading states.'
      }
    }
  }
}`,...ae.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true,
    enablePagination: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the loading state overlay on the table.'
      }
    }
  }
}`,...re.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: args => {
    // Custom component for empty state
    const CustomEmptyMessage = () => <div className="flex flex-col items-center gap-2 py-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
          <title>Upload Icon</title>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p className="text-sm text-muted-foreground">No data available</p>
        <p className="text-xs text-muted-foreground/80">
          Try adjusting your filters or search terms
        </p>
      </div>;
    return <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-sm font-medium">With Text Message</h3>
          <DataTable<Person> {...args} data={[]} emptyMessage="No data found. Please try again." />
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium">With Custom Component</h3>
          <DataTable<Person> {...args} data={[]} emptyMessage={<CustomEmptyMessage />} />
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium">Default Empty Message</h3>
          <DataTable<Person> {...args} data={[]} />
        </div>
      </div>;
  },
  args: {
    columns,
    enablePagination: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples of customizing the empty state message with both text and a custom component.'
      }
    }
  }
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table showing loading state with overlay.'
      }
    }
  }
}`,...ie.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    emptyMessage: 'No data available. Try adjusting your filters.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table showing custom empty state message when no data is available.'
      }
    }
  }
}`,...le.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    classNames: exampleClassNames,
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom class names applied to different parts of the table structure.'
      }
    }
  }
}`,...ue.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<SWAPIPerson[]>([]);
    const [pagination, setPagination] = useState<DataTablePaginationState>({
      pageSize: 10,
      pageIndex: 0
    });
    const columns: ColumnDef<SWAPIPerson>[] = [{
      accessorKey: 'name',
      header: 'Name'
    }, {
      accessorKey: 'height',
      header: 'Height'
    }, {
      accessorKey: 'mass',
      header: 'Mass'
    }, {
      accessorKey: 'birthYear',
      header: 'Birth Year'
    }, {
      accessorKey: 'gender',
      header: 'Gender'
    }];
    useEffect(() => {
      const loadData = async () => {
        setLoading(true);
        try {
          const response = await fetchPeople(pagination.pageIndex + 1, pagination.pageSize);
          setData(response.data);
        } catch (error) {
          console.error('Failed to fetch data:', error);
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }, [pagination.pageIndex, pagination.pageSize]);
    return <DataTable columns={columns} data={data} enablePagination pagination={pagination} onPaginationChange={setPagination} loading={loading} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table demonstrating server-side pagination with loading states, fetching Star Wars character data from SWAPI.'
      }
    }
  }
}`,...de.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  name: 'With Left Pinned Columns',
  args: {
    columns: wideColumns,
    data: wideData,
    // bordered: true,
    columnPinning: {
      left: ['id', 'firstName', 'lastName'],
      right: []
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a table with two columns pinned to the left side. The table container has a fixed width to demonstrate horizontal scrolling behavior.'
      }
    }
  },
  decorators: [Story => <div style={{
    width: '500px',
    overflow: 'auto'
  }}>
        <Story />
      </div>]
}`,...ce.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  name: 'With Right Pinned Columns',
  args: {
    columns: wideColumns,
    data: wideData,
    columnPinning: {
      left: [],
      right: ['department', 'location']
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a table with two columns pinned to the right side. The table container has a fixed width to demonstrate horizontal scrolling behavior.'
      }
    }
  },
  decorators: [Story => <div style={{
    width: '500px',
    overflow: 'auto'
  }}>
        <Story />
      </div>]
}`,...ge.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  name: 'With Both Sides Pinned Columns',
  args: {
    columns: wideColumns,
    data: wideData,
    columnPinning: {
      left: ['id', 'firstName'],
      right: ['location']
    },
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a table with columns pinned to both left and right sides. The table container has a fixed width to demonstrate horizontal scrolling behavior.'
      }
    }
  },
  decorators: [Story => <div style={{
    width: '500px',
    overflow: 'auto'
  }}>
        <Story />
      </div>]
}`,...me.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  name: 'With Column Alignment',
  args: {
    data: alignmentData,
    columns: [{
      accessorKey: 'id',
      header: () => <div className="w-full text-left">ID</div>,
      cell: ({
        cell
      }) => <div className="text-left">{cell.getValue() as string}</div>
    }, {
      accessorKey: 'name',
      header: () => <div className="w-full text-left">Name</div>,
      cell: ({
        cell
      }) => <div className="text-left font-medium">{cell.getValue() as string}</div>
    }, {
      accessorKey: 'amount',
      header: () => <div className="w-full text-right">Amount</div>,
      cell: ({
        cell
      }) => <div className="text-right font-mono">\${(cell.getValue() as number).toFixed(2)}</div>
    }, {
      accessorKey: 'status',
      header: () => <div className="w-full text-center">Status</div>,
      cell: ({
        cell
      }) => <div className="text-center">
            <span className={\`inline-block px-2 py-1 rounded-full text-xs font-medium
              \${cell.getValue() === 'Active' ? 'bg-green-100 text-green-800' : ''}
              \${cell.getValue() === 'Inactive' ? 'bg-red-100 text-red-800' : ''}
              \${cell.getValue() === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
            \`}>
              {cell.getValue() as string}
            </span>
          </div>
    }, {
      accessorKey: 'date',
      header: () => <div className="w-full text-center">Date</div>,
      cell: ({
        cell
      }) => <div className="text-center font-mono">
            {new Date(cell.getValue() as string).toLocaleDateString()}
          </div>
    }],
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: \`Example demonstrating different text alignments for both headers and cells:
- ID: Left-aligned header and content (default for text)
- Name: Left-aligned header and content with medium font weight
- Amount: Right-aligned header and content with monospace font (common for numbers)
- Status: Center-aligned header and content with colored badges
- Date: Center-aligned header and content with monospace font

The header alignment matches the cell alignment for visual consistency. Each header div uses w-full to ensure proper alignment across the entire cell width.\`
      }
    }
  }
}`,...pe.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  args: {
    columns: wideColumns,
    data: largeDataSet,
    bordered: true,
    enableRowSelection: true,
    enableColumnResizing: true,
    classNames: {
      tableWrapper: 'h-[400px] w-[600px]',
      headerCell: 'bg-secondary text-secondary-foreground',
      row: 'hover:bg-muted/50',
      body: 'bg-background'
    },
    columnPinning: {
      left: ['select', 'id']
    },
    onRowSelectionChange: selectedRows => {
      console.log('Selected rows:', selectedRows);
    },
    onRowClick: row => {
      console.log('Row clicked:', row);
    },
    onRowDoubleClick: row => {
      console.log('Row double clicked:', row);
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`Table with fixed height (400px) and scrollable content. Features:
- Fixed header that stays visible while scrolling
- Horizontal and vertical scrolling
- Row selection with checkbox column
- Column resizing
- Custom styling
- Row hover effect\`
      }
    }
  }
}`,...fe.parameters?.docs?.source}}};const no=["Default","WithAllFeatures","ControlledPagination","WithRowSelection","WithColumnPinning","WithRowClickEvents","WithBorders","WithCustomClassNames","WithCustomHeaderColors","WithCustomPageSizeLabel","WithoutPageNumber","StarWarsDataTable","WithLoadingState","WithEmptyMessage","WithLoading","WithEmptyState","WithCustomStyling","WithServerPagination","WithLeftPinnedColumns","WithRightPinnedColumns","WithBothSidesPinnedColumns","WithColumnAlignment","FixedHeightTable"];export{J as ControlledPagination,K as Default,fe as FixedHeightTable,ae as StarWarsDataTable,U as WithAllFeatures,Z as WithBorders,me as WithBothSidesPinnedColumns,pe as WithColumnAlignment,X as WithColumnPinning,ee as WithCustomClassNames,te as WithCustomHeaderColors,ne as WithCustomPageSizeLabel,ue as WithCustomStyling,se as WithEmptyMessage,le as WithEmptyState,ce as WithLeftPinnedColumns,ie as WithLoading,re as WithLoadingState,ge as WithRightPinnedColumns,Q as WithRowClickEvents,Y as WithRowSelection,de as WithServerPagination,oe as WithoutPageNumber,no as __namedExportsOrder,to as default};
