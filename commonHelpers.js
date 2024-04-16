import{S as d,i as u}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();async function i(s){const o=`https://pixabay.com/api/?key=43059810-21766dfeafea29ca9c24ae0e2&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(o);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}catch(e){return console.error("Error fetching data:",e),[]}}function c(s){const n=document.getElementById("gallery");if(n.innerHTML="",s.length===0){f();return}s.forEach(e=>{const r=`
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
    `;n.insertAdjacentHTML("beforeend",r)}),new d("#gallery a",{}).refresh()}function f(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}const l=document.getElementById("search-form");l.addEventListener("submit",async s=>{s.preventDefault();const o=document.getElementById("search-input").value.trim();if(!o){iziToast.error({title:"Error",message:"Please enter a search query!"});return}try{const e=await i(o);c(e)}catch(e){console.error("Error searching for images:",e)}});l.addEventListener("submit",async s=>{s.preventDefault();const o=document.getElementById("search-input").value.trim(),e=document.getElementById("loader");if(!o){iziToast.error({title:"Error",message:"Please enter a search query!"});return}e.classList.remove("hidden");try{const r=await i(o);c(r)}catch(r){console.error("Error searching for images:",r)}finally{e.classList.add("hidden")}});
//# sourceMappingURL=commonHelpers.js.map
