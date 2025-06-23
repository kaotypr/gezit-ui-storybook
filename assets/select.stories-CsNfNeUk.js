import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BgCQ941z.js";import{a as n,b as i,c as p,S as u,e as d,f as m,d as c,i as x}from"./select-BWl0jssQ.js";import"./index-CPpQNmgs.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-DLD62pO3.js";import"./index-B5LVTqq5.js";import"./index-Be4k453d.js";import"./index-BDff9h2_.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-BInWWs9D.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";import"./chevron-up-CCoYB0VF.js";import"./check-DLjw-kwL.js";const M={title:"UI/Select",component:n,parameters:{layout:"centered",docs:{description:{component:`
A fully accessible select dropdown component built with [Radix UI Select](https://www.radix-ui.com/primitives/docs/components/select).

### Component Parts
- [SelectTrigger](?path=/story/ui-select-selecttrigger--default): The button that opens the dropdown.
- [SelectContent](?path=/story/ui-select-selectcontent--default): The dropdown content.
- [SelectItem](?path=/story/ui-select-selectitem--default): An option in the dropdown.
- [SelectGroup](?path=/story/ui-select-selectgroup--default): Groups related items.
- [SelectLabel](?path=/story/ui-select-selectlabel--default): A label for a group of items.
- [SelectSeparator](?path=/story/ui-select-selectseparator--default): A separator between items.
- [SelectValue](?path=/story/ui-select-selectvalue--default): Displays the selected value in the trigger.
        `}}},argTypes:{defaultValue:{description:"The value of the item to select by default (uncontrolled)",control:"text"},value:{description:"The controlled value of the select",control:"text"},onValueChange:{description:"Callback fired when the selected value changes",action:"onValueChange"},disabled:{description:"Whether the select is disabled",control:"boolean"},name:{description:"Name of the select input (for forms)",control:"text"},required:{description:"Whether the select is required",control:"boolean"},dir:{description:"Text direction",control:"select",options:["ltr","rtl"]},open:{description:"Whether the select is open (controlled)",control:"boolean"},defaultOpen:{description:"Whether the select is open by default (uncontrolled)",control:"boolean"}},tags:["autodocs"]},h=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Grapes",value:"grapes"},{label:"Pineapple",value:"pineapple"}],r=t=>e.jsxs(n,{defaultValue:"apple",...t,children:[e.jsx(i,{className:"w-[180px]",children:e.jsx(p,{placeholder:"Select a fruit"})}),e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(m,{children:"Fruits"}),h.map(l=>e.jsx(c,{value:l.value,children:l.label},l.value))]})})]});r.parameters={docs:{description:{story:"Basic usage of the Select component with grouped options."}}};const o=t=>e.jsxs(n,{defaultValue:"apple",...t,children:[e.jsx(i,{className:"w-[180px]",children:e.jsx(p,{placeholder:"Select a fruit"})}),e.jsxs(u,{children:[e.jsx(c,{value:"apple",children:"Apple"}),e.jsx(x,{}),e.jsx(c,{value:"banana",children:"Banana"})]})]});o.parameters={docs:{description:{story:"Select with a separator between items."}}};const s=t=>{const[l,S]=g.useState("apple");return e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsxs(n,{value:l,...t,onValueChange:a=>{t.onValueChange?.(a),S(a)},children:[e.jsx(i,{className:"w-[180px]",children:e.jsx(p,{placeholder:"Select a fruit"})}),e.jsx(u,{children:e.jsxs(d,{children:[e.jsx(m,{children:"Fruits"}),h.map(a=>e.jsx(c,{value:a.value,children:a.label},a.value))]})})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["Selected: ",l]})]})};s.parameters={docs:{description:{story:"Controlled usage of the Select component, where the value and onValueChange are managed by React state."}}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithSeparator"};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple" {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        {options.map(option => <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>)}
      </SelectGroup>
    </SelectContent>
  </Select>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <Select defaultValue="apple" {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectSeparator />
      <SelectItem value="banana">Banana</SelectItem>
    </SelectContent>
  </Select>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('apple');
  return <div className="flex flex-col items-start gap-2">
      <Select value={value} {...args} onValueChange={v => {
      args.onValueChange?.(v);
      setValue(v);
    }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {options.map(option => <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="text-xs text-muted-foreground">Selected: {value}</div>
    </div>;
}`,...s.parameters?.docs?.source}}};const Q=["Default","WithSeparator","Controlled"];export{s as Controlled,r as Default,o as WithSeparator,Q as __namedExportsOrder,M as default};
