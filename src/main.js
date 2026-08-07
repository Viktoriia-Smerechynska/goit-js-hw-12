import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'pure-css-loader/dist/css-loader.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  showLoader,
  hideLoader,
  createGallery,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const input = event.currentTarget.elements['search-text'];
  const quary = input.value.trim();
  if (quary === '') {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(quary)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Something went wrong with the server connection. Please try again later!',
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});
