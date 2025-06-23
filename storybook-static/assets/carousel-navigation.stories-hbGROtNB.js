import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as o,d as l}from"./card-DNVUWZmV.js";import{c as r,a as i,C as c,b as m,d}from"./carousel-CXgzXWnm.js";import"./cn-BEHD0UYf.js";import"./index-CP2yOfOm.js";import"./button-mvJUpYu0.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./createLucideIcon-CAcKuqHj.js";const _={title:"UI/Carousel/CarouselNavigation",component:r,parameters:{layout:"centered",docs:{description:{component:`
The CarouselNavigation components provide navigation controls for the carousel.

## Components
- \`CarouselPrevious\`: Button to navigate to the previous slide
- \`CarouselNext\`: Button to navigate to the next slide
`}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"},variant:{description:"The button variant",control:"select",options:["outline","ghost","default"]},size:{description:"The button size",control:"select",options:["icon","sm","md","lg"]},color:{description:"The button color",control:"select",options:["neutral","primary","secondary","destructive","success","warning","info"]}}},a=()=>e.jsxs(i,{className:"w-full max-w-xs",children:[e.jsx(c,{children:Array.from({length:3}).map((u,s)=>e.jsx(m,{children:e.jsx("div",{className:"p-1",children:e.jsx(o,{children:e.jsx(l,{className:"flex aspect-square items-center justify-center p-6",children:e.jsxs("span",{className:"text-3xl font-semibold",children:["Slide ",s+1]})})})})},s))}),e.jsx(d,{}),e.jsx(r,{})]}),t=()=>e.jsxs(i,{className:"w-full max-w-xs",children:[e.jsx(c,{children:Array.from({length:3}).map((u,s)=>e.jsx(m,{children:e.jsx("div",{className:"p-1",children:e.jsx(o,{children:e.jsx(l,{className:"flex aspect-square items-center justify-center p-6",children:e.jsxs("span",{className:"text-3xl font-semibold",children:["Slide ",s+1]})})})})},s))}),e.jsx(d,{className:"left-2"}),e.jsx(r,{className:"right-2"})]}),n=()=>e.jsxs(i,{className:"w-full max-w-xs",children:[e.jsx(c,{children:Array.from({length:3}).map((u,s)=>e.jsx(m,{children:e.jsx("div",{className:"p-1",children:e.jsx(o,{children:e.jsx(l,{className:"flex aspect-square items-center justify-center p-6",children:e.jsxs("span",{className:"text-3xl font-semibold",children:["Slide ",s+1]})})})})},s))}),e.jsx(d,{variant:"outline"}),e.jsx(r,{variant:"outline"})]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomPosition"};n.__docgenInfo={description:"",methods:[],displayName:"CustomVariant"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 3
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Slide {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 3
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Slide {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 3
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Slide {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious variant="outline" />
      <CarouselNext variant="outline" />
    </Carousel>;
}`,...n.parameters?.docs?.source}}};const w=["Default","CustomPosition","CustomVariant"];export{t as CustomPosition,n as CustomVariant,a as Default,w as __namedExportsOrder,_ as default};
