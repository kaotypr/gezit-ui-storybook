import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c,a as s,b as t,A as n}from"./accordion-CIps9Gza.js";import"./index-CP2yOfOm.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-Dc_FVRD7.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BBCYznAR.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const S={title:"UI/Accordion/AccordionTrigger",component:c,parameters:{layout:"centered"},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"},disabled:{description:"Whether the trigger is disabled",control:"boolean"}},tags:["autodocs"]},r=()=>e.jsx(s,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(t,{value:"item-1",children:[e.jsx(c,{children:"Accordion Trigger"}),e.jsx(n,{children:"This is a basic accordion trigger."})]})});r.parameters={docs:{description:{story:"Basic usage of the AccordionTrigger component."}}};const o=()=>e.jsx(s,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(t,{value:"item-1",children:[e.jsx(c,{disabled:!0,children:"Disabled Trigger"}),e.jsx(n,{children:"This accordion trigger is disabled and cannot be clicked."})]})});o.parameters={docs:{description:{story:"AccordionTrigger can be disabled to prevent interaction."}}};const i=()=>e.jsx(s,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(t,{value:"item-1",children:[e.jsx(c,{className:"text-primary hover:text-primary/80",children:"Custom Styled Trigger"}),e.jsx(n,{children:"This accordion trigger has custom styling applied."})]})});i.parameters={docs:{description:{story:"AccordionTrigger can be styled using Tailwind CSS classes."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Accordion type="single" collapsible className="w-[400px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion Trigger</AccordionTrigger>
      <AccordionContent>This is a basic accordion trigger.</AccordionContent>
    </AccordionItem>
  </Accordion>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Accordion type="single" collapsible className="w-[400px]">
    <AccordionItem value="item-1">
      <AccordionTrigger disabled>Disabled Trigger</AccordionTrigger>
      <AccordionContent>This accordion trigger is disabled and cannot be clicked.</AccordionContent>
    </AccordionItem>
  </Accordion>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Accordion type="single" collapsible className="w-[400px]">
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-primary hover:text-primary/80">
        Custom Styled Trigger
      </AccordionTrigger>
      <AccordionContent>This accordion trigger has custom styling applied.</AccordionContent>
    </AccordionItem>
  </Accordion>`,...i.parameters?.docs?.source}}};const I=["Default","Disabled","CustomStyling"];export{i as CustomStyling,r as Default,o as Disabled,I as __namedExportsOrder,S as default};
