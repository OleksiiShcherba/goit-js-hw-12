import{a as m,S as h,i as y}from"./assets/vendor-b2578120.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();m.defaults.baseURL="https://pixabay.com/api/";const _=async(t,s=1,n=15)=>{const e={key:"42955810-525eb75005697c7b81a0edb8d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return await m.get("",{params:e})},l=document.querySelector(".images"),u=document.querySelector("#loader_place"),p=document.querySelector("#load_more_button"),f=document.querySelector("#no_more_for_load"),L=new h(".images li a",{captionDelay:250,captionsData:"alt"}),b=()=>{u.innerHTML='<span class="loader"></span>'},v=()=>{u.innerHTML=""},S=()=>{p.classList.remove("visually-hidden")},q=()=>{p.classList.add("visually-hidden")},w=()=>{f.classList.remove("visually-hidden")},M=()=>{f.classList.add("visually-hidden")},$=()=>{const t=document.querySelector(".image");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}},H=(t,s=!0)=>{if(s&&(l.innerHTML=""),t.hits.length===0)y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});else{const n=t.hits.map(e=>`<li class="image">
          <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}"></a>
          <ul class="info">
            <li class="info-block">
              <p3>Likes</p3>
              <span>${e.likes}</span>
            </li>
            <li class="info-block">
              <p3>Views</p3>
              <span>${e.views}</span>
            </li>
            <li class="info-block">
              <p3>Comments</p3>
              <span>${e.comments}</span>
            </li>
            <li class="info-block">
              <p3>Downloads</p3>
              <span>${e.downloads}</span>
            </li>
          </ul>
        </li>`).join("");l.innerHTML+=n,L.refresh()}},c=document.querySelector("#search-image"),O=document.querySelector("#search-button"),x=document.querySelector("#load_more_button"),d=15;let r=1;const g=(t=!0)=>{q(),M(),c.value.trim().length!=0&&(b(),_(c.value.trim(),r,d).then(s=>{const n=r*d,e=s.data;v(),H(e,t),e.hits.length>0&&e.totalHits>0&&n<e.totalHits?S():t||w(),t||$()}))},N=()=>{r=1,g()},P=()=>{r++,g(!1)};O.addEventListener("click",N);x.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
