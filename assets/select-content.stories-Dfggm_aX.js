import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as l,a as n,b as p,c as i,d as r}from"./select-BWl0jssQ.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-BInWWs9D.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-up-CCoYB0VF.js";import"./check-DLjw-kwL.js";const z={title:"UI/Select/SelectContent",component:l,parameters:{layout:"centered"},argTypes:{position:{description:"The positioning strategy for the dropdown",control:"select",options:["popper","item-aligned"]},className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},t=o=>e.jsxs(n,{defaultValue:"apple",children:[e.jsx(p,{className:"w-[180px]",children:e.jsx(i,{placeholder:"Select a fruit"})}),e.jsxs(l,{...o,children:[e.jsx(r,{value:"apple",children:"Apple"}),e.jsx(r,{value:"banana",children:"Banana"})]})]});t.parameters={docs:{description:{story:"Basic usage of the SelectContent component."}}};const a=o=>e.jsxs(n,{defaultValue:"apple",children:[e.jsx(p,{className:"w-[180px]",children:e.jsx(i,{placeholder:"Select a fruit"})}),e.jsxs(l,{position:"item-aligned",...o,children:[e.jsx(r,{value:"apple",children:"Apple"}),e.jsx(r,{value:"banana",children:"Banana"})]})]});a.parameters={docs:{description:{story:'SelectContent with position set to "item-aligned".'}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"ItemAligned"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent {...args}>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectContent>
  </Select>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent position="item-aligned" {...args}>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectContent>
  </Select>`,...a.parameters?.docs?.source}}};const F=["Default","ItemAligned"];export{t as Default,a as ItemAligned,F as __namedExportsOrder,z as default};
