import pixabayApi from './js/pixabay-api.js';
import {
  renderImages,
  loadStart,
  loadFinish,
  displayLoadMore,
} from './js/render-functions.js';

const search_element = document.querySelector('#search-image');
const search_button = document.querySelector('#search-button');
const load_more_button = document.querySelector('#load_more_button');

const per_page = 15;
let page = 1;

search_button.addEventListener('click', () => {
  page = 1;

  if (search_element.value.trim().length != 0) {
    loadStart();
    pixabayApi(search_element.value.trim(), page, per_page).then(response => {
      const displayed_count = page * per_page;
      const data = response.data;

      loadFinish();
      renderImages(data);

      if (
        data.hits.length > 0 &&
        data.totalHits > 0 &&
        displayed_count < data.totalHits
      ) {
        displayLoadMore();
      }
    });
  }
});

load_more_button.addEventListener('click', () => {
  page++;

  console.log('HELLO');

  if (search_element.value.trim().length != 0) {
    loadStart();
    pixabayApi(search_element.value.trim(), page, per_page).then(response => {
      const displayed_count = page * per_page;
      const data = response.data;

      loadFinish();
      renderImages(data);

      if (
        data.hits.length > 0 &&
        data.totalHits > 0 &&
        displayed_count < data.totalHits
      ) {
        displayLoadMore();
      }
    });
  }
});
