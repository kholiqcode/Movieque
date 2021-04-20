import { useNavigation } from '@react-navigation/native';
import { API } from '../../config';
import { setBooking, setDetailMovie, setError, setLoading, setMovies, store } from '../../libs';
import { handleAsync } from '../../utils';
import showMessage from '../../utils/showMessage';

const { dispatch } = store;
/**
 * a Service for Get Movies
 */
export const getMovies = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.movie.list({ params: payload }));
  if (err) {
    dispatch(setLoading(false));
    return dispatch(setError({ isError: true, message: err?.message ?? 'Terjadi Kesalahan' }));
  }
  const { data } = res;
  dispatch(setMovies(data));
  dispatch(setLoading(false));
};

/**
 * a Service for Get Detail Movie
 */
export const getDetailMovie = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.movie.detail({ params: payload }));
  if (err) {
    dispatch(setLoading(false));
    return dispatch(setError({ isError: true, message: err?.message ?? 'Terjadi Kesalahan' }));
  }
  const { data } = res;
  dispatch(setDetailMovie(data));
  dispatch(setLoading(false));
};

/**
 * a Service for Create Ticket
 */
export const createTicket = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.movie.createTicket({ params: payload }));
  console.log(err);
  if (err) {
    dispatch(setLoading(false));
    return showMessage(err?.message ?? 'Terjadi Kesalahan', 'error');
  }
  const { data } = res;
  dispatch(setBooking(data));
  dispatch(setLoading(false));
  showMessage(data?.message ?? 'Book Success', 'success');
  useNavigation().navigate('TicketConfirm');
};
