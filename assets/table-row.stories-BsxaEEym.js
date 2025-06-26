import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as a,a as t,b as d,d as r,T as c,e as l}from"./table-fdsJhJ47.js";import"./cn-BEHD0UYf.js";const h={title:"UI/Table/TableRow",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A row in the table. Must be used within a TableHeader, TableBody, or TableFooter component.

This component is built on top of the native HTML tr element.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},s={render:()=>e.jsxs(t,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"})]})]})]}),parameters:{docs:{description:{story:"Default table row with basic styling."}}}},o={render:()=>e.jsxs(t,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Product"}),e.jsx(r,{children:"Price"}),e.jsx(r,{children:"Stock"})]})}),e.jsxs(c,{children:[e.jsxs(a,{className:"hover:bg-slate-50 cursor-pointer",children:[e.jsx(l,{children:"Laptop"}),e.jsx(l,{children:"$999.99"}),e.jsx(l,{children:"50"})]}),e.jsxs(a,{className:"hover:bg-slate-50 cursor-pointer",children:[e.jsx(l,{children:"Monitor"}),e.jsx(l,{children:"$299.99"}),e.jsx(l,{children:"30"})]})]})]}),parameters:{docs:{description:{story:"Table rows with hover effect and cursor pointer."}}}},n={render:()=>e.jsxs(t,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"Role"})]})}),e.jsxs(c,{children:[e.jsxs(a,{"data-state":"selected",className:"bg-slate-100",children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"})]})]})]}),parameters:{docs:{description:{story:"Table row with selected state styling."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        story: 'Default table row with basic styling.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-slate-50 cursor-pointer">
            <TableCell>Laptop</TableCell>
            <TableCell>$999.99</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
          <TableRow className="hover:bg-slate-50 cursor-pointer">
            <TableCell>Monitor</TableCell>
            <TableCell>$299.99</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table rows with hover effect and cursor pointer.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TableRow data-state="selected" className="bg-slate-100">
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
        story: 'Table row with selected state styling.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","WithHoverEffect","WithSelectedState"];export{s as Default,o as WithHoverEffect,n as WithSelectedState,m as __namedExportsOrder,h as default};
