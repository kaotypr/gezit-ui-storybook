import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as e}from"./button-B_EVNb5l.js";import{f as a,a as r,b as s,D as l,c as g,d as c,e as d}from"./dialog-F5pVz2Qt.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const _={title:"UI/Dialog/DialogFooter",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},i={render:()=>o.jsxs(r,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(g,{children:[o.jsx(c,{children:"Dialog with Footer"}),o.jsx(d,{children:"This dialog has a footer with action buttons."})]}),o.jsx("div",{className:"py-4",children:o.jsx("p",{children:"Main content goes here."})}),o.jsxs(a,{children:[o.jsx(e,{variant:"outline",children:"Cancel"}),o.jsx(e,{children:"Save changes"})]})]})]})},n={render:()=>o.jsxs(r,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(g,{children:[o.jsx(c,{children:"Simple Footer"}),o.jsx(d,{children:"This dialog has a footer with a single button."})]}),o.jsx("div",{className:"py-4",children:o.jsx("p",{children:"Main content goes here."})}),o.jsx(a,{children:o.jsx(e,{children:"Close"})})]})]})},t={render:()=>o.jsxs(r,{children:[o.jsx(s,{asChild:!0,children:o.jsx(e,{children:"Open Dialog"})}),o.jsxs(l,{children:[o.jsxs(g,{children:[o.jsx(c,{children:"Custom Footer"}),o.jsx(d,{children:"This dialog has a footer with custom alignment."})]}),o.jsx("div",{className:"py-4",children:o.jsx("p",{children:"Main content goes here."})}),o.jsxs(a,{className:"justify-start gap-2",children:[o.jsx(e,{variant:"outline",children:"Cancel"}),o.jsx(e,{variant:"ghost",children:"Reset"}),o.jsx(e,{children:"Save changes"})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
