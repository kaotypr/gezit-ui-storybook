import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-B_EVNb5l.js";import{e as l,a as r,b as a,c as s,d as n,f as g,g as c,h as D,A as d}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const w={title:"UI/AlertDialog/AlertDialogTitle",component:l,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Dialog Title"}),e.jsx(g,{children:"This is a basic dialog with a title."})]}),e.jsxs(c,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(d,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogTitle component."}}};const i=()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(l,{className:"text-primary",children:"Custom Title"}),e.jsx(g,{children:"This dialog has a custom styled title."})]}),e.jsxs(c,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(d,{children:"Continue"})]})]})]});i.parameters={docs:{description:{story:"AlertDialogTitle with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Dialog Title</AlertDialogTitle>
        <AlertDialogDescription>This is a basic dialog with a title.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="text-primary">Custom Title</AlertDialogTitle>
        <AlertDialogDescription>This dialog has a custom styled title.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...i.parameters?.docs?.source}}};const I=["Default","CustomStyling"];export{i as CustomStyling,t as Default,I as __namedExportsOrder,w as default};
