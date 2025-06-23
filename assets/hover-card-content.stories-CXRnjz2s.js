import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{H as n,a as i,b as d}from"./hover-card-43bVz-CH.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-CPpQNmgs.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BdN0SzKn.js";import"./index-ZXlQBbzy.js";const _={title:"UI/HoverCard/HoverCardContent",component:n,parameters:{layout:"centered",docs:{description:{component:"The content that appears when hovering over the trigger. Must be used within a HoverCard component."}}},argTypes:{align:{control:"select",options:["start","center","end"],description:"The alignment of the hover card content relative to the trigger",table:{type:{summary:'"start" | "center" | "end"'},defaultValue:{summary:"center"}}},className:{control:"text",description:"Additional CSS classes to style the content"}},tags:["autodocs"]},e=o=>t.jsxs(i,{children:[t.jsx(d,{asChild:!0,children:t.jsx(a,{variant:"outline",children:"Hover me"})}),t.jsx(n,{...o,children:t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-sm font-semibold",children:"Default Content"}),t.jsx("p",{className:"text-sm",children:"Basic hover card content with default styling."})]})})]});e.parameters={docs:{description:{story:"Basic hover card content with default styling and positioning."}}};const r=o=>t.jsxs(i,{children:[t.jsx(d,{asChild:!0,children:t.jsx(a,{variant:"outline",children:"Hover (Start Aligned)"})}),t.jsx(n,{...o,align:"start",sideOffset:8,children:t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-sm font-semibold",children:"Custom Alignment"}),t.jsx("p",{className:"text-sm",children:"Content aligned to the start with increased offset."})]})})]});r.parameters={docs:{description:{story:"Content with custom alignment and offset from the trigger."}}};const s=o=>t.jsxs(i,{children:[t.jsx(d,{asChild:!0,children:t.jsx(a,{variant:"outline",children:"Hover for Custom Style"})}),t.jsx(n,{...o,className:"bg-muted w-80",children:t.jsxs("div",{className:"space-y-2",children:[t.jsx("h4",{className:"text-sm font-semibold text-primary",children:"Custom Styled Content"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Content with custom background color, width, and text styling."})]})})]});s.parameters={docs:{description:{story:"Content with custom background color, width, and text styling."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomAlignment"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </HoverCardTrigger>
    <HoverCardContent {...args}>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Default Content</h4>
        <p className="text-sm">Basic hover card content with default styling.</p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Hover (Start Aligned)</Button>
    </HoverCardTrigger>
    <HoverCardContent {...args} align="start" sideOffset={8}>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold">Custom Alignment</h4>
        <p className="text-sm">Content aligned to the start with increased offset.</p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Hover for Custom Style</Button>
    </HoverCardTrigger>
    <HoverCardContent {...args} className="bg-muted w-80">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-primary">Custom Styled Content</h4>
        <p className="text-sm text-muted-foreground">
          Content with custom background color, width, and text styling.
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>`,...s.parameters?.docs?.source}}};const W=["Default","WithCustomAlignment","WithCustomStyling"];export{e as Default,r as WithCustomAlignment,s as WithCustomStyling,W as __namedExportsOrder,_ as default};
