const renderImages = data => {
  if (data.hits.length === 0) {
  } else {
    const body_element = document.querySelector('body');
    const image_elements = data.hits
      .map(hit => {
        return `<img src="${hit.webformatURL}" alt="${hit.tags}">`;
      })
      .join('');

    body_element.insertAdjacentHTML('beforeend', image_elements);
  }
};

export default renderImages;
