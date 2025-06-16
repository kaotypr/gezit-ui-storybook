import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as a,u as m,a as c,b as p,c as d,d as l,F as u,e as x}from"./form-4_pUvH5n.js";import{I as g}from"./input--pf6IO2E.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./label-C29XJGd3.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";const w={title:"UI/Form/FormDescription",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Description/help text for a field. Must be used within a Form context and as a child of FormItem."}}},argTypes:{className:{description:"Custom class name for the description",type:{name:"string"}},children:{description:"Description text",type:{name:"string"}}}},n=t=>{const o=m({defaultValues:{age:""}});return e.jsx(c,{...o,children:e.jsx("form",{children:e.jsx(p,{name:"age",control:o.control,render:({field:i})=>e.jsxs(d,{children:[e.jsx(l,{children:"Age"}),e.jsx(u,{children:e.jsx(g,{...i,placeholder:"Age",type:"number"})}),e.jsx(a,{...t,children:"Enter your age in years."}),e.jsx(x,{})]})})})})},r={render:n,parameters:{docs:{description:{story:"Basic usage of FormDescription as help text for a field."}}},args:{}},s={render:t=>n({...t,children:"You must be at least 18 years old."}),parameters:{docs:{description:{story:"FormDescription with custom help text."}}},args:{}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of FormDescription as help text for a field.'
      }
    }
  },
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => Template({
    ...args,
    children: 'You must be at least 18 years old.'
  }),
  parameters: {
    docs: {
      description: {
        story: 'FormDescription with custom help text.'
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}};const A=["Default","CustomText"];export{s as CustomText,r as Default,A as __namedExportsOrder,w as default};
