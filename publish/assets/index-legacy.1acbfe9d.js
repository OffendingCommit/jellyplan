System.register(["./vendor-legacy.925e37de.js"],(function(e,t){"use strict";var n,r,i,a,c,o,l,s,u,d,h,p,m,f,g,y,_,x,v,w,E,T,O,R,j,q;return{setters:[e=>{n=e.u,r=e.j,i=e.o,a=e.a,c=e.N,o=e.b,l=e.r,s=e.c,u=e.l,d=e.d,h=e.F,p=e.B,m=e.A,f=e.T,g=e.I,y=e.e,_=e.f,x=e.g,v=e.O,w=e.h,E=e.i,T=e.k,O=e.R,R=e.m,j=e.n,q=e.p}],execute:function(){function e(){const{route:e}=n((e=>[e.route]));return r(i,{level:1,children:"authenticated"===e?"FIRST PROTECTED ROUTE!":"Loading..."})}function t({children:e}){const t=a(),{route:i}=n((e=>[e.route]));return"authenticated"!==i?r(c,{to:"/login",state:{from:t},replace:!0}):e}function I(){const{route:e}=n((e=>[e.route])),t=a(),i=o();let c=t.state?.from?.pathname||"/";return l.exports.useEffect((()=>{"authenticated"===e&&i(c,{replace:!0})}),[e,i,c]),r(s,{className:"auth-wrapper",children:r(u,{})})}function P(){return r(i,{level:3,children:"Home"})}function S(){const{route:e,signOut:t}=n((e=>[e.route,e.signOut])),i=o();return d(h,{children:["authenticated"===e?r(p,{sx:{flexGrow:1},children:r(m,{position:"static",children:d(f,{children:[r(g,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:r(y,{})}),r(_,{variant:"h6",component:"div",sx:{flexGrow:1},children:"JellyPlan"}),r(x,{onClick:()=>(t(),void i("/login")),children:"Logout"})]})})}):null,r(v,{})]})}function b(){return r(E,{children:r(u.Provider,{children:r(T,{children:r(O,{children:d(R,{path:"/",element:r(S,{}),children:[r(R,{index:!0,element:r(P,{})}),r(R,{path:"/protected",element:r(t,{children:r(e,{})})}),r(R,{path:"/login",element:r(I,{})})]})})})})})}w.configure({aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://yamnsvfltnaexmq5ireojxat4i.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-fdtquudle5ctpi4lce2a3eyase"}),j.createRoot(document.getElementById("root")).render(r(q.StrictMode,{children:r(b,{})}))}}}));