import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as r,b as s,A as t}from"./alert-CQPoYITK.js";import{c as m}from"./createLucideIcon-BROHhCyT.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./index-BgCQ941z.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],u=m("circle-alert",f);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],h=m("circle-check-big",y);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],A=m("triangle-alert",x),_={title:"UI/Alert",component:r,parameters:{layout:"centered",docs:{description:{component:`
A component that displays a message with an optional title and description.

This component is built on top of [Radix UI Alert](https://www.radix-ui.com/primitives/docs/components/alert).

### Component Parts
- [AlertTitle](?path=/story/ui-alert-alerttitle--default): Displays the title of the alert.
- [AlertDescription](?path=/story/ui-alert-alertdescription--default): Displays the description or content of the alert.
        `}}},argTypes:{variant:{description:"The visual style of the alert",control:"select",options:["default","destructive","info","success","warning","error"]},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},n=g=>e.jsxs(r,{...g,children:[e.jsx(s,{children:"Heads up!"}),e.jsx(t,{children:"You can add components and dependencies to your app using the cli."})]});n.parameters={docs:{description:{story:"Basic usage of the Alert component with title and description."}}};const a=()=>e.jsxs(r,{variant:"destructive",children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(s,{children:"Error"}),e.jsx(t,{children:"Your session has expired. Please log in again."})]});a.parameters={docs:{description:{story:"Alert with destructive variant for error messages."}}};const o=()=>e.jsxs(r,{variant:"info",children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(s,{children:"Information"}),e.jsx(t,{children:"This is an informational message about your account."})]});o.parameters={docs:{description:{story:"Alert with info variant for informational messages."}}};const i=()=>e.jsxs(r,{variant:"success",children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx(s,{children:"Success"}),e.jsx(t,{children:"This is a success message about your account."})]});i.parameters={docs:{description:{story:"Alert with success variant for success messages."}}};const c=()=>e.jsxs(r,{variant:"warning",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(s,{children:"Warning"}),e.jsx(t,{children:"This is a warning message about your account."})]});c.parameters={docs:{description:{story:"Alert with warning variant for warning messages."}}};const l=()=>e.jsxs(r,{variant:"error",children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(s,{children:"Error"}),e.jsx(t,{children:"This is an error message about your account."})]});l.parameters={docs:{description:{story:"Alert with error variant for error messages."}}};const p=()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx(s,{children:"Information"}),e.jsx(t,{children:"This is an informational message about your account."})]}),e.jsxs(r,{children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx(s,{children:"Success"}),e.jsx(t,{children:"Your changes have been saved successfully."})]}),e.jsxs(r,{children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx(s,{children:"Warning"}),e.jsx(t,{children:"Your storage is almost full. Please free up some space."})]})]});p.parameters={docs:{description:{story:"Alerts with different icons for different types of messages."}}};const d=()=>e.jsxs(r,{children:[e.jsx(s,{children:"Important Update"}),e.jsxs(t,{children:[e.jsx("p",{children:"We're making some changes to our service that will affect how you use our platform. These changes are designed to improve performance and security."}),e.jsx("p",{children:"Please make sure to update your application to the latest version to ensure compatibility with these changes."})]})]});d.parameters={docs:{description:{story:"Alert with longer content and multiple paragraphs."}}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Destructive"};o.__docgenInfo={description:"",methods:[],displayName:"InfoAlert"};i.__docgenInfo={description:"",methods:[],displayName:"SuccessAlert"};c.__docgenInfo={description:"",methods:[],displayName:"WarningAlert"};l.__docgenInfo={description:"",methods:[],displayName:"ErrorAlert"};p.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};d.__docgenInfo={description:"",methods:[],displayName:"LongContent"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Alert variant="info">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This is an informational message about your account.</AlertDescription>
    </Alert>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Alert variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>This is a success message about your account.</AlertDescription>
    </Alert>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>This is a warning message about your account.</AlertDescription>
    </Alert>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Alert variant="error">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>This is an error message about your account.</AlertDescription>
    </Alert>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex flex-col gap-4">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational message about your account.</AlertDescription>
      </Alert>

      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Your storage is almost full. Please free up some space.</AlertDescription>
      </Alert>
    </div>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Alert>
      <AlertTitle>Important Update</AlertTitle>
      <AlertDescription>
        <p>
          We're making some changes to our service that will affect how you use our platform. These
          changes are designed to improve performance and security.
        </p>
        <p>
          Please make sure to update your application to the latest version to ensure compatibility
          with these changes.
        </p>
      </AlertDescription>
    </Alert>;
}`,...d.parameters?.docs?.source}}};const I=["Default","Destructive","InfoAlert","SuccessAlert","WarningAlert","ErrorAlert","WithIcons","LongContent"];export{n as Default,a as Destructive,l as ErrorAlert,o as InfoAlert,d as LongContent,i as SuccessAlert,c as WarningAlert,p as WithIcons,I as __namedExportsOrder,_ as default};
