import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-CP2yOfOm.js";import{T as c}from"./textarea-DH4_6uAn.js";import"./cn-BEHD0UYf.js";const v={title:"UI/Textarea",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A textarea component that allows users to enter multiple lines of text.

This component is built on top of the native HTML textarea element.`}}},argTypes:{placeholder:{control:"text",description:"Placeholder text when the textarea is empty."},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the textarea.",defaultValue:!1},required:{control:"boolean",description:"When true, indicates that the textarea must have a value.",defaultValue:!1},readOnly:{control:"boolean",description:"When true, prevents the user from modifying the value of the textarea.",defaultValue:!1},rows:{control:"number",description:"The number of visible text lines for the textarea.",defaultValue:4},maxLength:{control:"number",description:"The maximum number of characters allowed in the textarea."},minLength:{control:"number",description:"The minimum number of characters required in the textarea."},className:{control:"text",description:"Additional CSS class names."}}},s={args:{placeholder:"Type your message here..."},parameters:{docs:{description:{story:"Default textarea with placeholder text."}}}},n={render:r=>e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx("label",{htmlFor:"message",className:"text-sm font-medium",children:"Message"}),e.jsx(c,{...r,id:"message",placeholder:"Type your message here..."})]}),parameters:{docs:{description:{story:"Textarea with a label for better accessibility."}}}},o={args:{placeholder:"This textarea is disabled",disabled:!0},parameters:{docs:{description:{story:"Disabled textarea that cannot be interacted with."}}}},l={render:r=>{const[a,d]=h.useState(""),t=100;return e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx(c,{...r,value:a,onChange:m=>d(m.target.value),maxLength:t,placeholder:"Type your message here..."}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[a.length,"/",t," characters"]})]})},parameters:{docs:{description:{story:"Textarea with a character limit and counter."}}}},i={render:r=>{const[a,d]=h.useState(""),t=10;return e.jsxs("div",{className:"grid w-full gap-2",children:[e.jsx(c,{...r,value:a,onChange:u=>d(u.target.value),minLength:t,maxLength:200,required:!0,placeholder:"Type at least 10 characters...","aria-invalid":a.length>0&&a.length<t}),a.length>0&&a.length<t&&e.jsxs("p",{className:"text-sm text-destructive",children:["Please enter at least ",t," characters"]})]})},parameters:{docs:{description:{story:"Textarea with validation for minimum and maximum length."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default textarea with placeholder text.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="grid w-full gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea {...args} id="message" placeholder="Type your message here..." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with a label for better accessibility.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled textarea that cannot be interacted with.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    const maxLength = 100;
    return <div className="grid w-full gap-2">
        <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} maxLength={maxLength} placeholder="Type your message here..." />
        <p className="text-sm text-muted-foreground">
          {value.length}/{maxLength} characters
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with a character limit and counter.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    const minLength = 10;
    const maxLength = 200;
    return <div className="grid w-full gap-2">
        <Textarea {...args} value={value} onChange={e => setValue(e.target.value)} minLength={minLength} maxLength={maxLength} required placeholder="Type at least 10 characters..." aria-invalid={value.length > 0 && value.length < minLength} />
        {value.length > 0 && value.length < minLength && <p className="text-sm text-destructive">Please enter at least {minLength} characters</p>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with validation for minimum and maximum length.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const b=["Default","WithLabel","Disabled","WithCharacterLimit","WithValidation"];export{s as Default,o as Disabled,l as WithCharacterLimit,n as WithLabel,i as WithValidation,b as __namedExportsOrder,v as default};
