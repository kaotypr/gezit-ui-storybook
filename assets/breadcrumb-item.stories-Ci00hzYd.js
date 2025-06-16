import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as t}from"./breadcrumb-ByMFievz.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./ellipsis-3urqSHmI.js";const x={title:"UI/Breadcrumb/BreadcrumbItem",component:t,parameters:{layout:"centered",docs:{description:{component:`
A component that represents a single item in the breadcrumb navigation. It wraps the content and provides proper spacing and alignment.

The BreadcrumbItem component:
- Maintains consistent spacing with other items
- Handles alignment of content and separators
- Provides proper structure for accessibility
- Supports custom styling and content
                `}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},r=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]}),a=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{className:"text-primary",children:"Primary Item"}),e.jsx(t,{className:"text-secondary",children:"Secondary Item"}),e.jsx(t,{className:"text-muted-foreground",children:"Muted Item"})]}),s=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-primary",children:"★"}),e.jsx("span",{children:"Featured Item"})]})}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-secondary",children:"→"}),e.jsx("span",{children:"Navigation Item"})]})}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-muted-foreground",children:"•"}),e.jsx("span",{children:"Current Item"})]})})]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};s.__docgenInfo={description:"",methods:[],displayName:"WithComplexContent"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbItem>Item 1</BreadcrumbItem>
      <BreadcrumbItem>Item 2</BreadcrumbItem>
      <BreadcrumbItem>Item 3</BreadcrumbItem>
    </div>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbItem className="text-primary">Primary Item</BreadcrumbItem>
      <BreadcrumbItem className="text-secondary">Secondary Item</BreadcrumbItem>
      <BreadcrumbItem className="text-muted-foreground">Muted Item</BreadcrumbItem>
    </div>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbItem>
        <div className="flex items-center gap-1">
          <span className="text-primary">★</span>
          <span>Featured Item</span>
        </div>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <div className="flex items-center gap-1">
          <span className="text-secondary">→</span>
          <span>Navigation Item</span>
        </div>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">•</span>
          <span>Current Item</span>
        </div>
      </BreadcrumbItem>
    </div>;
}`,...s.parameters?.docs?.source}}};const I=["Default","WithCustomStyling","WithComplexContent"];export{r as Default,s as WithComplexContent,a as WithCustomStyling,I as __namedExportsOrder,x as default};
