import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  const markup = images
    .map(image => {
      return `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
      <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
      />
    </a>
    <div class="info">
      <p class="info-item">
        <b>Likes</b>${image.likes}
      </p>
      <p class="info-item">
        <b>Views</b>${image.views}
      </p>
      <p class="info-item">
        <b>Comments</b>${image.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>${image.downloads}
      </p>
    </div>
  </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-active');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-active');
  }
}

export function showLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.button-load-more');
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('is-hidden');
  }
}
export function hideLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.button-load-more');
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('is-hidden');
  }
}
