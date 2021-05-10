import * as actionType from "./types.js";

export const dragPin = (payload) => ({
  type: actionType.DRAG_PIN,
  payload: payload,
});

export const changeDuration = (payload) => ({
  type: actionType.CHANGE_DURATION,
  payload: payload,
});

export const changeVideo = (payload) => ({
  type: actionType.CHANGE_VIDEO,
  payload: payload,
});
