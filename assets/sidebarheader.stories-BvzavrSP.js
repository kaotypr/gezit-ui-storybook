import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as d,a,S as n,c as o,d as s,e as c,f as p,g as h,h as b,i as m}from"./sidebar-BnJHCepi.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-CEwucStK.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./sheet-DJUdPzdr.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";import"./tooltip-Bk_aNZjs.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-Bxcmxnpx.js";import"./use-is-mobile-C_WhzTHg.js";import"./input--pf6IO2E.js";const L={title:"UI/Sidebar/SidebarHeader",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Header section of the sidebar. Must be used within Sidebar."}}},argTypes:{children:{control:!1,description:"Header content."}}},r={render:t=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(d,{...t,children:"Header"}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(c,{children:e.jsx(p,{isActive:!0,children:"Dashboard"})})})}),e.jsx(h,{children:"Footer"})]}),e.jsx(b,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarHeader with default content."}}}},i={render:t=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(d,{...t,children:e.jsx(m,{placeholder:"Search..."})}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(c,{children:e.jsx(p,{isActive:!0,children:"Dashboard"})})})}),e.jsx(h,{children:"Footer"})]}),e.jsx(b,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarHeader with a search input."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader {...args}>Header</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div style={{
          padding: 32
        }}>Main Content</div>
        </SidebarInset>
      </SidebarProvider>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'SidebarHeader with default content.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader {...args}>
            <SidebarInput placeholder="Search..." />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div style={{
          padding: 32
        }}>Main Content</div>
        </SidebarInset>
      </SidebarProvider>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'SidebarHeader with a search input.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const N=["Default","WithInput"];export{r as Default,i as WithInput,N as __namedExportsOrder,L as default};
