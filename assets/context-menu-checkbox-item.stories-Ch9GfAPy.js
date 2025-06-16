import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as t,a as s,b as d,c as i,d as c}from"./context-menu-BUOGe9uS.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";import"./check-C8XpHW4d.js";import"./chevron-right-DLQnG4vI.js";const _={title:"UI/ContextMenu/ContextMenuCheckboxItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},checked:{description:"The controlled checked state of the checkbox item.",control:"boolean"},disabled:{description:"When true, prevents the user from interacting with the checkbox item.",control:"boolean"},onCheckedChange:{description:"Event handler called when the checked state changes.",action:"onCheckedChange"}}},n={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{className:"w-64",children:[e.jsx(t,{checked:!0,children:"Show Line Numbers"}),e.jsx(t,{children:"Show Minimap"}),e.jsx(t,{disabled:!0,children:"Disabled Option"})]})]})},o={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{className:"w-64",children:[e.jsxs(t,{checked:!0,children:["Show Bookmarks Bar",e.jsx(c,{children:"⌘⇧B"})]}),e.jsxs(t,{children:["Show Full URLs",e.jsx(c,{children:"⌘⇧U"})]}),e.jsxs(t,{children:["Show Developer Tools",e.jsx(c,{children:"⌘⇧I"})]})]})]})},r={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{className:"w-64",children:[e.jsx(t,{checked:!0,children:"Checked Item"}),e.jsx(t,{children:"Unchecked Item"}),e.jsx(t,{disabled:!0,children:"Disabled Item"}),e.jsx(t,{checked:!0,disabled:!0,children:"Disabled Checked Item"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
