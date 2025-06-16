import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as i}from"./button-DVhd8Mv9.js";import{d as o,a as l,b as a,c as n,e as s,f as c,g,h as d,A as D}from"./alert-dialog-2JBsEPWA.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const O={title:"UI/AlertDialog/AlertDialogHeader",component:o,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>e.jsxs(l,{children:[e.jsx(a,{asChild:!0,children:e.jsx(i,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Dialog Header"}),e.jsx(c,{children:"This is a basic header with title and description."})]}),e.jsxs(g,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogHeader component."}}};const r=()=>e.jsxs(l,{children:[e.jsx(a,{asChild:!0,children:e.jsx(i,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(o,{className:"border-b pb-4",children:[e.jsx(s,{children:"Custom Header"}),e.jsx(c,{children:"This header has custom styling with a bottom border."})]}),e.jsxs(g,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});r.parameters={docs:{description:{story:"AlertDialogHeader with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Dialog Header</AlertDialogTitle>
        <AlertDialogDescription>
          This is a basic header with title and description.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader className="border-b pb-4">
        <AlertDialogTitle>Custom Header</AlertDialogTitle>
        <AlertDialogDescription>
          This header has custom styling with a bottom border.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...r.parameters?.docs?.source}}};const I=["Default","CustomStyling"];export{r as CustomStyling,t as Default,I as __namedExportsOrder,O as default};
