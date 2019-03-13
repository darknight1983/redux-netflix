import C from "../constants";

export const showMovie = (state, action) => {
  console.log(state);
  switch (action.type) {
    case C.FETCH_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    case C.FETCH_MOVIE:
      return Object.assign({}, state, { movie: state.movies[action.index] });
    default:
      return {
        ...state
      };
  }
};
