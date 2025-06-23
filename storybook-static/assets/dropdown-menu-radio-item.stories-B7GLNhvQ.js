import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-CP2yOfOm.js";import{B as p}from"./button-mvJUpYu0.js";import{g as r,a as u,b as l,c as m,f as c}from"./dropdown-menu-BhBlRuAB.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./chevron-right-DLQnG4vI.js";import"./createLucideIcon-CAcKuqHj.js";import"./circle-YboQvhN-.js";import"./check-C8XpHW4d.js";const J={title:"UI/DropdownMenu/DropdownMenuRadioItem",component:r,parameters:{layout:"centered",docs:{description:{component:"A radio item that can be selected from a group. Must be used within a DropdownMenu and DropdownMenuRadioGroup."}}},argTypes:{value:{control:"text",description:"The unique value of the radio item"},disabled:{control:"boolean",description:"Whether the item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},e=i=>{const[a,s]=d.useState("option1");return o.jsxs(u,{children:[o.jsx(l,{asChild:!0,children:o.jsx(p,{variant:"outline",children:"Open Menu"})}),o.jsx(m,{children:o.jsx(c,{value:a,onValueChange:s,children:o.jsx(r,{...i,value:"option1",children:"Option 1"})})})]})};e.parameters={docs:{description:{story:"A basic radio item within a radio group."}}};const n=i=>{const[a,s]=d.useState("option1");return o.jsxs(u,{children:[o.jsx(l,{asChild:!0,children:o.jsx(p,{variant:"outline",children:"Open Menu"})}),o.jsx(m,{children:o.jsx(c,{value:a,onValueChange:s,children:o.jsx(r,{...i,value:"option1",disabled:!0,children:"Disabled Option"})})})]})};n.parameters={docs:{description:{story:"A disabled radio item that cannot be selected."}}};const t=i=>{const[a,s]=d.useState("option2");return o.jsxs(u,{children:[o.jsx(l,{asChild:!0,children:o.jsx(p,{variant:"outline",children:"Open Menu"})}),o.jsx(m,{children:o.jsxs(c,{value:a,onValueChange:s,children:[o.jsx(r,{value:"option1",children:"First Option"}),o.jsx(r,{...i,value:"option2",children:"Selected Option"}),o.jsx(r,{value:"option3",children:"Last Option"})]})})]})};t.parameters={docs:{description:{story:"A radio item shown in context with other radio items in the group."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Disabled"};t.__docgenInfo={description:"",methods:[],displayName:"WithSiblings"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('option1');
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem {...args} value="option1">
            Option 1
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('option1');
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem {...args} value="option1" disabled>
            Disabled Option
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('option2');
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="option1">First Option</DropdownMenuRadioItem>
          <DropdownMenuRadioItem {...args} value="option2">
            Selected Option
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option3">Last Option</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...t.parameters?.docs?.source}}};const K=["Default","Disabled","WithSiblings"];export{e as Default,n as Disabled,t as WithSiblings,K as __namedExportsOrder,J as default};
