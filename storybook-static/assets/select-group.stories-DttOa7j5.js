import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as r,a as s,b as p,c as n,S as i,f as o,d as t}from"./select-Dm_91ekx.js";import"./index-CP2yOfOm.js";import"./index-BOAxdYzW.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-BEIweEOh.js";import"./index-Dl3xCZ72.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CROEQnJ0.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";import"./cn-BEHD0UYf.js";import"./chevron-down-BesqFj4W.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-up-BP6FDRUT.js";import"./check-C8XpHW4d.js";const U={title:"UI/Select/SelectGroup",component:r,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"}},tags:["autodocs"]},l=c=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(p,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsx(i,{children:e.jsxs(r,{...c,children:[e.jsx(o,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"})]})})]});l.parameters={docs:{description:{story:"Basic usage of the SelectGroup component."}}};const a=c=>e.jsxs(s,{defaultValue:"apple",children:[e.jsx(p,{className:"w-[180px]",children:e.jsx(n,{placeholder:"Select a fruit"})}),e.jsxs(i,{children:[e.jsxs(r,{...c,children:[e.jsx(o,{children:"Fruits"}),e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"})]}),e.jsxs(r,{children:[e.jsx(o,{children:"Vegetables"}),e.jsx(t,{value:"carrot",children:"Carrot"}),e.jsx(t,{value:"lettuce",children:"Lettuce"})]})]})]});a.parameters={docs:{description:{story:"Select with multiple groups of items."}}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithMultipleGroups"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple">
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
