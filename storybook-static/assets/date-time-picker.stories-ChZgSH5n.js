import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as P}from"./index-CP2yOfOm.js";import{B as _}from"./button-DVhd8Mv9.js";import{f as L,C as E}from"./calendar-DImi6FqO.js";import{P as z,a as B,b as G}from"./popover-C9jDZsSF.js";import{c as J}from"./cn-BEHD0UYf.js";import{a as M,b as T,c as v,S as C,d as c}from"./select-Dm_91ekx.js";import{C as U}from"./calendar-xykrT0N2.js";import{C as $}from"./clock-CFic8s4M.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./command-CSgIugiD.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./chevrons-up-down-DvpqgdUU.js";import"./check-C8XpHW4d.js";import"./chevron-down-BesqFj4W.js";import"./chevron-up-BP6FDRUT.js";import"./chevron-right-DLQnG4vI.js";import"./chevron-left-DOqqoHvp.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./index-BdQq_4o_.js";import"./index-BEIweEOh.js";import"./index-BBCYznAR.js";import"./index-BCfVrt2A.js";import"./index-jor98p9X.js";function y(a){const{value:s,defaultValue:w,onValueChange:l,className:N,placeholder:Y="Pick a date",disabled:A,calendarProps:F={},id:H,minuteStep:j=5,name:b,ampm:i=!0}=a,S=Object.prototype.hasOwnProperty.call(a,"value"),[q,k]=P.useState(w),r=S?s:q,[I,O]=P.useState(!1),W=Array.from({length:i?12:24},(t,o)=>o+1),R=t=>{t&&(S?l?.(t):k(t))},D=(t,o)=>{if(r){const n=new Date(r);if(t==="hour")i?n.setHours(Number.parseInt(o)%12+(n.getHours()>=12?12:0)):n.setHours(Number.parseInt(o));else if(t==="minute")n.setMinutes(Number.parseInt(o));else if(t==="ampm"){const V=n.getHours();n.setHours(o==="PM"?V+12:V-12)}console.log(n),S?l?.(n):k(n)}};return e.jsxs(z,{open:I,onOpenChange:O,children:[e.jsx(B,{asChild:!0,children:e.jsxs(_,{id:H,variant:"outline",color:"neutral",className:J("border-input active:scale-100 border bg-transparent hover:bg-transparent w-[280px] justify-start text-left font-normal",!r&&"text-muted-foreground",N),disabled:A,children:[e.jsx(U,{className:"mr-2 h-4 w-4"}),r?L(r,i?"dd/MM/yyyy hh:mm aa":"dd/MM/yyyy HH:mm"):e.jsx("span",{children:Y})]})}),e.jsx(G,{className:"w-auto p-0",children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx(E,{mode:"single",onSelect:R,initialFocus:!0,defaultMonth:r,selected:r,...F,classNames:{months:"relative flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"}}),e.jsxs("div",{className:"flex flex-row items-center gap-1 p-4 pt-0",children:[e.jsx($,{className:"w-4 h-4 text-muted-foreground mr-2"}),e.jsxs(M,{defaultValue:"12",value:r?i?(r.getHours()%12||12).toString():r.getHours().toString():"12",onValueChange:t=>D("hour",t),children:[e.jsx(T,{children:e.jsx(v,{placeholder:"-"})}),e.jsx(C,{className:"min-w-[0px] w-fit h-[200px] max-h-[200px]",children:W.map(t=>e.jsx(c,{value:i?t.toString():(t-1).toString(),children:i?t.toString().padStart(2,"0"):(t-1).toString().padStart(2,"0")},t))})]}),e.jsx("span",{className:"text-muted-foreground",children:":"}),e.jsxs(M,{defaultValue:"0",value:r?r?.getMinutes().toString():void 0,onValueChange:t=>D("minute",t),children:[e.jsx(T,{children:e.jsx(v,{placeholder:"-"})}),e.jsx(C,{className:"min-w-[0px] w-fit max-h-[200px]",children:Array.from({length:Math.ceil(60/j)},(t,o)=>o*j).filter(t=>t<60).map(t=>e.jsx(c,{value:t.toString(),children:t.toString().padStart(2,"0")},t))})]}),i&&e.jsxs(M,{defaultValue:"AM",value:r&&r?.getHours()>=12?"PM":"AM",onValueChange:t=>D("ampm",t),children:[e.jsx(T,{children:e.jsx(v,{placeholder:"-"})}),e.jsxs(C,{className:"min-w-[0px] w-fit",children:[e.jsx(c,{value:"AM",children:"AM"}),e.jsx(c,{value:"PM",children:"PM"})]})]})]})]})}),b&&e.jsx("input",{type:"hidden",name:b,value:r?.toISOString()||""})]})}y.__docgenInfo={description:"",methods:[],displayName:"DateTimePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"value"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"Date"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},minuteStep:{required:!1,tsType:{name:"number"},description:""},ampm:{required:!1,tsType:{name:"boolean"},description:""},calendarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DayPicker>",elements:[{name:"DayPicker"}]},{name:"union",raw:"'selected' | 'onSelect' | 'mode'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'onSelect'"},{name:"literal",value:"'mode'"}]}],raw:"Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>"},description:""}}};const Re={title:"UI/DateTimePicker",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A date time picker component that allows users to select a date and time.

This component is built on top of [React Day Picker](https://react-day-picker.js.org/) and uses [date-fns](https://date-fns.org/) for date manipulation.

This components accepts \`calendarProps\` and passes them to the [Calendar](/docs/ui-calendar--docs) component.`}}},argTypes:{value:{description:"The controlled value of the date time picker",control:"date"},defaultValue:{description:"The default value of the date time picker when uncontrolled",control:"date"},onValueChange:{description:"Callback function called when the value changes",control:!1},className:{description:"Additional CSS classes to apply to the trigger button",control:"text"},placeholder:{description:"Placeholder text shown when no date is selected",control:"text",defaultValue:"Pick a date"},disabled:{description:"Whether the date time picker is disabled",control:"boolean",defaultValue:!1},id:{description:"HTML id attribute for the trigger button",control:"text"},name:{description:"HTML name attribute for the trigger button",control:"text"},minuteStep:{description:"The step interval for minutes selection",control:"number",defaultValue:5},ampm:{description:"Whether to show AM/PM selection",control:"boolean",defaultValue:!0},calendarProps:{description:"Additional props to pass to the Calendar component",control:!1}}},d={parameters:{docs:{description:{story:"The default uncontrolled date time picker."}}}},p={args:{defaultValue:new Date("2024-03-15T14:30:00")},parameters:{docs:{description:{story:"Date time picker initialized with a default value."}}}},m={render:a=>{const[s,w]=P.useState(new Date("2024-03-15T14:30:00"));return e.jsx(y,{...a,value:s,onValueChange:l=>{w(l),a.onValueChange?.(l)}})},parameters:{docs:{description:{story:"A controlled date time picker component."}}}},u={args:{disabled:!0,defaultValue:new Date("2024-03-15T14:30:00")},parameters:{docs:{description:{story:"A disabled date time picker."}}}},h={args:{placeholder:"Select date and time"},parameters:{docs:{description:{story:"Date time picker with a custom placeholder text."}}}},f={render:()=>{const a=new Date;a.setFullYear(a.getFullYear()+1);const s=new Date;return s.setFullYear(s.getFullYear()+10),e.jsx(y,{calendarProps:{startMonth:a,endMonth:s,captionLayout:"dropdown",defaultMonth:a}})},parameters:{docs:{description:{story:"Date time picker with year selection starting from next year up to 10 years in the future."}}}},g={args:{minuteStep:15},parameters:{docs:{description:{story:"Date time picker with custom minute step interval (15 minutes)."}}}},x={args:{ampm:!1,value:new Date("Wed Jan 01 2025 00:01:00 GMT+0700 (Western Indonesia Time)"),minuteStep:1},parameters:{docs:{description:{story:"Date time picker without AM/PM selection."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The default uncontrolled date time picker.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date('2024-03-15T14:30:00')
  },
  parameters: {
    docs: {
      description: {
        story: 'Date time picker initialized with a default value.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>(new Date('2024-03-15T14:30:00'));
    return <DateTimePicker {...args} value={date} onValueChange={newDate => {
      setDate(newDate);
      args.onValueChange?.(newDate);
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled date time picker component.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: new Date('2024-03-15T14:30:00')
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled date time picker.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select date and time'
  },
  parameters: {
    docs: {
      description: {
        story: 'Date time picker with a custom placeholder text.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    const tenYearsFromNow = new Date();
    tenYearsFromNow.setFullYear(tenYearsFromNow.getFullYear() + 10);
    return <DateTimePicker calendarProps={{
      startMonth: nextYear,
      endMonth: tenYearsFromNow,
      captionLayout: 'dropdown',
      defaultMonth: nextYear
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Date time picker with year selection starting from next year up to 10 years in the future.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    minuteStep: 15
  },
  parameters: {
    docs: {
      description: {
        story: 'Date time picker with custom minute step interval (15 minutes).'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ampm: false,
    value: new Date('Wed Jan 01 2025 00:01:00 GMT+0700 (Western Indonesia Time)'),
    minuteStep: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'Date time picker without AM/PM selection.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const _e=["Default","WithDefaultValue","Controlled","Disabled","CustomPlaceholder","CustomYearRange","CustomMinuteStep","NoAMPM"];export{m as Controlled,g as CustomMinuteStep,h as CustomPlaceholder,f as CustomYearRange,d as Default,u as Disabled,x as NoAMPM,p as WithDefaultValue,_e as __namedExportsOrder,Re as default};
