import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{a as r,P as s,b as i,c as g,d as a,e as m,f as p}from"./pagination-BLbVXC1p.js";import"./button-DVhd8Mv9.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./chevron-left-DOqqoHvp.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevron-right-DLQnG4vI.js";import"./ellipsis-3urqSHmI.js";const v={title:"UI/Pagination",component:r,parameters:{layout:"centered",docs:{description:{component:`
A pagination component for navigating through multiple pages of content.

### Component Parts
- [PaginationContent](?path=/story/ui-pagination-paginationcontent--default): Container for pagination items.
- [PaginationItem](?path=/story/ui-pagination-paginationitem--default): Individual item within the pagination.
- [PaginationLink](?path=/story/ui-pagination-paginationlink--default): Clickable page number or navigation link.
- [PaginationPrevious](?path=/story/ui-pagination-paginationprevious--default): Previous page navigation button.
- [PaginationNext](?path=/story/ui-pagination-paginationnext--default): Next page navigation button.
- [PaginationEllipsis](?path=/story/ui-pagination-paginationellipsis--default): Ellipsis indicator for skipped pages.
        `}}},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},t=()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"3"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})});t.parameters={docs:{description:{story:"Basic usage of the Pagination component."}}};const e=()=>n.jsx(r,{children:n.jsxs(s,{children:[n.jsx(i,{children:n.jsx(g,{href:"#"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"1"})}),n.jsx(i,{children:n.jsx(p,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"10"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,children:"11"})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"12"})}),n.jsx(i,{children:n.jsx(p,{})}),n.jsx(i,{children:n.jsx(a,{href:"#",children:"20"})}),n.jsx(i,{children:n.jsx(m,{href:"#"})})]})});e.parameters={docs:{description:{story:"Pagination with ellipsis for large page ranges."}}};const o=()=>n.jsx(r,{className:"bg-muted p-4 rounded-lg",children:n.jsxs(s,{className:"gap-2",children:[n.jsx(i,{children:n.jsx(g,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90"})}),n.jsx(i,{children:n.jsx(a,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90",children:"1"})}),n.jsx(i,{children:n.jsx(a,{href:"#",isActive:!0,className:"bg-secondary",children:"2"})}),n.jsx(i,{children:n.jsx(a,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90",children:"3"})}),n.jsx(i,{children:n.jsx(m,{href:"#",className:"bg-primary text-primary-foreground hover:bg-primary/90"})})]})});o.parameters={docs:{description:{story:"Pagination with custom styling using Tailwind CSS classes."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"WithEllipsis"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Pagination>
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
    </Pagination>;
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            11
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Pagination className="bg-muted p-4 rounded-lg">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious href="#" className="bg-primary text-primary-foreground hover:bg-primary/90" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-primary text-primary-foreground hover:bg-primary/90">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className="bg-secondary">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-primary text-primary-foreground hover:bg-primary/90">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="bg-primary text-primary-foreground hover:bg-primary/90" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>;
}`,...o.parameters?.docs?.source}}};const b=["Default","WithEllipsis","CustomStyling"];export{o as CustomStyling,t as Default,e as WithEllipsis,b as __namedExportsOrder,v as default};
