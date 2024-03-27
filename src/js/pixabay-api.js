import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const pixabayApi = (search_word, render_function) => {
  const request_params = {
    key: '42955810-525eb75005697c7b81a0edb8d',
    q: search_word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  axios
    .get('', { params: request_params })
    .then(response => {
      render_function(response.data);
    })
    .catch(error => {
      console.log('Error:  ', error);
    });
};

export default pixabayApi;
