import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as s,a as i,b as a,e as t,f as d}from"./context-menu-BUOGe9uS.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";import"./check-C8XpHW4d.js";import"./chevron-right-DLQnG4vI.js";const K={title:"UI/ContextMenu/ContextMenuContent",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},forceMount:{description:"Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",control:"boolean"},onCloseAutoFocus:{description:"Event handler called when focus moves to the trigger after closing.",action:"onCloseAutoFocus"},onEscapeKeyDown:{description:"Event handler called when the escape key is pressed.",action:"onEscapeKeyDown"},onInteractOutside:{description:"Event handler called when an interaction (pointer or focus) happens outside the content.",action:"onInteractOutside"},onPointerDownOutside:{description:"Event handler called when the pointer is pressed down outside the content.",action:"onPointerDownOutside"}}},n={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(s,{className:"w-64",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})},r={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(s,{className:"w-64",children:[e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"}),e.jsx(d,{}),e.jsx(t,{children:"Cut"}),e.jsx(t,{children:"Delete"}),e.jsx(d,{}),e.jsx(t,{children:"Select All"})]})]})},o={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(s,{className:"w-96",children:[e.jsx(t,{children:"Wide Menu Item 1"}),e.jsx(t,{children:"Wide Menu Item 2"}),e.jsx(t,{children:"Wide Menu Item 3"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Select All</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-96">
        <ContextMenuItem>Wide Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Wide Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Wide Menu Item 3</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...o.parameters?.docs?.source}}};const _=["Default","WithSeparators","WithCustomWidth"];export{n as Default,o as WithCustomWidth,r as WithSeparators,_ as __namedExportsOrder,K as default};
