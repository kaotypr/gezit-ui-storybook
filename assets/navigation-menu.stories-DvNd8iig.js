import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{a as u,b as c,c as e,d as r,N as s,e as i}from"./navigation-menu-TvYqKVnX.js";import"./index-BgCQ941z.js";import"./index-CPpQNmgs.js";import"./index-B5LVTqq5.js";import"./index-Dc_FVRD7.js";import"./index-raY0i5zZ.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-BInWWs9D.js";import"./index-CyHmRedI.js";import"./index-Pxmga4VG.js";import"./index-RJnmdD4_.js";import"./index-BfBstFV9.js";import"./index-DLD62pO3.js";import"./index-BdN0SzKn.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-BMvmY0JD.js";import"./index-Bxcmxnpx.js";import"./index-DvcKK4zF.js";import"./cn-BEHD0UYf.js";import"./chevron-down-DX_dkZyb.js";import"./createLucideIcon-BROHhCyT.js";const S={title:"UI/NavigationMenu",component:u,parameters:{layout:"centered",docs:{description:{component:`
A collection of navigation components that provide a flexible and accessible menu system.

This component is built on top of [Radix UI Navigation Menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu).

### Component Parts
- [NavigationMenuList](?path=/story/ui-navigationmenu-navigationmenulist--default): Container for the navigation menu items.
- [NavigationMenuItem](?path=/story/ui-navigationmenu-navigationmenuitem--default): Individual item within the navigation menu.
- [NavigationMenuTrigger](?path=/story/ui-navigationmenu-navigationmenutrigger--default): Button that triggers a submenu.
- [NavigationMenuContent](?path=/story/ui-navigationmenu-navigationmenucontent--default): Content displayed when a trigger is activated.
- [NavigationMenuLink](?path=/story/ui-navigationmenu-navigationmenulink--default): Navigational link element.
- [NavigationMenuIndicator](?path=/story/ui-navigationmenu-navigationmenuindicator--default): Visual indicator for the active menu item.
- [NavigationMenuViewport](?path=/story/ui-navigationmenu-navigationmenuviewport--default): Viewport for displaying submenu content.
        `}}},argTypes:{value:{description:"The controlled value of the menu item to activate",control:"text"},defaultValue:{description:"The value of the menu item to activate when initially rendered",control:"text"},onValueChange:{description:"Event handler called when the value changes",action:"onValueChange"},delayDuration:{description:"The duration from when the mouse enters a trigger until the content opens",control:"number"},skipDelayDuration:{description:"How long the content should remain open after the mouse leaves",control:"number"},viewport:{description:"Whether to show the viewport",control:"boolean"},dir:{description:"The reading direction of the menu",control:"select",options:["ltr","rtl"]},orientation:{description:"The orientation of the menu",control:"select",options:["horizontal","vertical"]}},tags:["autodocs"]},t=()=>n.jsx(u,{children:n.jsxs(c,{children:[n.jsxs(e,{children:[n.jsx(r,{children:"Getting Started"}),n.jsxs(s,{children:[n.jsx(i,{children:"Documentation"}),n.jsx(i,{children:"Installation"})]})]}),n.jsxs(e,{children:[n.jsx(r,{children:"Components"}),n.jsxs(s,{children:[n.jsx(i,{children:"Button"}),n.jsx(i,{children:"Dialog"}),n.jsx(i,{children:"Menu"})]})]}),n.jsx(e,{children:n.jsx(i,{children:"About"})})]})});t.parameters={docs:{description:{story:"Basic usage of the NavigationMenu component."}}};const a=()=>n.jsx(u,{children:n.jsxs(c,{children:[n.jsxs(e,{children:[n.jsx(r,{children:"Resources"}),n.jsx(s,{className:"grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]",children:n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"space-y-2",children:[n.jsx("h4",{className:"font-medium leading-none",children:"Documentation"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Start integrating products and tools"})]}),n.jsxs("div",{className:"space-y-2",children:[n.jsx("h4",{className:"font-medium leading-none",children:"Components"}),n.jsx("p",{className:"text-sm text-muted-foreground",children:"Browse our collection of UI components"})]})]})})]}),n.jsx(e,{children:n.jsx(i,{className:"font-medium",children:"Pricing"})})]})});a.parameters={docs:{description:{story:"NavigationMenu with rich, custom-styled content."}}};const o=()=>n.jsx(u,{orientation:"vertical",children:n.jsxs(c,{children:[n.jsxs(e,{children:[n.jsx(r,{children:"Products"}),n.jsxs(s,{children:[n.jsx(i,{children:"Product 1"}),n.jsx(i,{children:"Product 2"})]})]}),n.jsx(e,{children:n.jsx(i,{children:"Contact"})})]})});o.parameters={docs:{description:{story:"NavigationMenu with vertical orientation."}}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"WithCustomContent"};o.__docgenInfo={description:"",methods:[],displayName:"Vertical"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Documentation</NavigationMenuLink>
            <NavigationMenuLink>Installation</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Button</NavigationMenuLink>
            <NavigationMenuLink>Dialog</NavigationMenuLink>
            <NavigationMenuLink>Menu</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>About</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Start integrating products and tools
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Components</h4>
                <p className="text-sm text-muted-foreground">
                  Browse our collection of UI components
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="font-medium">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <NavigationMenu orientation="vertical">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Product 1</NavigationMenuLink>
            <NavigationMenuLink>Product 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>;
}`,...o.parameters?.docs?.source}}};const B=["Default","WithCustomContent","Vertical"];export{t as Default,o as Vertical,a as WithCustomContent,B as __namedExportsOrder,S as default};
