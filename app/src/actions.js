import C from "./constants";

export const getMovie = index => {
  return {
    type: C.FETCH_MOVIE,
    index: index
  };
};
