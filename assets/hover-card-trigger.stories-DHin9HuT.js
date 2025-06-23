import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-B_EVNb5l.js";import{b as o,a,H as i}from"./hover-card-43bVz-CH.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-CPpQNmgs.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BdN0SzKn.js";import"./index-ZXlQBbzy.js";const D={title:"UI/HoverCard/HoverCardTrigger",component:o,parameters:{layout:"centered",docs:{description:{component:"The element that triggers the hover card. Must be used within a HoverCard component."}}},argTypes:{asChild:{control:"boolean",description:"Change the component to the HTML tag or custom component supplied to the asChild prop",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},r=s=>e.jsxs(a,{children:[e.jsx(o,{...s,children:"Hover over me"}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Default Trigger"}),e.jsx("p",{className:"text-sm",children:"Using the default trigger element."})]})})]});r.parameters={docs:{description:{story:"A basic trigger using the default element."}}};const t=s=>e.jsxs(a,{children:[e.jsx(o,{...s,asChild:!0,children:e.jsx(n,{variant:"outline",children:"Custom Button Trigger"})}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Custom Trigger"}),e.jsx("p",{className:"text-sm",children:"Using a custom button component as the trigger."})]})})]});t.parameters={docs:{description:{story:"Using asChild to render the trigger as a custom Button component while maintaining accessibility."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"AsChild"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <HoverCard>
    <HoverCardTrigger {...args}>Hover over me</HoverCardTrigger>
    <HoverCardContent>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Default Trigger</h4>
        <p className="text-sm">Using the default trigger element.</p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <HoverCard>
    <HoverCardTrigger {...args} asChild>
      <Button variant="outline">Custom Button Trigger</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Custom Trigger</h4>
        <p className="text-sm">Using a custom button component as the trigger.</p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...t.parameters?.docs?.source}}};const A=["Default","AsChild"];export{t as AsChild,r as Default,A as __namedExportsOrder,D as default};
