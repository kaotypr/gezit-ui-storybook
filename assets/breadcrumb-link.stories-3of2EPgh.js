import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as r}from"./breadcrumb-ByMFievz.js";import{H as n}from"./house-pEk0NCRa.js";import{I as o}from"./info-m2w_d1nh.js";import{c}from"./createLucideIcon-CAcKuqHj.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./chevron-right-DLQnG4vI.js";import"./ellipsis-3urqSHmI.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],m=c("phone",i),v={title:"UI/Breadcrumb/BreadcrumbLink",component:r,parameters:{layout:"centered",docs:{description:{component:`
A component that renders a clickable link in the breadcrumb navigation. It can be used as a standard anchor tag or as a custom component using the asChild prop.

The BreadcrumbLink component:
- Provides proper link styling and hover states
- Supports custom components through asChild prop
- Maintains accessibility features
- Handles navigation events
                `}}},tags:["autodocs"],argTypes:{href:{description:"The URL to link to.",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}}},a=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/about",children:"About"}),e.jsx(r,{href:"/contact",children:"Contact"})]}),t=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{href:"/",className:"text-primary hover:text-primary/80",children:"Home"}),e.jsx(r,{href:"/about",className:"text-secondary hover:text-secondary/80",children:"About"}),e.jsx(r,{href:"/contact",className:"text-muted-foreground hover:text-foreground",children:"Contact"})]}),s=()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(r,{href:"/",className:"flex items-center gap-1",children:[e.jsx(n,{className:"size-4"}),"Home"]}),e.jsxs(r,{href:"/about",className:"flex items-center gap-1",children:[e.jsx(o,{className:"size-4"}),"About"]}),e.jsxs(r,{href:"/contact",className:"flex items-center gap-1",children:[e.jsx(m,{className:"size-4"}),"Contact"]})]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};s.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/about">About</BreadcrumbLink>
      <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
    </div>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbLink href="/" className="text-primary hover:text-primary/80">
        Home
      </BreadcrumbLink>
      <BreadcrumbLink href="/about" className="text-secondary hover:text-secondary/80">
        About
      </BreadcrumbLink>
      <BreadcrumbLink href="/contact" className="text-muted-foreground hover:text-foreground">
        Contact
      </BreadcrumbLink>
    </div>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      <BreadcrumbLink href="/" className="flex items-center gap-1">
        <Home className="size-4" />
        Home
      </BreadcrumbLink>
      <BreadcrumbLink href="/about" className="flex items-center gap-1">
        <Info className="size-4" />
        About
      </BreadcrumbLink>
      <BreadcrumbLink href="/contact" className="flex items-center gap-1">
        <Phone className="size-4" />
        Contact
      </BreadcrumbLink>
    </div>;
}`,...s.parameters?.docs?.source}}};const L=["Default","WithCustomStyling","WithIcons"];export{a as Default,t as WithCustomStyling,s as WithIcons,L as __namedExportsOrder,v as default};
