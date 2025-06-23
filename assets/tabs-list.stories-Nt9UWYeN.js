import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{b as i,a as c,c as t,T as e}from"./tabs-60g8egk0.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-CQ43I_sF.js";import"./index-DLD62pO3.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-BInWWs9D.js";import"./index-Pxmga4VG.js";import"./index-RJnmdD4_.js";import"./cn-BEHD0UYf.js";const P={title:"UI/Tabs/TabsList",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The container for the tab triggers. Must be used within a Tabs component.

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
