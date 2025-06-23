import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as t,S as d,b as a,c as o,d as s,e as p,f as b,g as c,h as l}from"./sidebar-DrYz02bL.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-BhpeBf-d.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./sheet-tm3rgsHe.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./tooltip-m29XrHOm.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-jor98p9X.js";import"./use-is-mobile-D-jYZhIq.js";import"./input--pf6IO2E.js";const J={title:"UI/Sidebar/SidebarProvider",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Provides context for the sidebar. Must wrap Sidebar and related parts."}}},argTypes:{defaultOpen:{control:"boolean",defaultValue:!0,description:"Whether the sidebar is open by default."},children:{control:!1,description:"Sidebar content."}}},r={render:n=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(t,{...n,children:[e.jsxs(d,{children:[e.jsx(a,{children:"Header"}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(p,{children:e.jsx(b,{isActive:!0,children:"Dashboard"})})})}),e.jsx(c,{children:"Footer"})]}),e.jsx(l,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarProvider wrapping Sidebar and content."}}}},i={render:n=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(t,{...n,defaultOpen:!1,children:[e.jsxs(d,{children:[e.jsx(a,{children:"Header"}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(p,{children:e.jsx(b,{isActive:!0,children:"Dashboard"})})})}),e.jsx(c,{children:"Footer"})]}),e.jsx(l,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarProvider with sidebar closed by default."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
