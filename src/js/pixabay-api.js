import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const pixabayApi = async (search_word, page = 1, per_page = 15) => {
  const request_params = {
    key: '42955810-525eb75005697c7b81a0edb8d',
    q: search_word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  return await axios.get('', { params: request_params });
};

export default pixabayApi;
