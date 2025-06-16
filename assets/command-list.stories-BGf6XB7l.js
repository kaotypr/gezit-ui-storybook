import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{c as o,a as d,b as t,d as p,e as s,f as a}from"./command-CSgIugiD.js";import{C as c}from"./calendar-xykrT0N2.js";import{S as l,C as i}from"./smile-jRF4GNds.js";import"./index-DKCPvQI5.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./cn-BEHD0UYf.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const v={title:"UI/Command/CommandList",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},e={render:()=>m.jsxs(d,{className:"rounded-lg border shadow-md",children:[m.jsx(t,{placeholder:"Type a command or search..."}),m.jsxs(o,{children:[m.jsx(p,{children:"No results found."}),m.jsxs(s,{heading:"Suggestions",children:[m.jsxs(a,{children:[m.jsx(c,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Calendar"})]}),m.jsxs(a,{children:[m.jsx(l,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Search Emoji"})]}),m.jsxs(a,{children:[m.jsx(i,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Calculator"})]})]})]})]})},n={render:()=>m.jsxs(d,{className:"rounded-lg border shadow-md",children:[m.jsx(t,{placeholder:"Type a command or search..."}),m.jsx(o,{children:m.jsx(p,{children:"No results found."})})]})},r={render:()=>m.jsxs(d,{className:"rounded-lg border shadow-md",children:[m.jsx(t,{placeholder:"Type a command or search..."}),m.jsxs(o,{children:[m.jsxs(s,{heading:"Fruits",children:[m.jsx(a,{children:"Apple"}),m.jsx(a,{children:"Banana"}),m.jsx(a,{children:"Orange"})]}),m.jsxs(s,{heading:"Vegetables",children:[m.jsx(a,{children:"Carrot"}),m.jsx(a,{children:"Broccoli"}),m.jsx(a,{children:"Spinach"})]})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
      </CommandList>
    </Command>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Fruits">
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
          <CommandItem>Orange</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Vegetables">
          <CommandItem>Carrot</CommandItem>
          <CommandItem>Broccoli</CommandItem>
          <CommandItem>Spinach</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...r.parameters?.docs?.source}}};const R=["Default","Empty","WithMultipleGroups"];export{e as Default,n as Empty,r as WithMultipleGroups,R as __namedExportsOrder,v as default};
