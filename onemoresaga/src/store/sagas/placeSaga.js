import { call, all, takeEvery } from "redux-saga/effects";
import * as actions from "store/actions";
import placeHolderApi from "lib/placeHolderApi";
import { Actions } from "store/actionCreator";

function* handlePlace({ payload }) {
  console.log("handling place saga");
  Actions.getPlacePend(payload);
  const { data, error } = yield call(placeHolderApi, payload);
  console.log(data);

  if (data && !error) {
    Actions.getPlaceSuc(data);
  } else {
    console.log("handlePlace fail");
    Actions.getPlaceFail();
  }
}

export default function* placeSaga() {
  yield all([takeEvery(actions.GET_PLACE, handlePlace)]);
}
