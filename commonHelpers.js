import{a as u,S as g,i as y}from"./assets/vendor-b2578120.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";const h=async(a,s=1,r=15)=>{const e={key:"42955810-525eb75005697c7b81a0edb8d",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return await u.get("",{params:e})},l=document.querySelector(".images"),p=document.querySelector("#loader_place"),m=document.querySelector("#load_more_button"),_=new g(".images li a",{captionDelay:250,captionsData:"alt"}),b=()=>{p.innerHTML='<span class="loader"></span>'},L=()=>{p.innerHTML=""},S=()=>{m.classList.remove("visually-hidden")},q=()=>{m.classList.add("visually-hidden")},v=(a,s=!0)=>{if(s&&(l.innerHTML=""),a.hits.length===0)y.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});else{const r=a.hits.map(e=>`<li class="image">
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
        </li>`).join("");l.innerHTML+=r,_.refresh()}},c=document.querySelector("#search-image"),w=document.querySelector("#search-button"),$=document.querySelector("#load_more_button"),d=15;let n=1;const f=(a=!0)=>{q(),c.value.trim().length!=0&&(b(),h(c.value.trim(),n,d).then(s=>{const r=n*d,e=s.data;L(),v(e,a),e.hits.length>0&&e.totalHits>0&&r<e.totalHits&&S()}))},M=()=>{n=1,f()},H=()=>{n++,f(!1)};w.addEventListener("click",M);$.addEventListener("click",H);
//# sourceMappingURL=commonHelpers.js.map
