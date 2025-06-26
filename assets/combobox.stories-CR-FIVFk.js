import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as e,e as _}from"./index-BgCQ941z.js";import{d as z}from"./index-DNhxGNc4.js";import{B as U}from"./button-B_EVNb5l.js";import{a as G,b as J,c as K,d as X,e as Y,f as Z}from"./command-Q4idtgBF.js";import{a as ee,b as ae,D as te}from"./drawer-D83A9VpW.js";import{P as oe,a as se,b as ne}from"./popover-D_O2QJOe.js";import{u as re}from"./use-is-mobile-C_WhzTHg.js";import{c as D}from"./cn-BEHD0UYf.js";import{C as ie}from"./chevrons-up-down-D9PYFOK3.js";import{C as le}from"./check-DLjw-kwL.js";import"./index-BDff9h2_.js";import"./index-Be4k453d.js";import"./index-DvcKK4zF.js";import"./index-CozPAmCR.js";import"./index-Dc_FVRD7.js";import"./index-B5LVTqq5.js";import"./index-BfBstFV9.js";import"./index-CyHmRedI.js";import"./index-BInWWs9D.js";import"./index-BdN0SzKn.js";import"./index-raY0i5zZ.js";import"./index-CPpQNmgs.js";import"./index-KGCq4IUG.js";import"./index-ZXlQBbzy.js";import"./index-DvLYkR1_.js";import"./index-DYKZN-PH.js";import"./index-RJnmdD4_.js";import"./index-D4IUklsN.js";import"./dialog-F5pVz2Qt.js";import"./x-B9jT4yqJ.js";import"./createLucideIcon-BROHhCyT.js";import"./index-CJl9oC1v.js";import"./index-B9tD0Hfr.js";function ce({data:l,value:o,onValueChange:n,onSearch:t,onScrolled:s,searchPlaceholder:r,emptyMessage:h,onOpenChange:c,debounceTime:d=300}){const u=e.useCallback(i=>{if(!s)return;const C=i.target;Math.abs(C.scrollHeight-C.scrollTop-C.clientHeight)<1&&s()},[s]),p=e.useMemo(()=>t?z(i=>{t(i)},d):void 0,[t,d]);e.useEffect(()=>()=>{p?.cancel()},[p]);const b=e.useCallback(i=>{p&&p(i)},[p]),S=e.useCallback(i=>{n&&n(i===o?"":i),c&&c(!1)},[n,c,o]);return a.jsxs(G,{shouldFilter:!1,children:[a.jsx(J,{placeholder:r,onValueChange:b}),a.jsxs(K,{onScroll:u,className:D("scrollbar-thin scrollbar-thumb-border scrollbar-track-background","overflow-y-auto"),children:[a.jsx(X,{children:h}),a.jsx(Y,{children:l.map(i=>a.jsxs(Z,{value:i.value,onSelect:S,children:[a.jsx(le,{className:D("w-4",o===i.value?"opacity-100":"opacity-0")}),i.label]},i.value))})]})]})}const m=e.forwardRef(({data:l,onSearch:o,onScrolled:n,open:t,onOpenChange:s,className:r,value:h,onValueChange:c,placeholder:d="Select an option...",searchPlaceholder:u="Search...",emptyMessage:p="No results found.",disabled:b=!1,contentMaxHeight:S=200,contentMaxHeightMobile:i=350,"aria-invalid":C,enableResponsive:v=!1,debounceTime:H=300,...W},f)=>{const[k,V]=e.useState(""),x=h??k,y=c??V,w=e.useMemo(()=>x?l.find(Q=>Q.value===x):void 0,[l,x]),$=re(),B=v&&$,q=a.jsxs(U,{ref:f,variant:"outline",role:"combobox","aria-expanded":t,"aria-invalid":C,color:"secondary",className:D("w-full border-input focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-transparent hover:bg-transparent aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 justify-between",r),disabled:b,...W,children:[a.jsx("span",{className:"truncate",children:w?w.label:d}),a.jsx(ie,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),A=a.jsx(ce,{data:l,value:x,onValueChange:y,onSearch:o,onScrolled:n,searchPlaceholder:u,emptyMessage:p,onOpenChange:s,debounceTime:H});return B?a.jsxs(ee,{open:t,onOpenChange:s,children:[a.jsx(ae,{asChild:!0,children:q}),a.jsx(te,{children:a.jsx("div",{className:"mt-4 border-t",children:A})})]}):a.jsxs(oe,{open:t,onOpenChange:s,children:[a.jsx(se,{asChild:!0,children:q}),a.jsx(ne,{className:"w-full p-0",align:"start",children:A})]})});m.displayName="Combobox";m.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxItem"}],raw:"ComboboxItem[]"},description:"The data to display in the combobox"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Function called when the search input value changes"},debounceTime:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds for the search function
@default 300`,defaultValue:{value:"300",computed:!1}},onScrolled:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the options list is scrolled to the bottom"},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the combobox"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Function called when the open state changes"},value:{required:!1,tsType:{name:"string"},description:"The selected value"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Function called when the selected value changes"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the trigger button",defaultValue:{value:"'Select an option...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the search input",defaultValue:{value:"'Search...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Message to display when no results are found",defaultValue:{value:"'No results found.'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the combobox is disabled",defaultValue:{value:"false",computed:!1}},contentMaxHeight:{required:!1,tsType:{name:"number"},description:`Maximum height of the scrollable content area in pixels for desktop view
@default 200`,defaultValue:{value:"200",computed:!1}},contentMaxHeightMobile:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum height of the scrollable content area for mobile view
Can be a number (pixels) or a string (e.g., '50vh' for 50% of viewport height)
@default 350`,defaultValue:{value:"350",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"Whether the combobox has an invalid state"},enableResponsive:{required:!1,tsType:{name:"boolean"},description:`Whether to enable responsive mode (Drawer on mobile, Popover on desktop)
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Qe={title:"Blocks/Combobox",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A searchable select component with support for filtering, pagination, and keyboard navigation.

This component is built using a composition of [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover) and [cmdk](https://cmdk.paco.me/) for the command menu functionality.

### Features
- Controlled search input with \`onSearch\` callback
- Infinite scrolling support via \`onScrolled\` callback
- Full keyboard navigation
- Accessible following ARIA practices
- Customizable styling and placeholder text
- Responsive mode with Drawer on mobile (when \`enableResponsive\` is true)`}}},argTypes:{data:{description:"Array of items to display in the combobox.",control:"object"},onSearch:{description:"Callback fired when the search input value changes.",action:"onSearch"},onScrolled:{description:"Callback fired when the list is scrolled to the bottom.",action:"onScrolled"},open:{description:"Controls the open state of the combobox.",control:"boolean"},onOpenChange:{description:"Callback fired when the open state changes.",action:"onOpenChange"},value:{description:"The selected value.",control:"text"},onValueChange:{description:"Callback fired when the selected value changes.",action:"onValueChange"},placeholder:{description:"Placeholder text for the trigger button.",control:"text"},searchPlaceholder:{description:"Placeholder text for the search input.",control:"text"},emptyMessage:{description:"Message to display when no results are found.",control:"text"},disabled:{description:"Whether the combobox is disabled.",control:"boolean"},contentMaxHeight:{description:"Maximum height of the scrollable content area in pixels.",control:"number"},"aria-invalid":{description:"Whether the combobox has an invalid state.",control:"boolean"},enableResponsive:{description:"Whether to enable responsive mode (Drawer on mobile, Popover on desktop).",control:"boolean"}}},g=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],F=l=>{const o=["JavaScript","TypeScript","React","Vue","Angular","Svelte","Node.js","Express","Next.js","Nuxt","Remix","Astro","Solid","Qwik","Gatsby"];return Array.from({length:l},(n,t)=>({value:`framework-${t+1}`,label:`Framework ${t+1} - ${o[t%o.length]} Framework with Extended Description`}))},I={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState("");return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:g,open:o,onOpenChange:n,value:t,onValueChange:s})})},parameters:{docs:{description:{story:"Basic usage of the Combobox component with a list of frameworks."}}}},j={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState("");return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:g,open:o,onOpenChange:n,value:t,onValueChange:s,"aria-invalid":!0})})},parameters:{docs:{description:{story:"Example of Combobox in an invalid state with red border styling."}}}},O={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState(""),[r,h]=e.useState(g),c=d=>{h(g.filter(u=>u.label.toLowerCase().includes(d.toLowerCase())))};return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:r,open:o,onOpenChange:n,value:t,onValueChange:s,onSearch:c})})},parameters:{docs:{description:{story:"Example of Combobox with search functionality."}}}},M={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState(""),[r,h]=e.useState(()=>F(50).slice(0,10)),[c,d]=e.useState(!0),[u,p]=e.useState(!1),b=_.useCallback(()=>{!c||u||(p(!0),setTimeout(()=>{const S=F(50).slice(r.length,r.length+10);h([...r,...S]),d(r.length+S.length<50),p(!1)},500))},[c,u,r]);return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:r,open:o,onOpenChange:n,value:t,onValueChange:s,onScrolled:b,contentMaxHeight:200,emptyMessage:u?"Loading more items...":"No frameworks found.",enableResponsive:!0})})},parameters:{docs:{description:{story:"Example demonstrating infinite scroll functionality. The list loads 10 items at a time up to 50 items total, with each item having additional text to ensure scrolling is visible."}}}},R={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState("");return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:g,open:o,onOpenChange:n,value:t,onValueChange:s,disabled:!0,contentMaxHeight:200})})},parameters:{docs:{description:{story:"Example of disabled Combobox."}}}},N={args:{data:g,placeholder:"Select a framework...",searchPlaceholder:"Find your framework...",emptyMessage:"No frameworks found :(",value:void 0,onValueChange:void 0},parameters:{docs:{description:{story:"Customizing the placeholder texts of the combobox."}}}},P={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState("");return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:g,open:o,onOpenChange:n,value:t,onValueChange:s,contentMaxHeight:300})})},parameters:{docs:{description:{story:"Example showing the combobox with a custom maxHeight of 300px for the content area."}}}},T={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState("");return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:g,open:o,onOpenChange:n,value:t,onValueChange:s,enableResponsive:!0,placeholder:"Select framework...",searchPlaceholder:"Search framework..."})})},parameters:{docs:{description:{story:"Example of responsive Combobox that shows a Drawer on mobile devices and a Popover on desktop."}},viewport:{defaultViewport:"mobile1"}}},E={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState(""),[r,h]=e.useState(g),c=d=>{h(g.filter(u=>u.label.toLowerCase().includes(d.toLowerCase())))};return a.jsx("div",{className:"w-[200px]",children:a.jsx(m,{data:r,open:o,onOpenChange:n,value:t,onValueChange:s,onSearch:c,enableResponsive:!0,placeholder:"Select framework...",searchPlaceholder:"Search framework..."})})},parameters:{docs:{description:{story:"Example of responsive Combobox with search functionality."}},viewport:{defaultViewport:"mobile1"}}},L={render:function(){const[o,n]=e.useState(!1),[t,s]=e.useState(""),[r,h]=e.useState(""),[c,d]=e.useState(1),[u,p]=e.useState([]),[b,S]=e.useState(!1),[i,C]=e.useState(!0),v=e.useCallback(async(f,k)=>{try{S(!0);const x=await(await fetch(`https://www.swapi.tech/api/people?page=${k}&limit=10${f?`&name=${f}`:""}`)).json();console.log("data",x);const y=(x.results||x.result).map(w=>({value:w.uid||w?.properties?.uid,label:w.name||w?.properties?.name}));k===1?(console.log("newItems",y),p(y)):p(w=>[...w,...y]),C(x.next!==null)}catch(V){console.error("Error fetching Star Wars characters:",V)}finally{S(!1)}},[]),H=e.useCallback(f=>{h(f),d(1),v(f,1)},[v]),W=e.useCallback(()=>{if(!b&&i){const f=c+1;d(f),v(r,f)}},[v,i,b,c,r]);return e.useEffect(()=>{v("",1)},[v]),a.jsx("div",{className:"w-[300px]",children:a.jsx(m,{data:u,open:o,onOpenChange:n,value:t,onValueChange:s,onSearch:H,onScrolled:W,placeholder:"Select Star Wars character...",searchPlaceholder:"Search characters...",emptyMessage:b?"Loading...":"No characters found",enableResponsive:!0})})},parameters:{docs:{description:{story:"Example of Combobox integration with Star Wars API featuring search and infinite scroll."}}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    return <div className="w-[200px]">
        <Combobox data={frameworks} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of the Combobox component with a list of frameworks.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    return <div className="w-[200px]">
        <Combobox data={frameworks} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} aria-invalid={true} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of Combobox in an invalid state with red border styling.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState(frameworks);
    const handleSearch = (search: string) => {
      setItems(frameworks.filter(framework => framework.label.toLowerCase().includes(search.toLowerCase())));
    };
    return <div className="w-[200px]">
        <Combobox data={items} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} onSearch={handleSearch} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of Combobox with search functionality.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
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
        <Combobox data={items} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} onScrolled={handleScrolled} contentMaxHeight={200} emptyMessage={isLoading ? 'Loading more items...' : 'No frameworks found.'} enableResponsive />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example demonstrating infinite scroll functionality. The list loads 10 items at a time up to 50 items total, with each item having additional text to ensure scrolling is visible.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    return <div className="w-[200px]">
        <Combobox data={frameworks} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} disabled contentMaxHeight={200} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of disabled Combobox.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    data: frameworks,
    placeholder: 'Select a framework...',
    searchPlaceholder: 'Find your framework...',
    emptyMessage: 'No frameworks found :(',
    value: undefined,
    onValueChange: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Customizing the placeholder texts of the combobox.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    return <div className="w-[200px]">
        <Combobox data={frameworks} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} contentMaxHeight={300} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the combobox with a custom maxHeight of 300px for the content area.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    return <div className="w-[200px]">
        <Combobox data={frameworks} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} enableResponsive placeholder="Select framework..." searchPlaceholder="Search framework..." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of responsive Combobox that shows a Drawer on mobile devices and a Popover on desktop.'
      }
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState(frameworks);
    const handleSearch = (search: string) => {
      setItems(frameworks.filter(framework => framework.label.toLowerCase().includes(search.toLowerCase())));
    };
    return <div className="w-[200px]">
        <Combobox data={items} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} onSearch={handleSearch} enableResponsive placeholder="Select framework..." searchPlaceholder="Search framework..." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of responsive Combobox with search functionality.'
      }
    },
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [items, setItems] = useState<Array<{
      value: string;
      label: string;
    }>>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const fetchCharacters = useCallback(async (searchQuery: string, pageNum: number) => {
      try {
        setLoading(true);
        const response = await fetch(\`https://www.swapi.tech/api/people?page=\${pageNum}&limit=10\${searchQuery ? \`&name=\${searchQuery}\` : ''}\`);
        const data: SwapiPeopleResponse = await response.json();
        console.log('data', data);
        const newItems = (data.results || data.result).map(character => ({
          value: character.uid || character?.properties?.uid,
          label: character.name || character?.properties?.name
        }));
        if (pageNum === 1) {
          console.log('newItems', newItems);
          setItems(newItems as ComboboxItem[]);
        } else {
          setItems(prev => [...prev, ...newItems] as ComboboxItem[]);
        }
        setHasMore(data.next !== null);
      } catch (error) {
        console.error('Error fetching Star Wars characters:', error);
      } finally {
        setLoading(false);
      }
    }, []);
    const handleSearch = useCallback((searchQuery: string) => {
      setSearch(searchQuery);
      setPage(1);
      fetchCharacters(searchQuery, 1);
    }, [fetchCharacters]);
    const handleScrolled = useCallback(() => {
      if (!loading && hasMore) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchCharacters(search, nextPage);
      }
    }, [fetchCharacters, hasMore, loading, page, search]);

    // Initial fetch
    useEffect(() => {
      fetchCharacters('', 1);
    }, [fetchCharacters]);
    return <div className="w-[300px]">
        <Combobox data={items} open={open} onOpenChange={setOpen} value={value} onValueChange={setValue} onSearch={handleSearch} onScrolled={handleScrolled} placeholder="Select Star Wars character..." searchPlaceholder="Search characters..." emptyMessage={loading ? 'Loading...' : 'No characters found'} enableResponsive />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of Combobox integration with Star Wars API featuring search and infinite scroll.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};const _e=["Default","Invalid","WithSearch","WithInfiniteScroll","Disabled","CustomPlaceholders","WithCustomHeight","Responsive","ResponsiveWithSearch","StarWarsCharacters"];export{N as CustomPlaceholders,I as Default,R as Disabled,j as Invalid,T as Responsive,E as ResponsiveWithSearch,L as StarWarsCharacters,P as WithCustomHeight,M as WithInfiniteScroll,O as WithSearch,_e as __namedExportsOrder,Qe as default};
