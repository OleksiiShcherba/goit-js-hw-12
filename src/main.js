import pixabayApi from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';

const search_element = document.querySelector('#search-image');
const search_button = document.querySelector('#search-button');

search_button.addEventListener('click', () => {
  if (search_element.value.trim().length != 0) {
    pixabayApi(search_element.value.trim(), renderImages);
  }
});
