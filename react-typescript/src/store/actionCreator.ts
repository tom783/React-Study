import { bindActionCreators } from "redux";
import store from "../store";
import * as actions from "./redux";

const { dispatch } = store;
export const Actions = bindActionCreators(actions, dispatch);
