import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as d,a,S as n,c as o,d as s,e as c,f as p,g as h,h as b,i as m}from"./sidebar-DrYz02bL.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-BhpeBf-d.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./sheet-tm3rgsHe.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./tooltip-m29XrHOm.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-jor98p9X.js";import"./use-is-mobile-D-jYZhIq.js";import"./input--pf6IO2E.js";const L={title:"UI/Sidebar/SidebarHeader",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Header section of the sidebar. Must be used within Sidebar."}}},argTypes:{children:{control:!1,description:"Header content."}}},r={render:t=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(d,{...t,children:"Header"}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(c,{children:e.jsx(p,{isActive:!0,children:"Dashboard"})})})}),e.jsx(h,{children:"Footer"})]}),e.jsx(b,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarHeader with default content."}}}},i={render:t=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(d,{...t,children:e.jsx(m,{placeholder:"Search..."})}),e.jsx(o,{children:e.jsx(s,{children:e.jsx(c,{children:e.jsx(p,{isActive:!0,children:"Dashboard"})})})}),e.jsx(h,{children:"Footer"})]}),e.jsx(b,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarHeader with a search input."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
