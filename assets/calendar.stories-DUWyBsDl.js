import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as e,D as W,S as N,U as o}from"./calendar-DImi6FqO.js";import"./cn-BEHD0UYf.js";import"./index-CP2yOfOm.js";import"./command-CSgIugiD.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-C6iJU1zt.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./popover-C9jDZsSF.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";import"./button-DVhd8Mv9.js";import"./index-DvcKK4zF.js";import"./chevrons-up-down-DvpqgdUU.js";import"./check-C8XpHW4d.js";import"./chevron-down-BesqFj4W.js";import"./chevron-up-BP6FDRUT.js";import"./chevron-right-DLQnG4vI.js";import"./chevron-left-DOqqoHvp.js";const le={title:"UI/Calendar",component:e,parameters:{layout:"centered",docs:{description:{component:`
A calendar component for date selection.

This component is built on top of [react-day-picker](https://daypicker.dev/).
        `}}},tags:["autodocs"],argTypes:{autoFocus:{description:"Whether to focus the calendar when it mounts.",control:"boolean"},broadcastCalendar:{description:"Display the weeks in the month following the broadcast calendar.",control:"boolean"},captionLayout:{description:"The layout of the caption.",control:"select",options:["dropdown","label","dropdown-months","dropdown-years"],defaultValue:"dropdown"},className:{description:"The class name of the calendar.",control:"text"},classNames:{description:"Custom class names for different parts of the calendar.",control:"object"},defaultMonth:{description:"The default month to display.",control:"date"},dir:{description:"The direction of the calendar.",control:"select",options:["ltr","rtl"]},disabled:{description:"The dates that should be disabled.",control:"object"},disableNavigation:{description:"Disable navigation between months.",control:"boolean"},fixedWeeks:{description:"Display always 6 weeks per each month, regardless of the month's number of weeks. Weeks will be filled with the days from the next month.",control:"boolean"},formatters:{description:"Custom formatters for different parts of the calendar. See https://daypicker.dev/api/type-aliases/Formatters",control:"object"},hidden:{description:"Apply the hidden modifier to the matching days. Will hide them from the calendar.",control:"boolean"},hideNavigation:{description:"Hide the navigation buttons.",control:"boolean"},hideWeekdays:{description:"Hide the weekdays.",control:"boolean"},id:{description:"A unique id to add to the root element.",control:"text"},ISOWeek:{description:"Whether to use the ISO week number.",control:"boolean"},lang:{description:"Add the language tag to the container element.",control:"text"},locale:{description:"The locale object used to localize dates. Pass a locale from react-day-picker/locale to localize the calendar. ",control:"text"},mode:{description:"The selection mode of the calendar.",control:"select",options:["single","multiple","range"],defaultValue:"single"},month:{description:"The month to display.",control:"date"},numberOfMonths:{description:"The number of months to display.",control:"number"},onDayFocus:{description:"Event handler called when a day is focused."},onDayBlur:{description:"Event handler called when a day is blurred."},onDayClick:{description:"Event handler called when a day is clicked."},onDayMouseEnter:{description:"Event handler called when a day is hovered."},onDayMouseLeave:{description:"Event handler called when a day is hovered."},onMonthChange:{description:"Event handler called when the month changes."},onWeekNumberClick:{description:"Event handler called when a week number is clicked."},onNextClick:{description:"Event handler called when the next button is clicked."},onPrevClick:{description:"Event handler called when the previous button is clicked."},onSelect:{description:"Event handler called when a date is selected."},required:{description:"Whether the calendar is required.",control:"boolean"},showOutsideDays:{description:"Whether to show days outside the current month.",control:"boolean"},showWeekNumber:{description:"Whether to show the week number.",control:"boolean"},style:{description:"The style of the calendar.",control:"text"},timeZone:{description:"The time zone of the calendar.",control:"text"},today:{description:"The today date.",control:"date"},min:{description:"NOTE: Only apply on `range` mode. The minimum date that can be selected.",control:"date"},max:{description:"NOTE: Only apply on `range` mode. The maximum date that can be selected.",control:"date"},startMonth:{description:"The minimum date that can be selected.",control:"date"},endMonth:{description:"The maximum date that can be selected.",control:"date"}}},s={args:{mode:"single"}},r={args:{mode:"range",selected:{from:new Date,to:new Date(Date.now()+7*24*60*60*1e3)}}},d={args:{mode:"multiple",selected:[new Date,new Date(Date.now()+2*24*60*60*1e3),new Date(Date.now()+4*24*60*60*1e3)]}},x=new Date,v=new Date,S=new Date;v.setDate(x.getDate()+1);S.setDate(x.getDate()+7);const i={args:{mode:"single",selected:new Date,disabled:[v,S,new Date(2025,5,30)]}},c={args:{mode:"single",selected:new Date,formatters:{formatCaption:t=>t.toLocaleString("default",{month:"long",year:"numeric"})}}},l={args:{mode:"single",selected:new Date,showOutsideDays:!1}},m={args:{mode:"single",selected:new Date,classNames:{[N.selected]:"bg-blue-500 text-white hover:bg-blue-600",[W.today]:"bg-yellow-100 text-yellow-900"}}},p={args:{mode:"single",selected:new Date,classNames:{[o.PreviousMonthButton]:"bg-primary text-primary-foreground hover:bg-primary/90",[o.NextMonthButton]:"bg-primary text-primary-foreground hover:bg-primary/90"}}},h={args:{mode:"single",selected:new Date,classNames:{[o.Day]:"h-10 w-10 text-base",[o.DayButton]:"h-10 w-10 text-base"}}},u={args:{mode:"single",selected:new Date,classNames:{[o.Months]:"flex flex-col gap-4",[o.Month]:"space-y-4"}}},y={parameters:{docs:{description:{story:`
Disable specific dates using an array of Date objects.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        `}}},render:()=>a.jsx(e,{mode:"single",disabled:[new Date(Date.now()+1*24*60*60*1e3),new Date(Date.now()+2*24*60*60*1e3)]})},g={parameters:{docs:{description:{story:"\nDisable a continuous range of dates using `from` and `to` properties.\nFor more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).\n        "}}},render:()=>a.jsx(e,{mode:"single",disabled:{from:new Date(Date.now()+1*24*60*60*1e3),to:new Date(Date.now()+7*24*60*60*1e3)}})},w={parameters:{docs:{description:{story:`
Disable specific days of the week using the \`dayOfWeek\` matcher. 0 represents Sunday, 6 represents Saturday.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        `}}},render:()=>a.jsx(e,{mode:"single",disabled:{dayOfWeek:[0,6]}})},D={parameters:{docs:{description:{story:`
Disable all dates before today using the \`before\` matcher.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        `}}},render:()=>a.jsx(e,{mode:"single",disabled:{before:new Date},defaultMonth:new Date})},b={parameters:{docs:{description:{story:`
Disable all dates after today using the \`after\` matcher.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        `}}},render:()=>a.jsx(e,{mode:"single",disabled:{after:new Date},defaultMonth:new Date})},f={parameters:{docs:{description:{story:`
Disable multiple date ranges or intervals using an array of matchers.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        `}}},render:()=>{const t=new Date,n=new Date(Date.now()+10*24*60*60*1e3),F=new Date(Date.now()+20*24*60*60*1e3);return a.jsx(e,{mode:"single",disabled:[{before:n},{after:F}],defaultMonth:t})}},k={parameters:{docs:{description:{story:`
By default, the calendar limits selection to 1 year after the current date. Use the \`endMonth\` prop to extend the selectable range.
In this example, we allow selection up to 2 years into the future.
        `}}},render:()=>{const t=new Date,n=new Date(t);return n.setFullYear(t.getFullYear()+2),a.jsx(e,{mode:"single",endMonth:n,defaultMonth:t,captionLayout:"dropdown"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    selected: [new Date(), new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)]
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    disabled: [tomorrow, nextweek, new Date(2025, 5, 30)]
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    formatters: {
      formatCaption: date => date.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
      })
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    showOutsideDays: false
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    classNames: {
      [SelectionState.selected]: 'bg-blue-500 text-white hover:bg-blue-600',
      [DayFlag.today]: 'bg-yellow-100 text-yellow-900'
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    classNames: {
      [UI.PreviousMonthButton]: 'bg-primary text-primary-foreground hover:bg-primary/90',
      [UI.NextMonthButton]: 'bg-primary text-primary-foreground hover:bg-primary/90'
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    classNames: {
      [UI.Day]: 'h-10 w-10 text-base',
      [UI.DayButton]: 'h-10 w-10 text-base'
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: new Date(),
    classNames: {
      [UI.Months]: 'flex flex-col gap-4',
      [UI.Month]: 'space-y-4'
    }
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Disable specific dates using an array of Date objects.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        \`
      }
    }
  },
  render: () => <Calendar mode="single" disabled={[new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  // tomorrow
  new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // day after tomorrow
  ]} />
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Disable a continuous range of dates using \\\`from\\\` and \\\`to\\\` properties.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        \`
      }
    }
  },
  render: () => <Calendar mode="single" disabled={{
    from: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    // tomorrow
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  }} />
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Disable specific days of the week using the \\\`dayOfWeek\\\` matcher. 0 represents Sunday, 6 represents Saturday.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        \`
      }
    }
  },
  render: () => <Calendar mode="single" disabled={{
    dayOfWeek: [0, 6]
  }} />
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Disable all dates before today using the \\\`before\\\` matcher.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        \`
      }
    }
  },
  render: () => <Calendar mode="single" disabled={{
    before: new Date()
  }} defaultMonth={new Date()} />
}`,...D.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Disable all dates after today using the \\\`after\\\` matcher.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        \`
      }
    }
  },
  render: () => <Calendar mode="single" disabled={{
    after: new Date()
  }} defaultMonth={new Date()} />
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Disable multiple date ranges or intervals using an array of matchers.
For more details, see [react-day-picker documentation on disabling dates](https://daypicker.dev/docs/selection-modes#disabled).
        \`
      }
    }
  },
  render: () => {
    const today = new Date();
    const tenDaysFromNow = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    const twentyDaysFromNow = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000);
    return <Calendar mode="single" disabled={[{
      before: tenDaysFromNow
    },
    // Dates before 10 days from now
    {
      after: twentyDaysFromNow
    } // Dates after 20 days from now
    ]} defaultMonth={today} />;
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
By default, the calendar limits selection to 1 year after the current date. Use the \\\`endMonth\\\` prop to extend the selectable range.
In this example, we allow selection up to 2 years into the future.
        \`
      }
    }
  },
  render: () => {
    const today = new Date();
    const twoYearsFromNow = new Date(today);
    twoYearsFromNow.setFullYear(today.getFullYear() + 2);
    return <Calendar mode="single" endMonth={twoYearsFromNow} defaultMonth={today} captionLayout="dropdown" />;
  }
}`,...k.parameters?.docs?.source}}};const me=["Default","WithRange","Multiple","WithDisabledDays","WithCustomFormat","WithoutOutsideDays","WithCustomClassNames","WithCustomNavigation","WithCustomDaySize","WithCustomMonthLayout","DisableSpecificDates","DisableDateRange","DisableWeekends","DisablePastDates","DisableFutureDates","DisableDateIntervals","ExtendedYearSelection"];export{s as Default,f as DisableDateIntervals,g as DisableDateRange,b as DisableFutureDates,D as DisablePastDates,y as DisableSpecificDates,w as DisableWeekends,k as ExtendedYearSelection,d as Multiple,m as WithCustomClassNames,h as WithCustomDaySize,c as WithCustomFormat,u as WithCustomMonthLayout,p as WithCustomNavigation,i as WithDisabledDays,r as WithRange,l as WithoutOutsideDays,me as __namedExportsOrder,le as default};
