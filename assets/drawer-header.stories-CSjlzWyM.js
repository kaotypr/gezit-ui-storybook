import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-B_EVNb5l.js";import{d as i,a as d,b as l,D as c,e as o,c as p}from"./drawer-D83A9VpW.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const R={title:"UI/Drawer/DrawerHeader",component:i,parameters:{layout:"centered",docs:{description:{component:"The header section of the drawer that typically contains the title and description."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to apply to the header",table:{type:{summary:"string"}}}},tags:["autodocs"]},r=s=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open"})}),e.jsxs(c,{children:[e.jsxs(i,{...s,children:[e.jsx(o,{children:"Drawer Title"}),e.jsx(p,{children:"A description of the drawer's purpose and content."})]}),e.jsx("div",{className:"p-4",children:"Content below header"})]})]});r.parameters={docs:{description:{story:"The standard header layout with a title and description."}}};const t=s=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open Title Only"})}),e.jsxs(c,{children:[e.jsx(i,{...s,children:e.jsx(o,{children:"Drawer Title"})}),e.jsx("div",{className:"p-4",children:"Content below header"})]})]});t.parameters={docs:{description:{story:"A minimal header with just a title."}}};const a=s=>e.jsxs(i,{...s,className:"bg-muted",children:[e.jsx(o,{className:"text-primary",children:"Custom Title"}),e.jsx(p,{className:"text-muted-foreground",children:"A custom styled description with different colors."})]});a.parameters={docs:{description:{story:"Header with custom styling applied to all elements."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"TitleOnly"};a.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader {...args}>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>A description of the drawer's purpose and content.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4">Content below header</div>
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Title Only</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader {...args}>
        <DrawerTitle>Drawer Title</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content below header</div>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <DrawerHeader {...args} className="bg-muted">
    <DrawerTitle className="text-primary">Custom Title</DrawerTitle>
    <DrawerDescription className="text-muted-foreground">
      A custom styled description with different colors.
    </DrawerDescription>
  </DrawerHeader>`,...a.parameters?.docs?.source}}};const U=["Default","TitleOnly","CustomStyling"];export{a as CustomStyling,r as Default,t as TitleOnly,U as __namedExportsOrder,R as default};
