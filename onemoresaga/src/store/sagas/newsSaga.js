import { all, takeEvery, call } from "redux-saga/effects";
import * as actions from "store/actions";
import newsApi from "lib/newsApi";
import { Actions } from "store/actionCreator";

function* handleNews({ payload }) {
  console.log("handling news saga");
  Actions.getNewsPend(payload);
  const { data, error } = yield call(newsApi, payload);

  if (data && !error) {
    Actions.getNewsSuc(data.articles);
  } else {
    console.log("handleNews fail");
    Actions.getNewsFail();
  }
}

export default function* newsSaga() {
  yield all([takeEvery(actions.GET_NEWS, handleNews)]);
}
