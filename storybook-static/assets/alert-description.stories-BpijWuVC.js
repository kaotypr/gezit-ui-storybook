import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{A as i,a as o}from"./alert-CQPoYITK.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";const l={title:"UI/Alert/AlertDescription",component:i,parameters:{layout:"centered"},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},e=()=>t.jsx(o,{children:t.jsx(i,{children:"This is a basic alert description."})});e.parameters={docs:{description:{story:"Basic usage of the AlertDescription component."}}};const s=()=>t.jsx(o,{children:t.jsx(i,{children:t.jsxs("div",{className:"space-y-2",children:[t.jsx("p",{children:"This is a description with multiple paragraphs."}),t.jsx("p",{children:"It can contain rich content and formatting."})]})})});s.parameters={docs:{description:{story:"AlertDescription with rich content."}}};const r=()=>t.jsx(o,{children:t.jsx(i,{className:"text-muted-foreground",children:"This is a description with custom styling."})});r.parameters={docs:{description:{story:"AlertDescription with custom styling."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithRichContent"};r.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <Alert>
    <AlertDescription>This is a basic alert description.</AlertDescription>
  </Alert>`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Alert>
    <AlertDescription>
      <div className="space-y-2">
        <p>This is a description with multiple paragraphs.</p>
        <p>It can contain rich content and formatting.</p>
      </div>
    </AlertDescription>
  </Alert>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Alert>
    <AlertDescription className="text-muted-foreground">
      This is a description with custom styling.
    </AlertDescription>
  </Alert>`,...r.parameters?.docs?.source}}};const d=["Default","WithRichContent","CustomStyling"];export{r as CustomStyling,e as Default,s as WithRichContent,d as __namedExportsOrder,l as default};
