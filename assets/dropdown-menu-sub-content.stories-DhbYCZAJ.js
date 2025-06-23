import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as u}from"./button-B_EVNb5l.js";import{h as s,a as i,b as d,c as p,d as o,i as m,j as a}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const J={title:"UI/DropdownMenu/DropdownMenuSubContent",component:s,parameters:{layout:"centered",docs:{description:{component:"The content that appears when a submenu is opened. Must be used within a DropdownMenuSub component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the submenu content"}},tags:["autodocs"]},e=t=>n.jsxs(i,{children:[n.jsx(d,{asChild:!0,children:n.jsx(u,{variant:"outline",children:"Open Menu"})}),n.jsxs(p,{children:[n.jsx(o,{children:"Main Action"}),n.jsxs(m,{children:[n.jsx(a,{children:"More Options"}),n.jsxs(s,{...t,children:[n.jsx(o,{children:"Sub Item 1"}),n.jsx(o,{children:"Sub Item 2"}),n.jsx(o,{children:"Sub Item 3"})]})]})]})]});e.parameters={docs:{description:{story:"Basic submenu content with default styling."}}};const r=t=>n.jsxs(i,{children:[n.jsx(d,{asChild:!0,children:n.jsx(u,{variant:"outline",children:"Open Menu"})}),n.jsxs(p,{children:[n.jsx(o,{children:"Main Action"}),n.jsxs(m,{children:[n.jsx(a,{children:"More Options"}),n.jsxs(s,{...t,className:"bg-muted",children:[n.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Custom Item 1"}),n.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Custom Item 2"})]})]})]})]});r.parameters={docs:{description:{story:"Submenu content with custom background color and hover states."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Main Action</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
        <DropdownMenuSubContent {...args}>
          <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 3</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Main Action</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
        <DropdownMenuSubContent {...args} className="bg-muted">
          <DropdownMenuItem className="hover:bg-muted-foreground/10">
            Custom Item 1
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted-foreground/10">
            Custom Item 2
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>`,...r.parameters?.docs?.source}}};const K=["Default","WithCustomStyling"];export{e as Default,r as WithCustomStyling,K as __namedExportsOrder,J as default};
