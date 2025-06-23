import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as o}from"./button-B_EVNb5l.js";import{b as n,P as t,a as r}from"./popover-D_O2QJOe.js";import"./index-BDff9h2_.js";import"./index-BgCQ941z.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-BInWWs9D.js";const D={title:"UI/Popover/PopoverContent",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{asChild:{description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",control:"boolean"},forceMount:{description:"Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",control:"boolean"},align:{description:"The preferred alignment against the trigger.",control:"select",options:["start","center","end"]},side:{description:"The preferred side to place the content against the trigger.",control:"select",options:["top","right","bottom","left"]},sideOffset:{description:"The distance in pixels from the trigger.",control:"number"},alignOffset:{description:"An offset in pixels from the start and end alignment.",control:"number"},avoidCollisions:{description:"When true, overrides the side and align preferences to prevent the content from overflowing the viewport.",control:"boolean"},collisionBoundary:{description:"The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",control:"object"},collisionPadding:{description:"The distance in pixels from the boundary edges where collision detection should occur.",control:"number"},arrowPadding:{description:"The padding between the arrow and the edges of the content.",control:"number"},sticky:{description:"The sticky behavior on the align axis.",control:"select",options:["partial","always"]},hideWhenDetached:{description:"Whether to hide the content when the trigger becomes fully occluded.",control:"boolean"},updatePositionStrategy:{description:"The strategy used to update the position of the content.",control:"select",options:["optimized","always"]},onCloseAutoFocus:{description:"Event handler called when focus moves to the trigger after closing.",action:"onCloseAutoFocus"},onEscapeKeyDown:{description:"Event handler called when the escape key is pressed.",action:"onEscapeKeyDown"},onInteractOutside:{description:"Event handler called when an interaction (pointer or focus) happens outside the content.",action:"onInteractOutside"},onPointerDownOutside:{description:"Event handler called when the pointer is pressed down outside the content.",action:"onPointerDownOutside"},onOpenAutoFocus:{description:"Event handler called when focus moves to the content after opening.",action:"onOpenAutoFocus"},onFocusOutside:{description:"Event handler called when focus moves outside the content.",action:"onFocusOutside"}}},i={render:()=>e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Popover"})}),e.jsx(n,{className:"w-80",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]})})]})},s={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Start"})}),e.jsx(n,{align:"start",className:"w-80",children:e.jsx("p",{children:"Aligned to start"})})]}),e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Center"})}),e.jsx(n,{align:"center",className:"w-80",children:e.jsx("p",{children:"Aligned to center"})})]}),e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"End"})}),e.jsx(n,{align:"end",className:"w-80",children:e.jsx("p",{children:"Aligned to end"})})]})]})},a={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Top"})}),e.jsx(n,{side:"top",className:"w-80",children:e.jsx("p",{children:"Appears on top"})})]}),e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Right"})}),e.jsx(n,{side:"right",className:"w-80",children:e.jsx("p",{children:"Appears on right"})})]}),e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Bottom"})}),e.jsx(n,{side:"bottom",className:"w-80",children:e.jsx("p",{children:"Appears on bottom"})})]}),e.jsxs(t,{children:[e.jsx(r,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Left"})}),e.jsx(n,{side:"left",className:"w-80",children:e.jsx("p",{children:"Appears on left"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-80">
          <p>Aligned to start</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center" className="w-80">
          <p>Aligned to center</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-80">
          <p>Aligned to end</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-80">
          <p>Appears on top</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right" className="w-80">
          <p>Appears on right</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-80">
          <p>Appears on bottom</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="w-80">
          <p>Appears on left</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...a.parameters?.docs?.source}}};const W=["Default","WithAlignment","WithSide"];export{i as Default,s as WithAlignment,a as WithSide,W as __namedExportsOrder,D as default};
