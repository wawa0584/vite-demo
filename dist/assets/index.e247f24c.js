import{p as e,a as t,d as o,r,o as s,c as n,b as l,t as a,F as i,e as u,f as c,g as d}from"./vendor.e662f427.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();e("data-v-8203a322");const p=l("p",null,[u(" Recommended IDE setup: "),l("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),u(" + "),l("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1),m=l("p",null,[u("See "),l("code",null,"README.md"),u(" for more information.")],-1),f=l("p",null,[l("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),u(" | "),l("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1),g=l("p",null,[u(" Edit "),l("code",null,"components/HelloWorld.vue"),u(" to test hot module replacement. ")],-1);t();const h=o({props:{msg:{type:String,required:!0}},setup(e){const t=r(0);return(o,r)=>(s(),n(i,null,[l("h1",null,a(e.msg),1),p,m,f,l("button",{type:"button",onClick:r[0]||(r[0]=e=>t.value++)},"count is: "+a(t.value),1),g],64))}});h.__scopeId="data-v-8203a322";const v=l("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);d(o({setup:e=>(e,t)=>(s(),n(i,null,[v,c(h,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))})).mount("#app");
