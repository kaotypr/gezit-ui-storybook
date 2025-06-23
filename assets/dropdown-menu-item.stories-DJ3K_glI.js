import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{d as s,a as d,b as p,c as u}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const F={title:"UI/DropdownMenu/DropdownMenuItem",component:s,parameters:{layout:"centered",docs:{description:{component:"A menu item within the dropdown menu. Must be used within a DropdownMenu component."}}},argTypes:{variant:{control:"select",options:["default","destructive"],description:"The visual style of the menu item",table:{type:{summary:'"default" | "destructive"'},defaultValue:{summary:"default"}}},inset:{control:"boolean",description:"Whether the item should be inset to align with items containing icons",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Whether the item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},t=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,children:"Profile Settings"})})]});t.parameters={docs:{description:{story:"A basic menu item with default styling."}}};const o=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,variant:"destructive",children:"Delete Account"})})]});o.parameters={docs:{description:{story:"A menu item with destructive styling for dangerous actions."}}};const r=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,disabled:!0,children:"Unavailable Option"})})]});r.parameters={docs:{description:{story:"A disabled menu item that cannot be selected."}}};const i=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,inset:!0,children:"Inset Menu Item"})})]});i.parameters={docs:{description:{story:"A menu item with inset spacing to align with items containing icons."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Destructive"};r.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"Inset"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem {...args}>Profile Settings</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem {...args} variant="destructive">
        Delete Account
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem {...args} disabled>
        Unavailable Option
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem {...args} inset>
        Inset Menu Item
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...i.parameters?.docs?.source}}};const G=["Default","Destructive","Disabled","Inset"];export{t as Default,o as Destructive,r as Disabled,i as Inset,G as __namedExportsOrder,F as default};
