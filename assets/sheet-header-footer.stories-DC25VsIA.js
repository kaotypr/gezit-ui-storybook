import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as t}from"./button-B_EVNb5l.js";import{c as a,a as d,b as h,S as c,d as l,e as m,f as u}from"./sheet-DJUdPzdr.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const P={title:"UI/Sheet/SheetHeader & Footer",component:a,parameters:{layout:"centered",docs:{description:{component:`
Header and Footer components for the Sheet dialog.

- SheetHeader: Container for the sheet title and description
- SheetFooter: Container for the sheet actions, typically buttons

Both components provide proper spacing and layout for their respective areas.
`}}},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},n=()=>e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Default Layout"}),e.jsx(m,{children:"A standard header with title and description."})]}),e.jsx("div",{className:"py-4",children:"Content goes here"}),e.jsx(u,{children:e.jsx(t,{children:"Save Changes"})})]})]});n.parameters={docs:{description:{story:"Standard layout with header and footer."}}};const r=()=>e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(c,{children:[e.jsxs(a,{className:"bg-muted/50 p-6 rounded-lg",children:[e.jsx(l,{className:"text-xl text-primary",children:"Custom Styled Header"}),e.jsx(m,{className:"text-muted-foreground/70",children:"Header with custom background and text styling."})]}),e.jsx("div",{className:"py-4",children:"Content goes here"}),e.jsx(u,{children:e.jsx(t,{children:"Save Changes"})})]})]});r.parameters={docs:{description:{story:"Header with custom styling using Tailwind classes."}}};const o=()=>e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Multiple Actions"}),e.jsx(m,{children:"A footer with multiple action buttons."})]}),e.jsx("div",{className:"py-4",children:"Content goes here"}),e.jsxs(u,{className:"flex-row gap-2 sm:justify-end",children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{variant:"ghost",children:"Preview"}),e.jsx(t,{children:"Save"})]})]})]});o.parameters={docs:{description:{story:"Footer with multiple action buttons."}}};const s=()=>e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(c,{children:[e.jsxs(a,{className:"flex-row justify-between items-center",children:[e.jsxs("div",{children:[e.jsx(l,{children:"Header with Actions"}),e.jsx(m,{children:"A header with additional action buttons."})]}),e.jsx(t,{variant:"outline",size:"icon",children:"⚙️"})]}),e.jsx("div",{className:"py-4",children:"Content goes here"}),e.jsx(u,{children:e.jsx(t,{children:"Save Changes"})})]})]});s.parameters={docs:{description:{story:"Header with additional action buttons alongside the title."}}};const i=()=>e.jsxs(d,{children:[e.jsx(h,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Sheet"})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Sticky Footer"}),e.jsx(m,{children:"A footer that sticks to the bottom."})]}),e.jsx("div",{className:"flex-1 overflow-auto py-4",children:Array.from({length:20},(S,p)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("h3",{className:"text-sm font-medium",children:["Section ",p+1]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},p))}),e.jsx(u,{className:"sticky bottom-0 bg-background border-t",children:e.jsx(t,{children:"Save Changes"})})]})]});i.parameters={docs:{description:{story:"Footer that sticks to the bottom when content scrolls."}}};n.__docgenInfo={description:"",methods:[],displayName:"DefaultLayout"};r.__docgenInfo={description:"",methods:[],displayName:"CustomHeaderStyling"};o.__docgenInfo={description:"",methods:[],displayName:"MultipleFooterButtons"};s.__docgenInfo={description:"",methods:[],displayName:"HeaderWithActions"};i.__docgenInfo={description:"",methods:[],displayName:"StickyFooter"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Default Layout</SheetTitle>
          <SheetDescription>A standard header with title and description.</SheetDescription>
        </SheetHeader>
        <div className="py-4">Content goes here</div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="bg-muted/50 p-6 rounded-lg">
          <SheetTitle className="text-xl text-primary">Custom Styled Header</SheetTitle>
          <SheetDescription className="text-muted-foreground/70">
            Header with custom background and text styling.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">Content goes here</div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Multiple Actions</SheetTitle>
          <SheetDescription>A footer with multiple action buttons.</SheetDescription>
        </SheetHeader>
        <div className="py-4">Content goes here</div>
        <SheetFooter className="flex-row gap-2 sm:justify-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="ghost">Preview</Button>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex-row justify-between items-center">
          <div>
            <SheetTitle>Header with Actions</SheetTitle>
            <SheetDescription>A header with additional action buttons.</SheetDescription>
          </div>
          <Button variant="outline" size="icon">
            ⚙️
          </Button>
        </SheetHeader>
        <div className="py-4">Content goes here</div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sticky Footer</SheetTitle>
          <SheetDescription>A footer that sticks to the bottom.</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-4">
          {Array.from({
          length: 20
        }, (_, i) => <div key={i} className="mb-4">
              <h3 className="text-sm font-medium">Section {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>)}
        </div>
        <SheetFooter className="sticky bottom-0 bg-background border-t">
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...i.parameters?.docs?.source}}};const R=["DefaultLayout","CustomHeaderStyling","MultipleFooterButtons","HeaderWithActions","StickyFooter"];export{r as CustomHeaderStyling,n as DefaultLayout,s as HeaderWithActions,o as MultipleFooterButtons,i as StickyFooter,R as __namedExportsOrder,P as default};
