import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as r}from"./breadcrumb-DtrlkZch.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./ellipsis-DKqvu74r.js";const h={title:"UI/Breadcrumb/BreadcrumbList",component:r,parameters:{layout:"centered",docs:{description:{component:`
A container component that wraps the breadcrumb items. It provides the basic structure and styling for the breadcrumb navigation.

The BreadcrumbList component:
- Maintains consistent spacing between items
- Handles text wrapping and overflow
- Provides responsive layout adjustments
- Ensures proper alignment of all breadcrumb elements
                `}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},t=()=>e.jsxs(r,{children:[e.jsx("span",{children:"Item 1"}),e.jsx("span",{children:"Item 2"}),e.jsx("span",{children:"Item 3"})]}),s=()=>e.jsxs(r,{className:"text-sm font-medium text-muted-foreground",children:[e.jsx("span",{children:"Item 1"}),e.jsx("span",{children:"Item 2"}),e.jsx("span",{children:"Item 3"})]}),n=()=>e.jsxs(r,{children:[e.jsx("span",{children:"This is a very long item that might wrap to multiple lines"}),e.jsx("span",{children:"Another long item that demonstrates text wrapping behavior"}),e.jsx("span",{children:"Final item in the list"})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};n.__docgenInfo={description:"",methods:[],displayName:"WithLongContent"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <BreadcrumbList>
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </BreadcrumbList>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <BreadcrumbList className="text-sm font-medium text-muted-foreground">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </BreadcrumbList>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <BreadcrumbList>
      <span>This is a very long item that might wrap to multiple lines</span>
      <span>Another long item that demonstrates text wrapping behavior</span>
      <span>Final item in the list</span>
    </BreadcrumbList>;
}`,...n.parameters?.docs?.source}}};const g=["Default","WithCustomStyling","WithLongContent"];export{t as Default,s as WithCustomStyling,n as WithLongContent,g as __namedExportsOrder,h as default};
