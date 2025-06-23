import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as t,a as s,b as d,c as i,d as c}from"./context-menu-DqVBaLjQ.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./circle-C1EB2cBL.js";import"./createLucideIcon-BROHhCyT.js";import"./check-DLjw-kwL.js";import"./chevron-right-BtqEn5DN.js";const _={title:"UI/ContextMenu/ContextMenuCheckboxItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},checked:{description:"The controlled checked state of the checkbox item.",control:"boolean"},disabled:{description:"When true, prevents the user from interacting with the checkbox item.",control:"boolean"},onCheckedChange:{description:"Event handler called when the checked state changes.",action:"onCheckedChange"}}},n={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{className:"w-64",children:[e.jsx(t,{checked:!0,children:"Show Line Numbers"}),e.jsx(t,{children:"Show Minimap"}),e.jsx(t,{disabled:!0,children:"Disabled Option"})]})]})},o={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{className:"w-64",children:[e.jsxs(t,{checked:!0,children:["Show Bookmarks Bar",e.jsx(c,{children:"⌘⇧B"})]}),e.jsxs(t,{children:["Show Full URLs",e.jsx(c,{children:"⌘⇧U"})]}),e.jsxs(t,{children:["Show Developer Tools",e.jsx(c,{children:"⌘⇧I"})]})]})]})},r={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{className:"w-64",children:[e.jsx(t,{checked:!0,children:"Checked Item"}),e.jsx(t,{children:"Unchecked Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{checked:!0,disabled:!0,children:"Disabled Checked Item"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuCheckboxItem checked>Show Line Numbers</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Minimap</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem disabled>Disabled Option</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Show Full URLs
          <ContextMenuShortcut>⌘⇧U</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Show Developer Tools
          <ContextMenuShortcut>⌘⇧I</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuCheckboxItem checked>Checked Item</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Unchecked Item</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem disabled>Disabled Item</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked disabled>
          Disabled Checked Item
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...r.parameters?.docs?.source}}};const q=["Default","WithShortcuts","WithStates"];export{n as Default,o as WithShortcuts,r as WithStates,q as __namedExportsOrder,_ as default};
