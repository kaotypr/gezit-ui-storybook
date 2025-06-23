import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as l}from"./button-B_EVNb5l.js";import{A as i,a as n,b as a,c as s,d as c,e as g,f as d,g as D}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const O={title:"UI/AlertDialog/AlertDialogAction",component:i,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Whether to render as a child component",control:"boolean"}},tags:["autodocs"]},t=()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(l,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Action Required"}),e.jsx(d,{children:"This is a basic alert dialog with a default action button."})]}),e.jsx(D,{children:e.jsx(i,{children:"Continue"})})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogAction component."}}};const r=()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(l,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Delete Account"}),e.jsx(d,{children:"This action cannot be undone."})]}),e.jsx(D,{children:e.jsx(i,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})})]})]});r.parameters={docs:{description:{story:"AlertDialogAction with destructive styling."}}};const o=()=>e.jsxs(n,{children:[e.jsx(a,{asChild:!0,children:e.jsx(l,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(g,{children:"Custom Action"}),e.jsx(d,{children:"This action has custom styling."})]}),e.jsx(D,{children:e.jsx(i,{className:"bg-primary text-primary-foreground hover:bg-primary/90",children:"Custom Action"})})]})]});o.parameters={docs:{description:{story:"AlertDialogAction with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Destructive"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Action Required</AlertDialogTitle>
        <AlertDialogDescription>
          This is a basic alert dialog with a default action button.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Account</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Custom Action</AlertDialogTitle>
        <AlertDialogDescription>This action has custom styling.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction className="bg-primary text-primary-foreground hover:bg-primary/90">
          Custom Action
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...o.parameters?.docs?.source}}};const w=["Default","Destructive","CustomStyling"];export{o as CustomStyling,t as Default,r as Destructive,w as __namedExportsOrder,O as default};
