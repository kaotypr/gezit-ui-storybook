import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{f as s,a as u,b as g,c as a,d as o,N as r,e as i}from"./navigation-menu-TvYqKVnX.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-raY0i5zZ.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-Pxmga4VG.js";import"./index-RJnmdD4_.js";import"./index-BfBstFV9.js";import"./index-DLD62pO3.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";const D={title:"UI/NavigationMenu/NavigationMenuIndicator",component:s,parameters:{layout:"centered",docs:{description:{component:"Visual indicator that shows the active menu item. Must be used within a NavigationMenu component."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},forceMount:{description:"Force mounting when used with animation.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},e=()=>n.jsx(u,{children:n.jsxs(g,{children:[n.jsx(s,{}),n.jsxs(a,{children:[n.jsx(o,{children:"Item One"}),n.jsxs(r,{children:[n.jsx(i,{children:"Subitem 1"}),n.jsx(i,{children:"Subitem 2"})]})]}),n.jsxs(a,{children:[n.jsx(o,{children:"Item Two"}),n.jsxs(r,{children:[n.jsx(i,{children:"Subitem 1"}),n.jsx(i,{children:"Subitem 2"})]})]})]})});e.parameters={docs:{description:{story:"Basic usage of the NavigationMenuIndicator component."}}};const t=()=>n.jsx(u,{children:n.jsxs(g,{children:[n.jsx(s,{className:"bg-primary/20"}),n.jsxs(a,{children:[n.jsx(o,{children:"Features"}),n.jsxs(r,{children:[n.jsx(i,{children:"Feature 1"}),n.jsx(i,{children:"Feature 2"})]})]}),n.jsxs(a,{children:[n.jsx(o,{children:"Products"}),n.jsxs(r,{children:[n.jsx(i,{children:"Product 1"}),n.jsx(i,{children:"Product 2"})]})]})]})});t.parameters={docs:{description:{story:"NavigationMenuIndicator with custom styling using Tailwind CSS classes."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Subitem 1</NavigationMenuLink>
          <NavigationMenuLink>Subitem 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Subitem 1</NavigationMenuLink>
          <NavigationMenuLink>Subitem 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuIndicator className="bg-primary/20" />
      <NavigationMenuItem>
        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Feature 1</NavigationMenuLink>
          <NavigationMenuLink>Feature 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Product 1</NavigationMenuLink>
          <NavigationMenuLink>Product 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};const O=["Default","CustomStyling"];export{t as CustomStyling,e as Default,O as __namedExportsOrder,D as default};
