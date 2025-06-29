import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as V}from"./index-BgCQ941z.js";import{B as E}from"./button-B_EVNb5l.js";import{a as g,f,C as B}from"./calendar-B6pwXvQa.js";import{P as $,a as U,b as W}from"./popover-D_O2QJOe.js";import{c as z}from"./cn-BEHD0UYf.js";import{C as G}from"./calendar-DHsQt5EN.js";import{C as J}from"./clock-eZ5McujQ.js";import{M as K}from"./minus-Cu6i7ejf.js";import{c as Q}from"./createLucideIcon-BROHhCyT.js";import{a as d,b as m,c,S as p,d as s}from"./select-BWl0jssQ.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./command-Q4idtgBF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./x-B9jT4yqJ.js";import"./chevrons-up-down-D9PYFOK3.js";import"./check-DLjw-kwL.js";import"./chevron-down-DX_dkZyb.js";import"./chevron-up-CCoYB0VF.js";import"./chevron-right-BtqEn5DN.js";import"./chevron-left-CeDv6gDB.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-BdQq_4o_.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],Y=Q("clock-fading",X);function N(b){const{value:h,defaultValue:i={from:new Date,to:g(new Date,20)},onValueChange:u,className:x,placeholder:q="Pick date range",disabled:I,calendarProps:L={},id:_,name:P,minuteStep:w=5,ampm:r=!0}=b,y=Object.prototype.hasOwnProperty.call(b,"value"),[O,T]=V.useState(i),a=y?h:O,A=Array.from({length:r?12:24},(t,o)=>o+1),F=V.useCallback(t=>{y?u?.(t):T(t)},[y,u]),l=(t,o,S)=>{const R=t==="from"?a?.from:a?.to;if(R){const n=new Date(R);if(o==="hour")r?n.setHours(Number.parseInt(S)%12+(n.getHours()>=12?12:0)):n.setHours(Number.parseInt(S));else if(o==="minute")n.setMinutes(Number.parseInt(S));else if(o==="ampm"){const H=n.getHours();n.setHours(S==="PM"?H+12:H-12)}console.log(n,t),y?u?.({...a,[t]:n}):T({...a,[t]:n})}};return e.jsxs($,{children:[e.jsx(U,{asChild:!0,children:e.jsxs(E,{id:_,variant:"outline",color:"neutral",className:z("border-input border bg-transparent hover:bg-transparent w-[280px] justify-start text-left font-normal",!a&&"text-muted-foreground",x),disabled:I,children:[e.jsx(G,{className:"mr-2 h-4 w-4"}),e.jsx("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:a?.from?a.to?e.jsxs(e.Fragment,{children:[f(a.from,"LLL dd, y")," - ",f(a.to,"LLL dd, y")]}):f(a.from,"LLL dd, y"):q})]})}),e.jsxs(W,{className:"w-auto p-0",align:"start",children:[e.jsx(B,{initialFocus:!0,defaultMonth:a?.from,mode:"range",selected:a,onSelect:F,numberOfMonths:2,...L,classNames:{months:"relative flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"}}),e.jsxs("div",{className:"flex flex-col gap-2 md:flex-row md:gap-0 justify-between items-center p-4 pt-0",children:[e.jsxs("div",{className:"flex flex-row items-center gap-1",children:[e.jsx(J,{className:"w-4 h-4 text-muted-foreground mr-2"}),e.jsxs(d,{defaultValue:"12",value:a?.from?r?(a.from.getHours()%12||12).toString():a.from.getHours().toString():"12",onValueChange:t=>l("from","hour",t),children:[e.jsx(m,{children:e.jsx(c,{placeholder:"-"})}),e.jsx(p,{className:"min-w-[0px] w-fit h-[200px] max-h-[200px]",children:A.map(t=>e.jsx(s,{value:r?t.toString():(t-1).toString(),children:r?t.toString().padStart(2,"0"):(t-1).toString().padStart(2,"0")},t))})]}),e.jsx("span",{className:"text-muted-foreground",children:":"}),e.jsxs(d,{defaultValue:"0",value:a?.from?a?.from?.getMinutes().toString():void 0,onValueChange:t=>l("from","minute",t),children:[e.jsx(m,{children:e.jsx(c,{placeholder:"-"})}),e.jsx(p,{className:"min-w-[0px] w-fit max-h-[200px]",children:Array.from({length:Math.ceil(60/w)},(t,o)=>o*w).filter(t=>t<60).map(t=>e.jsx(s,{value:t.toString(),children:t.toString().padStart(2,"0")},t))})]}),r&&e.jsxs(d,{defaultValue:"AM",value:a?.from&&a?.from?.getHours()>=12?"PM":"AM",onValueChange:t=>l("from","ampm",t),children:[e.jsx(m,{children:e.jsx(c,{placeholder:"-"})}),e.jsxs(p,{className:"min-w-[0px] w-fit",children:[e.jsx(s,{value:"AM",children:"AM"}),e.jsx(s,{value:"PM",children:"PM"})]})]})]}),e.jsx(K,{className:"w-4 h-4 text-muted-foreground m-1 hidden md:block"}),e.jsxs("div",{className:"flex flex-row items-center gap-1",children:[e.jsx(Y,{className:"w-4 h-4 text-muted-foreground mr-2"}),e.jsxs(d,{defaultValue:"12",value:a?.to?r?(a.to.getHours()%12||12).toString():a.to.getHours().toString():"12",onValueChange:t=>l("to","hour",t),children:[e.jsx(m,{children:e.jsx(c,{placeholder:"-"})}),e.jsx(p,{className:"min-w-[0px] w-fit h-[200px] max-h-[200px]",children:A.map(t=>e.jsx(s,{value:r?t.toString():(t-1).toString(),children:r?t.toString().padStart(2,"0"):(t-1).toString().padStart(2,"0")},t))})]}),e.jsx("span",{className:"text-muted-foreground",children:":"}),e.jsxs(d,{defaultValue:"0",value:a?.to?a?.to?.getMinutes().toString():void 0,onValueChange:t=>l("to","minute",t),children:[e.jsx(m,{children:e.jsx(c,{placeholder:"-"})}),e.jsx(p,{className:"min-w-[0px] w-fit max-h-[200px]",children:Array.from({length:Math.ceil(60/w)},(t,o)=>o*w).filter(t=>t<60).map(t=>e.jsx(s,{value:t.toString(),children:t.toString().padStart(2,"0")},t))})]}),r&&e.jsxs(d,{defaultValue:"AM",value:a?.to&&a?.to?.getHours()>=12?"PM":"AM",onValueChange:t=>l("to","ampm",t),children:[e.jsx(m,{children:e.jsx(c,{placeholder:"-"})}),e.jsxs(p,{className:"min-w-[0px] w-fit",children:[e.jsx(s,{value:"AM",children:"AM"}),e.jsx(s,{value:"PM",children:"PM"})]})]})]})]})]}),P&&e.jsx("input",{type:"hidden",name:P,value:a?.from&&a?.to?`${a?.from?.toISOString()} - ${a?.to?.toISOString()}`:""})]})}N.__docgenInfo={description:"",methods:[],displayName:"DateTimeRangePicker",props:{value:{required:!1,tsType:{name:"DateRange"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"value"}],return:{name:"void"}}},description:""},defaultValue:{required:!1,tsType:{name:"DateRange"},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},minuteStep:{required:!1,tsType:{name:"number"},description:""},ampm:{required:!1,tsType:{name:"boolean"},description:""},calendarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ReactComponentProps",raw:"React.ComponentProps<typeof DayPicker>",elements:[{name:"DayPicker"}]},{name:"union",raw:"'selected' | 'onSelect' | 'mode'",elements:[{name:"literal",value:"'selected'"},{name:"literal",value:"'onSelect'"},{name:"literal",value:"'mode'"}]}],raw:"Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>"},description:""}}};const Ue={title:"Blocks/DateTimeRangePicker",component:N,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A date and time range picker component that allows users to select a start and end date with time. Built on top of [React Day Picker](https://react-day-picker.js.org/) and [Radix UI Select](https://www.radix-ui.com/primitives/docs/components/select)."}}},argTypes:{value:{description:"The controlled value of the date range picker",control:"object"},onValueChange:{description:"Callback function called when the date range value changes",control:!1},defaultValue:{description:"The default value of the date range picker",control:"object"},className:{description:"Additional CSS class name for the button element",control:"text"},placeholder:{description:"Placeholder text shown when no date range is selected",control:"text",defaultValue:"Pick date range"},disabled:{description:"Whether the date range picker is disabled",control:"boolean",defaultValue:!1},id:{description:"The ID attribute of the button element",control:"text"},name:{description:"The name attribute for the hidden input element",control:"text"},minuteStep:{description:"The step interval for minutes selection",control:"number",defaultValue:5},ampm:{description:"Whether to use 12-hour (AM/PM) time format",control:"boolean",defaultValue:!0},calendarProps:{description:"Additional props to pass to the calendar component",control:"object"}}},j={parameters:{docs:{description:{story:"The default date time range picker with default settings."}}}},v={parameters:{docs:{description:{story:"A controlled date time range picker example."}}},render:function(h){const[i,u]=V.useState({from:new Date,to:g(new Date,7)});return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(N,{...h,value:i,onValueChange:x=>{u(x),h.onValueChange?.(x)}}),e.jsxs("p",{children:["Selected date range: ",i?.from?f(i.from,"dd/MM/yy HH:mm"):"None"," ","- ",i?.to?f(i.to,"dd/MM/yy HH:mm"):"None"]})]})}},D={args:{disabled:!0,defaultValue:{from:new Date,to:g(new Date,7)}},parameters:{docs:{description:{story:"A disabled date time range picker."}}}},M={args:{placeholder:"Select date and time range"},parameters:{docs:{description:{story:"A date time range picker with custom placeholder text."}}}},k={args:{minuteStep:15,defaultValue:{from:new Date,to:g(new Date,7)}},parameters:{docs:{description:{story:"A date time range picker with 15-minute step intervals."}}}},C={args:{ampm:!1,defaultValue:{from:new Date,to:g(new Date,7)}},parameters:{docs:{description:{story:"A date time range picker using 24-hour time format."}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The default date time range picker with default settings.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A controlled date time range picker example.'
      }
    }
  },
  render: function ControlledExample(args) {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7)
    });
    return <div className="flex flex-col gap-4">
        <DateTimeRangePicker {...args} value={dateRange} onValueChange={value => {
        setDateRange(value);
        args.onValueChange?.(value);
      }} />
        <p>
          Selected date range: {dateRange?.from ? format(dateRange.from, 'dd/MM/yy HH:mm') : 'None'}{' '}
          - {dateRange?.to ? format(dateRange.to, 'dd/MM/yy HH:mm') : 'None'}
        </p>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: {
      from: new Date(),
      to: addDays(new Date(), 7)
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled date time range picker.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select date and time range'
  },
  parameters: {
    docs: {
      description: {
        story: 'A date time range picker with custom placeholder text.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    minuteStep: 15,
    defaultValue: {
      from: new Date(),
      to: addDays(new Date(), 7)
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A date time range picker with 15-minute step intervals.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ampm: false,
    defaultValue: {
      from: new Date(),
      to: addDays(new Date(), 7)
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A date time range picker using 24-hour time format.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const We=["Default","Controlled","Disabled","CustomPlaceholder","CustomMinuteStep","TwentyFourHourFormat"];export{v as Controlled,k as CustomMinuteStep,M as CustomPlaceholder,j as Default,D as Disabled,C as TwentyFourHourFormat,We as __namedExportsOrder,Ue as default};
