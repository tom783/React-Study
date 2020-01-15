import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as actions from "store/actions";

const initialState = {
  movie: {
    query: "",
    data: [],
    pending: false
  },
  news: {
    country: "",
    data: [],
    pending: false
  },
  place: {
    category: "",
    data: [],
    pending: false
  }
};

export default handleActions(
  {
    [actions.GET_MOVIE_PENDING]: (state, { payload: query }) => {
      return produce(state, draft => {
        console.log("get Movie call");
        draft.movie.query = query;
        draft.movie.pending = true;
      });
    },
    [actions.GET_MOVIE_SUCCESS]: (state, { payload: data }) => {
      return produce(state, draft => {
        console.log("load Moive data");
        draft.movie.pending = false;
        draft.movie.data = data;
      });
    },
    [actions.GET_MOVIE_FAILURE]: (state, { payload: failure }) => {
      return produce(state, draft => {
        console.log("fail movie");
        draft.movie.data = [];
        draft.movie.pending = false;
      });
    },
    [actions.GET_NEWS_PENDING]: (state, { payload: country }) => {
      return produce(state, draft => {
        console.log("get News call");
        draft.news.pending = true;
        draft.news.country = country;
      });
    },
    [actions.GET_NEWS_SUCCESS]: (state, { payload: data }) => {
      return produce(state, draft => {
        console.log("load News data");
        draft.news.data = data;
      });
    },
    [actions.GET_NEWS_FAILURE]: (state, { payload: failure }) => {
      return produce(state, draft => {
        console.log("fail news");
        draft.news.data = [];
        draft.news.pending = false;
      });
    },
    [actions.GET_PLACE_PENDING]: (state, { payload: category }) => {
      return produce(state, draft => {
        console.log("get Place call");
        draft.place.pending = true;
        draft.place.category = category;
      });
    },
    [actions.GET_PLACE_SUCCESS]: (state, { payload: data }) => {
      return produce(state, draft => {
        console.log("load Place data");
        draft.place.data = data;
      });
    },
    [actions.GET_PLACE_FAILURE]: (state, { payload: failure }) => {
      return produce(state, draft => {
        console.log("fail place");
        draft.place.data = [];
        draft.place.pending = false;
      });
    }
  },
  initialState
);
