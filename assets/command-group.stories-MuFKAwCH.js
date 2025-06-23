import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{e as m,a as o,b as d,c as t,f as n,g as c}from"./command-Q4idtgBF.js";import{C as i}from"./calendar-DHsQt5EN.js";import{S as l,C as p}from"./smile-CLjazVYG.js";import{U as h}from"./user-Dj-M0DiX.js";import{C}from"./credit-card-2h5jh_dG.js";import{S as j}from"./settings-BIvxoAuM.js";import"./index-CozPAmCR.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./cn-BEHD0UYf.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const F={title:"UI/Command/CommandGroup",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{heading:{description:"Optional heading for the group.",control:"text"},asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},e={render:()=>a.jsxs(o,{className:"rounded-lg border shadow-md",children:[a.jsx(d,{placeholder:"Type a command or search..."}),a.jsx(t,{children:a.jsxs(m,{heading:"Suggestions",children:[a.jsxs(n,{children:[a.jsx(i,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(n,{children:[a.jsx(l,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]}),a.jsxs(n,{children:[a.jsx(p,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calculator"})]})]})})]})},s={render:()=>a.jsxs(o,{className:"rounded-lg border shadow-md",children:[a.jsx(d,{placeholder:"Type a command or search..."}),a.jsxs(t,{children:[a.jsxs(m,{heading:"Suggestions",children:[a.jsxs(n,{children:[a.jsx(i,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(n,{children:[a.jsx(l,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]})]}),a.jsx(c,{}),a.jsxs(m,{heading:"Settings",children:[a.jsxs(n,{children:[a.jsx(h,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Profile"})]}),a.jsxs(n,{children:[a.jsx(C,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Billing"})]}),a.jsxs(n,{children:[a.jsx(j,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Settings"})]})]})]})]})},r={render:()=>a.jsxs(o,{className:"rounded-lg border shadow-md",children:[a.jsx(d,{placeholder:"Type a command or search..."}),a.jsx(t,{children:a.jsxs(m,{children:[a.jsxs(n,{children:[a.jsx(i,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Calendar"})]}),a.jsxs(n,{children:[a.jsx(l,{className:"mr-2 h-4 w-4"}),a.jsx("span",{children:"Search Emoji"})]})]})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
