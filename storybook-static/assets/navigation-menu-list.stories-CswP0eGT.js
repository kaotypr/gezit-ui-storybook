import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{b as r,a as s,c as e,e as i,d as u,N as g}from"./navigation-menu-BiCeed2A.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-B4JWVDRZ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BEIweEOh.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const H={title:"UI/NavigationMenu/NavigationMenuList",component:r,parameters:{layout:"centered",docs:{description:{component:"Container for the navigation menu items. Must be used within a NavigationMenu component."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsx(e,{children:n.jsx(i,{children:"Home"})}),n.jsx(e,{children:n.jsx(i,{children:"About"})}),n.jsx(e,{children:n.jsx(i,{children:"Contact"})})]})});t.parameters={docs:{description:{story:"Basic usage of the NavigationMenuList component."}}};const a=()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsxs(e,{children:[n.jsx(u,{children:"Products"}),n.jsxs(g,{children:[n.jsx(i,{children:"Product 1"}),n.jsx(i,{children:"Product 2"})]})]}),n.jsxs(e,{children:[n.jsx(u,{children:"Services"}),n.jsxs(g,{children:[n.jsx(i,{children:"Service 1"}),n.jsx(i,{children:"Service 2"})]})]})]})});a.parameters={docs:{description:{story:"NavigationMenuList with trigger items that open submenus."}}};const o=()=>n.jsx(s,{children:n.jsxs(r,{className:"bg-muted p-2 rounded-lg gap-4",children:[n.jsx(e,{children:n.jsx(i,{className:"text-primary",children:"Home"})}),n.jsx(e,{children:n.jsx(i,{className:"text-primary",children:"About"})})]})});o.parameters={docs:{description:{story:"NavigationMenuList with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithTriggers"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink>Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>About</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Product 1</NavigationMenuLink>
          <NavigationMenuLink>Product 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Service 1</NavigationMenuLink>
          <NavigationMenuLink>Service 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList className="bg-muted p-2 rounded-lg gap-4">
      <NavigationMenuItem>
        <NavigationMenuLink className="text-primary">Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink className="text-primary">About</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...o.parameters?.docs?.source}}};const D=["Default","WithTriggers","CustomStyling"];export{o as CustomStyling,t as Default,a as WithTriggers,D as __namedExportsOrder,H as default};
