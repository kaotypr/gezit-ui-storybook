import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as a}from"./separator-BhpeBf-d.js";import"./index-CP2yOfOm.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";const f={title:"UI/Separator",component:a,parameters:{layout:"centered",docs:{description:{component:`
A visual divider between content.

This component is built on top of [Radix UI Separator](https://www.radix-ui.com/primitives/docs/components/separator).

### Accessibility
- The separator has a \`role="separator"\` by default
- When \`decorative={true}\`, the role is changed to \`role="none"\`
`}}},argTypes:{orientation:{description:"The orientation of the separator",control:"select",options:["horizontal","vertical"],defaultValue:"horizontal"},decorative:{description:"Whether the separator is purely decorative or semantically meaningful",control:"boolean",defaultValue:!0},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},s=d=>e.jsxs("div",{className:"w-full max-w-[60rem] space-y-4",children:[e.jsx("div",{children:"Content Above"}),e.jsx(a,{...d}),e.jsx("div",{children:"Content Below"})]});s.parameters={docs:{description:{story:"Basic usage of the Separator component with horizontal orientation."}}};const t=()=>e.jsxs("div",{className:"flex h-32 items-center space-x-4",children:[e.jsx("div",{children:"Left Content"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Right Content"})]});t.parameters={docs:{description:{story:"Separator with vertical orientation."}}};const r=()=>e.jsxs("div",{className:"w-full max-w-[60rem] space-y-4",children:[e.jsx("div",{children:"Content Above"}),e.jsx(a,{className:"bg-primary/50 h-0.5"}),e.jsx("div",{children:"Content Below"})]});r.parameters={docs:{description:{story:"Separator with custom styling using Tailwind CSS classes."}}};const n=()=>e.jsxs("div",{className:"w-full max-w-[60rem] space-y-1",children:[e.jsx("div",{className:"px-4 py-3 hover:bg-muted/50 rounded-lg",children:"Item One"}),e.jsx(a,{className:"my-1"}),e.jsx("div",{className:"px-4 py-3 hover:bg-muted/50 rounded-lg",children:"Item Two"}),e.jsx(a,{className:"my-1"}),e.jsx("div",{className:"px-4 py-3 hover:bg-muted/50 rounded-lg",children:"Item Three"})]});n.parameters={docs:{description:{story:"Using Separator to divide list items."}}};const i=()=>e.jsxs("div",{className:"w-full max-w-[60rem] space-y-2",children:[e.jsxs("nav",{className:"flex items-center space-x-4",children:[e.jsx("a",{href:"/home",className:"text-sm font-medium",children:"Home"}),e.jsx(a,{orientation:"vertical",className:"h-4"}),e.jsx("a",{href:"/about",className:"text-sm font-medium",children:"About"}),e.jsx(a,{orientation:"vertical",className:"h-4"}),e.jsx("a",{href:"/contact",className:"text-sm font-medium",children:"Contact"})]}),e.jsx(a,{className:"my-4"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Main content area"})]});i.parameters={docs:{description:{story:"Using Separator in navigation menus and content sections."}}};const o=()=>e.jsxs("div",{className:"w-full max-w-[60rem] space-y-4",children:[e.jsx("div",{children:"Section One"}),e.jsx(a,{decorative:!1}),e.jsx("div",{children:"Section Two"})]});o.parameters={docs:{description:{story:"Separator with decorative={false} for semantic meaning in document structure."}}};const c=()=>e.jsxs("div",{className:"w-full max-w-[60rem] space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"font-medium",children:"Resources"}),e.jsx("div",{className:"text-muted-foreground",children:"Documentation"}),e.jsx("div",{className:"text-muted-foreground",children:"API Reference"}),e.jsx("div",{className:"text-muted-foreground",children:"Support"})]}),e.jsx(a,{orientation:"vertical",className:"col-span-1 h-full"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"font-medium",children:"Products"}),e.jsx("div",{className:"text-muted-foreground",children:"Pro Version"}),e.jsx("div",{className:"text-muted-foreground",children:"Enterprise"}),e.jsx("div",{className:"text-muted-foreground",children:"Teams"})]})]}),e.jsx(a,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Terms"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Privacy"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Contact"})]})]});c.parameters={docs:{description:{story:"Example of combining both horizontal and vertical separators in a footer-like layout with multiple sections."}}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Vertical"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomStyling"};n.__docgenInfo={description:"",methods:[],displayName:"InList"};i.__docgenInfo={description:"",methods:[],displayName:"InNavigation"};o.__docgenInfo={description:"",methods:[],displayName:"NonDecorative"};c.__docgenInfo={description:"",methods:[],displayName:"CombinedOrientations"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  return <div className="w-full max-w-[60rem] space-y-4">
      <div>Content Above</div>
      <Separator {...args} />
      <div>Content Below</div>
    </div>;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex h-32 items-center space-x-4">
      <div>Left Content</div>
      <Separator orientation="vertical" />
      <div>Right Content</div>
    </div>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <div className="w-full max-w-[60rem] space-y-4">
      <div>Content Above</div>
      <Separator className="bg-primary/50 h-0.5" />
      <div>Content Below</div>
    </div>;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <div className="w-full max-w-[60rem] space-y-1">
      <div className="px-4 py-3 hover:bg-muted/50 rounded-lg">Item One</div>
      <Separator className="my-1" />
      <div className="px-4 py-3 hover:bg-muted/50 rounded-lg">Item Two</div>
      <Separator className="my-1" />
      <div className="px-4 py-3 hover:bg-muted/50 rounded-lg">Item Three</div>
    </div>;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <div className="w-full max-w-[60rem] space-y-2">
      <nav className="flex items-center space-x-4">
        <a href="/home" className="text-sm font-medium">
          Home
        </a>
        <Separator orientation="vertical" className="h-4" />
        <a href="/about" className="text-sm font-medium">
          About
        </a>
        <Separator orientation="vertical" className="h-4" />
        <a href="/contact" className="text-sm font-medium">
          Contact
        </a>
      </nav>
      <Separator className="my-4" />
      <div className="text-sm text-muted-foreground">Main content area</div>
    </div>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div className="w-full max-w-[60rem] space-y-4">
      <div>Section One</div>
      <Separator decorative={false} />
      <div>Section Two</div>
    </div>;
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <div className="w-full max-w-[60rem] space-y-6">
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="space-y-4">
          <div className="font-medium">Resources</div>
          <div className="text-muted-foreground">Documentation</div>
          <div className="text-muted-foreground">API Reference</div>
          <div className="text-muted-foreground">Support</div>
        </div>
        <Separator orientation="vertical" className="col-span-1 h-full" />
        <div className="space-y-4">
          <div className="font-medium">Products</div>
          <div className="text-muted-foreground">Pro Version</div>
          <div className="text-muted-foreground">Enterprise</div>
          <div className="text-muted-foreground">Teams</div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Terms</div>
        <Separator orientation="vertical" />
        <div>Privacy</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
      </div>
    </div>;
}`,...c.parameters?.docs?.source}}};const g=["Default","Vertical","WithCustomStyling","InList","InNavigation","NonDecorative","CombinedOrientations"];export{c as CombinedOrientations,s as Default,n as InList,i as InNavigation,o as NonDecorative,t as Vertical,r as WithCustomStyling,g as __namedExportsOrder,f as default};
