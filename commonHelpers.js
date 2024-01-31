import{S as d,i as p}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y=document.querySelector("form"),s=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250}),h={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:L,q:a}=h;function b(o){const t=o.map(i=>{const{webformatURL:n,largeImageURL:e,tags:r,likes:l,views:u,comments:f,downloads:m}=i;return`<li class="gallery-item">
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
    ${l}
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
	
</li>`}).join("");s.insertAdjacentHTML("afterbegin",t),document.querySelector(".gallery-link").addEventListener("click",i=>{i.preventDefault()}),g.refresh()}function k(o){a=o.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${L}&q=${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{c.style.display="none",s.innerHTML="",t.hits.length!==0?b(t.hits):p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>console.log("Error:",t))}y.addEventListener("submit",o=>{o.preventDefault(),o.target.elements.search.value!==""&&(c.style.display="inline-block",k(o.target.elements.search.value))});
//# sourceMappingURL=commonHelpers.js.map
