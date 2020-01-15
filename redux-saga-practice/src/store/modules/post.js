import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as actions from "store/actions";

const initialState = {
  data: {
    status: "",
    totalResults: 0,
    articles: ""
  },
  test: {
    number: 0,
    data: []
  }
};

export default handleActions(
  {
    [actions.GET_API]: (state, payload) => {
      return produce(state, draft => {
        console.log("test!");
      });
    },
    [actions.GET_API_SUCCESS]: (state, { payload }) => {
      console.log("success");
      console.log(payload);
      const { articles } = payload;
      return produce(state, draft => {
        draft.test.data = articles;
      });
    }
    // [GET_API_SUCCESS]: (state, action) => {
    //   const { status, totalResults, articles } = action.payload.data;
    //   return produce(state, draft => {
    //     draft.data.status = status;
    //     draft.data.totalResults = totalResults;
    //     draft.data.articles = articles;
    //   });
    // }
  },
  initialState
);
