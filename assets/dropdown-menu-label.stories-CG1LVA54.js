import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as p}from"./button-mvJUpYu0.js";import{e as s,a,b as d,c as u,d as t}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const z={title:"UI/DropdownMenu/DropdownMenuLabel",component:s,parameters:{layout:"centered",docs:{description:{component:"A label for a group of menu items. Must be used within a DropdownMenu component."}}},argTypes:{inset:{control:"boolean",description:"Whether the label should be inset to align with items containing icons",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},n=i=>e.jsxs(a,{children:[e.jsx(d,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Open Menu"})}),e.jsxs(u,{children:[e.jsx(s,{...i,children:"Account Settings"}),e.jsx(t,{children:"Profile"}),e.jsx(t,{children:"Preferences"})]})]});n.parameters={docs:{description:{story:"A basic label for grouping menu items."}}};const o=i=>e.jsxs(a,{children:[e.jsx(d,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Open Menu"})}),e.jsxs(u,{children:[e.jsx(s,{...i,inset:!0,children:"Account Settings"}),e.jsx(t,{inset:!0,children:"Profile"}),e.jsx(t,{inset:!0,children:"Preferences"})]})]});o.parameters={docs:{description:{story:"A label with inset spacing to align with items containing icons."}}};const r=i=>e.jsxs(a,{children:[e.jsx(d,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Open Menu"})}),e.jsxs(u,{children:[e.jsx(s,{...i,className:"text-primary font-bold",children:"Important Settings"}),e.jsx(t,{children:"Security"}),e.jsx(t,{children:"Privacy"})]})]});r.parameters={docs:{description:{story:"A label with custom text styling for emphasis."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Inset"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel {...args}>Account Settings</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Preferences</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel {...args} inset>
        Account Settings
      </DropdownMenuLabel>
      <DropdownMenuItem inset>Profile</DropdownMenuItem>
      <DropdownMenuItem inset>Preferences</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel {...args} className="text-primary font-bold">
        Important Settings
      </DropdownMenuLabel>
      <DropdownMenuItem>Security</DropdownMenuItem>
      <DropdownMenuItem>Privacy</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...r.parameters?.docs?.source}}};const F=["Default","Inset","WithCustomStyling"];export{n as Default,o as Inset,r as WithCustomStyling,F as __namedExportsOrder,z as default};
