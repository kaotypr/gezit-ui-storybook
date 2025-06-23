import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{c as o,a as d,b as t,d as p,e as s,f as a}from"./command-Q4idtgBF.js";import{C as c}from"./calendar-DHsQt5EN.js";import{S as l,C as i}from"./smile-CLjazVYG.js";import"./index-CozPAmCR.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./cn-BEHD0UYf.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const v={title:"UI/Command/CommandList",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},e={render:()=>m.jsxs(d,{className:"rounded-lg border shadow-md",children:[m.jsx(t,{placeholder:"Type a command or search..."}),m.jsxs(o,{children:[m.jsx(p,{children:"No results found."}),m.jsxs(s,{heading:"Suggestions",children:[m.jsxs(a,{children:[m.jsx(c,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Calendar"})]}),m.jsxs(a,{children:[m.jsx(l,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Search Emoji"})]}),m.jsxs(a,{children:[m.jsx(i,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Calculator"})]})]})]})]})},n={render:()=>m.jsxs(d,{className:"rounded-lg border shadow-md",children:[m.jsx(t,{placeholder:"Type a command or search..."}),m.jsx(o,{children:m.jsx(p,{children:"No results found."})})]})},r={render:()=>m.jsxs(d,{className:"rounded-lg border shadow-md",children:[m.jsx(t,{placeholder:"Type a command or search..."}),m.jsxs(o,{children:[m.jsxs(s,{heading:"Fruits",children:[m.jsx(a,{children:"Apple"}),m.jsx(a,{children:"Banana"}),m.jsx(a,{children:"Orange"})]}),m.jsxs(s,{heading:"Vegetables",children:[m.jsx(a,{children:"Carrot"}),m.jsx(a,{children:"Broccoli"}),m.jsx(a,{children:"Spinach"})]})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
