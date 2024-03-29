import{a as m,S as y,i as p}from"./assets/vendor-b2578120.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";const _=async(e,s=1,a=15)=>{const t={key:"42955810-525eb75005697c7b81a0edb8d",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return await m.get("",{params:t})},c=document.querySelector(".images"),u=document.querySelector("#loader_place"),f=document.querySelector("#load_more_form"),L=new y(".images li a",{captionDelay:250,captionsData:"alt"}),b=()=>{u.innerHTML='<span class="loader"></span>'},v=()=>{u.innerHTML=""},S=()=>{f.classList.remove("visually-hidden")},w=()=>{f.classList.add("visually-hidden")},q=()=>{p.info({message:"We're sorry, but you've reached the end of search results!",position:"topRight"})},M=()=>{const e=document.querySelector(".image");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}},$=(e,s=!0)=>{if(s&&(c.innerHTML=""),e.hits.length===0)p.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});else{const a=e.hits.map(t=>`<li class="image">
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
        </li>`).join("");c.innerHTML+=a,L.refresh()}},g=document.querySelector("#search-form"),x=document.querySelector("#load_more_form"),d=15;let i=1,l="";const h=(e=!0)=>{w(),l.length!=0&&(b(),_(l,i,d).then(s=>{const a=i*d,t=s.data;v(),$(t,e),t.hits.length>0&&t.totalHits>0&&(a<t.totalHits?S():q(),e&&(g.text.value="")),e||M()}))},H=e=>{i=1,e.preventDefault(),l=e.target.text.value.trim(),h()},O=e=>{i++,e.preventDefault(),h(!1)};g.addEventListener("submit",H);x.addEventListener("submit",O);
//# sourceMappingURL=commonHelpers.js.map
