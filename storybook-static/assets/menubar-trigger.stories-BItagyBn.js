import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as a,a as o,b as i,d as s,e as n}from"./menubar-C3Oj_pc_.js";import"./index-CP2yOfOm.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D_-GhB2M.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./check-C8XpHW4d.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-right-DLQnG4vI.js";import"./circle-YboQvhN-.js";const q={title:"UI/Menubar/MenubarTrigger",component:a,parameters:{layout:"centered",docs:{description:{component:"Button that toggles the menu. Must be used within a MenubarMenu component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the trigger"},disabled:{control:"boolean",description:"Whether the trigger is disabled"}},tags:["autodocs"]},r=()=>e.jsx(o,{children:e.jsxs(i,{children:[e.jsx(a,{children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"})]})]})});r.parameters={docs:{description:{story:"Basic trigger button for a menu."}}};const t=()=>e.jsx(o,{children:e.jsxs(i,{children:[e.jsx(a,{disabled:!0,children:"Disabled Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"})]})]})});t.parameters={docs:{description:{story:"Disabled trigger that cannot be interacted with."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Item 1</MenubarItem>
        <MenubarItem>Item 2</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Menubar>
    <MenubarMenu>
      <MenubarTrigger disabled>Disabled Menu</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Item 1</MenubarItem>
        <MenubarItem>Item 2</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,...t.parameters?.docs?.source}}};const v=["Default","Disabled"];export{r as Default,t as Disabled,v as __namedExportsOrder,q as default};
