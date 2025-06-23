import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BgCQ941z.js";import{D as c}from"./date-picker-D1ZGtsIA.js";import"./button-B_EVNb5l.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./calendar-B6pwXvQa.js";import"./command-Q4idtgBF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";import"./popover-D_O2QJOe.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./chevrons-up-down-D9PYFOK3.js";import"./check-DLjw-kwL.js";import"./chevron-down-DX_dkZyb.js";import"./chevron-up-CCoYB0VF.js";import"./chevron-right-BtqEn5DN.js";import"./chevron-left-CeDv6gDB.js";import"./calendar-DHsQt5EN.js";const X={title:"Blocks/DatePicker",component:c,parameters:{layout:"centered",docs:{description:{component:`
A date picker component that combines several base components to create a comprehensive date selection interface.

This component is built using:
- [Calendar](/docs/ui-calendar--docs) component for the date selection grid
- [Popover](/docs/ui-popover--docs) component for the floating date picker panel
- [Button](/docs/ui-button--docs) component for the trigger element

This components accepts \`calendarProps\` and passes them to the [Calendar](/docs/ui-calendar--docs) component.

### Related Components
- [Calendar](/docs/ui-calendar--docs)
- [Popover](/docs/ui-popover--docs)
- [Button](/docs/ui-button--docs)
        `}}},argTypes:{value:{control:"date",description:'The selected date value(s). Single date when mode is "single", array of dates when mode is "multiple"'},onValueChange:{description:"Callback function when date selection changes. Returns a single date or array of dates based on mode"},mode:{control:"radio",options:["single","multiple"],description:'The selection mode of the date picker. Can be "single" for one date or "multiple" for multiple dates',defaultValue:"single"},placeholder:{control:"text",description:"Placeholder text when no date is selected"},disabled:{control:"boolean",description:"Whether the date picker is disabled"},className:{control:"text",description:"Additional CSS classes for the trigger button"},calendarProps:{description:"Additional props for the calendar component - Passed to [Calendar](/docs/ui-calendar--docs)\n        `Omit<PropsSingle | PropsMulti, 'selected' | 'onSelect' | 'mode'>`\n        ",control:"object"}},tags:["autodocs"]},o={args:{placeholder:"Pick a date"}},s={args:{placeholder:"Pick a date",mode:"multiple"}},n={args:{disabled:!0,placeholder:"Unavailable"}},d={render:()=>{const[t,r]=m.useState();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(c,{value:t,onValueChange:r,placeholder:"Select a date"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Selected date: ",t?.toString()??"None"]})]})}},l={render:()=>{const[t,r]=m.useState([]);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(c,{mode:"multiple",value:t,onValueChange:a=>r(a??[]),placeholder:"Select multiple dates"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Selected dates:"," ",t.length>0?t.map(a=>a.toLocaleDateString()).join(", "):"None"]})]})}},i={parameters:{docs:{description:{story:`
The \`name\` prop is used to generate a hidden input field with the selected date value.
This is useful when the date picker is used in a form.
        `}}},render:()=>{const[t,r]=m.useState();return e.jsx("div",{className:"w-[350px] space-y-4 rounded-lg border p-4",children:e.jsxs("form",{onSubmit:a=>{a.preventDefault(),alert(JSON.stringify(new FormData(a.target).get("event-date")))},children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Event Details"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Select a date for your event"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"event-date",className:"text-sm font-medium",children:"Event Date"}),e.jsx(c,{name:"event-date",value:t,onValueChange:r,placeholder:"Select event date"})]}),e.jsx("button",{type:"submit",className:"mt-4 w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90",children:"Submit"})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Pick a date'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Pick a date',
    mode: 'multiple'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Unavailable'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date>();
    return <div className="flex flex-col gap-4">
        <DatePicker value={date} onValueChange={setDate} placeholder="Select a date" />
        <div className="text-sm text-muted-foreground">
          Selected date: {date?.toString() ?? 'None'}
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dates, setDates] = useState<Date[]>([]);
    return <div className="flex flex-col gap-4">
        <DatePicker mode="multiple" value={dates} onValueChange={newDates => setDates(newDates ?? [])} placeholder="Select multiple dates" />
        <div className="text-sm text-muted-foreground">
          Selected dates:{' '}
          {dates.length > 0 ? dates.map(date => date.toLocaleDateString()).join(', ') : 'None'}
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
The \\\`name\\\` prop is used to generate a hidden input field with the selected date value.
This is useful when the date picker is used in a form.
        \`
      }
    }
  },
  render: () => {
    const [eventDate, setEventDate] = useState<Date>();
    return <div className="w-[350px] space-y-4 rounded-lg border p-4">
        <form onSubmit={e => {
        e.preventDefault();
        alert(JSON.stringify(new FormData(e.target as HTMLFormElement).get('event-date')));
      }}>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Event Details</h3>
            <p className="text-sm text-muted-foreground">Select a date for your event</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="event-date" className="text-sm font-medium">
              Event Date
            </label>
            <DatePicker name="event-date" value={eventDate} onValueChange={setEventDate} placeholder="Select event date" />
          </div>
          <button type="submit" className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
            Submit
          </button>
        </form>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Y=["Default","DefaultMultiple","Disabled","Controlled","ControlledMultiple","InForm"];export{d as Controlled,l as ControlledMultiple,o as Default,s as DefaultMultiple,n as Disabled,i as InForm,Y as __namedExportsOrder,X as default};
