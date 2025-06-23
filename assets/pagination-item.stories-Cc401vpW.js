import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{b as o,a as s,P as r,d as m,c,e as d}from"./pagination-DJT6yGrl.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";const N={title:"UI/Pagination/PaginationItem",component:o,parameters:{layout:"centered",docs:{description:{component:"Individual item within the pagination. Must be used within a PaginationContent component."}}},tags:["autodocs"]},t=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(o,{children:n.jsx(m,{href:"#",children:"1"})})})});t.parameters={docs:{description:{story:"Basic usage of the PaginationItem component with a link."}}};const i=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(o,{children:n.jsx(c,{href:"#"})})})});i.parameters={docs:{description:{story:"PaginationItem with a previous page button."}}};const a=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(o,{children:n.jsx(d,{href:"#"})})})});a.parameters={docs:{description:{story:"PaginationItem with a next page button."}}};const e=()=>n.jsx(s,{children:n.jsx(r,{children:n.jsx(o,{className:"bg-muted rounded-md",children:n.jsx(m,{href:"#",className:"hover:no-underline",children:"1"})})})});e.parameters={docs:{description:{story:"PaginationItem with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"WithPreviousButton"};a.__docgenInfo={description:"",methods:[],displayName:"WithNextButton"};e.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem className="bg-muted rounded-md">
        <PaginationLink href="#" className="hover:no-underline">
          1
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...e.parameters?.docs?.source}}};const _=["Default","WithPreviousButton","WithNextButton","CustomStyling"];export{e as CustomStyling,t as Default,a as WithNextButton,i as WithPreviousButton,_ as __namedExportsOrder,N as default};
