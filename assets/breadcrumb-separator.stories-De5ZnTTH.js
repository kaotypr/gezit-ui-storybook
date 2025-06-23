import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as r}from"./breadcrumb-DtrlkZch.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./ellipsis-DKqvu74r.js";const x={title:"UI/Breadcrumb/BreadcrumbSeparator",component:r,parameters:{layout:"centered",docs:{description:{component:`
A component that renders a separator between breadcrumb items. It can be customized with different characters or icons.

The BreadcrumbSeparator component:
- Provides visual separation between items
- Supports custom separator content
- Maintains proper spacing and alignment
- Ensures accessibility with proper ARIA attributes
                `}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},a=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{}),e.jsx("span",{children:"Item 2"}),e.jsx(r,{}),e.jsx("span",{children:"Item 3"})]}),t=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{children:"/"}),e.jsx("span",{children:"Item 2"}),e.jsx(r,{children:"/"}),e.jsx("span",{children:"Item 3"})]}),s=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{className:"text-muted-foreground",children:"→"}),e.jsx("span",{children:"Item 2"}),e.jsx(r,{className:"text-muted-foreground",children:"→"}),e.jsx("span",{children:"Item 3"})]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomSeparator"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <span>Item 1</span>
      <BreadcrumbSeparator />
      <span>Item 2</span>
      <BreadcrumbSeparator />
      <span>Item 3</span>
    </div>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <span>Item 1</span>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <span>Item 2</span>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <span>Item 3</span>
    </div>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <span>Item 1</span>
      <BreadcrumbSeparator className="text-muted-foreground">→</BreadcrumbSeparator>
      <span>Item 2</span>
      <BreadcrumbSeparator className="text-muted-foreground">→</BreadcrumbSeparator>
      <span>Item 3</span>
    </div>;
}`,...s.parameters?.docs?.source}}};const h=["Default","WithCustomSeparator","WithCustomStyling"];export{a as Default,t as WithCustomSeparator,s as WithCustomStyling,h as __namedExportsOrder,x as default};
