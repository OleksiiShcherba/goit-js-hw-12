import pixabayApi from './js/pixabay-api.js';
import {
  renderImages,
  loadStart,
  loadFinish,
  displayLoadMore,
  hideLoadMore,
} from './js/render-functions.js';

const search_element = document.querySelector('#search-image');
const search_button = document.querySelector('#search-button');
const load_more_button = document.querySelector('#load_more_button');
const per_page = 15;

let page = 1;

const search_action = () => {
  page = 1;
  hideLoadMore();

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
};

const load_more_action = () => {
  page++;

  if (search_element.value.trim().length != 0) {
    loadStart();
    pixabayApi(search_element.value.trim(), page, per_page).then(response => {
      const displayed_count = page * per_page;
      const data = response.data;

      loadFinish();
      renderImages(data, false);

      if (
        data.hits.length == 0 &&
        data.totalHits == 0 &&
        displayed_count > data.totalHits
      ) {
        hideLoadMore();
      }
    });
  }
};

search_button.addEventListener('click', search_action);
load_more_button.addEventListener('click', load_more_action);
