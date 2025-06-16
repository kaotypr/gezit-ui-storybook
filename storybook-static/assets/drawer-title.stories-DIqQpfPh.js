import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-DVhd8Mv9.js";import{e as i,a as n,b as s,D as l,d}from"./drawer-BlWdITYJ.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const A={title:"UI/Drawer/DrawerTitle",component:i,parameters:{layout:"centered",docs:{description:{component:"The title element of the drawer, typically used within DrawerHeader."}}},tags:["autodocs"]},r=a=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open"})}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsx(i,{...a,children:"Settings"})}),e.jsx("div",{className:"p-4",children:"Content below title"})]})]});r.parameters={docs:{description:{story:"A standard drawer title within a header."}}};const t=a=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Custom"})}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsx(i,{...a,className:"text-2xl font-bold text-primary",children:"Custom Styled Title"})}),e.jsx("div",{className:"p-4",children:"Content below title"})]})]});t.parameters={docs:{description:{story:"A drawer title with custom styling applied through className."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle {...args}>Settings</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content below title</div>
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Custom</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle {...args} className="text-2xl font-bold text-primary">
          Custom Styled Title
        </DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content below title</div>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};const E=["Default","CustomStyling"];export{t as CustomStyling,r as Default,E as __namedExportsOrder,A as default};
