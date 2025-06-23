import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as s,a as i,b as c,c as t}from"./tabs-60g8egk0.js";import"./index-BgCQ941z.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-CQ43I_sF.js";import"./index-DLD62pO3.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-BInWWs9D.js";import"./index-Pxmga4VG.js";import"./index-RJnmdD4_.js";import"./cn-BEHD0UYf.js";const A={title:"UI/Tabs/TabsContent",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`The content that is associated with each trigger. Must be used within a Tabs component.

This component is built on top of [Radix UI Tabs Content](https://www.radix-ui.com/primitives/docs/components/tabs#content).`}}},argTypes:{value:{control:"text",description:"A unique value that associates the content with a trigger.",defaultValue:"tab"},forceMount:{control:"boolean",description:"When true, the content will be mounted even if the associated tab is not selected.",defaultValue:!1},className:{control:"text",description:"Additional CSS class names."}}},r={args:{value:"account"},render:a=>e.jsxs(i,{defaultValue:"account",children:[e.jsxs(c,{children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(s,{...a,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage your account settings and preferences."})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security settings."})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your application preferences."})]})})]}),parameters:{docs:{description:{story:"Default tab content with basic text and styling."}}}},n={args:{value:"account"},render:a=>e.jsxs(i,{defaultValue:"account",children:[e.jsxs(c,{children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(s,{...a,children:e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account Settings"}),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium",children:"Name"}),e.jsx("input",{id:"name",type:"text",className:"w-full px-3 py-2 border rounded-md",placeholder:"Enter your name"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),e.jsx("input",{id:"email",type:"email",className:"w-full px-3 py-2 border rounded-md",placeholder:"Enter your email"})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",children:"Save Changes"})]})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security settings."})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your application preferences."})]})})]}),parameters:{docs:{description:{story:"Tab content with a form, demonstrating more complex content structure."}}}},o={args:{value:"account",forceMount:!0},render:a=>e.jsxs(i,{defaultValue:"password",children:[e.jsxs(c,{children:[e.jsx(t,{value:"account",children:"Account"}),e.jsx(t,{value:"password",children:"Password"}),e.jsx(t,{value:"settings",children:"Settings"})]}),e.jsx(s,{...a,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Account"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This content is always mounted, even when not selected."})]})}),e.jsx(s,{value:"password",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password and security settings."})]})}),e.jsx(s,{value:"settings",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your application preferences."})]})})]}),parameters:{docs:{description:{story:"Tab content with forceMount enabled, keeping the content mounted even when not selected."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'account'
  },
  render: args => {
    return <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent {...args}>
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
        story: 'Default tab content with basic text and styling.'
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
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent {...args}>
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input id="name" type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" placeholder="Enter your email" />
              </div>
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Save Changes
              </button>
            </form>
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
        story: 'Tab content with a form, demonstrating more complex content structure.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'account',
    forceMount: true
  },
  render: args => {
    return <Tabs defaultValue="password">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent {...args}>
          <div className="p-4">
            <h3 className="text-lg font-medium">Account</h3>
            <p className="text-sm text-muted-foreground">
              This content is always mounted, even when not selected.
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
        story: 'Tab content with forceMount enabled, keeping the content mounted even when not selected.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","WithForm","ForceMount"];export{r as Default,o as ForceMount,n as WithForm,P as __namedExportsOrder,A as default};
