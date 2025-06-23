import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{B as u}from"./button-mvJUpYu0.js";import{h as s,a as i,b as d,c as p,d as o,i as m,j as a}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const J={title:"UI/DropdownMenu/DropdownMenuSubContent",component:s,parameters:{layout:"centered",docs:{description:{component:"The content that appears when a submenu is opened. Must be used within a DropdownMenuSub component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the submenu content"}},tags:["autodocs"]},e=t=>n.jsxs(i,{children:[n.jsx(d,{asChild:!0,children:n.jsx(u,{variant:"outline",children:"Open Menu"})}),n.jsxs(p,{children:[n.jsx(o,{children:"Main Action"}),n.jsxs(m,{children:[n.jsx(a,{children:"More Options"}),n.jsxs(s,{...t,children:[n.jsx(o,{children:"Sub Item 1"}),n.jsx(o,{children:"Sub Item 2"}),n.jsx(o,{children:"Sub Item 3"})]})]})]})]});e.parameters={docs:{description:{story:"Basic submenu content with default styling."}}};const r=t=>n.jsxs(i,{children:[n.jsx(d,{asChild:!0,children:n.jsx(u,{variant:"outline",children:"Open Menu"})}),n.jsxs(p,{children:[n.jsx(o,{children:"Main Action"}),n.jsxs(m,{children:[n.jsx(a,{children:"More Options"}),n.jsxs(s,{...t,className:"bg-muted",children:[n.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Custom Item 1"}),n.jsx(o,{className:"hover:bg-muted-foreground/10",children:"Custom Item 2"})]})]})]})]});r.parameters={docs:{description:{story:"Submenu content with custom background color and hover states."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
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
