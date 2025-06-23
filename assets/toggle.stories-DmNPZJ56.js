import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BgCQ941z.js";import{T as r}from"./toggle-Ec4E_mns.js";import{D as p}from"./dollar-sign-CRMrzn1Q.js";import"./index-Dc_FVRD7.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./createLucideIcon-BROHhCyT.js";const C={title:"UI/Toggle",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A two-state button that can be either on or off.

This component is built on top of [Radix UI Toggle](https://www.radix-ui.com/primitives/docs/components/toggle).`}}},argTypes:{pressed:{control:"boolean",description:"The controlled state of the toggle. Must be used in conjunction with onPressedChange.",defaultValue:!1},defaultPressed:{control:"boolean",description:"The state of the toggle when initially rendered. Use when you do not need to control its state.",defaultValue:!1},onPressedChange:{description:"Event handler called when the pressed state of the toggle changes."},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the toggle.",defaultValue:!1},variant:{control:"select",options:["default","outline"],description:"The visual style of the toggle.",defaultValue:"default"},size:{control:"select",options:["default","sm","lg"],description:"The size of the toggle.",defaultValue:"default"},className:{control:"text",description:"Additional CSS class names."}}},s={render:e=>t.jsx(r,{...e,children:"Toggle"}),parameters:{docs:{description:{story:"Default toggle button with text content."}}}},o={render:e=>t.jsxs(r,{...e,children:[t.jsx(p,{className:"h-4 w-4"}),"Toggle"]}),parameters:{docs:{description:{story:"Toggle button with an icon and text content."}}}},n={args:{variant:"outline"},render:e=>t.jsx(r,{...e,children:"Toggle"}),parameters:{docs:{description:{story:"Toggle button with outline variant styling."}}}},a={render:e=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(r,{...e,size:"sm",children:"Small"}),t.jsx(r,{...e,size:"default",children:"Default"}),t.jsx(r,{...e,size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"Toggle buttons in different sizes: small, default, and large."}}}},l={args:{disabled:!0},render:e=>t.jsx(r,{...e,children:"Disabled"}),parameters:{docs:{description:{story:"Disabled toggle button that cannot be interacted with."}}}},i={render:e=>{const[d,c]=g.useState(!1);return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsx(r,{...e,pressed:d,onPressedChange:c,children:d?"On":"Off"}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["Toggle is ",d?"on":"off"]})]})},parameters:{docs:{description:{story:"Controlled toggle button with state management."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Toggle {...args}>Toggle</Toggle>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default toggle button with text content.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Toggle {...args}>
        <DollarSign className="h-4 w-4" />
        Toggle
      </Toggle>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle button with an icon and text content.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => {
    return <Toggle {...args}>Toggle</Toggle>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle button with outline variant styling.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex items-center gap-4">
        <Toggle {...args} size="sm">
          Small
        </Toggle>
        <Toggle {...args} size="default">
          Default
        </Toggle>
        <Toggle {...args} size="lg">
          Large
        </Toggle>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle buttons in different sizes: small, default, and large.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    return <Toggle {...args}>Disabled</Toggle>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled toggle button that cannot be interacted with.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [pressed, setPressed] = React.useState(false);
    return <div className="flex flex-col items-center gap-4">
        <Toggle {...args} pressed={pressed} onPressedChange={setPressed}>
          {pressed ? 'On' : 'Off'}
        </Toggle>
        <p className="text-sm text-muted-foreground">Toggle is {pressed ? 'on' : 'off'}</p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled toggle button with state management.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const N=["Default","WithIcon","Outline","Sizes","Disabled","Controlled"];export{i as Controlled,s as Default,l as Disabled,n as Outline,a as Sizes,o as WithIcon,N as __namedExportsOrder,C as default};
