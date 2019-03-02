import C from "../constants";

export const showMovie = (state, action) => {
  if (action.type === C.SHOW_MOVIE) {
    return state.find(movie => movie.year === action.year);
  } else {
    return state;
  }
};
