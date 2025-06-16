import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as s,a as c,b as o,c as n,S as p,e as i,d as l}from"./select-Dm_91ekx.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CROEQnJ0.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-up-BP6FDRUT.js";import"./check-C8XpHW4d.js";const q={title:"UI/Select/SelectLabel",component:s,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},t=r=>e.jsxs(c,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsx(p,{children:e.jsxs(i,{children:[e.jsx(s,{...r,children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})})]});t.parameters={docs:{description:{story:"Basic usage of the SelectLabel component."}}};const a=r=>e.jsxs(c,{defaultValue:"apple",children:[e.jsx(o,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsx(p,{children:e.jsxs(i,{children:[e.jsx(s,{className:"text-primary font-bold",...r,children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})})]});a.parameters={docs:{description:{story:"SelectLabel with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"CustomClass"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
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
