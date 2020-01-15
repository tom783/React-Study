import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actions from "store/actions";
import { getApi } from "lib/api";
import store from "store";

function* handleSaga() {
  console.log("saga GET_API");
  const { data } = yield call(getApi, "business");
  if (data) {
    console.log(data);
    store.dispatch({ type: actions.GET_API_SUCCESS, payload: data });
  } else {
    alert("nono~");
  }
}

export default function* testSaga() {
  yield all([takeEvery(actions.GET_API, handleSaga)]);
}
