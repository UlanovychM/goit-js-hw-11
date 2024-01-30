import{S as p,i as d}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=document.querySelector("form"),y=document.querySelector(".gallery"),s=new p(".gallery a",{captionsData:"alt",captionDelay:250}),h={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:b,q:l}=h;function L(a){l=a.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${b}&q=${l}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length!==0){const i=r.hits.map(o=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:c,views:u,comments:f,downloads:m}=o;return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${e}"
      data-source=""
      alt="${n}"
    />
		
  </a>
	<p>Likes: ${c}</p>
	<p>Views: ${u}</p>
	<p>Comments:${f} </p>
	<p>Downloads: ${m}</p>
</li>`}).join("");y.insertAdjacentHTML("afterbegin",i),document.querySelector(".gallery-link").addEventListener("click",o=>{o.preventDefault()}),s.refresh(),s.on("show.simplelightbox")}else d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>console.log("Error:",r))}g.addEventListener("submit",a=>{a.preventDefault(),L(a.target.elements.search.value)});
//# sourceMappingURL=commonHelpers.js.map
