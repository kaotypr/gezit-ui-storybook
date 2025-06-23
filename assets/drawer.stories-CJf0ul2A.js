import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-CP2yOfOm.js";import{B as a}from"./button-mvJUpYu0.js";import{a as n,b as i,D as d,d as u,e as m,c as w,f as g,g as f}from"./drawer-BlWdITYJ.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const P={title:"UI/Drawer",component:n,parameters:{layout:"centered",docs:{description:{component:`A dialog that slides in from the edge of the screen, providing additional content or actions without leaving the current context.

This component is built on top of [Vaul](https://vaul.emilkowal.ski/).

### Component Parts
- [DrawerTrigger](?path=/story/ui-drawer-drawertrigger--default): The button that triggers the drawer to open.
- [DrawerContent](?path=/story/ui-drawer-drawercontent--default): The container that holds the drawer's content.
- [DrawerHeader](?path=/story/ui-drawer-drawerheader--default): The header section of the drawer.
- [DrawerFooter](?path=/story/ui-drawer-drawerfooter--default): The footer section of the drawer.
- [DrawerTitle](?path=/story/ui-drawer-drawertitle--default): The title element of the drawer.
- [DrawerDescription](?path=/story/ui-drawer-drawerdescription--default): The description text of the drawer.`}}},argTypes:{direction:{control:"select",options:["top","bottom","left","right"],description:"The direction the drawer should slide in from",table:{type:{summary:'"top" | "bottom" | "left" | "right"'},defaultValue:{summary:"bottom"}}},shouldScaleBackground:{control:"boolean",description:"Whether the background should scale when the drawer is open",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},modal:{control:"boolean",description:"Whether the drawer should behave like a modal",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},open:{control:"boolean",description:"Controlled open state of the drawer",table:{type:{summary:"boolean"}}},onOpenChange:{action:"onOpenChange",description:"Event handler called when the open state changes",table:{type:{summary:"(open: boolean) => void"}}}},tags:["autodocs"]},l=()=>e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsx(m,{children:"Account Settings"}),e.jsx(w,{children:"Make changes to your account settings here. Click save when you're done."})]}),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"Your account settings content goes here..."})}),e.jsxs(g,{children:[e.jsx(a,{children:"Save changes"}),e.jsx(f,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Cancel"})})]})]}),r=o=>e.jsxs(n,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Drawer"})}),e.jsx(d,{children:e.jsx(l,{})})]});r.args={direction:"bottom",modal:!0,shouldScaleBackground:!1};r.parameters={docs:{description:{story:"An uncontrolled drawer that opens from the bottom."}}};const t=o=>{const[c,p]=h.useState(!1);return e.jsxs(n,{...o,open:c,onOpenChange:s=>{p(s),o.onOpenChange?.(s)},children:[e.jsx(i,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Controlled Drawer"})}),e.jsx(d,{children:e.jsx(l,{})})]})};t.args={...r.args};t.parameters={docs:{description:{story:"A controlled drawer example using React state."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Controlled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer {...args}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DefaultContent />
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <Drawer {...args} open={open} onOpenChange={isOpen => {
    setOpen(isOpen);
    args.onOpenChange?.(isOpen);
  }}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Controlled Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DefaultContent />
      </DrawerContent>
    </Drawer>;
}`,...t.parameters?.docs?.source}}};const U=["Default","Controlled"];export{t as Controlled,r as Default,U as __namedExportsOrder,P as default};
