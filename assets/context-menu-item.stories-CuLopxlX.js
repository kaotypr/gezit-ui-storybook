import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as t,a as i,b as a,c as d,d as s}from"./context-menu-DqVBaLjQ.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./circle-C1EB2cBL.js";import"./createLucideIcon-BROHhCyT.js";import"./check-DLjw-kwL.js";import"./chevron-right-BtqEn5DN.js";const U={title:"UI/ContextMenu/ContextMenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},disabled:{description:"When true, prevents the user from interacting with the item.",control:"boolean"},inset:{description:"When true, adds padding to the left of the item.",control:"boolean"},variant:{description:"The visual style of the item.",control:"select",options:["default","destructive"]},onSelect:{description:"Event handler called when the item is selected.",action:"onSelect"}}},n={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(d,{className:"w-64",children:[e.jsx(t,{children:"Default Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{inset:!0,children:"Inset Item"}),e.jsx(t,{variant:"destructive",children:"Destructive Item"})]})]})},r={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(d,{className:"w-64",children:[e.jsxs(t,{children:["Copy",e.jsx(s,{children:"⌘C"})]}),e.jsxs(t,{children:["Paste",e.jsx(s,{children:"⌘V"})]}),e.jsxs(t,{children:["Cut",e.jsx(s,{children:"⌘X"})]})]})]})},o={render:()=>e.jsxs(i,{children:[e.jsx(a,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(d,{className:"w-64",children:[e.jsx(t,{variant:"default",children:"Default Item"}),e.jsx(t,{variant:"destructive",children:"Delete Item"}),e.jsx(t,{variant:"default",disabled:!0,children:"Disabled Item"}),e.jsx(t,{variant:"destructive",disabled:!0,children:"Disabled Destructive"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
