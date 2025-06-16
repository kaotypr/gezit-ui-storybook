import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as i,a as o,b as s,c as a,e as r}from"./menubar-C3Oj_pc_.js";import"./index-CP2yOfOm.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D_-GhB2M.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./check-C8XpHW4d.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-right-DLQnG4vI.js";import"./circle-YboQvhN-.js";const k={title:"UI/Menubar/MenubarContent",component:i,parameters:{layout:"centered",docs:{description:{component:"Contains the menu items. Must be used within a MenubarMenu component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the content"},align:{control:"select",options:["start","center","end"],description:"Alignment of the content relative to the trigger"},alignOffset:{control:"number",description:"Offset of the content alignment"},sideOffset:{control:"number",description:"Distance between trigger and content"}},tags:["autodocs"]},t=()=>e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]})});t.parameters={docs:{description:{story:"Basic content container for menu items."}}};const n=()=>e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Aligned Menu"}),e.jsxs(i,{align:"end",alignOffset:5,sideOffset:10,children:[e.jsx(r,{children:"Right Aligned Item 1"}),e.jsx(r,{children:"Right Aligned Item 2"})]})]})});n.parameters={docs:{description:{story:"Content aligned to the end with custom offset values."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithAlignment"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Item 1</MenubarItem>
        <MenubarItem>Item 2</MenubarItem>
        <MenubarItem>Item 3</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Aligned Menu</MenubarTrigger>
      <MenubarContent align="end" alignOffset={5} sideOffset={10}>
        <MenubarItem>Right Aligned Item 1</MenubarItem>
        <MenubarItem>Right Aligned Item 2</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...n.parameters?.docs?.source}}};const q=["Default","WithAlignment"];export{t as Default,n as WithAlignment,q as __namedExportsOrder,k as default};
