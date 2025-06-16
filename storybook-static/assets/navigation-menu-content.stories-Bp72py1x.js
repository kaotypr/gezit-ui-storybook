import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{N as s,a as o,b as r,c,d as m,e as n}from"./navigation-menu-BiCeed2A.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-B4JWVDRZ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BEIweEOh.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const G={title:"UI/NavigationMenu/NavigationMenuContent",component:s,parameters:{layout:"centered",docs:{description:{component:"Content displayed when a trigger is activated. Must be used within a NavigationMenuItem component after a NavigationMenuTrigger."}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},forceMount:{description:"Force mounting when used with animation.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},a=()=>e.jsx(o,{children:e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(m,{children:"Resources"}),e.jsx(s,{children:e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx(n,{children:"Documentation"}),e.jsx(n,{children:"API Reference"}),e.jsx(n,{children:"Getting Started"})]})})]})})});a.parameters={docs:{description:{story:"Basic usage of the NavigationMenuContent component."}}};const i=()=>e.jsx(o,{children:e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(m,{children:"Features"}),e.jsx(s,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 p-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Authentication"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Secure user authentication and authorization"}),e.jsx(n,{className:"text-sm",children:"Learn more →"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Database"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"High-performance data storage solutions"}),e.jsx(n,{className:"text-sm",children:"Learn more →"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Analytics"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Insights and data visualization tools"}),e.jsx(n,{className:"text-sm",children:"Learn more →"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Security"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Advanced security features and compliance"}),e.jsx(n,{className:"text-sm",children:"Learn more →"})]})]})})]})})});i.parameters={docs:{description:{story:"NavigationMenuContent with a grid layout and rich content."}}};const t=()=>e.jsx(o,{children:e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(m,{children:"Menu"}),e.jsx(s,{className:"bg-muted/50 backdrop-blur-sm border rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{className:"text-primary hover:text-primary/80",children:"Option 1"}),e.jsx(n,{className:"text-primary hover:text-primary/80",children:"Option 2"})]})})]})})});t.parameters={docs:{description:{story:"NavigationMenuContent with custom styling using Tailwind CSS classes."}}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"WithGrid"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="p-4 space-y-2">
            <NavigationMenuLink>Documentation</NavigationMenuLink>
            <NavigationMenuLink>API Reference</NavigationMenuLink>
            <NavigationMenuLink>Getting Started</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-2 gap-4 p-6 w-[500px]">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Authentication</h4>
              <p className="text-sm text-muted-foreground">
                Secure user authentication and authorization
              </p>
              <NavigationMenuLink className="text-sm">Learn more →</NavigationMenuLink>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Database</h4>
              <p className="text-sm text-muted-foreground">
                High-performance data storage solutions
              </p>
              <NavigationMenuLink className="text-sm">Learn more →</NavigationMenuLink>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Analytics</h4>
              <p className="text-sm text-muted-foreground">Insights and data visualization tools</p>
              <NavigationMenuLink className="text-sm">Learn more →</NavigationMenuLink>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Security</h4>
              <p className="text-sm text-muted-foreground">
                Advanced security features and compliance
              </p>
              <NavigationMenuLink className="text-sm">Learn more →</NavigationMenuLink>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-muted/50 backdrop-blur-sm border rounded-lg shadow-lg p-4">
          <div className="space-y-2">
            <NavigationMenuLink className="text-primary hover:text-primary/80">
              Option 1
            </NavigationMenuLink>
            <NavigationMenuLink className="text-primary hover:text-primary/80">
              Option 2
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};const O=["Default","WithGrid","CustomStyling"];export{t as CustomStyling,a as Default,i as WithGrid,O as __namedExportsOrder,G as default};
