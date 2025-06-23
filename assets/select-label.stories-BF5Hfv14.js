import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as s,a as c,b as o,c as n,S as p,e as i,d as l}from"./select-BWl0jssQ.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-BInWWs9D.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-up-CCoYB0VF.js";import"./check-DLjw-kwL.js";const q={title:"UI/Select/SelectLabel",component:s,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},t=r=>e.jsxs(c,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsx(p,{children:e.jsxs(i,{children:[e.jsx(s,{...r,children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})})]});t.parameters={docs:{description:{story:"Basic usage of the SelectLabel component."}}};const a=r=>e.jsxs(c,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsx(p,{children:e.jsxs(i,{children:[e.jsx(s,{className:"text-primary font-bold",...r,children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})})]});a.parameters={docs:{description:{story:"SelectLabel with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomClass"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel {...args}>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel className="text-primary font-bold" {...args}>
          Fruits
        </SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>`,...a.parameters?.docs?.source}}};const z=["Default","CustomClass"];export{a as CustomClass,t as Default,z as __namedExportsOrder,q as default};
