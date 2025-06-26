import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as n,a as d,b as i,c as s,d as l,e as a}from"./table-BbzDY2EN.js";import"./cn-BEHD0UYf.js";const m={title:"UI/Table/TableBody",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The main content section of the table. Must be used within a Table component.

This component is built on top of the native HTML tbody element.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},r={render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Email"}),e.jsx(l,{children:"Role"})]})}),e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"john@example.com"}),e.jsx(a,{children:"Admin"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"jane@example.com"}),e.jsx(a,{children:"User"})]})]})]}),parameters:{docs:{description:{story:"Default table body with multiple rows of data."}}}},t={render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(l,{children:"Product"}),e.jsx(l,{children:"Price"}),e.jsx(l,{children:"Stock"})]})}),e.jsxs(n,{className:"divide-y divide-slate-200",children:[e.jsxs(s,{className:"hover:bg-slate-50",children:[e.jsx(a,{className:"font-medium",children:"Laptop"}),e.jsx(a,{children:"$999.99"}),e.jsx(a,{className:"text-right",children:"50"})]}),e.jsxs(s,{className:"hover:bg-slate-50",children:[e.jsx(a,{className:"font-medium",children:"Monitor"}),e.jsx(a,{children:"$299.99"}),e.jsx(a,{className:"text-right",children:"30"})]})]})]}),parameters:{docs:{description:{story:"Table body with custom styling including hover effects and dividers."}}}},o={render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Email"}),e.jsx(l,{children:"Role"})]})}),e.jsx(n,{children:e.jsx(s,{children:e.jsx(a,{colSpan:3,className:"h-24 text-center text-slate-500",children:"No data available"})})})]}),parameters:{docs:{description:{story:"Table body with an empty state message."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table body with multiple rows of data.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-slate-200">
          <TableRow className="hover:bg-slate-50">
            <TableCell className="font-medium">Laptop</TableCell>
            <TableCell>$999.99</TableCell>
            <TableCell className="text-right">50</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-50">
            <TableCell className="font-medium">Monitor</TableCell>
            <TableCell>$299.99</TableCell>
            <TableCell className="text-right">30</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table body with custom styling including hover effects and dividers.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center text-slate-500">
              No data available
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table body with an empty state message.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","WithCustomStyling","WithEmptyState"];export{r as Default,t as WithCustomStyling,o as WithEmptyState,h as __namedExportsOrder,m as default};
