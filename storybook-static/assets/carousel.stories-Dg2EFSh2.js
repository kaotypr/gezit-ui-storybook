import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-CP2yOfOm.js";import{a as r,d as n}from"./card-DNVUWZmV.js";import{a as t,C as o,b as l,d as x,c as C}from"./carousel-CXgzXWnm.js";import"./cn-BEHD0UYf.js";import"./button-mvJUpYu0.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./createLucideIcon-CAcKuqHj.js";const R={title:"UI/Carousel",component:t,parameters:{layout:"centered",docs:{description:{component:`
A carousel component that displays a collection of items in a scrollable container.

This component is built on top of [Embla Carousel](https://www.embla-carousel.com/).

### Component Parts
- [CarouselContent](?path=/story/ui-carousel-carouselcontent--default): Container for the carousel items, handles scrolling and layout.
- [CarouselItem](?path=/story/ui-carousel-carouselitem--default): Represents an individual slide/item in the carousel.
- [CarouselNavigation](?path=/story/ui-carousel-carouselnavigation--default): Provides navigation controls (previous/next buttons) for the carousel.
        `}}},argTypes:{opts:{description:"The options for the carousel",control:"object"},plugins:{description:"The plugins for the carousel",control:"object"},orientation:{description:"The orientation of the carousel",control:"select",options:["horizontal","vertical"]},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},c=a=>e.jsxs(t,{className:"w-full max-w-xs",...a,children:[e.jsx(o,{children:Array.from({length:5}).map((s,f)=>e.jsx(l,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(n,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:f+1})})})})},f))}),e.jsx(x,{}),e.jsx(C,{})]}),i=()=>e.jsxs(t,{opts:{align:"start"},orientation:"vertical",className:"m-5",children:[e.jsx(o,{id:"carousel-content",className:"h-[200px] w-[200px]",children:Array.from({length:5}).map((a,s)=>e.jsx(l,{children:e.jsx(r,{className:"h-full flex items-center justify-center",children:e.jsx(n,{children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})},s))}),e.jsx(x,{}),e.jsx(C,{})]}),m=()=>e.jsx(t,{className:"w-full max-w-xs",children:e.jsx(o,{children:Array.from({length:5}).map((a,s)=>e.jsx(l,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(n,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})})},s))})}),d=()=>e.jsxs(t,{className:"w-full max-w-xs",children:[e.jsx(o,{children:Array.from({length:5}).map((a,s)=>e.jsx(l,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(n,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})})},s))}),e.jsx(x,{variant:"ghost",color:"violet"}),e.jsx(C,{variant:"ghost",color:"violet"})]}),u=()=>{const[a,s]=h.useState(),[f,N]=h.useState(0),[g,v]=h.useState(0);return h.useEffect(()=>{a&&(v(a.scrollSnapList().length),N(a.selectedScrollSnap()),a.on("select",()=>{N(a.selectedScrollSnap())}))},[a]),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(t,{setApi:s,className:"w-full max-w-xs",children:[e.jsx(o,{children:Array.from({length:5}).map((y,j)=>e.jsx(l,{children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(n,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:j+1})})})})},j))}),e.jsx(x,{}),e.jsx(C,{})]}),e.jsxs("div",{className:"text-center text-sm text-muted-foreground",children:["Slide ",f+1," of ",g]})]})},p=()=>e.jsxs(t,{opts:{align:"start",loop:!0},className:"w-full max-w-xs",children:[e.jsx(o,{children:Array.from({length:5}).map((a,s)=>e.jsx(l,{className:"md:basis-1/2 lg:basis-1/3",children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(n,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})})},s))}),e.jsx(x,{}),e.jsx(C,{})]});c.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Vertical"};m.__docgenInfo={description:"",methods:[],displayName:"WithoutNavigation"};d.__docgenInfo={description:"",methods:[],displayName:"CustomNavigation"};u.__docgenInfo={description:"",methods:[],displayName:"Controlled"};p.__docgenInfo={description:"",methods:[],displayName:"MultipleSlides"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  return <Carousel className="w-full max-w-xs" {...args}>
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Carousel opts={{
    align: 'start'
  }} orientation="vertical" className="m-5">
      <CarouselContent id="carousel-content" className="h-[200px] w-[200px]">
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index}>
            <Card className="h-full flex items-center justify-center">
              <CardContent>
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
    </Carousel>;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious variant="ghost" color="violet" />
      <CarouselNext variant="ghost" color="violet" />
    </Carousel>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return <div className="space-y-4">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center text-sm text-muted-foreground">
        Slide {current + 1} of {count}
      </div>
    </div>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Carousel opts={{
    align: 'start',
    loop: true
  }} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>;
}`,...p.parameters?.docs?.source}}};const T=["Default","Vertical","WithoutNavigation","CustomNavigation","Controlled","MultipleSlides"];export{u as Controlled,d as CustomNavigation,c as Default,p as MultipleSlides,i as Vertical,m as WithoutNavigation,T as __namedExportsOrder,R as default};
