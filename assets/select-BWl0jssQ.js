import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BgCQ941z.js";import{r as Ne}from"./index-CPpQNmgs.js";import{c as Te}from"./index-BdQq_4o_.js";import{c as _}from"./index-Dc_FVRD7.js";import{c as lt}from"./index-DLD62pO3.js";import{u as L}from"./index-Be4k453d.js";import{c as it}from"./index-B5LVTqq5.js";import{u as ct}from"./index-Pxmga4VG.js";import{D as dt}from"./index-BdN0SzKn.js";import{h as ut,u as pt,R as ft}from"./index-D4IUklsN.js";import{F as mt}from"./index-DvLYkR1_.js";import{u as Ie}from"./index-BfBstFV9.js";import{c as Pe,R as ht,A as gt,C as vt,a as xt}from"./index-CJl9oC1v.js";import{P as St}from"./index-DYKZN-PH.js";import{P as j}from"./index-raY0i5zZ.js";import{c as wt}from"./index-BDff9h2_.js";import{u as yt}from"./index-KGCq4IUG.js";import{u as _e}from"./index-BInWWs9D.js";import{u as G}from"./index-CyHmRedI.js";import{u as Ct}from"./index-BMvmY0JD.js";import{V as It}from"./index-Bxcmxnpx.js";import{c as $}from"./cn-BEHD0UYf.js";import{C as Ee}from"./chevron-down-DX_dkZyb.js";import{C as bt}from"./chevron-up-CCoYB0VF.js";import{C as Tt}from"./check-DLjw-kwL.js";var _t=[" ","Enter","ArrowUp","ArrowDown"],Nt=[" ","Enter"],Q="Select",[ce,de,Pt]=lt(Q),[oe,Fo]=it(Q,[Pt,Pe]),ue=Pe(),[Et,Y]=oe(Q),[Rt,jt]=oe(Q),Re=t=>{const{__scopeSelect:o,children:e,open:i,defaultOpen:l,onOpenChange:u,value:s,defaultValue:a,onValueChange:c,dir:f,name:v,autoComplete:w,disabled:N,required:b,form:C}=t,d=ue(o),[h,x]=r.useState(null),[m,g]=r.useState(null),[F,M]=r.useState(!1),ne=ct(f),[P,O]=_e({prop:i,defaultProp:l??!1,onChange:u,caller:Q}),[W,X]=_e({prop:s,defaultProp:a,onChange:c,caller:Q}),k=r.useRef(null),B=h?C||!!h.closest("form"):!0,[z,V]=r.useState(new Set),H=Array.from(z).map(E=>E.props.value).join(";");return n.jsx(ht,{...d,children:n.jsxs(Et,{required:b,scope:o,trigger:h,onTriggerChange:x,valueNode:m,onValueNodeChange:g,valueNodeHasChildren:F,onValueNodeHasChildrenChange:M,contentId:Ie(),value:W,onValueChange:X,open:P,onOpenChange:O,dir:ne,triggerPointerDownPosRef:k,disabled:N,children:[n.jsx(ce.Provider,{scope:o,children:n.jsx(Rt,{scope:t.__scopeSelect,onNativeOptionAdd:r.useCallback(E=>{V(D=>new Set(D).add(E))},[]),onNativeOptionRemove:r.useCallback(E=>{V(D=>{const U=new Set(D);return U.delete(E),U})},[]),children:e})}),B?n.jsxs(tt,{"aria-hidden":!0,required:b,tabIndex:-1,name:v,autoComplete:w,value:W,onChange:E=>X(E.target.value),disabled:N,form:C,children:[W===void 0?n.jsx("option",{value:""}):null,Array.from(z)]},H):null]})})};Re.displayName=Q;var je="SelectTrigger",Me=r.forwardRef((t,o)=>{const{__scopeSelect:e,disabled:i=!1,...l}=t,u=ue(e),s=Y(je,e),a=s.disabled||i,c=L(o,s.onTriggerChange),f=de(e),v=r.useRef("touch"),[w,N,b]=nt(d=>{const h=f().filter(g=>!g.disabled),x=h.find(g=>g.value===s.value),m=rt(h,d,x);m!==void 0&&s.onValueChange(m.value)}),C=d=>{a||(s.onOpenChange(!0),b()),d&&(s.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return n.jsx(gt,{asChild:!0,...u,children:n.jsx(j.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":ot(s.value)?"":void 0,...l,ref:c,onClick:_(l.onClick,d=>{d.currentTarget.focus(),v.current!=="mouse"&&C(d)}),onPointerDown:_(l.onPointerDown,d=>{v.current=d.pointerType;const h=d.target;h.hasPointerCapture(d.pointerId)&&h.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(C(d),d.preventDefault())}),onKeyDown:_(l.onKeyDown,d=>{const h=w.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&N(d.key),!(h&&d.key===" ")&&_t.includes(d.key)&&(C(),d.preventDefault())})})})});Me.displayName=je;var Ae="SelectValue",Oe=r.forwardRef((t,o)=>{const{__scopeSelect:e,className:i,style:l,children:u,placeholder:s="",...a}=t,c=Y(Ae,e),{onValueNodeHasChildrenChange:f}=c,v=u!==void 0,w=L(o,c.onValueNodeChange);return G(()=>{f(v)},[f,v]),n.jsx(j.span,{...a,ref:w,style:{pointerEvents:"none"},children:ot(c.value)?n.jsx(n.Fragment,{children:s}):u})});Oe.displayName=Ae;var Mt="SelectIcon",De=r.forwardRef((t,o)=>{const{__scopeSelect:e,children:i,...l}=t;return n.jsx(j.span,{"aria-hidden":!0,...l,ref:o,children:i||"▼"})});De.displayName=Mt;var At="SelectPortal",Le=t=>n.jsx(St,{asChild:!0,...t});Le.displayName=At;var ee="SelectContent",ke=r.forwardRef((t,o)=>{const e=Y(ee,t.__scopeSelect),[i,l]=r.useState();if(G(()=>{l(new DocumentFragment)},[]),!e.open){const u=i;return u?Ne.createPortal(n.jsx(Be,{scope:t.__scopeSelect,children:n.jsx(ce.Slot,{scope:t.__scopeSelect,children:n.jsx("div",{children:t.children})})}),u):null}return n.jsx(Ve,{...t,ref:o})});ke.displayName=ee;var A=10,[Be,q]=oe(ee),Ot="SelectContentImpl",Dt=wt("SelectContent.RemoveScroll"),Ve=r.forwardRef((t,o)=>{const{__scopeSelect:e,position:i="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:u,onPointerDownOutside:s,side:a,sideOffset:c,align:f,alignOffset:v,arrowPadding:w,collisionBoundary:N,collisionPadding:b,sticky:C,hideWhenDetached:d,avoidCollisions:h,...x}=t,m=Y(ee,e),[g,F]=r.useState(null),[M,ne]=r.useState(null),P=L(o,p=>F(p)),[O,W]=r.useState(null),[X,k]=r.useState(null),B=de(e),[z,V]=r.useState(!1),H=r.useRef(!1);r.useEffect(()=>{if(g)return ut(g)},[g]),pt();const E=r.useCallback(p=>{const[I,...R]=B().map(T=>T.ref.current),[S]=R.slice(-1),y=document.activeElement;for(const T of p)if(T===y||(T?.scrollIntoView({block:"nearest"}),T===I&&M&&(M.scrollTop=0),T===S&&M&&(M.scrollTop=M.scrollHeight),T?.focus(),document.activeElement!==y))return},[B,M]),D=r.useCallback(()=>E([O,g]),[E,O,g]);r.useEffect(()=>{z&&D()},[z,D]);const{onOpenChange:U,triggerPointerDownPosRef:K}=m;r.useEffect(()=>{if(g){let p={x:0,y:0};const I=S=>{p={x:Math.abs(Math.round(S.pageX)-(K.current?.x??0)),y:Math.abs(Math.round(S.pageY)-(K.current?.y??0))}},R=S=>{p.x<=10&&p.y<=10?S.preventDefault():g.contains(S.target)||U(!1),document.removeEventListener("pointermove",I),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",R,{capture:!0})}}},[g,U,K]),r.useEffect(()=>{const p=()=>U(!1);return window.addEventListener("blur",p),window.addEventListener("resize",p),()=>{window.removeEventListener("blur",p),window.removeEventListener("resize",p)}},[U]);const[pe,ae]=nt(p=>{const I=B().filter(y=>!y.disabled),R=I.find(y=>y.ref.current===document.activeElement),S=rt(I,p,R);S&&setTimeout(()=>S.ref.current.focus())}),fe=r.useCallback((p,I,R)=>{const S=!H.current&&!R;(m.value!==void 0&&m.value===I||S)&&(W(p),S&&(H.current=!0))},[m.value]),me=r.useCallback(()=>g?.focus(),[g]),te=r.useCallback((p,I,R)=>{const S=!H.current&&!R;(m.value!==void 0&&m.value===I||S)&&k(p)},[m.value]),le=i==="popper"?xe:He,re=le===xe?{side:a,sideOffset:c,align:f,alignOffset:v,arrowPadding:w,collisionBoundary:N,collisionPadding:b,sticky:C,hideWhenDetached:d,avoidCollisions:h}:{};return n.jsx(Be,{scope:e,content:g,viewport:M,onViewportChange:ne,itemRefCallback:fe,selectedItem:O,onItemLeave:me,itemTextRefCallback:te,focusSelectedItem:D,selectedItemText:X,position:i,isPositioned:z,searchRef:pe,children:n.jsx(ft,{as:Dt,allowPinchZoom:!0,children:n.jsx(mt,{asChild:!0,trapped:m.open,onMountAutoFocus:p=>{p.preventDefault()},onUnmountAutoFocus:_(l,p=>{m.trigger?.focus({preventScroll:!0}),p.preventDefault()}),children:n.jsx(dt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:()=>m.onOpenChange(!1),children:n.jsx(le,{role:"listbox",id:m.contentId,"data-state":m.open?"open":"closed",dir:m.dir,onContextMenu:p=>p.preventDefault(),...x,...re,onPlaced:()=>V(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:_(x.onKeyDown,p=>{const I=p.ctrlKey||p.altKey||p.metaKey;if(p.key==="Tab"&&p.preventDefault(),!I&&p.key.length===1&&ae(p.key),["ArrowUp","ArrowDown","Home","End"].includes(p.key)){let S=B().filter(y=>!y.disabled).map(y=>y.ref.current);if(["ArrowUp","End"].includes(p.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(p.key)){const y=p.target,T=S.indexOf(y);S=S.slice(T+1)}setTimeout(()=>E(S)),p.preventDefault()}})})})})})})});Ve.displayName=Ot;var Lt="SelectItemAlignedPosition",He=r.forwardRef((t,o)=>{const{__scopeSelect:e,onPlaced:i,...l}=t,u=Y(ee,e),s=q(ee,e),[a,c]=r.useState(null),[f,v]=r.useState(null),w=L(o,P=>v(P)),N=de(e),b=r.useRef(!1),C=r.useRef(!0),{viewport:d,selectedItem:h,selectedItemText:x,focusSelectedItem:m}=s,g=r.useCallback(()=>{if(u.trigger&&u.valueNode&&a&&f&&d&&h&&x){const P=u.trigger.getBoundingClientRect(),O=f.getBoundingClientRect(),W=u.valueNode.getBoundingClientRect(),X=x.getBoundingClientRect();if(u.dir!=="rtl"){const y=X.left-O.left,T=W.left-y,Z=P.left-T,J=P.width+Z,he=Math.max(J,O.width),ge=window.innerWidth-A,ve=Te(T,[A,Math.max(A,ge-he)]);a.style.minWidth=J+"px",a.style.left=ve+"px"}else{const y=O.right-X.right,T=window.innerWidth-W.right-y,Z=window.innerWidth-P.right-T,J=P.width+Z,he=Math.max(J,O.width),ge=window.innerWidth-A,ve=Te(T,[A,Math.max(A,ge-he)]);a.style.minWidth=J+"px",a.style.right=ve+"px"}const k=N(),B=window.innerHeight-A*2,z=d.scrollHeight,V=window.getComputedStyle(f),H=parseInt(V.borderTopWidth,10),E=parseInt(V.paddingTop,10),D=parseInt(V.borderBottomWidth,10),U=parseInt(V.paddingBottom,10),K=H+E+z+U+D,pe=Math.min(h.offsetHeight*5,K),ae=window.getComputedStyle(d),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),te=P.top+P.height/2-A,le=B-te,re=h.offsetHeight/2,p=h.offsetTop+re,I=H+E+p,R=K-I;if(I<=te){const y=k.length>0&&h===k[k.length-1].ref.current;a.style.bottom="0px";const T=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(le,re+(y?me:0)+T+D),J=I+Z;a.style.height=J+"px"}else{const y=k.length>0&&h===k[0].ref.current;a.style.top="0px";const Z=Math.max(te,H+d.offsetTop+(y?fe:0)+re)+R;a.style.height=Z+"px",d.scrollTop=I-te+d.offsetTop}a.style.margin=`${A}px 0`,a.style.minHeight=pe+"px",a.style.maxHeight=B+"px",i?.(),requestAnimationFrame(()=>b.current=!0)}},[N,u.trigger,u.valueNode,a,f,d,h,x,u.dir,i]);G(()=>g(),[g]);const[F,M]=r.useState();G(()=>{f&&M(window.getComputedStyle(f).zIndex)},[f]);const ne=r.useCallback(P=>{P&&C.current===!0&&(g(),m?.(),C.current=!1)},[g,m]);return n.jsx(Bt,{scope:e,contentWrapper:a,shouldExpandOnScrollRef:b,onScrollButtonChange:ne,children:n.jsx("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:F},children:n.jsx(j.div,{...l,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}})})})});He.displayName=Lt;var kt="SelectPopperPosition",xe=r.forwardRef((t,o)=>{const{__scopeSelect:e,align:i="start",collisionPadding:l=A,...u}=t,s=ue(e);return n.jsx(vt,{...s,...u,ref:o,align:i,collisionPadding:l,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=kt;var[Bt,be]=oe(ee,{}),Se="SelectViewport",Ue=r.forwardRef((t,o)=>{const{__scopeSelect:e,nonce:i,...l}=t,u=q(Se,e),s=be(Se,e),a=L(o,u.onViewportChange),c=r.useRef(0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),n.jsx(ce.Slot,{scope:e,children:n.jsx(j.div,{"data-radix-select-viewport":"",role:"presentation",...l,ref:a,style:{position:"relative",flex:1,overflow:"hidden auto",...l.style},onScroll:_(l.onScroll,f=>{const v=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:N}=s;if(N?.current&&w){const b=Math.abs(c.current-v.scrollTop);if(b>0){const C=window.innerHeight-A*2,d=parseFloat(w.style.minHeight),h=parseFloat(w.style.height),x=Math.max(d,h);if(x<C){const m=x+b,g=Math.min(C,m),F=m-g;w.style.height=g+"px",w.style.bottom==="0px"&&(v.scrollTop=F>0?F:0,w.style.justifyContent="flex-end")}}}c.current=v.scrollTop})})})]})});Ue.displayName=Se;var Fe="SelectGroup",[Vt,Ht]=oe(Fe),We=r.forwardRef((t,o)=>{const{__scopeSelect:e,...i}=t,l=Ie();return n.jsx(Vt,{scope:e,id:l,children:n.jsx(j.div,{role:"group","aria-labelledby":l,...i,ref:o})})});We.displayName=Fe;var ze="SelectLabel",Ke=r.forwardRef((t,o)=>{const{__scopeSelect:e,...i}=t,l=Ht(ze,e);return n.jsx(j.div,{id:l.id,...i,ref:o})});Ke.displayName=ze;var ie="SelectItem",[Ut,Ge]=oe(ie),$e=r.forwardRef((t,o)=>{const{__scopeSelect:e,value:i,disabled:l=!1,textValue:u,...s}=t,a=Y(ie,e),c=q(ie,e),f=a.value===i,[v,w]=r.useState(u??""),[N,b]=r.useState(!1),C=L(o,m=>c.itemRefCallback?.(m,i,l)),d=Ie(),h=r.useRef("touch"),x=()=>{l||(a.onValueChange(i),a.onOpenChange(!1))};if(i==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return n.jsx(Ut,{scope:e,value:i,disabled:l,textId:d,isSelected:f,onItemTextChange:r.useCallback(m=>{w(g=>g||(m?.textContent??"").trim())},[]),children:n.jsx(ce.ItemSlot,{scope:e,value:i,disabled:l,textValue:v,children:n.jsx(j.div,{role:"option","aria-labelledby":d,"data-highlighted":N?"":void 0,"aria-selected":f&&N,"data-state":f?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1,...s,ref:C,onFocus:_(s.onFocus,()=>b(!0)),onBlur:_(s.onBlur,()=>b(!1)),onClick:_(s.onClick,()=>{h.current!=="mouse"&&x()}),onPointerUp:_(s.onPointerUp,()=>{h.current==="mouse"&&x()}),onPointerDown:_(s.onPointerDown,m=>{h.current=m.pointerType}),onPointerMove:_(s.onPointerMove,m=>{h.current=m.pointerType,l?c.onItemLeave?.():h.current==="mouse"&&m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:_(s.onPointerLeave,m=>{m.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:_(s.onKeyDown,m=>{c.searchRef?.current!==""&&m.key===" "||(Nt.includes(m.key)&&x(),m.key===" "&&m.preventDefault())})})})})});$e.displayName=ie;var se="SelectItemText",Ye=r.forwardRef((t,o)=>{const{__scopeSelect:e,className:i,style:l,...u}=t,s=Y(se,e),a=q(se,e),c=Ge(se,e),f=jt(se,e),[v,w]=r.useState(null),N=L(o,x=>w(x),c.onItemTextChange,x=>a.itemTextRefCallback?.(x,c.value,c.disabled)),b=v?.textContent,C=r.useMemo(()=>n.jsx("option",{value:c.value,disabled:c.disabled,children:b},c.value),[c.disabled,c.value,b]),{onNativeOptionAdd:d,onNativeOptionRemove:h}=f;return G(()=>(d(C),()=>h(C)),[d,h,C]),n.jsxs(n.Fragment,{children:[n.jsx(j.span,{id:c.textId,...u,ref:N}),c.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Ne.createPortal(u.children,s.valueNode):null]})});Ye.displayName=se;var qe="SelectItemIndicator",Xe=r.forwardRef((t,o)=>{const{__scopeSelect:e,...i}=t;return Ge(qe,e).isSelected?n.jsx(j.span,{"aria-hidden":!0,...i,ref:o}):null});Xe.displayName=qe;var we="SelectScrollUpButton",Ze=r.forwardRef((t,o)=>{const e=q(we,t.__scopeSelect),i=be(we,t.__scopeSelect),[l,u]=r.useState(!1),s=L(o,i.onScrollButtonChange);return G(()=>{if(e.viewport&&e.isPositioned){let a=function(){const f=c.scrollTop>0;u(f)};const c=e.viewport;return a(),c.addEventListener("scroll",a),()=>c.removeEventListener("scroll",a)}},[e.viewport,e.isPositioned]),l?n.jsx(Qe,{...t,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:c}=e;a&&c&&(a.scrollTop=a.scrollTop-c.offsetHeight)}}):null});Ze.displayName=we;var ye="SelectScrollDownButton",Je=r.forwardRef((t,o)=>{const e=q(ye,t.__scopeSelect),i=be(ye,t.__scopeSelect),[l,u]=r.useState(!1),s=L(o,i.onScrollButtonChange);return G(()=>{if(e.viewport&&e.isPositioned){let a=function(){const f=c.scrollHeight-c.clientHeight,v=Math.ceil(c.scrollTop)<f;u(v)};const c=e.viewport;return a(),c.addEventListener("scroll",a),()=>c.removeEventListener("scroll",a)}},[e.viewport,e.isPositioned]),l?n.jsx(Qe,{...t,ref:s,onAutoScroll:()=>{const{viewport:a,selectedItem:c}=e;a&&c&&(a.scrollTop=a.scrollTop+c.offsetHeight)}}):null});Je.displayName=ye;var Qe=r.forwardRef((t,o)=>{const{__scopeSelect:e,onAutoScroll:i,...l}=t,u=q("SelectScrollButton",e),s=r.useRef(null),a=de(e),c=r.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return r.useEffect(()=>()=>c(),[c]),G(()=>{a().find(v=>v.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[a]),n.jsx(j.div,{"aria-hidden":!0,...l,ref:o,style:{flexShrink:0,...l.style},onPointerDown:_(l.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(i,50))}),onPointerMove:_(l.onPointerMove,()=>{u.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(i,50))}),onPointerLeave:_(l.onPointerLeave,()=>{c()})})}),Ft="SelectSeparator",et=r.forwardRef((t,o)=>{const{__scopeSelect:e,...i}=t;return n.jsx(j.div,{"aria-hidden":!0,...i,ref:o})});et.displayName=Ft;var Ce="SelectArrow",Wt=r.forwardRef((t,o)=>{const{__scopeSelect:e,...i}=t,l=ue(e),u=Y(Ce,e),s=q(Ce,e);return u.open&&s.position==="popper"?n.jsx(xt,{...l,...i,ref:o}):null});Wt.displayName=Ce;var zt="SelectBubbleInput",tt=r.forwardRef(({__scopeSelect:t,value:o,...e},i)=>{const l=r.useRef(null),u=L(i,l),s=Ct(o);return r.useEffect(()=>{const a=l.current;if(!a)return;const c=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(c,"value").set;if(s!==o&&v){const w=new Event("change",{bubbles:!0});v.call(a,o),a.dispatchEvent(w)}},[s,o]),n.jsx(j.select,{...e,style:{...It,...e.style},ref:u,defaultValue:o})});tt.displayName=zt;function ot(t){return t===""||t===void 0}function nt(t){const o=yt(t),e=r.useRef(""),i=r.useRef(0),l=r.useCallback(s=>{const a=e.current+s;o(a),function c(f){e.current=f,window.clearTimeout(i.current),f!==""&&(i.current=window.setTimeout(()=>c(""),1e3))}(a)},[o]),u=r.useCallback(()=>{e.current="",window.clearTimeout(i.current)},[]);return r.useEffect(()=>()=>window.clearTimeout(i.current),[]),[e,l,u]}function rt(t,o,e){const l=o.length>1&&Array.from(o).every(f=>f===o[0])?o[0]:o,u=e?t.indexOf(e):-1;let s=Kt(t,Math.max(u,0));l.length===1&&(s=s.filter(f=>f!==e));const c=s.find(f=>f.textValue.toLowerCase().startsWith(l.toLowerCase()));return c!==e?c:void 0}function Kt(t,o){return t.map((e,i)=>t[(o+i)%t.length])}var Gt=Re,$t=Me,Yt=Oe,qt=De,Xt=Le,Zt=ke,Jt=Ue,Qt=We,eo=Ke,to=$e,oo=Ye,no=Xe,ro=Ze,so=Je,ao=et;function lo({...t}){return n.jsx(Gt,{"data-slot":"select",...t})}function io({...t}){return n.jsx(Qt,{"data-slot":"select-group",...t})}function co({...t}){return n.jsx(Yt,{"data-slot":"select-value",...t})}function uo({className:t,size:o="default",children:e,...i}){return n.jsxs($t,{"data-slot":"select-trigger","data-size":o,className:$("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t),...i,children:[e,n.jsx(qt,{asChild:!0,children:n.jsx(Ee,{className:"size-4 opacity-50"})})]})}function po({className:t,children:o,position:e="popper",...i}){return n.jsx(Xt,{children:n.jsxs(Zt,{"data-slot":"select-content",className:$("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",e==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:e,...i,children:[n.jsx(st,{}),n.jsx(Jt,{className:$("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:o}),n.jsx(at,{})]})})}function fo({className:t,...o}){return n.jsx(eo,{"data-slot":"select-label",className:$("text-muted-foreground px-2 py-1.5 text-xs",t),...o})}function mo({className:t,children:o,...e}){return n.jsxs(to,{"data-slot":"select-item",className:$("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t),...e,children:[n.jsx("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:n.jsx(no,{children:n.jsx(Tt,{className:"size-4"})})}),n.jsx(oo,{children:o})]})}function ho({className:t,...o}){return n.jsx(ao,{"data-slot":"select-separator",className:$("bg-border pointer-events-none -mx-1 my-1 h-px",t),...o})}function st({className:t,...o}){return n.jsx(ro,{"data-slot":"select-scroll-up-button",className:$("flex cursor-default items-center justify-center py-1",t),...o,children:n.jsx(bt,{className:"size-4"})})}function at({className:t,...o}){return n.jsx(so,{"data-slot":"select-scroll-down-button",className:$("flex cursor-default items-center justify-center py-1",t),...o,children:n.jsx(Ee,{className:"size-4"})})}lo.__docgenInfo={description:"",methods:[],displayName:"Select"};po.__docgenInfo={description:"",methods:[],displayName:"SelectContent",props:{position:{defaultValue:{value:"'popper'",computed:!1},required:!1}}};io.__docgenInfo={description:"",methods:[],displayName:"SelectGroup"};mo.__docgenInfo={description:"",methods:[],displayName:"SelectItem"};fo.__docgenInfo={description:"",methods:[],displayName:"SelectLabel"};at.__docgenInfo={description:"",methods:[],displayName:"SelectScrollDownButton"};st.__docgenInfo={description:"",methods:[],displayName:"SelectScrollUpButton"};ho.__docgenInfo={description:"",methods:[],displayName:"SelectSeparator"};uo.__docgenInfo={description:"",methods:[],displayName:"SelectTrigger",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};co.__docgenInfo={description:"",methods:[],displayName:"SelectValue"};export{po as S,lo as a,uo as b,co as c,mo as d,io as e,fo as f,at as g,st as h,ho as i};
