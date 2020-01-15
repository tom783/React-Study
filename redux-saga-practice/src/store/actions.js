import { createAction } from "redux-actions";
// import { Actions } from "./actionCreators";

export const GET_API = "apiGet/GET_API";
export const GET_API_SUCCESS = "apiGet/GET_API_SUCCESS";
export const GET_API_FAILURE = "apiGet/GET_API_FAILURE";

export const getPost = createAction(GET_API);
export const getPostSuccess = createAction(GET_API_SUCCESS);
export const getPostFailure = createAction(GET_API_FAILURE);

// function createAction(a,b){
//     return (b) =>{
//         return {payload:b}
//     }
// }

// Actions.getPostSuccess({
//     name:'wrodl'
// });

// {payload:{
//     name:"world"
// }}
