import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{d as o,a as r,b as s,c as g,N as c,e as a}from"./navigation-menu-BiCeed2A.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-B4JWVDRZ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BEIweEOh.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const B={title:"UI/NavigationMenu/NavigationMenuTrigger",component:o,parameters:{layout:"centered",docs:{description:{component:"Button that triggers a submenu. Must be used within a NavigationMenuItem component."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>n.jsx(r,{children:n.jsx(s,{children:n.jsxs(g,{children:[n.jsx(o,{children:"Products"}),n.jsxs(c,{children:[n.jsx(a,{children:"Product 1"}),n.jsx(a,{children:"Product 2"})]})]})})});i.parameters={docs:{description:{story:"Basic usage of the NavigationMenuTrigger component."}}};const e=()=>n.jsx(r,{children:n.jsx(s,{children:n.jsxs(g,{children:[n.jsx(o,{children:n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[n.jsx("title",{children:"Products Icon"}),n.jsx("path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}),n.jsx("path",{d:"M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"})]}),"Products"]})}),n.jsxs(c,{children:[n.jsx(a,{children:"Product 1"}),n.jsx(a,{children:"Product 2"})]})]})})});e.parameters={docs:{description:{story:"NavigationMenuTrigger with an icon alongside text."}}};const t=()=>n.jsx(r,{children:n.jsx(s,{children:n.jsxs(g,{children:[n.jsx(o,{className:"bg-primary text-primary-foreground hover:bg-primary/90",children:"Custom Styled Trigger"}),n.jsxs(c,{children:[n.jsx(a,{children:"Item 1"}),n.jsx(a,{children:"Item 2"})]})]})})});t.parameters={docs:{description:{story:"NavigationMenuTrigger with custom styling using Tailwind CSS classes."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Product 1</NavigationMenuLink>
          <NavigationMenuLink>Product 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <title>Products Icon</title>
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            </svg>
            Products
          </span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Product 1</NavigationMenuLink>
          <NavigationMenuLink>Product 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
          Custom Styled Trigger
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Item 1</NavigationMenuLink>
          <NavigationMenuLink>Item 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};const V=["Default","WithIcon","CustomStyling"];export{t as CustomStyling,i as Default,e as WithIcon,V as __namedExportsOrder,B as default};
