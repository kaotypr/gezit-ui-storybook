import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as a,a as s,b as d,c as t,e as i,h as c}from"./command-Q4idtgBF.js";import{C as l}from"./calendar-DHsQt5EN.js";import{U as p}from"./user-Dj-M0DiX.js";import{S as h}from"./settings-BIvxoAuM.js";import{C}from"./credit-card-2h5jh_dG.js";import"./index-CozPAmCR.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./cn-BEHD0UYf.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const F={title:"UI/Command/CommandItem",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{description:"A unique value for the item.",control:"text"},disabled:{description:"When true, prevents the user from interacting with the item.",control:"boolean"},onSelect:{description:"Event handler called when the item is selected.",action:"onSelect"},asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},r={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Suggestions",children:e.jsxs(a,{children:[e.jsx(l,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Calendar"})]})})})]})},n={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Settings",children:e.jsxs(a,{children:[e.jsx(p,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Profile"}),e.jsx(c,{children:"⌘P"})]})})})]})},m={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Settings",children:e.jsxs(a,{disabled:!0,children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Disabled Item"})]})})})]})},o={render:()=>e.jsxs(s,{className:"rounded-lg border shadow-md",children:[e.jsx(d,{placeholder:"Type a command or search..."}),e.jsx(t,{children:e.jsx(i,{heading:"Settings",children:e.jsxs(a,{"data-selected":!0,children:[e.jsx(C,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Selected Item"})]})})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
