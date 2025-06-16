import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as o,a as r,b as s,e as a,d as m,N as u}from"./navigation-menu-BiCeed2A.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-B4JWVDRZ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BEIweEOh.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const A={title:"UI/NavigationMenu/NavigationMenuItem",component:o,parameters:{layout:"centered",docs:{description:{component:"Individual item within the navigation menu. Must be used within a NavigationMenuList component."}}},argTypes:{value:{description:"A unique value for the item",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>e.jsx(r,{children:e.jsx(s,{children:e.jsx(o,{children:e.jsx(a,{children:"Simple Item"})})})});i.parameters={docs:{description:{story:"Basic usage of the NavigationMenuItem component with a simple link."}}};const n=()=>e.jsx(r,{children:e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(m,{children:"Dropdown Item"}),e.jsxs(u,{children:[e.jsx(a,{children:"Submenu Item 1"}),e.jsx(a,{children:"Submenu Item 2"})]})]})})});n.parameters={docs:{description:{story:"NavigationMenuItem with a trigger that opens a submenu."}}};const t=()=>e.jsx(r,{children:e.jsx(s,{children:e.jsx(o,{className:"bg-muted rounded-lg",children:e.jsx(a,{className:"text-primary px-4 py-2",children:"Custom Styled Item"})})})});t.parameters={docs:{description:{story:"NavigationMenuItem with custom styling using Tailwind CSS classes."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithTrigger"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink>Simple Item</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Dropdown Item</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Submenu Item 1</NavigationMenuLink>
          <NavigationMenuLink>Submenu Item 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem className="bg-muted rounded-lg">
        <NavigationMenuLink className="text-primary px-4 py-2">
          Custom Styled Item
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};const E=["Default","WithTrigger","CustomStyling"];export{t as CustomStyling,i as Default,n as WithTrigger,E as __namedExportsOrder,A as default};
