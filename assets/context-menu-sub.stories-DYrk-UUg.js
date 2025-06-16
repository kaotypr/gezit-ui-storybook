import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{j as t,a,b as m,c,k as o,l as r,e as n}from"./context-menu-BUOGe9uS.js";import{C as s}from"./chevron-right-DLQnG4vI.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-D_-GhB2M.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-BZRV-XMv.js";import"./index-DKwnRhPn.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-lA-nzH4g.js";import"./index-CROEQnJ0.js";import"./cn-BEHD0UYf.js";import"./circle-YboQvhN-.js";import"./createLucideIcon-CAcKuqHj.js";import"./check-C8XpHW4d.js";const q={title:"UI/ContextMenu/ContextMenuSub",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{description:"The controlled open state of the sub menu.",control:"boolean"},onOpenChange:{description:"Event handler called when the open state changes.",action:"onOpenChange"},defaultOpen:{description:"The open state of the sub menu when it is initially rendered.",control:"boolean"}}},u={render:()=>e.jsxs(a,{children:[e.jsx(m,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsx(c,{className:"w-64",children:e.jsxs(t,{children:[e.jsxs(o,{children:["More Tools",e.jsx(s,{className:"ml-auto"})]}),e.jsxs(r,{className:"w-48",children:[e.jsx(n,{children:"Save Page As..."}),e.jsx(n,{children:"Create Shortcut..."}),e.jsx(n,{children:"Name Window..."})]})]})})]})},x={render:()=>e.jsxs(a,{children:[e.jsx(m,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(c,{className:"w-64",children:[e.jsxs(t,{children:[e.jsxs(o,{children:["File",e.jsx(s,{className:"ml-auto"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"New"}),e.jsx(n,{children:"Open"}),e.jsx(n,{children:"Save"})]})]}),e.jsxs(t,{children:[e.jsxs(o,{children:["Edit",e.jsx(s,{className:"ml-auto"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Cut"}),e.jsx(n,{children:"Copy"}),e.jsx(n,{children:"Paste"})]})]})]})]})},i={render:()=>e.jsxs(a,{children:[e.jsx(m,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsx(c,{className:"w-64",children:e.jsxs(t,{children:[e.jsxs(o,{children:["Export",e.jsx(s,{className:"ml-auto"})]}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsxs(o,{children:["PDF",e.jsx(s,{className:"ml-auto"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"Export as PDF"}),e.jsx(n,{children:"Print to PDF"})]})]}),e.jsxs(t,{children:[e.jsxs(o,{children:["Image",e.jsx(s,{className:"ml-auto"})]}),e.jsxs(r,{children:[e.jsx(n,{children:"PNG"}),e.jsx(n,{children:"JPEG"}),e.jsx(n,{children:"GIF"})]})]})]})]})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            More Tools
            <ChevronRight className="ml-auto" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Save Page As...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            File
            <ChevronRight className="ml-auto" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>New</ContextMenuItem>
            <ContextMenuItem>Open</ContextMenuItem>
            <ContextMenuItem>Save</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            Edit
            <ChevronRight className="ml-auto" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Cut</ContextMenuItem>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Paste</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
}`,...x.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            Export
            <ChevronRight className="ml-auto" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                PDF
                <ChevronRight className="ml-auto" />
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Export as PDF</ContextMenuItem>
                <ContextMenuItem>Print to PDF</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                Image
                <ChevronRight className="ml-auto" />
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>PNG</ContextMenuItem>
                <ContextMenuItem>JPEG</ContextMenuItem>
                <ContextMenuItem>GIF</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
}`,...i.parameters?.docs?.source}}};const z=["Default","WithMultipleSubMenus","WithNestedSubMenus"];export{u as Default,x as WithMultipleSubMenus,i as WithNestedSubMenus,z as __namedExportsOrder,q as default};
