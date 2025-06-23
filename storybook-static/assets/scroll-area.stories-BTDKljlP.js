import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as t,a as c}from"./scroll-area-CjFxVbQT.js";import"./index-CP2yOfOm.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-CjF7u6Cb.js";import"./index-COdVRFd9.js";import"./index-Dl3xCZ72.js";import"./index-D-X1RFvQ.js";import"./index-BBCYznAR.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./cn-BEHD0UYf.js";const I={title:"UI/ScrollArea",component:t,parameters:{layout:"centered",docs:{description:{component:`
A scrollable container with custom scrollbars.

This component is built on top of [Radix UI Scroll Area](https://www.radix-ui.com/primitives/docs/components/scroll-area).

### Component Parts
- [ScrollBar](?path=/story/ui-scrollarea-scrollbar--default): Custom scrollbar component.
        `}}},argTypes:{type:{description:"The type of scrolling behavior to use",control:"select",options:["auto","always","scroll","hover"],defaultValue:"hover"},scrollHideDelay:{description:"Duration in milliseconds before the scrollbar is hidden after scrolling",control:{type:"number",min:0},defaultValue:600},dir:{description:"The reading direction of the scroll area",control:"select",options:["ltr","rtl"]},className:{description:"Additional CSS classes to apply",control:"text"},asChild:{description:"Change the component to the HTML tag or custom component of the only child",control:"boolean",defaultValue:!1}},tags:["autodocs"]},h=Array.from({length:50}).map((r,s,p)=>`v1.2.0-beta.${p.length-s}`),a=r=>e.jsx(t,{className:"h-72 w-48 rounded-md border",...r,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"Tags"}),h.map(s=>e.jsx("div",{className:"text-sm",children:s},s))]})});a.parameters={docs:{description:{story:"Basic usage of the ScrollArea component with vertical scrolling."}}};const u=[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyavko",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}],o=()=>e.jsxs(t,{className:"w-96 whitespace-nowrap rounded-md border",children:[e.jsx("div",{className:"flex w-max space-x-4 p-4",children:u.map(r=>e.jsxs("figure",{className:"shrink-0",children:[e.jsx("div",{className:"overflow-hidden rounded-md",children:e.jsx("img",{src:r.art,alt:`Photo by ${r.artist}`,className:"aspect-[3/4] h-fit w-fit object-cover",width:300,height:400})}),e.jsxs("figcaption",{className:"pt-2 text-xs text-muted-foreground",children:["Photo by ",e.jsx("span",{className:"font-semibold text-foreground",children:r.artist})]})]},r.artist))}),e.jsx(c,{orientation:"horizontal"})]});o.parameters={docs:{description:{story:"ScrollArea with horizontal scrolling."}}};const i=()=>e.jsx(t,{className:"h-72 w-96 rounded-md border",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"mb-4 text-xl font-medium",children:"Changelog"}),Array.from({length:20},(r,s)=>e.jsxs("div",{className:"mb-8",children:[e.jsxs("h5",{className:"mb-2 text-lg font-medium",children:["v1.",20-s,".0"]}),e.jsx("div",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]},s))]})});i.parameters={docs:{description:{story:"ScrollArea with both vertical and horizontal scrolling."}}};const n=()=>e.jsx(t,{className:"h-[200px] w-[350px] rounded-md border",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"mb-4 text-sm font-medium",children:"Notifications"}),Array.from({length:10},(r,s)=>e.jsxs("div",{className:"mb-4 flex items-start space-x-4 last:mb-0",children:[e.jsx("div",{className:"size-8 rounded-full bg-muted"}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-sm font-medium",children:["User ",s+1]}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Performed action ",s+1]})]})]},s))]})});n.parameters={docs:{description:{story:"ScrollArea with a fixed maximum height."}}};const l=()=>e.jsxs(t,{className:"h-72 w-48 rounded-md border bg-muted/50 p-4",children:[e.jsx("div",{className:"space-y-4",children:Array.from({length:20},(r,s)=>e.jsxs("div",{className:"rounded-md bg-background p-2 text-sm shadow-sm",children:["Item ",s+1]},s))}),e.jsx(c,{thumbProps:{className:"bg-primary"}})]});l.parameters={docs:{description:{story:"ScrollArea with custom styling using Tailwind CSS classes."}}};const m=()=>e.jsxs(t,{className:"w-96 rounded-md border",children:[e.jsx("h4",{className:"mb-4 text-xl font-medium ml-4 mt-4",children:"Main Content"}),e.jsx("p",{className:"mb-4 text-sm text-muted-foreground m-4",children:"Scroll vertically to see more content and horizontally to see nested scroll areas."}),e.jsx("div",{className:"flex space-x-4 m-4",children:Array.from({length:3},(r,s)=>e.jsx(t,{className:"h-64 w-64 rounded-md border",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("h5",{className:"mb-4 text-lg font-medium",children:["Section ",s+1]}),Array.from({length:10},(p,d)=>e.jsxs("div",{className:"mb-4 last:mb-0",children:[e.jsxs("div",{className:"text-sm font-medium",children:["Item ",d+1]}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Description for item ",d+1]})]},d))]})},s))}),e.jsx(c,{orientation:"horizontal"})]});m.parameters={docs:{description:{story:"Nested ScrollAreas with independent scrolling."}}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"HorizontalScrolling"};i.__docgenInfo={description:"",methods:[],displayName:"BothDirections"};n.__docgenInfo={description:"",methods:[],displayName:"WithMaxHeight"};l.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};m.__docgenInfo={description:"",methods:[],displayName:"NestedScrollAreas"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {TAGS.map(tag => <div key={tag} className="text-sm">
            {tag}
          </div>)}
      </div>
    </ScrollArea>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map(artwork => <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img src={artwork.art}
          // biome-ignore lint/a11y/noRedundantAlt: TODO turn off the rules
          alt={\`Photo by \${artwork.artist}\`} className="aspect-[3/4] h-fit w-fit object-cover" width={300} height={400} />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by <span className="font-semibold text-foreground">{artwork.artist}</span>
            </figcaption>
          </figure>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-xl font-medium">Changelog</h4>
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="mb-8">
            <h5 className="mb-2 text-lg font-medium">v1.{20 - i}.0</h5>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>)}
      </div>
    </ScrollArea>;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="h-[200px] w-[350px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Notifications</h4>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} className="mb-4 flex items-start space-x-4 last:mb-0">
            <div className="size-8 rounded-full bg-muted" />
            <div>
              <div className="text-sm font-medium">User {i + 1}</div>
              <div className="text-sm text-muted-foreground">Performed action {i + 1}</div>
            </div>
          </div>)}
      </div>
    </ScrollArea>;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="h-72 w-48 rounded-md border bg-muted/50 p-4">
      <div className="space-y-4">
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} className="rounded-md bg-background p-2 text-sm shadow-sm">
            Item {i + 1}
          </div>)}
      </div>
      <ScrollBar thumbProps={{
      className: 'bg-primary'
    }} />
    </ScrollArea>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <ScrollArea className="w-96 rounded-md border">
      <h4 className="mb-4 text-xl font-medium ml-4 mt-4">Main Content</h4>
      <p className="mb-4 text-sm text-muted-foreground m-4">
        Scroll vertically to see more content and horizontally to see nested scroll areas.
      </p>
      <div className="flex space-x-4 m-4">
        {Array.from({
        length: 3
      }, (_, i) => <ScrollArea key={i} className="h-64 w-64 rounded-md border">
            <div className="p-4">
              <h5 className="mb-4 text-lg font-medium">Section {i + 1}</h5>
              {Array.from({
            length: 10
          }, (_, j) => <div key={j} className="mb-4 last:mb-0">
                  <div className="text-sm font-medium">Item {j + 1}</div>
                  <div className="text-sm text-muted-foreground">Description for item {j + 1}</div>
                </div>)}
            </div>
          </ScrollArea>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>;
}`,...m.parameters?.docs?.source}}};const T=["Default","HorizontalScrolling","BothDirections","WithMaxHeight","CustomStyling","NestedScrollAreas"];export{i as BothDirections,l as CustomStyling,a as Default,o as HorizontalScrolling,m as NestedScrollAreas,n as WithMaxHeight,T as __namedExportsOrder,I as default};
