import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-DVhd8Mv9.js";import{c as n,a as o,b as s,D as l,d,e as c}from"./dialog-DHwcDXVB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const I={title:"UI/Dialog/DialogHeader",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(l,{children:[e.jsxs(n,{children:[e.jsx(d,{children:"Dialog Title"}),e.jsx(c,{children:"This is a description of the dialog content."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Main content goes here."})})]})]})},r={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(l,{children:[e.jsx(n,{children:e.jsx(d,{children:"Simple Header"})}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This dialog has a header without a description."})})]})]})},t={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(l,{children:[e.jsxs(n,{className:"text-center",children:[e.jsx(d,{children:"Centered Header"}),e.jsx(c,{children:"This header is center-aligned instead of the default left alignment."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Notice the centered text in the header."})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a description of the dialog content.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Main content goes here.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Simple Header</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>This dialog has a header without a description.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-center">
          <DialogTitle>Centered Header</DialogTitle>
          <DialogDescription>
            This header is center-aligned instead of the default left alignment.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Notice the centered text in the header.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...t.parameters?.docs?.source}}};const R=["Default","WithoutDescription","WithCustomAlignment"];export{i as Default,t as WithCustomAlignment,r as WithoutDescription,R as __namedExportsOrder,I as default};
