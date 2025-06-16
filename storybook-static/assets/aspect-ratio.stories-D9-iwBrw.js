import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{P as h}from"./index-DY14GT23.js";import"./index-BOAxdYzW.js";import"./index-C6iJU1zt.js";var f="AspectRatio",i=u.forwardRef((r,n)=>{const{ratio:l=1/1,style:p,...m}=r;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/l}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(h.div,{...m,ref:n,style:{...p,position:"absolute",top:0,right:0,bottom:0,left:0}})})});i.displayName=f;var w=i;function a({...r}){return e.jsx(w,{"data-slot":"aspect-ratio",...r})}a.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const N={title:"UI/AspectRatio",component:a,parameters:{layout:"centered",docs:{description:{component:`
A component that maintains a consistent width/height ratio for its content.

This component is built on top of [Radix UI AspectRatio](https://www.radix-ui.com/primitives/docs/components/aspect-ratio).
        `}}},tags:["autodocs"],argTypes:{ratio:{description:"The desired aspect ratio (width / height).",control:"number",defaultValue:1},asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}}},s=()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:1,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),t=()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:16/9,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),o=()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:3/4,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),c=()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:4/3,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),d=()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:1,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:16/9,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:3/4,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})}),e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:4/3,children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Mountain landscape by Drew Beamer",className:"rounded-md object-cover w-full h-full"})})})]});s.__docgenInfo={description:"",methods:[],displayName:"Square"};t.__docgenInfo={description:"",methods:[],displayName:"Video"};o.__docgenInfo={description:"",methods:[],displayName:"Portrait"};c.__docgenInfo={description:"",methods:[],displayName:"Landscape"};d.__docgenInfo={description:"",methods:[],displayName:"DifferentRatios"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div className="w-[300px]">
    <AspectRatio ratio={1}>
      <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>
  </div>`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <div className="w-[300px]">
    <AspectRatio ratio={16 / 9}>
      <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>
  </div>`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div className="w-[300px]">
    <AspectRatio ratio={3 / 4}>
      <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>
  </div>`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div className="w-[300px]">
    <AspectRatio ratio={4 / 3}>
      <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
    </AspectRatio>
  </div>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <div className="flex flex-col gap-4">
    <div className="w-[300px]">
      <AspectRatio ratio={1}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
      </AspectRatio>
    </div>
    <div className="w-[300px]">
      <AspectRatio ratio={16 / 9}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
      </AspectRatio>
    </div>
    <div className="w-[300px]">
      <AspectRatio ratio={3 / 4}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
      </AspectRatio>
    </div>
    <div className="w-[300px]">
      <AspectRatio ratio={4 / 3}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Mountain landscape by Drew Beamer" className="rounded-md object-cover w-full h-full" />
      </AspectRatio>
    </div>
  </div>`,...d.parameters?.docs?.source}}};const y=["Square","Video","Portrait","Landscape","DifferentRatios"];export{d as DifferentRatios,c as Landscape,o as Portrait,s as Square,t as Video,y as __namedExportsOrder,N as default};
