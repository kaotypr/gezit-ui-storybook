import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as n}from"./index-BgCQ941z.js";import{M as r,a as c,b as i,c as h,d as u}from"./menubar-CiAKcgTl.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-B7zbOe2i.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./check-DLjw-kwL.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./circle-C1EB2cBL.js";const H={title:"UI/Menubar/MenubarCheckboxItem",component:r,parameters:{layout:"centered",docs:{description:{component:"A menu item that can be checked/unchecked. Must be used within a MenubarContent component."}}},argTypes:{checked:{control:"boolean",description:"The controlled checked state of the item"},disabled:{control:"boolean",description:"Whether the item is disabled"},className:{control:"text",description:"Additional CSS classes to style the item"}},tags:["autodocs"]},t=()=>{const[a,s]=n.useState(!1);return e.jsx(c,{children:e.jsxs(i,{children:[e.jsx(h,{children:"View"}),e.jsx(u,{children:e.jsx(r,{checked:a,onCheckedChange:s,children:"Show Toolbar"})})]})})};t.parameters={docs:{description:{story:"Basic checkbox item with controlled state."}}};const o=()=>{const[a,s]=n.useState(!0),[d,m]=n.useState(!1),[b,l]=n.useState(!0);return e.jsx(c,{children:e.jsxs(i,{children:[e.jsx(h,{children:"View"}),e.jsxs(u,{children:[e.jsx(r,{checked:a,onCheckedChange:s,children:"Show Toolbar"}),e.jsx(r,{checked:d,onCheckedChange:m,children:"Show Statusbar"}),e.jsx(r,{checked:b,onCheckedChange:l,disabled:!0,children:"Show Panel"})]})]})})};o.parameters={docs:{description:{story:"Multiple checkbox items with different states including disabled."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithMultipleItems"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={checked} onCheckedChange={setChecked}>
            Show Toolbar
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [showToolbar, setShowToolbar] = useState(true);
  const [showStatusbar, setShowStatusbar] = useState(false);
  const [showPanel, setShowPanel] = useState(true);
  return <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            Show Toolbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showStatusbar} onCheckedChange={setShowStatusbar}>
            Show Statusbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} disabled>
            Show Panel
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>;
}`,...o.parameters?.docs?.source}}};const J=["Default","WithMultipleItems"];export{t as Default,o as WithMultipleItems,J as __namedExportsOrder,H as default};
