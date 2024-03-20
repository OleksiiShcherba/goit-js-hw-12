import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const renderImages = data => {
  const images_element = document.querySelector('.images');
  images_element.innerHTML = '';

  if (data.hits.length === 0) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please, try again!`,
      position: 'topRight',
    });
  } else {
    images_element.innerHTML =
      '<span class="load-title">Loading images, please wait...</span>';
    const image_elements = data.hits
      .map(hit => {
        return `<div class="image">
          <img src="${hit.webformatURL}" alt="${hit.tags}">
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
        </div>`;
      })
      .join('');

    images_element.innerHTML = image_elements;
  }
};

export default renderImages;
