import { ApiRequest } from '../libs';
import constant from './constant';
import { default as baseUrl, default as url } from './url';

interface API {
  movie?: any;
}

const API: API = {};

API.movie = {
  list: ApiRequest.get(baseUrl?.movie?.list),
  detail: ApiRequest.get(baseUrl?.movie?.detail),
  createTicket: ApiRequest.post(baseUrl?.movie?.createTicket),
};

export { API, constant, url };
