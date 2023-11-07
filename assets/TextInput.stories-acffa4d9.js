import{a as y,j as o}from"./jsx-runtime-bc5d6cf6.js";import{s as n}from"./stitches.config-fc327da9.js";import{T as b}from"./Text-1bb1f7d6.js";import{B as h}from"./Box-36ff8828.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const $=n("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.6,cursor:"not-allowed"}}),I=n("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),_=n("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function s({prefix:r,...x}){return y($,{children:[!!r&&o(I,{children:r}),o(_,{...x})]})}s.displayName="TextInput";try{s.displayName="TextInput",s.__docgenInfo={description:"",displayName:"TextInput",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSS<{}, { colors: { white: string; black: string; gray100: string; gray200: string; gray400: string; gray500: string; gray600: string; gray700: string; gray800: string; gray900: string; ignite300: string; ignite500: string; ignite700: string; ignite900: string; }; ... 5 more ...; radii: { ...; }; }, { ...; }, {}>"}}}}}catch{}const W={title:"Form/Text Input",component:s,args:{},decorators:[r=>y(h,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[o(b,{size:"sm",children:"E-mail"}),r()]})]},e={args:{placeholder:"type your name"}},a={args:{disabled:!0}},t={args:{prefix:"cal.com/"}};var i,l,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'type your name'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,m,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    prefix: 'cal.com/'
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const j=["Primary","Disabled","WithPrefix"];export{a as Disabled,e as Primary,t as WithPrefix,j as __namedExportsOrder,W as default};
//# sourceMappingURL=TextInput.stories-acffa4d9.js.map
