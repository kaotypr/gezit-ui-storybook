import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as i,a as s,c as o,d as a,e as r}from"./menubar-CiAKcgTl.js";import"./index-BgCQ941z.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-B7zbOe2i.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./check-DLjw-kwL.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./circle-C1EB2cBL.js";const q={title:"UI/Menubar/MenubarMenu",component:i,parameters:{layout:"centered",docs:{description:{component:"Container for a menu button and its content. Must be used within a Menubar component."}}},tags:["autodocs"]},n=()=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(o,{children:"Menu"}),e.jsxs(a,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]})});n.parameters={docs:{description:{story:"Basic menu with trigger and content."}}};const t=()=>e.jsxs(s,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"First"}),e.jsxs(a,{children:[e.jsx(r,{children:"First Item"}),e.jsx(r,{children:"Second Item"})]})]}),e.jsxs(i,{children:[e.jsx(o,{children:"Second"}),e.jsxs(a,{children:[e.jsx(r,{children:"First Item"}),e.jsx(r,{children:"Second Item"})]})]})]});t.parameters={docs:{description:{story:"Multiple menus showing sibling menu interaction."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithMultipleMenus"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Menubar>
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
