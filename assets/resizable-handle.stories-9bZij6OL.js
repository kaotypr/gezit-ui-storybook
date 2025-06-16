import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as i,a as o,b as l}from"./resizable-Cuq5hm_u.js";import"./index-CP2yOfOm.js";import"./cn-BEHD0UYf.js";import"./createLucideIcon-CAcKuqHj.js";const b={title:"UI/Resizable/ResizableHandle",component:i,parameters:{layout:"centered",docs:{description:{component:`
The handle component for resizing panels. Must be used within a ResizablePanelGroup component between ResizablePanel components.

This component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels).
        `}}},argTypes:{withHandle:{description:"Whether to show a visual handle icon",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"],decorators:[d=>e.jsxs(o,{direction:"horizontal",className:"h-[200px] max-w-md rounded-lg border",children:[e.jsx(l,{defaultSize:30,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Panel 1"})})}),e.jsx(d,{}),e.jsx(l,{defaultSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Panel 2"})})})]})]},a=()=>e.jsx(i,{});a.parameters={docs:{description:{story:"Basic usage of the ResizableHandle component."}}};const s=()=>e.jsx(i,{withHandle:!0});s.parameters={docs:{description:{story:"ResizableHandle with a visible handle icon."}}};const n=()=>e.jsx(i,{className:"bg-primary/20 after:bg-primary/40 hover:bg-primary/30",withHandle:!0});n.parameters={docs:{description:{story:"ResizableHandle with custom styling using Tailwind CSS classes."}}};const r=()=>e.jsxs(o,{direction:"vertical",className:"h-[200px] max-w-md rounded-lg border",children:[e.jsx(l,{defaultSize:30,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Top Panel"})})}),e.jsx(i,{withHandle:!0}),e.jsx(l,{defaultSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Bottom Panel"})})})]});r.parameters={docs:{description:{story:"ResizableHandle in a vertical layout."}}};const t=()=>e.jsx(i,{className:"after:hidden",withHandle:!0});t.parameters={docs:{description:{story:"ResizableHandle with only the handle icon visible, without the dividing line."}}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithHandleIcon"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.__docgenInfo={description:"",methods:[],displayName:"VerticalHandle"};t.__docgenInfo={description:"",methods:[],displayName:"WithoutVisibleLine"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <ResizableHandle />;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ResizableHandle withHandle />;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ResizableHandle className="bg-primary/20 after:bg-primary/40 hover:bg-primary/30" withHandle />;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanelGroup direction="vertical" className="h-[200px] max-w-md rounded-lg border">
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Top Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <ResizableHandle className="after:hidden" withHandle />;
}`,...t.parameters?.docs?.source}}};const f=["Default","WithHandleIcon","CustomStyling","VerticalHandle","WithoutVisibleLine"];export{n as CustomStyling,a as Default,r as VerticalHandle,s as WithHandleIcon,t as WithoutVisibleLine,f as __namedExportsOrder,b as default};
