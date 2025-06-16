import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-CP2yOfOm.js";import{a as r,b as d,c as t,T as s}from"./tabs-DGyy3SSl.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-lA-nzH4g.js";import"./index-BEIweEOh.js";import"./index-C6iJU1zt.js";import"./index-tw20AQU7.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-CROEQnJ0.js";import"./index-BBCYznAR.js";import"./index-CjF7u6Cb.js";import"./cn-BEHD0UYf.js";const M={title:"UI/Tabs",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A set of layered sections of content—known as tab panels—that are displayed one at a time.

This component is built on top of [Radix UI Tabs](https://www.radix-ui.com/primitives/docs/components/tabs).

### Component Parts
- [TabsList](?path=/story/ui-tabs-tabslist--default): The container for the tab triggers.
- [TabsTrigger](?path=/story/ui-tabs-tabstrigger--default): The button that activates its associated content.
- [TabsContent](?path=/story/ui-tabs-tabscontent--default): The content that is associated with each trigger.`}}},argTypes:{defaultValue:{control:"text",description:"The value of the tab that should be active when initially rendered."},value:{control:"text",description:"The controlled value of the tab to activate."},onValueChange:{description:"Event handler called when the value changes."},orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the tabs.",defaultValue:"horizontal"},dir:{control:"select",options:["ltr","rtl"],description:"The reading direction of the tabs. When omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode."},activationMode:{control:"select",options:["automatic","manual"],description:"When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.",defaultValue:"automatic"},className:{control:"text",description:"Additional CSS class names."}}},o={render:a=>e.jsxs(r,{...a,defaultValue:"account",className:"w-[400px]",children:[e.jsxs(d,{children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"account",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage your account settings and preferences."})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security settings."})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your application preferences."})]})})]}),parameters:{docs:{description:{story:"Basic tabs with three sections: Account, Password, and Settings."}}}},i={render:a=>e.jsxs(r,{...a,defaultValue:"account",orientation:"vertical",className:"flex gap-4",children:[e.jsxs(d,{className:"flex-col h-fit",children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx(s,{value:"account",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage your account settings and preferences."})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security settings."})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your application preferences."})]})})]})]}),args:{orientation:"vertical"},parameters:{docs:{description:{story:"Tabs with vertical orientation, where the tab list is displayed on the left side."}}}},c={render:a=>{const[n,u]=m.useState("account");return e.jsxs(r,{...a,value:n,onValueChange:u,className:"w-[400px]",children:[e.jsxs(d,{children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"account",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Current tab: ",n]})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Current tab: ",n]})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Current tab: ",n]})]})})]})},parameters:{docs:{description:{story:"Controlled tabs with state management, showing the current active tab value."}}}},l={render:a=>e.jsxs(r,{...a,defaultValue:"account",activationMode:"manual",className:"w-[400px]",children:[e.jsxs(d,{children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"account",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tabs are activated only when clicked, not on focus."})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tabs are activated only when clicked, not on focus."})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tabs are activated only when clicked, not on focus."})]})})]}),args:{activationMode:"manual"},parameters:{docs:{description:{story:"Tabs with manual activation mode, where tabs are only activated when clicked, not on focus."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tabs {...args} defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4">
            <h3 className="text-lg font-medium">Account</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-muted-foreground">
              Change your password and security settings.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4">
            <h3 className="text-lg font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground">Configure your application preferences.</p>
          </div>
        </TabsContent>
      </Tabs>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic tabs with three sections: Account, Password, and Settings.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tabs {...args} defaultValue="account" orientation="vertical" className="flex gap-4">
        <TabsList className="flex-col h-fit">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="account">
            <div className="p-4">
              <h3 className="text-lg font-medium">Account</h3>
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4">
              <h3 className="text-lg font-medium">Password</h3>
              <p className="text-sm text-muted-foreground">
                Change your password and security settings.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="p-4">
              <h3 className="text-lg font-medium">Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure your application preferences.
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>;
  },
  args: {
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with vertical orientation, where the tab list is displayed on the left side.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('account');
    return <Tabs {...args} value={value} onValueChange={setValue} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4">
            <h3 className="text-lg font-medium">Account</h3>
            <p className="text-sm text-muted-foreground">Current tab: {value}</p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-muted-foreground">Current tab: {value}</p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4">
            <h3 className="text-lg font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground">Current tab: {value}</p>
          </div>
        </TabsContent>
      </Tabs>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled tabs with state management, showing the current active tab value.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Tabs {...args} defaultValue="account" activationMode="manual" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="p-4">
            <h3 className="text-lg font-medium">Account</h3>
            <p className="text-sm text-muted-foreground">
              Tabs are activated only when clicked, not on focus.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="p-4">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-muted-foreground">
              Tabs are activated only when clicked, not on focus.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4">
            <h3 className="text-lg font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground">
              Tabs are activated only when clicked, not on focus.
            </p>
          </div>
        </TabsContent>
      </Tabs>;
  },
  args: {
    activationMode: 'manual'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with manual activation mode, where tabs are only activated when clicked, not on focus.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const k=["Default","Vertical","Controlled","ManualActivation"];export{c as Controlled,o as Default,l as ManualActivation,i as Vertical,k as __namedExportsOrder,M as default};
