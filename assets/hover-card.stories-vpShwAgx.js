import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{a as o,b as s,H as n}from"./hover-card-43bVz-CH.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-CPpQNmgs.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BdN0SzKn.js";import"./index-ZXlQBbzy.js";const B={title:"UI/HoverCard",component:o,parameters:{layout:"centered",docs:{description:{component:`A popup card that appears when hovering over a trigger element.

This component is built on top of [Radix UI Hover Card](https://www.radix-ui.com/primitives/docs/components/hover-card).

### Component Parts
- [HoverCardTrigger](?path=/story/ui-hovercard-hovercardtrigger--default): The element that triggers the hover card.
- [HoverCardContent](?path=/story/ui-hovercard-hovercardcontent--default): The content displayed when hovering over the trigger.`}}},tags:["autodocs"]},r=()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Hover me"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@nextjs"}),e.jsx("p",{className:"text-sm",children:"The React Framework – created and maintained by @vercel."})]})})]});r.parameters={docs:{description:{story:"A basic hover card with a button trigger and simple content."}}};const t=()=>e.jsxs(o,{openDelay:200,closeDelay:300,children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Hover with delay"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Custom delay"}),e.jsx("p",{className:"text-sm",children:"This card has custom open and close delay timings."})]})})]});t.parameters={docs:{description:{story:"A hover card with custom open and close delay timings."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomDelay"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">@nextjs</h4>
        <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <HoverCard openDelay={200} closeDelay={300}>
    <HoverCardTrigger asChild>
      <Button variant="outline">Hover with delay</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Custom delay</h4>
        <p className="text-sm">This card has custom open and close delay timings.</p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...t.parameters?.docs?.source}}};const _=["Default","WithCustomDelay"];export{r as Default,t as WithCustomDelay,_ as __namedExportsOrder,B as default};
