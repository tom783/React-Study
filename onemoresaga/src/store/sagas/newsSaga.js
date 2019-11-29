import { all, takeEvery, call } from "redux-saga/effects";
import * as actions from "store/actions";
import newsApi from "lib/newsApi";
import store from "store";

function* handleNews({ payload }) {
  console.log("handling news saga");
  console.log(payload);
  const { data } = yield call(newsApi, payload);
  console.log(data);

  if (data) {
    store.dispatch({ type: actions.GET_NEWS_SUCCESS, payload: data.articles });
  } else {
    console.log("handleNews fail");
  }
}

export default function* newsSaga() {
  yield all([takeEvery(actions.GET_NEWS, handleNews)]);
}
