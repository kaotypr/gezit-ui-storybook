import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as x}from"./cn-BEHD0UYf.js";function s({className:p,...m}){return e.jsx("div",{"data-slot":"skeleton",className:x("bg-accent animate-pulse rounded-md",p),...m})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const u={title:"UI/Skeleton",component:s,parameters:{layout:"centered",docs:{description:{component:`
A placeholder loading state that mimics the shape and structure of content that is being loaded.

### Accessibility
- Uses \`data-slot="skeleton"\` for styling and identification
- Provides visual feedback for loading states
- Should match the shape and size of the final content
`}}},argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},a=()=>e.jsx(s,{className:"h-4 w-[250px]"});a.parameters={docs:{description:{story:"Basic usage of the Skeleton component."}}};const r=()=>e.jsx(s,{className:"size-12 rounded-full"});r.parameters={docs:{description:{story:"Circular skeleton for avatars or icons."}}};const c=()=>e.jsxs("div",{className:"flex flex-col space-y-3",children:[e.jsx(s,{className:"h-[125px] w-[250px] rounded-xl"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]});c.parameters={docs:{description:{story:"Card layout with image placeholder and text lines."}}};const l=()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"size-12 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]});l.parameters={docs:{description:{story:"Profile card with avatar and text lines."}}};const n=()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-12 w-12"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]});n.parameters={docs:{description:{story:"Table row with thumbnail and text lines."}}};const o=()=>e.jsx("div",{className:"space-y-3",children:Array.from({length:5},(p,m)=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"size-10 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]},m))});o.parameters={docs:{description:{story:"List of items with avatars and text lines."}}};const t=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{className:"h-4 w-[200px] bg-primary/10"}),e.jsx(s,{className:"h-4 w-[250px] bg-primary/20"}),e.jsx(s,{className:"h-4 w-[300px] bg-primary/30"})]});t.parameters={docs:{description:{story:"Skeletons with custom colors and opacity."}}};const d=()=>e.jsxs("div",{className:"rounded-xl border p-4 w-[350px]",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{className:"size-12 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[150px]"}),e.jsx(s,{className:"h-4 w-[100px]"})]})]}),e.jsx(s,{className:"mt-4 h-[200px] rounded-lg"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-[90%]"}),e.jsx(s,{className:"h-4 w-[80%]"})]}),e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsx(s,{className:"h-8 w-16 rounded-md"}),e.jsx(s,{className:"h-8 w-16 rounded-md"}),e.jsx(s,{className:"h-8 w-16 rounded-md"})]})]});d.parameters={docs:{description:{story:"Complex card layout with multiple skeleton elements."}}};const i=()=>e.jsxs("div",{className:"w-[600px] space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-6 w-2/3"}),e.jsx(s,{className:"h-4 w-1/2"})]}),e.jsx(s,{className:"h-[300px] rounded-lg"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-4/5"})]}),e.jsxs("div",{className:"flex items-center gap-4 pt-4",children:[e.jsx(s,{className:"size-10 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[120px]"}),e.jsx(s,{className:"h-4 w-[80px]"})]})]})]});i.parameters={docs:{description:{story:"Article preview with header, image placeholder, content lines, and author info."}}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Circle"};c.__docgenInfo={description:"",methods:[],displayName:"Card"};l.__docgenInfo={description:"",methods:[],displayName:"ProfileCard"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};o.__docgenInfo={description:"",methods:[],displayName:"List"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};d.__docgenInfo={description:"",methods:[],displayName:"ComplexCard"};i.__docgenInfo={description:"",methods:[],displayName:"ArticlePreview"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Skeleton className="h-4 w-[250px]" />;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Skeleton className="size-12 rounded-full" />;
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div className="space-y-3">
      {Array.from({
      length: 5
    }, (_, i) => <div key={i} className="flex items-center space-x-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>)}
    </div>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <div className="space-y-4">
      <Skeleton className="h-4 w-[200px] bg-primary/10" />
      <Skeleton className="h-4 w-[250px] bg-primary/20" />
      <Skeleton className="h-4 w-[300px] bg-primary/30" />
    </div>;
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <div className="rounded-xl border p-4 w-[350px]">
      <div className="flex gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <Skeleton className="mt-4 h-[200px] rounded-lg" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
      <div className="mt-4 flex gap-2">
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
      </div>
    </div>;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <div className="w-[600px] space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Skeleton className="h-[300px] rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="flex items-center gap-4 pt-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      </div>
    </div>;
}`,...i.parameters?.docs?.source}}};const w=["Default","Circle","Card","ProfileCard","TableRow","List","CustomStyling","ComplexCard","ArticlePreview"];export{i as ArticlePreview,c as Card,r as Circle,d as ComplexCard,t as CustomStyling,a as Default,o as List,l as ProfileCard,n as TableRow,w as __namedExportsOrder,u as default};
