import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BgCQ941z.js";import{a as o,b as a,c as l}from"./tooltip-Bk_aNZjs.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BInWWs9D.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";const k={title:"UI/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

This component is built on top of [Radix UI Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip).

### Component Parts
- [TooltipTrigger](?path=/story/ui-tooltip-tooltiptrigger--default): The element that triggers the tooltip.
- [TooltipContent](?path=/story/ui-tooltip-tooltipcontent--default): The content of the tooltip.
- [TooltipProvider](?path=/story/ui-tooltip-tooltipprovider--default): The provider that manages tooltip state.`}}},argTypes:{defaultOpen:{control:"boolean",description:"The open state of the tooltip when it is initially rendered.",defaultValue:!1},open:{control:"boolean",description:"The controlled open state of the tooltip. Must be used in conjunction with onOpenChange."},onOpenChange:{description:"Event handler called when the open state of the tooltip changes."},delayDuration:{control:"number",description:"The duration from when the mouse enters the trigger until the tooltip opens.",defaultValue:0},disableHoverableContent:{control:"boolean",description:"When true, prevents the tooltip from remaining open when the mouse is moved to the tooltip content.",defaultValue:!1}}},r={args:{delayDuration:0},render:t=>e.jsxs(o,{...t,children:[e.jsx(a,{children:"Hover me"}),e.jsx(l,{children:e.jsx("p",{children:"This is a tooltip"})})]}),parameters:{docs:{description:{story:"Default tooltip with text content."}}}},n={args:{delayDuration:500},render:t=>e.jsxs(o,{...t,children:[e.jsx(a,{children:"Hover me (500ms delay)"}),e.jsx(l,{children:e.jsx("p",{children:"This tooltip has a 500ms delay"})})]}),parameters:{docs:{description:{story:"Tooltip with a 500ms delay before showing."}}}},i={args:{delayDuration:0},render:t=>e.jsxs(o,{...t,children:[e.jsx(a,{children:"Hover me"}),e.jsx(l,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"font-semibold",children:"Rich Content"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"This tooltip contains multiple elements"})]})})]}),parameters:{docs:{description:{story:"Tooltip with rich content including multiple elements and styling."}}}},s={args:{delayDuration:0},render:t=>{const[p,c]=d.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs(o,{...t,open:p,onOpenChange:c,children:[e.jsx(a,{children:"Click to toggle"}),e.jsx(l,{children:e.jsx("p",{children:"This tooltip is controlled"})})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Tooltip is ",p?"open":"closed"]})]})},parameters:{docs:{description:{story:"Controlled tooltip with state management."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 0
  },
  render: args => {
    return <Tooltip {...args}>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default tooltip with text content.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 500
  },
  render: args => {
    return <Tooltip {...args}>
        <TooltipTrigger>Hover me (500ms delay)</TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a 500ms delay</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with a 500ms delay before showing.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 0
  },
  render: args => {
    return <Tooltip {...args}>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Rich Content</p>
            <p className="text-xs text-muted-foreground">This tooltip contains multiple elements</p>
          </div>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with rich content including multiple elements and styling.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 0
  },
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <div className="flex flex-col items-center gap-4">
        <Tooltip {...args} open={open} onOpenChange={setOpen}>
          <TooltipTrigger>Click to toggle</TooltipTrigger>
          <TooltipContent>
            <p>This tooltip is controlled</p>
          </TooltipContent>
        </Tooltip>
        <p className="text-sm text-muted-foreground">Tooltip is {open ? 'open' : 'closed'}</p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled tooltip with state management.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const V=["Default","WithDelay","WithRichContent","Controlled"];export{s as Controlled,r as Default,n as WithDelay,i as WithRichContent,V as __namedExportsOrder,k as default};
