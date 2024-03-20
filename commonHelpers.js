import{S as l,i as p}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=(o,s)=>{const t="https://pixabay.com/api/",n=new URLSearchParams({key:"42955810-525eb75005697c7b81a0edb8d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(t+"?"+n.toString()).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{s(e)}).catch(e=>{console.log("Error:  ",e)})},a=document.querySelector(".images"),u=new l(".images li a",{captionDelay:250,captionsData:"alt"}),f=()=>{a.innerHTML='<span class="loader"></span>'},d=o=>{if(a.innerHTML="",o.hits.length===0)p.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});else{const s=o.hits.map(t=>`<li class="image">
          <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}"></a>
          <ul class="info">
            <li class="info-block">
              <p3>Likes</p3>
              <span>${t.likes}</span>
            </li>
            <li class="info-block">
              <p3>Views</p3>
              <span>${t.views}</span>
            </li>
            <li class="info-block">
              <p3>Comments</p3>
              <span>${t.comments}</span>
            </li>
            <li class="info-block">
              <p3>Downloads</p3>
              <span>${t.downloads}</span>
            </li>
          </ul>
        </li>`).join("");a.innerHTML=s,u.refresh()}},c=document.querySelector("#search-image"),g=document.querySelector("#search-button");g.addEventListener("click",()=>{c.value.trim().length!=0&&(f(),m(c.value.trim(),d))});
//# sourceMappingURL=commonHelpers.js.map
