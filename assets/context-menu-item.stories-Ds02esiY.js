import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as t,a as i,b as a,c as d,d as s}from"./context-menu-BUOGe9uS.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";import"./check-C8XpHW4d.js";import"./chevron-right-DLQnG4vI.js";const U={title:"UI/ContextMenu/ContextMenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},disabled:{description:"When true, prevents the user from interacting with the item.",control:"boolean"},inset:{description:"When true, adds padding to the left of the item.",control:"boolean"},variant:{description:"The visual style of the item.",control:"select",options:["default","destructive"]},onSelect:{description:"Event handler called when the item is selected.",action:"onSelect"}}},n={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(d,{className:"w-64",children:[e.jsx(t,{children:"Default Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{inset:!0,children:"Inset Item"}),e.jsx(t,{variant:"destructive",children:"Destructive Item"})]})]})},r={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(d,{className:"w-64",children:[e.jsxs(t,{children:["Copy",e.jsx(s,{children:"⌘C"})]}),e.jsxs(t,{children:["Paste",e.jsx(s,{children:"⌘V"})]}),e.jsxs(t,{children:["Cut",e.jsx(s,{children:"⌘X"})]})]})]})},o={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(d,{className:"w-64",children:[e.jsx(t,{variant:"default",children:"Default Item"}),e.jsx(t,{variant:"destructive",children:"Delete Item"}),e.jsx(t,{variant:"default",disabled:!0,children:"Disabled Item"}),e.jsx(t,{variant:"destructive",disabled:!0,children:"Disabled Destructive"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Default Item</ContextMenuItem>
        <ContextMenuItem disabled>Disabled Item</ContextMenuItem>
        <ContextMenuItem inset>Inset Item</ContextMenuItem>
        <ContextMenuItem variant="destructive">Destructive Item</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem variant="default">Default Item</ContextMenuItem>
        <ContextMenuItem variant="destructive">Delete Item</ContextMenuItem>
        <ContextMenuItem variant="default" disabled>
          Disabled Item
        </ContextMenuItem>
        <ContextMenuItem variant="destructive" disabled>
          Disabled Destructive
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...o.parameters?.docs?.source}}};const q=["Default","WithShortcuts","WithVariants"];export{n as Default,r as WithShortcuts,o as WithVariants,q as __namedExportsOrder,U as default};
