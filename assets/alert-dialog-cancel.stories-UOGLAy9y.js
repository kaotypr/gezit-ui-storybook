import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./button-B_EVNb5l.js";import{h as l,a as i,b as a,c as n,d as s,e as c,f as g,g as d,A as D}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const w={title:"UI/AlertDialog/AlertDialogCancel",component:l,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Whether to render as a child component",control:"boolean"}},tags:["autodocs"]},t=()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Cancel Action"}),e.jsx(g,{children:"This is a basic alert dialog with a cancel button."})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogCancel component."}}};const o=()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Custom Cancel"}),e.jsx(g,{children:"This cancel button has custom styling."})]}),e.jsxs(d,{children:[e.jsx(l,{className:"bg-secondary text-secondary-foreground hover:bg-secondary/80",children:"Custom Cancel"}),e.jsx(D,{children:"Continue"})]})]})]});o.parameters={docs:{description:{story:"AlertDialogCancel with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
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
