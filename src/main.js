import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'pure-css-loader/dist/css-loader.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  createGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.button-load-more');

let page = 1;
let currentQuery = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  const input = event.currentTarget.elements['search-text'];
  const quary = input.value.trim();
  if (quary === '') {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  page = 1;
  currentQuery = quary;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    if (data.totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        'Something went wrong with the server connection. Please try again later!',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);
    const card = document.querySelector('.gallery-item');
    if (card) {
      const cardHight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHight * 2,
        behavior: 'smooth',
      });
    }

    const maxPages = Math.ceil(data.totalHits / 15);
    if (page >= maxPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load more images. Please try again!',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
