const pixabayApi = (search_word, render_function) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const request_params = new URLSearchParams({
    key: '42955810-525eb75005697c7b81a0edb8d',
    q: search_word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(BASE_URL + '?' + request_params.toString())
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      render_function(data);
    })
    .catch(error => {
      console.log('Error:  ', error);
    });
};

export default pixabayApi;
