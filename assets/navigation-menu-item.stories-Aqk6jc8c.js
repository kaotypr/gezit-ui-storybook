import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as o,a as r,b as s,e as a,d as m,N as u}from"./navigation-menu-TvYqKVnX.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-raY0i5zZ.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-Pxmga4VG.js";import"./index-RJnmdD4_.js";import"./index-BfBstFV9.js";import"./index-DLD62pO3.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";const A={title:"UI/NavigationMenu/NavigationMenuItem",component:o,parameters:{layout:"centered",docs:{description:{component:"Individual item within the navigation menu. Must be used within a NavigationMenuList component."}}},argTypes:{value:{description:"A unique value for the item",control:"text"},asChild:{description:"Change the rendered element type.",control:"boolean"},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},i=()=>e.jsx(r,{children:e.jsx(s,{children:e.jsx(o,{children:e.jsx(a,{children:"Simple Item"})})})});i.parameters={docs:{description:{story:"Basic usage of the NavigationMenuItem component with a simple link."}}};const n=()=>e.jsx(r,{children:e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(m,{children:"Dropdown Item"}),e.jsxs(u,{children:[e.jsx(a,{children:"Submenu Item 1"}),e.jsx(a,{children:"Submenu Item 2"})]})]})})});n.parameters={docs:{description:{story:"NavigationMenuItem with a trigger that opens a submenu."}}};const t=()=>e.jsx(r,{children:e.jsx(s,{children:e.jsx(o,{className:"bg-muted rounded-lg",children:e.jsx(a,{className:"text-primary px-4 py-2",children:"Custom Styled Item"})})})});t.parameters={docs:{description:{story:"NavigationMenuItem with custom styling using Tailwind CSS classes."}}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithTrigger"};t.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink>Simple Item</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Dropdown Item</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Submenu Item 1</NavigationMenuLink>
          <NavigationMenuLink>Submenu Item 2</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem className="bg-muted rounded-lg">
        <NavigationMenuLink className="text-primary px-4 py-2">
          Custom Styled Item
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,...t.parameters?.docs?.source}}};const E=["Default","WithTrigger","CustomStyling"];export{t as CustomStyling,i as Default,n as WithTrigger,E as __namedExportsOrder,A as default};
