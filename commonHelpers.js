import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g=document.querySelector("form"),s=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250}),l={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(o){const i=o.map(t=>{const{webformatURL:n,largeImageURL:e,tags:r,likes:a,views:u,comments:f,downloads:m}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${n}"
      data-source=""
      alt="${r}"
    />
		
  </a>
  <ul class="image-info">
    <li class="info-item">
    <p>Likes</p>
    ${a}
    </li>
    <li class="info-item"><p>Views</p>
    ${u}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${f}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${m}
    </li>
  </ul> 
	
</li>`}).join("");s.insertAdjacentHTML("afterbegin",i),document.querySelector(".gallery-link").addEventListener("click",t=>{t.preventDefault()}),y.refresh()}function L(o){l.q=o.replace(/\\s+/g,"+");const i=new URLSearchParams(l);fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{c.style.display="none",s.innerHTML="",t.hits.length!==0?h(t.hits):p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>console.log("Error:",t))}g.addEventListener("submit",o=>{o.preventDefault(),o.target.elements.search.value!==""&&(c.style.display="inline-block",L(o.target.elements.search.value))});
//# sourceMappingURL=commonHelpers.js.map
