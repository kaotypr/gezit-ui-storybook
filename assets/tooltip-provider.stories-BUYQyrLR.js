import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{T as i,a as n,b as a,c as s}from"./tooltip-Bk_aNZjs.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BInWWs9D.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";const S={title:"UI/Tooltip/TooltipProvider",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The provider that manages tooltip state. Must be used at the root of your application.

This component is built on top of [Radix UI Tooltip Provider](https://www.radix-ui.com/primitives/docs/components/tooltip#provider).`}}},argTypes:{delayDuration:{control:"number",description:"The duration from when the mouse enters the trigger until the tooltip opens.",defaultValue:0},skipDelayDuration:{control:"number",description:"How long the tooltip should remain open after the mouse leaves the trigger.",defaultValue:0},disableHoverableContent:{control:"boolean",description:"When true, prevents the tooltip from remaining open when the mouse is moved to the tooltip content.",defaultValue:!1}}},e={args:{delayDuration:0,children:null},render:()=>o.jsx(i,{delayDuration:0,children:o.jsxs(n,{children:[o.jsx(a,{children:"Hover me"}),o.jsx(s,{children:o.jsx("p",{children:"This is a tooltip"})})]})}),parameters:{docs:{description:{story:"Default tooltip provider with no delay."}}}},r={args:{delayDuration:500,children:null},render:()=>o.jsx(i,{delayDuration:500,children:o.jsxs(n,{children:[o.jsx(a,{children:"Hover me (500ms delay)"}),o.jsx(s,{children:o.jsx("p",{children:"This tooltip has a 500ms delay"})})]})}),parameters:{docs:{description:{story:"Tooltip provider with a 500ms delay before showing tooltips."}}}},t={args:{delayDuration:500,skipDelayDuration:300,children:null},render:()=>o.jsx(i,{delayDuration:500,skipDelayDuration:300,children:o.jsxs(n,{children:[o.jsx(a,{children:"Hover me (with skip delay)"}),o.jsx(s,{children:o.jsx("p",{children:"This tooltip has a 500ms delay and 300ms skip delay"})})]})}),parameters:{docs:{description:{story:"Tooltip provider with both delay and skip delay durations."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 0,
    children: null
  },
  render: () => {
    return <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default tooltip provider with no delay.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 500,
    children: null
  },
  render: () => {
    return <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger>Hover me (500ms delay)</TooltipTrigger>
          <TooltipContent>
            <p>This tooltip has a 500ms delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip provider with a 500ms delay before showing tooltips.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    delayDuration: 500,
    skipDelayDuration: 300,
    children: null
  },
  render: () => {
    return <TooltipProvider delayDuration={500} skipDelayDuration={300}>
        <Tooltip>
          <TooltipTrigger>Hover me (with skip delay)</TooltipTrigger>
          <TooltipContent>
            <p>This tooltip has a 500ms delay and 300ms skip delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip provider with both delay and skip delay durations.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const W=["Default","WithDelay","WithSkipDelay"];export{e as Default,r as WithDelay,t as WithSkipDelay,W as __namedExportsOrder,S as default};
