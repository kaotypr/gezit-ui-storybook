import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as a,a as s,S as m,b as c,d as b,e as t,f as d,g as p,h as S}from"./sidebar-BnJHCepi.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./separator-CEwucStK.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./sheet-DJUdPzdr.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";import"./tooltip-Bk_aNZjs.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-Bxcmxnpx.js";import"./use-is-mobile-C_WhzTHg.js";import"./input--pf6IO2E.js";const Q={title:"UI/Sidebar/SidebarContent",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Scrollable content area for the sidebar. Must be used within Sidebar."}}},argTypes:{children:{control:!1,description:"Sidebar content."}}},r={render:i=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(s,{children:[e.jsxs(m,{children:[e.jsx(c,{children:"Header"}),e.jsx(a,{...i,children:e.jsxs(b,{children:[e.jsx(t,{children:e.jsx(d,{isActive:!0,children:"Dashboard"})}),e.jsx(t,{children:e.jsx(d,{children:"Projects"})})]})}),e.jsx(p,{children:"Footer"})]}),e.jsx(S,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarContent with a simple menu."}}}},n={render:i=>e.jsx("div",{style:{width:"100vw",height:"100vh",minHeight:0},children:e.jsxs(s,{children:[e.jsxs(m,{children:[e.jsx(c,{children:"Header"}),e.jsx(a,{...i,children:e.jsx(b,{children:[...Array(20)].map((l,o)=>e.jsx(t,{children:e.jsxs(d,{children:["Item ",o+1]})},o))})}),e.jsx(p,{children:"Footer"})]}),e.jsx(S,{children:e.jsx("div",{style:{padding:32},children:"Main Content"})})]})}),parameters:{docs:{description:{story:"SidebarContent with many items to demonstrate scrolling."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100vw',
    height: '100vh',
    minHeight: 0
  }}>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent {...args}>
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
        story: 'SidebarContent with a simple menu.'
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
          <SidebarContent {...args}>
            <SidebarMenu>
              {[...Array(20)].map((_, i) => <SidebarMenuItem key={i}>
                  <SidebarMenuButton>Item {i + 1}</SidebarMenuButton>
                </SidebarMenuItem>)}
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
        story: 'SidebarContent with many items to demonstrate scrolling.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const V=["Default","Scrollable"];export{r as Default,n as Scrollable,V as __namedExportsOrder,Q as default};
