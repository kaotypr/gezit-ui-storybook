import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as t,a as s,b as d,c as u,h as i,i as a}from"./context-menu-DqVBaLjQ.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./index-BInWWs9D.js";import"./cn-BEHD0UYf.js";import"./circle-C1EB2cBL.js";import"./createLucideIcon-BROHhCyT.js";import"./check-DLjw-kwL.js";import"./chevron-right-BtqEn5DN.js";const _={title:"UI/ContextMenu/ContextMenuRadioItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},value:{description:"The value of the radio item.",control:"text"},disabled:{description:"When true, prevents the user from interacting with the radio item.",control:"boolean"}}},n={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsx(u,{className:"w-64",children:e.jsxs(i,{value:"pedro",children:[e.jsx(a,{inset:!0,children:"People"}),e.jsx(t,{value:"pedro",children:"Pedro Duarte"}),e.jsx(t,{value:"colm",children:"Colm Tuite"}),e.jsx(t,{value:"disabled",disabled:!0,children:"Disabled Option"})]})})]})},o={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(u,{className:"w-64",children:[e.jsxs(i,{value:"light",children:[e.jsx(a,{inset:!0,children:"Theme"}),e.jsx(t,{value:"light",children:"Light"}),e.jsx(t,{value:"dark",children:"Dark"}),e.jsx(t,{value:"system",children:"System"})]}),e.jsxs(i,{value:"en",children:[e.jsx(a,{inset:!0,children:"Language"}),e.jsx(t,{value:"en",children:"English"}),e.jsx(t,{value:"fr",children:"French"}),e.jsx(t,{value:"de",children:"German"})]})]})]})},r={render:()=>e.jsxs(s,{children:[e.jsx(d,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsx(u,{className:"w-64",children:e.jsxs(i,{value:"option1",children:[e.jsx(a,{inset:!0,children:"Options"}),e.jsx(t,{value:"option1",children:"Selected Option"}),e.jsx(t,{value:"option2",children:"Unselected Option"}),e.jsx(t,{value:"option3",disabled:!0,children:"Disabled Option"})]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          <ContextMenuRadioItem value="disabled" disabled>
            Disabled Option
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuRadioGroup value="light">
          <ContextMenuLabel inset>Theme</ContextMenuLabel>
          <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuRadioGroup value="en">
          <ContextMenuLabel inset>Language</ContextMenuLabel>
          <ContextMenuRadioItem value="en">English</ContextMenuRadioItem>
          <ContextMenuRadioItem value="fr">French</ContextMenuRadioItem>
          <ContextMenuRadioItem value="de">German</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuRadioGroup value="option1">
          <ContextMenuLabel inset>Options</ContextMenuLabel>
          <ContextMenuRadioItem value="option1">Selected Option</ContextMenuRadioItem>
          <ContextMenuRadioItem value="option2">Unselected Option</ContextMenuRadioItem>
          <ContextMenuRadioItem value="option3" disabled>
            Disabled Option
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
}`,...r.parameters?.docs?.source}}};const q=["Default","WithMultipleGroups","WithStates"];export{n as Default,o as WithMultipleGroups,r as WithStates,q as __namedExportsOrder,_ as default};
