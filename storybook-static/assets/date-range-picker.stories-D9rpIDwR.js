import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as f}from"./index-CP2yOfOm.js";import{B as V}from"./button-DVhd8Mv9.js";import{a as d,f as u,C as j}from"./calendar-DImi6FqO.js";import{P as R,a as T,b as k}from"./popover-C9jDZsSF.js";import{c as O}from"./cn-BEHD0UYf.js";import{C as q}from"./calendar-xykrT0N2.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./command-CSgIugiD.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevrons-up-down-DvpqgdUU.js";import"./check-C8XpHW4d.js";import"./chevron-down-BesqFj4W.js";import"./chevron-up-BP6FDRUT.js";import"./chevron-right-DLQnG4vI.js";import"./chevron-left-DOqqoHvp.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";function g(t){const{value:c,defaultValue:p={from:new Date,to:d(new Date,20)},onValueChange:r,className:y,placeholder:b="Pick date range",disabled:w,calendarProps:C={},id:x,name:h}=t,m=Object.prototype.hasOwnProperty.call(t,"value"),[v,P]=f.useState(p),S=f.useCallback(D=>{m?r?.(D):P(D)},[m,r]),e=m?c:v;return a.jsxs(R,{children:[a.jsx(T,{asChild:!0,children:a.jsxs(V,{id:x,variant:"outline",color:"neutral",className:O("border-input active:scale-100 border bg-transparent hover:bg-transparent w-[280px] justify-start text-left font-normal",!e&&"text-muted-foreground",y),disabled:w,children:[a.jsx(q,{className:"mr-2 h-4 w-4"}),e?.from?e.to?a.jsxs(a.Fragment,{children:[u(e.from,"LLL dd, y")," - ",u(e.to,"LLL dd, y")]}):u(e.from,"LLL dd, y"):a.jsx("span",{children:b})]})}),a.jsx(k,{className:"w-auto p-0",align:"start",children:a.jsx(j,{initialFocus:!0,defaultMonth:e?.from,mode:"range",selected:e,onSelect:S,numberOfMonths:2,...C,classNames:{months:"relative flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"}})}),h&&a.jsx("input",{type:"hidden",name:h,value:e?.from&&e?.to?`${e?.from?.toISOString()} - ${e?.to?.toISOString()}`:""})]})}g.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!1,tsType:{name:"DateRange"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"value"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"DateRange"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},calendarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DayPicker>",elements:[{name:"DayPicker"}]},{name:"union",raw:"'selected' | 'onSelect' | 'mode'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'onSelect'"},{name:"literal",value:"'mode'"}]}],raw:"Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>"},description:""}}};const he={title:"UI/DateRangePicker",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A date range picker component that allows users to select a range of dates. The calendar displays two months side by side in a horizontal layout for easier date range selection.

This component is built on top of [React Day Picker](https://react-day-picker.js.org/) and uses [date-fns](https://date-fns.org/) for date manipulation.

This components accepts \`calendarProps\` and passes them to the [Calendar](/docs/ui-calendar--docs) component.`}}},argTypes:{value:{description:"The controlled value of the date range",control:"object"},onValueChange:{description:"Callback function called when the date range changes",control:!1},defaultValue:{description:"The default value of the date range when uncontrolled",control:"object"},className:{description:"Additional CSS classes to apply to the button element",control:"text"},placeholder:{description:"Placeholder text shown when no date range is selected",control:"text"},disabled:{description:"Whether the date range picker is disabled",control:"boolean"},id:{description:"The id attribute for the button element",control:"text"},name:{description:"The name attribute for the hidden input element",control:"text"},calendarProps:{description:"Additional props to pass to the Calendar component",control:"object"}}},o={args:{placeholder:"Select date range"}},n={args:{defaultValue:{from:new Date,to:d(new Date,7)}}},s={args:{disabled:!0,defaultValue:{from:new Date,to:d(new Date,7)}}},l={render:t=>{const[c,p]=f.useState({from:new Date,to:d(new Date,7)});return a.jsx(g,{...t,value:c,onValueChange:r=>{p(r),t.onValueChange?.(r)}})}},i={args:{calendarProps:{numberOfMonths:1,disabled:{before:new Date},fromYear:2024,toYear:2025}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select date range'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      from: new Date(),
      to: addDays(new Date(), 7)
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: {
      from: new Date(),
      to: addDays(new Date(), 7)
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7)
    });
    return <DateRangePicker {...args} value={dateRange} onValueChange={value => {
      setDateRange(value);
      args.onValueChange?.(value);
    }} />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    calendarProps: {
      numberOfMonths: 1,
      disabled: {
        before: new Date()
      },
      fromYear: 2024,
      toYear: 2025
    }
  }
}`,...i.parameters?.docs?.source}}};const De=["Default","WithDefaultValue","Disabled","Controlled","WithCustomCalendarProps"];export{l as Controlled,o as Default,s as Disabled,i as WithCustomCalendarProps,n as WithDefaultValue,De as __namedExportsOrder,he as default};
