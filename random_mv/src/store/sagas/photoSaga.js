import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actions from "store/actions";
import { getPhotoLib } from "lib/api";
import store from "store";

function* handlePhoto() {
  console.log("handle photo");
  // api를 통한 데이터 요청 및 바인딩
  const { data } = yield call(getPhotoLib);

  if (data) {
    console.log(data);
    // GET_PHOTO_SUC 타입 액션 실행
    store.dispatch({ type: actions.GET_PHOTO_SUC, payload: data.results });
  } else {
    alert("disconnected");
  }
}

export default function* photoSaga() {
  // GET_PHOTO 액션을 감지하면 handlePhoto 함수 실행
  yield all([takeEvery(actions.GET_PHOTO, handlePhoto)]);
}
