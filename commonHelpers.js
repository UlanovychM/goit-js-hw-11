import{S as p,i as y}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g=document.querySelector("form"),u=document.querySelector(".gallery"),s=document.querySelector(".loader"),a=new p(".gallery a",{captionsData:"alt",captionDelay:250}),h={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:b,q:c}=h;function L(o){const t=o.map(i=>{const{webformatURL:n,largeImageURL:e,tags:r,likes:l,views:f,comments:m,downloads:d}=i;return`<li class="gallery-item">
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
    ${f}
    </li>
    <li class="info-item">
    <p>Comments</p>
    ${m}
    </li>
    <li class="info-item"><p>Downloads</p>
    ${d}
    </li>
  </ul> 
	
</li>`}).join("");u.insertAdjacentHTML("afterbegin",t),document.querySelector(".gallery-link").addEventListener("click",i=>{i.preventDefault()}),a.refresh(),a.on("show.simplelightbox")}g.addEventListener("submit",o=>{o.preventDefault(),s.style.display="inline-block",c=o.target.elements.search.value.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${b}&q=${c}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{s.style.display="none",t.hits.length!==0?(u.innerHTML="",L(t.hits)):y.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>console.log("Error:",t))});
//# sourceMappingURL=commonHelpers.js.map
