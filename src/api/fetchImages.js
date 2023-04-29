import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34326641-0fc4acfa7a4e5a40cb89ff9f3';
const PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = async (query, page) => {
  return await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${PARAMS}`
  );
};
