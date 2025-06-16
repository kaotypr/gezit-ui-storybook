import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as i,R as t}from"./radio-group-BVxFqKEC.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-lA-nzH4g.js";import"./index-BEIweEOh.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D-X1RFvQ.js";import"./index-CROEQnJ0.js";import"./index-BBCYznAR.js";import"./index-DmDYQtFb.js";import"./index-BCfVrt2A.js";import"./index-CjF7u6Cb.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";const V={title:"UI/RadioGroup",component:i,parameters:{layout:"centered",docs:{description:{component:`
A set of checkable buttons where only one can be checked at a time.

This component is built on top of [Radix UI Radio Group](https://www.radix-ui.com/primitives/docs/components/radio-group).

### Component Parts
- [RadioGroupItem](?path=/story/ui-radiogroup-radiogroupitem--default): Individual radio button within the group.
        `}}},argTypes:{defaultValue:{description:"The value of the radio item that should be checked by default",control:"text"},value:{description:"The controlled value of the radio item that is checked",control:"text"},onValueChange:{description:"Event handler called when the value changes"},disabled:{description:"When true, prevents the user from interacting with radio items",control:"boolean"},required:{description:"When true, indicates that the user must check a radio item before the form can be submitted",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},a=()=>e.jsxs(i,{defaultValue:"option-1",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-1",id:"option-1"}),e.jsx("label",{htmlFor:"option-1",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-2",id:"option-2"}),e.jsx("label",{htmlFor:"option-2",children:"Option 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-3",id:"option-3"}),e.jsx("label",{htmlFor:"option-3",children:"Option 3"})]})]});a.parameters={docs:{description:{story:"Basic usage of the RadioGroup component with three options."}}};const o=()=>e.jsxs(i,{defaultValue:"option-1",disabled:!0,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-1",id:"disabled-1"}),e.jsx("label",{htmlFor:"disabled-1",className:"text-muted-foreground",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-2",id:"disabled-2"}),e.jsx("label",{htmlFor:"disabled-2",className:"text-muted-foreground",children:"Option 2"})]})]});o.parameters={docs:{description:{story:"RadioGroup in a disabled state."}}};const s=()=>e.jsxs("form",{onSubmit:n=>{n.preventDefault();const l=new FormData(n.currentTarget);alert(`Selected: ${l.get("plan")}`)},children:[e.jsxs(i,{name:"plan",defaultValue:"personal",className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{value:"personal",id:"plan-1"}),e.jsxs("label",{htmlFor:"plan-1",className:"font-medium",children:["Personal",e.jsx("div",{className:"text-sm text-muted-foreground",children:"Perfect for side projects"})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{value:"team",id:"plan-2"}),e.jsxs("label",{htmlFor:"plan-2",className:"font-medium",children:["Team",e.jsx("div",{className:"text-sm text-muted-foreground",children:"For small teams"})]})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{value:"enterprise",id:"plan-3"}),e.jsxs("label",{htmlFor:"plan-3",className:"font-medium",children:["Enterprise",e.jsx("div",{className:"text-sm text-muted-foreground",children:"For large organizations"})]})]})]}),e.jsx("button",{type:"submit",className:"bg-primary text-primary-foreground hover:bg-primary/90 mt-4 px-4 py-2 rounded-md",children:"Submit"})]});s.parameters={docs:{description:{story:"RadioGroup used within a form with descriptive labels."}}};const r=()=>e.jsxs(i,{defaultValue:"option-1",className:"bg-muted p-4 rounded-lg space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-1",id:"custom-1",className:"border-primary data-[state=checked]:border-primary/80"}),e.jsx("label",{htmlFor:"custom-1",className:"font-semibold",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option-2",id:"custom-2",className:"border-primary data-[state=checked]:border-primary/80"}),e.jsx("label",{htmlFor:"custom-2",className:"font-semibold",children:"Option 2"})]})]});r.parameters={docs:{description:{story:"RadioGroup with custom styling using Tailwind CSS classes."}}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};s.__docgenInfo={description:"",methods:[],displayName:"WithForm"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <label htmlFor="option-1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <label htmlFor="option-2">Option 2</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <label htmlFor="option-3">Option 3</label>
      </div>
    </RadioGroup>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="disabled-1" />
        <label htmlFor="disabled-1" className="text-muted-foreground">
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="disabled-2" />
        <label htmlFor="disabled-2" className="text-muted-foreground">
          Option 2
        </label>
      </div>
    </RadioGroup>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <form onSubmit={e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(\`Selected: \${formData.get('plan')}\`);
  }}>
      <RadioGroup name="plan" defaultValue="personal" className="space-y-4">
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="personal" id="plan-1" />
          <label htmlFor="plan-1" className="font-medium">
            Personal
            <div className="text-sm text-muted-foreground">Perfect for side projects</div>
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="team" id="plan-2" />
          <label htmlFor="plan-2" className="font-medium">
            Team
            <div className="text-sm text-muted-foreground">For small teams</div>
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="enterprise" id="plan-3" />
          <label htmlFor="plan-3" className="font-medium">
            Enterprise
            <div className="text-sm text-muted-foreground">For large organizations</div>
          </label>
        </div>
      </RadioGroup>
      <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 px-4 py-2 rounded-md">
        Submit
      </button>
    </form>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup defaultValue="option-1" className="bg-muted p-4 rounded-lg space-y-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="custom-1" className="border-primary data-[state=checked]:border-primary/80" />
        <label htmlFor="custom-1" className="font-semibold">
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="custom-2" className="border-primary data-[state=checked]:border-primary/80" />
        <label htmlFor="custom-2" className="font-semibold">
          Option 2
        </label>
      </div>
    </RadioGroup>;
}`,...r.parameters?.docs?.source}}};const _=["Default","Disabled","WithForm","CustomStyling"];export{r as CustomStyling,a as Default,o as Disabled,s as WithForm,_ as __namedExportsOrder,V as default};
