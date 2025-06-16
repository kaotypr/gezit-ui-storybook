import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{b as o,a as p,I as i}from"./input-otp-CzlBmD5O.js";import"./cn-BEHD0UYf.js";import"./minus-RqnUbI5q.js";import"./createLucideIcon-CAcKuqHj.js";const I={title:"UI/InputOTP/InputOTPSlot",component:o,parameters:{layout:"centered",docs:{description:{component:"Individual input slot for each character. Must be used within an InputOTPGroup component."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to style the slot"}},tags:["autodocs"]},t=()=>{const[r,a]=u.useState("");return e.jsx(p,{value:r,onChange:a,maxLength:1,children:e.jsx(i,{children:e.jsx(o,{index:0})})})};t.parameters={docs:{description:{story:"A single input slot with default styling."}}};const s=()=>{const[r,a]=u.useState("");return e.jsx(p,{value:r,onChange:a,maxLength:1,children:e.jsx(i,{children:e.jsx(o,{index:0,className:"w-12 h-12 text-lg border-2 border-primary"})})})};s.parameters={docs:{description:{story:"Input slot with custom size, border, and text styling."}}};const n=()=>{const[r,a]=u.useState("1");return e.jsx(p,{value:r,onChange:a,maxLength:1,children:e.jsx(i,{children:e.jsx(o,{index:0})})})};n.parameters={docs:{description:{story:"Input slot in its active/focused state."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};n.__docgenInfo={description:"",methods:[],displayName:"Active"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP value={value} onChange={setValue} maxLength={1}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
      </InputOTPGroup>
    </InputOTP>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP value={value} onChange={setValue} maxLength={1}>
      <InputOTPGroup>
        <InputOTPSlot index={0} className="w-12 h-12 text-lg border-2 border-primary" />
      </InputOTPGroup>
    </InputOTP>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('1');
  return <InputOTP value={value} onChange={setValue} maxLength={1}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
      </InputOTPGroup>
    </InputOTP>;
}`,...n.parameters?.docs?.source}}};const g=["Default","WithCustomStyling","Active"];export{n as Active,t as Default,s as WithCustomStyling,g as __namedExportsOrder,I as default};
