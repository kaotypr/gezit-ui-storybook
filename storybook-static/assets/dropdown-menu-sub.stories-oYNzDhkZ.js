import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as d}from"./button-mvJUpYu0.js";import{i as t,a as s,b as m,c as a,d as e,j as p,h as i}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const K={title:"UI/DropdownMenu/DropdownMenuSub",component:t,parameters:{layout:"centered",docs:{description:{component:"Creates a submenu that can be triggered from a parent menu. Must be used within a DropdownMenu component."}}},tags:["autodocs"]},o=u=>n.jsxs(s,{children:[n.jsx(m,{asChild:!0,children:n.jsx(d,{variant:"outline",children:"Open Menu"})}),n.jsxs(a,{children:[n.jsx(e,{children:"Main Action"}),n.jsxs(t,{...u,children:[n.jsx(p,{children:"More Options"}),n.jsxs(i,{children:[n.jsx(e,{children:"Sub Item 1"}),n.jsx(e,{children:"Sub Item 2"}),n.jsx(e,{children:"Sub Item 3"})]})]}),n.jsx(e,{children:"Other Action"})]})]});o.parameters={docs:{description:{story:"A basic submenu with multiple items."}}};const r=u=>n.jsxs(s,{children:[n.jsx(m,{asChild:!0,children:n.jsx(d,{variant:"outline",children:"Open Menu"})}),n.jsxs(a,{children:[n.jsx(e,{children:"Main Action"}),n.jsxs(t,{...u,children:[n.jsx(p,{children:"More Options"}),n.jsxs(i,{children:[n.jsx(e,{children:"Sub Item 1"}),n.jsxs(t,{children:[n.jsx(p,{children:"Even More"}),n.jsxs(i,{children:[n.jsx(e,{children:"Deep Item 1"}),n.jsx(e,{children:"Deep Item 2"})]})]}),n.jsx(e,{children:"Sub Item 2"})]})]}),n.jsx(e,{children:"Other Action"})]})]});r.parameters={docs:{description:{story:"Multiple levels of nested submenus demonstrating deep navigation structures."}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"NestedSubmenus"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
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
