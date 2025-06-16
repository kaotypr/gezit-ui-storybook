import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-DVhd8Mv9.js";import{D as t,a as r,b as s,c as l,d,e as c}from"./dialog-DHwcDXVB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const S={title:"UI/Dialog/DialogContent",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{forceMount:{description:"Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",control:"boolean"},asChild:{description:"Change the rendered element to the child component, merging their props and behavior.",control:"boolean"},onPointerDownOutside:{description:"Event handler called when the pointer is pressed down outside the content.",action:"onPointerDownOutside"},onInteractOutside:{description:"Event handler called when an interaction (pointer or focus) happens outside the content.",action:"onInteractOutside"},onEscapeKeyDown:{description:"Event handler called when the escape key is pressed.",action:"onEscapeKeyDown"},onCloseAutoFocus:{description:"Event handler called when focus moves to the trigger after closing.",action:"onCloseAutoFocus"},onOpenAutoFocus:{description:"Event handler called when focus moves to the content after opening.",action:"onOpenAutoFocus"}}},i={render:p=>(console.log(p,"args"),e.jsxs(r,{...p,children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(t,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Dialog Content"}),e.jsx(c,{children:"This is the default dialog content with header and description."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Main content goes here."})})]})]}))},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Wide Dialog"})}),e.jsxs(t,{className:"sm:max-w-[600px]",children:[e.jsxs(l,{children:[e.jsx(d,{children:"Wide Dialog"}),e.jsx(c,{children:"This dialog has a custom maximum width."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This dialog is wider than the default."})})]})]})},n={render:()=>e.jsxs(r,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(t,{className:"sm:max-w-[425px] p-8",children:[e.jsxs(l,{children:[e.jsx(d,{children:"Custom Padding"}),e.jsx(c,{children:"This dialog has custom padding applied."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Notice the increased padding around the content."})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    console.log(args, 'args');
    return <Dialog {...args}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Content</DialogTitle>
            <DialogDescription>
              This is the default dialog content with header and description.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>Main content goes here.</p>
          </div>
        </DialogContent>
      </Dialog>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Wide Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Wide Dialog</DialogTitle>
          <DialogDescription>This dialog has a custom maximum width.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>This dialog is wider than the default.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-8">
        <DialogHeader>
          <DialogTitle>Custom Padding</DialogTitle>
          <DialogDescription>This dialog has custom padding applied.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Notice the increased padding around the content.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...n.parameters?.docs?.source}}};const U=["Default","WithCustomWidth","WithCustomPadding"];export{i as Default,n as WithCustomPadding,o as WithCustomWidth,U as __namedExportsOrder,S as default};
