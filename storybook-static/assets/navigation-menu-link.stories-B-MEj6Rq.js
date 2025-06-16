import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{e,a as c,b as d,c as r,d as l,N as u}from"./navigation-menu-BiCeed2A.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-B4JWVDRZ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BEIweEOh.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const W={title:"UI/NavigationMenu/NavigationMenuLink",component:e,parameters:{layout:"centered",docs:{description:{component:"A navigational link element that can be used either directly in the menu list or within content."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},active:{description:"Whether the link is currently active",control:"boolean"},onSelect:{description:"Event handler called when the link is selected",action:"onSelect"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>n.jsx(c,{children:n.jsx(d,{children:n.jsx(r,{children:n.jsx(e,{children:"Documentation"})})})});i.parameters={docs:{description:{story:"Basic usage of the NavigationMenuLink component."}}};const t=()=>n.jsx(c,{children:n.jsxs(d,{children:[n.jsx(r,{children:n.jsx(e,{active:!0,children:"Active Link"})}),n.jsx(r,{children:n.jsx(e,{children:"Regular Link"})})]})});t.parameters={docs:{description:{story:"NavigationMenuLink in active state."}}};const o=()=>n.jsx(c,{children:n.jsx(d,{children:n.jsx(r,{children:n.jsx(e,{children:n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[n.jsx("title",{children:"Home Icon"}),n.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),n.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"Home"]})})})})});o.parameters={docs:{description:{story:"NavigationMenuLink with an icon alongside text."}}};const a=()=>n.jsx(c,{children:n.jsx(d,{children:n.jsx(r,{children:n.jsx(e,{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90",children:"Custom Styled Link"})})})});a.parameters={docs:{description:{story:"NavigationMenuLink with custom styling using Tailwind CSS classes."}}};const s=()=>n.jsx(c,{children:n.jsx(d,{children:n.jsxs(r,{children:[n.jsx(l,{children:"Resources"}),n.jsx(u,{children:n.jsxs("div",{className:"grid gap-3 p-6 w-[400px]",children:[n.jsxs(e,{className:"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",children:[n.jsx("div",{className:"text-sm font-medium leading-none",children:"Documentation"}),n.jsx("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:"Start integrating products and tools"})]}),n.jsxs(e,{className:"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",children:[n.jsx("div",{className:"text-sm font-medium leading-none",children:"Components"}),n.jsx("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:"UI components built with Radix UI and Tailwind CSS"})]})]})})]})})});s.parameters={docs:{description:{story:"NavigationMenuLink used within NavigationMenuContent with rich styling."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Active"};o.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};a.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};s.__docgenInfo={description:"",methods:[],displayName:"InContent"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink>Documentation</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink active>Active Link</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Regular Link</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <title>Home Icon</title>
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </span>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Custom Styled Link
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-6 w-[400px]">
            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">Documentation</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Start integrating products and tools
              </p>
            </NavigationMenuLink>
            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">Components</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                UI components built with Radix UI and Tailwind CSS
              </p>
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...s.parameters?.docs?.source}}};const U=["Default","Active","WithIcon","CustomStyling","InContent"];export{t as Active,a as CustomStyling,i as Default,s as InContent,o as WithIcon,U as __namedExportsOrder,W as default};
