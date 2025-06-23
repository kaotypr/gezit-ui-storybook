import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-B_EVNb5l.js";import{f as a,a as s,b as i,D as l,d,e as c,g as p}from"./drawer-D83A9VpW.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const E={title:"UI/Drawer/DrawerFooter",component:a,parameters:{layout:"centered",docs:{description:{component:"The footer section of the drawer that typically contains action buttons."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to apply to the footer",table:{type:{summary:"string"}}}},tags:["autodocs"]},e=n=>r.jsxs(s,{children:[r.jsx(i,{asChild:!0,children:r.jsx(o,{variant:"outline",children:"Open"})}),r.jsxs(l,{children:[r.jsx(d,{children:r.jsx(c,{children:"Settings"})}),r.jsx("div",{className:"p-4",children:"Content above footer"}),r.jsxs(a,{...n,children:[r.jsx(o,{children:"Save changes"}),r.jsx(p,{asChild:!0,children:r.jsx(o,{variant:"outline",children:"Cancel"})})]})]})]});e.parameters={docs:{description:{story:"A standard footer with primary and secondary action buttons."}}};const t=n=>r.jsxs(s,{children:[r.jsx(i,{asChild:!0,children:r.jsx(o,{variant:"outline",children:"Open Single Button"})}),r.jsxs(l,{children:[r.jsx(d,{children:r.jsx(c,{children:"Confirmation"})}),r.jsx("div",{className:"p-4",children:"Content above footer"}),r.jsx(a,{...n,children:r.jsx(p,{asChild:!0,children:r.jsx(o,{children:"Close"})})})]})]});t.parameters={docs:{description:{story:"A minimal footer with a single action button."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"SingleButton"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content above footer</div>
      <DrawerFooter {...args}>
        <Button>Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Single Button</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Confirmation</DrawerTitle>
      </DrawerHeader>
      <div className="p-4">Content above footer</div>
      <DrawerFooter {...args}>
        <DrawerClose asChild>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>`,...t.parameters?.docs?.source}}};const R=["Default","SingleButton"];export{e as Default,t as SingleButton,R as __namedExportsOrder,E as default};
