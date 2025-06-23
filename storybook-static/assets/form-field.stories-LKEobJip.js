import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as F}from"./index-CP2yOfOm.js";import{b as m,u as n,a as i,c,d,F as l,e as u}from"./form-4_pUvH5n.js";import{I as p}from"./input--pf6IO2E.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./label-C29XJGd3.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";const C={title:"UI/Form/FormField",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Connects a field to form state using react-hook-form Controller. Must be used within a Form context."}}},argTypes:{name:{description:"Field name",type:{name:"string",required:!0}},render:{description:"Render function for the field",type:{name:"function",required:!0}}}},h=t=>{const e=n({defaultValues:{firstName:""}});return r.jsx(i,{...e,children:r.jsx("form",{children:r.jsx(m,{...t,control:e.control,render:({field:a})=>r.jsxs(c,{children:[r.jsx(d,{children:"First Name"}),r.jsx(l,{children:r.jsx(p,{...a,placeholder:"First Name"})}),r.jsx(u,{})]})})})})},o={render:h,parameters:{docs:{description:{story:"Basic usage of FormField within a Form context."}}},args:{name:"firstName"}},s={render:t=>{const e=n({defaultValues:{firstName:""},mode:"onSubmit"}),a=e.handleSubmit(()=>{});return F.useEffect(()=>{e.setError("firstName",{type:"manual",message:"Required"})},[e]),r.jsx(i,{...e,children:r.jsx("form",{onSubmit:a,children:r.jsx(m,{...t,control:e.control,render:({field:f})=>r.jsxs(c,{children:[r.jsx(d,{children:"First Name"}),r.jsx(l,{children:r.jsx(p,{...f,placeholder:"First Name"})}),r.jsx(u,{})]})})})})},parameters:{docs:{description:{story:"FormField showing an error message."}}},args:{name:"firstName"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of FormField within a Form context.'
      }
    }
  },
  args: {
    name: 'firstName'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const form = useForm<FieldValues>({
      defaultValues: {
        firstName: ''
      },
      mode: 'onSubmit'
    });
    const onSubmit = form.handleSubmit(() => {});
    React.useEffect(() => {
      form.setError('firstName', {
        type: 'manual',
        message: 'Required'
      });
    }, [form]);
    return <Form {...form}>
        <form onSubmit={onSubmit}>
          <FormField {...args} control={form.control} render={({
          field
        }) => <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="First Name" />
                </FormControl>
                <FormMessage />
              </FormItem>} />
        </form>
      </Form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'FormField showing an error message.'
      }
    }
  },
  args: {
    name: 'firstName'
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","WithError"];export{o as Default,s as WithError,R as __namedExportsOrder,C as default};
