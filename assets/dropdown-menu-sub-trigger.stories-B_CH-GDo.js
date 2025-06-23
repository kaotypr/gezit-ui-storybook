import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as s}from"./button-mvJUpYu0.js";import{j as i,a as u,b as p,c as d,d as r,i as m,h as a}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const H={title:"UI/DropdownMenu/DropdownMenuSubTrigger",component:i,parameters:{layout:"centered",docs:{description:{component:"The trigger element for a submenu. Must be used within a DropdownMenuSub component."}}},argTypes:{inset:{control:"boolean",description:"Whether the trigger should be inset to align with items containing icons",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},e=t=>n.jsxs(u,{children:[n.jsx(p,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Menu"})}),n.jsxs(d,{children:[n.jsx(r,{children:"Main Action"}),n.jsxs(m,{children:[n.jsx(i,{...t,children:"More Options"}),n.jsxs(a,{children:[n.jsx(r,{children:"Sub Item 1"}),n.jsx(r,{children:"Sub Item 2"})]})]})]})]});e.parameters={docs:{description:{story:"A basic submenu trigger with default styling."}}};const o=t=>n.jsxs(u,{children:[n.jsx(p,{asChild:!0,children:n.jsx(s,{variant:"outline",children:"Open Menu"})}),n.jsxs(d,{children:[n.jsx(r,{inset:!0,children:"Main Action"}),n.jsxs(m,{children:[n.jsx(i,{...t,inset:!0,children:"More Options"}),n.jsxs(a,{children:[n.jsx(r,{children:"Sub Item 1"}),n.jsx(r,{children:"Sub Item 2"})]})]})]})]});o.parameters={docs:{description:{story:"A submenu trigger with inset spacing to align with items containing icons."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Inset"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
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
