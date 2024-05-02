import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000';

export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const ApiService = {
    get: async (url: string, data?: any, force?: boolean) => {
      if (force) {
        const resp = await axios.get(url, data);
        return resp.data;
      }
      const resp = await axiosClient.get(url, data);
      return resp.data;
    },
    post: async (url: string, data?: any, force?: boolean) => {
      if (force) {
        const resp = await axios.post(url, data);
        return resp.data;
      }
      const resp = await axiosClient.post(url, data);
      return resp.data;
    },
    put: async (url: string, data?: any, force?: boolean) => {
      if (force) {
        const resp = await axios.put(url, data);
        return resp.data;
      }
      const resp = await axiosClient.put(url, data);
      return resp.data;
    },
    delete: async (url: string, data?: any, force?: boolean) => {
      if (force) {
        const resp = await axios.delete(url, data);
        return resp.data;
      }
      const resp = await axiosClient.delete(url, data);
      return resp.data;
    },
  };
  export default ApiService;