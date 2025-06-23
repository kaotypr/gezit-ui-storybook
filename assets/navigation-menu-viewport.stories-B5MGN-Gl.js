import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{g as o,a as r,b as s,c as u,d as c,N as g,e as a}from"./navigation-menu-TvYqKVnX.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-raY0i5zZ.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-Pxmga4VG.js";import"./index-RJnmdD4_.js";import"./index-BfBstFV9.js";import"./index-DLD62pO3.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";const A={title:"UI/NavigationMenu/NavigationMenuViewport",component:o,parameters:{layout:"centered",docs:{description:{component:"Viewport for displaying submenu content. Must be used within a NavigationMenu component."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},forceMount:{description:"Force mounting when used with animation.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>n.jsxs(r,{children:[n.jsx(s,{children:n.jsxs(u,{children:[n.jsx(c,{children:"Resources"}),n.jsxs(g,{children:[n.jsx(a,{children:"Documentation"}),n.jsx(a,{children:"API Reference"})]})]})}),n.jsx(o,{})]});i.parameters={docs:{description:{story:"Basic usage of the NavigationMenuViewport component."}}};const e=()=>n.jsxs(r,{children:[n.jsx(s,{children:n.jsxs(u,{children:[n.jsx(c,{children:"Products"}),n.jsx(g,{children:n.jsxs("div",{className:"grid gap-3 p-4",children:[n.jsx(a,{children:"Product 1"}),n.jsx(a,{children:"Product 2"})]})})]})}),n.jsx(o,{className:"bg-muted/50 backdrop-blur-sm"})]});e.parameters={docs:{description:{story:"NavigationMenuViewport with custom styling using Tailwind CSS classes."}}};const t=()=>n.jsxs(r,{children:[n.jsx(s,{children:n.jsxs(u,{children:[n.jsx(c,{children:"Features"}),n.jsx(g,{children:n.jsxs("div",{className:"grid gap-3 p-4 animate-in slide-in-from-left-8",children:[n.jsx(a,{children:"Feature 1"}),n.jsx(a,{children:"Feature 2"})]})})]})}),n.jsx(o,{className:"transition-all duration-300"})]});t.parameters={docs:{description:{story:"NavigationMenuViewport with animation effects."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.__docgenInfo={description:"",methods:[],displayName:"WithAnimation"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Documentation</NavigationMenuLink>
          <NavigationMenuLink>API Reference</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport />
  </NavigationMenu>`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-4">
            <NavigationMenuLink>Product 1</NavigationMenuLink>
            <NavigationMenuLink>Product 2</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport className="bg-muted/50 backdrop-blur-sm" />
  </NavigationMenu>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-4 animate-in slide-in-from-left-8">
            <NavigationMenuLink>Feature 1</NavigationMenuLink>
            <NavigationMenuLink>Feature 2</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport className="transition-all duration-300" />
  </NavigationMenu>`,...t.parameters?.docs?.source}}};const D=["Default","CustomStyling","WithAnimation"];export{e as CustomStyling,i as Default,t as WithAnimation,D as __namedExportsOrder,A as default};
