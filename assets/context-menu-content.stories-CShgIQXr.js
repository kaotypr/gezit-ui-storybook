import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as s,a as i,b as a,e as t,f as d}from"./context-menu-DqVBaLjQ.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./circle-C1EB2cBL.js";import"./createLucideIcon-BROHhCyT.js";import"./check-DLjw-kwL.js";import"./chevron-right-BtqEn5DN.js";const K={title:"UI/ContextMenu/ContextMenuContent",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},forceMount:{description:"Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",control:"boolean"},onCloseAutoFocus:{description:"Event handler called when focus moves to the trigger after closing.",action:"onCloseAutoFocus"},onEscapeKeyDown:{description:"Event handler called when the escape key is pressed.",action:"onEscapeKeyDown"},onInteractOutside:{description:"Event handler called when an interaction (pointer or focus) happens outside the content.",action:"onInteractOutside"},onPointerDownOutside:{description:"Event handler called when the pointer is pressed down outside the content.",action:"onPointerDownOutside"}}},n={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(s,{className:"w-64",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})},r={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(s,{className:"w-64",children:[e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"}),e.jsx(d,{}),e.jsx(t,{children:"Cut"}),e.jsx(t,{children:"Delete"}),e.jsx(d,{}),e.jsx(t,{children:"Select All"})]})]})},o={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(s,{className:"w-96",children:[e.jsx(t,{children:"Wide Menu Item 1"}),e.jsx(t,{children:"Wide Menu Item 2"}),e.jsx(t,{children:"Wide Menu Item 3"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
