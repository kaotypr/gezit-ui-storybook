import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as d,a as t}from"./command-Q4idtgBF.js";import"./index-CozPAmCR.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./cn-BEHD0UYf.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const E={title:"UI/Command/CommandInput",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{description:"The controlled value of the command input.",control:"text"},onValueChange:{description:"Event handler called when the value changes.",action:"onValueChange"},defaultValue:{description:"The default value of the command input.",control:"text"},placeholder:{description:"Placeholder text for the input.",control:"text",defaultValue:"Type a command or search..."}}},r={render:()=>e.jsx(t,{className:"rounded-lg border shadow-md",children:e.jsx(d,{placeholder:"Type a command or search..."})})},o={render:()=>e.jsx(t,{className:"rounded-lg border shadow-md",children:e.jsx(d,{value:"Search query"})})},a={render:()=>e.jsx(t,{className:"rounded-lg border shadow-md",children:e.jsx(d,{disabled:!0,placeholder:"Disabled input..."})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
