import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as i}from"./button-mvJUpYu0.js";import{P as s,a as n,b as a}from"./popover-C9jDZsSF.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-CROEQnJ0.js";const D={title:"UI/Popover",component:s,parameters:{layout:"centered",docs:{description:{component:`
A popover component for displaying content in a layer above the app, anchored to a trigger element.

This component is built on top of [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover).

### Component Parts
- [PopoverTrigger](?path=/story/ui-popover-popovertrigger--default): The element that opens the popover.
- [PopoverContent](?path=/story/ui-popover-popovercontent--default): The main content area of the popover.
- [PopoverAnchor](?path=/story/ui-popover-popoveranchor--default): An optional anchor element for advanced positioning.
        `}}},tags:["autodocs"],argTypes:{open:{description:"The controlled open state of the popover.",control:"boolean"},onOpenChange:{description:"Event handler called when the open state changes.",action:"onOpenChange"},defaultOpen:{description:"The open state of the popover when it is initially rendered.",control:"boolean"}}},r={render:d=>e.jsxs(s,{...d,children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Popover"})}),e.jsx(a,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"width",className:"text-sm",children:"Width"}),e.jsx("input",{id:"width",defaultValue:"100%",className:"col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"height",className:"text-sm",children:"Height"}),e.jsx("input",{id:"height",defaultValue:"25px",className:"col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm"})]})]})]})})]})},t={render:()=>e.jsxs(s,{children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Settings"})}),e.jsx(a,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your preferences."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-sm",children:"Name"}),e.jsx("input",{id:"name",defaultValue:"Project Name",className:"col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx("label",{htmlFor:"description",className:"text-sm",children:"Description"}),e.jsx("textarea",{id:"description",defaultValue:"Project description",className:"col-span-2 h-20 rounded-md border border-input bg-background px-3 py-1 text-sm"})]})]})]})})]})},o={render:()=>e.jsxs(s,{children:[e.jsx(n,{asChild:!0,children:e.jsx("div",{className:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground",children:e.jsx("span",{className:"text-lg",children:"?"})})}),e.jsx(a,{className:"w-80",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Help"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is a help popover with a custom trigger."})]})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width" className="text-sm">
                Width
              </label>
              <input id="width" defaultValue="100%" className="col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height" className="text-sm">
                Height
              </label>
              <input id="height" defaultValue="25px" className="col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-sm text-muted-foreground">Configure your preferences.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input id="name" defaultValue="Project Name" className="col-span-2 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <textarea id="description" defaultValue="Project description" className="col-span-2 h-20 rounded-md border border-input bg-background px-3 py-1 text-sm" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground">
          <span className="text-lg">?</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Help</h4>
          <p className="text-sm text-muted-foreground">
            This is a help popover with a custom trigger.
          </p>
        </div>
      </PopoverContent>
    </Popover>
}`,...o.parameters?.docs?.source}}};const W=["Default","WithForm","WithCustomTrigger"];export{r as Default,o as WithCustomTrigger,t as WithForm,W as __namedExportsOrder,D as default};
