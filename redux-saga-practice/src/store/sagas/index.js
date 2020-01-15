import { fork, all } from "redux-saga/effects";
import testSaga from "./testSaga";
// import { apiGet } from "./apiGet";

export default function* rootSaga() {
  yield all([
    // fork(apiGet),
    fork(testSaga)
  ]);
}
