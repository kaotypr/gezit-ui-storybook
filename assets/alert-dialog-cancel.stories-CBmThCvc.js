import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./button-DVhd8Mv9.js";import{h as l,a as i,b as a,c as n,d as s,e as c,f as g,g as d,A as D}from"./alert-dialog-2JBsEPWA.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const w={title:"UI/AlertDialog/AlertDialogCancel",component:l,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Whether to render as a child component",control:"boolean"}},tags:["autodocs"]},t=()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Cancel Action"}),e.jsx(g,{children:"This is a basic alert dialog with a cancel button."})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogCancel component."}}};const o=()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Custom Cancel"}),e.jsx(g,{children:"This cancel button has custom styling."})]}),e.jsxs(d,{children:[e.jsx(l,{className:"bg-secondary text-secondary-foreground hover:bg-secondary/80",children:"Custom Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});o.parameters={docs:{description:{story:"AlertDialogCancel with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Cancel Action</AlertDialogTitle>
        <AlertDialogDescription>
          This is a basic alert dialog with a cancel button.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Custom Cancel</AlertDialogTitle>
        <AlertDialogDescription>This cancel button has custom styling.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Custom Cancel
        </AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...o.parameters?.docs?.source}}};const I=["Default","CustomStyling"];export{o as CustomStyling,t as Default,I as __namedExportsOrder,w as default};
