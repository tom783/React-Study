import { all, fork } from "redux-saga/effects";
import placeSaga from "./placeSaga";
import newsSaga from "./newsSaga";
import movieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([fork(placeSaga), fork(newsSaga), fork(movieSaga)]);
}
