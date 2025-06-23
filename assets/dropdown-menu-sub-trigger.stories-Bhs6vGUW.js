import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as s}from"./button-B_EVNb5l.js";import{j as i,a as u,b as p,c as d,d as r,i as m,h as a}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const H={title:"UI/DropdownMenu/DropdownMenuSubTrigger",component:i,parameters:{layout:"centered",docs:{description:{component:"The trigger element for a submenu. Must be used within a DropdownMenuSub component."}}},argTypes:{inset:{control:"boolean",description:"Whether the trigger should be inset to align with items containing icons",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},e=t=>n.jsxs(u,{children:[n.jsx(p,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Menu"})}),n.jsxs(d,{children:[n.jsx(r,{children:"Main Action"}),n.jsxs(m,{children:[n.jsx(i,{...t,children:"More Options"}),n.jsxs(a,{children:[n.jsx(r,{children:"Sub Item 1"}),n.jsx(r,{children:"Sub Item 2"})]})]})]})]});e.parameters={docs:{description:{story:"A basic submenu trigger with default styling."}}};const o=t=>n.jsxs(u,{children:[n.jsx(p,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Menu"})}),n.jsxs(d,{children:[n.jsx(r,{inset:!0,children:"Main Action"}),n.jsxs(m,{children:[n.jsx(i,{...t,inset:!0,children:"More Options"}),n.jsxs(a,{children:[n.jsx(r,{children:"Sub Item 1"}),n.jsx(r,{children:"Sub Item 2"})]})]})]})]});o.parameters={docs:{description:{story:"A submenu trigger with inset spacing to align with items containing icons."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Inset"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Main Action</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger {...args}>More Options</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem inset>Main Action</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger {...args} inset>
          More Options
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>`,...o.parameters?.docs?.source}}};const J=["Default","Inset"];export{e as Default,o as Inset,J as __namedExportsOrder,H as default};
