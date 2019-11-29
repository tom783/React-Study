import { createAction } from "redux-actions";

export const GET_PHOTO = "actions/GET_PHOTO";
export const GET_PHOTO_SUC = "actions/GET_PHOTO_SUC";
export const GET_PHOTO_FAIL = "actions/GET_PHOTO_FAIL";

export const GET_PLACE = "actions/GET_PLACE";
export const GET_PLACE_SUC = "actions/GET_PLACE_SUC";
export const GET_PLACE_FAIL = "actions/GET_PLACE_FAIL";

export const getPhoto = createAction(GET_PHOTO);
export const getPhotoSuc = createAction(GET_PHOTO_SUC);
export const getPhotoFail = createAction(GET_PHOTO_FAIL);

export const getPlace = createAction(GET_PLACE);
export const getPlaceSuc = createAction(GET_PLACE_SUC);
export const getPlaceFail = createAction(GET_PLACE_FAIL);
