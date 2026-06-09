import axios from 'axios';

const http = {
  get: async (url) => (await axios.get(url)).data,
  post: async (url, data) => (await axios.post(url, data)).data,
  put: async (url, data) => (await axios.put(url, data)).data,
  delete: async (url) => (await axios.delete(url)).data,
};

export default http;