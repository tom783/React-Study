import { all, takeEvery, call } from "redux-saga/effects";
import * as actions from "store/actions";
import movieApi from "lib/movieApi";
import store from "store";

function* handleMoive({ payload }) {
  console.log("handling movie saga");
  console.log(payload);
  const { data } = yield call(movieApi, payload);
  console.log(data);

  if (data) {
    store.dispatch({ type: actions.GET_MOVIE_SUCCESS, payload: data.results });
  } else {
    console.log("handleMovie fail");
  }
}

export default function* movieSaga() {
  yield all([takeEvery(actions.GET_MOVIE, handleMoive)]);
}
