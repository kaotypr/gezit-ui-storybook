import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as e}from"./button-DVhd8Mv9.js";import{f as a,a as r,b as s,D as l,c as g,d as c,e as d}from"./dialog-DHwcDXVB.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";const _={title:"UI/Dialog/DialogFooter",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={render:()=>o.jsxs(r,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(g,{children:[o.jsx(c,{children:"Dialog with Footer"}),o.jsx(d,{children:"This dialog has a footer with action buttons."})]}),o.jsx("div",{className:"py-4",children:o.jsx("p",{children:"Main content goes here."})}),o.jsxs(a,{children:[o.jsx(e,{variant:"outline",children:"Cancel"}),o.jsx(e,{children:"Save changes"})]})]})]})},n={render:()=>o.jsxs(r,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(g,{children:[o.jsx(c,{children:"Simple Footer"}),o.jsx(d,{children:"This dialog has a footer with a single button."})]}),o.jsx("div",{className:"py-4",children:o.jsx("p",{children:"Main content goes here."})}),o.jsx(a,{children:o.jsx(e,{children:"Close"})})]})]})},t={render:()=>o.jsxs(r,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(g,{children:[o.jsx(c,{children:"Custom Footer"}),o.jsx(d,{children:"This dialog has a footer with custom alignment."})]}),o.jsx("div",{className:"py-4",children:o.jsx("p",{children:"Main content goes here."})}),o.jsxs(a,{className:"justify-start gap-2",children:[o.jsx(e,{variant:"outline",children:"Cancel"}),o.jsx(e,{variant:"ghost",children:"Reset"}),o.jsx(e,{children:"Save changes"})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog with Footer</DialogTitle>
          <DialogDescription>This dialog has a footer with action buttons.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Main content goes here.</p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Simple Footer</DialogTitle>
          <DialogDescription>This dialog has a footer with a single button.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Main content goes here.</p>
        </div>
        <DialogFooter>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Custom Footer</DialogTitle>
          <DialogDescription>This dialog has a footer with custom alignment.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Main content goes here.</p>
        </div>
        <DialogFooter className="justify-start gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="ghost">Reset</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...t.parameters?.docs?.source}}};const I=["Default","SingleButton","WithCustomAlignment"];export{i as Default,n as SingleButton,t as WithCustomAlignment,I as __namedExportsOrder,_ as default};
