import { all, takeEvery, call } from "redux-saga/effects";
import * as actions from "store/actions";
import movieApi from "lib/movieApi";
import { Actions } from "store/actionCreator";

function* handleMoive({ payload }) {
  console.log("handling movie saga");
  Actions.getMoviePend(payload);
  const { data,error } = yield call(movieApi, payload);
  console.log(data,'!!');

  if (data && !error) {
    // store.dispatch({ type: actions.GET_MOVIE_SUCCESS, payload: data.results });
    Actions.getMovieSuc(data.results);
  } else {
    console.log("handleMovie fail");
    Actions.getMovieFail();
  }

}

export default function* movieSaga() {
  yield all([takeEvery(actions.GET_MOVIE, handleMoive)]);
}
