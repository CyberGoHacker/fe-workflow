import{_ as p}from"./ContentQuery.be8c8c2f.js";import{f as m,h as c,i as a}from"./entry.8f59bbbd.js";import"./asyncData.92c96633.js";import"./utils.4c6dd949.js";const _=m({name:"ContentList",props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(o){const e=c(),{path:f,query:i}=o,d=Object.assign(i||{},{path:f}),r=(t,n)=>a("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return a(p,d,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:u})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:u,...this.$attrs}):({data:t})=>r("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>r("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:u})=>r("not-found",u)}})}});export{_ as default};
