import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as k}from"./index-BgCQ941z.js";import{L as s}from"./label-BqhQcKF3.js";import{C as r}from"./checkbox-Cwc5397B.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-BMvmY0JD.js";import"./index-B9tD0Hfr.js";import"./index-RJnmdD4_.js";import"./check-DLjw-kwL.js";import"./createLucideIcon-BROHhCyT.js";const O={title:"UI/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:`
A checkbox component that allows users to select one or more items from a set of options.

This component is built on top of [Radix UI Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox).
        `}}},argTypes:{checked:{description:"The controlled checked state of the checkbox",control:"select",options:[!0,!1,"indeterminate"]},defaultChecked:{description:"The default checked state of the checkbox",control:"select",options:[!0,!1,"indeterminate"]},disabled:{description:"When true, prevents the user from interacting with the checkbox",control:"boolean"},required:{description:"When true, indicates that the user must check the checkbox before the owning form can be submitted",control:"boolean"},name:{description:"The name of the checkbox, submitted with its owning form as part of a name/value pair",control:"text"},value:{description:"The value given as data when submitted with a name",control:"text"},id:{description:"The unique identifier of the checkbox",control:"text"},className:{description:"Additional CSS classes to apply",control:"text"},onCheckedChange:{description:"Callback fired when the checked state changes",action:"onCheckedChange"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},i={args:{id:"terms"}},t=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"terms"}),e.jsx(s,{htmlFor:"terms",children:"Accept terms and conditions"})]}),n={args:{id:"disabled",disabled:!0}},d={args:{id:"disabled-checked",disabled:!0,defaultChecked:!0}},l={args:{id:"invalid","aria-invalid":!0}},p={args:{id:"required",required:!0}},o=()=>e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"option1",name:"options",value:"option1"}),e.jsx(s,{htmlFor:"option1",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"option2",name:"options",value:"option2"}),e.jsx(s,{htmlFor:"option2",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"option3",name:"options",value:"option3"}),e.jsx(s,{htmlFor:"option3",children:"Option 3"})]})]}),a=()=>{const[c,u]=k.useState(!1),x=b=>{u(b)};return e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"example-controlled",checked:c,onCheckedChange:x}),e.jsx(s,{htmlFor:"example-controlled",children:c?"Checked":"Unchecked"})]})},m={args:{id:"aria-label","aria-label":"Accept terms and conditions"}},h={args:{id:"aria-describedby","aria-describedby":"checkbox-description"},render:c=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{...c}),e.jsx(s,{htmlFor:"aria-describedby",children:"Accept terms and conditions"})]}),e.jsx("p",{id:"checkbox-description",className:"text-sm text-muted-foreground",children:"By checking this box, you agree to our terms of service and privacy policy."})]})};t.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};o.__docgenInfo={description:"",methods:[],displayName:"Group"};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'terms'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-checked',
    disabled: true,
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'invalid',
    'aria-invalid': true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required',
    required: true
  }
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" name="options" value="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" name="options" value="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" name="options" value="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </div>;
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = React.useState<CheckedState>(false);
  const handleCheckedChange = (checked: CheckedState) => {
    setChecked(checked);
  };
  return <div className="flex items-center space-x-2">
      <Checkbox id="example-controlled" checked={checked} onCheckedChange={handleCheckedChange} />
      <Label htmlFor="example-controlled">{checked ? 'Checked' : 'Unchecked'}</Label>
    </div>;
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'aria-label',
    'aria-label': 'Accept terms and conditions'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'aria-describedby',
    'aria-describedby': 'checkbox-description'
  },
  render: args => <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} />
        <Label htmlFor="aria-describedby">Accept terms and conditions</Label>
      </div>
      <p id="checkbox-description" className="text-sm text-muted-foreground">
        By checking this box, you agree to our terms of service and privacy policy.
      </p>
    </div>
}`,...h.parameters?.docs?.source}}};const T=["Default","WithLabel","Disabled","DisabledChecked","Invalid","Required","Group","Controlled","WithAriaLabel","WithAriaDescribedBy"];export{a as Controlled,i as Default,n as Disabled,d as DisabledChecked,o as Group,l as Invalid,p as Required,h as WithAriaDescribedBy,m as WithAriaLabel,t as WithLabel,T as __namedExportsOrder,O as default};
