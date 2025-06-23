import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-mvJUpYu0.js";import{f as a,a as s,b as i,D as l,d,e as c,g as p}from"./drawer-BlWdITYJ.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const E={title:"UI/Drawer/DrawerFooter",component:a,parameters:{layout:"centered",docs:{description:{component:"The footer section of the drawer that typically contains action buttons."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to apply to the footer",table:{type:{summary:"string"}}}},tags:["autodocs"]},e=n=>r.jsxs(s,{children:[r.jsx(i,{asChild:!0,children:r.jsx(o,{variant:"outline",children:"Open"})}),r.jsxs(l,{children:[r.jsx(d,{children:r.jsx(c,{children:"Settings"})}),r.jsx("div",{className:"p-4",children:"Content above footer"}),r.jsxs(a,{...n,children:[r.jsx(o,{children:"Save changes"}),r.jsx(p,{asChild:!0,children:r.jsx(o,{variant:"outline",children:"Cancel"})})]})]})]});e.parameters={docs:{description:{story:"A standard footer with primary and secondary action buttons."}}};const t=n=>r.jsxs(s,{children:[r.jsx(i,{asChild:!0,children:r.jsx(o,{variant:"outline",children:"Open Single Button"})}),r.jsxs(l,{children:[r.jsx(d,{children:r.jsx(c,{children:"Confirmation"})}),r.jsx("div",{className:"p-4",children:"Content above footer"}),r.jsx(a,{...n,children:r.jsx(p,{asChild:!0,children:r.jsx(o,{children:"Close"})})})]})]});t.parameters={docs:{description:{story:"A minimal footer with a single action button."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"SingleButton"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content above footer</div>
      <DrawerFooter {...args}>
        <Button>Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Single Button</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Confirmation</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content above footer</div>
      <DrawerFooter {...args}>
        <DrawerClose asChild>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};const R=["Default","SingleButton"];export{e as Default,t as SingleButton,R as __namedExportsOrder,E as default};
