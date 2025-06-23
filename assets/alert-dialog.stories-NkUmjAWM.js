import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-B_EVNb5l.js";import{a as i,b as s,c,d,e as g,f as u,g as h,h as m,A as a}from"./alert-dialog-C-lSTyLa.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BZJBf84B.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";const k={title:"UI/AlertDialog",component:i,parameters:{layout:"centered",docs:{description:{component:`
A modal dialog that interrupts the user with important content and expects a response.

This component is built on top of [Radix UI Alert Dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog).

### Component Parts
- [AlertDialogAction](?path=/story/ui-alertdialog-alertdialogaction--default): Button for confirming the action in the dialog.
- [AlertDialogCancel](?path=/story/ui-alertdialog-alertdialogcancel--default): Button for canceling and closing the dialog.
- [AlertDialogContent](?path=/story/ui-alertdialog-alertdialogcontent--default): The main content area of the dialog.
- [AlertDialogDescription](?path=/story/ui-alertdialog-alertdialogdescription--default): Description or additional information for the dialog.
- [AlertDialogFooter](?path=/story/ui-alertdialog-alertdialogfooter--default): Container for the dialog's footer content and actions.
- [AlertDialogHeader](?path=/story/ui-alertdialog-alertdialogheader--default): Container for the dialog's header content.
- [AlertDialogTitle](?path=/story/ui-alertdialog-alertdialogtitle--default): The title of the dialog.
- [AlertDialogTrigger](?path=/story/ui-alertdialog-alertdialogtrigger--default): The trigger element to open the dialog.
        `}}},argTypes:{open:{description:"The controlled open state of the dialog.",control:"boolean"},defaultOpen:{description:"The open state of the dialog when it is initially rendered (uncontrolled).",control:"boolean"},onOpenChange:{description:"Callback fired when the open state changes.",action:"onOpenChange"}},tags:["autodocs"]},t=()=>e.jsxs(i,{children:[e.jsx(s,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open Alert Dialog"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Are you sure?"}),e.jsx(u,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Cancel"}),e.jsx(a,{children:"Continue"})]})]})]});t.parameters={docs:{description:{story:"Basic usage of the AlertDialog component."}}};const o=()=>e.jsxs(i,{children:[e.jsx(s,{asChild:!0,children:e.jsx(n,{variant:"destructive",children:"Delete Account"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Delete Account"}),e.jsx(u,{children:"Are you absolutely sure you want to delete your account? This action cannot be undone and all your data will be permanently removed."})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Cancel"}),e.jsx(a,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete Account"})]})]})]});o.parameters={docs:{description:{story:"AlertDialog with destructive styling for dangerous actions."}}};const l=()=>e.jsxs(i,{children:[e.jsx(s,{asChild:!0,children:e.jsx(n,{children:"Show Important Information"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Important Update"}),e.jsx(u,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"We're making some important changes to our service. Here's what you need to know:"}),e.jsxs("ul",{className:"list-disc pl-4 space-y-2",children:[e.jsx("li",{children:"New features will be available next week"}),e.jsx("li",{children:"System maintenance scheduled for Sunday"}),e.jsx("li",{children:"Updated terms of service"})]})]})})]}),e.jsxs(h,{children:[e.jsx(m,{children:"Close"}),e.jsx(a,{children:"Learn More"})]})]})]});l.parameters={docs:{description:{story:"AlertDialog with rich content and custom formatting."}}};const r=()=>e.jsxs(i,{children:[e.jsx(s,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Custom Actions"})}),e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(g,{children:"Custom Action Required"}),e.jsx(u,{children:"Please choose how you would like to proceed with this action."})]}),e.jsxs(h,{className:"flex-col sm:flex-row gap-2",children:[e.jsx(m,{className:"w-full sm:w-auto",children:"Cancel"}),e.jsx(a,{className:"w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80",children:"Save Draft"}),e.jsx(a,{className:"w-full sm:w-auto",children:"Submit"})]})]})]});r.parameters={docs:{description:{story:"AlertDialog with multiple custom-styled action buttons."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Destructive"};l.__docgenInfo={description:"",methods:[],displayName:"WithCustomContent"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomButtons"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Alert Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Account</AlertDialogTitle>
        <AlertDialogDescription>
          Are you absolutely sure you want to delete your account? This action cannot be undone and
          all your data will be permanently removed.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
          Delete Account
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Show Important Information</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Important Update</AlertDialogTitle>
        <AlertDialogDescription>
          <div className="space-y-4">
            <p>We're making some important changes to our service. Here's what you need to know:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>New features will be available next week</li>
              <li>System maintenance scheduled for Sunday</li>
              <li>Updated terms of service</li>
            </ul>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Close</AlertDialogCancel>
        <AlertDialogAction>Learn More</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Custom Actions</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Custom Action Required</AlertDialogTitle>
        <AlertDialogDescription>
          Please choose how you would like to proceed with this action.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="flex-col sm:flex-row gap-2">
        <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
        <AlertDialogAction className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Save Draft
        </AlertDialogAction>
        <AlertDialogAction className="w-full sm:w-auto">Submit</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,...r.parameters?.docs?.source}}};const W=["Default","Destructive","WithCustomContent","WithCustomButtons"];export{t as Default,o as Destructive,r as WithCustomButtons,l as WithCustomContent,W as __namedExportsOrder,k as default};
