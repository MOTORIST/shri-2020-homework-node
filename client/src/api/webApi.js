import axios from 'axios';
import { API_URL } from '../config';

export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

const initAxios = () => {
  const instance = axios.create({
    baseURL: API_URL,
  });

  return instance;
};

const handleErrors = e => {
  switch (e.response.status) {
    case 404:
      console.error('404');
      throw e;
    case 422:
      console.error('422');
      throw e;
    default:
      throw e;
  }
};

function webAPI(url, method, data, config = {}) {
  try {
    switch (method) {
      case GET:
        return initAxios()
          .get(url, config)
          .catch(handleErrors);
      case POST:
        return initAxios()
          .post(url, data, config)
          .catch(handleErrors);
      case PATCH:
        return initAxios()
          .patch(url, data, config)
          .catch(handleErrors);
      case DELETE:
        return initAxios()
          .delete(url)
          .catch(handleErrors);
      default:
        return initAxios()
          .get(url, config)
          .catch(handleErrors);
    }
  } catch (e) {
    throw e;
  }
}

export default webAPI;
