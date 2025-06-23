import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{b as n,a as s,c as p}from"./tooltip-Bk_aNZjs.js";import{I as l}from"./info-5noSa7O7.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BInWWs9D.js";import"./index-Bxcmxnpx.js";import"./createLucideIcon-BROHhCyT.js";const _={title:"UI/Tooltip/TooltipTrigger",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The element that triggers the tooltip. Must be used within a Tooltip component.

This component is built on top of [Radix UI Tooltip Trigger](https://www.radix-ui.com/primitives/docs/components/tooltip#trigger).`}}},argTypes:{asChild:{control:"boolean",description:"Whether to render as a child element instead of a button.",defaultValue:!1}}},r={args:{asChild:!1},render:o=>t.jsxs(s,{children:[t.jsx(n,{...o,children:"Hover me"}),t.jsx(p,{children:t.jsx("p",{children:"This is a tooltip"})})]}),parameters:{docs:{description:{story:"Default tooltip trigger with text content."}}}},e={args:{asChild:!0},render:o=>t.jsxs(s,{children:[t.jsx(n,{...o,children:t.jsx(a,{children:"Hover me"})}),t.jsx(p,{children:t.jsx("p",{children:"This tooltip is triggered by a button"})})]}),parameters:{docs:{description:{story:"Tooltip trigger using a Button component."}}}},i={args:{asChild:!0},render:o=>t.jsxs(s,{children:[t.jsx(n,{...o,children:t.jsx(l,{className:"h-4 w-4"})}),t.jsx(p,{children:t.jsx("p",{children:"This tooltip is triggered by an icon"})})]}),parameters:{docs:{description:{story:"Tooltip trigger using an icon."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: false
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger {...args}>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default tooltip trigger with text content.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger {...args}>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip is triggered by a button</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip trigger using a Button component.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger {...args}>
          <Info className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip is triggered by an icon</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip trigger using an icon.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const M=["Default","WithButton","WithIcon"];export{r as Default,e as WithButton,i as WithIcon,M as __namedExportsOrder,_ as default};
