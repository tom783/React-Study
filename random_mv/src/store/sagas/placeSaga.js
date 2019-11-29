import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actions from "store/actions";
import { getPlaceHolder } from "lib/api";
import store from "store";

function* handlePlace() {
  const { data } = yield call(getPlaceHolder);
  if (data) {
    console.log(data);
    store.dispatch({ type: actions.GET_PLACE_SUC, payload: data });
  } else {
    console.log("disconnected");
  }
}

export default function* placeSaga() {
  yield all([takeEvery(actions.GET_PLACE, handlePlace)]);
}
