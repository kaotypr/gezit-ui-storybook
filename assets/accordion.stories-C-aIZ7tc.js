import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a,b as t,c as n,A as o}from"./accordion-CIps9Gza.js";import"./index-CP2yOfOm.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-Dc_FVRD7.js";import"./index-CROEQnJ0.js";import"./index-COdVRFd9.js";import"./index-CjF7u6Cb.js";import"./index-DLWGFm7J.js";import"./index-BBCYznAR.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";const I={title:"UI/Accordion",component:a,parameters:{layout:"centered",docs:{description:{component:`
A vertically stacked set of interactive headings that each reveal an associated section of content.

This component is built on top of [Radix UI Accordion](https://www.radix-ui.com/primitives/docs/components/accordion).

### Component Parts
- [AccordionItem](?path=/story/ui-accordion-accordionitem--default): Represents a single item within the accordion.
- [AccordionTrigger](?path=/story/ui-accordion-accordiontrigger--default): The button that toggles the visibility of the item's content.
- [AccordionContent](?path=/story/ui-accordion-accordioncontent--default): The content area that is shown or hidden when the item is toggled.
        `}}},argTypes:{type:{description:"The type of accordion (single or multiple)",control:"select",options:["single","multiple"]},defaultValue:{description:"The value(s) of the item(s) to expand when initially rendered (uncontrolled)",control:"text"},value:{description:"The controlled value(s) of the item(s) to expand",control:"text"},onValueChange:{description:"Callback fired when the expanded state of an item changes",action:"onValueChange"},collapsible:{description:"Whether to allow all items to be collapsed",control:"boolean"},disabled:{description:"Whether the accordion is disabled",control:"boolean"},dir:{description:"Text direction of the accordion",control:"select",options:["ltr","rtl"]},orientation:{description:"The orientation of the accordion",control:"select",options:["vertical","horizontal"]},asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>e.jsx(a,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(t,{value:"item-1",children:[e.jsx(n,{children:"Is it accessible?"}),e.jsx(o,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]})});i.parameters={docs:{description:{story:"Basic usage of the Accordion component with a single item."}}};const r=()=>e.jsxs(a,{type:"multiple",className:"w-[400px]",children:[e.jsxs(t,{value:"item-1",children:[e.jsx(n,{children:"What is React?"}),e.jsx(o,{children:"React is a JavaScript library for building user interfaces."})]}),e.jsxs(t,{value:"item-2",children:[e.jsx(n,{children:"What is TypeScript?"}),e.jsx(o,{children:"TypeScript is a strongly typed programming language that builds on JavaScript."})]})]});r.parameters={docs:{description:{story:"Accordion with multiple items that can be expanded simultaneously."}}};const s=()=>e.jsxs(a,{type:"single",collapsible:!0,className:"w-[400px]",children:[e.jsxs(t,{value:"item-1",children:[e.jsx(n,{children:"Getting Started"}),e.jsx(o,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Follow these steps to get started with our platform:"}),e.jsxs("ol",{className:"list-decimal pl-4 space-y-2",children:[e.jsx("li",{children:"Create an account"}),e.jsx("li",{children:"Verify your email"}),e.jsx("li",{children:"Complete your profile"}),e.jsx("li",{children:"Start exploring features"})]})]})})]}),e.jsxs(t,{value:"item-2",children:[e.jsx(n,{children:"Features"}),e.jsx(o,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Our platform offers several key features:"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-2",children:[e.jsx("li",{children:"Real-time collaboration"}),e.jsx("li",{children:"Cloud storage"}),e.jsx("li",{children:"Advanced analytics"}),e.jsx("li",{children:"Custom integrations"})]})]})})]}),e.jsxs(t,{value:"item-3",children:[e.jsx(n,{children:"Pricing"}),e.jsx(o,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Choose the plan that works for you:"}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Basic"}),e.jsx("span",{children:"$9/month"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Pro"}),e.jsx("span",{children:"$19/month"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Enterprise"}),e.jsx("span",{children:"Contact us"})]})]})]})})]})]}),c=()=>e.jsxs(a,{type:"single",collapsible:!0,className:"w-[400px]",children:[e.jsxs(t,{value:"item-1",className:"border-primary",children:[e.jsx(n,{className:"text-primary hover:text-primary/80",children:"Custom Styled Item"}),e.jsx(o,{className:"text-muted-foreground",children:"This accordion item has custom styling applied to it."})]}),e.jsxs(t,{value:"item-2",className:"border-secondary",children:[e.jsx(n,{className:"text-secondary hover:text-secondary/80",children:"Another Custom Item"}),e.jsx(o,{className:"text-muted-foreground",children:"This item also has custom styling with different colors."})]})]});i.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Multiple"};s.__docgenInfo={description:"",methods:[],displayName:"WithRichContent"};c.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent>
          React is a JavaScript library for building user interfaces.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is TypeScript?</AccordionTrigger>
        <AccordionContent>
          TypeScript is a strongly typed programming language that builds on JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>Follow these steps to get started with our platform:</p>
            <ol className="list-decimal pl-4 space-y-2">
              <li>Create an account</li>
              <li>Verify your email</li>
              <li>Complete your profile</li>
              <li>Start exploring features</li>
            </ol>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>Our platform offers several key features:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Real-time collaboration</li>
              <li>Cloud storage</li>
              <li>Advanced analytics</li>
              <li>Custom integrations</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>Choose the plan that works for you:</p>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span>Basic</span>
                <span>$9/month</span>
              </div>
              <div className="flex justify-between">
                <span>Pro</span>
                <span>$19/month</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise</span>
                <span>Contact us</span>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1" className="border-primary">
        <AccordionTrigger className="text-primary hover:text-primary/80">
          Custom Styled Item
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          This accordion item has custom styling applied to it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-secondary">
        <AccordionTrigger className="text-secondary hover:text-secondary/80">
          Another Custom Item
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          This item also has custom styling with different colors.
        </AccordionContent>
      </AccordionItem>
    </Accordion>;
}`,...c.parameters?.docs?.source}}};const T=["Default","Multiple","WithRichContent","CustomStyling"];export{c as CustomStyling,i as Default,r as Multiple,s as WithRichContent,T as __namedExportsOrder,I as default};
