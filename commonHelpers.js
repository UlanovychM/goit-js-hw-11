import{S as p,i as y}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.querySelector("form"),g=document.querySelector(".gallery"),i=document.querySelector(".loader"),c=new p(".gallery a",{captionsData:"alt",captionDelay:250}),h={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:b,q:u}=h;function L(o){const t=o.map(n=>{const{webformatURL:s,largeImageURL:e,tags:r,likes:l,views:f,comments:d,downloads:m}=n;return`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${s}"
      data-source=""
      alt="${r}"
    />
		
  </a>
	<p>Likes: ${l}</p>
	<p>Views: ${f}</p>
	<p>Comments:${d} </p>
	<p>Downloads: ${m}</p>
</li>`}).join("");g.insertAdjacentHTML("afterbegin",t),document.querySelector(".gallery-link").addEventListener("click",n=>{n.preventDefault()}),c.refresh(),c.on("show.simplelightbox")}a.addEventListener("submit",o=>{o.preventDefault(),i.style.display="inline-block",u=o.target.elements.search.value.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${b}&q=${u}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{i.style.display="none",t.hits.length!==0?L(t.hits):y.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>console.log("Error:",t)).finally(()=>{a.reset()})});
//# sourceMappingURL=commonHelpers.js.map
