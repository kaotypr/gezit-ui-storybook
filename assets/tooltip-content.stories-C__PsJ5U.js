import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{c as o,a,b as l}from"./tooltip-m29XrHOm.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-CROEQnJ0.js";import"./index-jor98p9X.js";import"./cn-BEHD0UYf.js";const S={title:"UI/Tooltip/TooltipContent",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The content of the tooltip. Must be used within a Tooltip component.

This component is built on top of [Radix UI Tooltip Content](https://www.radix-ui.com/primitives/docs/components/tooltip#content).`}}},argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"The preferred side to render the tooltip.",defaultValue:"top"},sideOffset:{control:"number",description:"The distance in pixels from the trigger.",defaultValue:0},align:{control:"select",options:["start","center","end"],description:"The preferred alignment against the trigger.",defaultValue:"center"},alignOffset:{control:"number",description:"An offset in pixels from the start and end alignment edges.",defaultValue:0},avoidCollisions:{control:"boolean",description:"When true, overrides the side and align preferences to prevent the tooltip from overflowing.",defaultValue:!0},collisionBoundary:{description:"The element or elements that the tooltip should avoid overlapping."},collisionPadding:{control:"number",description:"The distance in pixels from the boundary edges where collision detection should occur.",defaultValue:0},arrowPadding:{control:"number",description:"The padding between the arrow and the edges of the tooltip.",defaultValue:0},sticky:{control:"select",options:["partial","always"],description:"The sticky behavior on the align axis.",defaultValue:"partial"},hideWhenDetached:{control:"boolean",description:"Whether to hide the tooltip when the trigger is partially occluded.",defaultValue:!1},updatePositionStrategy:{control:"select",options:["optimized","always"],description:"The strategy used to position the tooltip.",defaultValue:"optimized"},forceMount:{control:"boolean",description:"Whether to force the tooltip to be mounted.",defaultValue:!1},className:{control:"text",description:"Additional CSS class names."}}},r={args:{side:"top",sideOffset:0},render:e=>t.jsxs(a,{children:[t.jsx(l,{children:"Hover me"}),t.jsx(o,{...e,children:t.jsx("p",{children:"This is a tooltip"})})]}),parameters:{docs:{description:{story:"Default tooltip content with text."}}}},i={args:{side:"top",sideOffset:10},render:e=>t.jsxs(a,{children:[t.jsx(l,{children:"Hover me"}),t.jsx(o,{...e,children:t.jsx("p",{children:"This tooltip has a 10px offset"})})]}),parameters:{docs:{description:{story:"Tooltip content with a 10px offset from the trigger."}}}},n={args:{side:"right",align:"start"},render:e=>t.jsxs(a,{children:[t.jsx(l,{children:"Hover me"}),t.jsx(o,{...e,children:t.jsx("p",{children:"This tooltip is aligned to the start"})})]}),parameters:{docs:{description:{story:"Tooltip content aligned to the start of the trigger."}}}},s={args:{side:"top"},render:e=>t.jsxs(a,{children:[t.jsx(l,{children:"Hover me"}),t.jsx(o,{...e,children:t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsx("p",{className:"font-semibold",children:"Rich Content"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"This tooltip contains multiple elements"})]})})]}),parameters:{docs:{description:{story:"Tooltip content with rich content including multiple elements and styling."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    sideOffset: 0
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent {...args}>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default tooltip content with text.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    sideOffset: 10
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent {...args}>
          <p>This tooltip has a 10px offset</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip content with a 10px offset from the trigger.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'right',
    align: 'start'
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent {...args}>
          <p>This tooltip is aligned to the start</p>
        </TooltipContent>
      </Tooltip>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip content aligned to the start of the trigger.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top'
  },
  render: args => {
    return <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent {...args}>
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
        story: 'Tooltip content with rich content including multiple elements and styling.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","WithOffset","WithAlignment","WithRichContent"];export{r as Default,n as WithAlignment,i as WithOffset,s as WithRichContent,R as __namedExportsOrder,S as default};
