import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-CP2yOfOm.js";import{a as r,T as o}from"./toggle-group-Bx5I3fPO.js";import{c as u}from"./createLucideIcon-CAcKuqHj.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-lA-nzH4g.js";import"./index-Dc_FVRD7.js";import"./index-BEIweEOh.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D-X1RFvQ.js";import"./index-CROEQnJ0.js";import"./index-BBCYznAR.js";import"./toggle-DlbVR5fU.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],m=u("bold",c);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],x=u("italic",h);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],v=u("underline",T),R={title:"UI/ToggleGroup",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A set of two-state buttons that can be toggled on or off.

This component is built on top of [Radix UI Toggle Group](https://www.radix-ui.com/primitives/docs/components/toggle-group).

### Component Parts
- [ToggleGroupItem](?path=/story/ui-togglegroup-togglegroupitem--default): The individual toggle button within the group.`}}},argTypes:{type:{control:"select",options:["single","multiple"],description:"The type of toggle group. 'single' allows only one item to be pressed at a time, while 'multiple' allows multiple items to be pressed.",defaultValue:"single"},value:{control:"text",description:"The controlled value of the toggle group. Must be used in conjunction with onValueChange."},defaultValue:{control:"text",description:"The value of the toggle group when initially rendered. Use when you do not need to control its state."},onValueChange:{description:"Event handler called when the value of the toggle group changes."},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the toggle group.",defaultValue:!1},variant:{control:"select",options:["default","outline"],description:"The visual style of the toggle group.",defaultValue:"default"},size:{control:"select",options:["default","sm","lg"],description:"The size of the toggle group.",defaultValue:"default"},className:{control:"text",description:"Additional CSS class names."}}},t={args:{type:"single"},render:l=>e.jsxs(r,{className:"w-[300px]",...l,children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]}),parameters:{docs:{description:{story:"Default toggle group with text content."}}}},s={args:{type:"single"},render:l=>e.jsxs(r,{...l,children:[e.jsx(o,{value:"bold",children:e.jsx(m,{className:"h-4 w-4"})}),e.jsx(o,{value:"italic",children:e.jsx(x,{className:"h-4 w-4"})}),e.jsx(o,{value:"underline",children:e.jsx(v,{className:"h-4 w-4"})})]}),parameters:{docs:{description:{story:"Toggle group with icon-only buttons."}}}},a={args:{type:"multiple"},render:l=>e.jsxs(r,{className:"w-[300px]",...l,children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]}),parameters:{docs:{description:{story:"Toggle group that allows multiple items to be selected at once."}}}},i={args:{type:"single",variant:"outline"},render:l=>e.jsxs(r,{className:"w-[300px]",...l,children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]}),parameters:{docs:{description:{story:"Toggle group with outline variant styling."}}}},n={args:{type:"single"},render:l=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{className:"w-[300px]",...l,size:"sm",children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]}),e.jsxs(r,{className:"w-[300px]",...l,size:"default",children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]}),e.jsxs(r,{className:"w-[300px]",...l,size:"lg",children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]})]}),parameters:{docs:{description:{story:"Toggle groups in different sizes: small, default, and large."}}}},g={args:{type:"single"},render:()=>{const[l,p]=d.useState(void 0);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs(r,{type:"single",className:"w-[300px]",value:l,onValueChange:p,children:[e.jsx(o,{value:"bold",children:"Bold"}),e.jsx(o,{value:"italic",children:"Italic"}),e.jsx(o,{value:"underline",children:"Underline"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected: ",l||"none"]})]})},parameters:{docs:{description:{story:"Controlled toggle group with state management."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single'
  },
  render: args => {
    return <ToggleGroup className="w-[300px]" {...args}>
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default toggle group with text content.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single'
  },
  render: args => {
    return <ToggleGroup {...args}>
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle group with icon-only buttons.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: args => {
    return <ToggleGroup className="w-[300px]" {...args}>
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle group that allows multiple items to be selected at once.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'outline'
  },
  render: args => {
    return <ToggleGroup className="w-[300px]" {...args}>
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle group with outline variant styling.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single'
  },
  render: args => {
    return <div className="flex flex-col gap-4">
        <ToggleGroup className="w-[300px]" {...args} size="sm">
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup className="w-[300px]" {...args} size="default">
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup className="w-[300px]" {...args} size="lg">
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle groups in different sizes: small, default, and large.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single' as const
  },
  render: () => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    return <div className="flex flex-col items-center gap-4">
        <ToggleGroup type="single" className="w-[300px]" value={value} onValueChange={setValue}>
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">Selected: {value || 'none'}</p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled toggle group with state management.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const W=["Default","WithIcons","Multiple","Outline","Sizes","Controlled"];export{g as Controlled,t as Default,a as Multiple,i as Outline,n as Sizes,s as WithIcons,W as __namedExportsOrder,R as default};
