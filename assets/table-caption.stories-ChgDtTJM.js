import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as o,a as i,b as d,c as s,d as a,T as c,e as l}from"./table-fdsJhJ47.js";import"./cn-BEHD0UYf.js";const h={title:"UI/Table/TableCaption",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A caption for the table. Must be used within a Table component.

This component is built on top of the native HTML caption element.`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},t={render:()=>e.jsxs(i,{children:[e.jsx(o,{children:"A list of your recent invoices."}),e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Invoice"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Amount"})]})}),e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(l,{children:"INV001"}),e.jsx(l,{children:"Paid"}),e.jsx(l,{children:"$250.00"})]})})]}),parameters:{docs:{description:{story:"Default table caption with basic styling."}}}},r={render:()=>e.jsxs(i,{children:[e.jsx(o,{className:"text-lg font-semibold text-slate-900",children:"Monthly Sales Report"}),e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"Month"}),e.jsx(a,{children:"Sales"}),e.jsx(a,{children:"Growth"})]})}),e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(l,{children:"January"}),e.jsx(l,{children:"$10,000"}),e.jsx(l,{children:"+5%"})]})})]}),parameters:{docs:{description:{story:"Table caption with custom styling."}}}},n={render:()=>e.jsxs(i,{children:[e.jsx(o,{children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg font-semibold",children:"User Statistics"}),e.jsx("span",{className:"text-sm text-slate-500",children:"Data as of March 15, 2024"})]})}),e.jsx(d,{children:e.jsxs(s,{children:[e.jsx(a,{children:"User Type"}),e.jsx(a,{children:"Count"}),e.jsx(a,{children:"Percentage"})]})}),e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(l,{children:"Active Users"}),e.jsx(l,{children:"1,234"}),e.jsx(l,{children:"75%"})]})})]}),parameters:{docs:{description:{story:"Table caption with additional description and metadata."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default table caption with basic styling.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableCaption className="text-lg font-semibold text-slate-900">
          Monthly Sales Report
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Month</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Growth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>January</TableCell>
            <TableCell>$10,000</TableCell>
            <TableCell>+5%</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table caption with custom styling.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Table>
        <TableCaption>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">User Statistics</span>
            <span className="text-sm text-slate-500">Data as of March 15, 2024</span>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User Type</TableHead>
            <TableHead>Count</TableHead>
            <TableHead>Percentage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Active Users</TableCell>
            <TableCell>1,234</TableCell>
            <TableCell>75%</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Table caption with additional description and metadata.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","WithCustomStyling","WithDescription"];export{t as Default,r as WithCustomStyling,n as WithDescription,x as __namedExportsOrder,h as default};
