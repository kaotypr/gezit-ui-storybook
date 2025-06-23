import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-B_EVNb5l.js";import{d as o,a as l,b as h,S as c,c as d,e as p}from"./sheet-DJUdPzdr.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const E={title:"UI/Sheet/SheetTitle & Description",component:o,parameters:{layout:"centered",docs:{description:{component:`
Title and Description components for the Sheet dialog.

- SheetTitle: The title of the sheet
- SheetDescription: The description of the sheet

Both components are built on top of Radix UI Dialog primitives and provide proper ARIA labels.
`}}},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Sheet"})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Default Title"}),e.jsx(p,{children:"This is a default description for the sheet."})]})})]});t.parameters={docs:{description:{story:"Default styling for title and description."}}};const i=()=>e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Sheet"})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(o,{className:"text-2xl font-bold text-primary",children:"Custom Title"}),e.jsx(p,{children:"Default description styling"})]})})]});i.parameters={docs:{description:{story:"Custom styled title using Tailwind classes."}}};const n=()=>e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Sheet"})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Regular Title"}),e.jsx(p,{className:"text-primary/70 italic",children:"A custom styled description with different color and style."})]})})]});n.parameters={docs:{description:{story:"Custom styled description using Tailwind classes."}}};const r=()=>e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Sheet"})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsxs(o,{className:"flex items-center gap-2",children:[e.jsx("span",{className:"size-4 rounded-full bg-primary"}),"Title with Icon"]}),e.jsxs(p,{children:["Description with ",e.jsx("strong",{children:"bold"})," and ",e.jsx("em",{children:"italic"})," text.",e.jsx("a",{href:"/docs/sheet",className:"text-primary hover:underline ml-1",children:"Learn more"})]})]})})]});r.parameters={docs:{description:{story:"Title and description with HTML content."}}};const s=()=>e.jsxs(l,{children:[e.jsx(h,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Sheet"})}),e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Multiline Title That Wraps to Multiple Lines When It Gets Too Long"}),e.jsx(p,{className:"whitespace-pre-line",children:`This is a multiline description.
            It demonstrates how the description handles multiple lines of text.
            Each line is properly spaced and aligned.`})]})})]});s.parameters={docs:{description:{story:"Title and description with multiple lines of text."}}};t.__docgenInfo={description:"",methods:[],displayName:"DefaultStyling"};i.__docgenInfo={description:"",methods:[],displayName:"CustomTitleStyling"};n.__docgenInfo={description:"",methods:[],displayName:"CustomDescriptionStyling"};r.__docgenInfo={description:"",methods:[],displayName:"WithHTML"};s.__docgenInfo={description:"",methods:[],displayName:"MultilineDescription"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Default Title</SheetTitle>
          <SheetDescription>This is a default description for the sheet.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-primary">Custom Title</SheetTitle>
          <SheetDescription>Default description styling</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Regular Title</SheetTitle>
          <SheetDescription className="text-primary/70 italic">
            A custom styled description with different color and style.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <span className="size-4 rounded-full bg-primary" />
            Title with Icon
          </SheetTitle>
          <SheetDescription>
            Description with <strong>bold</strong> and <em>italic</em> text.
            <a href="/docs/sheet" className="text-primary hover:underline ml-1">
              Learn more
            </a>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Multiline Title That Wraps to Multiple Lines When It Gets Too Long
          </SheetTitle>
          <SheetDescription className="whitespace-pre-line">
            {\`This is a multiline description.
            It demonstrates how the description handles multiple lines of text.
            Each line is properly spaced and aligned.\`}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>;
}`,...s.parameters?.docs?.source}}};const z=["DefaultStyling","CustomTitleStyling","CustomDescriptionStyling","WithHTML","MultilineDescription"];export{n as CustomDescriptionStyling,i as CustomTitleStyling,t as DefaultStyling,s as MultilineDescription,r as WithHTML,z as __namedExportsOrder,E as default};
