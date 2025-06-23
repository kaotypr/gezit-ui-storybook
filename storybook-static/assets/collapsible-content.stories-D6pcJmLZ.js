import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as t}from"./button-mvJUpYu0.js";import{C as l,a as i,b as o}from"./collapsible-CawhcNzK.js";import{C as r}from"./chevron-down-BesqFj4W.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./createLucideIcon-CAcKuqHj.js";const D={title:"UI/Collapsible/CollapsibleContent",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{forceMount:{description:"Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",control:"boolean"},asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},s={render:()=>e.jsxs(i,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Default Content"}),e.jsx(o,{asChild:!0,children:e.jsxs(t,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(r,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx(l,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border px-4 py-3",children:"This is the default collapsible content"})})]})},a={render:()=>e.jsxs(i,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Multiple Items"}),e.jsx(o,{asChild:!0,children:e.jsxs(t,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(r,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsxs(l,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-3",children:"First item"}),e.jsx("div",{className:"rounded-md border px-4 py-3",children:"Second item"}),e.jsx("div",{className:"rounded-md border px-4 py-3",children:"Third item"})]})]})},n={render:()=>e.jsxs(i,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Animated Content"}),e.jsx(o,{asChild:!0,children:e.jsxs(t,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(r,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx(l,{className:"space-y-2 transition-all duration-300 ease-in-out",children:e.jsx("div",{className:"rounded-md border px-4 py-3",children:"This content has custom animation"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Default Content</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">This is the default collapsible content</div>
      </CollapsibleContent>
    </Collapsible>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Multiple Items</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">First item</div>
        <div className="rounded-md border px-4 py-3">Second item</div>
        <div className="rounded-md border px-4 py-3">Third item</div>
      </CollapsibleContent>
    </Collapsible>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Animated Content</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 transition-all duration-300 ease-in-out">
        <div className="rounded-md border px-4 py-3">This content has custom animation</div>
      </CollapsibleContent>
    </Collapsible>
}`,...n.parameters?.docs?.source}}};const z=["Default","WithMultipleItems","WithCustomAnimation"];export{s as Default,n as WithCustomAnimation,a as WithMultipleItems,z as __namedExportsOrder,D as default};
