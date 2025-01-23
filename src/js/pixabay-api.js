const API_KEY = '48249953-c87d0f666d29b70f04b79c154';
const BASE_URL = 'https://pixabay.com/api/';

import axios from 'axios';

export const fetchImages = (searchQuery, currentPage, perPage) => {
  const axiosParams = {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientaiton: 'horizontal',
      safesearch: 'true',
      page: currentPage,
      per_page: perPage,
    },
  };
  return axios.get(BASE_URL, axiosParams);
};
