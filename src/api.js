import axios from 'axios';

const API = axios.create({
  baseURL: 'https://urlshortbackend-2zcr.onrender.com'
});

export default API;