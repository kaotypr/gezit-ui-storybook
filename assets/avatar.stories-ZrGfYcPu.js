import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{a as r,b as t,A as s}from"./avatar-B6O0vZc-.js";import"./index-CP2yOfOm.js";import"./index-Dl3xCZ72.js";import"./index-D-X1RFvQ.js";import"./index-COdVRFd9.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";const A={title:"UI/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:`
A component that displays an image or fallback text in a circular container.

This component is built on top of [Radix UI Avatar](https://www.radix-ui.com/primitives/docs/components/avatar).

### Component Parts
- [AvatarImage](?path=/story/ui-avatar-avatarimage--default): Displays the image for the avatar.
- [AvatarFallback](?path=/story/ui-avatar-avatarfallback--default): Displays fallback content (such as initials) when the image cannot be loaded.
        `}}},argTypes:{asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},e=()=>a.jsxs(r,{children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]});e.parameters={docs:{description:{story:"Basic usage of the Avatar component with image and fallback."}}};const c=()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(r,{className:"size-6",children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]}),a.jsxs(r,{className:"size-8",children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]}),a.jsxs(r,{className:"size-10",children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]}),a.jsxs(r,{className:"size-12",children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]})]});c.parameters={docs:{description:{story:"Avatars can be sized using Tailwind CSS size utilities."}}};const n=()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsxs(r,{className:"border-2 border-primary",children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{className:"bg-primary/10 text-primary",children:"CN"})]}),a.jsxs(r,{className:"border-2 border-secondary",children:[a.jsx(t,{src:"https://github.com/radix-ui.png",alt:"@radix-ui"}),a.jsx(s,{className:"bg-secondary/10 text-secondary",children:"RU"})]}),a.jsxs(r,{className:"border-2 border-destructive",children:[a.jsx(t,{src:"https://github.com/vercel.png",alt:"@vercel"}),a.jsx(s,{className:"bg-destructive/10 text-destructive",children:"VC"})]})]});n.parameters={docs:{description:{story:"Custom styling can be applied to both the Avatar and its fallback content."}}};const l=()=>a.jsxs("div",{className:"flex -space-x-4",children:[a.jsxs(r,{className:"border-2 border-background",children:[a.jsx(t,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(s,{children:"CN"})]}),a.jsxs(r,{className:"border-2 border-background",children:[a.jsx(t,{src:"https://github.com/radix-ui.png",alt:"@radix-ui"}),a.jsx(s,{children:"RU"})]}),a.jsxs(r,{className:"border-2 border-background",children:[a.jsx(t,{src:"https://github.com/vercel.png",alt:"@vercel"}),a.jsx(s,{children:"VC"})]}),a.jsx(r,{className:"border-2 border-background",children:a.jsx(s,{children:"+2"})})]});l.parameters={docs:{description:{story:"Avatars can be grouped together with overlapping effect using negative margin."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"DifferentSizes"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};l.__docgenInfo={description:"",methods:[],displayName:"Grouped"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div className="flex items-center gap-4">
    <Avatar className="size-6">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="size-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="size-10">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="size-12">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <div className="flex gap-4">
    <Avatar className="border-2 border-primary">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="bg-primary/10 text-primary">CN</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-secondary">
      <AvatarImage src="https://github.com/radix-ui.png" alt="@radix-ui" />
      <AvatarFallback className="bg-secondary/10 text-secondary">RU</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-destructive">
      <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
      <AvatarFallback className="bg-destructive/10 text-destructive">VC</AvatarFallback>
    </Avatar>
  </div>`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div className="flex -space-x-4">
    <Avatar className="border-2 border-background">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarImage src="https://github.com/radix-ui.png" alt="@radix-ui" />
      <AvatarFallback>RU</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
      <AvatarFallback>VC</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarFallback>+2</AvatarFallback>
    </Avatar>
  </div>`,...l.parameters?.docs?.source}}};const x=["Default","DifferentSizes","CustomStyling","Grouped"];export{n as CustomStyling,e as Default,c as DifferentSizes,l as Grouped,x as __namedExportsOrder,A as default};
