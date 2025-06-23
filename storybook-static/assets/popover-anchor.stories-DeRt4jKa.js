import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-mvJUpYu0.js";import{c as r,P as s,a as p,b as l}from"./popover-C9jDZsSF.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-CROEQnJ0.js";const E={title:"UI/Popover/PopoverAnchor",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},o={render:()=>e.jsx("div",{className:"relative h-[200px] w-[300px] border border-dashed p-4",children:e.jsxs(s,{children:[e.jsx(r,{children:e.jsx("div",{className:"absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"})}),e.jsx(p,{asChild:!0,children:e.jsx(n,{variant:"outline",className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:"Open Popover"})}),e.jsx(l,{children:e.jsx("p",{children:"This popover is anchored to the dot"})})]})})},t={render:()=>e.jsx("div",{className:"relative h-[200px] w-[300px] border border-dashed p-4",children:e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx("div",{className:"absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"})}),e.jsx(p,{asChild:!0,children:e.jsx(n,{variant:"outline",className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:"Open Popover"})}),e.jsx(l,{children:e.jsx("p",{children:"This popover is anchored to the custom element"})})]})})},a={render:()=>e.jsx("div",{className:"relative h-[200px] w-[300px] border border-dashed p-4",children:e.jsxs(s,{children:[e.jsx(r,{children:e.jsx("div",{className:"absolute left-1/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"})}),e.jsx(r,{children:e.jsx("div",{className:"absolute right-1/4 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"})}),e.jsx(p,{asChild:!0,children:e.jsx(n,{variant:"outline",className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:"Open Popover"})}),e.jsx(l,{children:e.jsx("p",{children:"This popover is anchored to multiple points"})})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-[200px] w-[300px] border border-dashed p-4">
      <Popover>
        <PopoverAnchor>
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </PopoverAnchor>
        <PopoverTrigger asChild>
          <Button variant="outline" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>This popover is anchored to the dot</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-[200px] w-[300px] border border-dashed p-4">
      <Popover>
        <PopoverAnchor asChild>
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20" />
        </PopoverAnchor>
        <PopoverTrigger asChild>
          <Button variant="outline" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>This popover is anchored to the custom element</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-[200px] w-[300px] border border-dashed p-4">
      <Popover>
        <PopoverAnchor>
          <div className="absolute left-1/4 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </PopoverAnchor>
        <PopoverAnchor>
          <div className="absolute right-1/4 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </PopoverAnchor>
        <PopoverTrigger asChild>
          <Button variant="outline" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>This popover is anchored to multiple points</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...a.parameters?.docs?.source}}};const M=["Default","WithCustomAnchor","WithMultipleAnchors"];export{o as Default,t as WithCustomAnchor,a as WithMultipleAnchors,M as __namedExportsOrder,E as default};
