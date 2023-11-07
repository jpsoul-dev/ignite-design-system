import{a as z,F as k,j as B}from"./jsx-runtime-bc5d6cf6.js";import{s as w}from"./stitches.config-fc327da9.js";import{U as I}from"./User.esm-6ed727b4.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./IconBase.esm-7eb740dd.js";const n=w("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",transition:"0.2s","&:disabled":{cursor:"not-allowed"},svg:{width:"$4",height:"$4"},variants:{variant:{primary:{color:"$white",backgroundColor:"$ignite500","&:not(:disabled):hover":{backgroundColor:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{backgroundColor:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600",borderColor:"$gray200"}}},size:{sm:{padding:"0 $4",height:38},md:{padding:"0 $4",height:46}}},defaultVariants:{variant:"primary",size:"md"}});n.displayName="Button";try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "tertiary" | ({ "@initial"?: "primary" | "secondary" | "tertiary"; } & { [x: string]: "primary" | "secondary" | "tertiary"; })'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | ({ "@initial"?: "sm" | "md"; } & { [x: string]: "sm" | "md"; })'}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSS<{}, { colors: { white: string; black: string; gray100: string; gray200: string; gray400: string; gray500: string; gray600: string; gray700: string; gray800: string; gray900: string; ignite300: string; ignite500: string; ignite700: string; ignite900: string; }; ... 5 more ...; radii: { ...; }; }, { ...; }, {}>"}}}}}catch{}const U={title:"Form/Button",component:n,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},r={},e={args:{variant:"secondary",children:"Back"}},a={args:{variant:"tertiary",children:"Cancel"}},t={args:{size:"sm"}},i={args:{disabled:!0}},s={args:{children:z(k,{children:[B(I,{weight:"bold"}),"Icon"]})}};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Back'
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var $,v,S;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,C,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <>
        <User weight="bold" />
        Icon
      </>
  }
}`,...(_=(C=s.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const D=["Primary","Secondary","Tertiary","Small","Disabled","WithIcon"];export{i as Disabled,r as Primary,e as Secondary,t as Small,a as Tertiary,s as WithIcon,D as __namedExportsOrder,U as default};
//# sourceMappingURL=Button.stories-ea57749d.js.map
