import{a as h,S as p,i as n}from"./assets/vendor-CR6XSAxY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();async function d(e,o){const a=`https://pixabay.com/api/?key=56971825-b210e245e3edfc0e9c312393e&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=15`;return(await h.get(a)).data}const b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(){const e=document.querySelector(".gallery");e.innerHTML=""}function u(e){const o=document.querySelector(".gallery"),a=e.map(t=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes</b>${t.likes}
      </p>
      <p class="info-item">
        <b>Views</b>${t.views}
      </p>
      <p class="info-item">
        <b>Comments</b>${t.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>${t.downloads}
      </p>
    </div>
  </li>`).join("");o.insertAdjacentHTML("beforeend",a),b.refresh()}function m(){document.querySelector(".loader").classList.add("is-active")}function f(){document.querySelector(".loader").classList.remove("is-active")}function y(){const e=document.querySelector(".button-load-more");e&&e.classList.remove("is-hidden")}function g(){const e=document.querySelector(".button-load-more");e&&e.classList.add("is-hidden")}const w=document.querySelector(".form"),v=document.querySelector(".button-load-more");let i=1,l="";w.addEventListener("submit",async e=>{e.preventDefault();const a=e.currentTarget.elements["search-text"].value.trim();if(a===""){n.warning({message:"Please enter a search query!"});return}i=1,l=a,L(),g(),m();try{const t=await d(l,i);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}u(t.hits),t.totalHits>15&&y()}catch(t){n.error({title:"Error",message:"Something went wrong with the server connection. Please try again later!"}),console.error(t)}finally{f()}});v.addEventListener("click",async()=>{i+=1,m(),g();try{const e=await d(l,i);u(e.hits);const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const a=Math.ceil(e.totalHits/15);i>=a?n.info({message:"We're sorry, but you've reached the end of search results."}):y()}catch(e){n.error({title:"Error",message:"Failed to load more images. Please try again!"}),console.error(e)}finally{f()}});
//# sourceMappingURL=index.js.map
