import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./button-B_EVNb5l.js";import{c as n,a as l,b as i,d as a,e as s,f as c,g,h as d,A as p}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const v={title:"UI/AlertDialog/AlertDialogContent",component:n,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"},forceMount:{description:"Forces the content to stay mounted.",control:"boolean"},onOpenAutoFocus:{description:"Event handler called when focus moves to the content after opening.",action:"onOpenAutoFocus"},onCloseAutoFocus:{description:"Event handler called when focus moves to the trigger after closing.",action:"onCloseAutoFocus"},onEscapeKeyDown:{description:"Event handler called when the escape key is pressed.",action:"onEscapeKeyDown"}},tags:["autodocs"]},t=()=>e.jsxs(l,{children:[e.jsx(i,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsxs(n,{children:[e.jsxs(a,{children:[e.jsx(s,{children:"Dialog Content"}),e.jsx(c,{children:"This is the main content area of the alert dialog."})]}),e.jsxs(g,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(p,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialogContent component."}}};const o=()=>e.jsxs(l,{children:[e.jsx(i,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsxs(n,{className:"bg-secondary text-secondary-foreground",children:[e.jsxs(a,{children:[e.jsx(s,{children:"Custom Styled Content"}),e.jsx(c,{children:"This dialog content has custom styling applied."})]}),e.jsxs(g,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(p,{children:"Continue"})]})]})]});o.parameters={docs:{description:{story:"AlertDialogContent with custom styling."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Dialog Content</AlertDialogTitle>
        <AlertDialogDescription>
          This is the main content area of the alert dialog.
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
    <AlertDialogContent className="bg-secondary text-secondary-foreground">
      <AlertDialogHeader>
        <AlertDialogTitle>Custom Styled Content</AlertDialogTitle>
        <AlertDialogDescription>
          This dialog content has custom styling applied.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...o.parameters?.docs?.source}}};const H=["Default","CustomStyling"];export{o as CustomStyling,t as Default,H as __namedExportsOrder,v as default};
