import{a as l,S as c,i}from"./assets/vendor-xJ0yvxqF.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function u(t){const s=`https://pixabay.com/api/?key=56971825-b210e245e3edfc0e9c312393e&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return l.get(s).then(n=>n.data)}const d=new c(".gallery a",{captionsData:"alt",captionDelay:250});function f(){const t=document.querySelector(".gallery");t.innerHTML=""}function m(t){const s=document.querySelector(".gallery"),n=t.map(e=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
      />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes</b>${e.likes}
      </p>
      <p class="info-item">
        <b>Views</b>${e.views}
      </p>
      <p class="info-item">
        <b>Comments</b>${e.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>${e.downloads}
      </p>
    </div>
  </li>`).join("");s.insertAdjacentHTML("beforeend",n),d.refresh()}function y(){document.querySelector(".loader").classList.add("is-active")}function p(){document.querySelector(".loader").classList.remove("is-active")}const g=document.querySelector(".form");g.addEventListener("submit",t=>{t.preventDefault();const n=t.currentTarget.elements["search-text"].value.trim();if(n===""){i.warning({message:"Please enter a search query!"});return}f(),y(),u(n).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(e.hits)}).catch(e=>{i.error({title:"Error",message:"Something went wrong with the server connection. Please try again later!"}),console.error(e)}).finally(()=>{p()})});
//# sourceMappingURL=index.js.map
