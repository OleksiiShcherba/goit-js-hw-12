import pixabayApi from './js/pixabay-api.js';
import {
  renderImages,
  loadStart,
  loadFinish,
  displayLoadMore,
  hideLoadMore,
  displayNoMoreForLoad,
  hideNoMoreForLoad,
} from './js/render-functions.js';

const search_element = document.querySelector('#search-image');
const search_button = document.querySelector('#search-button');
const load_more_button = document.querySelector('#load_more_button');
const per_page = 15;

let page = 1;

const get_new_images = (new_request = true) => {
  hideLoadMore();
  hideNoMoreForLoad();

  if (search_element.value.trim().length != 0) {
    loadStart();

    pixabayApi(search_element.value.trim(), page, per_page).then(response => {
      const displayed_count = page * per_page;
      const data = response.data;

      loadFinish();
      renderImages(data, new_request);

      if (
        data.hits.length > 0 &&
        data.totalHits > 0 &&
        displayed_count < data.totalHits
      ) {
        displayLoadMore();
      } else {
        displayNoMoreForLoad();
      }
    });
  }
};

const search_action = () => {
  page = 1;
  get_new_images();
};

const load_more_action = () => {
  page++;
  get_new_images(false);
};

search_button.addEventListener('click', search_action);
load_more_button.addEventListener('click', load_more_action);
