import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BgCQ941z.js";import{B as u}from"./button-B_EVNb5l.js";import{f as s,a as m,b as l,c,g as r}from"./dropdown-menu-CjJHyko4.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-B7zbOe2i.js";import"./index-DLD62pO3.js";import"./index-Pxmga4VG.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-D4IUklsN.js";import"./index-DvLYkR1_.js";import"./index-BfBstFV9.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-CQ43I_sF.js";import"./chevron-right-BtqEn5DN.js";import"./createLucideIcon-BROHhCyT.js";import"./circle-C1EB2cBL.js";import"./check-DLjw-kwL.js";const J={title:"UI/DropdownMenu/DropdownMenuRadioGroup",component:s,parameters:{layout:"centered",docs:{description:{component:"A group of radio items where only one can be selected. Must be used within a DropdownMenu component."}}},argTypes:{value:{control:"text",description:"The controlled value of the selected radio item"}},tags:["autodocs"]},e=n=>{const[i,a]=p.useState("bottom");return o.jsxs(m,{children:[o.jsx(l,{asChild:!0,children:o.jsx(u,{variant:"outline",children:"Open Menu"})}),o.jsx(c,{children:o.jsxs(s,{...n,value:i,onValueChange:a,children:[o.jsx(r,{value:"top",children:"Top"}),o.jsx(r,{value:"bottom",children:"Bottom"}),o.jsx(r,{value:"right",children:"Right"})]})})]})};e.parameters={docs:{description:{story:"A radio group with position options where only one can be selected."}}};const t=n=>{const[i,a]=p.useState("light");return o.jsxs(m,{children:[o.jsx(l,{asChild:!0,children:o.jsx(u,{variant:"outline",children:"Select Theme"})}),o.jsx(c,{children:o.jsxs(s,{...n,value:i,onValueChange:d=>{a(d),n.onValueChange?.(d)},children:[o.jsx(r,{value:"light",children:"Light"}),o.jsx(r,{value:"dark",children:"Dark"}),o.jsx(r,{value:"system",children:"System"})]})})]})};t.parameters={docs:{description:{story:"A controlled radio group with theme options and a custom change handler."}}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"Controlled"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [position, setPosition] = useState('bottom');
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup {...args} value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [theme, setTheme] = useState('light');
  return <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup {...args} value={theme} onValueChange={value => {
        setTheme(value);
        args.onValueChange?.(value);
      }}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>;
}`,...t.parameters?.docs?.source}}};const K=["Default","Controlled"];export{t as Controlled,e as Default,K as __namedExportsOrder,J as default};
