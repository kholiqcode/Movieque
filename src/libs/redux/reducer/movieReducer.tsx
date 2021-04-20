const inititalStateMovie = {
  movies: [],
  movieDetail: {},
};

export const movieReducer = (state = inititalStateMovie, action: any) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.value,
      };
    case 'SET_DETAIL_MOVIE':
      return {
        ...state,
        movieDetail: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
