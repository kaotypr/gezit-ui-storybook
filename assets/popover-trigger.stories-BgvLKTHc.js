import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as p}from"./button-B_EVNb5l.js";import{a as t,P as n,b as i}from"./popover-D_O2QJOe.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BInWWs9D.js";const H={title:"UI/Popover/PopoverTrigger",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},e={render:()=>r.jsxs(n,{children:[r.jsx(t,{asChild:!0,children:r.jsx(p,{variant:"outline",children:"Click me"})}),r.jsx(i,{children:r.jsx("p",{children:"Popover content"})})]})},o={render:()=>r.jsxs(n,{children:[r.jsx(t,{asChild:!0,children:r.jsx("div",{className:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground",children:r.jsx("span",{className:"text-lg",children:"?"})})}),r.jsx(i,{children:r.jsx("p",{children:"Help content"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
