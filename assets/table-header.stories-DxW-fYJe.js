import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as o,a as d,c as n,d as a,T as c,e as l}from"./table-fdsJhJ47.js";import"./cn-BEHD0UYf.js";const m={title:"UI/Table/TableHeader",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The header section of the table. Must be used within a Table component.

This component is built on top of the native HTML thead element.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},s={render:()=>e.jsxs(d,{children:[e.jsx(o,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]})})]}),parameters:{docs:{description:{story:"Default table header with basic column headers."}}}},t={render:()=>e.jsxs(d,{children:[e.jsx(o,{className:"bg-slate-100",children:e.jsxs(n,{children:[e.jsx(a,{className:"text-left font-bold text-slate-900",children:"Product"}),e.jsx(a,{className:"text-center font-bold text-slate-900",children:"Price"}),e.jsx(a,{className:"text-right font-bold text-slate-900",children:"Stock"})]})}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"Laptop"}),e.jsx(l,{className:"text-center",children:"$999.99"}),e.jsx(l,{className:"text-right",children:"50"})]})})]}),parameters:{docs:{description:{story:"Table header with custom styling and text alignment."}}}},r={render:()=>e.jsxs(d,{children:[e.jsxs(o,{children:[e.jsxs(n,{children:[e.jsx(a,{rowSpan:2,children:"Name"}),e.jsx(a,{colSpan:2,children:"Contact"})]}),e.jsxs(n,{children:[e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Phone"})]})]}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"+1 234 567 890"})]})})]}),parameters:{docs:{description:{story:"Table header with multiple rows and merged cells."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table header with basic column headers.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader className="bg-slate-100">
          <TableRow>
            <TableHead className="text-left font-bold text-slate-900">Product</TableHead>
            <TableHead className="text-center font-bold text-slate-900">Price</TableHead>
            <TableHead className="text-right font-bold text-slate-900">Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Laptop</TableCell>
            <TableCell className="text-center">$999.99</TableCell>
            <TableCell className="text-right">50</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table header with custom styling and text alignment.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2}>Name</TableHead>
            <TableHead colSpan={2}>Contact</TableHead>
          </TableRow>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>+1 234 567 890</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table header with multiple rows and merged cells.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const h=["Default","WithCustomStyling","WithMultipleRows"];export{s as Default,t as WithCustomStyling,r as WithMultipleRows,h as __namedExportsOrder,m as default};
