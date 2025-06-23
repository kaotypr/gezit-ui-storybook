import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{c as t,u as c,a as i,b as p,d,F as l,e as u}from"./form-DRmNsETc.js";import{I as g}from"./input--pf6IO2E.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./label-BqhQcKF3.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";const N={title:"UI/Form/FormItem",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Wraps a form field and provides context for label, control, description, and message. Must be used within a Form context."}}},argTypes:{className:{description:"Custom class name for the wrapper",type:{name:"string"}}}},m=a=>{const o=c({defaultValues:{email:""}});return r.jsx(i,{...o,children:r.jsx("form",{children:r.jsx(p,{name:"email",control:o.control,render:({field:n})=>r.jsxs(t,{...a,children:[r.jsx(d,{children:"Email"}),r.jsx(l,{children:r.jsx(g,{...n,placeholder:"Email"})}),r.jsx(u,{})]})})})})},e={render:m,parameters:{docs:{description:{story:"Basic usage of FormItem as a wrapper for a field."}}},args:{}},s={render:a=>m({...a,className:"bg-gray-100 p-4 rounded"}),parameters:{docs:{description:{story:"FormItem with a custom className for styling."}}},args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of FormItem as a wrapper for a field.'
      }
    }
  },
  args: {}
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => Template({
    ...args,
    className: 'bg-gray-100 p-4 rounded'
  }),
  parameters: {
    docs: {
      description: {
        story: 'FormItem with a custom className for styling.'
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}};const E=["Default","WithCustomClass"];export{e as Default,s as WithCustomClass,E as __namedExportsOrder,N as default};
