import { handleActions } from "redux-actions";
import { produce } from "immer";
import * as actions from "store/actions";

const initialState = {
  photo: {
    data: []
  },
  place: {
    data: [],
    id: 1
  }
};

export default handleActions(
  {
    //   random photo
    [actions.GET_PHOTO]: (state, { payload: target }) => {
      return produce(state, draft => {
        console.log("get photo call");
        draft.place.id = target;
      });
    },
    [actions.GET_PHOTO_SUC]: (state, { payload: target }) => {
      return produce(state, draft => {
        console.log("get photo success");
        draft.photo.data = target;
      });
    },
    [actions.GET_PHOTO_FAIL]: (state, { payload: target }) => {
      return produce(state, draft => {
        console.log("get photo fail");
      });
    },
    //   placeholder
    [actions.GET_PLACE]: (state, { payload: target }) => {
      return produce(state, draft => {
        console.log("get placeholder call");
      });
    },
    [actions.GET_PLACE_SUC]: (state, { payload: target }) => {
      return produce(state, draft => {
        console.log("get placeholder success");
        draft.place.data = target;
      });
    },
    [actions.GET_PLACE_FAIL]: (state, { payload: target }) => {
      return produce(state, draft => {
        console.log("get placeholder fail");
      });
    }
  },
  initialState
);
