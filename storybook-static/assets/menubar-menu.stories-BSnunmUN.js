import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as i,a as s,c as o,d as a,e as r}from"./menubar-C3Oj_pc_.js";import"./index-CP2yOfOm.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D_-GhB2M.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./check-C8XpHW4d.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-right-DLQnG4vI.js";import"./circle-YboQvhN-.js";const q={title:"UI/Menubar/MenubarMenu",component:i,parameters:{layout:"centered",docs:{description:{component:"Container for a menu button and its content. Must be used within a Menubar component."}}},tags:["autodocs"]},n=()=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(o,{children:"Menu"}),e.jsxs(a,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]})});n.parameters={docs:{description:{story:"Basic menu with trigger and content."}}};const t=()=>e.jsxs(s,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"First"}),e.jsxs(a,{children:[e.jsx(r,{children:"First Item"}),e.jsx(r,{children:"Second Item"})]})]}),e.jsxs(i,{children:[e.jsx(o,{children:"Second"}),e.jsxs(a,{children:[e.jsx(r,{children:"First Item"}),e.jsx(r,{children:"Second Item"})]})]})]});t.parameters={docs:{description:{story:"Multiple menus showing sibling menu interaction."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithMultipleMenus"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Item 1</MenubarItem>
        <MenubarItem>Item 2</MenubarItem>
        <MenubarItem>Item 3</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>First</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>First Item</MenubarItem>
        <MenubarItem>Second Item</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Second</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>First Item</MenubarItem>
        <MenubarItem>Second Item</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...t.parameters?.docs?.source}}};const v=["Default","WithMultipleMenus"];export{n as Default,t as WithMultipleMenus,v as __namedExportsOrder,q as default};
