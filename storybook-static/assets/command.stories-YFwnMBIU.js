import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{a as t,b as r,c as s,d,e,f as a,g as i,h as n}from"./command-CSgIugiD.js";import{C as c}from"./calendar-xykrT0N2.js";import{S as l,C as p}from"./smile-jRF4GNds.js";import{U as u}from"./user-BDdoPk9m.js";import{C as h}from"./credit-card-BfyjEqoN.js";import{S as C}from"./settings-wunAwr--.js";import"./index-DKCPvQI5.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./cn-BEHD0UYf.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const H={title:"UI/Command",component:t,parameters:{layout:"centered",docs:{description:{component:`
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
