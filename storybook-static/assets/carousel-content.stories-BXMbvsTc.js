import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as r,d as o}from"./card-DNVUWZmV.js";import{C as t,a as l,b as c}from"./carousel-CTk-MpNH.js";import"./cn-BEHD0UYf.js";import"./index-CP2yOfOm.js";import"./button-DVhd8Mv9.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./createLucideIcon-CAcKuqHj.js";const g={title:"UI/Carousel/CarouselContent",component:t,parameters:{layout:"centered",docs:{description:{component:`
The CarouselContent component is a container for carousel items that handles the scrolling behavior and layout.
`}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},a=()=>e.jsx(l,{className:"w-full max-w-xs",children:e.jsx(t,{children:Array.from({length:3}).map((m,s)=>e.jsx(c,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(o,{className:"flex aspect-square items-center justify-center p-6",children:e.jsxs("span",{className:"text-3xl font-semibold",children:["Content ",s+1]})})})})},s))})}),n=()=>e.jsx(l,{className:"w-full max-w-xs",children:e.jsx(t,{className:"gap-4",children:Array.from({length:3}).map((m,s)=>e.jsx(c,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(o,{className:"flex aspect-square items-center justify-center p-6",children:e.jsxs("span",{className:"text-3xl font-semibold",children:["Content ",s+1]})})})})},s))})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithCustomSpacing"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 3
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Content {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
    </Carousel>;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent className="gap-4">
        {Array.from({
        length: 3
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">Content {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
    </Carousel>;
}`,...n.parameters?.docs?.source}}};const y=["Default","WithCustomSpacing"];export{a as Default,n as WithCustomSpacing,y as __namedExportsOrder,g as default};
