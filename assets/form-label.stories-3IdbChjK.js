import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-CP2yOfOm.js";import{d as m,u as n,a as l,b as c,c as i,F as d,e as p}from"./form-4_pUvH5n.js";import{I as u}from"./input--pf6IO2E.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./label-C29XJGd3.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";const C={title:"UI/Form/FormLabel",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Label for a form field. Must be used within a Form context and as a child of FormItem."}}},argTypes:{className:{description:"Custom class name for the label",type:{name:"string"}},children:{description:"Label text",type:{name:"string"}}}},F=a=>{const r=n({defaultValues:{username:""}});return e.jsx(l,{...r,children:e.jsx("form",{children:e.jsx(c,{name:"username",control:r.control,render:({field:t})=>e.jsxs(i,{children:[e.jsx(m,{...a,children:"Username"}),e.jsx(d,{children:e.jsx(u,{...t,placeholder:"Username"})}),e.jsx(p,{})]})})})})},o={render:F,parameters:{docs:{description:{story:"Basic usage of FormLabel as a label for a field."}}},args:{}},s={render:a=>{const r=n({defaultValues:{username:""},mode:"onSubmit"});return f.useEffect(()=>{r.setError("username",{type:"manual",message:"Required"})},[r]),e.jsx(l,{...r,children:e.jsx("form",{children:e.jsx(c,{name:"username",control:r.control,render:({field:t})=>e.jsxs(i,{children:[e.jsx(m,{...a,children:"Username"}),e.jsx(d,{children:e.jsx(u,{...t,placeholder:"Username"})}),e.jsx(p,{})]})})})})},parameters:{docs:{description:{story:"FormLabel with an error state."}}},args:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of FormLabel as a label for a field.'
      }
    }
  },
  args: {}
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const form = useForm<FieldValues>({
      defaultValues: {
        username: ''
      },
      mode: 'onSubmit'
    });
    React.useEffect(() => {
      form.setError('username', {
        type: 'manual',
        message: 'Required'
      });
    }, [form]);
    return <Form {...form}>
        <form>
          <FormField name="username" control={form.control} render={({
          field
        }) => <FormItem>
                <FormLabel {...args}>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Username" />
                </FormControl>
                <FormMessage />
              </FormItem>} />
        </form>
      </Form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'FormLabel with an error state.'
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}};const R=["Default","WithError"];export{o as Default,s as WithError,R as __namedExportsOrder,C as default};
