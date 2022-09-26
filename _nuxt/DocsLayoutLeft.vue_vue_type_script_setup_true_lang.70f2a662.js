import{s as h,a as f,u as r,o as e,p as o,E as s,F as l,L as u,I as a,D as d,O as p,M as m,N as c,y as _}from"./entry.3d372a76.js";const L=()=>h("DOCSLAYOUTLEFTEARLY",()=>[{title:"Documentation",icon:"iconfont icon-ziliao",router:"/docs/documentation"},{title:"Design",icon:"iconfont icon-zhaopian",router:"/docs/design"},{title:"Tools",icon:"iconfont icon-179",router:"/docs/tools"}]),k=()=>h("DOCSLAYOUTLEFTGUIDE",()=>[{title:"\u76EE\u5F55\u89C4\u8303",children:[{title:"Directory",router:"/docs/standard-directory"}]},{title:"\u7F16\u7801\u89C4\u8303",children:[{title:"ESlint",router:"/docs/eslint"},{title:"Prettier",router:"/docs/prettier"},{title:"Stylelint",router:"/docs/stylelint"},{title:".Vscode",router:"/docs/vscode"},{title:"TsConfig",router:"/docs/tsconfig"}]},{title:"\u63D0\u4EA4\u89C4\u8303",children:[{title:"Husky & LintStaged",router:"/docs/husky-lintstaged"},{title:"Commitizen & Commitlint",router:"/docs/commitizen-commitlint"},{title:"Changelog & Gitmoji",router:"/docs/changelog-gitmoji"}]},{title:"\u5F00\u6E90\u89C4\u8303",children:[{title:".Github",router:"/docs/github"},{title:"Package",router:"/docs/package"}]},{title:"\u5F00\u53D1\u89C4\u8303",children:[{title:"Var & Param",router:"/docs/var-param"},{title:"Notes",router:"/docs/notes"},{title:"Test",router:"/docs/test"}]},{title:"\u6027\u80FD\u4F18\u5316",children:[{title:"Analysis",router:"/docs/analysis"},{title:"Code",router:"/docs/code"},{title:"Resource",router:"/docs/resource"},{title:"Webpack",router:"/docs/webpack"},{title:"Vite",router:"/docs/vite"},{title:"Network",router:"/docs/network"}]},{title:"\u9879\u76EE\u90E8\u7F72",children:[{title:"Gitlab",router:"/docs/gitlab"},{title:"GitHubActions",router:"/docs/github-action"}]},{title:"\u6570\u636E\u5206\u6790",children:[{title:"ErrorLog",router:"/docs/errorlog"},{title:"UserTraffic",router:"/docs/user-traffic"}]}]),x={class:"mb-3 font-medium text-slate-900"},E={class:"space-y-2 border-l border-slate-100"},v=f({__name:"DocsLayoutLeft",setup(b){const y=r(L()),g=r(k());return(C,D)=>{const n=_;return e(),o("div",null,[s("ul",null,[(e(!0),o(l,null,u(r(y),t=>(e(),o("li",{key:t.title},[a(n,{to:t.router,class:"inline-flex items-center text-sm leading-6 mb-4 font-medium text-slate-700 hover:text-sky-500 hover:shadow-sm",activeClass:"text-sky-500"},{default:d(()=>[s("span",{class:p(["mr-4 p-[2px] !text-xl !leading-4 rounded ring-1 ring-slate-900/5 shadow-md",t.icon])},null,2),m(" "+c(t.title),1)]),_:2},1032,["to"])]))),128)),(e(!0),o(l,null,u(r(g),t=>(e(),o("li",{class:"mt-8",key:t.title},[s("h5",x,c(t.title),1),s("ul",E,[(e(!0),o(l,null,u(t.children,i=>(e(),o("li",{key:i.title},[a(n,{to:i.router,class:"block border-l pl-4 -ml-px border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900",activeClass:"text-sky-500 border-sky-400"},{default:d(()=>[m(c(i.title),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}}});export{v as _};
