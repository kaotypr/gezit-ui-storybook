import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{e as m,a as o,b as d,c as t,f as n,g as c}from"./command-CSgIugiD.js";import{C as i}from"./calendar-xykrT0N2.js";import{S as l,C as p}from"./smile-jRF4GNds.js";import{U as h}from"./user-BDdoPk9m.js";import{C}from"./credit-card-BfyjEqoN.js";import{S as j}from"./settings-wunAwr--.js";import"./index-DKCPvQI5.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./cn-BEHD0UYf.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const F={title:"UI/Command/CommandGroup",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{heading:{description:"Optional heading for the group.",control:"text"},asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},e={render:()=>a.jsxs(o,{className:"rounded-lg border shadow-md",children:[a.jsx(d,{placeholder:"Type a command or search..."}),a.jsx(t,{children:a.jsxs(m,{heading:"Suggestions",children:[a.jsxs(n,{children:[a.jsx(i,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(n,{children:[a.jsx(l,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]}),a.jsxs(n,{children:[a.jsx(p,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calculator"})]})]})})]})},s={render:()=>a.jsxs(o,{className:"rounded-lg border shadow-md",children:[a.jsx(d,{placeholder:"Type a command or search..."}),a.jsxs(t,{children:[a.jsxs(m,{heading:"Suggestions",children:[a.jsxs(n,{children:[a.jsx(i,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(n,{children:[a.jsx(l,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]})]}),a.jsx(c,{}),a.jsxs(m,{heading:"Settings",children:[a.jsxs(n,{children:[a.jsx(h,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Profile"})]}),a.jsxs(n,{children:[a.jsx(C,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Billing"})]}),a.jsxs(n,{children:[a.jsx(j,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Settings"})]})]})]})]})},r={render:()=>a.jsxs(o,{className:"rounded-lg border shadow-md",children:[a.jsx(d,{placeholder:"Type a command or search..."}),a.jsx(t,{children:a.jsxs(m,{children:[a.jsxs(n,{children:[a.jsx(i,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(n,{children:[a.jsx(l,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]})]})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandGroup>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...r.parameters?.docs?.source}}};const J=["Default","MultipleGroups","WithoutHeading"];export{e as Default,s as MultipleGroups,r as WithoutHeading,J as __namedExportsOrder,F as default};
