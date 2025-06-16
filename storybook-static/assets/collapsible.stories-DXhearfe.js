import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as c}from"./button-DVhd8Mv9.js";import{a as s,b as a,C as n}from"./collapsible-CawhcNzK.js";import{C as p}from"./chevron-down-BesqFj4W.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./createLucideIcon-CAcKuqHj.js";const z={title:"UI/Collapsible",component:s,parameters:{layout:"centered",docs:{description:{component:`
A component that can show and hide content with a toggle.

This component is built on top of [Radix UI Collapsible](https://www.radix-ui.com/primitives/docs/components/collapsible).

### Component Parts
- [CollapsibleTrigger](?path=/story/ui-collapsible-collapsibletrigger--default): The button or element that toggles the collapsible content.
- [CollapsibleContent](?path=/story/ui-collapsible-collapsiblecontent--default): The content area that is shown or hidden when toggled.
        `}}},tags:["autodocs"],argTypes:{open:{description:"The controlled open state of the collapsible.",control:"boolean"},onOpenChange:{description:"Event handler called when the open state changes.",action:"onOpenChange"},defaultOpen:{description:"The open state of the collapsible when it is initially rendered.",control:"boolean"},disabled:{description:"When true, prevents the user from interacting with the collapsible.",control:"boolean"},asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}}},t={render:l=>e.jsxs(s,{...l,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(a,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/primitives"}),e.jsxs(n,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-3 font-mono text-sm",children:"@stitches/react"})]})]})},r={render:l=>e.jsxs(s,{...l,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Featured Items"}),e.jsx(a,{asChild:!0,children:e.jsx(c,{variant:"outline",size:"sm",children:"Show More"})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3",children:"First Item"}),e.jsxs(n,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3",children:"Second Item"}),e.jsx("div",{className:"rounded-md border px-4 py-3",children:"Third Item"})]})]})},o={render:l=>e.jsxs(s,{...l,disabled:!0,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Disabled Section"}),e.jsx(a,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-3",children:"This content cannot be expanded"}),e.jsx(n,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border px-4 py-3",children:"Hidden content"})})]})},i={render:()=>e.jsxs(s,{className:"w-[350px] space-y-2",children:[e.jsxs(a,{className:"flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm font-medium",children:[e.jsx("span",{children:"Animated content"}),e.jsx("span",{className:"text-muted-foreground",children:"▼"})]}),e.jsxs(n,{className:"space-y-2 transition-all duration-300 ease-in-out",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"This content will animate when expanding/collapsing"}),e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"The animation is handled by Radix UI"})]})]})},d={render:()=>e.jsxs(s,{className:"w-[350px] space-y-2",children:[e.jsxs(a,{className:"flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm font-medium",children:[e.jsx("span",{children:"Parent Collapsible"}),e.jsx("span",{className:"text-muted-foreground",children:"▼"})]}),e.jsxs(n,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"Parent content"}),e.jsxs(s,{className:"space-y-2",children:[e.jsxs(a,{className:"flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm font-medium",children:[e.jsx("span",{children:"Child Collapsible"}),e.jsx("span",{className:"text-muted-foreground",children:"▼"})]}),e.jsx(n,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"Child content"})})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Featured Items</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            Show More
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3">First Item</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">Second Item</div>
        <div className="rounded-md border px-4 py-3">Third Item</div>
      </CollapsibleContent>
    </Collapsible>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Collapsible {...args} disabled className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Disabled Section</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3">This content cannot be expanded</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">Hidden content</div>
      </CollapsibleContent>
    </Collapsible>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm font-medium">
        <span>Animated content</span>
        <span className="text-muted-foreground">▼</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 transition-all duration-300 ease-in-out">
        <div className="rounded-md border px-4 py-2 text-sm">
          This content will animate when expanding/collapsing
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          The animation is handled by Radix UI
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm font-medium">
        <span>Parent Collapsible</span>
        <span className="text-muted-foreground">▼</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">Parent content</div>
        <Collapsible className="space-y-2">
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm font-medium">
            <span>Child Collapsible</span>
            <span className="text-muted-foreground">▼</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 text-sm">Child content</div>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
}`,...d.parameters?.docs?.source}}};const A=["Default","WithCustomTrigger","Disabled","WithAnimation","NestedCollapsible"];export{t as Default,o as Disabled,d as NestedCollapsible,i as WithAnimation,r as WithCustomTrigger,A as __namedExportsOrder,z as default};
