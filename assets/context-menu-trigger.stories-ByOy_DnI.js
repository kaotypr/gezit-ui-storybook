import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as s,a as m,c as i,e as t}from"./context-menu-BUOGe9uS.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";import"./check-C8XpHW4d.js";import"./chevron-right-DLQnG4vI.js";const z={title:"UI/ContextMenu/ContextMenuTrigger",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"}}},n={render:()=>e.jsxs(m,{children:[e.jsx(s,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(i,{children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})},r={render:()=>e.jsxs(m,{children:[e.jsx(s,{asChild:!0,children:e.jsx("div",{className:"flex h-[150px] w-[300px] cursor-context-menu items-center justify-center rounded-md border border-dashed bg-muted/50 text-sm",children:"Custom trigger element"})}),e.jsxs(i,{children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})},o={render:()=>e.jsxs(m,{children:[e.jsx(s,{asChild:!0,children:e.jsx("img",{src:"https://picsum.photos/300/150",alt:"Right click on this area",className:"rounded-md"})}),e.jsxs(i,{children:[e.jsx(t,{children:"Save Image"}),e.jsx(t,{children:"Copy Image"}),e.jsx(t,{children:"Open in New Tab"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-[150px] w-[300px] cursor-context-menu items-center justify-center rounded-md border border-dashed bg-muted/50 text-sm">
          Custom trigger element
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger asChild>
        <img src="https://picsum.photos/300/150" alt="Right click on this area" className="rounded-md" />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Save Image</ContextMenuItem>
        <ContextMenuItem>Copy Image</ContextMenuItem>
        <ContextMenuItem>Open in New Tab</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...o.parameters?.docs?.source}}};const A=["Default","WithCustomElement","WithImage"];export{n as Default,r as WithCustomElement,o as WithImage,A as __namedExportsOrder,z as default};
