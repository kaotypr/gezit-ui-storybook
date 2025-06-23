import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{f as n,b as m,a as e,e as c,d as a,c as t,B as l}from"./breadcrumb-DtrlkZch.js";import{H as p}from"./house-BRT8tRXq.js";import{c as B}from"./createLucideIcon-BROHhCyT.js";import{F as h}from"./file-text-D0-7-HH0.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],j=B("layout-grid",x),_={title:"UI/Breadcrumb",component:n,parameters:{layout:"centered",docs:{description:{component:`
A navigation component that shows the current page's location within a navigational hierarchy.

This component is built using semantic HTML elements and utility classes for accessibility and composability. It supports advanced composition via [Radix UI Slot](https://www.radix-ui.com/primitives/docs/utilities/slot) for custom rendering.

### Component Parts
- [BreadcrumbList](?path=/story/ui-breadcrumb-breadcrumblist--default): Container for the breadcrumb items.
- [BreadcrumbItem](?path=/story/ui-breadcrumb-breadcrumbitem--default): Represents an individual breadcrumb item.
- [BreadcrumbLink](?path=/story/ui-breadcrumb-breadcrumblink--default): A navigational link within the breadcrumb.
- [BreadcrumbPage](?path=/story/ui-breadcrumb-breadcrumbpage--default): Indicates the current page in the breadcrumb.
- [BreadcrumbSeparator](?path=/story/ui-breadcrumb-breadcrumbseparator--default): Visual separator between breadcrumb items.
- [BreadcrumbEllipsis](?path=/story/ui-breadcrumb-breadcrumbellipsis--default): Used to indicate collapsed breadcrumb items in long paths.
        `}}},tags:["autodocs"]},s=()=>r.jsx(n,{children:r.jsxs(m,{children:[r.jsx(e,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(c,{href:"/components",children:"Components"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(t,{children:"Breadcrumb"})})]})}),d=()=>r.jsx(n,{children:r.jsxs(m,{children:[r.jsx(e,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(a,{children:"/"}),r.jsx(e,{children:r.jsx(c,{href:"/components",children:"Components"})}),r.jsx(a,{children:"/"}),r.jsx(e,{children:r.jsx(t,{children:"Breadcrumb"})})]})}),i=()=>r.jsx(n,{children:r.jsxs(m,{children:[r.jsx(e,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(l,{})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(c,{href:"/components",children:"Components"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(t,{children:"Breadcrumb"})})]})}),o=()=>r.jsx(n,{children:r.jsxs(m,{className:"text-sm font-medium",children:[r.jsx(e,{children:r.jsx(c,{href:"/",className:"text-primary hover:text-primary/80",children:"Home"})}),r.jsx(a,{className:"text-muted-foreground"}),r.jsx(e,{children:r.jsx(c,{href:"/components",className:"text-primary hover:text-primary/80",children:"Components"})}),r.jsx(a,{className:"text-muted-foreground"}),r.jsx(e,{children:r.jsx(t,{className:"text-foreground",children:"Breadcrumb"})})]})}),u=()=>r.jsx(n,{children:r.jsxs(m,{children:[r.jsx(e,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(c,{href:"/products",children:"Products"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(c,{href:"/products/electronics",children:"Electronics"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(c,{href:"/products/electronics/smartphones",children:"Smartphones"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(t,{children:"iPhone 13 Pro"})})]})}),b=()=>r.jsx(n,{children:r.jsxs(m,{children:[r.jsx(e,{children:r.jsxs(c,{href:"/",className:"flex items-center gap-1",children:[r.jsx(p,{className:"size-4"}),"Home"]})}),r.jsx(a,{}),r.jsx(e,{children:r.jsxs(c,{href:"/components",className:"flex items-center gap-1",children:[r.jsx(j,{className:"size-4"}),"Components"]})}),r.jsx(a,{}),r.jsx(e,{children:r.jsxs(t,{className:"flex items-center gap-1",children:[r.jsx(h,{className:"size-4"}),"Breadcrumb"]})})]})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"WithCustomSeparator"};i.__docgenInfo={description:"",methods:[],displayName:"WithEllipsis"};o.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};u.__docgenInfo={description:"",methods:[],displayName:"LongPath"};b.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>;
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbList className="text-sm font-medium">
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary hover:text-primary/80">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" className="text-primary hover:text-primary/80">
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-foreground">Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>;
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics/smartphones">Smartphones</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>iPhone 13 Pro</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>;
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="size-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" className="flex items-center gap-1">
            <LayoutGrid className="size-4" />
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="flex items-center gap-1">
            <FileText className="size-4" />
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>;
}`,...b.parameters?.docs?.source}}};const v=["Default","WithCustomSeparator","WithEllipsis","WithCustomStyling","LongPath","WithIcons"];export{s as Default,u as LongPath,d as WithCustomSeparator,o as WithCustomStyling,i as WithEllipsis,b as WithIcons,v as __namedExportsOrder,_ as default};
