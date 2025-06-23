import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as r,a as s,b as p,c as n,S as i,f as o,d as t}from"./select-BWl0jssQ.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-BInWWs9D.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-up-CCoYB0VF.js";import"./check-DLjw-kwL.js";const U={title:"UI/Select/SelectGroup",component:r,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},l=c=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(p,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsx(i,{children:e.jsxs(r,{...c,children:[e.jsx(o,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"})]})})]});l.parameters={docs:{description:{story:"Basic usage of the SelectGroup component."}}};const a=c=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(p,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsxs(r,{...c,children:[e.jsx(o,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"})]}),e.jsxs(r,{children:[e.jsx(o,{children:"Vegetables"}),e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"lettuce",children:"Lettuce"})]})]})]});a.parameters={docs:{description:{story:"Select with multiple groups of items."}}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithMultipleGroups"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup {...args}>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup {...args}>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="lettuce">Lettuce</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>`,...a.parameters?.docs?.source}}};const k=["Default","WithMultipleGroups"];export{l as Default,a as WithMultipleGroups,k as __namedExportsOrder,U as default};
