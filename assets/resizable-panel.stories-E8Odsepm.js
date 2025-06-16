import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as s,a as o,R as c}from"./resizable-Cuq5hm_u.js";import"./index-CP2yOfOm.js";import"./cn-BEHD0UYf.js";import"./createLucideIcon-CAcKuqHj.js";const z={title:"UI/Resizable/ResizablePanel",component:s,parameters:{layout:"centered",docs:{description:{component:`
Individual panel that can be resized. Must be used within a ResizablePanelGroup component.

This component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels).
        `}}},argTypes:{defaultSize:{description:"The default size of the panel (in percentage)",control:{type:"number",min:0,max:100}},minSize:{description:"The minimum size of the panel (in percentage)",control:{type:"number",min:0,max:100}},maxSize:{description:"The maximum size of the panel (in percentage)",control:{type:"number",min:0,max:100}},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"],decorators:[l=>e.jsxs(o,{direction:"horizontal",className:"h-[200px] max-w-md rounded-lg border",children:[e.jsx(l,{}),e.jsx(c,{}),e.jsx(s,{defaultSize:50,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Other Panel"})})})]})]},a=()=>e.jsx(s,{defaultSize:50,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Resizable Panel"})})});a.parameters={docs:{description:{story:"Basic usage of the ResizablePanel component."}}};const i=()=>e.jsx(s,{defaultSize:50,minSize:30,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Min Size: 30%"})})});i.parameters={docs:{description:{story:"ResizablePanel with a minimum size constraint."}}};const n=()=>e.jsx(s,{defaultSize:50,maxSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Max Size: 70%"})})});n.parameters={docs:{description:{story:"ResizablePanel with a maximum size constraint."}}};const t=()=>e.jsx(s,{defaultSize:50,minSize:20,maxSize:80,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"20% - 80% Range"})})});t.parameters={docs:{description:{story:"ResizablePanel with both minimum and maximum size constraints."}}};const r=()=>e.jsx(s,{defaultSize:50,children:e.jsx("div",{className:"bg-muted flex h-full items-center justify-center p-6 rounded-md",children:e.jsx("span",{className:"font-semibold",children:"Custom Styled Panel"})})});r.parameters={docs:{description:{story:"ResizablePanel with custom styling using Tailwind CSS classes."}}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"WithMinSize"};n.__docgenInfo={description:"",methods:[],displayName:"WithMaxSize"};t.__docgenInfo={description:"",methods:[],displayName:"WithSizeConstraints"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanel defaultSize={50}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Resizable Panel</span>
      </div>
    </ResizablePanel>;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanel defaultSize={50} minSize={30}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Min Size: 30%</span>
      </div>
    </ResizablePanel>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanel defaultSize={50} maxSize={70}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Max Size: 70%</span>
      </div>
    </ResizablePanel>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">20% - 80% Range</span>
      </div>
    </ResizablePanel>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ResizablePanel defaultSize={50}>
      <div className="bg-muted flex h-full items-center justify-center p-6 rounded-md">
        <span className="font-semibold">Custom Styled Panel</span>
      </div>
    </ResizablePanel>;
}`,...r.parameters?.docs?.source}}};const h=["Default","WithMinSize","WithMaxSize","WithSizeConstraints","CustomStyling"];export{r as CustomStyling,a as Default,n as WithMaxSize,i as WithMinSize,t as WithSizeConstraints,h as __namedExportsOrder,z as default};
