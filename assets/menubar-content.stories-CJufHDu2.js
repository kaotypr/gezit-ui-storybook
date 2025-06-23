import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as i,a as o,b as s,c as a,e as r}from"./menubar-CiAKcgTl.js";import"./index-BgCQ941z.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-B7zbOe2i.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./check-DLjw-kwL.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./circle-C1EB2cBL.js";const k={title:"UI/Menubar/MenubarContent",component:i,parameters:{layout:"centered",docs:{description:{component:"Contains the menu items. Must be used within a MenubarMenu component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the content"},align:{control:"select",options:["start","center","end"],description:"Alignment of the content relative to the trigger"},alignOffset:{control:"number",description:"Offset of the content alignment"},sideOffset:{control:"number",description:"Distance between trigger and content"}},tags:["autodocs"]},t=()=>e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Menu"}),e.jsxs(i,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})]})});t.parameters={docs:{description:{story:"Basic content container for menu items."}}};const n=()=>e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Aligned Menu"}),e.jsxs(i,{align:"end",alignOffset:5,sideOffset:10,children:[e.jsx(r,{children:"Right Aligned Item 1"}),e.jsx(r,{children:"Right Aligned Item 2"})]})]})});n.parameters={docs:{description:{story:"Content aligned to the end with custom offset values."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithAlignment"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Menubar>
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
