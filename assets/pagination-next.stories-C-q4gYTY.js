import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{e as i,a as r,P as s,b as c}from"./pagination-DJT6yGrl.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";const j={title:"UI/Pagination/PaginationNext",component:i,parameters:{layout:"centered",docs:{description:{component:"Next page navigation button. Must be used within a PaginationItem component."}}},argTypes:{href:{description:"The URL that the button points to",control:"text"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},n=()=>t.jsx(r,{children:t.jsx(s,{children:t.jsx(c,{children:t.jsx(i,{href:"#"})})})});n.parameters={docs:{description:{story:"Basic usage of the PaginationNext component."}}};const a=()=>t.jsx(r,{children:t.jsx(s,{children:t.jsx(c,{children:t.jsx(i,{href:"#",children:"Forward"})})})});a.parameters={docs:{description:{story:"PaginationNext with custom text."}}};const e=()=>t.jsx(r,{children:t.jsx(s,{children:t.jsx(c,{children:t.jsx(i,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90"})})})});e.parameters={docs:{description:{story:"PaginationNext with custom styling using Tailwind CSS classes."}}};const o=()=>t.jsx(r,{children:t.jsx(s,{children:t.jsx(c,{children:t.jsx(i,{href:"#",className:"pointer-events-none opacity-50"})})})});o.parameters={docs:{description:{story:"PaginationNext in disabled state."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithCustomText"};e.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationNext href="#">Forward</PaginationNext>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationNext href="#" className="bg-primary text-primary-foreground hover:bg-primary/90" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationNext href="#" className="pointer-events-none opacity-50" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...o.parameters?.docs?.source}}};const C=["Default","WithCustomText","CustomStyling","Disabled"];export{e as CustomStyling,n as Default,o as Disabled,a as WithCustomText,C as __namedExportsOrder,j as default};
