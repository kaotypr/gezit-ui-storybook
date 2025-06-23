import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-B_EVNb5l.js";import{D as s,a as o,b as i}from"./drawer-D83A9VpW.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const I={title:"UI/Drawer/DrawerContent",component:s,parameters:{layout:"centered",docs:{description:{component:"The main container that holds the drawer's content. Slides in from the specified direction and can be customized with additional styling."}}},argTypes:{className:{control:"text",description:"Additional CSS classes to apply to the content container for custom styling",table:{type:{summary:"string"}}}},tags:["autodocs"]},e=a=>t.jsxs(o,{children:[t.jsx(i,{asChild:!0,children:t.jsx(n,{variant:"outline",children:"Open"})}),t.jsx(s,{...a,children:t.jsxs("div",{className:"p-4",children:[t.jsx("h2",{className:"text-lg font-semibold",children:"Drawer Content"}),t.jsx("p",{className:"mt-2",children:"This is the main content area of the drawer."})]})})]});e.parameters={docs:{description:{story:"A basic drawer content panel with default styling and simple text content. This demonstrates the standard layout and spacing."}}};const r=a=>t.jsxs(o,{children:[t.jsx(i,{asChild:!0,children:t.jsx(n,{variant:"outline",children:"Open Custom Styled"})}),t.jsx(s,{...a,className:"bg-muted",children:t.jsxs("div",{className:"p-4",children:[t.jsx("h2",{className:"text-lg font-semibold",children:"Custom Styled Content"}),t.jsx("p",{className:"mt-2",children:"This content has a custom background color."})]})})]});r.parameters={docs:{description:{story:"Demonstrates how to customize the drawer content appearance using className. In this example, we apply a muted background color to the content panel."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomClass"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent {...args}>
      <div className="p-4">
        <h2 className="text-lg font-semibold">Drawer Content</h2>
        <p className="mt-2">This is the main content area of the drawer.</p>
      </div>
    </DrawerContent>
  </Drawer>`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Custom Styled</Button>
    </DrawerTrigger>
    <DrawerContent {...args} className="bg-muted">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Custom Styled Content</h2>
        <p className="mt-2">This content has a custom background color.</p>
      </div>
    </DrawerContent>
  </Drawer>`,...r.parameters?.docs?.source}}};const k=["Default","WithCustomClass"];export{e as Default,r as WithCustomClass,k as __namedExportsOrder,I as default};
