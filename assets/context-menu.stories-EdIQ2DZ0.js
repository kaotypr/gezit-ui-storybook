import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as i,b as d,c as l,e as t,d as o,j as x,k as m,l as c,f as a,C,h as M,i as p,g as h}from"./context-menu-BUOGe9uS.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";import"./check-C8XpHW4d.js";import"./chevron-right-DLQnG4vI.js";const K={title:"UI/ContextMenu",component:i,parameters:{layout:"centered",docs:{description:{component:`
A contextual menu that appears on right-click or long-press, providing a list of actions or options.

This component is built on top of [Radix UI Context Menu](https://www.radix-ui.com/primitives/docs/components/context-menu).

### Component Parts
- [ContextMenuTrigger](?path=/story/ui-context-menu-contextmenutrigger--default): The element that opens the context menu when interacted with.
- [ContextMenuContent](?path=/story/ui-context-menu-contextmenucontent--default): The container for the menu's content and items.
- [ContextMenuItem](?path=/story/ui-context-menu-contextmenuitem--default): An actionable item within the menu.
- [ContextMenuSeparator](?path=/story/ui-context-menu-contextmenuseparator--default): A visual separator between groups of items.
- [ContextMenuLabel](?path=/story/ui-context-menu-contextmenulabel--default): A non-interactive label for grouping items.
- [ContextMenuCheckboxItem](?path=/story/ui-context-menu-contextmenucheckboxitem--default): A menu item that can be checked or unchecked.
- [ContextMenuRadioItem](?path=/story/ui-context-menu-contextmenuradioitem--default): A menu item that is part of a radio group.
- [ContextMenuShortcut](?path=/story/ui-context-menu-contextmenushortcut--default): Displays a keyboard shortcut for a menu item.
- [ContextMenuSub](?path=/story/ui-context-menu-contextmenusub--default): A submenu for nested actions.
- [ContextMenuSubTrigger](?path=/story/ui-context-menu-contextmenusubtrigger--default): The trigger for opening a submenu.
- [ContextMenuSubContent](?path=/story/ui-context-menu-contextmenusubcontent--default): The content area of a submenu.
- [ContextMenuRadioGroup](?path=/story/ui-context-menu-contextmenuradiogroup--default): Groups radio items together.
        `}}},tags:["autodocs"],argTypes:{modal:{description:"The modality of the context menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.",control:"boolean",defaultValue:!0},dir:{description:"The reading direction of the context menu. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",control:"select",options:["ltr","rtl"]},onOpenChange:{description:"Callback function that is called when the context menu is opened or closed.",control:void 0}}},r={render:n=>e.jsxs(i,{...n,children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(l,{className:"w-64",children:[e.jsxs(t,{children:["Back",e.jsx(o,{children:"⌘["})]}),e.jsxs(t,{disabled:!0,children:["Forward",e.jsx(o,{children:"⌘]"})]}),e.jsxs(t,{children:["Reload",e.jsx(o,{children:"⌘R"})]}),e.jsxs(x,{children:[e.jsx(m,{children:"More Tools"}),e.jsxs(c,{className:"w-48",children:[e.jsxs(t,{children:["Save Page As...",e.jsx(o,{children:"⇧⌘S"})]}),e.jsx(t,{children:"Create Shortcut..."}),e.jsx(t,{children:"Name Window..."}),e.jsx(a,{}),e.jsx(t,{children:"Developer Tools"})]})]}),e.jsx(a,{}),e.jsxs(C,{checked:!0,children:["Show Bookmarks Bar",e.jsx(o,{children:"⌘⇧B"})]}),e.jsx(C,{children:"Show Full URLs"}),e.jsx(a,{}),e.jsxs(M,{value:"pedro",children:[e.jsx(p,{inset:!0,children:"People"}),e.jsx(h,{value:"pedro",children:"Pedro Duarte"}),e.jsx(h,{value:"colm",children:"Colm Tuite"})]})]})]})},u={render:n=>e.jsxs(i,{...n,children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed bg-muted/50 text-sm",children:"Custom trigger area"}),e.jsxs(l,{className:"w-64",children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})},s={render:n=>e.jsxs(i,{...n,children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click for nested menus"}),e.jsxs(l,{className:"w-64",children:[e.jsxs(x,{children:[e.jsx(m,{children:"File"}),e.jsxs(c,{children:[e.jsx(t,{children:"New"}),e.jsx(t,{children:"Open"}),e.jsx(t,{children:"Save"})]})]}),e.jsxs(x,{children:[e.jsx(m,{children:"Edit"}),e.jsxs(c,{children:[e.jsx(t,{children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed bg-muted/50 text-sm">
        Custom trigger area
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Item 1</ContextMenuItem>
        <ContextMenuItem>Item 2</ContextMenuItem>
        <ContextMenuItem>Item 3</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click for nested menus
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger>File</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>New</ContextMenuItem>
            <ContextMenuItem>Open</ContextMenuItem>
            <ContextMenuItem>Save</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Edit</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Cut</ContextMenuItem>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Paste</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
}`,...s.parameters?.docs?.source}}};const Q=["Default","WithCustomTrigger","WithSubMenus"];export{r as Default,u as WithCustomTrigger,s as WithSubMenus,Q as __namedExportsOrder,K as default};
