import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-DVhd8Mv9.js";import{f as r,a as n,b as s,c as a,d as c,e as g,g as d,h as p,A as D}from"./alert-dialog-2JBsEPWA.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dl3xCZ72.js";import"./index-Dc_FVRD7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";const I={title:"UI/AlertDialog/AlertDialogDescription",component:r,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Dialog Description"}),e.jsx(r,{children:"This is a basic description for the alert dialog."})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});i.parameters={docs:{description:{story:"Basic usage of the AlertDialogDescription component."}}};const t=()=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Rich Content"}),e.jsx(r,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"This description contains rich content with multiple paragraphs."}),e.jsxs("ul",{className:"list-disc pl-4 space-y-2",children:[e.jsx("li",{children:"First item in the list"}),e.jsx("li",{children:"Second item in the list"}),e.jsx("li",{children:"Third item in the list"})]})]})})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"AlertDialogDescription with rich content and formatting."}}};const l=()=>e.jsxs(n,{children:[e.jsx(s,{asChild:!0,children:e.jsx(o,{children:"Open Dialog"})}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Custom Styled Description"}),e.jsx(r,{className:"text-muted-foreground",children:"This description has custom styling applied."})]}),e.jsxs(d,{children:[e.jsx(p,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});l.parameters={docs:{description:{story:"AlertDialogDescription with custom styling."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithRichContent"};l.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Dialog Description</AlertDialogTitle>
        <AlertDialogDescription>
          This is a basic description for the alert dialog.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Rich Content</AlertDialogTitle>
        <AlertDialogDescription>
          <div className="space-y-4">
            <p>This description contains rich content with multiple paragraphs.</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>First item in the list</li>
              <li>Second item in the list</li>
              <li>Third item in the list</li>
            </ul>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Custom Styled Description</AlertDialogTitle>
        <AlertDialogDescription className="text-muted-foreground">
          This description has custom styling applied.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...l.parameters?.docs?.source}}};const b=["Default","WithRichContent","CustomStyling"];export{l as CustomStyling,i as Default,t as WithRichContent,b as __namedExportsOrder,I as default};
