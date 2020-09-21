import { createAction, createReducer } from "@reduxjs/toolkit";
interface InitState {
  number: number;
  input: string;
}
const initState = {
  number: 0,
  input: "",
};

const TEST = "TEST" as const;
const INPUTTYPE = "INPUTTYPE" as const;

export const testAction = createAction(TEST);
export const inputTestAction = createAction<Object>(INPUTTYPE);

type TestAction = ReturnType<typeof testAction>;
type InputTestAction = ReturnType<typeof inputTestAction>;

const reducer = createReducer<InitState>(initState, {
  [testAction.type]: (state, action) => {
    state.number = state.number + 1;
  },
  [inputTestAction.type]: (state, { payload }) => {
    console.log("INPUTPP", payload);
    console.log("F");
    state.input = payload.value;
  },
});

export type Reducer = ReturnType<typeof reducer>;
export default reducer;
