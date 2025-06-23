import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as a,a as o,b as i,d as s,e as n}from"./menubar-CiAKcgTl.js";import"./index-BgCQ941z.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-B7zbOe2i.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./check-DLjw-kwL.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./circle-C1EB2cBL.js";const q={title:"UI/Menubar/MenubarTrigger",component:a,parameters:{layout:"centered",docs:{description:{component:"Button that toggles the menu. Must be used within a MenubarMenu component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the trigger"},disabled:{control:"boolean",description:"Whether the trigger is disabled"}},tags:["autodocs"]},r=()=>e.jsx(o,{children:e.jsxs(i,{children:[e.jsx(a,{children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"})]})]})});r.parameters={docs:{description:{story:"Basic trigger button for a menu."}}};const t=()=>e.jsx(o,{children:e.jsxs(i,{children:[e.jsx(a,{disabled:!0,children:"Disabled Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"})]})]})});t.parameters={docs:{description:{story:"Disabled trigger that cannot be interacted with."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Menubar>
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
