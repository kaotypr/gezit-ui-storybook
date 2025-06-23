import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{c as n,a as o,b as s,D as l,d,e as c}from"./dialog-F5pVz2Qt.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const I={title:"UI/Dialog/DialogHeader",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(l,{children:[e.jsxs(n,{children:[e.jsx(d,{children:"Dialog Title"}),e.jsx(c,{children:"This is a description of the dialog content."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Main content goes here."})})]})]})},r={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(l,{children:[e.jsx(n,{children:e.jsx(d,{children:"Simple Header"})}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This dialog has a header without a description."})})]})]})},t={render:()=>e.jsxs(o,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(l,{children:[e.jsxs(n,{className:"text-center",children:[e.jsx(d,{children:"Centered Header"}),e.jsx(c,{children:"This header is center-aligned instead of the default left alignment."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Notice the centered text in the header."})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
