import { API } from '../../config';
import { setMovies, store } from '../../libs';
import { handleAsync } from '../../utils';

const { dispatch } = store;
/**
 * a Service for Get Movies
 */
export const getMovies = async (payload = {}) => {
  const [res, err] = await handleAsync(API.movie.list({ params: payload }));
  if (err) throw err;
  // console.log(res);
  const { data } = res;
  dispatch(setMovies(data));
  // return data;
};

/**
 * a Service for Get Detail Movie
 */
export const getDetailMovie = async (payload = {}) => {
  const [res, err] = await handleAsync(API.movie.detail({ params: payload }));
  if (err) throw err;
  console.log(res);
  const { data } = res;
  return data;
};

/**
 * a Service for Create Ticket
 */
export const createTicket = async (payload = {}) => {
  const [res, err] = await handleAsync(API.movie.createTicket({ params: payload }));
  if (err) throw err;
  console.log(res);
  const { data } = res;
  return data;
};
