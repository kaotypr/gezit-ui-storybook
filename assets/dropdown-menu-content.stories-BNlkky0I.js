import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as i}from"./button-B_EVNb5l.js";import{c as d,a as m,b as p,d as o}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const G={title:"UI/DropdownMenu/DropdownMenuContent",component:d,parameters:{layout:"centered",docs:{description:{component:"The content that appears when the dropdown menu is opened. Must be used within a DropdownMenu component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the content"}},tags:["autodocs"]},n=s=>e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Menu"})}),e.jsxs(d,{...s,children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]});n.parameters={docs:{description:{story:"Basic dropdown menu content with default styling and positioning."}}};const t=s=>e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Menu (Offset)"})}),e.jsxs(d,{...s,sideOffset:8,children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]});t.parameters={docs:{description:{story:"Content with increased offset from the trigger button."}}};const r=s=>e.jsxs(m,{children:[e.jsx(p,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Custom Menu"})}),e.jsxs(d,{...s,className:"bg-muted",children:[e.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Item 1"}),e.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Item 2"}),e.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Item 3"})]})]});r.parameters={docs:{description:{story:"Content with custom background color and hover states."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomOffset"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent {...args}>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu (Offset)</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent {...args} sideOffset={8}>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Custom Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent {...args} className="bg-muted">
      <DropdownMenuItem className="hover:bg-muted-foreground/10">Item 1</DropdownMenuItem>
      <DropdownMenuItem className="hover:bg-muted-foreground/10">Item 2</DropdownMenuItem>
      <DropdownMenuItem className="hover:bg-muted-foreground/10">Item 3</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...r.parameters?.docs?.source}}};const H=["Default","WithCustomOffset","WithCustomStyling"];export{n as Default,t as WithCustomOffset,r as WithCustomStyling,H as __namedExportsOrder,G as default};
