function y(){import("data:text/javascript,")}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();var a=i(require("react")),c=i(require("react-dom/client"));require("@aws-amplify/ui-react/styles.css");require("./index.css");var f=require("aws-amplify"),d=i(require("./App")),p=i(require("./aws-exports")),s=require("react/jsx-runtime");function i(t){return t&&t.__esModule?t:{default:t}}f.Amplify.configure(p.default);var m=c.default.createRoot(document.getElementById("root"));m.render((0,s.jsx)(a.default.StrictMode,{children:(0,s.jsx)(d.default,{})}));export{y as __vite_legacy_guard};
