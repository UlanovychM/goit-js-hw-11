import{S as d}from"./assets/vendor-c9def49e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p=document.querySelector("form"),g=document.querySelector(".gallery"),s=new d(".gallery a",{captionsData:"alt",captionDelay:250}),y={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:h,q:i,image_type:b}=y;s.on("show.simplelightbox");s.refresh();function L(n){i=n.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${h}&q=${i}&${b}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const l=r.hits.map(o=>{const{webformatURL:e,largeImageURL:t,tags:a,likes:c,views:u,comments:f,downloads:m}=o;return`<li class="gallery-item">
  <a class="gallery-link" href="">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${t}"
      alt="${a}"
    />
		
  </a>
	<p>Likes: ${c}</p>
	<p>Views: ${u}</p>
	<p>Comments:${f} </p>
	<p>Downloads: ${m}</p>
</li>`}).join("");g.insertAdjacentHTML("afterbegin",l),document.querySelector(".gallery-link").addEventListener("click",o=>{o.preventDefault()})}).catch(r=>console.log("Error:",r))}p.addEventListener("submit",n=>{n.preventDefault(),L(n.target.elements.search.value)});
//# sourceMappingURL=commonHelpers.js.map
