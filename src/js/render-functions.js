import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images_element = document.querySelector('.images');
const lightbox = new SimpleLightbox('.images li a', {
  captionDelay: 250,
  captionsData: 'alt',
});

export const loadStart = () => {
  images_element.innerHTML = '<span class="loader"></span>';
};

export const renderImages = data => {
  images_element.innerHTML = '';

  if (data.hits.length === 0) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please, try again!`,
      position: 'topRight',
    });
  } else {
    const image_elements = data.hits
      .map(hit => {
        return `<li class="image">
          <a href="${hit.largeImageURL}"><img src="${hit.webformatURL}" alt="${hit.tags}"></a>
          <ul class="info">
            <li class="info-block">
              <p3>Likes</p3>
              <span>${hit.likes}</span>
            </li>
            <li class="info-block">
              <p3>Views</p3>
              <span>${hit.views}</span>
            </li>
            <li class="info-block">
              <p3>Comments</p3>
              <span>${hit.comments}</span>
            </li>
            <li class="info-block">
              <p3>Downloads</p3>
              <span>${hit.downloads}</span>
            </li>
          </ul>
        </li>`;
      })
      .join('');

    images_element.innerHTML = image_elements;
    lightbox.refresh();
  }
};
