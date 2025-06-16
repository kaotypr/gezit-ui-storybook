import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-DVhd8Mv9.js";import{b as n,a as s,c as p}from"./tooltip-m29XrHOm.js";import{I as l}from"./info-m2w_d1nh.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-CROEQnJ0.js";import"./index-jor98p9X.js";import"./createLucideIcon-CAcKuqHj.js";const _={title:"UI/Tooltip/TooltipTrigger",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The element that triggers the tooltip. Must be used within a Tooltip component.

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
