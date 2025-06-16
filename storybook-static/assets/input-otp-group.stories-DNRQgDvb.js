import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{I as r,a as p,b as e}from"./input-otp-CzlBmD5O.js";import"./cn-BEHD0UYf.js";import"./minus-RqnUbI5q.js";import"./createLucideIcon-CAcKuqHj.js";const g={title:"UI/InputOTP/InputOTPGroup",component:r,parameters:{layout:"centered",docs:{description:{component:"Groups input slots together. Must be used within an InputOTP component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the group"}},tags:["autodocs"]},n=()=>{const[o,a]=u.useState("");return t.jsx(p,{value:o,onChange:a,maxLength:4,children:t.jsxs(r,{children:[t.jsx(e,{index:0}),t.jsx(e,{index:1}),t.jsx(e,{index:2}),t.jsx(e,{index:3})]})})};n.parameters={docs:{description:{story:"Basic group of input slots with default styling."}}};const s=()=>{const[o,a]=u.useState("");return t.jsx(p,{value:o,onChange:a,maxLength:4,children:t.jsxs(r,{className:"gap-4 p-4 bg-muted rounded-lg",children:[t.jsx(e,{index:0}),t.jsx(e,{index:1}),t.jsx(e,{index:2}),t.jsx(e,{index:3})]})})};s.parameters={docs:{description:{story:"Group with custom spacing, background color, and rounded corners."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP value={value} onChange={setValue} maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP value={value} onChange={setValue} maxLength={4}>
      <InputOTPGroup className="gap-4 p-4 bg-muted rounded-lg">
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>;
}`,...s.parameters?.docs?.source}}};const I=["Default","WithCustomStyling"];export{n as Default,s as WithCustomStyling,I as __namedExportsOrder,g as default};
