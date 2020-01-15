// redux ducks pattern 구조

import { createAction, handleActions } from "redux-actions";

// 생성자 Type 정의 및 생성자 함수 생성
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const TIMEINCREASE = "counter/TIMEINCREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const timeincrease = createAction(TIMEINCREASE, value => value);

// Redux Store 적용 상태값
const initialState = {
  number: 0
};

// Redux Reducer 기능 정의
export default handleActions(
  {
    [INCREASE]: state => {
      return { number: state.number + 1 };
    },
    [DECREASE]: state => {
      return { number: state.number - 1 };
    },
    [TIMEINCREASE]: (state, { payload: timeN }) => {
      return { number: state.number + timeN };
    }
  },
  initialState
);
