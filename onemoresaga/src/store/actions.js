import { createAction } from "redux-actions";

export const GET_MOVIE = "actions/GET_MOVIE";
export const GET_MOVIE_SUCCESS = "actions/GET_MOVIE_SUCCESS";
export const GET_MOVIE_FAILURE = "actions/GET_MOVIE_FAILURE";

export const GET_NEWS = "actions/GET_NEWS";
export const GET_NEWS_SUCCESS = "actions/GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "actions/GET_NEWS_FAILURE";

export const GET_PLACE = "actions/GET_PLACE";
export const GET_PLACE_SUCCESS = "actions/GET_PLACE_SUCCESS";
export const GET_PLACE_FAILURE = "actions/GET_PLACE_FAILURE";

// create Actions
export const getMovie = createAction(GET_MOVIE);
export const getMovieSuc = createAction(GET_MOVIE_SUCCESS);
export const getMovieFail = createAction(GET_MOVIE_FAILURE);

export const getNews = createAction(GET_NEWS);
export const getNewsSuc = createAction(GET_NEWS_SUCCESS);
export const getNewsFail = createAction(GET_NEWS_FAILURE);

export const getPlace = createAction(GET_PLACE);
export const getPlaceSuc = createAction(GET_PLACE_SUCCESS);
export const getPlaceFail = createAction(GET_PLACE_FAILURE);
