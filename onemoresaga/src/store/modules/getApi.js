import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as actions from "store/actions";

const initialState = {
  movie: {
    query: "",
    movieData: [],
    pending: false
  },
  news: {
    country: "",
    newsData: []
  },
  place: {
    category: "",
    placeData: []
  }
};

export default handleActions(
  {
    [actions.GET_MOVIE]: (state, { payload: query }) => {
      return produce(state, draft => {
        console.log("get Movie call");
        draft.movie.query = query;
        draft.movie.pending = true;
      });
    },
    [actions.GET_MOVIE_SUCCESS]: (state, { payload: movieData }) => {
      return produce(state, draft => {
        console.log("load Moive data");
        draft.movie.pending = false;
        draft.movie.movieData = movieData;
      });
    },
    [actions.GET_MOVIE_FAILURE]: (state, { payload: failure }) => {
      return produce(state, draft => {
        console.log("fail movie");
      });
    },
    [actions.GET_NEWS]: (state, { payload: country }) => {
      return produce(state, draft => {
        console.log("get News call");
        draft.news.country = country;
      });
    },
    [actions.GET_NEWS_SUCCESS]: (state, { payload: newsData }) => {
      return produce(state, draft => {
        console.log("load News data");
        draft.news.newsData = newsData;
      });
    },
    [actions.GET_NEWS_FAILURE]: (state, { payload: failure }) => {
      return produce(state, draft => {
        console.log("fail news");
      });
    },
    [actions.GET_PLACE]: (state, { payload: category }) => {
      return produce(state, draft => {
        console.log("get Place call");
        draft.place.category = category;
      });
    },
    [actions.GET_PLACE_SUCCESS]: (state, { payload: placeData }) => {
      return produce(state, draft => {
        console.log("load Place data");
        draft.place.placeData = placeData;
      });
    },
    [actions.GET_PLACE_FAILURE]: (state, { payload: failure }) => {
      return produce(state, draft => {
        console.log("fail place");
      });
    }
  },
  initialState
);
