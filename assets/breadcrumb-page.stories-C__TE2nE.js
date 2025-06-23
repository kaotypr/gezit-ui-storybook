import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as s}from"./breadcrumb-DtrlkZch.js";import{F as n}from"./file-text-D0-7-HH0.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./ellipsis-DKqvu74r.js";const x={title:"UI/Breadcrumb/BreadcrumbPage",component:s,parameters:{layout:"centered",docs:{description:{component:`
A component that represents the current page in the breadcrumb navigation. It is styled differently from links to indicate the current location.

The BreadcrumbPage component:
- Indicates the current page location
- Provides proper accessibility attributes
- Maintains consistent styling with other breadcrumb elements
- Supports custom styling and content
                `}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},r=()=>e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(s,{children:"Current Page"})}),t=()=>e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(s,{className:"text-foreground font-medium",children:"Current Page"})}),a=()=>e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(s,{className:"flex items-center gap-1",children:[e.jsx(n,{className:"size-4"}),"Current Page"]})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};a.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </div>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbPage className="text-foreground font-medium">Current Page</BreadcrumbPage>
    </div>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbPage className="flex items-center gap-1">
        <FileText className="size-4" />
        Current Page
      </BreadcrumbPage>
    </div>;
}`,...a.parameters?.docs?.source}}};const h=["Default","WithCustomStyling","WithIcon"];export{r as Default,t as WithCustomStyling,a as WithIcon,h as __namedExportsOrder,x as default};
