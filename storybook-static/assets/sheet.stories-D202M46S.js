import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as s}from"./button-DVhd8Mv9.js";import{a as i,b as l,S as c,c as h,d as m,e as u,f as S,g as v}from"./sheet-tm3rgsHe.js";import{I as g}from"./input--pf6IO2E.js";import{L as f}from"./label-C29XJGd3.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./index-DY14GT23.js";const K={title:"UI/Sheet",component:i,parameters:{layout:"centered",docs:{description:{component:`
A modal dialog that slides in from the edge of the screen.

This component is built on top of [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog).

### Component Parts
- [SheetTrigger](?path=/story/ui-sheet-sheettrigger--default): The button that opens the sheet.
- [SheetContent](?path=/story/ui-sheet-sheetcontent--default): The content area of the sheet.
- [SheetHeader](?path=/story/ui-sheet-sheetheader--default): The header section of the sheet.
- [SheetFooter](?path=/story/ui-sheet-sheetfooter--default): The footer section of the sheet.
- [SheetTitle](?path=/story/ui-sheet-sheettitle--default): The title of the sheet.
- [SheetDescription](?path=/story/ui-sheet-sheetdescription--default): The description of the sheet.

### Accessibility
- Pressing \`Escape\` closes the sheet
- Focus is trapped within the sheet when open
- Sheet closes when clicking outside
- WAI-ARIA compliant dialog implementation
`}}},argTypes:{defaultOpen:{description:"Whether the sheet is open by default",control:"boolean"},modal:{description:"Whether the sheet blocks interactions with the rest of the app when open",control:"boolean",defaultValue:!0}},tags:["autodocs"]},n=t=>e.jsxs(i,{...t,children:[e.jsx(l,{children:"Open"}),e.jsx(c,{children:e.jsxs(h,{children:[e.jsx(m,{children:"Are you absolutely sure?"}),e.jsx(u,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]});n.parameters={docs:{description:{story:"Basic usage of the Sheet component with a form layout."}}};const r=()=>e.jsxs(i,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Left Sheet"})}),e.jsxs(c,{side:"left",children:[e.jsxs(h,{children:[e.jsx(m,{children:"Navigation"}),e.jsx(u,{children:"Browse through different sections."})]}),e.jsx("div",{className:"flex flex-col gap-2 py-4",children:["Dashboard","Products","Settings","Account"].map(t=>e.jsx(s,{variant:"ghost",className:"justify-start",children:t},t))})]})]});r.parameters={docs:{description:{story:"Sheet that slides in from the left side, commonly used for navigation."}}};const o=()=>e.jsxs(i,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Top Sheet"})}),e.jsxs(c,{side:"top",className:"h-[50vh]",children:[e.jsxs(h,{children:[e.jsx(m,{children:"Notifications"}),e.jsx(u,{children:"Your recent notifications."})]}),e.jsx("div",{className:"flex flex-col gap-4 py-4",children:[1,2,3].map(t=>e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"size-8 rounded-full bg-muted"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("h4",{className:"text-sm font-medium",children:["Notification ",t]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["This is a notification message ",t,"."]})]})]},t))})]})]});o.parameters={docs:{description:{story:"Sheet that slides in from the top."}}};const a=()=>e.jsxs(i,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Bottom Sheet"})}),e.jsxs(c,{side:"bottom",children:[e.jsxs(h,{children:[e.jsx(m,{children:"Music Player"}),e.jsx(u,{children:"Now playing"})]}),e.jsx("div",{className:"flex items-center justify-center py-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"size-24 mx-auto mb-4 rounded-full bg-muted"}),e.jsx("h3",{className:"mb-1 text-lg font-medium",children:"Song Title"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Artist Name"})]})}),e.jsx(S,{children:e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx(s,{variant:"outline",size:"icon",children:"⏮"}),e.jsx(s,{size:"icon",children:"▶"}),e.jsx(s,{variant:"outline",size:"icon",children:"⏭"})]})})]})]});a.parameters={docs:{description:{story:"Sheet that slides in from the bottom, commonly used for media players or action sheets on mobile."}}};const d=()=>e.jsxs(i,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Sheet"})}),e.jsxs(c,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Terms of Service"}),e.jsx(u,{children:"Read our terms and conditions."})]}),e.jsx("div",{className:"flex flex-col gap-4 py-4 overflow-auto max-h-[60vh]",children:Array.from({length:10},(t,x)=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("h3",{className:"text-sm font-medium",children:["Section ",x+1]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]},x))}),e.jsx(S,{children:e.jsx(s,{children:"Accept Terms"})})]})]});d.parameters={docs:{description:{story:"Sheet with scrollable content area."}}};const j=["top","right","bottom","left"];function p(){return e.jsx("div",{className:"grid grid-cols-2 gap-2",children:j.map(t=>e.jsxs(i,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:t})}),e.jsxs(c,{side:t,children:[e.jsxs(h,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(u,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(f,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(g,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(f,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(g,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(S,{children:e.jsx(v,{asChild:!0,children:e.jsx(s,{type:"submit",children:"Save changes"})})})]})]},t))})}n.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"LeftSide"};o.__docgenInfo={description:"",methods:[],displayName:"TopSide"};a.__docgenInfo={description:"",methods:[],displayName:"BottomSide"};d.__docgenInfo={description:"",methods:[],displayName:"WithScrollableContent"};p.__docgenInfo={description:"",methods:[],displayName:"SheetSide"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <Sheet {...args}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse through different sections.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4">
          {['Dashboard', 'Products', 'Settings', 'Account'].map(item => <Button key={item} variant="ghost" className="justify-start">
              {item}
            </Button>)}
        </div>
      </SheetContent>
    </Sheet>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-[50vh]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>Your recent notifications.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          {[1, 2, 3].map(i => <div key={i} className="flex items-start gap-4">
              <div className="size-8 rounded-full bg-muted" />
              <div className="flex-1">
                <h4 className="text-sm font-medium">Notification {i}</h4>
                <p className="text-sm text-muted-foreground">This is a notification message {i}.</p>
              </div>
            </div>)}
        </div>
      </SheetContent>
    </Sheet>;
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Music Player</SheetTitle>
          <SheetDescription>Now playing</SheetDescription>
        </SheetHeader>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="size-24 mx-auto mb-4 rounded-full bg-muted" />
            <h3 className="mb-1 text-lg font-medium">Song Title</h3>
            <p className="text-sm text-muted-foreground">Artist Name</p>
          </div>
        </div>
        <SheetFooter>
          <div className="flex w-full justify-between">
            <Button variant="outline" size="icon">
              ⏮
            </Button>
            <Button size="icon">▶</Button>
            <Button variant="outline" size="icon">
              ⏭
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Terms of Service</SheetTitle>
          <SheetDescription>Read our terms and conditions.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 overflow-auto max-h-[60vh]">
          {Array.from({
          length: 10
        }, (_, i) => <div key={i} className="space-y-2">
              <h3 className="text-sm font-medium">Section {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>)}
        </div>
        <SheetFooter>
          <Button>Accept Terms</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function SheetSide() {
  return <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map(side => <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>)}
    </div>;
}`,...p.parameters?.docs?.source}}};const Q=["Default","LeftSide","TopSide","BottomSide","WithScrollableContent","SheetSide"];export{a as BottomSide,n as Default,r as LeftSide,p as SheetSide,o as TopSide,d as WithScrollableContent,Q as __namedExportsOrder,K as default};
