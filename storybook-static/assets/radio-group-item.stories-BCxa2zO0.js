import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as s,a as c}from"./radio-group-BVxFqKEC.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-lA-nzH4g.js";import"./index-BEIweEOh.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-D-X1RFvQ.js";import"./index-CROEQnJ0.js";import"./index-BBCYznAR.js";import"./index-DmDYQtFb.js";import"./index-BCfVrt2A.js";import"./index-CjF7u6Cb.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";const W={title:"UI/RadioGroup/RadioGroupItem",component:s,parameters:{layout:"centered",docs:{description:{component:`
An individual radio button within a RadioGroup. Must be used within a RadioGroup component.

This component is built on top of [Radix UI Radio Group Item](https://www.radix-ui.com/primitives/docs/components/radio-group#item).
        `}}},argTypes:{value:{description:"The unique value of the radio item",control:"text"},disabled:{description:"When true, prevents the user from interacting with the radio item",control:"boolean"},required:{description:"When true, indicates that the user must check the radio item before the form can be submitted",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"],decorators:[d=>e.jsx(c,{defaultValue:"default",children:e.jsx(d,{})})]},t=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{value:"default",id:"default"}),e.jsx("label",{htmlFor:"default",children:"Default Radio Item"})]});t.parameters={docs:{description:{story:"Basic usage of the RadioGroupItem component."}}};const r=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{value:"disabled",id:"disabled",disabled:!0}),e.jsx("label",{htmlFor:"disabled",className:"text-muted-foreground",children:"Disabled Radio Item"})]});r.parameters={docs:{description:{story:"RadioGroupItem in a disabled state."}}};const i=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{value:"custom-icon",id:"custom-icon",className:"data-[state=checked]:border-emerald-500 data-[state=checked]:ring-emerald-500/50"}),e.jsx("label",{htmlFor:"custom-icon",children:"Custom Icon Radio"})]});i.parameters={docs:{description:{story:"RadioGroupItem with custom icon styling."}}};const a=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{value:"required",id:"required",required:!0}),e.jsx("label",{htmlFor:"required",className:"after:content-['*'] after:ml-0.5 after:text-red-500",children:"Required Radio Item"})]});a.parameters={docs:{description:{story:"RadioGroupItem marked as required with an asterisk."}}};const o=()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{value:"with-description",id:"with-description"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"with-description",className:"font-medium",children:"Radio with Description"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Additional description text for the radio item"})]})]});o.parameters={docs:{description:{story:"RadioGroupItem with an additional description text."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"WithCustomIcon"};a.__docgenInfo={description:"",methods:[],displayName:"Required"};o.__docgenInfo={description:"",methods:[],displayName:"WithDescription"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-2">
      <RadioGroupItem value="default" id="default" />
      <label htmlFor="default">Default Radio Item</label>
    </div>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-2">
      <RadioGroupItem value="disabled" id="disabled" disabled />
      <label htmlFor="disabled" className="text-muted-foreground">
        Disabled Radio Item
      </label>
    </div>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-2">
      <RadioGroupItem value="custom-icon" id="custom-icon" className="data-[state=checked]:border-emerald-500 data-[state=checked]:ring-emerald-500/50" />
      <label htmlFor="custom-icon">Custom Icon Radio</label>
    </div>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-2">
      <RadioGroupItem value="required" id="required" required />
      <label htmlFor="required" className="after:content-['*'] after:ml-0.5 after:text-red-500">
        Required Radio Item
      </label>
    </div>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-2">
      <RadioGroupItem value="with-description" id="with-description" />
      <div>
        <label htmlFor="with-description" className="font-medium">
          Radio with Description
        </label>
        <p className="text-sm text-muted-foreground">
          Additional description text for the radio item
        </p>
      </div>
    </div>;
}`,...o.parameters?.docs?.source}}};const k=["Default","Disabled","WithCustomIcon","Required","WithDescription"];export{t as Default,r as Disabled,a as Required,i as WithCustomIcon,o as WithDescription,k as __namedExportsOrder,W as default};
