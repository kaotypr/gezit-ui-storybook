import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{P as s,a as r,b as i,c as g,d as a,e as m}from"./pagination-DJT6yGrl.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";const k={title:"UI/Pagination/PaginationContent",component:s,parameters:{layout:"centered",docs:{description:{component:"Container for pagination items. Must be used within a Pagination component."}}},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})});t.parameters={docs:{description:{story:"Basic usage of the PaginationContent component."}}};const e=()=>n.jsx(r,{children:n.jsxs(s,{className:"gap-4",children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})});e.parameters={docs:{description:{story:"PaginationContent with custom spacing between items."}}};const o=()=>n.jsx(r,{children:n.jsxs(s,{className:"justify-end",children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"2"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})});o.parameters={docs:{description:{story:"PaginationContent with right alignment."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomSpacing"};o.__docgenInfo={description:"",methods:[],displayName:"CustomAlignment"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent className="gap-4">
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent className="justify-end">
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...o.parameters?.docs?.source}}};const L=["Default","CustomSpacing","CustomAlignment"];export{o as CustomAlignment,e as CustomSpacing,t as Default,L as __namedExportsOrder,k as default};
