import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // Other default config options for Axios can be added here
});

export default api;
