import { call, all, takeEvery } from "redux-saga/effects";
import * as actions from "store/actions";
import placeHolderApi from "lib/placeHolderApi";
import store from "store";

function* handlePlace({ payload }) {
  console.log("handling place saga");
  console.log(typeof payload);
  const { data } = yield call(placeHolderApi, payload);
  console.log(data);

  if (data) {
    store.dispatch({ type: actions.GET_PLACE_SUCCESS, payload: data });
  } else {
    console.log("handlePlace fail");
  }
}

export default function* placeSaga() {
  yield all([takeEvery(actions.GET_PLACE, handlePlace)]);
}
