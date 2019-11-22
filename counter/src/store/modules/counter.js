import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const TIMEINCREASE = "counter/TIMEINCREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const timeincrease = createAction(TIMEINCREASE, value => value);

const initialState = {
  number: 0
};

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
