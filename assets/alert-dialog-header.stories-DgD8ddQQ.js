import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as i}from"./button-B_EVNb5l.js";import{d as o,a as l,b as a,c as n,e as s,f as c,g,h as d,A as D}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const O={title:"UI/AlertDialog/AlertDialogHeader",component:o,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>e.jsxs(l,{children:[e.jsx(a,{asChild:!0,children:e.jsx(i,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(o,{children:[e.jsx(s,{children:"Dialog Header"}),e.jsx(c,{children:"This is a basic header with title and description."})]}),e.jsxs(g,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogHeader component."}}};const r=()=>e.jsxs(l,{children:[e.jsx(a,{asChild:!0,children:e.jsx(i,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(o,{className:"border-b pb-4",children:[e.jsx(s,{children:"Custom Header"}),e.jsx(c,{children:"This header has custom styling with a bottom border."})]}),e.jsxs(g,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});r.parameters={docs:{description:{story:"AlertDialogHeader with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
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
