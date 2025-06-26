import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as n,f as i,b as d,c as a,d as r,T as b,e as l,g as c}from"./table-fdsJhJ47.js";import"./cn-BEHD0UYf.js";const C={title:"UI/Table",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A responsive table component for displaying data in rows and columns.

### Component Parts
- [TableHeader](?path=/story/ui-table-tableheader--default): The header section of the table.
- [TableBody](?path=/story/ui-table-tablebody--default): The main content section of the table.
- [TableFooter](?path=/story/ui-table-tablefooter--default): The footer section of the table.
- [TableHead](?path=/story/ui-table-tablehead--default): A header cell in the table.
- [TableRow](?path=/story/ui-table-tablerow--default): A row in the table.
- [TableCell](?path=/story/ui-table-tablecell--default): A cell in the table.
- [TableCaption](?path=/story/ui-table-tablecaption--default): A caption for the table.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},s={render:()=>e.jsxs(n,{children:[e.jsx(i,{children:"A list of your recent invoices."}),e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Invoice"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Method"}),e.jsx(r,{children:"Amount"})]})}),e.jsxs(b,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"INV001"}),e.jsx(l,{children:"Paid"}),e.jsx(l,{children:"Credit Card"}),e.jsx(l,{children:"$250.00"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"INV002"}),e.jsx(l,{children:"Pending"}),e.jsx(l,{children:"PayPal"}),e.jsx(l,{children:"$150.00"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"INV003"}),e.jsx(l,{children:"Unpaid"}),e.jsx(l,{children:"Bank Transfer"}),e.jsx(l,{children:"$350.00"})]})]}),e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{children:"$750.00"})]})})]}),parameters:{docs:{description:{story:"Default table with header, body, and footer sections."}}}},o={render:()=>e.jsxs(n,{className:"border-collapse border border-slate-400",children:[e.jsx(d,{children:e.jsxs(a,{className:"bg-slate-100",children:[e.jsx(r,{className:"border border-slate-300",children:"Name"}),e.jsx(r,{className:"border border-slate-300",children:"Age"}),e.jsx(r,{className:"border border-slate-300",children:"Location"})]})}),e.jsxs(b,{children:[e.jsxs(a,{children:[e.jsx(l,{className:"border border-slate-300",children:"John Doe"}),e.jsx(l,{className:"border border-slate-300",children:"30"}),e.jsx(l,{className:"border border-slate-300",children:"New York"})]}),e.jsxs(a,{children:[e.jsx(l,{className:"border border-slate-300",children:"Jane Smith"}),e.jsx(l,{className:"border border-slate-300",children:"25"}),e.jsx(l,{className:"border border-slate-300",children:"Los Angeles"})]})]})]}),parameters:{docs:{description:{story:"Table with custom styling using Tailwind CSS classes."}}}},t={render:()=>e.jsx("div",{className:"w-full max-w-[600px]",children:e.jsxs(n,{children:[e.jsx(i,{children:"Responsive table example"}),e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(r,{children:"Product"}),e.jsx(r,{children:"Category"}),e.jsx(r,{children:"Price"}),e.jsx(r,{children:"Stock"})]})}),e.jsxs(b,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Laptop"}),e.jsx(l,{children:"Electronics"}),e.jsx(l,{children:"$999.99"}),e.jsx(l,{children:"50"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Desk Chair"}),e.jsx(l,{children:"Furniture"}),e.jsx(l,{children:"$199.99"}),e.jsx(l,{children:"25"})]})]})]})}),parameters:{docs:{description:{story:"Table with responsive layout, constrained to a maximum width."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV003</TableCell>
            <TableCell>Unpaid</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell>$350.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table with header, body, and footer sections.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table className="border-collapse border border-slate-400">
        <TableHeader>
          <TableRow className="bg-slate-100">
            <TableHead className="border border-slate-300">Name</TableHead>
            <TableHead className="border border-slate-300">Age</TableHead>
            <TableHead className="border border-slate-300">Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-slate-300">John Doe</TableCell>
            <TableCell className="border border-slate-300">30</TableCell>
            <TableCell className="border border-slate-300">New York</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-slate-300">Jane Smith</TableCell>
            <TableCell className="border border-slate-300">25</TableCell>
            <TableCell className="border border-slate-300">Los Angeles</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom styling using Tailwind CSS classes.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-full max-w-[600px]">
        <Table>
          <TableCaption>Responsive table example</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Laptop</TableCell>
              <TableCell>Electronics</TableCell>
              <TableCell>$999.99</TableCell>
              <TableCell>50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desk Chair</TableCell>
              <TableCell>Furniture</TableCell>
              <TableCell>$199.99</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with responsive layout, constrained to a maximum width.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const x=["Default","WithCustomStyling","WithResponsiveLayout"];export{s as Default,o as WithCustomStyling,t as WithResponsiveLayout,x as __namedExportsOrder,C as default};
