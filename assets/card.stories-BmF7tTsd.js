import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{B as e}from"./button-mvJUpYu0.js";import{a as n,b as t,c as a,e as o,d as s,f as m,C as x}from"./card-DNVUWZmV.js";import"./index-tw20AQU7.js";import"./index-CP2yOfOm.js";import"./index-C6iJU1zt.js";import"./cn-BEHD0UYf.js";import"./index-DvcKK4zF.js";const b={title:"UI/Card",component:n,parameters:{layout:"centered",docs:{description:{component:`
A card component that displays content and actions about a single topic.

### Component Parts
- [CardHeader](?path=/story/ui-card-cardheader--default): Container for the card's header content.
- [CardTitle](?path=/story/ui-card-cardtitle--default): The card's title.
- [CardDescription](?path=/story/ui-card-carddescription--default): A description for the card.
- [CardContent](?path=/story/ui-card-cardcontent--default): The main content area of the card.
- [CardFooter](?path=/story/ui-card-cardfooter--default): Container for the card's footer content.
- [CardAction](?path=/story/ui-card-cardaction--default): Container for action buttons in the header.
        `}}},tags:["autodocs"],argTypes:{className:{description:"Additional CSS classes to apply",control:"text"}}},d=()=>r.jsxs(n,{className:"w-[350px]",children:[r.jsxs(t,{children:[r.jsx(a,{children:"Card Title"}),r.jsx(o,{children:"Card Description"})]}),r.jsx(s,{children:r.jsx("p",{children:"Card Content"})}),r.jsx(m,{children:r.jsx(e,{children:"Action"})})]}),i=()=>r.jsxs(n,{className:"w-[350px]",children:[r.jsxs(t,{children:[r.jsx(a,{children:"Card with Action"}),r.jsx(o,{children:"This card has an action button in the header"}),r.jsx(x,{children:r.jsx(e,{variant:"outline",children:"Action"})})]}),r.jsx(s,{children:r.jsx("p",{children:"Card Content"})})]}),c=()=>r.jsxs(n,{className:"w-[350px] border",children:[r.jsxs(t,{className:"border-b",children:[r.jsx(a,{children:"Bordered Card"}),r.jsx(o,{children:"This card has borders"})]}),r.jsx(s,{children:r.jsx("p",{children:"Card Content"})}),r.jsx(m,{className:"border-t",children:r.jsx(e,{children:"Action"})})]}),l=()=>r.jsxs(n,{className:"w-[350px] bg-primary text-primary-foreground",children:[r.jsxs(t,{children:[r.jsx(a,{children:"Custom Styled Card"}),r.jsx(o,{children:"This card has custom styling"})]}),r.jsx(s,{children:r.jsx("p",{children:"Card Content"})}),r.jsx(m,{children:r.jsx(e,{variant:"outline",children:"Action"})})]}),C=()=>r.jsx(n,{className:"w-[350px]",children:r.jsxs(t,{children:[r.jsx(a,{children:"Header Only Card"}),r.jsx(o,{children:"This card only has a header section"})]})}),p=()=>r.jsx(n,{className:"w-[350px]",children:r.jsx(s,{children:r.jsx("p",{children:"This card only has content, no header or footer"})})}),h=()=>r.jsx(n,{className:"w-[350px]",children:r.jsx(m,{children:r.jsx(e,{children:"Action"})})}),u=()=>r.jsxs(n,{className:"w-[350px]",children:[r.jsxs(t,{children:[r.jsx(a,{children:"Multiple Actions"}),r.jsx(o,{children:"This card has multiple action buttons"}),r.jsxs(x,{children:[r.jsx(e,{variant:"outline",size:"sm",children:"Edit"}),r.jsx(e,{variant:"outline",size:"sm",children:"Share"})]})]}),r.jsx(s,{children:r.jsx("p",{children:"Card Content"})}),r.jsxs(m,{className:"flex justify-between",children:[r.jsx(e,{variant:"ghost",children:"Cancel"}),r.jsx(e,{children:"Submit"})]})]});d.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"WithAction"};c.__docgenInfo={description:"",methods:[],displayName:"Bordered"};l.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};C.__docgenInfo={description:"",methods:[],displayName:"HeaderOnly"};p.__docgenInfo={description:"",methods:[],displayName:"ContentOnly"};h.__docgenInfo={description:"",methods:[],displayName:"FooterOnly"};u.__docgenInfo={description:"",methods:[],displayName:"WithMultipleActions"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button in the header</CardDescription>
        <CardAction>
          <Button variant="outline">Action</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px] border">
      <CardHeader className="border-b">
        <CardTitle>Bordered Card</CardTitle>
        <CardDescription>This card has borders</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="border-t">
        <Button>Action</Button>
      </CardFooter>
    </Card>;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px] bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
        <CardDescription>This card has custom styling</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Action</Button>
      </CardFooter>
    </Card>;
}`,...l.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Header Only Card</CardTitle>
        <CardDescription>This card only has a header section</CardDescription>
      </CardHeader>
    </Card>;
}`,...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px]">
      <CardContent>
        <p>This card only has content, no header or footer</p>
      </CardContent>
    </Card>;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px]">
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>;
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Multiple Actions</CardTitle>
        <CardDescription>This card has multiple action buttons</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="outline" size="sm">
            Share
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>;
}`,...u.parameters?.docs?.source}}};const w=["Default","WithAction","Bordered","CustomStyling","HeaderOnly","ContentOnly","FooterOnly","WithMultipleActions"];export{c as Bordered,p as ContentOnly,l as CustomStyling,d as Default,h as FooterOnly,C as HeaderOnly,i as WithAction,u as WithMultipleActions,w as __namedExportsOrder,b as default};
