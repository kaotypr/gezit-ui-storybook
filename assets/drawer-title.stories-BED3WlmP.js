import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-B_EVNb5l.js";import{e as i,a as n,b as s,D as l,d}from"./drawer-D83A9VpW.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const A={title:"UI/Drawer/DrawerTitle",component:i,parameters:{layout:"centered",docs:{description:{component:"The title element of the drawer, typically used within DrawerHeader."}}},tags:["autodocs"]},r=a=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open"})}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsx(i,{...a,children:"Settings"})}),e.jsx("div",{className:"p-4",children:"Content below title"})]})]});r.parameters={docs:{description:{story:"A standard drawer title within a header."}}};const t=a=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Custom"})}),e.jsxs(l,{children:[e.jsx(d,{children:e.jsx(i,{...a,className:"text-2xl font-bold text-primary",children:"Custom Styled Title"})}),e.jsx("div",{className:"p-4",children:"Content below title"})]})]});t.parameters={docs:{description:{story:"A drawer title with custom styling applied through className."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle {...args}>Settings</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content below title</div>
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Custom</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle {...args} className="text-2xl font-bold text-primary">
          Custom Styled Title
        </DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content below title</div>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};const E=["Default","CustomStyling"];export{t as CustomStyling,r as Default,E as __namedExportsOrder,A as default};
