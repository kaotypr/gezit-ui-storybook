import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./breadcrumb-ByMFievz.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./ellipsis-3urqSHmI.js";const x={title:"UI/Breadcrumb/BreadcrumbEllipsis",component:r,parameters:{layout:"centered",docs:{description:{component:`
A component that renders an ellipsis (...) to indicate hidden breadcrumb items. It's useful for long navigation paths where not all items can be shown.

The BreadcrumbEllipsis component:
- Indicates hidden navigation items
- Maintains proper spacing and alignment
- Provides accessibility features
- Supports custom styling
                `}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},s=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{}),e.jsx("span",{children:"Item 2"})]}),n=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{className:"text-muted-foreground"}),e.jsx("span",{children:"Item 2"})]}),a=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Home"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Products"}),e.jsx("span",{children:"/"}),e.jsx(r,{}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Category"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:"Current Page"})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};a.__docgenInfo={description:"",methods:[],displayName:"InBreadcrumb"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <span>Item 1</span>
      <BreadcrumbEllipsis />
      <span>Item 2</span>
    </div>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <span>Item 1</span>
      <BreadcrumbEllipsis className="text-muted-foreground" />
      <span>Item 2</span>
    </div>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <span>Home</span>
      <span>/</span>
      <span>Products</span>
      <span>/</span>
      <BreadcrumbEllipsis />
      <span>/</span>
      <span>Category</span>
      <span>/</span>
      <span>Current Page</span>
    </div>;
}`,...a.parameters?.docs?.source}}};const g=["Default","WithCustomStyling","InBreadcrumb"];export{s as Default,a as InBreadcrumb,n as WithCustomStyling,g as __namedExportsOrder,x as default};
