import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BgCQ941z.js";import{S as l}from"./slider-Dux7BbtF.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-Be4k453d.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-Pxmga4VG.js";import"./index-BMvmY0JD.js";import"./index-B9tD0Hfr.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-BDff9h2_.js";import"./index-DLD62pO3.js";import"./cn-BEHD0UYf.js";const C={title:"UI/Slider",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`An input where the user selects a value from within a given range using a slider.

This component is built on top of [Radix UI Slider](https://www.radix-ui.com/primitives/docs/components/slider).`}}},argTypes:{value:{control:"object",description:"The controlled value of the slider. Can be a single value or range (array)."},defaultValue:{control:"object",description:"The default value when initially rendered. Can be a single value or range (array)."},onValueChange:{description:"Event handler called when the value changes."},onValueCommit:{description:"Event handler called when the value changes at the end of an interaction."},name:{control:"text",description:"The name of the slider. Submitted with its owning form as part of a name/value pair."},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the slider.",defaultValue:!1},orientation:{control:"radio",options:["horizontal","vertical"],description:"The orientation of the slider.",defaultValue:"horizontal"},dir:{control:"radio",options:["ltr","rtl"],description:"The reading direction of the slider."},inverted:{control:"boolean",description:"Whether the slider is visually inverted.",defaultValue:!1},min:{control:"number",description:"The minimum value for the range.",defaultValue:0},max:{control:"number",description:"The maximum value for the range.",defaultValue:100},step:{control:"number",description:"The stepping interval.",defaultValue:1},minStepsBetweenThumbs:{control:"number",description:"The minimum permitted steps between multiple thumbs.",defaultValue:0},className:{control:"text",description:"Additional CSS class names."}}},e={args:{defaultValue:[33],className:"w-[200px]"},parameters:{docs:{description:{story:"A basic slider with a single value."}}}},a={args:{defaultValue:[25,75],className:"w-[200px]"},parameters:{docs:{description:{story:"A range slider with two thumbs for selecting a range of values."}}}},t={args:{defaultValue:[50],orientation:"vertical",className:"h-[200px]"},parameters:{docs:{description:{story:"A vertical slider with a single value."}}}},r={args:{defaultValue:[45],disabled:!0,className:"w-[200px]"},parameters:{docs:{description:{story:"A disabled slider that cannot be interacted with."}}}},s={args:{defaultValue:[25],min:-50,max:50,step:5,className:"w-[200px]"},render:i=>{const[o,c]=d.useState(i.defaultValue);return n.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[n.jsx(l,{...i,value:o,onValueChange:c}),n.jsx("span",{className:"text-sm text-gray-500",children:o})]})},parameters:{docs:{description:{story:"A slider with custom minimum, maximum, and step values."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [33],
    className: 'w-[200px]'
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic slider with a single value.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    className: 'w-[200px]'
  },
  parameters: {
    docs: {
      description: {
        story: 'A range slider with two thumbs for selecting a range of values.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    orientation: 'vertical',
    className: 'h-[200px]'
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical slider with a single value.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [45],
    disabled: true,
    className: 'w-[200px]'
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled slider that cannot be interacted with.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [25],
    min: -50,
    max: 50,
    step: 5,
    className: 'w-[200px]'
  },
  render: args => {
    const [value, setValue] = useState(args.defaultValue);
    return <div className="flex flex-col items-center justify-center h-full">
        <Slider {...args} value={value} onValueChange={setValue} />
        <span className="text-sm text-gray-500">{value}</span>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A slider with custom minimum, maximum, and step values.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","Range","Vertical","Disabled","CustomRange"];export{s as CustomRange,e as Default,r as Disabled,a as Range,t as Vertical,R as __namedExportsOrder,C as default};
