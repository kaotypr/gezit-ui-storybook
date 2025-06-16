import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{g as o,a as s,S as c,b,c as m,d as t,e as d,f as a,h as p}from"./sidebar-DrYz02bL.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-BhpeBf-d.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./sheet-tm3rgsHe.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./tooltip-m29XrHOm.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-jor98p9X.js";import"./use-is-mobile-D-jYZhIq.js";import"./input--pf6IO2E.js";const J={title:"UI/Sidebar/SidebarFooter",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Footer section of the sidebar. Must be used within Sidebar."}}},argTypes:{children:{control:!1,description:"Footer content."}}},r={render:i=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(b,{children:"Header"}),e.jsx(m,{children:e.jsx(t,{children:e.jsx(d,{children:e.jsx(a,{isActive:!0,children:"Dashboard"})})})}),e.jsx(o,{...i,children:"Footer"})]}),e.jsx(p,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarFooter with default content."}}}},n={render:i=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(b,{children:"Header"}),e.jsx(m,{children:e.jsx(t,{children:e.jsx(d,{children:e.jsx(a,{isActive:!0,children:"Dashboard"})})})}),e.jsx(o,{...i,children:e.jsx(t,{children:e.jsx(d,{children:e.jsx(a,{children:"Logout"})})})})]}),e.jsx(p,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarFooter with a menu."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
