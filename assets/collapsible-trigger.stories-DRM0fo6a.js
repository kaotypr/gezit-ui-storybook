import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as l}from"./button-B_EVNb5l.js";import{b as t,a as r,C as i}from"./collapsible-DO8pxqZN.js";import{C as o}from"./chevron-down-DX_dkZyb.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-RJnmdD4_.js";import"./index-BfBstFV9.js";import"./createLucideIcon-BROHhCyT.js";const B={title:"UI/Collapsible/CollapsibleTrigger",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},disabled:{description:"When true, prevents the user from interacting with the trigger.",control:"boolean"}}},s={render:()=>e.jsxs(r,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Click to expand"}),e.jsx(t,{asChild:!0,children:e.jsxs(l,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(o,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx(i,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border px-4 py-3",children:"This is the expanded content"})})]})},a={render:()=>e.jsxs(r,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Custom Trigger"}),e.jsx(t,{asChild:!0,children:e.jsx(l,{variant:"outline",size:"sm",children:"Show Details"})})]}),e.jsx(i,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border px-4 py-3",children:"This content is shown when the custom button is clicked"})})]})},n={render:()=>e.jsxs(r,{className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Disabled Trigger"}),e.jsx(t,{asChild:!0,disabled:!0,children:e.jsxs(l,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(o,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx(i,{className:"space-y-2",children:e.jsx("div",{className:"rounded-md border px-4 py-3",children:"This content cannot be expanded"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Click to expand</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">This is the expanded content</div>
      </CollapsibleContent>
    </Collapsible>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Custom Trigger</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            Show Details
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          This content is shown when the custom button is clicked
        </div>
      </CollapsibleContent>
    </Collapsible>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Disabled Trigger</h4>
        <CollapsibleTrigger asChild disabled>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">This content cannot be expanded</div>
      </CollapsibleContent>
    </Collapsible>
}`,...n.parameters?.docs?.source}}};const z=["Default","WithCustomButton","Disabled"];export{s as Default,n as Disabled,a as WithCustomButton,z as __namedExportsOrder,B as default};
