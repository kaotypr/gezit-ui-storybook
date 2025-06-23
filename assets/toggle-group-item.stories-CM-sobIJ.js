import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as t,a as o}from"./toggle-group-BBtSiNoo.js";import{D as n}from"./dollar-sign-CRMrzn1Q.js";import"./index-BgCQ941z.js";import"./index-B5LVTqq5.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-CQ43I_sF.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-KGCq4IUG.js";import"./index-BInWWs9D.js";import"./index-Pxmga4VG.js";import"./toggle-Ec4E_mns.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./createLucideIcon-BROHhCyT.js";const V={title:"UI/ToggleGroup/ToggleGroupItem",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The individual toggle button within the group. Must be used within a ToggleGroup component.

This component is built on top of [Radix UI Toggle Group Item](https://www.radix-ui.com/primitives/docs/components/toggle-group#item).`}}},argTypes:{value:{control:"text",description:"A unique value that associates the item with a value in the group.",defaultValue:"item"},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the item.",defaultValue:!1},variant:{control:"select",options:["default","outline"],description:"The visual style of the item.",defaultValue:"default"},size:{control:"select",options:["default","sm","lg"],description:"The size of the item.",defaultValue:"default"},className:{control:"text",description:"Additional CSS class names."}}},s={args:{value:"item"},render:r=>e.jsx(o,{type:"single",children:e.jsx(t,{...r,children:"Item"})}),parameters:{docs:{description:{story:"Default toggle group item with text content."}}}},a={args:{value:"item"},render:r=>e.jsx(o,{type:"single",children:e.jsx(t,{...r,children:e.jsx(n,{className:"h-4 w-4"})})}),parameters:{docs:{description:{story:"Toggle group item with an icon."}}}},i={args:{value:"item",disabled:!0},render:r=>e.jsx(o,{type:"single",children:e.jsx(t,{...r,children:"Disabled"})}),parameters:{docs:{description:{story:"Disabled toggle group item that cannot be interacted with."}}}},l={args:{value:"item",variant:"outline"},render:r=>e.jsx(o,{type:"single",variant:"outline",children:e.jsx(t,{...r,children:"Outline"})}),parameters:{docs:{description:{story:"Toggle group item with outline variant styling."}}}},g={args:{value:"item"},render:r=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{type:"single",size:"sm",children:e.jsx(t,{...r,value:"small",children:"Small"})}),e.jsx(o,{type:"single",size:"default",children:e.jsx(t,{...r,value:"default",children:"Default"})}),e.jsx(o,{type:"single",size:"lg",children:e.jsx(t,{...r,value:"large",children:"Large"})})]}),parameters:{docs:{description:{story:"Toggle group items in different sizes: small, default, and large."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'item'
  },
  render: args => {
    return <ToggleGroup type="single">
        <ToggleGroupItem {...args}>Item</ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default toggle group item with text content.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'item'
  },
  render: args => {
    return <ToggleGroup type="single">
        <ToggleGroupItem {...args}>
          <DollarSign className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle group item with an icon.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'item',
    disabled: true
  },
  render: args => {
    return <ToggleGroup type="single">
        <ToggleGroupItem {...args}>Disabled</ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled toggle group item that cannot be interacted with.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'item',
    variant: 'outline'
  },
  render: args => {
    return <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem {...args}>Outline</ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle group item with outline variant styling.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'item'
  },
  render: args => {
    return <div className="flex flex-col gap-4">
        <ToggleGroup type="single" size="sm">
          <ToggleGroupItem {...args} value="small">
            Small
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="single" size="default">
          <ToggleGroupItem {...args} value="default">
            Default
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="single" size="lg">
          <ToggleGroupItem {...args} value="large">
            Large
          </ToggleGroupItem>
        </ToggleGroup>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle group items in different sizes: small, default, and large.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const W=["Default","WithIcon","Disabled","Outline","Sizes"];export{s as Default,i as Disabled,l as Outline,g as Sizes,a as WithIcon,W as __namedExportsOrder,V as default};
