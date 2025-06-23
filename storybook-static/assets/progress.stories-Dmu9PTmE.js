import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./index-CP2yOfOm.js";import{c as $}from"./index-Dl3xCZ72.js";import{P as y}from"./index-B4JWVDRZ.js";import{c as N}from"./cn-BEHD0UYf.js";import"./index-BOAxdYzW.js";import"./index-tw20AQU7.js";import"./index-C6iJU1zt.js";var x="Progress",P=100,[R,z]=$(x),[V,T]=R(x),b=v.forwardRef((e,r)=>{const{__scopeProgress:t,value:a=null,max:o,getValueLabel:C=A,...j}=e;(o||o===0)&&!h(o)&&console.error(D(`${o}`,"Progress"));const i=h(o)?o:P;a!==null&&!w(a,i)&&console.error(L(`${a}`,"Progress"));const l=w(a,i)?a:null,E=f(l)?C(l,i):void 0;return s.jsx(V,{scope:t,value:l,max:i,children:s.jsx(y.div,{"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":f(l)?l:void 0,"aria-valuetext":E,role:"progressbar","data-state":S(l,i),"data-value":l??void 0,"data-max":i,...j,ref:r})})});b.displayName=x;var I="ProgressIndicator",_=v.forwardRef((e,r)=>{const{__scopeProgress:t,...a}=e,o=T(I,t);return s.jsx(y.div,{"data-state":S(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...a,ref:r})});_.displayName=I;function A(e,r){return`${Math.round(e/r*100)}%`}function S(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function f(e){return typeof e=="number"}function h(e){return f(e)&&!isNaN(e)&&e>0}function w(e,r){return f(e)&&!isNaN(e)&&e<=r&&e>=0}function D(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${P}\`.`}function L(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${P} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var M=b,O=_;function n({className:e,value:r,indicatorProps:t,...a}){return s.jsx(M,{"data-slot":"progress",className:N("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",e),...a,children:s.jsx(O,{"data-slot":"progress-indicator",...t,className:N("bg-primary h-full w-full flex-1 transition-all",t?.className),style:{transform:`translateX(-${100-(r||0)}%)`}})})}n.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{indicatorProps:{required:!1,tsType:{name:"ReactComponentProps",raw:"React.ComponentProps<typeof ProgressPrimitive.Indicator>",elements:[{name:"ProgressPrimitive.Indicator"}]},description:""}}};const H={title:"UI/Progress",component:n,parameters:{layout:"centered",docs:{description:{component:`
A progress indicator component that shows the completion status of a task or process.

This component is built on top of [Radix UI Progress](https://www.radix-ui.com/primitives/docs/components/progress).
        `}}},argTypes:{value:{description:"The current progress value (0-100)",control:{type:"number",min:0,max:100}},className:{description:"Additional CSS classes to apply",control:"text"}},tags:["autodocs"]},c=e=>s.jsx(n,{value:60,className:"w-[200px]",...e});c.parameters={docs:{description:{story:"Basic usage of the Progress component showing 60% completion."}}};const p=()=>s.jsx(n,{value:0,className:"w-[200px]"});p.parameters={docs:{description:{story:"Progress component at 0% completion."}}};const m=()=>s.jsx(n,{value:100,className:"w-[200px]"});m.parameters={docs:{description:{story:"Progress component at 100% completion."}}};const u=()=>s.jsx(n,{value:80,className:"w-[200px] h-4 bg-secondary","data-slot":"progress",indicatorProps:{className:"bg-emerald-500"}});u.parameters={docs:{description:{story:"Progress component with custom height and colors using Tailwind CSS classes."}}};const d=()=>s.jsxs("div",{className:"w-[200px] flex flex-col gap-2 items-center",children:[s.jsx(n,{value:75}),s.jsxs("div",{className:"text-sm text-muted-foreground text-right",children:[75,"% Complete"]})]});d.parameters={docs:{description:{story:"Progress component with a percentage label."}}};const g=()=>{const[e,r]=v.useState(0);return v.useEffect(()=>{const t=setInterval(()=>{r(a=>a===100?0:a+1)},100);return()=>clearInterval(t)},[]),s.jsx(n,{value:e,className:"w-[200px]"})};c.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"NoProgress"};m.__docgenInfo={description:"",methods:[],displayName:"Complete"};u.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};d.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};g.__docgenInfo={description:"",methods:[],displayName:"ProgressPreview"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  return <Progress value={60} className="w-[200px]" {...args} />;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Progress value={0} className="w-[200px]" />;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Progress value={100} className="w-[200px]" />;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Progress value={80} className="w-[200px] h-4 bg-secondary" data-slot="progress" indicatorProps={{
    className: 'bg-emerald-500'
  }} />;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const value = 75;
  return <div className="w-[200px] flex flex-col gap-2 items-center">
      <Progress value={value} />
      <div className="text-sm text-muted-foreground text-right">{value}% Complete</div>
    </div>;
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev: number) => {
        if (prev === 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return <Progress value={value} className="w-[200px]" />;
}`,...g.parameters?.docs?.source}}};const J=["Default","NoProgress","Complete","CustomStyling","WithLabel","ProgressPreview"];export{m as Complete,u as CustomStyling,c as Default,p as NoProgress,g as ProgressPreview,d as WithLabel,J as __namedExportsOrder,H as default};
