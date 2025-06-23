import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as l}from"./button-B_EVNb5l.js";import{b as i,a,c as n,d as s,e as c,f as g,g as d,h as D,A}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const O={title:"UI/AlertDialog/AlertDialogTrigger",component:i,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Whether to render as a child component",control:"boolean"}},tags:["autodocs"]},t=()=>e.jsxs(a,{children:[e.jsx(i,{asChild:!0,children:e.jsx(l,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Dialog Trigger"}),e.jsx(g,{children:"This dialog is triggered by a button."})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogTrigger component with a button."}}};const r=()=>e.jsxs(a,{children:[e.jsx(i,{asChild:!0,children:e.jsx(l,{variant:"destructive",children:"Delete Account"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Delete Account"}),e.jsx(g,{children:"This action cannot be undone."})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]});r.parameters={docs:{description:{story:"AlertDialogTrigger with a custom styled button."}}};const o=()=>e.jsxs(a,{children:[e.jsx(i,{children:e.jsx(l,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Without asChild"}),e.jsx(g,{children:"This dialog trigger is used without the asChild prop."})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(A,{children:"Continue"})]})]})]});o.parameters={docs:{description:{story:"AlertDialogTrigger without the asChild prop."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomButton"};o.__docgenInfo={description:"",methods:[],displayName:"WithoutAsChild"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Dialog Trigger</AlertDialogTitle>
        <AlertDialogDescription>This dialog is triggered by a button.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Account</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Without asChild</AlertDialogTitle>
        <AlertDialogDescription>
          This dialog trigger is used without the asChild prop.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...o.parameters?.docs?.source}}};const S=["Default","CustomButton","WithoutAsChild"];export{r as CustomButton,t as Default,o as WithoutAsChild,S as __namedExportsOrder,O as default};
