import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-CP2yOfOm.js";import{S as s}from"./switch-CpYE2TaT.js";import{L as r}from"./label-C29XJGd3.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-BCfVrt2A.js";import"./index-DmDYQtFb.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./cn-BEHD0UYf.js";import"./index-DY14GT23.js";const C={title:"UI/Switch",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A control that allows users to toggle between checked and unchecked states.

This component is built on top of [Radix UI Switch](https://www.radix-ui.com/primitives/docs/components/switch).`}}},argTypes:{checked:{control:"boolean",description:"The controlled checked state of the switch."},defaultChecked:{control:"boolean",description:"The default checked state when initially rendered.",defaultValue:!1},onCheckedChange:{description:"Event handler called when the checked state of the switch changes."},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the switch.",defaultValue:!1},required:{control:"boolean",description:"When true, indicates that the user must check the switch before the owning form can be submitted.",defaultValue:!1},name:{control:"text",description:"The name of the switch. Submitted with its owning form as part of a name/value pair."},value:{control:"text",description:"The value given as data when submitted with a name."},className:{control:"text",description:"Additional CSS class names."}}},i={render:t=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"airplane-mode-1",...t}),e.jsx(r,{htmlFor:"airplane-mode",children:"Airplane mode"})]}),parameters:{docs:{description:{story:"Basic switch with a label."}}}},o={render:t=>e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,id:"airplane-mode-2"}),e.jsx(r,{htmlFor:"airplane-mode-2",children:"Airplane mode"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,id:"wifi"}),e.jsx(r,{htmlFor:"wifi",children:"Wi-Fi"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,id:"bluetooth"}),e.jsx(r,{htmlFor:"bluetooth",children:"Bluetooth"})]})]}),parameters:{docs:{description:{story:"Multiple switches with labels, demonstrating proper form accessibility."}}}},c={render:t=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,disabled:!0}),e.jsx(r,{children:"Disabled switch"})]}),args:{disabled:!0},parameters:{docs:{description:{story:"A disabled switch that cannot be interacted with."}}}},n={render:t=>{const[a,d]=m.useState(!1);return e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,checked:a,onCheckedChange:d}),e.jsxs(r,{children:["Controlled switch: ",a?"on":"off"]})]})},parameters:{docs:{description:{story:"A controlled switch with state management."}}}},l={render:t=>e.jsxs("form",{onSubmit:a=>{a.preventDefault();const d=new FormData(a.currentTarget);console.log(Object.fromEntries(d))},className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,id:"notifications",name:"notifications",value:"on"}),e.jsx(r,{htmlFor:"notifications",children:"Enable notifications"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{...t,id:"marketing",name:"marketing",value:"on"}),e.jsx(r,{htmlFor:"marketing",children:"Receive marketing emails"})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",children:"Submit"})]}),parameters:{docs:{description:{story:"Switches used within a form, demonstrating form submission and name/value pairs."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex items-center space-x-2">
        <Switch id="airplane-mode-1" {...args} />
        <Label htmlFor="airplane-mode">Airplane mode</Label>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic switch with a label.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <Switch {...args} id="airplane-mode-2" />
          <Label htmlFor="airplane-mode-2">Airplane mode</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch {...args} id="wifi" />
          <Label htmlFor="wifi">Wi-Fi</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch {...args} id="bluetooth" />
          <Label htmlFor="bluetooth">Bluetooth</Label>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple switches with labels, demonstrating proper form accessibility.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex items-center space-x-2">
        <Switch {...args} disabled />
        <Label>Disabled switch</Label>
      </div>;
  },
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled switch that cannot be interacted with.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = React.useState(false);
    return <div className="flex items-center space-x-2">
        <Switch {...args} checked={checked} onCheckedChange={setChecked} />
        <Label>Controlled switch: {checked ? 'on' : 'off'}</Label>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled switch with state management.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <form onSubmit={e => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      console.log(Object.fromEntries(formData));
    }} className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch {...args} id="notifications" name="notifications" value="on" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch {...args} id="marketing" name="marketing" value="on" />
          <Label htmlFor="marketing">Receive marketing emails</Label>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Submit
        </button>
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Switches used within a form, demonstrating form submission and name/value pairs.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const D=["Default","WithLabel","Disabled","Controlled","WithForm"];export{n as Controlled,i as Default,c as Disabled,l as WithForm,o as WithLabel,D as __namedExportsOrder,C as default};
