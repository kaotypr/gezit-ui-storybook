import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as a,a as s,b as d,c as t,e as i,h as c}from"./command-CSgIugiD.js";import{C as l}from"./calendar-xykrT0N2.js";import{U as p}from"./user-BDdoPk9m.js";import{S as h}from"./settings-wunAwr--.js";import{C}from"./credit-card-BfyjEqoN.js";import"./index-DKCPvQI5.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./cn-BEHD0UYf.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const F={title:"UI/Command/CommandItem",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{description:"A unique value for the item.",control:"text"},disabled:{description:"When true, prevents the user from interacting with the item.",control:"boolean"},onSelect:{description:"Event handler called when the item is selected.",action:"onSelect"},asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},r={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Suggestions",children:e.jsxs(a,{children:[e.jsx(l,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Calendar"})]})})})]})},n={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Settings",children:e.jsxs(a,{children:[e.jsx(p,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Profile"}),e.jsx(c,{children:"⌘P"})]})})})]})},m={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Settings",children:e.jsxs(a,{disabled:!0,children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Disabled Item"})]})})})]})},o={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Settings",children:e.jsxs(a,{"data-selected":!0,children:[e.jsx(C,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Selected Item"})]})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Settings">
          <CommandItem disabled>
            <Settings className="mr-2 h-4 w-4" />
            <span>Disabled Item</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Settings">
          <CommandItem data-selected>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Selected Item</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...o.parameters?.docs?.source}}};const H=["Default","WithShortcut","Disabled","Selected"];export{r as Default,m as Disabled,o as Selected,n as WithShortcut,H as __namedExportsOrder,F as default};
