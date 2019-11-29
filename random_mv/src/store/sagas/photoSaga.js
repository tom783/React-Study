import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actions from "store/actions";
import { getPhotoLib } from "lib/api";
import store from "store";

function* handlePhoto() {
  console.log("handle photo");
  const { data } = yield call(getPhotoLib);

  if (data) {
    console.log(data);
    store.dispatch({ type: actions.GET_PHOTO_SUC, payload: data.results });
  } else {
    alert("disconnected");
  }
}

export default function* photoSaga() {
  yield all([takeEvery(actions.GET_PHOTO, handlePhoto)]);
}
