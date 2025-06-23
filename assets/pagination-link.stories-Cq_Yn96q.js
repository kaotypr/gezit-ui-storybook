import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{d as i,a as s,P as c,b as r}from"./pagination-DJT6yGrl.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";const y={title:"UI/Pagination/PaginationLink",component:i,parameters:{layout:"centered",docs:{description:{component:"Clickable page number or navigation link. Must be used within a PaginationItem component."}}},argTypes:{href:{description:"The URL that the link points to",control:"text"},isActive:{description:"Whether the link represents the current page",control:"boolean"},size:{description:"The size of the link button",control:"select",options:["xs","sm","md","lg","xl","icon"]},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>n.jsx(s,{children:n.jsx(c,{children:n.jsx(r,{children:n.jsx(i,{href:"#",children:"1"})})})});t.parameters={docs:{description:{story:"Basic usage of the PaginationLink component."}}};const e=()=>n.jsx(s,{children:n.jsx(c,{children:n.jsx(r,{children:n.jsx(i,{href:"#",isActive:!0,children:"1"})})})});e.parameters={docs:{description:{story:"PaginationLink in active state."}}};const a=()=>n.jsx(s,{children:n.jsxs(c,{className:"gap-4",children:[n.jsx(r,{children:n.jsx(i,{href:"#",size:"sm",children:"1"})}),n.jsx(r,{children:n.jsx(i,{href:"#",size:"md",children:"2"})}),n.jsx(r,{children:n.jsx(i,{href:"#",size:"lg",children:"3"})})]})});a.parameters={docs:{description:{story:"PaginationLink with different size variants."}}};const o=()=>n.jsx(s,{children:n.jsx(c,{children:n.jsx(r,{children:n.jsx(i,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",children:"1"})})})});o.parameters={docs:{description:{story:"PaginationLink with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"Active"};a.__docgenInfo={description:"",methods:[],displayName:"WithDifferentSizes"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          1
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent className="gap-4">
      <PaginationItem>
        <PaginationLink href="#" size="sm">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size="md">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" size="lg">
          3
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationLink href="#" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
          1
        </PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...o.parameters?.docs?.source}}};const I=["Default","Active","WithDifferentSizes","CustomStyling"];export{e as Active,o as CustomStyling,t as Default,a as WithDifferentSizes,I as __namedExportsOrder,y as default};
