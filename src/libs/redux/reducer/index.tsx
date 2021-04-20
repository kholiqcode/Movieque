import { combineReducers } from 'redux';
import { bookingReducer } from './bookingReducer';
import { globalReducer } from './globalReducer';
import { movieReducer } from './movieReducer';

const reducer = combineReducers({
  globalReducer,
  movieReducer,
  bookingReducer,
});

export default reducer;
