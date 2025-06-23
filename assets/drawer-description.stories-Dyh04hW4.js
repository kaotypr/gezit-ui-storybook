import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-B_EVNb5l.js";import{c as s,a,b as n,D as c,d,e as p}from"./drawer-D83A9VpW.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const z={title:"UI/Drawer/DrawerDescription",component:s,parameters:{layout:"centered",docs:{description:{component:"The description text of the drawer that provides additional context about its purpose or content."}}},tags:["autodocs"]},r=i=>e.jsxs(a,{children:[e.jsx(n,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Settings"}),e.jsx(s,{...i,children:"Make changes to your account settings here. Click save when you're done."})]}),e.jsx("div",{className:"p-4",children:"Content below description"})]})]});r.parameters={docs:{description:{story:"A standard drawer description providing context about the drawer content."}}};const t=i=>e.jsxs(a,{children:[e.jsx(n,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Custom"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(p,{children:"Custom Description"}),e.jsx(s,{...i,className:"text-sm italic text-muted-foreground",children:"This description has custom styling applied to emphasize its informative nature."})]}),e.jsx("div",{className:"p-4",children:"Content below description"})]})]});t.parameters={docs:{description:{story:"A drawer description with custom text styling to enhance readability and emphasis."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription {...args}>
          Make changes to your account settings here. Click save when you're done.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">Content below description</div>
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Custom</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Custom Description</DrawerTitle>
        <DrawerDescription {...args} className="text-sm italic text-muted-foreground">
          This description has custom styling applied to emphasize its informative nature.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">Content below description</div>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};const A=["Default","CustomStyling"];export{t as CustomStyling,r as Default,A as __namedExportsOrder,z as default};
