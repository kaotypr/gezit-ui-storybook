import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as o,a as s,b as c,c as n,S as p,d as l}from"./select-BWl0jssQ.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-BInWWs9D.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-up-CCoYB0VF.js";import"./check-DLjw-kwL.js";const F={title:"UI/Select/SelectScrollDownButton",component:o,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},t=r=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(c,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsxs(p,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(o,{...r})]})]});t.parameters={docs:{description:{story:"Basic usage of the SelectScrollDownButton component."}}};const a=r=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(c,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsxs(p,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(o,{className:"bg-primary text-white",...r})]})]});a.parameters={docs:{description:{story:"SelectScrollDownButton with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomClass"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectScrollDownButton {...args} />
    </SelectContent>
  </Select>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectScrollDownButton className="bg-primary text-white" {...args} />
    </SelectContent>
  </Select>`,...a.parameters?.docs?.source}}};const G=["Default","CustomClass"];export{a as CustomClass,t as Default,G as __namedExportsOrder,F as default};
