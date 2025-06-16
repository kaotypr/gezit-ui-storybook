import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as d,a as o,b as s,c,d as l,e as n,f as t,g as p,h as b}from"./sidebar-DrYz02bL.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-BhpeBf-d.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./sheet-tm3rgsHe.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./tooltip-m29XrHOm.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-jor98p9X.js";import"./use-is-mobile-D-jYZhIq.js";import"./input--pf6IO2E.js";const J={title:"UI/Sidebar/Sidebar",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"The main sidebar container. Must be used within a SidebarProvider."}}},argTypes:{side:{control:"radio",options:["left","right"],defaultValue:"left",description:"Which side the sidebar appears on."},variant:{control:"radio",options:["sidebar","floating","inset"],defaultValue:"sidebar",description:"Sidebar visual variant."},collapsible:{control:"radio",options:["offcanvas","icon","none"],defaultValue:"offcanvas",description:"Collapsible behavior."},children:{control:!1,description:"Sidebar content."}}},r={render:a=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(o,{children:[e.jsxs(d,{...a,children:[e.jsx(s,{children:"Header"}),e.jsx(c,{children:e.jsxs(l,{children:[e.jsx(n,{children:e.jsx(t,{isActive:!0,children:"Dashboard"})}),e.jsx(n,{children:e.jsx(t,{children:"Projects"})})]})}),e.jsx(p,{children:"Footer"})]}),e.jsx(b,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"Sidebar in its default (expanded) state."}}}},i={render:a=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(o,{defaultOpen:!1,children:[e.jsxs(d,{...a,children:[e.jsx(s,{children:"Header"}),e.jsx(c,{children:e.jsxs(l,{children:[e.jsx(n,{children:e.jsx(t,{isActive:!0,children:"Dashboard"})}),e.jsx(n,{children:e.jsx(t,{children:"Projects"})})]})}),e.jsx(p,{children:"Footer"})]}),e.jsx(b,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),args:{collapsible:"icon"},parameters:{docs:{description:{story:"Sidebar in collapsed (icon) state."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider>
        <Sidebar {...args}>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Projects</SidebarMenuButton>
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
        story: 'Sidebar in its default (expanded) state.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider defaultOpen={false}>
        <Sidebar {...args}>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Projects</SidebarMenuButton>
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
  args: {
    collapsible: 'icon'
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar in collapsed (icon) state.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const K=["Default","Collapsed"];export{i as Collapsed,r as Default,K as __namedExportsOrder,J as default};
