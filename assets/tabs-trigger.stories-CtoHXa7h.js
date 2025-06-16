import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{c as s,a as c,b as i,T as e}from"./tabs-DGyy3SSl.js";import{U as u}from"./user-BDdoPk9m.js";import{c as d}from"./createLucideIcon-CAcKuqHj.js";import{S as l}from"./settings-wunAwr--.js";import"./index-CP2yOfOm.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-lA-nzH4g.js";import"./index-BEIweEOh.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-CROEQnJ0.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./cn-BEHD0UYf.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],T=d("lock",g),_={title:"UI/Tabs/TabsTrigger",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The button that activates its associated content. Must be used within a TabsList component.

This component is built on top of [Radix UI Tabs Trigger](https://www.radix-ui.com/primitives/docs/components/tabs#trigger).`}}},argTypes:{value:{control:"text",description:"A unique value that associates the trigger with a content.",defaultValue:"tab"},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the tab trigger.",defaultValue:!1},className:{control:"text",description:"Additional CSS class names."}}},r={args:{value:"account"},render:a=>t.jsxs(c,{defaultValue:"account",children:[t.jsxs(i,{children:[t.jsx(s,{...a,children:"Account"}),t.jsx(s,{value:"password",children:"Password"}),t.jsx(s,{value:"settings",children:"Settings"})]}),t.jsx(e,{value:"account",children:"Account content"}),t.jsx(e,{value:"password",children:"Password content"}),t.jsx(e,{value:"settings",children:"Settings content"})]}),parameters:{docs:{description:{story:"Default tab triggers with text content."}}}},n={args:{value:"account"},render:a=>t.jsxs(c,{defaultValue:"account",children:[t.jsxs(i,{children:[t.jsxs(s,{...a,children:[t.jsx(u,{className:"mr-2 h-4 w-4"}),"Account"]}),t.jsxs(s,{value:"password",children:[t.jsx(T,{className:"mr-2 h-4 w-4"}),"Password"]}),t.jsxs(s,{value:"settings",children:[t.jsx(l,{className:"mr-2 h-4 w-4"}),"Settings"]})]}),t.jsx(e,{value:"account",children:"Account content"}),t.jsx(e,{value:"password",children:"Password content"}),t.jsx(e,{value:"settings",children:"Settings content"})]}),parameters:{docs:{description:{story:"Tab triggers with icons and text content."}}}},o={args:{value:"password",disabled:!0},render:a=>t.jsxs(c,{defaultValue:"account",children:[t.jsxs(i,{children:[t.jsx(s,{value:"account",children:"Account"}),t.jsx(s,{...a,children:"Password"}),t.jsx(s,{value:"settings",children:"Settings"})]}),t.jsx(e,{value:"account",children:"Account content"}),t.jsx(e,{value:"password",children:"Password content"}),t.jsx(e,{value:"settings",children:"Settings content"})]}),parameters:{docs:{description:{story:"Tab triggers with a disabled state."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'account'
  },
  render: args => {
    return <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger {...args}>Account</TabsTrigger>
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
        story: 'Default tab triggers with text content.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'account'
  },
  render: args => {
    return <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger {...args}>
            <User className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="password">
            <Lock className="mr-2 h-4 w-4" />
            Password
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="password">Password content</TabsContent>
        <TabsContent value="settings">Settings content</TabsContent>
      </Tabs>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab triggers with icons and text content.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'password',
    disabled: true
  },
  render: args => {
    return <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger {...args}>Password</TabsTrigger>
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
        story: 'Tab triggers with a disabled state.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const W=["Default","WithIcons","Disabled"];export{r as Default,o as Disabled,n as WithIcons,W as __namedExportsOrder,_ as default};
