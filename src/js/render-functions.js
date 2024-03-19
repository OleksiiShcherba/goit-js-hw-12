const renderImages = data => {
  if (data.hits.length === 0) {
  } else {
    const body_element = document.querySelector('body');
    const images_element = document.querySelector('.images');
    if(images_element){
      images_element.remove();
    }

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

    body_element.insertAdjacentHTML('beforeend', `<div class="images">${image_elements}</div>`);
  }
};

export default renderImages;
