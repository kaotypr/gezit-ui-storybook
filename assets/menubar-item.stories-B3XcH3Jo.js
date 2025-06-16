import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as r,a as i,b as o,c as u,d as c,f as s}from"./menubar-C3Oj_pc_.js";import"./index-CP2yOfOm.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D_-GhB2M.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./check-C8XpHW4d.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-right-DLQnG4vI.js";import"./circle-YboQvhN-.js";const q={title:"UI/Menubar/MenubarItem",component:r,parameters:{layout:"centered",docs:{description:{component:"Clickable menu item. Must be used within a MenubarContent component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the item"},disabled:{control:"boolean",description:"Whether the item is disabled"},inset:{control:"boolean",description:"Whether the item should have inset spacing"},variant:{control:"select",options:["default","destructive"],description:"Visual variant of the item"}},tags:["autodocs"]},t=()=>e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(u,{children:"Menu"}),e.jsxs(c,{children:[e.jsx(r,{children:"Regular Item"}),e.jsx(r,{disabled:!0,children:"Disabled Item"}),e.jsx(r,{inset:!0,children:"Inset Item"})]})]})});t.parameters={docs:{description:{story:"Different states of menu items."}}};const n=()=>e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(u,{children:"Edit"}),e.jsxs(c,{children:[e.jsxs(r,{children:["Copy ",e.jsx(s,{children:"⌘C"})]}),e.jsxs(r,{children:["Paste ",e.jsx(s,{children:"⌘V"})]})]})]})});n.parameters={docs:{description:{story:"Menu items with keyboard shortcuts."}}};const a=()=>e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(u,{children:"Actions"}),e.jsxs(c,{children:[e.jsx(r,{children:"Default Action"}),e.jsxs(r,{variant:"destructive",children:["Delete ",e.jsx(s,{children:"⌘⌫"})]})]})]})});a.parameters={docs:{description:{story:"Menu items with different visual variants."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithShortcut"};a.__docgenInfo={description:"",methods:[],displayName:"WithVariants"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Regular Item</MenubarItem>
        <MenubarItem disabled>Disabled Item</MenubarItem>
        <MenubarItem inset>Inset Item</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Copy <MenubarShortcut>⌘C</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Paste <MenubarShortcut>⌘V</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Actions</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Default Action</MenubarItem>
        <MenubarItem variant="destructive">
          Delete <MenubarShortcut>⌘⌫</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...a.parameters?.docs?.source}}};const z=["Default","WithShortcut","WithVariants"];export{t as Default,n as WithShortcut,a as WithVariants,z as __namedExportsOrder,q as default};
