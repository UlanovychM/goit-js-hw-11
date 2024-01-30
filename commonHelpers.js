import{S as y,i as g}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s=document.querySelector("form"),f=document.querySelector(".gallery"),a=document.querySelector(".loader"),c=new y(".gallery a",{captionsData:"alt",captionDelay:250}),h={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:b,q:u}=h;function L(o){const t=o.map(n=>{const{webformatURL:i,largeImageURL:e,tags:r,likes:l,views:d,comments:m,downloads:p}=n;return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${i}"
      data-source=""
      alt="${r}"
    />
		
  </a>
	<p>Likes: ${l}</p>
	<p>Views: ${d}</p>
	<p>Comments:${m} </p>
	<p>Downloads: ${p}</p>
</li>`}).join("");f.insertAdjacentHTML("afterbegin",t),document.querySelector(".gallery-link").addEventListener("click",n=>{n.preventDefault()}),c.refresh(),c.on("show.simplelightbox")}s.addEventListener("submit",o=>{o.preventDefault(),a.style.display="inline-block",u=o.target.elements.search.value.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${b}&q=${u}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{a.style.display="none",t.hits.length!==0?(f.innerHTML="",L(t.hits)):g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>console.log("Error:",t)).finally(()=>{s.reset()})});
//# sourceMappingURL=commonHelpers.js.map
