import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-BgCQ941z.js";import{B as c}from"./button-B_EVNb5l.js";import{D as a,a as i,b as p,c as u}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const K={title:"UI/DropdownMenu/DropdownMenuCheckboxItem",component:a,parameters:{layout:"centered",docs:{description:{component:"A menu item that can be checked. Must be used within a DropdownMenu component."}}},argTypes:{checked:{control:"boolean",description:"The controlled checked state of the item",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the item is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},o=n=>{const[s,d]=h.useState(!1);return e.jsxs(i,{children:[e.jsx(p,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(a,{...n,checked:s,onCheckedChange:d,children:"Show Status Bar"})})]})};o.parameters={docs:{description:{story:"A basic checkbox menu item that can be toggled."}}};const t=n=>e.jsxs(i,{children:[e.jsx(p,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(a,{...n,disabled:!0,checked:!0,children:"Always Enabled"})})]});t.parameters={docs:{description:{story:"A disabled checkbox menu item that cannot be toggled."}}};const r=n=>{const[s,d]=h.useState(!0);return e.jsxs(i,{children:[e.jsx(p,{asChild:!0,children:e.jsx(c,{variant:"outline",children:"Open Menu"})}),e.jsx(u,{children:e.jsx(a,{...n,checked:s,onCheckedChange:m=>{d(m),n.onCheckedChange?.(m)},children:"Auto Save"})})]})};r.parameters={docs:{description:{story:"A controlled checkbox menu item with a custom change handler."}}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem {...args} checked={checked} onCheckedChange={setChecked}>
          Show Status Bar
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuCheckboxItem {...args} disabled checked>
        Always Enabled
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(true);
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem {...args} checked={checked} onCheckedChange={value => {
        setChecked(value);
        args.onCheckedChange?.(value);
      }}>
          Auto Save
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...r.parameters?.docs?.source}}};const L=["Default","Disabled","Controlled"];export{r as Controlled,o as Default,t as Disabled,L as __namedExportsOrder,K as default};
