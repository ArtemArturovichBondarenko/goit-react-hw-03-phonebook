import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?q=';
const KEY = '15807739-09fa85d701810a3ee4e99cc27';
const REQUEST_PARAMS = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = (query = '', page = 1) =>
  axios.get(`${BASE_URL}${query}&page=${page}&key=${KEY}${REQUEST_PARAMS}`);
