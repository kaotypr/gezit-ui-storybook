import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-CP2yOfOm.js";import{B as c}from"./button-mvJUpYu0.js";import{D as a,a as i,b as p,c as u}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const K={title:"UI/DropdownMenu/DropdownMenuCheckboxItem",component:a,parameters:{layout:"centered",docs:{description:{component:"A menu item that can be checked. Must be used within a DropdownMenu component."}}},argTypes:{checked:{control:"boolean",description:"The controlled checked state of the item",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},o=n=>{const[s,d]=h.useState(!1);return e.jsxs(i,{children:[e.jsx(p,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(a,{...n,checked:s,onCheckedChange:d,children:"Show Status Bar"})})]})};o.parameters={docs:{description:{story:"A basic checkbox menu item that can be toggled."}}};const t=n=>e.jsxs(i,{children:[e.jsx(p,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(a,{...n,disabled:!0,checked:!0,children:"Always Enabled"})})]});t.parameters={docs:{description:{story:"A disabled checkbox menu item that cannot be toggled."}}};const r=n=>{const[s,d]=h.useState(!0);return e.jsxs(i,{children:[e.jsx(p,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(a,{...n,checked:s,onCheckedChange:m=>{d(m),n.onCheckedChange?.(m)},children:"Auto Save"})})]})};r.parameters={docs:{description:{story:"A controlled checkbox menu item with a custom change handler."}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem {...args} checked={checked} onCheckedChange={setChecked}>
          Show Status Bar
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuCheckboxItem {...args} disabled checked>
        Always Enabled
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(true);
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem {...args} checked={checked} onCheckedChange={value => {
        setChecked(value);
        args.onCheckedChange?.(value);
      }}>
          Auto Save
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...r.parameters?.docs?.source}}};const L=["Default","Disabled","Controlled"];export{r as Controlled,o as Default,t as Disabled,L as __namedExportsOrder,K as default};
