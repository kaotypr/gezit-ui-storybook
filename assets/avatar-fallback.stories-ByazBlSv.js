import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{A as e,a as r}from"./avatar-G7vRqoKR.js";import"./index-BgCQ941z.js";import"./index-B5LVTqq5.js";import"./index-KGCq4IUG.js";import"./index-CyHmRedI.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";const x={title:"UI/Avatar/AvatarFallback",component:e,parameters:{layout:"centered"},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},delayMs:{description:"Delay in milliseconds before showing the fallback.",control:"number"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>a.jsx(r,{children:a.jsx(e,{children:"CN"})});t.parameters={docs:{description:{story:"Basic usage of the AvatarFallback component."}}};const s=()=>a.jsx(r,{children:a.jsx(e,{delayMs:600,children:"CN"})});s.parameters={docs:{description:{story:"AvatarFallback with a delay before showing."}}};const c=()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsx(r,{children:a.jsx(e,{className:"bg-primary/10 text-primary",children:"CN"})}),a.jsx(r,{children:a.jsx(e,{className:"bg-secondary/10 text-secondary",children:"RU"})}),a.jsx(r,{children:a.jsx(e,{className:"bg-destructive/10 text-destructive",children:"VC"})})]});c.parameters={docs:{description:{story:"AvatarFallback with custom styling for different states."}}};const o=()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsx(r,{children:a.jsx(e,{children:"👋"})}),a.jsx(r,{children:a.jsx(e,{children:"🎨"})}),a.jsx(r,{children:a.jsx(e,{children:"🚀"})})]});o.parameters={docs:{description:{story:"AvatarFallback with emoji content."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithDelay"};c.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};o.__docgenInfo={description:"",methods:[],displayName:"WithEmoji"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Avatar>
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Avatar>
    <AvatarFallback delayMs={600}>CN</AvatarFallback>
  </Avatar>`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div className="flex gap-4">
    <Avatar>
      <AvatarFallback className="bg-primary/10 text-primary">CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback className="bg-secondary/10 text-secondary">RU</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback className="bg-destructive/10 text-destructive">VC</AvatarFallback>
    </Avatar>
  </div>`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div className="flex gap-4">
    <Avatar>
      <AvatarFallback>👋</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>🎨</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>🚀</AvatarFallback>
    </Avatar>
  </div>`,...o.parameters?.docs?.source}}};const y=["Default","WithDelay","CustomStyling","WithEmoji"];export{c as CustomStyling,t as Default,s as WithDelay,o as WithEmoji,y as __namedExportsOrder,x as default};
