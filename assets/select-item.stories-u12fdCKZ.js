import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{d as l,a as s,b as o,c,S as i}from"./select-BWl0jssQ.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-BInWWs9D.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-up-CCoYB0VF.js";import"./check-DLjw-kwL.js";const k={title:"UI/Select/SelectItem",component:l,parameters:{layout:"centered"},argTypes:{value:{description:"The value of the item (required)",control:"text"},disabled:{description:"Whether the item is disabled",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},t=r=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsx(l,{...r,children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]});t.args={value:"apple"};t.parameters={docs:{description:{story:"Basic usage of the SelectItem component."}}};const a=r=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(c,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",disabled:r.disabled,className:r.className,children:"Banana (disabled)"})]})]});a.args={disabled:!0};a.parameters={docs:{description:{story:"SelectItem can be disabled to prevent selection."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Disabled"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
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
