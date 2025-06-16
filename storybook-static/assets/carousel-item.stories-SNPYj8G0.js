import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as r,d as o}from"./card-DNVUWZmV.js";import{b as n,a as l,C as m}from"./carousel-CTk-MpNH.js";import"./cn-BEHD0UYf.js";import"./index-CP2yOfOm.js";import"./button-DVhd8Mv9.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./createLucideIcon-CAcKuqHj.js";const j={title:"UI/Carousel/CarouselItem",component:n,parameters:{layout:"centered",docs:{description:{component:`
The CarouselItem component represents an individual slide or item within the carousel.
`}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},s=()=>e.jsx(l,{className:"w-full max-w-xs",children:e.jsx(m,{children:e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(o,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:"Item 1"})})})})})})}),t=()=>e.jsx(l,{className:"w-full max-w-xs",children:e.jsx(m,{children:e.jsx(n,{className:"basis-1/2",children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(o,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:"Half Width"})})})})})})}),a=()=>e.jsx(l,{className:"w-full max-w-xs",children:e.jsx(m,{children:e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsxs(o,{className:"flex flex-col items-center justify-center p-6 space-y-4",children:[e.jsx("span",{className:"text-3xl font-semibold",children:"Custom Content"}),e.jsx("p",{className:"text-muted-foreground",children:"With additional elements"}),e.jsx("button",{type:"button",className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",children:"Click Me"})]})})})})})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomSize"};a.__docgenInfo={description:"",methods:[],displayName:"WithCustomContent"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">Item 1</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem className="basis-1/2">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-semibold">Half Width</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                <span className="text-3xl font-semibold">Custom Content</span>
                <p className="text-muted-foreground">With additional elements</p>
                <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  Click Me
                </button>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>;
}`,...a.parameters?.docs?.source}}};const y=["Default","WithCustomSize","WithCustomContent"];export{s as Default,a as WithCustomContent,t as WithCustomSize,y as __namedExportsOrder,j as default};
