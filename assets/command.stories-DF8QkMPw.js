import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{a as t,b as r,c as s,d,e,f as a,g as i,h as n}from"./command-Q4idtgBF.js";import{C as c}from"./calendar-DHsQt5EN.js";import{S as l,C as p}from"./smile-CLjazVYG.js";import{U as u}from"./user-Dj-M0DiX.js";import{C as h}from"./credit-card-2h5jh_dG.js";import{S as C}from"./settings-BIvxoAuM.js";import"./index-CozPAmCR.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./cn-BEHD0UYf.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const H={title:"UI/Command",component:t,parameters:{layout:"centered",docs:{description:{component:`
A fast, composable command menu component for building search and command interfaces.

This component is built on top of [cmdk](https://cmdk.paco.me/).

### Component Parts
- [CommandDialog](?path=/story/ui-command-commanddialog--default): A dialog wrapper for the command menu.
- [CommandInput](?path=/story/ui-command-commandinput--default): The input field for searching or entering commands.
- [CommandList](?path=/story/ui-command-commandlist--default): The container for command items and groups.
- [CommandEmpty](?path=/story/ui-command-commandempty--default): Shown when there are no results.
- [CommandGroup](?path=/story/ui-command-commandgroup--default): Groups related command items together.
- [CommandItem](?path=/story/ui-command-commanditem--default): An individual command or search result.
- [CommandSeparator](?path=/story/ui-command-commandseparator--default): A visual separator between groups or items.
- [CommandShortcut](?path=/story/ui-command-commandshortcut--default): Displays a keyboard shortcut for a command item.
        `}}},tags:["autodocs"],argTypes:{loop:{description:"When true, enables looping through the command menu items.",control:"boolean",defaultValue:!0},shouldFilter:{description:"When true, enables filtering of items based on the search query.",control:"boolean",defaultValue:!0},filter:{description:"Custom filter function to use instead of the default one."},value:{description:"The controlled value of the command menu.",control:"text"},onValueChange:{description:"Event handler called when the value changes.",action:"onValueChange"},defaultValue:{description:"The default value of the command menu.",control:"text"}}},o={render:()=>m.jsxs(t,{className:"rounded-lg border shadow-md",children:[m.jsx(r,{placeholder:"Type a command or search..."}),m.jsxs(s,{children:[m.jsx(d,{children:"No results found."}),m.jsxs(e,{heading:"Suggestions",children:[m.jsxs(a,{children:[m.jsx(c,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Calendar"})]}),m.jsxs(a,{children:[m.jsx(l,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Search Emoji"})]}),m.jsxs(a,{children:[m.jsx(p,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Calculator"})]})]}),m.jsx(i,{}),m.jsxs(e,{heading:"Settings",children:[m.jsxs(a,{children:[m.jsx(u,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Profile"}),m.jsx(n,{children:"⌘P"})]}),m.jsxs(a,{children:[m.jsx(h,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Billing"}),m.jsx(n,{children:"⌘B"})]}),m.jsxs(a,{children:[m.jsx(C,{className:"mr-2 h-4 w-4"}),m.jsx("span",{children:"Settings"}),m.jsx(n,{children:"⌘S"})]})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...o.parameters?.docs?.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,H as default};
