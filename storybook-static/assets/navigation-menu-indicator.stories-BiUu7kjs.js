import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{f as s,a as u,b as g,c as a,d as o,N as r,e as i}from"./navigation-menu-BiCeed2A.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-B4JWVDRZ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BEIweEOh.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const D={title:"UI/NavigationMenu/NavigationMenuIndicator",component:s,parameters:{layout:"centered",docs:{description:{component:"Visual indicator that shows the active menu item. Must be used within a NavigationMenu component."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},forceMount:{description:"Force mounting when used with animation.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},e=()=>n.jsx(u,{children:n.jsxs(g,{children:[n.jsx(s,{}),n.jsxs(a,{children:[n.jsx(o,{children:"Item One"}),n.jsxs(r,{children:[n.jsx(i,{children:"Subitem 1"}),n.jsx(i,{children:"Subitem 2"})]})]}),n.jsxs(a,{children:[n.jsx(o,{children:"Item Two"}),n.jsxs(r,{children:[n.jsx(i,{children:"Subitem 1"}),n.jsx(i,{children:"Subitem 2"})]})]})]})});e.parameters={docs:{description:{story:"Basic usage of the NavigationMenuIndicator component."}}};const t=()=>n.jsx(u,{children:n.jsxs(g,{children:[n.jsx(s,{className:"bg-primary/20"}),n.jsxs(a,{children:[n.jsx(o,{children:"Features"}),n.jsxs(r,{children:[n.jsx(i,{children:"Feature 1"}),n.jsx(i,{children:"Feature 2"})]})]}),n.jsxs(a,{children:[n.jsx(o,{children:"Products"}),n.jsxs(r,{children:[n.jsx(i,{children:"Product 1"}),n.jsx(i,{children:"Product 2"})]})]})]})});t.parameters={docs:{description:{story:"NavigationMenuIndicator with custom styling using Tailwind CSS classes."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
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
