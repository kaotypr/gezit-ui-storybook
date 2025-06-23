import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./index-BgCQ941z.js";import{c as s,a as u,I as o,b as n}from"./input-otp-n0eBJI6M.js";import"./cn-BEHD0UYf.js";import"./minus-Cu6i7ejf.js";import"./createLucideIcon-BROHhCyT.js";const I={title:"UI/InputOTP/InputOTPSeparator",component:s,parameters:{layout:"centered",docs:{description:{component:"A visual separator between groups of slots. Must be used within an InputOTPGroup component."}}},tags:["autodocs"]},e=()=>{const[r,p]=a.useState("");return t.jsx(u,{value:r,onChange:p,maxLength:6,children:t.jsxs(o,{children:[t.jsxs(o,{children:[t.jsx(n,{index:0}),t.jsx(n,{index:1}),t.jsx(n,{index:2})]}),t.jsx(s,{}),t.jsxs(o,{children:[t.jsx(n,{index:3}),t.jsx(n,{index:4}),t.jsx(n,{index:5})]})]})})};e.parameters={docs:{description:{story:"Default separator with minus icon between groups of slots."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP value={value} onChange={setValue} maxLength={6}>
      <InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTPGroup>
    </InputOTP>;
}`,...e.parameters?.docs?.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,I as default};
