import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as l,a as s,b as o,c,S as i}from"./select-Dm_91ekx.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CROEQnJ0.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-up-BP6FDRUT.js";import"./check-C8XpHW4d.js";const k={title:"UI/Select/SelectItem",component:l,parameters:{layout:"centered"},argTypes:{value:{description:"The value of the item (required)",control:"text"},disabled:{description:"Whether the item is disabled",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},t=r=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsx(l,{...r,children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]});t.args={value:"apple"};t.parameters={docs:{description:{story:"Basic usage of the SelectItem component."}}};const a=r=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",disabled:r.disabled,className:r.className,children:"Banana (disabled)"})]})]});a.args={disabled:!0};a.parameters={docs:{description:{story:"SelectItem can be disabled to prevent selection."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Disabled"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem {...args}>Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectContent>
  </Select>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana" disabled={args.disabled} className={args.className}>
        Banana (disabled)
      </SelectItem>
    </SelectContent>
  </Select>`,...a.parameters?.docs?.source}}};const z=["Default","Disabled"];export{t as Default,a as Disabled,z as __namedExportsOrder,k as default};
