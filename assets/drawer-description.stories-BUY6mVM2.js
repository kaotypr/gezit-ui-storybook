import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-mvJUpYu0.js";import{c as s,a,b as n,D as c,d,e as p}from"./drawer-BlWdITYJ.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const z={title:"UI/Drawer/DrawerDescription",component:s,parameters:{layout:"centered",docs:{description:{component:"The description text of the drawer that provides additional context about its purpose or content."}}},tags:["autodocs"]},r=i=>e.jsxs(a,{children:[e.jsx(n,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Settings"}),e.jsx(s,{...i,children:"Make changes to your account settings here. Click save when you're done."})]}),e.jsx("div",{className:"p-4",children:"Content below description"})]})]});r.parameters={docs:{description:{story:"A standard drawer description providing context about the drawer content."}}};const t=i=>e.jsxs(a,{children:[e.jsx(n,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Custom"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Custom Description"}),e.jsx(s,{...i,className:"text-sm italic text-muted-foreground",children:"This description has custom styling applied to emphasize its informative nature."})]}),e.jsx("div",{className:"p-4",children:"Content below description"})]})]});t.parameters={docs:{description:{story:"A drawer description with custom text styling to enhance readability and emphasis."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription {...args}>
          Make changes to your account settings here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">Content below description</div>
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Custom</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Custom Description</DrawerTitle>
        <DrawerDescription {...args} className="text-sm italic text-muted-foreground">
          This description has custom styling applied to emphasize its informative nature.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">Content below description</div>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};const A=["Default","CustomStyling"];export{t as CustomStyling,r as Default,A as __namedExportsOrder,z as default};
