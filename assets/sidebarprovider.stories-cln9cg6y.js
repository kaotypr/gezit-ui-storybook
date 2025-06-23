import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as t,S as d,b as a,c as o,d as s,e as p,f as b,g as c,h as l}from"./sidebar-BnJHCepi.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-CEwucStK.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./sheet-DJUdPzdr.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";import"./tooltip-Bk_aNZjs.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-Bxcmxnpx.js";import"./use-is-mobile-C_WhzTHg.js";import"./input--pf6IO2E.js";const J={title:"UI/Sidebar/SidebarProvider",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Provides context for the sidebar. Must wrap Sidebar and related parts."}}},argTypes:{defaultOpen:{control:"boolean",defaultValue:!0,description:"Whether the sidebar is open by default."},children:{control:!1,description:"Sidebar content."}}},r={render:n=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(t,{...n,children:[e.jsxs(d,{children:[e.jsx(a,{children:"Header"}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(p,{children:e.jsx(b,{isActive:!0,children:"Dashboard"})})})}),e.jsx(c,{children:"Footer"})]}),e.jsx(l,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarProvider wrapping Sidebar and content."}}}},i={render:n=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(t,{...n,defaultOpen:!1,children:[e.jsxs(d,{children:[e.jsx(a,{children:"Header"}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(p,{children:e.jsx(b,{isActive:!0,children:"Dashboard"})})})}),e.jsx(c,{children:"Footer"})]}),e.jsx(l,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarProvider with sidebar closed by default."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider {...args}>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
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
        story: 'SidebarProvider wrapping Sidebar and content.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider {...args} defaultOpen={false}>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
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
        story: 'SidebarProvider with sidebar closed by default.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const K=["Default","ClosedByDefault"];export{i as ClosedByDefault,r as Default,K as __namedExportsOrder,J as default};
