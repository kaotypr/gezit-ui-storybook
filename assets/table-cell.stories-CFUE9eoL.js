import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as l,a as d,b as i,c as a,d as s,T as o}from"./table-BbzDY2EN.js";import"./cn-BEHD0UYf.js";const m={title:"UI/Table/TableCell",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A cell in the table. Must be used within a TableRow component.

This component is built on top of the native HTML td element.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},r={render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Email"}),e.jsx(s,{children:"Role"})]})}),e.jsx(o,{children:e.jsxs(a,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]})})]}),parameters:{docs:{description:{story:"Default table cell with basic styling."}}}},n={render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Product"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Status"})]})}),e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsx(l,{className:"font-medium",children:"Laptop"}),e.jsx(l,{className:"text-right",children:"$999.99"}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800",children:"In Stock"})})]}),e.jsxs(a,{children:[e.jsx(l,{className:"font-medium",children:"Monitor"}),e.jsx(l,{className:"text-right",children:"$299.99"}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800",children:"Out of Stock"})})]})]})]}),parameters:{docs:{description:{story:"Table cells with custom styling and rich content."}}}},t={render:()=>e.jsxs(d,{children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Product"}),e.jsx(s,{children:"Price"})]})}),e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsx(l,{rowSpan:2,className:"align-middle",children:"Electronics"}),e.jsx(l,{children:"Laptop"}),e.jsx(l,{children:"$999.99"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Monitor"}),e.jsx(l,{children:"$299.99"})]}),e.jsxs(a,{children:[e.jsx(l,{rowSpan:2,className:"align-middle",children:"Furniture"}),e.jsx(l,{children:"Desk Chair"}),e.jsx(l,{children:"$199.99"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Desk"}),e.jsx(l,{children:"$399.99"})]})]})]}),parameters:{docs:{description:{story:"Table cells with row spanning and vertical alignment."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        story: 'Default table cell with basic styling.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Laptop</TableCell>
            <TableCell className="text-right">$999.99</TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                In Stock
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Monitor</TableCell>
            <TableCell className="text-right">$299.99</TableCell>
            <TableCell>
              <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                Out of Stock
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table cells with custom styling and rich content.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={2} className="align-middle">
              Electronics
            </TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$999.99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Monitor</TableCell>
            <TableCell>$299.99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2} className="align-middle">
              Furniture
            </TableCell>
            <TableCell>Desk Chair</TableCell>
            <TableCell>$199.99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desk</TableCell>
            <TableCell>$399.99</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table cells with row spanning and vertical alignment.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","WithCustomStyling","WithMergedCells"];export{r as Default,n as WithCustomStyling,t as WithMergedCells,x as __namedExportsOrder,m as default};
