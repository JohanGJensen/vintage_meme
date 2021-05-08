import * as actionType from "./types.js";

export const toggleTitleColor = () => ({
  type: actionType.TOGGLE_TITLE_COLOR,
});

export const writeMemeCaption = (payload) => ({
  type: actionType.WRITE_MEME_CAPTION,
  payload: payload,
});

export const saveMeme = (payload) => ({
  type: actionType.SAVE_MEME,
  payload: payload,
});

export const changeDuration = (payload) => ({
  type: actionType.CHANGE_DURATION,
  payload: payload,
});
