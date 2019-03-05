import C from "../constants";

export const showMovie = (state, action) => {
  switch (action.type) {
    case C.FETCH_MOVIES:
      return {
        ...state,
        all: action.movies
      };
    case C.FETCH_MOVIE:
      return {
        ...state,
        current: action.movie
      };
    default:
      return {
        ...state
      };
  }
};
