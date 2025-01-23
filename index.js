import{a as E,S as P,i as p}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const w="48249953-c87d0f666d29b70f04b79c154",$="https://pixabay.com/api/",h=(r,t,i)=>{const s={params:{key:w,q:r,image_type:"photo",orientaiton:"horizontal",safesearch:"true",page:t,per_page:i}};return E.get($,s)};let u;const y=document.querySelector(".gallery"),L=r=>{const t=r.map(({webformatURL:i,largeImageURL:s,tags:e,likes:o,views:n,comments:S,downloads:q})=>`<li class="gallery-card">
          <a class="gallery-link" href="${s}">
            <img class="gallery-img" src="${i}" alt="${e}" />
          </a>
          <ul class="gallery-info">
            <li class="gallery-info-content">
              <p>Likes</p>
              <p>${o}</p>
            </li>
            <li class="gallery-info-content">
              <p>Views</p>
              <p>${n}</p>
            </li>
            <li class="gallery-info-content">
              <p>Comments</p>
              <p>${S}</p>
            </li>
            <li class="gallery-info-content">
              <p>Downloads</p>
              <p>${q}</p>
            </li>
          </ul>
        </li>`).join("");y.insertAdjacentHTML("beforeend",t),u?u.refresh():u=new P(".gallery-link",{captionsData:"alt",captionDelay:250})},g=()=>{y.innerHTML=""},b=document.querySelector(".search-form"),I=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),m=b.elements.search;let c="",a=1;const f=15,O=async r=>{try{if(r.preventDefault(),c=m.value.trim(),d(!1),l.classList.add("is-hidden"),c===""){p.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}a=1,g();const{data:t}=await h(c,a,f);if(console.log(t),t.hits.length===0){m.value="",p.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please enter the correct values!",position:"topRight"}),g();return}L(t.hits),l.classList.remove("is-hidden")}catch(t){console.log(t)}finally{d(!0)}};b.addEventListener("submit",O);const v=async()=>{try{a++,d(!1);const{data:r}=await h(c,a,f);L(r.hits);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*3,behavior:"smooth"}),a*f>=r.totalHits&&(l.classList.add("is-hidden"),l.removeEventListener("click",v),p.info({title:"Info",message:"✅ You've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r)}finally{d(!0)}};l.addEventListener("click",v);const d=r=>I.style.display=r?"none":"inline-block";
//# sourceMappingURL=index.js.map
