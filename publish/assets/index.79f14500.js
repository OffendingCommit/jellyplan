import{u as l,j as e,o as d,a as p,N as m,b as f,r as g,c as y,l as h,d as u,F as _,B as v,A as x,T as w,I as O,e as L,f as R,g as A,O as E,h as T,i as b,k as N,R as P,m as c,n as q,p as B}from"./vendor.4280de83.js";function C(){import("data:text/javascript,")}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();function I(){const{route:a}=l(o=>[o.route]);return e(d,{level:1,children:a==="authenticated"?"FIRST PROTECTED ROUTE!":"Loading..."})}function j({children:a}){const r=p(),{route:o}=l(s=>[s.route]);return o!=="authenticated"?e(m,{to:"/login",state:{from:r},replace:!0}):a}function F(){var t,n;const{route:a}=l(i=>[i.route]),r=p(),o=f();let s=((n=(t=r.state)==null?void 0:t.from)==null?void 0:n.pathname)||"/";return g.exports.useEffect(()=>{a==="authenticated"&&o(s,{replace:!0})},[a,o,s]),e(y,{className:"auth-wrapper",children:e(h,{})})}function K(){return e(d,{level:3,children:"Home"})}function S(){const{route:a,signOut:r}=l(t=>[t.route,t.signOut]),o=f();function s(){r(),o("/login")}return u(_,{children:[a==="authenticated"?e(v,{sx:{flexGrow:1},children:e(x,{position:"static",children:u(w,{children:[e(O,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:e(L,{})}),e(R,{variant:"h6",component:"div",sx:{flexGrow:1},children:"JellyPlan"}),e(A,{onClick:()=>s(),children:"Logout"})]})})}):null,e(E,{})]})}const k={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://yamnsvfltnaexmq5ireojxat4i.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-fdtquudle5ctpi4lce2a3eyase"};T.configure(k);function z(){return e(b,{children:e(h.Provider,{children:e(N,{children:e(P,{children:u(c,{path:"/",element:e(S,{}),children:[e(c,{index:!0,element:e(K,{})}),e(c,{path:"/protected",element:e(j,{children:e(I,{})})}),e(c,{path:"/login",element:e(F,{})})]})})})})})}q.createRoot(document.getElementById("root")).render(e(B.StrictMode,{children:e(z,{})}));export{C as __vite_legacy_guard};