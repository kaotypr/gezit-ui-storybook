import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-BgCQ941z.js";import{F as m,u as n,a as d,b as c,c as l,d as p,e as i}from"./form-DRmNsETc.js";import{I as u}from"./input--pf6IO2E.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./label-BqhQcKF3.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";const P={title:"UI/Form/FormControl",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Renders the field control. Must be used within a Form context and as a child of FormItem."}}},argTypes:{className:{description:"Custom class name for the control",type:{name:"string"}}}},F=a=>{const o=n({defaultValues:{password:""}});return r.jsx(d,{...o,children:r.jsx("form",{children:r.jsx(c,{name:"password",control:o.control,render:({field:t})=>r.jsxs(l,{children:[r.jsx(p,{children:"Password"}),r.jsx(m,{...a,children:r.jsx(u,{...t,placeholder:"Password",type:"password"})}),r.jsx(i,{})]})})})})},e={render:F,parameters:{docs:{description:{story:"Basic usage of FormControl as a wrapper for the field control."}}},args:{}},s={render:a=>{const o=n({defaultValues:{password:""},mode:"onSubmit"});return f.useEffect(()=>{o.setError("password",{type:"manual",message:"Required"})},[o]),r.jsx(d,{...o,children:r.jsx("form",{children:r.jsx(c,{name:"password",control:o.control,render:({field:t})=>r.jsxs(l,{children:[r.jsx(p,{children:"Password"}),r.jsx(m,{...a,children:r.jsx(u,{...t,placeholder:"Password",type:"password"})}),r.jsx(i,{})]})})})})},parameters:{docs:{description:{story:"FormControl with an error state."}}},args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of FormControl as a wrapper for the field control.'
      }
    }
  },
  args: {}
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const form = useForm<FieldValues>({
      defaultValues: {
        password: ''
      },
      mode: 'onSubmit'
    });
    React.useEffect(() => {
      form.setError('password', {
        type: 'manual',
        message: 'Required'
      });
    }, [form]);
    return <Form {...form}>
        <form>
          <FormField name="password" control={form.control} render={({
          field
        }) => <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl {...args}>
                  <Input {...field} placeholder="Password" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>} />
        </form>
      </Form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'FormControl with an error state.'
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}};const R=["Default","WithError"];export{e as Default,s as WithError,R as __namedExportsOrder,P as default};
