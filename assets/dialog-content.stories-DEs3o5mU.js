import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{D as t,a as r,b as s,c as l,d,e as c}from"./dialog-F5pVz2Qt.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const S={title:"UI/Dialog/DialogContent",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{forceMount:{description:"Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",control:"boolean"},asChild:{description:"Change the rendered element to the child component, merging their props and behavior.",control:"boolean"},onPointerDownOutside:{description:"Event handler called when the pointer is pressed down outside the content.",action:"onPointerDownOutside"},onInteractOutside:{description:"Event handler called when an interaction (pointer or focus) happens outside the content.",action:"onInteractOutside"},onEscapeKeyDown:{description:"Event handler called when the escape key is pressed.",action:"onEscapeKeyDown"},onCloseAutoFocus:{description:"Event handler called when focus moves to the trigger after closing.",action:"onCloseAutoFocus"},onOpenAutoFocus:{description:"Event handler called when focus moves to the content after opening.",action:"onOpenAutoFocus"}}},i={render:p=>(console.log(p,"args"),e.jsxs(r,{...p,children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(t,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Dialog Content"}),e.jsx(c,{children:"This is the default dialog content with header and description."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Main content goes here."})})]})]}))},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Wide Dialog"})}),e.jsxs(t,{className:"sm:max-w-[600px]",children:[e.jsxs(l,{children:[e.jsx(d,{children:"Wide Dialog"}),e.jsx(c,{children:"This dialog has a custom maximum width."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This dialog is wider than the default."})})]})]})},n={render:()=>e.jsxs(r,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(t,{className:"sm:max-w-[425px] p-8",children:[e.jsxs(l,{children:[e.jsx(d,{children:"Custom Padding"}),e.jsx(c,{children:"This dialog has custom padding applied."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Notice the increased padding around the content."})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
