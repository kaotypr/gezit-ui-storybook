import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-CP2yOfOm.js";import{e as m,u as i,a as n,b as c,c as d,d as l,F as p}from"./form-4_pUvH5n.js";import{I as u}from"./input--pf6IO2E.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./label-C29XJGd3.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";const S={title:"UI/Form/FormMessage",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays validation or error messages for a field. Must be used within a Form context and as a child of FormItem."}}},argTypes:{className:{description:"Custom class name for the message",type:{name:"string"}},children:{description:"Message text",type:{name:"string"}}}},g=t=>{const e=i({defaultValues:{city:""}});return r.jsx(n,{...e,children:r.jsx("form",{children:r.jsx(c,{name:"city",control:e.control,render:({field:a})=>r.jsxs(d,{children:[r.jsx(l,{children:"City"}),r.jsx(p,{children:r.jsx(u,{...a,placeholder:"City"})}),r.jsx(m,{...t,children:"Optional message"})]})})})})},s={render:g,parameters:{docs:{description:{story:"Basic usage of FormMessage as a message for a field."}}},args:{}},o={render:t=>{const e=i({defaultValues:{city:""},mode:"onSubmit"});return f.useEffect(()=>{e.setError("city",{type:"manual",message:"City is required"})},[e]),r.jsx(n,{...e,children:r.jsx("form",{children:r.jsx(c,{name:"city",control:e.control,render:({field:a})=>r.jsxs(d,{children:[r.jsx(l,{children:"City"}),r.jsx(p,{children:r.jsx(u,{...a,placeholder:"City"})}),r.jsx(m,{...t})]})})})})},parameters:{docs:{description:{story:"FormMessage with an error state."}}},args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of FormMessage as a message for a field.'
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const form = useForm<FieldValues>({
      defaultValues: {
        city: ''
      },
      mode: 'onSubmit'
    });
    React.useEffect(() => {
      form.setError('city', {
        type: 'manual',
        message: 'City is required'
      });
    }, [form]);
    return <Form {...form}>
        <form>
          <FormField name="city" control={form.control} render={({
          field
        }) => <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="City" />
                </FormControl>
                <FormMessage {...args} />
              </FormItem>} />
        </form>
      </Form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'FormMessage with an error state.'
      }
    }
  },
  args: {}
}`,...o.parameters?.docs?.source}}};const V=["Default","WithError"];export{s as Default,o as WithError,V as __namedExportsOrder,S as default};
