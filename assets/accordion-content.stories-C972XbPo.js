import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{A as c,a as i,b as s,c as r}from"./accordion-BOawXFX2.js";import"./index-BgCQ941z.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-Dc_FVRD7.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-RJnmdD4_.js";import"./index-BfBstFV9.js";import"./index-Pxmga4VG.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";const b={title:"UI/Accordion/AccordionContent",component:c,parameters:{layout:"centered"},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},forceMount:{description:"Forces the content to stay mounted.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},o=()=>e.jsx(i,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(s,{value:"item-1",children:[e.jsx(r,{children:"Accordion Content"}),e.jsx(c,{children:"This is a basic accordion content."})]})});o.parameters={docs:{description:{story:"Basic usage of the AccordionContent component."}}};const n=()=>e.jsx(i,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(s,{value:"item-1",children:[e.jsx(r,{children:"Rich Content"}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"This content includes multiple elements:"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-2",children:[e.jsx("li",{children:"Paragraphs"}),e.jsx("li",{children:"Lists"}),e.jsx("li",{children:"And more"})]})]})})]})});n.parameters={docs:{description:{story:"AccordionContent can contain rich content with multiple elements."}}};const t=()=>e.jsx(i,{type:"single",collapsible:!0,className:"w-[400px]",children:e.jsxs(s,{value:"item-1",children:[e.jsx(r,{children:"Custom Styled Content"}),e.jsx(c,{className:"text-muted-foreground",children:"This accordion content has custom styling applied."})]})});t.parameters={docs:{description:{story:"AccordionContent can be styled using Tailwind CSS classes."}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithRichContent"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Accordion type="single" collapsible className="w-[400px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion Content</AccordionTrigger>
      <AccordionContent>This is a basic accordion content.</AccordionContent>
    </AccordionItem>
  </Accordion>`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Accordion type="single" collapsible className="w-[400px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Rich Content</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4">
          <p>This content includes multiple elements:</p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Paragraphs</li>
            <li>Lists</li>
            <li>And more</li>
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Accordion type="single" collapsible className="w-[400px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Custom Styled Content</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        This accordion content has custom styling applied.
      </AccordionContent>
    </AccordionItem>
  </Accordion>`,...t.parameters?.docs?.source}}};const S=["Default","WithRichContent","CustomStyling"];export{t as CustomStyling,o as Default,n as WithRichContent,S as __namedExportsOrder,b as default};
