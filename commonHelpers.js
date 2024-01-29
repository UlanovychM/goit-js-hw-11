import{S as m}from"./assets/vendor-c9def49e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=document.querySelector("form"),d=document.querySelector(".gallery"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),y={key:"42045393-d503a5a54b8da83761f9aabf4",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let{key:h,q:s,image_type:b}=y;function L(r){s=r.replace(" ","+"),fetch(`https://pixabay.com/api/?key=${h}&q=${s}&${b}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{const a=o.hits.map(i=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:l,views:c,comments:u,downloads:f}=i;return`<li class="gallery-item">
  <a class="gallery-link" href="${f}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${t}"
      alt="${n}"
    />
		
  </a>
	<p>Likes: ${l}</p>
	<p>Views: ${c}</p>
	<p>Comments:${u} </p>
</li>`}).join("");d.insertAdjacentHTML("afterbegin",a),g.on("show.simplelightbox")})}p.addEventListener("submit",r=>{r.preventDefault(),L(r.target.elements.search.value)});
//# sourceMappingURL=commonHelpers.js.map
