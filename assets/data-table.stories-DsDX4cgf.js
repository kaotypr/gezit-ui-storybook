import{j as g}from"./jsx-runtime-BjG_zV1W.js";import{r as _}from"./index-BgCQ941z.js";import{c as V}from"./cn-BEHD0UYf.js";import{C as Fe}from"./checkbox-Cwc5397B.js";import{a as We,P as qe,b as $e,c as Ke,e as Ue}from"./pagination-DJT6yGrl.js";import{a as Je,b as Xe,c as de,d as Ye,T as Qe,e as Me}from"./table-CLL7rw6B.js";import{c as ze}from"./createLucideIcon-BROHhCyT.js";import{a as Ze,b as et,c as tt,S as nt,d as ot}from"./select-BWl0jssQ.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-BMvmY0JD.js";import"./index-B9tD0Hfr.js";import"./index-RJnmdD4_.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./check-DLjw-kwL.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";import"./index-BdQq_4o_.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-DYKZN-PH.js";import"./index-Bxcmxnpx.js";import"./chevron-down-DX_dkZyb.js";import"./chevron-up-CCoYB0VF.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],at=ze("inbox",rt);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],it=ze("loader-circle",st);/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function A(e,o){return typeof e=="function"?e(o):e}function D(e,o){return t=>{o.setState(n=>({...n,[e]:A(t,n[e])}))}}function ue(e){return e instanceof Function}function lt(e){return Array.isArray(e)&&e.every(o=>typeof o=="number")}function ut(e,o){const t=[],n=r=>{r.forEach(a=>{t.push(a);const s=o(a);s!=null&&s.length&&n(s)})};return n(e),t}function S(e,o,t){let n=[],r;return a=>{let s;t.key&&t.debug&&(s=Date.now());const i=e(a);if(!(i.length!==n.length||i.some((p,m)=>n[m]!==p)))return r;n=i;let d;if(t.key&&t.debug&&(d=Date.now()),r=o(...i),t==null||t.onChange==null||t.onChange(r),t.key&&t.debug&&t!=null&&t.debug()){const p=Math.round((Date.now()-s)*100)/100,m=Math.round((Date.now()-d)*100)/100,c=m/16,u=(f,h)=>{for(f=String(f);f.length<h;)f=" "+f;return f};console.info(`%c⏱ ${u(m,5)} /${u(p,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*c,120))}deg 100% 31%);`,t?.key)}return r}}function w(e,o,t,n){return{debug:()=>{var r;return(r=e?.debugAll)!=null?r:e[o]},key:!1,onChange:n}}function dt(e,o,t,n){const r=()=>{var s;return(s=a.getValue())!=null?s:e.options.renderFallbackValue},a={id:`${o.id}_${t.id}`,row:o,column:t,getValue:()=>o.getValue(n),renderValue:r,getContext:S(()=>[e,t,o,a],(s,i,l,d)=>({table:s,column:i,row:l,cell:d,getValue:d.getValue,renderValue:d.renderValue}),w(e.options,"debugCells"))};return e._features.forEach(s=>{s.createCell==null||s.createCell(a,t,o,e)},{}),a}function gt(e,o,t,n){var r,a;const i={...e._getDefaultColumnDef(),...o},l=i.accessorKey;let d=(r=(a=i.id)!=null?a:l?typeof String.prototype.replaceAll=="function"?l.replaceAll(".","_"):l.replace(/\./g,"_"):void 0)!=null?r:typeof i.header=="string"?i.header:void 0,p;if(i.accessorFn?p=i.accessorFn:l&&(l.includes(".")?p=c=>{let u=c;for(const h of l.split(".")){var f;u=(f=u)==null?void 0:f[h]}return u}:p=c=>c[i.accessorKey]),!d)throw new Error;let m={id:`${String(d)}`,accessorFn:p,parent:n,depth:t,columnDef:i,columns:[],getFlatColumns:S(()=>[!0],()=>{var c;return[m,...(c=m.columns)==null?void 0:c.flatMap(u=>u.getFlatColumns())]},w(e.options,"debugColumns")),getLeafColumns:S(()=>[e._getOrderColumnsFn()],c=>{var u;if((u=m.columns)!=null&&u.length){let f=m.columns.flatMap(h=>h.getLeafColumns());return c(f)}return[m]},w(e.options,"debugColumns"))};for(const c of e._features)c.createColumn==null||c.createColumn(m,e);return m}const I="debugHeaders";function be(e,o,t){var n;let a={id:(n=t.id)!=null?n:o.id,column:o,index:t.index,isPlaceholder:!!t.isPlaceholder,placeholderId:t.placeholderId,depth:t.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const s=[],i=l=>{l.subHeaders&&l.subHeaders.length&&l.subHeaders.map(i),s.push(l)};return i(a),s},getContext:()=>({table:e,header:a,column:o})};return e._features.forEach(s=>{s.createHeader==null||s.createHeader(a,e)}),a}const ct={createTable:e=>{e.getHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(o,t,n,r)=>{var a,s;const i=(a=n?.map(m=>t.find(c=>c.id===m)).filter(Boolean))!=null?a:[],l=(s=r?.map(m=>t.find(c=>c.id===m)).filter(Boolean))!=null?s:[],d=t.filter(m=>!(n!=null&&n.includes(m.id))&&!(r!=null&&r.includes(m.id)));return G(o,[...i,...d,...l],e)},w(e.options,I)),e.getCenterHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(o,t,n,r)=>(t=t.filter(a=>!(n!=null&&n.includes(a.id))&&!(r!=null&&r.includes(a.id))),G(o,t,e,"center")),w(e.options,I)),e.getLeftHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(o,t,n)=>{var r;const a=(r=n?.map(s=>t.find(i=>i.id===s)).filter(Boolean))!=null?r:[];return G(o,a,e,"left")},w(e.options,I)),e.getRightHeaderGroups=S(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(o,t,n)=>{var r;const a=(r=n?.map(s=>t.find(i=>i.id===s)).filter(Boolean))!=null?r:[];return G(o,a,e,"right")},w(e.options,I)),e.getFooterGroups=S(()=>[e.getHeaderGroups()],o=>[...o].reverse(),w(e.options,I)),e.getLeftFooterGroups=S(()=>[e.getLeftHeaderGroups()],o=>[...o].reverse(),w(e.options,I)),e.getCenterFooterGroups=S(()=>[e.getCenterHeaderGroups()],o=>[...o].reverse(),w(e.options,I)),e.getRightFooterGroups=S(()=>[e.getRightHeaderGroups()],o=>[...o].reverse(),w(e.options,I)),e.getFlatHeaders=S(()=>[e.getHeaderGroups()],o=>o.map(t=>t.headers).flat(),w(e.options,I)),e.getLeftFlatHeaders=S(()=>[e.getLeftHeaderGroups()],o=>o.map(t=>t.headers).flat(),w(e.options,I)),e.getCenterFlatHeaders=S(()=>[e.getCenterHeaderGroups()],o=>o.map(t=>t.headers).flat(),w(e.options,I)),e.getRightFlatHeaders=S(()=>[e.getRightHeaderGroups()],o=>o.map(t=>t.headers).flat(),w(e.options,I)),e.getCenterLeafHeaders=S(()=>[e.getCenterFlatHeaders()],o=>o.filter(t=>{var n;return!((n=t.subHeaders)!=null&&n.length)}),w(e.options,I)),e.getLeftLeafHeaders=S(()=>[e.getLeftFlatHeaders()],o=>o.filter(t=>{var n;return!((n=t.subHeaders)!=null&&n.length)}),w(e.options,I)),e.getRightLeafHeaders=S(()=>[e.getRightFlatHeaders()],o=>o.filter(t=>{var n;return!((n=t.subHeaders)!=null&&n.length)}),w(e.options,I)),e.getLeafHeaders=S(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(o,t,n)=>{var r,a,s,i,l,d;return[...(r=(a=o[0])==null?void 0:a.headers)!=null?r:[],...(s=(i=t[0])==null?void 0:i.headers)!=null?s:[],...(l=(d=n[0])==null?void 0:d.headers)!=null?l:[]].map(p=>p.getLeafHeaders()).flat()},w(e.options,I))}};function G(e,o,t,n){var r,a;let s=0;const i=function(c,u){u===void 0&&(u=1),s=Math.max(s,u),c.filter(f=>f.getIsVisible()).forEach(f=>{var h;(h=f.columns)!=null&&h.length&&i(f.columns,u+1)},0)};i(e);let l=[];const d=(c,u)=>{const f={depth:u,id:[n,`${u}`].filter(Boolean).join("_"),headers:[]},h=[];c.forEach(R=>{const C=[...h].reverse()[0],P=R.column.depth===f.depth;let y,z=!1;if(P&&R.column.parent?y=R.column.parent:(y=R.column,z=!0),C&&C?.column===y)C.subHeaders.push(R);else{const b=be(t,y,{id:[n,u,y.id,R?.id].filter(Boolean).join("_"),isPlaceholder:z,placeholderId:z?`${h.filter(x=>x.column===y).length}`:void 0,depth:u,index:h.length});b.subHeaders.push(R),h.push(b)}f.headers.push(R),R.headerGroup=f}),l.push(f),u>0&&d(h,u-1)},p=o.map((c,u)=>be(t,c,{depth:s,index:u}));d(p,s-1),l.reverse();const m=c=>c.filter(f=>f.column.getIsVisible()).map(f=>{let h=0,R=0,C=[0];f.subHeaders&&f.subHeaders.length?(C=[],m(f.subHeaders).forEach(y=>{let{colSpan:z,rowSpan:b}=y;h+=z,C.push(b)})):h=1;const P=Math.min(...C);return R=R+P,f.colSpan=h,f.rowSpan=R,{colSpan:h,rowSpan:R}});return m((r=(a=l[0])==null?void 0:a.headers)!=null?r:[]),l}const pt=(e,o,t,n,r,a,s)=>{let i={id:o,index:n,original:t,depth:r,parentId:s,_valuesCache:{},_uniqueValuesCache:{},getValue:l=>{if(i._valuesCache.hasOwnProperty(l))return i._valuesCache[l];const d=e.getColumn(l);if(d!=null&&d.accessorFn)return i._valuesCache[l]=d.accessorFn(i.original,n),i._valuesCache[l]},getUniqueValues:l=>{if(i._uniqueValuesCache.hasOwnProperty(l))return i._uniqueValuesCache[l];const d=e.getColumn(l);if(d!=null&&d.accessorFn)return d.columnDef.getUniqueValues?(i._uniqueValuesCache[l]=d.columnDef.getUniqueValues(i.original,n),i._uniqueValuesCache[l]):(i._uniqueValuesCache[l]=[i.getValue(l)],i._uniqueValuesCache[l])},renderValue:l=>{var d;return(d=i.getValue(l))!=null?d:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>ut(i.subRows,l=>l.subRows),getParentRow:()=>i.parentId?e.getRow(i.parentId,!0):void 0,getParentRows:()=>{let l=[],d=i;for(;;){const p=d.getParentRow();if(!p)break;l.push(p),d=p}return l.reverse()},getAllCells:S(()=>[e.getAllLeafColumns()],l=>l.map(d=>dt(e,i,d,d.id)),w(e.options,"debugRows")),_getAllCellsByColumnId:S(()=>[i.getAllCells()],l=>l.reduce((d,p)=>(d[p.column.id]=p,d),{}),w(e.options,"debugRows"))};for(let l=0;l<e._features.length;l++){const d=e._features[l];d==null||d.createRow==null||d.createRow(i,e)}return i},mt={createColumn:(e,o)=>{e._getFacetedRowModel=o.options.getFacetedRowModel&&o.options.getFacetedRowModel(o,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():o.getPreFilteredRowModel(),e._getFacetedUniqueValues=o.options.getFacetedUniqueValues&&o.options.getFacetedUniqueValues(o,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=o.options.getFacetedMinMaxValues&&o.options.getFacetedMinMaxValues(o,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}}},Ee=(e,o,t)=>{var n,r;const a=t==null||(n=t.toString())==null?void 0:n.toLowerCase();return!!(!((r=e.getValue(o))==null||(r=r.toString())==null||(r=r.toLowerCase())==null)&&r.includes(a))};Ee.autoRemove=e=>E(e);const Ne=(e,o,t)=>{var n;return!!(!((n=e.getValue(o))==null||(n=n.toString())==null)&&n.includes(t))};Ne.autoRemove=e=>E(e);const Le=(e,o,t)=>{var n;return((n=e.getValue(o))==null||(n=n.toString())==null?void 0:n.toLowerCase())===t?.toLowerCase()};Le.autoRemove=e=>E(e);const Ae=(e,o,t)=>{var n;return(n=e.getValue(o))==null?void 0:n.includes(t)};Ae.autoRemove=e=>E(e);const je=(e,o,t)=>!t.some(n=>{var r;return!((r=e.getValue(o))!=null&&r.includes(n))});je.autoRemove=e=>E(e)||!(e!=null&&e.length);const Te=(e,o,t)=>t.some(n=>{var r;return(r=e.getValue(o))==null?void 0:r.includes(n)});Te.autoRemove=e=>E(e)||!(e!=null&&e.length);const He=(e,o,t)=>e.getValue(o)===t;He.autoRemove=e=>E(e);const ke=(e,o,t)=>e.getValue(o)==t;ke.autoRemove=e=>E(e);const ye=(e,o,t)=>{let[n,r]=t;const a=e.getValue(o);return a>=n&&a<=r};ye.resolveFilterValue=e=>{let[o,t]=e,n=typeof o!="number"?parseFloat(o):o,r=typeof t!="number"?parseFloat(t):t,a=o===null||Number.isNaN(n)?-1/0:n,s=t===null||Number.isNaN(r)?1/0:r;if(a>s){const i=a;a=s,s=i}return[a,s]};ye.autoRemove=e=>E(e)||E(e[0])&&E(e[1]);const L={includesString:Ee,includesStringSensitive:Ne,equalsString:Le,arrIncludes:Ae,arrIncludesAll:je,arrIncludesSome:Te,equals:He,weakEquals:ke,inNumberRange:ye};function E(e){return e==null||e===""}const ft={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],...e}),getDefaultOptions:e=>({onColumnFiltersChange:D("columnFilters",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100}),createColumn:(e,o)=>{e.getAutoFilterFn=()=>{const t=o.getCoreRowModel().flatRows[0],n=t?.getValue(e.id);return typeof n=="string"?L.includesString:typeof n=="number"?L.inNumberRange:typeof n=="boolean"||n!==null&&typeof n=="object"?L.equals:Array.isArray(n)?L.arrIncludes:L.weakEquals},e.getFilterFn=()=>{var t,n;return ue(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(t=(n=o.options.filterFns)==null?void 0:n[e.columnDef.filterFn])!=null?t:L[e.columnDef.filterFn]},e.getCanFilter=()=>{var t,n,r;return((t=e.columnDef.enableColumnFilter)!=null?t:!0)&&((n=o.options.enableColumnFilters)!=null?n:!0)&&((r=o.options.enableFilters)!=null?r:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var t;return(t=o.getState().columnFilters)==null||(t=t.find(n=>n.id===e.id))==null?void 0:t.value},e.getFilterIndex=()=>{var t,n;return(t=(n=o.getState().columnFilters)==null?void 0:n.findIndex(r=>r.id===e.id))!=null?t:-1},e.setFilterValue=t=>{o.setColumnFilters(n=>{const r=e.getFilterFn(),a=n?.find(p=>p.id===e.id),s=A(t,a?a.value:void 0);if(Ve(r,s,e)){var i;return(i=n?.filter(p=>p.id!==e.id))!=null?i:[]}const l={id:e.id,value:s};if(a){var d;return(d=n?.map(p=>p.id===e.id?l:p))!=null?d:[]}return n!=null&&n.length?[...n,l]:[l]})}},createRow:(e,o)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.setColumnFilters=o=>{const t=e.getAllLeafColumns(),n=r=>{var a;return(a=A(o,r))==null?void 0:a.filter(s=>{const i=t.find(l=>l.id===s.id);if(i){const l=i.getFilterFn();if(Ve(l,s.value,i))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(n)},e.resetColumnFilters=o=>{var t,n;e.setColumnFilters(o?[]:(t=(n=e.initialState)==null?void 0:n.columnFilters)!=null?t:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel())}};function Ve(e,o,t){return(e&&e.autoRemove?e.autoRemove(o,t):!1)||typeof o>"u"||typeof o=="string"&&!o}const ht=(e,o,t)=>t.reduce((n,r)=>{const a=r.getValue(e);return n+(typeof a=="number"?a:0)},0),St=(e,o,t)=>{let n;return t.forEach(r=>{const a=r.getValue(e);a!=null&&(n>a||n===void 0&&a>=a)&&(n=a)}),n},wt=(e,o,t)=>{let n;return t.forEach(r=>{const a=r.getValue(e);a!=null&&(n<a||n===void 0&&a>=a)&&(n=a)}),n},Ct=(e,o,t)=>{let n,r;return t.forEach(a=>{const s=a.getValue(e);s!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)))}),[n,r]},Rt=(e,o)=>{let t=0,n=0;if(o.forEach(r=>{let a=r.getValue(e);a!=null&&(a=+a)>=a&&(++t,n+=a)}),t)return n/t},vt=(e,o)=>{if(!o.length)return;const t=o.map(a=>a.getValue(e));if(!lt(t))return;if(t.length===1)return t[0];const n=Math.floor(t.length/2),r=t.sort((a,s)=>a-s);return t.length%2!==0?r[n]:(r[n-1]+r[n])/2},xt=(e,o)=>Array.from(new Set(o.map(t=>t.getValue(e))).values()),yt=(e,o)=>new Set(o.map(t=>t.getValue(e))).size,Pt=(e,o)=>o.length,ge={sum:ht,min:St,max:wt,extent:Ct,mean:Rt,median:vt,unique:xt,uniqueCount:yt,count:Pt},_t={getDefaultColumnDef:()=>({aggregatedCell:e=>{var o,t;return(o=(t=e.getValue())==null||t.toString==null?void 0:t.toString())!=null?o:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:D("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,o)=>{e.toggleGrouping=()=>{o.setGrouping(t=>t!=null&&t.includes(e.id)?t.filter(n=>n!==e.id):[...t??[],e.id])},e.getCanGroup=()=>{var t,n;return((t=e.columnDef.enableGrouping)!=null?t:!0)&&((n=o.options.enableGrouping)!=null?n:!0)&&(!!e.accessorFn||!!e.columnDef.getGroupingValue)},e.getIsGrouped=()=>{var t;return(t=o.getState().grouping)==null?void 0:t.includes(e.id)},e.getGroupedIndex=()=>{var t;return(t=o.getState().grouping)==null?void 0:t.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const t=e.getCanGroup();return()=>{t&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const t=o.getCoreRowModel().flatRows[0],n=t?.getValue(e.id);if(typeof n=="number")return ge.sum;if(Object.prototype.toString.call(n)==="[object Date]")return ge.extent},e.getAggregationFn=()=>{var t,n;if(!e)throw new Error;return ue(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(t=(n=o.options.aggregationFns)==null?void 0:n[e.columnDef.aggregationFn])!=null?t:ge[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=o=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(o),e.resetGrouping=o=>{var t,n;e.setGrouping(o?[]:(t=(n=e.initialState)==null?void 0:n.grouping)!=null?t:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,o)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=t=>{if(e._groupingValuesCache.hasOwnProperty(t))return e._groupingValuesCache[t];const n=o.getColumn(t);return n!=null&&n.columnDef.getGroupingValue?(e._groupingValuesCache[t]=n.columnDef.getGroupingValue(e.original),e._groupingValuesCache[t]):e.getValue(t)},e._groupingValuesCache={}},createCell:(e,o,t,n)=>{e.getIsGrouped=()=>o.getIsGrouped()&&o.id===t.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&o.getIsGrouped(),e.getIsAggregated=()=>{var r;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((r=t.subRows)!=null&&r.length)}}};function It(e,o,t){if(!(o!=null&&o.length)||!t)return e;const n=e.filter(a=>!o.includes(a.id));return t==="remove"?n:[...o.map(a=>e.find(s=>s.id===a)).filter(Boolean),...n]}const Ft={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:D("columnOrder",e)}),createColumn:(e,o)=>{e.getIndex=S(t=>[k(o,t)],t=>t.findIndex(n=>n.id===e.id),w(o.options,"debugColumns")),e.getIsFirstColumn=t=>{var n;return((n=k(o,t)[0])==null?void 0:n.id)===e.id},e.getIsLastColumn=t=>{var n;const r=k(o,t);return((n=r[r.length-1])==null?void 0:n.id)===e.id}},createTable:e=>{e.setColumnOrder=o=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(o),e.resetColumnOrder=o=>{var t;e.setColumnOrder(o?[]:(t=e.initialState.columnOrder)!=null?t:[])},e._getOrderColumnsFn=S(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(o,t,n)=>r=>{let a=[];if(!(o!=null&&o.length))a=r;else{const s=[...o],i=[...r];for(;i.length&&s.length;){const l=s.shift(),d=i.findIndex(p=>p.id===l);d>-1&&a.push(i.splice(d,1)[0])}a=[...a,...i]}return It(a,t,n)},w(e.options,"debugTable"))}},ce=()=>({left:[],right:[]}),$t={getInitialState:e=>({columnPinning:ce(),...e}),getDefaultOptions:e=>({onColumnPinningChange:D("columnPinning",e)}),createColumn:(e,o)=>{e.pin=t=>{const n=e.getLeafColumns().map(r=>r.id).filter(Boolean);o.setColumnPinning(r=>{var a,s;if(t==="right"){var i,l;return{left:((i=r?.left)!=null?i:[]).filter(m=>!(n!=null&&n.includes(m))),right:[...((l=r?.right)!=null?l:[]).filter(m=>!(n!=null&&n.includes(m))),...n]}}if(t==="left"){var d,p;return{left:[...((d=r?.left)!=null?d:[]).filter(m=>!(n!=null&&n.includes(m))),...n],right:((p=r?.right)!=null?p:[]).filter(m=>!(n!=null&&n.includes(m)))}}return{left:((a=r?.left)!=null?a:[]).filter(m=>!(n!=null&&n.includes(m))),right:((s=r?.right)!=null?s:[]).filter(m=>!(n!=null&&n.includes(m)))}})},e.getCanPin=()=>e.getLeafColumns().some(n=>{var r,a,s;return((r=n.columnDef.enablePinning)!=null?r:!0)&&((a=(s=o.options.enableColumnPinning)!=null?s:o.options.enablePinning)!=null?a:!0)}),e.getIsPinned=()=>{const t=e.getLeafColumns().map(i=>i.id),{left:n,right:r}=o.getState().columnPinning,a=t.some(i=>n?.includes(i)),s=t.some(i=>r?.includes(i));return a?"left":s?"right":!1},e.getPinnedIndex=()=>{var t,n;const r=e.getIsPinned();return r?(t=(n=o.getState().columnPinning)==null||(n=n[r])==null?void 0:n.indexOf(e.id))!=null?t:-1:0}},createRow:(e,o)=>{e.getCenterVisibleCells=S(()=>[e._getAllVisibleCells(),o.getState().columnPinning.left,o.getState().columnPinning.right],(t,n,r)=>{const a=[...n??[],...r??[]];return t.filter(s=>!a.includes(s.column.id))},w(o.options,"debugRows")),e.getLeftVisibleCells=S(()=>[e._getAllVisibleCells(),o.getState().columnPinning.left],(t,n)=>(n??[]).map(a=>t.find(s=>s.column.id===a)).filter(Boolean).map(a=>({...a,position:"left"})),w(o.options,"debugRows")),e.getRightVisibleCells=S(()=>[e._getAllVisibleCells(),o.getState().columnPinning.right],(t,n)=>(n??[]).map(a=>t.find(s=>s.column.id===a)).filter(Boolean).map(a=>({...a,position:"right"})),w(o.options,"debugRows"))},createTable:e=>{e.setColumnPinning=o=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(o),e.resetColumnPinning=o=>{var t,n;return e.setColumnPinning(o?ce():(t=(n=e.initialState)==null?void 0:n.columnPinning)!=null?t:ce())},e.getIsSomeColumnsPinned=o=>{var t;const n=e.getState().columnPinning;if(!o){var r,a;return!!((r=n.left)!=null&&r.length||(a=n.right)!=null&&a.length)}return!!((t=n[o])!=null&&t.length)},e.getLeftLeafColumns=S(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(o,t)=>(t??[]).map(n=>o.find(r=>r.id===n)).filter(Boolean),w(e.options,"debugColumns")),e.getRightLeafColumns=S(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(o,t)=>(t??[]).map(n=>o.find(r=>r.id===n)).filter(Boolean),w(e.options,"debugColumns")),e.getCenterLeafColumns=S(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(o,t,n)=>{const r=[...t??[],...n??[]];return o.filter(a=>!r.includes(a.id))},w(e.options,"debugColumns"))}};function Mt(e){return e||(typeof document<"u"?document:null)}const O={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},pe=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),bt={getDefaultColumnDef:()=>O,getInitialState:e=>({columnSizing:{},columnSizingInfo:pe(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:D("columnSizing",e),onColumnSizingInfoChange:D("columnSizingInfo",e)}),createColumn:(e,o)=>{e.getSize=()=>{var t,n,r;const a=o.getState().columnSizing[e.id];return Math.min(Math.max((t=e.columnDef.minSize)!=null?t:O.minSize,(n=a??e.columnDef.size)!=null?n:O.size),(r=e.columnDef.maxSize)!=null?r:O.maxSize)},e.getStart=S(t=>[t,k(o,t),o.getState().columnSizing],(t,n)=>n.slice(0,e.getIndex(t)).reduce((r,a)=>r+a.getSize(),0),w(o.options,"debugColumns")),e.getAfter=S(t=>[t,k(o,t),o.getState().columnSizing],(t,n)=>n.slice(e.getIndex(t)+1).reduce((r,a)=>r+a.getSize(),0),w(o.options,"debugColumns")),e.resetSize=()=>{o.setColumnSizing(t=>{let{[e.id]:n,...r}=t;return r})},e.getCanResize=()=>{var t,n;return((t=e.columnDef.enableResizing)!=null?t:!0)&&((n=o.options.enableColumnResizing)!=null?n:!0)},e.getIsResizing=()=>o.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,o)=>{e.getSize=()=>{let t=0;const n=r=>{if(r.subHeaders.length)r.subHeaders.forEach(n);else{var a;t+=(a=r.column.getSize())!=null?a:0}};return n(e),t},e.getStart=()=>{if(e.index>0){const t=e.headerGroup.headers[e.index-1];return t.getStart()+t.getSize()}return 0},e.getResizeHandler=t=>{const n=o.getColumn(e.column.id),r=n?.getCanResize();return a=>{if(!n||!r||(a.persist==null||a.persist(),me(a)&&a.touches&&a.touches.length>1))return;const s=e.getSize(),i=e?e.getLeafHeaders().map(C=>[C.column.id,C.column.getSize()]):[[n.id,n.getSize()]],l=me(a)?Math.round(a.touches[0].clientX):a.clientX,d={},p=(C,P)=>{typeof P=="number"&&(o.setColumnSizingInfo(y=>{var z,b;const x=o.options.columnResizeDirection==="rtl"?-1:1,v=(P-((z=y?.startOffset)!=null?z:0))*x,T=Math.max(v/((b=y?.startSize)!=null?b:0),-.999999);return y.columnSizingStart.forEach($=>{let[Be,Ie]=$;d[Be]=Math.round(Math.max(Ie+Ie*T,0)*100)/100}),{...y,deltaOffset:v,deltaPercentage:T}}),(o.options.columnResizeMode==="onChange"||C==="end")&&o.setColumnSizing(y=>({...y,...d})))},m=C=>p("move",C),c=C=>{p("end",C),o.setColumnSizingInfo(P=>({...P,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},u=Mt(t),f={moveHandler:C=>m(C.clientX),upHandler:C=>{u?.removeEventListener("mousemove",f.moveHandler),u?.removeEventListener("mouseup",f.upHandler),c(C.clientX)}},h={moveHandler:C=>(C.cancelable&&(C.preventDefault(),C.stopPropagation()),m(C.touches[0].clientX),!1),upHandler:C=>{var P;u?.removeEventListener("touchmove",h.moveHandler),u?.removeEventListener("touchend",h.upHandler),C.cancelable&&(C.preventDefault(),C.stopPropagation()),c((P=C.touches[0])==null?void 0:P.clientX)}},R=Vt()?{passive:!1}:!1;me(a)?(u?.addEventListener("touchmove",h.moveHandler,R),u?.addEventListener("touchend",h.upHandler,R)):(u?.addEventListener("mousemove",f.moveHandler,R),u?.addEventListener("mouseup",f.upHandler,R)),o.setColumnSizingInfo(C=>({...C,startOffset:l,startSize:s,deltaOffset:0,deltaPercentage:0,columnSizingStart:i,isResizingColumn:n.id}))}}},createTable:e=>{e.setColumnSizing=o=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(o),e.setColumnSizingInfo=o=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(o),e.resetColumnSizing=o=>{var t;e.setColumnSizing(o?{}:(t=e.initialState.columnSizing)!=null?t:{})},e.resetHeaderSizeInfo=o=>{var t;e.setColumnSizingInfo(o?pe():(t=e.initialState.columnSizingInfo)!=null?t:pe())},e.getTotalSize=()=>{var o,t;return(o=(t=e.getHeaderGroups()[0])==null?void 0:t.headers.reduce((n,r)=>n+r.getSize(),0))!=null?o:0},e.getLeftTotalSize=()=>{var o,t;return(o=(t=e.getLeftHeaderGroups()[0])==null?void 0:t.headers.reduce((n,r)=>n+r.getSize(),0))!=null?o:0},e.getCenterTotalSize=()=>{var o,t;return(o=(t=e.getCenterHeaderGroups()[0])==null?void 0:t.headers.reduce((n,r)=>n+r.getSize(),0))!=null?o:0},e.getRightTotalSize=()=>{var o,t;return(o=(t=e.getRightHeaderGroups()[0])==null?void 0:t.headers.reduce((n,r)=>n+r.getSize(),0))!=null?o:0}}};let B=null;function Vt(){if(typeof B=="boolean")return B;let e=!1;try{const o={get passive(){return e=!0,!1}},t=()=>{};window.addEventListener("test",t,o),window.removeEventListener("test",t)}catch{e=!1}return B=e,B}function me(e){return e.type==="touchstart"}const Dt={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:D("columnVisibility",e)}),createColumn:(e,o)=>{e.toggleVisibility=t=>{e.getCanHide()&&o.setColumnVisibility(n=>({...n,[e.id]:t??!e.getIsVisible()}))},e.getIsVisible=()=>{var t,n;const r=e.columns;return(t=r.length?r.some(a=>a.getIsVisible()):(n=o.getState().columnVisibility)==null?void 0:n[e.id])!=null?t:!0},e.getCanHide=()=>{var t,n;return((t=e.columnDef.enableHiding)!=null?t:!0)&&((n=o.options.enableHiding)!=null?n:!0)},e.getToggleVisibilityHandler=()=>t=>{e.toggleVisibility==null||e.toggleVisibility(t.target.checked)}},createRow:(e,o)=>{e._getAllVisibleCells=S(()=>[e.getAllCells(),o.getState().columnVisibility],t=>t.filter(n=>n.column.getIsVisible()),w(o.options,"debugRows")),e.getVisibleCells=S(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(t,n,r)=>[...t,...n,...r],w(o.options,"debugRows"))},createTable:e=>{const o=(t,n)=>S(()=>[n(),n().filter(r=>r.getIsVisible()).map(r=>r.id).join("_")],r=>r.filter(a=>a.getIsVisible==null?void 0:a.getIsVisible()),w(e.options,"debugColumns"));e.getVisibleFlatColumns=o("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=o("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=o("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=o("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=o("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=t=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(t),e.resetColumnVisibility=t=>{var n;e.setColumnVisibility(t?{}:(n=e.initialState.columnVisibility)!=null?n:{})},e.toggleAllColumnsVisible=t=>{var n;t=(n=t)!=null?n:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((r,a)=>({...r,[a.id]:t||!(a.getCanHide!=null&&a.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(t=>!(t.getIsVisible!=null&&t.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(t=>t.getIsVisible==null?void 0:t.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>t=>{var n;e.toggleAllColumnsVisible((n=t.target)==null?void 0:n.checked)}}};function k(e,o){return o?o==="center"?e.getCenterVisibleLeafColumns():o==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const zt={createTable:e=>{e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}},Et={getInitialState:e=>({globalFilter:void 0,...e}),getDefaultOptions:e=>({onGlobalFilterChange:D("globalFilter",e),globalFilterFn:"auto",getColumnCanGlobalFilter:o=>{var t;const n=(t=e.getCoreRowModel().flatRows[0])==null||(t=t._getAllCellsByColumnId()[o.id])==null?void 0:t.getValue();return typeof n=="string"||typeof n=="number"}}),createColumn:(e,o)=>{e.getCanGlobalFilter=()=>{var t,n,r,a;return((t=e.columnDef.enableGlobalFilter)!=null?t:!0)&&((n=o.options.enableGlobalFilter)!=null?n:!0)&&((r=o.options.enableFilters)!=null?r:!0)&&((a=o.options.getColumnCanGlobalFilter==null?void 0:o.options.getColumnCanGlobalFilter(e))!=null?a:!0)&&!!e.accessorFn}},createTable:e=>{e.getGlobalAutoFilterFn=()=>L.includesString,e.getGlobalFilterFn=()=>{var o,t;const{globalFilterFn:n}=e.options;return ue(n)?n:n==="auto"?e.getGlobalAutoFilterFn():(o=(t=e.options.filterFns)==null?void 0:t[n])!=null?o:L[n]},e.setGlobalFilter=o=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(o)},e.resetGlobalFilter=o=>{e.setGlobalFilter(o?void 0:e.initialState.globalFilter)}}},Nt={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:D("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let o=!1,t=!1;e._autoResetExpanded=()=>{var n,r;if(!o){e._queue(()=>{o=!0});return}if((n=(r=e.options.autoResetAll)!=null?r:e.options.autoResetExpanded)!=null?n:!e.options.manualExpanding){if(t)return;t=!0,e._queue(()=>{e.resetExpanded(),t=!1})}},e.setExpanded=n=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(n),e.toggleAllRowsExpanded=n=>{n??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=n=>{var r,a;e.setExpanded(n?{}:(r=(a=e.initialState)==null?void 0:a.expanded)!=null?r:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(n=>n.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>n=>{n.persist==null||n.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const n=e.getState().expanded;return n===!0||Object.values(n).some(Boolean)},e.getIsAllRowsExpanded=()=>{const n=e.getState().expanded;return typeof n=="boolean"?n===!0:!(!Object.keys(n).length||e.getRowModel().flatRows.some(r=>!r.getIsExpanded()))},e.getExpandedDepth=()=>{let n=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(a=>{const s=a.split(".");n=Math.max(n,s.length)}),n},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,o)=>{e.toggleExpanded=t=>{o.setExpanded(n=>{var r;const a=n===!0?!0:!!(n!=null&&n[e.id]);let s={};if(n===!0?Object.keys(o.getRowModel().rowsById).forEach(i=>{s[i]=!0}):s=n,t=(r=t)!=null?r:!a,!a&&t)return{...s,[e.id]:!0};if(a&&!t){const{[e.id]:i,...l}=s;return l}return n})},e.getIsExpanded=()=>{var t;const n=o.getState().expanded;return!!((t=o.options.getIsRowExpanded==null?void 0:o.options.getIsRowExpanded(e))!=null?t:n===!0||n?.[e.id])},e.getCanExpand=()=>{var t,n,r;return(t=o.options.getRowCanExpand==null?void 0:o.options.getRowCanExpand(e))!=null?t:((n=o.options.enableExpanding)!=null?n:!0)&&!!((r=e.subRows)!=null&&r.length)},e.getIsAllParentsExpanded=()=>{let t=!0,n=e;for(;t&&n.parentId;)n=o.getRow(n.parentId,!0),t=n.getIsExpanded();return t},e.getToggleExpandedHandler=()=>{const t=e.getCanExpand();return()=>{t&&e.toggleExpanded()}}}},we=0,Ce=10,fe=()=>({pageIndex:we,pageSize:Ce}),Lt={getInitialState:e=>({...e,pagination:{...fe(),...e?.pagination}}),getDefaultOptions:e=>({onPaginationChange:D("pagination",e)}),createTable:e=>{let o=!1,t=!1;e._autoResetPageIndex=()=>{var n,r;if(!o){e._queue(()=>{o=!0});return}if((n=(r=e.options.autoResetAll)!=null?r:e.options.autoResetPageIndex)!=null?n:!e.options.manualPagination){if(t)return;t=!0,e._queue(()=>{e.resetPageIndex(),t=!1})}},e.setPagination=n=>{const r=a=>A(n,a);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(r)},e.resetPagination=n=>{var r;e.setPagination(n?fe():(r=e.initialState.pagination)!=null?r:fe())},e.setPageIndex=n=>{e.setPagination(r=>{let a=A(n,r.pageIndex);const s=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return a=Math.max(0,Math.min(a,s)),{...r,pageIndex:a}})},e.resetPageIndex=n=>{var r,a;e.setPageIndex(n?we:(r=(a=e.initialState)==null||(a=a.pagination)==null?void 0:a.pageIndex)!=null?r:we)},e.resetPageSize=n=>{var r,a;e.setPageSize(n?Ce:(r=(a=e.initialState)==null||(a=a.pagination)==null?void 0:a.pageSize)!=null?r:Ce)},e.setPageSize=n=>{e.setPagination(r=>{const a=Math.max(1,A(n,r.pageSize)),s=r.pageSize*r.pageIndex,i=Math.floor(s/a);return{...r,pageIndex:i,pageSize:a}})},e.setPageCount=n=>e.setPagination(r=>{var a;let s=A(n,(a=e.options.pageCount)!=null?a:-1);return typeof s=="number"&&(s=Math.max(-1,s)),{...r,pageCount:s}}),e.getPageOptions=S(()=>[e.getPageCount()],n=>{let r=[];return n&&n>0&&(r=[...new Array(n)].fill(null).map((a,s)=>s)),r},w(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:n}=e.getState().pagination,r=e.getPageCount();return r===-1?!0:r===0?!1:n<r-1},e.previousPage=()=>e.setPageIndex(n=>n-1),e.nextPage=()=>e.setPageIndex(n=>n+1),e.firstPage=()=>e.setPageIndex(0),e.lastPage=()=>e.setPageIndex(e.getPageCount()-1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var n;return(n=e.options.pageCount)!=null?n:Math.ceil(e.getRowCount()/e.getState().pagination.pageSize)},e.getRowCount=()=>{var n;return(n=e.options.rowCount)!=null?n:e.getPrePaginationRowModel().rows.length}}},he=()=>({top:[],bottom:[]}),At={getInitialState:e=>({rowPinning:he(),...e}),getDefaultOptions:e=>({onRowPinningChange:D("rowPinning",e)}),createRow:(e,o)=>{e.pin=(t,n,r)=>{const a=n?e.getLeafRows().map(l=>{let{id:d}=l;return d}):[],s=r?e.getParentRows().map(l=>{let{id:d}=l;return d}):[],i=new Set([...s,e.id,...a]);o.setRowPinning(l=>{var d,p;if(t==="bottom"){var m,c;return{top:((m=l?.top)!=null?m:[]).filter(h=>!(i!=null&&i.has(h))),bottom:[...((c=l?.bottom)!=null?c:[]).filter(h=>!(i!=null&&i.has(h))),...Array.from(i)]}}if(t==="top"){var u,f;return{top:[...((u=l?.top)!=null?u:[]).filter(h=>!(i!=null&&i.has(h))),...Array.from(i)],bottom:((f=l?.bottom)!=null?f:[]).filter(h=>!(i!=null&&i.has(h)))}}return{top:((d=l?.top)!=null?d:[]).filter(h=>!(i!=null&&i.has(h))),bottom:((p=l?.bottom)!=null?p:[]).filter(h=>!(i!=null&&i.has(h)))}})},e.getCanPin=()=>{var t;const{enableRowPinning:n,enablePinning:r}=o.options;return typeof n=="function"?n(e):(t=n??r)!=null?t:!0},e.getIsPinned=()=>{const t=[e.id],{top:n,bottom:r}=o.getState().rowPinning,a=t.some(i=>n?.includes(i)),s=t.some(i=>r?.includes(i));return a?"top":s?"bottom":!1},e.getPinnedIndex=()=>{var t,n;const r=e.getIsPinned();if(!r)return-1;const a=(t=r==="top"?o.getTopRows():o.getBottomRows())==null?void 0:t.map(s=>{let{id:i}=s;return i});return(n=a?.indexOf(e.id))!=null?n:-1}},createTable:e=>{e.setRowPinning=o=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(o),e.resetRowPinning=o=>{var t,n;return e.setRowPinning(o?he():(t=(n=e.initialState)==null?void 0:n.rowPinning)!=null?t:he())},e.getIsSomeRowsPinned=o=>{var t;const n=e.getState().rowPinning;if(!o){var r,a;return!!((r=n.top)!=null&&r.length||(a=n.bottom)!=null&&a.length)}return!!((t=n[o])!=null&&t.length)},e._getPinnedRows=(o,t,n)=>{var r;return((r=e.options.keepPinnedRows)==null||r?(t??[]).map(s=>{const i=e.getRow(s,!0);return i.getIsAllParentsExpanded()?i:null}):(t??[]).map(s=>o.find(i=>i.id===s))).filter(Boolean).map(s=>({...s,position:n}))},e.getTopRows=S(()=>[e.getRowModel().rows,e.getState().rowPinning.top],(o,t)=>e._getPinnedRows(o,t,"top"),w(e.options,"debugRows")),e.getBottomRows=S(()=>[e.getRowModel().rows,e.getState().rowPinning.bottom],(o,t)=>e._getPinnedRows(o,t,"bottom"),w(e.options,"debugRows")),e.getCenterRows=S(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(o,t,n)=>{const r=new Set([...t??[],...n??[]]);return o.filter(a=>!r.has(a.id))},w(e.options,"debugRows"))}},jt={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:D("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=o=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(o),e.resetRowSelection=o=>{var t;return e.setRowSelection(o?{}:(t=e.initialState.rowSelection)!=null?t:{})},e.toggleAllRowsSelected=o=>{e.setRowSelection(t=>{o=typeof o<"u"?o:!e.getIsAllRowsSelected();const n={...t},r=e.getPreGroupedRowModel().flatRows;return o?r.forEach(a=>{a.getCanSelect()&&(n[a.id]=!0)}):r.forEach(a=>{delete n[a.id]}),n})},e.toggleAllPageRowsSelected=o=>e.setRowSelection(t=>{const n=typeof o<"u"?o:!e.getIsAllPageRowsSelected(),r={...t};return e.getRowModel().rows.forEach(a=>{Re(r,a.id,n,!0,e)}),r}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=S(()=>[e.getState().rowSelection,e.getCoreRowModel()],(o,t)=>Object.keys(o).length?Se(e,t):{rows:[],flatRows:[],rowsById:{}},w(e.options,"debugTable")),e.getFilteredSelectedRowModel=S(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(o,t)=>Object.keys(o).length?Se(e,t):{rows:[],flatRows:[],rowsById:{}},w(e.options,"debugTable")),e.getGroupedSelectedRowModel=S(()=>[e.getState().rowSelection,e.getSortedRowModel()],(o,t)=>Object.keys(o).length?Se(e,t):{rows:[],flatRows:[],rowsById:{}},w(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const o=e.getFilteredRowModel().flatRows,{rowSelection:t}=e.getState();let n=!!(o.length&&Object.keys(t).length);return n&&o.some(r=>r.getCanSelect()&&!t[r.id])&&(n=!1),n},e.getIsAllPageRowsSelected=()=>{const o=e.getPaginationRowModel().flatRows.filter(r=>r.getCanSelect()),{rowSelection:t}=e.getState();let n=!!o.length;return n&&o.some(r=>!t[r.id])&&(n=!1),n},e.getIsSomeRowsSelected=()=>{var o;const t=Object.keys((o=e.getState().rowSelection)!=null?o:{}).length;return t>0&&t<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const o=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:o.filter(t=>t.getCanSelect()).some(t=>t.getIsSelected()||t.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>o=>{e.toggleAllRowsSelected(o.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>o=>{e.toggleAllPageRowsSelected(o.target.checked)}},createRow:(e,o)=>{e.toggleSelected=(t,n)=>{const r=e.getIsSelected();o.setRowSelection(a=>{var s;if(t=typeof t<"u"?t:!r,e.getCanSelect()&&r===t)return a;const i={...a};return Re(i,e.id,t,(s=n?.selectChildren)!=null?s:!0,o),i})},e.getIsSelected=()=>{const{rowSelection:t}=o.getState();return Pe(e,t)},e.getIsSomeSelected=()=>{const{rowSelection:t}=o.getState();return ve(e,t)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:t}=o.getState();return ve(e,t)==="all"},e.getCanSelect=()=>{var t;return typeof o.options.enableRowSelection=="function"?o.options.enableRowSelection(e):(t=o.options.enableRowSelection)!=null?t:!0},e.getCanSelectSubRows=()=>{var t;return typeof o.options.enableSubRowSelection=="function"?o.options.enableSubRowSelection(e):(t=o.options.enableSubRowSelection)!=null?t:!0},e.getCanMultiSelect=()=>{var t;return typeof o.options.enableMultiRowSelection=="function"?o.options.enableMultiRowSelection(e):(t=o.options.enableMultiRowSelection)!=null?t:!0},e.getToggleSelectedHandler=()=>{const t=e.getCanSelect();return n=>{var r;t&&e.toggleSelected((r=n.target)==null?void 0:r.checked)}}}},Re=(e,o,t,n,r)=>{var a;const s=r.getRow(o,!0);t?(s.getCanMultiSelect()||Object.keys(e).forEach(i=>delete e[i]),s.getCanSelect()&&(e[o]=!0)):delete e[o],n&&(a=s.subRows)!=null&&a.length&&s.getCanSelectSubRows()&&s.subRows.forEach(i=>Re(e,i.id,t,n,r))};function Se(e,o){const t=e.getState().rowSelection,n=[],r={},a=function(s,i){return s.map(l=>{var d;const p=Pe(l,t);if(p&&(n.push(l),r[l.id]=l),(d=l.subRows)!=null&&d.length&&(l={...l,subRows:a(l.subRows)}),p)return l}).filter(Boolean)};return{rows:a(o.rows),flatRows:n,rowsById:r}}function Pe(e,o){var t;return(t=o[e.id])!=null?t:!1}function ve(e,o,t){var n;if(!((n=e.subRows)!=null&&n.length))return!1;let r=!0,a=!1;return e.subRows.forEach(s=>{if(!(a&&!r)&&(s.getCanSelect()&&(Pe(s,o)?a=!0:r=!1),s.subRows&&s.subRows.length)){const i=ve(s,o);i==="all"?a=!0:(i==="some"&&(a=!0),r=!1)}}),r?"all":a?"some":!1}const xe=/([0-9]+)/gm,Tt=(e,o,t)=>Ge(j(e.getValue(t)).toLowerCase(),j(o.getValue(t)).toLowerCase()),Ht=(e,o,t)=>Ge(j(e.getValue(t)),j(o.getValue(t))),kt=(e,o,t)=>_e(j(e.getValue(t)).toLowerCase(),j(o.getValue(t)).toLowerCase()),Gt=(e,o,t)=>_e(j(e.getValue(t)),j(o.getValue(t))),Ot=(e,o,t)=>{const n=e.getValue(t),r=o.getValue(t);return n>r?1:n<r?-1:0},Bt=(e,o,t)=>_e(e.getValue(t),o.getValue(t));function _e(e,o){return e===o?0:e>o?1:-1}function j(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function Ge(e,o){const t=e.split(xe).filter(Boolean),n=o.split(xe).filter(Boolean);for(;t.length&&n.length;){const r=t.shift(),a=n.shift(),s=parseInt(r,10),i=parseInt(a,10),l=[s,i].sort();if(isNaN(l[0])){if(r>a)return 1;if(a>r)return-1;continue}if(isNaN(l[1]))return isNaN(s)?-1:1;if(s>i)return 1;if(i>s)return-1}return t.length-n.length}const H={alphanumeric:Tt,alphanumericCaseSensitive:Ht,text:kt,textCaseSensitive:Gt,datetime:Ot,basic:Bt},Wt={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:D("sorting",e),isMultiSortEvent:o=>o.shiftKey}),createColumn:(e,o)=>{e.getAutoSortingFn=()=>{const t=o.getFilteredRowModel().flatRows.slice(10);let n=!1;for(const r of t){const a=r?.getValue(e.id);if(Object.prototype.toString.call(a)==="[object Date]")return H.datetime;if(typeof a=="string"&&(n=!0,a.split(xe).length>1))return H.alphanumeric}return n?H.text:H.basic},e.getAutoSortDir=()=>{const t=o.getFilteredRowModel().flatRows[0];return typeof t?.getValue(e.id)=="string"?"asc":"desc"},e.getSortingFn=()=>{var t,n;if(!e)throw new Error;return ue(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(t=(n=o.options.sortingFns)==null?void 0:n[e.columnDef.sortingFn])!=null?t:H[e.columnDef.sortingFn]},e.toggleSorting=(t,n)=>{const r=e.getNextSortingOrder(),a=typeof t<"u"&&t!==null;o.setSorting(s=>{const i=s?.find(u=>u.id===e.id),l=s?.findIndex(u=>u.id===e.id);let d=[],p,m=a?t:r==="desc";if(s!=null&&s.length&&e.getCanMultiSort()&&n?i?p="toggle":p="add":s!=null&&s.length&&l!==s.length-1?p="replace":i?p="toggle":p="replace",p==="toggle"&&(a||r||(p="remove")),p==="add"){var c;d=[...s,{id:e.id,desc:m}],d.splice(0,d.length-((c=o.options.maxMultiSortColCount)!=null?c:Number.MAX_SAFE_INTEGER))}else p==="toggle"?d=s.map(u=>u.id===e.id?{...u,desc:m}:u):p==="remove"?d=s.filter(u=>u.id!==e.id):d=[{id:e.id,desc:m}];return d})},e.getFirstSortDir=()=>{var t,n;return((t=(n=e.columnDef.sortDescFirst)!=null?n:o.options.sortDescFirst)!=null?t:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=t=>{var n,r;const a=e.getFirstSortDir(),s=e.getIsSorted();return s?s!==a&&((n=o.options.enableSortingRemoval)==null||n)&&(!(t&&(r=o.options.enableMultiRemove)!=null)||r)?!1:s==="desc"?"asc":"desc":a},e.getCanSort=()=>{var t,n;return((t=e.columnDef.enableSorting)!=null?t:!0)&&((n=o.options.enableSorting)!=null?n:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var t,n;return(t=(n=e.columnDef.enableMultiSort)!=null?n:o.options.enableMultiSort)!=null?t:!!e.accessorFn},e.getIsSorted=()=>{var t;const n=(t=o.getState().sorting)==null?void 0:t.find(r=>r.id===e.id);return n?n.desc?"desc":"asc":!1},e.getSortIndex=()=>{var t,n;return(t=(n=o.getState().sorting)==null?void 0:n.findIndex(r=>r.id===e.id))!=null?t:-1},e.clearSorting=()=>{o.setSorting(t=>t!=null&&t.length?t.filter(n=>n.id!==e.id):[])},e.getToggleSortingHandler=()=>{const t=e.getCanSort();return n=>{t&&(n.persist==null||n.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?o.options.isMultiSortEvent==null?void 0:o.options.isMultiSortEvent(n):!1))}}},createTable:e=>{e.setSorting=o=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(o),e.resetSorting=o=>{var t,n;e.setSorting(o?[]:(t=(n=e.initialState)==null?void 0:n.sorting)!=null?t:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},qt=[ct,Dt,Ft,$t,mt,ft,zt,Et,Wt,_t,Nt,Lt,At,jt,bt];function Kt(e){var o,t;const n=[...qt,...(o=e._features)!=null?o:[]];let r={_features:n};const a=r._features.reduce((c,u)=>Object.assign(c,u.getDefaultOptions==null?void 0:u.getDefaultOptions(r)),{}),s=c=>r.options.mergeOptions?r.options.mergeOptions(a,c):{...a,...c};let l={...{},...(t=e.initialState)!=null?t:{}};r._features.forEach(c=>{var u;l=(u=c.getInitialState==null?void 0:c.getInitialState(l))!=null?u:l});const d=[];let p=!1;const m={_features:n,options:{...a,...e},initialState:l,_queue:c=>{d.push(c),p||(p=!0,Promise.resolve().then(()=>{for(;d.length;)d.shift()();p=!1}).catch(u=>setTimeout(()=>{throw u})))},reset:()=>{r.setState(r.initialState)},setOptions:c=>{const u=A(c,r.options);r.options=s(u)},getState:()=>r.options.state,setState:c=>{r.options.onStateChange==null||r.options.onStateChange(c)},_getRowId:(c,u,f)=>{var h;return(h=r.options.getRowId==null?void 0:r.options.getRowId(c,u,f))!=null?h:`${f?[f.id,u].join("."):u}`},getCoreRowModel:()=>(r._getCoreRowModel||(r._getCoreRowModel=r.options.getCoreRowModel(r)),r._getCoreRowModel()),getRowModel:()=>r.getPaginationRowModel(),getRow:(c,u)=>{let f=(u?r.getPrePaginationRowModel():r.getRowModel()).rowsById[c];if(!f&&(f=r.getCoreRowModel().rowsById[c],!f))throw new Error;return f},_getDefaultColumnDef:S(()=>[r.options.defaultColumn],c=>{var u;return c=(u=c)!=null?u:{},{header:f=>{const h=f.header.column.columnDef;return h.accessorKey?h.accessorKey:h.accessorFn?h.id:null},cell:f=>{var h,R;return(h=(R=f.renderValue())==null||R.toString==null?void 0:R.toString())!=null?h:null},...r._features.reduce((f,h)=>Object.assign(f,h.getDefaultColumnDef==null?void 0:h.getDefaultColumnDef()),{}),...c}},w(e,"debugColumns")),_getColumnDefs:()=>r.options.columns,getAllColumns:S(()=>[r._getColumnDefs()],c=>{const u=function(f,h,R){return R===void 0&&(R=0),f.map(C=>{const P=gt(r,C,R,h),y=C;return P.columns=y.columns?u(y.columns,P,R+1):[],P})};return u(c)},w(e,"debugColumns")),getAllFlatColumns:S(()=>[r.getAllColumns()],c=>c.flatMap(u=>u.getFlatColumns()),w(e,"debugColumns")),_getAllFlatColumnsById:S(()=>[r.getAllFlatColumns()],c=>c.reduce((u,f)=>(u[f.id]=f,u),{}),w(e,"debugColumns")),getAllLeafColumns:S(()=>[r.getAllColumns(),r._getOrderColumnsFn()],(c,u)=>{let f=c.flatMap(h=>h.getLeafColumns());return u(f)},w(e,"debugColumns")),getColumn:c=>r._getAllFlatColumnsById()[c]};Object.assign(r,m);for(let c=0;c<r._features.length;c++){const u=r._features[c];u==null||u.createTable==null||u.createTable(r)}return r}function Ut(){return e=>S(()=>[e.options.data],o=>{const t={rows:[],flatRows:[],rowsById:{}},n=function(r,a,s){a===void 0&&(a=0);const i=[];for(let d=0;d<r.length;d++){const p=pt(e,e._getRowId(r[d],d,s),r[d],d,a,void 0,s?.id);if(t.flatRows.push(p),t.rowsById[p.id]=p,i.push(p),e.options.getSubRows){var l;p.originalSubRows=e.options.getSubRows(r[d],d),(l=p.originalSubRows)!=null&&l.length&&(p.subRows=n(p.originalSubRows,a+1,p))}}return i};return t.rows=n(o),t},w(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Jt(e){const o=[],t=n=>{var r;o.push(n),(r=n.subRows)!=null&&r.length&&n.getIsExpanded()&&n.subRows.forEach(t)};return e.rows.forEach(t),{rows:o,flatRows:e.flatRows,rowsById:e.rowsById}}function Xt(e){return o=>S(()=>[o.getState().pagination,o.getPrePaginationRowModel(),o.options.paginateExpandedRows?void 0:o.getState().expanded],(t,n)=>{if(!n.rows.length)return n;const{pageSize:r,pageIndex:a}=t;let{rows:s,flatRows:i,rowsById:l}=n;const d=r*a,p=d+r;s=s.slice(d,p);let m;o.options.paginateExpandedRows?m={rows:s,flatRows:i,rowsById:l}:m=Jt({rows:s,flatRows:i,rowsById:l}),m.flatRows=[];const c=u=>{m.flatRows.push(u),u.subRows.length&&u.subRows.forEach(c)};return m.rows.forEach(c),m},w(o.options,"debugTable"))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function De(e,o){return e?Yt(e)?_.createElement(e,o):e:null}function Yt(e){return Qt(e)||typeof e=="function"||Zt(e)}function Qt(e){return typeof e=="function"&&(()=>{const o=Object.getPrototypeOf(e);return o.prototype&&o.prototype.isReactComponent})()}function Zt(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function en(e){const o={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[t]=_.useState(()=>({current:Kt(o)})),[n,r]=_.useState(()=>t.current.initialState);return t.current.setOptions(a=>({...a,...e,state:{...n,...e.state},onStateChange:s=>{r(s),e.onStateChange==null||e.onStateChange(s)}})),t.current}function N({columns:e,data:o,enablePagination:t=!1,pagination:n={pageSize:10,pageIndex:0},onPaginationChange:r,enableRowSelection:a=!1,onRowSelectionChange:s,enableColumnResizing:i=!1,columnResizeMode:l="onChange",columnPinning:d,onRowClick:p,onRowDoubleClick:m,bordered:c=!1,classNames:u,pageSizeLabel:f="Rows per page",loading:h=!1,showPage:R=!0,emptyMessage:C}){const[P,y]=_.useState({});_.useEffect(()=>{if(s&&a){const x=Object.keys(P).map(v=>o[Number(v)]);s(x)}},[P,o,s,a]);const z=_.useMemo(()=>a?[{id:"select",size:40,enablePinning:!1,header:({table:x})=>g.jsx(Fe,{checked:x.getIsAllPageRowsSelected(),onCheckedChange:v=>x.toggleAllPageRowsSelected(!!v),"aria-label":"Select all"}),cell:({row:x})=>g.jsx(Fe,{checked:x.getIsSelected(),onCheckedChange:v=>x.toggleSelected(!!v),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1,enableResizing:!1},...e]:e,[e,a]),b=en({data:o,columns:z,getCoreRowModel:Ut(),getPaginationRowModel:Xt(),manualPagination:!0,pageCount:-1,state:{pagination:{pageIndex:n.pageIndex,pageSize:n.pageSize},rowSelection:P,columnPinning:d??{left:[],right:[]}},onPaginationChange:x=>{if(typeof x=="function"&&r){const v=x({pageIndex:n.pageIndex,pageSize:n.pageSize});r({pageIndex:v.pageIndex,pageSize:v.pageSize})}},enableRowSelection:a,onRowSelectionChange:y,columnResizeMode:l,enableColumnResizing:i});return g.jsxs("div",{className:V("space-y-4",u?.root),children:[g.jsxs("div",{className:V("rounded-md border overflow-x-auto relative",u?.tableWrapper),children:[h&&g.jsx("div",{className:"absolute inset-0 bg-background/50 backdrop-blur-[1px] z-50 flex items-center justify-center",children:g.jsxs("div",{className:"flex flex-col items-center gap-2",children:[g.jsx(it,{className:"animate-spin text-primary",size:32}),g.jsx("span",{className:"text-sm font-medium",children:"Loading..."})]})}),g.jsxs(Je,{className:u?.table,children:[g.jsx(Xe,{className:u?.header,children:b.getHeaderGroups().map(x=>g.jsx(de,{className:V("relative",u?.headerRow),children:x.headers.map((v,T)=>{const $=v.column.getIsPinned();return g.jsxs(Ye,{style:{width:v.getSize(),position:$?"sticky":"relative",left:$==="left"?`${v.getStart("left")}px`:void 0,right:$==="right"?`${v.getStart("right")}px`:void 0},className:V("bg-secondary text-xs font-semibold text-secondary-foreground",$&&["z-20","bg-secondary text-xs font-semibold text-secondary-foreground",$==="right"&&"border-l",$==="left"&&"border-r"],c&&T!==0&&"border-l",u?.headerCell),children:[g.jsx("div",{className:"flex items-center gap-2",children:v.isPlaceholder?null:De(v.column.columnDef.header,v.getContext())}),i&&v.column.getCanResize()&&g.jsx("div",{onMouseDown:v.getResizeHandler(),onTouchStart:v.getResizeHandler(),className:V("absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none bg-primary-foreground/20")})]},v.id)})},x.id))}),g.jsx(Qe,{className:u?.body,children:b.getRowModel().rows?.length?b.getRowModel().rows.map(x=>g.jsx(de,{"data-state":x.getIsSelected()&&"selected",className:V("relative",(p||m)&&"cursor-pointer hover:bg-muted/50",u?.row),onClick:()=>p?.(x),onDoubleClick:()=>m?.(x),children:x.getVisibleCells().map((v,T)=>{const $=v.column.getIsPinned();return g.jsx(Me,{style:{width:v.column.getSize(),position:$?"sticky":"relative",left:$==="left"?`${v.column.getStart("left")}px`:void 0,right:$==="right"?`${v.column.getStart("right")}px`:void 0},className:V($&&["z-20","bg-background",$==="right"&&"border-l",$==="left"&&"border-r"],c&&T!==0&&"border-l",u?.cell),children:De(v.column.columnDef.cell,v.getContext())},v.id)})},x.id)):g.jsx(de,{children:g.jsx(Me,{colSpan:z.length,className:V("h-24 text-center",u?.noResults),children:C??g.jsxs("div",{className:"flex flex-col items-center gap-2 py-4",children:[g.jsx(at,{className:"h-6 w-6 text-muted-foreground"}),g.jsx("p",{className:"text-sm text-muted-foreground",children:"No data available"}),g.jsx("p",{className:"text-xs text-muted-foreground/80",children:"Once data is available, it will appear here."})]})})})})]})]}),t&&g.jsxs("div",{className:V("flex items-center justify-between px-2",u?.pagination),children:[g.jsxs("div",{className:V("flex items-center gap-2",u?.rowsPerPageSelect),children:[g.jsx("p",{className:"text-sm font-medium",children:f}),g.jsxs(Ze,{value:`${n.pageSize}`,onValueChange:x=>{r?.({pageIndex:0,pageSize:Number(x)})},children:[g.jsx(et,{className:"h-8 w-[70px]",children:g.jsx(tt,{placeholder:n.pageSize})}),g.jsx(nt,{side:"top",children:[10,20,30,40,50].map(x=>g.jsx(ot,{value:`${x}`,children:x},x))})]})]}),g.jsxs("div",{className:"flex items-center gap-4",children:[R&&g.jsxs("span",{className:V("text-sm whitespace-nowrap",u?.pageInfo),children:["Page ",n.pageIndex+1]}),g.jsx(We,{children:g.jsxs(qe,{children:[g.jsx($e,{children:g.jsx(Ke,{onClick:()=>r?.({...n,pageIndex:n.pageIndex-1}),"aria-disabled":n.pageIndex===0,className:V(n.pageIndex===0&&"pointer-events-none opacity-50",u?.paginationButton)})}),g.jsx($e,{children:g.jsx(Ue,{onClick:()=>r?.({...n,pageIndex:n.pageIndex+1}),"aria-disabled":!b.getCanNextPage(),className:V(!b.getCanNextPage()&&"pointer-events-none opacity-50",u?.paginationButton)})})]})})]})]})]})}N.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDef",elements:[{name:"TData"},{name:"unknown"}],raw:"ColumnDef<TData, unknown>"}],raw:"ColumnDef<TData, unknown>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},description:""},enablePagination:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pagination:{required:!1,tsType:{name:"DataTablePaginationState"},description:"",defaultValue:{value:`{
  pageSize: 10,
  pageIndex: 0,
}`,computed:!1}},onPaginationChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pagination: DataTablePaginationState) => void",signature:{arguments:[{type:{name:"DataTablePaginationState"},name:"pagination"}],return:{name:"void"}}},description:""},enableRowSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: TData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"TData"}],raw:"TData[]"},name:"selectedRows"}],return:{name:"void"}}},description:""},enableColumnResizing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},columnResizeMode:{required:!1,tsType:{name:"ColumnResizeMode"},description:"",defaultValue:{value:"'onChange'",computed:!1}},columnPinning:{required:!1,tsType:{name:"ColumnPinningState"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row<TData>) => void",signature:{arguments:[{type:{name:"Row",elements:[{name:"TData"}],raw:"Row<TData>"},name:"row"}],return:{name:"void"}}},description:""},onRowDoubleClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: Row<TData>) => void",signature:{arguments:[{type:{name:"Row",elements:[{name:"TData"}],raw:"Row<TData>"},name:"row"}],return:{name:"void"}}},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},classNames:{required:!1,tsType:{name:"DataTableClassNames"},description:"Class names for different parts of the table"},pageSizeLabel:{required:!1,tsType:{name:"string"},description:'Custom text for page size label (default: "Rows per page")',defaultValue:{value:"'Rows per page'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading overlay on top of the table",defaultValue:{value:"false",computed:!1}},showPage:{required:!1,tsType:{name:"boolean"},description:"Show current page number (default: true)",defaultValue:{value:"true",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Custom message or component to show when data is empty (default: "No results.")'}}};async function Oe(e,o){try{const n=await(await fetch(`https://swapi.tech/api/people?page=${e}&limit=${o}`)).json();return{data:await Promise.all(n.results.map(async a=>{const i=await(await fetch(`https://swapi.tech/api/people/${a.uid}`)).json();return{id:a.uid,name:a.name,height:i.result.properties.height,mass:i.result.properties.mass,birthYear:i.result.properties.birth_year,gender:i.result.properties.gender}})),totalPages:n.total_pages,totalRecords:n.total_records}}catch(t){return console.error("Error fetching Star Wars data:",t),{data:[],totalPages:0,totalRecords:0}}}const M=[{id:"1",firstName:"John",lastName:"Doe",age:30,email:"john.doe@example.com"},{id:"2",firstName:"Jane",lastName:"Smith",age:25,email:"jane.smith@example.com"},{id:"3",firstName:"Bob",lastName:"Johnson",age:35,email:"bob.johnson@example.com"}],F=[{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"},{accessorKey:"age",header:"Age"},{accessorKey:"email",header:"Email"}],tn={root:"custom-root-class",tableWrapper:"custom-wrapper-class",table:"custom-table-class",header:"custom-header-class",headerRow:"custom-header-row-class",headerCell:"custom-header-cell-class",body:"custom-body-class",row:"custom-row-class",cell:"custom-cell-class",pagination:"custom-pagination-class",paginationButton:"custom-pagination-button-class",rowsPerPageSelect:"custom-rows-per-page-select-class",pageInfo:"custom-page-info-class",noResults:"custom-no-results-class"},On={title:"Blocks/DataTable",component:N,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A flexible and feature-rich data table component built on top of [TanStack Table v8](https://tanstack.com/table/v8).

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
- noResults: Class for the no results message`,control:"object"},pageSizeLabel:{description:"Custom text for page size label",control:"text",defaultValue:"Rows per page"},showPage:{description:"Show current page number",control:"boolean",defaultValue:!0},loading:{description:"Show loading overlay on top of the table",control:"boolean",defaultValue:!1},emptyMessage:{description:'Custom message or component to show when data is empty (default: "No results.")',control:"text"}}},W={args:{columns:F,data:M},parameters:{docs:{description:{story:"Basic table configuration without any advanced features enabled."}}}},q={args:{columns:F,data:M,enablePagination:!0,enableRowSelection:!0,enableColumnResizing:!0,columnResizeMode:"onChange",pagination:{pageSize:10,pageIndex:0},columnPinning:{left:["firstName","lastName"]},bordered:!0,pageSizeLabel:"Display rows"},parameters:{docs:{description:{story:"Table with all features enabled: pagination with custom label, row selection, column resizing, column pinning, and borders."}}}},K={render:e=>{const[o,t]=_.useState({pageSize:10,pageIndex:0});return g.jsx(N,{...e,enablePagination:!0,pagination:o,onPaginationChange:t})},args:{columns:F,data:M},parameters:{docs:{description:{story:"Example of controlled pagination with 2 items per page."}}}},U={render:e=>{const[o,t]=_.useState([]);return g.jsxs("div",{className:"space-y-4",children:[g.jsx(N,{...e,enableRowSelection:!0,onRowSelectionChange:t}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-medium",children:"Selected Rows:"}),g.jsx("pre",{className:"mt-2 rounded bg-secondary text-secondary-foreground p-4",children:JSON.stringify(o,null,2)})]})]})},args:{columns:F,data:M},parameters:{docs:{description:{story:"Example of row selection with checkbox support and selection state display."}}}},J={args:{columns:F,data:M,columnPinning:{left:["firstName","lastName"]}},parameters:{docs:{description:{story:"Example of column pinning with firstName and lastName pinned to left."}}}},X={render:e=>{const[o,t]=_.useState(null),[n,r]=_.useState(null);return g.jsxs("div",{className:"space-y-4",children:[g.jsx(N,{...e,onRowClick:t,onRowDoubleClick:r}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"font-medium",children:"Last Clicked Row:"}),g.jsx("pre",{className:"mt-2 rounded bg-secondary text-secondary-foreground p-4",children:o?JSON.stringify(o.original,null,2):"None"})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-medium",children:"Last Double-Clicked Row:"}),g.jsx("pre",{className:"mt-2 rounded bg-secondary text-secondary-foreground p-4",children:n?JSON.stringify(n.original,null,2):"None"})]})]})]})},args:{columns:F,data:M},parameters:{docs:{description:{story:"Example of row click and double-click events with display of the clicked row data."}}}},Y={args:{columns:F,data:M,bordered:!0},parameters:{docs:{description:{story:"Table with borders between columns for better visual separation."}}}},Q={args:{columns:F,data:M,enablePagination:!0,classNames:{root:"custom-root-class",tableWrapper:"custom-table-wrapper shadow-lg",table:"custom-table",header:"custom-header",headerRow:"custom-header-row",headerCell:"custom-header-cell",body:"custom-body",row:"custom-row hover:bg-slate-50",cell:"custom-cell",pagination:"custom-pagination mt-4",paginationButton:"custom-pagination-button",rowsPerPageSelect:"custom-rows-per-page-select",pageInfo:"custom-page-info font-semibold",noResults:"custom-no-results italic"}},parameters:{docs:{description:{story:"Example of customizing the appearance of different table parts using custom class names. Note that header cells have a primary background color by default."}}}},Z={args:{columns:F,data:M,enablePagination:!0,classNames:{headerCell:"bg-secondary text-secondary-foreground"}},parameters:{docs:{description:{story:"Example of overriding the default primary header color with a secondary color scheme."}}}},ee={args:{columns:F,data:M,enablePagination:!0,pageSizeLabel:"Items per page"},parameters:{docs:{description:{story:"Example of customizing the page size label text."}}}},te={args:{columns:F,data:M,enablePagination:!0,showPage:!1},parameters:{docs:{description:{story:"Example of pagination without the page number display."}}}},ne={render:e=>{const[o,t]=_.useState([]),[n,r]=_.useState(!0),[a,s]=_.useState({pageSize:10,pageIndex:0}),[i,l]=_.useState(0),d=[{accessorKey:"name",header:"Name"},{accessorKey:"height",header:"Height (cm)"},{accessorKey:"mass",header:"Mass (kg)"},{accessorKey:"birthYear",header:"Birth Year"},{accessorKey:"gender",header:"Gender"}];return _.useEffect(()=>{(async()=>{r(!0);try{const m=await Oe(a.pageIndex+1,a.pageSize);t(m.data),l(m.totalRecords)}catch(m){console.error("Error loading Star Wars data:",m)}finally{r(!1)}})()},[a.pageIndex,a.pageSize]),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"rounded-lg border p-4",children:[g.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Star Wars Characters"}),g.jsx(N,{...e,columns:d,data:o,enablePagination:!0,pagination:a,onPaginationChange:s,pageSizeLabel:"Characters per page",bordered:!0,loading:n})]}),g.jsxs("div",{className:"rounded-lg border bg-card p-4",children:[g.jsxs("h3",{className:"font-medium",children:["Total Records: ",i]}),g.jsxs("p",{className:"mt-2 text-sm text-muted-foreground",children:["Data provided by"," ",g.jsx("a",{href:"https://swapi.tech",target:"_blank",rel:"noopener noreferrer",className:"font-medium text-primary hover:underline",children:"SWAPI.tech"})]})]})]})},args:{showPage:!0},parameters:{docs:{description:{story:"A fully functional example using the Star Wars API (SWAPI) with server-side pagination and loading states."}}}},oe={args:{columns:F,data:M,loading:!0,enablePagination:!0},parameters:{docs:{description:{story:"Example showing the loading state overlay on the table."}}}},re={render:e=>{const o=()=>g.jsxs("div",{className:"flex flex-col items-center gap-2 py-4",children:[g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-muted-foreground",children:[g.jsx("title",{children:"Upload Icon"}),g.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),g.jsx("polyline",{points:"17 8 12 3 7 8"}),g.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),g.jsx("p",{className:"text-sm text-muted-foreground",children:"No data available"}),g.jsx("p",{className:"text-xs text-muted-foreground/80",children:"Try adjusting your filters or search terms"})]});return g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{children:[g.jsx("h3",{className:"mb-4 text-sm font-medium",children:"With Text Message"}),g.jsx(N,{...e,data:[],emptyMessage:"No data found. Please try again."})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"mb-4 text-sm font-medium",children:"With Custom Component"}),g.jsx(N,{...e,data:[],emptyMessage:g.jsx(o,{})})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"mb-4 text-sm font-medium",children:"Default Empty Message"}),g.jsx(N,{...e,data:[]})]})]})},args:{columns:F,enablePagination:!0},parameters:{docs:{description:{story:"Examples of customizing the empty state message with both text and a custom component."}}}},ae={args:{columns:F,data:M,loading:!0},parameters:{docs:{description:{story:"Table showing loading state with overlay."}}}},se={args:{columns:F,data:[],emptyMessage:"No data available. Try adjusting your filters."},parameters:{docs:{description:{story:"Table showing custom empty state message when no data is available."}}}},ie={args:{columns:F,data:M,classNames:tn,bordered:!0},parameters:{docs:{description:{story:"Table with custom class names applied to different parts of the table structure."}}}},le={render:function(){const[o,t]=_.useState(!1),[n,r]=_.useState([]),[a,s]=_.useState({pageSize:10,pageIndex:0}),i=[{accessorKey:"name",header:"Name"},{accessorKey:"height",header:"Height"},{accessorKey:"mass",header:"Mass"},{accessorKey:"birthYear",header:"Birth Year"},{accessorKey:"gender",header:"Gender"}];return _.useEffect(()=>{(async()=>{t(!0);try{const d=await Oe(a.pageIndex+1,a.pageSize);r(d.data)}catch(d){console.error("Failed to fetch data:",d)}finally{t(!1)}})()},[a.pageIndex,a.pageSize]),g.jsx(N,{columns:i,data:n,enablePagination:!0,pagination:a,onPaginationChange:s,loading:o})},parameters:{docs:{description:{story:"Table demonstrating server-side pagination with loading states, fetching Star Wars character data from SWAPI."}}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    enablePagination: true,
    enableRowSelection: true,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    pagination: {
      pageSize: 10,
      pageIndex: 0
    },
    columnPinning: {
      left: ['firstName', 'lastName']
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
}`,...q.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data,
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
}`,...oe.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
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
}`,...se.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
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
}`,...le.parameters?.docs?.source}}};const Bn=["Default","WithAllFeatures","ControlledPagination","WithRowSelection","WithColumnPinning","WithRowClickEvents","WithBorders","WithCustomClassNames","WithCustomHeaderColors","WithCustomPageSizeLabel","WithoutPageNumber","StarWarsDataTable","WithLoadingState","WithEmptyMessage","WithLoading","WithEmptyState","WithCustomStyling","WithServerPagination"];export{K as ControlledPagination,W as Default,ne as StarWarsDataTable,q as WithAllFeatures,Y as WithBorders,J as WithColumnPinning,Q as WithCustomClassNames,Z as WithCustomHeaderColors,ee as WithCustomPageSizeLabel,ie as WithCustomStyling,re as WithEmptyMessage,se as WithEmptyState,ae as WithLoading,oe as WithLoadingState,X as WithRowClickEvents,U as WithRowSelection,le as WithServerPagination,te as WithoutPageNumber,Bn as __namedExportsOrder,On as default};
