import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api', // REPLACE MOCK ENDPOINT WITH REAL API
});

export default api;
