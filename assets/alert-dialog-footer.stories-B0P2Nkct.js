import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-DVhd8Mv9.js";import{g as i,a as n,b as s,c,d as g,e as d,f as D,h as A,A as r}from"./alert-dialog-2JBsEPWA.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const v={title:"UI/AlertDialog/AlertDialogFooter",component:i,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},o=()=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(d,{children:"Dialog Footer"}),e.jsx(D,{children:"This dialog has a basic footer with action buttons."})]}),e.jsxs(i,{children:[e.jsx(A,{children:"Cancel"}),e.jsx(r,{children:"Continue"})]})]})]});o.parameters={docs:{description:{story:"Basic usage of the AlertDialogFooter component."}}};const t=()=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(d,{children:"Multiple Actions"}),e.jsx(D,{children:"This dialog has multiple action buttons in the footer."})]}),e.jsxs(i,{children:[e.jsx(A,{children:"Cancel"}),e.jsx(r,{className:"bg-secondary text-secondary-foreground hover:bg-secondary/80",children:"Save Draft"}),e.jsx(r,{children:"Submit"})]})]})]});t.parameters={docs:{description:{story:"AlertDialogFooter with multiple action buttons."}}};const l=()=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{children:"Open Dialog"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(d,{children:"Custom Footer"}),e.jsx(D,{children:"This dialog has a custom styled footer."})]}),e.jsxs(i,{className:"flex-col sm:flex-row gap-2",children:[e.jsx(A,{className:"w-full sm:w-auto",children:"Cancel"}),e.jsx(r,{className:"w-full sm:w-auto",children:"Continue"})]})]})]});l.parameters={docs:{description:{story:"AlertDialogFooter with custom styling and responsive layout."}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"MultipleActions"};l.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Dialog Footer</AlertDialogTitle>
        <AlertDialogDescription>
          This dialog has a basic footer with action buttons.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Multiple Actions</AlertDialogTitle>
        <AlertDialogDescription>
          This dialog has multiple action buttons in the footer.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Save Draft
        </AlertDialogAction>
        <AlertDialogAction>Submit</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Custom Footer</AlertDialogTitle>
        <AlertDialogDescription>This dialog has a custom styled footer.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="flex-col sm:flex-row gap-2">
        <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
        <AlertDialogAction className="w-full sm:w-auto">Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...l.parameters?.docs?.source}}};const M=["Default","MultipleActions","CustomStyling"];export{l as CustomStyling,o as Default,t as MultipleActions,M as __namedExportsOrder,v as default};
