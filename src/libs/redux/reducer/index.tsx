import { combineReducers } from 'redux';
import { globalReducer } from './globalReducer';
import { movieReducer } from './movieReducer';

const reducer = combineReducers({
  globalReducer,
  movieReducer,
});

export default reducer;
