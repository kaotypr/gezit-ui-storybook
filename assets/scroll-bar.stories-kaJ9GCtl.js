import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as o,S as c}from"./scroll-area-CjFxVbQT.js";import"./index-CP2yOfOm.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CjF7u6Cb.js";import"./index-COdVRFd9.js";import"./index-Dl3xCZ72.js";import"./index-D-X1RFvQ.js";import"./index-BBCYznAR.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./cn-BEHD0UYf.js";const B={title:"UI/ScrollArea/ScrollBar",component:o,parameters:{layout:"centered",docs:{description:{component:`
Custom scrollbar component for the ScrollArea. Must be used within a ScrollArea component.

This component is built on top of [Radix UI Scroll Area Scrollbar](https://www.radix-ui.com/primitives/docs/components/scroll-area#scrollbar).

### Accessibility
- Supports keyboard scrolling by default (native browser behavior)
- Scrollbar thumb can be dragged with mouse or touch
- Scrollbar track can be clicked to jump to that position
        `}}},argTypes:{orientation:{description:"The orientation of the scrollbar",control:"select",options:["vertical","horizontal"],defaultValue:"vertical"},asChild:{description:"Change the component to the HTML tag or custom component of the only child",control:"boolean",defaultValue:!1},forceMount:{description:"Force mounting when used within a Presence component",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"},thumbProps:{description:"Additional props to apply to the thumb",control:"object"}},tags:["autodocs"]},s=i=>e.jsxs(c,{className:"h-72 w-48 rounded-md border",children:[e.jsx("div",{className:"p-4",children:Array.from({length:20},(r,m)=>e.jsx("div",{className:"mb-4 last:mb-0",children:e.jsxs("div",{className:"text-sm",children:["Item ",m+1]})},m))}),e.jsx(o,{...i})]});s.parameters={docs:{description:{story:"Basic usage of the ScrollBar component with vertical orientation."}}};const a=()=>e.jsxs(c,{className:"w-96 rounded-md border",children:[e.jsx("div",{className:"flex space-x-4 p-4",children:Array.from({length:20},(i,r)=>e.jsx("div",{className:"w-40 flex-none rounded-md border p-4",children:e.jsxs("div",{className:"text-sm",children:["Column ",r+1]})},r))}),e.jsx(o,{orientation:"horizontal"})]});a.parameters={docs:{description:{story:"ScrollBar with horizontal orientation."}}};const t=()=>e.jsxs(c,{className:"h-72 w-48 rounded-md border",children:[e.jsx("div",{className:"p-4",children:Array.from({length:20},(i,r)=>e.jsx("div",{className:"mb-4 last:mb-0",children:e.jsxs("div",{className:"text-sm",children:["Item ",r+1]})},r))}),e.jsx(o,{className:"bg-emerald-200/50",thumbProps:{className:"bg-emerald-500"}})]});t.parameters={docs:{description:{story:"ScrollBar with custom styling using Tailwind CSS classes."}}};const l=()=>e.jsxs(c,{className:"h-72 w-96 rounded-md border",children:[e.jsxs("div",{className:"min-w-[800px] p-4",children:[e.jsx("h4",{className:"mb-4 text-xl font-medium",children:"Content with Both Scrollbars"}),Array.from({length:20},(i,r)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("h5",{className:"mb-2 text-lg font-medium",children:["Section ",r+1]}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]},r))]}),e.jsx(o,{className:"bg-muted"}),e.jsx(o,{orientation:"horizontal",className:"bg-muted"})]});l.parameters={docs:{description:{story:"ScrollArea with both vertical and horizontal ScrollBars."}}};const n=()=>e.jsxs(c,{className:"h-72 w-48 rounded-md border",children:[e.jsx("div",{className:"p-4",children:Array.from({length:20},(i,r)=>e.jsx("div",{className:"mb-4 last:mb-0",children:e.jsxs("div",{className:"text-sm",children:["Item ",r+1]})},r))}),e.jsx(o,{className:"w-4"})]});n.parameters={docs:{description:{story:"ScrollBar with increased width."}}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"HorizontalScrollBar"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};l.__docgenInfo={description:"",methods:[],displayName:"BothScrollBars"};n.__docgenInfo={description:"",methods:[],displayName:"ThickScrollBar"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="mb-4 last:mb-0">
            <div className="text-sm">Item {i + 1}</div>
          </div>)}
      </div>
      <ScrollBar {...args} />
    </ScrollArea>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="w-96 rounded-md border">
      <div className="flex space-x-4 p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="w-40 flex-none rounded-md border p-4">
            <div className="text-sm">Column {i + 1}</div>
          </div>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="mb-4 last:mb-0">
            <div className="text-sm">Item {i + 1}</div>
          </div>)}
      </div>
      <ScrollBar className="bg-emerald-200/50" thumbProps={{
      className: 'bg-emerald-500'
    }} />
    </ScrollArea>;
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="min-w-[800px] p-4">
        <h4 className="mb-4 text-xl font-medium">Content with Both Scrollbars</h4>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="mb-4">
            <h5 className="mb-2 text-lg font-medium">Section {i + 1}</h5>
            <div className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>)}
      </div>
      <ScrollBar className="bg-muted" />
      <ScrollBar orientation="horizontal" className="bg-muted" />
    </ScrollArea>;
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="mb-4 last:mb-0">
            <div className="text-sm">Item {i + 1}</div>
          </div>)}
      </div>
      <ScrollBar className="w-4" />
    </ScrollArea>;
}`,...n.parameters?.docs?.source}}};const _=["Default","HorizontalScrollBar","CustomStyling","BothScrollBars","ThickScrollBar"];export{l as BothScrollBars,t as CustomStyling,s as Default,a as HorizontalScrollBar,n as ThickScrollBar,_ as __namedExportsOrder,B as default};
