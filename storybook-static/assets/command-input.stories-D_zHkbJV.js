import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as d,a as t}from"./command-CSgIugiD.js";import"./index-DKCPvQI5.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./cn-BEHD0UYf.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const E={title:"UI/Command/CommandInput",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{description:"The controlled value of the command input.",control:"text"},onValueChange:{description:"Event handler called when the value changes.",action:"onValueChange"},defaultValue:{description:"The default value of the command input.",control:"text"},placeholder:{description:"Placeholder text for the input.",control:"text",defaultValue:"Type a command or search..."}}},r={render:()=>e.jsx(t,{className:"rounded-lg border shadow-md",children:e.jsx(d,{placeholder:"Type a command or search..."})})},o={render:()=>e.jsx(t,{className:"rounded-lg border shadow-md",children:e.jsx(d,{value:"Search query"})})},a={render:()=>e.jsx(t,{className:"rounded-lg border shadow-md",children:e.jsx(d,{disabled:!0,placeholder:"Disabled input..."})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
    </Command>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput value="Search query" />
    </Command>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md">
      <CommandInput disabled placeholder="Disabled input..." />
    </Command>
}`,...a.parameters?.docs?.source}}};const q=["Default","WithValue","Disabled"];export{r as Default,a as Disabled,o as WithValue,q as __namedExportsOrder,E as default};
