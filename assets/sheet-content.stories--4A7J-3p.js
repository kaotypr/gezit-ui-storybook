import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as p}from"./button-B_EVNb5l.js";import{S as m,a as d,b as c}from"./sheet-DJUdPzdr.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const A={title:"UI/Sheet/SheetContent",component:m,parameters:{layout:"centered",docs:{description:{component:`
The main content area of the sheet. Contains the content to be rendered when the sheet is open.

This component is built on top of [Radix UI Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content).
`}}},argTypes:{side:{description:"The side of the screen the sheet appears from",control:"select",options:["top","right","bottom","left"],defaultValue:"right"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=h=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Open Sheet"})}),e.jsx(m,{...h,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Sheet Content"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is an example of the SheetContent component."})]})})]}),t=i.bind({});t.args={side:"right"};t.parameters={docs:{description:{story:"Default SheetContent sliding from the right side."}}};const n=i.bind({});n.args={side:"left"};n.parameters={docs:{description:{story:"SheetContent sliding from the left side."}}};const o=i.bind({});o.args={side:"top",className:"h-[40vh]"};o.parameters={docs:{description:{story:"SheetContent sliding from the top with custom height."}}};const s=i.bind({});s.args={side:"bottom",className:"h-[40vh]"};s.parameters={docs:{description:{story:"SheetContent sliding from the bottom with custom height."}}};const r=i.bind({});r.args={side:"right",className:"sm:max-w-[500px]"};r.parameters={docs:{description:{story:"SheetContent with custom width using Tailwind classes."}}};const a=i.bind({});a.args={side:"right",className:"bg-muted/50 backdrop-blur-sm border-l-2 border-primary"};a.parameters={docs:{description:{story:"SheetContent with custom styling using Tailwind classes."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Sheet Content</h2>
          <p className="text-sm text-muted-foreground">
            This is an example of the SheetContent component.
          </p>
        </div>
      </SheetContent>
    </Sheet>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Sheet Content</h2>
          <p className="text-sm text-muted-foreground">
            This is an example of the SheetContent component.
          </p>
        </div>
      </SheetContent>
    </Sheet>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Sheet Content</h2>
          <p className="text-sm text-muted-foreground">
            This is an example of the SheetContent component.
          </p>
        </div>
      </SheetContent>
    </Sheet>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Sheet Content</h2>
          <p className="text-sm text-muted-foreground">
            This is an example of the SheetContent component.
          </p>
        </div>
      </SheetContent>
    </Sheet>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Sheet Content</h2>
          <p className="text-sm text-muted-foreground">
            This is an example of the SheetContent component.
          </p>
        </div>
      </SheetContent>
    </Sheet>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Sheet Content</h2>
          <p className="text-sm text-muted-foreground">
            This is an example of the SheetContent component.
          </p>
        </div>
      </SheetContent>
    </Sheet>;
}`,...a.parameters?.docs?.source}}};const V=["Default","LeftSide","TopSide","BottomSide","CustomWidth","CustomStyling"];export{s as BottomSide,a as CustomStyling,r as CustomWidth,t as Default,n as LeftSide,o as TopSide,V as __namedExportsOrder,A as default};
