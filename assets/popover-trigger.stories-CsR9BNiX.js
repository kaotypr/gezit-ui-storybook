import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as p}from"./button-mvJUpYu0.js";import{a as t,P as n,b as i}from"./popover-C9jDZsSF.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-CROEQnJ0.js";const H={title:"UI/Popover/PopoverTrigger",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},e={render:()=>r.jsxs(n,{children:[r.jsx(t,{asChild:!0,children:r.jsx(p,{variant:"outline",children:"Click me"})}),r.jsx(i,{children:r.jsx("p",{children:"Popover content"})})]})},o={render:()=>r.jsxs(n,{children:[r.jsx(t,{asChild:!0,children:r.jsx("div",{className:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground",children:r.jsx("span",{className:"text-lg",children:"?"})})}),r.jsx(i,{children:r.jsx("p",{children:"Help content"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground">
          <span className="text-lg">?</span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <p>Help content</p>
      </PopoverContent>
    </Popover>
}`,...o.parameters?.docs?.source}}};const S=["Default","WithCustomElement"];export{e as Default,o as WithCustomElement,S as __namedExportsOrder,H as default};
