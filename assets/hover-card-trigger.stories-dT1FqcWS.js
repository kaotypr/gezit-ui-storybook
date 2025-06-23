import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-mvJUpYu0.js";import{b as o,a,H as i}from"./hover-card-BbC08tLT.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-BOAxdYzW.js";import"./index-B4JWVDRZ.js";import"./index-D-X1RFvQ.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BN84V4xG.js";import"./index-ygWTXzR6.js";const D={title:"UI/HoverCard/HoverCardTrigger",component:o,parameters:{layout:"centered",docs:{description:{component:"The element that triggers the hover card. Must be used within a HoverCard component."}}},argTypes:{asChild:{control:"boolean",description:"Change the component to the HTML tag or custom component supplied to the asChild prop",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},r=s=>e.jsxs(a,{children:[e.jsx(o,{...s,children:"Hover over me"}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Default Trigger"}),e.jsx("p",{className:"text-sm",children:"Using the default trigger element."})]})})]});r.parameters={docs:{description:{story:"A basic trigger using the default element."}}};const t=s=>e.jsxs(a,{children:[e.jsx(o,{...s,asChild:!0,children:e.jsx(n,{variant:"outline",children:"Custom Button Trigger"})}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Custom Trigger"}),e.jsx("p",{className:"text-sm",children:"Using a custom button component as the trigger."})]})})]});t.parameters={docs:{description:{story:"Using asChild to render the trigger as a custom Button component while maintaining accessibility."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"AsChild"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <HoverCard>
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
