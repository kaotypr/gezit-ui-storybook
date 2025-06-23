import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a,b as s,R as n}from"./resizable-DlSqJ22Z.js";import"./index-BgCQ941z.js";import"./cn-BEHD0UYf.js";import"./createLucideIcon-BROHhCyT.js";const f={title:"UI/Resizable",component:a,parameters:{layout:"centered",docs:{description:{component:`
A set of components for creating resizable panel layouts.

This component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels).

### Component Parts
- [ResizablePanel](?path=/story/ui-resizable-resizablepanel--default): Individual panel that can be resized.
- [ResizableHandle](?path=/story/ui-resizable-resizablehandle--default): Handle for resizing panels.
        `}}},argTypes:{direction:{description:"The direction of the panel group",control:"select",options:["horizontal","vertical"]},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},l=()=>e.jsxs(a,{direction:"horizontal",className:"h-[400px] max-w-3xl rounded-lg border",children:[e.jsx(s,{defaultSize:25,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Sidebar"})})}),e.jsx(n,{}),e.jsx(s,{defaultSize:75,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Content"})})})]});l.parameters={docs:{description:{story:"Basic horizontal layout with two panels and a resize handle."}}};const i=()=>e.jsxs(a,{direction:"vertical",className:"h-[400px] max-w-3xl rounded-lg border",children:[e.jsx(s,{defaultSize:25,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Header"})})}),e.jsx(n,{}),e.jsx(s,{defaultSize:75,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Content"})})})]});i.parameters={docs:{description:{story:"Vertical layout with two panels and a resize handle."}}};const t=()=>e.jsxs(a,{direction:"horizontal",className:"h-[400px] max-w-3xl rounded-lg border",children:[e.jsx(s,{defaultSize:20,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Navigation"})})}),e.jsx(n,{}),e.jsx(s,{defaultSize:60,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Content"})})}),e.jsx(n,{}),e.jsx(s,{defaultSize:20,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Details"})})})]});t.parameters={docs:{description:{story:"Three-panel layout with resize handles between each panel."}}};const r=()=>e.jsxs(a,{direction:"horizontal",className:"h-[400px] max-w-3xl rounded-lg border",children:[e.jsx(s,{defaultSize:30,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Panel 1"})})}),e.jsx(n,{withHandle:!0}),e.jsx(s,{defaultSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Panel 2"})})})]});r.parameters={docs:{description:{story:"Panels with a visible handle icon for resizing."}}};const d=()=>e.jsxs(a,{direction:"horizontal",className:"h-[400px] max-w-3xl rounded-lg border",children:[e.jsx(s,{defaultSize:25,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Sidebar"})})}),e.jsx(n,{}),e.jsx(s,{defaultSize:75,children:e.jsxs(a,{direction:"vertical",children:[e.jsx(s,{defaultSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Main Content"})})}),e.jsx(n,{withHandle:!0}),e.jsx(s,{defaultSize:30,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Preview"})})})]})})]});d.parameters={docs:{description:{story:"Complex layout with nested panel groups combining horizontal and vertical layouts."}}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"VerticalLayout"};t.__docgenInfo={description:"",methods:[],displayName:"ThreePanels"};r.__docgenInfo={description:"",methods:[],displayName:"WithHandleIcons"};d.__docgenInfo={description:"",methods:[],displayName:"NestedPanels"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanelGroup direction="vertical" className="h-[400px] max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>;
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Details</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel 1</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel 2</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>;
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanelGroup direction="horizontal" className="h-[400px] max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Main Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Preview</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>;
}`,...d.parameters?.docs?.source}}};const h=["Default","VerticalLayout","ThreePanels","WithHandleIcons","NestedPanels"];export{l as Default,d as NestedPanels,t as ThreePanels,i as VerticalLayout,r as WithHandleIcons,h as __namedExportsOrder,f as default};
