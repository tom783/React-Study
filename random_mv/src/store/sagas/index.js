import { fork, all } from "redux-saga/effects";
import photoSaga from "./photoSaga";
import placeSaga from "./placeSaga";

export default function* rootSaga() {
  yield all([fork(photoSaga), fork(placeSaga)]);
}
