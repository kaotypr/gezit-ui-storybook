import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as o,a as s,S as c,b,c as m,d as t,e as d,f as a,h as p}from"./sidebar-BnJHCepi.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-CEwucStK.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./sheet-DJUdPzdr.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";import"./tooltip-Bk_aNZjs.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-Bxcmxnpx.js";import"./use-is-mobile-C_WhzTHg.js";import"./input--pf6IO2E.js";const J={title:"UI/Sidebar/SidebarFooter",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Footer section of the sidebar. Must be used within Sidebar."}}},argTypes:{children:{control:!1,description:"Footer content."}}},r={render:i=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(b,{children:"Header"}),e.jsx(m,{children:e.jsx(t,{children:e.jsx(d,{children:e.jsx(a,{isActive:!0,children:"Dashboard"})})})}),e.jsx(o,{...i,children:"Footer"})]}),e.jsx(p,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarFooter with default content."}}}},n={render:i=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(b,{children:"Header"}),e.jsx(m,{children:e.jsx(t,{children:e.jsx(d,{children:e.jsx(a,{isActive:!0,children:"Dashboard"})})})}),e.jsx(o,{...i,children:e.jsx(t,{children:e.jsx(d,{children:e.jsx(a,{children:"Logout"})})})})]}),e.jsx(p,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarFooter with a menu."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter {...args}>Footer</SidebarFooter>
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
        story: 'SidebarFooter with default content.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter {...args}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Logout</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
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
        story: 'SidebarFooter with a menu.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const K=["Default","WithMenu"];export{r as Default,n as WithMenu,K as __namedExportsOrder,J as default};
