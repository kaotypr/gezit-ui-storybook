import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{b as i,a as c,c as t,T as e}from"./tabs-DGyy3SSl.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-lA-nzH4g.js";import"./index-BEIweEOh.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-CROEQnJ0.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./cn-BEHD0UYf.js";const P={title:"UI/Tabs/TabsList",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The container for the tab triggers. Must be used within a Tabs component.

This component is built on top of [Radix UI Tabs List](https://www.radix-ui.com/primitives/docs/components/tabs#list).`}}},argTypes:{className:{control:"text",description:"Additional CSS class names."}}},r={render:a=>s.jsxs(c,{defaultValue:"account",children:[s.jsxs(i,{...a,children:[s.jsx(t,{value:"account",children:"Account"}),s.jsx(t,{value:"password",children:"Password"}),s.jsx(t,{value:"settings",children:"Settings"})]}),s.jsx(e,{value:"account",children:"Account content"}),s.jsx(e,{value:"password",children:"Password content"}),s.jsx(e,{value:"settings",children:"Settings content"})]}),parameters:{docs:{description:{story:"Default horizontal tab list with three triggers."}}}},n={render:a=>s.jsxs(c,{defaultValue:"account",orientation:"vertical",className:"flex gap-4",children:[s.jsxs(i,{...a,className:"flex-col h-fit",children:[s.jsx(t,{value:"account",children:"Account"}),s.jsx(t,{value:"password",children:"Password"}),s.jsx(t,{value:"settings",children:"Settings"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx(e,{value:"account",children:"Account content"}),s.jsx(e,{value:"password",children:"Password content"}),s.jsx(e,{value:"settings",children:"Settings content"})]})]}),parameters:{docs:{description:{story:"Vertical tab list with triggers stacked vertically."}}}},o={render:a=>s.jsxs(c,{defaultValue:"account",children:[s.jsxs(i,{...a,className:"bg-primary/10 p-1 rounded-lg",children:[s.jsx(t,{value:"account",children:"Account"}),s.jsx(t,{value:"password",children:"Password"}),s.jsx(t,{value:"settings",children:"Settings"})]}),s.jsx(e,{value:"account",children:"Account content"}),s.jsx(e,{value:"password",children:"Password content"}),s.jsx(e,{value:"settings",children:"Settings content"})]}),parameters:{docs:{description:{story:"Tab list with custom styling using Tailwind classes."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tabs defaultValue="account">
        <TabsList {...args}>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="password">Password content</TabsContent>
        <TabsContent value="settings">Settings content</TabsContent>
      </Tabs>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default horizontal tab list with three triggers.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tabs defaultValue="account" orientation="vertical" className="flex gap-4">
        <TabsList {...args} className="flex-col h-fit">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="account">Account content</TabsContent>
          <TabsContent value="password">Password content</TabsContent>
          <TabsContent value="settings">Settings content</TabsContent>
        </div>
      </Tabs>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical tab list with triggers stacked vertically.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tabs defaultValue="account">
        <TabsList {...args} className="bg-primary/10 p-1 rounded-lg">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="password">Password content</TabsContent>
        <TabsContent value="settings">Settings content</TabsContent>
      </Tabs>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab list with custom styling using Tailwind classes.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const V=["Default","Vertical","CustomStyling"];export{o as CustomStyling,r as Default,n as Vertical,V as __namedExportsOrder,P as default};
