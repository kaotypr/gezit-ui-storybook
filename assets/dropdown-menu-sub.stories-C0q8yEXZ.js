import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as d}from"./button-B_EVNb5l.js";import{i as t,a as s,b as m,c as a,d as e,j as p,h as i}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const K={title:"UI/DropdownMenu/DropdownMenuSub",component:t,parameters:{layout:"centered",docs:{description:{component:"Creates a submenu that can be triggered from a parent menu. Must be used within a DropdownMenu component."}}},tags:["autodocs"]},o=u=>n.jsxs(s,{children:[n.jsx(m,{asChild:!0,children:n.jsx(d,{variant:"outline",children:"Open Menu"})}),n.jsxs(a,{children:[n.jsx(e,{children:"Main Action"}),n.jsxs(t,{...u,children:[n.jsx(p,{children:"More Options"}),n.jsxs(i,{children:[n.jsx(e,{children:"Sub Item 1"}),n.jsx(e,{children:"Sub Item 2"}),n.jsx(e,{children:"Sub Item 3"})]})]}),n.jsx(e,{children:"Other Action"})]})]});o.parameters={docs:{description:{story:"A basic submenu with multiple items."}}};const r=u=>n.jsxs(s,{children:[n.jsx(m,{asChild:!0,children:n.jsx(d,{variant:"outline",children:"Open Menu"})}),n.jsxs(a,{children:[n.jsx(e,{children:"Main Action"}),n.jsxs(t,{...u,children:[n.jsx(p,{children:"More Options"}),n.jsxs(i,{children:[n.jsx(e,{children:"Sub Item 1"}),n.jsxs(t,{children:[n.jsx(p,{children:"Even More"}),n.jsxs(i,{children:[n.jsx(e,{children:"Deep Item 1"}),n.jsx(e,{children:"Deep Item 2"})]})]}),n.jsx(e,{children:"Sub Item 2"})]})]}),n.jsx(e,{children:"Other Action"})]})]});r.parameters={docs:{description:{story:"Multiple levels of nested submenus demonstrating deep navigation structures."}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"NestedSubmenus"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Main Action</DropdownMenuItem>
      <DropdownMenuSub {...args}>
        <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 3</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuItem>Other Action</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Main Action</DropdownMenuItem>
      <DropdownMenuSub {...args}>
        <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Even More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Deep Item 1</DropdownMenuItem>
              <DropdownMenuItem>Deep Item 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuItem>Other Action</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...r.parameters?.docs?.source}}};const L=["Default","NestedSubmenus"];export{o as Default,r as NestedSubmenus,L as __namedExportsOrder,K as default};
