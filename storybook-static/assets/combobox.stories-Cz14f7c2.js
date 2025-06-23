import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{g as K,c as R,r as a,R as X}from"./index-CP2yOfOm.js";import{B as Y}from"./button-mvJUpYu0.js";import{a as Z,b as ee,c as te,d as ae,e as oe,f as se}from"./command-CSgIugiD.js";import{a as ne,b as re,D as ie}from"./drawer-BlWdITYJ.js";import{P as le,a as ce,b as de}from"./popover-C9jDZsSF.js";import{u as ue}from"./use-is-mobile-D-jYZhIq.js";import{c as $}from"./cn-BEHD0UYf.js";import{C as pe}from"./chevrons-up-down-DvpqgdUU.js";import{C as me}from"./check-C8XpHW4d.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";import"./index-DvcKK4zF.js";import"./index-DKCPvQI5.js";import"./index-Dc_FVRD7.js";import"./index-Dl3xCZ72.js";import"./index-DLWGFm7J.js";import"./index-COdVRFd9.js";import"./index-CROEQnJ0.js";import"./index-BN84V4xG.js";import"./index-B4JWVDRZ.js";import"./index-BOAxdYzW.js";import"./index-D-X1RFvQ.js";import"./index-ygWTXzR6.js";import"./index-DKwnRhPn.js";import"./index-DiAPCjb2.js";import"./index-CjF7u6Cb.js";import"./index-BZRV-XMv.js";import"./dialog-DHwcDXVB.js";import"./x-C1dsFF04.js";import"./createLucideIcon-CAcKuqHj.js";import"./index-Cinrvcm8.js";import"./index-DmDYQtFb.js";var he="Expected a function",G=NaN,fe="[object Symbol]",ge=/^\s+|\s+$/g,be=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,we=parseInt,Se=typeof R=="object"&&R&&R.Object===Object&&R,Ce=typeof self=="object"&&self&&self.Object===Object&&self,ye=Se||Ce||Function("return this")(),ke=Object.prototype,Ve=ke.toString,je=Math.max,Ie=Math.min,q=function(){return ye.Date.now()};function Oe(e,t,n){var o,r,c,m,i,d,p=0,f=!1,g=!1,x=!0;if(typeof e!="function")throw new TypeError(he);t=U(t)||0,B(n)&&(f=!!n.leading,g="maxWait"in n,c=g?je(U(n.maxWait)||0,t):c,x="trailing"in n?!!n.trailing:x);function u(l){var h=o,V=r;return o=r=void 0,p=l,m=e.apply(V,h),m}function y(l){return p=l,i=setTimeout(k,t),f?u(l):m}function S(l){var h=l-d,V=l-p,M=t-h;return g?Ie(M,c-V):M}function j(l){var h=l-d,V=l-p;return d===void 0||h>=t||h<0||g&&V>=c}function k(){var l=q();if(j(l))return b(l);i=setTimeout(k,S(l))}function b(l){return i=void 0,x&&o?u(l):(o=r=void 0,m)}function I(){i!==void 0&&clearTimeout(i),p=0,o=d=r=i=void 0}function O(){return i===void 0?m:b(q())}function v(){var l=q(),h=j(l);if(o=arguments,r=this,d=l,h){if(i===void 0)return y(d);if(g)return i=setTimeout(k,t),u(d)}return i===void 0&&(i=setTimeout(k,t)),m}return v.cancel=I,v.flush=O,v}function B(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Me(e){return!!e&&typeof e=="object"}function Re(e){return typeof e=="symbol"||Me(e)&&Ve.call(e)==fe}function U(e){if(typeof e=="number")return e;if(Re(e))return G;if(B(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=B(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ge,"");var n=ve.test(e);return n||xe.test(e)?we(e.slice(2),n?2:8):be.test(e)?G:+e}var Ne=Oe;const Te=K(Ne);function Pe({data:e,value:t,onValueChange:n,onSearch:o,onScrolled:r,searchPlaceholder:c,emptyMessage:m,onOpenChange:i,debounceTime:d=300}){const p=a.useCallback(u=>{if(!r)return;const y=u.target;Math.abs(y.scrollHeight-y.scrollTop-y.clientHeight)<1&&r()},[r]),f=a.useMemo(()=>o?Te(u=>{o(u)},d):void 0,[o,d]);a.useEffect(()=>()=>{f?.cancel()},[f]);const g=a.useCallback(u=>{f&&f(u)},[f]),x=a.useCallback(u=>{n&&n(u===t?"":u),i&&i(!1)},[n,i,t]);return s.jsxs(Z,{shouldFilter:!1,children:[s.jsx(ee,{placeholder:c,onValueChange:g}),s.jsxs(te,{onScroll:p,className:$("scrollbar-thin scrollbar-thumb-border scrollbar-track-background","overflow-y-auto"),children:[s.jsx(ae,{children:m}),s.jsx(oe,{children:e.map(u=>s.jsxs(se,{value:u.value,onSelect:x,children:[s.jsx(me,{className:$("w-4",t===u.value?"opacity-100":"opacity-0")}),u.label]},u.value))})]})]})}const w=a.forwardRef(({data:e,onSearch:t,onScrolled:n,open:o,onOpenChange:r,className:c,value:m,onValueChange:i,placeholder:d="Select an option...",searchPlaceholder:p="Search...",emptyMessage:f="No results found.",disabled:g=!1,contentMaxHeight:x=200,contentMaxHeightMobile:u=350,"aria-invalid":y,enableResponsive:S=!1,debounceTime:j=300,...k},b)=>{const[I,O]=a.useState(""),v=m??I,l=i??O,h=a.useMemo(()=>v?e.find(J=>J.value===v):void 0,[e,v]),V=ue(),M=S&&V,_=s.jsxs(Y,{ref:b,variant:"outline",role:"combobox","aria-expanded":o,"aria-invalid":y,color:"secondary",className:$("w-full border-input focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-transparent hover:bg-transparent aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 justify-between",c),disabled:g,...k,children:[s.jsx("span",{className:"truncate",children:h?h.label:d}),s.jsx(pe,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),Q=s.jsx(Pe,{data:e,value:v,onValueChange:l,onSearch:t,onScrolled:n,searchPlaceholder:p,emptyMessage:f,onOpenChange:r,debounceTime:j});return M?s.jsxs(ne,{open:o,onOpenChange:r,children:[s.jsx(re,{asChild:!0,children:_}),s.jsx(ie,{children:s.jsx("div",{className:"mt-4 border-t",children:Q})})]}):s.jsxs(le,{open:o,onOpenChange:r,children:[s.jsx(ce,{asChild:!0,children:_}),s.jsx(de,{className:"w-full p-0",align:"start",children:Q})]})});w.displayName="Combobox";w.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxItem"}],raw:"ComboboxItem[]"},description:"The data to display in the combobox"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Function called when the search input value changes"},debounceTime:{required:!1,tsType:{name:"number"},description:`Debounce time in milliseconds for the search function
@default 300`,defaultValue:{value:"300",computed:!1}},onScrolled:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when the options list is scrolled to the bottom"},open:{required:!1,tsType:{name:"boolean"},description:"The controlled open state of the combobox"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Function called when the open state changes"},value:{required:!1,tsType:{name:"string"},description:"The selected value"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Function called when the selected value changes"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the trigger button",defaultValue:{value:"'Select an option...'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the search input",defaultValue:{value:"'Search...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Message to display when no results are found",defaultValue:{value:"'No results found.'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the combobox is disabled",defaultValue:{value:"false",computed:!1}},contentMaxHeight:{required:!1,tsType:{name:"number"},description:`Maximum height of the scrollable content area in pixels for desktop view
@default 200`,defaultValue:{value:"200",computed:!1}},contentMaxHeightMobile:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum height of the scrollable content area for mobile view
Can be a number (pixels) or a string (e.g., '50vh' for 50% of viewport height)
@default 350`,defaultValue:{value:"350",computed:!1}},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"Whether the combobox has an invalid state"},enableResponsive:{required:!1,tsType:{name:"boolean"},description:`Whether to enable responsive mode (Drawer on mobile, Popover on desktop)
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const mt={title:"Blocks/Combobox",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`A searchable select component with support for filtering, pagination, and keyboard navigation.

This component is built using a composition of [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover) and [cmdk](https://cmdk.paco.me/) for the command menu functionality.

### Features
- Controlled search input with \`onSearch\` callback
- Infinite scrolling support via \`onScrolled\` callback
- Full keyboard navigation
- Accessible following ARIA practices
- Customizable styling and placeholder text
- Responsive mode with Drawer on mobile (when \`enableResponsive\` is true)`}}},argTypes:{data:{description:"Array of items to display in the combobox.",control:"object"},onSearch:{description:"Callback fired when the search input value changes.",action:"onSearch"},onScrolled:{description:"Callback fired when the list is scrolled to the bottom.",action:"onScrolled"},open:{description:"Controls the open state of the combobox.",control:"boolean"},onOpenChange:{description:"Callback fired when the open state changes.",action:"onOpenChange"},value:{description:"The selected value.",control:"text"},onValueChange:{description:"Callback fired when the selected value changes.",action:"onValueChange"},placeholder:{description:"Placeholder text for the trigger button.",control:"text"},searchPlaceholder:{description:"Placeholder text for the search input.",control:"text"},emptyMessage:{description:"Message to display when no results are found.",control:"text"},disabled:{description:"Whether the combobox is disabled.",control:"boolean"},contentMaxHeight:{description:"Maximum height of the scrollable content area in pixels.",control:"number"},"aria-invalid":{description:"Whether the combobox has an invalid state.",control:"boolean"},enableResponsive:{description:"Whether to enable responsive mode (Drawer on mobile, Popover on desktop).",control:"boolean"}}},C=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],z=e=>{const t=["JavaScript","TypeScript","React","Vue","Angular","Svelte","Node.js","Express","Next.js","Nuxt","Remix","Astro","Solid","Qwik","Gatsby"];return Array.from({length:e},(n,o)=>({value:`framework-${o+1}`,label:`Framework ${o+1} - ${t[o%t.length]} Framework with Extended Description`}))},N={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState("");return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:C,open:t,onOpenChange:n,value:o,onValueChange:r})})},parameters:{docs:{description:{story:"Basic usage of the Combobox component with a list of frameworks."}}}},T={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState("");return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:C,open:t,onOpenChange:n,value:o,onValueChange:r,"aria-invalid":!0})})},parameters:{docs:{description:{story:"Example of Combobox in an invalid state with red border styling."}}}},P={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState(""),[c,m]=a.useState(C),i=d=>{m(C.filter(p=>p.label.toLowerCase().includes(d.toLowerCase())))};return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:c,open:t,onOpenChange:n,value:o,onValueChange:r,onSearch:i})})},parameters:{docs:{description:{story:"Example of Combobox with search functionality."}}}},E={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState(""),[c,m]=a.useState(()=>z(50).slice(0,10)),[i,d]=a.useState(!0),[p,f]=a.useState(!1),g=X.useCallback(()=>{!i||p||(f(!0),setTimeout(()=>{const x=z(50).slice(c.length,c.length+10);m([...c,...x]),d(c.length+x.length<50),f(!1)},500))},[i,p,c]);return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:c,open:t,onOpenChange:n,value:o,onValueChange:r,onScrolled:g,contentMaxHeight:200,emptyMessage:p?"Loading more items...":"No frameworks found.",enableResponsive:!0})})},parameters:{docs:{description:{story:"Example demonstrating infinite scroll functionality. The list loads 10 items at a time up to 50 items total, with each item having additional text to ensure scrolling is visible."}}}},L={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState("");return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:C,open:t,onOpenChange:n,value:o,onValueChange:r,disabled:!0,contentMaxHeight:200})})},parameters:{docs:{description:{story:"Example of disabled Combobox."}}}},W={args:{data:C,placeholder:"Select a framework...",searchPlaceholder:"Find your framework...",emptyMessage:"No frameworks found :(",value:void 0,onValueChange:void 0},parameters:{docs:{description:{story:"Customizing the placeholder texts of the combobox."}}}},H={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState("");return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:C,open:t,onOpenChange:n,value:o,onValueChange:r,contentMaxHeight:300})})},parameters:{docs:{description:{story:"Example showing the combobox with a custom maxHeight of 300px for the content area."}}}},A={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState("");return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:C,open:t,onOpenChange:n,value:o,onValueChange:r,enableResponsive:!0,placeholder:"Select framework...",searchPlaceholder:"Search framework..."})})},parameters:{docs:{description:{story:"Example of responsive Combobox that shows a Drawer on mobile devices and a Popover on desktop."}},viewport:{defaultViewport:"mobile1"}}},D={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState(""),[c,m]=a.useState(C),i=d=>{m(C.filter(p=>p.label.toLowerCase().includes(d.toLowerCase())))};return s.jsx("div",{className:"w-[200px]",children:s.jsx(w,{data:c,open:t,onOpenChange:n,value:o,onValueChange:r,onSearch:i,enableResponsive:!0,placeholder:"Select framework...",searchPlaceholder:"Search framework..."})})},parameters:{docs:{description:{story:"Example of responsive Combobox with search functionality."}},viewport:{defaultViewport:"mobile1"}}},F={render:function(){const[t,n]=a.useState(!1),[o,r]=a.useState(""),[c,m]=a.useState(""),[i,d]=a.useState(1),[p,f]=a.useState([]),[g,x]=a.useState(!1),[u,y]=a.useState(!0),S=a.useCallback(async(b,I)=>{try{x(!0);const v=await(await fetch(`https://www.swapi.tech/api/people?page=${I}&limit=10${b?`&name=${b}`:""}`)).json();console.log("data",v);const l=(v.results||v.result).map(h=>({value:h.uid||h?.properties?.uid,label:h.name||h?.properties?.name}));I===1?(console.log("newItems",l),f(l)):f(h=>[...h,...l]),y(v.next!==null)}catch(O){console.error("Error fetching Star Wars characters:",O)}finally{x(!1)}},[]),j=a.useCallback(b=>{m(b),d(1),S(b,1)},[S]),k=a.useCallback(()=>{if(!g&&u){const b=i+1;d(b),S(c,b)}},[S,u,g,i,c]);return a.useEffect(()=>{S("",1)},[S]),s.jsx("div",{className:"w-[300px]",children:s.jsx(w,{data:p,open:t,onOpenChange:n,value:o,onValueChange:r,onSearch:j,onScrolled:k,placeholder:"Select Star Wars character...",searchPlaceholder:"Search characters...",emptyMessage:g?"Loading...":"No characters found",enableResponsive:!0})})},parameters:{docs:{description:{story:"Example of Combobox integration with Star Wars API featuring search and infinite scroll."}}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const ht=["Default","Invalid","WithSearch","WithInfiniteScroll","Disabled","CustomPlaceholders","WithCustomHeight","Responsive","ResponsiveWithSearch","StarWarsCharacters"];export{W as CustomPlaceholders,N as Default,L as Disabled,T as Invalid,A as Responsive,D as ResponsiveWithSearch,F as StarWarsCharacters,H as WithCustomHeight,E as WithInfiniteScroll,P as WithSearch,ht as __namedExportsOrder,mt as default};
