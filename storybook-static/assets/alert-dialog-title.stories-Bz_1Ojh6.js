import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-DVhd8Mv9.js";import{e as l,a as r,b as a,c as s,d as n,f as g,g as c,h as D,A as d}from"./alert-dialog-2JBsEPWA.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const w={title:"UI/AlertDialog/AlertDialogTitle",component:l,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Dialog Title"}),e.jsx(g,{children:"This is a basic dialog with a title."})]}),e.jsxs(c,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(d,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogTitle component."}}};const i=()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(l,{className:"text-primary",children:"Custom Title"}),e.jsx(g,{children:"This dialog has a custom styled title."})]}),e.jsxs(c,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(d,{children:"Continue"})]})]})]});i.parameters={docs:{description:{story:"AlertDialogTitle with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
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
