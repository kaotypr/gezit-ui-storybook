import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BgCQ941z.js";import{c as I}from"./cn-BEHD0UYf.js";import{a as o,I as r,b as t,c as P}from"./input-otp-n0eBJI6M.js";import"./minus-Cu6i7ejf.js";import"./createLucideIcon-BROHhCyT.js";const f={title:"UI/InputOTP",component:o,parameters:{layout:"centered",docs:{description:{component:`A one-time password input component for entering codes and pin numbers.

This component is built on top of the [input-otp](https://www.npmjs.com/package/input-otp) package.

### Component Parts
- [InputOTPGroup](?path=/story/ui-inputotp-inputotpgroup--default): Groups input slots together.
- [InputOTPSlot](?path=/story/ui-inputotp-inputotpslot--default): Individual input slot for each character.
- [InputOTPSeparator](?path=/story/ui-inputotp-inputotpseparator--default): Visual separator between groups of slots.`}}},argTypes:{maxLength:{control:{type:"number"},description:"The maximum number of characters allowed",table:{type:{summary:"number"}}},disabled:{control:{type:"boolean"},description:"Whether the input is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},containerClassName:{control:"text",description:"Additional CSS classes for the container"}},tags:["autodocs"]},s=()=>{const[n,a]=i.useState("");return e.jsx(o,{maxLength:6,value:n,onChange:a,children:e.jsxs(r,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})})};s.parameters={docs:{description:{story:"A basic OTP input with 6 slots."}}};const u=()=>{const[n,a]=i.useState("");return e.jsx(o,{maxLength:6,value:n,onChange:a,children:e.jsxs(r,{children:[e.jsxs(r,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]}),e.jsx(P,{}),e.jsxs(r,{children:[e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})]})})};u.parameters={docs:{description:{story:"OTP input with a separator between groups of slots."}}};const p=()=>{const[n,a]=i.useState("123456");return e.jsx(o,{maxLength:6,value:n,onChange:a,disabled:!0,children:e.jsxs(r,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})})};p.parameters={docs:{description:{story:"A disabled OTP input with pre-filled values."}}};const d=()=>{const[n,a]=i.useState("");return e.jsx(o,{maxLength:6,value:n,onChange:a,children:e.jsxs(r,{children:[e.jsx(t,{index:0,"aria-invalid":!0}),e.jsx(t,{index:1,"aria-invalid":!0}),e.jsx(t,{index:2,"aria-invalid":!0}),e.jsx(t,{index:3,"aria-invalid":!0}),e.jsx(t,{index:4,"aria-invalid":!0}),e.jsx(t,{index:5,"aria-invalid":!0})]})})};d.parameters={docs:{description:{story:"OTP input showing error state styling."}}};const l=()=>{const[n,a]=i.useState("");return e.jsx(o,{maxLength:4,value:n,onChange:a,children:e.jsxs(r,{children:[e.jsx(t,{index:0,className:"[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]"}),e.jsx(t,{index:1,className:"[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]"}),e.jsx(t,{index:2,className:"[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]"}),e.jsx(t,{index:3,className:"[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]"})]})})};l.parameters={docs:{description:{story:"OTP input with customized caret animation styling."}}};const c=()=>{const[n,a]=i.useState("");return e.jsxs(o,{maxLength:9,value:n,onChange:a,children:[e.jsxs(r,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2})]}),e.jsx(P,{className:"text-primary",children:"•"}),e.jsxs(r,{children:[e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]}),e.jsx(P,{className:"text-primary",children:"•"}),e.jsxs(r,{children:[e.jsx(t,{index:6}),e.jsx(t,{index:7}),e.jsx(t,{index:8})]})]})};c.parameters={docs:{description:{story:"OTP input with multiple custom separators."}}};const m=()=>{const[n,a]=i.useState(""),h=i.useRef(null);return e.jsx("form",{ref:h,onSubmit:T=>{T.preventDefault(),alert(`Submitted OTP: ${n}`)},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{maxLength:6,value:n,onChange:a,onComplete:()=>h.current?.requestSubmit(),children:e.jsxs(r,{children:[e.jsx(t,{index:0}),e.jsx(t,{index:1}),e.jsx(t,{index:2}),e.jsx(t,{index:3}),e.jsx(t,{index:4}),e.jsx(t,{index:5})]})}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",children:"Verify OTP"})]})})};m.parameters={docs:{description:{story:"OTP input integrated with a form, showing auto-submission on completion."}}};const x=()=>{const[n,a]=i.useState("");return e.jsx(o,{maxLength:6,value:n,onChange:a,placeholder:"------",children:e.jsx(r,{children:[0,1,2,3,4,5].map(h=>e.jsx(t,{index:h,className:I("relative w-10 h-14 text-[2rem]","flex items-center justify-center","transition-all duration-300","border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md","group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20","outline-0 outline-accent-foreground/20","[&_div.animate-caret-blink]:bg-primary","[&_div.animate-caret-blink]:h-6","[&_div.animate-caret-blink]:w-[2px]")},h))})})};x.parameters={docs:{description:{story:"OTP input with custom placeholder and caret animation."}}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"WithSeparator"};p.__docgenInfo={description:"",methods:[],displayName:"Disabled"};d.__docgenInfo={description:"",methods:[],displayName:"WithError"};l.__docgenInfo={description:"",methods:[],displayName:"WithCustomCaret"};c.__docgenInfo={description:"",methods:[],displayName:"WithMultipleSeparators"};m.__docgenInfo={description:"",methods:[],displayName:"WithFormIntegration"};x.__docgenInfo={description:"",methods:[],displayName:"WithCustomPlaceholder"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>;
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP maxLength={6} value={value} onChange={setValue}>
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('123456');
  return <InputOTP maxLength={6} value={value} onChange={setValue} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} aria-invalid={true} />
        <InputOTPSlot index={1} aria-invalid={true} />
        <InputOTPSlot index={2} aria-invalid={true} />
        <InputOTPSlot index={3} aria-invalid={true} />
        <InputOTPSlot index={4} aria-invalid={true} />
        <InputOTPSlot index={5} aria-invalid={true} />
      </InputOTPGroup>
    </InputOTP>;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP maxLength={4} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} className="[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]" />
        <InputOTPSlot index={1} className="[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]" />
        <InputOTPSlot index={2} className="[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]" />
        <InputOTPSlot index={3} className="[&_div.animate-caret-blink]:bg-primary [&_div.animate-caret-blink]:h-5 [&_div.animate-caret-blink]:w-[2px]" />
      </InputOTPGroup>
    </InputOTP>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP maxLength={9} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator className="text-primary">•</InputOTPSeparator>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
      <InputOTPSeparator className="text-primary">•</InputOTPSeparator>
      <InputOTPGroup>
        <InputOTPSlot index={6} />
        <InputOTPSlot index={7} />
        <InputOTPSlot index={8} />
      </InputOTPGroup>
    </InputOTP>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  return <form ref={formRef} onSubmit={e => {
    e.preventDefault();
    alert(\`Submitted OTP: \${value}\`);
  }}>
      <div className="space-y-4">
        <InputOTP maxLength={6} value={value} onChange={setValue} onComplete={() => formRef.current?.requestSubmit()}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Verify OTP
        </button>
      </div>
    </form>;
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <InputOTP maxLength={6} value={value} onChange={setValue} placeholder="------">
      <InputOTPGroup>
        {[0, 1, 2, 3, 4, 5].map(index => <InputOTPSlot key={index} index={index} className={cn('relative w-10 h-14 text-[2rem]', 'flex items-center justify-center', 'transition-all duration-300', 'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md', 'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20', 'outline-0 outline-accent-foreground/20', '[&_div.animate-caret-blink]:bg-primary', '[&_div.animate-caret-blink]:h-6', '[&_div.animate-caret-blink]:w-[2px]')} />)}
      </InputOTPGroup>
    </InputOTP>;
}`,...x.parameters?.docs?.source}}};const y=["Default","WithSeparator","Disabled","WithError","WithCustomCaret","WithMultipleSeparators","WithFormIntegration","WithCustomPlaceholder"];export{s as Default,p as Disabled,l as WithCustomCaret,x as WithCustomPlaceholder,d as WithError,m as WithFormIntegration,c as WithMultipleSeparators,u as WithSeparator,y as __namedExportsOrder,f as default};
