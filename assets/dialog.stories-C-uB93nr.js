import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as i}from"./button-B_EVNb5l.js";import{a as r,b as n,D as s,c as l,d,e as g,f as c}from"./dialog-F5pVz2Qt.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";const M={title:"UI/Dialog",component:r,parameters:{layout:"centered",docs:{description:{component:`
A modal dialog component for displaying content in a layer above the app.

This component is built on top of [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog).

### Component Parts
- [DialogTrigger](?path=/story/ui-dialog-dialogtrigger--default): The element that opens the dialog.
- [DialogContent](?path=/story/ui-dialog-dialogcontent--default): The main content area of the dialog.
- [DialogHeader](?path=/story/ui-dialog-dialogheader--default): Container for the dialog's header content.
- [DialogTitle](?path=/story/ui-dialog-dialogtitle--default): The title of the dialog.
- [DialogDescription](?path=/story/ui-dialog-dialogdescription--default): Description or additional information for the dialog.
- [DialogFooter](?path=/story/ui-dialog-dialogfooter--default): Container for the dialog's footer content and actions.
        `}}},tags:["autodocs"],argTypes:{open:{description:"The controlled open state of the dialog.",control:"boolean"},onOpenChange:{description:"Event handler called when the open state of the dialog changes.",action:"onOpenChange"},defaultOpen:{description:"The open state of the dialog when it is initially rendered.",control:"boolean"},modal:{description:"The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",control:"boolean",defaultValue:!0}}},a={render:p=>e.jsxs(r,{...p,children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Edit Profile"}),e.jsx(g,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx("input",{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx("label",{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx("input",{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(c,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Settings"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Settings"}),e.jsx(g,{children:"Manage your application settings and preferences."})]}),e.jsx("div",{className:"grid gap-4 py-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium",children:"Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure how you receive notifications."})]})}),e.jsx(c,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(n,{asChild:!0,children:e.jsx(i,{variant:"ghost",children:"View Details"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Item Details"}),e.jsx(g,{children:"View detailed information about this item."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"This is a detailed view of the item."})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Manage your application settings and preferences.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Notifications</h4>
            <p className="text-sm text-muted-foreground">
              Configure how you receive notifications.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Item Details</DialogTitle>
          <DialogDescription>View detailed information about this item.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>This is a detailed view of the item.</p>
        </div>
      </DialogContent>
    </Dialog>
}`,...o.parameters?.docs?.source}}};const U=["Default","WithCustomTrigger","WithoutFooter"];export{a as Default,t as WithCustomTrigger,o as WithoutFooter,U as __namedExportsOrder,M as default};
