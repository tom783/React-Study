import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as actions from "store/actions";

function getApi(category) {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=1234493630074dbebb52ac55b1bcdf03${category}`
  );
}

function* apiSaga(action) {
  try {
    const res = yield call(getApi, action.payload);
    yield put(actions.getPostSuccess(res));
  } catch (e) {
    yield put(actions.getPostFailure(e));
  }
}

export function* apiGet() {
  yield takeEvery(actions.GET_API, apiSaga);
}
