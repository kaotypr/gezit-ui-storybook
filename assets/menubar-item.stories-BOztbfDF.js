import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as r,a as i,b as o,c as u,d as c,f as s}from"./menubar-CiAKcgTl.js";import"./index-BgCQ941z.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-B7zbOe2i.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./check-DLjw-kwL.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./circle-C1EB2cBL.js";const q={title:"UI/Menubar/MenubarItem",component:r,parameters:{layout:"centered",docs:{description:{component:"Clickable menu item. Must be used within a MenubarContent component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the item"},disabled:{control:"boolean",description:"Whether the item is disabled"},inset:{control:"boolean",description:"Whether the item should have inset spacing"},variant:{control:"select",options:["default","destructive"],description:"Visual variant of the item"}},tags:["autodocs"]},t=()=>e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(u,{children:"Menu"}),e.jsxs(c,{children:[e.jsx(r,{children:"Regular Item"}),e.jsx(r,{disabled:!0,children:"Disabled Item"}),e.jsx(r,{inset:!0,children:"Inset Item"})]})]})});t.parameters={docs:{description:{story:"Different states of menu items."}}};const n=()=>e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(u,{children:"Edit"}),e.jsxs(c,{children:[e.jsxs(r,{children:["Copy ",e.jsx(s,{children:"⌘C"})]}),e.jsxs(r,{children:["Paste ",e.jsx(s,{children:"⌘V"})]})]})]})});n.parameters={docs:{description:{story:"Menu items with keyboard shortcuts."}}};const a=()=>e.jsx(i,{children:e.jsxs(o,{children:[e.jsx(u,{children:"Actions"}),e.jsxs(c,{children:[e.jsx(r,{children:"Default Action"}),e.jsxs(r,{variant:"destructive",children:["Delete ",e.jsx(s,{children:"⌘⌫"})]})]})]})});a.parameters={docs:{description:{story:"Menu items with different visual variants."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithShortcut"};a.__docgenInfo={description:"",methods:[],displayName:"WithVariants"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Menubar>
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
