import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-mvJUpYu0.js";import{d as s,a as d,b as p,c as u}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const F={title:"UI/DropdownMenu/DropdownMenuItem",component:s,parameters:{layout:"centered",docs:{description:{component:"A menu item within the dropdown menu. Must be used within a DropdownMenu component."}}},argTypes:{variant:{control:"select",options:["default","destructive"],description:"The visual style of the menu item",table:{type:{summary:'"default" | "destructive"'},defaultValue:{summary:"default"}}},inset:{control:"boolean",description:"Whether the item should be inset to align with items containing icons",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Whether the item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},t=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,children:"Profile Settings"})})]});t.parameters={docs:{description:{story:"A basic menu item with default styling."}}};const o=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,variant:"destructive",children:"Delete Account"})})]});o.parameters={docs:{description:{story:"A menu item with destructive styling for dangerous actions."}}};const r=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,disabled:!0,children:"Unavailable Option"})})]});r.parameters={docs:{description:{story:"A disabled menu item that cannot be selected."}}};const i=n=>e.jsxs(d,{children:[e.jsx(p,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(s,{...n,inset:!0,children:"Inset Menu Item"})})]});i.parameters={docs:{description:{story:"A menu item with inset spacing to align with items containing icons."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Destructive"};r.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"Inset"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
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
