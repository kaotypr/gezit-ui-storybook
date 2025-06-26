import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as o,a as T,b,c as a,d as s,T as i,e as l}from"./table-fdsJhJ47.js";import"./cn-BEHD0UYf.js";const x={title:"UI/Table/TableFooter",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The footer section of the table. Must be used within a Table component.

This component is built on top of the native HTML tfoot element.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},r={render:()=>e.jsxs(T,{children:[e.jsx(b,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Product"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Quantity"}),e.jsx(s,{children:"Total"})]})}),e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Laptop"}),e.jsx(l,{children:"$999.99"}),e.jsx(l,{children:"2"}),e.jsx(l,{children:"$1,999.98"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Monitor"}),e.jsx(l,{children:"$299.99"}),e.jsx(l,{children:"1"}),e.jsx(l,{children:"$299.99"})]})]}),e.jsx(o,{children:e.jsxs(a,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{children:"$2,299.97"})]})})]}),parameters:{docs:{description:{story:"Default table footer with a total row."}}}},t={render:()=>e.jsxs(T,{children:[e.jsx(b,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Item"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Quantity"}),e.jsx(s,{children:"Total"})]})}),e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(l,{children:"Desk Chair"}),e.jsx(l,{children:"$199.99"}),e.jsx(l,{children:"2"}),e.jsx(l,{children:"$399.98"})]})}),e.jsxs(o,{className:"bg-slate-50",children:[e.jsxs(a,{children:[e.jsx(l,{colSpan:2,className:"text-right font-medium",children:"Subtotal"}),e.jsx(l,{className:"text-right",children:"2 items"}),e.jsx(l,{className:"text-right font-bold",children:"$399.98"})]}),e.jsxs(a,{children:[e.jsx(l,{colSpan:2,className:"text-right font-medium",children:"Tax (10%)"}),e.jsx(l,{}),e.jsx(l,{className:"text-right",children:"$40.00"})]}),e.jsxs(a,{children:[e.jsx(l,{colSpan:2,className:"text-right font-bold",children:"Total"}),e.jsx(l,{}),e.jsx(l,{className:"text-right font-bold",children:"$439.98"})]})]})]}),parameters:{docs:{description:{story:"Table footer with custom styling and multiple summary rows."}}}},n={render:()=>e.jsxs(T,{children:[e.jsx(b,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Category"}),e.jsx(s,{children:"Sales"}),e.jsx(s,{children:"Target"}),e.jsx(s,{children:"Variance"})]})}),e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Electronics"}),e.jsx(l,{children:"$15,000"}),e.jsx(l,{children:"$20,000"}),e.jsx(l,{children:"-$5,000"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Furniture"}),e.jsx(l,{children:"$25,000"}),e.jsx(l,{children:"$22,000"}),e.jsx(l,{children:"+$3,000"})]})]}),e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsx(l,{className:"font-medium",children:"Q1 Summary"}),e.jsx(l,{children:"$40,000"}),e.jsx(l,{children:"$42,000"}),e.jsx(l,{children:"-$2,000"})]}),e.jsxs(a,{children:[e.jsx(l,{className:"font-medium",children:"Q2 Target"}),e.jsx(l,{children:"$45,000"}),e.jsx(l,{children:"$45,000"}),e.jsx(l,{children:"$0"})]})]})]}),parameters:{docs:{description:{story:"Table footer with multiple sections showing different types of summary data."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Laptop</TableCell>
            <TableCell>$999.99</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$1,999.98</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Monitor</TableCell>
            <TableCell>$299.99</TableCell>
            <TableCell>1</TableCell>
            <TableCell>$299.99</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>$2,299.97</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table footer with a total row.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Desk Chair</TableCell>
            <TableCell>$199.99</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$399.98</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className="bg-slate-50">
          <TableRow>
            <TableCell colSpan={2} className="text-right font-medium">
              Subtotal
            </TableCell>
            <TableCell className="text-right">2 items</TableCell>
            <TableCell className="text-right font-bold">$399.98</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className="text-right font-medium">
              Tax (10%)
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">$40.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className="text-right font-bold">
              Total
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right font-bold">$439.98</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table footer with custom styling and multiple summary rows.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Target</TableHead>
            <TableHead>Variance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Electronics</TableCell>
            <TableCell>$15,000</TableCell>
            <TableCell>$20,000</TableCell>
            <TableCell>-$5,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Furniture</TableCell>
            <TableCell>$25,000</TableCell>
            <TableCell>$22,000</TableCell>
            <TableCell>+$3,000</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-medium">Q1 Summary</TableCell>
            <TableCell>$40,000</TableCell>
            <TableCell>$42,000</TableCell>
            <TableCell>-$2,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Q2 Target</TableCell>
            <TableCell>$45,000</TableCell>
            <TableCell>$45,000</TableCell>
            <TableCell>$0</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table footer with multiple sections showing different types of summary data.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","WithCustomStyling","WithMultipleSections"];export{r as Default,t as WithCustomStyling,n as WithMultipleSections,m as __namedExportsOrder,x as default};
