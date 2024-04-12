import{S as i,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();async function l(s){const n=`https://pixabay.com/api/?key=43059810-21766dfeafea29ca9c24ae0e2&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(n);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}catch(e){return console.error("Error fetching data:",e),[]}}function u(s){const o=document.getElementById("gallery");if(o.innerHTML="",s.length===0){d();return}s.forEach(e=>{const r=`
      <div class="card">
        <a href="${e.largeImageURL}" data-lightbox="image">
          <img src="${e.webformatURL}" alt="${e.tags}">
        </a>
        <div class="info">
          <p><strong>Likes</strong> <br>${e.likes}</p>
          <p><strong>Views</strong> <br>${e.views}</p>
          <p><strong>Comments</strong> <br>${e.comments}</p>
          <p><strong>Downloads</strong> <br>${e.downloads}</p>
        </div>
      </div>
    `;o.insertAdjacentHTML("beforeend",r)}),new i("#gallery a",{}).refresh()}function d(){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}const f=document.getElementById("search-form");f.addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("search-input").value.trim();if(!n){iziToast.error({title:"Error",message:"Please enter a search query!"});return}try{const e=await l(n);u(e)}catch(e){console.error("Error searching for images:",e)}});
//# sourceMappingURL=commonHelpers.js.map
