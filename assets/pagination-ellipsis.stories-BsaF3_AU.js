import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{f as o,a as e,P as r,b as s}from"./pagination-DJT6yGrl.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-CeDv6gDB.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-right-BtqEn5DN.js";import"./ellipsis-DKqvu74r.js";const j={title:"UI/Pagination/PaginationEllipsis",component:o,parameters:{layout:"centered",docs:{description:{component:"Ellipsis indicator for skipped pages. Must be used within a PaginationItem component."}}},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>n.jsx(e,{children:n.jsx(r,{children:n.jsx(s,{children:n.jsx(o,{})})})});i.parameters={docs:{description:{story:"Basic usage of the PaginationEllipsis component."}}};const t=()=>n.jsx(e,{children:n.jsxs(r,{children:[n.jsx(s,{children:n.jsx(o,{})}),n.jsx(s,{children:n.jsx(o,{})})]})});t.parameters={docs:{description:{story:"PaginationEllipsis used multiple times in a pagination context."}}};const a=()=>n.jsx(e,{children:n.jsx(r,{children:n.jsx(s,{children:n.jsx(o,{className:"text-primary hover:text-primary/80"})})})});a.parameters={docs:{description:{story:"PaginationEllipsis with custom styling using Tailwind CSS classes."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InContext"};a.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationEllipsis className="text-primary hover:text-primary/80" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`,...a.parameters?.docs?.source}}};const C=["Default","InContext","CustomStyling"];export{a as CustomStyling,i as Default,t as InContext,C as __namedExportsOrder,j as default};
