import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s,e as _}from"./index-BgCQ941z.js";import{d as z}from"./index-DNhxGNc4.js";import{B as $}from"./badge-CptoyvMJ.js";import{B as U}from"./button-B_EVNb5l.js";import{a as G,b as J,c as K,d as Q,e as X,f as Y}from"./command-Q4idtgBF.js";import{a as Z,b as ee,D as te}from"./drawer-D83A9VpW.js";import{P as se,a as ae,b as oe}from"./popover-D_O2QJOe.js";import{S as ne}from"./scroll-area-DwBJEaHj.js";import{u as re}from"./use-is-mobile-C_WhzTHg.js";import{c as C}from"./cn-BEHD0UYf.js";import{X as ie}from"./x-B9jT4yqJ.js";import{C as le}from"./chevrons-up-down-D9PYFOK3.js";import{C as ce}from"./check-DLjw-kwL.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./createLucideIcon-BROHhCyT.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";import"./index-Pxmga4VG.js";import"./index-BdQq_4o_.js";function ue({data:i,values:t,onValuesChange:n,onSearch:a,onScrolled:o,searchPlaceholder:u,emptyMessage:p,onOpenChange:d,maxItems:l,debounceTime:c=300}){const g=s.useCallback(r=>{if(!o)return;const b=r.target;Math.abs(b.scrollHeight-b.scrollTop-b.clientHeight)<1&&o()},[o]),f=s.useMemo(()=>a?z(r=>{a(r)},c):void 0,[a,c]);s.useEffect(()=>()=>{f?.cancel()},[f]);const w=s.useCallback(r=>{f&&f(r)},[f]),T=s.useCallback(r=>{if(!n)return;const b=t.includes(r);let x;if(b)x=t.filter(W=>W!==r);else{if(l&&t.length>=l)return;x=[...t,r]}n(x),d&&l&&x.length>=l&&d(!1)},[n,t,l,d]);return e.jsxs(G,{shouldFilter:!1,children:[e.jsx(J,{placeholder:u,onValueChange:w}),e.jsxs(K,{onScroll:g,className:C("scrollbar-thin scrollbar-thumb-border scrollbar-track-background","overflow-y-auto"),children:[e.jsx(Q,{children:p}),e.jsx(X,{children:i.map(r=>e.jsxs(Y,{value:r.value,onSelect:T,disabled:l?t.length>=l&&!t.includes(r.value):!1,children:[e.jsx(ce,{className:C("w-4",t.includes(r.value)?"opacity-100":"opacity-0")}),r.label]},r.value))})]})]})}const h=s.forwardRef(({data:i,onSearch:t,onScrolled:n,open:a,onOpenChange:o,className:u,values:p,onValuesChange:d,maxItems:l,wrap:c=!1,placeholder:g="Select options...",searchPlaceholder:f="Search...",emptyMessage:w="No results found.",disabled:T=!1,contentMaxHeight:r=200,contentMaxHeightMobile:b=350,"aria-invalid":x,enableResponsive:W=!1,debounceTime:D=300,...E},L)=>{const S=s.useMemo(()=>p.map(m=>i.find(y=>y.value===m)).filter(m=>m!==void 0),[i,p]),F=re(),B=W&&F,H=s.useCallback(m=>{d(p.filter(y=>y!==m))},[p,d]),q=e.jsx(ue,{data:i,values:p,onValuesChange:d,onSearch:t,onScrolled:n,searchPlaceholder:f,emptyMessage:w,onOpenChange:o,maxItems:l,debounceTime:D}),A=e.jsx(U,{ref:L,variant:"outline","aria-expanded":a,"aria-invalid":x,disabled:T,className:C(S.length>0?"py-1.5":"py-2","w-full border-input transition-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-transparent hover:bg-transparent aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 relative px-3 h-auto min-h-10",u),...E,children:e.jsxs("div",{className:C("flex items-center justify-between w-full gap-2",c&&"max-w-full"),children:[e.jsx("div",{className:C("flex items-center gap-1.5",c&&S.length>0&&"flex-1 max-w-[calc(100%-1.5rem)] overflow-hidden flex-wrap gap-1.5",!c&&"overflow-x-auto no-scrollbar"),children:S.length>0?S.map(m=>e.jsxs($,{variant:"outline",color:"secondary",className:C("max-w-full bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors",!c&&"shrink-0",c&&"my-0.5"),onClick:y=>{y.stopPropagation(),H(m.value)},children:[e.jsx("span",{title:m.label,className:"truncate",children:m.label}),e.jsx(ie,{className:"ml-1 h-3 w-3 text-muted-foreground hover:text-destructive"})]},m.value)):e.jsx("span",{className:"text-muted-foreground text-sm",children:g})}),e.jsx(le,{className:"h-4 w-4 shrink-0 opacity-50 text-muted-foreground mt-1"})]})});return B?e.jsxs(Z,{open:a,onOpenChange:o,children:[e.jsx(ee,{asChild:!0,children:A}),e.jsx(te,{children:e.jsx("div",{style:{maxHeight:typeof b=="number"?`${b}px`:b},children:e.jsx(ne,{className:"p-4",children:q})})})]}):e.jsxs(se,{open:a,onOpenChange:o,children:[e.jsx(ae,{asChild:!0,children:A}),e.jsx(oe,{className:"w-full p-0",style:{maxHeight:r},align:"start",children:q})]})});h.__docgenInfo={description:"",methods:[],displayName:"MultiCombobox",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"MultiComboboxItem"}],raw:"MultiComboboxItem[]"},description:"The data to display in the multi-combobox"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Function called when the search input value changes"},debounceTime:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds for the search function
@default 300`,defaultValue:{value:"300",computed:!1}},onScrolled:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the options list is scrolled to the bottom"},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the multi-combobox"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Function called when the open state changes"},values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The selected values"},onValuesChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Function called when the selected values change"},maxItems:{required:!1,tsType:{name:"number"},description:`Maximum number of items that can be selected
@default undefined`},wrap:{required:!1,tsType:{name:"boolean"},description:`Whether to wrap values to new lines when they overflow
If false, values will scroll horizontally
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the trigger button",defaultValue:{value:"'Select options...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the search input",defaultValue:{value:"'Search...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Message to display when no results are found",defaultValue:{value:"'No results found.'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the multi-combobox is disabled",defaultValue:{value:"false",computed:!1}},contentMaxHeight:{required:!1,tsType:{name:"number"},description:`Maximum height of the scrollable content area in pixels for desktop view
@default 200`,defaultValue:{value:"200",computed:!1}},contentMaxHeightMobile:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum height of the scrollable content area for mobile view
Can be a number (pixels) or a string (e.g., '50vh' for 50% of viewport height)
@default 350`,defaultValue:{value:"350",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"Whether the multi-combobox has an invalid state"},enableResponsive:{required:!1,tsType:{name:"boolean"},description:`Whether to enable responsive mode (Drawer on mobile, Popover on desktop)
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Ke={title:"Blocks/MultiCombobox",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A searchable multi-select component with support for filtering, pagination, keyboard navigation, and multiple value selection.

This component is built using a composition of [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover) and [cmdk](https://cmdk.paco.me/) for the command menu functionality.

### Features
- Multiple value selection with optional maximum limit
- Controlled search input with \`onSearch\` callback
- Infinite scrolling support via \`onScrolled\` callback
- Full keyboard navigation
- Accessible following ARIA practices
- Customizable styling and placeholder text
- Responsive mode with Drawer on mobile (when \`enableResponsive\` is true)
- Selected items displayed as removable badges`}}},argTypes:{data:{description:"Array of items to display in the multi-combobox.",control:"object"},onSearch:{description:"Callback fired when the search input value changes.",action:"onSearch"},onScrolled:{description:"Callback fired when the list is scrolled to the bottom.",action:"onScrolled"},open:{description:"Controls the open state of the multi-combobox.",control:"boolean"},onOpenChange:{description:"Callback fired when the open state changes.",action:"onOpenChange"},values:{description:"Array of selected values.",control:"object"},onValuesChange:{description:"Callback fired when the selected values change.",action:"onValuesChange"},maxItems:{description:"Maximum number of items that can be selected.",control:"number"},placeholder:{description:"Placeholder text for the trigger button.",control:"text"},searchPlaceholder:{description:"Placeholder text for the search input.",control:"text"},emptyMessage:{description:"Message to display when no results are found.",control:"text"},disabled:{description:"Whether the multi-combobox is disabled.",control:"boolean"},contentMaxHeight:{description:"Maximum height of the scrollable content area in pixels.",control:"number"},"aria-invalid":{description:"Whether the multi-combobox has an invalid state.",control:"boolean"},enableResponsive:{description:"Whether to enable responsive mode (Drawer on mobile, Popover on desktop).",control:"boolean"}}},v=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],P=i=>{const t=["JavaScript","TypeScript","React","Vue","Angular","Svelte","Node.js","Express","Next.js","Nuxt","Remix","Astro","Solid","Qwik","Gatsby"];return Array.from({length:i},(n,a)=>({value:`framework-${a+1}`,label:`Framework ${a+1} - ${t[a%t.length]} Framework with Extended Description`}))},j={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState([]);return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:v,open:t,onOpenChange:n,values:a,onValuesChange:o})})},parameters:{docs:{description:{story:"Basic usage of the MultiCombobox component with a list of frameworks."}}}},k={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState([]);return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:v,open:t,onOpenChange:n,values:a,onValuesChange:o,maxItems:3})})},parameters:{docs:{description:{story:"MultiCombobox with a maximum limit of 3 selectable items."}}}},M={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState([]);return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:v,open:t,onOpenChange:n,values:a,onValuesChange:o,"aria-invalid":!0})})},parameters:{docs:{description:{story:"Example of MultiCombobox in an invalid state with red border styling."}}}},V={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState([]),[u,p]=s.useState(v),d=l=>{p(v.filter(c=>c.label.toLowerCase().includes(l.toLowerCase())))};return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:u,open:t,onOpenChange:n,values:a,onValuesChange:o,onSearch:d})})},parameters:{docs:{description:{story:"Example of MultiCombobox with search functionality."}}}},O={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState([]),[u,p]=s.useState(()=>P(50).slice(0,10)),[d,l]=s.useState(!0),[c,g]=s.useState(!1),f=_.useCallback(()=>{!d||c||(g(!0),setTimeout(()=>{const w=P(50).slice(u.length,u.length+10);p([...u,...w]),l(u.length+w.length<50),g(!1)},500))},[d,c,u]);return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:u,open:t,onOpenChange:n,values:a,onValuesChange:o,onScrolled:f,wrap:!0})})},parameters:{docs:{description:{story:"Example of MultiCombobox with infinite scrolling functionality."}}}},N={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState([]);return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:v,open:t,onOpenChange:n,values:a,onValuesChange:o,enableResponsive:!0})})},parameters:{docs:{description:{story:"Example of MultiCombobox with responsive mode enabled (Drawer on mobile, Popover on desktop)."}}}},R={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState(["next.js","sveltekit","nuxt.js","remix","astro"]);return e.jsx("div",{className:"w-[300px]",children:e.jsx(h,{data:v,open:t,onOpenChange:n,values:a,onValuesChange:o,wrap:!0})})},parameters:{docs:{description:{story:"MultiCombobox with wrapped values that break into new lines when they overflow, shown in a wider container."}}}},I={render:function(){const[t,n]=s.useState(!1),[a,o]=s.useState(["next.js","sveltekit","nuxt.js","remix","astro"]);return e.jsx("div",{className:"w-[200px]",children:e.jsx(h,{data:v,open:t,onOpenChange:n,values:a,onValuesChange:o,wrap:!1})})},parameters:{docs:{description:{story:"MultiCombobox with horizontally scrollable values (default behavior)."}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    return <div className="w-[200px]">
        <MultiCombobox data={frameworks} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of the MultiCombobox component with a list of frameworks.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    return <div className="w-[200px]">
        <MultiCombobox data={frameworks} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} maxItems={3} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'MultiCombobox with a maximum limit of 3 selectable items.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    return <div className="w-[200px]">
        <MultiCombobox data={frameworks} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} aria-invalid={true} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of MultiCombobox in an invalid state with red border styling.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    const [items, setItems] = useState(frameworks);
    const handleSearch = (search: string) => {
      setItems(frameworks.filter(framework => framework.label.toLowerCase().includes(search.toLowerCase())));
    };
    return <div className="w-[200px]">
        <MultiCombobox data={items} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} onSearch={handleSearch} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of MultiCombobox with search functionality.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    const [items, setItems] = useState(() => generateFrameworks(50).slice(0, 10));
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const handleScrolled = React.useCallback(() => {
      if (!hasMore || isLoading) {
        return;
      }
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const nextItems = generateFrameworks(50).slice(items.length, items.length + 10);
        setItems([...items, ...nextItems]);
        setHasMore(items.length + nextItems.length < 50);
        setIsLoading(false);
      }, 500);
    }, [hasMore, isLoading, items]);
    return <div className="w-[200px]">
        <MultiCombobox data={items} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} onScrolled={handleScrolled} wrap />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of MultiCombobox with infinite scrolling functionality.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>([]);
    return <div className="w-[200px]">
        <MultiCombobox data={frameworks} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} enableResponsive={true} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of MultiCombobox with responsive mode enabled (Drawer on mobile, Popover on desktop).'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>(['next.js', 'sveltekit', 'nuxt.js', 'remix', 'astro']);
    return <div className="w-[300px]">
        <MultiCombobox data={frameworks} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} wrap={true} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'MultiCombobox with wrapped values that break into new lines when they overflow, shown in a wider container.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState<string[]>(['next.js', 'sveltekit', 'nuxt.js', 'remix', 'astro']);
    return <div className="w-[200px]">
        <MultiCombobox data={frameworks} open={open} onOpenChange={setOpen} values={values} onValuesChange={setValues} wrap={false} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'MultiCombobox with horizontally scrollable values (default behavior).'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};const Qe=["Default","WithMaxItems","Invalid","WithSearch","WithInfiniteScroll","Responsive","WithWrappedValues","WithScrollableValues"];export{j as Default,M as Invalid,N as Responsive,O as WithInfiniteScroll,k as WithMaxItems,I as WithScrollableValues,V as WithSearch,R as WithWrappedValues,Qe as __namedExportsOrder,Ke as default};
