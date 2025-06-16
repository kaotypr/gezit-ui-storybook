import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{c as o,a as s,P as r,b as c}from"./pagination-BLbVXC1p.js";import"./button-DVhd8Mv9.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-DOqqoHvp.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-right-DLQnG4vI.js";import"./ellipsis-3urqSHmI.js";const v={title:"UI/Pagination/PaginationPrevious",component:o,parameters:{layout:"centered",docs:{description:{component:"Previous page navigation button. Must be used within a PaginationItem component."}}},argTypes:{href:{description:"The URL that the button points to",control:"text"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(c,{children:n.jsx(o,{href:"#"})})})});t.parameters={docs:{description:{story:"Basic usage of the PaginationPrevious component."}}};const a=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(c,{children:n.jsx(o,{href:"#",children:"Back"})})})});a.parameters={docs:{description:{story:"PaginationPrevious with custom text."}}};const i=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(c,{children:n.jsx(o,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90"})})})});i.parameters={docs:{description:{story:"PaginationPrevious with custom styling using Tailwind CSS classes."}}};const e=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(c,{children:n.jsx(o,{href:"#",className:"pointer-events-none opacity-50"})})})});e.parameters={docs:{description:{story:"PaginationPrevious in disabled state."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithCustomText"};i.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};e.__docgenInfo={description:"",methods:[],displayName:"Disabled"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#">Back</PaginationPrevious>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" className="bg-primary text-primary-foreground hover:bg-primary/90" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" className="pointer-events-none opacity-50" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...e.parameters?.docs?.source}}};const C=["Default","WithCustomText","CustomStyling","Disabled"];export{i as CustomStyling,t as Default,e as Disabled,a as WithCustomText,C as __namedExportsOrder,v as default};
